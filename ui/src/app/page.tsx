"use client";
import Image from "next/image";
import init, { Session, Input } from "@webonnx/wonnx-wasm";
import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
} from "@capacitor/camera";
import { useState } from "react";
import { run } from "./../services/model";

function useWebcam() {
  const [image, setImage] = useState<Photo | null>(null);
  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
    });
    setImage(image);
    return image;
  };

  return { takePicture, image };
}

export default function Home() {
  const { image, takePicture } = useWebcam();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {image && (
        <div className="w-72 h-72">
          <img src={image.webPath} alt="Captured" className="w-72 h-72" />
        </div>
      )}
      <button onClick={() => takePicture()}>Tirar Foto</button>
    </main>
  );
}
