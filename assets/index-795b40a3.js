(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function e(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=e(s);fetch(s.href,n)}})();function e0(c,a){const e=Object.create(null),r=c.split(",");for(let s=0;s<r.length;s++)e[r[s]]=!0;return a?s=>!!e[s.toLowerCase()]:s=>!!e[s]}const c2={},K1=[],B2=()=>{},Ft=()=>!1,Dt=/^on[^a-z]/,A4=c=>Dt.test(c),r0=c=>c.startsWith("onUpdate:"),u2=Object.assign,s0=(c,a)=>{const e=c.indexOf(a);e>-1&&c.splice(e,1)},Ot=Object.prototype.hasOwnProperty,W=(c,a)=>Ot.call(c,a),O=Array.isArray,Y1=c=>P4(c)==="[object Map]",l7=c=>P4(c)==="[object Set]",I=c=>typeof c=="function",o2=c=>typeof c=="string",n0=c=>typeof c=="symbol",s2=c=>c!==null&&typeof c=="object",o7=c=>s2(c)&&I(c.then)&&I(c.catch),f7=Object.prototype.toString,P4=c=>f7.call(c),Ut=c=>P4(c).slice(8,-1),m7=c=>P4(c)==="[object Object]",i0=c=>o2(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,m4=e0(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),T4=c=>{const a=Object.create(null);return e=>a[e]||(a[e]=c(e))},It=/-(\w)/g,X2=T4(c=>c.replace(It,(a,e)=>e?e.toUpperCase():"")),qt=/\B([A-Z])/g,t3=T4(c=>c.replace(qt,"-$1").toLowerCase()),_4=T4(c=>c.charAt(0).toUpperCase()+c.slice(1)),m6=T4(c=>c?`on${_4(c)}`:""),N3=(c,a)=>!Object.is(c,a),u4=(c,a)=>{for(let e=0;e<c.length;e++)c[e](a)},d4=(c,a,e)=>{Object.defineProperty(c,a,{configurable:!0,enumerable:!1,value:e})},N6=c=>{const a=parseFloat(c);return isNaN(a)?c:a};let B8;const S6=()=>B8||(B8=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function t0(c){if(O(c)){const a={};for(let e=0;e<c.length;e++){const r=c[e],s=o2(r)?$t(r):t0(r);if(s)for(const n in s)a[n]=s[n]}return a}else{if(o2(c))return c;if(s2(c))return c}}const Gt=/;(?![^(]*\))/g,Wt=/:([^]+)/,jt=/\/\*[^]*?\*\//g;function $t(c){const a={};return c.replace(jt,"").split(Gt).forEach(e=>{if(e){const r=e.split(Wt);r.length>1&&(a[r[0].trim()]=r[1].trim())}}),a}function l0(c){let a="";if(o2(c))a=c;else if(O(c))for(let e=0;e<c.length;e++){const r=l0(c[e]);r&&(a+=r+" ")}else if(s2(c))for(const e in c)c[e]&&(a+=e+" ");return a.trim()}const Kt="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Yt=e0(Kt);function u7(c){return!!c||c===""}const F8=c=>o2(c)?c:c==null?"":O(c)||s2(c)&&(c.toString===f7||!I(c.toString))?JSON.stringify(c,v7,2):String(c),v7=(c,a)=>a&&a.__v_isRef?v7(c,a.value):Y1(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((e,[r,s])=>(e[`${r} =>`]=s,e),{})}:l7(a)?{[`Set(${a.size})`]:[...a.values()]}:s2(a)&&!O(a)&&!m7(a)?String(a):a;let T2;class Xt{constructor(a=!1){this.detached=a,this._active=!0,this.effects=[],this.cleanups=[],this.parent=T2,!a&&T2&&(this.index=(T2.scopes||(T2.scopes=[])).push(this)-1)}get active(){return this._active}run(a){if(this._active){const e=T2;try{return T2=this,a()}finally{T2=e}}}on(){T2=this}off(){T2=this.parent}stop(a){if(this._active){let e,r;for(e=0,r=this.effects.length;e<r;e++)this.effects[e].stop();for(e=0,r=this.cleanups.length;e<r;e++)this.cleanups[e]();if(this.scopes)for(e=0,r=this.scopes.length;e<r;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!a){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Qt(c,a=T2){a&&a.active&&a.effects.push(c)}function Jt(){return T2}const o0=c=>{const a=new Set(c);return a.w=0,a.n=0,a},h7=c=>(c.w&p1)>0,H7=c=>(c.n&p1)>0,Zt=({deps:c})=>{if(c.length)for(let a=0;a<c.length;a++)c[a].w|=p1},cl=c=>{const{deps:a}=c;if(a.length){let e=0;for(let r=0;r<a.length;r++){const s=a[r];h7(s)&&!H7(s)?s.delete(c):a[e++]=s,s.w&=~p1,s.n&=~p1}a.length=e}},w6=new WeakMap;let z3=0,p1=1;const y6=30;let _2;const k1=Symbol(""),k6=Symbol("");class f0{constructor(a,e=null,r){this.fn=a,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,Qt(this,r)}run(){if(!this.active)return this.fn();let a=_2,e=H1;for(;a;){if(a===this)return;a=a.parent}try{return this.parent=_2,_2=this,H1=!0,p1=1<<++z3,z3<=y6?Zt(this):D8(this),this.fn()}finally{z3<=y6&&cl(this),p1=1<<--z3,_2=this.parent,H1=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){_2===this?this.deferStop=!0:this.active&&(D8(this),this.onStop&&this.onStop(),this.active=!1)}}function D8(c){const{deps:a}=c;if(a.length){for(let e=0;e<a.length;e++)a[e].delete(c);a.length=0}}let H1=!0;const z7=[];function l3(){z7.push(H1),H1=!1}function o3(){const c=z7.pop();H1=c===void 0?!0:c}function N2(c,a,e){if(H1&&_2){let r=w6.get(c);r||w6.set(c,r=new Map);let s=r.get(e);s||r.set(e,s=o0()),p7(s)}}function p7(c,a){let e=!1;z3<=y6?H7(c)||(c.n|=p1,e=!h7(c)):e=!c.has(_2),e&&(c.add(_2),_2.deps.push(c))}function e1(c,a,e,r,s,n){const i=w6.get(c);if(!i)return;let t=[];if(a==="clear")t=[...i.values()];else if(e==="length"&&O(c)){const l=Number(r);i.forEach((f,o)=>{(o==="length"||o>=l)&&t.push(f)})}else switch(e!==void 0&&t.push(i.get(e)),a){case"add":O(c)?i0(e)&&t.push(i.get("length")):(t.push(i.get(k1)),Y1(c)&&t.push(i.get(k6)));break;case"delete":O(c)||(t.push(i.get(k1)),Y1(c)&&t.push(i.get(k6)));break;case"set":Y1(c)&&t.push(i.get(k1));break}if(t.length===1)t[0]&&A6(t[0]);else{const l=[];for(const f of t)f&&l.push(...f);A6(o0(l))}}function A6(c,a){const e=O(c)?c:[...c];for(const r of e)r.computed&&O8(r);for(const r of e)r.computed||O8(r)}function O8(c,a){(c!==_2||c.allowRecurse)&&(c.scheduler?c.scheduler():c.run())}const al=e0("__proto__,__v_isRef,__isVue"),V7=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(n0)),el=m0(),rl=m0(!1,!0),sl=m0(!0),U8=nl();function nl(){const c={};return["includes","indexOf","lastIndexOf"].forEach(a=>{c[a]=function(...e){const r=j(this);for(let n=0,i=this.length;n<i;n++)N2(r,"get",n+"");const s=r[a](...e);return s===-1||s===!1?r[a](...e.map(j)):s}}),["push","pop","shift","unshift","splice"].forEach(a=>{c[a]=function(...e){l3();const r=j(this)[a].apply(this,e);return o3(),r}}),c}function il(c){const a=j(this);return N2(a,"has",c),a.hasOwnProperty(c)}function m0(c=!1,a=!1){return function(r,s,n){if(s==="__v_isReactive")return!c;if(s==="__v_isReadonly")return c;if(s==="__v_isShallow")return a;if(s==="__v_raw"&&n===(c?a?Ll:g7:a?L7:C7).get(r))return r;const i=O(r);if(!c){if(i&&W(U8,s))return Reflect.get(U8,s,n);if(s==="hasOwnProperty")return il}const t=Reflect.get(r,s,n);return(n0(s)?V7.has(s):al(s))||(c||N2(r,"get",s),a)?t:V2(t)?i&&i0(s)?t:t.value:s2(t)?c?b7(t):D3(t):t}}const tl=d7(),ll=d7(!0);function d7(c=!1){return function(e,r,s,n){let i=e[r];if(c3(i)&&V2(i)&&!V2(s))return!1;if(!c&&(!M4(s)&&!c3(s)&&(i=j(i),s=j(s)),!O(e)&&V2(i)&&!V2(s)))return i.value=s,!0;const t=O(e)&&i0(r)?Number(r)<e.length:W(e,r),l=Reflect.set(e,r,s,n);return e===j(n)&&(t?N3(s,i)&&e1(e,"set",r,s):e1(e,"add",r,s)),l}}function ol(c,a){const e=W(c,a);c[a];const r=Reflect.deleteProperty(c,a);return r&&e&&e1(c,"delete",a,void 0),r}function fl(c,a){const e=Reflect.has(c,a);return(!n0(a)||!V7.has(a))&&N2(c,"has",a),e}function ml(c){return N2(c,"iterate",O(c)?"length":k1),Reflect.ownKeys(c)}const M7={get:el,set:tl,deleteProperty:ol,has:fl,ownKeys:ml},ul={get:sl,set(c,a){return!0},deleteProperty(c,a){return!0}},vl=u2({},M7,{get:rl,set:ll}),u0=c=>c,R4=c=>Reflect.getPrototypeOf(c);function X3(c,a,e=!1,r=!1){c=c.__v_raw;const s=j(c),n=j(a);e||(a!==n&&N2(s,"get",a),N2(s,"get",n));const{has:i}=R4(s),t=r?u0:e?H0:S3;if(i.call(s,a))return t(c.get(a));if(i.call(s,n))return t(c.get(n));c!==s&&c.get(a)}function Q3(c,a=!1){const e=this.__v_raw,r=j(e),s=j(c);return a||(c!==s&&N2(r,"has",c),N2(r,"has",s)),c===s?e.has(c):e.has(c)||e.has(s)}function J3(c,a=!1){return c=c.__v_raw,!a&&N2(j(c),"iterate",k1),Reflect.get(c,"size",c)}function I8(c){c=j(c);const a=j(this);return R4(a).has.call(a,c)||(a.add(c),e1(a,"add",c,c)),this}function q8(c,a){a=j(a);const e=j(this),{has:r,get:s}=R4(e);let n=r.call(e,c);n||(c=j(c),n=r.call(e,c));const i=s.call(e,c);return e.set(c,a),n?N3(a,i)&&e1(e,"set",c,a):e1(e,"add",c,a),this}function G8(c){const a=j(this),{has:e,get:r}=R4(a);let s=e.call(a,c);s||(c=j(c),s=e.call(a,c)),r&&r.call(a,c);const n=a.delete(c);return s&&e1(a,"delete",c,void 0),n}function W8(){const c=j(this),a=c.size!==0,e=c.clear();return a&&e1(c,"clear",void 0,void 0),e}function Z3(c,a){return function(r,s){const n=this,i=n.__v_raw,t=j(i),l=a?u0:c?H0:S3;return!c&&N2(t,"iterate",k1),i.forEach((f,o)=>r.call(s,l(f),l(o),n))}}function c4(c,a,e){return function(...r){const s=this.__v_raw,n=j(s),i=Y1(n),t=c==="entries"||c===Symbol.iterator&&i,l=c==="keys"&&i,f=s[c](...r),o=e?u0:a?H0:S3;return!a&&N2(n,"iterate",l?k6:k1),{next(){const{value:m,done:h}=f.next();return h?{value:m,done:h}:{value:t?[o(m[0]),o(m[1])]:o(m),done:h}},[Symbol.iterator](){return this}}}}function f1(c){return function(...a){return c==="delete"?!1:this}}function hl(){const c={get(n){return X3(this,n)},get size(){return J3(this)},has:Q3,add:I8,set:q8,delete:G8,clear:W8,forEach:Z3(!1,!1)},a={get(n){return X3(this,n,!1,!0)},get size(){return J3(this)},has:Q3,add:I8,set:q8,delete:G8,clear:W8,forEach:Z3(!1,!0)},e={get(n){return X3(this,n,!0)},get size(){return J3(this,!0)},has(n){return Q3.call(this,n,!0)},add:f1("add"),set:f1("set"),delete:f1("delete"),clear:f1("clear"),forEach:Z3(!0,!1)},r={get(n){return X3(this,n,!0,!0)},get size(){return J3(this,!0)},has(n){return Q3.call(this,n,!0)},add:f1("add"),set:f1("set"),delete:f1("delete"),clear:f1("clear"),forEach:Z3(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(n=>{c[n]=c4(n,!1,!1),e[n]=c4(n,!0,!1),a[n]=c4(n,!1,!0),r[n]=c4(n,!0,!0)}),[c,e,a,r]}const[Hl,zl,pl,Vl]=hl();function v0(c,a){const e=a?c?Vl:pl:c?zl:Hl;return(r,s,n)=>s==="__v_isReactive"?!c:s==="__v_isReadonly"?c:s==="__v_raw"?r:Reflect.get(W(e,s)&&s in r?e:r,s,n)}const dl={get:v0(!1,!1)},Ml={get:v0(!1,!0)},Cl={get:v0(!0,!1)},C7=new WeakMap,L7=new WeakMap,g7=new WeakMap,Ll=new WeakMap;function gl(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function xl(c){return c.__v_skip||!Object.isExtensible(c)?0:gl(Ut(c))}function D3(c){return c3(c)?c:h0(c,!1,M7,dl,C7)}function x7(c){return h0(c,!1,vl,Ml,L7)}function b7(c){return h0(c,!0,ul,Cl,g7)}function h0(c,a,e,r,s){if(!s2(c)||c.__v_raw&&!(a&&c.__v_isReactive))return c;const n=s.get(c);if(n)return n;const i=xl(c);if(i===0)return c;const t=new Proxy(c,i===2?r:e);return s.set(c,t),t}function X1(c){return c3(c)?X1(c.__v_raw):!!(c&&c.__v_isReactive)}function c3(c){return!!(c&&c.__v_isReadonly)}function M4(c){return!!(c&&c.__v_isShallow)}function N7(c){return X1(c)||c3(c)}function j(c){const a=c&&c.__v_raw;return a?j(a):c}function S7(c){return d4(c,"__v_skip",!0),c}const S3=c=>s2(c)?D3(c):c,H0=c=>s2(c)?b7(c):c;function w7(c){H1&&_2&&(c=j(c),p7(c.dep||(c.dep=o0())))}function y7(c,a){c=j(c);const e=c.dep;e&&A6(e)}function V2(c){return!!(c&&c.__v_isRef===!0)}function bl(c){return k7(c,!1)}function Nl(c){return k7(c,!0)}function k7(c,a){return V2(c)?c:new Sl(c,a)}class Sl{constructor(a,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?a:j(a),this._value=e?a:S3(a)}get value(){return w7(this),this._value}set value(a){const e=this.__v_isShallow||M4(a)||c3(a);a=e?a:j(a),N3(a,this._rawValue)&&(this._rawValue=a,this._value=e?a:S3(a),y7(this))}}function Q1(c){return V2(c)?c.value:c}const wl={get:(c,a,e)=>Q1(Reflect.get(c,a,e)),set:(c,a,e,r)=>{const s=c[a];return V2(s)&&!V2(e)?(s.value=e,!0):Reflect.set(c,a,e,r)}};function A7(c){return X1(c)?c:new Proxy(c,wl)}class yl{constructor(a,e,r,s){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new f0(a,()=>{this._dirty||(this._dirty=!0,y7(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const a=j(this);return w7(a),(a._dirty||!a._cacheable)&&(a._dirty=!1,a._value=a.effect.run()),a._value}set value(a){this._setter(a)}}function kl(c,a,e=!1){let r,s;const n=I(c);return n?(r=c,s=B2):(r=c.get,s=c.set),new yl(r,s,n||!s,e)}function z1(c,a,e,r){let s;try{s=r?c(...r):c()}catch(n){E4(n,a,e)}return s}function F2(c,a,e,r){if(I(c)){const n=z1(c,a,e,r);return n&&o7(n)&&n.catch(i=>{E4(i,a,e)}),n}const s=[];for(let n=0;n<c.length;n++)s.push(F2(c[n],a,e,r));return s}function E4(c,a,e,r=!0){const s=a?a.vnode:null;if(a){let n=a.parent;const i=a.proxy,t=e;for(;n;){const f=n.ec;if(f){for(let o=0;o<f.length;o++)if(f[o](c,i,t)===!1)return}n=n.parent}const l=a.appContext.config.errorHandler;if(l){z1(l,null,10,[c,i,t]);return}}Al(c,e,s,r)}function Al(c,a,e,r=!0){console.error(c)}let w3=!1,P6=!1;const p2=[];let j2=0;const J1=[];let Z2=null,x1=0;const P7=Promise.resolve();let z0=null;function T7(c){const a=z0||P7;return c?a.then(this?c.bind(this):c):a}function Pl(c){let a=j2+1,e=p2.length;for(;a<e;){const r=a+e>>>1;y3(p2[r])<c?a=r+1:e=r}return a}function p0(c){(!p2.length||!p2.includes(c,w3&&c.allowRecurse?j2+1:j2))&&(c.id==null?p2.push(c):p2.splice(Pl(c.id),0,c),_7())}function _7(){!w3&&!P6&&(P6=!0,z0=P7.then(E7))}function Tl(c){const a=p2.indexOf(c);a>j2&&p2.splice(a,1)}function _l(c){O(c)?J1.push(...c):(!Z2||!Z2.includes(c,c.allowRecurse?x1+1:x1))&&J1.push(c),_7()}function j8(c,a=w3?j2+1:0){for(;a<p2.length;a++){const e=p2[a];e&&e.pre&&(p2.splice(a,1),a--,e())}}function R7(c){if(J1.length){const a=[...new Set(J1)];if(J1.length=0,Z2){Z2.push(...a);return}for(Z2=a,Z2.sort((e,r)=>y3(e)-y3(r)),x1=0;x1<Z2.length;x1++)Z2[x1]();Z2=null,x1=0}}const y3=c=>c.id==null?1/0:c.id,Rl=(c,a)=>{const e=y3(c)-y3(a);if(e===0){if(c.pre&&!a.pre)return-1;if(a.pre&&!c.pre)return 1}return e};function E7(c){P6=!1,w3=!0,p2.sort(Rl);const a=B2;try{for(j2=0;j2<p2.length;j2++){const e=p2[j2];e&&e.active!==!1&&z1(e,null,14)}}finally{j2=0,p2.length=0,R7(),w3=!1,z0=null,(p2.length||J1.length)&&E7()}}function El(c,a,...e){if(c.isUnmounted)return;const r=c.vnode.props||c2;let s=e;const n=a.startsWith("update:"),i=n&&a.slice(7);if(i&&i in r){const o=`${i==="modelValue"?"model":i}Modifiers`,{number:m,trim:h}=r[o]||c2;h&&(s=e.map(z=>o2(z)?z.trim():z)),m&&(s=e.map(N6))}let t,l=r[t=m6(a)]||r[t=m6(X2(a))];!l&&n&&(l=r[t=m6(t3(a))]),l&&F2(l,c,6,s);const f=r[t+"Once"];if(f){if(!c.emitted)c.emitted={};else if(c.emitted[t])return;c.emitted[t]=!0,F2(f,c,6,s)}}function B7(c,a,e=!1){const r=a.emitsCache,s=r.get(c);if(s!==void 0)return s;const n=c.emits;let i={},t=!1;if(!I(c)){const l=f=>{const o=B7(f,a,!0);o&&(t=!0,u2(i,o))};!e&&a.mixins.length&&a.mixins.forEach(l),c.extends&&l(c.extends),c.mixins&&c.mixins.forEach(l)}return!n&&!t?(s2(c)&&r.set(c,null),null):(O(n)?n.forEach(l=>i[l]=null):u2(i,n),s2(c)&&r.set(c,i),i)}function B4(c,a){return!c||!A4(a)?!1:(a=a.slice(2).replace(/Once$/,""),W(c,a[0].toLowerCase()+a.slice(1))||W(c,t3(a))||W(c,a))}let d2=null,F4=null;function C4(c){const a=d2;return d2=c,F4=c&&c.type.__scopeId||null,a}function F7(c){F4=c}function D7(){F4=null}function $2(c,a=d2,e){if(!a||c._n)return c;const r=(...s)=>{r._d&&r5(-1);const n=C4(a);let i;try{i=c(...s)}finally{C4(n),r._d&&r5(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function u6(c){const{type:a,vnode:e,proxy:r,withProxy:s,props:n,propsOptions:[i],slots:t,attrs:l,emit:f,render:o,renderCache:m,data:h,setupState:z,ctx:b,inheritAttrs:w}=c;let E,M;const C=C4(c);try{if(e.shapeFlag&4){const y=s||r;E=W2(o.call(y,y,m,n,z,h,b)),M=l}else{const y=a;E=W2(y.length>1?y(n,{attrs:l,slots:t,emit:f}):y(n,null)),M=a.props?l:Bl(l)}}catch(y){C3.length=0,E4(y,c,1),E=t2(a3)}let R=E;if(M&&w!==!1){const y=Object.keys(M),{shapeFlag:q}=R;y.length&&q&7&&(i&&y.some(r0)&&(M=Fl(M,i)),R=e3(R,M))}return e.dirs&&(R=e3(R),R.dirs=R.dirs?R.dirs.concat(e.dirs):e.dirs),e.transition&&(R.transition=e.transition),E=R,C4(C),E}const Bl=c=>{let a;for(const e in c)(e==="class"||e==="style"||A4(e))&&((a||(a={}))[e]=c[e]);return a},Fl=(c,a)=>{const e={};for(const r in c)(!r0(r)||!(r.slice(9)in a))&&(e[r]=c[r]);return e};function Dl(c,a,e){const{props:r,children:s,component:n}=c,{props:i,children:t,patchFlag:l}=a,f=n.emitsOptions;if(a.dirs||a.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return r?$8(r,i,f):!!i;if(l&8){const o=a.dynamicProps;for(let m=0;m<o.length;m++){const h=o[m];if(i[h]!==r[h]&&!B4(f,h))return!0}}}else return(s||t)&&(!t||!t.$stable)?!0:r===i?!1:r?i?$8(r,i,f):!0:!!i;return!1}function $8(c,a,e){const r=Object.keys(a);if(r.length!==Object.keys(c).length)return!0;for(let s=0;s<r.length;s++){const n=r[s];if(a[n]!==c[n]&&!B4(e,n))return!0}return!1}function Ol({vnode:c,parent:a},e){for(;a&&a.subTree===c;)(c=a.vnode).el=e,a=a.parent}const Ul=c=>c.__isSuspense;function Il(c,a){a&&a.pendingBranch?O(c)?a.effects.push(...c):a.effects.push(c):_l(c)}const a4={};function A1(c,a,e){return O7(c,a,e)}function O7(c,a,{immediate:e,deep:r,flush:s,onTrack:n,onTrigger:i}=c2){var t;const l=Jt()===((t=h2)==null?void 0:t.scope)?h2:null;let f,o=!1,m=!1;if(V2(c)?(f=()=>c.value,o=M4(c)):X1(c)?(f=()=>c,r=!0):O(c)?(m=!0,o=c.some(y=>X1(y)||M4(y)),f=()=>c.map(y=>{if(V2(y))return y.value;if(X1(y))return N1(y);if(I(y))return z1(y,l,2)})):I(c)?a?f=()=>z1(c,l,2):f=()=>{if(!(l&&l.isUnmounted))return h&&h(),F2(c,l,3,[z])}:f=B2,a&&r){const y=f;f=()=>N1(y())}let h,z=y=>{h=C.onStop=()=>{z1(y,l,4)}},b;if(P3)if(z=B2,a?e&&F2(a,l,3,[f(),m?[]:void 0,z]):f(),s==="sync"){const y=Bo();b=y.__watcherHandles||(y.__watcherHandles=[])}else return B2;let w=m?new Array(c.length).fill(a4):a4;const E=()=>{if(C.active)if(a){const y=C.run();(r||o||(m?y.some((q,J)=>N3(q,w[J])):N3(y,w)))&&(h&&h(),F2(a,l,3,[y,w===a4?void 0:m&&w[0]===a4?[]:w,z]),w=y)}else C.run()};E.allowRecurse=!!a;let M;s==="sync"?M=E:s==="post"?M=()=>b2(E,l&&l.suspense):(E.pre=!0,l&&(E.id=l.uid),M=()=>p0(E));const C=new f0(f,M);a?e?E():w=C.run():s==="post"?b2(C.run.bind(C),l&&l.suspense):C.run();const R=()=>{C.stop(),l&&l.scope&&s0(l.scope.effects,C)};return b&&b.push(R),R}function ql(c,a,e){const r=this.proxy,s=o2(c)?c.includes(".")?U7(r,c):()=>r[c]:c.bind(r,r);let n;I(a)?n=a:(n=a.handler,e=a);const i=h2;r3(this);const t=O7(s,n.bind(r),e);return i?r3(i):P1(),t}function U7(c,a){const e=a.split(".");return()=>{let r=c;for(let s=0;s<e.length&&r;s++)r=r[e[s]];return r}}function N1(c,a){if(!s2(c)||c.__v_skip||(a=a||new Set,a.has(c)))return c;if(a.add(c),V2(c))N1(c.value,a);else if(O(c))for(let e=0;e<c.length;e++)N1(c[e],a);else if(l7(c)||Y1(c))c.forEach(e=>{N1(e,a)});else if(m7(c))for(const e in c)N1(c[e],a);return c}function v4(c,a){const e=d2;if(e===null)return c;const r=I4(e)||e.proxy,s=c.dirs||(c.dirs=[]);for(let n=0;n<a.length;n++){let[i,t,l,f=c2]=a[n];i&&(I(i)&&(i={mounted:i,updated:i}),i.deep&&N1(t),s.push({dir:i,instance:r,value:t,oldValue:void 0,arg:l,modifiers:f}))}return c}function L1(c,a,e,r){const s=c.dirs,n=a&&a.dirs;for(let i=0;i<s.length;i++){const t=s[i];n&&(t.oldValue=n[i].value);let l=t.dir[r];l&&(l3(),F2(l,e,8,[c.el,t,c,a]),o3())}}function V0(c,a){return I(c)?(()=>u2({name:c.name},a,{setup:c}))():c}const d3=c=>!!c.type.__asyncLoader,I7=c=>c.type.__isKeepAlive;function Gl(c,a){q7(c,"a",a)}function Wl(c,a){q7(c,"da",a)}function q7(c,a,e=h2){const r=c.__wdc||(c.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return c()});if(D4(a,r,e),e){let s=e.parent;for(;s&&s.parent;)I7(s.parent.vnode)&&jl(r,a,e,s),s=s.parent}}function jl(c,a,e,r){const s=D4(a,c,r,!0);G7(()=>{s0(r[a],s)},e)}function D4(c,a,e=h2,r=!1){if(e){const s=e[c]||(e[c]=[]),n=a.__weh||(a.__weh=(...i)=>{if(e.isUnmounted)return;l3(),r3(e);const t=F2(a,e,c,i);return P1(),o3(),t});return r?s.unshift(n):s.push(n),n}}const i1=c=>(a,e=h2)=>(!P3||c==="sp")&&D4(c,(...r)=>a(...r),e),$l=i1("bm"),Kl=i1("m"),Yl=i1("bu"),Xl=i1("u"),Ql=i1("bum"),G7=i1("um"),Jl=i1("sp"),Zl=i1("rtg"),co=i1("rtc");function ao(c,a=h2){D4("ec",c,a)}const W7="components";function S1(c,a){return ro(W7,c,!0,a)||c}const eo=Symbol.for("v-ndc");function ro(c,a,e=!0,r=!1){const s=d2||h2;if(s){const n=s.type;if(c===W7){const t=_o(n,!1);if(t&&(t===a||t===X2(a)||t===_4(X2(a))))return n}const i=K8(s[c]||n[c],a)||K8(s.appContext[c],a);return!i&&r?n:i}}function K8(c,a){return c&&(c[a]||c[X2(a)]||c[_4(X2(a))])}function so(c,a,e,r){let s;const n=e&&e[r];if(O(c)||o2(c)){s=new Array(c.length);for(let i=0,t=c.length;i<t;i++)s[i]=a(c[i],i,void 0,n&&n[i])}else if(typeof c=="number"){s=new Array(c);for(let i=0;i<c;i++)s[i]=a(i+1,i,void 0,n&&n[i])}else if(s2(c))if(c[Symbol.iterator])s=Array.from(c,(i,t)=>a(i,t,void 0,n&&n[t]));else{const i=Object.keys(c);s=new Array(i.length);for(let t=0,l=i.length;t<l;t++){const f=i[t];s[t]=a(c[f],f,t,n&&n[t])}}else s=[];return e&&(e[r]=s),s}function j7(c,a,e={},r,s){if(d2.isCE||d2.parent&&d3(d2.parent)&&d2.parent.isCE)return a!=="default"&&(e.name=a),t2("slot",e,r&&r());let n=c[a];n&&n._c&&(n._d=!1),Y2();const i=n&&$7(n(e)),t=A3(L2,{key:e.key||i&&i.key||`_${a}`},i||(r?r():[]),i&&c._===1?64:-2);return!s&&t.scopeId&&(t.slotScopeIds=[t.scopeId+"-s"]),n&&n._c&&(n._d=!0),t}function $7(c){return c.some(a=>x4(a)?!(a.type===a3||a.type===L2&&!$7(a.children)):!0)?c:null}const T6=c=>c?sc(c)?I4(c)||c.proxy:T6(c.parent):null,M3=u2(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>T6(c.parent),$root:c=>T6(c.root),$emit:c=>c.emit,$options:c=>d0(c),$forceUpdate:c=>c.f||(c.f=()=>p0(c.update)),$nextTick:c=>c.n||(c.n=T7.bind(c.proxy)),$watch:c=>ql.bind(c)}),v6=(c,a)=>c!==c2&&!c.__isScriptSetup&&W(c,a),no={get({_:c},a){const{ctx:e,setupState:r,data:s,props:n,accessCache:i,type:t,appContext:l}=c;let f;if(a[0]!=="$"){const z=i[a];if(z!==void 0)switch(z){case 1:return r[a];case 2:return s[a];case 4:return e[a];case 3:return n[a]}else{if(v6(r,a))return i[a]=1,r[a];if(s!==c2&&W(s,a))return i[a]=2,s[a];if((f=c.propsOptions[0])&&W(f,a))return i[a]=3,n[a];if(e!==c2&&W(e,a))return i[a]=4,e[a];_6&&(i[a]=0)}}const o=M3[a];let m,h;if(o)return a==="$attrs"&&N2(c,"get",a),o(c);if((m=t.__cssModules)&&(m=m[a]))return m;if(e!==c2&&W(e,a))return i[a]=4,e[a];if(h=l.config.globalProperties,W(h,a))return h[a]},set({_:c},a,e){const{data:r,setupState:s,ctx:n}=c;return v6(s,a)?(s[a]=e,!0):r!==c2&&W(r,a)?(r[a]=e,!0):W(c.props,a)||a[0]==="$"&&a.slice(1)in c?!1:(n[a]=e,!0)},has({_:{data:c,setupState:a,accessCache:e,ctx:r,appContext:s,propsOptions:n}},i){let t;return!!e[i]||c!==c2&&W(c,i)||v6(a,i)||(t=n[0])&&W(t,i)||W(r,i)||W(M3,i)||W(s.config.globalProperties,i)},defineProperty(c,a,e){return e.get!=null?c._.accessCache[a]=0:W(e,"value")&&this.set(c,a,e.value,null),Reflect.defineProperty(c,a,e)}};function Y8(c){return O(c)?c.reduce((a,e)=>(a[e]=null,a),{}):c}let _6=!0;function io(c){const a=d0(c),e=c.proxy,r=c.ctx;_6=!1,a.beforeCreate&&X8(a.beforeCreate,c,"bc");const{data:s,computed:n,methods:i,watch:t,provide:l,inject:f,created:o,beforeMount:m,mounted:h,beforeUpdate:z,updated:b,activated:w,deactivated:E,beforeDestroy:M,beforeUnmount:C,destroyed:R,unmounted:y,render:q,renderTracked:J,renderTriggered:n2,errorCaptured:w2,serverPrefetch:M2,expose:A2,inheritAttrs:l1,components:C1,directives:U2,filters:u3}=a;if(f&&to(f,r,null),i)for(const Q in i){const $=i[Q];I($)&&(r[Q]=$.bind(e))}if(s){const Q=s.call(e,e);s2(Q)&&(c.data=D3(Q))}if(_6=!0,n)for(const Q in n){const $=n[Q],Q2=I($)?$.bind(e,e):I($.get)?$.get.bind(e,e):B2,o1=!I($)&&I($.set)?$.set.bind(e):B2,I2=v2({get:Q2,set:o1});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>I2.value,set:g2=>I2.value=g2})}if(t)for(const Q in t)K7(t[Q],r,e,Q);if(l){const Q=I(l)?l.call(e):l;Reflect.ownKeys(Q).forEach($=>{h4($,Q[$])})}o&&X8(o,c,"c");function m2(Q,$){O($)?$.forEach(Q2=>Q(Q2.bind(e))):$&&Q($.bind(e))}if(m2($l,m),m2(Kl,h),m2(Yl,z),m2(Xl,b),m2(Gl,w),m2(Wl,E),m2(ao,w2),m2(co,J),m2(Zl,n2),m2(Ql,C),m2(G7,y),m2(Jl,M2),O(A2))if(A2.length){const Q=c.exposed||(c.exposed={});A2.forEach($=>{Object.defineProperty(Q,$,{get:()=>e[$],set:Q2=>e[$]=Q2})})}else c.exposed||(c.exposed={});q&&c.render===B2&&(c.render=q),l1!=null&&(c.inheritAttrs=l1),C1&&(c.components=C1),U2&&(c.directives=U2)}function to(c,a,e=B2){O(c)&&(c=R6(c));for(const r in c){const s=c[r];let n;s2(s)?"default"in s?n=a1(s.from||r,s.default,!0):n=a1(s.from||r):n=a1(s),V2(n)?Object.defineProperty(a,r,{enumerable:!0,configurable:!0,get:()=>n.value,set:i=>n.value=i}):a[r]=n}}function X8(c,a,e){F2(O(c)?c.map(r=>r.bind(a.proxy)):c.bind(a.proxy),a,e)}function K7(c,a,e,r){const s=r.includes(".")?U7(e,r):()=>e[r];if(o2(c)){const n=a[c];I(n)&&A1(s,n)}else if(I(c))A1(s,c.bind(e));else if(s2(c))if(O(c))c.forEach(n=>K7(n,a,e,r));else{const n=I(c.handler)?c.handler.bind(e):a[c.handler];I(n)&&A1(s,n,c)}}function d0(c){const a=c.type,{mixins:e,extends:r}=a,{mixins:s,optionsCache:n,config:{optionMergeStrategies:i}}=c.appContext,t=n.get(a);let l;return t?l=t:!s.length&&!e&&!r?l=a:(l={},s.length&&s.forEach(f=>L4(l,f,i,!0)),L4(l,a,i)),s2(a)&&n.set(a,l),l}function L4(c,a,e,r=!1){const{mixins:s,extends:n}=a;n&&L4(c,n,e,!0),s&&s.forEach(i=>L4(c,i,e,!0));for(const i in a)if(!(r&&i==="expose")){const t=lo[i]||e&&e[i];c[i]=t?t(c[i],a[i]):a[i]}return c}const lo={data:Q8,props:J8,emits:J8,methods:p3,computed:p3,beforeCreate:C2,created:C2,beforeMount:C2,mounted:C2,beforeUpdate:C2,updated:C2,beforeDestroy:C2,beforeUnmount:C2,destroyed:C2,unmounted:C2,activated:C2,deactivated:C2,errorCaptured:C2,serverPrefetch:C2,components:p3,directives:p3,watch:fo,provide:Q8,inject:oo};function Q8(c,a){return a?c?function(){return u2(I(c)?c.call(this,this):c,I(a)?a.call(this,this):a)}:a:c}function oo(c,a){return p3(R6(c),R6(a))}function R6(c){if(O(c)){const a={};for(let e=0;e<c.length;e++)a[c[e]]=c[e];return a}return c}function C2(c,a){return c?[...new Set([].concat(c,a))]:a}function p3(c,a){return c?u2(Object.create(null),c,a):a}function J8(c,a){return c?O(c)&&O(a)?[...new Set([...c,...a])]:u2(Object.create(null),Y8(c),Y8(a??{})):a}function fo(c,a){if(!c)return a;if(!a)return c;const e=u2(Object.create(null),c);for(const r in a)e[r]=C2(c[r],a[r]);return e}function Y7(){return{app:null,config:{isNativeTag:Ft,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let mo=0;function uo(c,a){return function(r,s=null){I(r)||(r=u2({},r)),s!=null&&!s2(s)&&(s=null);const n=Y7(),i=new Set;let t=!1;const l=n.app={_uid:mo++,_component:r,_props:s,_container:null,_context:n,_instance:null,version:Fo,get config(){return n.config},set config(f){},use(f,...o){return i.has(f)||(f&&I(f.install)?(i.add(f),f.install(l,...o)):I(f)&&(i.add(f),f(l,...o))),l},mixin(f){return n.mixins.includes(f)||n.mixins.push(f),l},component(f,o){return o?(n.components[f]=o,l):n.components[f]},directive(f,o){return o?(n.directives[f]=o,l):n.directives[f]},mount(f,o,m){if(!t){const h=t2(r,s);return h.appContext=n,o&&a?a(h,f):c(h,f,m),t=!0,l._container=f,f.__vue_app__=l,I4(h.component)||h.component.proxy}},unmount(){t&&(c(null,l._container),delete l._container.__vue_app__)},provide(f,o){return n.provides[f]=o,l},runWithContext(f){g4=l;try{return f()}finally{g4=null}}};return l}}let g4=null;function h4(c,a){if(h2){let e=h2.provides;const r=h2.parent&&h2.parent.provides;r===e&&(e=h2.provides=Object.create(r)),e[c]=a}}function a1(c,a,e=!1){const r=h2||d2;if(r||g4){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:g4._context.provides;if(s&&c in s)return s[c];if(arguments.length>1)return e&&I(a)?a.call(r&&r.proxy):a}}function vo(c,a,e,r=!1){const s={},n={};d4(n,U4,1),c.propsDefaults=Object.create(null),X7(c,a,s,n);for(const i in c.propsOptions[0])i in s||(s[i]=void 0);e?c.props=r?s:x7(s):c.type.props?c.props=s:c.props=n,c.attrs=n}function ho(c,a,e,r){const{props:s,attrs:n,vnode:{patchFlag:i}}=c,t=j(s),[l]=c.propsOptions;let f=!1;if((r||i>0)&&!(i&16)){if(i&8){const o=c.vnode.dynamicProps;for(let m=0;m<o.length;m++){let h=o[m];if(B4(c.emitsOptions,h))continue;const z=a[h];if(l)if(W(n,h))z!==n[h]&&(n[h]=z,f=!0);else{const b=X2(h);s[b]=E6(l,t,b,z,c,!1)}else z!==n[h]&&(n[h]=z,f=!0)}}}else{X7(c,a,s,n)&&(f=!0);let o;for(const m in t)(!a||!W(a,m)&&((o=t3(m))===m||!W(a,o)))&&(l?e&&(e[m]!==void 0||e[o]!==void 0)&&(s[m]=E6(l,t,m,void 0,c,!0)):delete s[m]);if(n!==t)for(const m in n)(!a||!W(a,m))&&(delete n[m],f=!0)}f&&e1(c,"set","$attrs")}function X7(c,a,e,r){const[s,n]=c.propsOptions;let i=!1,t;if(a)for(let l in a){if(m4(l))continue;const f=a[l];let o;s&&W(s,o=X2(l))?!n||!n.includes(o)?e[o]=f:(t||(t={}))[o]=f:B4(c.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,i=!0)}if(n){const l=j(e),f=t||c2;for(let o=0;o<n.length;o++){const m=n[o];e[m]=E6(s,l,m,f[m],c,!W(f,m))}}return i}function E6(c,a,e,r,s,n){const i=c[e];if(i!=null){const t=W(i,"default");if(t&&r===void 0){const l=i.default;if(i.type!==Function&&!i.skipFactory&&I(l)){const{propsDefaults:f}=s;e in f?r=f[e]:(r3(s),r=f[e]=l.call(null,a),P1())}else r=l}i[0]&&(n&&!t?r=!1:i[1]&&(r===""||r===t3(e))&&(r=!0))}return r}function Q7(c,a,e=!1){const r=a.propsCache,s=r.get(c);if(s)return s;const n=c.props,i={},t=[];let l=!1;if(!I(c)){const o=m=>{l=!0;const[h,z]=Q7(m,a,!0);u2(i,h),z&&t.push(...z)};!e&&a.mixins.length&&a.mixins.forEach(o),c.extends&&o(c.extends),c.mixins&&c.mixins.forEach(o)}if(!n&&!l)return s2(c)&&r.set(c,K1),K1;if(O(n))for(let o=0;o<n.length;o++){const m=X2(n[o]);Z8(m)&&(i[m]=c2)}else if(n)for(const o in n){const m=X2(o);if(Z8(m)){const h=n[o],z=i[m]=O(h)||I(h)?{type:h}:u2({},h);if(z){const b=e5(Boolean,z.type),w=e5(String,z.type);z[0]=b>-1,z[1]=w<0||b<w,(b>-1||W(z,"default"))&&t.push(m)}}}const f=[i,t];return s2(c)&&r.set(c,f),f}function Z8(c){return c[0]!=="$"}function c5(c){const a=c&&c.toString().match(/^\s*(function|class) (\w+)/);return a?a[2]:c===null?"null":""}function a5(c,a){return c5(c)===c5(a)}function e5(c,a){return O(a)?a.findIndex(e=>a5(e,c)):I(a)&&a5(a,c)?0:-1}const J7=c=>c[0]==="_"||c==="$stable",M0=c=>O(c)?c.map(W2):[W2(c)],Ho=(c,a,e)=>{if(a._n)return a;const r=$2((...s)=>M0(a(...s)),e);return r._c=!1,r},Z7=(c,a,e)=>{const r=c._ctx;for(const s in c){if(J7(s))continue;const n=c[s];if(I(n))a[s]=Ho(s,n,r);else if(n!=null){const i=M0(n);a[s]=()=>i}}},cc=(c,a)=>{const e=M0(a);c.slots.default=()=>e},zo=(c,a)=>{if(c.vnode.shapeFlag&32){const e=a._;e?(c.slots=j(a),d4(a,"_",e)):Z7(a,c.slots={})}else c.slots={},a&&cc(c,a);d4(c.slots,U4,1)},po=(c,a,e)=>{const{vnode:r,slots:s}=c;let n=!0,i=c2;if(r.shapeFlag&32){const t=a._;t?e&&t===1?n=!1:(u2(s,a),!e&&t===1&&delete s._):(n=!a.$stable,Z7(a,s)),i=a}else a&&(cc(c,a),i={default:1});if(n)for(const t in s)!J7(t)&&!(t in i)&&delete s[t]};function B6(c,a,e,r,s=!1){if(O(c)){c.forEach((h,z)=>B6(h,a&&(O(a)?a[z]:a),e,r,s));return}if(d3(r)&&!s)return;const n=r.shapeFlag&4?I4(r.component)||r.component.proxy:r.el,i=s?null:n,{i:t,r:l}=c,f=a&&a.r,o=t.refs===c2?t.refs={}:t.refs,m=t.setupState;if(f!=null&&f!==l&&(o2(f)?(o[f]=null,W(m,f)&&(m[f]=null)):V2(f)&&(f.value=null)),I(l))z1(l,t,12,[i,o]);else{const h=o2(l),z=V2(l);if(h||z){const b=()=>{if(c.f){const w=h?W(m,l)?m[l]:o[l]:l.value;s?O(w)&&s0(w,n):O(w)?w.includes(n)||w.push(n):h?(o[l]=[n],W(m,l)&&(m[l]=o[l])):(l.value=[n],c.k&&(o[c.k]=l.value))}else h?(o[l]=i,W(m,l)&&(m[l]=i)):z&&(l.value=i,c.k&&(o[c.k]=i))};i?(b.id=-1,b2(b,e)):b()}}}const b2=Il;function Vo(c){return Mo(c)}function Mo(c,a){const e=S6();e.__VUE__=!0;const{insert:r,remove:s,patchProp:n,createElement:i,createText:t,createComment:l,setText:f,setElementText:o,parentNode:m,nextSibling:h,setScopeId:z=B2,insertStaticContent:b}=c,w=(u,v,H,p=null,d=null,L=null,k=!1,x=null,N=!!v.dynamicChildren)=>{if(u===v)return;u&&!h3(u,v)&&(p=V(u),g2(u,d,L,!0),u=null),v.patchFlag===-2&&(N=!1,v.dynamicChildren=null);const{type:g,ref:F,shapeFlag:T}=v;switch(g){case O4:E(u,v,H,p);break;case a3:M(u,v,H,p);break;case h6:u==null&&C(v,H,p,k);break;case L2:C1(u,v,H,p,d,L,k,x,N);break;default:T&1?q(u,v,H,p,d,L,k,x,N):T&6?U2(u,v,H,p,d,L,k,x,N):(T&64||T&128)&&g.process(u,v,H,p,d,L,k,x,N,S)}F!=null&&d&&B6(F,u&&u.ref,L,v||u,!v)},E=(u,v,H,p)=>{if(u==null)r(v.el=t(v.children),H,p);else{const d=v.el=u.el;v.children!==u.children&&f(d,v.children)}},M=(u,v,H,p)=>{u==null?r(v.el=l(v.children||""),H,p):v.el=u.el},C=(u,v,H,p)=>{[u.el,u.anchor]=b(u.children,v,H,p,u.el,u.anchor)},R=({el:u,anchor:v},H,p)=>{let d;for(;u&&u!==v;)d=h(u),r(u,H,p),u=d;r(v,H,p)},y=({el:u,anchor:v})=>{let H;for(;u&&u!==v;)H=h(u),s(u),u=H;s(v)},q=(u,v,H,p,d,L,k,x,N)=>{k=k||v.type==="svg",u==null?J(v,H,p,d,L,k,x,N):M2(u,v,d,L,k,x,N)},J=(u,v,H,p,d,L,k,x)=>{let N,g;const{type:F,props:T,shapeFlag:D,transition:U,dirs:G}=u;if(N=u.el=i(u.type,L,T&&T.is,T),D&8?o(N,u.children):D&16&&w2(u.children,N,null,p,d,L&&F!=="foreignObject",k,x),G&&L1(u,null,p,"created"),n2(N,u,u.scopeId,k,p),T){for(const X in T)X!=="value"&&!m4(X)&&n(N,X,null,T[X],L,u.children,p,d,H2);"value"in T&&n(N,"value",null,T.value),(g=T.onVnodeBeforeMount)&&G2(g,p,u)}G&&L1(u,null,p,"beforeMount");const Z=(!d||d&&!d.pendingBranch)&&U&&!U.persisted;Z&&U.beforeEnter(N),r(N,v,H),((g=T&&T.onVnodeMounted)||Z||G)&&b2(()=>{g&&G2(g,p,u),Z&&U.enter(N),G&&L1(u,null,p,"mounted")},d)},n2=(u,v,H,p,d)=>{if(H&&z(u,H),p)for(let L=0;L<p.length;L++)z(u,p[L]);if(d){let L=d.subTree;if(v===L){const k=d.vnode;n2(u,k,k.scopeId,k.slotScopeIds,d.parent)}}},w2=(u,v,H,p,d,L,k,x,N=0)=>{for(let g=N;g<u.length;g++){const F=u[g]=x?v1(u[g]):W2(u[g]);w(null,F,v,H,p,d,L,k,x)}},M2=(u,v,H,p,d,L,k)=>{const x=v.el=u.el;let{patchFlag:N,dynamicChildren:g,dirs:F}=v;N|=u.patchFlag&16;const T=u.props||c2,D=v.props||c2;let U;H&&g1(H,!1),(U=D.onVnodeBeforeUpdate)&&G2(U,H,v,u),F&&L1(v,u,H,"beforeUpdate"),H&&g1(H,!0);const G=d&&v.type!=="foreignObject";if(g?A2(u.dynamicChildren,g,x,H,p,G,L):k||$(u,v,x,null,H,p,G,L,!1),N>0){if(N&16)l1(x,v,T,D,H,p,d);else if(N&2&&T.class!==D.class&&n(x,"class",null,D.class,d),N&4&&n(x,"style",T.style,D.style,d),N&8){const Z=v.dynamicProps;for(let X=0;X<Z.length;X++){const l2=Z[X],P2=T[l2],O1=D[l2];(O1!==P2||l2==="value")&&n(x,l2,P2,O1,d,u.children,H,p,H2)}}N&1&&u.children!==v.children&&o(x,v.children)}else!k&&g==null&&l1(x,v,T,D,H,p,d);((U=D.onVnodeUpdated)||F)&&b2(()=>{U&&G2(U,H,v,u),F&&L1(v,u,H,"updated")},p)},A2=(u,v,H,p,d,L,k)=>{for(let x=0;x<v.length;x++){const N=u[x],g=v[x],F=N.el&&(N.type===L2||!h3(N,g)||N.shapeFlag&70)?m(N.el):H;w(N,g,F,null,p,d,L,k,!0)}},l1=(u,v,H,p,d,L,k)=>{if(H!==p){if(H!==c2)for(const x in H)!m4(x)&&!(x in p)&&n(u,x,H[x],null,k,v.children,d,L,H2);for(const x in p){if(m4(x))continue;const N=p[x],g=H[x];N!==g&&x!=="value"&&n(u,x,g,N,k,v.children,d,L,H2)}"value"in p&&n(u,"value",H.value,p.value)}},C1=(u,v,H,p,d,L,k,x,N)=>{const g=v.el=u?u.el:t(""),F=v.anchor=u?u.anchor:t("");let{patchFlag:T,dynamicChildren:D,slotScopeIds:U}=v;U&&(x=x?x.concat(U):U),u==null?(r(g,H,p),r(F,H,p),w2(v.children,H,F,d,L,k,x,N)):T>0&&T&64&&D&&u.dynamicChildren?(A2(u.dynamicChildren,D,H,d,L,k,x),(v.key!=null||d&&v===d.subTree)&&ac(u,v,!0)):$(u,v,H,F,d,L,k,x,N)},U2=(u,v,H,p,d,L,k,x,N)=>{v.slotScopeIds=x,u==null?v.shapeFlag&512?d.ctx.activate(v,H,p,k,N):u3(v,H,p,d,L,k,N):B1(u,v,N)},u3=(u,v,H,p,d,L,k)=>{const x=u.component=yo(u,p,d);if(I7(u)&&(x.ctx.renderer=S),ko(x),x.asyncDep){if(d&&d.registerDep(x,m2),!u.el){const N=x.subTree=t2(a3);M(null,N,v,H)}return}m2(x,u,v,H,d,L,k)},B1=(u,v,H)=>{const p=v.component=u.component;if(Dl(u,v,H))if(p.asyncDep&&!p.asyncResolved){Q(p,v,H);return}else p.next=v,Tl(p.update),p.update();else v.el=u.el,p.vnode=v},m2=(u,v,H,p,d,L,k)=>{const x=()=>{if(u.isMounted){let{next:F,bu:T,u:D,parent:U,vnode:G}=u,Z=F,X;g1(u,!1),F?(F.el=G.el,Q(u,F,k)):F=G,T&&u4(T),(X=F.props&&F.props.onVnodeBeforeUpdate)&&G2(X,U,F,G),g1(u,!0);const l2=u6(u),P2=u.subTree;u.subTree=l2,w(P2,l2,m(P2.el),V(P2),u,d,L),F.el=l2.el,Z===null&&Ol(u,l2.el),D&&b2(D,d),(X=F.props&&F.props.onVnodeUpdated)&&b2(()=>G2(X,U,F,G),d)}else{let F;const{el:T,props:D}=v,{bm:U,m:G,parent:Z}=u,X=d3(v);if(g1(u,!1),U&&u4(U),!X&&(F=D&&D.onVnodeBeforeMount)&&G2(F,Z,v),g1(u,!0),T&&K){const l2=()=>{u.subTree=u6(u),K(T,u.subTree,u,d,null)};X?v.type.__asyncLoader().then(()=>!u.isUnmounted&&l2()):l2()}else{const l2=u.subTree=u6(u);w(null,l2,H,p,u,d,L),v.el=l2.el}if(G&&b2(G,d),!X&&(F=D&&D.onVnodeMounted)){const l2=v;b2(()=>G2(F,Z,l2),d)}(v.shapeFlag&256||Z&&d3(Z.vnode)&&Z.vnode.shapeFlag&256)&&u.a&&b2(u.a,d),u.isMounted=!0,v=H=p=null}},N=u.effect=new f0(x,()=>p0(g),u.scope),g=u.update=()=>N.run();g.id=u.uid,g1(u,!0),g()},Q=(u,v,H)=>{v.component=u;const p=u.vnode.props;u.vnode=v,u.next=null,ho(u,v.props,p,H),po(u,v.children,H),l3(),j8(),o3()},$=(u,v,H,p,d,L,k,x,N=!1)=>{const g=u&&u.children,F=u?u.shapeFlag:0,T=v.children,{patchFlag:D,shapeFlag:U}=v;if(D>0){if(D&128){o1(g,T,H,p,d,L,k,x,N);return}else if(D&256){Q2(g,T,H,p,d,L,k,x,N);return}}U&8?(F&16&&H2(g,d,L),T!==g&&o(H,T)):F&16?U&16?o1(g,T,H,p,d,L,k,x,N):H2(g,d,L,!0):(F&8&&o(H,""),U&16&&w2(T,H,p,d,L,k,x,N))},Q2=(u,v,H,p,d,L,k,x,N)=>{u=u||K1,v=v||K1;const g=u.length,F=v.length,T=Math.min(g,F);let D;for(D=0;D<T;D++){const U=v[D]=N?v1(v[D]):W2(v[D]);w(u[D],U,H,null,d,L,k,x,N)}g>F?H2(u,d,L,!0,!1,T):w2(v,H,p,d,L,k,x,N,T)},o1=(u,v,H,p,d,L,k,x,N)=>{let g=0;const F=v.length;let T=u.length-1,D=F-1;for(;g<=T&&g<=D;){const U=u[g],G=v[g]=N?v1(v[g]):W2(v[g]);if(h3(U,G))w(U,G,H,null,d,L,k,x,N);else break;g++}for(;g<=T&&g<=D;){const U=u[T],G=v[D]=N?v1(v[D]):W2(v[D]);if(h3(U,G))w(U,G,H,null,d,L,k,x,N);else break;T--,D--}if(g>T){if(g<=D){const U=D+1,G=U<F?v[U].el:p;for(;g<=D;)w(null,v[g]=N?v1(v[g]):W2(v[g]),H,G,d,L,k,x,N),g++}}else if(g>D)for(;g<=T;)g2(u[g],d,L,!0),g++;else{const U=g,G=g,Z=new Map;for(g=G;g<=D;g++){const y2=v[g]=N?v1(v[g]):W2(v[g]);y2.key!=null&&Z.set(y2.key,g)}let X,l2=0;const P2=D-G+1;let O1=!1,_8=0;const v3=new Array(P2);for(g=0;g<P2;g++)v3[g]=0;for(g=U;g<=T;g++){const y2=u[g];if(l2>=P2){g2(y2,d,L,!0);continue}let q2;if(y2.key!=null)q2=Z.get(y2.key);else for(X=G;X<=D;X++)if(v3[X-G]===0&&h3(y2,v[X])){q2=X;break}q2===void 0?g2(y2,d,L,!0):(v3[q2-G]=g+1,q2>=_8?_8=q2:O1=!0,w(y2,v[q2],H,null,d,L,k,x,N),l2++)}const R8=O1?Co(v3):K1;for(X=R8.length-1,g=P2-1;g>=0;g--){const y2=G+g,q2=v[y2],E8=y2+1<F?v[y2+1].el:p;v3[g]===0?w(null,q2,H,E8,d,L,k,x,N):O1&&(X<0||g!==R8[X]?I2(q2,H,E8,2):X--)}}},I2=(u,v,H,p,d=null)=>{const{el:L,type:k,transition:x,children:N,shapeFlag:g}=u;if(g&6){I2(u.component.subTree,v,H,p);return}if(g&128){u.suspense.move(v,H,p);return}if(g&64){k.move(u,v,H,S);return}if(k===L2){r(L,v,H);for(let T=0;T<N.length;T++)I2(N[T],v,H,p);r(u.anchor,v,H);return}if(k===h6){R(u,v,H);return}if(p!==2&&g&1&&x)if(p===0)x.beforeEnter(L),r(L,v,H),b2(()=>x.enter(L),d);else{const{leave:T,delayLeave:D,afterLeave:U}=x,G=()=>r(L,v,H),Z=()=>{T(L,()=>{G(),U&&U()})};D?D(L,G,Z):Z()}else r(L,v,H)},g2=(u,v,H,p=!1,d=!1)=>{const{type:L,props:k,ref:x,children:N,dynamicChildren:g,shapeFlag:F,patchFlag:T,dirs:D}=u;if(x!=null&&B6(x,null,H,u,!0),F&256){v.ctx.deactivate(u);return}const U=F&1&&D,G=!d3(u);let Z;if(G&&(Z=k&&k.onVnodeBeforeUnmount)&&G2(Z,v,u),F&6)Y3(u.component,H,p);else{if(F&128){u.suspense.unmount(H,p);return}U&&L1(u,null,v,"beforeUnmount"),F&64?u.type.remove(u,v,H,d,S,p):g&&(L!==L2||T>0&&T&64)?H2(g,v,H,!1,!0):(L===L2&&T&384||!d&&F&16)&&H2(N,v,H),p&&F1(u)}(G&&(Z=k&&k.onVnodeUnmounted)||U)&&b2(()=>{Z&&G2(Z,v,u),U&&L1(u,null,v,"unmounted")},H)},F1=u=>{const{type:v,el:H,anchor:p,transition:d}=u;if(v===L2){D1(H,p);return}if(v===h6){y(u);return}const L=()=>{s(H),d&&!d.persisted&&d.afterLeave&&d.afterLeave()};if(u.shapeFlag&1&&d&&!d.persisted){const{leave:k,delayLeave:x}=d,N=()=>k(H,L);x?x(u.el,L,N):N()}else L()},D1=(u,v)=>{let H;for(;u!==v;)H=h(u),s(u),u=H;s(v)},Y3=(u,v,H)=>{const{bum:p,scope:d,update:L,subTree:k,um:x}=u;p&&u4(p),d.stop(),L&&(L.active=!1,g2(k,u,v,H)),x&&b2(x,v),b2(()=>{u.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},H2=(u,v,H,p=!1,d=!1,L=0)=>{for(let k=L;k<u.length;k++)g2(u[k],v,H,p,d)},V=u=>u.shapeFlag&6?V(u.component.subTree):u.shapeFlag&128?u.suspense.next():h(u.anchor||u.el),P=(u,v,H)=>{u==null?v._vnode&&g2(v._vnode,null,null,!0):w(v._vnode||null,u,v,null,null,null,H),j8(),R7(),v._vnode=u},S={p:w,um:g2,m:I2,r:F1,mt:u3,mc:w2,pc:$,pbc:A2,n:V,o:c};let B,K;return a&&([B,K]=a(S)),{render:P,hydrate:B,createApp:uo(P,B)}}function g1({effect:c,update:a},e){c.allowRecurse=a.allowRecurse=e}function ac(c,a,e=!1){const r=c.children,s=a.children;if(O(r)&&O(s))for(let n=0;n<r.length;n++){const i=r[n];let t=s[n];t.shapeFlag&1&&!t.dynamicChildren&&((t.patchFlag<=0||t.patchFlag===32)&&(t=s[n]=v1(s[n]),t.el=i.el),e||ac(i,t)),t.type===O4&&(t.el=i.el)}}function Co(c){const a=c.slice(),e=[0];let r,s,n,i,t;const l=c.length;for(r=0;r<l;r++){const f=c[r];if(f!==0){if(s=e[e.length-1],c[s]<f){a[r]=s,e.push(r);continue}for(n=0,i=e.length-1;n<i;)t=n+i>>1,c[e[t]]<f?n=t+1:i=t;f<c[e[n]]&&(n>0&&(a[r]=e[n-1]),e[n]=r)}}for(n=e.length,i=e[n-1];n-- >0;)e[n]=i,i=a[i];return e}const Lo=c=>c.__isTeleport,L2=Symbol.for("v-fgt"),O4=Symbol.for("v-txt"),a3=Symbol.for("v-cmt"),h6=Symbol.for("v-stc"),C3=[];let R2=null;function Y2(c=!1){C3.push(R2=c?null:[])}function go(){C3.pop(),R2=C3[C3.length-1]||null}let k3=1;function r5(c){k3+=c}function ec(c){return c.dynamicChildren=k3>0?R2||K1:null,go(),k3>0&&R2&&R2.push(c),c}function O3(c,a,e,r,s,n){return ec(r2(c,a,e,r,s,n,!0))}function A3(c,a,e,r,s){return ec(t2(c,a,e,r,s,!0))}function x4(c){return c?c.__v_isVNode===!0:!1}function h3(c,a){return c.type===a.type&&c.key===a.key}const U4="__vInternal",rc=({key:c})=>c??null,H4=({ref:c,ref_key:a,ref_for:e})=>(typeof c=="number"&&(c=""+c),c!=null?o2(c)||V2(c)||I(c)?{i:d2,r:c,k:a,f:!!e}:c:null);function r2(c,a=null,e=null,r=0,s=null,n=c===L2?0:1,i=!1,t=!1){const l={__v_isVNode:!0,__v_skip:!0,type:c,props:a,key:a&&rc(a),ref:a&&H4(a),scopeId:F4,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:n,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:d2};return t?(C0(l,e),n&128&&c.normalize(l)):e&&(l.shapeFlag|=o2(e)?8:16),k3>0&&!i&&R2&&(l.patchFlag>0||n&6)&&l.patchFlag!==32&&R2.push(l),l}const t2=xo;function xo(c,a=null,e=null,r=0,s=null,n=!1){if((!c||c===eo)&&(c=a3),x4(c)){const t=e3(c,a,!0);return e&&C0(t,e),k3>0&&!n&&R2&&(t.shapeFlag&6?R2[R2.indexOf(c)]=t:R2.push(t)),t.patchFlag|=-2,t}if(Ro(c)&&(c=c.__vccOpts),a){a=bo(a);let{class:t,style:l}=a;t&&!o2(t)&&(a.class=l0(t)),s2(l)&&(N7(l)&&!O(l)&&(l=u2({},l)),a.style=t0(l))}const i=o2(c)?1:Ul(c)?128:Lo(c)?64:s2(c)?4:I(c)?2:0;return r2(c,a,e,r,s,i,n,!0)}function bo(c){return c?N7(c)||U4 in c?u2({},c):c:null}function e3(c,a,e=!1){const{props:r,ref:s,patchFlag:n,children:i}=c,t=a?No(r||{},a):r;return{__v_isVNode:!0,__v_skip:!0,type:c.type,props:t,key:t&&rc(t),ref:a&&a.ref?e&&s?O(s)?s.concat(H4(a)):[s,H4(a)]:H4(a):s,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:i,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:a&&c.type!==L2?n===-1?16:n|16:n,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:c.transition,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&e3(c.ssContent),ssFallback:c.ssFallback&&e3(c.ssFallback),el:c.el,anchor:c.anchor,ctx:c.ctx,ce:c.ce}}function z2(c=" ",a=0){return t2(O4,null,c,a)}function W2(c){return c==null||typeof c=="boolean"?t2(a3):O(c)?t2(L2,null,c.slice()):typeof c=="object"?v1(c):t2(O4,null,String(c))}function v1(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:e3(c)}function C0(c,a){let e=0;const{shapeFlag:r}=c;if(a==null)a=null;else if(O(a))e=16;else if(typeof a=="object")if(r&65){const s=a.default;s&&(s._c&&(s._d=!1),C0(c,s()),s._c&&(s._d=!0));return}else{e=32;const s=a._;!s&&!(U4 in a)?a._ctx=d2:s===3&&d2&&(d2.slots._===1?a._=1:(a._=2,c.patchFlag|=1024))}else I(a)?(a={default:a,_ctx:d2},e=32):(a=String(a),r&64?(e=16,a=[z2(a)]):e=8);c.children=a,c.shapeFlag|=e}function No(...c){const a={};for(let e=0;e<c.length;e++){const r=c[e];for(const s in r)if(s==="class")a.class!==r.class&&(a.class=l0([a.class,r.class]));else if(s==="style")a.style=t0([a.style,r.style]);else if(A4(s)){const n=a[s],i=r[s];i&&n!==i&&!(O(n)&&n.includes(i))&&(a[s]=n?[].concat(n,i):i)}else s!==""&&(a[s]=r[s])}return a}function G2(c,a,e,r=null){F2(c,a,7,[e,r])}const So=Y7();let wo=0;function yo(c,a,e){const r=c.type,s=(a?a.appContext:c.appContext)||So,n={uid:wo++,vnode:c,type:r,parent:a,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Xt(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Q7(r,s),emitsOptions:B7(r,s),emit:null,emitted:null,propsDefaults:c2,inheritAttrs:r.inheritAttrs,ctx:c2,data:c2,props:c2,attrs:c2,slots:c2,refs:c2,setupState:c2,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return n.ctx={_:n},n.root=a?a.root:n,n.emit=El.bind(null,n),c.ce&&c.ce(n),n}let h2=null,L0,U1,s5="__VUE_INSTANCE_SETTERS__";(U1=S6()[s5])||(U1=S6()[s5]=[]),U1.push(c=>h2=c),L0=c=>{U1.length>1?U1.forEach(a=>a(c)):U1[0](c)};const r3=c=>{L0(c),c.scope.on()},P1=()=>{h2&&h2.scope.off(),L0(null)};function sc(c){return c.vnode.shapeFlag&4}let P3=!1;function ko(c,a=!1){P3=a;const{props:e,children:r}=c.vnode,s=sc(c);vo(c,e,s,a),zo(c,r);const n=s?Ao(c,a):void 0;return P3=!1,n}function Ao(c,a){const e=c.type;c.accessCache=Object.create(null),c.proxy=S7(new Proxy(c.ctx,no));const{setup:r}=e;if(r){const s=c.setupContext=r.length>1?To(c):null;r3(c),l3();const n=z1(r,c,0,[c.props,s]);if(o3(),P1(),o7(n)){if(n.then(P1,P1),a)return n.then(i=>{n5(c,i,a)}).catch(i=>{E4(i,c,0)});c.asyncDep=n}else n5(c,n,a)}else nc(c,a)}function n5(c,a,e){I(a)?c.type.__ssrInlineRender?c.ssrRender=a:c.render=a:s2(a)&&(c.setupState=A7(a)),nc(c,e)}let i5;function nc(c,a,e){const r=c.type;if(!c.render){if(!a&&i5&&!r.render){const s=r.template||d0(c).template;if(s){const{isCustomElement:n,compilerOptions:i}=c.appContext.config,{delimiters:t,compilerOptions:l}=r,f=u2(u2({isCustomElement:n,delimiters:t},i),l);r.render=i5(s,f)}}c.render=r.render||B2}r3(c),l3(),io(c),o3(),P1()}function Po(c){return c.attrsProxy||(c.attrsProxy=new Proxy(c.attrs,{get(a,e){return N2(c,"get","$attrs"),a[e]}}))}function To(c){const a=e=>{c.exposed=e||{}};return{get attrs(){return Po(c)},slots:c.slots,emit:c.emit,expose:a}}function I4(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(A7(S7(c.exposed)),{get(a,e){if(e in a)return a[e];if(e in M3)return M3[e](c)},has(a,e){return e in a||e in M3}}))}function _o(c,a=!0){return I(c)?c.displayName||c.name:c.name||a&&c.__name}function Ro(c){return I(c)&&"__vccOpts"in c}const v2=(c,a)=>kl(c,a,P3);function g0(c,a,e){const r=arguments.length;return r===2?s2(a)&&!O(a)?x4(a)?t2(c,null,[a]):t2(c,a):t2(c,null,a):(r>3?e=Array.prototype.slice.call(arguments,2):r===3&&x4(e)&&(e=[e]),t2(c,a,e))}const Eo=Symbol.for("v-scx"),Bo=()=>a1(Eo),Fo="3.3.4",Do="http://www.w3.org/2000/svg",b1=typeof document<"u"?document:null,t5=b1&&b1.createElement("template"),Oo={insert:(c,a,e)=>{a.insertBefore(c,e||null)},remove:c=>{const a=c.parentNode;a&&a.removeChild(c)},createElement:(c,a,e,r)=>{const s=a?b1.createElementNS(Do,c):b1.createElement(c,e?{is:e}:void 0);return c==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:c=>b1.createTextNode(c),createComment:c=>b1.createComment(c),setText:(c,a)=>{c.nodeValue=a},setElementText:(c,a)=>{c.textContent=a},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>b1.querySelector(c),setScopeId(c,a){c.setAttribute(a,"")},insertStaticContent(c,a,e,r,s,n){const i=e?e.previousSibling:a.lastChild;if(s&&(s===n||s.nextSibling))for(;a.insertBefore(s.cloneNode(!0),e),!(s===n||!(s=s.nextSibling)););else{t5.innerHTML=r?`<svg>${c}</svg>`:c;const t=t5.content;if(r){const l=t.firstChild;for(;l.firstChild;)t.appendChild(l.firstChild);t.removeChild(l)}a.insertBefore(t,e)}return[i?i.nextSibling:a.firstChild,e?e.previousSibling:a.lastChild]}};function Uo(c,a,e){const r=c._vtc;r&&(a=(a?[a,...r]:[...r]).join(" ")),a==null?c.removeAttribute("class"):e?c.setAttribute("class",a):c.className=a}function Io(c,a,e){const r=c.style,s=o2(e);if(e&&!s){if(a&&!o2(a))for(const n in a)e[n]==null&&F6(r,n,"");for(const n in e)F6(r,n,e[n])}else{const n=r.display;s?a!==e&&(r.cssText=e):a&&c.removeAttribute("style"),"_vod"in c&&(r.display=n)}}const l5=/\s*!important$/;function F6(c,a,e){if(O(e))e.forEach(r=>F6(c,a,r));else if(e==null&&(e=""),a.startsWith("--"))c.setProperty(a,e);else{const r=qo(c,a);l5.test(e)?c.setProperty(t3(r),e.replace(l5,""),"important"):c[r]=e}}const o5=["Webkit","Moz","ms"],H6={};function qo(c,a){const e=H6[a];if(e)return e;let r=X2(a);if(r!=="filter"&&r in c)return H6[a]=r;r=_4(r);for(let s=0;s<o5.length;s++){const n=o5[s]+r;if(n in c)return H6[a]=n}return a}const f5="http://www.w3.org/1999/xlink";function Go(c,a,e,r,s){if(r&&a.startsWith("xlink:"))e==null?c.removeAttributeNS(f5,a.slice(6,a.length)):c.setAttributeNS(f5,a,e);else{const n=Yt(a);e==null||n&&!u7(e)?c.removeAttribute(a):c.setAttribute(a,n?"":e)}}function Wo(c,a,e,r,s,n,i){if(a==="innerHTML"||a==="textContent"){r&&i(r,s,n),c[a]=e??"";return}const t=c.tagName;if(a==="value"&&t!=="PROGRESS"&&!t.includes("-")){c._value=e;const f=t==="OPTION"?c.getAttribute("value"):c.value,o=e??"";f!==o&&(c.value=o),e==null&&c.removeAttribute(a);return}let l=!1;if(e===""||e==null){const f=typeof c[a];f==="boolean"?e=u7(e):e==null&&f==="string"?(e="",l=!0):f==="number"&&(e=0,l=!0)}try{c[a]=e}catch{}l&&c.removeAttribute(a)}function G1(c,a,e,r){c.addEventListener(a,e,r)}function jo(c,a,e,r){c.removeEventListener(a,e,r)}function $o(c,a,e,r,s=null){const n=c._vei||(c._vei={}),i=n[a];if(r&&i)i.value=r;else{const[t,l]=Ko(a);if(r){const f=n[a]=Qo(r,s);G1(c,t,f,l)}else i&&(jo(c,t,i,l),n[a]=void 0)}}const m5=/(?:Once|Passive|Capture)$/;function Ko(c){let a;if(m5.test(c)){a={};let r;for(;r=c.match(m5);)c=c.slice(0,c.length-r[0].length),a[r[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):t3(c.slice(2)),a]}let z6=0;const Yo=Promise.resolve(),Xo=()=>z6||(Yo.then(()=>z6=0),z6=Date.now());function Qo(c,a){const e=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=e.attached)return;F2(Jo(r,e.value),a,5,[r])};return e.value=c,e.attached=Xo(),e}function Jo(c,a){if(O(a)){const e=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{e.call(c),c._stopped=!0},a.map(r=>s=>!s._stopped&&r&&r(s))}else return a}const u5=/^on[a-z]/,Zo=(c,a,e,r,s=!1,n,i,t,l)=>{a==="class"?Uo(c,r,s):a==="style"?Io(c,e,r):A4(a)?r0(a)||$o(c,a,e,r,i):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):cf(c,a,r,s))?Wo(c,a,r,n,i,t,l):(a==="true-value"?c._trueValue=r:a==="false-value"&&(c._falseValue=r),Go(c,a,r,s))};function cf(c,a,e,r){return r?!!(a==="innerHTML"||a==="textContent"||a in c&&u5.test(a)&&I(e)):a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&c.tagName==="INPUT"||a==="type"&&c.tagName==="TEXTAREA"||u5.test(a)&&o2(e)?!1:a in c}const v5=c=>{const a=c.props["onUpdate:modelValue"]||!1;return O(a)?e=>u4(a,e):a};function af(c){c.target.composing=!0}function h5(c){const a=c.target;a.composing&&(a.composing=!1,a.dispatchEvent(new Event("input")))}const z4={created(c,{modifiers:{lazy:a,trim:e,number:r}},s){c._assign=v5(s);const n=r||s.props&&s.props.type==="number";G1(c,a?"change":"input",i=>{if(i.target.composing)return;let t=c.value;e&&(t=t.trim()),n&&(t=N6(t)),c._assign(t)}),e&&G1(c,"change",()=>{c.value=c.value.trim()}),a||(G1(c,"compositionstart",af),G1(c,"compositionend",h5),G1(c,"change",h5))},mounted(c,{value:a}){c.value=a??""},beforeUpdate(c,{value:a,modifiers:{lazy:e,trim:r,number:s}},n){if(c._assign=v5(n),c.composing||document.activeElement===c&&c.type!=="range"&&(e||r&&c.value.trim()===a||(s||c.type==="number")&&N6(c.value)===a))return;const i=a??"";c.value!==i&&(c.value=i)}},ef=u2({patchProp:Zo},Oo);let H5;function rf(){return H5||(H5=Vo(ef))}const sf=(...c)=>{const a=rf().createApp(...c),{mount:e}=a;return a.mount=r=>{const s=nf(r);if(!s)return;const n=a._component;!I(n)&&!n.render&&!n.template&&(n.template=s.innerHTML),s.innerHTML="";const i=e(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),i},a};function nf(c){return o2(c)?document.querySelector(c):c}const R1=(c,a)=>{const e=c.__vccOpts||c;for(const[r,s]of a)e[r]=s;return e},tf={};function lf(c,a){const e=S1("router-view");return Y2(),A3(e)}const of=R1(tf,[["render",lf]]),ff="modulepreload",mf=function(c){return"/vue/"+c},z5={},x0=function(a,e,r){if(!e||e.length===0)return a();const s=document.getElementsByTagName("link");return Promise.all(e.map(n=>{if(n=mf(n),n in z5)return;z5[n]=!0;const i=n.endsWith(".css"),t=i?'[rel="stylesheet"]':"";if(!!r)for(let o=s.length-1;o>=0;o--){const m=s[o];if(m.href===n&&(!i||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${t}`))return;const f=document.createElement("link");if(f.rel=i?"stylesheet":ff,i||(f.as="script",f.crossOrigin=""),f.href=n,document.head.appendChild(f),i)return new Promise((o,m)=>{f.addEventListener("load",o),f.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>a()).catch(n=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=n,window.dispatchEvent(i),!i.defaultPrevented)throw n})};function uf(){return ic().__VUE_DEVTOOLS_GLOBAL_HOOK__}function ic(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const vf=typeof Proxy=="function",hf="devtools-plugin:setup",Hf="plugin:settings:set";let I1,D6;function zf(){var c;return I1!==void 0||(typeof window<"u"&&window.performance?(I1=!0,D6=window.performance):typeof global<"u"&&(!((c=global.perf_hooks)===null||c===void 0)&&c.performance)?(I1=!0,D6=global.perf_hooks.performance):I1=!1),I1}function pf(){return zf()?D6.now():Date.now()}class Vf{constructor(a,e){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=a,this.hook=e;const r={};if(a.settings)for(const i in a.settings){const t=a.settings[i];r[i]=t.defaultValue}const s=`__vue-devtools-plugin-settings__${a.id}`;let n=Object.assign({},r);try{const i=localStorage.getItem(s),t=JSON.parse(i);Object.assign(n,t)}catch{}this.fallbacks={getSettings(){return n},setSettings(i){try{localStorage.setItem(s,JSON.stringify(i))}catch{}n=i},now(){return pf()}},e&&e.on(Hf,(i,t)=>{i===this.plugin.id&&this.fallbacks.setSettings(t)}),this.proxiedOn=new Proxy({},{get:(i,t)=>this.target?this.target.on[t]:(...l)=>{this.onQueue.push({method:t,args:l})}}),this.proxiedTarget=new Proxy({},{get:(i,t)=>this.target?this.target[t]:t==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...l)=>(this.targetQueue.push({method:t,args:l,resolve:()=>{}}),this.fallbacks[t](...l)):(...l)=>new Promise(f=>{this.targetQueue.push({method:t,args:l,resolve:f})})})}async setRealTarget(a){this.target=a;for(const e of this.onQueue)this.target.on[e.method](...e.args);for(const e of this.targetQueue)e.resolve(await this.target[e.method](...e.args))}}function df(c,a){const e=c,r=ic(),s=uf(),n=vf&&e.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!n))s.emit(hf,c,a);else{const i=n?new Vf(e,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:e,setupFn:a,proxy:i}),i&&a(i.proxiedTarget)}}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const W1=typeof window<"u";function Mf(c){return c.__esModule||c[Symbol.toStringTag]==="Module"}const Y=Object.assign;function p6(c,a){const e={};for(const r in a){const s=a[r];e[r]=D2(s)?s.map(c):c(s)}return e}const L3=()=>{},D2=Array.isArray,Cf=/\/$/,Lf=c=>c.replace(Cf,"");function V6(c,a,e="/"){let r,s={},n="",i="";const t=a.indexOf("#");let l=a.indexOf("?");return t<l&&t>=0&&(l=-1),l>-1&&(r=a.slice(0,l),n=a.slice(l+1,t>-1?t:a.length),s=c(n)),t>-1&&(r=r||a.slice(0,t),i=a.slice(t,a.length)),r=Nf(r??a,e),{fullPath:r+(n&&"?")+n+i,path:r,query:s,hash:i}}function gf(c,a){const e=a.query?c(a.query):"";return a.path+(e&&"?")+e+(a.hash||"")}function p5(c,a){return!a||!c.toLowerCase().startsWith(a.toLowerCase())?c:c.slice(a.length)||"/"}function xf(c,a,e){const r=a.matched.length-1,s=e.matched.length-1;return r>-1&&r===s&&s3(a.matched[r],e.matched[s])&&tc(a.params,e.params)&&c(a.query)===c(e.query)&&a.hash===e.hash}function s3(c,a){return(c.aliasOf||c)===(a.aliasOf||a)}function tc(c,a){if(Object.keys(c).length!==Object.keys(a).length)return!1;for(const e in c)if(!bf(c[e],a[e]))return!1;return!0}function bf(c,a){return D2(c)?V5(c,a):D2(a)?V5(a,c):c===a}function V5(c,a){return D2(a)?c.length===a.length&&c.every((e,r)=>e===a[r]):c.length===1&&c[0]===a}function Nf(c,a){if(c.startsWith("/"))return c;if(!c)return a;const e=a.split("/"),r=c.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let n=e.length-1,i,t;for(i=0;i<r.length;i++)if(t=r[i],t!==".")if(t==="..")n>1&&n--;else break;return e.slice(0,n).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var T3;(function(c){c.pop="pop",c.push="push"})(T3||(T3={}));var g3;(function(c){c.back="back",c.forward="forward",c.unknown=""})(g3||(g3={}));function Sf(c){if(!c)if(W1){const a=document.querySelector("base");c=a&&a.getAttribute("href")||"/",c=c.replace(/^\w+:\/\/[^\/]+/,"")}else c="/";return c[0]!=="/"&&c[0]!=="#"&&(c="/"+c),Lf(c)}const wf=/^[^#]+#/;function yf(c,a){return c.replace(wf,"#")+a}function kf(c,a){const e=document.documentElement.getBoundingClientRect(),r=c.getBoundingClientRect();return{behavior:a.behavior,left:r.left-e.left-(a.left||0),top:r.top-e.top-(a.top||0)}}const q4=()=>({left:window.pageXOffset,top:window.pageYOffset});function Af(c){let a;if("el"in c){const e=c.el,r=typeof e=="string"&&e.startsWith("#"),s=typeof e=="string"?r?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!s)return;a=kf(s,c)}else a=c;"scrollBehavior"in document.documentElement.style?window.scrollTo(a):window.scrollTo(a.left!=null?a.left:window.pageXOffset,a.top!=null?a.top:window.pageYOffset)}function d5(c,a){return(history.state?history.state.position-a:-1)+c}const O6=new Map;function Pf(c,a){O6.set(c,a)}function Tf(c){const a=O6.get(c);return O6.delete(c),a}let _f=()=>location.protocol+"//"+location.host;function lc(c,a){const{pathname:e,search:r,hash:s}=a,n=c.indexOf("#");if(n>-1){let t=s.includes(c.slice(n))?c.slice(n).length:1,l=s.slice(t);return l[0]!=="/"&&(l="/"+l),p5(l,"")}return p5(e,c)+r+s}function Rf(c,a,e,r){let s=[],n=[],i=null;const t=({state:h})=>{const z=lc(c,location),b=e.value,w=a.value;let E=0;if(h){if(e.value=z,a.value=h,i&&i===b){i=null;return}E=w?h.position-w.position:0}else r(z);s.forEach(M=>{M(e.value,b,{delta:E,type:T3.pop,direction:E?E>0?g3.forward:g3.back:g3.unknown})})};function l(){i=e.value}function f(h){s.push(h);const z=()=>{const b=s.indexOf(h);b>-1&&s.splice(b,1)};return n.push(z),z}function o(){const{history:h}=window;h.state&&h.replaceState(Y({},h.state,{scroll:q4()}),"")}function m(){for(const h of n)h();n=[],window.removeEventListener("popstate",t),window.removeEventListener("beforeunload",o)}return window.addEventListener("popstate",t),window.addEventListener("beforeunload",o,{passive:!0}),{pauseListeners:l,listen:f,destroy:m}}function M5(c,a,e,r=!1,s=!1){return{back:c,current:a,forward:e,replaced:r,position:window.history.length,scroll:s?q4():null}}function Ef(c){const{history:a,location:e}=window,r={value:lc(c,e)},s={value:a.state};s.value||n(r.value,{back:null,current:r.value,forward:null,position:a.length-1,replaced:!0,scroll:null},!0);function n(l,f,o){const m=c.indexOf("#"),h=m>-1?(e.host&&document.querySelector("base")?c:c.slice(m))+l:_f()+c+l;try{a[o?"replaceState":"pushState"](f,"",h),s.value=f}catch(z){console.error(z),e[o?"replace":"assign"](h)}}function i(l,f){const o=Y({},a.state,M5(s.value.back,l,s.value.forward,!0),f,{position:s.value.position});n(l,o,!0),r.value=l}function t(l,f){const o=Y({},s.value,a.state,{forward:l,scroll:q4()});n(o.current,o,!0);const m=Y({},M5(r.value,l,null),{position:o.position+1},f);n(l,m,!1),r.value=l}return{location:r,state:s,push:t,replace:i}}function Bf(c){c=Sf(c);const a=Ef(c),e=Rf(c,a.state,a.location,a.replace);function r(n,i=!0){i||e.pauseListeners(),history.go(n)}const s=Y({location:"",base:c,go:r,createHref:yf.bind(null,c)},a,e);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>a.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>a.state.value}),s}function Ff(c){return typeof c=="string"||c&&typeof c=="object"}function oc(c){return typeof c=="string"||typeof c=="symbol"}const m1={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},fc=Symbol("");var C5;(function(c){c[c.aborted=4]="aborted",c[c.cancelled=8]="cancelled",c[c.duplicated=16]="duplicated"})(C5||(C5={}));function n3(c,a){return Y(new Error,{type:c,[fc]:!0},a)}function J2(c,a){return c instanceof Error&&fc in c&&(a==null||!!(c.type&a))}const L5="[^/]+?",Df={sensitive:!1,strict:!1,start:!0,end:!0},Of=/[.+*?^${}()[\]/\\]/g;function Uf(c,a){const e=Y({},Df,a),r=[];let s=e.start?"^":"";const n=[];for(const f of c){const o=f.length?[]:[90];e.strict&&!f.length&&(s+="/");for(let m=0;m<f.length;m++){const h=f[m];let z=40+(e.sensitive?.25:0);if(h.type===0)m||(s+="/"),s+=h.value.replace(Of,"\\$&"),z+=40;else if(h.type===1){const{value:b,repeatable:w,optional:E,regexp:M}=h;n.push({name:b,repeatable:w,optional:E});const C=M||L5;if(C!==L5){z+=10;try{new RegExp(`(${C})`)}catch(y){throw new Error(`Invalid custom RegExp for param "${b}" (${C}): `+y.message)}}let R=w?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;m||(R=E&&f.length<2?`(?:/${R})`:"/"+R),E&&(R+="?"),s+=R,z+=20,E&&(z+=-8),w&&(z+=-20),C===".*"&&(z+=-50)}o.push(z)}r.push(o)}if(e.strict&&e.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}e.strict||(s+="/?"),e.end?s+="$":e.strict&&(s+="(?:/|$)");const i=new RegExp(s,e.sensitive?"":"i");function t(f){const o=f.match(i),m={};if(!o)return null;for(let h=1;h<o.length;h++){const z=o[h]||"",b=n[h-1];m[b.name]=z&&b.repeatable?z.split("/"):z}return m}function l(f){let o="",m=!1;for(const h of c){(!m||!o.endsWith("/"))&&(o+="/"),m=!1;for(const z of h)if(z.type===0)o+=z.value;else if(z.type===1){const{value:b,repeatable:w,optional:E}=z,M=b in f?f[b]:"";if(D2(M)&&!w)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const C=D2(M)?M.join("/"):M;if(!C)if(E)h.length<2&&(o.endsWith("/")?o=o.slice(0,-1):m=!0);else throw new Error(`Missing required param "${b}"`);o+=C}}return o||"/"}return{re:i,score:r,keys:n,parse:t,stringify:l}}function If(c,a){let e=0;for(;e<c.length&&e<a.length;){const r=a[e]-c[e];if(r)return r;e++}return c.length<a.length?c.length===1&&c[0]===40+40?-1:1:c.length>a.length?a.length===1&&a[0]===40+40?1:-1:0}function qf(c,a){let e=0;const r=c.score,s=a.score;for(;e<r.length&&e<s.length;){const n=If(r[e],s[e]);if(n)return n;e++}if(Math.abs(s.length-r.length)===1){if(g5(r))return 1;if(g5(s))return-1}return s.length-r.length}function g5(c){const a=c[c.length-1];return c.length>0&&a[a.length-1]<0}const Gf={type:0,value:""},Wf=/[a-zA-Z0-9_]/;function jf(c){if(!c)return[[]];if(c==="/")return[[Gf]];if(!c.startsWith("/"))throw new Error(`Invalid path "${c}"`);function a(z){throw new Error(`ERR (${e})/"${f}": ${z}`)}let e=0,r=e;const s=[];let n;function i(){n&&s.push(n),n=[]}let t=0,l,f="",o="";function m(){f&&(e===0?n.push({type:0,value:f}):e===1||e===2||e===3?(n.length>1&&(l==="*"||l==="+")&&a(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),n.push({type:1,value:f,regexp:o,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):a("Invalid state to consume buffer"),f="")}function h(){f+=l}for(;t<c.length;){if(l=c[t++],l==="\\"&&e!==2){r=e,e=4;continue}switch(e){case 0:l==="/"?(f&&m(),i()):l===":"?(m(),e=1):h();break;case 4:h(),e=r;break;case 1:l==="("?e=2:Wf.test(l)?h():(m(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&t--);break;case 2:l===")"?o[o.length-1]=="\\"?o=o.slice(0,-1)+l:e=3:o+=l;break;case 3:m(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&t--,o="";break;default:a("Unknown state");break}}return e===2&&a(`Unfinished custom RegExp for param "${f}"`),m(),i(),s}function $f(c,a,e){const r=Uf(jf(c.path),e),s=Y(r,{record:c,parent:a,children:[],alias:[]});return a&&!s.record.aliasOf==!a.record.aliasOf&&a.children.push(s),s}function Kf(c,a){const e=[],r=new Map;a=N5({strict:!1,end:!0,sensitive:!1},a);function s(o){return r.get(o)}function n(o,m,h){const z=!h,b=Yf(o);b.aliasOf=h&&h.record;const w=N5(a,o),E=[b];if("alias"in o){const R=typeof o.alias=="string"?[o.alias]:o.alias;for(const y of R)E.push(Y({},b,{components:h?h.record.components:b.components,path:y,aliasOf:h?h.record:b}))}let M,C;for(const R of E){const{path:y}=R;if(m&&y[0]!=="/"){const q=m.record.path,J=q[q.length-1]==="/"?"":"/";R.path=m.record.path+(y&&J+y)}if(M=$f(R,m,w),h?h.alias.push(M):(C=C||M,C!==M&&C.alias.push(M),z&&o.name&&!b5(M)&&i(o.name)),b.children){const q=b.children;for(let J=0;J<q.length;J++)n(q[J],M,h&&h.children[J])}h=h||M,(M.record.components&&Object.keys(M.record.components).length||M.record.name||M.record.redirect)&&l(M)}return C?()=>{i(C)}:L3}function i(o){if(oc(o)){const m=r.get(o);m&&(r.delete(o),e.splice(e.indexOf(m),1),m.children.forEach(i),m.alias.forEach(i))}else{const m=e.indexOf(o);m>-1&&(e.splice(m,1),o.record.name&&r.delete(o.record.name),o.children.forEach(i),o.alias.forEach(i))}}function t(){return e}function l(o){let m=0;for(;m<e.length&&qf(o,e[m])>=0&&(o.record.path!==e[m].record.path||!mc(o,e[m]));)m++;e.splice(m,0,o),o.record.name&&!b5(o)&&r.set(o.record.name,o)}function f(o,m){let h,z={},b,w;if("name"in o&&o.name){if(h=r.get(o.name),!h)throw n3(1,{location:o});w=h.record.name,z=Y(x5(m.params,h.keys.filter(C=>!C.optional).map(C=>C.name)),o.params&&x5(o.params,h.keys.map(C=>C.name))),b=h.stringify(z)}else if("path"in o)b=o.path,h=e.find(C=>C.re.test(b)),h&&(z=h.parse(b),w=h.record.name);else{if(h=m.name?r.get(m.name):e.find(C=>C.re.test(m.path)),!h)throw n3(1,{location:o,currentLocation:m});w=h.record.name,z=Y({},m.params,o.params),b=h.stringify(z)}const E=[];let M=h;for(;M;)E.unshift(M.record),M=M.parent;return{name:w,path:b,params:z,matched:E,meta:Qf(E)}}return c.forEach(o=>n(o)),{addRoute:n,resolve:f,removeRoute:i,getRoutes:t,getRecordMatcher:s}}function x5(c,a){const e={};for(const r of a)r in c&&(e[r]=c[r]);return e}function Yf(c){return{path:c.path,redirect:c.redirect,name:c.name,meta:c.meta||{},aliasOf:void 0,beforeEnter:c.beforeEnter,props:Xf(c),children:c.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in c?c.components||null:c.component&&{default:c.component}}}function Xf(c){const a={},e=c.props||!1;if("component"in c)a.default=e;else for(const r in c.components)a[r]=typeof e=="object"?e[r]:e;return a}function b5(c){for(;c;){if(c.record.aliasOf)return!0;c=c.parent}return!1}function Qf(c){return c.reduce((a,e)=>Y(a,e.meta),{})}function N5(c,a){const e={};for(const r in c)e[r]=r in a?a[r]:c[r];return e}function mc(c,a){return a.children.some(e=>e===c||mc(c,e))}const uc=/#/g,Jf=/&/g,Zf=/\//g,cm=/=/g,am=/\?/g,vc=/\+/g,em=/%5B/g,rm=/%5D/g,hc=/%5E/g,sm=/%60/g,Hc=/%7B/g,nm=/%7C/g,zc=/%7D/g,im=/%20/g;function b0(c){return encodeURI(""+c).replace(nm,"|").replace(em,"[").replace(rm,"]")}function tm(c){return b0(c).replace(Hc,"{").replace(zc,"}").replace(hc,"^")}function U6(c){return b0(c).replace(vc,"%2B").replace(im,"+").replace(uc,"%23").replace(Jf,"%26").replace(sm,"`").replace(Hc,"{").replace(zc,"}").replace(hc,"^")}function lm(c){return U6(c).replace(cm,"%3D")}function om(c){return b0(c).replace(uc,"%23").replace(am,"%3F")}function fm(c){return c==null?"":om(c).replace(Zf,"%2F")}function b4(c){try{return decodeURIComponent(""+c)}catch{}return""+c}function mm(c){const a={};if(c===""||c==="?")return a;const r=(c[0]==="?"?c.slice(1):c).split("&");for(let s=0;s<r.length;++s){const n=r[s].replace(vc," "),i=n.indexOf("="),t=b4(i<0?n:n.slice(0,i)),l=i<0?null:b4(n.slice(i+1));if(t in a){let f=a[t];D2(f)||(f=a[t]=[f]),f.push(l)}else a[t]=l}return a}function S5(c){let a="";for(let e in c){const r=c[e];if(e=lm(e),r==null){r!==void 0&&(a+=(a.length?"&":"")+e);continue}(D2(r)?r.map(n=>n&&U6(n)):[r&&U6(r)]).forEach(n=>{n!==void 0&&(a+=(a.length?"&":"")+e,n!=null&&(a+="="+n))})}return a}function um(c){const a={};for(const e in c){const r=c[e];r!==void 0&&(a[e]=D2(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return a}const vm=Symbol(""),w5=Symbol(""),N0=Symbol(""),pc=Symbol(""),I6=Symbol("");function H3(){let c=[];function a(r){return c.push(r),()=>{const s=c.indexOf(r);s>-1&&c.splice(s,1)}}function e(){c=[]}return{add:a,list:()=>c.slice(),reset:e}}function h1(c,a,e,r,s){const n=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((i,t)=>{const l=m=>{m===!1?t(n3(4,{from:e,to:a})):m instanceof Error?t(m):Ff(m)?t(n3(2,{from:a,to:m})):(n&&r.enterCallbacks[s]===n&&typeof m=="function"&&n.push(m),i())},f=c.call(r&&r.instances[s],a,e,l);let o=Promise.resolve(f);c.length<3&&(o=o.then(l)),o.catch(m=>t(m))})}function d6(c,a,e,r){const s=[];for(const n of c)for(const i in n.components){let t=n.components[i];if(!(a!=="beforeRouteEnter"&&!n.instances[i]))if(hm(t)){const f=(t.__vccOpts||t)[a];f&&s.push(h1(f,e,r,n,i))}else{let l=t();s.push(()=>l.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${n.path}"`));const o=Mf(f)?f.default:f;n.components[i]=o;const h=(o.__vccOpts||o)[a];return h&&h1(h,e,r,n,i)()}))}}return s}function hm(c){return typeof c=="object"||"displayName"in c||"props"in c||"__vccOpts"in c}function y5(c){const a=a1(N0),e=a1(pc),r=v2(()=>a.resolve(Q1(c.to))),s=v2(()=>{const{matched:l}=r.value,{length:f}=l,o=l[f-1],m=e.matched;if(!o||!m.length)return-1;const h=m.findIndex(s3.bind(null,o));if(h>-1)return h;const z=k5(l[f-2]);return f>1&&k5(o)===z&&m[m.length-1].path!==z?m.findIndex(s3.bind(null,l[f-2])):h}),n=v2(()=>s.value>-1&&Vm(e.params,r.value.params)),i=v2(()=>s.value>-1&&s.value===e.matched.length-1&&tc(e.params,r.value.params));function t(l={}){return pm(l)?a[Q1(c.replace)?"replace":"push"](Q1(c.to)).catch(L3):Promise.resolve()}return{route:r,href:v2(()=>r.value.href),isActive:n,isExactActive:i,navigate:t}}const Hm=V0({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:y5,setup(c,{slots:a}){const e=D3(y5(c)),{options:r}=a1(N0),s=v2(()=>({[A5(c.activeClass,r.linkActiveClass,"router-link-active")]:e.isActive,[A5(c.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const n=a.default&&a.default(e);return c.custom?n:g0("a",{"aria-current":e.isExactActive?c.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:s.value},n)}}}),zm=Hm;function pm(c){if(!(c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)&&!c.defaultPrevented&&!(c.button!==void 0&&c.button!==0)){if(c.currentTarget&&c.currentTarget.getAttribute){const a=c.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(a))return}return c.preventDefault&&c.preventDefault(),!0}}function Vm(c,a){for(const e in a){const r=a[e],s=c[e];if(typeof r=="string"){if(r!==s)return!1}else if(!D2(s)||s.length!==r.length||r.some((n,i)=>n!==s[i]))return!1}return!0}function k5(c){return c?c.aliasOf?c.aliasOf.path:c.path:""}const A5=(c,a,e)=>c??a??e,dm=V0({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(c,{attrs:a,slots:e}){const r=a1(I6),s=v2(()=>c.route||r.value),n=a1(w5,0),i=v2(()=>{let f=Q1(n);const{matched:o}=s.value;let m;for(;(m=o[f])&&!m.components;)f++;return f}),t=v2(()=>s.value.matched[i.value]);h4(w5,v2(()=>i.value+1)),h4(vm,t),h4(I6,s);const l=bl();return A1(()=>[l.value,t.value,c.name],([f,o,m],[h,z,b])=>{o&&(o.instances[m]=f,z&&z!==o&&f&&f===h&&(o.leaveGuards.size||(o.leaveGuards=z.leaveGuards),o.updateGuards.size||(o.updateGuards=z.updateGuards))),f&&o&&(!z||!s3(o,z)||!h)&&(o.enterCallbacks[m]||[]).forEach(w=>w(f))},{flush:"post"}),()=>{const f=s.value,o=c.name,m=t.value,h=m&&m.components[o];if(!h)return P5(e.default,{Component:h,route:f});const z=m.props[o],b=z?z===!0?f.params:typeof z=="function"?z(f):z:null,E=g0(h,Y({},b,a,{onVnodeUnmounted:M=>{M.component.isUnmounted&&(m.instances[o]=null)},ref:l}));return P5(e.default,{Component:E,route:f})||E}}});function P5(c,a){if(!c)return null;const e=c(a);return e.length===1?e[0]:e}const Mm=dm;function Cm(c){const a=Kf(c.routes,c),e=c.parseQuery||mm,r=c.stringifyQuery||S5,s=c.history,n=H3(),i=H3(),t=H3(),l=Nl(m1);let f=m1;W1&&c.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const o=p6.bind(null,V=>""+V),m=p6.bind(null,fm),h=p6.bind(null,b4);function z(V,P){let S,B;return oc(V)?(S=a.getRecordMatcher(V),B=P):B=V,a.addRoute(B,S)}function b(V){const P=a.getRecordMatcher(V);P&&a.removeRoute(P)}function w(){return a.getRoutes().map(V=>V.record)}function E(V){return!!a.getRecordMatcher(V)}function M(V,P){if(P=Y({},P||l.value),typeof V=="string"){const H=V6(e,V,P.path),p=a.resolve({path:H.path},P),d=s.createHref(H.fullPath);return Y(H,p,{params:h(p.params),hash:b4(H.hash),redirectedFrom:void 0,href:d})}let S;if("path"in V)S=Y({},V,{path:V6(e,V.path,P.path).path});else{const H=Y({},V.params);for(const p in H)H[p]==null&&delete H[p];S=Y({},V,{params:m(H)}),P.params=m(P.params)}const B=a.resolve(S,P),K=V.hash||"";B.params=o(h(B.params));const u=gf(r,Y({},V,{hash:tm(K),path:B.path})),v=s.createHref(u);return Y({fullPath:u,hash:K,query:r===S5?um(V.query):V.query||{}},B,{redirectedFrom:void 0,href:v})}function C(V){return typeof V=="string"?V6(e,V,l.value.path):Y({},V)}function R(V,P){if(f!==V)return n3(8,{from:P,to:V})}function y(V){return n2(V)}function q(V){return y(Y(C(V),{replace:!0}))}function J(V){const P=V.matched[V.matched.length-1];if(P&&P.redirect){const{redirect:S}=P;let B=typeof S=="function"?S(V):S;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=C(B):{path:B},B.params={}),Y({query:V.query,hash:V.hash,params:"path"in B?{}:V.params},B)}}function n2(V,P){const S=f=M(V),B=l.value,K=V.state,u=V.force,v=V.replace===!0,H=J(S);if(H)return n2(Y(C(H),{state:typeof H=="object"?Y({},K,H.state):K,force:u,replace:v}),P||S);const p=S;p.redirectedFrom=P;let d;return!u&&xf(r,B,S)&&(d=n3(16,{to:p,from:B}),I2(B,B,!0,!1)),(d?Promise.resolve(d):A2(p,B)).catch(L=>J2(L)?J2(L,2)?L:o1(L):$(L,p,B)).then(L=>{if(L){if(J2(L,2))return n2(Y({replace:v},C(L.to),{state:typeof L.to=="object"?Y({},K,L.to.state):K,force:u}),P||p)}else L=C1(p,B,!0,v,K);return l1(p,B,L),L})}function w2(V,P){const S=R(V,P);return S?Promise.reject(S):Promise.resolve()}function M2(V){const P=D1.values().next().value;return P&&typeof P.runWithContext=="function"?P.runWithContext(V):V()}function A2(V,P){let S;const[B,K,u]=Lm(V,P);S=d6(B.reverse(),"beforeRouteLeave",V,P);for(const H of B)H.leaveGuards.forEach(p=>{S.push(h1(p,V,P))});const v=w2.bind(null,V,P);return S.push(v),H2(S).then(()=>{S=[];for(const H of n.list())S.push(h1(H,V,P));return S.push(v),H2(S)}).then(()=>{S=d6(K,"beforeRouteUpdate",V,P);for(const H of K)H.updateGuards.forEach(p=>{S.push(h1(p,V,P))});return S.push(v),H2(S)}).then(()=>{S=[];for(const H of u)if(H.beforeEnter)if(D2(H.beforeEnter))for(const p of H.beforeEnter)S.push(h1(p,V,P));else S.push(h1(H.beforeEnter,V,P));return S.push(v),H2(S)}).then(()=>(V.matched.forEach(H=>H.enterCallbacks={}),S=d6(u,"beforeRouteEnter",V,P),S.push(v),H2(S))).then(()=>{S=[];for(const H of i.list())S.push(h1(H,V,P));return S.push(v),H2(S)}).catch(H=>J2(H,8)?H:Promise.reject(H))}function l1(V,P,S){t.list().forEach(B=>M2(()=>B(V,P,S)))}function C1(V,P,S,B,K){const u=R(V,P);if(u)return u;const v=P===m1,H=W1?history.state:{};S&&(B||v?s.replace(V.fullPath,Y({scroll:v&&H&&H.scroll},K)):s.push(V.fullPath,K)),l.value=V,I2(V,P,S,v),o1()}let U2;function u3(){U2||(U2=s.listen((V,P,S)=>{if(!Y3.listening)return;const B=M(V),K=J(B);if(K){n2(Y(K,{replace:!0}),B).catch(L3);return}f=B;const u=l.value;W1&&Pf(d5(u.fullPath,S.delta),q4()),A2(B,u).catch(v=>J2(v,12)?v:J2(v,2)?(n2(v.to,B).then(H=>{J2(H,20)&&!S.delta&&S.type===T3.pop&&s.go(-1,!1)}).catch(L3),Promise.reject()):(S.delta&&s.go(-S.delta,!1),$(v,B,u))).then(v=>{v=v||C1(B,u,!1),v&&(S.delta&&!J2(v,8)?s.go(-S.delta,!1):S.type===T3.pop&&J2(v,20)&&s.go(-1,!1)),l1(B,u,v)}).catch(L3)}))}let B1=H3(),m2=H3(),Q;function $(V,P,S){o1(V);const B=m2.list();return B.length?B.forEach(K=>K(V,P,S)):console.error(V),Promise.reject(V)}function Q2(){return Q&&l.value!==m1?Promise.resolve():new Promise((V,P)=>{B1.add([V,P])})}function o1(V){return Q||(Q=!V,u3(),B1.list().forEach(([P,S])=>V?S(V):P()),B1.reset()),V}function I2(V,P,S,B){const{scrollBehavior:K}=c;if(!W1||!K)return Promise.resolve();const u=!S&&Tf(d5(V.fullPath,0))||(B||!S)&&history.state&&history.state.scroll||null;return T7().then(()=>K(V,P,u)).then(v=>v&&Af(v)).catch(v=>$(v,V,P))}const g2=V=>s.go(V);let F1;const D1=new Set,Y3={currentRoute:l,listening:!0,addRoute:z,removeRoute:b,hasRoute:E,getRoutes:w,resolve:M,options:c,push:y,replace:q,go:g2,back:()=>g2(-1),forward:()=>g2(1),beforeEach:n.add,beforeResolve:i.add,afterEach:t.add,onError:m2.add,isReady:Q2,install(V){const P=this;V.component("RouterLink",zm),V.component("RouterView",Mm),V.config.globalProperties.$router=P,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>Q1(l)}),W1&&!F1&&l.value===m1&&(F1=!0,y(s.location).catch(K=>{}));const S={};for(const K in m1)Object.defineProperty(S,K,{get:()=>l.value[K],enumerable:!0});V.provide(N0,P),V.provide(pc,x7(S)),V.provide(I6,l);const B=V.unmount;D1.add(V),V.unmount=function(){D1.delete(V),D1.size<1&&(f=m1,U2&&U2(),U2=null,l.value=m1,F1=!1,Q=!1),B()}}};function H2(V){return V.reduce((P,S)=>P.then(()=>M2(S)),Promise.resolve())}return Y3}function Lm(c,a){const e=[],r=[],s=[],n=Math.max(a.matched.length,c.matched.length);for(let i=0;i<n;i++){const t=a.matched[i];t&&(c.matched.find(f=>s3(f,t))?r.push(t):e.push(t));const l=c.matched[i];l&&(a.matched.find(f=>s3(f,l))||s.push(l))}return[e,r,s]}const gm={name:"MainMasterPage"};function xm(c,a,e,r,s,n){const i=S1("router-link");return Y2(),O3(L2,null,[r2("nav",null,[t2(i,{to:"/"},{default:$2(()=>[z2("Main")]),_:1}),z2(" | "),t2(i,{to:"/goods"},{default:$2(()=>[z2("Goods")]),_:1}),z2(" | "),t2(i,{to:"/deliverers"},{default:$2(()=>[z2("Deliverers")]),_:1}),z2(" | "),t2(i,{to:"/contacts"},{default:$2(()=>[z2("Contacts")]),_:1}),z2(" | "),t2(i,{to:"/rules"},{default:$2(()=>[z2("Shopping Rules")]),_:1})]),j7(c.$slots,"default")],64)}const Vc=R1(gm,[["render",xm]]),bm={name:"HomeView",components:{MainMasterPage:Vc}},Nm=r2("h1",null,"IT technique shop",-1),Sm=r2("p",null,"Please visit our shop and buy something",-1);function wm(c,a,e,r,s,n){const i=S1("MainMasterPage");return Y2(),A3(i,null,{default:$2(()=>[Nm,Sm]),_:1})}const ym=R1(bm,[["render",wm]]);/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var km="store";function f3(c,a){Object.keys(c).forEach(function(e){return a(c[e],e)})}function dc(c){return c!==null&&typeof c=="object"}function Am(c){return c&&typeof c.then=="function"}function Pm(c,a){return function(){return c(a)}}function Mc(c,a,e){return a.indexOf(c)<0&&(e&&e.prepend?a.unshift(c):a.push(c)),function(){var r=a.indexOf(c);r>-1&&a.splice(r,1)}}function Cc(c,a){c._actions=Object.create(null),c._mutations=Object.create(null),c._wrappedGetters=Object.create(null),c._modulesNamespaceMap=Object.create(null);var e=c.state;G4(c,e,[],c._modules.root,!0),S0(c,e,a)}function S0(c,a,e){var r=c._state;c.getters={},c._makeLocalGettersCache=Object.create(null);var s=c._wrappedGetters,n={};f3(s,function(i,t){n[t]=Pm(i,c),Object.defineProperty(c.getters,t,{get:function(){return n[t]()},enumerable:!0})}),c._state=D3({data:a}),c.strict&&Bm(c),r&&e&&c._withCommit(function(){r.data=null})}function G4(c,a,e,r,s){var n=!e.length,i=c._modules.getNamespace(e);if(r.namespaced&&(c._modulesNamespaceMap[i],c._modulesNamespaceMap[i]=r),!n&&!s){var t=w0(a,e.slice(0,-1)),l=e[e.length-1];c._withCommit(function(){t[l]=r.state})}var f=r.context=Tm(c,i,e);r.forEachMutation(function(o,m){var h=i+m;_m(c,h,o,f)}),r.forEachAction(function(o,m){var h=o.root?m:i+m,z=o.handler||o;Rm(c,h,z,f)}),r.forEachGetter(function(o,m){var h=i+m;Em(c,h,o,f)}),r.forEachChild(function(o,m){G4(c,a,e.concat(m),o,s)})}function Tm(c,a,e){var r=a==="",s={dispatch:r?c.dispatch:function(n,i,t){var l=N4(n,i,t),f=l.payload,o=l.options,m=l.type;return(!o||!o.root)&&(m=a+m),c.dispatch(m,f)},commit:r?c.commit:function(n,i,t){var l=N4(n,i,t),f=l.payload,o=l.options,m=l.type;(!o||!o.root)&&(m=a+m),c.commit(m,f,o)}};return Object.defineProperties(s,{getters:{get:r?function(){return c.getters}:function(){return Lc(c,a)}},state:{get:function(){return w0(c.state,e)}}}),s}function Lc(c,a){if(!c._makeLocalGettersCache[a]){var e={},r=a.length;Object.keys(c.getters).forEach(function(s){if(s.slice(0,r)===a){var n=s.slice(r);Object.defineProperty(e,n,{get:function(){return c.getters[s]},enumerable:!0})}}),c._makeLocalGettersCache[a]=e}return c._makeLocalGettersCache[a]}function _m(c,a,e,r){var s=c._mutations[a]||(c._mutations[a]=[]);s.push(function(i){e.call(c,r.state,i)})}function Rm(c,a,e,r){var s=c._actions[a]||(c._actions[a]=[]);s.push(function(i){var t=e.call(c,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:c.getters,rootState:c.state},i);return Am(t)||(t=Promise.resolve(t)),c._devtoolHook?t.catch(function(l){throw c._devtoolHook.emit("vuex:error",l),l}):t})}function Em(c,a,e,r){c._wrappedGetters[a]||(c._wrappedGetters[a]=function(n){return e(r.state,r.getters,n.state,n.getters)})}function Bm(c){A1(function(){return c._state.data},function(){},{deep:!0,flush:"sync"})}function w0(c,a){return a.reduce(function(e,r){return e[r]},c)}function N4(c,a,e){return dc(c)&&c.type&&(e=a,a=c,c=c.type),{type:c,payload:a,options:e}}var Fm="vuex bindings",T5="vuex:mutations",M6="vuex:actions",q1="vuex",Dm=0;function Om(c,a){df({id:"org.vuejs.vuex",app:c,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[Fm]},function(e){e.addTimelineLayer({id:T5,label:"Vuex Mutations",color:_5}),e.addTimelineLayer({id:M6,label:"Vuex Actions",color:_5}),e.addInspector({id:q1,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),e.on.getInspectorTree(function(r){if(r.app===c&&r.inspectorId===q1)if(r.filter){var s=[];Nc(s,a._modules.root,r.filter,""),r.rootNodes=s}else r.rootNodes=[bc(a._modules.root,"")]}),e.on.getInspectorState(function(r){if(r.app===c&&r.inspectorId===q1){var s=r.nodeId;Lc(a,s),r.state=qm(Wm(a._modules,s),s==="root"?a.getters:a._makeLocalGettersCache,s)}}),e.on.editInspectorState(function(r){if(r.app===c&&r.inspectorId===q1){var s=r.nodeId,n=r.path;s!=="root"&&(n=s.split("/").filter(Boolean).concat(n)),a._withCommit(function(){r.set(a._state.data,n,r.state.value)})}}),a.subscribe(function(r,s){var n={};r.payload&&(n.payload=r.payload),n.state=s,e.notifyComponentUpdate(),e.sendInspectorTree(q1),e.sendInspectorState(q1),e.addTimelineEvent({layerId:T5,event:{time:Date.now(),title:r.type,data:n}})}),a.subscribeAction({before:function(r,s){var n={};r.payload&&(n.payload=r.payload),r._id=Dm++,r._time=Date.now(),n.state=s,e.addTimelineEvent({layerId:M6,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:n}})},after:function(r,s){var n={},i=Date.now()-r._time;n.duration={_custom:{type:"duration",display:i+"ms",tooltip:"Action duration",value:i}},r.payload&&(n.payload=r.payload),n.state=s,e.addTimelineEvent({layerId:M6,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:n}})}})})}var _5=8702998,Um=6710886,Im=16777215,gc={label:"namespaced",textColor:Im,backgroundColor:Um};function xc(c){return c&&c!=="root"?c.split("/").slice(-2,-1)[0]:"Root"}function bc(c,a){return{id:a||"root",label:xc(a),tags:c.namespaced?[gc]:[],children:Object.keys(c._children).map(function(e){return bc(c._children[e],a+e+"/")})}}function Nc(c,a,e,r){r.includes(e)&&c.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:a.namespaced?[gc]:[]}),Object.keys(a._children).forEach(function(s){Nc(c,a._children[s],e,r+s+"/")})}function qm(c,a,e){a=e==="root"?a:a[e];var r=Object.keys(a),s={state:Object.keys(c.state).map(function(i){return{key:i,editable:!0,value:c.state[i]}})};if(r.length){var n=Gm(a);s.getters=Object.keys(n).map(function(i){return{key:i.endsWith("/")?xc(i):i,editable:!1,value:q6(function(){return n[i]})}})}return s}function Gm(c){var a={};return Object.keys(c).forEach(function(e){var r=e.split("/");if(r.length>1){var s=a,n=r.pop();r.forEach(function(i){s[i]||(s[i]={_custom:{value:{},display:i,tooltip:"Module",abstract:!0}}),s=s[i]._custom.value}),s[n]=q6(function(){return c[e]})}else a[e]=q6(function(){return c[e]})}),a}function Wm(c,a){var e=a.split("/").filter(function(r){return r});return e.reduce(function(r,s,n){var i=r[s];if(!i)throw new Error('Missing module "'+s+'" for path "'+a+'".');return n===e.length-1?i:i._children},a==="root"?c:c.root._children)}function q6(c){try{return c()}catch(a){return a}}var O2=function(a,e){this.runtime=e,this._children=Object.create(null),this._rawModule=a;var r=a.state;this.state=(typeof r=="function"?r():r)||{}},Sc={namespaced:{configurable:!0}};Sc.namespaced.get=function(){return!!this._rawModule.namespaced};O2.prototype.addChild=function(a,e){this._children[a]=e};O2.prototype.removeChild=function(a){delete this._children[a]};O2.prototype.getChild=function(a){return this._children[a]};O2.prototype.hasChild=function(a){return a in this._children};O2.prototype.update=function(a){this._rawModule.namespaced=a.namespaced,a.actions&&(this._rawModule.actions=a.actions),a.mutations&&(this._rawModule.mutations=a.mutations),a.getters&&(this._rawModule.getters=a.getters)};O2.prototype.forEachChild=function(a){f3(this._children,a)};O2.prototype.forEachGetter=function(a){this._rawModule.getters&&f3(this._rawModule.getters,a)};O2.prototype.forEachAction=function(a){this._rawModule.actions&&f3(this._rawModule.actions,a)};O2.prototype.forEachMutation=function(a){this._rawModule.mutations&&f3(this._rawModule.mutations,a)};Object.defineProperties(O2.prototype,Sc);var E1=function(a){this.register([],a,!1)};E1.prototype.get=function(a){return a.reduce(function(e,r){return e.getChild(r)},this.root)};E1.prototype.getNamespace=function(a){var e=this.root;return a.reduce(function(r,s){return e=e.getChild(s),r+(e.namespaced?s+"/":"")},"")};E1.prototype.update=function(a){wc([],this.root,a)};E1.prototype.register=function(a,e,r){var s=this;r===void 0&&(r=!0);var n=new O2(e,r);if(a.length===0)this.root=n;else{var i=this.get(a.slice(0,-1));i.addChild(a[a.length-1],n)}e.modules&&f3(e.modules,function(t,l){s.register(a.concat(l),t,r)})};E1.prototype.unregister=function(a){var e=this.get(a.slice(0,-1)),r=a[a.length-1],s=e.getChild(r);s&&s.runtime&&e.removeChild(r)};E1.prototype.isRegistered=function(a){var e=this.get(a.slice(0,-1)),r=a[a.length-1];return e?e.hasChild(r):!1};function wc(c,a,e){if(a.update(e),e.modules)for(var r in e.modules){if(!a.getChild(r))return;wc(c.concat(r),a.getChild(r),e.modules[r])}}function jm(c){return new S2(c)}var S2=function(a){var e=this;a===void 0&&(a={});var r=a.plugins;r===void 0&&(r=[]);var s=a.strict;s===void 0&&(s=!1);var n=a.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new E1(a),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=n;var i=this,t=this,l=t.dispatch,f=t.commit;this.dispatch=function(h,z){return l.call(i,h,z)},this.commit=function(h,z,b){return f.call(i,h,z,b)},this.strict=s;var o=this._modules.root.state;G4(this,o,[],this._modules.root),S0(this,o),r.forEach(function(m){return m(e)})},y0={state:{configurable:!0}};S2.prototype.install=function(a,e){a.provide(e||km,this),a.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&Om(a,this)};y0.state.get=function(){return this._state.data};y0.state.set=function(c){};S2.prototype.commit=function(a,e,r){var s=this,n=N4(a,e,r),i=n.type,t=n.payload,l={type:i,payload:t},f=this._mutations[i];f&&(this._withCommit(function(){f.forEach(function(m){m(t)})}),this._subscribers.slice().forEach(function(o){return o(l,s.state)}))};S2.prototype.dispatch=function(a,e){var r=this,s=N4(a,e),n=s.type,i=s.payload,t={type:n,payload:i},l=this._actions[n];if(l){try{this._actionSubscribers.slice().filter(function(o){return o.before}).forEach(function(o){return o.before(t,r.state)})}catch{}var f=l.length>1?Promise.all(l.map(function(o){return o(i)})):l[0](i);return new Promise(function(o,m){f.then(function(h){try{r._actionSubscribers.filter(function(z){return z.after}).forEach(function(z){return z.after(t,r.state)})}catch{}o(h)},function(h){try{r._actionSubscribers.filter(function(z){return z.error}).forEach(function(z){return z.error(t,r.state,h)})}catch{}m(h)})})}};S2.prototype.subscribe=function(a,e){return Mc(a,this._subscribers,e)};S2.prototype.subscribeAction=function(a,e){var r=typeof a=="function"?{before:a}:a;return Mc(r,this._actionSubscribers,e)};S2.prototype.watch=function(a,e,r){var s=this;return A1(function(){return a(s.state,s.getters)},e,Object.assign({},r))};S2.prototype.replaceState=function(a){var e=this;this._withCommit(function(){e._state.data=a})};S2.prototype.registerModule=function(a,e,r){r===void 0&&(r={}),typeof a=="string"&&(a=[a]),this._modules.register(a,e),G4(this,this.state,a,this._modules.get(a),r.preserveState),S0(this,this.state)};S2.prototype.unregisterModule=function(a){var e=this;typeof a=="string"&&(a=[a]),this._modules.unregister(a),this._withCommit(function(){var r=w0(e.state,a.slice(0,-1));delete r[a[a.length-1]]}),Cc(this)};S2.prototype.hasModule=function(a){return typeof a=="string"&&(a=[a]),this._modules.isRegistered(a)};S2.prototype.hotUpdate=function(a){this._modules.update(a),Cc(this,!0)};S2.prototype._withCommit=function(a){var e=this._committing;this._committing=!0,a(),this._committing=e};Object.defineProperties(S2.prototype,y0);var yc=Pc(function(c,a){var e={};return Ac(a).forEach(function(r){var s=r.key,n=r.val;n=c+n,e[s]=function(){if(!(c&&!Tc(this.$store,"mapGetters",c)))return this.$store.getters[n]},e[s].vuex=!0}),e}),kc=Pc(function(c,a){var e={};return Ac(a).forEach(function(r){var s=r.key,n=r.val;e[s]=function(){for(var t=[],l=arguments.length;l--;)t[l]=arguments[l];var f=this.$store.dispatch;if(c){var o=Tc(this.$store,"mapActions",c);if(!o)return;f=o.context.dispatch}return typeof n=="function"?n.apply(this,[f].concat(t)):f.apply(this.$store,[n].concat(t))}}),e});function Ac(c){return $m(c)?Array.isArray(c)?c.map(function(a){return{key:a,val:a}}):Object.keys(c).map(function(a){return{key:a,val:c[a]}}):[]}function $m(c){return Array.isArray(c)||dc(c)}function Pc(c){return function(a,e){return typeof a!="string"?(e=a,a=""):a.charAt(a.length-1)!=="/"&&(a+="/"),c(a,e)}}function Tc(c,a,e){var r=c._modulesNamespaceMap[e];return r}const Km={name:"CardComponent",props:{item:{type:Object}}},Ym=c=>(F7("data-v-027d931f"),c=c(),D7(),c),Xm={class:"card"},Qm={class:"img-thumb"},Jm=["src"],Zm={class:"description"},cu=Ym(()=>r2("button",{type:"button"},"Choose",-1));function au(c,a,e,r,s,n){return Y2(),O3("div",null,[r2("div",Xm,[r2("div",Qm,[r2("img",{alt:"",src:e.item.img},null,8,Jm)]),r2("p",Zm,F8(e.item.title),1),j7(c.$slots,"default",{},()=>[r2("p",null,F8(e.item.price)+" UAH",1)],!0),cu])])}const eu=R1(Km,[["render",au],["__scopeId","data-v-027d931f"]]);const ru={name:"GoodsView",components:{MainMasterPage:Vc,CardComponent:eu},computed:{...yc("goods",["filteredGoods"])}},su=c=>(F7("data-v-010d009e"),c=c(),D7(),c),nu={class:"sub-navigation"},iu=su(()=>r2("p",null,"Select the product:",-1)),tu={class:"goods-container"};function lu(c,a,e,r,s,n){const i=S1("router-link"),t=S1("router-view"),l=S1("CardComponent"),f=S1("MainMasterPage");return Y2(),A3(f,null,{default:$2(()=>[r2("div",nu,[t2(i,{to:"/goods/selector"},{default:$2(()=>[z2("Search")]),_:1}),z2(" | "),t2(i,{to:"/goods/add"},{default:$2(()=>[z2("Add")]),_:1}),t2(t)]),iu,r2("div",tu,[(Y2(!0),O3(L2,null,so(c.filteredGoods,o=>(Y2(),A3(l,{key:o.id,item:o},null,8,["item"]))),128))])]),_:1})}const ou=R1(ru,[["render",lu],["__scopeId","data-v-010d009e"]]),fu={name:"FilteredGoodsView",data(){return{inputVal:""}},computed:{...yc("goods",["getGoodsFilterValue"]),currentInput:{get(){return this.getGoodsFilterValue},set(c){return this.setGoodsFilterValue(c)}}},methods:{...kc("goods",["setGoodsFilterValue"])}},mu=r2("p",null,"search by title:",-1);function uu(c,a,e,r,s,n){return Y2(),O3(L2,null,[mu,v4(r2("input",{"onUpdate:modelValue":a[0]||(a[0]=i=>n.currentInput=i),type:"text"},null,512),[[z4,n.currentInput]])],64)}const vu=R1(fu,[["render",uu]]),hu={name:"AddGoodsView",data(){return{newProductData:{},isDataIncomplite:!0}},watch:{newProductData:{handler(c){c.title&&c.price&&c.img&&(this.isDataIncomplite=!1)},deep:!0}},methods:{...kc("goods",["addNewGoods"]),onButtonClick(){this.addNewGoods(this.newProductData),this.newProductData={},this.isDataIncomplite=!0}}},Hu=r2("p",null,"add new Goods:",-1),zu=["disabled"];function pu(c,a,e,r,s,n){return Y2(),O3(L2,null,[Hu,r2("label",null,[z2("Title: "),v4(r2("input",{"onUpdate:modelValue":a[0]||(a[0]=i=>s.newProductData.title=i),type:"text"},null,512),[[z4,s.newProductData.title]])]),r2("label",null,[z2("Price: "),v4(r2("input",{"onUpdate:modelValue":a[1]||(a[1]=i=>s.newProductData.price=i),type:"number",step:"any"},null,512),[[z4,s.newProductData.price]])]),r2("label",null,[z2("Image url: "),v4(r2("input",{"onUpdate:modelValue":a[2]||(a[2]=i=>s.newProductData.img=i),type:"text"},null,512),[[z4,s.newProductData.img]])]),r2("button",{onClick:a[3]||(a[3]=(...i)=>n.onButtonClick&&n.onButtonClick(...i)),type:"submit",disabled:s.isDataIncomplite},"Add Goods",8,zu)],64)}const Vu=R1(hu,[["render",pu]]),du=()=>x0(()=>import("./DeliverersView-2772dfed.js"),["assets/DeliverersView-2772dfed.js","assets/DeliverersView-628f9a43.css"]),Mu=()=>x0(()=>import("./ContactsView-f8fdfcab.js"),["assets/ContactsView-f8fdfcab.js","assets/SlaveMasterPage-768d627b.js","assets/ContactsView-582e382e.css"]),Cu=()=>x0(()=>import("./ShoppingRulesView-2335560f.js"),["assets/ShoppingRulesView-2335560f.js","assets/SlaveMasterPage-768d627b.js","assets/ShoppingRulesView-f5034697.css"]),Lu=[{path:"/",name:"home",component:ym},{path:"/goods",name:"goods",component:ou,children:[{path:"selector",components:{default:vu}},{path:"add",components:{default:Vu}}]},{path:"/deliverers",name:"deliverers",component:du},{path:"/contacts",name:"contacts",component:Mu},{path:"/rules",name:"rules",component:Cu}],gu="/vue",xu=Cm({history:Bf(gu),routes:Lu}),bu=[{id:386766864,title:"Ноутбук ASUS TUF Gaming A15",price:49999,img:"https://content.rozetka.com.ua/goods/images/big/349586929.jpg"},{id:372852162,title:"Ноутбук ASUS FX506HF-HN038",price:31999,img:"https://content.rozetka.com.ua/goods/images/big/323437245.jpg"},{id:332906383,title:"Ноутбук HP Pavilion (5A0U9EA) Shadow Black",price:45999,img:"https://content.rozetka.com.ua/goods/images/big/248528822.jpg"},{id:389350566,title:"Ноутбук HP Omen (825H7EA) Shadow Black",price:69999,img:"https://content1.rozetka.com.ua/goods/images/big/354272908.jpg"}],Nu=[{id:1,title:"Nova Poshta",img:"https://seeklogo.com/images/N/nova-poshta-logo-4502C4AA63-seeklogo.com.png"},{id:2,title:"Glovo",img:"https://seeklogo.com/images/G/glovo-logo-AD78012757-seeklogo.com.png"}],Su={namespaced:!0,state:{goods:bu,goodsFilterValue:""},getters:{filteredGoods(c){const a=c.goodsFilterValue.toLowerCase();return a?c.goods.filter(e=>e.title.toLowerCase().includes(a)):c.goods},getGoodsFilterValue:({goodsFilterValue:c})=>c},actions:{setGoodsFilterValue({commit:c},a){c("setGoodsFilter",a)},addNewGoods({commit:c},a){c("addGoods",a)}},mutations:{setGoodsFilter(c,a){c.goodsFilterValue=a},addGoods(c,a){const e=Date.now();c.goods.push({...a,id:e})}}},wu={namespaced:!0,state:{deliverers:Nu},getters:{deliverersList:({deliverers:c})=>c}},yu=jm({namespaced:!0,modules:{goods:Su,deliverers:wu}});function R5(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(c,s).enumerable})),e.push.apply(e,r)}return e}function A(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?R5(Object(e),!0).forEach(function(r){f2(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):R5(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function S4(c){"@babel/helpers - typeof";return S4=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},S4(c)}function ku(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function E5(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function Au(c,a,e){return a&&E5(c.prototype,a),e&&E5(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function f2(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function k0(c,a){return Tu(c)||Ru(c,a)||_c(c,a)||Bu()}function U3(c){return Pu(c)||_u(c)||_c(c)||Eu()}function Pu(c){if(Array.isArray(c))return G6(c)}function Tu(c){if(Array.isArray(c))return c}function _u(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function Ru(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],s=!0,n=!1,i,t;try{for(e=e.call(c);!(s=(i=e.next()).done)&&(r.push(i.value),!(a&&r.length===a));s=!0);}catch(l){n=!0,t=l}finally{try{!s&&e.return!=null&&e.return()}finally{if(n)throw t}}return r}}function _c(c,a){if(c){if(typeof c=="string")return G6(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return G6(c,a)}}function G6(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function Eu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Bu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var B5=function(){},A0={},Rc={},Ec=null,Bc={mark:B5,measure:B5};try{typeof window<"u"&&(A0=window),typeof document<"u"&&(Rc=document),typeof MutationObserver<"u"&&(Ec=MutationObserver),typeof performance<"u"&&(Bc=performance)}catch{}var Fu=A0.navigator||{},F5=Fu.userAgent,D5=F5===void 0?"":F5,V1=A0,e2=Rc,O5=Ec,e4=Bc;V1.document;var t1=!!e2.documentElement&&!!e2.head&&typeof e2.addEventListener=="function"&&typeof e2.createElement=="function",Fc=~D5.indexOf("MSIE")||~D5.indexOf("Trident/"),r4,s4,n4,i4,t4,r1="___FONT_AWESOME___",W6=16,Dc="fa",Oc="svg-inline--fa",T1="data-fa-i2svg",j6="data-fa-pseudo-element",Du="data-fa-pseudo-element-pending",P0="data-prefix",T0="data-icon",U5="fontawesome-i2svg",Ou="async",Uu=["HTML","HEAD","STYLE","SCRIPT"],Uc=function(){try{return!0}catch{return!1}}(),a2="classic",i2="sharp",_0=[a2,i2];function I3(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[a2]}})}var _3=I3((r4={},f2(r4,a2,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),f2(r4,i2,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),r4)),R3=I3((s4={},f2(s4,a2,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),f2(s4,i2,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),s4)),E3=I3((n4={},f2(n4,a2,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),f2(n4,i2,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),n4)),Iu=I3((i4={},f2(i4,a2,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),f2(i4,i2,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),i4)),qu=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Ic="fa-layers-text",Gu=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Wu=I3((t4={},f2(t4,a2,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),f2(t4,i2,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),t4)),qc=[1,2,3,4,5,6,7,8,9,10],ju=qc.concat([11,12,13,14,15,16,17,18,19,20]),$u=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],w1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},B3=new Set;Object.keys(R3[a2]).map(B3.add.bind(B3));Object.keys(R3[i2]).map(B3.add.bind(B3));var Ku=[].concat(_0,U3(B3),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",w1.GROUP,w1.SWAP_OPACITY,w1.PRIMARY,w1.SECONDARY]).concat(qc.map(function(c){return"".concat(c,"x")})).concat(ju.map(function(c){return"w-".concat(c)})),x3=V1.FontAwesomeConfig||{};function Yu(c){var a=e2.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function Xu(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(e2&&typeof e2.querySelector=="function"){var Qu=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Qu.forEach(function(c){var a=k0(c,2),e=a[0],r=a[1],s=Xu(Yu(e));s!=null&&(x3[r]=s)})}var Gc={styleDefault:"solid",familyDefault:"classic",cssPrefix:Dc,replacementClass:Oc,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};x3.familyPrefix&&(x3.cssPrefix=x3.familyPrefix);var i3=A(A({},Gc),x3);i3.autoReplaceSvg||(i3.observeMutations=!1);var _={};Object.keys(Gc).forEach(function(c){Object.defineProperty(_,c,{enumerable:!0,set:function(e){i3[c]=e,b3.forEach(function(r){return r(_)})},get:function(){return i3[c]}})});Object.defineProperty(_,"familyPrefix",{enumerable:!0,set:function(a){i3.cssPrefix=a,b3.forEach(function(e){return e(_)})},get:function(){return i3.cssPrefix}});V1.FontAwesomeConfig=_;var b3=[];function Ju(c){return b3.push(c),function(){b3.splice(b3.indexOf(c),1)}}var u1=W6,K2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Zu(c){if(!(!c||!t1)){var a=e2.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=e2.head.childNodes,r=null,s=e.length-1;s>-1;s--){var n=e[s],i=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=n)}return e2.head.insertBefore(a,r),c}}var cv="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function F3(){for(var c=12,a="";c-- >0;)a+=cv[Math.random()*62|0];return a}function m3(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function R0(c){return c.classList?m3(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function Wc(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function av(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(Wc(c[e]),'" ')},"").trim()}function W4(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function E0(c){return c.size!==K2.size||c.x!==K2.x||c.y!==K2.y||c.rotate!==K2.rotate||c.flipX||c.flipY}function ev(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,s={transform:"translate(".concat(e/2," 256)")},n="translate(".concat(a.x*32,", ").concat(a.y*32,") "),i="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),t="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(n," ").concat(i," ").concat(t)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:l,path:f}}function rv(c){var a=c.transform,e=c.width,r=e===void 0?W6:e,s=c.height,n=s===void 0?W6:s,i=c.startCentered,t=i===void 0?!1:i,l="";return t&&Fc?l+="translate(".concat(a.x/u1-r/2,"em, ").concat(a.y/u1-n/2,"em) "):t?l+="translate(calc(-50% + ".concat(a.x/u1,"em), calc(-50% + ").concat(a.y/u1,"em)) "):l+="translate(".concat(a.x/u1,"em, ").concat(a.y/u1,"em) "),l+="scale(".concat(a.size/u1*(a.flipX?-1:1),", ").concat(a.size/u1*(a.flipY?-1:1),") "),l+="rotate(".concat(a.rotate,"deg) "),l}var sv=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function jc(){var c=Dc,a=Oc,e=_.cssPrefix,r=_.replacementClass,s=sv;if(e!==c||r!==a){var n=new RegExp("\\.".concat(c,"\\-"),"g"),i=new RegExp("\\--".concat(c,"\\-"),"g"),t=new RegExp("\\.".concat(a),"g");s=s.replace(n,".".concat(e,"-")).replace(i,"--".concat(e,"-")).replace(t,".".concat(r))}return s}var I5=!1;function C6(){_.autoAddCss&&!I5&&(Zu(jc()),I5=!0)}var nv={mixout:function(){return{dom:{css:jc,insertCss:C6}}},hooks:function(){return{beforeDOMElementCreation:function(){C6()},beforeI2svg:function(){C6()}}}},s1=V1||{};s1[r1]||(s1[r1]={});s1[r1].styles||(s1[r1].styles={});s1[r1].hooks||(s1[r1].hooks={});s1[r1].shims||(s1[r1].shims=[]);var E2=s1[r1],$c=[],iv=function c(){e2.removeEventListener("DOMContentLoaded",c),w4=1,$c.map(function(a){return a()})},w4=!1;t1&&(w4=(e2.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(e2.readyState),w4||e2.addEventListener("DOMContentLoaded",iv));function tv(c){t1&&(w4?setTimeout(c,0):$c.push(c))}function q3(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,s=c.children,n=s===void 0?[]:s;return typeof c=="string"?Wc(c):"<".concat(a," ").concat(av(r),">").concat(n.map(q3).join(""),"</").concat(a,">")}function q5(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var lv=function(a,e){return function(r,s,n,i){return a.call(e,r,s,n,i)}},L6=function(a,e,r,s){var n=Object.keys(a),i=n.length,t=s!==void 0?lv(e,s):e,l,f,o;for(r===void 0?(l=1,o=a[n[0]]):(l=0,o=r);l<i;l++)f=n[l],o=t(o,a[f],f,a);return o};function ov(c){for(var a=[],e=0,r=c.length;e<r;){var s=c.charCodeAt(e++);if(s>=55296&&s<=56319&&e<r){var n=c.charCodeAt(e++);(n&64512)==56320?a.push(((s&1023)<<10)+(n&1023)+65536):(a.push(s),e--)}else a.push(s)}return a}function $6(c){var a=ov(c);return a.length===1?a[0].toString(16):null}function fv(c,a){var e=c.length,r=c.charCodeAt(a),s;return r>=55296&&r<=56319&&e>a+1&&(s=c.charCodeAt(a+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function G5(c){return Object.keys(c).reduce(function(a,e){var r=c[e],s=!!r.icon;return s?a[r.iconName]=r.icon:a[e]=r,a},{})}function K6(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,s=r===void 0?!1:r,n=G5(a);typeof E2.hooks.addPack=="function"&&!s?E2.hooks.addPack(c,G5(a)):E2.styles[c]=A(A({},E2.styles[c]||{}),n),c==="fas"&&K6("fa",a)}var l4,o4,f4,j1=E2.styles,mv=E2.shims,uv=(l4={},f2(l4,a2,Object.values(E3[a2])),f2(l4,i2,Object.values(E3[i2])),l4),B0=null,Kc={},Yc={},Xc={},Qc={},Jc={},vv=(o4={},f2(o4,a2,Object.keys(_3[a2])),f2(o4,i2,Object.keys(_3[i2])),o4);function hv(c){return~Ku.indexOf(c)}function Hv(c,a){var e=a.split("-"),r=e[0],s=e.slice(1).join("-");return r===c&&s!==""&&!hv(s)?s:null}var Zc=function(){var a=function(n){return L6(j1,function(i,t,l){return i[l]=L6(t,n,{}),i},{})};Kc=a(function(s,n,i){if(n[3]&&(s[n[3]]=i),n[2]){var t=n[2].filter(function(l){return typeof l=="number"});t.forEach(function(l){s[l.toString(16)]=i})}return s}),Yc=a(function(s,n,i){if(s[i]=i,n[2]){var t=n[2].filter(function(l){return typeof l=="string"});t.forEach(function(l){s[l]=i})}return s}),Jc=a(function(s,n,i){var t=n[2];return s[i]=i,t.forEach(function(l){s[l]=i}),s});var e="far"in j1||_.autoFetchSvg,r=L6(mv,function(s,n){var i=n[0],t=n[1],l=n[2];return t==="far"&&!e&&(t="fas"),typeof i=="string"&&(s.names[i]={prefix:t,iconName:l}),typeof i=="number"&&(s.unicodes[i.toString(16)]={prefix:t,iconName:l}),s},{names:{},unicodes:{}});Xc=r.names,Qc=r.unicodes,B0=j4(_.styleDefault,{family:_.familyDefault})};Ju(function(c){B0=j4(c.styleDefault,{family:_.familyDefault})});Zc();function F0(c,a){return(Kc[c]||{})[a]}function zv(c,a){return(Yc[c]||{})[a]}function y1(c,a){return(Jc[c]||{})[a]}function c9(c){return Xc[c]||{prefix:null,iconName:null}}function pv(c){var a=Qc[c],e=F0("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function d1(){return B0}var D0=function(){return{prefix:null,iconName:null,rest:[]}};function j4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?a2:e,s=_3[r][c],n=R3[r][c]||R3[r][s],i=c in E2.styles?c:null;return n||i||null}var W5=(f4={},f2(f4,a2,Object.keys(E3[a2])),f2(f4,i2,Object.keys(E3[i2])),f4);function $4(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,s=r===void 0?!1:r,n=(a={},f2(a,a2,"".concat(_.cssPrefix,"-").concat(a2)),f2(a,i2,"".concat(_.cssPrefix,"-").concat(i2)),a),i=null,t=a2;(c.includes(n[a2])||c.some(function(f){return W5[a2].includes(f)}))&&(t=a2),(c.includes(n[i2])||c.some(function(f){return W5[i2].includes(f)}))&&(t=i2);var l=c.reduce(function(f,o){var m=Hv(_.cssPrefix,o);if(j1[o]?(o=uv[t].includes(o)?Iu[t][o]:o,i=o,f.prefix=o):vv[t].indexOf(o)>-1?(i=o,f.prefix=j4(o,{family:t})):m?f.iconName=m:o!==_.replacementClass&&o!==n[a2]&&o!==n[i2]&&f.rest.push(o),!s&&f.prefix&&f.iconName){var h=i==="fa"?c9(f.iconName):{},z=y1(f.prefix,f.iconName);h.prefix&&(i=null),f.iconName=h.iconName||z||f.iconName,f.prefix=h.prefix||f.prefix,f.prefix==="far"&&!j1.far&&j1.fas&&!_.autoFetchSvg&&(f.prefix="fas")}return f},D0());return(c.includes("fa-brands")||c.includes("fab"))&&(l.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(l.prefix="fad"),!l.prefix&&t===i2&&(j1.fass||_.autoFetchSvg)&&(l.prefix="fass",l.iconName=y1(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||i==="fa")&&(l.prefix=d1()||"fas"),l}var Vv=function(){function c(){ku(this,c),this.definitions={}}return Au(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];var i=s.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(t){e.definitions[t]=A(A({},e.definitions[t]||{}),i[t]),K6(t,i[t]);var l=E3[a2][t];l&&K6(l,i[t]),Zc()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(n){var i=s[n],t=i.prefix,l=i.iconName,f=i.icon,o=f[2];e[t]||(e[t]={}),o.length>0&&o.forEach(function(m){typeof m=="string"&&(e[t][m]=f)}),e[t][l]=f}),e}}]),c}(),j5=[],$1={},Z1={},dv=Object.keys(Z1);function Mv(c,a){var e=a.mixoutsTo;return j5=c,$1={},Object.keys(Z1).forEach(function(r){dv.indexOf(r)===-1&&delete Z1[r]}),j5.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(i){typeof s[i]=="function"&&(e[i]=s[i]),S4(s[i])==="object"&&Object.keys(s[i]).forEach(function(t){e[i]||(e[i]={}),e[i][t]=s[i][t]})}),r.hooks){var n=r.hooks();Object.keys(n).forEach(function(i){$1[i]||($1[i]=[]),$1[i].push(n[i])})}r.provides&&r.provides(Z1)}),e}function Y6(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),s=2;s<e;s++)r[s-2]=arguments[s];var n=$1[c]||[];return n.forEach(function(i){a=i.apply(null,[a].concat(r))}),a}function _1(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var s=$1[c]||[];s.forEach(function(n){n.apply(null,e)})}function n1(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return Z1[c]?Z1[c].apply(null,a):void 0}function X6(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||d1();if(a)return a=y1(e,a)||a,q5(a9.definitions,e,a)||q5(E2.styles,e,a)}var a9=new Vv,Cv=function(){_.autoReplaceSvg=!1,_.observeMutations=!1,_1("noAuto")},Lv={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return t1?(_1("beforeI2svg",a),n1("pseudoElements2svg",a),n1("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;_.autoReplaceSvg===!1&&(_.autoReplaceSvg=!0),_.observeMutations=!0,tv(function(){xv({autoReplaceSvgRoot:e}),_1("watch",a)})}},gv={icon:function(a){if(a===null)return null;if(S4(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:y1(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=j4(a[0]);return{prefix:r,iconName:y1(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(_.cssPrefix,"-"))>-1||a.match(qu))){var s=$4(a.split(" "),{skipLookups:!0});return{prefix:s.prefix||d1(),iconName:y1(s.prefix,s.iconName)||s.iconName}}if(typeof a=="string"){var n=d1();return{prefix:n,iconName:y1(n,a)||a}}}},k2={noAuto:Cv,config:_,dom:Lv,parse:gv,library:a9,findIconDefinition:X6,toHtml:q3},xv=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?e2:e;(Object.keys(E2.styles).length>0||_.autoFetchSvg)&&t1&&_.autoReplaceSvg&&k2.dom.i2svg({node:r})};function K4(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return q3(r)})}}),Object.defineProperty(c,"node",{get:function(){if(t1){var r=e2.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function bv(c){var a=c.children,e=c.main,r=c.mask,s=c.attributes,n=c.styles,i=c.transform;if(E0(i)&&e.found&&!r.found){var t=e.width,l=e.height,f={x:t/l/2,y:.5};s.style=W4(A(A({},n),{},{"transform-origin":"".concat(f.x+i.x/16,"em ").concat(f.y+i.y/16,"em")}))}return[{tag:"svg",attributes:s,children:a}]}function Nv(c){var a=c.prefix,e=c.iconName,r=c.children,s=c.attributes,n=c.symbol,i=n===!0?"".concat(a,"-").concat(_.cssPrefix,"-").concat(e):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:A(A({},s),{},{id:i}),children:r}]}]}function O0(c){var a=c.icons,e=a.main,r=a.mask,s=c.prefix,n=c.iconName,i=c.transform,t=c.symbol,l=c.title,f=c.maskId,o=c.titleId,m=c.extra,h=c.watchable,z=h===void 0?!1:h,b=r.found?r:e,w=b.width,E=b.height,M=s==="fak",C=[_.replacementClass,n?"".concat(_.cssPrefix,"-").concat(n):""].filter(function(M2){return m.classes.indexOf(M2)===-1}).filter(function(M2){return M2!==""||!!M2}).concat(m.classes).join(" "),R={children:[],attributes:A(A({},m.attributes),{},{"data-prefix":s,"data-icon":n,class:C,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(E)})},y=M&&!~m.classes.indexOf("fa-fw")?{width:"".concat(w/E*16*.0625,"em")}:{};z&&(R.attributes[T1]=""),l&&(R.children.push({tag:"title",attributes:{id:R.attributes["aria-labelledby"]||"title-".concat(o||F3())},children:[l]}),delete R.attributes.title);var q=A(A({},R),{},{prefix:s,iconName:n,main:e,mask:r,maskId:f,transform:i,symbol:t,styles:A(A({},y),m.styles)}),J=r.found&&e.found?n1("generateAbstractMask",q)||{children:[],attributes:{}}:n1("generateAbstractIcon",q)||{children:[],attributes:{}},n2=J.children,w2=J.attributes;return q.children=n2,q.attributes=w2,t?Nv(q):bv(q)}function $5(c){var a=c.content,e=c.width,r=c.height,s=c.transform,n=c.title,i=c.extra,t=c.watchable,l=t===void 0?!1:t,f=A(A(A({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")});l&&(f[T1]="");var o=A({},i.styles);E0(s)&&(o.transform=rv({transform:s,startCentered:!0,width:e,height:r}),o["-webkit-transform"]=o.transform);var m=W4(o);m.length>0&&(f.style=m);var h=[];return h.push({tag:"span",attributes:f,children:[a]}),n&&h.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),h}function Sv(c){var a=c.content,e=c.title,r=c.extra,s=A(A(A({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),n=W4(r.styles);n.length>0&&(s.style=n);var i=[];return i.push({tag:"span",attributes:s,children:[a]}),e&&i.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),i}var g6=E2.styles;function Q6(c){var a=c[0],e=c[1],r=c.slice(4),s=k0(r,1),n=s[0],i=null;return Array.isArray(n)?i={tag:"g",attributes:{class:"".concat(_.cssPrefix,"-").concat(w1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(_.cssPrefix,"-").concat(w1.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(_.cssPrefix,"-").concat(w1.PRIMARY),fill:"currentColor",d:n[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:a,height:e,icon:i}}var wv={found:!1,width:512,height:512};function yv(c,a){!Uc&&!_.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function J6(c,a){var e=a;return a==="fa"&&_.styleDefault!==null&&(a=d1()),new Promise(function(r,s){if(n1("missingIconAbstract"),e==="fa"){var n=c9(c)||{};c=n.iconName||c,a=n.prefix||a}if(c&&a&&g6[a]&&g6[a][c]){var i=g6[a][c];return r(Q6(i))}yv(c,a),r(A(A({},wv),{},{icon:_.showMissingIcons&&c?n1("missingIconAbstract")||{}:{}}))})}var K5=function(){},Z6=_.measurePerformance&&e4&&e4.mark&&e4.measure?e4:{mark:K5,measure:K5},V3='FA "6.5.1"',kv=function(a){return Z6.mark("".concat(V3," ").concat(a," begins")),function(){return e9(a)}},e9=function(a){Z6.mark("".concat(V3," ").concat(a," ends")),Z6.measure("".concat(V3," ").concat(a),"".concat(V3," ").concat(a," begins"),"".concat(V3," ").concat(a," ends"))},U0={begin:kv,end:e9},p4=function(){};function Y5(c){var a=c.getAttribute?c.getAttribute(T1):null;return typeof a=="string"}function Av(c){var a=c.getAttribute?c.getAttribute(P0):null,e=c.getAttribute?c.getAttribute(T0):null;return a&&e}function Pv(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(_.replacementClass)}function Tv(){if(_.autoReplaceSvg===!0)return V4.replace;var c=V4[_.autoReplaceSvg];return c||V4.replace}function _v(c){return e2.createElementNS("http://www.w3.org/2000/svg",c)}function Rv(c){return e2.createElement(c)}function r9(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?_v:Rv:e;if(typeof c=="string")return e2.createTextNode(c);var s=r(c.tag);Object.keys(c.attributes||[]).forEach(function(i){s.setAttribute(i,c.attributes[i])});var n=c.children||[];return n.forEach(function(i){s.appendChild(r9(i,{ceFn:r}))}),s}function Ev(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var V4={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(s){e.parentNode.insertBefore(r9(s),e)}),e.getAttribute(T1)===null&&_.keepOriginalSource){var r=e2.createComment(Ev(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~R0(e).indexOf(_.replacementClass))return V4.replace(a);var s=new RegExp("".concat(_.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var n=r[0].attributes.class.split(" ").reduce(function(t,l){return l===_.replacementClass||l.match(s)?t.toSvg.push(l):t.toNode.push(l),t},{toNode:[],toSvg:[]});r[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",n.toNode.join(" "))}var i=r.map(function(t){return q3(t)}).join(`
`);e.setAttribute(T1,""),e.innerHTML=i}};function X5(c){c()}function s9(c,a){var e=typeof a=="function"?a:p4;if(c.length===0)e();else{var r=X5;_.mutateApproach===Ou&&(r=V1.requestAnimationFrame||X5),r(function(){var s=Tv(),n=U0.begin("mutate");c.map(s),n(),e()})}}var I0=!1;function n9(){I0=!0}function c0(){I0=!1}var y4=null;function Q5(c){if(O5&&_.observeMutations){var a=c.treeCallback,e=a===void 0?p4:a,r=c.nodeCallback,s=r===void 0?p4:r,n=c.pseudoElementsCallback,i=n===void 0?p4:n,t=c.observeMutationsRoot,l=t===void 0?e2:t;y4=new O5(function(f){if(!I0){var o=d1();m3(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Y5(m.addedNodes[0])&&(_.searchPseudoElements&&i(m.target),e(m.target)),m.type==="attributes"&&m.target.parentNode&&_.searchPseudoElements&&i(m.target.parentNode),m.type==="attributes"&&Y5(m.target)&&~$u.indexOf(m.attributeName))if(m.attributeName==="class"&&Av(m.target)){var h=$4(R0(m.target)),z=h.prefix,b=h.iconName;m.target.setAttribute(P0,z||o),b&&m.target.setAttribute(T0,b)}else Pv(m.target)&&s(m.target)})}}),t1&&y4.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Bv(){y4&&y4.disconnect()}function Fv(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,s){var n=s.split(":"),i=n[0],t=n.slice(1);return i&&t.length>0&&(r[i]=t.join(":").trim()),r},{})),e}function Dv(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",s=$4(R0(c));return s.prefix||(s.prefix=d1()),a&&e&&(s.prefix=a,s.iconName=e),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=zv(s.prefix,c.innerText)||F0(s.prefix,$6(c.innerText))),!s.iconName&&_.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=c.firstChild.data)),s}function Ov(c){var a=m3(c.attributes).reduce(function(s,n){return s.name!=="class"&&s.name!=="style"&&(s[n.name]=n.value),s},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return _.autoA11y&&(e?a["aria-labelledby"]="".concat(_.replacementClass,"-title-").concat(r||F3()):(a["aria-hidden"]="true",a.focusable="false")),a}function Uv(){return{iconName:null,title:null,titleId:null,prefix:null,transform:K2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function J5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Dv(c),r=e.iconName,s=e.prefix,n=e.rest,i=Ov(c),t=Y6("parseNodeAttributes",{},c),l=a.styleParser?Fv(c):[];return A({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:K2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:l,attributes:i}},t)}var Iv=E2.styles;function i9(c){var a=_.autoReplaceSvg==="nest"?J5(c,{styleParser:!1}):J5(c);return~a.extra.classes.indexOf(Ic)?n1("generateLayersText",c,a):n1("generateSvgReplacementMutation",c,a)}var M1=new Set;_0.map(function(c){M1.add("fa-".concat(c))});Object.keys(_3[a2]).map(M1.add.bind(M1));Object.keys(_3[i2]).map(M1.add.bind(M1));M1=U3(M1);function Z5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!t1)return Promise.resolve();var e=e2.documentElement.classList,r=function(m){return e.add("".concat(U5,"-").concat(m))},s=function(m){return e.remove("".concat(U5,"-").concat(m))},n=_.autoFetchSvg?M1:_0.map(function(o){return"fa-".concat(o)}).concat(Object.keys(Iv));n.includes("fa")||n.push("fa");var i=[".".concat(Ic,":not([").concat(T1,"])")].concat(n.map(function(o){return".".concat(o,":not([").concat(T1,"])")})).join(", ");if(i.length===0)return Promise.resolve();var t=[];try{t=m3(c.querySelectorAll(i))}catch{}if(t.length>0)r("pending"),s("complete");else return Promise.resolve();var l=U0.begin("onTree"),f=t.reduce(function(o,m){try{var h=i9(m);h&&o.push(h)}catch(z){Uc||z.name==="MissingIcon"&&console.error(z)}return o},[]);return new Promise(function(o,m){Promise.all(f).then(function(h){s9(h,function(){r("active"),r("complete"),s("pending"),typeof a=="function"&&a(),l(),o()})}).catch(function(h){l(),m(h)})})}function qv(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;i9(c).then(function(e){e&&s9([e],a)})}function Gv(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:X6(a||{}),s=e.mask;return s&&(s=(s||{}).icon?s:X6(s||{})),c(r,A(A({},e),{},{mask:s}))}}var Wv=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?K2:r,n=e.symbol,i=n===void 0?!1:n,t=e.mask,l=t===void 0?null:t,f=e.maskId,o=f===void 0?null:f,m=e.title,h=m===void 0?null:m,z=e.titleId,b=z===void 0?null:z,w=e.classes,E=w===void 0?[]:w,M=e.attributes,C=M===void 0?{}:M,R=e.styles,y=R===void 0?{}:R;if(a){var q=a.prefix,J=a.iconName,n2=a.icon;return K4(A({type:"icon"},a),function(){return _1("beforeDOMElementCreation",{iconDefinition:a,params:e}),_.autoA11y&&(h?C["aria-labelledby"]="".concat(_.replacementClass,"-title-").concat(b||F3()):(C["aria-hidden"]="true",C.focusable="false")),O0({icons:{main:Q6(n2),mask:l?Q6(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:q,iconName:J,transform:A(A({},K2),s),symbol:i,title:h,maskId:o,titleId:b,extra:{attributes:C,styles:y,classes:E}})})}},jv={mixout:function(){return{icon:Gv(Wv)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=Z5,e.nodeCallback=qv,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,s=r===void 0?e2:r,n=e.callback,i=n===void 0?function(){}:n;return Z5(s,i)},a.generateSvgReplacementMutation=function(e,r){var s=r.iconName,n=r.title,i=r.titleId,t=r.prefix,l=r.transform,f=r.symbol,o=r.mask,m=r.maskId,h=r.extra;return new Promise(function(z,b){Promise.all([J6(s,t),o.iconName?J6(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var E=k0(w,2),M=E[0],C=E[1];z([e,O0({icons:{main:M,mask:C},prefix:t,iconName:s,transform:l,symbol:f,maskId:m,title:n,titleId:i,extra:h,watchable:!0})])}).catch(b)})},a.generateAbstractIcon=function(e){var r=e.children,s=e.attributes,n=e.main,i=e.transform,t=e.styles,l=W4(t);l.length>0&&(s.style=l);var f;return E0(i)&&(f=n1("generateAbstractTransformGrouping",{main:n,transform:i,containerWidth:n.width,iconWidth:n.width})),r.push(f||n.icon),{children:r,attributes:s}}}},$v={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,n=s===void 0?[]:s;return K4({type:"layer"},function(){_1("beforeDOMElementCreation",{assembler:e,params:r});var i=[];return e(function(t){Array.isArray(t)?t.map(function(l){i=i.concat(l.abstract)}):i=i.concat(t.abstract)}),[{tag:"span",attributes:{class:["".concat(_.cssPrefix,"-layers")].concat(U3(n)).join(" ")},children:i}]})}}}},Kv={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.title,n=s===void 0?null:s,i=r.classes,t=i===void 0?[]:i,l=r.attributes,f=l===void 0?{}:l,o=r.styles,m=o===void 0?{}:o;return K4({type:"counter",content:e},function(){return _1("beforeDOMElementCreation",{content:e,params:r}),Sv({content:e.toString(),title:n,extra:{attributes:f,styles:m,classes:["".concat(_.cssPrefix,"-layers-counter")].concat(U3(t))}})})}}}},Yv={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,n=s===void 0?K2:s,i=r.title,t=i===void 0?null:i,l=r.classes,f=l===void 0?[]:l,o=r.attributes,m=o===void 0?{}:o,h=r.styles,z=h===void 0?{}:h;return K4({type:"text",content:e},function(){return _1("beforeDOMElementCreation",{content:e,params:r}),$5({content:e,transform:A(A({},K2),n),title:t,extra:{attributes:m,styles:z,classes:["".concat(_.cssPrefix,"-layers-text")].concat(U3(f))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var s=r.title,n=r.transform,i=r.extra,t=null,l=null;if(Fc){var f=parseInt(getComputedStyle(e).fontSize,10),o=e.getBoundingClientRect();t=o.width/f,l=o.height/f}return _.autoA11y&&!s&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,$5({content:e.innerHTML,width:t,height:l,transform:n,title:s,extra:i,watchable:!0})])}}},Xv=new RegExp('"',"ug"),c7=[1105920,1112319];function Qv(c){var a=c.replace(Xv,""),e=fv(a,0),r=e>=c7[0]&&e<=c7[1],s=a.length===2?a[0]===a[1]:!1;return{value:$6(s?a[0]:a),isSecondary:r||s}}function a7(c,a){var e="".concat(Du).concat(a.replace(":","-"));return new Promise(function(r,s){if(c.getAttribute(e)!==null)return r();var n=m3(c.children),i=n.filter(function(n2){return n2.getAttribute(j6)===a})[0],t=V1.getComputedStyle(c,a),l=t.getPropertyValue("font-family").match(Gu),f=t.getPropertyValue("font-weight"),o=t.getPropertyValue("content");if(i&&!l)return c.removeChild(i),r();if(l&&o!=="none"&&o!==""){var m=t.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?i2:a2,z=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?R3[h][l[2].toLowerCase()]:Wu[h][f],b=Qv(m),w=b.value,E=b.isSecondary,M=l[0].startsWith("FontAwesome"),C=F0(z,w),R=C;if(M){var y=pv(w);y.iconName&&y.prefix&&(C=y.iconName,z=y.prefix)}if(C&&!E&&(!i||i.getAttribute(P0)!==z||i.getAttribute(T0)!==R)){c.setAttribute(e,R),i&&c.removeChild(i);var q=Uv(),J=q.extra;J.attributes[j6]=a,J6(C,z).then(function(n2){var w2=O0(A(A({},q),{},{icons:{main:n2,mask:D0()},prefix:z,iconName:R,extra:J,watchable:!0})),M2=e2.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(M2,c.firstChild):c.appendChild(M2),M2.outerHTML=w2.map(function(A2){return q3(A2)}).join(`