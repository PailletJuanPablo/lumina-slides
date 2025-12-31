const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["/lumina-slides/assets/SiteLayout-DXXue-IZ.js","/lumina-slides/assets/useAuth-faJPvffk.js","/lumina-slides/assets/-plugin-vue-export-helper-DlAUqK2U.js","/lumina-slides/assets/SiteLayout-CcNLPJtp.css","/lumina-slides/assets/SiteHome-CkKBnOBh.js","/lumina-slides/assets/Lumina-BV216Izh.js","/lumina-slides/assets/SlideNavigator-BDXGwwBW.js","/lumina-slides/assets/SlideNavigator-B0ETWLiK.css","/lumina-slides/assets/Lumina-DZ1c6fWo.css","/lumina-slides/assets/streaming-Bk97eUNn.js","/lumina-slides/assets/SiteHome-yI1l7pnC.css","/lumina-slides/assets/SiteDashboard-DpE5X8qO.js","/lumina-slides/assets/SiteDashboard-DpRlktG9.css","/lumina-slides/assets/SiteDocs-7Jcn32_C.js","/lumina-slides/assets/SiteDocs-DKgNf5I_.css","/lumina-slides/assets/SitePlayground-Cm3CRFmC.js","/lumina-slides/assets/SitePlayground-t6IP3BxV.css","/lumina-slides/assets/StudioView-B70mCisS.js","/lumina-slides/assets/DeckView-Dzc9Ofk1.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Xa(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const we={},Es=[],qt=()=>{},og=()=>!1,io=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Au=t=>t.startsWith("onUpdate:"),ke=Object.assign,bu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},tT=Object.prototype.hasOwnProperty,Se=(t,e)=>tT.call(t,e),re=Array.isArray,Ts=t=>Ks(t)==="[object Map]",es=t=>Ks(t)==="[object Set]",Cf=t=>Ks(t)==="[object Date]",nT=t=>Ks(t)==="[object RegExp]",ce=t=>typeof t=="function",Fe=t=>typeof t=="string",nn=t=>typeof t=="symbol",De=t=>t!==null&&typeof t=="object",Ru=t=>(De(t)||ce(t))&&ce(t.then)&&ce(t.catch),ag=Object.prototype.toString,Ks=t=>ag.call(t),rT=t=>Ks(t).slice(8,-1),Za=t=>Ks(t)==="[object Object]",ec=t=>Fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,vs=Xa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),tc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},sT=/-\w/g,It=tc(t=>t.replace(sT,e=>e.slice(1).toUpperCase())),iT=/\B([A-Z])/g,kt=tc(t=>t.replace(iT,"-$1").toLowerCase()),nc=tc(t=>t.charAt(0).toUpperCase()+t.slice(1)),Zo=tc(t=>t?`on${nc(t)}`:""),St=(t,e)=>!Object.is(t,e),Is=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},cg=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},rc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},ga=t=>{const e=Fe(t)?Number(t):NaN;return isNaN(e)?t:e};let Pf;const sc=()=>Pf||(Pf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),oT="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol",aT=Xa(oT);function ic(t){if(re(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Fe(r)?hT(r):ic(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Fe(t)||De(t))return t}const cT=/;(?![^(]*\))/g,lT=/:([^]+)/,uT=/\/\*[^]*?\*\//g;function hT(t){const e={};return t.replace(uT,"").split(cT).forEach(n=>{if(n){const r=n.split(lT);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function oc(t){let e="";if(Fe(t))e=t;else if(re(t))for(let n=0;n<t.length;n++){const r=oc(t[n]);r&&(e+=r+" ")}else if(De(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function lN(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Fe(e)&&(t.class=oc(e)),n&&(t.style=ic(n)),t}const fT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",dT=Xa(fT);function lg(t){return!!t||t===""}function pT(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Tr(t[r],e[r]);return n}function Tr(t,e){if(t===e)return!0;let n=Cf(t),r=Cf(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=nn(t),r=nn(e),n||r)return t===e;if(n=re(t),r=re(e),n||r)return n&&r?pT(t,e):!1;if(n=De(t),r=De(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!Tr(t[o],e[o]))return!1}}return String(t)===String(e)}function ac(t,e){return t.findIndex(n=>Tr(n,e))}const ug=t=>!!(t&&t.__v_isRef===!0),gT=t=>Fe(t)?t:t==null?"":re(t)||De(t)&&(t.toString===ag||!ce(t.toString))?ug(t)?gT(t.value):JSON.stringify(t,hg,2):String(t),hg=(t,e)=>ug(e)?hg(t,e.value):Ts(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[el(r,i)+" =>"]=s,n),{})}:es(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>el(n))}:nn(e)?el(e):De(e)&&!re(e)&&!Za(e)?String(e):e,el=(t,e="")=>{var n;return nn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};function mT(t){return t==null?"initial":typeof t=="string"?t===""?" ":t:String(t)}/**
* @vue/reactivity v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _t;class fg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=_t,!e&&_t&&(this.index=(_t.scopes||(_t.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=_t;try{return _t=this,e()}finally{_t=n}}}on(){++this._on===1&&(this.prevScope=_t,_t=this)}off(){this._on>0&&--this._on===0&&(_t=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function uN(t){return new fg(t)}function _T(){return _t}function hN(t,e=!1){_t&&_t.cleanups.push(t)}let Me;const tl=new WeakSet;class ma{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,_t&&_t.active&&_t.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,tl.has(this)&&(tl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||pg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Nf(this),gg(this);const e=Me,n=Zt;Me=this,Zt=!0;try{return this.fn()}finally{mg(this),Me=e,Zt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Pu(e);this.deps=this.depsTail=void 0,Nf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?tl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Sl(this)&&this.run()}get dirty(){return Sl(this)}}let dg=0,Ci,Pi;function pg(t,e=!1){if(t.flags|=8,e){t.next=Pi,Pi=t;return}t.next=Ci,Ci=t}function Su(){dg++}function Cu(){if(--dg>0)return;if(Pi){let e=Pi;for(Pi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ci;){let e=Ci;for(Ci=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function gg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function mg(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Pu(r),yT(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Sl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(_g(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function _g(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Hi)||(t.globalVersion=Hi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Sl(t))))return;t.flags|=2;const e=t.dep,n=Me,r=Zt;Me=t,Zt=!0;try{gg(t);const s=t.fn(t._value);(e.version===0||St(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Me=n,Zt=r,mg(t),t.flags&=-3}}function Pu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Pu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function yT(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}function fN(t,e){t.effect instanceof ma&&(t=t.effect.fn);const n=new ma(t);e&&ke(n,e);try{n.run()}catch(s){throw n.stop(),s}const r=n.run.bind(n);return r.effect=n,r}function dN(t){t.effect.stop()}let Zt=!0;const yg=[];function Un(){yg.push(Zt),Zt=!1}function Bn(){const t=yg.pop();Zt=t===void 0?!0:t}function Nf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Me;Me=void 0;try{e()}finally{Me=n}}}let Hi=0;class ET{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class cc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Me||!Zt||Me===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Me)n=this.activeLink=new ET(Me,this),Me.deps?(n.prevDep=Me.depsTail,Me.depsTail.nextDep=n,Me.depsTail=n):Me.deps=Me.depsTail=n,Eg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Me.depsTail,n.nextDep=void 0,Me.depsTail.nextDep=n,Me.depsTail=n,Me.deps===n&&(Me.deps=r)}return n}trigger(e){this.version++,Hi++,this.notify(e)}notify(e){Su();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Cu()}}}function Eg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Eg(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const _a=new WeakMap,Hr=Symbol(""),Cl=Symbol(""),qi=Symbol("");function Et(t,e,n){if(Zt&&Me){let r=_a.get(t);r||_a.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new cc),s.map=r,s.key=n),s.track()}}function Nn(t,e,n,r,s,i){const o=_a.get(t);if(!o){Hi++;return}const c=l=>{l&&l.trigger()};if(Su(),e==="clear")o.forEach(c);else{const l=re(t),u=l&&ec(n);if(l&&n==="length"){const f=Number(r);o.forEach((d,g)=>{(g==="length"||g===qi||!nn(g)&&g>=f)&&c(d)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get(qi)),e){case"add":l?u&&c(o.get("length")):(c(o.get(Hr)),Ts(t)&&c(o.get(Cl)));break;case"delete":l||(c(o.get(Hr)),Ts(t)&&c(o.get(Cl)));break;case"set":Ts(t)&&c(o.get(Hr));break}}Cu()}function TT(t,e){const n=_a.get(t);return n&&n.get(e)}function ls(t){const e=be(t);return e===t?e:(Et(e,"iterate",qi),Ft(t)?e:e.map(rn))}function lc(t){return Et(t=be(t),"iterate",qi),t}function ir(t,e){return jn(t)?pr(t)?ks(rn(e)):ks(e):rn(e)}const vT={__proto__:null,[Symbol.iterator](){return nl(this,Symbol.iterator,t=>ir(this,t))},concat(...t){return ls(this).concat(...t.map(e=>re(e)?ls(e):e))},entries(){return nl(this,"entries",t=>(t[1]=ir(this,t[1]),t))},every(t,e){return Rn(this,"every",t,e,void 0,arguments)},filter(t,e){return Rn(this,"filter",t,e,n=>n.map(r=>ir(this,r)),arguments)},find(t,e){return Rn(this,"find",t,e,n=>ir(this,n),arguments)},findIndex(t,e){return Rn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Rn(this,"findLast",t,e,n=>ir(this,n),arguments)},findLastIndex(t,e){return Rn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Rn(this,"forEach",t,e,void 0,arguments)},includes(...t){return rl(this,"includes",t)},indexOf(...t){return rl(this,"indexOf",t)},join(t){return ls(this).join(t)},lastIndexOf(...t){return rl(this,"lastIndexOf",t)},map(t,e){return Rn(this,"map",t,e,void 0,arguments)},pop(){return yi(this,"pop")},push(...t){return yi(this,"push",t)},reduce(t,...e){return Vf(this,"reduce",t,e)},reduceRight(t,...e){return Vf(this,"reduceRight",t,e)},shift(){return yi(this,"shift")},some(t,e){return Rn(this,"some",t,e,void 0,arguments)},splice(...t){return yi(this,"splice",t)},toReversed(){return ls(this).toReversed()},toSorted(t){return ls(this).toSorted(t)},toSpliced(...t){return ls(this).toSpliced(...t)},unshift(...t){return yi(this,"unshift",t)},values(){return nl(this,"values",t=>ir(this,t))}};function nl(t,e,n){const r=lc(t),s=r[e]();return r!==t&&!Ft(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const IT=Array.prototype;function Rn(t,e,n,r,s,i){const o=lc(t),c=o!==t&&!Ft(t),l=o[e];if(l!==IT[e]){const d=l.apply(t,i);return c?rn(d):d}let u=n;o!==t&&(c?u=function(d,g){return n.call(this,ir(t,d),g,t)}:n.length>2&&(u=function(d,g){return n.call(this,d,g,t)}));const f=l.call(o,u,r);return c&&s?s(f):f}function Vf(t,e,n,r){const s=lc(t);let i=n;return s!==t&&(Ft(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,ir(t,c),l,t)}),s[e](i,...r)}function rl(t,e,n){const r=be(t);Et(r,"iterate",qi);const s=r[e](...n);return(s===-1||s===!1)&&dc(n[0])?(n[0]=be(n[0]),r[e](...n)):s}function yi(t,e,n=[]){Un(),Su();const r=be(t)[e].apply(t,n);return Cu(),Bn(),r}const wT=Xa("__proto__,__v_isRef,__isVue"),Tg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(nn));function AT(t){nn(t)||(t=String(t));const e=be(this);return Et(e,"has",t),e.hasOwnProperty(t)}class vg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Sg:Rg:i?bg:Ag).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=re(e);if(!s){let l;if(o&&(l=vT[n]))return l;if(n==="hasOwnProperty")return AT}const c=Reflect.get(e,n,rt(e)?e:r);if((nn(n)?Tg.has(n):wT(n))||(s||Et(e,"get",n),i))return c;if(rt(c)){const l=o&&ec(n)?c:c.value;return s&&De(l)?Nl(l):l}return De(c)?s?Nl(c):hc(c):c}}class Ig extends vg{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=re(e)&&ec(n);if(!this._isShallow){const u=jn(i);if(!Ft(r)&&!jn(r)&&(i=be(i),r=be(r)),!o&&rt(i)&&!rt(r))return u||(i.value=r),!0}const c=o?Number(n)<e.length:Se(e,n),l=Reflect.set(e,n,r,rt(e)?e:s);return e===be(s)&&(c?St(r,i)&&Nn(e,"set",n,r):Nn(e,"add",n,r)),l}deleteProperty(e,n){const r=Se(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Nn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!nn(n)||!Tg.has(n))&&Et(e,"has",n),r}ownKeys(e){return Et(e,"iterate",re(e)?"length":Hr),Reflect.ownKeys(e)}}class wg extends vg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const bT=new Ig,RT=new wg,ST=new Ig(!0),CT=new wg(!0),Pl=t=>t,Mo=t=>Reflect.getPrototypeOf(t);function PT(t,e,n){return function(...r){const s=this.__v_raw,i=be(s),o=Ts(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),f=n?Pl:e?ks:rn;return!e&&Et(i,"iterate",l?Cl:Hr),{next(){const{value:d,done:g}=u.next();return g?{value:d,done:g}:{value:c?[f(d[0]),f(d[1])]:f(d),done:g}},[Symbol.iterator](){return this}}}}function Lo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function NT(t,e){const n={get(s){const i=this.__v_raw,o=be(i),c=be(s);t||(St(s,c)&&Et(o,"get",s),Et(o,"get",c));const{has:l}=Mo(o),u=e?Pl:t?ks:rn;if(l.call(o,s))return u(i.get(s));if(l.call(o,c))return u(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Et(be(s),"iterate",Hr),s.size},has(s){const i=this.__v_raw,o=be(i),c=be(s);return t||(St(s,c)&&Et(o,"has",s),Et(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=be(c),u=e?Pl:t?ks:rn;return!t&&Et(l,"iterate",Hr),c.forEach((f,d)=>s.call(i,u(f),u(d),o))}};return ke(n,t?{add:Lo("add"),set:Lo("set"),delete:Lo("delete"),clear:Lo("clear")}:{add(s){!e&&!Ft(s)&&!jn(s)&&(s=be(s));const i=be(this);return Mo(i).has.call(i,s)||(i.add(s),Nn(i,"add",s,s)),this},set(s,i){!e&&!Ft(i)&&!jn(i)&&(i=be(i));const o=be(this),{has:c,get:l}=Mo(o);let u=c.call(o,s);u||(s=be(s),u=c.call(o,s));const f=l.call(o,s);return o.set(s,i),u?St(i,f)&&Nn(o,"set",s,i):Nn(o,"add",s,i),this},delete(s){const i=be(this),{has:o,get:c}=Mo(i);let l=o.call(i,s);l||(s=be(s),l=o.call(i,s)),c&&c.call(i,s);const u=i.delete(s);return l&&Nn(i,"delete",s,void 0),u},clear(){const s=be(this),i=s.size!==0,o=s.clear();return i&&Nn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=PT(s,t,e)}),n}function uc(t,e){const n=NT(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Se(n,s)&&s in r?n:r,s,i)}const VT={get:uc(!1,!1)},DT={get:uc(!1,!0)},kT={get:uc(!0,!1)},OT={get:uc(!0,!0)},Ag=new WeakMap,bg=new WeakMap,Rg=new WeakMap,Sg=new WeakMap;function xT(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function MT(t){return t.__v_skip||!Object.isExtensible(t)?0:xT(rT(t))}function hc(t){return jn(t)?t:fc(t,!1,bT,VT,Ag)}function Cg(t){return fc(t,!1,ST,DT,bg)}function Nl(t){return fc(t,!0,RT,kT,Rg)}function pN(t){return fc(t,!0,CT,OT,Sg)}function fc(t,e,n,r,s){if(!De(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=MT(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function pr(t){return jn(t)?pr(t.__v_raw):!!(t&&t.__v_isReactive)}function jn(t){return!!(t&&t.__v_isReadonly)}function Ft(t){return!!(t&&t.__v_isShallow)}function dc(t){return t?!!t.__v_raw:!1}function be(t){const e=t&&t.__v_raw;return e?be(e):t}function LT(t){return!Se(t,"__v_skip")&&Object.isExtensible(t)&&cg(t,"__v_skip",!0),t}const rn=t=>De(t)?hc(t):t,ks=t=>De(t)?Nl(t):t;function rt(t){return t?t.__v_isRef===!0:!1}function Ni(t){return Ng(t,!1)}function Pg(t){return Ng(t,!0)}function Ng(t,e){return rt(t)?t:new FT(t,e)}class FT{constructor(e,n){this.dep=new cc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:be(e),this._value=n?e:rn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Ft(e)||jn(e);e=r?e:be(e),St(e,n)&&(this._rawValue=e,this._value=r?e:rn(e),this.dep.trigger())}}function gN(t){t.dep&&t.dep.trigger()}function Mn(t){return rt(t)?t.value:t}function mN(t){return ce(t)?t():Mn(t)}const UT={get:(t,e,n)=>e==="__v_raw"?t:Mn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return rt(s)&&!rt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Vg(t){return pr(t)?t:new Proxy(t,UT)}class BT{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new cc,{get:r,set:s}=e(n.track.bind(n),n.trigger.bind(n));this._get=r,this._set=s}get value(){return this._value=this._get()}set value(e){this._set(e)}}function jT(t){return new BT(t)}function _N(t){const e=re(t)?new Array(t.length):{};for(const n in t)e[n]=Dg(t,n);return e}class HT{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._raw=be(e);let s=!0,i=e;if(!re(e)||!ec(String(n)))do s=!dc(i)||Ft(i);while(s&&(i=i.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=Mn(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&rt(this._raw[this._key])){const n=this._object[this._key];if(rt(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return TT(this._raw,this._key)}}class qT{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function yN(t,e,n){return rt(t)?t:ce(t)?new qT(t):De(t)&&arguments.length>1?Dg(t,e,n):Ni(t)}function Dg(t,e,n){return new HT(t,e,n)}class $T{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new cc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Hi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Me!==this)return pg(this,!0),!0}get value(){const e=this.dep.track();return _g(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function GT(t,e,n=!1){let r,s;return ce(t)?r=t:(r=t.get,s=t.set),new $T(r,s,n)}const EN={GET:"get",HAS:"has",ITERATE:"iterate"},TN={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"},Fo={},ya=new WeakMap;let or;function vN(){return or}function WT(t,e=!1,n=or){if(n){let r=ya.get(n);r||ya.set(n,r=[]),r.push(t)}}function KT(t,e,n=we){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,u=N=>s?N:Ft(N)||s===!1||s===0?Vn(N,1):Vn(N);let f,d,g,y,C=!1,P=!1;if(rt(t)?(d=()=>t.value,C=Ft(t)):pr(t)?(d=()=>u(t),C=!0):re(t)?(P=!0,C=t.some(N=>pr(N)||Ft(N)),d=()=>t.map(N=>{if(rt(N))return N.value;if(pr(N))return u(N);if(ce(N))return l?l(N,2):N()})):ce(t)?e?d=l?()=>l(t,2):t:d=()=>{if(g){Un();try{g()}finally{Bn()}}const N=or;or=f;try{return l?l(t,3,[y]):t(y)}finally{or=N}}:d=qt,e&&s){const N=d,x=s===!0?1/0:s;d=()=>Vn(N(),x)}const k=_T(),L=()=>{f.stop(),k&&k.active&&bu(k.effects,f)};if(i&&e){const N=e;e=(...x)=>{N(...x),L()}}let D=P?new Array(t.length).fill(Fo):Fo;const R=N=>{if(!(!(f.flags&1)||!f.dirty&&!N))if(e){const x=f.run();if(s||C||(P?x.some((U,w)=>St(U,D[w])):St(x,D))){g&&g();const U=or;or=f;try{const w=[x,D===Fo?void 0:P&&D[0]===Fo?[]:D,y];D=x,l?l(e,3,w):e(...w)}finally{or=U}}}else f.run()};return c&&c(R),f=new ma(d),f.scheduler=o?()=>o(R,!1):R,y=N=>WT(N,!1,f),g=f.onStop=()=>{const N=ya.get(f);if(N){if(l)l(N,4);else for(const x of N)x();ya.delete(f)}},e?r?R(!0):D=f.run():o?o(R.bind(null,!0),!0):f.run(),L.pause=f.pause.bind(f),L.resume=f.resume.bind(f),L.stop=L,L}function Vn(t,e=1/0,n){if(e<=0||!De(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,rt(t))Vn(t.value,e,n);else if(re(t))for(let r=0;r<t.length;r++)Vn(t[r],e,n);else if(es(t)||Ts(t))t.forEach(r=>{Vn(r,e,n)});else if(Za(t)){for(const r in t)Vn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Vn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const kg=[];function zT(t){kg.push(t)}function QT(){kg.pop()}function IN(t,e){}const wN={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER",COMPONENT_UPDATE:15,15:"COMPONENT_UPDATE",APP_UNMOUNT_CLEANUP:16,16:"APP_UNMOUNT_CLEANUP"},JT={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush",15:"component update",16:"app unmount cleanup function"};function oo(t,e,n,r){try{return r?t(...r):t()}catch(s){zs(s,e,n)}}function sn(t,e,n,r){if(ce(t)){const s=oo(t,e,n,r);return s&&Ru(s)&&s.catch(i=>{zs(i,e,n)}),s}if(re(t)){const s=[];for(let i=0;i<t.length;i++)s.push(sn(t[i],e,n,r));return s}}function zs(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||we;if(e){let c=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](t,l,u)===!1)return}c=c.parent}if(i){Un(),oo(i,null,10,[t,l,u]),Bn();return}}YT(t,n,s,r,o)}function YT(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Ct=[];let fn=-1;const ws=[];let ar=null,hs=0;const Og=Promise.resolve();let Ea=null;function pc(t){const e=Ea||Og;return t?e.then(this?t.bind(this):t):e}function XT(t){let e=fn+1,n=Ct.length;for(;e<n;){const r=e+n>>>1,s=Ct[r],i=$i(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Nu(t){if(!(t.flags&1)){const e=$i(t),n=Ct[Ct.length-1];!n||!(t.flags&2)&&e>=$i(n)?Ct.push(t):Ct.splice(XT(e),0,t),t.flags|=1,xg()}}function xg(){Ea||(Ea=Og.then(Mg))}function Ta(t){re(t)?ws.push(...t):ar&&t.id===-1?ar.splice(hs+1,0,t):t.flags&1||(ws.push(t),t.flags|=1),xg()}function Df(t,e,n=fn+1){for(;n<Ct.length;n++){const r=Ct[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Ct.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function va(t){if(ws.length){const e=[...new Set(ws)].sort((n,r)=>$i(n)-$i(r));if(ws.length=0,ar){ar.push(...e);return}for(ar=e,hs=0;hs<ar.length;hs++){const n=ar[hs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ar=null,hs=0}}const $i=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Mg(t){try{for(fn=0;fn<Ct.length;fn++){const e=Ct[fn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),oo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;fn<Ct.length;fn++){const e=Ct[fn];e&&(e.flags&=-2)}fn=-1,Ct.length=0,va(),Ea=null,(Ct.length||ws.length)&&Mg()}}let fs,Uo=[];function Lg(t,e){var n,r;fs=t,fs?(fs.enabled=!0,Uo.forEach(({event:s,args:i})=>fs.emit(s,...i)),Uo=[]):typeof window<"u"&&window.HTMLElement&&!((r=(n=window.navigator)==null?void 0:n.userAgent)!=null&&r.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{Lg(i,e)}),setTimeout(()=>{fs||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Uo=[])},3e3)):Uo=[]}let ft=null,gc=null;function Gi(t){const e=ft;return ft=t,gc=t&&t.type.__scopeId||null,e}function AN(t){gc=t}function bN(){gc=null}const RN=t=>Fg;function Fg(t,e=ft,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ra(-1);const i=Gi(e);let o;try{o=t(...s)}finally{Gi(i),r._d&&Ra(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function SN(t,e){if(ft===null)return t;const n=ho(ft),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=we]=e[s];i&&(ce(i)&&(i={mounted:i,updated:i}),i.deep&&Vn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function dn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(Un(),sn(l,n,8,[t.el,c,t,e]),Bn())}}function ea(t,e){if(ut){let n=ut.provides;const r=ut.parent&&ut.parent.provides;r===n&&(n=ut.provides=Object.create(r)),n[t]=e}}function en(t,e,n=!1){const r=Ut();if(r||qr){let s=qr?qr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ce(e)?e.call(r&&r.proxy):e}}function CN(){return!!(Ut()||qr)}const ZT=Symbol.for("v-scx"),ev=()=>en(ZT);function PN(t,e){return ao(t,null,e)}function NN(t,e){return ao(t,null,{flush:"post"})}function tv(t,e){return ao(t,null,{flush:"sync"})}function As(t,e,n){return ao(t,e,n)}function ao(t,e,n=we){const{immediate:r,deep:s,flush:i,once:o}=n,c=ke({},n),l=e&&r||!e&&i!=="post";let u;if(Os){if(i==="sync"){const y=ev();u=y.__watcherHandles||(y.__watcherHandles=[])}else if(!l){const y=()=>{};return y.stop=qt,y.resume=qt,y.pause=qt,y}}const f=ut;c.call=(y,C,P)=>sn(y,f,C,P);let d=!1;i==="post"?c.scheduler=y=>{ze(y,f&&f.suspense)}:i!=="sync"&&(d=!0,c.scheduler=(y,C)=>{C?y():Nu(y)}),c.augmentJob=y=>{e&&(y.flags|=4),d&&(y.flags|=2,f&&(y.id=f.uid,y.i=f))};const g=KT(t,e,c);return Os&&(u?u.push(g):l&&g()),g}function nv(t,e,n){const r=this.proxy,s=Fe(t)?t.includes(".")?Ug(r,t):()=>r[t]:t.bind(r,r);let i;ce(e)?i=e:(i=e.handler,n=e);const o=zr(this),c=ao(s,i.bind(r),n);return o(),c}function Ug(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Bg=Symbol("_vte"),jg=t=>t.__isTeleport,Vi=t=>t&&(t.disabled||t.disabled===""),kf=t=>t&&(t.defer||t.defer===""),Of=t=>typeof SVGElement<"u"&&t instanceof SVGElement,xf=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Vl=(t,e)=>{const n=t&&t.to;return Fe(n)?e?e(n):null:n},Hg={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,c,l,u){const{mc:f,pc:d,pbc:g,o:{insert:y,querySelector:C,createText:P,createComment:k}}=u,L=Vi(e.props);let{shapeFlag:D,children:R,dynamicChildren:N}=e;if(t==null){const x=e.el=P(""),U=e.anchor=P("");y(x,n,r),y(U,n,r);const w=(_,v)=>{D&16&&f(R,_,v,s,i,o,c,l)},E=()=>{const _=e.target=Vl(e.props,C),v=qg(_,e,P,y);_&&(o!=="svg"&&Of(_)?o="svg":o!=="mathml"&&xf(_)&&(o="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(_),L||(w(_,v),ta(e,!1)))};L&&(w(n,U),ta(e,!0)),kf(e.props)?(e.el.__isMounted=!1,ze(()=>{E(),delete e.el.__isMounted},i)):E()}else{if(kf(e.props)&&t.el.__isMounted===!1){ze(()=>{Hg.process(t,e,n,r,s,i,o,c,l,u)},i);return}e.el=t.el,e.targetStart=t.targetStart;const x=e.anchor=t.anchor,U=e.target=t.target,w=e.targetAnchor=t.targetAnchor,E=Vi(t.props),_=E?n:U,v=E?x:w;if(o==="svg"||Of(U)?o="svg":(o==="mathml"||xf(U))&&(o="mathml"),N?(g(t.dynamicChildren,N,_,s,i,o,c),Hu(t,e,!0)):l||d(t,e,_,v,s,i,o,c,!1),L)E?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Bo(e,n,x,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const b=e.target=Vl(e.props,C);b&&Bo(e,b,null,u,0)}else E&&Bo(e,U,w,u,1);ta(e,L)}},remove(t,e,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:c,anchor:l,targetStart:u,targetAnchor:f,target:d,props:g}=t;if(d&&(s(u),s(f)),i&&s(l),o&16){const y=i||!Vi(g);for(let C=0;C<c.length;C++){const P=c[C];r(P,e,n,y,!!P.dynamicChildren)}}},move:Bo,hydrate:rv};function Bo(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:c,shapeFlag:l,children:u,props:f}=t,d=i===2;if(d&&r(o,e,n),(!d||Vi(f))&&l&16)for(let g=0;g<u.length;g++)s(u[g],e,n,2);d&&r(c,e,n)}function rv(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:c,querySelector:l,insert:u,createText:f}},d){function g(P,k,L,D){k.anchor=d(o(P),k,c(P),n,r,s,i),k.targetStart=L,k.targetAnchor=D}const y=e.target=Vl(e.props,l),C=Vi(e.props);if(y){const P=y._lpa||y.firstChild;if(e.shapeFlag&16)if(C)g(t,e,P,P&&o(P));else{e.anchor=o(t);let k=P;for(;k;){if(k&&k.nodeType===8){if(k.data==="teleport start anchor")e.targetStart=k;else if(k.data==="teleport anchor"){e.targetAnchor=k,y._lpa=e.targetAnchor&&o(e.targetAnchor);break}}k=o(k)}e.targetAnchor||qg(y,e,f,u),d(P&&o(P),e,y,n,r,s,i)}ta(e,C)}else C&&e.shapeFlag&16&&g(t,e,t,o(t));return e.anchor&&o(e.anchor)}const VN=Hg;function ta(t,e){const n=t.ctx;if(n&&n.ut){let r,s;for(e?(r=t.el,s=t.anchor):(r=t.targetStart,s=t.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function qg(t,e,n,r){const s=e.targetStart=n(""),i=e.targetAnchor=n("");return s[Bg]=i,t&&(r(s,t),r(i,t)),i}const Pn=Symbol("_leaveCb"),jo=Symbol("_enterCb");function $g(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return uo(()=>{t.isMounted=!0}),Ou(()=>{t.isUnmounting=!0}),t}const Bt=[Function,Array],Gg={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Bt,onEnter:Bt,onAfterEnter:Bt,onEnterCancelled:Bt,onBeforeLeave:Bt,onLeave:Bt,onAfterLeave:Bt,onLeaveCancelled:Bt,onBeforeAppear:Bt,onAppear:Bt,onAfterAppear:Bt,onAppearCancelled:Bt},Wg=t=>{const e=t.subTree;return e.component?Wg(e.component):e},sv={name:"BaseTransition",props:Gg,setup(t,{slots:e}){const n=Ut(),r=$g();return()=>{const s=e.default&&Vu(e.default(),!0);if(!s||!s.length)return;const i=Kg(s),o=be(t),{mode:c}=o;if(r.isLeaving)return sl(i);const l=Mf(i);if(!l)return sl(i);let u=Wi(l,o,r,n,d=>u=d);l.type!==Qe&&vr(l,u);let f=n.subTree&&Mf(n.subTree);if(f&&f.type!==Qe&&!zt(f,l)&&Wg(n).type!==Qe){let d=Wi(f,o,r,n);if(vr(f,d),c==="out-in"&&l.type!==Qe)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,f=void 0},sl(i);c==="in-out"&&l.type!==Qe?d.delayLeave=(g,y,C)=>{const P=zg(r,f);P[String(f.key)]=f,g[Pn]=()=>{y(),g[Pn]=void 0,delete u.delayedLeave,f=void 0},u.delayedLeave=()=>{C(),delete u.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function Kg(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Qe){e=n;break}}return e}const iv=sv;function zg(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Wi(t,e,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:f,onEnterCancelled:d,onBeforeLeave:g,onLeave:y,onAfterLeave:C,onLeaveCancelled:P,onBeforeAppear:k,onAppear:L,onAfterAppear:D,onAppearCancelled:R}=e,N=String(t.key),x=zg(n,t),U=(_,v)=>{_&&sn(_,r,9,v)},w=(_,v)=>{const b=v[1];U(_,v),re(_)?_.every(A=>A.length<=1)&&b():_.length<=1&&b()},E={mode:o,persisted:c,beforeEnter(_){let v=l;if(!n.isMounted)if(i)v=k||l;else return;_[Pn]&&_[Pn](!0);const b=x[N];b&&zt(t,b)&&b.el[Pn]&&b.el[Pn](),U(v,[_])},enter(_){let v=u,b=f,A=d;if(!n.isMounted)if(i)v=L||u,b=D||f,A=R||d;else return;let T=!1;const le=_[jo]=Ee=>{T||(T=!0,Ee?U(A,[_]):U(b,[_]),E.delayedLeave&&E.delayedLeave(),_[jo]=void 0)};v?w(v,[_,le]):le()},leave(_,v){const b=String(t.key);if(_[jo]&&_[jo](!0),n.isUnmounting)return v();U(g,[_]);let A=!1;const T=_[Pn]=le=>{A||(A=!0,v(),le?U(P,[_]):U(C,[_]),_[Pn]=void 0,x[b]===t&&delete x[b])};x[b]=t,y?w(y,[_,T]):T()},clone(_){const v=Wi(_,e,n,r,s);return s&&s(v),v}};return E}function sl(t){if(lo(t))return t=Hn(t),t.children=null,t}function Mf(t){if(!lo(t))return jg(t.type)&&t.children?Kg(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ce(n.default))return n.default()}}function vr(t,e){t.shapeFlag&6&&t.component?(t.transition=e,vr(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Vu(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===at?(o.patchFlag&128&&s++,r=r.concat(Vu(o.children,e,c))):(e||o.type!==Qe)&&r.push(c!=null?Hn(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function co(t,e){return ce(t)?ke({name:t.name},e,{setup:t}):t}function DN(){const t=Ut();return t?(t.appContext.config.idPrefix||"v")+"-"+t.ids[0]+t.ids[1]++:""}function Du(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function kN(t){const e=Ut(),n=Pg(null);if(e){const s=e.refs===we?e.refs={}:e.refs;Object.defineProperty(s,t,{enumerable:!0,get:()=>n.value,set:i=>n.value=i})}return n}const Ia=new WeakMap;function bs(t,e,n,r,s=!1){if(re(t)){t.forEach((C,P)=>bs(C,e&&(re(e)?e[P]:e),n,r,s));return}if(Ln(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&bs(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ho(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,f=c.refs===we?c.refs={}:c.refs,d=c.setupState,g=be(d),y=d===we?og:C=>Se(g,C);if(u!=null&&u!==l){if(Lf(e),Fe(u))f[u]=null,y(u)&&(d[u]=null);else if(rt(u)){u.value=null;const C=e;C.k&&(f[C.k]=null)}}if(ce(l))oo(l,c,12,[o,f]);else{const C=Fe(l),P=rt(l);if(C||P){const k=()=>{if(t.f){const L=C?y(l)?d[l]:f[l]:l.value;if(s)re(L)&&bu(L,i);else if(re(L))L.includes(i)||L.push(i);else if(C)f[l]=[i],y(l)&&(d[l]=f[l]);else{const D=[i];l.value=D,t.k&&(f[t.k]=D)}}else C?(f[l]=o,y(l)&&(d[l]=o)):P&&(l.value=o,t.k&&(f[t.k]=o))};if(o){const L=()=>{k(),Ia.delete(t)};L.id=-1,Ia.set(t,L),ze(L,n)}else Lf(t),k()}}}function Lf(t){const e=Ia.get(t);e&&(e.flags|=8,Ia.delete(t))}let Ff=!1;const us=()=>{Ff||(console.error("Hydration completed but contains mismatches."),Ff=!0)},ov=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",av=t=>t.namespaceURI.includes("MathML"),Ho=t=>{if(t.nodeType===1){if(ov(t))return"svg";if(av(t))return"mathml"}},ys=t=>t.nodeType===8;function cv(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:c,insert:l,createComment:u}}=t,f=(R,N)=>{if(!N.hasChildNodes()){n(null,R,N),va(),N._vnode=R;return}d(N.firstChild,R,null,null,null),va(),N._vnode=R},d=(R,N,x,U,w,E=!1)=>{E=E||!!N.dynamicChildren;const _=ys(R)&&R.data==="[",v=()=>P(R,N,x,U,w,_),{type:b,ref:A,shapeFlag:T,patchFlag:le}=N;let Ee=R.nodeType;N.el=R,le===-2&&(E=!1,N.dynamicChildren=null);let ne=null;switch(b){case $r:Ee!==3?N.children===""?(l(N.el=s(""),o(R),R),ne=R):ne=v():(R.data!==N.children&&(us(),R.data=N.children),ne=i(R));break;case Qe:D(R)?(ne=i(R),L(N.el=R.content.firstChild,R,x)):Ee!==8||_?ne=v():ne=i(R);break;case Ss:if(_&&(R=i(R),Ee=R.nodeType),Ee===1||Ee===3){ne=R;const he=!N.children.length;for(let Z=0;Z<N.staticCount;Z++)he&&(N.children+=ne.nodeType===1?ne.outerHTML:ne.data),Z===N.staticCount-1&&(N.anchor=ne),ne=i(ne);return _?i(ne):ne}else v();break;case at:_?ne=C(R,N,x,U,w,E):ne=v();break;default:if(T&1)(Ee!==1||N.type.toLowerCase()!==R.tagName.toLowerCase())&&!D(R)?ne=v():ne=g(R,N,x,U,w,E);else if(T&6){N.slotScopeIds=w;const he=o(R);if(_?ne=k(R):ys(R)&&R.data==="teleport start"?ne=k(R,R.data,"teleport end"):ne=i(R),e(N,he,null,x,U,Ho(he),E),Ln(N)&&!N.type.__asyncResolved){let Z;_?(Z=je(at),Z.anchor=ne?ne.previousSibling:he.lastChild):Z=R.nodeType===3?vm(""):je("div"),Z.el=R,N.component.subTree=Z}}else T&64?Ee!==8?ne=v():ne=N.type.hydrate(R,N,x,U,w,E,t,y):T&128&&(ne=N.type.hydrate(R,N,x,U,Ho(o(R)),w,E,t,d))}return A!=null&&bs(A,null,U,N),ne},g=(R,N,x,U,w,E)=>{E=E||!!N.dynamicChildren;const{type:_,props:v,patchFlag:b,shapeFlag:A,dirs:T,transition:le}=N,Ee=_==="input"||_==="option";if(Ee||b!==-1){T&&dn(N,null,x,"created");let ne=!1;if(D(R)){ne=fm(null,le)&&x&&x.vnode.props&&x.vnode.props.appear;const Z=R.content.firstChild;if(ne){const Ce=Z.getAttribute("class");Ce&&(Z.$cls=Ce),le.beforeEnter(Z)}L(Z,R,x),N.el=R=Z}if(A&16&&!(v&&(v.innerHTML||v.textContent))){let Z=y(R.firstChild,N,R,x,U,w,E);for(;Z;){qo(R,1)||us();const Ce=Z;Z=Z.nextSibling,c(Ce)}}else if(A&8){let Z=N.children;Z[0]===`
`&&(R.tagName==="PRE"||R.tagName==="TEXTAREA")&&(Z=Z.slice(1));const{textContent:Ce}=R;Ce!==Z&&Ce!==Z.replace(/\r\n|\r/g,`
`)&&(qo(R,0)||us(),R.textContent=N.children)}if(v){if(Ee||!E||b&48){const Z=R.tagName.includes("-");for(const Ce in v)(Ee&&(Ce.endsWith("value")||Ce==="indeterminate")||io(Ce)&&!vs(Ce)||Ce[0]==="."||Z)&&r(R,Ce,null,v[Ce],void 0,x)}else if(v.onClick)r(R,"onClick",null,v.onClick,void 0,x);else if(b&4&&pr(v.style))for(const Z in v.style)v.style[Z]}let he;(he=v&&v.onVnodeBeforeMount)&&Nt(he,x,N),T&&dn(N,null,x,"beforeMount"),((he=v&&v.onVnodeMounted)||T||ne)&&mm(()=>{he&&Nt(he,x,N),ne&&le.enter(R),T&&dn(N,null,x,"mounted")},U)}return R.nextSibling},y=(R,N,x,U,w,E,_)=>{_=_||!!N.dynamicChildren;const v=N.children,b=v.length;for(let A=0;A<b;A++){const T=_?v[A]:v[A]=Dt(v[A]),le=T.type===$r;R?(le&&!_&&A+1<b&&Dt(v[A+1]).type===$r&&(l(s(R.data.slice(T.children.length)),x,i(R)),R.data=T.children),R=d(R,T,U,w,E,_)):le&&!T.children?l(T.el=s(""),x):(qo(x,1)||us(),n(null,T,x,null,U,w,Ho(x),E))}return R},C=(R,N,x,U,w,E)=>{const{slotScopeIds:_}=N;_&&(w=w?w.concat(_):_);const v=o(R),b=y(i(R),N,v,x,U,w,E);return b&&ys(b)&&b.data==="]"?i(N.anchor=b):(us(),l(N.anchor=u("]"),v,b),b)},P=(R,N,x,U,w,E)=>{if(qo(R.parentElement,1)||us(),N.el=null,E){const b=k(R);for(;;){const A=i(R);if(A&&A!==b)c(A);else break}}const _=i(R),v=o(R);return c(R),n(null,N,v,_,x,U,Ho(v),w),x&&(x.vnode.el=N.el,yc(x,N.el)),_},k=(R,N="[",x="]")=>{let U=0;for(;R;)if(R=i(R),R&&ys(R)&&(R.data===N&&U++,R.data===x)){if(U===0)return i(R);U--}return R},L=(R,N,x)=>{const U=N.parentNode;U&&U.replaceChild(R,N);let w=x;for(;w;)w.vnode.el===N&&(w.vnode.el=w.subTree.el=R),w=w.parent},D=R=>R.nodeType===1&&R.tagName==="TEMPLATE";return[f,d]}const Uf="data-allow-mismatch",lv={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function qo(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(Uf);)t=t.parentElement;const n=t&&t.getAttribute(Uf);if(n==null)return!1;if(n==="")return!0;{const r=n.split(",");return e===0&&r.includes("children")?!0:r.includes(lv[e])}}const uv=sc().requestIdleCallback||(t=>setTimeout(t,1)),hv=sc().cancelIdleCallback||(t=>clearTimeout(t)),ON=(t=1e4)=>e=>{const n=uv(e,{timeout:t});return()=>hv(n)};function fv(t){const{top:e,left:n,bottom:r,right:s}=t.getBoundingClientRect(),{innerHeight:i,innerWidth:o}=window;return(e>0&&e<i||r>0&&r<i)&&(n>0&&n<o||s>0&&s<o)}const xN=t=>(e,n)=>{const r=new IntersectionObserver(s=>{for(const i of s)if(i.isIntersecting){r.disconnect(),e();break}},t);return n(s=>{if(s instanceof Element){if(fv(s))return e(),r.disconnect(),!1;r.observe(s)}}),()=>r.disconnect()},MN=t=>e=>{if(t){const n=matchMedia(t);if(n.matches)e();else return n.addEventListener("change",e,{once:!0}),()=>n.removeEventListener("change",e)}},LN=(t=[])=>(e,n)=>{Fe(t)&&(t=[t]);let r=!1;const s=o=>{r||(r=!0,i(),e(),o.target.dispatchEvent(new o.constructor(o.type,o)))},i=()=>{n(o=>{for(const c of t)o.removeEventListener(c,s)})};return n(o=>{for(const c of t)o.addEventListener(c,s,{once:!0})}),i};function dv(t,e){if(ys(t)&&t.data==="["){let n=1,r=t.nextSibling;for(;r;){if(r.nodeType===1){if(e(r)===!1)break}else if(ys(r))if(r.data==="]"){if(--n===0)break}else r.data==="["&&n++;r=r.nextSibling}}else e(t)}const Ln=t=>!!t.type.__asyncLoader;function FN(t){ce(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,hydrate:i,timeout:o,suspensible:c=!0,onError:l}=t;let u=null,f,d=0;const g=()=>(d++,u=null,y()),y=()=>{let C;return u||(C=u=e().catch(P=>{if(P=P instanceof Error?P:new Error(String(P)),l)return new Promise((k,L)=>{l(P,()=>k(g()),()=>L(P),d+1)});throw P}).then(P=>C!==u&&u?u:(P&&(P.__esModule||P[Symbol.toStringTag]==="Module")&&(P=P.default),f=P,P)))};return co({name:"AsyncComponentWrapper",__asyncLoader:y,__asyncHydrate(C,P,k){let L=!1;(P.bu||(P.bu=[])).push(()=>L=!0);const D=()=>{L||k()},R=i?()=>{const N=i(D,x=>dv(C,x));N&&(P.bum||(P.bum=[])).push(N)}:D;f?R():y().then(()=>!P.isUnmounted&&R())},get __asyncResolved(){return f},setup(){const C=ut;if(Du(C),f)return()=>$o(f,C);const P=R=>{u=null,zs(R,C,13,!r)};if(c&&C.suspense||Os)return y().then(R=>()=>$o(R,C)).catch(R=>(P(R),()=>r?je(r,{error:R}):null));const k=Ni(!1),L=Ni(),D=Ni(!!s);return s&&setTimeout(()=>{D.value=!1},s),o!=null&&setTimeout(()=>{if(!k.value&&!L.value){const R=new Error(`Async component timed out after ${o}ms.`);P(R),L.value=R}},o),y().then(()=>{k.value=!0,C.parent&&lo(C.parent.vnode)&&C.parent.update()}).catch(R=>{P(R),L.value=R}),()=>{if(k.value&&f)return $o(f,C);if(L.value&&r)return je(r,{error:L.value});if(n&&!D.value)return $o(n,C)}}})}function $o(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=je(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const lo=t=>t.type.__isKeepAlive,pv={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Ut(),r=n.ctx;if(!r.renderer)return()=>{const D=e.default&&e.default();return D&&D.length===1?D[0]:D};const s=new Map,i=new Set;let o=null;const c=n.suspense,{renderer:{p:l,m:u,um:f,o:{createElement:d}}}=r,g=d("div");r.activate=(D,R,N,x,U)=>{const w=D.component;u(D,R,N,0,c),l(w.vnode,D,R,N,w,c,x,D.slotScopeIds,U),ze(()=>{w.isDeactivated=!1,w.a&&Is(w.a);const E=D.props&&D.props.onVnodeMounted;E&&Nt(E,w.parent,D)},c)},r.deactivate=D=>{const R=D.component;Aa(R.m),Aa(R.a),u(D,g,null,1,c),ze(()=>{R.da&&Is(R.da);const N=D.props&&D.props.onVnodeUnmounted;N&&Nt(N,R.parent,D),R.isDeactivated=!0},c)};function y(D){il(D),f(D,n,c,!0)}function C(D){s.forEach((R,N)=>{const x=ql(Ln(R)?R.type.__asyncResolved||{}:R.type);x&&!D(x)&&P(N)})}function P(D){const R=s.get(D);R&&(!o||!zt(R,o))?y(R):o&&il(o),s.delete(D),i.delete(D)}As(()=>[t.include,t.exclude],([D,R])=>{D&&C(N=>Ii(D,N)),R&&C(N=>!Ii(R,N))},{flush:"post",deep:!0});let k=null;const L=()=>{k!=null&&(ba(n.subTree.type)?ze(()=>{s.set(k,Go(n.subTree))},n.subTree.suspense):s.set(k,Go(n.subTree)))};return uo(L),ku(L),Ou(()=>{s.forEach(D=>{const{subTree:R,suspense:N}=n,x=Go(R);if(D.type===x.type&&D.key===x.key){il(x);const U=x.component.da;U&&ze(U,N);return}y(D)})}),()=>{if(k=null,!e.default)return o=null;const D=e.default(),R=D[0];if(D.length>1)return o=null,D;if(!Ir(R)||!(R.shapeFlag&4)&&!(R.shapeFlag&128))return o=null,R;let N=Go(R);if(N.type===Qe)return o=null,N;const x=N.type,U=ql(Ln(N)?N.type.__asyncResolved||{}:x),{include:w,exclude:E,max:_}=t;if(w&&(!U||!Ii(w,U))||E&&U&&Ii(E,U))return N.shapeFlag&=-257,o=N,R;const v=N.key==null?x:N.key,b=s.get(v);return N.el&&(N=Hn(N),R.shapeFlag&128&&(R.ssContent=N)),k=v,b?(N.el=b.el,N.component=b.component,N.transition&&vr(N,N.transition),N.shapeFlag|=512,i.delete(v),i.add(v)):(i.add(v),_&&i.size>parseInt(_,10)&&P(i.values().next().value)),N.shapeFlag|=256,o=N,ba(R.type)?R:N}}},UN=pv;function Ii(t,e){return re(t)?t.some(n=>Ii(n,e)):Fe(t)?t.split(",").includes(e):nT(t)?(t.lastIndex=0,t.test(e)):!1}function gv(t,e){Qg(t,"a",e)}function mv(t,e){Qg(t,"da",e)}function Qg(t,e,n=ut){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(mc(e,r,n),n){let s=n.parent;for(;s&&s.parent;)lo(s.parent.vnode)&&_v(r,e,n,s),s=s.parent}}function _v(t,e,n,r){const s=mc(e,t,r,!0);xu(()=>{bu(r[e],s)},n)}function il(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Go(t){return t.shapeFlag&128?t.ssContent:t}function mc(t,e,n=ut,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Un();const c=zr(n),l=sn(e,n,t,o);return c(),Bn(),l});return r?s.unshift(i):s.push(i),i}}const Kn=t=>(e,n=ut)=>{(!Os||t==="sp")&&mc(t,(...r)=>e(...r),n)},yv=Kn("bm"),uo=Kn("m"),Jg=Kn("bu"),ku=Kn("u"),Ou=Kn("bum"),xu=Kn("um"),Ev=Kn("sp"),Tv=Kn("rtg"),vv=Kn("rtc");function Iv(t,e=ut){mc("ec",t,e)}const Mu="components",wv="directives";function Av(t,e){return Lu(Mu,t,!0,e)||t}const Yg=Symbol.for("v-ndc");function BN(t){return Fe(t)?Lu(Mu,t,!1)||t:t||Yg}function jN(t){return Lu(wv,t)}function Lu(t,e,n=!0,r=!1){const s=ft||ut;if(s){const i=s.type;if(t===Mu){const c=ql(i,!1);if(c&&(c===e||c===It(e)||c===nc(It(e))))return i}const o=Bf(s[t]||i[t],e)||Bf(s.appContext[t],e);return!o&&r?i:o}}function Bf(t,e){return t&&(t[e]||t[It(e)]||t[nc(It(e))])}function HN(t,e,n,r){let s;const i=n&&n[r],o=re(t);if(o||Fe(t)){const c=o&&pr(t);let l=!1,u=!1;c&&(l=!Ft(t),u=jn(t),t=lc(t)),s=new Array(t.length);for(let f=0,d=t.length;f<d;f++)s[f]=e(l?u?ks(rn(t[f])):rn(t[f]):t[f],f,void 0,i&&i[f])}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i&&i[c])}else if(De(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i&&i[l]));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const f=c[l];s[l]=e(t[f],f,l,i&&i[l])}}else s=[];return n&&(n[r]=s),s}function qN(t,e){for(let n=0;n<e.length;n++){const r=e[n];if(re(r))for(let s=0;s<r.length;s++)t[r[s].name]=r[s].fn;else r&&(t[r.name]=r.key?(...s)=>{const i=r.fn(...s);return i&&(i.key=r.key),i}:r.fn)}return t}function $N(t,e,n={},r,s){if(ft.ce||ft.parent&&Ln(ft.parent)&&ft.parent.ce){const u=Object.keys(n).length>0;return e!=="default"&&(n.name=e),Qi(),Fl(at,null,[je("slot",n,r&&r())],u?-2:64)}let i=t[e];i&&i._c&&(i._d=!1),Qi();const o=i&&Fu(i(n)),c=n.key||o&&o.key,l=Fl(at,{key:(c&&!nn(c)?c:`_${e}`)+(!o&&r?"_fb":"")},o||(r?r():[]),o&&t._===1?64:-2);return!s&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function Fu(t){return t.some(e=>Ir(e)?!(e.type===Qe||e.type===at&&!Fu(e.children)):!0)?t:null}function GN(t,e){const n={};for(const r in t)n[e&&/[A-Z]/.test(r)?`on:${r}`:Zo(r)]=t[r];return n}const Dl=t=>t?wm(t)?ho(t):Dl(t.parent):null,Di=ke(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Dl(t.parent),$root:t=>Dl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Uu(t),$forceUpdate:t=>t.f||(t.f=()=>{Nu(t.update)}),$nextTick:t=>t.n||(t.n=pc.bind(t.proxy)),$watch:t=>nv.bind(t)}),ol=(t,e)=>t!==we&&!t.__isScriptSetup&&Se(t,e),kl={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ol(r,e))return o[e]=1,r[e];if(s!==we&&Se(s,e))return o[e]=2,s[e];if(Se(i,e))return o[e]=3,i[e];if(n!==we&&Se(n,e))return o[e]=4,n[e];Ol&&(o[e]=0)}}const u=Di[e];let f,d;if(u)return e==="$attrs"&&Et(t.attrs,"get",""),u(t);if((f=c.__cssModules)&&(f=f[e]))return f;if(n!==we&&Se(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,Se(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ol(s,e)?(s[e]=n,!0):r!==we&&Se(r,e)?(r[e]=n,!0):Se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},c){let l;return!!(n[c]||t!==we&&c[0]!=="$"&&Se(t,c)||ol(e,c)||Se(i,c)||Se(r,c)||Se(Di,c)||Se(s.config.globalProperties,c)||(l=o.__cssModules)&&l[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},bv=ke({},kl,{get(t,e){if(e!==Symbol.unscopables)return kl.get(t,e,t)},has(t,e){return e[0]!=="_"&&!aT(e)}});function WN(){return null}function KN(){return null}function zN(t){}function QN(t){}function JN(){return null}function YN(){}function XN(t,e){return null}function ZN(){return Xg().slots}function e1(){return Xg().attrs}function Xg(t){const e=Ut();return e.setupContext||(e.setupContext=Rm(e))}function Ki(t){return re(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function t1(t,e){const n=Ki(t);for(const r in e){if(r.startsWith("__skip"))continue;let s=n[r];s?re(s)||ce(s)?s=n[r]={type:s,default:e[r]}:s.default=e[r]:s===null&&(s=n[r]={default:e[r]}),s&&e[`__skip_${r}`]&&(s.skipFactory=!0)}return n}function n1(t,e){return!t||!e?t||e:re(t)&&re(e)?t.concat(e):ke({},Ki(t),Ki(e))}function r1(t,e){const n={};for(const r in t)e.includes(r)||Object.defineProperty(n,r,{enumerable:!0,get:()=>t[r]});return n}function s1(t){const e=Ut();let n=t();return Bl(),Ru(n)&&(n=n.catch(r=>{throw zr(e),r})),[n,()=>zr(e)]}let Ol=!0;function Rv(t){const e=Uu(t),n=t.proxy,r=t.ctx;Ol=!1,e.beforeCreate&&jf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:f,beforeMount:d,mounted:g,beforeUpdate:y,updated:C,activated:P,deactivated:k,beforeDestroy:L,beforeUnmount:D,destroyed:R,unmounted:N,render:x,renderTracked:U,renderTriggered:w,errorCaptured:E,serverPrefetch:_,expose:v,inheritAttrs:b,components:A,directives:T,filters:le}=e;if(u&&Sv(u,r,null),o)for(const he in o){const Z=o[he];ce(Z)&&(r[he]=Z.bind(n))}if(s){const he=s.call(n,n);De(he)&&(t.data=hc(he))}if(Ol=!0,i)for(const he in i){const Z=i[he],Ce=ce(Z)?Z.bind(n,n):ce(Z.get)?Z.get.bind(n,n):qt,cn=!ce(Z)&&ce(Z.set)?Z.set.bind(n):qt,xt=Qt({get:Ce,set:cn});Object.defineProperty(r,he,{enumerable:!0,configurable:!0,get:()=>xt.value,set:ct=>xt.value=ct})}if(c)for(const he in c)Zg(c[he],r,n,he);if(l){const he=ce(l)?l.call(n):l;Reflect.ownKeys(he).forEach(Z=>{ea(Z,he[Z])})}f&&jf(f,t,"c");function ne(he,Z){re(Z)?Z.forEach(Ce=>he(Ce.bind(n))):Z&&he(Z.bind(n))}if(ne(yv,d),ne(uo,g),ne(Jg,y),ne(ku,C),ne(gv,P),ne(mv,k),ne(Iv,E),ne(vv,U),ne(Tv,w),ne(Ou,D),ne(xu,N),ne(Ev,_),re(v))if(v.length){const he=t.exposed||(t.exposed={});v.forEach(Z=>{Object.defineProperty(he,Z,{get:()=>n[Z],set:Ce=>n[Z]=Ce,enumerable:!0})})}else t.exposed||(t.exposed={});x&&t.render===qt&&(t.render=x),b!=null&&(t.inheritAttrs=b),A&&(t.components=A),T&&(t.directives=T),_&&Du(t)}function Sv(t,e,n=qt){re(t)&&(t=xl(t));for(const r in t){const s=t[r];let i;De(s)?"default"in s?i=en(s.from||r,s.default,!0):i=en(s.from||r):i=en(s),rt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function jf(t,e,n){sn(re(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Zg(t,e,n,r){let s=r.includes(".")?Ug(n,r):()=>n[r];if(Fe(t)){const i=e[t];ce(i)&&As(s,i)}else if(ce(t))As(s,t.bind(n));else if(De(t))if(re(t))t.forEach(i=>Zg(i,e,n,r));else{const i=ce(t.handler)?t.handler.bind(n):e[t.handler];ce(i)&&As(s,i,t)}}function Uu(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>wa(l,u,o,!0)),wa(l,e,o)),De(e)&&i.set(e,l),l}function wa(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&wa(t,i,n,!0),s&&s.forEach(o=>wa(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=Cv[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Cv={data:Hf,props:qf,emits:qf,methods:wi,computed:wi,beforeCreate:bt,created:bt,beforeMount:bt,mounted:bt,beforeUpdate:bt,updated:bt,beforeDestroy:bt,beforeUnmount:bt,destroyed:bt,unmounted:bt,activated:bt,deactivated:bt,errorCaptured:bt,serverPrefetch:bt,components:wi,directives:wi,watch:Nv,provide:Hf,inject:Pv};function Hf(t,e){return e?t?function(){return ke(ce(t)?t.call(this,this):t,ce(e)?e.call(this,this):e)}:e:t}function Pv(t,e){return wi(xl(t),xl(e))}function xl(t){if(re(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function bt(t,e){return t?[...new Set([].concat(t,e))]:e}function wi(t,e){return t?ke(Object.create(null),t,e):e}function qf(t,e){return t?re(t)&&re(e)?[...new Set([...t,...e])]:ke(Object.create(null),Ki(t),Ki(e??{})):e}function Nv(t,e){if(!t)return e;if(!e)return t;const n=ke(Object.create(null),t);for(const r in e)n[r]=bt(t[r],e[r]);return n}function em(){return{app:null,config:{isNativeTag:og,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vv=0;function Dv(t,e){return function(r,s=null){ce(r)||(r=ke({},r)),s!=null&&!De(s)&&(s=null);const i=em(),o=new WeakSet,c=[];let l=!1;const u=i.app={_uid:Vv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:uI,get config(){return i.config},set config(f){},use(f,...d){return o.has(f)||(f&&ce(f.install)?(o.add(f),f.install(u,...d)):ce(f)&&(o.add(f),f(u,...d))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,d){return d?(i.components[f]=d,u):i.components[f]},directive(f,d){return d?(i.directives[f]=d,u):i.directives[f]},mount(f,d,g){if(!l){const y=u._ceVNode||je(r,s);return y.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),d&&e?e(y,f):t(y,f,g),l=!0,u._container=f,f.__vue_app__=u,ho(y.component)}},onUnmount(f){c.push(f)},unmount(){l&&(sn(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,d){return i.provides[f]=d,u},runWithContext(f){const d=qr;qr=u;try{return f()}finally{qr=d}}};return u}}let qr=null;function i1(t,e,n=we){const r=Ut(),s=It(e),i=kt(e),o=tm(t,s),c=jT((l,u)=>{let f,d=we,g;return tv(()=>{const y=t[s];St(f,y)&&(f=y,u())}),{get(){return l(),n.get?n.get(f):f},set(y){const C=n.set?n.set(y):y;if(!St(C,f)&&!(d!==we&&St(y,d)))return;const P=r.vnode.props;P&&(e in P||s in P||i in P)&&(`onUpdate:${e}`in P||`onUpdate:${s}`in P||`onUpdate:${i}`in P)||(f=y,u()),r.emit(`update:${e}`,C),St(y,C)&&St(y,d)&&!St(C,g)&&u(),d=y,g=C}}});return c[Symbol.iterator]=()=>{let l=0;return{next(){return l<2?{value:l++?o||we:c,done:!1}:{done:!0}}}},c}const tm=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${It(e)}Modifiers`]||t[`${kt(e)}Modifiers`];function kv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||we;let s=n;const i=e.startsWith("update:"),o=i&&tm(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>Fe(f)?f.trim():f)),o.number&&(s=n.map(rc)));let c,l=r[c=Zo(e)]||r[c=Zo(It(e))];!l&&i&&(l=r[c=Zo(kt(e))]),l&&sn(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,sn(u,t,6,s)}}const Ov=new WeakMap;function nm(t,e,n=!1){const r=n?Ov:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!ce(t)){const l=u=>{const f=nm(u,e,!0);f&&(c=!0,ke(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(De(t)&&r.set(t,null),null):(re(i)?i.forEach(l=>o[l]=null):ke(o,i),De(t)&&r.set(t,o),o)}function _c(t,e){return!t||!io(e)?!1:(e=e.slice(2).replace(/Once$/,""),Se(t,e[0].toLowerCase()+e.slice(1))||Se(t,kt(e))||Se(t,e))}function na(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:f,props:d,data:g,setupState:y,ctx:C,inheritAttrs:P}=t,k=Gi(t);let L,D;try{if(n.shapeFlag&4){const N=s||r,x=N;L=Dt(u.call(x,N,f,d,y,g,C)),D=c}else{const N=e;L=Dt(N.length>1?N(d,{attrs:c,slots:o,emit:l}):N(d,null)),D=e.props?c:Mv(c)}}catch(N){ki.length=0,zs(N,t,1),L=je(Qe)}let R=L;if(D&&P!==!1){const N=Object.keys(D),{shapeFlag:x}=R;N.length&&x&7&&(i&&N.some(Au)&&(D=Lv(D,i)),R=Hn(R,D,!1,!0))}return n.dirs&&(R=Hn(R,null,!1,!0),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&vr(R,n.transition),L=R,Gi(k),L}function xv(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(Ir(s)){if(s.type!==Qe||s.children==="v-if"){if(n)return;n=s}}else return}return n}const Mv=t=>{let e;for(const n in t)(n==="class"||n==="style"||io(n))&&((e||(e={}))[n]=t[n]);return e},Lv=(t,e)=>{const n={};for(const r in t)(!Au(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Fv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?$f(r,o,u):!!o;if(l&8){const f=e.dynamicProps;for(let d=0;d<f.length;d++){const g=f[d];if(o[g]!==r[g]&&!_c(u,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?$f(r,o,u):!0:!!o;return!1}function $f(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!_c(n,i))return!0}return!1}function yc({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const rm={},sm=()=>Object.create(rm),im=t=>Object.getPrototypeOf(t)===rm;function Uv(t,e,n,r=!1){const s={},i=sm();t.propsDefaults=Object.create(null),om(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Cg(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Bv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=be(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let d=0;d<f.length;d++){let g=f[d];if(_c(t.emitsOptions,g))continue;const y=e[g];if(l)if(Se(i,g))y!==i[g]&&(i[g]=y,u=!0);else{const C=It(g);s[C]=Ml(l,c,C,y,t,!1)}else y!==i[g]&&(i[g]=y,u=!0)}}}else{om(t,e,s,i)&&(u=!0);let f;for(const d in c)(!e||!Se(e,d)&&((f=kt(d))===d||!Se(e,f)))&&(l?n&&(n[d]!==void 0||n[f]!==void 0)&&(s[d]=Ml(l,c,d,void 0,t,!0)):delete s[d]);if(i!==c)for(const d in i)(!e||!Se(e,d))&&(delete i[d],u=!0)}u&&Nn(t.attrs,"set","")}function om(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(vs(l))continue;const u=e[l];let f;s&&Se(s,f=It(l))?!i||!i.includes(f)?n[f]=u:(c||(c={}))[f]=u:_c(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=be(n),u=c||we;for(let f=0;f<i.length;f++){const d=i[f];n[d]=Ml(s,l,d,u[d],t,!Se(u,d))}}return o}function Ml(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Se(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ce(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=zr(s);r=u[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===kt(n))&&(r=!0))}return r}const jv=new WeakMap;function am(t,e,n=!1){const r=n?jv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!ce(t)){const f=d=>{l=!0;const[g,y]=am(d,e,!0);ke(o,g),y&&c.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return De(t)&&r.set(t,Es),Es;if(re(i))for(let f=0;f<i.length;f++){const d=It(i[f]);Gf(d)&&(o[d]=we)}else if(i)for(const f in i){const d=It(f);if(Gf(d)){const g=i[f],y=o[d]=re(g)||ce(g)?{type:g}:ke({},g),C=y.type;let P=!1,k=!0;if(re(C))for(let L=0;L<C.length;++L){const D=C[L],R=ce(D)&&D.name;if(R==="Boolean"){P=!0;break}else R==="String"&&(k=!1)}else P=ce(C)&&C.name==="Boolean";y[0]=P,y[1]=k,(P||Se(y,"default"))&&c.push(d)}}const u=[o,c];return De(t)&&r.set(t,u),u}function Gf(t){return t[0]!=="$"&&!vs(t)}const Bu=t=>t==="_"||t==="_ctx"||t==="$stable",ju=t=>re(t)?t.map(Dt):[Dt(t)],Hv=(t,e,n)=>{if(e._n)return e;const r=Fg((...s)=>ju(e(...s)),n);return r._c=!1,r},cm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Bu(s))continue;const i=t[s];if(ce(i))e[s]=Hv(s,i,r);else if(i!=null){const o=ju(i);e[s]=()=>o}}},lm=(t,e)=>{const n=ju(e);t.slots.default=()=>n},um=(t,e,n)=>{for(const r in e)(n||!Bu(r))&&(t[r]=e[r])},qv=(t,e,n)=>{const r=t.slots=sm();if(t.vnode.shapeFlag&32){const s=e._;s?(um(r,e,n),n&&cg(r,"_",s,!0)):cm(e,r)}else e&&lm(t,e)},$v=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=we;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:um(s,e,n):(i=!e.$stable,cm(e,s)),o=e}else e&&(lm(t,e),o={default:1});if(i)for(const c in s)!Bu(c)&&o[c]==null&&delete s[c]},ze=mm;function Gv(t){return hm(t)}function Wv(t){return hm(t,cv)}function hm(t,e){const n=sc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:f,parentNode:d,nextSibling:g,setScopeId:y=qt,insertStaticContent:C}=t,P=(I,S,O,q=null,F=null,$=null,K=void 0,W=null,z=!!S.dynamicChildren)=>{if(I===S)return;I&&!zt(I,S)&&(q=B(I),ct(I,F,$,!0),I=null),S.patchFlag===-2&&(z=!1,S.dynamicChildren=null);const{type:G,ref:ae,shapeFlag:Y}=S;switch(G){case $r:k(I,S,O,q);break;case Qe:L(I,S,O,q);break;case Ss:I==null&&D(S,O,q,K);break;case at:A(I,S,O,q,F,$,K,W,z);break;default:Y&1?x(I,S,O,q,F,$,K,W,z):Y&6?T(I,S,O,q,F,$,K,W,z):(Y&64||Y&128)&&G.process(I,S,O,q,F,$,K,W,z,ie)}ae!=null&&F?bs(ae,I&&I.ref,$,S||I,!S):ae==null&&I&&I.ref!=null&&bs(I.ref,null,$,I,!0)},k=(I,S,O,q)=>{if(I==null)r(S.el=c(S.children),O,q);else{const F=S.el=I.el;S.children!==I.children&&u(F,S.children)}},L=(I,S,O,q)=>{I==null?r(S.el=l(S.children||""),O,q):S.el=I.el},D=(I,S,O,q)=>{[I.el,I.anchor]=C(I.children,S,O,q,I.el,I.anchor)},R=({el:I,anchor:S},O,q)=>{let F;for(;I&&I!==S;)F=g(I),r(I,O,q),I=F;r(S,O,q)},N=({el:I,anchor:S})=>{let O;for(;I&&I!==S;)O=g(I),s(I),I=O;s(S)},x=(I,S,O,q,F,$,K,W,z)=>{if(S.type==="svg"?K="svg":S.type==="math"&&(K="mathml"),I==null)U(S,O,q,F,$,K,W,z);else{const G=I.el&&I.el._isVueCE?I.el:null;try{G&&G._beginPatch(),_(I,S,F,$,K,W,z)}finally{G&&G._endPatch()}}},U=(I,S,O,q,F,$,K,W)=>{let z,G;const{props:ae,shapeFlag:Y,transition:se,dirs:fe}=I;if(z=I.el=o(I.type,$,ae&&ae.is,ae),Y&8?f(z,I.children):Y&16&&E(I.children,z,null,q,F,al(I,$),K,W),fe&&dn(I,null,q,"created"),w(z,I,I.scopeId,K,q),ae){for(const Pe in ae)Pe!=="value"&&!vs(Pe)&&i(z,Pe,null,ae[Pe],$,q);"value"in ae&&i(z,"value",null,ae.value,$),(G=ae.onVnodeBeforeMount)&&Nt(G,q,I)}fe&&dn(I,null,q,"beforeMount");const ye=fm(F,se);ye&&se.beforeEnter(z),r(z,S,O),((G=ae&&ae.onVnodeMounted)||ye||fe)&&ze(()=>{G&&Nt(G,q,I),ye&&se.enter(z),fe&&dn(I,null,q,"mounted")},F)},w=(I,S,O,q,F)=>{if(O&&y(I,O),q)for(let $=0;$<q.length;$++)y(I,q[$]);if(F){let $=F.subTree;if(S===$||ba($.type)&&($.ssContent===S||$.ssFallback===S)){const K=F.vnode;w(I,K,K.scopeId,K.slotScopeIds,F.parent)}}},E=(I,S,O,q,F,$,K,W,z=0)=>{for(let G=z;G<I.length;G++){const ae=I[G]=W?cr(I[G]):Dt(I[G]);P(null,ae,S,O,q,F,$,K,W)}},_=(I,S,O,q,F,$,K)=>{const W=S.el=I.el;let{patchFlag:z,dynamicChildren:G,dirs:ae}=S;z|=I.patchFlag&16;const Y=I.props||we,se=S.props||we;let fe;if(O&&Mr(O,!1),(fe=se.onVnodeBeforeUpdate)&&Nt(fe,O,S,I),ae&&dn(S,I,O,"beforeUpdate"),O&&Mr(O,!0),(Y.innerHTML&&se.innerHTML==null||Y.textContent&&se.textContent==null)&&f(W,""),G?v(I.dynamicChildren,G,W,O,q,al(S,F),$):K||Z(I,S,W,null,O,q,al(S,F),$,!1),z>0){if(z&16)b(W,Y,se,O,F);else if(z&2&&Y.class!==se.class&&i(W,"class",null,se.class,F),z&4&&i(W,"style",Y.style,se.style,F),z&8){const ye=S.dynamicProps;for(let Pe=0;Pe<ye.length;Pe++){const Re=ye[Pe],gt=Y[Re],Ze=se[Re];(Ze!==gt||Re==="value")&&i(W,Re,gt,Ze,F,O)}}z&1&&I.children!==S.children&&f(W,S.children)}else!K&&G==null&&b(W,Y,se,O,F);((fe=se.onVnodeUpdated)||ae)&&ze(()=>{fe&&Nt(fe,O,S,I),ae&&dn(S,I,O,"updated")},q)},v=(I,S,O,q,F,$,K)=>{for(let W=0;W<S.length;W++){const z=I[W],G=S[W],ae=z.el&&(z.type===at||!zt(z,G)||z.shapeFlag&198)?d(z.el):O;P(z,G,ae,null,q,F,$,K,!0)}},b=(I,S,O,q,F)=>{if(S!==O){if(S!==we)for(const $ in S)!vs($)&&!($ in O)&&i(I,$,S[$],null,F,q);for(const $ in O){if(vs($))continue;const K=O[$],W=S[$];K!==W&&$!=="value"&&i(I,$,W,K,F,q)}"value"in O&&i(I,"value",S.value,O.value,F)}},A=(I,S,O,q,F,$,K,W,z)=>{const G=S.el=I?I.el:c(""),ae=S.anchor=I?I.anchor:c("");let{patchFlag:Y,dynamicChildren:se,slotScopeIds:fe}=S;fe&&(W=W?W.concat(fe):fe),I==null?(r(G,O,q),r(ae,O,q),E(S.children||[],O,ae,F,$,K,W,z)):Y>0&&Y&64&&se&&I.dynamicChildren&&I.dynamicChildren.length===se.length?(v(I.dynamicChildren,se,O,F,$,K,W),(S.key!=null||F&&S===F.subTree)&&Hu(I,S,!0)):Z(I,S,O,ae,F,$,K,W,z)},T=(I,S,O,q,F,$,K,W,z)=>{S.slotScopeIds=W,I==null?S.shapeFlag&512?F.ctx.activate(S,O,q,K,z):le(S,O,q,F,$,K,z):Ee(I,S,z)},le=(I,S,O,q,F,$,K)=>{const W=I.component=Im(I,q,F);if(lo(I)&&(W.ctx.renderer=ie),Am(W,!1,K),W.asyncDep){if(F&&F.registerDep(W,ne,K),!I.el){const z=W.subTree=je(Qe);L(null,z,S,O),I.placeholder=z.el}}else ne(W,I,S,O,F,$,K)},Ee=(I,S,O)=>{const q=S.component=I.component;if(Fv(I,S,O))if(q.asyncDep&&!q.asyncResolved){he(q,S,O);return}else q.next=S,q.update();else S.el=I.el,q.vnode=S},ne=(I,S,O,q,F,$,K)=>{const W=()=>{if(I.isMounted){let{next:Y,bu:se,u:fe,parent:ye,vnode:Pe}=I;{const et=dm(I);if(et){Y&&(Y.el=Pe.el,he(I,Y,K)),et.asyncDep.then(()=>{I.isUnmounted||W()});return}}let Re=Y,gt;Mr(I,!1),Y?(Y.el=Pe.el,he(I,Y,K)):Y=Pe,se&&Is(se),(gt=Y.props&&Y.props.onVnodeBeforeUpdate)&&Nt(gt,ye,Y,Pe),Mr(I,!0);const Ze=na(I),Pt=I.subTree;I.subTree=Ze,P(Pt,Ze,d(Pt.el),B(Pt),I,F,$),Y.el=Ze.el,Re===null&&yc(I,Ze.el),fe&&ze(fe,F),(gt=Y.props&&Y.props.onVnodeUpdated)&&ze(()=>Nt(gt,ye,Y,Pe),F)}else{let Y;const{el:se,props:fe}=S,{bm:ye,m:Pe,parent:Re,root:gt,type:Ze}=I,Pt=Ln(S);if(Mr(I,!1),ye&&Is(ye),!Pt&&(Y=fe&&fe.onVnodeBeforeMount)&&Nt(Y,Re,S),Mr(I,!0),se&&Oe){const et=()=>{I.subTree=na(I),Oe(se,I.subTree,I,F,null)};Pt&&Ze.__asyncHydrate?Ze.__asyncHydrate(se,I,et):et()}else{gt.ce&&gt.ce._def.shadowRoot!==!1&&gt.ce._injectChildStyle(Ze);const et=I.subTree=na(I);P(null,et,O,q,I,F,$),S.el=et.el}if(Pe&&ze(Pe,F),!Pt&&(Y=fe&&fe.onVnodeMounted)){const et=S;ze(()=>Nt(Y,Re,et),F)}(S.shapeFlag&256||Re&&Ln(Re.vnode)&&Re.vnode.shapeFlag&256)&&I.a&&ze(I.a,F),I.isMounted=!0,S=O=q=null}};I.scope.on();const z=I.effect=new ma(W);I.scope.off();const G=I.update=z.run.bind(z),ae=I.job=z.runIfDirty.bind(z);ae.i=I,ae.id=I.uid,z.scheduler=()=>Nu(ae),Mr(I,!0),G()},he=(I,S,O)=>{S.component=I;const q=I.vnode.props;I.vnode=S,I.next=null,Bv(I,S.props,q,O),$v(I,S.children,O),Un(),Df(I),Bn()},Z=(I,S,O,q,F,$,K,W,z=!1)=>{const G=I&&I.children,ae=I?I.shapeFlag:0,Y=S.children,{patchFlag:se,shapeFlag:fe}=S;if(se>0){if(se&128){cn(G,Y,O,q,F,$,K,W,z);return}else if(se&256){Ce(G,Y,O,q,F,$,K,W,z);return}}fe&8?(ae&16&&pt(G,F,$),Y!==G&&f(O,Y)):ae&16?fe&16?cn(G,Y,O,q,F,$,K,W,z):pt(G,F,$,!0):(ae&8&&f(O,""),fe&16&&E(Y,O,q,F,$,K,W,z))},Ce=(I,S,O,q,F,$,K,W,z)=>{I=I||Es,S=S||Es;const G=I.length,ae=S.length,Y=Math.min(G,ae);let se;for(se=0;se<Y;se++){const fe=S[se]=z?cr(S[se]):Dt(S[se]);P(I[se],fe,O,null,F,$,K,W,z)}G>ae?pt(I,F,$,!0,!1,Y):E(S,O,q,F,$,K,W,z,Y)},cn=(I,S,O,q,F,$,K,W,z)=>{let G=0;const ae=S.length;let Y=I.length-1,se=ae-1;for(;G<=Y&&G<=se;){const fe=I[G],ye=S[G]=z?cr(S[G]):Dt(S[G]);if(zt(fe,ye))P(fe,ye,O,null,F,$,K,W,z);else break;G++}for(;G<=Y&&G<=se;){const fe=I[Y],ye=S[se]=z?cr(S[se]):Dt(S[se]);if(zt(fe,ye))P(fe,ye,O,null,F,$,K,W,z);else break;Y--,se--}if(G>Y){if(G<=se){const fe=se+1,ye=fe<ae?S[fe].el:q;for(;G<=se;)P(null,S[G]=z?cr(S[G]):Dt(S[G]),O,ye,F,$,K,W,z),G++}}else if(G>se)for(;G<=Y;)ct(I[G],F,$,!0),G++;else{const fe=G,ye=G,Pe=new Map;for(G=ye;G<=se;G++){const Ge=S[G]=z?cr(S[G]):Dt(S[G]);Ge.key!=null&&Pe.set(Ge.key,G)}let Re,gt=0;const Ze=se-ye+1;let Pt=!1,et=0;const bn=new Array(Ze);for(G=0;G<Ze;G++)bn[G]=0;for(G=fe;G<=Y;G++){const Ge=I[G];if(gt>=Ze){ct(Ge,F,$,!0);continue}let Mt;if(Ge.key!=null)Mt=Pe.get(Ge.key);else for(Re=ye;Re<=se;Re++)if(bn[Re-ye]===0&&zt(Ge,S[Re])){Mt=Re;break}Mt===void 0?ct(Ge,F,$,!0):(bn[Mt-ye]=G+1,Mt>=et?et=Mt:Pt=!0,P(Ge,S[Mt],O,null,F,$,K,W,z),gt++)}const is=Pt?Kv(bn):Es;for(Re=is.length-1,G=Ze-1;G>=0;G--){const Ge=ye+G,Mt=S[Ge],Vr=S[Ge+1],ri=Ge+1<ae?Vr.el||pm(Vr):q;bn[G]===0?P(null,Mt,O,ri,F,$,K,W,z):Pt&&(Re<0||G!==is[Re]?xt(Mt,O,ri,2):Re--)}}},xt=(I,S,O,q,F=null)=>{const{el:$,type:K,transition:W,children:z,shapeFlag:G}=I;if(G&6){xt(I.component.subTree,S,O,q);return}if(G&128){I.suspense.move(S,O,q);return}if(G&64){K.move(I,S,O,ie);return}if(K===at){r($,S,O);for(let Y=0;Y<z.length;Y++)xt(z[Y],S,O,q);r(I.anchor,S,O);return}if(K===Ss){R(I,S,O);return}if(q!==2&&G&1&&W)if(q===0)W.beforeEnter($),r($,S,O),ze(()=>W.enter($),F);else{const{leave:Y,delayLeave:se,afterLeave:fe}=W,ye=()=>{I.ctx.isUnmounted?s($):r($,S,O)},Pe=()=>{$._isLeaving&&$[Pn](!0),Y($,()=>{ye(),fe&&fe()})};se?se($,ye,Pe):Pe()}else r($,S,O)},ct=(I,S,O,q=!1,F=!1)=>{const{type:$,props:K,ref:W,children:z,dynamicChildren:G,shapeFlag:ae,patchFlag:Y,dirs:se,cacheIndex:fe}=I;if(Y===-2&&(F=!1),W!=null&&(Un(),bs(W,null,O,I,!0),Bn()),fe!=null&&(S.renderCache[fe]=void 0),ae&256){S.ctx.deactivate(I);return}const ye=ae&1&&se,Pe=!Ln(I);let Re;if(Pe&&(Re=K&&K.onVnodeBeforeUnmount)&&Nt(Re,S,I),ae&6)Wt(I.component,O,q);else{if(ae&128){I.suspense.unmount(O,q);return}ye&&dn(I,null,S,"beforeUnmount"),ae&64?I.type.remove(I,S,O,ie,q):G&&!G.hasOnce&&($!==at||Y>0&&Y&64)?pt(G,S,O,!1,!0):($===at&&Y&384||!F&&ae&16)&&pt(z,S,O),q&&An(I)}(Pe&&(Re=K&&K.onVnodeUnmounted)||ye)&&ze(()=>{Re&&Nt(Re,S,I),ye&&dn(I,null,S,"unmounted")},O)},An=I=>{const{type:S,el:O,anchor:q,transition:F}=I;if(S===at){Gt(O,q);return}if(S===Ss){N(I);return}const $=()=>{s(O),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(I.shapeFlag&1&&F&&!F.persisted){const{leave:K,delayLeave:W}=F,z=()=>K(O,$);W?W(I.el,$,z):z()}else $()},Gt=(I,S)=>{let O;for(;I!==S;)O=g(I),s(I),I=O;s(S)},Wt=(I,S,O)=>{const{bum:q,scope:F,job:$,subTree:K,um:W,m:z,a:G}=I;Aa(z),Aa(G),q&&Is(q),F.stop(),$&&($.flags|=8,ct(K,I,S,O)),W&&ze(W,S),ze(()=>{I.isUnmounted=!0},S)},pt=(I,S,O,q=!1,F=!1,$=0)=>{for(let K=$;K<I.length;K++)ct(I[K],S,O,q,F)},B=I=>{if(I.shapeFlag&6)return B(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const S=g(I.anchor||I.el),O=S&&S[Bg];return O?g(O):S};let ee=!1;const J=(I,S,O)=>{let q;I==null?S._vnode&&(ct(S._vnode,null,null,!0),q=S._vnode.component):P(S._vnode||null,I,S,null,null,null,O),S._vnode=I,ee||(ee=!0,Df(q),va(),ee=!1)},ie={p:P,um:ct,m:xt,r:An,mt:le,mc:E,pc:Z,pbc:v,n:B,o:t};let _e,Oe;return e&&([_e,Oe]=e(ie)),{render:J,hydrate:_e,createApp:Dv(J,_e)}}function al({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Mr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function fm(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Hu(t,e,n=!1){const r=t.children,s=e.children;if(re(r)&&re(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=cr(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Hu(o,c)),c.type===$r&&(c.patchFlag!==-1?c.el=o.el:c.__elIndex=i+(t.type===at?1:0)),c.type===Qe&&!c.el&&(c.el=o.el)}}function Kv(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function dm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:dm(e)}function Aa(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function pm(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?pm(e.subTree):null}const ba=t=>t.__isSuspense;let Ll=0;const zv={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,c,l,u){if(t==null)Qv(e,n,r,s,i,o,c,l,u);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}Jv(t,e,n,r,s,o,c,l,u)}},hydrate:Yv,normalize:Xv},o1=zv;function zi(t,e){const n=t.props&&t.props[e];ce(n)&&n()}function Qv(t,e,n,r,s,i,o,c,l){const{p:u,o:{createElement:f}}=l,d=f("div"),g=t.suspense=gm(t,s,r,e,d,n,i,o,c,l);u(null,g.pendingBranch=t.ssContent,d,null,r,g,i,o),g.deps>0?(zi(t,"onPending"),zi(t,"onFallback"),u(null,t.ssFallback,e,n,r,null,i,o),Rs(g,t.ssFallback)):g.resolve(!1,!0)}function Jv(t,e,n,r,s,i,o,c,{p:l,um:u,o:{createElement:f}}){const d=e.suspense=t.suspense;d.vnode=e,e.el=t.el;const g=e.ssContent,y=e.ssFallback,{activeBranch:C,pendingBranch:P,isInFallback:k,isHydrating:L}=d;if(P)d.pendingBranch=g,zt(P,g)?(l(P,g,d.hiddenContainer,null,s,d,i,o,c),d.deps<=0?d.resolve():k&&(L||(l(C,y,n,r,s,null,i,o,c),Rs(d,y)))):(d.pendingId=Ll++,L?(d.isHydrating=!1,d.activeBranch=P):u(P,s,d),d.deps=0,d.effects.length=0,d.hiddenContainer=f("div"),k?(l(null,g,d.hiddenContainer,null,s,d,i,o,c),d.deps<=0?d.resolve():(l(C,y,n,r,s,null,i,o,c),Rs(d,y))):C&&zt(C,g)?(l(C,g,n,r,s,d,i,o,c),d.resolve(!0)):(l(null,g,d.hiddenContainer,null,s,d,i,o,c),d.deps<=0&&d.resolve()));else if(C&&zt(C,g))l(C,g,n,r,s,d,i,o,c),Rs(d,g);else if(zi(e,"onPending"),d.pendingBranch=g,g.shapeFlag&512?d.pendingId=g.component.suspenseId:d.pendingId=Ll++,l(null,g,d.hiddenContainer,null,s,d,i,o,c),d.deps<=0)d.resolve();else{const{timeout:D,pendingId:R}=d;D>0?setTimeout(()=>{d.pendingId===R&&d.fallback(y)},D):D===0&&d.fallback(y)}}function gm(t,e,n,r,s,i,o,c,l,u,f=!1){const{p:d,m:g,um:y,n:C,o:{parentNode:P,remove:k}}=u;let L;const D=Zv(t);D&&e&&e.pendingBranch&&(L=e.pendingId,e.deps++);const R=t.props?ga(t.props.timeout):void 0,N=i,x={vnode:t,parent:e,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:Ll++,timeout:typeof R=="number"?R:-1,activeBranch:null,pendingBranch:null,isInFallback:!f,isHydrating:f,isUnmounted:!1,effects:[],resolve(U=!1,w=!1){const{vnode:E,activeBranch:_,pendingBranch:v,pendingId:b,effects:A,parentComponent:T,container:le,isInFallback:Ee}=x;let ne=!1;x.isHydrating?x.isHydrating=!1:U||(ne=_&&v.transition&&v.transition.mode==="out-in",ne&&(_.transition.afterLeave=()=>{b===x.pendingId&&(g(v,le,i===N?C(_):i,0),Ta(A),Ee&&E.ssFallback&&(E.ssFallback.el=null))}),_&&(P(_.el)===le&&(i=C(_)),y(_,T,x,!0),!ne&&Ee&&E.ssFallback&&ze(()=>E.ssFallback.el=null,x)),ne||g(v,le,i,0)),Rs(x,v),x.pendingBranch=null,x.isInFallback=!1;let he=x.parent,Z=!1;for(;he;){if(he.pendingBranch){he.effects.push(...A),Z=!0;break}he=he.parent}!Z&&!ne&&Ta(A),x.effects=[],D&&e&&e.pendingBranch&&L===e.pendingId&&(e.deps--,e.deps===0&&!w&&e.resolve()),zi(E,"onResolve")},fallback(U){if(!x.pendingBranch)return;const{vnode:w,activeBranch:E,parentComponent:_,container:v,namespace:b}=x;zi(w,"onFallback");const A=C(E),T=()=>{x.isInFallback&&(d(null,U,v,A,_,null,b,c,l),Rs(x,U))},le=U.transition&&U.transition.mode==="out-in";le&&(E.transition.afterLeave=T),x.isInFallback=!0,y(E,_,null,!0),le||T()},move(U,w,E){x.activeBranch&&g(x.activeBranch,U,w,E),x.container=U},next(){return x.activeBranch&&C(x.activeBranch)},registerDep(U,w,E){const _=!!x.pendingBranch;_&&x.deps++;const v=U.vnode.el;U.asyncDep.catch(b=>{zs(b,U,0)}).then(b=>{if(U.isUnmounted||x.isUnmounted||x.pendingId!==U.suspenseId)return;U.asyncResolved=!0;const{vnode:A}=U;jl(U,b,!1),v&&(A.el=v);const T=!v&&U.subTree.el;w(U,A,P(v||U.subTree.el),v?null:C(U.subTree),x,o,E),T&&(A.placeholder=null,k(T)),yc(U,A.el),_&&--x.deps===0&&x.resolve()})},unmount(U,w){x.isUnmounted=!0,x.activeBranch&&y(x.activeBranch,n,U,w),x.pendingBranch&&y(x.pendingBranch,n,U,w)}};return x}function Yv(t,e,n,r,s,i,o,c,l){const u=e.suspense=gm(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,c,!0),f=l(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(!1,!0),f}function Xv(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=Wf(r?n.default:n),t.ssFallback=r?Wf(n.fallback):je(Qe)}function Wf(t){let e;if(ce(t)){const n=Kr&&t._c;n&&(t._d=!1,Qi()),t=t(),n&&(t._d=!0,e=vt,_m())}return re(t)&&(t=xv(t)),t=Dt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function mm(t,e){e&&e.pendingBranch?re(t)?e.effects.push(...t):e.effects.push(t):Ta(t)}function Rs(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,yc(r,s))}function Zv(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const at=Symbol.for("v-fgt"),$r=Symbol.for("v-txt"),Qe=Symbol.for("v-cmt"),Ss=Symbol.for("v-stc"),ki=[];let vt=null;function Qi(t=!1){ki.push(vt=t?null:[])}function _m(){ki.pop(),vt=ki[ki.length-1]||null}let Kr=1;function Ra(t,e=!1){Kr+=t,t<0&&vt&&e&&(vt.hasOnce=!0)}function ym(t){return t.dynamicChildren=Kr>0?vt||Es:null,_m(),Kr>0&&vt&&vt.push(t),t}function eI(t,e,n,r,s,i){return ym(Tm(t,e,n,r,s,i,!0))}function Fl(t,e,n,r,s){return ym(je(t,e,n,r,s,!0))}function Ir(t){return t?t.__v_isVNode===!0:!1}function zt(t,e){return t.type===e.type&&t.key===e.key}function a1(t){}const Em=({key:t})=>t??null,ra=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Fe(t)||rt(t)||ce(t)?{i:ft,r:t,k:e,f:!!n}:t:null);function Tm(t,e=null,n=null,r=0,s=null,i=t===at?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Em(e),ref:e&&ra(e),scopeId:gc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ft};return c?(qu(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Fe(n)?8:16),Kr>0&&!o&&vt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&vt.push(l),l}const je=tI;function tI(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Yg)&&(t=Qe),Ir(t)){const c=Hn(t,e,!0);return n&&qu(c,n),Kr>0&&!i&&vt&&(c.shapeFlag&6?vt[vt.indexOf(t)]=c:vt.push(c)),c.patchFlag=-2,c}if(cI(t)&&(t=t.__vccOpts),e){e=nI(e);let{class:c,style:l}=e;c&&!Fe(c)&&(e.class=oc(c)),De(l)&&(dc(l)&&!re(l)&&(l=ke({},l)),e.style=ic(l))}const o=Fe(t)?1:ba(t)?128:jg(t)?64:De(t)?4:ce(t)?2:0;return Tm(t,e,n,r,s,o,i,!0)}function nI(t){return t?dc(t)||im(t)?ke({},t):t:null}function Hn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?rI(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Em(u),ref:e&&e.ref?n&&i?re(i)?i.concat(ra(e)):[i,ra(e)]:ra(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==at?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Hn(t.ssContent),ssFallback:t.ssFallback&&Hn(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&vr(f,l.clone(f)),f}function vm(t=" ",e=0){return je($r,null,t,e)}function c1(t,e){const n=je(Ss,null,t);return n.staticCount=e,n}function l1(t="",e=!1){return e?(Qi(),Fl(Qe,null,t)):je(Qe,null,t)}function Dt(t){return t==null||typeof t=="boolean"?je(Qe):re(t)?je(at,null,t.slice()):Ir(t)?cr(t):je($r,null,String(t))}function cr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Hn(t)}function qu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(re(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),qu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!im(e)?e._ctx=ft:s===3&&ft&&(ft.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ce(e)?(e={default:e,_ctx:ft},n=32):(e=String(e),r&64?(n=16,e=[vm(e)]):n=8);t.children=e,t.shapeFlag|=n}function rI(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=oc([e.class,r.class]));else if(s==="style")e.style=ic([e.style,r.style]);else if(io(s)){const i=e[s],o=r[s];o&&i!==o&&!(re(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Nt(t,e,n,r=null){sn(t,e,7,[n,r])}const sI=em();let iI=0;function Im(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||sI,i={uid:iI++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new fg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:am(r,s),emitsOptions:nm(r,s),emit:null,emitted:null,propsDefaults:we,inheritAttrs:r.inheritAttrs,ctx:we,data:we,props:we,attrs:we,slots:we,refs:we,setupState:we,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=kv.bind(null,i),t.ce&&t.ce(i),i}let ut=null;const Ut=()=>ut||ft;let Sa,Ul;{const t=sc(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Sa=e("__VUE_INSTANCE_SETTERS__",n=>ut=n),Ul=e("__VUE_SSR_SETTERS__",n=>Os=n)}const zr=t=>{const e=ut;return Sa(t),t.scope.on(),()=>{t.scope.off(),Sa(e)}},Bl=()=>{ut&&ut.scope.off(),Sa(null)};function wm(t){return t.vnode.shapeFlag&4}let Os=!1;function Am(t,e=!1,n=!1){e&&Ul(e);const{props:r,children:s}=t.vnode,i=wm(t);Uv(t,r,i,e),qv(t,s,n||e);const o=i?oI(t,e):void 0;return e&&Ul(!1),o}function oI(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,kl);const{setup:r}=n;if(r){Un();const s=t.setupContext=r.length>1?Rm(t):null,i=zr(t),o=oo(r,t,0,[t.props,s]),c=Ru(o);if(Bn(),i(),(c||t.sp)&&!Ln(t)&&Du(t),c){if(o.then(Bl,Bl),e)return o.then(l=>{jl(t,l,e)}).catch(l=>{zs(l,t,0)});t.asyncDep=o}else jl(t,o,e)}else bm(t,e)}function jl(t,e,n){ce(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:De(e)&&(t.setupState=Vg(e)),bm(t,n)}let Ca,Hl;function u1(t){Ca=t,Hl=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,bv))}}const h1=()=>!Ca;function bm(t,e,n){const r=t.type;if(!t.render){if(!e&&Ca&&!r.render){const s=r.template||Uu(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:l}=r,u=ke(ke({isCustomElement:i,delimiters:c},o),l);r.render=Ca(s,u)}}t.render=r.render||qt,Hl&&Hl(t)}{const s=zr(t);Un();try{Rv(t)}finally{Bn(),s()}}}const aI={get(t,e){return Et(t,"get",""),t[e]}};function Rm(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,aI),slots:t.slots,emit:t.emit,expose:e}}function ho(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Vg(LT(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Di)return Di[n](t)},has(e,n){return n in e||n in Di}})):t.proxy}function ql(t,e=!0){return ce(t)?t.displayName||t.name:t.name||e&&t.__name}function cI(t){return ce(t)&&"__vccOpts"in t}const Qt=(t,e)=>GT(t,e,Os);function $u(t,e,n){try{Ra(-1);const r=arguments.length;return r===2?De(e)&&!re(e)?Ir(e)?je(t,null,[e]):je(t,e):je(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ir(n)&&(n=[n]),je(t,e,n))}finally{Ra(1)}}function f1(){}function d1(t,e,n,r){const s=n[r];if(s&&lI(s,t))return s;const i=e();return i.memo=t.slice(),i.cacheIndex=r,n[r]=i}function lI(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let r=0;r<n.length;r++)if(St(n[r],e[r]))return!1;return Kr>0&&vt&&vt.push(t),!0}const uI="3.5.26",p1=qt,g1=JT,m1=fs,_1=Lg,hI={createComponentInstance:Im,setupComponent:Am,renderComponentRoot:na,setCurrentRenderingInstance:Gi,isVNode:Ir,normalizeVNode:Dt,getComponentPublicInstance:ho,ensureValidVNode:Fu,pushWarningContext:zT,popWarningContext:QT},y1=hI,E1=null,T1=null,v1=null;/**
* @vue/runtime-dom v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $l;const Kf=typeof window<"u"&&window.trustedTypes;if(Kf)try{$l=Kf.createPolicy("vue",{createHTML:t=>t})}catch{}const Sm=$l?t=>$l.createHTML(t):t=>t,fI="http://www.w3.org/2000/svg",dI="http://www.w3.org/1998/Math/MathML",Cn=typeof document<"u"?document:null,zf=Cn&&Cn.createElement("template"),pI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Cn.createElementNS(fI,t):e==="mathml"?Cn.createElementNS(dI,t):n?Cn.createElement(t,{is:n}):Cn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Cn.createTextNode(t),createComment:t=>Cn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Cn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{zf.innerHTML=Sm(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=zf.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},tr="transition",Ei="animation",xs=Symbol("_vtc"),Cm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Pm=ke({},Gg,Cm),gI=t=>(t.displayName="Transition",t.props=Pm,t),I1=gI((t,{slots:e})=>$u(iv,Nm(t),e)),Lr=(t,e=[])=>{re(t)?t.forEach(n=>n(...e)):t&&t(...e)},Qf=t=>t?re(t)?t.some(e=>e.length>1):t.length>1:!1;function Nm(t){const e={};for(const A in t)A in Cm||(e[A]=t[A]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:f=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:y=`${n}-leave-to`}=t,C=mI(s),P=C&&C[0],k=C&&C[1],{onBeforeEnter:L,onEnter:D,onEnterCancelled:R,onLeave:N,onLeaveCancelled:x,onBeforeAppear:U=L,onAppear:w=D,onAppearCancelled:E=R}=e,_=(A,T,le,Ee)=>{A._enterCancelled=Ee,sr(A,T?f:c),sr(A,T?u:o),le&&le()},v=(A,T)=>{A._isLeaving=!1,sr(A,d),sr(A,y),sr(A,g),T&&T()},b=A=>(T,le)=>{const Ee=A?w:D,ne=()=>_(T,A,le);Lr(Ee,[T,ne]),Jf(()=>{sr(T,A?l:i),hn(T,A?f:c),Qf(Ee)||Yf(T,r,P,ne)})};return ke(e,{onBeforeEnter(A){Lr(L,[A]),hn(A,i),hn(A,o)},onBeforeAppear(A){Lr(U,[A]),hn(A,l),hn(A,u)},onEnter:b(!1),onAppear:b(!0),onLeave(A,T){A._isLeaving=!0;const le=()=>v(A,T);hn(A,d),A._enterCancelled?(hn(A,g),Gl(A)):(Gl(A),hn(A,g)),Jf(()=>{A._isLeaving&&(sr(A,d),hn(A,y),Qf(N)||Yf(A,r,k,le))}),Lr(N,[A,le])},onEnterCancelled(A){_(A,!1,void 0,!0),Lr(R,[A])},onAppearCancelled(A){_(A,!0,void 0,!0),Lr(E,[A])},onLeaveCancelled(A){v(A),Lr(x,[A])}})}function mI(t){if(t==null)return null;if(De(t))return[cl(t.enter),cl(t.leave)];{const e=cl(t);return[e,e]}}function cl(t){return ga(t)}function hn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[xs]||(t[xs]=new Set)).add(e)}function sr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[xs];n&&(n.delete(e),n.size||(t[xs]=void 0))}function Jf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let _I=0;function Yf(t,e,n,r){const s=t._endId=++_I,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=Vm(t,e);if(!o)return r();const u=o+"end";let f=0;const d=()=>{t.removeEventListener(u,g),i()},g=y=>{y.target===t&&++f>=l&&d()};setTimeout(()=>{f<l&&d()},c+1),t.addEventListener(u,g)}function Vm(t,e){const n=window.getComputedStyle(t),r=C=>(n[C]||"").split(", "),s=r(`${tr}Delay`),i=r(`${tr}Duration`),o=Xf(s,i),c=r(`${Ei}Delay`),l=r(`${Ei}Duration`),u=Xf(c,l);let f=null,d=0,g=0;e===tr?o>0&&(f=tr,d=o,g=i.length):e===Ei?u>0&&(f=Ei,d=u,g=l.length):(d=Math.max(o,u),f=d>0?o>u?tr:Ei:null,g=f?f===tr?i.length:l.length:0);const y=f===tr&&/\b(?:transform|all)(?:,|$)/.test(r(`${tr}Property`).toString());return{type:f,timeout:d,propCount:g,hasTransform:y}}function Xf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Zf(n)+Zf(t[r])))}function Zf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Gl(t){return(t?t.ownerDocument:document).body.offsetHeight}function yI(t,e,n){const r=t[xs];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Pa=Symbol("_vod"),Dm=Symbol("_vsh"),EI={name:"show",beforeMount(t,{value:e},{transition:n}){t[Pa]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ti(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Ti(t,!0),r.enter(t)):r.leave(t,()=>{Ti(t,!1)}):Ti(t,e))},beforeUnmount(t,{value:e}){Ti(t,e)}};function Ti(t,e){t.style.display=e?t[Pa]:"none",t[Dm]=!e}function TI(){EI.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const km=Symbol("");function w1(t){const e=Ut();if(!e)return;const n=e.ut=(s=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(i=>Na(i,s))},r=()=>{const s=t(e.proxy);e.ce?Na(e.ce,s):Wl(e.subTree,s),n(s)};Jg(()=>{Ta(r)}),uo(()=>{As(r,qt,{flush:"post"});const s=new MutationObserver(r);s.observe(e.subTree.el.parentNode,{childList:!0}),xu(()=>s.disconnect())})}function Wl(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Wl(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)Na(t.el,e);else if(t.type===at)t.children.forEach(n=>Wl(n,e));else if(t.type===Ss){let{el:n,anchor:r}=t;for(;n&&(Na(n,e),n!==r);)n=n.nextSibling}}function Na(t,e){if(t.nodeType===1){const n=t.style;let r="";for(const s in e){const i=mT(e[s]);n.setProperty(`--${s}`,i),r+=`--${s}: ${i};`}n[km]=r}}const vI=/(?:^|;)\s*display\s*:/;function II(t,e,n){const r=t.style,s=Fe(n);let i=!1;if(n&&!s){if(e)if(Fe(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&sa(r,c,"")}else for(const o in e)n[o]==null&&sa(r,o,"");for(const o in n)o==="display"&&(i=!0),sa(r,o,n[o])}else if(s){if(e!==n){const o=r[km];o&&(n+=";"+o),r.cssText=n,i=vI.test(n)}}else e&&t.removeAttribute("style");Pa in t&&(t[Pa]=i?r.display:"",t[Dm]&&(r.display="none"))}const ed=/\s*!important$/;function sa(t,e,n){if(re(n))n.forEach(r=>sa(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=wI(t,e);ed.test(n)?t.setProperty(kt(r),n.replace(ed,""),"important"):t[r]=n}}const td=["Webkit","Moz","ms"],ll={};function wI(t,e){const n=ll[e];if(n)return n;let r=It(e);if(r!=="filter"&&r in t)return ll[e]=r;r=nc(r);for(let s=0;s<td.length;s++){const i=td[s]+r;if(i in t)return ll[e]=i}return e}const nd="http://www.w3.org/1999/xlink";function rd(t,e,n,r,s,i=dT(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(nd,e.slice(6,e.length)):t.setAttributeNS(nd,e,n):n==null||i&&!lg(n)?t.removeAttribute(e):t.setAttribute(e,i?"":nn(n)?String(n):n)}function sd(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Sm(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=lg(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Dn(t,e,n,r){t.addEventListener(e,n,r)}function AI(t,e,n,r){t.removeEventListener(e,n,r)}const id=Symbol("_vei");function bI(t,e,n,r,s=null){const i=t[id]||(t[id]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=RI(e);if(r){const u=i[e]=PI(r,s);Dn(t,c,u,l)}else o&&(AI(t,c,o,l),i[e]=void 0)}}const od=/(?:Once|Passive|Capture)$/;function RI(t){let e;if(od.test(t)){e={};let r;for(;r=t.match(od);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):kt(t.slice(2)),e]}let ul=0;const SI=Promise.resolve(),CI=()=>ul||(SI.then(()=>ul=0),ul=Date.now());function PI(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;sn(NI(r,n.value),e,5,[r])};return n.value=t,n.attached=CI(),n}function NI(t,e){if(re(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const ad=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,VI=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?yI(t,r,o):e==="style"?II(t,n,r):io(e)?Au(e)||bI(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):DI(t,e,r,o))?(sd(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&rd(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Fe(r))?sd(t,It(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),rd(t,e,r,o))};function DI(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&ad(e)&&ce(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ad(e)&&Fe(n)?!1:e in t}const cd={};function kI(t,e,n){let r=co(t,e);Za(r)&&(r=ke({},r,e));class s extends Gu{constructor(o){super(r,o,n)}}return s.def=r,s}const A1=(t,e)=>kI(t,e,JI),OI=typeof HTMLElement<"u"?HTMLElement:class{};class Gu extends OI{constructor(e,n={},r=zl){super(),this._def=e,this._props=n,this._createApp=r,this._isVueCE=!0,this._instance=null,this._app=null,this._nonce=this._def.nonce,this._connected=!1,this._resolved=!1,this._patching=!1,this._dirty=!1,this._numberProps=null,this._styleChildren=new WeakSet,this._ob=null,this.shadowRoot&&r!==zl?this._root=this.shadowRoot:e.shadowRoot!==!1?(this.attachShadow(ke({},e.shadowRootOptions,{mode:"open"})),this._root=this.shadowRoot):this._root=this}connectedCallback(){if(!this.isConnected)return;!this.shadowRoot&&!this._resolved&&this._parseSlots(),this._connected=!0;let e=this;for(;e=e&&(e.parentNode||e.host);)if(e instanceof Gu){this._parent=e;break}this._instance||(this._resolved?this._mount(this._def):e&&e._pendingResolve?this._pendingResolve=e._pendingResolve.then(()=>{this._pendingResolve=void 0,this._resolveDef()}):this._resolveDef())}_setParent(e=this._parent){e&&(this._instance.parent=e._instance,this._inheritParentContext(e))}_inheritParentContext(e=this._parent){e&&this._app&&Object.setPrototypeOf(this._app._context.provides,e._instance.provides)}disconnectedCallback(){this._connected=!1,pc(()=>{this._connected||(this._ob&&(this._ob.disconnect(),this._ob=null),this._app&&this._app.unmount(),this._instance&&(this._instance.ce=void 0),this._app=this._instance=null,this._teleportTargets&&(this._teleportTargets.clear(),this._teleportTargets=void 0))})}_processMutations(e){for(const n of e)this._setAttr(n.attributeName)}_resolveDef(){if(this._pendingResolve)return;for(let r=0;r<this.attributes.length;r++)this._setAttr(this.attributes[r].name);this._ob=new MutationObserver(this._processMutations.bind(this)),this._ob.observe(this,{attributes:!0});const e=(r,s=!1)=>{this._resolved=!0,this._pendingResolve=void 0;const{props:i,styles:o}=r;let c;if(i&&!re(i))for(const l in i){const u=i[l];(u===Number||u&&u.type===Number)&&(l in this._props&&(this._props[l]=ga(this._props[l])),(c||(c=Object.create(null)))[It(l)]=!0)}this._numberProps=c,this._resolveProps(r),this.shadowRoot&&this._applyStyles(o),this._mount(r)},n=this._def.__asyncLoader;n?this._pendingResolve=n().then(r=>{r.configureApp=this._def.configureApp,e(this._def=r,!0)}):e(this._def)}_mount(e){this._app=this._createApp(e),this._inheritParentContext(),e.configureApp&&e.configureApp(this._app),this._app._ceVNode=this._createVNode(),this._app.mount(this._root);const n=this._instance&&this._instance.exposed;if(n)for(const r in n)Se(this,r)||Object.defineProperty(this,r,{get:()=>Mn(n[r])})}_resolveProps(e){const{props:n}=e,r=re(n)?n:Object.keys(n||{});for(const s of Object.keys(this))s[0]!=="_"&&r.includes(s)&&this._setProp(s,this[s]);for(const s of r.map(It))Object.defineProperty(this,s,{get(){return this._getProp(s)},set(i){this._setProp(s,i,!0,!this._patching)}})}_setAttr(e){if(e.startsWith("data-v-"))return;const n=this.hasAttribute(e);let r=n?this.getAttribute(e):cd;const s=It(e);n&&this._numberProps&&this._numberProps[s]&&(r=ga(r)),this._setProp(s,r,!1,!0)}_getProp(e){return this._props[e]}_setProp(e,n,r=!0,s=!1){if(n!==this._props[e]&&(this._dirty=!0,n===cd?delete this._props[e]:(this._props[e]=n,e==="key"&&this._app&&(this._app._ceVNode.key=n)),s&&this._instance&&this._update(),r)){const i=this._ob;i&&(this._processMutations(i.takeRecords()),i.disconnect()),n===!0?this.setAttribute(kt(e),""):typeof n=="string"||typeof n=="number"?this.setAttribute(kt(e),n+""):n||this.removeAttribute(kt(e)),i&&i.observe(this,{attributes:!0})}}_update(){const e=this._createVNode();this._app&&(e.appContext=this._app._context),QI(e,this._root)}_createVNode(){const e={};this.shadowRoot||(e.onVnodeMounted=e.onVnodeUpdated=this._renderSlots.bind(this));const n=je(this._def,ke(e,this._props));return this._instance||(n.ce=r=>{this._instance=r,r.ce=this,r.isCE=!0;const s=(i,o)=>{this.dispatchEvent(new CustomEvent(i,Za(o[0])?ke({detail:o},o[0]):{detail:o}))};r.emit=(i,...o)=>{s(i,o),kt(i)!==i&&s(kt(i),o)},this._setParent()}),n}_applyStyles(e,n){if(!e)return;if(n){if(n===this._def||this._styleChildren.has(n))return;this._styleChildren.add(n)}const r=this._nonce;for(let s=e.length-1;s>=0;s--){const i=document.createElement("style");r&&i.setAttribute("nonce",r),i.textContent=e[s],this.shadowRoot.prepend(i)}}_parseSlots(){const e=this._slots={};let n;for(;n=this.firstChild;){const r=n.nodeType===1&&n.getAttribute("slot")||"default";(e[r]||(e[r]=[])).push(n),this.removeChild(n)}}_renderSlots(){const e=this._getSlots(),n=this._instance.type.__scopeId;for(let r=0;r<e.length;r++){const s=e[r],i=s.getAttribute("name")||"default",o=this._slots[i],c=s.parentNode;if(o)for(const l of o){if(n&&l.nodeType===1){const u=n+"-s",f=document.createTreeWalker(l,1);l.setAttribute(u,"");let d;for(;d=f.nextNode();)d.setAttribute(u,"")}c.insertBefore(l,s)}else for(;s.firstChild;)c.insertBefore(s.firstChild,s);c.removeChild(s)}}_getSlots(){const e=[this];this._teleportTargets&&e.push(...this._teleportTargets);const n=new Set;for(const r of e){const s=r.querySelectorAll("slot");for(let i=0;i<s.length;i++)n.add(s[i])}return Array.from(n)}_injectChildStyle(e){this._applyStyles(e.styles,e)}_beginPatch(){this._patching=!0,this._dirty=!1}_endPatch(){this._patching=!1,this._dirty&&this._instance&&this._update()}_removeChildStyle(e){}}function xI(t){const e=Ut(),n=e&&e.ce;return n||null}function b1(){const t=xI();return t&&t.shadowRoot}function R1(t="$style"){{const e=Ut();if(!e)return we;const n=e.type.__cssModules;if(!n)return we;const r=n[t];return r||we}}const Om=new WeakMap,xm=new WeakMap,Va=Symbol("_moveCb"),ld=Symbol("_enterCb"),MI=t=>(delete t.props.mode,t),LI=MI({name:"TransitionGroup",props:ke({},Pm,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Ut(),r=$g();let s,i;return ku(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!jI(s[0].el,n.vnode.el,o)){s=[];return}s.forEach(FI),s.forEach(UI);const c=s.filter(BI);Gl(n.vnode.el),c.forEach(l=>{const u=l.el,f=u.style;hn(u,o),f.transform=f.webkitTransform=f.transitionDuration="";const d=u[Va]=g=>{g&&g.target!==u||(!g||g.propertyName.endsWith("transform"))&&(u.removeEventListener("transitionend",d),u[Va]=null,sr(u,o))};u.addEventListener("transitionend",d)}),s=[]}),()=>{const o=be(t),c=Nm(o);let l=o.tag||at;if(s=[],i)for(let u=0;u<i.length;u++){const f=i[u];f.el&&f.el instanceof Element&&(s.push(f),vr(f,Wi(f,c,r,n)),Om.set(f,{left:f.el.offsetLeft,top:f.el.offsetTop}))}i=e.default?Vu(e.default()):[];for(let u=0;u<i.length;u++){const f=i[u];f.key!=null&&vr(f,Wi(f,c,r,n))}return je(l,null,i)}}}),S1=LI;function FI(t){const e=t.el;e[Va]&&e[Va](),e[ld]&&e[ld]()}function UI(t){xm.set(t,{left:t.el.offsetLeft,top:t.el.offsetTop})}function BI(t){const e=Om.get(t),n=xm.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function jI(t,e,n){const r=t.cloneNode(),s=t[xs];s&&s.forEach(c=>{c.split(/\s+/).forEach(l=>l&&r.classList.remove(l))}),n.split(/\s+/).forEach(c=>c&&r.classList.add(c)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=Vm(r);return i.removeChild(r),o}const wr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return re(e)?n=>Is(e,n):e};function HI(t){t.target.composing=!0}function ud(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const $t=Symbol("_assign");function hd(t,e,n){return e&&(t=t.trim()),n&&(t=rc(t)),t}const Kl={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[$t]=wr(s);const i=r||s.props&&s.props.type==="number";Dn(t,e?"change":"input",o=>{o.target.composing||t[$t](hd(t.value,n,i))}),(n||i)&&Dn(t,"change",()=>{t.value=hd(t.value,n,i)}),e||(Dn(t,"compositionstart",HI),Dn(t,"compositionend",ud),Dn(t,"change",ud))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[$t]=wr(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?rc(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},Mm={deep:!0,created(t,e,n){t[$t]=wr(n),Dn(t,"change",()=>{const r=t._modelValue,s=Ms(t),i=t.checked,o=t[$t];if(re(r)){const c=ac(r,s),l=c!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const u=[...r];u.splice(c,1),o(u)}}else if(es(r)){const c=new Set(r);i?c.add(s):c.delete(s),o(c)}else o(Fm(t,i))})},mounted:fd,beforeUpdate(t,e,n){t[$t]=wr(n),fd(t,e,n)}};function fd(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(re(e))s=ac(e,r.props.value)>-1;else if(es(e))s=e.has(r.props.value);else{if(e===n)return;s=Tr(e,Fm(t,!0))}t.checked!==s&&(t.checked=s)}const Lm={created(t,{value:e},n){t.checked=Tr(e,n.props.value),t[$t]=wr(n),Dn(t,"change",()=>{t[$t](Ms(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[$t]=wr(r),e!==n&&(t.checked=Tr(e,r.props.value))}},qI={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=es(e);Dn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?rc(Ms(o)):Ms(o));t[$t](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,pc(()=>{t._assigning=!1})}),t[$t]=wr(r)},mounted(t,{value:e}){dd(t,e)},beforeUpdate(t,e,n){t[$t]=wr(n)},updated(t,{value:e}){t._assigning||dd(t,e)}};function dd(t,e){const n=t.multiple,r=re(e);if(!(n&&!r&&!es(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],c=Ms(o);if(n)if(r){const l=typeof c;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(c)):o.selected=ac(e,c)>-1}else o.selected=e.has(c);else if(Tr(Ms(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ms(t){return"_value"in t?t._value:t.value}function Fm(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const $I={created(t,e,n){Wo(t,e,n,null,"created")},mounted(t,e,n){Wo(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){Wo(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){Wo(t,e,n,r,"updated")}};function Um(t,e){switch(t){case"SELECT":return qI;case"TEXTAREA":return Kl;default:switch(e){case"checkbox":return Mm;case"radio":return Lm;default:return Kl}}}function Wo(t,e,n,r,s){const o=Um(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}function GI(){Kl.getSSRProps=({value:t})=>({value:t}),Lm.getSSRProps=({value:t},e)=>{if(e.props&&Tr(e.props.value,t))return{checked:!0}},Mm.getSSRProps=({value:t},e)=>{if(re(t)){if(e.props&&ac(t,e.props.value)>-1)return{checked:!0}}else if(es(t)){if(e.props&&t.has(e.props.value))return{checked:!0}}else if(t)return{checked:!0}},$I.getSSRProps=(t,e)=>{if(typeof e.type!="string")return;const n=Um(e.type.toUpperCase(),e.props&&e.props.type);if(n.getSSRProps)return n.getSSRProps(t,e)}}const WI=["ctrl","shift","alt","meta"],KI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>WI.some(n=>t[`${n}Key`]&&!e.includes(n))},C1=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=KI[e[o]];if(c&&c(s,e))return}return t(s,...i)})},zI={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},P1=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=kt(s.key);if(e.some(o=>o===i||zI[o]===i))return t(s)})},Bm=ke({patchProp:VI},pI);let Oi,pd=!1;function jm(){return Oi||(Oi=Gv(Bm))}function Hm(){return Oi=pd?Oi:Wv(Bm),pd=!0,Oi}const QI=(...t)=>{jm().render(...t)},N1=(...t)=>{Hm().hydrate(...t)},zl=(...t)=>{const e=jm().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=$m(r);if(!s)return;const i=e._component;!ce(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,qm(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},JI=(...t)=>{const e=Hm().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=$m(r);if(s)return n(s,!0,qm(s))},e};function qm(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function $m(t){return Fe(t)?document.querySelector(t):t}let gd=!1;const V1=()=>{gd||(gd=!0,GI(),TI())},YI="modulepreload",XI=function(t){return"/lumina-slides/"+t},md={},Kt=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(l=>{if(l=XI(l),l in md)return;md[l]=!0;const u=l.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":YI,u||(d.as="script"),d.crossOrigin="",d.href=l,c&&d.setAttribute("nonce",c),document.head.appendChild(d),u)return new Promise((g,y)=>{d.addEventListener("load",g),d.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})},ZI={class:"relative w-full min-h-screen bg-[#030303] text-white selection:bg-blue-500/30 overflow-x-hidden"},ew=co({__name:"App",setup(t){return uo(async()=>{const{useAuth:e}=await Kt(async()=>{const{useAuth:r}=await import("./useAuth-faJPvffk.js");return{useAuth:r}},[]),{initAuthListener:n}=e();n()}),(e,n)=>{const r=Av("router-view");return Qi(),eI("div",ZI,[je(r)])}}});/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw=()=>{};var _d={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},nw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Wm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,f=i>>2,d=(i&3)<<4|c>>4;let g=(c&15)<<2|u>>6,y=u&63;l||(y=64,o||(g=64)),r.push(n[f],n[d],n[g],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Gm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):nw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||d==null)throw new rw;const g=i<<2|c>>4;if(r.push(g),u!==64){const y=c<<4&240|u>>2;if(r.push(y),d!==64){const C=u<<6&192|d;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class rw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sw=function(t){const e=Gm(t);return Wm.encodeByteArray(e,!0)},Da=function(t){return sw(t).replace(/\./g,"")},Km=function(t){try{return Wm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow=()=>iw().__FIREBASE_DEFAULTS__,aw=()=>{if(typeof process>"u"||typeof _d>"u")return;const t=_d.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},cw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Km(t[1]);return e&&JSON.parse(e)},Ec=()=>{try{return tw()||ow()||aw()||cw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},zm=t=>{var e,n;return(n=(e=Ec())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},lw=t=>{const e=zm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Qm=()=>{var t;return(t=Ec())==null?void 0:t.config},Jm=t=>{var e;return(e=Ec())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ym(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Da(JSON.stringify(n)),Da(JSON.stringify(o)),""].join(".")}const xi={};function fw(){const t={prod:[],emulator:[]};for(const e of Object.keys(xi))xi[e]?t.emulator.push(e):t.prod.push(e);return t}function dw(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let yd=!1;function Xm(t,e){if(typeof window>"u"||typeof document>"u"||!Qs(window.location.host)||xi[t]===e||xi[t]||yd)return;xi[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=fw().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function c(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function l(g,y){g.setAttribute("width","24"),g.setAttribute("id",y),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function u(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{yd=!0,o()},g}function f(g,y){g.setAttribute("id",y),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function d(){const g=dw(r),y=n("text"),C=document.getElementById(y)||document.createElement("span"),P=n("learnmore"),k=document.getElementById(P)||document.createElement("a"),L=n("preprendIcon"),D=document.getElementById(L)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const R=g.element;c(R),f(k,P);const N=u();l(D,L),R.append(D,C,k,N),document.body.appendChild(R)}i?(C.innerText="Preview backend disconnected.",D.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(D.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",y)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wt())}function gw(){var e;const t=(e=Ec())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function mw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function _w(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function yw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ew(){const t=wt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Tw(){return!gw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function vw(){try{return typeof indexedDB=="object"}catch{return!1}}function Iw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ww="FirebaseError";class zn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ww,Object.setPrototypeOf(this,zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fo.prototype.create)}}class fo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Aw(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new zn(s,c,r)}}function Aw(t,e){return t.replace(bw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const bw=/\{\$([^}]+)}/g;function Rw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Qr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ed(i)&&Ed(o)){if(!Qr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ed(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Sw(t,e){const n=new Cw(t,e);return n.subscribe.bind(n)}class Cw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Pw(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=hl),s.error===void 0&&(s.error=hl),s.complete===void 0&&(s.complete=hl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Pw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function hl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(t){return t&&t._delegate?t._delegate:t}class Jr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new uw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Dw(e))try{this.getOrInitializeService({instanceIdentifier:Fr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Fr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fr){return this.instances.has(e)}getOptions(e=Fr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Vw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Fr){return this.component?this.component.multipleInstances?e:Fr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vw(t){return t===Fr?void 0:t}function Dw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Nw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Te||(Te={}));const Ow={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},xw=Te.INFO,Mw={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},Lw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Mw[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wu{constructor(e){this.name=e,this._logLevel=xw,this._logHandler=Lw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ow[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}const Fw=(t,e)=>e.some(n=>t instanceof n);let Td,vd;function Uw(){return Td||(Td=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bw(){return vd||(vd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zm=new WeakMap,Ql=new WeakMap,e_=new WeakMap,fl=new WeakMap,Ku=new WeakMap;function jw(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(gr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Zm.set(n,t)}).catch(()=>{}),Ku.set(e,t),e}function Hw(t){if(Ql.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ql.set(t,e)}let Jl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ql.get(t);if(e==="objectStoreNames")return t.objectStoreNames||e_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function qw(t){Jl=t(Jl)}function $w(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(dl(this),e,...n);return e_.set(r,e.sort?e.sort():[e]),gr(r)}:Bw().includes(t)?function(...e){return t.apply(dl(this),e),gr(Zm.get(this))}:function(...e){return gr(t.apply(dl(this),e))}}function Gw(t){return typeof t=="function"?$w(t):(t instanceof IDBTransaction&&Hw(t),Fw(t,Uw())?new Proxy(t,Jl):t)}function gr(t){if(t instanceof IDBRequest)return jw(t);if(fl.has(t))return fl.get(t);const e=Gw(t);return e!==t&&(fl.set(t,e),Ku.set(e,t)),e}const dl=t=>Ku.get(t);function Ww(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=gr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(gr(o.result),l.oldVersion,l.newVersion,gr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const Kw=["get","getKey","getAll","getAllKeys","count"],zw=["put","add","delete","clear"],pl=new Map;function Id(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(pl.get(e))return pl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=zw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Kw.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return pl.set(e,i),i}qw(t=>({...t,get:(e,n,r)=>Id(e,n)||t.get(e,n,r),has:(e,n)=>!!Id(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Jw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Jw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Yl="@firebase/app",wd="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=new Wu("@firebase/app"),Yw="@firebase/app-compat",Xw="@firebase/analytics-compat",Zw="@firebase/analytics",eA="@firebase/app-check-compat",tA="@firebase/app-check",nA="@firebase/auth",rA="@firebase/auth-compat",sA="@firebase/database",iA="@firebase/data-connect",oA="@firebase/database-compat",aA="@firebase/functions",cA="@firebase/functions-compat",lA="@firebase/installations",uA="@firebase/installations-compat",hA="@firebase/messaging",fA="@firebase/messaging-compat",dA="@firebase/performance",pA="@firebase/performance-compat",gA="@firebase/remote-config",mA="@firebase/remote-config-compat",_A="@firebase/storage",yA="@firebase/storage-compat",EA="@firebase/firestore",TA="@firebase/ai",vA="@firebase/firestore-compat",IA="firebase",wA="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl="[DEFAULT]",AA={[Yl]:"fire-core",[Yw]:"fire-core-compat",[Zw]:"fire-analytics",[Xw]:"fire-analytics-compat",[tA]:"fire-app-check",[eA]:"fire-app-check-compat",[nA]:"fire-auth",[rA]:"fire-auth-compat",[sA]:"fire-rtdb",[iA]:"fire-data-connect",[oA]:"fire-rtdb-compat",[aA]:"fire-fn",[cA]:"fire-fn-compat",[lA]:"fire-iid",[uA]:"fire-iid-compat",[hA]:"fire-fcm",[fA]:"fire-fcm-compat",[dA]:"fire-perf",[pA]:"fire-perf-compat",[gA]:"fire-rc",[mA]:"fire-rc-compat",[_A]:"fire-gcs",[yA]:"fire-gcs-compat",[EA]:"fire-fst",[vA]:"fire-fst-compat",[TA]:"fire-vertex","fire-js":"fire-js",[IA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka=new Map,bA=new Map,Zl=new Map;function Ad(t,e){try{t.container.addComponent(e)}catch(n){qn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ls(t){const e=t.name;if(Zl.has(e))return qn.debug(`There were multiple attempts to register component ${e}.`),!1;Zl.set(e,t);for(const n of ka.values())Ad(n,t);for(const n of bA.values())Ad(n,t);return!0}function zu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Jt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mr=new fo("app","Firebase",RA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Jr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js=wA;function t_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Xl,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw mr.create("bad-app-name",{appName:String(s)});if(n||(n=Qm()),!n)throw mr.create("no-options");const i=ka.get(s);if(i){if(Qr(n,i.options)&&Qr(r,i.config))return i;throw mr.create("duplicate-app",{appName:s})}const o=new kw(s);for(const l of Zl.values())o.addComponent(l);const c=new SA(n,r,o);return ka.set(s,c),c}function n_(t=Xl){const e=ka.get(t);if(!e&&t===Xl&&Qm())return t_();if(!e)throw mr.create("no-app",{appName:t});return e}function _r(t,e,n){let r=AA[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qn.warn(o.join(" "));return}Ls(new Jr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA="firebase-heartbeat-database",PA=1,Ji="firebase-heartbeat-store";let gl=null;function r_(){return gl||(gl=Ww(CA,PA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ji)}catch(n){console.warn(n)}}}}).catch(t=>{throw mr.create("idb-open",{originalErrorMessage:t.message})})),gl}async function NA(t){try{const n=(await r_()).transaction(Ji),r=await n.objectStore(Ji).get(s_(t));return await n.done,r}catch(e){if(e instanceof zn)qn.warn(e.message);else{const n=mr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qn.warn(n.message)}}}async function bd(t,e){try{const r=(await r_()).transaction(Ji,"readwrite");await r.objectStore(Ji).put(e,s_(t)),await r.done}catch(n){if(n instanceof zn)qn.warn(n.message);else{const r=mr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qn.warn(r.message)}}}function s_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA=1024,DA=30;class kA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Rd();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>DA){const o=MA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){qn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Rd(),{heartbeatsToSend:r,unsentEntries:s}=OA(this._heartbeatsCache.heartbeats),i=Da(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return qn.warn(n),""}}}function Rd(){return new Date().toISOString().substring(0,10)}function OA(t,e=VA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Sd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Sd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class xA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vw()?Iw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await NA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return bd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return bd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Sd(t){return Da(JSON.stringify({version:2,heartbeats:t})).length}function MA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LA(t){Ls(new Jr("platform-logger",e=>new Qw(e),"PRIVATE")),Ls(new Jr("heartbeat",e=>new kA(e),"PRIVATE")),_r(Yl,wd,t),_r(Yl,wd,"esm2020"),_r("fire-js","")}LA("");var FA="firebase",UA="12.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_r(FA,UA,"app");var Cd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yr,i_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,E){function _(){}_.prototype=E.prototype,w.F=E.prototype,w.prototype=new _,w.prototype.constructor=w,w.D=function(v,b,A){for(var T=Array(arguments.length-2),le=2;le<arguments.length;le++)T[le-2]=arguments[le];return E.prototype[b].apply(v,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,E,_){_||(_=0);const v=Array(16);if(typeof E=="string")for(var b=0;b<16;++b)v[b]=E.charCodeAt(_++)|E.charCodeAt(_++)<<8|E.charCodeAt(_++)<<16|E.charCodeAt(_++)<<24;else for(b=0;b<16;++b)v[b]=E[_++]|E[_++]<<8|E[_++]<<16|E[_++]<<24;E=w.g[0],_=w.g[1],b=w.g[2];let A=w.g[3],T;T=E+(A^_&(b^A))+v[0]+3614090360&4294967295,E=_+(T<<7&4294967295|T>>>25),T=A+(b^E&(_^b))+v[1]+3905402710&4294967295,A=E+(T<<12&4294967295|T>>>20),T=b+(_^A&(E^_))+v[2]+606105819&4294967295,b=A+(T<<17&4294967295|T>>>15),T=_+(E^b&(A^E))+v[3]+3250441966&4294967295,_=b+(T<<22&4294967295|T>>>10),T=E+(A^_&(b^A))+v[4]+4118548399&4294967295,E=_+(T<<7&4294967295|T>>>25),T=A+(b^E&(_^b))+v[5]+1200080426&4294967295,A=E+(T<<12&4294967295|T>>>20),T=b+(_^A&(E^_))+v[6]+2821735955&4294967295,b=A+(T<<17&4294967295|T>>>15),T=_+(E^b&(A^E))+v[7]+4249261313&4294967295,_=b+(T<<22&4294967295|T>>>10),T=E+(A^_&(b^A))+v[8]+1770035416&4294967295,E=_+(T<<7&4294967295|T>>>25),T=A+(b^E&(_^b))+v[9]+2336552879&4294967295,A=E+(T<<12&4294967295|T>>>20),T=b+(_^A&(E^_))+v[10]+4294925233&4294967295,b=A+(T<<17&4294967295|T>>>15),T=_+(E^b&(A^E))+v[11]+2304563134&4294967295,_=b+(T<<22&4294967295|T>>>10),T=E+(A^_&(b^A))+v[12]+1804603682&4294967295,E=_+(T<<7&4294967295|T>>>25),T=A+(b^E&(_^b))+v[13]+4254626195&4294967295,A=E+(T<<12&4294967295|T>>>20),T=b+(_^A&(E^_))+v[14]+2792965006&4294967295,b=A+(T<<17&4294967295|T>>>15),T=_+(E^b&(A^E))+v[15]+1236535329&4294967295,_=b+(T<<22&4294967295|T>>>10),T=E+(b^A&(_^b))+v[1]+4129170786&4294967295,E=_+(T<<5&4294967295|T>>>27),T=A+(_^b&(E^_))+v[6]+3225465664&4294967295,A=E+(T<<9&4294967295|T>>>23),T=b+(E^_&(A^E))+v[11]+643717713&4294967295,b=A+(T<<14&4294967295|T>>>18),T=_+(A^E&(b^A))+v[0]+3921069994&4294967295,_=b+(T<<20&4294967295|T>>>12),T=E+(b^A&(_^b))+v[5]+3593408605&4294967295,E=_+(T<<5&4294967295|T>>>27),T=A+(_^b&(E^_))+v[10]+38016083&4294967295,A=E+(T<<9&4294967295|T>>>23),T=b+(E^_&(A^E))+v[15]+3634488961&4294967295,b=A+(T<<14&4294967295|T>>>18),T=_+(A^E&(b^A))+v[4]+3889429448&4294967295,_=b+(T<<20&4294967295|T>>>12),T=E+(b^A&(_^b))+v[9]+568446438&4294967295,E=_+(T<<5&4294967295|T>>>27),T=A+(_^b&(E^_))+v[14]+3275163606&4294967295,A=E+(T<<9&4294967295|T>>>23),T=b+(E^_&(A^E))+v[3]+4107603335&4294967295,b=A+(T<<14&4294967295|T>>>18),T=_+(A^E&(b^A))+v[8]+1163531501&4294967295,_=b+(T<<20&4294967295|T>>>12),T=E+(b^A&(_^b))+v[13]+2850285829&4294967295,E=_+(T<<5&4294967295|T>>>27),T=A+(_^b&(E^_))+v[2]+4243563512&4294967295,A=E+(T<<9&4294967295|T>>>23),T=b+(E^_&(A^E))+v[7]+1735328473&4294967295,b=A+(T<<14&4294967295|T>>>18),T=_+(A^E&(b^A))+v[12]+2368359562&4294967295,_=b+(T<<20&4294967295|T>>>12),T=E+(_^b^A)+v[5]+4294588738&4294967295,E=_+(T<<4&4294967295|T>>>28),T=A+(E^_^b)+v[8]+2272392833&4294967295,A=E+(T<<11&4294967295|T>>>21),T=b+(A^E^_)+v[11]+1839030562&4294967295,b=A+(T<<16&4294967295|T>>>16),T=_+(b^A^E)+v[14]+4259657740&4294967295,_=b+(T<<23&4294967295|T>>>9),T=E+(_^b^A)+v[1]+2763975236&4294967295,E=_+(T<<4&4294967295|T>>>28),T=A+(E^_^b)+v[4]+1272893353&4294967295,A=E+(T<<11&4294967295|T>>>21),T=b+(A^E^_)+v[7]+4139469664&4294967295,b=A+(T<<16&4294967295|T>>>16),T=_+(b^A^E)+v[10]+3200236656&4294967295,_=b+(T<<23&4294967295|T>>>9),T=E+(_^b^A)+v[13]+681279174&4294967295,E=_+(T<<4&4294967295|T>>>28),T=A+(E^_^b)+v[0]+3936430074&4294967295,A=E+(T<<11&4294967295|T>>>21),T=b+(A^E^_)+v[3]+3572445317&4294967295,b=A+(T<<16&4294967295|T>>>16),T=_+(b^A^E)+v[6]+76029189&4294967295,_=b+(T<<23&4294967295|T>>>9),T=E+(_^b^A)+v[9]+3654602809&4294967295,E=_+(T<<4&4294967295|T>>>28),T=A+(E^_^b)+v[12]+3873151461&4294967295,A=E+(T<<11&4294967295|T>>>21),T=b+(A^E^_)+v[15]+530742520&4294967295,b=A+(T<<16&4294967295|T>>>16),T=_+(b^A^E)+v[2]+3299628645&4294967295,_=b+(T<<23&4294967295|T>>>9),T=E+(b^(_|~A))+v[0]+4096336452&4294967295,E=_+(T<<6&4294967295|T>>>26),T=A+(_^(E|~b))+v[7]+1126891415&4294967295,A=E+(T<<10&4294967295|T>>>22),T=b+(E^(A|~_))+v[14]+2878612391&4294967295,b=A+(T<<15&4294967295|T>>>17),T=_+(A^(b|~E))+v[5]+4237533241&4294967295,_=b+(T<<21&4294967295|T>>>11),T=E+(b^(_|~A))+v[12]+1700485571&4294967295,E=_+(T<<6&4294967295|T>>>26),T=A+(_^(E|~b))+v[3]+2399980690&4294967295,A=E+(T<<10&4294967295|T>>>22),T=b+(E^(A|~_))+v[10]+4293915773&4294967295,b=A+(T<<15&4294967295|T>>>17),T=_+(A^(b|~E))+v[1]+2240044497&4294967295,_=b+(T<<21&4294967295|T>>>11),T=E+(b^(_|~A))+v[8]+1873313359&4294967295,E=_+(T<<6&4294967295|T>>>26),T=A+(_^(E|~b))+v[15]+4264355552&4294967295,A=E+(T<<10&4294967295|T>>>22),T=b+(E^(A|~_))+v[6]+2734768916&4294967295,b=A+(T<<15&4294967295|T>>>17),T=_+(A^(b|~E))+v[13]+1309151649&4294967295,_=b+(T<<21&4294967295|T>>>11),T=E+(b^(_|~A))+v[4]+4149444226&4294967295,E=_+(T<<6&4294967295|T>>>26),T=A+(_^(E|~b))+v[11]+3174756917&4294967295,A=E+(T<<10&4294967295|T>>>22),T=b+(E^(A|~_))+v[2]+718787259&4294967295,b=A+(T<<15&4294967295|T>>>17),T=_+(A^(b|~E))+v[9]+3951481745&4294967295,w.g[0]=w.g[0]+E&4294967295,w.g[1]=w.g[1]+(b+(T<<21&4294967295|T>>>11))&4294967295,w.g[2]=w.g[2]+b&4294967295,w.g[3]=w.g[3]+A&4294967295}r.prototype.v=function(w,E){E===void 0&&(E=w.length);const _=E-this.blockSize,v=this.C;let b=this.h,A=0;for(;A<E;){if(b==0)for(;A<=_;)s(this,w,A),A+=this.blockSize;if(typeof w=="string"){for(;A<E;)if(v[b++]=w.charCodeAt(A++),b==this.blockSize){s(this,v),b=0;break}}else for(;A<E;)if(v[b++]=w[A++],b==this.blockSize){s(this,v),b=0;break}}this.h=b,this.o+=E},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var E=1;E<w.length-8;++E)w[E]=0;E=this.o*8;for(var _=w.length-8;_<w.length;++_)w[_]=E&255,E/=256;for(this.v(w),w=Array(16),E=0,_=0;_<4;++_)for(let v=0;v<32;v+=8)w[E++]=this.g[_]>>>v&255;return w};function i(w,E){var _=c;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=E(w)}function o(w,E){this.h=E;const _=[];let v=!0;for(let b=w.length-1;b>=0;b--){const A=w[b]|0;v&&A==E||(_[b]=A,v=!1)}this.g=_}var c={};function l(w){return-128<=w&&w<128?i(w,function(E){return new o([E|0],E<0?-1:0)}):new o([w|0],w<0?-1:0)}function u(w){if(isNaN(w)||!isFinite(w))return d;if(w<0)return k(u(-w));const E=[];let _=1;for(let v=0;w>=_;v++)E[v]=w/_|0,_*=4294967296;return new o(E,0)}function f(w,E){if(w.length==0)throw Error("number format error: empty string");if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(w.charAt(0)=="-")return k(f(w.substring(1),E));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=u(Math.pow(E,8));let v=d;for(let A=0;A<w.length;A+=8){var b=Math.min(8,w.length-A);const T=parseInt(w.substring(A,A+b),E);b<8?(b=u(Math.pow(E,b)),v=v.j(b).add(u(T))):(v=v.j(_),v=v.add(u(T)))}return v}var d=l(0),g=l(1),y=l(16777216);t=o.prototype,t.m=function(){if(P(this))return-k(this).m();let w=0,E=1;for(let _=0;_<this.g.length;_++){const v=this.i(_);w+=(v>=0?v:4294967296+v)*E,E*=4294967296}return w},t.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(C(this))return"0";if(P(this))return"-"+k(this).toString(w);const E=u(Math.pow(w,6));var _=this;let v="";for(;;){const b=N(_,E).g;_=L(_,b.j(E));let A=((_.g.length>0?_.g[0]:_.h)>>>0).toString(w);if(_=b,C(_))return A+v;for(;A.length<6;)A="0"+A;v=A+v}},t.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function C(w){if(w.h!=0)return!1;for(let E=0;E<w.g.length;E++)if(w.g[E]!=0)return!1;return!0}function P(w){return w.h==-1}t.l=function(w){return w=L(this,w),P(w)?-1:C(w)?0:1};function k(w){const E=w.g.length,_=[];for(let v=0;v<E;v++)_[v]=~w.g[v];return new o(_,~w.h).add(g)}t.abs=function(){return P(this)?k(this):this},t.add=function(w){const E=Math.max(this.g.length,w.g.length),_=[];let v=0;for(let b=0;b<=E;b++){let A=v+(this.i(b)&65535)+(w.i(b)&65535),T=(A>>>16)+(this.i(b)>>>16)+(w.i(b)>>>16);v=T>>>16,A&=65535,T&=65535,_[b]=T<<16|A}return new o(_,_[_.length-1]&-2147483648?-1:0)};function L(w,E){return w.add(k(E))}t.j=function(w){if(C(this)||C(w))return d;if(P(this))return P(w)?k(this).j(k(w)):k(k(this).j(w));if(P(w))return k(this.j(k(w)));if(this.l(y)<0&&w.l(y)<0)return u(this.m()*w.m());const E=this.g.length+w.g.length,_=[];for(var v=0;v<2*E;v++)_[v]=0;for(v=0;v<this.g.length;v++)for(let b=0;b<w.g.length;b++){const A=this.i(v)>>>16,T=this.i(v)&65535,le=w.i(b)>>>16,Ee=w.i(b)&65535;_[2*v+2*b]+=T*Ee,D(_,2*v+2*b),_[2*v+2*b+1]+=A*Ee,D(_,2*v+2*b+1),_[2*v+2*b+1]+=T*le,D(_,2*v+2*b+1),_[2*v+2*b+2]+=A*le,D(_,2*v+2*b+2)}for(w=0;w<E;w++)_[w]=_[2*w+1]<<16|_[2*w];for(w=E;w<2*E;w++)_[w]=0;return new o(_,0)};function D(w,E){for(;(w[E]&65535)!=w[E];)w[E+1]+=w[E]>>>16,w[E]&=65535,E++}function R(w,E){this.g=w,this.h=E}function N(w,E){if(C(E))throw Error("division by zero");if(C(w))return new R(d,d);if(P(w))return E=N(k(w),E),new R(k(E.g),k(E.h));if(P(E))return E=N(w,k(E)),new R(k(E.g),E.h);if(w.g.length>30){if(P(w)||P(E))throw Error("slowDivide_ only works with positive integers.");for(var _=g,v=E;v.l(w)<=0;)_=x(_),v=x(v);var b=U(_,1),A=U(v,1);for(v=U(v,2),_=U(_,2);!C(v);){var T=A.add(v);T.l(w)<=0&&(b=b.add(_),A=T),v=U(v,1),_=U(_,1)}return E=L(w,b.j(E)),new R(b,E)}for(b=d;w.l(E)>=0;){for(_=Math.max(1,Math.floor(w.m()/E.m())),v=Math.ceil(Math.log(_)/Math.LN2),v=v<=48?1:Math.pow(2,v-48),A=u(_),T=A.j(E);P(T)||T.l(w)>0;)_-=v,A=u(_),T=A.j(E);C(A)&&(A=g),b=b.add(A),w=L(w,T)}return new R(b,w)}t.B=function(w){return N(this,w).h},t.and=function(w){const E=Math.max(this.g.length,w.g.length),_=[];for(let v=0;v<E;v++)_[v]=this.i(v)&w.i(v);return new o(_,this.h&w.h)},t.or=function(w){const E=Math.max(this.g.length,w.g.length),_=[];for(let v=0;v<E;v++)_[v]=this.i(v)|w.i(v);return new o(_,this.h|w.h)},t.xor=function(w){const E=Math.max(this.g.length,w.g.length),_=[];for(let v=0;v<E;v++)_[v]=this.i(v)^w.i(v);return new o(_,this.h^w.h)};function x(w){const E=w.g.length+1,_=[];for(let v=0;v<E;v++)_[v]=w.i(v)<<1|w.i(v-1)>>>31;return new o(_,w.h)}function U(w,E){const _=E>>5;E%=32;const v=w.g.length-_,b=[];for(let A=0;A<v;A++)b[A]=E>0?w.i(A+_)>>>E|w.i(A+_+1)<<32-E:w.i(A+_);return new o(b,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,i_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,yr=o}).apply(typeof Cd<"u"?Cd:typeof self<"u"?self:typeof window<"u"?window:{});var Ko=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var o_,Ai,a_,ia,eu,c_,l_,u_;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ko=="object"&&Ko];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var p=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var V=a[m];if(!(V in p))break e;p=p[V]}a=a[a.length-1],m=p[a],h=h(m),h!=m&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var p=[],m;for(m in h)Object.prototype.hasOwnProperty.call(h,m)&&p.push([m,h[m]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function l(a,h,p){return a.call.apply(a.bind,arguments)}function u(a,h,p){return u=l,u.apply(null,arguments)}function f(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var m=p.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function d(a,h){function p(){}p.prototype=h.prototype,a.Z=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(m,V,M){for(var Q=Array(arguments.length-2),me=2;me<arguments.length;me++)Q[me-2]=arguments[me];return h.prototype[V].apply(m,Q)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function y(a){const h=a.length;if(h>0){const p=Array(h);for(let m=0;m<h;m++)p[m]=a[m];return p}return[]}function C(a,h){for(let m=1;m<arguments.length;m++){const V=arguments[m];var p=typeof V;if(p=p!="object"?p:V?Array.isArray(V)?"array":p:"null",p=="array"||p=="object"&&typeof V.length=="number"){p=a.length||0;const M=V.length||0;a.length=p+M;for(let Q=0;Q<M;Q++)a[p+Q]=V[Q]}else a.push(V)}}class P{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function k(a){o.setTimeout(()=>{throw a},0)}function L(){var a=w;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class D{constructor(){this.h=this.g=null}add(h,p){const m=R.get();m.set(h,p),this.h?this.h.next=m:this.g=m,this.h=m}}var R=new P(()=>new N,a=>a.reset());class N{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let x,U=!1,w=new D,E=()=>{const a=Promise.resolve(void 0);x=()=>{a.then(_)}};function _(){for(var a;a=L();){try{a.h.call(a.g)}catch(p){k(p)}var h=R;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}U=!1}function v(){this.u=this.u,this.C=this.C}v.prototype.u=!1,v.prototype.dispose=function(){this.u||(this.u=!0,this.N())},v.prototype[Symbol.dispose]=function(){this.dispose()},v.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function b(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}b.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,h),o.removeEventListener("test",p,h)}catch{}return a}();function T(a){return/^[\s\xa0]*$/.test(a)}function le(a,h){b.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}d(le,b),le.prototype.init=function(a,h){const p=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&le.Z.h.call(this)},le.prototype.h=function(){le.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ee="closure_listenable_"+(Math.random()*1e6|0),ne=0;function he(a,h,p,m,V){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!m,this.ha=V,this.key=++ne,this.da=this.fa=!1}function Z(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ce(a,h,p){for(const m in a)h.call(p,a[m],m,a)}function cn(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function xt(a){const h={};for(const p in a)h[p]=a[p];return h}const ct="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function An(a,h){let p,m;for(let V=1;V<arguments.length;V++){m=arguments[V];for(p in m)a[p]=m[p];for(let M=0;M<ct.length;M++)p=ct[M],Object.prototype.hasOwnProperty.call(m,p)&&(a[p]=m[p])}}function Gt(a){this.src=a,this.g={},this.h=0}Gt.prototype.add=function(a,h,p,m,V){const M=a.toString();a=this.g[M],a||(a=this.g[M]=[],this.h++);const Q=pt(a,h,m,V);return Q>-1?(h=a[Q],p||(h.fa=!1)):(h=new he(h,this.src,M,!!m,V),h.fa=p,a.push(h)),h};function Wt(a,h){const p=h.type;if(p in a.g){var m=a.g[p],V=Array.prototype.indexOf.call(m,h,void 0),M;(M=V>=0)&&Array.prototype.splice.call(m,V,1),M&&(Z(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function pt(a,h,p,m){for(let V=0;V<a.length;++V){const M=a[V];if(!M.da&&M.listener==h&&M.capture==!!p&&M.ha==m)return V}return-1}var B="closure_lm_"+(Math.random()*1e6|0),ee={};function J(a,h,p,m,V){if(Array.isArray(h)){for(let M=0;M<h.length;M++)J(a,h[M],p,m,V);return null}return p=$(p),a&&a[Ee]?a.J(h,p,c(m)?!!m.capture:!1,V):ie(a,h,p,!1,m,V)}function ie(a,h,p,m,V,M){if(!h)throw Error("Invalid event type");const Q=c(V)?!!V.capture:!!V;let me=q(a);if(me||(a[B]=me=new Gt(a)),p=me.add(h,p,m,Q,M),p.proxy)return p;if(m=_e(),p.proxy=m,m.src=a,m.listener=p,a.addEventListener)A||(V=Q),V===void 0&&(V=!1),a.addEventListener(h.toString(),m,V);else if(a.attachEvent)a.attachEvent(S(h.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return p}function _e(){function a(p){return h.call(a.src,a.listener,p)}const h=O;return a}function Oe(a,h,p,m,V){if(Array.isArray(h))for(var M=0;M<h.length;M++)Oe(a,h[M],p,m,V);else m=c(m)?!!m.capture:!!m,p=$(p),a&&a[Ee]?(a=a.i,M=String(h).toString(),M in a.g&&(h=a.g[M],p=pt(h,p,m,V),p>-1&&(Z(h[p]),Array.prototype.splice.call(h,p,1),h.length==0&&(delete a.g[M],a.h--)))):a&&(a=q(a))&&(h=a.g[h.toString()],a=-1,h&&(a=pt(h,p,m,V)),(p=a>-1?h[a]:null)&&I(p))}function I(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Ee])Wt(h.i,a);else{var p=a.type,m=a.proxy;h.removeEventListener?h.removeEventListener(p,m,a.capture):h.detachEvent?h.detachEvent(S(p),m):h.addListener&&h.removeListener&&h.removeListener(m),(p=q(h))?(Wt(p,a),p.h==0&&(p.src=null,h[B]=null)):Z(a)}}}function S(a){return a in ee?ee[a]:ee[a]="on"+a}function O(a,h){if(a.da)a=!0;else{h=new le(h,this);const p=a.listener,m=a.ha||a.src;a.fa&&I(a),a=p.call(m,h)}return a}function q(a){return a=a[B],a instanceof Gt?a:null}var F="__closure_events_fn_"+(Math.random()*1e9>>>0);function $(a){return typeof a=="function"?a:(a[F]||(a[F]=function(h){return a.handleEvent(h)}),a[F])}function K(){v.call(this),this.i=new Gt(this),this.M=this,this.G=null}d(K,v),K.prototype[Ee]=!0,K.prototype.removeEventListener=function(a,h,p,m){Oe(this,a,h,p,m)};function W(a,h){var p,m=a.G;if(m)for(p=[];m;m=m.G)p.push(m);if(a=a.M,m=h.type||h,typeof h=="string")h=new b(h,a);else if(h instanceof b)h.target=h.target||a;else{var V=h;h=new b(m,a),An(h,V)}V=!0;let M,Q;if(p)for(Q=p.length-1;Q>=0;Q--)M=h.g=p[Q],V=z(M,m,!0,h)&&V;if(M=h.g=a,V=z(M,m,!0,h)&&V,V=z(M,m,!1,h)&&V,p)for(Q=0;Q<p.length;Q++)M=h.g=p[Q],V=z(M,m,!1,h)&&V}K.prototype.N=function(){if(K.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const p=a.g[h];for(let m=0;m<p.length;m++)Z(p[m]);delete a.g[h],a.h--}}this.G=null},K.prototype.J=function(a,h,p,m){return this.i.add(String(a),h,!1,p,m)},K.prototype.K=function(a,h,p,m){return this.i.add(String(a),h,!0,p,m)};function z(a,h,p,m){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let V=!0;for(let M=0;M<h.length;++M){const Q=h[M];if(Q&&!Q.da&&Q.capture==p){const me=Q.listener,tt=Q.ha||Q.src;Q.fa&&Wt(a.i,Q),V=me.call(tt,m)!==!1&&V}}return V&&!m.defaultPrevented}function G(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function ae(a){a.g=G(()=>{a.g=null,a.i&&(a.i=!1,ae(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Y extends v{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:ae(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function se(a){v.call(this),this.h=a,this.g={}}d(se,v);var fe=[];function ye(a){Ce(a.g,function(h,p){this.g.hasOwnProperty(p)&&I(h)},a),a.g={}}se.prototype.N=function(){se.Z.N.call(this),ye(this)},se.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Pe=o.JSON.stringify,Re=o.JSON.parse,gt=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Ze(){}function Pt(){}var et={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function bn(){b.call(this,"d")}d(bn,b);function is(){b.call(this,"c")}d(is,b);var Ge={},Mt=null;function Vr(){return Mt=Mt||new K}Ge.Ia="serverreachability";function ri(a){b.call(this,Ge.Ia,a)}d(ri,b);function si(a){const h=Vr();W(h,new ri(h))}Ge.STAT_EVENT="statevent";function Bh(a,h){b.call(this,Ge.STAT_EVENT,a),this.stat=h}d(Bh,b);function At(a){const h=Vr();W(h,new Bh(h,a))}Ge.Ja="timingevent";function jh(a,h){b.call(this,Ge.Ja,a),this.size=h}d(jh,b);function ii(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function oi(){this.g=!0}oi.prototype.ua=function(){this.g=!1};function kE(a,h,p,m,V,M){a.info(function(){if(a.g)if(M){var Q="",me=M.split("&");for(let xe=0;xe<me.length;xe++){var tt=me[xe].split("=");if(tt.length>1){const it=tt[0];tt=tt[1];const un=it.split("_");Q=un.length>=2&&un[1]=="type"?Q+(it+"="+tt+"&"):Q+(it+"=redacted&")}}}else Q=null;else Q=M;return"XMLHTTP REQ ("+m+") [attempt "+V+"]: "+h+`
`+p+`
`+Q})}function OE(a,h,p,m,V,M,Q){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+V+"]: "+h+`
`+p+`
`+M+" "+Q})}function os(a,h,p,m){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+ME(a,p)+(m?" "+m:"")})}function xE(a,h){a.info(function(){return"TIMEOUT: "+h})}oi.prototype.info=function(){};function ME(a,h){if(!a.g)return h;if(!h)return null;try{const M=JSON.parse(h);if(M){for(a=0;a<M.length;a++)if(Array.isArray(M[a])){var p=M[a];if(!(p.length<2)){var m=p[1];if(Array.isArray(m)&&!(m.length<1)){var V=m[0];if(V!="noop"&&V!="stop"&&V!="close")for(let Q=1;Q<m.length;Q++)m[Q]=""}}}}return Pe(M)}catch{return h}}var Ro={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Hh={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},qh;function Bc(){}d(Bc,Ze),Bc.prototype.g=function(){return new XMLHttpRequest},qh=new Bc;function ai(a){return encodeURIComponent(String(a))}function LE(a){var h=1;a=a.split(":");const p=[];for(;h>0&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function Qn(a,h,p,m){this.j=a,this.i=h,this.l=p,this.S=m||1,this.V=new se(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new $h}function $h(){this.i=null,this.g="",this.h=!1}var Gh={},jc={};function Hc(a,h,p){a.M=1,a.A=Co(ln(h)),a.u=p,a.R=!0,Wh(a,null)}function Wh(a,h){a.F=Date.now(),So(a),a.B=ln(a.A);var p=a.B,m=a.S;Array.isArray(m)||(m=[String(m)]),of(p.i,"t",m),a.C=0,p=a.j.L,a.h=new $h,a.g=Af(a.j,p?h:null,!a.u),a.P>0&&(a.O=new Y(u(a.Y,a,a.g),a.P)),h=a.V,p=a.g,m=a.ba;var V="readystatechange";Array.isArray(V)||(V&&(fe[0]=V.toString()),V=fe);for(let M=0;M<V.length;M++){const Q=J(p,V[M],m||h.handleEvent,!1,h.h||h);if(!Q)break;h.g[Q.key]=Q}h=a.J?xt(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),si(),kE(a.i,a.v,a.B,a.l,a.S,a.u)}Qn.prototype.ba=function(a){a=a.target;const h=this.O;h&&Xn(a)==3?h.j():this.Y(a)},Qn.prototype.Y=function(a){try{if(a==this.g)e:{const me=Xn(this.g),tt=this.g.ya(),xe=this.g.ca();if(!(me<3)&&(me!=3||this.g&&(this.h.h||this.g.la()||df(this.g)))){this.K||me!=4||tt==7||(tt==8||xe<=0?si(3):si(2)),qc(this);var h=this.g.ca();this.X=h;var p=FE(this);if(this.o=h==200,OE(this.i,this.v,this.B,this.l,this.S,me,h),this.o){if(this.U&&!this.L){t:{if(this.g){var m,V=this.g;if((m=V.g?V.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(m)){var M=m;break t}}M=null}if(a=M)os(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,$c(this,a);else{this.o=!1,this.m=3,At(12),Dr(this),ci(this);break e}}if(this.R){a=!0;let it;for(;!this.K&&this.C<p.length;)if(it=UE(this,p),it==jc){me==4&&(this.m=4,At(14),a=!1),os(this.i,this.l,null,"[Incomplete Response]");break}else if(it==Gh){this.m=4,At(15),os(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else os(this.i,this.l,it,null),$c(this,it);if(Kh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),me!=4||p.length!=0||this.h.h||(this.m=1,At(16),a=!1),this.o=this.o&&a,!a)os(this.i,this.l,p,"[Invalid Chunked Response]"),Dr(this),ci(this);else if(p.length>0&&!this.W){this.W=!0;var Q=this.j;Q.g==this&&Q.aa&&!Q.P&&(Q.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),Xc(Q),Q.P=!0,At(11))}}else os(this.i,this.l,p,null),$c(this,p);me==4&&Dr(this),this.o&&!this.K&&(me==4?Tf(this.j,this):(this.o=!1,So(this)))}else ZE(this.g),h==400&&p.indexOf("Unknown SID")>0?(this.m=3,At(12)):(this.m=0,At(13)),Dr(this),ci(this)}}}catch{}finally{}};function FE(a){if(!Kh(a))return a.g.la();const h=df(a.g);if(h==="")return"";let p="";const m=h.length,V=Xn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Dr(a),ci(a),"";a.h.i=new o.TextDecoder}for(let M=0;M<m;M++)a.h.h=!0,p+=a.h.i.decode(h[M],{stream:!(V&&M==m-1)});return h.length=0,a.h.g+=p,a.C=0,a.h.g}function Kh(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function UE(a,h){var p=a.C,m=h.indexOf(`
`,p);return m==-1?jc:(p=Number(h.substring(p,m)),isNaN(p)?Gh:(m+=1,m+p>h.length?jc:(h=h.slice(m,m+p),a.C=m+p,h)))}Qn.prototype.cancel=function(){this.K=!0,Dr(this)};function So(a){a.T=Date.now()+a.H,zh(a,a.H)}function zh(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ii(u(a.aa,a),h)}function qc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Qn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(xE(this.i,this.B),this.M!=2&&(si(),At(17)),Dr(this),this.m=2,ci(this)):zh(this,this.T-a)};function ci(a){a.j.I==0||a.K||Tf(a.j,a)}function Dr(a){qc(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,ye(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function $c(a,h){try{var p=a.j;if(p.I!=0&&(p.g==a||Gc(p.h,a))){if(!a.L&&Gc(p.h,a)&&p.I==3){try{var m=p.Ba.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var V=m;if(V[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)ko(p),Vo(p);else break e;Yc(p),At(18)}}else p.xa=V[1],0<p.xa-p.K&&V[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=ii(u(p.Va,p),6e3));Yh(p.h)<=1&&p.ta&&(p.ta=void 0)}else Or(p,11)}else if((a.L||p.g==a)&&ko(p),!T(h))for(V=p.Ba.g.parse(h),h=0;h<V.length;h++){let xe=V[h];const it=xe[0];if(!(it<=p.K))if(p.K=it,xe=xe[1],p.I==2)if(xe[0]=="c"){p.M=xe[1],p.ba=xe[2];const un=xe[3];un!=null&&(p.ka=un,p.j.info("VER="+p.ka));const xr=xe[4];xr!=null&&(p.za=xr,p.j.info("SVER="+p.za));const Zn=xe[5];Zn!=null&&typeof Zn=="number"&&Zn>0&&(m=1.5*Zn,p.O=m,p.j.info("backChannelRequestTimeoutMs_="+m)),m=p;const er=a.g;if(er){const xo=er.g?er.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(xo){var M=m.h;M.g||xo.indexOf("spdy")==-1&&xo.indexOf("quic")==-1&&xo.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(Wc(M,M.h),M.h=null))}if(m.G){const Zc=er.g?er.g.getResponseHeader("X-HTTP-Session-Id"):null;Zc&&(m.wa=Zc,Ue(m.J,m.G,Zc))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),m=p;var Q=a;if(m.na=wf(m,m.L?m.ba:null,m.W),Q.L){Xh(m.h,Q);var me=Q,tt=m.O;tt&&(me.H=tt),me.D&&(qc(me),So(me)),m.g=Q}else yf(m);p.i.length>0&&Do(p)}else xe[0]!="stop"&&xe[0]!="close"||Or(p,7);else p.I==3&&(xe[0]=="stop"||xe[0]=="close"?xe[0]=="stop"?Or(p,7):Jc(p):xe[0]!="noop"&&p.l&&p.l.qa(xe),p.A=0)}}si(4)}catch{}}var BE=class{constructor(a,h){this.g=a,this.map=h}};function Qh(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Jh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Yh(a){return a.h?1:a.g?a.g.size:0}function Gc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Wc(a,h){a.g?a.g.add(h):a.h=h}function Xh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Qh.prototype.cancel=function(){if(this.i=Zh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Zh(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.G);return h}return y(a.i)}var ef=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jE(a,h){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const m=a[p].indexOf("=");let V,M=null;m>=0?(V=a[p].substring(0,m),M=a[p].substring(m+1)):V=a[p],h(V,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function Jn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Jn?(this.l=a.l,li(this,a.j),this.o=a.o,this.g=a.g,ui(this,a.u),this.h=a.h,Kc(this,af(a.i)),this.m=a.m):a&&(h=String(a).match(ef))?(this.l=!1,li(this,h[1]||"",!0),this.o=hi(h[2]||""),this.g=hi(h[3]||"",!0),ui(this,h[4]),this.h=hi(h[5]||"",!0),Kc(this,h[6]||"",!0),this.m=hi(h[7]||"")):(this.l=!1,this.i=new di(null,this.l))}Jn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(fi(h,tf,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(fi(h,tf,!0),"@"),a.push(ai(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(fi(p,p.charAt(0)=="/"?$E:qE,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",fi(p,WE)),a.join("")},Jn.prototype.resolve=function(a){const h=ln(this);let p=!!a.j;p?li(h,a.j):p=!!a.o,p?h.o=a.o:p=!!a.g,p?h.g=a.g:p=a.u!=null;var m=a.h;if(p)ui(h,a.u);else if(p=!!a.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var V=h.h.lastIndexOf("/");V!=-1&&(m=h.h.slice(0,V+1)+m)}if(V=m,V==".."||V==".")m="";else if(V.indexOf("./")!=-1||V.indexOf("/.")!=-1){m=V.lastIndexOf("/",0)==0,V=V.split("/");const M=[];for(let Q=0;Q<V.length;){const me=V[Q++];me=="."?m&&Q==V.length&&M.push(""):me==".."?((M.length>1||M.length==1&&M[0]!="")&&M.pop(),m&&Q==V.length&&M.push("")):(M.push(me),m=!0)}m=M.join("/")}else m=V}return p?h.h=m:p=a.i.toString()!=="",p?Kc(h,af(a.i)):p=!!a.m,p&&(h.m=a.m),h};function ln(a){return new Jn(a)}function li(a,h,p){a.j=p?hi(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ui(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Kc(a,h,p){h instanceof di?(a.i=h,KE(a.i,a.l)):(p||(h=fi(h,GE)),a.i=new di(h,a.l))}function Ue(a,h,p){a.i.set(h,p)}function Co(a){return Ue(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function hi(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function fi(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,HE),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function HE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var tf=/[#\/\?@]/g,qE=/[#\?:]/g,$E=/[#\?]/g,GE=/[#\?@]/g,WE=/#/g;function di(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function kr(a){a.g||(a.g=new Map,a.h=0,a.i&&jE(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=di.prototype,t.add=function(a,h){kr(this),this.i=null,a=as(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function nf(a,h){kr(a),h=as(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function rf(a,h){return kr(a),h=as(a,h),a.g.has(h)}t.forEach=function(a,h){kr(this),this.g.forEach(function(p,m){p.forEach(function(V){a.call(h,V,m,this)},this)},this)};function sf(a,h){kr(a);let p=[];if(typeof h=="string")rf(a,h)&&(p=p.concat(a.g.get(as(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)p=p.concat(a[h]);return p}t.set=function(a,h){return kr(this),this.i=null,a=as(this,a),rf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=sf(this,a),a.length>0?String(a[0]):h):h};function of(a,h,p){nf(a,h),p.length>0&&(a.i=null,a.g.set(as(a,h),y(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let m=0;m<h.length;m++){var p=h[m];const V=ai(p);p=sf(this,p);for(let M=0;M<p.length;M++){let Q=V;p[M]!==""&&(Q+="="+ai(p[M])),a.push(Q)}}return this.i=a.join("&")};function af(a){const h=new di;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function as(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function KE(a,h){h&&!a.j&&(kr(a),a.i=null,a.g.forEach(function(p,m){const V=m.toLowerCase();m!=V&&(nf(this,m),of(this,V,p))},a)),a.j=h}function zE(a,h){const p=new oi;if(o.Image){const m=new Image;m.onload=f(Yn,p,"TestLoadImage: loaded",!0,h,m),m.onerror=f(Yn,p,"TestLoadImage: error",!1,h,m),m.onabort=f(Yn,p,"TestLoadImage: abort",!1,h,m),m.ontimeout=f(Yn,p,"TestLoadImage: timeout",!1,h,m),o.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else h(!1)}function QE(a,h){const p=new oi,m=new AbortController,V=setTimeout(()=>{m.abort(),Yn(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:m.signal}).then(M=>{clearTimeout(V),M.ok?Yn(p,"TestPingServer: ok",!0,h):Yn(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(V),Yn(p,"TestPingServer: error",!1,h)})}function Yn(a,h,p,m,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),m(p)}catch{}}function JE(){this.g=new gt}function zc(a){this.i=a.Sb||null,this.h=a.ab||!1}d(zc,Ze),zc.prototype.g=function(){return new Po(this.i,this.h)};function Po(a,h){K.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}d(Po,K),t=Po.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,gi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,pi(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,gi(this)),this.g&&(this.readyState=3,gi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;cf(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function cf(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?pi(this):gi(this),this.readyState==3&&cf(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,pi(this))},t.Na=function(a){this.g&&(this.response=a,pi(this))},t.ga=function(){this.g&&pi(this)};function pi(a){a.readyState=4,a.l=null,a.j=null,a.B=null,gi(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function gi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Po.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function lf(a){let h="";return Ce(a,function(p,m){h+=m,h+=":",h+=p,h+=`\r
`}),h}function Qc(a,h,p){e:{for(m in p){var m=!1;break e}m=!0}m||(p=lf(p),typeof a=="string"?p!=null&&ai(p):Ue(a,h,p))}function qe(a){K.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}d(qe,K);var YE=/^https?$/i,XE=["POST","PUT"];t=qe.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,p,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():qh.g(),this.g.onreadystatechange=g(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(M){uf(this,M);return}if(a=p||"",p=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var V in m)p.set(V,m[V]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const M of m.keys())p.set(M,m.get(M));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(p.keys()).find(M=>M.toLowerCase()=="content-type"),V=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(XE,h,void 0)>=0)||m||V||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,Q]of p)this.g.setRequestHeader(M,Q);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(M){uf(this,M)}};function uf(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,hf(a),No(a)}function hf(a){a.A||(a.A=!0,W(a,"complete"),W(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,W(this,"complete"),W(this,"abort"),No(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),No(this,!0)),qe.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?ff(this):this.Xa())},t.Xa=function(){ff(this)};function ff(a){if(a.h&&typeof i<"u"){if(a.v&&Xn(a)==4)setTimeout(a.Ca.bind(a),0);else if(W(a,"readystatechange"),Xn(a)==4){a.h=!1;try{const M=a.ca();e:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var m;if(m=M===0){let Q=String(a.D).match(ef)[1]||null;!Q&&o.self&&o.self.location&&(Q=o.self.location.protocol.slice(0,-1)),m=!YE.test(Q?Q.toLowerCase():"")}p=m}if(p)W(a,"complete"),W(a,"success");else{a.o=6;try{var V=Xn(a)>2?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.ca()+"]",hf(a)}}finally{No(a)}}}}function No(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,h||W(a,"ready");try{p.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Xn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Xn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Re(h)}};function df(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function ZE(a){const h={};a=(a.g&&Xn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(T(a[m]))continue;var p=LE(a[m]);const V=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const M=h[V]||[];h[V]=M,M.push(p)}cn(h,function(m){return m.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function mi(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function pf(a){this.za=0,this.i=[],this.j=new oi,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=mi("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=mi("baseRetryDelayMs",5e3,a),this.Za=mi("retryDelaySeedMs",1e4,a),this.Ta=mi("forwardChannelMaxRetries",2,a),this.va=mi("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Qh(a&&a.concurrentRequestLimit),this.Ba=new JE,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=pf.prototype,t.ka=8,t.I=1,t.connect=function(a,h,p,m){At(0),this.W=a,this.H=h||{},p&&m!==void 0&&(this.H.OSID=p,this.H.OAID=m),this.F=this.X,this.J=wf(this,null,this.W),Do(this)};function Jc(a){if(gf(a),a.I==3){var h=a.V++,p=ln(a.J);if(Ue(p,"SID",a.M),Ue(p,"RID",h),Ue(p,"TYPE","terminate"),_i(a,p),h=new Qn(a,a.j,h),h.M=2,h.A=Co(ln(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=h.A,p=!0),p||(h.g=Af(h.j,null),h.g.ea(h.A)),h.F=Date.now(),So(h)}If(a)}function Vo(a){a.g&&(Xc(a),a.g.cancel(),a.g=null)}function gf(a){Vo(a),a.v&&(o.clearTimeout(a.v),a.v=null),ko(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Do(a){if(!Jh(a.h)&&!a.m){a.m=!0;var h=a.Ea;x||E(),U||(x(),U=!0),w.add(h,a),a.D=0}}function eT(a,h){return Yh(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ii(u(a.Ea,a,h),vf(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const V=new Qn(this,this.j,a);let M=this.o;if(this.U&&(M?(M=xt(M),An(M,this.U)):M=this.U),this.u!==null||this.R||(V.J=M,M=null),this.S)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var m=this.i[p];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,h>4096){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=_f(this,V,h),p=ln(this.J),Ue(p,"RID",a),Ue(p,"CVER",22),this.G&&Ue(p,"X-HTTP-Session-Id",this.G),_i(this,p),M&&(this.R?h="headers="+ai(lf(M))+"&"+h:this.u&&Qc(p,this.u,M)),Wc(this.h,V),this.Ra&&Ue(p,"TYPE","init"),this.S?(Ue(p,"$req",h),Ue(p,"SID","null"),V.U=!0,Hc(V,p,null)):Hc(V,p,h),this.I=2}}else this.I==3&&(a?mf(this,a):this.i.length==0||Jh(this.h)||mf(this))};function mf(a,h){var p;h?p=h.l:p=a.V++;const m=ln(a.J);Ue(m,"SID",a.M),Ue(m,"RID",p),Ue(m,"AID",a.K),_i(a,m),a.u&&a.o&&Qc(m,a.u,a.o),p=new Qn(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),h&&(a.i=h.G.concat(a.i)),h=_f(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Wc(a.h,p),Hc(p,m,h)}function _i(a,h){a.H&&Ce(a.H,function(p,m){Ue(h,m,p)}),a.l&&Ce({},function(p,m){Ue(h,m,p)})}function _f(a,h,p){p=Math.min(a.i.length,p);const m=a.l?u(a.l.Ka,a.l,a):null;e:{var V=a.i;let me=-1;for(;;){const tt=["count="+p];me==-1?p>0?(me=V[0].g,tt.push("ofs="+me)):me=0:tt.push("ofs="+me);let xe=!0;for(let it=0;it<p;it++){var M=V[it].g;const un=V[it].map;if(M-=me,M<0)me=Math.max(0,V[it].g-100),xe=!1;else try{M="req"+M+"_"||"";try{var Q=un instanceof Map?un:Object.entries(un);for(const[xr,Zn]of Q){let er=Zn;c(Zn)&&(er=Pe(Zn)),tt.push(M+xr+"="+encodeURIComponent(er))}}catch(xr){throw tt.push(M+"type="+encodeURIComponent("_badmap")),xr}}catch{m&&m(un)}}if(xe){Q=tt.join("&");break e}}Q=void 0}return a=a.i.splice(0,p),h.G=a,Q}function yf(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;x||E(),U||(x(),U=!0),w.add(h,a),a.A=0}}function Yc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ii(u(a.Da,a),vf(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Ef(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ii(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,At(10),Vo(this),Ef(this))};function Xc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Ef(a){a.g=new Qn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=ln(a.na);Ue(h,"RID","rpc"),Ue(h,"SID",a.M),Ue(h,"AID",a.K),Ue(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&Ue(h,"TO",a.ia),Ue(h,"TYPE","xmlhttp"),_i(a,h),a.u&&a.o&&Qc(h,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=Co(ln(h)),p.u=null,p.R=!0,Wh(p,a)}t.Va=function(){this.C!=null&&(this.C=null,Vo(this),Yc(this),At(19))};function ko(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Tf(a,h){var p=null;if(a.g==h){ko(a),Xc(a),a.g=null;var m=2}else if(Gc(a.h,h))p=h.G,Xh(a.h,h),m=1;else return;if(a.I!=0){if(h.o)if(m==1){p=h.u?h.u.length:0,h=Date.now()-h.F;var V=a.D;m=Vr(),W(m,new jh(m,p)),Do(a)}else yf(a);else if(V=h.m,V==3||V==0&&h.X>0||!(m==1&&eT(a,h)||m==2&&Yc(a)))switch(p&&p.length>0&&(h=a.h,h.i=h.i.concat(p)),V){case 1:Or(a,5);break;case 4:Or(a,10);break;case 3:Or(a,6);break;default:Or(a,2)}}}function vf(a,h){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*h}function Or(a,h){if(a.j.info("Error code "+h),h==2){var p=u(a.bb,a),m=a.Ua;const V=!m;m=new Jn(m||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||li(m,"https"),Co(m),V?zE(m.toString(),p):QE(m.toString(),p)}else At(2);a.I=0,a.l&&a.l.pa(h),If(a),gf(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),At(2)):(this.j.info("Failed to ping google.com"),At(1))};function If(a){if(a.I=0,a.ja=[],a.l){const h=Zh(a.h);(h.length!=0||a.i.length!=0)&&(C(a.ja,h),C(a.ja,a.i),a.h.i.length=0,y(a.i),a.i.length=0),a.l.oa()}}function wf(a,h,p){var m=p instanceof Jn?ln(p):new Jn(p);if(m.g!="")h&&(m.g=h+"."+m.g),ui(m,m.u);else{var V=o.location;m=V.protocol,h=h?h+"."+V.hostname:V.hostname,V=+V.port;const M=new Jn(null);m&&li(M,m),h&&(M.g=h),V&&ui(M,V),p&&(M.h=p),m=M}return p=a.G,h=a.wa,p&&h&&Ue(m,p,h),Ue(m,"VER",a.ka),_i(a,m),m}function Af(a,h,p){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new qe(new zc({ab:p})):new qe(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function bf(){}t=bf.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Oo(){}Oo.prototype.g=function(a,h){return new Lt(a,h)};function Lt(a,h){K.call(this),this.g=new pf(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!T(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!T(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new cs(this)}d(Lt,K),Lt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Lt.prototype.close=function(){Jc(this.g)},Lt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=Pe(a),a=p);h.i.push(new BE(h.Ya++,a)),h.I==3&&Do(h)},Lt.prototype.N=function(){this.g.l=null,delete this.j,Jc(this.g),delete this.g,Lt.Z.N.call(this)};function Rf(a){bn.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}d(Rf,bn);function Sf(){is.call(this),this.status=1}d(Sf,is);function cs(a){this.g=a}d(cs,bf),cs.prototype.ra=function(){W(this.g,"a")},cs.prototype.qa=function(a){W(this.g,new Rf(a))},cs.prototype.pa=function(a){W(this.g,new Sf)},cs.prototype.oa=function(){W(this.g,"b")},Oo.prototype.createWebChannel=Oo.prototype.g,Lt.prototype.send=Lt.prototype.o,Lt.prototype.open=Lt.prototype.m,Lt.prototype.close=Lt.prototype.close,u_=function(){return new Oo},l_=function(){return Vr()},c_=Ge,eu={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ro.NO_ERROR=0,Ro.TIMEOUT=8,Ro.HTTP_ERROR=6,ia=Ro,Hh.COMPLETE="complete",a_=Hh,Pt.EventType=et,et.OPEN="a",et.CLOSE="b",et.ERROR="c",et.MESSAGE="d",K.prototype.listen=K.prototype.J,Ai=Pt,qe.prototype.listenOnce=qe.prototype.K,qe.prototype.getLastError=qe.prototype.Ha,qe.prototype.getLastErrorCode=qe.prototype.ya,qe.prototype.getStatus=qe.prototype.ca,qe.prototype.getResponseJson=qe.prototype.La,qe.prototype.getResponseText=qe.prototype.la,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Fa,o_=qe}).apply(typeof Ko<"u"?Ko:typeof self<"u"?self:typeof window<"u"?window:{});const Pd="@firebase/firestore",Nd="4.9.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ys="12.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=new Wu("@firebase/firestore");function ds(){return Yr.logLevel}function te(t,...e){if(Yr.logLevel<=Te.DEBUG){const n=e.map(Qu);Yr.debug(`Firestore (${Ys}): ${t}`,...n)}}function $n(t,...e){if(Yr.logLevel<=Te.ERROR){const n=e.map(Qu);Yr.error(`Firestore (${Ys}): ${t}`,...n)}}function Fs(t,...e){if(Yr.logLevel<=Te.WARN){const n=e.map(Qu);Yr.warn(`Firestore (${Ys}): ${t}`,...n)}}function Qu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,h_(t,r,n)}function h_(t,e,n){let r=`FIRESTORE (${Ys}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw $n(r),new Error(r)}function Ve(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||h_(e,s,r)}function ge(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends zn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class BA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(yt.UNAUTHENTICATED))}shutdown(){}}class jA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class HA{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ve(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Fn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Fn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Fn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ve(typeof r.accessToken=="string",31837,{l:r}),new f_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ve(e===null||typeof e=="string",2055,{h:e}),new yt(e)}}class qA{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class $A{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new qA(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Vd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class GA{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Jt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ve(this.o===void 0,3512);const r=i=>{i.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Vd(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ve(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Vd(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=WA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ve(t,e){return t<e?-1:t>e?1:0}function tu(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return ml(s)===ml(i)?ve(s,i):ml(s)?1:-1}return ve(t.length,e.length)}const KA=55296,zA=57343;function ml(t){const e=t.charCodeAt(0);return e>=KA&&e<=zA}function Us(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd="__name__";class pn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ue(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ue(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return pn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof pn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=pn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ve(e.length,n.length)}static compareSegments(e,n){const r=pn.isNumericId(e),s=pn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?pn.extractNumericId(e).compare(pn.extractNumericId(n)):tu(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return yr.fromString(e.substring(4,e.length-2))}}class Le extends pn{construct(e,n,r){return new Le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new X(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Le(n)}static emptyPath(){return new Le([])}}const QA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends pn{construct(e,n,r){return new ht(e,n,r)}static isValidIdentifier(e){return QA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Dd}static keyField(){return new ht([Dd])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new X(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new X(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new X(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new X(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ht(n)}static emptyPath(){return new ht([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.path=e}static fromPath(e){return new oe(Le.fromString(e))}static fromName(e){return new oe(Le.fromString(e).popFirst(5))}static empty(){return new oe(Le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oe(new Le(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d_(t,e,n){if(!n)throw new X(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function JA(t,e,n,r){if(e===!0&&r===!0)throw new X(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function kd(t){if(!oe.isDocumentKey(t))throw new X(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Od(t){if(oe.isDocumentKey(t))throw new X(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function p_(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Tc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ue(12329,{type:typeof t})}function Ar(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new X(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Tc(t);throw new X(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(t,e){const n={typeString:t};return e&&(n.value=e),n}function go(t,e){if(!p_(t))throw new X(j.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new X(j.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd=-62135596800,Md=1e6;class Be{static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Md);return new Be(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new X(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<xd)throw new X(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Md}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Be._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(go(e,Be._jsonSchema))return new Be(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-xd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Be._jsonSchemaVersion="firestore/timestamp/1.0",Be._jsonSchema={type:Ye("string",Be._jsonSchemaVersion),seconds:Ye("number"),nanoseconds:Ye("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{static fromTimestamp(e){return new pe(e)}static min(){return new pe(new Be(0,0))}static max(){return new pe(new Be(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi=-1;function YA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=pe.fromTimestamp(r===1e9?new Be(n+1,0):new Be(n,r));return new br(s,oe.empty(),e)}function XA(t){return new br(t.readTime,t.key,Yi)}class br{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new br(pe.min(),oe.empty(),Yi)}static max(){return new br(pe.max(),oe.empty(),Yi)}}function ZA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=oe.comparator(t.documentKey,e.documentKey),n!==0?n:ve(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xs(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==eb)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ue(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new H((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof H?n:H.resolve(n)}catch(n){return H.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):H.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):H.reject(n)}static resolve(e){return new H((n,r)=>{n(e)})}static reject(e){return new H((n,r)=>{r(e)})}static waitFor(e){return new H((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=H.resolve(!1);for(const r of e)n=n.next(s=>s?H.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new H((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(f=>{o[u]=f,++c,c===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new H((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function nb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Zs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}vc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu=-1;function Ic(t){return t==null}function Oa(t){return t===0&&1/t==-1/0}function rb(t){return typeof t=="number"&&Number.isInteger(t)&&!Oa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_="";function sb(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Ld(e)),e=ib(t.get(n),e);return Ld(e)}function ib(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case g_:n+="";break;default:n+=i}}return n}function Ld(t){return t+g_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ts(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function m_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,n){this.comparator=e,this.root=n||lt.EMPTY}insert(e,n){return new He(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(e){return new He(this.comparator,this.root.remove(e,this.comparator).copy(null,null,lt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zo(this.root,e,this.comparator,!1)}getReverseIterator(){return new zo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zo(this.root,e,this.comparator,!0)}}class zo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class lt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??lt.RED,this.left=s??lt.EMPTY,this.right=i??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new lt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return lt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ue(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ue(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ue(27949);return e+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw ue(57766)}get value(){throw ue(16141)}get color(){throw ue(16727)}get left(){throw ue(29726)}get right(){throw ue(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new lt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.comparator=e,this.data=new He(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ud(this.data.getIterator())}getIteratorFrom(e){return new Ud(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof st)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new st(this.comparator);return n.data=e,n}}class Ud{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.fields=e,e.sort(ht.comparator)}static empty(){return new Yt([])}unionWith(e){let n=new st(ht.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Yt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Us(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new __("Invalid base64 string: "+i):i}}(e);return new dt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new dt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const ob=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rr(t){if(Ve(!!t,39018),typeof t=="string"){let e=0;const n=ob.exec(t);if(Ve(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:We(t.seconds),nanos:We(t.nanos)}}function We(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Sr(t){return typeof t=="string"?dt.fromBase64String(t):dt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_="server_timestamp",E_="__type__",T_="__previous_value__",v_="__local_write_time__";function Xu(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[E_])==null?void 0:r.stringValue)===y_}function wc(t){const e=t.mapValue.fields[T_];return Xu(e)?wc(e):e}function Xi(t){const e=Rr(t.mapValue.fields[v_].timestampValue);return new Be(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e,n,r,s,i,o,c,l,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=f}}const xa="(default)";class Zi{constructor(e,n){this.projectId=e,this.database=n||xa}static empty(){return new Zi("","")}get isDefaultDatabase(){return this.database===xa}isEqual(e){return e instanceof Zi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_="__type__",cb="__max__",Qo={mapValue:{}},w_="__vector__",Ma="value";function Cr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Xu(t)?4:ub(t)?9007199254740991:lb(t)?10:11:ue(28295,{value:t})}function In(t,e){if(t===e)return!0;const n=Cr(t);if(n!==Cr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Xi(t).isEqual(Xi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Rr(s.timestampValue),c=Rr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Sr(s.bytesValue).isEqual(Sr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return We(s.geoPointValue.latitude)===We(i.geoPointValue.latitude)&&We(s.geoPointValue.longitude)===We(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return We(s.integerValue)===We(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=We(s.doubleValue),c=We(i.doubleValue);return o===c?Oa(o)===Oa(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return Us(t.arrayValue.values||[],e.arrayValue.values||[],In);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Fd(o)!==Fd(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!In(o[l],c[l])))return!1;return!0}(t,e);default:return ue(52216,{left:t})}}function eo(t,e){return(t.values||[]).find(n=>In(n,e))!==void 0}function Bs(t,e){if(t===e)return 0;const n=Cr(t),r=Cr(e);if(n!==r)return ve(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=We(i.integerValue||i.doubleValue),l=We(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return Bd(t.timestampValue,e.timestampValue);case 4:return Bd(Xi(t),Xi(e));case 5:return tu(t.stringValue,e.stringValue);case 6:return function(i,o){const c=Sr(i),l=Sr(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const f=ve(c[u],l[u]);if(f!==0)return f}return ve(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=ve(We(i.latitude),We(o.latitude));return c!==0?c:ve(We(i.longitude),We(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return jd(t.arrayValue,e.arrayValue);case 10:return function(i,o){var g,y,C,P;const c=i.fields||{},l=o.fields||{},u=(g=c[Ma])==null?void 0:g.arrayValue,f=(y=l[Ma])==null?void 0:y.arrayValue,d=ve(((C=u==null?void 0:u.values)==null?void 0:C.length)||0,((P=f==null?void 0:f.values)==null?void 0:P.length)||0);return d!==0?d:jd(u,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Qo.mapValue&&o===Qo.mapValue)return 0;if(i===Qo.mapValue)return 1;if(o===Qo.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},f=Object.keys(u);l.sort(),f.sort();for(let d=0;d<l.length&&d<f.length;++d){const g=tu(l[d],f[d]);if(g!==0)return g;const y=Bs(c[l[d]],u[f[d]]);if(y!==0)return y}return ve(l.length,f.length)}(t.mapValue,e.mapValue);default:throw ue(23264,{he:n})}}function Bd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=Rr(t),r=Rr(e),s=ve(n.seconds,r.seconds);return s!==0?s:ve(n.nanos,r.nanos)}function jd(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Bs(n[s],r[s]);if(i)return i}return ve(n.length,r.length)}function js(t){return nu(t)}function nu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Rr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Sr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return oe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=nu(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${nu(n.fields[o])}`;return s+"}"}(t.mapValue):ue(61005,{value:t})}function oa(t){switch(Cr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=wc(t);return e?16+oa(e):16;case 5:return 2*t.stringValue.length;case 6:return Sr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+oa(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return ts(r.fields,(i,o)=>{s+=i.length+oa(o)}),s}(t.mapValue);default:throw ue(13486,{value:t})}}function Hd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ru(t){return!!t&&"integerValue"in t}function Zu(t){return!!t&&"arrayValue"in t}function qd(t){return!!t&&"nullValue"in t}function $d(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function aa(t){return!!t&&"mapValue"in t}function lb(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[I_])==null?void 0:r.stringValue)===w_}function Mi(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ts(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Mi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Mi(t.arrayValue.values[n]);return e}return{...t}}function ub(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===cb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.value=e}static empty(){return new jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!aa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Mi(n)}setAll(e){let n=ht.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Mi(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());aa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return In(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];aa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ts(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new jt(Mi(this.value))}}function A_(t){const e=[];return ts(t.fields,(n,r)=>{const s=new ht([n]);if(aa(r)){const i=A_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Yt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Tt(e,0,pe.min(),pe.min(),pe.min(),jt.empty(),0)}static newFoundDocument(e,n,r,s){return new Tt(e,1,n,pe.min(),r,s,0)}static newNoDocument(e,n){return new Tt(e,2,n,pe.min(),pe.min(),jt.empty(),0)}static newUnknownDocument(e,n){return new Tt(e,3,n,pe.min(),pe.min(),jt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,n){this.position=e,this.inclusive=n}}function Gd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=oe.comparator(oe.fromName(o.referenceValue),n.key):r=Bs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Wd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!In(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,n="asc"){this.field=e,this.dir=n}}function hb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{}class Je extends b_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new db(e,n,r):n==="array-contains"?new mb(e,r):n==="in"?new _b(e,r):n==="not-in"?new yb(e,r):n==="array-contains-any"?new Eb(e,r):new Je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new pb(e,r):new gb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Bs(n,this.value)):n!==null&&Cr(this.value)===Cr(n)&&this.matchesComparison(Bs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ue(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class on extends b_{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new on(e,n)}matches(e){return R_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function R_(t){return t.op==="and"}function S_(t){return fb(t)&&R_(t)}function fb(t){for(const e of t.filters)if(e instanceof on)return!1;return!0}function su(t){if(t instanceof Je)return t.field.canonicalString()+t.op.toString()+js(t.value);if(S_(t))return t.filters.map(e=>su(e)).join(",");{const e=t.filters.map(n=>su(n)).join(",");return`${t.op}(${e})`}}function C_(t,e){return t instanceof Je?function(r,s){return s instanceof Je&&r.op===s.op&&r.field.isEqual(s.field)&&In(r.value,s.value)}(t,e):t instanceof on?function(r,s){return s instanceof on&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&C_(o,s.filters[c]),!0):!1}(t,e):void ue(19439)}function P_(t){return t instanceof Je?function(n){return`${n.field.canonicalString()} ${n.op} ${js(n.value)}`}(t):t instanceof on?function(n){return n.op.toString()+" {"+n.getFilters().map(P_).join(" ,")+"}"}(t):"Filter"}class db extends Je{constructor(e,n,r){super(e,n,r),this.key=oe.fromName(r.referenceValue)}matches(e){const n=oe.comparator(e.key,this.key);return this.matchesComparison(n)}}class pb extends Je{constructor(e,n){super(e,"in",n),this.keys=N_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class gb extends Je{constructor(e,n){super(e,"not-in",n),this.keys=N_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function N_(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>oe.fromName(r.referenceValue))}class mb extends Je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Zu(n)&&eo(n.arrayValue,this.value)}}class _b extends Je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&eo(this.value.arrayValue,n)}}class yb extends Je{constructor(e,n){super(e,"not-in",n)}matches(e){if(eo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!eo(this.value.arrayValue,n)}}class Eb extends Je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Zu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>eo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function Kd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Tb(t,e,n,r,s,i,o)}function eh(t){const e=ge(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>su(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ic(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>js(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>js(r)).join(",")),e.Te=n}return e.Te}function th(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!hb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!C_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Wd(t.startAt,e.startAt)&&Wd(t.endAt,e.endAt)}function iu(t){return oe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function vb(t,e,n,r,s,i,o,c){return new mo(t,e,n,r,s,i,o,c)}function nh(t){return new mo(t)}function zd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function V_(t){return t.collectionGroup!==null}function Li(t){const e=ge(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new st(ht.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Fa(i,r))}),n.has(ht.keyField().canonicalString())||e.Ie.push(new Fa(ht.keyField(),r))}return e.Ie}function mn(t){const e=ge(t);return e.Ee||(e.Ee=Ib(e,Li(t))),e.Ee}function Ib(t,e){if(t.limitType==="F")return Kd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Fa(s.field,i)});const n=t.endAt?new La(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new La(t.startAt.position,t.startAt.inclusive):null;return Kd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ou(t,e){const n=t.filters.concat([e]);return new mo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function au(t,e,n){return new mo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ac(t,e){return th(mn(t),mn(e))&&t.limitType===e.limitType}function D_(t){return`${eh(mn(t))}|lt:${t.limitType}`}function ps(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>P_(s)).join(", ")}]`),Ic(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>js(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>js(s)).join(",")),`Target(${r})`}(mn(t))}; limitType=${t.limitType})`}function bc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):oe.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Li(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const u=Gd(o,c,l);return o.inclusive?u<=0:u<0}(r.startAt,Li(r),s)||r.endAt&&!function(o,c,l){const u=Gd(o,c,l);return o.inclusive?u>=0:u>0}(r.endAt,Li(r),s))}(t,e)}function wb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function k_(t){return(e,n)=>{let r=!1;for(const s of Li(t)){const i=Ab(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Ab(t,e,n){const r=t.field.isKeyField()?oe.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?Bs(l,u):ue(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ue(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ts(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return m_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb=new He(oe.comparator);function Gn(){return bb}const O_=new He(oe.comparator);function bi(...t){let e=O_;for(const n of t)e=e.insert(n.key,n);return e}function x_(t){let e=O_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ur(){return Fi()}function M_(){return Fi()}function Fi(){return new ns(t=>t.toString(),(t,e)=>t.isEqual(e))}const Rb=new He(oe.comparator),Sb=new st(oe.comparator);function Ie(...t){let e=Sb;for(const n of t)e=e.add(n);return e}const Cb=new st(ve);function Pb(){return Cb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Oa(e)?"-0":e}}function L_(t){return{integerValue:""+t}}function Nb(t,e){return rb(e)?L_(e):rh(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(){this._=void 0}}function Vb(t,e,n){return t instanceof Ua?function(s,i){const o={fields:{[E_]:{stringValue:y_},[v_]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Xu(i)&&(i=wc(i)),i&&(o.fields[T_]=i),{mapValue:o}}(n,e):t instanceof to?U_(t,e):t instanceof no?B_(t,e):function(s,i){const o=F_(s,i),c=Qd(o)+Qd(s.Ae);return ru(o)&&ru(s.Ae)?L_(c):rh(s.serializer,c)}(t,e)}function Db(t,e,n){return t instanceof to?U_(t,e):t instanceof no?B_(t,e):n}function F_(t,e){return t instanceof Ba?function(r){return ru(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ua extends Rc{}class to extends Rc{constructor(e){super(),this.elements=e}}function U_(t,e){const n=j_(e);for(const r of t.elements)n.some(s=>In(s,r))||n.push(r);return{arrayValue:{values:n}}}class no extends Rc{constructor(e){super(),this.elements=e}}function B_(t,e){let n=j_(e);for(const r of t.elements)n=n.filter(s=>!In(s,r));return{arrayValue:{values:n}}}class Ba extends Rc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Qd(t){return We(t.integerValue||t.doubleValue)}function j_(t){return Zu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function kb(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof to&&s instanceof to||r instanceof no&&s instanceof no?Us(r.elements,s.elements,In):r instanceof Ba&&s instanceof Ba?In(r.Ae,s.Ae):r instanceof Ua&&s instanceof Ua}(t.transform,e.transform)}class Ob{constructor(e,n){this.version=e,this.transformResults=n}}class _n{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new _n}static exists(e){return new _n(void 0,e)}static updateTime(e){return new _n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ca(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Sc{}function H_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new $_(t.key,_n.none()):new _o(t.key,t.data,_n.none());{const n=t.data,r=jt.empty();let s=new st(ht.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new rs(t.key,r,new Yt(s.toArray()),_n.none())}}function xb(t,e,n){t instanceof _o?function(s,i,o){const c=s.value.clone(),l=Yd(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof rs?function(s,i,o){if(!ca(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Yd(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(q_(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ui(t,e,n,r){return t instanceof _o?function(i,o,c,l){if(!ca(i.precondition,o))return c;const u=i.value.clone(),f=Xd(i.fieldTransforms,l,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof rs?function(i,o,c,l){if(!ca(i.precondition,o))return c;const u=Xd(i.fieldTransforms,l,o),f=o.data;return f.setAll(q_(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(i,o,c){return ca(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function Mb(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=F_(r.transform,s||null);i!=null&&(n===null&&(n=jt.empty()),n.set(r.field,i))}return n||null}function Jd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Us(r,s,(i,o)=>kb(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class _o extends Sc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class rs extends Sc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function q_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Yd(t,e,n){const r=new Map;Ve(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,Db(o,c,n[s]))}return r}function Xd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Vb(i,o,e))}return r}class $_ extends Sc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Lb extends Sc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&xb(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ui(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ui(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=M_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=H_(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(pe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ie())}isEqual(e){return this.batchId===e.batchId&&Us(this.mutations,e.mutations,(n,r)=>Jd(n,r))&&Us(this.baseMutations,e.baseMutations,(n,r)=>Jd(n,r))}}class sh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ve(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return Rb}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new sh(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ke,Ae;function jb(t){switch(t){case j.OK:return ue(64938);case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0;default:return ue(15467,{code:t})}}function G_(t){if(t===void 0)return $n("GRPC error has no .code"),j.UNKNOWN;switch(t){case Ke.OK:return j.OK;case Ke.CANCELLED:return j.CANCELLED;case Ke.UNKNOWN:return j.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return j.INTERNAL;case Ke.UNAVAILABLE:return j.UNAVAILABLE;case Ke.UNAUTHENTICATED:return j.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case Ke.NOT_FOUND:return j.NOT_FOUND;case Ke.ALREADY_EXISTS:return j.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return j.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case Ke.ABORTED:return j.ABORTED;case Ke.OUT_OF_RANGE:return j.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return j.UNIMPLEMENTED;case Ke.DATA_LOSS:return j.DATA_LOSS;default:return ue(39323,{code:t})}}(Ae=Ke||(Ke={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hb(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qb=new yr([4294967295,4294967295],0);function Zd(t){const e=Hb().encode(t),n=new i_;return n.update(e),new Uint8Array(n.digest())}function ep(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new yr([n,r],0),new yr([s,i],0)]}class ih{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ri(`Invalid padding: ${n}`);if(r<0)throw new Ri(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ri(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ri(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=yr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(yr.fromNumber(r)));return s.compare(qb)===1&&(s=new yr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Zd(e),[r,s]=ep(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new ih(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.ge===0)return;const n=Zd(e),[r,s]=ep(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ri extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,yo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Cc(pe.min(),s,new He(ve),Gn(),Ie())}}class yo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new yo(r,n,Ie(),Ie(),Ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class W_{constructor(e,n){this.targetId=e,this.Ce=n}}class K_{constructor(e,n,r=dt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class tp{constructor(){this.ve=0,this.Fe=np(),this.Me=dt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ie(),n=Ie(),r=Ie();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ue(38017,{changeType:i})}}),new yo(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=np()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ve(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class $b{constructor(e){this.Ge=e,this.ze=new Map,this.je=Gn(),this.Je=Jo(),this.He=Jo(),this.Ye=new He(ve)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:ue(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(iu(i))if(r===0){const o=new oe(i.path);this.et(n,o,Tt.newNoDocument(o,pe.min()))}else Ve(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=Sr(r).toUint8Array()}catch(l){if(l instanceof __)return Fs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new ih(o,s,i)}catch(l){return Fs(l instanceof Ri?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const c=this.ot(o);if(c){if(i.current&&iu(c.target)){const l=new oe(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,Tt.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=Ie();this.He.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new Cc(e,n,this.Ye,this.je,r);return this.je=Gn(),this.Je=Jo(),this.He=Jo(),this.Ye=new He(ve),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new tp,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new st(ve),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new st(ve),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||te("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new tp),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Jo(){return new He(oe.comparator)}function np(){return new He(oe.comparator)}const Gb={asc:"ASCENDING",desc:"DESCENDING"},Wb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Kb={and:"AND",or:"OR"};class zb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function cu(t,e){return t.useProto3Json||Ic(e)?e:{value:e}}function ja(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function z_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Qb(t,e){return ja(t,e.toTimestamp())}function yn(t){return Ve(!!t,49232),pe.fromTimestamp(function(n){const r=Rr(n);return new Be(r.seconds,r.nanos)}(t))}function oh(t,e){return lu(t,e).canonicalString()}function lu(t,e){const n=function(s){return new Le(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Q_(t){const e=Le.fromString(t);return Ve(ey(e),10190,{key:e.toString()}),e}function uu(t,e){return oh(t.databaseId,e.path)}function _l(t,e){const n=Q_(e);if(n.get(1)!==t.databaseId.projectId)throw new X(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new X(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new oe(Y_(n))}function J_(t,e){return oh(t.databaseId,e)}function Jb(t){const e=Q_(t);return e.length===4?Le.emptyPath():Y_(e)}function hu(t){return new Le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Y_(t){return Ve(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function rp(t,e,n){return{name:uu(t,e),fields:n.value.mapValue.fields}}function Yb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ue(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,f){return u.useProto3Json?(Ve(f===void 0||typeof f=="string",58123),dt.fromBase64String(f||"")):(Ve(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),dt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){const f=u.code===void 0?j.UNKNOWN:G_(u.code);return new X(f,u.message||"")}(o);n=new K_(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=_l(t,r.document.name),i=yn(r.document.updateTime),o=r.document.createTime?yn(r.document.createTime):pe.min(),c=new jt({mapValue:{fields:r.document.fields}}),l=Tt.newFoundDocument(s,i,o,c),u=r.targetIds||[],f=r.removedTargetIds||[];n=new la(u,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=_l(t,r.document),i=r.readTime?yn(r.readTime):pe.min(),o=Tt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new la([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=_l(t,r.document),i=r.removedTargetIds||[];n=new la([],i,s,null)}else{if(!("filter"in e))return ue(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Bb(s,i),c=r.targetId;n=new W_(c,o)}}return n}function Xb(t,e){let n;if(e instanceof _o)n={update:rp(t,e.key,e.value)};else if(e instanceof $_)n={delete:uu(t,e.key)};else if(e instanceof rs)n={update:rp(t,e.key,e.data),updateMask:aR(e.fieldMask)};else{if(!(e instanceof Lb))return ue(16599,{Vt:e.type});n={verify:uu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof Ua)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof to)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof no)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Ba)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw ue(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Qb(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ue(27497)}(t,e.precondition)),n}function Zb(t,e){return t&&t.length>0?(Ve(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?yn(s.updateTime):yn(i);return o.isEqual(pe.min())&&(o=yn(i)),new Ob(o,s.transformResults||[])}(n,e))):[]}function eR(t,e){return{documents:[J_(t,e.path)]}}function tR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=J_(t,s);const i=function(u){if(u.length!==0)return Z_(on.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(f=>function(g){return{field:gs(g.field),direction:sR(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=cu(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:n,parent:s}}function nR(t){let e=Jb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ve(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(d){const g=X_(d);return g instanceof on&&S_(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(g=>function(C){return new Fa(ms(C.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(g))}(n.orderBy));let c=null;n.limit&&(c=function(d){let g;return g=typeof d=="object"?d.value:d,Ic(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(d){const g=!!d.before,y=d.values||[];return new La(y,g)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const g=!d.before,y=d.values||[];return new La(y,g)}(n.endAt)),vb(e,s,o,i,c,"F",l,u)}function rR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ue(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function X_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ms(n.unaryFilter.field);return Je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ms(n.unaryFilter.field);return Je.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ms(n.unaryFilter.field);return Je.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ms(n.unaryFilter.field);return Je.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ue(61313);default:return ue(60726)}}(t):t.fieldFilter!==void 0?function(n){return Je.create(ms(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ue(58110);default:return ue(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return on.create(n.compositeFilter.filters.map(r=>X_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ue(1026)}}(n.compositeFilter.op))}(t):ue(30097,{filter:t})}function sR(t){return Gb[t]}function iR(t){return Wb[t]}function oR(t){return Kb[t]}function gs(t){return{fieldPath:t.canonicalString()}}function ms(t){return ht.fromServerFormat(t.fieldPath)}function Z_(t){return t instanceof Je?function(n){if(n.op==="=="){if($d(n.value))return{unaryFilter:{field:gs(n.field),op:"IS_NAN"}};if(qd(n.value))return{unaryFilter:{field:gs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if($d(n.value))return{unaryFilter:{field:gs(n.field),op:"IS_NOT_NAN"}};if(qd(n.value))return{unaryFilter:{field:gs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:gs(n.field),op:iR(n.op),value:n.value}}}(t):t instanceof on?function(n){const r=n.getFilters().map(s=>Z_(s));return r.length===1?r[0]:{compositeFilter:{op:oR(n.op),filters:r}}}(t):ue(54877,{filter:t})}function aR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ey(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,n,r,s,i=pe.min(),o=pe.min(),c=dt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new dr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(e){this.yt=e}}function lR(t){const e=nR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?au(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(){this.Cn=new hR}addToCollectionParentIndex(e,n){return this.Cn.add(n),H.resolve()}getCollectionParents(e,n){return H.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return H.resolve()}deleteFieldIndex(e,n){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,n){return H.resolve()}getDocumentsMatchingTarget(e,n){return H.resolve(null)}getIndexType(e,n){return H.resolve(0)}getFieldIndexes(e,n){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,n){return H.resolve(br.min())}getMinOffsetFromCollectionGroup(e,n){return H.resolve(br.min())}updateCollectionGroup(e,n,r){return H.resolve()}updateIndexEntries(e,n){return H.resolve()}}class hR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new st(Le.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new st(Le.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ty=41943040;class Vt{static withCacheSize(e){return new Vt(e,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vt.DEFAULT_COLLECTION_PERCENTILE=10,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Vt.DEFAULT=new Vt(ty,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Vt.DISABLED=new Vt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Hs(0)}static cr(){return new Hs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip="LruGarbageCollector",fR=1048576;function op([t,e],[n,r]){const s=ve(t,n);return s===0?ve(e,r):s}class dR{constructor(e){this.Ir=e,this.buffer=new st(op),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();op(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class pR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){te(ip,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Zs(n)?te(ip,"Ignoring IndexedDB error during garbage collection: ",n):await Xs(n)}await this.Vr(3e5)})}}class gR{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return H.resolve(vc.ce);const r=new dR(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),H.resolve(sp)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),sp):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,c,l,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),s=this.params.maximumSequenceNumbersToCollect):s=d,o=Date.now(),this.nthSequenceNumber(e,s))).next(d=>(r=d,c=Date.now(),this.removeTargets(e,r,n))).next(d=>(i=d,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(u=Date.now(),ds()<=Te.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${d} documents in `+(u-l)+`ms
Total Duration: ${u-f}ms`),H.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:d})))}}function mR(t,e){return new gR(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(){this.changes=new ns(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?H.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ui(r.mutation,s,Yt.empty(),Be.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ie()){const s=Ur();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=bi();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ur();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ie()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=Gn();const o=Fi(),c=function(){return Fi()}();return n.forEach((l,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof rs)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Ui(f.mutation,u,f.mutation.getFieldMask(),Be.now())):o.set(u.key,Yt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>c.set(u,new yR(f,o.get(u)??null))),c))}recalculateAndSaveOverlays(e,n){const r=Fi();let s=new He((o,c)=>o-c),i=Ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let f=r.get(l)||Yt.empty();f=c.applyToLocalView(u,f),r.set(l,f);const d=(s.get(c.batchId)||Ie()).add(l);s=s.insert(c.batchId,d)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,f=l.value,d=M_();f.forEach(g=>{if(!i.has(g)){const y=H_(n.get(g),r.get(g));y!==null&&d.set(g,y),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return H.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return oe.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):V_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):H.resolve(Ur());let c=Yi,l=i;return o.next(u=>H.forEach(u,(f,d)=>(c<d.largestBatchId&&(c=d.largestBatchId),i.get(f)?H.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{l=l.insert(f,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,Ie())).next(f=>({batchId:c,changes:x_(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new oe(n)).next(r=>{let s=bi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=bi();return this.indexManager.getCollectionParents(e,i).next(c=>H.forEach(c,l=>{const u=function(d,g){return new mo(g,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(f=>{f.forEach((d,g)=>{o=o.insert(d,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,Tt.newInvalidDocument(f)))});let c=bi();return o.forEach((l,u)=>{const f=i.get(l);f!==void 0&&Ui(f.mutation,u,Yt.empty(),Be.now()),bc(n,u)&&(c=c.insert(l,u))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return H.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:yn(s.createTime)}}(n)),H.resolve()}getNamedQuery(e,n){return H.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:lR(s.bundledQuery),readTime:yn(s.readTime)}}(n)),H.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(){this.overlays=new He(oe.comparator),this.qr=new Map}getOverlay(e,n){return H.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ur();return H.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),H.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),H.resolve()}getOverlaysForCollection(e,n,r){const s=Ur(),i=n.length+1,o=new oe(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return H.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new He((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Ur(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const c=Ur(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,f)=>c.set(u,f)),!(c.size()>=s)););return H.resolve(c)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Ub(n,r));let i=this.qr.get(n);i===void 0&&(i=Ie(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(){this.sessionToken=dt.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,H.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(){this.Qr=new st(ot.$r),this.Ur=new st(ot.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new ot(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new ot(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new oe(new Le([])),r=new ot(n,e),s=new ot(n,e+1),i=[];return this.Ur.forEachInRange([r,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new oe(new Le([])),r=new ot(n,e),s=new ot(n,e+1);let i=Ie();return this.Ur.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ot(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ot{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return oe.comparator(e.key,n.key)||ve(e.Yr,n.Yr)}static Kr(e,n){return ve(e.Yr,n.Yr)||oe.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new st(ot.$r)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Fb(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Zr=this.Zr.add(new ot(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return H.resolve(o)}lookupMutationBatch(e,n){return H.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return H.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?Yu:this.tr-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ot(n,0),s=new ot(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],o=>{const c=this.Xr(o.Yr);i.push(c)}),H.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new st(ve);return n.forEach(s=>{const i=new ot(s,0),o=new ot(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],c=>{r=r.add(c.Yr)})}),H.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;oe.isDocumentKey(i)||(i=i.child(""));const o=new ot(new oe(i),0);let c=new st(ve);return this.Zr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Yr)),!0)},o),H.resolve(this.ti(c))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ve(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return H.forEach(n.mutations,s=>{const i=new ot(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new ot(n,0),s=this.Zr.firstAfterOrEqual(r);return H.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(e){this.ri=e,this.docs=function(){return new He(oe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return H.resolve(r?r.document.mutableCopy():Tt.newInvalidDocument(n))}getEntries(e,n){let r=Gn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Tt.newInvalidDocument(s))}),H.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Gn();const o=n.path,c=new oe(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:f}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||ZA(XA(f),r)<=0||(s.has(f.key)||bc(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return H.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ue(9500)}ii(e,n){return H.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new bR(this)}getSize(e){return H.resolve(this.size)}}class bR extends _R{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),H.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e){this.persistence=e,this.si=new ns(n=>eh(n),th),this.lastRemoteSnapshotVersion=pe.min(),this.highestTargetId=0,this.oi=0,this._i=new ah,this.targetCount=0,this.ai=Hs.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),H.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Hs(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,H.resolve()}updateTargetData(e,n){return this.Pr(n),H.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),H.waitFor(i).next(()=>s)}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return H.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),H.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),H.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),H.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return H.resolve(r)}containsKey(e,n){return H.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e,n){this.ui={},this.overlays={},this.ci=new vc(0),this.li=!1,this.li=!0,this.hi=new IR,this.referenceDelegate=e(this),this.Pi=new RR(this),this.indexManager=new uR,this.remoteDocumentCache=function(s){return new AR(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new cR(n),this.Ii=new TR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new vR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new wR(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){te("MemoryPersistence","Starting transaction:",e);const s=new SR(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return H.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class SR extends tb{constructor(e){super(),this.currentSequenceNumber=e}}class ch{constructor(e){this.persistence=e,this.Ri=new ah,this.Vi=null}static mi(e){return new ch(e)}get fi(){if(this.Vi)return this.Vi;throw ue(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),H.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),H.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),H.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.fi,r=>{const s=oe.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,pe.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return H.or([()=>H.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Ha{constructor(e,n){this.persistence=e,this.pi=new ns(r=>sb(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=mR(this,n)}static mi(e,n){return new Ha(e,n)}Ei(){}di(e){return H.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return H.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?H.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,n).next(c=>{c||(r++,i.removeEntry(o,pe.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),H.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),H.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),H.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),H.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=oa(e.data.value)),n}br(e,n,r){return H.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return H.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=Ie(),s=Ie();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new lh(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return Tw()?8:nb(wt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new CR;return this.Ss(e,n,o).next(c=>{if(i.result=c,this.Vs)return this.bs(e,n,o,c.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(ds()<=Te.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",ps(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),H.resolve()):(ds()<=Te.DEBUG&&te("QueryEngine","Query:",ps(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(ds()<=Te.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",ps(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,mn(n))):H.resolve())}ys(e,n){if(zd(n))return H.resolve(null);let r=mn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=au(n,null,"F"),r=mn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ie(...i);return this.ps.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Ds(n,c);return this.Cs(n,u,o,l.readTime)?this.ys(e,au(n,null,"F")):this.vs(e,u,n,l)}))})))}ws(e,n,r,s){return zd(n)||s.isEqual(pe.min())?H.resolve(null):this.ps.getDocuments(e,r).next(i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?H.resolve(null):(ds()<=Te.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ps(n)),this.vs(e,o,n,YA(s,Yi)).next(c=>c))})}Ds(e,n){let r=new st(k_(e));return n.forEach((s,i)=>{bc(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return ds()<=Te.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",ps(n)),this.ps.getDocumentsMatchingQuery(e,n,br.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh="LocalStore",NR=3e8;class VR{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new He(ve),this.xs=new ns(i=>eh(i),th),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ER(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function DR(t,e,n,r){return new VR(t,e,n,r)}async function ry(t,e){const n=ge(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=Ie();for(const u of s){o.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}for(const u of i){c.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Ls:u,removedBatchIds:o,addedBatchIds:c}))})})}function kR(t,e){const n=ge(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(c,l,u,f){const d=u.batch,g=d.keys();let y=H.resolve();return g.forEach(C=>{y=y.next(()=>f.getEntry(l,C)).next(P=>{const k=u.docVersions.get(C);Ve(k!==null,48541),P.version.compareTo(k)<0&&(d.applyToRemoteDocument(P,u),P.isValidDocument()&&(P.setReadTime(u.commitVersion),f.addEntry(P)))})}),y.next(()=>c.mutationQueue.removeMutationBatch(l,d))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=Ie();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function sy(t){const e=ge(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function OR(t,e){const n=ge(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const c=[];e.targetChanges.forEach((f,d)=>{const g=s.get(d);if(!g)return;c.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,d).next(()=>n.Pi.addMatchingKeys(i,f.addedDocuments,d)));let y=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?y=y.withResumeToken(dt.EMPTY_BYTE_STRING,pe.min()).withLastLimboFreeSnapshotVersion(pe.min()):f.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(f.resumeToken,r)),s=s.insert(d,y),function(P,k,L){return P.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=NR?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(g,y,f)&&c.push(n.Pi.updateTargetData(i,y))});let l=Gn(),u=Ie();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(xR(i,o,e.documentUpdates).next(f=>{l=f.ks,u=f.qs})),!r.isEqual(pe.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next(d=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return H.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.Ms=s,i))}function xR(t,e,n){let r=Ie(),s=Ie();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Gn();return n.forEach((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(pe.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):te(uh,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{ks:o,qs:s}})}function MR(t,e){const n=ge(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Yu),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function LR(t,e){const n=ge(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,e).next(i=>i?(s=i,H.resolve(s)):n.Pi.allocateTargetId(r).next(o=>(s=new dr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function fu(t,e,n){const r=ge(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Zs(o))throw o;te(uh,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function ap(t,e,n){const r=ge(t);let s=pe.min(),i=Ie();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,f){const d=ge(l),g=d.xs.get(f);return g!==void 0?H.resolve(d.Ms.get(g)):d.Pi.getTargetData(u,f)}(r,o,mn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:pe.min(),n?i:Ie())).next(c=>(FR(r,wb(e),c),{documents:c,Qs:i})))}function FR(t,e,n){let r=t.Os.get(e)||pe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Os.set(e,r)}class cp{constructor(){this.activeTargetIds=Pb()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class UR{constructor(){this.Mo=new cp,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new cp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp="ConnectivityMonitor";class up{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){te(lp,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){te(lp,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yo=null;function du(){return Yo===null?Yo=function(){return 268435456+Math.round(2147483648*Math.random())}():Yo++,"0x"+Yo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl="RestConnection",jR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class HR{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===xa?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=du(),c=this.zo(e,n.toUriEncodedString());te(yl,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:u}=new URL(c),f=Qs(u);return this.Jo(e,c,l,r,f).then(d=>(te(yl,`Received RPC '${e}' ${o}: `,d),d),d=>{throw Fs(yl,`RPC '${e}' ${o} failed with error: `,d,"url: ",c,"request:",r),d})}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ys}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=jR[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="WebChannelConnection";class $R extends HR{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=du();return new Promise((c,l)=>{const u=new o_;u.setWithCredentials(!0),u.listenOnce(a_.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ia.NO_ERROR:const d=u.getResponseJson();te(mt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(d)),c(d);break;case ia.TIMEOUT:te(mt,`RPC '${e}' ${o} timed out`),l(new X(j.DEADLINE_EXCEEDED,"Request time out"));break;case ia.HTTP_ERROR:const g=u.getStatus();if(te(mt,`RPC '${e}' ${o} failed with status:`,g,"response text:",u.getResponseText()),g>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const C=y==null?void 0:y.error;if(C&&C.status&&C.message){const P=function(L){const D=L.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(D)>=0?D:j.UNKNOWN}(C.status);l(new X(P,C.message))}else l(new X(j.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new X(j.UNAVAILABLE,"Connection failed."));break;default:ue(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{te(mt,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);te(mt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)})}T_(e,n,r){const s=du(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=u_(),c=l_(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");te(mt,`Creating RPC '${e}' stream ${s}: ${f}`,l);const d=o.createWebChannel(f,l);this.I_(d);let g=!1,y=!1;const C=new qR({Yo:k=>{y?te(mt,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(g||(te(mt,`Opening RPC '${e}' stream ${s} transport.`),d.open(),g=!0),te(mt,`RPC '${e}' stream ${s} sending:`,k),d.send(k))},Zo:()=>d.close()}),P=(k,L,D)=>{k.listen(L,R=>{try{D(R)}catch(N){setTimeout(()=>{throw N},0)}})};return P(d,Ai.EventType.OPEN,()=>{y||(te(mt,`RPC '${e}' stream ${s} transport opened.`),C.o_())}),P(d,Ai.EventType.CLOSE,()=>{y||(y=!0,te(mt,`RPC '${e}' stream ${s} transport closed`),C.a_(),this.E_(d))}),P(d,Ai.EventType.ERROR,k=>{y||(y=!0,Fs(mt,`RPC '${e}' stream ${s} transport errored. Name:`,k.name,"Message:",k.message),C.a_(new X(j.UNAVAILABLE,"The operation could not be completed")))}),P(d,Ai.EventType.MESSAGE,k=>{var L;if(!y){const D=k.data[0];Ve(!!D,16349);const R=D,N=(R==null?void 0:R.error)||((L=R[0])==null?void 0:L.error);if(N){te(mt,`RPC '${e}' stream ${s} received error:`,N);const x=N.status;let U=function(_){const v=Ke[_];if(v!==void 0)return G_(v)}(x),w=N.message;U===void 0&&(U=j.INTERNAL,w="Unknown error status: "+x+" with message "+N.message),y=!0,C.a_(new X(U,w)),d.close()}else te(mt,`RPC '${e}' stream ${s} received:`,D),C.u_(D)}}),P(c,c_.STAT_EVENT,k=>{k.stat===eu.PROXY?te(mt,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===eu.NOPROXY&&te(mt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.__()},0),C}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function El(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(t){return new zb(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&te("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp="PersistentStream";class oy{constructor(e,n,r,s,i,o,c,l){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new iy(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?($n(n.toString()),$n("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new X(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return te(hp,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(te(hp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class GR extends oy{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=Yb(this.serializer,e),r=function(i){if(!("targetChange"in i))return pe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?pe.min():o.readTime?yn(o.readTime):pe.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=hu(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=iu(l)?{documents:eR(i,l)}:{query:tR(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=z_(i,o.resumeToken);const u=cu(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(pe.min())>0){c.readTime=ja(i,o.snapshotVersion.toTimestamp());const u=cu(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const r=rR(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=hu(this.serializer),n.removeTarget=e,this.q_(n)}}class WR extends oy{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Ve(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ve(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ve(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=Zb(e.writeResults,e.commitTime),r=yn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=hu(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Xb(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{}class zR extends KR{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new X(j.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,lu(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new X(j.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Ho(e,lu(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new X(j.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class QR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?($n(n),this.aa=!1):te("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr="RemoteStore";class JR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{ss(this)&&(te(Xr,"Restarting streams for network reachability change."),await async function(l){const u=ge(l);u.Ea.add(4),await Eo(u),u.Ra.set("Unknown"),u.Ea.delete(4),await Nc(u)}(this))})}),this.Ra=new QR(r,s)}}async function Nc(t){if(ss(t))for(const e of t.da)await e(!0)}async function Eo(t){for(const e of t.da)await e(!1)}function ay(t,e){const n=ge(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),ph(n)?dh(n):ei(n).O_()&&fh(n,e))}function hh(t,e){const n=ge(t),r=ei(n);n.Ia.delete(e),r.O_()&&cy(n,e),n.Ia.size===0&&(r.O_()?r.L_():ss(n)&&n.Ra.set("Unknown"))}function fh(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(pe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ei(t).Y_(e)}function cy(t,e){t.Va.Ue(e),ei(t).Z_(e)}function dh(t){t.Va=new $b({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),ei(t).start(),t.Ra.ua()}function ph(t){return ss(t)&&!ei(t).x_()&&t.Ia.size>0}function ss(t){return ge(t).Ea.size===0}function ly(t){t.Va=void 0}async function YR(t){t.Ra.set("Online")}async function XR(t){t.Ia.forEach((e,n)=>{fh(t,e)})}async function ZR(t,e){ly(t),ph(t)?(t.Ra.ha(e),dh(t)):t.Ra.set("Unknown")}async function eS(t,e,n){if(t.Ra.set("Online"),e instanceof K_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.Va.removeTarget(c))}(t,e)}catch(r){te(Xr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await qa(t,r)}else if(e instanceof la?t.Va.Ze(e):e instanceof W_?t.Va.st(e):t.Va.tt(e),!n.isEqual(pe.min()))try{const r=await sy(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.Va.Tt(o);return c.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ia.get(u);f&&i.Ia.set(u,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,u)=>{const f=i.Ia.get(l);if(!f)return;i.Ia.set(l,f.withResumeToken(dt.EMPTY_BYTE_STRING,f.snapshotVersion)),cy(i,l);const d=new dr(f.target,l,u,f.sequenceNumber);fh(i,d)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){te(Xr,"Failed to raise snapshot:",r),await qa(t,r)}}async function qa(t,e,n){if(!Zs(e))throw e;t.Ea.add(1),await Eo(t),t.Ra.set("Offline"),n||(n=()=>sy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{te(Xr,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Nc(t)})}function uy(t,e){return e().catch(n=>qa(t,n,e))}async function Vc(t){const e=ge(t),n=Pr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Yu;for(;tS(e);)try{const s=await MR(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,nS(e,s)}catch(s){await qa(e,s)}hy(e)&&fy(e)}function tS(t){return ss(t)&&t.Ta.length<10}function nS(t,e){t.Ta.push(e);const n=Pr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function hy(t){return ss(t)&&!Pr(t).x_()&&t.Ta.length>0}function fy(t){Pr(t).start()}async function rS(t){Pr(t).ra()}async function sS(t){const e=Pr(t);for(const n of t.Ta)e.ea(n.mutations)}async function iS(t,e,n){const r=t.Ta.shift(),s=sh.from(r,e,n);await uy(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Vc(t)}async function oS(t,e){e&&Pr(t).X_&&await async function(r,s){if(function(o){return jb(o)&&o!==j.ABORTED}(s.code)){const i=r.Ta.shift();Pr(r).B_(),await uy(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Vc(r)}}(t,e),hy(t)&&fy(t)}async function fp(t,e){const n=ge(t);n.asyncQueue.verifyOperationInProgress(),te(Xr,"RemoteStore received new credentials");const r=ss(n);n.Ea.add(3),await Eo(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Nc(n)}async function aS(t,e){const n=ge(t);e?(n.Ea.delete(2),await Nc(n)):e||(n.Ea.add(2),await Eo(n),n.Ra.set("Unknown"))}function ei(t){return t.ma||(t.ma=function(n,r,s){const i=ge(n);return i.sa(),new GR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:YR.bind(null,t),t_:XR.bind(null,t),r_:ZR.bind(null,t),H_:eS.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),ph(t)?dh(t):t.Ra.set("Unknown")):(await t.ma.stop(),ly(t))})),t.ma}function Pr(t){return t.fa||(t.fa=function(n,r,s){const i=ge(n);return i.sa(),new WR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:rS.bind(null,t),r_:oS.bind(null,t),ta:sS.bind(null,t),na:iS.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await Vc(t)):(await t.fa.stop(),t.Ta.length>0&&(te(Xr,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Fn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new gh(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mh(t,e){if($n("AsyncQueue",`${e}: ${t}`),Zs(t))return new X(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{static emptySet(e){return new Cs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||oe.comparator(n.key,r.key):(n,r)=>oe.comparator(n.key,r.key),this.keyedMap=bi(),this.sortedSet=new He(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Cs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Cs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(){this.ga=new He(oe.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):ue(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class qs{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new qs(e,n,Cs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ac(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class lS{constructor(){this.queries=pp(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=ge(n),i=s.queries;s.queries=pp(),i.forEach((o,c)=>{for(const l of c.Sa)l.onError(r)})})(this,new X(j.ABORTED,"Firestore shutting down"))}}function pp(){return new ns(t=>D_(t),Ac)}async function dy(t,e){const n=ge(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new cS,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=mh(o,`Initialization of query '${ps(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&_h(n)}async function py(t,e){const n=ge(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function uS(t,e){const n=ge(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.Sa)c.Fa(s)&&(r=!0);o.wa=s}}r&&_h(n)}function hS(t,e,n){const r=ge(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function _h(t){t.Ca.forEach(e=>{e.next()})}var pu,gp;(gp=pu||(pu={})).Ma="default",gp.Cache="cache";class gy{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new qs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=qs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==pu.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e){this.key=e}}class _y{constructor(e){this.key=e}}class fS{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ie(),this.mutatedKeys=Ie(),this.eu=k_(e),this.tu=new Cs(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new dp,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,d)=>{const g=s.get(f),y=bc(this.query,d)?d:null,C=!!g&&this.mutatedKeys.has(g.key),P=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let k=!1;g&&y?g.data.isEqual(y.data)?C!==P&&(r.track({type:3,doc:y}),k=!0):this.su(g,y)||(r.track({type:2,doc:y}),k=!0,(l&&this.eu(y,l)>0||u&&this.eu(y,u)<0)&&(c=!0)):!g&&y?(r.track({type:0,doc:y}),k=!0):g&&!y&&(r.track({type:1,doc:g}),k=!0,(l||u)&&(c=!0)),k&&(y?(o=o.add(y),i=P?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:c,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,d)=>function(y,C){const P=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ue(20277,{Rt:k})}};return P(y)-P(C)}(f.type,d.type)||this.eu(f.doc,d.doc)),this.ou(r),s=s??!1;const c=n&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,u=l!==this.Za;return this.Za=l,o.length!==0||u?{snapshot:new qs(this.query,e.tu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new dp,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ie(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new _y(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new my(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=Ie();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return qs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const yh="SyncEngine";class dS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class pS{constructor(e){this.key=e,this.hu=!1}}class gS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ns(c=>D_(c),Ac),this.Iu=new Map,this.Eu=new Set,this.du=new He(oe.comparator),this.Au=new Map,this.Ru=new ah,this.Vu={},this.mu=new Map,this.fu=Hs.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function mS(t,e,n=!0){const r=wy(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await yy(r,e,n,!0),s}async function _S(t,e){const n=wy(t);await yy(n,e,!0,!1)}async function yy(t,e,n,r){const s=await LR(t.localStore,mn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await yS(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&ay(t.remoteStore,s),c}async function yS(t,e,n,r,s){t.pu=(d,g,y)=>async function(P,k,L,D){let R=k.view.ru(L);R.Cs&&(R=await ap(P.localStore,k.query,!1).then(({documents:w})=>k.view.ru(w,R)));const N=D&&D.targetChanges.get(k.targetId),x=D&&D.targetMismatches.get(k.targetId)!=null,U=k.view.applyChanges(R,P.isPrimaryClient,N,x);return _p(P,k.targetId,U.au),U.snapshot}(t,d,g,y);const i=await ap(t.localStore,e,!0),o=new fS(e,i.Qs),c=o.ru(i.documents),l=yo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);_p(t,n,u.au);const f=new dS(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function ES(t,e,n){const r=ge(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!Ac(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await fu(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&hh(r.remoteStore,s.targetId),gu(r,s.targetId)}).catch(Xs)):(gu(r,s.targetId),await fu(r.localStore,s.targetId,!0))}async function TS(t,e){const n=ge(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),hh(n.remoteStore,r.targetId))}async function vS(t,e,n){const r=CS(t);try{const s=await function(o,c){const l=ge(o),u=Be.now(),f=c.reduce((y,C)=>y.add(C.key),Ie());let d,g;return l.persistence.runTransaction("Locally write mutations","readwrite",y=>{let C=Gn(),P=Ie();return l.Ns.getEntries(y,f).next(k=>{C=k,C.forEach((L,D)=>{D.isValidDocument()||(P=P.add(L))})}).next(()=>l.localDocuments.getOverlayedDocuments(y,C)).next(k=>{d=k;const L=[];for(const D of c){const R=Mb(D,d.get(D.key).overlayedDocument);R!=null&&L.push(new rs(D.key,R,A_(R.value.mapValue),_n.exists(!0)))}return l.mutationQueue.addMutationBatch(y,u,L,c)}).next(k=>{g=k;const L=k.applyToLocalDocumentSet(d,P);return l.documentOverlayCache.saveOverlays(y,k.batchId,L)})}).then(()=>({batchId:g.batchId,changes:x_(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let u=o.Vu[o.currentUser.toKey()];u||(u=new He(ve)),u=u.insert(c,l),o.Vu[o.currentUser.toKey()]=u}(r,s.batchId,n),await To(r,s.changes),await Vc(r.remoteStore)}catch(s){const i=mh(s,"Failed to persist write");n.reject(i)}}async function Ey(t,e){const n=ge(t);try{const r=await OR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(Ve(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Ve(o.hu,14607):s.removedDocuments.size>0&&(Ve(o.hu,42227),o.hu=!1))}),await To(n,r,e)}catch(r){await Xs(r)}}function mp(t,e,n){const r=ge(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=ge(o);l.onlineState=c;let u=!1;l.queries.forEach((f,d)=>{for(const g of d.Sa)g.va(c)&&(u=!0)}),u&&_h(l)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function IS(t,e,n){const r=ge(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new He(oe.comparator);o=o.insert(i,Tt.newNoDocument(i,pe.min()));const c=Ie().add(i),l=new Cc(pe.min(),new Map,new He(ve),o,c);await Ey(r,l),r.du=r.du.remove(i),r.Au.delete(e),Eh(r)}else await fu(r.localStore,e,!1).then(()=>gu(r,e,n)).catch(Xs)}async function wS(t,e){const n=ge(t),r=e.batch.batchId;try{const s=await kR(n.localStore,e);vy(n,r,null),Ty(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await To(n,s)}catch(s){await Xs(s)}}async function AS(t,e,n){const r=ge(t);try{const s=await function(o,c){const l=ge(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return l.mutationQueue.lookupMutationBatch(u,c).next(d=>(Ve(d!==null,37113),f=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>l.localDocuments.getDocuments(u,f))})}(r.localStore,e);vy(r,e,n),Ty(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await To(r,s)}catch(s){await Xs(s)}}function Ty(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function vy(t,e,n){const r=ge(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function gu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||Iy(t,r)})}function Iy(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(hh(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Eh(t))}function _p(t,e,n){for(const r of n)r instanceof my?(t.Ru.addReference(r.key,e),bS(t,r)):r instanceof _y?(te(yh,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||Iy(t,r.key)):ue(19791,{wu:r})}function bS(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(te(yh,"New document in limbo: "+n),t.Eu.add(r),Eh(t))}function Eh(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new oe(Le.fromString(e)),r=t.fu.next();t.Au.set(r,new pS(n)),t.du=t.du.insert(n,r),ay(t.remoteStore,new dr(mn(nh(n.path)),r,"TargetPurposeLimboResolution",vc.ce))}}async function To(t,e,n){const r=ge(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((c,l)=>{o.push(r.pu(l,e,n).then(u=>{var f;if((u||n)&&r.isPrimaryClient){const d=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(u){s.push(u);const d=lh.As(l.targetId,u);i.push(d)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(l,u){const f=ge(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>H.forEach(u,g=>H.forEach(g.Es,y=>f.persistence.referenceDelegate.addReference(d,g.targetId,y)).next(()=>H.forEach(g.ds,y=>f.persistence.referenceDelegate.removeReference(d,g.targetId,y)))))}catch(d){if(!Zs(d))throw d;te(uh,"Failed to update sequence numbers: "+d)}for(const d of u){const g=d.targetId;if(!d.fromCache){const y=f.Ms.get(g),C=y.snapshotVersion,P=y.withLastLimboFreeSnapshotVersion(C);f.Ms=f.Ms.insert(g,P)}}}(r.localStore,i))}async function RS(t,e){const n=ge(t);if(!n.currentUser.isEqual(e)){te(yh,"User change. New user:",e.toKey());const r=await ry(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(c=>{c.forEach(l=>{l.reject(new X(j.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await To(n,r.Ls)}}function SS(t,e){const n=ge(t),r=n.Au.get(e);if(r&&r.hu)return Ie().add(r.key);{let s=Ie();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const c=n.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function wy(t){const e=ge(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ey.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=SS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=IS.bind(null,e),e.Pu.H_=uS.bind(null,e.eventManager),e.Pu.yu=hS.bind(null,e.eventManager),e}function CS(t){const e=ge(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=wS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=AS.bind(null,e),e}class $a{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Pc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return DR(this.persistence,new PR,e.initialUser,this.serializer)}Cu(e){return new ny(ch.mi,this.serializer)}Du(e){return new UR}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}$a.provider={build:()=>new $a};class PS extends $a{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Ve(this.persistence.referenceDelegate instanceof Ha,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new pR(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Vt.withCacheSize(this.cacheSizeBytes):Vt.DEFAULT;return new ny(r=>Ha.mi(r,n),this.serializer)}}class mu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>mp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=RS.bind(null,this.syncEngine),await aS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new lS}()}createDatastore(e){const n=Pc(e.databaseInfo.databaseId),r=function(i){return new $R(i)}(e.databaseInfo);return function(i,o,c,l){return new zR(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new JR(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>mp(this.syncEngine,n,0),function(){return up.v()?new up:new BR}())}createSyncEngine(e,n){return function(s,i,o,c,l,u,f){const d=new gS(s,i,o,c,l,u);return f&&(d.gu=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ge(s);te(Xr,"RemoteStore shutting down."),i.Ea.add(5),await Eo(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}mu.provider={build:()=>new mu};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):$n("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr="FirestoreClient";class NS{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=yt.UNAUTHENTICATED,this.clientId=Ju.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{te(Nr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(te(Nr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Fn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=mh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Tl(t,e){t.asyncQueue.verifyOperationInProgress(),te(Nr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await ry(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function yp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await VS(t);te(Nr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>fp(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>fp(e.remoteStore,s)),t._onlineComponents=e}async function VS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){te(Nr,"Using user provided OfflineComponentProvider");try{await Tl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===j.FAILED_PRECONDITION||s.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Fs("Error using user provided cache. Falling back to memory cache: "+n),await Tl(t,new $a)}}else te(Nr,"Using default OfflineComponentProvider"),await Tl(t,new PS(void 0));return t._offlineComponents}async function by(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(te(Nr,"Using user provided OnlineComponentProvider"),await yp(t,t._uninitializedComponentsProvider._online)):(te(Nr,"Using default OnlineComponentProvider"),await yp(t,new mu))),t._onlineComponents}function DS(t){return by(t).then(e=>e.syncEngine)}async function Ry(t){const e=await by(t),n=e.eventManager;return n.onListen=mS.bind(null,e.syncEngine),n.onUnlisten=ES.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=_S.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=TS.bind(null,e.syncEngine),n}function kS(t,e,n={}){const r=new Fn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const f=new Ay({next:g=>{f.Nu(),o.enqueueAndForget(()=>py(i,d));const y=g.docs.has(c);!y&&g.fromCache?u.reject(new X(j.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&g.fromCache&&l&&l.source==="server"?u.reject(new X(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),d=new gy(nh(c.path),f,{includeMetadataChanges:!0,qa:!0});return dy(i,d)}(await Ry(t),t.asyncQueue,e,n,r)),r.promise}function OS(t,e,n={}){const r=new Fn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const f=new Ay({next:g=>{f.Nu(),o.enqueueAndForget(()=>py(i,d)),g.fromCache&&l.source==="server"?u.reject(new X(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),d=new gy(c,f,{includeMetadataChanges:!0,qa:!0});return dy(i,d)}(await Ry(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy="firestore.googleapis.com",Tp=!0;class vp{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new X(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Cy,this.ssl=Tp}else this.host=e.host,this.ssl=e.ssl??Tp;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ty;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<fR)throw new X(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}JA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Sy(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new X(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new X(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new X(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Dc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new X(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new X(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vp(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new BA;switch(r.type){case"firstParty":return new $A(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new X(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ep.get(n);r&&(te("ComponentProvider","Removing Datastore"),Ep.delete(n),r.terminate())}(this),Promise.resolve()}}function xS(t,e,n,r={}){var u;t=Ar(t,Dc);const s=Qs(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&(Ym(`https://${c}`),Xm("Firestore",!0)),i.host!==Cy&&i.host!==c&&Fs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!Qr(l,o)&&(t._setSettings(l),r.mockUserToken)){let f,d;if(typeof r.mockUserToken=="string")f=r.mockUserToken,d=yt.MOCK_USER;else{f=hw(r.mockUserToken,(u=t._app)==null?void 0:u.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new X(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new yt(g)}t._authCredentials=new jA(new f_(f,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ti(this.firestore,e,this._query)}}class Xe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Er(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Xe(this.firestore,e,this._key)}toJSON(){return{type:Xe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(go(n,Xe._jsonSchema))return new Xe(e,r||null,new oe(Le.fromString(n.referencePath)))}}Xe._jsonSchemaVersion="firestore/documentReference/1.0",Xe._jsonSchema={type:Ye("string",Xe._jsonSchemaVersion),referencePath:Ye("string")};class Er extends ti{constructor(e,n,r){super(e,n,nh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Xe(this.firestore,null,new oe(e))}withConverter(e){return new Er(this.firestore,e,this._path)}}function Py(t,e,...n){if(t=Ot(t),d_("collection","path",e),t instanceof Dc){const r=Le.fromString(e,...n);return Od(r),new Er(t,null,r)}{if(!(t instanceof Xe||t instanceof Er))throw new X(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return Od(r),new Er(t.firestore,null,r)}}function kc(t,e,...n){if(t=Ot(t),arguments.length===1&&(e=Ju.newId()),d_("doc","path",e),t instanceof Dc){const r=Le.fromString(e,...n);return kd(r),new Xe(t,null,new oe(r))}{if(!(t instanceof Xe||t instanceof Er))throw new X(j.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return kd(r),new Xe(t.firestore,t instanceof Er?t.converter:null,new oe(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip="AsyncQueue";class wp{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new iy(this,"async_queue_retry"),this._c=()=>{const r=El();r&&te(Ip,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=El();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=El();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Fn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Zs(e))throw e;te(Ip,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,$n("INTERNAL UNHANDLED ERROR: ",Ap(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=gh.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&ue(47125,{Pc:Ap(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Ap(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class vo extends Dc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new wp,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new wp(e),this._firestoreClient=void 0,await e}}}function MS(t,e){const n=typeof t=="object"?t:n_(),r=typeof t=="string"?t:xa,s=zu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=lw("firestore");i&&xS(s,...i)}return s}function Th(t){if(t._terminated)throw new X(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||LS(t),t._firestoreClient}function LS(t){var r,s,i;const e=t._freezeSettings(),n=function(c,l,u,f){return new ab(c,l,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Sy(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new NS(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ht(dt.fromBase64String(e))}catch(n){throw new X(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ht(dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ht._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(go(e,Ht._jsonSchema))return Ht.fromBase64String(e.bytes)}}Ht._jsonSchemaVersion="firestore/bytes/1.0",Ht._jsonSchema={type:Ye("string",Ht._jsonSchemaVersion),bytes:Ye("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new X(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new X(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new X(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:En._jsonSchemaVersion}}static fromJSON(e){if(go(e,En._jsonSchema))return new En(e.latitude,e.longitude)}}En._jsonSchemaVersion="firestore/geoPoint/1.0",En._jsonSchema={type:Ye("string",En._jsonSchemaVersion),latitude:Ye("number"),longitude:Ye("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Tn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(go(e,Tn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Tn(e.vectorValues);throw new X(j.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Tn._jsonSchemaVersion="firestore/vectorValue/1.0",Tn._jsonSchema={type:Ye("string",Tn._jsonSchemaVersion),vectorValues:Ye("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS=/^__.*__$/;class US{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new rs(e,this.data,this.fieldMask,n,this.fieldTransforms):new _o(e,this.data,n,this.fieldTransforms)}}function Vy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ue(40011,{Ac:t})}}class Ih{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Ih({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ga(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Vy(this.Ac)&&FS.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class BS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Pc(e)}Cc(e,n,r,s=!1){return new Ih({Ac:e,methodName:n,Dc:r,path:ht.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function wh(t){const e=t._freezeSettings(),n=Pc(t._databaseId);return new BS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Dy(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);xy("Data must be an object, but it was:",o,r);const c=ky(r,o);let l,u;if(i.merge)l=new Yt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const d of i.mergeFields){const g=HS(e,d,n);if(!o.contains(g))throw new X(j.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);$S(f,g)||f.push(g)}l=new Yt(f),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new US(new jt(c),l,u)}function jS(t,e,n,r=!1){return Ah(n,t.Cc(r?4:3,e))}function Ah(t,e){if(Oy(t=Ot(t)))return xy("Unsupported field value:",e,t),ky(t,e);if(t instanceof Ny)return function(r,s){if(!Vy(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=Ah(c,s.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ot(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Nb(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Be.fromDate(r);return{timestampValue:ja(s.serializer,i)}}if(r instanceof Be){const i=new Be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ja(s.serializer,i)}}if(r instanceof En)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ht)return{bytesValue:z_(s.serializer,r._byteString)};if(r instanceof Xe){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:oh(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Tn)return function(o,c){return{mapValue:{fields:{[I_]:{stringValue:w_},[Ma]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw c.Sc("VectorValues must only contain numeric values.");return rh(c.serializer,u)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${Tc(r)}`)}(t,e)}function ky(t,e){const n={};return m_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ts(t,(r,s)=>{const i=Ah(s,e.mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Oy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Be||t instanceof En||t instanceof Ht||t instanceof Xe||t instanceof Ny||t instanceof Tn)}function xy(t,e,n){if(!Oy(n)||!p_(n)){const r=Tc(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function HS(t,e,n){if((e=Ot(e))instanceof vh)return e._internalPath;if(typeof e=="string")return My(t,e);throw Ga("Field path arguments must be of type string or ",t,!1,void 0,n)}const qS=new RegExp("[~\\*/\\[\\]]");function My(t,e,n){if(e.search(qS)>=0)throw Ga(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new vh(...e.split("."))._internalPath}catch{throw Ga(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ga(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new X(j.INVALID_ARGUMENT,c+t+l)}function $S(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Xe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new GS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(bh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class GS extends Ly{data(){return super.data()}}function bh(t,e){return typeof e=="string"?My(t,e):e instanceof vh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new X(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Rh{}class KS extends Rh{}function zS(t,e,...n){let r=[];e instanceof Rh&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof Sh).length,c=i.filter(l=>l instanceof Oc).length;if(o>1||o>0&&c>0)throw new X(j.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Oc extends KS{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Oc(e,n,r)}_apply(e){const n=this._parse(e);return Fy(e._query,n),new ti(e.firestore,e.converter,ou(e._query,n))}_parse(e){const n=wh(e.firestore);return function(i,o,c,l,u,f,d){let g;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new X(j.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Rp(d,f);const C=[];for(const P of d)C.push(bp(l,i,P));g={arrayValue:{values:C}}}else g=bp(l,i,d)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Rp(d,f),g=jS(c,o,d,f==="in"||f==="not-in");return Je.create(u,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function QS(t,e,n){const r=e,s=bh("where",t);return Oc._create(s,r,n)}class Sh extends Rh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Sh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:on.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)Fy(o,l),o=ou(o,l)}(e._query,n),new ti(e.firestore,e.converter,ou(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function bp(t,e,n){if(typeof(n=Ot(n))=="string"){if(n==="")throw new X(j.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!V_(e)&&n.indexOf("/")!==-1)throw new X(j.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Le.fromString(n));if(!oe.isDocumentKey(r))throw new X(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Hd(t,new oe(r))}if(n instanceof Xe)return Hd(t,n._key);throw new X(j.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Tc(n)}.`)}function Rp(t,e){if(!Array.isArray(t)||t.length===0)throw new X(j.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Fy(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new X(j.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new X(j.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class JS{convertValue(e,n="none"){switch(Cr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return We(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Sr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ue(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ts(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[Ma].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>We(o.doubleValue));return new Tn(n)}convertGeoPoint(e){return new En(We(e.latitude),We(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=wc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Xi(e));default:return null}}convertTimestamp(e){const n=Rr(e);return new Be(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Le.fromString(e);Ve(ey(r),9688,{name:e});const s=new Zi(r.get(1),r.get(3)),i=new oe(r.popFirst(5));return s.isEqual(n)||$n(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uy(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Si{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Gr extends Ly{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ua(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(bh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new X(j.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Gr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Gr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Gr._jsonSchema={type:Ye("string",Gr._jsonSchemaVersion),bundleSource:Ye("string","DocumentSnapshot"),bundleName:Ye("string"),bundle:Ye("string")};class ua extends Gr{data(e={}){return super.data(e)}}class Ps{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Si(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ua(this._firestore,this._userDataWriter,r.key,r,new Si(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new X(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new ua(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Si(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new ua(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Si(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:YS(c.type),doc:l,oldIndex:u,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new X(j.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ps._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ju.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function YS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ue(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XS(t){t=Ar(t,Xe);const e=Ar(t.firestore,vo);return kS(Th(e),t._key).then(n=>tC(e,t,n))}Ps._jsonSchemaVersion="firestore/querySnapshot/1.0",Ps._jsonSchema={type:Ye("string",Ps._jsonSchemaVersion),bundleSource:Ye("string","QuerySnapshot"),bundleName:Ye("string"),bundle:Ye("string")};class By extends JS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ht(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Xe(this.firestore,null,n)}}function ZS(t){t=Ar(t,ti);const e=Ar(t.firestore,vo),n=Th(e),r=new By(e);return WS(t._query),OS(n,t._query).then(s=>new Ps(e,r,t,s))}function jy(t,e,n){t=Ar(t,Xe);const r=Ar(t.firestore,vo),s=Uy(t.converter,e,n);return Hy(r,[Dy(wh(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,_n.none())])}function eC(t,e){const n=Ar(t.firestore,vo),r=kc(t),s=Uy(t.converter,e);return Hy(n,[Dy(wh(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,_n.exists(!1))]).then(()=>r)}function Hy(t,e){return function(r,s){const i=new Fn;return r.asyncQueue.enqueueAndForget(async()=>vS(await DS(r),s,i)),i.promise}(Th(t),e)}function tC(t,e,n){const r=n.docs.get(e._key),s=new By(t);return new Gr(t,s,e._key,r,new Si(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Ys=s})(Js),Ls(new Jr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new vo(new HA(r.getProvider("auth-internal")),new GA(o,r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new X(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Zi(u.options.projectId,f)}(o,s),o);return i={useFetchStreams:n,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),_r(Pd,Nd,e),_r(Pd,Nd,"esm2020")})();function qy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nC=qy,$y=new fo("auth","Firebase",qy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa=new Wu("@firebase/auth");function rC(t,...e){Wa.logLevel<=Te.WARN&&Wa.warn(`Auth (${Js}): ${t}`,...e)}function ha(t,...e){Wa.logLevel<=Te.ERROR&&Wa.error(`Auth (${Js}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(t,...e){throw Ph(t,...e)}function tn(t,...e){return Ph(t,...e)}function Ch(t,e,n){const r={...nC(),[e]:n};return new fo("auth","Firebase",r).create(e,{appName:t.name})}function Wr(t){return Ch(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function sC(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&wn(t,"argument-error"),Ch(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ph(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return $y.create(t,...e)}function de(t,e,...n){if(!t)throw Ph(e,...n)}function On(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ha(e),new Error(e)}function Wn(t,e){t||On(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function iC(){return Sp()==="http:"||Sp()==="https:"}function Sp(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iC()||_w()||"connection"in navigator)?navigator.onLine:!0}function aC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,n){this.shortDelay=e,this.longDelay=n,Wn(n>e,"Short delay should be less than long delay!"),this.isMobile=pw()||yw()}get(){return oC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nh(t,e){Wn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;On("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;On("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;On("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],uC=new Io(3e4,6e4);function Vh(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ni(t,e,n,r,s={}){return Wy(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=po({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:l,...i};return mw()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Qs(t.emulatorConfig.host)&&(u.credentials="include"),Gy.fetch()(await Ky(t,t.config.apiHost,n,c),u)})}async function Wy(t,e,n){t._canInitEmulator=!1;const r={...cC,...e};try{const s=new fC(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Xo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Xo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Xo(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ch(t,f,u);wn(t,f)}}catch(s){if(s instanceof zn)throw s;wn(t,"network-request-failed",{message:String(s)})}}async function hC(t,e,n,r,s={}){const i=await ni(t,e,n,r,s);return"mfaPendingCredential"in i&&wn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Ky(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Nh(t.config,s):`${t.config.apiScheme}://${s}`;return lC.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class fC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(tn(this.auth,"network-request-failed")),uC.get())})}}function Xo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=tn(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dC(t,e){return ni(t,"POST","/v1/accounts:delete",e)}async function Ka(t,e){return ni(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pC(t,e=!1){const n=Ot(t),r=await n.getIdToken(e),s=Dh(r);de(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Bi(vl(s.auth_time)),issuedAtTime:Bi(vl(s.iat)),expirationTime:Bi(vl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function vl(t){return Number(t)*1e3}function Dh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ha("JWT malformed, contained fewer than 3 sections"),null;try{const s=Km(n);return s?JSON.parse(s):(ha("Failed to decode base64 JWT payload"),null)}catch(s){return ha("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Cp(t){const e=Dh(t);return de(e,"internal-error"),de(typeof e.exp<"u","internal-error"),de(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ro(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof zn&&gC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function gC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bi(this.lastLoginAt),this.creationTime=Bi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function za(t){var d;const e=t.auth,n=await t.getIdToken(),r=await ro(t,Ka(e,{idToken:n}));de(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(d=s.providerUserInfo)!=null&&d.length?zy(s.providerUserInfo):[],o=yC(t.providerData,i),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),u=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new yu(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function _C(t){const e=Ot(t);await za(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function yC(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function zy(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EC(t,e){const n=await Wy(t,{},async()=>{const r=po({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Ky(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&Qs(t.emulatorConfig.host)&&(l.credentials="include"),Gy.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function TC(t,e){return ni(t,"POST","/v2/accounts:revokeToken",Vh(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){de(e.idToken,"internal-error"),de(typeof e.idToken<"u","internal-error"),de(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Cp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){de(e.length!==0,"internal-error");const n=Cp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(de(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await EC(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ns;return r&&(de(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(de(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(de(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ns,this.toJSON())}_performRefresh(){return On("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(t,e){de(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Xt{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new mC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new yu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ro(this,this.stsTokenManager.getToken(this.auth,e));return de(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return pC(this,e)}reload(){return _C(this)}_assign(e){this!==e&&(de(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Xt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await za(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Jt(this.auth.app))return Promise.reject(Wr(this.auth));const e=await this.getIdToken();return await ro(this,dC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,c=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:d,emailVerified:g,isAnonymous:y,providerData:C,stsTokenManager:P}=n;de(d&&P,e,"internal-error");const k=Ns.fromJSON(this.name,P);de(typeof d=="string",e,"internal-error"),nr(r,e.name),nr(s,e.name),de(typeof g=="boolean",e,"internal-error"),de(typeof y=="boolean",e,"internal-error"),nr(i,e.name),nr(o,e.name),nr(c,e.name),nr(l,e.name),nr(u,e.name),nr(f,e.name);const L=new Xt({uid:d,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:y,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:k,createdAt:u,lastLoginAt:f});return C&&Array.isArray(C)&&(L.providerData=C.map(D=>({...D}))),l&&(L._redirectEventId=l),L}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ns;s.updateFromServerResponse(n);const i=new Xt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await za(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];de(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?zy(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Ns;c.updateFromIdToken(r);const l=new Xt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new yu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp=new Map;function xn(t){Wn(t instanceof Function,"Expected a class definition");let e=Pp.get(t);return e?(Wn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Pp.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Qy.type="NONE";const Np=Qy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(t,e,n){return`firebase:${t}:${e}:${n}`}class Vs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=fa(this.userKey,s.apiKey,i),this.fullPersistenceKey=fa("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ka(this.auth,{idToken:e}).catch(()=>{});return n?Xt._fromGetAccountInfoResponse(this.auth,n,e):null}return Xt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Vs(xn(Np),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||xn(Np);const o=fa(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const f=await u._get(o);if(f){let d;if(typeof f=="string"){const g=await Ka(e,{idToken:f}).catch(()=>{});if(!g)break;d=await Xt._fromGetAccountInfoResponse(e,g,f)}else d=Xt._fromJSON(e,f);u!==i&&(c=d),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Vs(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Vs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Zy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Jy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(tE(e))return"Blackberry";if(nE(e))return"Webos";if(Yy(e))return"Safari";if((e.includes("chrome/")||Xy(e))&&!e.includes("edge/"))return"Chrome";if(eE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Jy(t=wt()){return/firefox\//i.test(t)}function Yy(t=wt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Xy(t=wt()){return/crios\//i.test(t)}function Zy(t=wt()){return/iemobile/i.test(t)}function eE(t=wt()){return/android/i.test(t)}function tE(t=wt()){return/blackberry/i.test(t)}function nE(t=wt()){return/webos/i.test(t)}function kh(t=wt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function vC(t=wt()){var e;return kh(t)&&!!((e=window.navigator)!=null&&e.standalone)}function IC(){return Ew()&&document.documentMode===10}function rE(t=wt()){return kh(t)||eE(t)||nE(t)||tE(t)||/windows phone/i.test(t)||Zy(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sE(t,e=[]){let n;switch(t){case"Browser":n=Vp(wt());break;case"Worker":n=`${Vp(wt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Js}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AC(t,e={}){return ni(t,"GET","/v2/passwordPolicy",Vh(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC=6;class RC{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??bC,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dp(this),this.idTokenSubscription=new Dp(this),this.beforeStateQueue=new wC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$y,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=xn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Vs.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ka(this,{idToken:e}),r=await Xt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Jt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await za(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=aC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Jt(this.app))return Promise.reject(Wr(this));const n=e?Ot(e):null;return n&&de(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&de(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Jt(this.app)?Promise.reject(Wr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Jt(this.app)?Promise.reject(Wr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await AC(this),n=new RC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new fo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await TC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&xn(e)||this._popupRedirectResolver;de(n,this,"argument-error"),this.redirectPersistenceManager=await Vs.create(this,[xn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(de(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Jt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&rC(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function xc(t){return Ot(t)}class Dp{constructor(e){this.auth=e,this.observer=null,this.addObserver=Sw(n=>this.observer=n)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function CC(t){Oh=t}function PC(t){return Oh.loadJS(t)}function NC(){return Oh.gapiScript}function VC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DC(t,e){const n=zu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Qr(i,e??{}))return s;wn(s,"already-initialized")}return n.initialize({options:e})}function kC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(xn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function OC(t,e,n){const r=xc(t);de(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=iE(e),{host:o,port:c}=xC(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){de(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),de(Qr(u,r.config.emulator)&&Qr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Qs(o)?(Ym(`${i}//${o}${l}`),Xm("Auth",!0)):MC()}function iE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function xC(t){const e=iE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:kp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:kp(o)}}}function kp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function MC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return On("not implemented")}_getIdTokenResponse(e){return On("not implemented")}_linkToIdToken(e,n){return On("not implemented")}_getReauthenticationResolver(e){return On("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ds(t,e){return hC(t,"POST","/v1/accounts:signInWithIdp",Vh(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LC="http://localhost";class Zr extends oE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Zr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Zr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ds(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ds(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ds(e,n)}buildRequest(){const e={requestUri:LC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=po(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo extends xh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends wo{constructor(){super("facebook.com")}static credential(e){return Zr._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ur.credential(e.oauthAccessToken)}catch{return null}}}ur.FACEBOOK_SIGN_IN_METHOD="facebook.com";ur.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends wo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Zr._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return kn.credential(n,r)}catch{return null}}}kn.GOOGLE_SIGN_IN_METHOD="google.com";kn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends wo{constructor(){super("github.com")}static credential(e){return Zr._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hr.credential(e.oauthAccessToken)}catch{return null}}}hr.GITHUB_SIGN_IN_METHOD="github.com";hr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends wo{constructor(){super("twitter.com")}static credential(e,n){return Zr._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return fr.credential(n,r)}catch{return null}}}fr.TWITTER_SIGN_IN_METHOD="twitter.com";fr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Xt._fromIdTokenResponse(e,r,s),o=Op(r);return new $s({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Op(r);return new $s({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Op(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa extends zn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Qa.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Qa(e,n,r,s)}}function aE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Qa._fromErrorAndOperation(t,i,e,r):i})}async function FC(t,e,n=!1){const r=await ro(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return $s._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UC(t,e,n=!1){const{auth:r}=t;if(Jt(r.app))return Promise.reject(Wr(r));const s="reauthenticate";try{const i=await ro(t,aE(r,s,e,t),n);de(i.idToken,r,"internal-error");const o=Dh(i.idToken);de(o,r,"internal-error");const{sub:c}=o;return de(t.uid===c,r,"user-mismatch"),$s._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&wn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BC(t,e,n=!1){if(Jt(t.app))return Promise.reject(Wr(t));const r="signIn",s=await aE(t,r,e),i=await $s._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function jC(t,e,n,r){return Ot(t).onIdTokenChanged(e,n,r)}function HC(t,e,n){return Ot(t).beforeAuthStateChanged(e,n)}function k1(t,e,n,r){return Ot(t).onAuthStateChanged(e,n,r)}function O1(t){return Ot(t).signOut()}const Ja="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ja,"1"),this.storage.removeItem(Ja),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qC=1e3,$C=10;class lE extends cE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=rE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);IC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,$C):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},qC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}lE.type="LOCAL";const GC=lE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE extends cE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}uE.type="SESSION";const hE=uE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Mc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await WC(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Mc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=Mh("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const g=d;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(){return window}function zC(t){vn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(){return typeof vn().WorkerGlobalScope<"u"&&typeof vn().importScripts=="function"}async function QC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function JC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function YC(){return fE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE="firebaseLocalStorageDb",XC=1,Ya="firebaseLocalStorage",pE="fbase_key";class Ao{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Lc(t,e){return t.transaction([Ya],e?"readwrite":"readonly").objectStore(Ya)}function ZC(){const t=indexedDB.deleteDatabase(dE);return new Ao(t).toPromise()}function Eu(){const t=indexedDB.open(dE,XC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ya,{keyPath:pE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ya)?e(r):(r.close(),await ZC(),e(await Eu()))})})}async function xp(t,e,n){const r=Lc(t,!0).put({[pE]:e,value:n});return new Ao(r).toPromise()}async function eP(t,e){const n=Lc(t,!1).get(e),r=await new Ao(n).toPromise();return r===void 0?null:r.value}function Mp(t,e){const n=Lc(t,!0).delete(e);return new Ao(n).toPromise()}const tP=800,nP=3;class gE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Eu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>nP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Mc._getInstance(YC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await QC(),!this.activeServiceWorker)return;this.sender=new KC(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||JC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Eu();return await xp(e,Ja,"1"),await Mp(e,Ja),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>xp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>eP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Mp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Lc(s,!1).getAll();return new Ao(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gE.type="LOCAL";const rP=gE;new Io(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mE(t,e){return e?xn(e):(de(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh extends oE{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ds(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ds(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ds(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function sP(t){return BC(t.auth,new Lh(t),t.bypassAuthState)}function iP(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),UC(n,new Lh(t),t.bypassAuthState)}async function oP(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),FC(n,new Lh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return sP;case"linkViaPopup":case"linkViaRedirect":return oP;case"reauthViaPopup":case"reauthViaRedirect":return iP;default:wn(this.auth,"internal-error")}}resolve(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP=new Io(2e3,1e4);async function x1(t,e,n){if(Jt(t.app))return Promise.reject(tn(t,"operation-not-supported-in-this-environment"));const r=xc(t);sC(t,e,xh);const s=mE(r,n);return new Br(r,"signInViaPopup",e,s).executeNotNull()}class Br extends _E{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Br.currentPopupAction&&Br.currentPopupAction.cancel(),Br.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return de(e,this.auth,"internal-error"),e}async onExecution(){Wn(this.filter.length===1,"Popup operations only handle one event");const e=Mh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Br.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,aP.get())};e()}}Br.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cP="pendingRedirect",da=new Map;class lP extends _E{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=da.get(this.auth._key());if(!e){try{const r=await uP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}da.set(this.auth._key(),e)}return this.bypassAuthState||da.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function uP(t,e){const n=dP(e),r=fP(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function hP(t,e){da.set(t._key(),e)}function fP(t){return xn(t._redirectPersistence)}function dP(t){return fa(cP,t.config.apiKey,t.name)}async function pP(t,e,n=!1){if(Jt(t.app))return Promise.reject(Wr(t));const r=xc(t),s=mE(r,e),o=await new lP(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gP=10*60*1e3;class mP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_P(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!yE(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(tn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Lp(e))}saveEventToCache(e){this.cachedEventUids.add(Lp(e)),this.lastProcessedEventTime=Date.now()}}function Lp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function yE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function _P(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yP(t,e={}){return ni(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,TP=/^https?/;async function vP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await yP(t);for(const n of e)try{if(IP(n))return}catch{}wn(t,"unauthorized-domain")}function IP(t){const e=_u(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!TP.test(n))return!1;if(EP.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wP=new Io(3e4,6e4);function Fp(){const t=vn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function AP(t){return new Promise((e,n)=>{var s,i,o;function r(){Fp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fp(),n(tn(t,"network-request-failed"))},timeout:wP.get()})}if((i=(s=vn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=vn().gapi)!=null&&o.load)r();else{const c=VC("iframefcb");return vn()[c]=()=>{gapi.load?r():n(tn(t,"network-request-failed"))},PC(`${NC()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw pa=null,e})}let pa=null;function bP(t){return pa=pa||AP(t),pa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RP=new Io(5e3,15e3),SP="__/auth/iframe",CP="emulator/auth/iframe",PP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},NP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function VP(t){const e=t.config;de(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Nh(e,CP):`https://${t.config.authDomain}/${SP}`,r={apiKey:e.apiKey,appName:t.name,v:Js},s=NP.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${po(r).slice(1)}`}async function DP(t){const e=await bP(t),n=vn().gapi;return de(n,t,"internal-error"),e.open({where:document.body,url:VP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:PP,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=tn(t,"network-request-failed"),c=vn().setTimeout(()=>{i(o)},RP.get());function l(){vn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},OP=500,xP=600,MP="_blank",LP="http://localhost";class Up{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function FP(t,e,n,r=OP,s=xP){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...kP,width:r.toString(),height:s.toString(),top:i,left:o},u=wt().toLowerCase();n&&(c=Xy(u)?MP:n),Jy(u)&&(e=e||LP,l.scrollbars="yes");const f=Object.entries(l).reduce((g,[y,C])=>`${g}${y}=${C},`,"");if(vC(u)&&c!=="_self")return UP(e||"",c),new Up(null);const d=window.open(e||"",c,f);de(d,t,"popup-blocked");try{d.focus()}catch{}return new Up(d)}function UP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BP="__/auth/handler",jP="emulator/auth/handler",HP=encodeURIComponent("fac");async function Bp(t,e,n,r,s,i){de(t.config.authDomain,t,"auth-domain-config-required"),de(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Js,eventId:s};if(e instanceof xh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Rw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,d]of Object.entries({}))o[f]=d}if(e instanceof wo){const f=e.getScopes().filter(d=>d!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),u=l?`#${HP}=${encodeURIComponent(l)}`:"";return`${qP(t)}?${po(c).slice(1)}${u}`}function qP({config:t}){return t.emulator?Nh(t,jP):`https://${t.authDomain}/${BP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il="webStorageSupport";class $P{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hE,this._completeRedirectFn=pP,this._overrideRedirectResult=hP}async _openPopup(e,n,r,s){var o;Wn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Bp(e,n,r,_u(),s);return FP(e,i,Mh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Bp(e,n,r,_u(),s);return zC(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Wn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await DP(e),r=new mP(e);return n.register("authEvent",s=>(de(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Il,{type:Il},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Il];i!==void 0&&n(!!i),wn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=vP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return rE()||Yy()||kh()}}const GP=$P;var jp="@firebase/auth",Hp="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){de(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function zP(t){Ls(new Jr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;de(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sE(t)},u=new SC(r,s,i,l);return kC(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ls(new Jr("auth-internal",e=>{const n=xc(e.getProvider("auth").getImmediate());return(r=>new WP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_r(jp,Hp,KP(t)),_r(jp,Hp,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QP=5*60,JP=Jm("authIdTokenMaxAge")||QP;let qp=null;const YP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>JP)return;const s=n==null?void 0:n.token;qp!==s&&(qp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function XP(t=n_()){const e=zu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=DC(t,{popupRedirectResolver:GP,persistence:[rP,GC,hE]}),r=Jm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=YP(i.toString());HC(n,o,()=>o(n.currentUser)),jC(n,c=>o(c))}}const s=zm("auth");return s&&OC(n,`http://${s}`),n}function ZP(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}CC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=tn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",ZP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});zP("Browser");let gn;const e0=()=>{if(gn)return gn;const t={apiKey:"AIzaSyBdXdSj1HVd84vZrwxUVON5FAIWsRuWZNo",authDomain:"lumina-slides.firebaseapp.com",projectId:"lumina-slides",storageBucket:"lumina-slides.firebasestorage.app",messagingSenderId:"308455940060",appId:"1:308455940060:web:6f346ae1c4a19dcf773919"};if(!t.apiKey)throw new Error("Missing Firebase Configuration: VITE_FIREBASE_API_KEY is not defined.");const e=t_(t),n=MS(e),r=XP(e),s=new kn;return gn={app:e,db:n,auth:r,provider:s},gn},t0=()=>{if(!gn)throw new Error("Firebase not initialized. Call initFirebase() in main.ts.");return gn.auth},M1=()=>{if(!gn)throw new Error("Firebase not initialized.");return gn.provider},bo=()=>{if(!gn)throw new Error("Firebase not initialized.");return gn.db},L1=async(t,e,n)=>{const r=bo();try{const s={...t.meta};e&&(s.authorId=e),n&&(s.authorName=n);const i={meta:s,slides:t.slides||[],savedAt:new Date().toISOString(),version:"1.0"};return(await eC(Py(r,"decks"),i)).id}catch(s){const i=s instanceof Error?s:new Error(String(s));throw console.error("Error adding document: ",i),i}},F1=async t=>{const e=bo();try{const n=zS(Py(e,"decks"),QS("meta.authorId","==",t));return(await ZS(n)).docs.map(s=>{const i=s.data();return{meta:{...i.meta,id:s.id},slides:i.slides}}).filter(s=>!s.meta.deletedAt)}catch(n){const r=n instanceof Error?n:new Error(String(n));throw console.error("Error fetching user decks: ",r),r}},U1=async t=>{const e=bo();try{const n=kc(e,"decks",t);await jy(n,{meta:{deletedAt:new Date().toISOString()}},{merge:!0})}catch(n){const r=n instanceof Error?n:new Error(String(n));throw console.error("Error soft deleting document: ",r),r}},B1=async(t,e)=>{const n=bo();try{const r={meta:e.meta||{},slides:e.slides||[],updatedAt:new Date().toISOString(),version:"1.0"},s=kc(n,"decks",t);await jy(s,r,{merge:!0})}catch(r){const s=r instanceof Error?r:new Error(String(r));throw console.error("Error updating document: ",s),s}},j1=async t=>{const e=bo();try{const n=kc(e,"decks",t),r=await XS(n);if(r.exists()){const s=r.data();return{meta:s.meta,slides:s.slides}}else return null}catch(n){const r=n instanceof Error?n:new Error(String(n));throw console.error("Error getting document: ",r),r}};/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const _s=typeof document<"u";function EE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function n0(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&EE(t.default)}const Ne=Object.assign;function wl(t,e){const n={};for(const r in e){const s=e[r];n[r]=an(s)?s.map(t):t(s)}return n}const ji=()=>{},an=Array.isArray;function $p(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const TE=/#/g,r0=/&/g,s0=/\//g,i0=/=/g,o0=/\?/g,vE=/\+/g,a0=/%5B/g,c0=/%5D/g,IE=/%5E/g,l0=/%60/g,wE=/%7B/g,u0=/%7C/g,AE=/%7D/g,h0=/%20/g;function Fh(t){return t==null?"":encodeURI(""+t).replace(u0,"|").replace(a0,"[").replace(c0,"]")}function f0(t){return Fh(t).replace(wE,"{").replace(AE,"}").replace(IE,"^")}function Tu(t){return Fh(t).replace(vE,"%2B").replace(h0,"+").replace(TE,"%23").replace(r0,"%26").replace(l0,"`").replace(wE,"{").replace(AE,"}").replace(IE,"^")}function d0(t){return Tu(t).replace(i0,"%3D")}function p0(t){return Fh(t).replace(TE,"%23").replace(o0,"%3F")}function g0(t){return p0(t).replace(s0,"%2F")}function so(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const m0=/\/$/,_0=t=>t.replace(m0,"");function Al(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return l=c>=0&&l>c?-1:l,l>=0&&(r=e.slice(0,l),i=e.slice(l,c>0?c:e.length),s=t(i.slice(1))),c>=0&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=v0(r??e,n),{fullPath:r+i+o,path:r,query:s,hash:so(o)}}function y0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Gp(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function E0(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Gs(e.matched[r],n.matched[s])&&bE(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Gs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function bE(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!T0(t[n],e[n]))return!1;return!0}function T0(t,e){return an(t)?Wp(t,e):an(e)?Wp(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function Wp(t,e){return an(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function v0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const rr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let vu=function(t){return t.pop="pop",t.push="push",t}({}),bl=function(t){return t.back="back",t.forward="forward",t.unknown="",t}({});function I0(t){if(!t)if(_s){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),_0(t)}const w0=/^[^#]+#/;function A0(t,e){return t.replace(w0,"#")+e}function b0(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Fc=()=>({left:window.scrollX,top:window.scrollY});function R0(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=b0(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Kp(t,e){return(history.state?history.state.position-e:-1)+t}const Iu=new Map;function S0(t,e){Iu.set(t,e)}function C0(t){const e=Iu.get(t);return Iu.delete(t),e}function P0(t){return typeof t=="string"||t&&typeof t=="object"}function RE(t){return typeof t=="string"||typeof t=="symbol"}let $e=function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t}({});const SE=Symbol("");$e.MATCHER_NOT_FOUND+"",$e.NAVIGATION_GUARD_REDIRECT+"",$e.NAVIGATION_ABORTED+"",$e.NAVIGATION_CANCELLED+"",$e.NAVIGATION_DUPLICATED+"";function Ws(t,e){return Ne(new Error,{type:t,[SE]:!0},e)}function Sn(t,e){return t instanceof Error&&SE in t&&(e==null||!!(t.type&e))}const N0=["params","query","hash"];function V0(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of N0)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function D0(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(vE," "),i=s.indexOf("="),o=so(i<0?s:s.slice(0,i)),c=i<0?null:so(s.slice(i+1));if(o in e){let l=e[o];an(l)||(l=e[o]=[l]),l.push(c)}else e[o]=c}return e}function zp(t){let e="";for(let n in t){const r=t[n];if(n=d0(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(an(r)?r.map(s=>s&&Tu(s)):[r&&Tu(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function k0(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=an(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const O0=Symbol(""),Qp=Symbol(""),Uc=Symbol(""),Uh=Symbol(""),wu=Symbol("");function vi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function lr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=g=>{g===!1?l(Ws($e.NAVIGATION_ABORTED,{from:n,to:e})):g instanceof Error?l(g):P0(g)?l(Ws($e.NAVIGATION_GUARD_REDIRECT,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),c())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let d=Promise.resolve(f);t.length<3&&(d=d.then(u)),d.catch(g=>l(g))})}function Rl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(EE(l)){const u=(l.__vccOpts||l)[e];u&&i.push(lr(u,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const d=n0(f)?f.default:f;o.mods[c]=f,o.components[c]=d;const g=(d.__vccOpts||d)[e];return g&&lr(g,n,r,o,c,s)()}))}}return i}function x0(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>Gs(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>Gs(u,l))||s.push(l))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let M0=()=>location.protocol+"//"+location.host;function CE(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let o=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(o);return c[0]!=="/"&&(c="/"+c),Gp(c,"")}return Gp(n,t)+r+s}function L0(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const y=CE(t,location),C=n.value,P=e.value;let k=0;if(g){if(n.value=y,e.value=g,o&&o===C){o=null;return}k=P?g.position-P.position:0}else r(y);s.forEach(L=>{L(n.value,C,{delta:k,type:vu.pop,direction:k?k>0?bl.forward:bl.back:bl.unknown})})};function l(){o=n.value}function u(g){s.push(g);const y=()=>{const C=s.indexOf(g);C>-1&&s.splice(C,1)};return i.push(y),y}function f(){if(document.visibilityState==="hidden"){const{history:g}=window;if(!g.state)return;g.replaceState(Ne({},g.state,{scroll:Fc()}),"")}}function d(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",c),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:l,listen:u,destroy:d}}function Jp(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Fc():null}}function F0(t){const{history:e,location:n}=window,r={value:CE(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,f){const d=t.indexOf("#"),g=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:M0()+t+l;try{e[f?"replaceState":"pushState"](u,"",g),s.value=u}catch(y){console.error(y),n[f?"replace":"assign"](g)}}function o(l,u){i(l,Ne({},e.state,Jp(s.value.back,l,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=l}function c(l,u){const f=Ne({},s.value,e.state,{forward:l,scroll:Fc()});i(f.current,f,!0),i(l,Ne({},Jp(r.value,l,null),{position:f.position+1},u),!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function U0(t){t=I0(t);const e=F0(t),n=L0(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ne({location:"",base:t,go:r,createHref:A0.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let jr=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t}({});var nt=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t}(nt||{});const B0={type:jr.Static,value:""},j0=/[a-zA-Z0-9_]/;function H0(t){if(!t)return[[]];if(t==="/")return[[B0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${u}": ${y}`)}let n=nt.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",f="";function d(){u&&(n===nt.Static?i.push({type:jr.Static,value:u}):n===nt.Param||n===nt.ParamRegExp||n===nt.ParamRegExpEnd?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:jr.Param,value:u,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==nt.ParamRegExp){r=n,n=nt.EscapeNext;continue}switch(n){case nt.Static:l==="/"?(u&&d(),o()):l===":"?(d(),n=nt.Param):g();break;case nt.EscapeNext:g(),n=r;break;case nt.Param:l==="("?n=nt.ParamRegExp:j0.test(l)?g():(d(),n=nt.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case nt.ParamRegExp:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=nt.ParamRegExpEnd:f+=l;break;case nt.ParamRegExpEnd:d(),n=nt.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===nt.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}const Yp="[^/]+?",q0={sensitive:!1,strict:!1,start:!0,end:!0};var Rt=function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t}(Rt||{});const $0=/[.+*?^${}()[\]/\\]/g;function G0(t,e){const n=Ne({},q0,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[Rt.Root];n.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const g=u[d];let y=Rt.Segment+(n.sensitive?Rt.BonusCaseSensitive:0);if(g.type===jr.Static)d||(s+="/"),s+=g.value.replace($0,"\\$&"),y+=Rt.Static;else if(g.type===jr.Param){const{value:C,repeatable:P,optional:k,regexp:L}=g;i.push({name:C,repeatable:P,optional:k});const D=L||Yp;if(D!==Yp){y+=Rt.BonusCustomRegExp;try{`${D}`}catch(N){throw new Error(`Invalid custom RegExp for param "${C}" (${D}): `+N.message)}}let R=P?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;d||(R=k&&u.length<2?`(?:/${R})`:"/"+R),k&&(R+="?"),s+=R,y+=Rt.Dynamic,k&&(y+=Rt.BonusOptional),P&&(y+=Rt.BonusRepeatable),D===".*"&&(y+=Rt.BonusWildcard)}f.push(y)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=Rt.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const f=u.match(o),d={};if(!f)return null;for(let g=1;g<f.length;g++){const y=f[g]||"",C=i[g-1];d[C.name]=y&&C.repeatable?y.split("/"):y}return d}function l(u){let f="",d=!1;for(const g of t){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const y of g)if(y.type===jr.Static)f+=y.value;else if(y.type===jr.Param){const{value:C,repeatable:P,optional:k}=y,L=C in u?u[C]:"";if(an(L)&&!P)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const D=an(L)?L.join("/"):L;if(!D)if(k)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${C}"`);f+=D}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function W0(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===Rt.Static+Rt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===Rt.Static+Rt.Segment?1:-1:0}function PE(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=W0(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Xp(r))return 1;if(Xp(s))return-1}return s.length-r.length}function Xp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const K0={strict:!1,end:!0,sensitive:!1};function z0(t,e,n){const r=G0(H0(t.path),n),s=Ne(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Q0(t,e){const n=[],r=new Map;e=$p(K0,e);function s(d){return r.get(d)}function i(d,g,y){const C=!y,P=eg(d);P.aliasOf=y&&y.record;const k=$p(e,d),L=[P];if("alias"in d){const N=typeof d.alias=="string"?[d.alias]:d.alias;for(const x of N)L.push(eg(Ne({},P,{components:y?y.record.components:P.components,path:x,aliasOf:y?y.record:P})))}let D,R;for(const N of L){const{path:x}=N;if(g&&x[0]!=="/"){const U=g.record.path,w=U[U.length-1]==="/"?"":"/";N.path=g.record.path+(x&&w+x)}if(D=z0(N,g,k),y?y.alias.push(D):(R=R||D,R!==D&&R.alias.push(D),C&&d.name&&!tg(D)&&o(d.name)),NE(D)&&l(D),P.children){const U=P.children;for(let w=0;w<U.length;w++)i(U[w],D,y&&y.children[w])}y=y||D}return R?()=>{o(R)}:ji}function o(d){if(RE(d)){const g=r.get(d);g&&(r.delete(d),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(d);g>-1&&(n.splice(g,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function c(){return n}function l(d){const g=X0(d,n);n.splice(g,0,d),d.record.name&&!tg(d)&&r.set(d.record.name,d)}function u(d,g){let y,C={},P,k;if("name"in d&&d.name){if(y=r.get(d.name),!y)throw Ws($e.MATCHER_NOT_FOUND,{location:d});k=y.record.name,C=Ne(Zp(g.params,y.keys.filter(R=>!R.optional).concat(y.parent?y.parent.keys.filter(R=>R.optional):[]).map(R=>R.name)),d.params&&Zp(d.params,y.keys.map(R=>R.name))),P=y.stringify(C)}else if(d.path!=null)P=d.path,y=n.find(R=>R.re.test(P)),y&&(C=y.parse(P),k=y.record.name);else{if(y=g.name?r.get(g.name):n.find(R=>R.re.test(g.path)),!y)throw Ws($e.MATCHER_NOT_FOUND,{location:d,currentLocation:g});k=y.record.name,C=Ne({},g.params,d.params),P=y.stringify(C)}const L=[];let D=y;for(;D;)L.unshift(D.record),D=D.parent;return{name:k,path:P,params:C,matched:L,meta:Y0(L)}}t.forEach(d=>i(d));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function Zp(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function eg(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:J0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function J0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function tg(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Y0(t){return t.reduce((e,n)=>Ne(e,n.meta),{})}function X0(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;PE(t,e[i])<0?r=i:n=i+1}const s=Z0(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Z0(t){let e=t;for(;e=e.parent;)if(NE(e)&&PE(t,e)===0)return e}function NE({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function ng(t){const e=en(Uc),n=en(Uh),r=Qt(()=>{const l=Mn(t.to);return e.resolve(l)}),s=Qt(()=>{const{matched:l}=r.value,{length:u}=l,f=l[u-1],d=n.matched;if(!f||!d.length)return-1;const g=d.findIndex(Gs.bind(null,f));if(g>-1)return g;const y=rg(l[u-2]);return u>1&&rg(f)===y&&d[d.length-1].path!==y?d.findIndex(Gs.bind(null,l[u-2])):g}),i=Qt(()=>s.value>-1&&sN(n.params,r.value.params)),o=Qt(()=>s.value>-1&&s.value===n.matched.length-1&&bE(n.params,r.value.params));function c(l={}){if(rN(l)){const u=e[Mn(t.replace)?"replace":"push"](Mn(t.to)).catch(ji);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Qt(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function eN(t){return t.length===1?t[0]:t}const tN=co({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:ng,setup(t,{slots:e}){const n=hc(ng(t)),{options:r}=en(Uc),s=Qt(()=>({[sg(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[sg(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&eN(e.default(n));return t.custom?i:$u("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),nN=tN;function rN(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function sN(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!an(s)||s.length!==r.length||r.some((i,o)=>i.valueOf()!==s[o].valueOf()))return!1}return!0}function rg(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const sg=(t,e,n)=>t??e??n,iN=co({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=en(wu),s=Qt(()=>t.route||r.value),i=en(Qp,0),o=Qt(()=>{let u=Mn(i);const{matched:f}=s.value;let d;for(;(d=f[u])&&!d.components;)u++;return u}),c=Qt(()=>s.value.matched[o.value]);ea(Qp,Qt(()=>o.value+1)),ea(O0,c),ea(wu,s);const l=Ni();return As(()=>[l.value,c.value,t.name],([u,f,d],[g,y,C])=>{f&&(f.instances[d]=u,y&&y!==f&&u&&u===g&&(f.leaveGuards.size||(f.leaveGuards=y.leaveGuards),f.updateGuards.size||(f.updateGuards=y.updateGuards))),u&&f&&(!y||!Gs(f,y)||!g)&&(f.enterCallbacks[d]||[]).forEach(P=>P(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,d=c.value,g=d&&d.components[f];if(!g)return ig(n.default,{Component:g,route:u});const y=d.props[f],C=y?y===!0?u.params:typeof y=="function"?y(u):y:null,k=$u(g,Ne({},C,e,{onVnodeUnmounted:L=>{L.component.isUnmounted&&(d.instances[f]=null)},ref:l}));return ig(n.default,{Component:k,route:u})||k}}});function ig(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const oN=iN;function aN(t){const e=Q0(t.routes,t),n=t.parseQuery||D0,r=t.stringifyQuery||zp,s=t.history,i=vi(),o=vi(),c=vi(),l=Pg(rr);let u=rr;_s&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=wl.bind(null,B=>""+B),d=wl.bind(null,g0),g=wl.bind(null,so);function y(B,ee){let J,ie;return RE(B)?(J=e.getRecordMatcher(B),ie=ee):ie=B,e.addRoute(ie,J)}function C(B){const ee=e.getRecordMatcher(B);ee&&e.removeRoute(ee)}function P(){return e.getRoutes().map(B=>B.record)}function k(B){return!!e.getRecordMatcher(B)}function L(B,ee){if(ee=Ne({},ee||l.value),typeof B=="string"){const S=Al(n,B,ee.path),O=e.resolve({path:S.path},ee),q=s.createHref(S.fullPath);return Ne(S,O,{params:g(O.params),hash:so(S.hash),redirectedFrom:void 0,href:q})}let J;if(B.path!=null)J=Ne({},B,{path:Al(n,B.path,ee.path).path});else{const S=Ne({},B.params);for(const O in S)S[O]==null&&delete S[O];J=Ne({},B,{params:d(S)}),ee.params=d(ee.params)}const ie=e.resolve(J,ee),_e=B.hash||"";ie.params=f(g(ie.params));const Oe=y0(r,Ne({},B,{hash:f0(_e),path:ie.path})),I=s.createHref(Oe);return Ne({fullPath:Oe,hash:_e,query:r===zp?k0(B.query):B.query||{}},ie,{redirectedFrom:void 0,href:I})}function D(B){return typeof B=="string"?Al(n,B,l.value.path):Ne({},B)}function R(B,ee){if(u!==B)return Ws($e.NAVIGATION_CANCELLED,{from:ee,to:B})}function N(B){return w(B)}function x(B){return N(Ne(D(B),{replace:!0}))}function U(B,ee){const J=B.matched[B.matched.length-1];if(J&&J.redirect){const{redirect:ie}=J;let _e=typeof ie=="function"?ie(B,ee):ie;return typeof _e=="string"&&(_e=_e.includes("?")||_e.includes("#")?_e=D(_e):{path:_e},_e.params={}),Ne({query:B.query,hash:B.hash,params:_e.path!=null?{}:B.params},_e)}}function w(B,ee){const J=u=L(B),ie=l.value,_e=B.state,Oe=B.force,I=B.replace===!0,S=U(J,ie);if(S)return w(Ne(D(S),{state:typeof S=="object"?Ne({},_e,S.state):_e,force:Oe,replace:I}),ee||J);const O=J;O.redirectedFrom=ee;let q;return!Oe&&E0(r,ie,J)&&(q=Ws($e.NAVIGATION_DUPLICATED,{to:O,from:ie}),xt(ie,ie,!0,!1)),(q?Promise.resolve(q):v(O,ie)).catch(F=>Sn(F)?Sn(F,$e.NAVIGATION_GUARD_REDIRECT)?F:cn(F):Z(F,O,ie)).then(F=>{if(F){if(Sn(F,$e.NAVIGATION_GUARD_REDIRECT))return w(Ne({replace:I},D(F.to),{state:typeof F.to=="object"?Ne({},_e,F.to.state):_e,force:Oe}),ee||O)}else F=A(O,ie,!0,I,_e);return b(O,ie,F),F})}function E(B,ee){const J=R(B,ee);return J?Promise.reject(J):Promise.resolve()}function _(B){const ee=Gt.values().next().value;return ee&&typeof ee.runWithContext=="function"?ee.runWithContext(B):B()}function v(B,ee){let J;const[ie,_e,Oe]=x0(B,ee);J=Rl(ie.reverse(),"beforeRouteLeave",B,ee);for(const S of ie)S.leaveGuards.forEach(O=>{J.push(lr(O,B,ee))});const I=E.bind(null,B,ee);return J.push(I),pt(J).then(()=>{J=[];for(const S of i.list())J.push(lr(S,B,ee));return J.push(I),pt(J)}).then(()=>{J=Rl(_e,"beforeRouteUpdate",B,ee);for(const S of _e)S.updateGuards.forEach(O=>{J.push(lr(O,B,ee))});return J.push(I),pt(J)}).then(()=>{J=[];for(const S of Oe)if(S.beforeEnter)if(an(S.beforeEnter))for(const O of S.beforeEnter)J.push(lr(O,B,ee));else J.push(lr(S.beforeEnter,B,ee));return J.push(I),pt(J)}).then(()=>(B.matched.forEach(S=>S.enterCallbacks={}),J=Rl(Oe,"beforeRouteEnter",B,ee,_),J.push(I),pt(J))).then(()=>{J=[];for(const S of o.list())J.push(lr(S,B,ee));return J.push(I),pt(J)}).catch(S=>Sn(S,$e.NAVIGATION_CANCELLED)?S:Promise.reject(S))}function b(B,ee,J){c.list().forEach(ie=>_(()=>ie(B,ee,J)))}function A(B,ee,J,ie,_e){const Oe=R(B,ee);if(Oe)return Oe;const I=ee===rr,S=_s?history.state:{};J&&(ie||I?s.replace(B.fullPath,Ne({scroll:I&&S&&S.scroll},_e)):s.push(B.fullPath,_e)),l.value=B,xt(B,ee,J,I),cn()}let T;function le(){T||(T=s.listen((B,ee,J)=>{if(!Wt.listening)return;const ie=L(B),_e=U(ie,Wt.currentRoute.value);if(_e){w(Ne(_e,{replace:!0,force:!0}),ie).catch(ji);return}u=ie;const Oe=l.value;_s&&S0(Kp(Oe.fullPath,J.delta),Fc()),v(ie,Oe).catch(I=>Sn(I,$e.NAVIGATION_ABORTED|$e.NAVIGATION_CANCELLED)?I:Sn(I,$e.NAVIGATION_GUARD_REDIRECT)?(w(Ne(D(I.to),{force:!0}),ie).then(S=>{Sn(S,$e.NAVIGATION_ABORTED|$e.NAVIGATION_DUPLICATED)&&!J.delta&&J.type===vu.pop&&s.go(-1,!1)}).catch(ji),Promise.reject()):(J.delta&&s.go(-J.delta,!1),Z(I,ie,Oe))).then(I=>{I=I||A(ie,Oe,!1),I&&(J.delta&&!Sn(I,$e.NAVIGATION_CANCELLED)?s.go(-J.delta,!1):J.type===vu.pop&&Sn(I,$e.NAVIGATION_ABORTED|$e.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),b(ie,Oe,I)}).catch(ji)}))}let Ee=vi(),ne=vi(),he;function Z(B,ee,J){cn(B);const ie=ne.list();return ie.length?ie.forEach(_e=>_e(B,ee,J)):console.error(B),Promise.reject(B)}function Ce(){return he&&l.value!==rr?Promise.resolve():new Promise((B,ee)=>{Ee.add([B,ee])})}function cn(B){return he||(he=!B,le(),Ee.list().forEach(([ee,J])=>B?J(B):ee()),Ee.reset()),B}function xt(B,ee,J,ie){const{scrollBehavior:_e}=t;if(!_s||!_e)return Promise.resolve();const Oe=!J&&C0(Kp(B.fullPath,0))||(ie||!J)&&history.state&&history.state.scroll||null;return pc().then(()=>_e(B,ee,Oe)).then(I=>I&&R0(I)).catch(I=>Z(I,B,ee))}const ct=B=>s.go(B);let An;const Gt=new Set,Wt={currentRoute:l,listening:!0,addRoute:y,removeRoute:C,clearRoutes:e.clearRoutes,hasRoute:k,getRoutes:P,resolve:L,options:t,push:N,replace:x,go:ct,back:()=>ct(-1),forward:()=>ct(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:ne.add,isReady:Ce,install(B){B.component("RouterLink",nN),B.component("RouterView",oN),B.config.globalProperties.$router=Wt,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>Mn(l)}),_s&&!An&&l.value===rr&&(An=!0,N(s.location).catch(ie=>{}));const ee={};for(const ie in rr)Object.defineProperty(ee,ie,{get:()=>l.value[ie],enumerable:!0});B.provide(Uc,Wt),B.provide(Uh,Cg(ee)),B.provide(wu,l);const J=B.unmount;Gt.add(B),B.unmount=function(){Gt.delete(B),Gt.size<1&&(u=rr,T&&T(),T=null,l.value=rr,An=!1,he=!1),J()}}};function pt(B){return B.reduce((ee,J)=>ee.then(()=>_(J)),Promise.resolve())}return Wt}function H1(){return en(Uc)}function q1(t){return en(Uh)}const cN=[{path:"/",component:()=>Kt(()=>import("./SiteLayout-DXXue-IZ.js"),__vite__mapDeps([0,1,2,3])),children:[{path:"",name:"home",component:()=>Kt(()=>import("./SiteHome-CkKBnOBh.js"),__vite__mapDeps([4,5,6,1,2,7,8,9,10]))},{path:"dashboard",name:"dashboard",component:()=>Kt(()=>import("./SiteDashboard-DpE5X8qO.js"),__vite__mapDeps([11,1,2,12])),meta:{requiresAuth:!0}},{path:"examples",name:"examples",component:()=>Kt(()=>import("./SiteExamples-DroSkvrH.js"),[])},{path:"docs",name:"docs",component:()=>Kt(()=>import("./SiteDocs-7Jcn32_C.js"),__vite__mapDeps([13,5,6,1,2,7,8,9,14]))},{path:"playground",name:"playground",component:()=>Kt(()=>import("./SitePlayground-Cm3CRFmC.js"),__vite__mapDeps([15,5,6,1,2,7,8,16]))},{path:"prompt-builder",name:"prompt-builder",component:()=>Kt(()=>import("./SitePromptBuilder-BICt7Pvh.js"),[])},{path:"api",name:"api",component:()=>Kt(()=>import("./SiteApi-CuoXs7a7.js"),[])}]},{path:"/studio/:id?",name:"studio",component:()=>Kt(()=>import("./StudioView-B70mCisS.js"),__vite__mapDeps([17,6,1,2,7])),meta:{requiresAuth:!0}},{path:"/deck/:id",name:"deck",component:()=>Kt(()=>import("./DeckView-Dzc9Ofk1.js"),__vite__mapDeps([18,5,6,1,2,7,8]))}],VE=aN({history:U0("/lumina-slides/"),routes:cN,scrollBehavior(t,e,n){return n||{top:0}}});VE.beforeEach(async(t,e,n)=>{if(t.matched.some(s=>s.meta.requiresAuth))try{t0().currentUser}catch{}n()});try{e0()}catch(t){console.error("Failed to initialize Firebase:",t)}const DE=zl(ew);DE.use(VE);DE.mount("#app");export{EN as $,HN as A,F1 as B,P1 as C,ic as D,C1 as E,at as F,U1 as G,L1 as H,ea as I,en as J,BN as K,rI as L,zl as M,iv as N,Gg as O,Qe as P,v1 as Q,fg as R,wN as S,I1 as T,g1 as U,UN as V,ma as W,Ss as X,o1 as Y,VN as Z,$r as _,Tm as a,Tv as a$,S1 as a0,TN as a1,Gu as a2,IN as a3,sn as a4,oo as a5,It as a6,nc as a7,Hn as a8,T1 as a9,N1 as aA,ON as aB,LN as aC,MN as aD,xN as aE,f1 as aF,V1 as aG,lI as aH,dc as aI,pr as aJ,jn as aK,rt as aL,h1 as aM,Ft as aN,Ir as aO,LT as aP,t1 as aQ,n1 as aR,pI as aS,lN as aT,gv as aU,yv as aV,Ou as aW,Jg as aX,mv as aY,Iv as aZ,vv as a_,Wv as aa,r1 as ab,Gv as ac,JI as ad,qN as ae,jT as af,FN as ag,kI as ah,KN as ai,zN as aj,YN as ak,QN as al,WN as am,A1 as an,JN as ao,m1 as ap,fN as aq,uN as ar,Ut as as,_T as at,vN as au,Vu as av,nI as aw,$u as ax,zs as ay,CN as az,je as b,O1 as b$,hN as b0,Ev as b1,ku as b2,WT as b3,VI as b4,bN as b5,Vg as b6,AN as b7,Ta as b8,hc as b9,w1 as bA,xI as bB,DN as bC,i1 as bD,ev as bE,b1 as bF,ZN as bG,kN as bH,$g as bI,Mm as bJ,$I as bK,Lm as bL,qI as bM,EI as bN,uI as bO,p1 as bP,PN as bQ,NN as bR,tv as bS,s1 as bT,XN as bU,d1 as bV,RN as bW,B1 as bX,Kt as bY,t0 as bZ,k1 as b_,Nl as ba,u1 as bb,QI as bc,$N as bd,jN as be,E1 as bf,Wi as bg,Ra as bh,_1 as bi,vr as bj,Cg as bk,pN as bl,Pg as bm,ZT as bn,y1 as bo,dN as bp,Zo as bq,GN as br,be as bs,yN as bt,_N as bu,mN as bv,a1 as bw,gN as bx,e1 as by,R1 as bz,eI as c,x1 as c0,M1 as c1,co as d,l1 as e,vm as f,H1 as g,Av as h,Fl as i,q1 as j,Qt as k,As as l,uo as m,oc as n,Qi as o,xu as p,c1 as q,Ni as r,SN as s,gT as t,Mn as u,Kl as v,Fg as w,pc as x,e0 as y,j1 as z};
