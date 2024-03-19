import init, { main, Session, Input } from "@webonnx/wonnx-wasm";
import * as ort from "onnxruntime-web";
import * as Jimp from 'jimp';
import { Tensor } from 'onnxruntime-web';

export async function inferenceSqueezenet(path: string): Promise<[any,number]> {
  // 1. Convert image to tensor
  const imageTensor = await getImageTensorFromPath(path);
  // 2. Run model
  const [predictions, inferenceTime] = await runSqueezenetModel(imageTensor);
  // 3. Return predictions and the amount of time it took to inference.
  return [predictions, inferenceTime];
}

export async function getImageTensorFromPath(path: string, dims: number[] =  [1, 3, 224, 224]): Promise<Tensor> {
  // 1. load the image  
  var image = await loadImageFromPath(path, dims[2], dims[3]);
  // 2. convert to tensor
  var imageTensor = imageDataToTensor(image, dims);
  // 3. return the tensor
  return imageTensor;
}

async function loadImageFromPath(path: string, width: number = 224, height: number= 224): Promise<Jimp> {
  // Use Jimp to load the image and resize it.
  var imageData = await Jimp.default.read(path).then((imageBuffer: Jimp) => {
    return imageBuffer.resize(width, height);
  });

  return imageData;
}

function imageDataToTensor(image: Jimp, dims: number[]): Tensor {
  // 1. Get buffer data from image and create R, G, and B arrays.
  var imageBufferData = image.bitmap.data;
  const [redArray, greenArray, blueArray] = new Array(new Array<number>(), new Array<number>(), new Array<number>());

  // 2. Loop through the image buffer and extract the R, G, and B channels
  for (let i = 0; i < imageBufferData.length; i += 4) {
    redArray.push(imageBufferData[i]);
    greenArray.push(imageBufferData[i + 1]);
    blueArray.push(imageBufferData[i + 2]);
    // skip data[i + 3] to filter out the alpha channel
  }

  // 3. Concatenate RGB to transpose [224, 224, 3] -> [3, 224, 224] to a number array
  const transposedData = redArray.concat(greenArray).concat(blueArray);

  // 4. convert to float32
  let i, l = transposedData.length; // length, we need this for the loop
  // create the Float32Array size 3 * 224 * 224 for these dimensions output
  const float32Data = new Float32Array(dims[1] * dims[2] * dims[3]);
  for (i = 0; i < l; i++) {
    float32Data[i] = transposedData[i] / 255.0; // convert to float
  }
  // 5. create the tensor object from onnxruntime-web.
  const inputTensor = new Tensor("float32", float32Data, dims);
  return inputTensor;
}

async function fetchBytes(url) {
  const reply = await fetch(url);
  const blob = await reply.arrayBuffer();
  const arr = new Uint8Array(blob);
  return arr;
}

export async function run() {
  try {
    // Load model, labels file and WONNX
    const labels = fetch("/data/labels.txt").then((r) => r.text());
    const [modelBytes, labelsResult] = await Promise.all([
      fetchBytes("/data/resnet.onnx"),
      labels,
    ]);
    console.log("Initialized", {
      modelBytes,
      Session,
      labelsResult,
    });
 
    console.log("Parse labels");
    const labelsList = labelsResult.split(/\n/g);
    console.log({ labelsList });

    console.log("Start inference session", modelBytes);
    const session = await ort.InferenceSession.create("/data/resnet.onnx", {
      executionProviders: ["webgl"],
      graphOptimizationLevel: "all",
    });
  } catch (e) {
    console.log("falha");
    console.error(e, e.toString());
  }
}

async function runInference(session: ort.InferenceSession, preprocessedData: any): Promise<[any, number]> {
  // Get start time to calculate inference time.
  const start = new Date();
  // create feeds with the input name from model export and the preprocessed data.
  const feeds: Record<string, ort.Tensor> = {};
  feeds[session.inputNames[0]] = preprocessedData;
  
  // Run the session inference.
  const outputData = await session.run(feeds);
  // Get the end time to calculate inference time.
  const end = new Date();
  // Convert to seconds.
  const inferenceTime = (end.getTime() - start.getTime())/1000;
  // Get output results with the output name from the model export.
  const output = outputData[session.outputNames[0]];
  //Get the softmax of the output data. The softmax transforms values to be between 0 and 1
  var outputSoftmax = softmax(Array.prototype.slice.call(output.data));
  
  //Get the top 5 results.
  var results = imagenetClassesTopK(outputSoftmax, 5);
  console.log('results: ', results);
  return [results, inferenceTime];
}

//The softmax transforms values to be between 0 and 1
function softmax(resultArray: number[]): any {
  // Get the largest value in the array.
  const largestNumber = Math.max(...resultArray);
  // Apply exponential function to each result item subtracted by the largest number, use reduce to get the previous result number and the current number to sum all the exponentials results.
  const sumOfExp = resultArray.map((resultItem) => Math.exp(resultItem - largestNumber)).reduce((prevNumber, currentNumber) => prevNumber + currentNumber);
  //Normalizes the resultArray by dividing by the sum of all exponentials; this normalization ensures that the sum of the components of the output vector is 1.
  return resultArray.map((resultValue, index) => {
    return Math.exp(resultValue - largestNumber) / sumOfExp;
  });
}
/**
 * Find top k imagenet classes
 */
export function imagenetClassesTopK(classProbabilities: any, k = 5) {
  const probs =
      _.isTypedArray(classProbabilities) ? Array.prototype.slice.call(classProbabilities) : classProbabilities;

  const sorted = _.reverse(_.sortBy(probs.map((prob: any, index: number) => [prob, index]), (probIndex: Array<number> ) => probIndex[0]));

  const topK = _.take(sorted, k).map((probIndex: Array<number>) => {
    const iClass = imagenetClasses[probIndex[1]];
    return {
      id: iClass[0],
      index: parseInt(probIndex[1].toString(), 10),
      name: iClass[1].replace(/_/g, ' '),
      probability: probIndex[0]
    };
  });
  return topK;
}
