// build/worker/shim.mjs
import F from "./3ca52c6ad879da23661ef55cad49310133ee4279-index.wasm";
var k = Object.defineProperty;
var D = (e, t) => {
  for (var n in t)
    k(e, n, { get: t[n], enumerable: true });
};
var g = {};
D(g, { MinifyConfig: () => T, PolishConfig: () => C, RequestRedirect: () => P, __wbg_body_32bf396f33f6f315: () => ce, __wbg_buffer_397eaa4d72ee94dd: () => Me, __wbg_call_346669c262382ad7: () => he, __wbg_cf_525e384aca3c98b3: () => ge, __wbg_constructor_9fe544cc0957fdd0: () => Ee, __wbg_error_4bb6c2a97407129a: () => G, __wbg_formData_4b67d55a0ac11d00: () => le, __wbg_get_4d0f21c2f823742e: () => we, __wbg_get_f3819122d64c04b7: () => re, __wbg_headers_0e6e7dc7c9435be0: () => de, __wbg_instanceof_Error_561efcb1265706d8: () => me, __wbg_instanceof_File_ad24b18c59799a39: () => ne, __wbg_latitude_487b645a452aa03c: () => Z, __wbg_length_1eb8fc608a0d4cdb: () => Fe, __wbg_log_522bdc7197e67ae0: () => ae, __wbg_longitude_02b5ebd3058e5fc6: () => ee, __wbg_method_9145864941f6052c: () => se, __wbg_name_9a3ff1e21a0e3304: () => ve, __wbg_new0_fd3a3a290b25cdac: () => ye, __wbg_new_0b83d3df67ecb33e: () => pe, __wbg_new_3e530029a159ca02: () => oe, __wbg_new_59cb74e423758ede: () => J, __wbg_new_b1d61b5687f5e73a: () => Oe, __wbg_newwithbyteoffsetandlength_4b9b8c4e3f5adbff: () => ke, __wbg_newwithlength_929232475839a482: () => Re, __wbg_newwithoptstrandinit_7f5c3942adf7be33: () => ue, __wbg_newwithoptstreamandinit_79d897054ab89929: () => fe, __wbg_newwithoptu8arrayandinit_f6fa61fc3a0621f7: () => ie, __wbg_region_24b2f8646c3851e6: () => te, __wbg_resolve_d23068002f584f22: () => Se, __wbg_set_5c8272b869ae9cb2: () => _e, __wbg_set_82a4e8a85e31ac42: () => Ie, __wbg_set_969ad0a60e51d320: () => De, __wbg_stack_558ba5917b466edd: () => V, __wbg_then_2fcac196782070cc: () => Te, __wbg_then_8c2d62e8ae5978f7: () => Ae, __wbg_toString_0ef1ea57b966aed4: () => xe, __wbg_toString_646e437de608a0a1: () => je, __wbg_url_cd4d648542769703: () => be, __wbindgen_cb_drop: () => K, __wbindgen_closure_wrapper405: () => Ne, __wbindgen_debug_string: () => $e, __wbindgen_is_undefined: () => Q, __wbindgen_memory: () => Ue, __wbindgen_number_new: () => X, __wbindgen_object_clone_ref: () => Y, __wbindgen_object_drop_ref: () => z, __wbindgen_string_get: () => B, __wbindgen_string_new: () => H, __wbindgen_throw: () => Le, fetch: () => A });
var R = new WebAssembly.Instance(F, { "./index_bg.js": g });
var i = R.exports;
var d = new Array(32).fill(void 0);
d.push(void 0, null, true, false);
function _(e) {
  return d[e];
}
var x = d.length;
function I(e) {
  e < 36 || (d[e] = x, x = e);
}
function h(e) {
  let t = _(e);
  return I(e), t;
}
var $ = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
var M = new $("utf-8", { ignoreBOM: true, fatal: true });
M.decode();
var y = null;
function E() {
  return (y === null || y.buffer !== i.memory.buffer) && (y = new Uint8Array(i.memory.buffer)), y;
}
function w(e, t) {
  return M.decode(E().subarray(e, e + t));
}
function c(e) {
  x === d.length && d.push(d.length + 1);
  let t = x;
  return x = d[t], d[t] = e, t;
}
var b = 0;
var L = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
var O = new L("utf-8");
var U = typeof O.encodeInto == "function" ? function(e, t) {
  return O.encodeInto(e, t);
} : function(e, t) {
  let n = O.encode(e);
  return t.set(n), { read: e.length, written: n.length };
};
function p(e, t, n) {
  if (n === void 0) {
    let f = O.encode(e), m = t(f.length);
    return E().subarray(m, m + f.length).set(f), b = f.length, m;
  }
  let r = e.length, o = t(r), s = E(), u = 0;
  for (; u < r; u++) {
    let f = e.charCodeAt(u);
    if (f > 127)
      break;
    s[o + u] = f;
  }
  if (u !== r) {
    u !== 0 && (e = e.slice(u)), o = n(o, r, r = u + e.length * 3);
    let f = E().subarray(o + u, o + r), m = U(e, f);
    u += m.written;
  }
  return b = u, o;
}
function v(e) {
  return e == null;
}
var j = null;
function a() {
  return (j === null || j.buffer !== i.memory.buffer) && (j = new Int32Array(i.memory.buffer)), j;
}
function S(e) {
  let t = typeof e;
  if (t == "number" || t == "boolean" || e == null)
    return `${e}`;
  if (t == "string")
    return `"${e}"`;
  if (t == "symbol") {
    let o = e.description;
    return o == null ? "Symbol" : `Symbol(${o})`;
  }
  if (t == "function") {
    let o = e.name;
    return typeof o == "string" && o.length > 0 ? `Function(${o})` : "Function";
  }
  if (Array.isArray(e)) {
    let o = e.length, s = "[";
    o > 0 && (s += S(e[0]));
    for (let u = 1; u < o; u++)
      s += ", " + S(e[u]);
    return s += "]", s;
  }
  let n = /\[object ([^\]]+)\]/.exec(toString.call(e)), r;
  if (n.length > 1)
    r = n[1];
  else
    return toString.call(e);
  if (r == "Object")
    try {
      return "Object(" + JSON.stringify(e) + ")";
    } catch {
      return "Object";
    }
  return e instanceof Error ? `${e.name}: ${e.message}
${e.stack}` : r;
}
function N(e, t, n, r) {
  let o = { a: e, b: t, cnt: 1, dtor: n }, s = (...u) => {
    o.cnt++;
    let f = o.a;
    o.a = 0;
    try {
      return r(f, o.b, ...u);
    } finally {
      --o.cnt === 0 ? i.__wbindgen_export_2.get(o.dtor)(f, o.b) : o.a = f;
    }
  };
  return s.original = o, s;
}
function W(e, t, n) {
  i.wasm_bindgen__convert__closures__invoke1_mut__he5644a6ffb67d9d9(e, t, c(n));
}
function A(e, t, n) {
  var r = i.fetch(c(e), c(t), c(n));
  return h(r);
}
function l(e, t) {
  try {
    return e.apply(this, t);
  } catch (n) {
    i.__wbindgen_exn_store(c(n));
  }
}
function q(e, t, n, r) {
  i.wasm_bindgen__convert__closures__invoke2_mut__h2596e59f0b2b157c(e, t, c(n), c(r));
}
var C = Object.freeze({ Off: 0, 0: "Off", Lossy: 1, 1: "Lossy", Lossless: 2, 2: "Lossless" });
var P = Object.freeze({ Error: 0, 0: "Error", Follow: 1, 1: "Follow", Manual: 2, 2: "Manual" });
var T = class {
  __destroy_into_raw() {
    let t = this.ptr;
    return this.ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    i.__wbg_minifyconfig_free(t);
  }
  get js() {
    var t = i.__wbg_get_minifyconfig_js(this.ptr);
    return t !== 0;
  }
  set js(t) {
    i.__wbg_set_minifyconfig_js(this.ptr, t);
  }
  get html() {
    var t = i.__wbg_get_minifyconfig_html(this.ptr);
    return t !== 0;
  }
  set html(t) {
    i.__wbg_set_minifyconfig_html(this.ptr, t);
  }
  get css() {
    var t = i.__wbg_get_minifyconfig_css(this.ptr);
    return t !== 0;
  }
  set css(t) {
    i.__wbg_set_minifyconfig_css(this.ptr, t);
  }
};
function z(e) {
  h(e);
}
function H(e, t) {
  var n = w(e, t);
  return c(n);
}
function B(e, t) {
  let n = _(t);
  var r = typeof n == "string" ? n : void 0, o = v(r) ? 0 : p(r, i.__wbindgen_malloc, i.__wbindgen_realloc), s = b;
  a()[e / 4 + 1] = s, a()[e / 4 + 0] = o;
}
function J() {
  var e = new Error();
  return c(e);
}
function V(e, t) {
  var n = _(t).stack, r = p(n, i.__wbindgen_malloc, i.__wbindgen_realloc), o = b;
  a()[e / 4 + 1] = o, a()[e / 4 + 0] = r;
}
function G(e, t) {
  try {
    console.error(w(e, t));
  } finally {
    i.__wbindgen_free(e, t);
  }
}
function K(e) {
  let t = h(e).original;
  if (t.cnt-- == 1)
    return t.a = 0, true;
  var n = false;
  return n;
}
function Q(e) {
  var t = _(e) === void 0;
  return t;
}
function X(e) {
  var t = e;
  return c(t);
}
function Y(e) {
  var t = _(e);
  return c(t);
}
function Z(e, t) {
  var n = _(t).latitude, r = v(n) ? 0 : p(n, i.__wbindgen_malloc, i.__wbindgen_realloc), o = b;
  a()[e / 4 + 1] = o, a()[e / 4 + 0] = r;
}
function ee(e, t) {
  var n = _(t).longitude, r = v(n) ? 0 : p(n, i.__wbindgen_malloc, i.__wbindgen_realloc), o = b;
  a()[e / 4 + 1] = o, a()[e / 4 + 0] = r;
}
function te(e, t) {
  var n = _(t).region, r = v(n) ? 0 : p(n, i.__wbindgen_malloc, i.__wbindgen_realloc), o = b;
  a()[e / 4 + 1] = o, a()[e / 4 + 0] = r;
}
function ne(e) {
  var t = _(e) instanceof File;
  return t;
}
function re(e, t, n) {
  var r = _(e).get(w(t, n));
  return c(r);
}
function oe() {
  return l(function() {
    var e = new Headers();
    return c(e);
  }, arguments);
}
function _e() {
  return l(function(e, t, n, r, o) {
    _(e).set(w(t, n), w(r, o));
  }, arguments);
}
function ce(e) {
  var t = _(e).body;
  return v(t) ? 0 : c(t);
}
function ie() {
  return l(function(e, t) {
    var n = new Response(h(e), _(t));
    return c(n);
  }, arguments);
}
function ue() {
  return l(function(e, t, n) {
    var r = new Response(e === 0 ? void 0 : w(e, t), _(n));
    return c(r);
  }, arguments);
}
function fe() {
  return l(function(e, t) {
    var n = new Response(h(e), _(t));
    return c(n);
  }, arguments);
}
function ae(e, t) {
  console.log(w(e, t));
}
function se(e, t) {
  var n = _(t).method, r = p(n, i.__wbindgen_malloc, i.__wbindgen_realloc), o = b;
  a()[e / 4 + 1] = o, a()[e / 4 + 0] = r;
}
function be(e, t) {
  var n = _(t).url, r = p(n, i.__wbindgen_malloc, i.__wbindgen_realloc), o = b;
  a()[e / 4 + 1] = o, a()[e / 4 + 0] = r;
}
function de(e) {
  var t = _(e).headers;
  return c(t);
}
function le() {
  return l(function(e) {
    var t = _(e).formData();
    return c(t);
  }, arguments);
}
function ge(e) {
  var t = _(e).cf;
  return c(t);
}
function we() {
  return l(function(e, t) {
    var n = Reflect.get(_(e), _(t));
    return c(n);
  }, arguments);
}
function pe() {
  var e = new Object();
  return c(e);
}
function me(e) {
  var t = _(e) instanceof Error;
  return t;
}
function xe(e) {
  var t = _(e).toString();
  return c(t);
}
function he() {
  return l(function(e, t, n) {
    var r = _(e).call(_(t), _(n));
    return c(r);
  }, arguments);
}
function ve(e) {
  var t = _(e).name;
  return c(t);
}
function ye() {
  var e = /* @__PURE__ */ new Date();
  return c(e);
}
function je(e) {
  var t = _(e).toString();
  return c(t);
}
function Ee(e) {
  var t = _(e).constructor;
  return c(t);
}
function Oe(e, t) {
  try {
    var n = { a: e, b: t }, r = (s, u) => {
      let f = n.a;
      n.a = 0;
      try {
        return q(f, n.b, s, u);
      } finally {
        n.a = f;
      }
    }, o = new Promise(r);
    return c(o);
  } finally {
    n.a = n.b = 0;
  }
}
function Se(e) {
  var t = Promise.resolve(_(e));
  return c(t);
}
function Te(e, t) {
  var n = _(e).then(_(t));
  return c(n);
}
function Ae(e, t, n) {
  var r = _(e).then(_(t), _(n));
  return c(r);
}
function Me(e) {
  var t = _(e).buffer;
  return c(t);
}
function ke(e, t, n) {
  var r = new Uint8Array(_(e), t >>> 0, n >>> 0);
  return c(r);
}
function De(e, t, n) {
  _(e).set(_(t), n >>> 0);
}
function Fe(e) {
  var t = _(e).length;
  return t;
}
function Re(e) {
  var t = new Uint8Array(e >>> 0);
  return c(t);
}
function Ie() {
  return l(function(e, t, n) {
    var r = Reflect.set(_(e), _(t), _(n));
    return r;
  }, arguments);
}
function $e(e, t) {
  var n = S(_(t)), r = p(n, i.__wbindgen_malloc, i.__wbindgen_realloc), o = b;
  a()[e / 4 + 1] = o, a()[e / 4 + 0] = r;
}
function Le(e, t) {
  throw new Error(w(e, t));
}
function Ue() {
  var e = i.memory;
  return c(e);
}
function Ne(e, t, n) {
  var r = N(e, t, 74, W);
  return c(r);
}
var ze = { fetch: A, scheduled: void 0 };
export {
  T as MinifyConfig,
  C as PolishConfig,
  P as RequestRedirect,
  ce as __wbg_body_32bf396f33f6f315,
  Me as __wbg_buffer_397eaa4d72ee94dd,
  he as __wbg_call_346669c262382ad7,
  ge as __wbg_cf_525e384aca3c98b3,
  Ee as __wbg_constructor_9fe544cc0957fdd0,
  G as __wbg_error_4bb6c2a97407129a,
  le as __wbg_formData_4b67d55a0ac11d00,
  we as __wbg_get_4d0f21c2f823742e,
  re as __wbg_get_f3819122d64c04b7,
  de as __wbg_headers_0e6e7dc7c9435be0,
  me as __wbg_instanceof_Error_561efcb1265706d8,
  ne as __wbg_instanceof_File_ad24b18c59799a39,
  Z as __wbg_latitude_487b645a452aa03c,
  Fe as __wbg_length_1eb8fc608a0d4cdb,
  ae as __wbg_log_522bdc7197e67ae0,
  ee as __wbg_longitude_02b5ebd3058e5fc6,
  se as __wbg_method_9145864941f6052c,
  ve as __wbg_name_9a3ff1e21a0e3304,
  ye as __wbg_new0_fd3a3a290b25cdac,
  pe as __wbg_new_0b83d3df67ecb33e,
  oe as __wbg_new_3e530029a159ca02,
  J as __wbg_new_59cb74e423758ede,
  Oe as __wbg_new_b1d61b5687f5e73a,
  ke as __wbg_newwithbyteoffsetandlength_4b9b8c4e3f5adbff,
  Re as __wbg_newwithlength_929232475839a482,
  ue as __wbg_newwithoptstrandinit_7f5c3942adf7be33,
  fe as __wbg_newwithoptstreamandinit_79d897054ab89929,
  ie as __wbg_newwithoptu8arrayandinit_f6fa61fc3a0621f7,
  te as __wbg_region_24b2f8646c3851e6,
  Se as __wbg_resolve_d23068002f584f22,
  _e as __wbg_set_5c8272b869ae9cb2,
  Ie as __wbg_set_82a4e8a85e31ac42,
  De as __wbg_set_969ad0a60e51d320,
  V as __wbg_stack_558ba5917b466edd,
  Te as __wbg_then_2fcac196782070cc,
  Ae as __wbg_then_8c2d62e8ae5978f7,
  xe as __wbg_toString_0ef1ea57b966aed4,
  je as __wbg_toString_646e437de608a0a1,
  be as __wbg_url_cd4d648542769703,
  K as __wbindgen_cb_drop,
  Ne as __wbindgen_closure_wrapper405,
  $e as __wbindgen_debug_string,
  Q as __wbindgen_is_undefined,
  Ue as __wbindgen_memory,
  X as __wbindgen_number_new,
  Y as __wbindgen_object_clone_ref,
  z as __wbindgen_object_drop_ref,
  B as __wbindgen_string_get,
  H as __wbindgen_string_new,
  Le as __wbindgen_throw,
  ze as default,
  A as fetch
};
//# sourceMappingURL=shim.js.map
