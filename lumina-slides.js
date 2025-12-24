var Of = Object.defineProperty;
var Pf = (e, t, n) => t in e ? Of(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var zi = (e, t, n) => Pf(e, typeof t != "symbol" ? t + "" : t, n);
/**
* @vue/shared v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Ts(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const at = {}, Fn = [], Pe = () => {
}, cl = () => !1, cr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ss = (e) => e.startsWith("onUpdate:"), Tt = Object.assign, Cs = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Af = Object.prototype.hasOwnProperty, et = (e, t) => Af.call(e, t), U = Array.isArray, Ln = (e) => hr(e) === "[object Map]", hl = (e) => hr(e) === "[object Set]", K = (e) => typeof e == "function", yt = (e) => typeof e == "string", He = (e) => typeof e == "symbol", ut = (e) => e !== null && typeof e == "object", dl = (e) => (ut(e) || K(e)) && K(e.then) && K(e.catch), pl = Object.prototype.toString, hr = (e) => pl.call(e), Ef = (e) => hr(e).slice(8, -1), _l = (e) => hr(e) === "[object Object]", Os = (e) => yt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ai = /* @__PURE__ */ Ts(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), dr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Mf = /-\w/g, fe = dr(
  (e) => e.replace(Mf, (t) => t.slice(1).toUpperCase())
), kf = /\B([A-Z])/g, Pn = dr(
  (e) => e.replace(kf, "-$1").toLowerCase()
), pr = dr((e) => e.charAt(0).toUpperCase() + e.slice(1)), Mr = dr(
  (e) => e ? `on${pr(e)}` : ""
), Qe = (e, t) => !Object.is(e, t), kr = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, gl = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, Df = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Rf = (e) => {
  const t = yt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let lo;
const _r = () => lo || (lo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Di(e) {
  if (U(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], r = yt(i) ? Nf(i) : Di(i);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else if (yt(e) || ut(e))
    return e;
}
const If = /;(?![^(]*\))/g, Ff = /:([^]+)/, Lf = /\/\*[^]*?\*\//g;
function Nf(e) {
  const t = {};
  return e.replace(Lf, "").split(If).forEach((n) => {
    if (n) {
      const i = n.split(Ff);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function ct(e) {
  let t = "";
  if (yt(e))
    t = e;
  else if (U(e))
    for (let n = 0; n < e.length; n++) {
      const i = ct(e[n]);
      i && (t += i + " ");
    }
  else if (ut(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const $f = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", zf = /* @__PURE__ */ Ts($f);
function ml(e) {
  return !!e || e === "";
}
const yl = (e) => !!(e && e.__v_isRef === !0), ft = (e) => yt(e) ? e : e == null ? "" : U(e) || ut(e) && (e.toString === pl || !K(e.toString)) ? yl(e) ? ft(e.value) : JSON.stringify(e, vl, 2) : String(e), vl = (e, t) => yl(t) ? vl(e, t.value) : Ln(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, r], s) => (n[Dr(i, s) + " =>"] = r, n),
    {}
  )
} : hl(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Dr(n))
} : He(t) ? Dr(t) : ut(t) && !U(t) && !_l(t) ? String(t) : t, Dr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    He(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let zt;
class Bf {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = zt, !t && zt && (this.index = (zt.scopes || (zt.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = zt;
      try {
        return zt = this, t();
      } finally {
        zt = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = zt, zt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (zt = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, i;
      for (n = 0, i = this.effects.length; n < i; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, i = this.cleanups.length; n < i; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, i = this.scopes.length; n < i; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Vf() {
  return zt;
}
let lt;
const Rr = /* @__PURE__ */ new WeakSet();
class xl {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, zt && zt.active && zt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Rr.has(this) && (Rr.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || wl(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ao(this), Tl(this);
    const t = lt, n = he;
    lt = this, he = !0;
    try {
      return this.fn();
    } finally {
      Sl(this), lt = t, he = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Es(t);
      this.deps = this.depsTail = void 0, ao(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Rr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Zr(this) && this.run();
  }
  get dirty() {
    return Zr(this);
  }
}
let bl = 0, fi, ui;
function wl(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = ui, ui = e;
    return;
  }
  e.next = fi, fi = e;
}
function Ps() {
  bl++;
}
function As() {
  if (--bl > 0)
    return;
  if (ui) {
    let t = ui;
    for (ui = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; fi; ) {
    let t = fi;
    for (fi = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (i) {
          e || (e = i);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Tl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Sl(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const r = i.prevDep;
    i.version === -1 ? (i === n && (n = r), Es(i), jf(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = r;
  }
  e.deps = t, e.depsTail = n;
}
function Zr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Cl(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Cl(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === mi) || (e.globalVersion = mi, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Zr(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = lt, i = he;
  lt = e, he = !0;
  try {
    Tl(e);
    const r = e.fn(e._value);
    (t.version === 0 || Qe(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    lt = n, he = i, Sl(e), e.flags &= -3;
  }
}
function Es(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: r } = e;
  if (i && (i.nextSub = r, e.prevSub = void 0), r && (r.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      Es(s, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function jf(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let he = !0;
const Ol = [];
function $e() {
  Ol.push(he), he = !1;
}
function ze() {
  const e = Ol.pop();
  he = e === void 0 ? !0 : e;
}
function ao(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = lt;
    lt = void 0;
    try {
      t();
    } finally {
      lt = n;
    }
  }
}
let mi = 0;
class Hf {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ms {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!lt || !he || lt === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== lt)
      n = this.activeLink = new Hf(lt, this), lt.deps ? (n.prevDep = lt.depsTail, lt.depsTail.nextDep = n, lt.depsTail = n) : lt.deps = lt.depsTail = n, Pl(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = lt.depsTail, n.nextDep = void 0, lt.depsTail.nextDep = n, lt.depsTail = n, lt.deps === n && (lt.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, mi++, this.notify(t);
  }
  notify(t) {
    Ps();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      As();
    }
  }
}
function Pl(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        Pl(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Qr = /* @__PURE__ */ new WeakMap(), bn = /* @__PURE__ */ Symbol(
  ""
), ts = /* @__PURE__ */ Symbol(
  ""
), yi = /* @__PURE__ */ Symbol(
  ""
);
function Ot(e, t, n) {
  if (he && lt) {
    let i = Qr.get(e);
    i || Qr.set(e, i = /* @__PURE__ */ new Map());
    let r = i.get(n);
    r || (i.set(n, r = new Ms()), r.map = i, r.key = n), r.track();
  }
}
function Ne(e, t, n, i, r, s) {
  const o = Qr.get(e);
  if (!o) {
    mi++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if (Ps(), t === "clear")
    o.forEach(l);
  else {
    const a = U(e), u = a && Os(n);
    if (a && n === "length") {
      const f = Number(i);
      o.forEach((c, d) => {
        (d === "length" || d === yi || !He(d) && d >= f) && l(c);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), u && l(o.get(yi)), t) {
        case "add":
          a ? u && l(o.get("length")) : (l(o.get(bn)), Ln(e) && l(o.get(ts)));
          break;
        case "delete":
          a || (l(o.get(bn)), Ln(e) && l(o.get(ts)));
          break;
        case "set":
          Ln(e) && l(o.get(bn));
          break;
      }
  }
  As();
}
function En(e) {
  const t = tt(e);
  return t === e ? t : (Ot(t, "iterate", yi), ae(e) ? t : t.map(de));
}
function gr(e) {
  return Ot(e = tt(e), "iterate", yi), e;
}
function Ke(e, t) {
  return Be(e) ? wn(e) ? Un(de(t)) : Un(t) : de(t);
}
const Uf = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ir(this, Symbol.iterator, (e) => Ke(this, e));
  },
  concat(...e) {
    return En(this).concat(
      ...e.map((t) => U(t) ? En(t) : t)
    );
  },
  entries() {
    return Ir(this, "entries", (e) => (e[1] = Ke(this, e[1]), e));
  },
  every(e, t) {
    return ke(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return ke(
      this,
      "filter",
      e,
      t,
      (n) => n.map((i) => Ke(this, i)),
      arguments
    );
  },
  find(e, t) {
    return ke(
      this,
      "find",
      e,
      t,
      (n) => Ke(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return ke(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return ke(
      this,
      "findLast",
      e,
      t,
      (n) => Ke(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return ke(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return ke(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Fr(this, "includes", e);
  },
  indexOf(...e) {
    return Fr(this, "indexOf", e);
  },
  join(e) {
    return En(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Fr(this, "lastIndexOf", e);
  },
  map(e, t) {
    return ke(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return ei(this, "pop");
  },
  push(...e) {
    return ei(this, "push", e);
  },
  reduce(e, ...t) {
    return fo(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return fo(this, "reduceRight", e, t);
  },
  shift() {
    return ei(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return ke(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return ei(this, "splice", e);
  },
  toReversed() {
    return En(this).toReversed();
  },
  toSorted(e) {
    return En(this).toSorted(e);
  },
  toSpliced(...e) {
    return En(this).toSpliced(...e);
  },
  unshift(...e) {
    return ei(this, "unshift", e);
  },
  values() {
    return Ir(this, "values", (e) => Ke(this, e));
  }
};
function Ir(e, t, n) {
  const i = gr(e), r = i[t]();
  return i !== e && !ae(e) && (r._next = r.next, r.next = () => {
    const s = r._next();
    return s.done || (s.value = n(s.value)), s;
  }), r;
}
const Wf = Array.prototype;
function ke(e, t, n, i, r, s) {
  const o = gr(e), l = o !== e && !ae(e), a = o[t];
  if (a !== Wf[t]) {
    const c = a.apply(e, s);
    return l ? de(c) : c;
  }
  let u = n;
  o !== e && (l ? u = function(c, d) {
    return n.call(this, Ke(e, c), d, e);
  } : n.length > 2 && (u = function(c, d) {
    return n.call(this, c, d, e);
  }));
  const f = a.call(o, u, i);
  return l && r ? r(f) : f;
}
function fo(e, t, n, i) {
  const r = gr(e);
  let s = n;
  return r !== e && (ae(e) ? n.length > 3 && (s = function(o, l, a) {
    return n.call(this, o, l, a, e);
  }) : s = function(o, l, a) {
    return n.call(this, o, Ke(e, l), a, e);
  }), r[t](s, ...i);
}
function Fr(e, t, n) {
  const i = tt(e);
  Ot(i, "iterate", yi);
  const r = i[t](...n);
  return (r === -1 || r === !1) && Rs(n[0]) ? (n[0] = tt(n[0]), i[t](...n)) : r;
}
function ei(e, t, n = []) {
  $e(), Ps();
  const i = tt(e)[t].apply(e, n);
  return As(), ze(), i;
}
const Kf = /* @__PURE__ */ Ts("__proto__,__v_isRef,__isVue"), Al = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(He)
);
function qf(e) {
  He(e) || (e = String(e));
  const t = tt(this);
  return Ot(t, "has", e), t.hasOwnProperty(e);
}
class El {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, i) {
    if (n === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, s = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return s;
    if (n === "__v_raw")
      return i === (r ? s ? iu : Rl : s ? Dl : kl).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const o = U(t);
    if (!r) {
      let a;
      if (o && (a = Uf[n]))
        return a;
      if (n === "hasOwnProperty")
        return qf;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      kt(t) ? t : i
    );
    if ((He(n) ? Al.has(n) : Kf(n)) || (r || Ot(t, "get", n), s))
      return l;
    if (kt(l)) {
      const a = o && Os(n) ? l : l.value;
      return r && ut(a) ? Xi(a) : a;
    }
    return ut(l) ? r ? Xi(l) : mr(l) : l;
  }
}
class Ml extends El {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, r) {
    let s = t[n];
    const o = U(t) && Os(n);
    if (!this._isShallow) {
      const u = Be(s);
      if (!ae(i) && !Be(i) && (s = tt(s), i = tt(i)), !o && kt(s) && !kt(i))
        return u || (s.value = i), !0;
    }
    const l = o ? Number(n) < t.length : et(t, n), a = Reflect.set(
      t,
      n,
      i,
      kt(t) ? t : r
    );
    return t === tt(r) && (l ? Qe(i, s) && Ne(t, "set", n, i) : Ne(t, "add", n, i)), a;
  }
  deleteProperty(t, n) {
    const i = et(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && i && Ne(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!He(n) || !Al.has(n)) && Ot(t, "has", n), i;
  }
  ownKeys(t) {
    return Ot(
      t,
      "iterate",
      U(t) ? "length" : bn
    ), Reflect.ownKeys(t);
  }
}
class Yf extends El {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const Gf = /* @__PURE__ */ new Ml(), Xf = /* @__PURE__ */ new Yf(), Jf = /* @__PURE__ */ new Ml(!0);
const es = (e) => e, Bi = (e) => Reflect.getPrototypeOf(e);
function Zf(e, t, n) {
  return function(...i) {
    const r = this.__v_raw, s = tt(r), o = Ln(s), l = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, u = r[e](...i), f = n ? es : t ? Un : de;
    return !t && Ot(
      s,
      "iterate",
      a ? ts : bn
    ), {
      // iterator protocol
      next() {
        const { value: c, done: d } = u.next();
        return d ? { value: c, done: d } : {
          value: l ? [f(c[0]), f(c[1])] : f(c),
          done: d
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Vi(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Qf(e, t) {
  const n = {
    get(r) {
      const s = this.__v_raw, o = tt(s), l = tt(r);
      e || (Qe(r, l) && Ot(o, "get", r), Ot(o, "get", l));
      const { has: a } = Bi(o), u = t ? es : e ? Un : de;
      if (a.call(o, r))
        return u(s.get(r));
      if (a.call(o, l))
        return u(s.get(l));
      s !== o && s.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && Ot(tt(r), "iterate", bn), r.size;
    },
    has(r) {
      const s = this.__v_raw, o = tt(s), l = tt(r);
      return e || (Qe(r, l) && Ot(o, "has", r), Ot(o, "has", l)), r === l ? s.has(r) : s.has(r) || s.has(l);
    },
    forEach(r, s) {
      const o = this, l = o.__v_raw, a = tt(l), u = t ? es : e ? Un : de;
      return !e && Ot(a, "iterate", bn), l.forEach((f, c) => r.call(s, u(f), u(c), o));
    }
  };
  return Tt(
    n,
    e ? {
      add: Vi("add"),
      set: Vi("set"),
      delete: Vi("delete"),
      clear: Vi("clear")
    } : {
      add(r) {
        !t && !ae(r) && !Be(r) && (r = tt(r));
        const s = tt(this);
        return Bi(s).has.call(s, r) || (s.add(r), Ne(s, "add", r, r)), this;
      },
      set(r, s) {
        !t && !ae(s) && !Be(s) && (s = tt(s));
        const o = tt(this), { has: l, get: a } = Bi(o);
        let u = l.call(o, r);
        u || (r = tt(r), u = l.call(o, r));
        const f = a.call(o, r);
        return o.set(r, s), u ? Qe(s, f) && Ne(o, "set", r, s) : Ne(o, "add", r, s), this;
      },
      delete(r) {
        const s = tt(this), { has: o, get: l } = Bi(s);
        let a = o.call(s, r);
        a || (r = tt(r), a = o.call(s, r)), l && l.call(s, r);
        const u = s.delete(r);
        return a && Ne(s, "delete", r, void 0), u;
      },
      clear() {
        const r = tt(this), s = r.size !== 0, o = r.clear();
        return s && Ne(
          r,
          "clear",
          void 0,
          void 0
        ), o;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    n[r] = Zf(r, e, t);
  }), n;
}
function ks(e, t) {
  const n = Qf(e, t);
  return (i, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? i : Reflect.get(
    et(n, r) && r in i ? n : i,
    r,
    s
  );
}
const tu = {
  get: /* @__PURE__ */ ks(!1, !1)
}, eu = {
  get: /* @__PURE__ */ ks(!1, !0)
}, nu = {
  get: /* @__PURE__ */ ks(!0, !1)
};
const kl = /* @__PURE__ */ new WeakMap(), Dl = /* @__PURE__ */ new WeakMap(), Rl = /* @__PURE__ */ new WeakMap(), iu = /* @__PURE__ */ new WeakMap();
function ru(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function su(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ru(Ef(e));
}
function mr(e) {
  return Be(e) ? e : Ds(
    e,
    !1,
    Gf,
    tu,
    kl
  );
}
function ou(e) {
  return Ds(
    e,
    !1,
    Jf,
    eu,
    Dl
  );
}
function Xi(e) {
  return Ds(
    e,
    !0,
    Xf,
    nu,
    Rl
  );
}
function Ds(e, t, n, i, r) {
  if (!ut(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = su(e);
  if (s === 0)
    return e;
  const o = r.get(e);
  if (o)
    return o;
  const l = new Proxy(
    e,
    s === 2 ? i : n
  );
  return r.set(e, l), l;
}
function wn(e) {
  return Be(e) ? wn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Be(e) {
  return !!(e && e.__v_isReadonly);
}
function ae(e) {
  return !!(e && e.__v_isShallow);
}
function Rs(e) {
  return e ? !!e.__v_raw : !1;
}
function tt(e) {
  const t = e && e.__v_raw;
  return t ? tt(t) : e;
}
function lu(e) {
  return !et(e, "__v_skip") && Object.isExtensible(e) && gl(e, "__v_skip", !0), e;
}
const de = (e) => ut(e) ? mr(e) : e, Un = (e) => ut(e) ? Xi(e) : e;
function kt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Il(e) {
  return au(e, !1);
}
function au(e, t) {
  return kt(e) ? e : new fu(e, t);
}
class fu {
  constructor(t, n) {
    this.dep = new Ms(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : tt(t), this._value = n ? t : de(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || ae(t) || Be(t);
    t = i ? t : tt(t), Qe(t, n) && (this._rawValue = t, this._value = i ? t : de(t), this.dep.trigger());
  }
}
function xe(e) {
  return kt(e) ? e.value : e;
}
const uu = {
  get: (e, t, n) => t === "__v_raw" ? e : xe(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const r = e[t];
    return kt(r) && !kt(n) ? (r.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function Fl(e) {
  return wn(e) ? e : new Proxy(e, uu);
}
class cu {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ms(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = mi - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    lt !== this)
      return wl(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Cl(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function hu(e, t, n = !1) {
  let i, r;
  return K(e) ? i = e : (i = e.get, r = e.set), new cu(i, r, n);
}
const ji = {}, Ji = /* @__PURE__ */ new WeakMap();
let mn;
function du(e, t = !1, n = mn) {
  if (n) {
    let i = Ji.get(n);
    i || Ji.set(n, i = []), i.push(e);
  }
}
function pu(e, t, n = at) {
  const { immediate: i, deep: r, once: s, scheduler: o, augmentJob: l, call: a } = n, u = (x) => r ? x : ae(x) || r === !1 || r === 0 ? Ge(x, 1) : Ge(x);
  let f, c, d, h, m = !1, p = !1;
  if (kt(e) ? (c = () => e.value, m = ae(e)) : wn(e) ? (c = () => u(e), m = !0) : U(e) ? (p = !0, m = e.some((x) => wn(x) || ae(x)), c = () => e.map((x) => {
    if (kt(x))
      return x.value;
    if (wn(x))
      return u(x);
    if (K(x))
      return a ? a(x, 2) : x();
  })) : K(e) ? t ? c = a ? () => a(e, 2) : e : c = () => {
    if (d) {
      $e();
      try {
        d();
      } finally {
        ze();
      }
    }
    const x = mn;
    mn = f;
    try {
      return a ? a(e, 3, [h]) : e(h);
    } finally {
      mn = x;
    }
  } : c = Pe, t && r) {
    const x = c, y = r === !0 ? 1 / 0 : r;
    c = () => Ge(x(), y);
  }
  const v = Vf(), b = () => {
    f.stop(), v && v.active && Cs(v.effects, f);
  };
  if (s && t) {
    const x = t;
    t = (...y) => {
      x(...y), b();
    };
  }
  let T = p ? new Array(e.length).fill(ji) : ji;
  const C = (x) => {
    if (!(!(f.flags & 1) || !f.dirty && !x))
      if (t) {
        const y = f.run();
        if (r || m || (p ? y.some((O, M) => Qe(O, T[M])) : Qe(y, T))) {
          d && d();
          const O = mn;
          mn = f;
          try {
            const M = [
              y,
              // pass undefined as the old value when it's changed for the first time
              T === ji ? void 0 : p && T[0] === ji ? [] : T,
              h
            ];
            T = y, a ? a(t, 3, M) : (
              // @ts-expect-error
              t(...M)
            );
          } finally {
            mn = O;
          }
        }
      } else
        f.run();
  };
  return l && l(C), f = new xl(c), f.scheduler = o ? () => o(C, !1) : C, h = (x) => du(x, !1, f), d = f.onStop = () => {
    const x = Ji.get(f);
    if (x) {
      if (a)
        a(x, 4);
      else
        for (const y of x) y();
      Ji.delete(f);
    }
  }, t ? i ? C(!0) : T = f.run() : o ? o(C.bind(null, !0), !0) : f.run(), b.pause = f.pause.bind(f), b.resume = f.resume.bind(f), b.stop = b, b;
}
function Ge(e, t = 1 / 0, n) {
  if (t <= 0 || !ut(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, kt(e))
    Ge(e.value, t, n);
  else if (U(e))
    for (let i = 0; i < e.length; i++)
      Ge(e[i], t, n);
  else if (hl(e) || Ln(e))
    e.forEach((i) => {
      Ge(i, t, n);
    });
  else if (_l(e)) {
    for (const i in e)
      Ge(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && Ge(e[i], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ri(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (r) {
    yr(r, t, n);
  }
}
function pe(e, t, n, i) {
  if (K(e)) {
    const r = Ri(e, t, n, i);
    return r && dl(r) && r.catch((s) => {
      yr(s, t, n);
    }), r;
  }
  if (U(e)) {
    const r = [];
    for (let s = 0; s < e.length; s++)
      r.push(pe(e[s], t, n, i));
    return r;
  }
}
function yr(e, t, n, i = !0) {
  const r = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: o } = t && t.appContext.config || at;
  if (t) {
    let l = t.parent;
    const a = t.proxy, u = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const f = l.ec;
      if (f) {
        for (let c = 0; c < f.length; c++)
          if (f[c](e, a, u) === !1)
            return;
      }
      l = l.parent;
    }
    if (s) {
      $e(), Ri(s, null, 10, [
        e,
        a,
        u
      ]), ze();
      return;
    }
  }
  _u(e, n, r, i, o);
}
function _u(e, t, n, i = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const It = [];
let be = -1;
const Nn = [];
let qe = null, kn = 0;
const Ll = /* @__PURE__ */ Promise.resolve();
let Zi = null;
function Nl(e) {
  const t = Zi || Ll;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function gu(e) {
  let t = be + 1, n = It.length;
  for (; t < n; ) {
    const i = t + n >>> 1, r = It[i], s = vi(r);
    s < e || s === e && r.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function Is(e) {
  if (!(e.flags & 1)) {
    const t = vi(e), n = It[It.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= vi(n) ? It.push(e) : It.splice(gu(t), 0, e), e.flags |= 1, $l();
  }
}
function $l() {
  Zi || (Zi = Ll.then(Bl));
}
function mu(e) {
  U(e) ? Nn.push(...e) : qe && e.id === -1 ? qe.splice(kn + 1, 0, e) : e.flags & 1 || (Nn.push(e), e.flags |= 1), $l();
}
function uo(e, t, n = be + 1) {
  for (; n < It.length; n++) {
    const i = It[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      It.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function zl(e) {
  if (Nn.length) {
    const t = [...new Set(Nn)].sort(
      (n, i) => vi(n) - vi(i)
    );
    if (Nn.length = 0, qe) {
      qe.push(...t);
      return;
    }
    for (qe = t, kn = 0; kn < qe.length; kn++) {
      const n = qe[kn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    qe = null, kn = 0;
  }
}
const vi = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Bl(e) {
  try {
    for (be = 0; be < It.length; be++) {
      const t = It[be];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Ri(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; be < It.length; be++) {
      const t = It[be];
      t && (t.flags &= -2);
    }
    be = -1, It.length = 0, zl(), Zi = null, (It.length || Nn.length) && Bl();
  }
}
let Lt = null, Vl = null;
function Qi(e) {
  const t = Lt;
  return Lt = e, Vl = e && e.type.__scopeId || null, t;
}
function rn(e, t = Lt, n) {
  if (!t || e._n)
    return e;
  const i = (...r) => {
    i._d && nr(-1);
    const s = Qi(t);
    let o;
    try {
      o = e(...r);
    } finally {
      Qi(s), i._d && nr(1);
    }
    return o;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function cn(e, t, n, i) {
  const r = e.dirs, s = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    s && (l.oldValue = s[o].value);
    let a = l.dir[i];
    a && ($e(), pe(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), ze());
  }
}
function yu(e, t) {
  if (At) {
    let n = At.provides;
    const i = At.parent && At.parent.provides;
    i === n && (n = At.provides = Object.create(i)), n[e] = t;
  }
}
function tn(e, t, n = !1) {
  const i = ba();
  if (i || zn) {
    let r = zn ? zn._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && K(t) ? t.call(i && i.proxy) : t;
  }
}
const vu = /* @__PURE__ */ Symbol.for("v-scx"), xu = () => tn(vu);
function Lr(e, t, n) {
  return jl(e, t, n);
}
function jl(e, t, n = at) {
  const { immediate: i, deep: r, flush: s, once: o } = n, l = Tt({}, n), a = t && i || !t && s !== "post";
  let u;
  if (Ti) {
    if (s === "sync") {
      const h = xu();
      u = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!a) {
      const h = () => {
      };
      return h.stop = Pe, h.resume = Pe, h.pause = Pe, h;
    }
  }
  const f = At;
  l.call = (h, m, p) => pe(h, f, m, p);
  let c = !1;
  s === "post" ? l.scheduler = (h) => {
    qt(h, f && f.suspense);
  } : s !== "sync" && (c = !0, l.scheduler = (h, m) => {
    m ? h() : Is(h);
  }), l.augmentJob = (h) => {
    t && (h.flags |= 4), c && (h.flags |= 2, f && (h.id = f.uid, h.i = f));
  };
  const d = pu(e, t, l);
  return Ti && (u ? u.push(d) : a && d()), d;
}
function bu(e, t, n) {
  const i = this.proxy, r = yt(e) ? e.includes(".") ? Hl(i, e) : () => i[e] : e.bind(i, i);
  let s;
  K(t) ? s = t : (s = t.handler, n = t);
  const o = Ii(this), l = jl(r, s.bind(i), n);
  return o(), l;
}
function Hl(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let r = 0; r < n.length && i; r++)
      i = i[n[r]];
    return i;
  };
}
const wu = /* @__PURE__ */ Symbol("_vte"), Ul = (e) => e.__isTeleport, Fe = /* @__PURE__ */ Symbol("_leaveCb"), Hi = /* @__PURE__ */ Symbol("_enterCb");
function Tu() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return br(() => {
    e.isMounted = !0;
  }), Zl(() => {
    e.isUnmounting = !0;
  }), e;
}
const re = [Function, Array], Wl = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: re,
  onEnter: re,
  onAfterEnter: re,
  onEnterCancelled: re,
  // leave
  onBeforeLeave: re,
  onLeave: re,
  onAfterLeave: re,
  onLeaveCancelled: re,
  // appear
  onBeforeAppear: re,
  onAppear: re,
  onAfterAppear: re,
  onAppearCancelled: re
}, Kl = (e) => {
  const t = e.subTree;
  return t.component ? Kl(t.component) : t;
}, Su = {
  name: "BaseTransition",
  props: Wl,
  setup(e, { slots: t }) {
    const n = ba(), i = Tu();
    return () => {
      const r = t.default && Gl(t.default(), !0);
      if (!r || !r.length)
        return;
      const s = ql(r), o = tt(e), { mode: l } = o;
      if (i.isLeaving)
        return Nr(s);
      const a = co(s);
      if (!a)
        return Nr(s);
      let u = ns(
        a,
        o,
        i,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (c) => u = c
      );
      a.type !== Pt && xi(a, u);
      let f = n.subTree && co(n.subTree);
      if (f && f.type !== Pt && !vn(f, a) && Kl(n).type !== Pt) {
        let c = ns(
          f,
          o,
          i,
          n
        );
        if (xi(f, c), l === "out-in" && a.type !== Pt)
          return i.isLeaving = !0, c.afterLeave = () => {
            i.isLeaving = !1, n.job.flags & 8 || n.update(), delete c.afterLeave, f = void 0;
          }, Nr(s);
        l === "in-out" && a.type !== Pt ? c.delayLeave = (d, h, m) => {
          const p = Yl(
            i,
            f
          );
          p[String(f.key)] = f, d[Fe] = () => {
            h(), d[Fe] = void 0, delete u.delayedLeave, f = void 0;
          }, u.delayedLeave = () => {
            m(), delete u.delayedLeave, f = void 0;
          };
        } : f = void 0;
      } else f && (f = void 0);
      return s;
    };
  }
};
function ql(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Pt) {
        t = n;
        break;
      }
  }
  return t;
}
const Cu = Su;
function Yl(e, t) {
  const { leavingVNodes: n } = e;
  let i = n.get(t.type);
  return i || (i = /* @__PURE__ */ Object.create(null), n.set(t.type, i)), i;
}
function ns(e, t, n, i, r) {
  const {
    appear: s,
    mode: o,
    persisted: l = !1,
    onBeforeEnter: a,
    onEnter: u,
    onAfterEnter: f,
    onEnterCancelled: c,
    onBeforeLeave: d,
    onLeave: h,
    onAfterLeave: m,
    onLeaveCancelled: p,
    onBeforeAppear: v,
    onAppear: b,
    onAfterAppear: T,
    onAppearCancelled: C
  } = t, x = String(e.key), y = Yl(n, e), O = (w, L) => {
    w && pe(
      w,
      i,
      9,
      L
    );
  }, M = (w, L) => {
    const B = L[1];
    O(w, L), U(w) ? w.every((R) => R.length <= 1) && B() : w.length <= 1 && B();
  }, D = {
    mode: o,
    persisted: l,
    beforeEnter(w) {
      let L = a;
      if (!n.isMounted)
        if (s)
          L = v || a;
        else
          return;
      w[Fe] && w[Fe](
        !0
        /* cancelled */
      );
      const B = y[x];
      B && vn(e, B) && B.el[Fe] && B.el[Fe](), O(L, [w]);
    },
    enter(w) {
      let L = u, B = f, R = c;
      if (!n.isMounted)
        if (s)
          L = b || u, B = T || f, R = C || c;
        else
          return;
      let j = !1;
      const J = w[Hi] = (it) => {
        j || (j = !0, it ? O(R, [w]) : O(B, [w]), D.delayedLeave && D.delayedLeave(), w[Hi] = void 0);
      };
      L ? M(L, [w, J]) : J();
    },
    leave(w, L) {
      const B = String(e.key);
      if (w[Hi] && w[Hi](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return L();
      O(d, [w]);
      let R = !1;
      const j = w[Fe] = (J) => {
        R || (R = !0, L(), J ? O(p, [w]) : O(m, [w]), w[Fe] = void 0, y[B] === e && delete y[B]);
      };
      y[B] = e, h ? M(h, [w, j]) : j();
    },
    clone(w) {
      const L = ns(
        w,
        t,
        n,
        i,
        r
      );
      return r && r(L), L;
    }
  };
  return D;
}
function Nr(e) {
  if (vr(e))
    return e = sn(e), e.children = null, e;
}
function co(e) {
  if (!vr(e))
    return Ul(e.type) && e.children ? ql(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && K(n.default))
      return n.default();
  }
}
function xi(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, xi(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Gl(e, t = !1, n) {
  let i = [], r = 0;
  for (let s = 0; s < e.length; s++) {
    let o = e[s];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : s);
    o.type === wt ? (o.patchFlag & 128 && r++, i = i.concat(
      Gl(o.children, t, l)
    )) : (t || o.type !== Pt) && i.push(l != null ? sn(o, { key: l }) : o);
  }
  if (r > 1)
    for (let s = 0; s < i.length; s++)
      i[s].patchFlag = -2;
  return i;
}
// @__NO_SIDE_EFFECTS__
function fn(e, t) {
  return K(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Tt({ name: e.name }, t, { setup: e })
  ) : e;
}
function Xl(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const tr = /* @__PURE__ */ new WeakMap();
function ci(e, t, n, i, r = !1) {
  if (U(e)) {
    e.forEach(
      (m, p) => ci(
        m,
        t && (U(t) ? t[p] : t),
        n,
        i,
        r
      )
    );
    return;
  }
  if ($n(i) && !r) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && ci(e, t, n, i.component.subTree);
    return;
  }
  const s = i.shapeFlag & 4 ? $s(i.component) : i.el, o = r ? null : s, { i: l, r: a } = e, u = t && t.r, f = l.refs === at ? l.refs = {} : l.refs, c = l.setupState, d = tt(c), h = c === at ? cl : (m) => et(d, m);
  if (u != null && u !== a) {
    if (ho(t), yt(u))
      f[u] = null, h(u) && (c[u] = null);
    else if (kt(u)) {
      u.value = null;
      const m = t;
      m.k && (f[m.k] = null);
    }
  }
  if (K(a))
    Ri(a, l, 12, [o, f]);
  else {
    const m = yt(a), p = kt(a);
    if (m || p) {
      const v = () => {
        if (e.f) {
          const b = m ? h(a) ? c[a] : f[a] : a.value;
          if (r)
            U(b) && Cs(b, s);
          else if (U(b))
            b.includes(s) || b.push(s);
          else if (m)
            f[a] = [s], h(a) && (c[a] = f[a]);
          else {
            const T = [s];
            a.value = T, e.k && (f[e.k] = T);
          }
        } else m ? (f[a] = o, h(a) && (c[a] = o)) : p && (a.value = o, e.k && (f[e.k] = o));
      };
      if (o) {
        const b = () => {
          v(), tr.delete(e);
        };
        b.id = -1, tr.set(e, b), qt(b, n);
      } else
        ho(e), v();
    }
  }
}
function ho(e) {
  const t = tr.get(e);
  t && (t.flags |= 8, tr.delete(e));
}
_r().requestIdleCallback;
_r().cancelIdleCallback;
const $n = (e) => !!e.type.__asyncLoader, vr = (e) => e.type.__isKeepAlive;
function Ou(e, t) {
  Jl(e, "a", t);
}
function Pu(e, t) {
  Jl(e, "da", t);
}
function Jl(e, t, n = At) {
  const i = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (xr(t, i, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      vr(r.parent.vnode) && Au(i, t, n, r), r = r.parent;
  }
}
function Au(e, t, n, i) {
  const r = xr(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  wr(() => {
    Cs(i[t], r);
  }, n);
}
function xr(e, t, n = At, i = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...o) => {
      $e();
      const l = Ii(n), a = pe(t, n, e, o);
      return l(), ze(), a;
    });
    return i ? r.unshift(s) : r.push(s), s;
  }
}
const Ue = (e) => (t, n = At) => {
  (!Ti || e === "sp") && xr(e, (...i) => t(...i), n);
}, Eu = Ue("bm"), br = Ue("m"), Mu = Ue(
  "bu"
), ku = Ue("u"), Zl = Ue(
  "bum"
), wr = Ue("um"), Du = Ue(
  "sp"
), Ru = Ue("rtg"), Iu = Ue("rtc");
function Fu(e, t = At) {
  xr("ec", e, t);
}
const Lu = "components", Ql = /* @__PURE__ */ Symbol.for("v-ndc");
function ta(e) {
  return yt(e) ? Nu(Lu, e, !1) || e : e || Ql;
}
function Nu(e, t, n = !0, i = !1) {
  const r = Lt || At;
  if (r) {
    const s = r.type;
    {
      const l = bc(
        s,
        !1
      );
      if (l && (l === t || l === fe(t) || l === pr(fe(t))))
        return s;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      po(r[e] || s[e], t) || // global registration
      po(r.appContext[e], t)
    );
    return !o && i ? s : o;
  }
}
function po(e, t) {
  return e && (e[t] || e[fe(t)] || e[pr(fe(t))]);
}
function Tr(e, t, n, i) {
  let r;
  const s = n, o = U(e);
  if (o || yt(e)) {
    const l = o && wn(e);
    let a = !1, u = !1;
    l && (a = !ae(e), u = Be(e), e = gr(e)), r = new Array(e.length);
    for (let f = 0, c = e.length; f < c; f++)
      r[f] = t(
        a ? u ? Un(de(e[f])) : de(e[f]) : e[f],
        f,
        void 0,
        s
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let l = 0; l < e; l++)
      r[l] = t(l + 1, l, void 0, s);
  } else if (ut(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (l, a) => t(l, a, void 0, s)
      );
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let a = 0, u = l.length; a < u; a++) {
        const f = l[a];
        r[a] = t(e[f], f, a, s);
      }
    }
  else
    r = [];
  return r;
}
function _o(e, t, n = {}, i, r) {
  if (Lt.ce || Lt.parent && $n(Lt.parent) && Lt.parent.ce) {
    const u = Object.keys(n).length > 0;
    return t !== "default" && (n.name = t), Q(), Ae(
      wt,
      null,
      [Mt("slot", n, i)],
      u ? -2 : 64
    );
  }
  let s = e[t];
  s && s._c && (s._d = !1), Q();
  const o = s && ea(s(n)), l = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  o && o.key, a = Ae(
    wt,
    {
      key: (l && !He(l) ? l : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!o && i ? "_fb" : "")
    },
    o || [],
    o && e._ === 1 ? 64 : -2
  );
  return a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), s && s._c && (s._d = !0), a;
}
function ea(e) {
  return e.some((t) => wi(t) ? !(t.type === Pt || t.type === wt && !ea(t.children)) : !0) ? e : null;
}
const is = (e) => e ? wa(e) ? $s(e) : is(e.parent) : null, hi = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Tt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => is(e.parent),
    $root: (e) => is(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ia(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Is(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Nl.bind(e.proxy)),
    $watch: (e) => bu.bind(e)
  })
), $r = (e, t) => e !== at && !e.__isScriptSetup && et(e, t), $u = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: i, data: r, props: s, accessCache: o, type: l, appContext: a } = e;
    if (t[0] !== "$") {
      const d = o[t];
      if (d !== void 0)
        switch (d) {
          case 1:
            return i[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if ($r(i, t))
          return o[t] = 1, i[t];
        if (r !== at && et(r, t))
          return o[t] = 2, r[t];
        if (et(s, t))
          return o[t] = 3, s[t];
        if (n !== at && et(n, t))
          return o[t] = 4, n[t];
        rs && (o[t] = 0);
      }
    }
    const u = hi[t];
    let f, c;
    if (u)
      return t === "$attrs" && Ot(e.attrs, "get", ""), u(e);
    if (
      // css module (injected by vue-loader)
      (f = l.__cssModules) && (f = f[t])
    )
      return f;
    if (n !== at && et(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      c = a.config.globalProperties, et(c, t)
    )
      return c[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: r, ctx: s } = e;
    return $r(r, t) ? (r[t] = n, !0) : i !== at && et(i, t) ? (i[t] = n, !0) : et(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: r, props: s, type: o }
  }, l) {
    let a;
    return !!(n[l] || e !== at && l[0] !== "$" && et(e, l) || $r(t, l) || et(s, l) || et(i, l) || et(hi, l) || et(r.config.globalProperties, l) || (a = o.__cssModules) && a[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : et(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function go(e) {
  return U(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let rs = !0;
function zu(e) {
  const t = ia(e), n = e.proxy, i = e.ctx;
  rs = !1, t.beforeCreate && mo(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: s,
    methods: o,
    watch: l,
    provide: a,
    inject: u,
    // lifecycle
    created: f,
    beforeMount: c,
    mounted: d,
    beforeUpdate: h,
    updated: m,
    activated: p,
    deactivated: v,
    beforeDestroy: b,
    beforeUnmount: T,
    destroyed: C,
    unmounted: x,
    render: y,
    renderTracked: O,
    renderTriggered: M,
    errorCaptured: D,
    serverPrefetch: w,
    // public API
    expose: L,
    inheritAttrs: B,
    // assets
    components: R,
    directives: j,
    filters: J
  } = t;
  if (u && Bu(u, i, null), o)
    for (const q in o) {
      const G = o[q];
      K(G) && (i[q] = G.bind(n));
    }
  if (r) {
    const q = r.call(n, n);
    ut(q) && (e.data = mr(q));
  }
  if (rs = !0, s)
    for (const q in s) {
      const G = s[q], ie = K(G) ? G.bind(n, n) : K(G.get) ? G.get.bind(n, n) : Pe, _e = !K(G) && K(G.set) ? G.set.bind(n) : Pe, Wt = Yt({
        get: ie,
        set: _e
      });
      Object.defineProperty(i, q, {
        enumerable: !0,
        configurable: !0,
        get: () => Wt.value,
        set: (bt) => Wt.value = bt
      });
    }
  if (l)
    for (const q in l)
      na(l[q], i, n, q);
  if (a) {
    const q = K(a) ? a.call(n) : a;
    Reflect.ownKeys(q).forEach((G) => {
      yu(G, q[G]);
    });
  }
  f && mo(f, e, "c");
  function Y(q, G) {
    U(G) ? G.forEach((ie) => q(ie.bind(n))) : G && q(G.bind(n));
  }
  if (Y(Eu, c), Y(br, d), Y(Mu, h), Y(ku, m), Y(Ou, p), Y(Pu, v), Y(Fu, D), Y(Iu, O), Y(Ru, M), Y(Zl, T), Y(wr, x), Y(Du, w), U(L))
    if (L.length) {
      const q = e.exposed || (e.exposed = {});
      L.forEach((G) => {
        Object.defineProperty(q, G, {
          get: () => n[G],
          set: (ie) => n[G] = ie,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  y && e.render === Pe && (e.render = y), B != null && (e.inheritAttrs = B), R && (e.components = R), j && (e.directives = j), w && Xl(e);
}
function Bu(e, t, n = Pe) {
  U(e) && (e = ss(e));
  for (const i in e) {
    const r = e[i];
    let s;
    ut(r) ? "default" in r ? s = tn(
      r.from || i,
      r.default,
      !0
    ) : s = tn(r.from || i) : s = tn(r), kt(s) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (o) => s.value = o
    }) : t[i] = s;
  }
}
function mo(e, t, n) {
  pe(
    U(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function na(e, t, n, i) {
  let r = i.includes(".") ? Hl(n, i) : () => n[i];
  if (yt(e)) {
    const s = t[e];
    K(s) && Lr(r, s);
  } else if (K(e))
    Lr(r, e.bind(n));
  else if (ut(e))
    if (U(e))
      e.forEach((s) => na(s, t, n, i));
    else {
      const s = K(e.handler) ? e.handler.bind(n) : t[e.handler];
      K(s) && Lr(r, s, e);
    }
}
function ia(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: r,
    optionsCache: s,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = s.get(t);
  let a;
  return l ? a = l : !r.length && !n && !i ? a = t : (a = {}, r.length && r.forEach(
    (u) => er(a, u, o, !0)
  ), er(a, t, o)), ut(t) && s.set(t, a), a;
}
function er(e, t, n, i = !1) {
  const { mixins: r, extends: s } = t;
  s && er(e, s, n, !0), r && r.forEach(
    (o) => er(e, o, n, !0)
  );
  for (const o in t)
    if (!(i && o === "expose")) {
      const l = Vu[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const Vu = {
  data: yo,
  props: vo,
  emits: vo,
  // objects
  methods: si,
  computed: si,
  // lifecycle
  beforeCreate: Rt,
  created: Rt,
  beforeMount: Rt,
  mounted: Rt,
  beforeUpdate: Rt,
  updated: Rt,
  beforeDestroy: Rt,
  beforeUnmount: Rt,
  destroyed: Rt,
  unmounted: Rt,
  activated: Rt,
  deactivated: Rt,
  errorCaptured: Rt,
  serverPrefetch: Rt,
  // assets
  components: si,
  directives: si,
  // watch
  watch: Hu,
  // provide / inject
  provide: yo,
  inject: ju
};
function yo(e, t) {
  return t ? e ? function() {
    return Tt(
      K(e) ? e.call(this, this) : e,
      K(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function ju(e, t) {
  return si(ss(e), ss(t));
}
function ss(e) {
  if (U(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Rt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function si(e, t) {
  return e ? Tt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function vo(e, t) {
  return e ? U(e) && U(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Tt(
    /* @__PURE__ */ Object.create(null),
    go(e),
    go(t ?? {})
  ) : t;
}
function Hu(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Tt(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = Rt(e[i], t[i]);
  return n;
}
function ra() {
  return {
    app: null,
    config: {
      isNativeTag: cl,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Uu = 0;
function Wu(e, t) {
  return function(i, r = null) {
    K(i) || (i = Tt({}, i)), r != null && !ut(r) && (r = null);
    const s = ra(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const u = s.app = {
      _uid: Uu++,
      _component: i,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: Sc,
      get config() {
        return s.config;
      },
      set config(f) {
      },
      use(f, ...c) {
        return o.has(f) || (f && K(f.install) ? (o.add(f), f.install(u, ...c)) : K(f) && (o.add(f), f(u, ...c))), u;
      },
      mixin(f) {
        return s.mixins.includes(f) || s.mixins.push(f), u;
      },
      component(f, c) {
        return c ? (s.components[f] = c, u) : s.components[f];
      },
      directive(f, c) {
        return c ? (s.directives[f] = c, u) : s.directives[f];
      },
      mount(f, c, d) {
        if (!a) {
          const h = u._ceVNode || Mt(i, r);
          return h.appContext = s, d === !0 ? d = "svg" : d === !1 && (d = void 0), e(h, f, d), a = !0, u._container = f, f.__vue_app__ = u, $s(h.component);
        }
      },
      onUnmount(f) {
        l.push(f);
      },
      unmount() {
        a && (pe(
          l,
          u._instance,
          16
        ), e(null, u._container), delete u._container.__vue_app__);
      },
      provide(f, c) {
        return s.provides[f] = c, u;
      },
      runWithContext(f) {
        const c = zn;
        zn = u;
        try {
          return f();
        } finally {
          zn = c;
        }
      }
    };
    return u;
  };
}
let zn = null;
const Ku = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${fe(t)}Modifiers`] || e[`${Pn(t)}Modifiers`];
function qu(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || at;
  let r = n;
  const s = t.startsWith("update:"), o = s && Ku(i, t.slice(7));
  o && (o.trim && (r = n.map((f) => yt(f) ? f.trim() : f)), o.number && (r = n.map(Df)));
  let l, a = i[l = Mr(t)] || // also try camelCase event handler (#2249)
  i[l = Mr(fe(t))];
  !a && s && (a = i[l = Mr(Pn(t))]), a && pe(
    a,
    e,
    6,
    r
  );
  const u = i[l + "Once"];
  if (u) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, pe(
      u,
      e,
      6,
      r
    );
  }
}
const Yu = /* @__PURE__ */ new WeakMap();
function sa(e, t, n = !1) {
  const i = n ? Yu : t.emitsCache, r = i.get(e);
  if (r !== void 0)
    return r;
  const s = e.emits;
  let o = {}, l = !1;
  if (!K(e)) {
    const a = (u) => {
      const f = sa(u, t, !0);
      f && (l = !0, Tt(o, f));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !s && !l ? (ut(e) && i.set(e, null), null) : (U(s) ? s.forEach((a) => o[a] = null) : Tt(o, s), ut(e) && i.set(e, o), o);
}
function Sr(e, t) {
  return !e || !cr(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), et(e, t[0].toLowerCase() + t.slice(1)) || et(e, Pn(t)) || et(e, t));
}
function xo(e) {
  const {
    type: t,
    vnode: n,
    proxy: i,
    withProxy: r,
    propsOptions: [s],
    slots: o,
    attrs: l,
    emit: a,
    render: u,
    renderCache: f,
    props: c,
    data: d,
    setupState: h,
    ctx: m,
    inheritAttrs: p
  } = e, v = Qi(e);
  let b, T;
  try {
    if (n.shapeFlag & 4) {
      const x = r || i, y = x;
      b = Se(
        u.call(
          y,
          x,
          f,
          c,
          h,
          d,
          m
        )
      ), T = l;
    } else {
      const x = t;
      b = Se(
        x.length > 1 ? x(
          c,
          { attrs: l, slots: o, emit: a }
        ) : x(
          c,
          null
        )
      ), T = t.props ? l : Gu(l);
    }
  } catch (x) {
    di.length = 0, yr(x, e, 1), b = Mt(Pt);
  }
  let C = b;
  if (T && p !== !1) {
    const x = Object.keys(T), { shapeFlag: y } = C;
    x.length && y & 7 && (s && x.some(Ss) && (T = Xu(
      T,
      s
    )), C = sn(C, T, !1, !0));
  }
  return n.dirs && (C = sn(C, null, !1, !0), C.dirs = C.dirs ? C.dirs.concat(n.dirs) : n.dirs), n.transition && xi(C, n.transition), b = C, Qi(v), b;
}
const Gu = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || cr(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Xu = (e, t) => {
  const n = {};
  for (const i in e)
    (!Ss(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function Ju(e, t, n) {
  const { props: i, children: r, component: s } = e, { props: o, children: l, patchFlag: a } = t, u = s.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return i ? bo(i, o, u) : !!o;
    if (a & 8) {
      const f = t.dynamicProps;
      for (let c = 0; c < f.length; c++) {
        const d = f[c];
        if (o[d] !== i[d] && !Sr(u, d))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : i === o ? !1 : i ? o ? bo(i, o, u) : !0 : !!o;
  return !1;
}
function bo(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < i.length; r++) {
    const s = i[r];
    if (t[s] !== e[s] && !Sr(n, s))
      return !0;
  }
  return !1;
}
function Zu({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.el = e.el), i === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const oa = {}, la = () => Object.create(oa), aa = (e) => Object.getPrototypeOf(e) === oa;
function Qu(e, t, n, i = !1) {
  const r = {}, s = la();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), fa(e, t, r, s);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  n ? e.props = i ? r : ou(r) : e.type.props ? e.props = r : e.props = s, e.attrs = s;
}
function tc(e, t, n, i) {
  const {
    props: r,
    attrs: s,
    vnode: { patchFlag: o }
  } = e, l = tt(r), [a] = e.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (i || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const f = e.vnode.dynamicProps;
      for (let c = 0; c < f.length; c++) {
        let d = f[c];
        if (Sr(e.emitsOptions, d))
          continue;
        const h = t[d];
        if (a)
          if (et(s, d))
            h !== s[d] && (s[d] = h, u = !0);
          else {
            const m = fe(d);
            r[m] = os(
              a,
              l,
              m,
              h,
              e,
              !1
            );
          }
        else
          h !== s[d] && (s[d] = h, u = !0);
      }
    }
  } else {
    fa(e, t, r, s) && (u = !0);
    let f;
    for (const c in l)
      (!t || // for camelCase
      !et(t, c) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = Pn(c)) === c || !et(t, f))) && (a ? n && // for camelCase
      (n[c] !== void 0 || // for kebab-case
      n[f] !== void 0) && (r[c] = os(
        a,
        l,
        c,
        void 0,
        e,
        !0
      )) : delete r[c]);
    if (s !== l)
      for (const c in s)
        (!t || !et(t, c)) && (delete s[c], u = !0);
  }
  u && Ne(e.attrs, "set", "");
}
function fa(e, t, n, i) {
  const [r, s] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let a in t) {
      if (ai(a))
        continue;
      const u = t[a];
      let f;
      r && et(r, f = fe(a)) ? !s || !s.includes(f) ? n[f] = u : (l || (l = {}))[f] = u : Sr(e.emitsOptions, a) || (!(a in i) || u !== i[a]) && (i[a] = u, o = !0);
    }
  if (s) {
    const a = tt(n), u = l || at;
    for (let f = 0; f < s.length; f++) {
      const c = s[f];
      n[c] = os(
        r,
        a,
        c,
        u[c],
        e,
        !et(u, c)
      );
    }
  }
  return o;
}
function os(e, t, n, i, r, s) {
  const o = e[n];
  if (o != null) {
    const l = et(o, "default");
    if (l && i === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && K(a)) {
        const { propsDefaults: u } = r;
        if (n in u)
          i = u[n];
        else {
          const f = Ii(r);
          i = u[n] = a.call(
            null,
            t
          ), f();
        }
      } else
        i = a;
      r.ce && r.ce._setProp(n, i);
    }
    o[
      0
      /* shouldCast */
    ] && (s && !l ? i = !1 : o[
      1
      /* shouldCastTrue */
    ] && (i === "" || i === Pn(n)) && (i = !0));
  }
  return i;
}
const ec = /* @__PURE__ */ new WeakMap();
function ua(e, t, n = !1) {
  const i = n ? ec : t.propsCache, r = i.get(e);
  if (r)
    return r;
  const s = e.props, o = {}, l = [];
  let a = !1;
  if (!K(e)) {
    const f = (c) => {
      a = !0;
      const [d, h] = ua(c, t, !0);
      Tt(o, d), h && l.push(...h);
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!s && !a)
    return ut(e) && i.set(e, Fn), Fn;
  if (U(s))
    for (let f = 0; f < s.length; f++) {
      const c = fe(s[f]);
      wo(c) && (o[c] = at);
    }
  else if (s)
    for (const f in s) {
      const c = fe(f);
      if (wo(c)) {
        const d = s[f], h = o[c] = U(d) || K(d) ? { type: d } : Tt({}, d), m = h.type;
        let p = !1, v = !0;
        if (U(m))
          for (let b = 0; b < m.length; ++b) {
            const T = m[b], C = K(T) && T.name;
            if (C === "Boolean") {
              p = !0;
              break;
            } else C === "String" && (v = !1);
          }
        else
          p = K(m) && m.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = p, h[
          1
          /* shouldCastTrue */
        ] = v, (p || et(h, "default")) && l.push(c);
      }
    }
  const u = [o, l];
  return ut(e) && i.set(e, u), u;
}
function wo(e) {
  return e[0] !== "$" && !ai(e);
}
const Fs = (e) => e === "_" || e === "_ctx" || e === "$stable", Ls = (e) => U(e) ? e.map(Se) : [Se(e)], nc = (e, t, n) => {
  if (t._n)
    return t;
  const i = rn((...r) => Ls(t(...r)), n);
  return i._c = !1, i;
}, ca = (e, t, n) => {
  const i = e._ctx;
  for (const r in e) {
    if (Fs(r)) continue;
    const s = e[r];
    if (K(s))
      t[r] = nc(r, s, i);
    else if (s != null) {
      const o = Ls(s);
      t[r] = () => o;
    }
  }
}, ha = (e, t) => {
  const n = Ls(t);
  e.slots.default = () => n;
}, da = (e, t, n) => {
  for (const i in t)
    (n || !Fs(i)) && (e[i] = t[i]);
}, ic = (e, t, n) => {
  const i = e.slots = la();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (da(i, t, n), n && gl(i, "_", r, !0)) : ca(t, i);
  } else t && ha(e, t);
}, rc = (e, t, n) => {
  const { vnode: i, slots: r } = e;
  let s = !0, o = at;
  if (i.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? s = !1 : da(r, t, n) : (s = !t.$stable, ca(t, r)), o = t;
  } else t && (ha(e, t), o = { default: 1 });
  if (s)
    for (const l in r)
      !Fs(l) && o[l] == null && delete r[l];
}, qt = fc;
function sc(e) {
  return oc(e);
}
function oc(e, t) {
  const n = _r();
  n.__VUE__ = !0;
  const {
    insert: i,
    remove: r,
    patchProp: s,
    createElement: o,
    createText: l,
    createComment: a,
    setText: u,
    setElementText: f,
    parentNode: c,
    nextSibling: d,
    setScopeId: h = Pe,
    insertStaticContent: m
  } = e, p = (_, g, S, k = null, P = null, A = null, N = void 0, F = null, I = !!g.dynamicChildren) => {
    if (_ === g)
      return;
    _ && !vn(_, g) && (k = $i(_), bt(_, P, A, !0), _ = null), g.patchFlag === -2 && (I = !1, g.dynamicChildren = null);
    const { type: E, ref: H, shapeFlag: z } = g;
    switch (E) {
      case Cr:
        v(_, g, S, k);
        break;
      case Pt:
        b(_, g, S, k);
        break;
      case Br:
        _ == null && T(g, S, k, N);
        break;
      case wt:
        R(
          _,
          g,
          S,
          k,
          P,
          A,
          N,
          F,
          I
        );
        break;
      default:
        z & 1 ? y(
          _,
          g,
          S,
          k,
          P,
          A,
          N,
          F,
          I
        ) : z & 6 ? j(
          _,
          g,
          S,
          k,
          P,
          A,
          N,
          F,
          I
        ) : (z & 64 || z & 128) && E.process(
          _,
          g,
          S,
          k,
          P,
          A,
          N,
          F,
          I,
          Qn
        );
    }
    H != null && P ? ci(H, _ && _.ref, A, g || _, !g) : H == null && _ && _.ref != null && ci(_.ref, null, A, _, !0);
  }, v = (_, g, S, k) => {
    if (_ == null)
      i(
        g.el = l(g.children),
        S,
        k
      );
    else {
      const P = g.el = _.el;
      g.children !== _.children && u(P, g.children);
    }
  }, b = (_, g, S, k) => {
    _ == null ? i(
      g.el = a(g.children || ""),
      S,
      k
    ) : g.el = _.el;
  }, T = (_, g, S, k) => {
    [_.el, _.anchor] = m(
      _.children,
      g,
      S,
      k,
      _.el,
      _.anchor
    );
  }, C = ({ el: _, anchor: g }, S, k) => {
    let P;
    for (; _ && _ !== g; )
      P = d(_), i(_, S, k), _ = P;
    i(g, S, k);
  }, x = ({ el: _, anchor: g }) => {
    let S;
    for (; _ && _ !== g; )
      S = d(_), r(_), _ = S;
    r(g);
  }, y = (_, g, S, k, P, A, N, F, I) => {
    if (g.type === "svg" ? N = "svg" : g.type === "math" && (N = "mathml"), _ == null)
      O(
        g,
        S,
        k,
        P,
        A,
        N,
        F,
        I
      );
    else {
      const E = _.el && _.el._isVueCE ? _.el : null;
      try {
        E && E._beginPatch(), w(
          _,
          g,
          P,
          A,
          N,
          F,
          I
        );
      } finally {
        E && E._endPatch();
      }
    }
  }, O = (_, g, S, k, P, A, N, F) => {
    let I, E;
    const { props: H, shapeFlag: z, transition: V, dirs: W } = _;
    if (I = _.el = o(
      _.type,
      A,
      H && H.is,
      H
    ), z & 8 ? f(I, _.children) : z & 16 && D(
      _.children,
      I,
      null,
      k,
      P,
      zr(_, A),
      N,
      F
    ), W && cn(_, null, k, "created"), M(I, _, _.scopeId, N, k), H) {
      for (const ot in H)
        ot !== "value" && !ai(ot) && s(I, ot, null, H[ot], A, k);
      "value" in H && s(I, "value", null, H.value, A), (E = H.onVnodeBeforeMount) && ve(E, k, _);
    }
    W && cn(_, null, k, "beforeMount");
    const Z = lc(P, V);
    Z && V.beforeEnter(I), i(I, g, S), ((E = H && H.onVnodeMounted) || Z || W) && qt(() => {
      E && ve(E, k, _), Z && V.enter(I), W && cn(_, null, k, "mounted");
    }, P);
  }, M = (_, g, S, k, P) => {
    if (S && h(_, S), k)
      for (let A = 0; A < k.length; A++)
        h(_, k[A]);
    if (P) {
      let A = P.subTree;
      if (g === A || ma(A.type) && (A.ssContent === g || A.ssFallback === g)) {
        const N = P.vnode;
        M(
          _,
          N,
          N.scopeId,
          N.slotScopeIds,
          P.parent
        );
      }
    }
  }, D = (_, g, S, k, P, A, N, F, I = 0) => {
    for (let E = I; E < _.length; E++) {
      const H = _[E] = F ? Ye(_[E]) : Se(_[E]);
      p(
        null,
        H,
        g,
        S,
        k,
        P,
        A,
        N,
        F
      );
    }
  }, w = (_, g, S, k, P, A, N) => {
    const F = g.el = _.el;
    let { patchFlag: I, dynamicChildren: E, dirs: H } = g;
    I |= _.patchFlag & 16;
    const z = _.props || at, V = g.props || at;
    let W;
    if (S && hn(S, !1), (W = V.onVnodeBeforeUpdate) && ve(W, S, g, _), H && cn(g, _, S, "beforeUpdate"), S && hn(S, !0), (z.innerHTML && V.innerHTML == null || z.textContent && V.textContent == null) && f(F, ""), E ? L(
      _.dynamicChildren,
      E,
      F,
      S,
      k,
      zr(g, P),
      A
    ) : N || G(
      _,
      g,
      F,
      null,
      S,
      k,
      zr(g, P),
      A,
      !1
    ), I > 0) {
      if (I & 16)
        B(F, z, V, S, P);
      else if (I & 2 && z.class !== V.class && s(F, "class", null, V.class, P), I & 4 && s(F, "style", z.style, V.style, P), I & 8) {
        const Z = g.dynamicProps;
        for (let ot = 0; ot < Z.length; ot++) {
          const nt = Z[ot], Nt = z[nt], $t = V[nt];
          ($t !== Nt || nt === "value") && s(F, nt, Nt, $t, P, S);
        }
      }
      I & 1 && _.children !== g.children && f(F, g.children);
    } else !N && E == null && B(F, z, V, S, P);
    ((W = V.onVnodeUpdated) || H) && qt(() => {
      W && ve(W, S, g, _), H && cn(g, _, S, "updated");
    }, k);
  }, L = (_, g, S, k, P, A, N) => {
    for (let F = 0; F < g.length; F++) {
      const I = _[F], E = g[F], H = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        I.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (I.type === wt || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !vn(I, E) || // - In the case of a component, it could contain anything.
        I.shapeFlag & 198) ? c(I.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          S
        )
      );
      p(
        I,
        E,
        H,
        null,
        k,
        P,
        A,
        N,
        !0
      );
    }
  }, B = (_, g, S, k, P) => {
    if (g !== S) {
      if (g !== at)
        for (const A in g)
          !ai(A) && !(A in S) && s(
            _,
            A,
            g[A],
            null,
            P,
            k
          );
      for (const A in S) {
        if (ai(A)) continue;
        const N = S[A], F = g[A];
        N !== F && A !== "value" && s(_, A, F, N, P, k);
      }
      "value" in S && s(_, "value", g.value, S.value, P);
    }
  }, R = (_, g, S, k, P, A, N, F, I) => {
    const E = g.el = _ ? _.el : l(""), H = g.anchor = _ ? _.anchor : l("");
    let { patchFlag: z, dynamicChildren: V, slotScopeIds: W } = g;
    W && (F = F ? F.concat(W) : W), _ == null ? (i(E, S, k), i(H, S, k), D(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      g.children || [],
      S,
      H,
      P,
      A,
      N,
      F,
      I
    )) : z > 0 && z & 64 && V && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    _.dynamicChildren && _.dynamicChildren.length === V.length ? (L(
      _.dynamicChildren,
      V,
      S,
      P,
      A,
      N,
      F
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (g.key != null || P && g === P.subTree) && pa(
      _,
      g,
      !0
      /* shallow */
    )) : G(
      _,
      g,
      S,
      H,
      P,
      A,
      N,
      F,
      I
    );
  }, j = (_, g, S, k, P, A, N, F, I) => {
    g.slotScopeIds = F, _ == null ? g.shapeFlag & 512 ? P.ctx.activate(
      g,
      S,
      k,
      N,
      I
    ) : J(
      g,
      S,
      k,
      P,
      A,
      N,
      I
    ) : it(_, g, I);
  }, J = (_, g, S, k, P, A, N) => {
    const F = _.component = gc(
      _,
      k,
      P
    );
    if (vr(_) && (F.ctx.renderer = Qn), mc(F, !1, N), F.asyncDep) {
      if (P && P.registerDep(F, Y, N), !_.el) {
        const I = F.subTree = Mt(Pt);
        b(null, I, g, S), _.placeholder = I.el;
      }
    } else
      Y(
        F,
        _,
        g,
        S,
        P,
        A,
        N
      );
  }, it = (_, g, S) => {
    const k = g.component = _.component;
    if (Ju(_, g, S))
      if (k.asyncDep && !k.asyncResolved) {
        q(k, g, S);
        return;
      } else
        k.next = g, k.update();
    else
      g.el = _.el, k.vnode = g;
  }, Y = (_, g, S, k, P, A, N) => {
    const F = () => {
      if (_.isMounted) {
        let { next: z, bu: V, u: W, parent: Z, vnode: ot } = _;
        {
          const me = _a(_);
          if (me) {
            z && (z.el = ot.el, q(_, z, N)), me.asyncDep.then(() => {
              _.isUnmounted || F();
            });
            return;
          }
        }
        let nt = z, Nt;
        hn(_, !1), z ? (z.el = ot.el, q(_, z, N)) : z = ot, V && kr(V), (Nt = z.props && z.props.onVnodeBeforeUpdate) && ve(Nt, Z, z, ot), hn(_, !0);
        const $t = xo(_), ge = _.subTree;
        _.subTree = $t, p(
          ge,
          $t,
          // parent may have changed if it's in a teleport
          c(ge.el),
          // anchor may have changed if it's in a fragment
          $i(ge),
          _,
          P,
          A
        ), z.el = $t.el, nt === null && Zu(_, $t.el), W && qt(W, P), (Nt = z.props && z.props.onVnodeUpdated) && qt(
          () => ve(Nt, Z, z, ot),
          P
        );
      } else {
        let z;
        const { el: V, props: W } = g, { bm: Z, m: ot, parent: nt, root: Nt, type: $t } = _, ge = $n(g);
        hn(_, !1), Z && kr(Z), !ge && (z = W && W.onVnodeBeforeMount) && ve(z, nt, g), hn(_, !0);
        {
          Nt.ce && // @ts-expect-error _def is private
          Nt.ce._def.shadowRoot !== !1 && Nt.ce._injectChildStyle($t);
          const me = _.subTree = xo(_);
          p(
            null,
            me,
            S,
            k,
            _,
            P,
            A
          ), g.el = me.el;
        }
        if (ot && qt(ot, P), !ge && (z = W && W.onVnodeMounted)) {
          const me = g;
          qt(
            () => ve(z, nt, me),
            P
          );
        }
        (g.shapeFlag & 256 || nt && $n(nt.vnode) && nt.vnode.shapeFlag & 256) && _.a && qt(_.a, P), _.isMounted = !0, g = S = k = null;
      }
    };
    _.scope.on();
    const I = _.effect = new xl(F);
    _.scope.off();
    const E = _.update = I.run.bind(I), H = _.job = I.runIfDirty.bind(I);
    H.i = _, H.id = _.uid, I.scheduler = () => Is(H), hn(_, !0), E();
  }, q = (_, g, S) => {
    g.component = _;
    const k = _.vnode.props;
    _.vnode = g, _.next = null, tc(_, g.props, k, S), rc(_, g.children, S), $e(), uo(_), ze();
  }, G = (_, g, S, k, P, A, N, F, I = !1) => {
    const E = _ && _.children, H = _ ? _.shapeFlag : 0, z = g.children, { patchFlag: V, shapeFlag: W } = g;
    if (V > 0) {
      if (V & 128) {
        _e(
          E,
          z,
          S,
          k,
          P,
          A,
          N,
          F,
          I
        );
        return;
      } else if (V & 256) {
        ie(
          E,
          z,
          S,
          k,
          P,
          A,
          N,
          F,
          I
        );
        return;
      }
    }
    W & 8 ? (H & 16 && Zn(E, P, A), z !== E && f(S, z)) : H & 16 ? W & 16 ? _e(
      E,
      z,
      S,
      k,
      P,
      A,
      N,
      F,
      I
    ) : Zn(E, P, A, !0) : (H & 8 && f(S, ""), W & 16 && D(
      z,
      S,
      k,
      P,
      A,
      N,
      F,
      I
    ));
  }, ie = (_, g, S, k, P, A, N, F, I) => {
    _ = _ || Fn, g = g || Fn;
    const E = _.length, H = g.length, z = Math.min(E, H);
    let V;
    for (V = 0; V < z; V++) {
      const W = g[V] = I ? Ye(g[V]) : Se(g[V]);
      p(
        _[V],
        W,
        S,
        null,
        P,
        A,
        N,
        F,
        I
      );
    }
    E > H ? Zn(
      _,
      P,
      A,
      !0,
      !1,
      z
    ) : D(
      g,
      S,
      k,
      P,
      A,
      N,
      F,
      I,
      z
    );
  }, _e = (_, g, S, k, P, A, N, F, I) => {
    let E = 0;
    const H = g.length;
    let z = _.length - 1, V = H - 1;
    for (; E <= z && E <= V; ) {
      const W = _[E], Z = g[E] = I ? Ye(g[E]) : Se(g[E]);
      if (vn(W, Z))
        p(
          W,
          Z,
          S,
          null,
          P,
          A,
          N,
          F,
          I
        );
      else
        break;
      E++;
    }
    for (; E <= z && E <= V; ) {
      const W = _[z], Z = g[V] = I ? Ye(g[V]) : Se(g[V]);
      if (vn(W, Z))
        p(
          W,
          Z,
          S,
          null,
          P,
          A,
          N,
          F,
          I
        );
      else
        break;
      z--, V--;
    }
    if (E > z) {
      if (E <= V) {
        const W = V + 1, Z = W < H ? g[W].el : k;
        for (; E <= V; )
          p(
            null,
            g[E] = I ? Ye(g[E]) : Se(g[E]),
            S,
            Z,
            P,
            A,
            N,
            F,
            I
          ), E++;
      }
    } else if (E > V)
      for (; E <= z; )
        bt(_[E], P, A, !0), E++;
    else {
      const W = E, Z = E, ot = /* @__PURE__ */ new Map();
      for (E = Z; E <= V; E++) {
        const Kt = g[E] = I ? Ye(g[E]) : Se(g[E]);
        Kt.key != null && ot.set(Kt.key, E);
      }
      let nt, Nt = 0;
      const $t = V - Z + 1;
      let ge = !1, me = 0;
      const ti = new Array($t);
      for (E = 0; E < $t; E++) ti[E] = 0;
      for (E = W; E <= z; E++) {
        const Kt = _[E];
        if (Nt >= $t) {
          bt(Kt, P, A, !0);
          continue;
        }
        let ye;
        if (Kt.key != null)
          ye = ot.get(Kt.key);
        else
          for (nt = Z; nt <= V; nt++)
            if (ti[nt - Z] === 0 && vn(Kt, g[nt])) {
              ye = nt;
              break;
            }
        ye === void 0 ? bt(Kt, P, A, !0) : (ti[ye - Z] = E + 1, ye >= me ? me = ye : ge = !0, p(
          Kt,
          g[ye],
          S,
          null,
          P,
          A,
          N,
          F,
          I
        ), Nt++);
      }
      const ro = ge ? ac(ti) : Fn;
      for (nt = ro.length - 1, E = $t - 1; E >= 0; E--) {
        const Kt = Z + E, ye = g[Kt], so = g[Kt + 1], oo = Kt + 1 < H ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          so.el || ga(so)
        ) : k;
        ti[E] === 0 ? p(
          null,
          ye,
          S,
          oo,
          P,
          A,
          N,
          F,
          I
        ) : ge && (nt < 0 || E !== ro[nt] ? Wt(ye, S, oo, 2) : nt--);
      }
    }
  }, Wt = (_, g, S, k, P = null) => {
    const { el: A, type: N, transition: F, children: I, shapeFlag: E } = _;
    if (E & 6) {
      Wt(_.component.subTree, g, S, k);
      return;
    }
    if (E & 128) {
      _.suspense.move(g, S, k);
      return;
    }
    if (E & 64) {
      N.move(_, g, S, Qn);
      return;
    }
    if (N === wt) {
      i(A, g, S);
      for (let z = 0; z < I.length; z++)
        Wt(I[z], g, S, k);
      i(_.anchor, g, S);
      return;
    }
    if (N === Br) {
      C(_, g, S);
      return;
    }
    if (k !== 2 && E & 1 && F)
      if (k === 0)
        F.beforeEnter(A), i(A, g, S), qt(() => F.enter(A), P);
      else {
        const { leave: z, delayLeave: V, afterLeave: W } = F, Z = () => {
          _.ctx.isUnmounted ? r(A) : i(A, g, S);
        }, ot = () => {
          A._isLeaving && A[Fe](
            !0
            /* cancelled */
          ), z(A, () => {
            Z(), W && W();
          });
        };
        V ? V(A, Z, ot) : ot();
      }
    else
      i(A, g, S);
  }, bt = (_, g, S, k = !1, P = !1) => {
    const {
      type: A,
      props: N,
      ref: F,
      children: I,
      dynamicChildren: E,
      shapeFlag: H,
      patchFlag: z,
      dirs: V,
      cacheIndex: W
    } = _;
    if (z === -2 && (P = !1), F != null && ($e(), ci(F, null, S, _, !0), ze()), W != null && (g.renderCache[W] = void 0), H & 256) {
      g.ctx.deactivate(_);
      return;
    }
    const Z = H & 1 && V, ot = !$n(_);
    let nt;
    if (ot && (nt = N && N.onVnodeBeforeUnmount) && ve(nt, g, _), H & 6)
      Me(_.component, S, k);
    else {
      if (H & 128) {
        _.suspense.unmount(S, k);
        return;
      }
      Z && cn(_, null, g, "beforeUnmount"), H & 64 ? _.type.remove(
        _,
        g,
        S,
        Qn,
        k
      ) : E && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !E.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (A !== wt || z > 0 && z & 64) ? Zn(
        E,
        g,
        S,
        !1,
        !0
      ) : (A === wt && z & 384 || !P && H & 16) && Zn(I, g, S), k && Jn(_);
    }
    (ot && (nt = N && N.onVnodeUnmounted) || Z) && qt(() => {
      nt && ve(nt, g, _), Z && cn(_, null, g, "unmounted");
    }, S);
  }, Jn = (_) => {
    const { type: g, el: S, anchor: k, transition: P } = _;
    if (g === wt) {
      ue(S, k);
      return;
    }
    if (g === Br) {
      x(_);
      return;
    }
    const A = () => {
      r(S), P && !P.persisted && P.afterLeave && P.afterLeave();
    };
    if (_.shapeFlag & 1 && P && !P.persisted) {
      const { leave: N, delayLeave: F } = P, I = () => N(S, A);
      F ? F(_.el, A, I) : I();
    } else
      A();
  }, ue = (_, g) => {
    let S;
    for (; _ !== g; )
      S = d(_), r(_), _ = S;
    r(g);
  }, Me = (_, g, S) => {
    const { bum: k, scope: P, job: A, subTree: N, um: F, m: I, a: E } = _;
    To(I), To(E), k && kr(k), P.stop(), A && (A.flags |= 8, bt(N, _, g, S)), F && qt(F, g), qt(() => {
      _.isUnmounted = !0;
    }, g);
  }, Zn = (_, g, S, k = !1, P = !1, A = 0) => {
    for (let N = A; N < _.length; N++)
      bt(_[N], g, S, k, P);
  }, $i = (_) => {
    if (_.shapeFlag & 6)
      return $i(_.component.subTree);
    if (_.shapeFlag & 128)
      return _.suspense.next();
    const g = d(_.anchor || _.el), S = g && g[wu];
    return S ? d(S) : g;
  };
  let Er = !1;
  const io = (_, g, S) => {
    let k;
    _ == null ? g._vnode && (bt(g._vnode, null, null, !0), k = g._vnode.component) : p(
      g._vnode || null,
      _,
      g,
      null,
      null,
      null,
      S
    ), g._vnode = _, Er || (Er = !0, uo(k), zl(), Er = !1);
  }, Qn = {
    p,
    um: bt,
    m: Wt,
    r: Jn,
    mt: J,
    mc: D,
    pc: G,
    pbc: L,
    n: $i,
    o: e
  };
  return {
    render: io,
    hydrate: void 0,
    createApp: Wu(io)
  };
}
function zr({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function hn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function lc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function pa(e, t, n = !1) {
  const i = e.children, r = t.children;
  if (U(i) && U(r))
    for (let s = 0; s < i.length; s++) {
      const o = i[s];
      let l = r[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[s] = Ye(r[s]), l.el = o.el), !n && l.patchFlag !== -2 && pa(o, l)), l.type === Cr && (l.patchFlag !== -1 ? l.el = o.el : l.__elIndex = s + // take fragment start anchor into account
      (e.type === wt ? 1 : 0)), l.type === Pt && !l.el && (l.el = o.el);
    }
}
function ac(e) {
  const t = e.slice(), n = [0];
  let i, r, s, o, l;
  const a = e.length;
  for (i = 0; i < a; i++) {
    const u = e[i];
    if (u !== 0) {
      if (r = n[n.length - 1], e[r] < u) {
        t[i] = r, n.push(i);
        continue;
      }
      for (s = 0, o = n.length - 1; s < o; )
        l = s + o >> 1, e[n[l]] < u ? s = l + 1 : o = l;
      u < e[n[s]] && (s > 0 && (t[i] = n[s - 1]), n[s] = i);
    }
  }
  for (s = n.length, o = n[s - 1]; s-- > 0; )
    n[s] = o, o = t[o];
  return n;
}
function _a(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : _a(t);
}
function To(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function ga(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? ga(t.subTree) : null;
}
const ma = (e) => e.__isSuspense;
function fc(e, t) {
  t && t.pendingBranch ? U(e) ? t.effects.push(...e) : t.effects.push(e) : mu(e);
}
const wt = /* @__PURE__ */ Symbol.for("v-fgt"), Cr = /* @__PURE__ */ Symbol.for("v-txt"), Pt = /* @__PURE__ */ Symbol.for("v-cmt"), Br = /* @__PURE__ */ Symbol.for("v-stc"), di = [];
let Jt = null;
function Q(e = !1) {
  di.push(Jt = e ? null : []);
}
function uc() {
  di.pop(), Jt = di[di.length - 1] || null;
}
let bi = 1;
function nr(e, t = !1) {
  bi += e, e < 0 && Jt && t && (Jt.hasOnce = !0);
}
function ya(e) {
  return e.dynamicChildren = bi > 0 ? Jt || Fn : null, uc(), bi > 0 && Jt && Jt.push(e), e;
}
function gt(e, t, n, i, r, s) {
  return ya(
    $(
      e,
      t,
      n,
      i,
      r,
      s,
      !0
    )
  );
}
function Ae(e, t, n, i, r) {
  return ya(
    Mt(
      e,
      t,
      n,
      i,
      r,
      !0
    )
  );
}
function wi(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function vn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const va = ({ key: e }) => e ?? null, Wi = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? yt(e) || kt(e) || K(e) ? { i: Lt, r: e, k: t, f: !!n } : e : null);
function $(e, t = null, n = null, i = 0, r = null, s = e === wt ? 0 : 1, o = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && va(t),
    ref: t && Wi(t),
    scopeId: Vl,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: i,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Lt
  };
  return l ? (Ns(a, n), s & 128 && e.normalize(a)) : n && (a.shapeFlag |= yt(n) ? 8 : 16), bi > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Jt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Jt.push(a), a;
}
const Mt = cc;
function cc(e, t = null, n = null, i = 0, r = null, s = !1) {
  if ((!e || e === Ql) && (e = Pt), wi(e)) {
    const l = sn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ns(l, n), bi > 0 && !s && Jt && (l.shapeFlag & 6 ? Jt[Jt.indexOf(e)] = l : Jt.push(l)), l.patchFlag = -2, l;
  }
  if (wc(e) && (e = e.__vccOpts), t) {
    t = hc(t);
    let { class: l, style: a } = t;
    l && !yt(l) && (t.class = ct(l)), ut(a) && (Rs(a) && !U(a) && (a = Tt({}, a)), t.style = Di(a));
  }
  const o = yt(e) ? 1 : ma(e) ? 128 : Ul(e) ? 64 : ut(e) ? 4 : K(e) ? 2 : 0;
  return $(
    e,
    t,
    n,
    i,
    r,
    o,
    s,
    !0
  );
}
function hc(e) {
  return e ? Rs(e) || aa(e) ? Tt({}, e) : e : null;
}
function sn(e, t, n = !1, i = !1) {
  const { props: r, ref: s, patchFlag: o, children: l, transition: a } = e, u = t ? dc(r || {}, t) : r, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && va(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? U(s) ? s.concat(Wi(t)) : [s, Wi(t)] : Wi(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== wt ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && sn(e.ssContent),
    ssFallback: e.ssFallback && sn(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && i && xi(
    f,
    a.clone(f)
  ), f;
}
function xa(e = " ", t = 0) {
  return Mt(Cr, null, e, t);
}
function ce(e = "", t = !1) {
  return t ? (Q(), Ae(Pt, null, e)) : Mt(Pt, null, e);
}
function Se(e) {
  return e == null || typeof e == "boolean" ? Mt(Pt) : U(e) ? Mt(
    wt,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : wi(e) ? Ye(e) : Mt(Cr, null, String(e));
}
function Ye(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : sn(e);
}
function Ns(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (U(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Ns(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !aa(t) ? t._ctx = Lt : r === 3 && Lt && (Lt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else K(t) ? (t = { default: t, _ctx: Lt }, n = 32) : (t = String(t), i & 64 ? (n = 16, t = [xa(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function dc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const r in i)
      if (r === "class")
        t.class !== i.class && (t.class = ct([t.class, i.class]));
      else if (r === "style")
        t.style = Di([t.style, i.style]);
      else if (cr(r)) {
        const s = t[r], o = i[r];
        o && s !== o && !(U(s) && s.includes(o)) && (t[r] = s ? [].concat(s, o) : o);
      } else r !== "" && (t[r] = i[r]);
  }
  return t;
}
function ve(e, t, n, i = null) {
  pe(e, t, 7, [
    n,
    i
  ]);
}
const pc = ra();
let _c = 0;
function gc(e, t, n) {
  const i = e.type, r = (t ? t.appContext : e.appContext) || pc, s = {
    uid: _c++,
    vnode: e,
    type: i,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Bf(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: ua(i, r),
    emitsOptions: sa(i, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: at,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: at,
    data: at,
    props: at,
    attrs: at,
    slots: at,
    refs: at,
    setupState: at,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = qu.bind(null, s), e.ce && e.ce(s), s;
}
let At = null;
const ba = () => At || Lt;
let ir, ls;
{
  const e = _r(), t = (n, i) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(i), (s) => {
      r.length > 1 ? r.forEach((o) => o(s)) : r[0](s);
    };
  };
  ir = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => At = n
  ), ls = t(
    "__VUE_SSR_SETTERS__",
    (n) => Ti = n
  );
}
const Ii = (e) => {
  const t = At;
  return ir(e), e.scope.on(), () => {
    e.scope.off(), ir(t);
  };
}, So = () => {
  At && At.scope.off(), ir(null);
};
function wa(e) {
  return e.vnode.shapeFlag & 4;
}
let Ti = !1;
function mc(e, t = !1, n = !1) {
  t && ls(t);
  const { props: i, children: r } = e.vnode, s = wa(e);
  Qu(e, i, s, t), ic(e, r, n || t);
  const o = s ? yc(e, t) : void 0;
  return t && ls(!1), o;
}
function yc(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, $u);
  const { setup: i } = n;
  if (i) {
    $e();
    const r = e.setupContext = i.length > 1 ? xc(e) : null, s = Ii(e), o = Ri(
      i,
      e,
      0,
      [
        e.props,
        r
      ]
    ), l = dl(o);
    if (ze(), s(), (l || e.sp) && !$n(e) && Xl(e), l) {
      if (o.then(So, So), t)
        return o.then((a) => {
          Co(e, a);
        }).catch((a) => {
          yr(a, e, 0);
        });
      e.asyncDep = o;
    } else
      Co(e, o);
  } else
    Ta(e);
}
function Co(e, t, n) {
  K(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ut(t) && (e.setupState = Fl(t)), Ta(e);
}
function Ta(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || Pe);
  {
    const r = Ii(e);
    $e();
    try {
      zu(e);
    } finally {
      ze(), r();
    }
  }
}
const vc = {
  get(e, t) {
    return Ot(e, "get", ""), e[t];
  }
};
function xc(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, vc),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function $s(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Fl(lu(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in hi)
        return hi[n](e);
    },
    has(t, n) {
      return n in t || n in hi;
    }
  })) : e.proxy;
}
function bc(e, t = !0) {
  return K(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function wc(e) {
  return K(e) && "__vccOpts" in e;
}
const Yt = (e, t) => hu(e, t, Ti);
function Tc(e, t, n) {
  try {
    nr(-1);
    const i = arguments.length;
    return i === 2 ? ut(t) && !U(t) ? wi(t) ? Mt(e, null, [t]) : Mt(e, t) : Mt(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && wi(n) && (n = [n]), Mt(e, t, n));
  } finally {
    nr(1);
  }
}
const Sc = "3.5.26";
/**
* @vue/runtime-dom v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let as;
const Oo = typeof window < "u" && window.trustedTypes;
if (Oo)
  try {
    as = /* @__PURE__ */ Oo.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Sa = as ? (e) => as.createHTML(e) : (e) => e, Cc = "http://www.w3.org/2000/svg", Oc = "http://www.w3.org/1998/Math/MathML", Re = typeof document < "u" ? document : null, Po = Re && /* @__PURE__ */ Re.createElement("template"), Pc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const r = t === "svg" ? Re.createElementNS(Cc, e) : t === "mathml" ? Re.createElementNS(Oc, e) : n ? Re.createElement(e, { is: n }) : Re.createElement(e);
    return e === "select" && i && i.multiple != null && r.setAttribute("multiple", i.multiple), r;
  },
  createText: (e) => Re.createTextNode(e),
  createComment: (e) => Re.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Re.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, i, r, s) {
    const o = n ? n.previousSibling : t.lastChild;
    if (r && (r === s || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === s || !(r = r.nextSibling)); )
        ;
    else {
      Po.innerHTML = Sa(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Po.content;
      if (i === "svg" || i === "mathml") {
        const a = l.firstChild;
        for (; a.firstChild; )
          l.appendChild(a.firstChild);
        l.removeChild(a);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, We = "transition", ni = "animation", Si = /* @__PURE__ */ Symbol("_vtc"), Ca = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, Ac = /* @__PURE__ */ Tt(
  {},
  Wl,
  Ca
), Ec = (e) => (e.displayName = "Transition", e.props = Ac, e), Ao = /* @__PURE__ */ Ec(
  (e, { slots: t }) => Tc(Cu, Mc(e), t)
), dn = (e, t = []) => {
  U(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Eo = (e) => e ? U(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Mc(e) {
  const t = {};
  for (const R in e)
    R in Ca || (t[R] = e[R]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: i,
    duration: r,
    enterFromClass: s = `${n}-enter-from`,
    enterActiveClass: o = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: a = s,
    appearActiveClass: u = o,
    appearToClass: f = l,
    leaveFromClass: c = `${n}-leave-from`,
    leaveActiveClass: d = `${n}-leave-active`,
    leaveToClass: h = `${n}-leave-to`
  } = e, m = kc(r), p = m && m[0], v = m && m[1], {
    onBeforeEnter: b,
    onEnter: T,
    onEnterCancelled: C,
    onLeave: x,
    onLeaveCancelled: y,
    onBeforeAppear: O = b,
    onAppear: M = T,
    onAppearCancelled: D = C
  } = t, w = (R, j, J, it) => {
    R._enterCancelled = it, pn(R, j ? f : l), pn(R, j ? u : o), J && J();
  }, L = (R, j) => {
    R._isLeaving = !1, pn(R, c), pn(R, h), pn(R, d), j && j();
  }, B = (R) => (j, J) => {
    const it = R ? M : T, Y = () => w(j, R, J);
    dn(it, [j, Y]), Mo(() => {
      pn(j, R ? a : s), De(j, R ? f : l), Eo(it) || ko(j, i, p, Y);
    });
  };
  return Tt(t, {
    onBeforeEnter(R) {
      dn(b, [R]), De(R, s), De(R, o);
    },
    onBeforeAppear(R) {
      dn(O, [R]), De(R, a), De(R, u);
    },
    onEnter: B(!1),
    onAppear: B(!0),
    onLeave(R, j) {
      R._isLeaving = !0;
      const J = () => L(R, j);
      De(R, c), R._enterCancelled ? (De(R, d), Io(R)) : (Io(R), De(R, d)), Mo(() => {
        R._isLeaving && (pn(R, c), De(R, h), Eo(x) || ko(R, i, v, J));
      }), dn(x, [R, J]);
    },
    onEnterCancelled(R) {
      w(R, !1, void 0, !0), dn(C, [R]);
    },
    onAppearCancelled(R) {
      w(R, !0, void 0, !0), dn(D, [R]);
    },
    onLeaveCancelled(R) {
      L(R), dn(y, [R]);
    }
  });
}
function kc(e) {
  if (e == null)
    return null;
  if (ut(e))
    return [Vr(e.enter), Vr(e.leave)];
  {
    const t = Vr(e);
    return [t, t];
  }
}
function Vr(e) {
  return Rf(e);
}
function De(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Si] || (e[Si] = /* @__PURE__ */ new Set())).add(t);
}
function pn(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.remove(i));
  const n = e[Si];
  n && (n.delete(t), n.size || (e[Si] = void 0));
}
function Mo(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Dc = 0;
function ko(e, t, n, i) {
  const r = e._endId = ++Dc, s = () => {
    r === e._endId && i();
  };
  if (n != null)
    return setTimeout(s, n);
  const { type: o, timeout: l, propCount: a } = Rc(e, t);
  if (!o)
    return i();
  const u = o + "end";
  let f = 0;
  const c = () => {
    e.removeEventListener(u, d), s();
  }, d = (h) => {
    h.target === e && ++f >= a && c();
  };
  setTimeout(() => {
    f < a && c();
  }, l + 1), e.addEventListener(u, d);
}
function Rc(e, t) {
  const n = window.getComputedStyle(e), i = (m) => (n[m] || "").split(", "), r = i(`${We}Delay`), s = i(`${We}Duration`), o = Do(r, s), l = i(`${ni}Delay`), a = i(`${ni}Duration`), u = Do(l, a);
  let f = null, c = 0, d = 0;
  t === We ? o > 0 && (f = We, c = o, d = s.length) : t === ni ? u > 0 && (f = ni, c = u, d = a.length) : (c = Math.max(o, u), f = c > 0 ? o > u ? We : ni : null, d = f ? f === We ? s.length : a.length : 0);
  const h = f === We && /\b(?:transform|all)(?:,|$)/.test(
    i(`${We}Property`).toString()
  );
  return {
    type: f,
    timeout: c,
    propCount: d,
    hasTransform: h
  };
}
function Do(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, i) => Ro(n) + Ro(e[i])));
}
function Ro(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Io(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Ic(e, t, n) {
  const i = e[Si];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Fo = /* @__PURE__ */ Symbol("_vod"), Fc = /* @__PURE__ */ Symbol("_vsh"), Lc = /* @__PURE__ */ Symbol(""), Nc = /(?:^|;)\s*display\s*:/;
function $c(e, t, n) {
  const i = e.style, r = yt(n);
  let s = !1;
  if (n && !r) {
    if (t)
      if (yt(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && Ki(i, l, "");
        }
      else
        for (const o in t)
          n[o] == null && Ki(i, o, "");
    for (const o in n)
      o === "display" && (s = !0), Ki(i, o, n[o]);
  } else if (r) {
    if (t !== n) {
      const o = i[Lc];
      o && (n += ";" + o), i.cssText = n, s = Nc.test(n);
    }
  } else t && e.removeAttribute("style");
  Fo in e && (e[Fo] = s ? i.display : "", e[Fc] && (i.display = "none"));
}
const Lo = /\s*!important$/;
function Ki(e, t, n) {
  if (U(n))
    n.forEach((i) => Ki(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const i = zc(e, t);
    Lo.test(n) ? e.setProperty(
      Pn(i),
      n.replace(Lo, ""),
      "important"
    ) : e[i] = n;
  }
}
const No = ["Webkit", "Moz", "ms"], jr = {};
function zc(e, t) {
  const n = jr[t];
  if (n)
    return n;
  let i = fe(t);
  if (i !== "filter" && i in e)
    return jr[t] = i;
  i = pr(i);
  for (let r = 0; r < No.length; r++) {
    const s = No[r] + i;
    if (s in e)
      return jr[t] = s;
  }
  return t;
}
const $o = "http://www.w3.org/1999/xlink";
function zo(e, t, n, i, r, s = zf(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS($o, t.slice(6, t.length)) : e.setAttributeNS($o, t, n) : n == null || s && !ml(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : He(n) ? String(n) : n
  );
}
function Bo(e, t, n, i, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Sa(n) : n);
    return;
  }
  const s = e.tagName;
  if (t === "value" && s !== "PROGRESS" && // custom elements may use _value internally
  !s.includes("-")) {
    const l = s === "OPTION" ? e.getAttribute("value") || "" : e.value, a = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== a || !("_value" in e)) && (e.value = a), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = ml(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(r || t);
}
function Bc(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function Vc(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const Vo = /* @__PURE__ */ Symbol("_vei");
function jc(e, t, n, i, r = null) {
  const s = e[Vo] || (e[Vo] = {}), o = s[t];
  if (i && o)
    o.value = i;
  else {
    const [l, a] = Hc(t);
    if (i) {
      const u = s[t] = Kc(
        i,
        r
      );
      Bc(e, l, u, a);
    } else o && (Vc(e, l, o, a), s[t] = void 0);
  }
}
const jo = /(?:Once|Passive|Capture)$/;
function Hc(e) {
  let t;
  if (jo.test(e)) {
    t = {};
    let i;
    for (; i = e.match(jo); )
      e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Pn(e.slice(2)), t];
}
let Hr = 0;
const Uc = /* @__PURE__ */ Promise.resolve(), Wc = () => Hr || (Uc.then(() => Hr = 0), Hr = Date.now());
function Kc(e, t) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    pe(
      qc(i, n.value),
      t,
      5,
      [i]
    );
  };
  return n.value = e, n.attached = Wc(), n;
}
function qc(e, t) {
  if (U(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (i) => (r) => !r._stopped && i && i(r)
    );
  } else
    return t;
}
const Ho = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Yc = (e, t, n, i, r, s) => {
  const o = r === "svg";
  t === "class" ? Ic(e, i, o) : t === "style" ? $c(e, n, i) : cr(t) ? Ss(t) || jc(e, t, n, i, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Gc(e, t, i, o)) ? (Bo(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && zo(e, t, i, o, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !yt(i)) ? Bo(e, fe(t), i, s, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), zo(e, t, i, o));
};
function Gc(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ho(t) && K(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Ho(t) && yt(n) ? !1 : t in e;
}
const Xc = ["ctrl", "shift", "alt", "meta"], Jc = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => Xc.some((n) => e[`${n}Key`] && !t.includes(n))
}, Zc = (e, t) => {
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = (r, ...s) => {
    for (let o = 0; o < t.length; o++) {
      const l = Jc[t[o]];
      if (l && l(r, t)) return;
    }
    return e(r, ...s);
  });
}, Qc = /* @__PURE__ */ Tt({ patchProp: Yc }, Pc);
let Uo;
function th() {
  return Uo || (Uo = sc(Qc));
}
const eh = (...e) => {
  const t = th().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const r = ih(i);
    if (!r) return;
    const s = t._component;
    !K(s) && !s.render && !s.template && (s.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = n(r, !1, nh(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
};
function nh(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function ih(e) {
  return yt(e) ? document.querySelector(e) : e;
}
const Wo = {
  // Icons
  "i:s": "star",
  "i:u": "users",
  "i:c": "check",
  "i:a": "arrow-right",
  // Colors (Tailwind standard approximation)
  "c:p": "#6366f1",
  // Primary (Indigo)
  "c:s": "#10b981",
  // Success (Emerald)
  "c:d": "#ef4444",
  // Danger (Red)
  // Variants
  "v:g": "gradient",
  "v:o": "outlined",
  "v:s": "soft"
};
function rh(e) {
  return e in Wo ? Wo[e] : e;
}
const Fi = Symbol("LuminaStore"), sh = {
  loop: !1,
  navigation: !0,
  keyboard: !0,
  touch: !0,
  debug: !1,
  theme: "default",
  ui: {
    visible: !0,
    showProgressBar: !0,
    showSlideCount: !0,
    showControls: !0
  },
  keys: {
    next: ["ArrowRight", " ", "Enter"],
    prev: ["ArrowLeft", "Backspace"]
  },
  animation: {
    enabled: !0,
    type: "cascade",
    durationIn: 1,
    durationOut: 0.5,
    stagger: 0.1,
    ease: "power3.out"
  }
};
function Bn(e) {
  if (typeof e == "string") return rh(e);
  if (Array.isArray(e)) return e.map(Bn);
  if (e && typeof e == "object") {
    const t = {};
    for (const n in e)
      t[n] = Bn(e[n]);
    return t;
  }
  return e;
}
function Oa(e, t) {
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return t;
  if (Array.isArray(t))
    return t.map(Bn);
  const n = { ...e };
  for (const i in t)
    t[i] === Object(t[i]) ? i in e ? n[i] = Oa(e[i], t[i]) : Object.assign(n, { [i]: Bn(t[i]) }) : Object.assign(n, { [i]: Bn(t[i]) });
  return n;
}
function oh(e = {}) {
  const t = mr({
    deck: null,
    currentIndex: 0,
    options: { ...sh, ...e },
    isReady: !1,
    actionHistory: []
  }), n = () => !t.deck || t.deck.slides.length === 0 ? null : t.deck.slides[t.currentIndex] || null, i = () => t.deck ? t.options.loop ? !0 : t.currentIndex < t.deck.slides.length - 1 : !1, r = () => t.deck ? t.options.loop ? !0 : t.currentIndex > 0 : !1, s = () => !t.deck || t.deck.slides.length <= 1 ? 0 : t.currentIndex / (t.deck.slides.length - 1);
  function o(h) {
    t.options = { ...t.options, ...h }, h.theme && (h.theme, t.options.theme = h.theme), h.ui && (t.options.ui = { ...t.options.ui, ...h.ui }), h.keys && (t.options.keys = { ...t.options.keys, ...h.keys }), h.animation && (t.options.animation = { ...t.options.animation, ...h.animation });
  }
  function l(h) {
    if (!h || !Array.isArray(h.slides)) {
      console.error("[LuminaStore] Invalid deck format");
      return;
    }
    t.deck = Bn(h), t.currentIndex = 0, t.isReady = !0, t.actionHistory = [];
  }
  function a(h) {
    t.deck && (t.deck = Oa(t.deck, h));
  }
  function u(h) {
    t.actionHistory.push(h), t.actionHistory.length > 50 && t.actionHistory.shift();
  }
  function f() {
    var m;
    if (!i()) return;
    const h = ((m = t.deck) == null ? void 0 : m.slides.length) || 0;
    t.options.loop ? t.currentIndex = (t.currentIndex + 1) % h : t.currentIndex++;
  }
  function c() {
    var m;
    if (!r()) return;
    const h = ((m = t.deck) == null ? void 0 : m.slides.length) || 0;
    t.options.loop ? t.currentIndex = (t.currentIndex - 1 + h) % h : t.currentIndex--;
  }
  function d(h) {
    t.deck && h >= 0 && h < t.deck.slides.length && (t.currentIndex = h);
  }
  return {
    state: Xi(t),
    currentSlide: n,
    hasNext: i,
    hasPrev: r,
    progress: s,
    setOptions: o,
    loadDeck: l,
    patchDeck: a,
    recordAction: u,
    next: f,
    prev: c,
    goto: d
  };
}
function lh() {
  const e = tn(Fi);
  if (!e)
    throw new Error("Lumina: Component must be used within a Lumina instance.");
  return {
    // State
    slide: Yt(() => e.currentSlide()),
    index: Yt(() => e.state.currentIndex),
    total: Yt(() => {
      var t;
      return ((t = e.state.deck) == null ? void 0 : t.slides.length) || 0;
    }),
    // Actions
    next: e.next,
    prev: e.prev,
    goto: e.goto,
    options: e.state.options
  };
}
function ah() {
  const e = tn(Fi);
  if (!e) return;
  let t = 0;
  const n = 300, i = (r) => {
    var u, f;
    const { options: s } = e.state;
    if (!s.keyboard || !s.navigation) return;
    const o = Date.now();
    if (o - t < n) return;
    const l = ((u = s.keys) == null ? void 0 : u.next) || [], a = ((f = s.keys) == null ? void 0 : f.prev) || [];
    l.includes(r.key) ? (e.next(), t = o) : a.includes(r.key) && (e.prev(), t = o);
  };
  br(() => {
    window.addEventListener("keydown", i);
  }), wr(() => {
    window.removeEventListener("keydown", i);
  });
}
class fh {
  constructor() {
    zi(this, "handlers", /* @__PURE__ */ new Map());
  }
  on(t, n) {
    this.handlers.has(t) || this.handlers.set(t, /* @__PURE__ */ new Set()), this.handlers.get(t).add(n);
  }
  off(t, n) {
    const i = this.handlers.get(t);
    i && i.delete(n);
  }
  emit(t, n) {
    const i = this.handlers.get(t);
    i && i.forEach((r) => {
      try {
        r(n);
      } catch (s) {
        console.error(`[LuminaBus] Error in handler for event "${t}":`, s);
      }
    });
  }
  clear() {
    this.handlers.clear();
  }
}
const Dn = new fh();
function Ie(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Pa(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var te = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, Wn = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, zs, Ct, ht, oe = 1e8, st = 1 / oe, fs = Math.PI * 2, uh = fs / 4, ch = 0, Aa = Math.sqrt, hh = Math.cos, dh = Math.sin, St = function(t) {
  return typeof t == "string";
}, mt = function(t) {
  return typeof t == "function";
}, Ve = function(t) {
  return typeof t == "number";
}, Bs = function(t) {
  return typeof t > "u";
}, Ee = function(t) {
  return typeof t == "object";
}, Bt = function(t) {
  return t !== !1;
}, Vs = function() {
  return typeof window < "u";
}, Ui = function(t) {
  return mt(t) || St(t);
}, Ea = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, Dt = Array.isArray, ph = /random\([^)]+\)/g, _h = /,\s*/g, Ko = /(?:-?\.?\d|\.)+/gi, Ma = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Rn = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Ur = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, ka = /[+-]=-?[.\d]+/, gh = /[^,'"\[\]\s]+/gi, mh = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, pt, Te, us, js, ee = {}, rr = {}, Da, Ra = function(t) {
  return (rr = Kn(t, ee)) && Ut;
}, Hs = function(t, n) {
  return console.warn("Invalid property", t, "set to", n, "Missing plugin? gsap.registerPlugin()");
}, Ci = function(t, n) {
  return !n && console.warn(t);
}, Ia = function(t, n) {
  return t && (ee[t] = n) && rr && (rr[t] = n) || ee;
}, Oi = function() {
  return 0;
}, yh = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, qi = {
  suppressEvents: !0,
  kill: !1
}, vh = {
  suppressEvents: !0
}, Us = {}, en = [], cs = {}, Fa, Gt = {}, Wr = {}, qo = 30, Yi = [], Ws = "", Ks = function(t) {
  var n = t[0], i, r;
  if (Ee(n) || mt(n) || (t = [t]), !(i = (n._gsap || {}).harness)) {
    for (r = Yi.length; r-- && !Yi[r].targetTest(n); )
      ;
    i = Yi[r];
  }
  for (r = t.length; r--; )
    t[r] && (t[r]._gsap || (t[r]._gsap = new of(t[r], i))) || t.splice(r, 1);
  return t;
}, Tn = function(t) {
  return t._gsap || Ks(le(t))[0]._gsap;
}, La = function(t, n, i) {
  return (i = t[n]) && mt(i) ? t[n]() : Bs(i) && t.getAttribute && t.getAttribute(n) || i;
}, Vt = function(t, n) {
  return (t = t.split(",")).forEach(n) || t;
}, vt = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, dt = function(t) {
  return Math.round(t * 1e7) / 1e7 || 0;
}, Vn = function(t, n) {
  var i = n.charAt(0), r = parseFloat(n.substr(2));
  return t = parseFloat(t), i === "+" ? t + r : i === "-" ? t - r : i === "*" ? t * r : t / r;
}, xh = function(t, n) {
  for (var i = n.length, r = 0; t.indexOf(n[r]) < 0 && ++r < i; )
    ;
  return r < i;
}, sr = function() {
  var t = en.length, n = en.slice(0), i, r;
  for (cs = {}, en.length = 0, i = 0; i < t; i++)
    r = n[i], r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
}, qs = function(t) {
  return !!(t._initted || t._startAt || t.add);
}, Na = function(t, n, i, r) {
  en.length && !Ct && sr(), t.render(n, i, !!(Ct && n < 0 && qs(t))), en.length && !Ct && sr();
}, $a = function(t) {
  var n = parseFloat(t);
  return (n || n === 0) && (t + "").match(gh).length < 2 ? n : St(t) ? t.trim() : t;
}, za = function(t) {
  return t;
}, ne = function(t, n) {
  for (var i in n)
    i in t || (t[i] = n[i]);
  return t;
}, bh = function(t) {
  return function(n, i) {
    for (var r in i)
      r in n || r === "duration" && t || r === "ease" || (n[r] = i[r]);
  };
}, Kn = function(t, n) {
  for (var i in n)
    t[i] = n[i];
  return t;
}, Yo = function e(t, n) {
  for (var i in n)
    i !== "__proto__" && i !== "constructor" && i !== "prototype" && (t[i] = Ee(n[i]) ? e(t[i] || (t[i] = {}), n[i]) : n[i]);
  return t;
}, or = function(t, n) {
  var i = {}, r;
  for (r in t)
    r in n || (i[r] = t[r]);
  return i;
}, pi = function(t) {
  var n = t.parent || pt, i = t.keyframes ? bh(Dt(t.keyframes)) : ne;
  if (Bt(t.inherit))
    for (; n; )
      i(t, n.vars.defaults), n = n.parent || n._dp;
  return t;
}, wh = function(t, n) {
  for (var i = t.length, r = i === n.length; r && i-- && t[i] === n[i]; )
    ;
  return i < 0;
}, Ba = function(t, n, i, r, s) {
  var o = t[r], l;
  if (s)
    for (l = n[s]; o && o[s] > l; )
      o = o._prev;
  return o ? (n._next = o._next, o._next = n) : (n._next = t[i], t[i] = n), n._next ? n._next._prev = n : t[r] = n, n._prev = o, n.parent = n._dp = t, n;
}, Or = function(t, n, i, r) {
  i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
  var s = n._prev, o = n._next;
  s ? s._next = o : t[i] === n && (t[i] = o), o ? o._prev = s : t[r] === n && (t[r] = s), n._next = n._prev = n.parent = null;
}, on = function(t, n) {
  t.parent && (!n || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0;
}, Sn = function(t, n) {
  if (t && (!n || n._end > t._dur || n._start < 0))
    for (var i = t; i; )
      i._dirty = 1, i = i.parent;
  return t;
}, Th = function(t) {
  for (var n = t.parent; n && n.parent; )
    n._dirty = 1, n.totalDuration(), n = n.parent;
  return t;
}, hs = function(t, n, i, r) {
  return t._startAt && (Ct ? t._startAt.revert(qi) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(n, !0, r));
}, Sh = function e(t) {
  return !t || t._ts && e(t.parent);
}, Go = function(t) {
  return t._repeat ? qn(t._tTime, t = t.duration() + t._rDelay) * t : 0;
}, qn = function(t, n) {
  var i = Math.floor(t = dt(t / n));
  return t && i === t ? i - 1 : i;
}, lr = function(t, n) {
  return (t - n._start) * n._ts + (n._ts >= 0 ? 0 : n._dirty ? n.totalDuration() : n._tDur);
}, Pr = function(t) {
  return t._end = dt(t._start + (t._tDur / Math.abs(t._ts || t._rts || st) || 0));
}, Ar = function(t, n) {
  var i = t._dp;
  return i && i.smoothChildTiming && t._ts && (t._start = dt(i._time - (t._ts > 0 ? n / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - n) / -t._ts)), Pr(t), i._dirty || Sn(i, t)), t;
}, Va = function(t, n) {
  var i;
  if ((n._time || !n._dur && n._initted || n._start < t._time && (n._dur || !n.add)) && (i = lr(t.rawTime(), n), (!n._dur || Li(0, n.totalDuration(), i) - n._tTime > st) && n.render(i, !0)), Sn(t, n)._dp && t._initted && t._time >= t._dur && t._ts) {
    if (t._dur < t.duration())
      for (i = t; i._dp; )
        i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
    t._zTime = -st;
  }
}, Ce = function(t, n, i, r) {
  return n.parent && on(n), n._start = dt((Ve(i) ? i : i || t !== pt ? se(t, i, n) : t._time) + n._delay), n._end = dt(n._start + (n.totalDuration() / Math.abs(n.timeScale()) || 0)), Ba(t, n, "_first", "_last", t._sort ? "_start" : 0), ds(n) || (t._recent = n), r || Va(t, n), t._ts < 0 && Ar(t, t._tTime), t;
}, ja = function(t, n) {
  return (ee.ScrollTrigger || Hs("scrollTrigger", n)) && ee.ScrollTrigger.create(n, t);
}, Ha = function(t, n, i, r, s) {
  if (Gs(t, n, s), !t._initted)
    return 1;
  if (!i && t._pt && !Ct && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && Fa !== Xt.frame)
    return en.push(t), t._lazy = [s, r], 1;
}, Ch = function e(t) {
  var n = t.parent;
  return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || e(n));
}, ds = function(t) {
  var n = t.data;
  return n === "isFromStart" || n === "isStart";
}, Oh = function(t, n, i, r) {
  var s = t.ratio, o = n < 0 || !n && (!t._start && Ch(t) && !(!t._initted && ds(t)) || (t._ts < 0 || t._dp._ts < 0) && !ds(t)) ? 0 : 1, l = t._rDelay, a = 0, u, f, c;
  if (l && t._repeat && (a = Li(0, t._tDur, n), f = qn(a, l), t._yoyo && f & 1 && (o = 1 - o), f !== qn(t._tTime, l) && (s = 1 - o, t.vars.repeatRefresh && t._initted && t.invalidate())), o !== s || Ct || r || t._zTime === st || !n && t._zTime) {
    if (!t._initted && Ha(t, n, r, i, a))
      return;
    for (c = t._zTime, t._zTime = n || (i ? st : 0), i || (i = n && !c), t.ratio = o, t._from && (o = 1 - o), t._time = 0, t._tTime = a, u = t._pt; u; )
      u.r(o, u.d), u = u._next;
    n < 0 && hs(t, n, i, !0), t._onUpdate && !i && Zt(t, "onUpdate"), a && t._repeat && !i && t.parent && Zt(t, "onRepeat"), (n >= t._tDur || n < 0) && t.ratio === o && (o && on(t, 1), !i && !Ct && (Zt(t, o ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
  } else t._zTime || (t._zTime = n);
}, Ph = function(t, n, i) {
  var r;
  if (i > n)
    for (r = t._first; r && r._start <= i; ) {
      if (r.data === "isPause" && r._start > n)
        return r;
      r = r._next;
    }
  else
    for (r = t._last; r && r._start >= i; ) {
      if (r.data === "isPause" && r._start < n)
        return r;
      r = r._prev;
    }
}, Yn = function(t, n, i, r) {
  var s = t._repeat, o = dt(n) || 0, l = t._tTime / t._tDur;
  return l && !r && (t._time *= o / t._dur), t._dur = o, t._tDur = s ? s < 0 ? 1e10 : dt(o * (s + 1) + t._rDelay * s) : o, l > 0 && !r && Ar(t, t._tTime = t._tDur * l), t.parent && Pr(t), i || Sn(t.parent, t), t;
}, Xo = function(t) {
  return t instanceof Ft ? Sn(t) : Yn(t, t._dur);
}, Ah = {
  _start: 0,
  endTime: Oi,
  totalDuration: Oi
}, se = function e(t, n, i) {
  var r = t.labels, s = t._recent || Ah, o = t.duration() >= oe ? s.endTime(!1) : t._dur, l, a, u;
  return St(n) && (isNaN(n) || n in r) ? (a = n.charAt(0), u = n.substr(-1) === "%", l = n.indexOf("="), a === "<" || a === ">" ? (l >= 0 && (n = n.replace(/=/, "")), (a === "<" ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (u ? (l < 0 ? s : i).totalDuration() / 100 : 1)) : l < 0 ? (n in r || (r[n] = o), r[n]) : (a = parseFloat(n.charAt(l - 1) + n.substr(l + 1)), u && i && (a = a / 100 * (Dt(i) ? i[0] : i).totalDuration()), l > 1 ? e(t, n.substr(0, l - 1), i) + a : o + a)) : n == null ? o : +n;
}, _i = function(t, n, i) {
  var r = Ve(n[1]), s = (r ? 2 : 1) + (t < 2 ? 0 : 1), o = n[s], l, a;
  if (r && (o.duration = n[1]), o.parent = i, t) {
    for (l = o, a = i; a && !("immediateRender" in l); )
      l = a.vars.defaults || {}, a = Bt(a.vars.inherit) && a.parent;
    o.immediateRender = Bt(l.immediateRender), t < 2 ? o.runBackwards = 1 : o.startAt = n[s - 1];
  }
  return new xt(n[0], o, n[s + 1]);
}, un = function(t, n) {
  return t || t === 0 ? n(t) : n;
}, Li = function(t, n, i) {
  return i < t ? t : i > n ? n : i;
}, Et = function(t, n) {
  return !St(t) || !(n = mh.exec(t)) ? "" : n[1];
}, Eh = function(t, n, i) {
  return un(i, function(r) {
    return Li(t, n, r);
  });
}, ps = [].slice, Ua = function(t, n) {
  return t && Ee(t) && "length" in t && (!n && !t.length || t.length - 1 in t && Ee(t[0])) && !t.nodeType && t !== Te;
}, Mh = function(t, n, i) {
  return i === void 0 && (i = []), t.forEach(function(r) {
    var s;
    return St(r) && !n || Ua(r, 1) ? (s = i).push.apply(s, le(r)) : i.push(r);
  }) || i;
}, le = function(t, n, i) {
  return ht && !n && ht.selector ? ht.selector(t) : St(t) && !i && (us || !Gn()) ? ps.call((n || js).querySelectorAll(t), 0) : Dt(t) ? Mh(t, i) : Ua(t) ? ps.call(t, 0) : t ? [t] : [];
}, _s = function(t) {
  return t = le(t)[0] || Ci("Invalid scope") || {}, function(n) {
    var i = t.current || t.nativeElement || t;
    return le(n, i.querySelectorAll ? i : i === t ? Ci("Invalid scope") || js.createElement("div") : t);
  };
}, Wa = function(t) {
  return t.sort(function() {
    return 0.5 - Math.random();
  });
}, Ka = function(t) {
  if (mt(t))
    return t;
  var n = Ee(t) ? t : {
    each: t
  }, i = Cn(n.ease), r = n.from || 0, s = parseFloat(n.base) || 0, o = {}, l = r > 0 && r < 1, a = isNaN(r) || l, u = n.axis, f = r, c = r;
  return St(r) ? f = c = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[r] || 0 : !l && a && (f = r[0], c = r[1]), function(d, h, m) {
    var p = (m || n).length, v = o[p], b, T, C, x, y, O, M, D, w;
    if (!v) {
      if (w = n.grid === "auto" ? 0 : (n.grid || [1, oe])[1], !w) {
        for (M = -oe; M < (M = m[w++].getBoundingClientRect().left) && w < p; )
          ;
        w < p && w--;
      }
      for (v = o[p] = [], b = a ? Math.min(w, p) * f - 0.5 : r % w, T = w === oe ? 0 : a ? p * c / w - 0.5 : r / w | 0, M = 0, D = oe, O = 0; O < p; O++)
        C = O % w - b, x = T - (O / w | 0), v[O] = y = u ? Math.abs(u === "y" ? x : C) : Aa(C * C + x * x), y > M && (M = y), y < D && (D = y);
      r === "random" && Wa(v), v.max = M - D, v.min = D, v.v = p = (parseFloat(n.amount) || parseFloat(n.each) * (w > p ? p - 1 : u ? u === "y" ? p / w : w : Math.max(w, p / w)) || 0) * (r === "edges" ? -1 : 1), v.b = p < 0 ? s - p : s, v.u = Et(n.amount || n.each) || 0, i = i && p < 0 ? nf(i) : i;
    }
    return p = (v[d] - v.min) / v.max || 0, dt(v.b + (i ? i(p) : p) * v.v) + v.u;
  };
}, gs = function(t) {
  var n = Math.pow(10, ((t + "").split(".")[1] || "").length);
  return function(i) {
    var r = dt(Math.round(parseFloat(i) / t) * t * n);
    return (r - r % 1) / n + (Ve(i) ? 0 : Et(i));
  };
}, qa = function(t, n) {
  var i = Dt(t), r, s;
  return !i && Ee(t) && (r = i = t.radius || oe, t.values ? (t = le(t.values), (s = !Ve(t[0])) && (r *= r)) : t = gs(t.increment)), un(n, i ? mt(t) ? function(o) {
    return s = t(o), Math.abs(s - o) <= r ? s : o;
  } : function(o) {
    for (var l = parseFloat(s ? o.x : o), a = parseFloat(s ? o.y : 0), u = oe, f = 0, c = t.length, d, h; c--; )
      s ? (d = t[c].x - l, h = t[c].y - a, d = d * d + h * h) : d = Math.abs(t[c] - l), d < u && (u = d, f = c);
    return f = !r || u <= r ? t[f] : o, s || f === o || Ve(o) ? f : f + Et(o);
  } : gs(t));
}, Ya = function(t, n, i, r) {
  return un(Dt(t) ? !n : i === !0 ? !!(i = 0) : !r, function() {
    return Dt(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (n - t + i * 0.99)) / i) * i * r) / r;
  });
}, kh = function() {
  for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
    n[i] = arguments[i];
  return function(r) {
    return n.reduce(function(s, o) {
      return o(s);
    }, r);
  };
}, Dh = function(t, n) {
  return function(i) {
    return t(parseFloat(i)) + (n || Et(i));
  };
}, Rh = function(t, n, i) {
  return Xa(t, n, 0, 1, i);
}, Ga = function(t, n, i) {
  return un(i, function(r) {
    return t[~~n(r)];
  });
}, Ih = function e(t, n, i) {
  var r = n - t;
  return Dt(t) ? Ga(t, e(0, t.length), n) : un(i, function(s) {
    return (r + (s - t) % r) % r + t;
  });
}, Fh = function e(t, n, i) {
  var r = n - t, s = r * 2;
  return Dt(t) ? Ga(t, e(0, t.length - 1), n) : un(i, function(o) {
    return o = (s + (o - t) % s) % s || 0, t + (o > r ? s - o : o);
  });
}, Pi = function(t) {
  return t.replace(ph, function(n) {
    var i = n.indexOf("[") + 1, r = n.substring(i || 7, i ? n.indexOf("]") : n.length - 1).split(_h);
    return Ya(i ? r : +r[0], i ? 0 : +r[1], +r[2] || 1e-5);
  });
}, Xa = function(t, n, i, r, s) {
  var o = n - t, l = r - i;
  return un(s, function(a) {
    return i + ((a - t) / o * l || 0);
  });
}, Lh = function e(t, n, i, r) {
  var s = isNaN(t + n) ? 0 : function(h) {
    return (1 - h) * t + h * n;
  };
  if (!s) {
    var o = St(t), l = {}, a, u, f, c, d;
    if (i === !0 && (r = 1) && (i = null), o)
      t = {
        p: t
      }, n = {
        p: n
      };
    else if (Dt(t) && !Dt(n)) {
      for (f = [], c = t.length, d = c - 2, u = 1; u < c; u++)
        f.push(e(t[u - 1], t[u]));
      c--, s = function(m) {
        m *= c;
        var p = Math.min(d, ~~m);
        return f[p](m - p);
      }, i = n;
    } else r || (t = Kn(Dt(t) ? [] : {}, t));
    if (!f) {
      for (a in n)
        Ys.call(l, t, a, "get", n[a]);
      s = function(m) {
        return Zs(m, l) || (o ? t.p : t);
      };
    }
  }
  return un(i, s);
}, Jo = function(t, n, i) {
  var r = t.labels, s = oe, o, l, a;
  for (o in r)
    l = r[o] - n, l < 0 == !!i && l && s > (l = Math.abs(l)) && (a = o, s = l);
  return a;
}, Zt = function(t, n, i) {
  var r = t.vars, s = r[n], o = ht, l = t._ctx, a, u, f;
  if (s)
    return a = r[n + "Params"], u = r.callbackScope || t, i && en.length && sr(), l && (ht = l), f = a ? s.apply(u, a) : s.call(u), ht = o, f;
}, oi = function(t) {
  return on(t), t.scrollTrigger && t.scrollTrigger.kill(!!Ct), t.progress() < 1 && Zt(t, "onInterrupt"), t;
}, In, Ja = [], Za = function(t) {
  if (t)
    if (t = !t.name && t.default || t, Vs() || t.headless) {
      var n = t.name, i = mt(t), r = n && !i && t.init ? function() {
        this._props = [];
      } : t, s = {
        init: Oi,
        render: Zs,
        add: Ys,
        kill: Zh,
        modifier: Jh,
        rawVars: 0
      }, o = {
        targetTest: 0,
        get: 0,
        getSetter: Js,
        aliases: {},
        register: 0
      };
      if (Gn(), t !== r) {
        if (Gt[n])
          return;
        ne(r, ne(or(t, s), o)), Kn(r.prototype, Kn(s, or(t, o))), Gt[r.prop = n] = r, t.targetTest && (Yi.push(r), Us[n] = 1), n = (n === "css" ? "CSS" : n.charAt(0).toUpperCase() + n.substr(1)) + "Plugin";
      }
      Ia(n, r), t.register && t.register(Ut, r, jt);
    } else
      Ja.push(t);
}, rt = 255, li = {
  aqua: [0, rt, rt],
  lime: [0, rt, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, rt],
  navy: [0, 0, 128],
  white: [rt, rt, rt],
  olive: [128, 128, 0],
  yellow: [rt, rt, 0],
  orange: [rt, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [rt, 0, 0],
  pink: [rt, 192, 203],
  cyan: [0, rt, rt],
  transparent: [rt, rt, rt, 0]
}, Kr = function(t, n, i) {
  return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? n + (i - n) * t * 6 : t < 0.5 ? i : t * 3 < 2 ? n + (i - n) * (2 / 3 - t) * 6 : n) * rt + 0.5 | 0;
}, Qa = function(t, n, i) {
  var r = t ? Ve(t) ? [t >> 16, t >> 8 & rt, t & rt] : 0 : li.black, s, o, l, a, u, f, c, d, h, m;
  if (!r) {
    if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), li[t])
      r = li[t];
    else if (t.charAt(0) === "#") {
      if (t.length < 6 && (s = t.charAt(1), o = t.charAt(2), l = t.charAt(3), t = "#" + s + s + o + o + l + l + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9)
        return r = parseInt(t.substr(1, 6), 16), [r >> 16, r >> 8 & rt, r & rt, parseInt(t.substr(7), 16) / 255];
      t = parseInt(t.substr(1), 16), r = [t >> 16, t >> 8 & rt, t & rt];
    } else if (t.substr(0, 3) === "hsl") {
      if (r = m = t.match(Ko), !n)
        a = +r[0] % 360 / 360, u = +r[1] / 100, f = +r[2] / 100, o = f <= 0.5 ? f * (u + 1) : f + u - f * u, s = f * 2 - o, r.length > 3 && (r[3] *= 1), r[0] = Kr(a + 1 / 3, s, o), r[1] = Kr(a, s, o), r[2] = Kr(a - 1 / 3, s, o);
      else if (~t.indexOf("="))
        return r = t.match(Ma), i && r.length < 4 && (r[3] = 1), r;
    } else
      r = t.match(Ko) || li.transparent;
    r = r.map(Number);
  }
  return n && !m && (s = r[0] / rt, o = r[1] / rt, l = r[2] / rt, c = Math.max(s, o, l), d = Math.min(s, o, l), f = (c + d) / 2, c === d ? a = u = 0 : (h = c - d, u = f > 0.5 ? h / (2 - c - d) : h / (c + d), a = c === s ? (o - l) / h + (o < l ? 6 : 0) : c === o ? (l - s) / h + 2 : (s - o) / h + 4, a *= 60), r[0] = ~~(a + 0.5), r[1] = ~~(u * 100 + 0.5), r[2] = ~~(f * 100 + 0.5)), i && r.length < 4 && (r[3] = 1), r;
}, tf = function(t) {
  var n = [], i = [], r = -1;
  return t.split(nn).forEach(function(s) {
    var o = s.match(Rn) || [];
    n.push.apply(n, o), i.push(r += o.length + 1);
  }), n.c = i, n;
}, Zo = function(t, n, i) {
  var r = "", s = (t + r).match(nn), o = n ? "hsla(" : "rgba(", l = 0, a, u, f, c;
  if (!s)
    return t;
  if (s = s.map(function(d) {
    return (d = Qa(d, n, 1)) && o + (n ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : d.join(",")) + ")";
  }), i && (f = tf(t), a = i.c, a.join(r) !== f.c.join(r)))
    for (u = t.replace(nn, "1").split(Rn), c = u.length - 1; l < c; l++)
      r += u[l] + (~a.indexOf(l) ? s.shift() || o + "0,0,0,0)" : (f.length ? f : s.length ? s : i).shift());
  if (!u)
    for (u = t.split(nn), c = u.length - 1; l < c; l++)
      r += u[l] + s[l];
  return r + u[c];
}, nn = function() {
  var e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in li)
    e += "|" + t + "\\b";
  return new RegExp(e + ")", "gi");
}(), Nh = /hsl[a]?\(/, ef = function(t) {
  var n = t.join(" "), i;
  if (nn.lastIndex = 0, nn.test(n))
    return i = Nh.test(n), t[1] = Zo(t[1], i), t[0] = Zo(t[0], i, tf(t[1])), !0;
}, Ai, Xt = function() {
  var e = Date.now, t = 500, n = 33, i = e(), r = i, s = 1e3 / 240, o = s, l = [], a, u, f, c, d, h, m = function p(v) {
    var b = e() - r, T = v === !0, C, x, y, O;
    if ((b > t || b < 0) && (i += b - n), r += b, y = r - i, C = y - o, (C > 0 || T) && (O = ++c.frame, d = y - c.time * 1e3, c.time = y = y / 1e3, o += C + (C >= s ? 4 : s - C), x = 1), T || (a = u(p)), x)
      for (h = 0; h < l.length; h++)
        l[h](y, d, O, v);
  };
  return c = {
    time: 0,
    frame: 0,
    tick: function() {
      m(!0);
    },
    deltaRatio: function(v) {
      return d / (1e3 / (v || 60));
    },
    wake: function() {
      Da && (!us && Vs() && (Te = us = window, js = Te.document || {}, ee.gsap = Ut, (Te.gsapVersions || (Te.gsapVersions = [])).push(Ut.version), Ra(rr || Te.GreenSockGlobals || !Te.gsap && Te || {}), Ja.forEach(Za)), f = typeof requestAnimationFrame < "u" && requestAnimationFrame, a && c.sleep(), u = f || function(v) {
        return setTimeout(v, o - c.time * 1e3 + 1 | 0);
      }, Ai = 1, m(2));
    },
    sleep: function() {
      (f ? cancelAnimationFrame : clearTimeout)(a), Ai = 0, u = Oi;
    },
    lagSmoothing: function(v, b) {
      t = v || 1 / 0, n = Math.min(b || 33, t);
    },
    fps: function(v) {
      s = 1e3 / (v || 240), o = c.time * 1e3 + s;
    },
    add: function(v, b, T) {
      var C = b ? function(x, y, O, M) {
        v(x, y, O, M), c.remove(C);
      } : v;
      return c.remove(v), l[T ? "unshift" : "push"](C), Gn(), C;
    },
    remove: function(v, b) {
      ~(b = l.indexOf(v)) && l.splice(b, 1) && h >= b && h--;
    },
    _listeners: l
  }, c;
}(), Gn = function() {
  return !Ai && Xt.wake();
}, X = {}, $h = /^[\d.\-M][\d.\-,\s]/, zh = /["']/g, Bh = function(t) {
  for (var n = {}, i = t.substr(1, t.length - 3).split(":"), r = i[0], s = 1, o = i.length, l, a, u; s < o; s++)
    a = i[s], l = s !== o - 1 ? a.lastIndexOf(",") : a.length, u = a.substr(0, l), n[r] = isNaN(u) ? u.replace(zh, "").trim() : +u, r = a.substr(l + 1).trim();
  return n;
}, Vh = function(t) {
  var n = t.indexOf("(") + 1, i = t.indexOf(")"), r = t.indexOf("(", n);
  return t.substring(n, ~r && r < i ? t.indexOf(")", i + 1) : i);
}, jh = function(t) {
  var n = (t + "").split("("), i = X[n[0]];
  return i && n.length > 1 && i.config ? i.config.apply(null, ~t.indexOf("{") ? [Bh(n[1])] : Vh(t).split(",").map($a)) : X._CE && $h.test(t) ? X._CE("", t) : i;
}, nf = function(t) {
  return function(n) {
    return 1 - t(1 - n);
  };
}, rf = function e(t, n) {
  for (var i = t._first, r; i; )
    i instanceof Ft ? e(i, n) : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== n && (i.timeline ? e(i.timeline, n) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = n)), i = i._next;
}, Cn = function(t, n) {
  return t && (mt(t) ? t : X[t] || jh(t)) || n;
}, An = function(t, n, i, r) {
  i === void 0 && (i = function(a) {
    return 1 - n(1 - a);
  }), r === void 0 && (r = function(a) {
    return a < 0.5 ? n(a * 2) / 2 : 1 - n((1 - a) * 2) / 2;
  });
  var s = {
    easeIn: n,
    easeOut: i,
    easeInOut: r
  }, o;
  return Vt(t, function(l) {
    X[l] = ee[l] = s, X[o = l.toLowerCase()] = i;
    for (var a in s)
      X[o + (a === "easeIn" ? ".in" : a === "easeOut" ? ".out" : ".inOut")] = X[l + "." + a] = s[a];
  }), s;
}, sf = function(t) {
  return function(n) {
    return n < 0.5 ? (1 - t(1 - n * 2)) / 2 : 0.5 + t((n - 0.5) * 2) / 2;
  };
}, qr = function e(t, n, i) {
  var r = n >= 1 ? n : 1, s = (i || (t ? 0.3 : 0.45)) / (n < 1 ? n : 1), o = s / fs * (Math.asin(1 / r) || 0), l = function(f) {
    return f === 1 ? 1 : r * Math.pow(2, -10 * f) * dh((f - o) * s) + 1;
  }, a = t === "out" ? l : t === "in" ? function(u) {
    return 1 - l(1 - u);
  } : sf(l);
  return s = fs / s, a.config = function(u, f) {
    return e(t, u, f);
  }, a;
}, Yr = function e(t, n) {
  n === void 0 && (n = 1.70158);
  var i = function(o) {
    return o ? --o * o * ((n + 1) * o + n) + 1 : 0;
  }, r = t === "out" ? i : t === "in" ? function(s) {
    return 1 - i(1 - s);
  } : sf(i);
  return r.config = function(s) {
    return e(t, s);
  }, r;
};
Vt("Linear,Quad,Cubic,Quart,Quint,Strong", function(e, t) {
  var n = t < 5 ? t + 1 : t;
  An(e + ",Power" + (n - 1), t ? function(i) {
    return Math.pow(i, n);
  } : function(i) {
    return i;
  }, function(i) {
    return 1 - Math.pow(1 - i, n);
  }, function(i) {
    return i < 0.5 ? Math.pow(i * 2, n) / 2 : 1 - Math.pow((1 - i) * 2, n) / 2;
  });
});
X.Linear.easeNone = X.none = X.Linear.easeIn;
An("Elastic", qr("in"), qr("out"), qr());
(function(e, t) {
  var n = 1 / t, i = 2 * n, r = 2.5 * n, s = function(l) {
    return l < n ? e * l * l : l < i ? e * Math.pow(l - 1.5 / t, 2) + 0.75 : l < r ? e * (l -= 2.25 / t) * l + 0.9375 : e * Math.pow(l - 2.625 / t, 2) + 0.984375;
  };
  An("Bounce", function(o) {
    return 1 - s(1 - o);
  }, s);
})(7.5625, 2.75);
An("Expo", function(e) {
  return Math.pow(2, 10 * (e - 1)) * e + e * e * e * e * e * e * (1 - e);
});
An("Circ", function(e) {
  return -(Aa(1 - e * e) - 1);
});
An("Sine", function(e) {
  return e === 1 ? 1 : -hh(e * uh) + 1;
});
An("Back", Yr("in"), Yr("out"), Yr());
X.SteppedEase = X.steps = ee.SteppedEase = {
  config: function(t, n) {
    t === void 0 && (t = 1);
    var i = 1 / t, r = t + (n ? 0 : 1), s = n ? 1 : 0, o = 1 - st;
    return function(l) {
      return ((r * Li(0, o, l) | 0) + s) * i;
    };
  }
};
Wn.ease = X["quad.out"];
Vt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(e) {
  return Ws += e + "," + e + "Params,";
});
var of = function(t, n) {
  this.id = ch++, t._gsap = this, this.target = t, this.harness = n, this.get = n ? n.get : La, this.set = n ? n.getSetter : Js;
}, Ei = /* @__PURE__ */ function() {
  function e(n) {
    this.vars = n, this._delay = +n.delay || 0, (this._repeat = n.repeat === 1 / 0 ? -2 : n.repeat || 0) && (this._rDelay = n.repeatDelay || 0, this._yoyo = !!n.yoyo || !!n.yoyoEase), this._ts = 1, Yn(this, +n.duration, 1, 1), this.data = n.data, ht && (this._ctx = ht, ht.data.push(this)), Ai || Xt.wake();
  }
  var t = e.prototype;
  return t.delay = function(i) {
    return i || i === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + i - this._delay), this._delay = i, this) : this._delay;
  }, t.duration = function(i) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i) : this.totalDuration() && this._dur;
  }, t.totalDuration = function(i) {
    return arguments.length ? (this._dirty = 0, Yn(this, this._repeat < 0 ? i : (i - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, t.totalTime = function(i, r) {
    if (Gn(), !arguments.length)
      return this._tTime;
    var s = this._dp;
    if (s && s.smoothChildTiming && this._ts) {
      for (Ar(this, i), !s._dp || s.parent || Va(s, this); s && s.parent; )
        s.parent._time !== s._start + (s._ts >= 0 ? s._tTime / s._ts : (s.totalDuration() - s._tTime) / -s._ts) && s.totalTime(s._tTime, !0), s = s.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && i < this._tDur || this._ts < 0 && i > 0 || !this._tDur && !i) && Ce(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== i || !this._dur && !r || this._initted && Math.abs(this._zTime) === st || !this._initted && this._dur && i || !i && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = i), Na(this, i, r)), this;
  }, t.time = function(i, r) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), i + Go(this)) % (this._dur + this._rDelay) || (i ? this._dur : 0), r) : this._time;
  }, t.totalProgress = function(i, r) {
    return arguments.length ? this.totalTime(this.totalDuration() * i, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, t.progress = function(i, r) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + Go(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, t.iteration = function(i, r) {
    var s = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (i - 1) * s, r) : this._repeat ? qn(this._tTime, s) + 1 : 1;
  }, t.timeScale = function(i, r) {
    if (!arguments.length)
      return this._rts === -st ? 0 : this._rts;
    if (this._rts === i)
      return this;
    var s = this.parent && this._ts ? lr(this.parent._time, this) : this._tTime;
    return this._rts = +i || 0, this._ts = this._ps || i === -st ? 0 : this._rts, this.totalTime(Li(-Math.abs(this._delay), this.totalDuration(), s), r !== !1), Pr(this), Th(this);
  }, t.paused = function(i) {
    return arguments.length ? (this._ps !== i && (this._ps = i, i ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Gn(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== st && (this._tTime -= st)))), this) : this._ps;
  }, t.startTime = function(i) {
    if (arguments.length) {
      this._start = dt(i);
      var r = this.parent || this._dp;
      return r && (r._sort || !this.parent) && Ce(r, this, this._start - this._delay), this;
    }
    return this._start;
  }, t.endTime = function(i) {
    return this._start + (Bt(i) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, t.rawTime = function(i) {
    var r = this.parent || this._dp;
    return r ? i && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? lr(r.rawTime(i), this) : this._tTime : this._tTime;
  }, t.revert = function(i) {
    i === void 0 && (i = vh);
    var r = Ct;
    return Ct = i, qs(this) && (this.timeline && this.timeline.revert(i), this.totalTime(-0.01, i.suppressEvents)), this.data !== "nested" && i.kill !== !1 && this.kill(), Ct = r, this;
  }, t.globalTime = function(i) {
    for (var r = this, s = arguments.length ? i : r.rawTime(); r; )
      s = r._start + s / (Math.abs(r._ts) || 1), r = r._dp;
    return !this.parent && this._sat ? this._sat.globalTime(i) : s;
  }, t.repeat = function(i) {
    return arguments.length ? (this._repeat = i === 1 / 0 ? -2 : i, Xo(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, t.repeatDelay = function(i) {
    if (arguments.length) {
      var r = this._time;
      return this._rDelay = i, Xo(this), r ? this.time(r) : this;
    }
    return this._rDelay;
  }, t.yoyo = function(i) {
    return arguments.length ? (this._yoyo = i, this) : this._yoyo;
  }, t.seek = function(i, r) {
    return this.totalTime(se(this, i), Bt(r));
  }, t.restart = function(i, r) {
    return this.play().totalTime(i ? -this._delay : 0, Bt(r)), this._dur || (this._zTime = -st), this;
  }, t.play = function(i, r) {
    return i != null && this.seek(i, r), this.reversed(!1).paused(!1);
  }, t.reverse = function(i, r) {
    return i != null && this.seek(i || this.totalDuration(), r), this.reversed(!0).paused(!1);
  }, t.pause = function(i, r) {
    return i != null && this.seek(i, r), this.paused(!0);
  }, t.resume = function() {
    return this.paused(!1);
  }, t.reversed = function(i) {
    return arguments.length ? (!!i !== this.reversed() && this.timeScale(-this._rts || (i ? -st : 0)), this) : this._rts < 0;
  }, t.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -st, this;
  }, t.isActive = function() {
    var i = this.parent || this._dp, r = this._start, s;
    return !!(!i || this._ts && this._initted && i.isActive() && (s = i.rawTime(!0)) >= r && s < this.endTime(!0) - st);
  }, t.eventCallback = function(i, r, s) {
    var o = this.vars;
    return arguments.length > 1 ? (r ? (o[i] = r, s && (o[i + "Params"] = s), i === "onUpdate" && (this._onUpdate = r)) : delete o[i], this) : o[i];
  }, t.then = function(i) {
    var r = this, s = r._prom;
    return new Promise(function(o) {
      var l = mt(i) ? i : za, a = function() {
        var f = r.then;
        r.then = null, s && s(), mt(l) && (l = l(r)) && (l.then || l === r) && (r.then = f), o(l), r.then = f;
      };
      r._initted && r.totalProgress() === 1 && r._ts >= 0 || !r._tTime && r._ts < 0 ? a() : r._prom = a;
    });
  }, t.kill = function() {
    oi(this);
  }, e;
}();
ne(Ei.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -st,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var Ft = /* @__PURE__ */ function(e) {
  Pa(t, e);
  function t(i, r) {
    var s;
    return i === void 0 && (i = {}), s = e.call(this, i) || this, s.labels = {}, s.smoothChildTiming = !!i.smoothChildTiming, s.autoRemoveChildren = !!i.autoRemoveChildren, s._sort = Bt(i.sortChildren), pt && Ce(i.parent || pt, Ie(s), r), i.reversed && s.reverse(), i.paused && s.paused(!0), i.scrollTrigger && ja(Ie(s), i.scrollTrigger), s;
  }
  var n = t.prototype;
  return n.to = function(r, s, o) {
    return _i(0, arguments, this), this;
  }, n.from = function(r, s, o) {
    return _i(1, arguments, this), this;
  }, n.fromTo = function(r, s, o, l) {
    return _i(2, arguments, this), this;
  }, n.set = function(r, s, o) {
    return s.duration = 0, s.parent = this, pi(s).repeatDelay || (s.repeat = 0), s.immediateRender = !!s.immediateRender, new xt(r, s, se(this, o), 1), this;
  }, n.call = function(r, s, o) {
    return Ce(this, xt.delayedCall(0, r, s), o);
  }, n.staggerTo = function(r, s, o, l, a, u, f) {
    return o.duration = s, o.stagger = o.stagger || l, o.onComplete = u, o.onCompleteParams = f, o.parent = this, new xt(r, o, se(this, a)), this;
  }, n.staggerFrom = function(r, s, o, l, a, u, f) {
    return o.runBackwards = 1, pi(o).immediateRender = Bt(o.immediateRender), this.staggerTo(r, s, o, l, a, u, f);
  }, n.staggerFromTo = function(r, s, o, l, a, u, f, c) {
    return l.startAt = o, pi(l).immediateRender = Bt(l.immediateRender), this.staggerTo(r, s, l, a, u, f, c);
  }, n.render = function(r, s, o) {
    var l = this._time, a = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, f = r <= 0 ? 0 : dt(r), c = this._zTime < 0 != r < 0 && (this._initted || !u), d, h, m, p, v, b, T, C, x, y, O, M;
    if (this !== pt && f > a && r >= 0 && (f = a), f !== this._tTime || o || c) {
      if (l !== this._time && u && (f += this._time - l, r += this._time - l), d = f, x = this._start, C = this._ts, b = !C, c && (u || (l = this._zTime), (r || !s) && (this._zTime = r)), this._repeat) {
        if (O = this._yoyo, v = u + this._rDelay, this._repeat < -1 && r < 0)
          return this.totalTime(v * 100 + r, s, o);
        if (d = dt(f % v), f === a ? (p = this._repeat, d = u) : (y = dt(f / v), p = ~~y, p && p === y && (d = u, p--), d > u && (d = u)), y = qn(this._tTime, v), !l && this._tTime && y !== p && this._tTime - y * v - this._dur <= 0 && (y = p), O && p & 1 && (d = u - d, M = 1), p !== y && !this._lock) {
          var D = O && y & 1, w = D === (O && p & 1);
          if (p < y && (D = !D), l = D ? 0 : f % u ? u : f, this._lock = 1, this.render(l || (M ? 0 : dt(p * v)), s, !u)._lock = 0, this._tTime = f, !s && this.parent && Zt(this, "onRepeat"), this.vars.repeatRefresh && !M && (this.invalidate()._lock = 1, y = p), l && l !== this._time || b !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (u = this._dur, a = this._tDur, w && (this._lock = 2, l = D ? u : -1e-4, this.render(l, !0), this.vars.repeatRefresh && !M && this.invalidate()), this._lock = 0, !this._ts && !b)
            return this;
          rf(this, M);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (T = Ph(this, dt(l), dt(d)), T && (f -= d - (d = T._start))), this._tTime = f, this._time = d, this._act = !C, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = r, l = 0), !l && f && u && !s && !y && (Zt(this, "onStart"), this._tTime !== f))
        return this;
      if (d >= l && r >= 0)
        for (h = this._first; h; ) {
          if (m = h._next, (h._act || d >= h._start) && h._ts && T !== h) {
            if (h.parent !== this)
              return this.render(r, s, o);
            if (h.render(h._ts > 0 ? (d - h._start) * h._ts : (h._dirty ? h.totalDuration() : h._tDur) + (d - h._start) * h._ts, s, o), d !== this._time || !this._ts && !b) {
              T = 0, m && (f += this._zTime = -st);
              break;
            }
          }
          h = m;
        }
      else {
        h = this._last;
        for (var L = r < 0 ? r : d; h; ) {
          if (m = h._prev, (h._act || L <= h._end) && h._ts && T !== h) {
            if (h.parent !== this)
              return this.render(r, s, o);
            if (h.render(h._ts > 0 ? (L - h._start) * h._ts : (h._dirty ? h.totalDuration() : h._tDur) + (L - h._start) * h._ts, s, o || Ct && qs(h)), d !== this._time || !this._ts && !b) {
              T = 0, m && (f += this._zTime = L ? -st : st);
              break;
            }
          }
          h = m;
        }
      }
      if (T && !s && (this.pause(), T.render(d >= l ? 0 : -st)._zTime = d >= l ? 1 : -1, this._ts))
        return this._start = x, Pr(this), this.render(r, s, o);
      this._onUpdate && !s && Zt(this, "onUpdate", !0), (f === a && this._tTime >= this.totalDuration() || !f && l) && (x === this._start || Math.abs(C) !== Math.abs(this._ts)) && (this._lock || ((r || !u) && (f === a && this._ts > 0 || !f && this._ts < 0) && on(this, 1), !s && !(r < 0 && !l) && (f || l || !a) && (Zt(this, f === a && r >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(f < a && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, n.add = function(r, s) {
    var o = this;
    if (Ve(s) || (s = se(this, s, r)), !(r instanceof Ei)) {
      if (Dt(r))
        return r.forEach(function(l) {
          return o.add(l, s);
        }), this;
      if (St(r))
        return this.addLabel(r, s);
      if (mt(r))
        r = xt.delayedCall(0, r);
      else
        return this;
    }
    return this !== r ? Ce(this, r, s) : this;
  }, n.getChildren = function(r, s, o, l) {
    r === void 0 && (r = !0), s === void 0 && (s = !0), o === void 0 && (o = !0), l === void 0 && (l = -oe);
    for (var a = [], u = this._first; u; )
      u._start >= l && (u instanceof xt ? s && a.push(u) : (o && a.push(u), r && a.push.apply(a, u.getChildren(!0, s, o)))), u = u._next;
    return a;
  }, n.getById = function(r) {
    for (var s = this.getChildren(1, 1, 1), o = s.length; o--; )
      if (s[o].vars.id === r)
        return s[o];
  }, n.remove = function(r) {
    return St(r) ? this.removeLabel(r) : mt(r) ? this.killTweensOf(r) : (r.parent === this && Or(this, r), r === this._recent && (this._recent = this._last), Sn(this));
  }, n.totalTime = function(r, s) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = dt(Xt.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))), e.prototype.totalTime.call(this, r, s), this._forcing = 0, this) : this._tTime;
  }, n.addLabel = function(r, s) {
    return this.labels[r] = se(this, s), this;
  }, n.removeLabel = function(r) {
    return delete this.labels[r], this;
  }, n.addPause = function(r, s, o) {
    var l = xt.delayedCall(0, s || Oi, o);
    return l.data = "isPause", this._hasPause = 1, Ce(this, l, se(this, r));
  }, n.removePause = function(r) {
    var s = this._first;
    for (r = se(this, r); s; )
      s._start === r && s.data === "isPause" && on(s), s = s._next;
  }, n.killTweensOf = function(r, s, o) {
    for (var l = this.getTweensOf(r, o), a = l.length; a--; )
      Xe !== l[a] && l[a].kill(r, s);
    return this;
  }, n.getTweensOf = function(r, s) {
    for (var o = [], l = le(r), a = this._first, u = Ve(s), f; a; )
      a instanceof xt ? xh(a._targets, l) && (u ? (!Xe || a._initted && a._ts) && a.globalTime(0) <= s && a.globalTime(a.totalDuration()) > s : !s || a.isActive()) && o.push(a) : (f = a.getTweensOf(l, s)).length && o.push.apply(o, f), a = a._next;
    return o;
  }, n.tweenTo = function(r, s) {
    s = s || {};
    var o = this, l = se(o, r), a = s, u = a.startAt, f = a.onStart, c = a.onStartParams, d = a.immediateRender, h, m = xt.to(o, ne({
      ease: s.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: l,
      overwrite: "auto",
      duration: s.duration || Math.abs((l - (u && "time" in u ? u.time : o._time)) / o.timeScale()) || st,
      onStart: function() {
        if (o.pause(), !h) {
          var v = s.duration || Math.abs((l - (u && "time" in u ? u.time : o._time)) / o.timeScale());
          m._dur !== v && Yn(m, v, 0, 1).render(m._time, !0, !0), h = 1;
        }
        f && f.apply(m, c || []);
      }
    }, s));
    return d ? m.render(0) : m;
  }, n.tweenFromTo = function(r, s, o) {
    return this.tweenTo(s, ne({
      startAt: {
        time: se(this, r)
      }
    }, o));
  }, n.recent = function() {
    return this._recent;
  }, n.nextLabel = function(r) {
    return r === void 0 && (r = this._time), Jo(this, se(this, r));
  }, n.previousLabel = function(r) {
    return r === void 0 && (r = this._time), Jo(this, se(this, r), 1);
  }, n.currentLabel = function(r) {
    return arguments.length ? this.seek(r, !0) : this.previousLabel(this._time + st);
  }, n.shiftChildren = function(r, s, o) {
    o === void 0 && (o = 0);
    var l = this._first, a = this.labels, u;
    for (r = dt(r); l; )
      l._start >= o && (l._start += r, l._end += r), l = l._next;
    if (s)
      for (u in a)
        a[u] >= o && (a[u] += r);
    return Sn(this);
  }, n.invalidate = function(r) {
    var s = this._first;
    for (this._lock = 0; s; )
      s.invalidate(r), s = s._next;
    return e.prototype.invalidate.call(this, r);
  }, n.clear = function(r) {
    r === void 0 && (r = !0);
    for (var s = this._first, o; s; )
      o = s._next, this.remove(s), s = o;
    return this._dp && (this._time = this._tTime = this._pTime = 0), r && (this.labels = {}), Sn(this);
  }, n.totalDuration = function(r) {
    var s = 0, o = this, l = o._last, a = oe, u, f, c;
    if (arguments.length)
      return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -r : r));
    if (o._dirty) {
      for (c = o.parent; l; )
        u = l._prev, l._dirty && l.totalDuration(), f = l._start, f > a && o._sort && l._ts && !o._lock ? (o._lock = 1, Ce(o, l, f - l._delay, 1)._lock = 0) : a = f, f < 0 && l._ts && (s -= f, (!c && !o._dp || c && c.smoothChildTiming) && (o._start += dt(f / o._ts), o._time -= f, o._tTime -= f), o.shiftChildren(-f, !1, -1 / 0), a = 0), l._end > s && l._ts && (s = l._end), l = u;
      Yn(o, o === pt && o._time > s ? o._time : s, 1, 1), o._dirty = 0;
    }
    return o._tDur;
  }, t.updateRoot = function(r) {
    if (pt._ts && (Na(pt, lr(r, pt)), Fa = Xt.frame), Xt.frame >= qo) {
      qo += te.autoSleep || 120;
      var s = pt._first;
      if ((!s || !s._ts) && te.autoSleep && Xt._listeners.length < 2) {
        for (; s && !s._ts; )
          s = s._next;
        s || Xt.sleep();
      }
    }
  }, t;
}(Ei);
ne(Ft.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var Hh = function(t, n, i, r, s, o, l) {
  var a = new jt(this._pt, t, n, 0, 1, hf, null, s), u = 0, f = 0, c, d, h, m, p, v, b, T;
  for (a.b = i, a.e = r, i += "", r += "", (b = ~r.indexOf("random(")) && (r = Pi(r)), o && (T = [i, r], o(T, t, n), i = T[0], r = T[1]), d = i.match(Ur) || []; c = Ur.exec(r); )
    m = c[0], p = r.substring(u, c.index), h ? h = (h + 1) % 5 : p.substr(-5) === "rgba(" && (h = 1), m !== d[f++] && (v = parseFloat(d[f - 1]) || 0, a._pt = {
      _next: a._pt,
      p: p || f === 1 ? p : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: v,
      c: m.charAt(1) === "=" ? Vn(v, m) - v : parseFloat(m) - v,
      m: h && h < 4 ? Math.round : 0
    }, u = Ur.lastIndex);
  return a.c = u < r.length ? r.substring(u, r.length) : "", a.fp = l, (ka.test(r) || b) && (a.e = 0), this._pt = a, a;
}, Ys = function(t, n, i, r, s, o, l, a, u, f) {
  mt(r) && (r = r(s || 0, t, o));
  var c = t[n], d = i !== "get" ? i : mt(c) ? u ? t[n.indexOf("set") || !mt(t["get" + n.substr(3)]) ? n : "get" + n.substr(3)](u) : t[n]() : c, h = mt(c) ? u ? Yh : uf : Xs, m;
  if (St(r) && (~r.indexOf("random(") && (r = Pi(r)), r.charAt(1) === "=" && (m = Vn(d, r) + (Et(d) || 0), (m || m === 0) && (r = m))), !f || d !== r || ms)
    return !isNaN(d * r) && r !== "" ? (m = new jt(this._pt, t, n, +d || 0, r - (d || 0), typeof c == "boolean" ? Xh : cf, 0, h), u && (m.fp = u), l && m.modifier(l, this, t), this._pt = m) : (!c && !(n in t) && Hs(n, r), Hh.call(this, t, n, d, r, h, a || te.stringFilter, u));
}, Uh = function(t, n, i, r, s) {
  if (mt(t) && (t = gi(t, s, n, i, r)), !Ee(t) || t.style && t.nodeType || Dt(t) || Ea(t))
    return St(t) ? gi(t, s, n, i, r) : t;
  var o = {}, l;
  for (l in t)
    o[l] = gi(t[l], s, n, i, r);
  return o;
}, lf = function(t, n, i, r, s, o) {
  var l, a, u, f;
  if (Gt[t] && (l = new Gt[t]()).init(s, l.rawVars ? n[t] : Uh(n[t], r, s, o, i), i, r, o) !== !1 && (i._pt = a = new jt(i._pt, s, t, 0, 1, l.render, l, 0, l.priority), i !== In))
    for (u = i._ptLookup[i._targets.indexOf(s)], f = l._props.length; f--; )
      u[l._props[f]] = a;
  return l;
}, Xe, ms, Gs = function e(t, n, i) {
  var r = t.vars, s = r.ease, o = r.startAt, l = r.immediateRender, a = r.lazy, u = r.onUpdate, f = r.runBackwards, c = r.yoyoEase, d = r.keyframes, h = r.autoRevert, m = t._dur, p = t._startAt, v = t._targets, b = t.parent, T = b && b.data === "nested" ? b.vars.targets : v, C = t._overwrite === "auto" && !zs, x = t.timeline, y, O, M, D, w, L, B, R, j, J, it, Y, q;
  if (x && (!d || !s) && (s = "none"), t._ease = Cn(s, Wn.ease), t._yEase = c ? nf(Cn(c === !0 ? s : c, Wn.ease)) : 0, c && t._yoyo && !t._repeat && (c = t._yEase, t._yEase = t._ease, t._ease = c), t._from = !x && !!r.runBackwards, !x || d && !r.stagger) {
    if (R = v[0] ? Tn(v[0]).harness : 0, Y = R && r[R.prop], y = or(r, Us), p && (p._zTime < 0 && p.progress(1), n < 0 && f && l && !h ? p.render(-1, !0) : p.revert(f && m ? qi : yh), p._lazy = 0), o) {
      if (on(t._startAt = xt.set(v, ne({
        data: "isStart",
        overwrite: !1,
        parent: b,
        immediateRender: !0,
        lazy: !p && Bt(a),
        startAt: null,
        delay: 0,
        onUpdate: u && function() {
          return Zt(t, "onUpdate");
        },
        stagger: 0
      }, o))), t._startAt._dp = 0, t._startAt._sat = t, n < 0 && (Ct || !l && !h) && t._startAt.revert(qi), l && m && n <= 0 && i <= 0) {
        n && (t._zTime = n);
        return;
      }
    } else if (f && m && !p) {
      if (n && (l = !1), M = ne({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: l && !p && Bt(a),
        immediateRender: l,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: b
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, y), Y && (M[R.prop] = Y), on(t._startAt = xt.set(v, M)), t._startAt._dp = 0, t._startAt._sat = t, n < 0 && (Ct ? t._startAt.revert(qi) : t._startAt.render(-1, !0)), t._zTime = n, !l)
        e(t._startAt, st, st);
      else if (!n)
        return;
    }
    for (t._pt = t._ptCache = 0, a = m && Bt(a) || a && !m, O = 0; O < v.length; O++) {
      if (w = v[O], B = w._gsap || Ks(v)[O]._gsap, t._ptLookup[O] = J = {}, cs[B.id] && en.length && sr(), it = T === v ? O : T.indexOf(w), R && (j = new R()).init(w, Y || y, t, it, T) !== !1 && (t._pt = D = new jt(t._pt, w, j.name, 0, 1, j.render, j, 0, j.priority), j._props.forEach(function(G) {
        J[G] = D;
      }), j.priority && (L = 1)), !R || Y)
        for (M in y)
          Gt[M] && (j = lf(M, y, t, it, w, T)) ? j.priority && (L = 1) : J[M] = D = Ys.call(t, w, M, "get", y[M], it, T, 0, r.stringFilter);
      t._op && t._op[O] && t.kill(w, t._op[O]), C && t._pt && (Xe = t, pt.killTweensOf(w, J, t.globalTime(n)), q = !t.parent, Xe = 0), t._pt && a && (cs[B.id] = 1);
    }
    L && df(t), t._onInit && t._onInit(t);
  }
  t._onUpdate = u, t._initted = (!t._op || t._pt) && !q, d && n <= 0 && x.render(oe, !0, !0);
}, Wh = function(t, n, i, r, s, o, l, a) {
  var u = (t._pt && t._ptCache || (t._ptCache = {}))[n], f, c, d, h;
  if (!u)
    for (u = t._ptCache[n] = [], d = t._ptLookup, h = t._targets.length; h--; ) {
      if (f = d[h][n], f && f.d && f.d._pt)
        for (f = f.d._pt; f && f.p !== n && f.fp !== n; )
          f = f._next;
      if (!f)
        return ms = 1, t.vars[n] = "+=0", Gs(t, l), ms = 0, a ? Ci(n + " not eligible for reset") : 1;
      u.push(f);
    }
  for (h = u.length; h--; )
    c = u[h], f = c._pt || c, f.s = (r || r === 0) && !s ? r : f.s + (r || 0) + o * f.c, f.c = i - f.s, c.e && (c.e = vt(i) + Et(c.e)), c.b && (c.b = f.s + Et(c.b));
}, Kh = function(t, n) {
  var i = t[0] ? Tn(t[0]).harness : 0, r = i && i.aliases, s, o, l, a;
  if (!r)
    return n;
  s = Kn({}, n);
  for (o in r)
    if (o in s)
      for (a = r[o].split(","), l = a.length; l--; )
        s[a[l]] = s[o];
  return s;
}, qh = function(t, n, i, r) {
  var s = n.ease || r || "power1.inOut", o, l;
  if (Dt(n))
    l = i[t] || (i[t] = []), n.forEach(function(a, u) {
      return l.push({
        t: u / (n.length - 1) * 100,
        v: a,
        e: s
      });
    });
  else
    for (o in n)
      l = i[o] || (i[o] = []), o === "ease" || l.push({
        t: parseFloat(t),
        v: n[o],
        e: s
      });
}, gi = function(t, n, i, r, s) {
  return mt(t) ? t.call(n, i, r, s) : St(t) && ~t.indexOf("random(") ? Pi(t) : t;
}, af = Ws + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", ff = {};
Vt(af + ",id,stagger,delay,duration,paused,scrollTrigger", function(e) {
  return ff[e] = 1;
});
var xt = /* @__PURE__ */ function(e) {
  Pa(t, e);
  function t(i, r, s, o) {
    var l;
    typeof r == "number" && (s.duration = r, r = s, s = null), l = e.call(this, o ? r : pi(r)) || this;
    var a = l.vars, u = a.duration, f = a.delay, c = a.immediateRender, d = a.stagger, h = a.overwrite, m = a.keyframes, p = a.defaults, v = a.scrollTrigger, b = a.yoyoEase, T = r.parent || pt, C = (Dt(i) || Ea(i) ? Ve(i[0]) : "length" in r) ? [i] : le(i), x, y, O, M, D, w, L, B;
    if (l._targets = C.length ? Ks(C) : Ci("GSAP target " + i + " not found. https://gsap.com", !te.nullTargetWarn) || [], l._ptLookup = [], l._overwrite = h, m || d || Ui(u) || Ui(f)) {
      if (r = l.vars, x = l.timeline = new Ft({
        data: "nested",
        defaults: p || {},
        targets: T && T.data === "nested" ? T.vars.targets : C
      }), x.kill(), x.parent = x._dp = Ie(l), x._start = 0, d || Ui(u) || Ui(f)) {
        if (M = C.length, L = d && Ka(d), Ee(d))
          for (D in d)
            ~af.indexOf(D) && (B || (B = {}), B[D] = d[D]);
        for (y = 0; y < M; y++)
          O = or(r, ff), O.stagger = 0, b && (O.yoyoEase = b), B && Kn(O, B), w = C[y], O.duration = +gi(u, Ie(l), y, w, C), O.delay = (+gi(f, Ie(l), y, w, C) || 0) - l._delay, !d && M === 1 && O.delay && (l._delay = f = O.delay, l._start += f, O.delay = 0), x.to(w, O, L ? L(y, w, C) : 0), x._ease = X.none;
        x.duration() ? u = f = 0 : l.timeline = 0;
      } else if (m) {
        pi(ne(x.vars.defaults, {
          ease: "none"
        })), x._ease = Cn(m.ease || r.ease || "none");
        var R = 0, j, J, it;
        if (Dt(m))
          m.forEach(function(Y) {
            return x.to(C, Y, ">");
          }), x.duration();
        else {
          O = {};
          for (D in m)
            D === "ease" || D === "easeEach" || qh(D, m[D], O, m.easeEach);
          for (D in O)
            for (j = O[D].sort(function(Y, q) {
              return Y.t - q.t;
            }), R = 0, y = 0; y < j.length; y++)
              J = j[y], it = {
                ease: J.e,
                duration: (J.t - (y ? j[y - 1].t : 0)) / 100 * u
              }, it[D] = J.v, x.to(C, it, R), R += it.duration;
          x.duration() < u && x.to({}, {
            duration: u - x.duration()
          });
        }
      }
      u || l.duration(u = x.duration());
    } else
      l.timeline = 0;
    return h === !0 && !zs && (Xe = Ie(l), pt.killTweensOf(C), Xe = 0), Ce(T, Ie(l), s), r.reversed && l.reverse(), r.paused && l.paused(!0), (c || !u && !m && l._start === dt(T._time) && Bt(c) && Sh(Ie(l)) && T.data !== "nested") && (l._tTime = -st, l.render(Math.max(0, -f) || 0)), v && ja(Ie(l), v), l;
  }
  var n = t.prototype;
  return n.render = function(r, s, o) {
    var l = this._time, a = this._tDur, u = this._dur, f = r < 0, c = r > a - st && !f ? a : r < st ? 0 : r, d, h, m, p, v, b, T, C, x;
    if (!u)
      Oh(this, r, s, o);
    else if (c !== this._tTime || !r || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== f || this._lazy) {
      if (d = c, C = this.timeline, this._repeat) {
        if (p = u + this._rDelay, this._repeat < -1 && f)
          return this.totalTime(p * 100 + r, s, o);
        if (d = dt(c % p), c === a ? (m = this._repeat, d = u) : (v = dt(c / p), m = ~~v, m && m === v ? (d = u, m--) : d > u && (d = u)), b = this._yoyo && m & 1, b && (x = this._yEase, d = u - d), v = qn(this._tTime, p), d === l && !o && this._initted && m === v)
          return this._tTime = c, this;
        m !== v && (C && this._yEase && rf(C, b), this.vars.repeatRefresh && !b && !this._lock && d !== p && this._initted && (this._lock = o = 1, this.render(dt(p * m), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (Ha(this, f ? r : d, o, s, c))
          return this._tTime = 0, this;
        if (l !== this._time && !(o && this.vars.repeatRefresh && m !== v))
          return this;
        if (u !== this._dur)
          return this.render(r, s, o);
      }
      if (this._tTime = c, this._time = d, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = T = (x || this._ease)(d / u), this._from && (this.ratio = T = 1 - T), !l && c && !s && !v && (Zt(this, "onStart"), this._tTime !== c))
        return this;
      for (h = this._pt; h; )
        h.r(T, h.d), h = h._next;
      C && C.render(r < 0 ? r : C._dur * C._ease(d / this._dur), s, o) || this._startAt && (this._zTime = r), this._onUpdate && !s && (f && hs(this, r, s, o), Zt(this, "onUpdate")), this._repeat && m !== v && this.vars.onRepeat && !s && this.parent && Zt(this, "onRepeat"), (c === this._tDur || !c) && this._tTime === c && (f && !this._onUpdate && hs(this, r, !0, !0), (r || !u) && (c === this._tDur && this._ts > 0 || !c && this._ts < 0) && on(this, 1), !s && !(f && !l) && (c || l || b) && (Zt(this, c === a ? "onComplete" : "onReverseComplete", !0), this._prom && !(c < a && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, n.targets = function() {
    return this._targets;
  }, n.invalidate = function(r) {
    return (!r || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(r), e.prototype.invalidate.call(this, r);
  }, n.resetTo = function(r, s, o, l, a) {
    Ai || Xt.wake(), this._ts || this.play();
    var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts), f;
    return this._initted || Gs(this, u), f = this._ease(u / this._dur), Wh(this, r, s, o, l, f, u, a) ? this.resetTo(r, s, o, l, 1) : (Ar(this, 0), this.parent || Ba(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, n.kill = function(r, s) {
    if (s === void 0 && (s = "all"), !r && (!s || s === "all"))
      return this._lazy = this._pt = 0, this.parent ? oi(this) : this.scrollTrigger && this.scrollTrigger.kill(!!Ct), this;
    if (this.timeline) {
      var o = this.timeline.totalDuration();
      return this.timeline.killTweensOf(r, s, Xe && Xe.vars.overwrite !== !0)._first || oi(this), this.parent && o !== this.timeline.totalDuration() && Yn(this, this._dur * this.timeline._tDur / o, 0, 1), this;
    }
    var l = this._targets, a = r ? le(r) : l, u = this._ptLookup, f = this._pt, c, d, h, m, p, v, b;
    if ((!s || s === "all") && wh(l, a))
      return s === "all" && (this._pt = 0), oi(this);
    for (c = this._op = this._op || [], s !== "all" && (St(s) && (p = {}, Vt(s, function(T) {
      return p[T] = 1;
    }), s = p), s = Kh(l, s)), b = l.length; b--; )
      if (~a.indexOf(l[b])) {
        d = u[b], s === "all" ? (c[b] = s, m = d, h = {}) : (h = c[b] = c[b] || {}, m = s);
        for (p in m)
          v = d && d[p], v && ((!("kill" in v.d) || v.d.kill(p) === !0) && Or(this, v, "_pt"), delete d[p]), h !== "all" && (h[p] = 1);
      }
    return this._initted && !this._pt && f && oi(this), this;
  }, t.to = function(r, s) {
    return new t(r, s, arguments[2]);
  }, t.from = function(r, s) {
    return _i(1, arguments);
  }, t.delayedCall = function(r, s, o, l) {
    return new t(s, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: r,
      onComplete: s,
      onReverseComplete: s,
      onCompleteParams: o,
      onReverseCompleteParams: o,
      callbackScope: l
    });
  }, t.fromTo = function(r, s, o) {
    return _i(2, arguments);
  }, t.set = function(r, s) {
    return s.duration = 0, s.repeatDelay || (s.repeat = 0), new t(r, s);
  }, t.killTweensOf = function(r, s, o) {
    return pt.killTweensOf(r, s, o);
  }, t;
}(Ei);
ne(xt.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
Vt("staggerTo,staggerFrom,staggerFromTo", function(e) {
  xt[e] = function() {
    var t = new Ft(), n = ps.call(arguments, 0);
    return n.splice(e === "staggerFromTo" ? 5 : 4, 0, 0), t[e].apply(t, n);
  };
});
var Xs = function(t, n, i) {
  return t[n] = i;
}, uf = function(t, n, i) {
  return t[n](i);
}, Yh = function(t, n, i, r) {
  return t[n](r.fp, i);
}, Gh = function(t, n, i) {
  return t.setAttribute(n, i);
}, Js = function(t, n) {
  return mt(t[n]) ? uf : Bs(t[n]) && t.setAttribute ? Gh : Xs;
}, cf = function(t, n) {
  return n.set(n.t, n.p, Math.round((n.s + n.c * t) * 1e6) / 1e6, n);
}, Xh = function(t, n) {
  return n.set(n.t, n.p, !!(n.s + n.c * t), n);
}, hf = function(t, n) {
  var i = n._pt, r = "";
  if (!t && n.b)
    r = n.b;
  else if (t === 1 && n.e)
    r = n.e;
  else {
    for (; i; )
      r = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round((i.s + i.c * t) * 1e4) / 1e4) + r, i = i._next;
    r += n.c;
  }
  n.set(n.t, n.p, r, n);
}, Zs = function(t, n) {
  for (var i = n._pt; i; )
    i.r(t, i.d), i = i._next;
}, Jh = function(t, n, i, r) {
  for (var s = this._pt, o; s; )
    o = s._next, s.p === r && s.modifier(t, n, i), s = o;
}, Zh = function(t) {
  for (var n = this._pt, i, r; n; )
    r = n._next, n.p === t && !n.op || n.op === t ? Or(this, n, "_pt") : n.dep || (i = 1), n = r;
  return !i;
}, Qh = function(t, n, i, r) {
  r.mSet(t, n, r.m.call(r.tween, i, r.mt), r);
}, df = function(t) {
  for (var n = t._pt, i, r, s, o; n; ) {
    for (i = n._next, r = s; r && r.pr > n.pr; )
      r = r._next;
    (n._prev = r ? r._prev : o) ? n._prev._next = n : s = n, (n._next = r) ? r._prev = n : o = n, n = i;
  }
  t._pt = s;
}, jt = /* @__PURE__ */ function() {
  function e(n, i, r, s, o, l, a, u, f) {
    this.t = i, this.s = s, this.c = o, this.p = r, this.r = l || cf, this.d = a || this, this.set = u || Xs, this.pr = f || 0, this._next = n, n && (n._prev = this);
  }
  var t = e.prototype;
  return t.modifier = function(i, r, s) {
    this.mSet = this.mSet || this.set, this.set = Qh, this.m = i, this.mt = s, this.tween = r;
  }, e;
}();
Vt(Ws + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(e) {
  return Us[e] = 1;
});
ee.TweenMax = ee.TweenLite = xt;
ee.TimelineLite = ee.TimelineMax = Ft;
pt = new Ft({
  sortChildren: !1,
  defaults: Wn,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
te.stringFilter = ef;
var On = [], Gi = {}, td = [], Qo = 0, ed = 0, Gr = function(t) {
  return (Gi[t] || td).map(function(n) {
    return n();
  });
}, ys = function() {
  var t = Date.now(), n = [];
  t - Qo > 2 && (Gr("matchMediaInit"), On.forEach(function(i) {
    var r = i.queries, s = i.conditions, o, l, a, u;
    for (l in r)
      o = Te.matchMedia(r[l]).matches, o && (a = 1), o !== s[l] && (s[l] = o, u = 1);
    u && (i.revert(), a && n.push(i));
  }), Gr("matchMediaRevert"), n.forEach(function(i) {
    return i.onMatch(i, function(r) {
      return i.add(null, r);
    });
  }), Qo = t, Gr("matchMedia"));
}, pf = /* @__PURE__ */ function() {
  function e(n, i) {
    this.selector = i && _s(i), this.data = [], this._r = [], this.isReverted = !1, this.id = ed++, n && this.add(n);
  }
  var t = e.prototype;
  return t.add = function(i, r, s) {
    mt(i) && (s = r, r = i, i = mt);
    var o = this, l = function() {
      var u = ht, f = o.selector, c;
      return u && u !== o && u.data.push(o), s && (o.selector = _s(s)), ht = o, c = r.apply(o, arguments), mt(c) && o._r.push(c), ht = u, o.selector = f, o.isReverted = !1, c;
    };
    return o.last = l, i === mt ? l(o, function(a) {
      return o.add(null, a);
    }) : i ? o[i] = l : l;
  }, t.ignore = function(i) {
    var r = ht;
    ht = null, i(this), ht = r;
  }, t.getTweens = function() {
    var i = [];
    return this.data.forEach(function(r) {
      return r instanceof e ? i.push.apply(i, r.getTweens()) : r instanceof xt && !(r.parent && r.parent.data === "nested") && i.push(r);
    }), i;
  }, t.clear = function() {
    this._r.length = this.data.length = 0;
  }, t.kill = function(i, r) {
    var s = this;
    if (i ? function() {
      for (var l = s.getTweens(), a = s.data.length, u; a--; )
        u = s.data[a], u.data === "isFlip" && (u.revert(), u.getChildren(!0, !0, !1).forEach(function(f) {
          return l.splice(l.indexOf(f), 1);
        }));
      for (l.map(function(f) {
        return {
          g: f._dur || f._delay || f._sat && !f._sat.vars.immediateRender ? f.globalTime(0) : -1 / 0,
          t: f
        };
      }).sort(function(f, c) {
        return c.g - f.g || -1 / 0;
      }).forEach(function(f) {
        return f.t.revert(i);
      }), a = s.data.length; a--; )
        u = s.data[a], u instanceof Ft ? u.data !== "nested" && (u.scrollTrigger && u.scrollTrigger.revert(), u.kill()) : !(u instanceof xt) && u.revert && u.revert(i);
      s._r.forEach(function(f) {
        return f(i, s);
      }), s.isReverted = !0;
    }() : this.data.forEach(function(l) {
      return l.kill && l.kill();
    }), this.clear(), r)
      for (var o = On.length; o--; )
        On[o].id === this.id && On.splice(o, 1);
  }, t.revert = function(i) {
    this.kill(i || {});
  }, e;
}(), nd = /* @__PURE__ */ function() {
  function e(n) {
    this.contexts = [], this.scope = n, ht && ht.data.push(this);
  }
  var t = e.prototype;
  return t.add = function(i, r, s) {
    Ee(i) || (i = {
      matches: i
    });
    var o = new pf(0, s || this.scope), l = o.conditions = {}, a, u, f;
    ht && !o.selector && (o.selector = ht.selector), this.contexts.push(o), r = o.add("onMatch", r), o.queries = i;
    for (u in i)
      u === "all" ? f = 1 : (a = Te.matchMedia(i[u]), a && (On.indexOf(o) < 0 && On.push(o), (l[u] = a.matches) && (f = 1), a.addListener ? a.addListener(ys) : a.addEventListener("change", ys)));
    return f && r(o, function(c) {
      return o.add(null, c);
    }), this;
  }, t.revert = function(i) {
    this.kill(i || {});
  }, t.kill = function(i) {
    this.contexts.forEach(function(r) {
      return r.kill(i, !0);
    });
  }, e;
}(), ar = {
  registerPlugin: function() {
    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
      n[i] = arguments[i];
    n.forEach(function(r) {
      return Za(r);
    });
  },
  timeline: function(t) {
    return new Ft(t);
  },
  getTweensOf: function(t, n) {
    return pt.getTweensOf(t, n);
  },
  getProperty: function(t, n, i, r) {
    St(t) && (t = le(t)[0]);
    var s = Tn(t || {}).get, o = i ? za : $a;
    return i === "native" && (i = ""), t && (n ? o((Gt[n] && Gt[n].get || s)(t, n, i, r)) : function(l, a, u) {
      return o((Gt[l] && Gt[l].get || s)(t, l, a, u));
    });
  },
  quickSetter: function(t, n, i) {
    if (t = le(t), t.length > 1) {
      var r = t.map(function(f) {
        return Ut.quickSetter(f, n, i);
      }), s = r.length;
      return function(f) {
        for (var c = s; c--; )
          r[c](f);
      };
    }
    t = t[0] || {};
    var o = Gt[n], l = Tn(t), a = l.harness && (l.harness.aliases || {})[n] || n, u = o ? function(f) {
      var c = new o();
      In._pt = 0, c.init(t, i ? f + i : f, In, 0, [t]), c.render(1, c), In._pt && Zs(1, In);
    } : l.set(t, a);
    return o ? u : function(f) {
      return u(t, a, i ? f + i : f, l, 1);
    };
  },
  quickTo: function(t, n, i) {
    var r, s = Ut.to(t, ne((r = {}, r[n] = "+=0.1", r.paused = !0, r.stagger = 0, r), i || {})), o = function(a, u, f) {
      return s.resetTo(n, a, u, f);
    };
    return o.tween = s, o;
  },
  isTweening: function(t) {
    return pt.getTweensOf(t, !0).length > 0;
  },
  defaults: function(t) {
    return t && t.ease && (t.ease = Cn(t.ease, Wn.ease)), Yo(Wn, t || {});
  },
  config: function(t) {
    return Yo(te, t || {});
  },
  registerEffect: function(t) {
    var n = t.name, i = t.effect, r = t.plugins, s = t.defaults, o = t.extendTimeline;
    (r || "").split(",").forEach(function(l) {
      return l && !Gt[l] && !ee[l] && Ci(n + " effect requires " + l + " plugin.");
    }), Wr[n] = function(l, a, u) {
      return i(le(l), ne(a || {}, s), u);
    }, o && (Ft.prototype[n] = function(l, a, u) {
      return this.add(Wr[n](l, Ee(a) ? a : (u = a) && {}, this), u);
    });
  },
  registerEase: function(t, n) {
    X[t] = Cn(n);
  },
  parseEase: function(t, n) {
    return arguments.length ? Cn(t, n) : X;
  },
  getById: function(t) {
    return pt.getById(t);
  },
  exportRoot: function(t, n) {
    t === void 0 && (t = {});
    var i = new Ft(t), r, s;
    for (i.smoothChildTiming = Bt(t.smoothChildTiming), pt.remove(i), i._dp = 0, i._time = i._tTime = pt._time, r = pt._first; r; )
      s = r._next, (n || !(!r._dur && r instanceof xt && r.vars.onComplete === r._targets[0])) && Ce(i, r, r._start - r._delay), r = s;
    return Ce(pt, i, 0), i;
  },
  context: function(t, n) {
    return t ? new pf(t, n) : ht;
  },
  matchMedia: function(t) {
    return new nd(t);
  },
  matchMediaRefresh: function() {
    return On.forEach(function(t) {
      var n = t.conditions, i, r;
      for (r in n)
        n[r] && (n[r] = !1, i = 1);
      i && t.revert();
    }) || ys();
  },
  addEventListener: function(t, n) {
    var i = Gi[t] || (Gi[t] = []);
    ~i.indexOf(n) || i.push(n);
  },
  removeEventListener: function(t, n) {
    var i = Gi[t], r = i && i.indexOf(n);
    r >= 0 && i.splice(r, 1);
  },
  utils: {
    wrap: Ih,
    wrapYoyo: Fh,
    distribute: Ka,
    random: Ya,
    snap: qa,
    normalize: Rh,
    getUnit: Et,
    clamp: Eh,
    splitColor: Qa,
    toArray: le,
    selector: _s,
    mapRange: Xa,
    pipe: kh,
    unitize: Dh,
    interpolate: Lh,
    shuffle: Wa
  },
  install: Ra,
  effects: Wr,
  ticker: Xt,
  updateRoot: Ft.updateRoot,
  plugins: Gt,
  globalTimeline: pt,
  core: {
    PropTween: jt,
    globals: Ia,
    Tween: xt,
    Timeline: Ft,
    Animation: Ei,
    getCache: Tn,
    _removeLinkedListItem: Or,
    reverting: function() {
      return Ct;
    },
    context: function(t) {
      return t && ht && (ht.data.push(t), t._ctx = ht), ht;
    },
    suppressOverwrites: function(t) {
      return zs = t;
    }
  }
};
Vt("to,from,fromTo,delayedCall,set,killTweensOf", function(e) {
  return ar[e] = xt[e];
});
Xt.add(Ft.updateRoot);
In = ar.to({}, {
  duration: 0
});
var id = function(t, n) {
  for (var i = t._pt; i && i.p !== n && i.op !== n && i.fp !== n; )
    i = i._next;
  return i;
}, rd = function(t, n) {
  var i = t._targets, r, s, o;
  for (r in n)
    for (s = i.length; s--; )
      o = t._ptLookup[s][r], o && (o = o.d) && (o._pt && (o = id(o, r)), o && o.modifier && o.modifier(n[r], t, i[s], r));
}, Xr = function(t, n) {
  return {
    name: t,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(r, s, o) {
      o._onInit = function(l) {
        var a, u;
        if (St(s) && (a = {}, Vt(s, function(f) {
          return a[f] = 1;
        }), s = a), n) {
          a = {};
          for (u in s)
            a[u] = n(s[u]);
          s = a;
        }
        rd(l, s);
      };
    }
  };
}, Ut = ar.registerPlugin({
  name: "attr",
  init: function(t, n, i, r, s) {
    var o, l, a;
    this.tween = i;
    for (o in n)
      a = t.getAttribute(o) || "", l = this.add(t, "setAttribute", (a || 0) + "", n[o], r, s, 0, 0, o), l.op = o, l.b = a, this._props.push(o);
  },
  render: function(t, n) {
    for (var i = n._pt; i; )
      Ct ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), i = i._next;
  }
}, {
  name: "endArray",
  headless: 1,
  init: function(t, n) {
    for (var i = n.length; i--; )
      this.add(t, i, t[i] || 0, n[i], 0, 0, 0, 0, 0, 1);
  }
}, Xr("roundProps", gs), Xr("modifiers"), Xr("snap", qa)) || ar;
xt.version = Ft.version = Ut.version = "3.14.2";
Da = 1;
Vs() && Gn();
X.Power0;
X.Power1;
X.Power2;
X.Power3;
X.Power4;
X.Linear;
X.Quad;
X.Cubic;
X.Quart;
X.Quint;
X.Strong;
X.Elastic;
X.Back;
X.SteppedEase;
X.Bounce;
X.Sine;
X.Expo;
X.Circ;
/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var tl, Je, jn, Qs, xn, el, to, sd = function() {
  return typeof window < "u";
}, je = {}, yn = 180 / Math.PI, Hn = Math.PI / 180, Mn = Math.atan2, nl = 1e8, eo = /([A-Z])/g, od = /(left|right|width|margin|padding|x)/i, ld = /[\s,\(]\S/, Oe = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, vs = function(t, n) {
  return n.set(n.t, n.p, Math.round((n.s + n.c * t) * 1e4) / 1e4 + n.u, n);
}, ad = function(t, n) {
  return n.set(n.t, n.p, t === 1 ? n.e : Math.round((n.s + n.c * t) * 1e4) / 1e4 + n.u, n);
}, fd = function(t, n) {
  return n.set(n.t, n.p, t ? Math.round((n.s + n.c * t) * 1e4) / 1e4 + n.u : n.b, n);
}, ud = function(t, n) {
  return n.set(n.t, n.p, t === 1 ? n.e : t ? Math.round((n.s + n.c * t) * 1e4) / 1e4 + n.u : n.b, n);
}, cd = function(t, n) {
  var i = n.s + n.c * t;
  n.set(n.t, n.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + n.u, n);
}, _f = function(t, n) {
  return n.set(n.t, n.p, t ? n.e : n.b, n);
}, gf = function(t, n) {
  return n.set(n.t, n.p, t !== 1 ? n.b : n.e, n);
}, hd = function(t, n, i) {
  return t.style[n] = i;
}, dd = function(t, n, i) {
  return t.style.setProperty(n, i);
}, pd = function(t, n, i) {
  return t._gsap[n] = i;
}, _d = function(t, n, i) {
  return t._gsap.scaleX = t._gsap.scaleY = i;
}, gd = function(t, n, i, r, s) {
  var o = t._gsap;
  o.scaleX = o.scaleY = i, o.renderTransform(s, o);
}, md = function(t, n, i, r, s) {
  var o = t._gsap;
  o[n] = i, o.renderTransform(s, o);
}, _t = "transform", Ht = _t + "Origin", yd = function e(t, n) {
  var i = this, r = this.target, s = r.style, o = r._gsap;
  if (t in je && s) {
    if (this.tfm = this.tfm || {}, t !== "transform")
      t = Oe[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(l) {
        return i.tfm[l] = Le(r, l);
      }) : this.tfm[t] = o.x ? o[t] : Le(r, t), t === Ht && (this.tfm.zOrigin = o.zOrigin);
    else
      return Oe.transform.split(",").forEach(function(l) {
        return e.call(i, l, n);
      });
    if (this.props.indexOf(_t) >= 0)
      return;
    o.svg && (this.svgo = r.getAttribute("data-svg-origin"), this.props.push(Ht, n, "")), t = _t;
  }
  (s || n) && this.props.push(t, n, s[t]);
}, mf = function(t) {
  t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
}, vd = function() {
  var t = this.props, n = this.target, i = n.style, r = n._gsap, s, o;
  for (s = 0; s < t.length; s += 3)
    t[s + 1] ? t[s + 1] === 2 ? n[t[s]](t[s + 2]) : n[t[s]] = t[s + 2] : t[s + 2] ? i[t[s]] = t[s + 2] : i.removeProperty(t[s].substr(0, 2) === "--" ? t[s] : t[s].replace(eo, "-$1").toLowerCase());
  if (this.tfm) {
    for (o in this.tfm)
      r[o] = this.tfm[o];
    r.svg && (r.renderTransform(), n.setAttribute("data-svg-origin", this.svgo || "")), s = to(), (!s || !s.isStart) && !i[_t] && (mf(i), r.zOrigin && i[Ht] && (i[Ht] += " " + r.zOrigin + "px", r.zOrigin = 0, r.renderTransform()), r.uncache = 1);
  }
}, yf = function(t, n) {
  var i = {
    target: t,
    props: [],
    revert: vd,
    save: yd
  };
  return t._gsap || Ut.core.getCache(t), n && t.style && t.nodeType && n.split(",").forEach(function(r) {
    return i.save(r);
  }), i;
}, vf, xs = function(t, n) {
  var i = Je.createElementNS ? Je.createElementNS((n || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Je.createElement(t);
  return i && i.style ? i : Je.createElement(t);
}, Qt = function e(t, n, i) {
  var r = getComputedStyle(t);
  return r[n] || r.getPropertyValue(n.replace(eo, "-$1").toLowerCase()) || r.getPropertyValue(n) || !i && e(t, Xn(n) || n, 1) || "";
}, il = "O,Moz,ms,Ms,Webkit".split(","), Xn = function(t, n, i) {
  var r = n || xn, s = r.style, o = 5;
  if (t in s && !i)
    return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); o-- && !(il[o] + t in s); )
    ;
  return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? il[o] : "") + t;
}, bs = function() {
  sd() && window.document && (tl = window, Je = tl.document, jn = Je.documentElement, xn = xs("div") || {
    style: {}
  }, xs("div"), _t = Xn(_t), Ht = _t + "Origin", xn.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", vf = !!Xn("perspective"), to = Ut.core.reverting, Qs = 1);
}, rl = function(t) {
  var n = t.ownerSVGElement, i = xs("svg", n && n.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = t.cloneNode(!0), s;
  r.style.display = "block", i.appendChild(r), jn.appendChild(i);
  try {
    s = r.getBBox();
  } catch {
  }
  return i.removeChild(r), jn.removeChild(i), s;
}, sl = function(t, n) {
  for (var i = n.length; i--; )
    if (t.hasAttribute(n[i]))
      return t.getAttribute(n[i]);
}, xf = function(t) {
  var n, i;
  try {
    n = t.getBBox();
  } catch {
    n = rl(t), i = 1;
  }
  return n && (n.width || n.height) || i || (n = rl(t)), n && !n.width && !n.x && !n.y ? {
    x: +sl(t, ["x", "cx", "x1"]) || 0,
    y: +sl(t, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : n;
}, bf = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && xf(t));
}, ln = function(t, n) {
  if (n) {
    var i = t.style, r;
    n in je && n !== Ht && (n = _t), i.removeProperty ? (r = n.substr(0, 2), (r === "ms" || n.substr(0, 6) === "webkit") && (n = "-" + n), i.removeProperty(r === "--" ? n : n.replace(eo, "-$1").toLowerCase())) : i.removeAttribute(n);
  }
}, Ze = function(t, n, i, r, s, o) {
  var l = new jt(t._pt, n, i, 0, 1, o ? gf : _f);
  return t._pt = l, l.b = r, l.e = s, t._props.push(i), l;
}, ol = {
  deg: 1,
  rad: 1,
  turn: 1
}, xd = {
  grid: 1,
  flex: 1
}, an = function e(t, n, i, r) {
  var s = parseFloat(i) || 0, o = (i + "").trim().substr((s + "").length) || "px", l = xn.style, a = od.test(n), u = t.tagName.toLowerCase() === "svg", f = (u ? "client" : "offset") + (a ? "Width" : "Height"), c = 100, d = r === "px", h = r === "%", m, p, v, b;
  if (r === o || !s || ol[r] || ol[o])
    return s;
  if (o !== "px" && !d && (s = e(t, n, i, "px")), b = t.getCTM && bf(t), (h || o === "%") && (je[n] || ~n.indexOf("adius")))
    return m = b ? t.getBBox()[a ? "width" : "height"] : t[f], vt(h ? s / m * c : s / 100 * m);
  if (l[a ? "width" : "height"] = c + (d ? o : r), p = r !== "rem" && ~n.indexOf("adius") || r === "em" && t.appendChild && !u ? t : t.parentNode, b && (p = (t.ownerSVGElement || {}).parentNode), (!p || p === Je || !p.appendChild) && (p = Je.body), v = p._gsap, v && h && v.width && a && v.time === Xt.time && !v.uncache)
    return vt(s / v.width * c);
  if (h && (n === "height" || n === "width")) {
    var T = t.style[n];
    t.style[n] = c + r, m = t[f], T ? t.style[n] = T : ln(t, n);
  } else
    (h || o === "%") && !xd[Qt(p, "display")] && (l.position = Qt(t, "position")), p === t && (l.position = "static"), p.appendChild(xn), m = xn[f], p.removeChild(xn), l.position = "absolute";
  return a && h && (v = Tn(p), v.time = Xt.time, v.width = p[f]), vt(d ? m * s / c : m && s ? c / m * s : 0);
}, Le = function(t, n, i, r) {
  var s;
  return Qs || bs(), n in Oe && n !== "transform" && (n = Oe[n], ~n.indexOf(",") && (n = n.split(",")[0])), je[n] && n !== "transform" ? (s = ki(t, r), s = n !== "transformOrigin" ? s[n] : s.svg ? s.origin : ur(Qt(t, Ht)) + " " + s.zOrigin + "px") : (s = t.style[n], (!s || s === "auto" || r || ~(s + "").indexOf("calc(")) && (s = fr[n] && fr[n](t, n, i) || Qt(t, n) || La(t, n) || (n === "opacity" ? 1 : 0))), i && !~(s + "").trim().indexOf(" ") ? an(t, n, s, i) + i : s;
}, bd = function(t, n, i, r) {
  if (!i || i === "none") {
    var s = Xn(n, t, 1), o = s && Qt(t, s, 1);
    o && o !== i ? (n = s, i = o) : n === "borderColor" && (i = Qt(t, "borderTopColor"));
  }
  var l = new jt(this._pt, t.style, n, 0, 1, hf), a = 0, u = 0, f, c, d, h, m, p, v, b, T, C, x, y;
  if (l.b = i, l.e = r, i += "", r += "", r.substring(0, 6) === "var(--" && (r = Qt(t, r.substring(4, r.indexOf(")")))), r === "auto" && (p = t.style[n], t.style[n] = r, r = Qt(t, n) || r, p ? t.style[n] = p : ln(t, n)), f = [i, r], ef(f), i = f[0], r = f[1], d = i.match(Rn) || [], y = r.match(Rn) || [], y.length) {
    for (; c = Rn.exec(r); )
      v = c[0], T = r.substring(a, c.index), m ? m = (m + 1) % 5 : (T.substr(-5) === "rgba(" || T.substr(-5) === "hsla(") && (m = 1), v !== (p = d[u++] || "") && (h = parseFloat(p) || 0, x = p.substr((h + "").length), v.charAt(1) === "=" && (v = Vn(h, v) + x), b = parseFloat(v), C = v.substr((b + "").length), a = Rn.lastIndex - C.length, C || (C = C || te.units[n] || x, a === r.length && (r += C, l.e += C)), x !== C && (h = an(t, n, p, C) || 0), l._pt = {
        _next: l._pt,
        p: T || u === 1 ? T : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: h,
        c: b - h,
        m: m && m < 4 || n === "zIndex" ? Math.round : 0
      });
    l.c = a < r.length ? r.substring(a, r.length) : "";
  } else
    l.r = n === "display" && r === "none" ? gf : _f;
  return ka.test(r) && (l.e = 0), this._pt = l, l;
}, ll = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, wd = function(t) {
  var n = t.split(" "), i = n[0], r = n[1] || "50%";
  return (i === "top" || i === "bottom" || r === "left" || r === "right") && (t = i, i = r, r = t), n[0] = ll[i] || i, n[1] = ll[r] || r, n.join(" ");
}, Td = function(t, n) {
  if (n.tween && n.tween._time === n.tween._dur) {
    var i = n.t, r = i.style, s = n.u, o = i._gsap, l, a, u;
    if (s === "all" || s === !0)
      r.cssText = "", a = 1;
    else
      for (s = s.split(","), u = s.length; --u > -1; )
        l = s[u], je[l] && (a = 1, l = l === "transformOrigin" ? Ht : _t), ln(i, l);
    a && (ln(i, _t), o && (o.svg && i.removeAttribute("transform"), r.scale = r.rotate = r.translate = "none", ki(i, 1), o.uncache = 1, mf(r)));
  }
}, fr = {
  clearProps: function(t, n, i, r, s) {
    if (s.data !== "isFromStart") {
      var o = t._pt = new jt(t._pt, n, i, 0, 0, Td);
      return o.u = r, o.pr = -10, o.tween = s, t._props.push(i), 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */
}, Mi = [1, 0, 0, 1, 0, 0], wf = {}, Tf = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
}, al = function(t) {
  var n = Qt(t, _t);
  return Tf(n) ? Mi : n.substr(7).match(Ma).map(vt);
}, no = function(t, n) {
  var i = t._gsap || Tn(t), r = t.style, s = al(t), o, l, a, u;
  return i.svg && t.getAttribute("transform") ? (a = t.transform.baseVal.consolidate().matrix, s = [a.a, a.b, a.c, a.d, a.e, a.f], s.join(",") === "1,0,0,1,0,0" ? Mi : s) : (s === Mi && !t.offsetParent && t !== jn && !i.svg && (a = r.display, r.display = "block", o = t.parentNode, (!o || !t.offsetParent && !t.getBoundingClientRect().width) && (u = 1, l = t.nextElementSibling, jn.appendChild(t)), s = al(t), a ? r.display = a : ln(t, "display"), u && (l ? o.insertBefore(t, l) : o ? o.appendChild(t) : jn.removeChild(t))), n && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
}, ws = function(t, n, i, r, s, o) {
  var l = t._gsap, a = s || no(t, !0), u = l.xOrigin || 0, f = l.yOrigin || 0, c = l.xOffset || 0, d = l.yOffset || 0, h = a[0], m = a[1], p = a[2], v = a[3], b = a[4], T = a[5], C = n.split(" "), x = parseFloat(C[0]) || 0, y = parseFloat(C[1]) || 0, O, M, D, w;
  i ? a !== Mi && (M = h * v - m * p) && (D = x * (v / M) + y * (-p / M) + (p * T - v * b) / M, w = x * (-m / M) + y * (h / M) - (h * T - m * b) / M, x = D, y = w) : (O = xf(t), x = O.x + (~C[0].indexOf("%") ? x / 100 * O.width : x), y = O.y + (~(C[1] || C[0]).indexOf("%") ? y / 100 * O.height : y)), r || r !== !1 && l.smooth ? (b = x - u, T = y - f, l.xOffset = c + (b * h + T * p) - b, l.yOffset = d + (b * m + T * v) - T) : l.xOffset = l.yOffset = 0, l.xOrigin = x, l.yOrigin = y, l.smooth = !!r, l.origin = n, l.originIsAbsolute = !!i, t.style[Ht] = "0px 0px", o && (Ze(o, l, "xOrigin", u, x), Ze(o, l, "yOrigin", f, y), Ze(o, l, "xOffset", c, l.xOffset), Ze(o, l, "yOffset", d, l.yOffset)), t.setAttribute("data-svg-origin", x + " " + y);
}, ki = function(t, n) {
  var i = t._gsap || new of(t);
  if ("x" in i && !n && !i.uncache)
    return i;
  var r = t.style, s = i.scaleX < 0, o = "px", l = "deg", a = getComputedStyle(t), u = Qt(t, Ht) || "0", f, c, d, h, m, p, v, b, T, C, x, y, O, M, D, w, L, B, R, j, J, it, Y, q, G, ie, _e, Wt, bt, Jn, ue, Me;
  return f = c = d = p = v = b = T = C = x = 0, h = m = 1, i.svg = !!(t.getCTM && bf(t)), a.translate && ((a.translate !== "none" || a.scale !== "none" || a.rotate !== "none") && (r[_t] = (a.translate !== "none" ? "translate3d(" + (a.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (a.rotate !== "none" ? "rotate(" + a.rotate + ") " : "") + (a.scale !== "none" ? "scale(" + a.scale.split(" ").join(",") + ") " : "") + (a[_t] !== "none" ? a[_t] : "")), r.scale = r.rotate = r.translate = "none"), M = no(t, i.svg), i.svg && (i.uncache ? (G = t.getBBox(), u = i.xOrigin - G.x + "px " + (i.yOrigin - G.y) + "px", q = "") : q = !n && t.getAttribute("data-svg-origin"), ws(t, q || u, !!q || i.originIsAbsolute, i.smooth !== !1, M)), y = i.xOrigin || 0, O = i.yOrigin || 0, M !== Mi && (B = M[0], R = M[1], j = M[2], J = M[3], f = it = M[4], c = Y = M[5], M.length === 6 ? (h = Math.sqrt(B * B + R * R), m = Math.sqrt(J * J + j * j), p = B || R ? Mn(R, B) * yn : 0, T = j || J ? Mn(j, J) * yn + p : 0, T && (m *= Math.abs(Math.cos(T * Hn))), i.svg && (f -= y - (y * B + O * j), c -= O - (y * R + O * J))) : (Me = M[6], Jn = M[7], _e = M[8], Wt = M[9], bt = M[10], ue = M[11], f = M[12], c = M[13], d = M[14], D = Mn(Me, bt), v = D * yn, D && (w = Math.cos(-D), L = Math.sin(-D), q = it * w + _e * L, G = Y * w + Wt * L, ie = Me * w + bt * L, _e = it * -L + _e * w, Wt = Y * -L + Wt * w, bt = Me * -L + bt * w, ue = Jn * -L + ue * w, it = q, Y = G, Me = ie), D = Mn(-j, bt), b = D * yn, D && (w = Math.cos(-D), L = Math.sin(-D), q = B * w - _e * L, G = R * w - Wt * L, ie = j * w - bt * L, ue = J * L + ue * w, B = q, R = G, j = ie), D = Mn(R, B), p = D * yn, D && (w = Math.cos(D), L = Math.sin(D), q = B * w + R * L, G = it * w + Y * L, R = R * w - B * L, Y = Y * w - it * L, B = q, it = G), v && Math.abs(v) + Math.abs(p) > 359.9 && (v = p = 0, b = 180 - b), h = vt(Math.sqrt(B * B + R * R + j * j)), m = vt(Math.sqrt(Y * Y + Me * Me)), D = Mn(it, Y), T = Math.abs(D) > 2e-4 ? D * yn : 0, x = ue ? 1 / (ue < 0 ? -ue : ue) : 0), i.svg && (q = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !Tf(Qt(t, _t)), q && t.setAttribute("transform", q))), Math.abs(T) > 90 && Math.abs(T) < 270 && (s ? (h *= -1, T += p <= 0 ? 180 : -180, p += p <= 0 ? 180 : -180) : (m *= -1, T += T <= 0 ? 180 : -180)), n = n || i.uncache, i.x = f - ((i.xPercent = f && (!n && i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-f) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + o, i.y = c - ((i.yPercent = c && (!n && i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-c) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + o, i.z = d + o, i.scaleX = vt(h), i.scaleY = vt(m), i.rotation = vt(p) + l, i.rotationX = vt(v) + l, i.rotationY = vt(b) + l, i.skewX = T + l, i.skewY = C + l, i.transformPerspective = x + o, (i.zOrigin = parseFloat(u.split(" ")[2]) || !n && i.zOrigin || 0) && (r[Ht] = ur(u)), i.xOffset = i.yOffset = 0, i.force3D = te.force3D, i.renderTransform = i.svg ? Cd : vf ? Sf : Sd, i.uncache = 0, i;
}, ur = function(t) {
  return (t = t.split(" "))[0] + " " + t[1];
}, Jr = function(t, n, i) {
  var r = Et(n);
  return vt(parseFloat(n) + parseFloat(an(t, "x", i + "px", r))) + r;
}, Sd = function(t, n) {
  n.z = "0px", n.rotationY = n.rotationX = "0deg", n.force3D = 0, Sf(t, n);
}, _n = "0deg", ii = "0px", gn = ") ", Sf = function(t, n) {
  var i = n || this, r = i.xPercent, s = i.yPercent, o = i.x, l = i.y, a = i.z, u = i.rotation, f = i.rotationY, c = i.rotationX, d = i.skewX, h = i.skewY, m = i.scaleX, p = i.scaleY, v = i.transformPerspective, b = i.force3D, T = i.target, C = i.zOrigin, x = "", y = b === "auto" && t && t !== 1 || b === !0;
  if (C && (c !== _n || f !== _n)) {
    var O = parseFloat(f) * Hn, M = Math.sin(O), D = Math.cos(O), w;
    O = parseFloat(c) * Hn, w = Math.cos(O), o = Jr(T, o, M * w * -C), l = Jr(T, l, -Math.sin(O) * -C), a = Jr(T, a, D * w * -C + C);
  }
  v !== ii && (x += "perspective(" + v + gn), (r || s) && (x += "translate(" + r + "%, " + s + "%) "), (y || o !== ii || l !== ii || a !== ii) && (x += a !== ii || y ? "translate3d(" + o + ", " + l + ", " + a + ") " : "translate(" + o + ", " + l + gn), u !== _n && (x += "rotate(" + u + gn), f !== _n && (x += "rotateY(" + f + gn), c !== _n && (x += "rotateX(" + c + gn), (d !== _n || h !== _n) && (x += "skew(" + d + ", " + h + gn), (m !== 1 || p !== 1) && (x += "scale(" + m + ", " + p + gn), T.style[_t] = x || "translate(0, 0)";
}, Cd = function(t, n) {
  var i = n || this, r = i.xPercent, s = i.yPercent, o = i.x, l = i.y, a = i.rotation, u = i.skewX, f = i.skewY, c = i.scaleX, d = i.scaleY, h = i.target, m = i.xOrigin, p = i.yOrigin, v = i.xOffset, b = i.yOffset, T = i.forceCSS, C = parseFloat(o), x = parseFloat(l), y, O, M, D, w;
  a = parseFloat(a), u = parseFloat(u), f = parseFloat(f), f && (f = parseFloat(f), u += f, a += f), a || u ? (a *= Hn, u *= Hn, y = Math.cos(a) * c, O = Math.sin(a) * c, M = Math.sin(a - u) * -d, D = Math.cos(a - u) * d, u && (f *= Hn, w = Math.tan(u - f), w = Math.sqrt(1 + w * w), M *= w, D *= w, f && (w = Math.tan(f), w = Math.sqrt(1 + w * w), y *= w, O *= w)), y = vt(y), O = vt(O), M = vt(M), D = vt(D)) : (y = c, D = d, O = M = 0), (C && !~(o + "").indexOf("px") || x && !~(l + "").indexOf("px")) && (C = an(h, "x", o, "px"), x = an(h, "y", l, "px")), (m || p || v || b) && (C = vt(C + m - (m * y + p * M) + v), x = vt(x + p - (m * O + p * D) + b)), (r || s) && (w = h.getBBox(), C = vt(C + r / 100 * w.width), x = vt(x + s / 100 * w.height)), w = "matrix(" + y + "," + O + "," + M + "," + D + "," + C + "," + x + ")", h.setAttribute("transform", w), T && (h.style[_t] = w);
}, Od = function(t, n, i, r, s) {
  var o = 360, l = St(s), a = parseFloat(s) * (l && ~s.indexOf("rad") ? yn : 1), u = a - r, f = r + u + "deg", c, d;
  return l && (c = s.split("_")[1], c === "short" && (u %= o, u !== u % (o / 2) && (u += u < 0 ? o : -o)), c === "cw" && u < 0 ? u = (u + o * nl) % o - ~~(u / o) * o : c === "ccw" && u > 0 && (u = (u - o * nl) % o - ~~(u / o) * o)), t._pt = d = new jt(t._pt, n, i, r, u, ad), d.e = f, d.u = "deg", t._props.push(i), d;
}, fl = function(t, n) {
  for (var i in n)
    t[i] = n[i];
  return t;
}, Pd = function(t, n, i) {
  var r = fl({}, i._gsap), s = "perspective,force3D,transformOrigin,svgOrigin", o = i.style, l, a, u, f, c, d, h, m;
  r.svg ? (u = i.getAttribute("transform"), i.setAttribute("transform", ""), o[_t] = n, l = ki(i, 1), ln(i, _t), i.setAttribute("transform", u)) : (u = getComputedStyle(i)[_t], o[_t] = n, l = ki(i, 1), o[_t] = u);
  for (a in je)
    u = r[a], f = l[a], u !== f && s.indexOf(a) < 0 && (h = Et(u), m = Et(f), c = h !== m ? an(i, a, u, m) : parseFloat(u), d = parseFloat(f), t._pt = new jt(t._pt, l, a, c, d - c, vs), t._pt.u = m || 0, t._props.push(a));
  fl(l, r);
};
Vt("padding,margin,Width,Radius", function(e, t) {
  var n = "Top", i = "Right", r = "Bottom", s = "Left", o = (t < 3 ? [n, i, r, s] : [n + s, n + i, r + i, r + s]).map(function(l) {
    return t < 2 ? e + l : "border" + l + e;
  });
  fr[t > 1 ? "border" + e : e] = function(l, a, u, f, c) {
    var d, h;
    if (arguments.length < 4)
      return d = o.map(function(m) {
        return Le(l, m, u);
      }), h = d.join(" "), h.split(d[0]).length === 5 ? d[0] : h;
    d = (f + "").split(" "), h = {}, o.forEach(function(m, p) {
      return h[m] = d[p] = d[p] || d[(p - 1) / 2 | 0];
    }), l.init(a, h, c);
  };
});
var Cf = {
  name: "css",
  register: bs,
  targetTest: function(t) {
    return t.style && t.nodeType;
  },
  init: function(t, n, i, r, s) {
    var o = this._props, l = t.style, a = i.vars.startAt, u, f, c, d, h, m, p, v, b, T, C, x, y, O, M, D, w;
    Qs || bs(), this.styles = this.styles || yf(t), D = this.styles.props, this.tween = i;
    for (p in n)
      if (p !== "autoRound" && (f = n[p], !(Gt[p] && lf(p, n, i, r, t, s)))) {
        if (h = typeof f, m = fr[p], h === "function" && (f = f.call(i, r, t, s), h = typeof f), h === "string" && ~f.indexOf("random(") && (f = Pi(f)), m)
          m(this, t, p, f, i) && (M = 1);
        else if (p.substr(0, 2) === "--")
          u = (getComputedStyle(t).getPropertyValue(p) + "").trim(), f += "", nn.lastIndex = 0, nn.test(u) || (v = Et(u), b = Et(f), b ? v !== b && (u = an(t, p, u, b) + b) : v && (f += v)), this.add(l, "setProperty", u, f, r, s, 0, 0, p), o.push(p), D.push(p, 0, l[p]);
        else if (h !== "undefined") {
          if (a && p in a ? (u = typeof a[p] == "function" ? a[p].call(i, r, t, s) : a[p], St(u) && ~u.indexOf("random(") && (u = Pi(u)), Et(u + "") || u === "auto" || (u += te.units[p] || Et(Le(t, p)) || ""), (u + "").charAt(1) === "=" && (u = Le(t, p))) : u = Le(t, p), d = parseFloat(u), T = h === "string" && f.charAt(1) === "=" && f.substr(0, 2), T && (f = f.substr(2)), c = parseFloat(f), p in Oe && (p === "autoAlpha" && (d === 1 && Le(t, "visibility") === "hidden" && c && (d = 0), D.push("visibility", 0, l.visibility), Ze(this, l, "visibility", d ? "inherit" : "hidden", c ? "inherit" : "hidden", !c)), p !== "scale" && p !== "transform" && (p = Oe[p], ~p.indexOf(",") && (p = p.split(",")[0]))), C = p in je, C) {
            if (this.styles.save(p), w = f, h === "string" && f.substring(0, 6) === "var(--") {
              if (f = Qt(t, f.substring(4, f.indexOf(")"))), f.substring(0, 5) === "calc(") {
                var L = t.style.perspective;
                t.style.perspective = f, f = Qt(t, "perspective"), L ? t.style.perspective = L : ln(t, "perspective");
              }
              c = parseFloat(f);
            }
            if (x || (y = t._gsap, y.renderTransform && !n.parseTransform || ki(t, n.parseTransform), O = n.smoothOrigin !== !1 && y.smooth, x = this._pt = new jt(this._pt, l, _t, 0, 1, y.renderTransform, y, 0, -1), x.dep = 1), p === "scale")
              this._pt = new jt(this._pt, y, "scaleY", y.scaleY, (T ? Vn(y.scaleY, T + c) : c) - y.scaleY || 0, vs), this._pt.u = 0, o.push("scaleY", p), p += "X";
            else if (p === "transformOrigin") {
              D.push(Ht, 0, l[Ht]), f = wd(f), y.svg ? ws(t, f, 0, O, 0, this) : (b = parseFloat(f.split(" ")[2]) || 0, b !== y.zOrigin && Ze(this, y, "zOrigin", y.zOrigin, b), Ze(this, l, p, ur(u), ur(f)));
              continue;
            } else if (p === "svgOrigin") {
              ws(t, f, 1, O, 0, this);
              continue;
            } else if (p in wf) {
              Od(this, y, p, d, T ? Vn(d, T + f) : f);
              continue;
            } else if (p === "smoothOrigin") {
              Ze(this, y, "smooth", y.smooth, f);
              continue;
            } else if (p === "force3D") {
              y[p] = f;
              continue;
            } else if (p === "transform") {
              Pd(this, f, t);
              continue;
            }
          } else p in l || (p = Xn(p) || p);
          if (C || (c || c === 0) && (d || d === 0) && !ld.test(f) && p in l)
            v = (u + "").substr((d + "").length), c || (c = 0), b = Et(f) || (p in te.units ? te.units[p] : v), v !== b && (d = an(t, p, u, b)), this._pt = new jt(this._pt, C ? y : l, p, d, (T ? Vn(d, T + c) : c) - d, !C && (b === "px" || p === "zIndex") && n.autoRound !== !1 ? cd : vs), this._pt.u = b || 0, C && w !== f ? (this._pt.b = u, this._pt.e = w, this._pt.r = ud) : v !== b && b !== "%" && (this._pt.b = u, this._pt.r = fd);
          else if (p in l)
            bd.call(this, t, p, u, T ? T + f : f);
          else if (p in t)
            this.add(t, p, u || t[p], T ? T + f : f, r, s);
          else if (p !== "parseTransform") {
            Hs(p, f);
            continue;
          }
          C || (p in l ? D.push(p, 0, l[p]) : typeof t[p] == "function" ? D.push(p, 2, t[p]()) : D.push(p, 1, u || t[p])), o.push(p);
        }
      }
    M && df(this);
  },
  render: function(t, n) {
    if (n.tween._time || !to())
      for (var i = n._pt; i; )
        i.r(t, i.d), i = i._next;
    else
      n.styles.revert();
  },
  get: Le,
  aliases: Oe,
  getSetter: function(t, n, i) {
    var r = Oe[n];
    return r && r.indexOf(",") < 0 && (n = r), n in je && n !== Ht && (t._gsap.x || Le(t, "x")) ? i && el === i ? n === "scale" ? _d : pd : (el = i || {}) && (n === "scale" ? gd : md) : t.style && !Bs(t.style[n]) ? hd : ~n.indexOf("-") ? dd : Js(t, n);
  },
  core: {
    _removeProperty: ln,
    _getMatrix: no
  }
};
Ut.utils.checkPrefix = Xn;
Ut.core.getStyleSaver = yf;
(function(e, t, n, i) {
  var r = Vt(e + "," + t + "," + n, function(s) {
    je[s] = 1;
  });
  Vt(t, function(s) {
    te.units[s] = "deg", wf[s] = 1;
  }), Oe[r[13]] = e + "," + t, Vt(i, function(s) {
    var o = s.split(":");
    Oe[o[1]] = r[o[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Vt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(e) {
  te.units[e] = "px";
});
Ut.registerPlugin(Cf);
var we = Ut.registerPlugin(Cf) || Ut;
we.core.Tween;
const Ad = { class: "h-full w-full relative flex flex-col bg-[#030303] text-white overflow-hidden" }, Ed = { class: "absolute inset-0 z-0 overflow-hidden pointer-events-none" }, Md = {
  key: 0,
  class: "absolute top-0 right-0 p-6 z-50 flex gap-4 pointer-events-auto"
}, kd = { class: "relative h-full w-full md:w-[450px] bg-[#0a0a0a]/95 border-l border-white/10 shadow-2xl overflow-auto text-left flex flex-col transform transition-transform duration-300" }, Dd = { class: "p-6 pb-2 border-b border-white/5 flex items-center justify-between shrink-0" }, Rd = { class: "p-6" }, Id = { class: "text-[10px] font-mono text-green-400 whitespace-pre-wrap" }, Fd = { class: "flex-1 w-full relative overflow-y-auto overflow-x-hidden z-10 scroll-smooth" }, Ld = {
  key: 1,
  class: "absolute bottom-0 left-0 w-full z-40 px-8 py-6 bg-gradient-to-t from-black via-black/80 to-transparent flex justify-between items-end pointer-events-none"
}, Nd = {
  key: 0,
  class: "pointer-events-auto text-left"
}, $d = { class: "text-[10px] font-bold text-gray-500 tracking-[0.2em] uppercase mb-1" }, zd = { class: "flex items-center gap-2 text-white/50 text-sm font-mono" }, Bd = {
  key: 0,
  class: "h-px w-8 bg-white/20"
}, Vd = {
  key: 1,
  class: "flex-1"
}, jd = {
  key: 2,
  class: "pointer-events-auto flex gap-3"
}, Hd = ["disabled"], Ud = ["disabled"], Wd = /* @__PURE__ */ fn({
  __name: "LuminaDeck",
  setup(e) {
    const { slide: t, index: n, total: i, next: r, prev: s, options: o } = lh(), l = tn(Fi), a = Yt(() => l.hasNext()), u = Yt(() => l.hasPrev()), f = Yt(() => {
      var x, y;
      return (y = (x = l.state.deck) == null ? void 0 : x.meta) == null ? void 0 : y.title;
    }), c = Yt(() => l.state.options.ui), d = Yt(() => l.state.options.navigation);
    ah();
    const h = Il({ showJson: !1 }), m = Yt(() => o.debug), p = Yt(() => !t.value || !t.value.type ? null : `layout-${t.value.type}`), v = Yt(() => {
      var x, y, O, M, D, w, L, B;
      return {
        backgroundColor: ((y = (x = t.value) == null ? void 0 : x.meta) == null ? void 0 : y.orbColor) || "#3b82f6",
        width: "60vw",
        height: "60vw",
        top: ((D = (M = (O = t.value) == null ? void 0 : O.meta) == null ? void 0 : M.orbPos) == null ? void 0 : D.top) || "-20%",
        left: ((B = (L = (w = t.value) == null ? void 0 : w.meta) == null ? void 0 : L.orbPos) == null ? void 0 : B.left) || "-10%"
      };
    }), b = (x) => {
      Dn.emit("action", x);
    }, T = (x, y) => {
      const O = x;
      O.style.opacity = "1", y();
    }, C = (x, y) => {
      var L, B, R;
      const { options: O } = l.state;
      if (((L = O.animation) == null ? void 0 : L.enabled) === !1) {
        y();
        return;
      }
      const M = ((B = O.animation) == null ? void 0 : B.durationOut) || 0.5, D = ((R = O.animation) == null ? void 0 : R.type) || "cascade", w = we.timeline({ onComplete: y });
      D === "fade" ? w.to(x, { opacity: 0, duration: M }) : D === "zoom" ? w.to(x, { opacity: 0, scale: 1.1, duration: M }) : w.to(x, {
        opacity: 0,
        y: -20,
        // Slight move up
        duration: M,
        ease: "power2.in"
      });
    };
    return (x, y) => {
      var O, M, D, w;
      return Q(), gt("div", Ad, [
        $("div", Ed, [
          $("div", {
            class: "ambient-orb",
            style: Di(v.value)
          }, null, 4),
          y[6] || (y[6] = $("div", {
            class: "absolute inset-0 opacity-[0.04]",
            style: { "background-image": "url('https://grainy-gradients.vercel.app/noise.svg')" }
          }, null, -1))
        ]),
        m.value ? (Q(), gt("div", Md, [
          $("button", {
            onClick: y[0] || (y[0] = (L) => h.value.showJson = !h.value.showJson),
            class: "w-8 h-8 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-white transition",
            title: "JSON"
          }, [...y[7] || (y[7] = [
            $("i", { class: "fa-solid fa-code text-xs" }, null, -1)
          ])])
        ])) : ce("", !0),
        Mt(Ao, { name: "fade" }, {
          default: rn(() => [
            h.value.showJson ? (Q(), gt("div", {
              key: 0,
              class: "fixed inset-0 z-[100] flex justify-end",
              onClick: y[3] || (y[3] = Zc((L) => h.value.showJson = !1, ["self"]))
            }, [
              $("div", {
                class: "absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity",
                onClick: y[1] || (y[1] = (L) => h.value.showJson = !1)
              }),
              $("div", kd, [
                $("div", Dd, [
                  y[9] || (y[9] = $("span", { class: "text-xs font-bold text-gray-400 uppercase tracking-widest" }, "Slide Data", -1)),
                  $("button", {
                    onClick: y[2] || (y[2] = (L) => h.value.showJson = !1),
                    class: "w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/50 hover:text-white transition"
                  }, [...y[8] || (y[8] = [
                    $("i", { class: "fa-solid fa-xmark" }, null, -1)
                  ])])
                ]),
                $("div", Rd, [
                  $("pre", Id, ft(JSON.stringify(xe(t), null, 2)), 1)
                ])
              ])
            ])) : ce("", !0)
          ]),
          _: 1
        }),
        $("main", Fd, [
          Mt(Ao, {
            css: !1,
            onLeave: C,
            onEnter: T,
            mode: "out-in"
          }, {
            default: rn(() => [
              p.value ? (Q(), Ae(ta(p.value), {
                key: xe(n),
                data: xe(t),
                onAction: b,
                class: "min-h-full w-full"
              }, null, 40, ["data"])) : ce("", !0)
            ]),
            _: 1
          })
        ]),
        (O = c.value) != null && O.visible ? (Q(), gt("div", Ld, [
          (M = c.value) != null && M.showSlideCount ? (Q(), gt("div", Nd, [
            $("h2", $d, ft(f.value), 1),
            $("div", zd, [
              $("span", null, ft((xe(n) + 1).toString().padStart(2, "0")), 1),
              (D = c.value) != null && D.showProgressBar ? (Q(), gt("div", Bd)) : ce("", !0),
              $("span", null, ft(xe(i).toString().padStart(2, "0")), 1)
            ])
          ])) : (Q(), gt("div", Vd)),
          (w = c.value) != null && w.showControls ? (Q(), gt("div", jd, [
            $("button", {
              onClick: y[4] || (y[4] = //@ts-ignore
              (...L) => xe(s) && xe(s)(...L)),
              class: ct(["w-12 h-12 rounded-full glass-panel hover:bg-white/10 flex items-center justify-center transition active:scale-95", !u.value || !d.value ? "opacity-30 cursor-not-allowed" : ""]),
              disabled: !u.value || !d.value
            }, [...y[10] || (y[10] = [
              $("i", { class: "fa-solid fa-arrow-left" }, null, -1)
            ])], 10, Hd),
            $("button", {
              onClick: y[5] || (y[5] = //@ts-ignore
              (...L) => xe(r) && xe(r)(...L)),
              class: ct(["w-12 h-12 rounded-full bg-white text-black hover:scale-105 flex items-center justify-center transition shadow-lg active:scale-95", !a.value || !d.value ? "opacity-30 cursor-not-allowed" : ""]),
              disabled: !a.value || !d.value
            }, [...y[11] || (y[11] = [
              $("i", { class: "fa-solid fa-arrow-right" }, null, -1)
            ])], 10, Ud)
          ])) : ce("", !0)
        ])) : ce("", !0)
      ]);
    };
  }
});
function Kd(e, t) {
  const n = tn(Fi);
  let i = null;
  const r = () => {
    if (!e.value || !n) return;
    i == null || i.revert();
    const { enabled: s, type: o, durationIn: l, stagger: a, ease: u } = n.state.options.animation || {};
    if (s === !1) {
      we.set(e.value.querySelectorAll(".reveal-up, .reveal-zoom, .reveal-content > *, .reveal-card, .reveal-img"), {
        opacity: 1,
        y: 0,
        scale: 1,
        visibility: "visible"
      });
      return;
    }
    i = we.context(() => {
      const f = e.value, c = o === "fade", d = o === "slide", h = o === "zoom", m = c ? 0 : d ? 80 : 40, p = h ? 0.8 : o === "cascade" ? 0.95 : 1;
      we.set(".reveal-up", { y: m, opacity: 0 }), we.set(".reveal-zoom", { scale: p, opacity: 0 }), we.set(".reveal-content > *", { y: c ? 0 : 30, opacity: 0 }), we.set(".reveal-card", { y: c ? 0 : 50, opacity: 0, scale: p }), we.set(".reveal-img", { scale: 1.1, opacity: 0 });
      const v = we.timeline({
        defaults: {
          ease: u || "power3.out",
          duration: l || 0.8
        },
        onComplete: t
      });
      f.querySelector(".reveal-img") && v.to(".reveal-img", {
        scale: 1,
        opacity: 1,
        duration: (l || 1) * 1.2,
        ease: "expo.out"
      }, 0);
      const b = l || 0.8, T = a || 0.1;
      f.querySelectorAll(".reveal-card").length && v.to(".reveal-card", {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: b,
        stagger: T,
        ease: d ? "expo.out" : "back.out(1.2)"
      }, 0.2);
      const C = f.querySelectorAll(".reveal-content > *");
      C.length && v.to(C, {
        y: 0,
        opacity: 1,
        duration: b,
        stagger: T / 2
      }, 0.3), f.querySelectorAll(".reveal-up").length && v.to(".reveal-up", {
        y: 0,
        opacity: 1,
        duration: b,
        stagger: T
      }, 0.2), f.querySelector(".reveal-zoom") && v.to(".reveal-zoom", {
        scale: 1,
        opacity: 1,
        duration: b * 1.2,
        ease: "expo.out"
      }, 0.1);
    }, e);
  };
  return br(() => {
    Nl(() => {
      r();
    });
  }), wr(() => {
    i == null || i.revert();
  }), { animateIn: r };
}
const qd = { class: "absolute inset-0 z-0 pointer-events-none" }, Yd = { class: "relative z-10 w-full h-full" }, Ni = /* @__PURE__ */ fn({
  __name: "BaseSlide",
  props: {
    data: {},
    customClass: {}
  },
  setup(e) {
    const t = Il(null);
    return Kd(t), (n, i) => (Q(), gt("div", {
      ref_key: "container",
      ref: t,
      class: ct(["w-full min-h-full relative text-white", e.customClass])
    }, [
      $("div", qd, [
        _o(n.$slots, "background")
      ]),
      $("div", Yd, [
        _o(n.$slots, "default")
      ])
    ], 2));
  }
}), Gd = { class: "reveal-zoom max-w-5xl z-10" }, Xd = {
  key: 0,
  class: "inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 text-sm font-medium tracking-widest uppercase mb-10 text-[var(--lumina-primary)]",
  style: { color: "var(--lumina-colors-primary, #3b82f6)" }
}, Jd = {
  key: 1,
  class: "text-xl md:text-3xl font-light max-w-3xl mx-auto leading-normal",
  style: { color: "var(--lumina-colors-muted, #9ca3af)" }
}, Zd = /* @__PURE__ */ fn({
  __name: "LayoutStatement",
  props: {
    data: {}
  },
  setup(e) {
    return (t, n) => (Q(), Ae(Ni, { data: e.data }, {
      default: rn(() => [
        $("div", {
          class: ct(["flex flex-col justify-center items-center text-center p-8 relative", e.data.sizing === "container" ? "h-full" : "min-h-screen"])
        }, [
          $("div", Gd, [
            e.data.tag ? (Q(), gt("span", Xd, ft(e.data.tag), 1)) : ce("", !0),
            $("h1", {
              class: "font-heading font-bold leading-[0.9] tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500",
              style: Di(e.data.sizing === "container" ? "font-size: 3.5rem;" : "font-size: clamp(3rem, 10vw, 8rem);")
            }, ft(e.data.title), 5),
            e.data.subtitle ? (Q(), gt("p", Jd, ft(e.data.subtitle), 1)) : ce("", !0)
          ])
        ], 2)
      ]),
      _: 1
    }, 8, ["data"]));
  }
}), Qd = ["src"], tp = { class: "reveal-content max-w-xl" }, ep = {
  class: "text-xs font-bold uppercase tracking-[0.2em] mb-6 block",
  style: { color: "var(--lumina-colors-primary, #3b82f6)" }
}, np = { class: "text-4xl lg:text-6xl font-heading font-bold leading-tight mb-8 text-white" }, ip = {
  class: "space-y-6 text-lg leading-relaxed font-light mb-10",
  style: { color: "var(--lumina-colors-muted, #9ca3af)" }
}, rp = {
  key: 0,
  class: "pt-6 border-t border-white/10"
}, sp = /* @__PURE__ */ fn({
  __name: "LayoutHalf",
  props: {
    data: {}
  },
  emits: ["action"],
  setup(e) {
    return (t, n) => (Q(), Ae(Ni, {
      data: e.data,
      customClass: "bg-[var(--lumina-bg)]"
    }, {
      default: rn(() => [
        $("div", {
          class: ct(["w-full flex flex-col lg:block relative", e.data.sizing === "container" ? "min-h-full" : "min-h-screen"])
        }, [
          $("div", {
            class: ct(["relative h-[40vh] lg:h-full lg:w-1/2 overflow-hidden z-0", e.data.sizing === "container" ? "lg:absolute lg:top-0" : "lg:fixed lg:top-0", e.data.imageSide === "right" ? "lg:right-0 order-1" : "lg:left-0 order-1"])
          }, [
            n[1] || (n[1] = $("div", { class: "absolute inset-0 bg-black/20 z-10" }, null, -1)),
            $("img", {
              src: e.data.image,
              class: "w-full h-full object-cover reveal-img scale-110 origin-center",
              alt: "Slide Image"
            }, null, 8, Qd)
          ], 2),
          $("div", {
            class: ct(["relative z-10 w-full lg:w-1/2 min-h-[60vh] flex flex-col justify-center p-8 lg:p-24 order-2 bg-[#050505]", e.data.imageSide === "right" ? "lg:mr-[50%]" : "lg:ml-[50%]", e.data.sizing === "container" ? "lg:min-h-full" : "lg:min-h-screen"])
          }, [
            $("div", tp, [
              $("span", ep, ft(e.data.tag), 1),
              $("h1", np, ft(e.data.title), 1),
              $("div", ip, [
                (Q(!0), gt(wt, null, Tr(e.data.paragraphs, (i, r) => (Q(), gt("p", { key: r }, ft(i), 1))), 128))
              ]),
              e.data.cta ? (Q(), gt("div", rp, [
                $("button", {
                  onClick: n[0] || (n[0] = (i) => t.$emit("action", { type: "cta", label: e.data.cta })),
                  class: "px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition flex items-center gap-3"
                }, [
                  xa(ft(e.data.cta) + " ", 1),
                  n[2] || (n[2] = $("i", { class: "fa-solid fa-arrow-right" }, null, -1))
                ])
              ])) : ce("", !0)
            ])
          ], 2)
        ], 2)
      ]),
      _: 1
    }, 8, ["data"]));
  }
}), op = { class: "mb-16 reveal-up text-center lg:text-left max-w-4xl" }, lp = /* @__PURE__ */ fn({
  __name: "LayoutFeatures",
  props: {
    data: {}
  },
  setup(e) {
    return (t, n) => (Q(), Ae(Ni, { data: e.data }, {
      default: rn(() => [
        $("div", {
          class: ct(["w-full flex flex-col justify-center p-8 lg:p-24", e.data.sizing === "container" ? "min-h-full" : "min-h-screen"])
        }, [
          $("div", op, [
            $("h2", {
              class: ct(["font-heading font-bold mb-4", e.data.sizing === "container" ? "text-3xl" : "text-5xl"])
            }, ft(e.data.title), 3),
            $("p", {
              class: ct([e.data.sizing === "container" ? "text-sm" : "text-xl"]),
              style: { color: "var(--lumina-colors-muted, #9ca3af)" }
            }, ft(e.data.description), 3)
          ]),
          $("div", {
            class: ct(["grid w-full", e.data.sizing === "container" ? "grid-cols-1 gap-3" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"])
          }, [
            (Q(!0), gt(wt, null, Tr(e.data.features, (i, r) => (Q(), gt("div", {
              key: r,
              class: ct(["glass-panel rounded-3xl hover:bg-white/5 transition duration-500 reveal-card group border-t border-white/5 hover:border-blue-500/50", e.data.sizing === "container" ? "p-6" : "p-8"])
            }, [
              $("div", {
                class: ct(["rounded-xl bg-white/5 flex items-center justify-center text-xl mb-6 group-hover:scale-110 transition duration-300", e.data.sizing === "container" ? "w-10 h-10 mb-4" : "w-12 h-12 mb-6"]),
                style: { color: "var(--lumina-colors-primary, #3b82f6)" }
              }, [
                $("i", {
                  class: ct(["fa-solid", i.icon.startsWith("fa-") ? i.icon : `fa-${i.icon}`])
                }, null, 2)
              ], 2),
              $("h3", {
                class: ct(["font-bold mb-3 text-white", e.data.sizing === "container" ? "text-lg" : "text-2xl"])
              }, ft(i.title), 3),
              $("p", {
                class: ct(["leading-relaxed", [e.data.sizing === "container" ? "text-sm" : ""]]),
                style: { color: "var(--lumina-colors-muted, #9ca3af)" }
              }, ft(i.desc), 3)
            ], 2))), 128))
          ], 2)
        ], 2)
      ]),
      _: 1
    }, 8, ["data"]));
  }
}), ap = { class: "text-center mb-16 reveal-up" }, fp = { class: "text-5xl font-heading font-bold mb-4" }, up = {
  key: 0,
  class: "text-xl opacity-60"
}, cp = { class: "relative max-w-4xl mx-auto w-full" }, hp = { class: "space-y-12" }, dp = { class: "text-sm font-bold tracking-widest uppercase text-blue-400 mb-1" }, pp = { class: "text-2xl font-bold" }, _p = { class: "text-lg opacity-60 leading-relaxed" }, gp = /* @__PURE__ */ fn({
  __name: "LayoutTimeline",
  props: {
    data: {}
  },
  setup(e) {
    return (t, n) => (Q(), Ae(Ni, { data: e.data }, {
      default: rn(() => [
        $("div", {
          class: ct(["w-full flex flex-col justify-center p-8 lg:p-24", e.data.sizing === "container" ? "min-h-full py-12 lg:py-16" : "min-h-screen"])
        }, [
          $("div", ap, [
            $("h2", fp, ft(e.data.title), 1),
            e.data.subtitle ? (Q(), gt("p", up, ft(e.data.subtitle), 1)) : ce("", !0)
          ]),
          $("div", cp, [
            n[1] || (n[1] = $("div", { class: "absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/20 -translate-x-1/2 reveal-zoom origin-top" }, null, -1)),
            $("div", hp, [
              (Q(!0), gt(wt, null, Tr(e.data.timeline, (i, r) => (Q(), gt("div", {
                key: r,
                class: ct(["relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center reveal-card", r % 2 === 0 ? "" : "md:flex-row-reverse"])
              }, [
                $("div", {
                  class: ct(["w-full md:w-1/2 pl-12 md:pl-0 flex flex-col justify-center", r % 2 === 0 ? "md:pr-12 md:text-right md:items-end" : "md:pl-12 md:text-left md:items-start"])
                }, [
                  $("span", dp, ft(i.date), 1),
                  $("h3", pp, ft(i.title || i.t), 1)
                ], 2),
                n[0] || (n[0] = $("div", { class: "absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.5)] border-4 border-[#030303] z-10" }, null, -1)),
                $("div", {
                  class: ct(["w-full md:w-1/2 pl-12 md:pl-0", r % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"])
                }, [
                  $("p", _p, ft(i.description || i.desc), 1)
                ], 2)
              ], 2))), 128))
            ])
          ])
        ], 2)
      ]),
      _: 1
    }, 8, ["data"]));
  }
}), mp = { class: "mb-20 text-center reveal-up" }, yp = { class: "text-5xl font-heading font-bold mb-4" }, vp = {
  key: 0,
  class: "text-xl opacity-60 max-w-2xl mx-auto"
}, xp = { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto relative" }, bp = { class: "w-20 h-20 rounded-2xl bg-[#111] border border-white/10 flex items-center justify-center text-2xl font-bold mb-6 relative z-10 group-hover:scale-110 transition duration-300 shadow-2xl mx-auto lg:mx-0" }, wp = { class: "text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-600" }, Tp = { class: "text-xl font-bold mb-3" }, Sp = { class: "text-sm leading-relaxed opacity-60" }, Cp = /* @__PURE__ */ fn({
  __name: "LayoutSteps",
  props: {
    data: {}
  },
  setup(e) {
    return (t, n) => (Q(), Ae(Ni, { data: e.data }, {
      default: rn(() => [
        $("div", {
          class: ct(["w-full flex flex-col justify-center p-8 lg:p-12", e.data.sizing === "container" ? "min-h-full" : "min-h-screen"])
        }, [
          $("div", mp, [
            $("h2", yp, ft(e.data.title), 1),
            e.data.subtitle ? (Q(), gt("p", vp, ft(e.data.subtitle), 1)) : ce("", !0)
          ]),
          $("div", xp, [
            n[0] || (n[0] = $("div", { class: "hidden lg:block absolute top-[2.5rem] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent reveal-zoom origin-left" }, null, -1)),
            (Q(!0), gt(wt, null, Tr(e.data.steps, (i, r) => (Q(), gt("div", {
              key: r,
              class: "relative glass-panel p-8 rounded-2xl border border-white/5 reveal-card group hover:bg-white/5 transition duration-500"
            }, [
              $("div", bp, [
                $("span", wp, ft(i.step), 1)
              ]),
              $("h3", Tp, ft(i.title), 1),
              $("p", Sp, ft(i.description), 1)
            ]))), 128))
          ])
        ], 2)
      ]),
      _: 1
    }, 8, ["data"]));
  }
}), Op = /* @__PURE__ */ fn({
  __name: "LayoutAuto",
  props: {
    data: {}
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const n = e, i = Yt(() => {
      var f, c, d;
      const r = n.data || {}, s = Array.isArray(r.timeline) && r.timeline.length > 0, o = Array.isArray(r.steps) && r.steps.length > 0, l = Array.isArray(r.features) && r.features.length > 0, a = !!r.image;
      let u = "layout-statement";
      return s ? u = "layout-timeline" : o ? u = "layout-steps" : l ? u = "layout-features" : a ? u = "layout-half" : (((f = r.title) == null ? void 0 : f.length) || 0) + (((c = r.subtitle) == null ? void 0 : c.length) || 0) + (((d = r.paragraphs) == null ? void 0 : d.join("").length) || 0), u;
    });
    return (r, s) => (Q(), Ae(ta(i.value), {
      data: e.data,
      onAction: s[0] || (s[0] = (o) => r.$emit("action", o))
    }, null, 40, ["data"]));
  }
}), ri = {
  default: {
    colors: {
      primary: "#3b82f6",
      background: "#030303",
      text: "#ffffff",
      muted: "#9ca3af"
    },
    fonts: {
      heading: "Inter, sans-serif",
      body: "Inter, sans-serif",
      mono: "monospace"
    }
  },
  ocean: {
    colors: {
      primary: "#06b6d4",
      // Cyan
      background: "#0f172a",
      // Slate 900
      text: "#f0f9ff",
      muted: "#94a3b8"
    },
    fonts: {
      heading: "Outfit, sans-serif",
      body: "Inter, sans-serif"
    }
  },
  midnight: {
    colors: {
      primary: "#6366f1",
      // Indigo
      background: "#000000",
      text: "#e0e7ff",
      muted: "#6b7280"
    }
  },
  forest: {
    colors: {
      primary: "#10b981",
      // Emerald
      background: "#022c22",
      // Dark Green
      text: "#ecfdf5",
      muted: "#6ee7b7"
    }
  },
  cyber: {
    colors: {
      primary: "#f472b6",
      // Pink
      background: "#18181b",
      // Zinc 900
      text: "#ffffff",
      muted: "#a1a1aa"
    },
    fonts: {
      heading: "Orbitron, sans-serif",
      body: "Rajdhani, sans-serif"
    }
  },
  latte: {
    colors: {
      primary: "#d97706",
      // Amber
      background: "#fffbeb",
      // Amber 50
      text: "#451a03",
      // Amber 900
      muted: "#92400e"
    },
    fonts: {
      heading: "Playfair Display, serif",
      body: "Lato, sans-serif"
    }
  }
}, ul = "lumina-theme-styles";
class Pp {
  /**
   * Injects the requested theme into the document head.
   * If a string is provided, it looks up the preset.
   * If an object is provided, it merges it with the default preset.
   * 
   * @param theme - A preset name ('ocean', 'cyber') or a partial ThemeConfig object.
   */
  static inject(t) {
    let n;
    typeof t == "string" ? n = ri[t] || ri.default : (n = { ...ri.default, ...t }, t.colors && (n.colors = { ...ri.default.colors, ...t.colors }), t.fonts && (n.fonts = { ...ri.default.fonts, ...t.fonts }));
    let i = document.getElementById(ul);
    i || (i = document.createElement("style"), i.id = ul, document.head.appendChild(i));
    const r = this.generateVars(n);
    i.innerHTML = `:root { ${r} }`;
  }
  /**
   * Converts a ThemeConfig object into a CSS string of standard variables.
   * Also generates RGB triplets for use with alpha channels (e.g. `rgba(var(--color), 0.5)`).
   * 
   * @param theme - The resolved theme configuration.
   * @returns A string of CSS variables.
   */
  static generateVars(t) {
    const n = [];
    if (t.colors) {
      for (const [i, r] of Object.entries(t.colors))
        if (r) {
          n.push(`--lumina-${i}: ${r};`);
          const s = this.hexToRgb(r);
          s && n.push(`--lumina-${i}-rgb: ${s.r}, ${s.g}, ${s.b};`);
        }
    }
    if (t.fonts)
      for (const [i, r] of Object.entries(t.fonts))
        r && n.push(`--lumina-font-${i}: ${r};`);
    return n.join(" ");
  }
  /**
   * Helper to parse a Hex color string into RGB components.
   * @param hex - Hex string (e.g. "#ffffff" or "000")
   * @returns Object with r, g, b values or null if invalid.
   */
  static hexToRgb(t) {
    const n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
    return n ? {
      r: parseInt(n[1], 16),
      g: parseInt(n[2], 16),
      b: parseInt(n[3], 16)
    } : null;
  }
}
class Mp {
  /**
   * Creates a new Lumina instance.
   * 
   * @param selector - CSS selector for the container element (e.g. '#app').
   * @param options - Configuration options (theme, loop, keys, etc.).
   */
  constructor(t, n = {}) {
    zi(this, "app");
    zi(this, "store");
    this.selector = t, this.store = oh(n), n.theme && Pp.inject(n.theme), this.app = eh(Wd), this.app.provide(Fi, this.store), this.app.component("layout-statement", Zd), this.app.component("layout-half", sp), this.app.component("layout-features", lp), this.app.component("layout-timeline", gp), this.app.component("layout-steps", Cp), this.app.component("layout-auto", Op), Dn.on("action", (i) => {
      this.store.recordAction(i);
    }), this.app.mount(this.selector);
  }
  /**
   * Loads a Deck object into the engine.
   * Use this to start the presentation or switch decks dynamically.
   * 
   * @param deckData - The Deck object containing meta and slides.
   */
  load(t) {
    this.store.loadDeck(t), Dn.emit("ready", t);
  }
  /**
   * Feature: Diff Updates
   * Updates the existing deck with partial changes.
   */
  patch(t) {
    this.store.patchDeck(t);
  }
  /**
   * Feature: Feedback Loop
   * Exports the current session state for LLM consumption.
   * Includes: Narrative Log, Context Window, and Interest "Heatmap".
   */
  exportState() {
    const { currentIndex: t, deck: n, actionHistory: i } = this.store.state, r = n == null ? void 0 : n.slides[t], s = i.map((l) => `User ${l.type}ed on ${l.label || l.value}`).join(" -> "), o = i.length > 5 ? "High Engagement" : "Low Engagement";
    return Object.freeze({
      status: "active",
      currentSlide: {
        index: t,
        id: (r == null ? void 0 : r.id) || t,
        type: r == null ? void 0 : r.type,
        title: (r == null ? void 0 : r.title) || "(No Title)"
      },
      narrative: `User is currently on slide ${t + 1}. Session Flow: ${s || "Just started"}.`,
      engagementLevel: o,
      history: [...i]
      // Clone
    });
  }
  /**
   * Subscribes to an engine event.
   * Wrapper around the internal EventBus.
   * 
   * @param event - Event name ('ready', 'slideChange', 'action', 'error').
   * @param handler - Callback function.
   */
  on(t, n) {
    Dn.on(t, n);
  }
  /**
   * Unsubscribes from an engine event.
   * 
   * @param event - Event name.
   * @param handler - The callback function to remove.
   */
  off(t, n) {
    Dn.off(t, n);
  }
  destroy() {
    this.app && (this.app.unmount(), this.app = null), Dn.clear();
  }
  /**
   * Navigation API
   */
  get currentSlideIndex() {
    return this.store.state.currentIndex;
  }
  goTo(t) {
    this.store.goto(t);
  }
  next() {
    this.store.next();
  }
  prev() {
    this.store.prev();
  }
}
export {
  Mp as Lumina,
  Wd as LuminaDeck,
  Dn as bus
};
