(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=e(i);fetch(i.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ba="165",ti={ROTATE:0,DOLLY:1,PAN:2},ei={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Bc=0,Ja=1,Fc=2,Vo=1,Wo=2,un=3,Cn=0,ge=1,pe=2,wn=0,jn=1,qt=2,Za=3,Qa=4,kc=5,Vn=100,zc=101,Hc=102,Gc=103,Vc=104,Wc=200,Xc=201,Yc=202,jc=203,wa=204,Ra=205,qc=206,Kc=207,$c=208,Jc=209,Zc=210,Qc=211,tl=212,el=213,nl=214,il=0,sl=1,al=2,Ts=3,rl=4,ol=5,cl=6,ll=7,Xo=0,hl=1,ul=2,Rn=0,dl=1,fl=2,pl=3,Yo=4,ml=5,gl=6,vl=7,jo=300,bi=301,Ai=302,Ca=303,La=304,Bs=306,ws=1e3,Tn=1001,Pa=1002,Be=1003,_l=1004,$i=1005,We=1006,Xs=1007,Xn=1008,Ln=1009,yl=1010,Sl=1011,Rs=1012,qo=1013,Ti=1014,dn=1015,Fs=1016,Ko=1017,$o=1018,wi=1020,xl=35902,Ml=1021,El=1022,Qe=1023,bl=1024,Al=1025,Mi=1026,Ri=1027,Jo=1028,Zo=1029,Tl=1030,Qo=1031,tc=1033,Ys=33776,js=33777,qs=33778,Ks=33779,tr=35840,er=35841,nr=35842,ir=35843,sr=36196,ar=37492,rr=37496,or=37808,cr=37809,lr=37810,hr=37811,ur=37812,dr=37813,fr=37814,pr=37815,mr=37816,gr=37817,vr=37818,_r=37819,yr=37820,Sr=37821,$s=36492,xr=36494,Mr=36495,wl=36283,Er=36284,br=36285,Ar=36286,Rl=3200,Cl=3201,ec=0,Ll=1,An="",je="srgb",In="srgb-linear",Fa="display-p3",ks="display-p3-linear",Cs="linear",ie="srgb",Ls="rec709",Ps="p3",ni=7680,Tr=519,Pl=512,Il=513,Dl=514,nc=515,Ul=516,Ol=517,Nl=518,Bl=519,wr=35044,Rr="300 es",fn=2e3,Is=2001;class Kn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const a=i.indexOf(e);a!==-1&&i.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let a=0,r=i.length;a<r;a++)i[a].call(this,t);t.target=null}}}const Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bs=Math.PI/180,Ia=180/Math.PI;function Vi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Le[s&255]+Le[s>>8&255]+Le[s>>16&255]+Le[s>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]).toLowerCase()}function Oe(s,t,e){return Math.max(t,Math.min(e,s))}function Fl(s,t){return(s%t+t)%t}function Js(s,t,e){return(1-e)*s+e*t}function Di(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ne(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const kl={DEG2RAD:bs};class Mt{constructor(t=0,e=0){Mt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),a=this.x-t.x,r=this.y-t.y;return this.x=a*n-r*i+t.x,this.y=a*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,n,i,a,r,o,c,l){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,a,r,o,c,l)}set(t,e,n,i,a,r,o,c,l){const u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=a,u[5]=c,u[6]=n,u[7]=r,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,a=this.elements,r=n[0],o=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],m=n[5],g=n[8],_=i[0],p=i[3],f=i[6],M=i[1],S=i[4],A=i[7],I=i[2],C=i[5],T=i[8];return a[0]=r*_+o*M+c*I,a[3]=r*p+o*S+c*C,a[6]=r*f+o*A+c*T,a[1]=l*_+u*M+d*I,a[4]=l*p+u*S+d*C,a[7]=l*f+u*A+d*T,a[2]=h*_+m*M+g*I,a[5]=h*p+m*S+g*C,a[8]=h*f+m*A+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],a=t[3],r=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*r*u-e*o*l-n*a*u+n*o*c+i*a*l-i*r*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],a=t[3],r=t[4],o=t[5],c=t[6],l=t[7],u=t[8],d=u*r-o*l,h=o*c-u*a,m=l*a-r*c,g=e*d+n*h+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(i*l-u*n)*_,t[2]=(o*n-i*r)*_,t[3]=h*_,t[4]=(u*e-i*c)*_,t[5]=(i*a-o*e)*_,t[6]=m*_,t[7]=(n*c-l*e)*_,t[8]=(r*e-n*a)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,a,r,o){const c=Math.cos(a),l=Math.sin(a);return this.set(n*c,n*l,-n*(c*r+l*o)+r+t,-i*l,i*c,-i*(-l*r+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Zs.makeScale(t,e)),this}rotate(t){return this.premultiply(Zs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Zs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Zs=new Ot;function ic(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ds(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function zl(){const s=Ds("canvas");return s.style.display="block",s}const Cr={};function sc(s){s in Cr||(Cr[s]=!0,console.warn(s))}function Hl(s,t,e){return new Promise(function(n,i){function a(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:n()}}setTimeout(a,e)})}const Lr=new Ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Pr=new Ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ji={[In]:{transfer:Cs,primaries:Ls,toReference:s=>s,fromReference:s=>s},[je]:{transfer:ie,primaries:Ls,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[ks]:{transfer:Cs,primaries:Ps,toReference:s=>s.applyMatrix3(Pr),fromReference:s=>s.applyMatrix3(Lr)},[Fa]:{transfer:ie,primaries:Ps,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Pr),fromReference:s=>s.applyMatrix3(Lr).convertLinearToSRGB()}},Gl=new Set([In,ks]),Jt={enabled:!0,_workingColorSpace:In,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Gl.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Ji[t].toReference,i=Ji[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Ji[s].primaries},getTransfer:function(s){return s===An?Cs:Ji[s].transfer}};function Ei(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Qs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ii;class Vl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ii===void 0&&(ii=Ds("canvas")),ii.width=t.width,ii.height=t.height;const n=ii.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ii}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ds("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),a=i.data;for(let r=0;r<a.length;r++)a[r]=Ei(a[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ei(e[n]/255)*255):e[n]=Ei(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Wl=0;class ac{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wl++}),this.uuid=Vi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?a.push(ta(i[r].image)):a.push(ta(i[r]))}else a=ta(i);n.url=a}return e||(t.images[this.uuid]=n),n}}function ta(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Vl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xl=0;class Ie extends Kn{constructor(t=Ie.DEFAULT_IMAGE,e=Ie.DEFAULT_MAPPING,n=Tn,i=Tn,a=We,r=Xn,o=Qe,c=Ln,l=Ie.DEFAULT_ANISOTROPY,u=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xl++}),this.uuid=Vi(),this.name="",this.source=new ac(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=a,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==jo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ws:t.x=t.x-Math.floor(t.x);break;case Tn:t.x=t.x<0?0:1;break;case Pa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ws:t.y=t.y-Math.floor(t.y);break;case Tn:t.y=t.y<0?0:1;break;case Pa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ie.DEFAULT_IMAGE=null;Ie.DEFAULT_MAPPING=jo;Ie.DEFAULT_ANISOTROPY=1;class ae{constructor(t=0,e=0,n=0,i=1){ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,a=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*a,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*a,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*a,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,a;const c=t.elements,l=c[0],u=c[4],d=c[8],h=c[1],m=c[5],g=c[9],_=c[2],p=c[6],f=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,A=(m+1)/2,I=(f+1)/2,C=(u+h)/4,T=(d+_)/4,D=(g+p)/4;return S>A&&S>I?S<.01?(n=0,i=.707106781,a=.707106781):(n=Math.sqrt(S),i=C/n,a=T/n):A>I?A<.01?(n=.707106781,i=0,a=.707106781):(i=Math.sqrt(A),n=C/i,a=D/i):I<.01?(n=.707106781,i=.707106781,a=0):(a=Math.sqrt(I),n=T/a,i=D/a),this.set(n,i,a,e),this}let M=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(d-_)/M,this.z=(h-u)/M,this.w=Math.acos((l+m+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yl extends Kn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new Ie(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,a=this.textures.length;i<a;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ac(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qn extends Yl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class rc extends Ie{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Be,this.minFilter=Be,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class jl extends Ie{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Be,this.minFilter=Be,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,a,r,o){let c=n[i+0],l=n[i+1],u=n[i+2],d=n[i+3];const h=a[r+0],m=a[r+1],g=a[r+2],_=a[r+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d;return}if(o===1){t[e+0]=h,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(d!==_||c!==h||l!==m||u!==g){let p=1-o;const f=c*h+l*m+u*g+d*_,M=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const I=Math.sqrt(S),C=Math.atan2(I,f*M);p=Math.sin(p*C)/I,o=Math.sin(o*C)/I}const A=o*M;if(c=c*p+h*A,l=l*p+m*A,u=u*p+g*A,d=d*p+_*A,p===1-o){const I=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=I,l*=I,u*=I,d*=I}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,a,r){const o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],d=a[r],h=a[r+1],m=a[r+2],g=a[r+3];return t[e]=o*g+u*d+c*m-l*h,t[e+1]=c*g+u*h+l*d-o*m,t[e+2]=l*g+u*m+o*h-c*d,t[e+3]=u*g-o*d-c*h-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,a=t._z,r=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),d=o(a/2),h=c(n/2),m=c(i/2),g=c(a/2);switch(r){case"XYZ":this._x=h*u*d+l*m*g,this._y=l*m*d-h*u*g,this._z=l*u*g+h*m*d,this._w=l*u*d-h*m*g;break;case"YXZ":this._x=h*u*d+l*m*g,this._y=l*m*d-h*u*g,this._z=l*u*g-h*m*d,this._w=l*u*d+h*m*g;break;case"ZXY":this._x=h*u*d-l*m*g,this._y=l*m*d+h*u*g,this._z=l*u*g+h*m*d,this._w=l*u*d-h*m*g;break;case"ZYX":this._x=h*u*d-l*m*g,this._y=l*m*d+h*u*g,this._z=l*u*g-h*m*d,this._w=l*u*d+h*m*g;break;case"YZX":this._x=h*u*d+l*m*g,this._y=l*m*d+h*u*g,this._z=l*u*g-h*m*d,this._w=l*u*d-h*m*g;break;case"XZY":this._x=h*u*d-l*m*g,this._y=l*m*d-h*u*g,this._z=l*u*g+h*m*d,this._w=l*u*d+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],a=e[8],r=e[1],o=e[5],c=e[9],l=e[2],u=e[6],d=e[10],h=n+o+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-c)*m,this._y=(a-l)*m,this._z=(r-i)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(u-c)/m,this._x=.25*m,this._y=(i+r)/m,this._z=(a+l)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(a-l)/m,this._x=(i+r)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(r-i)/m,this._x=(a+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,a=t._z,r=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+r*o+i*l-a*c,this._y=i*u+r*c+a*o-n*l,this._z=a*u+r*l+n*c-i*o,this._w=r*u-n*o-i*c-a*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,a=this._z,r=this._w;let o=r*t._w+n*t._x+i*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=n,this._y=i,this._z=a,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-e;return this._w=m*r+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*a+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),d=Math.sin((1-e)*u)/l,h=Math.sin(e*u)/l;return this._w=r*d+this._w*h,this._x=n*d+this._x*h,this._y=i*d+this._y*h,this._z=a*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(t=0,e=0,n=0){w.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ir.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ir.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6]*i,this.y=a[1]*e+a[4]*n+a[7]*i,this.z=a[2]*e+a[5]*n+a[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,a=t.elements,r=1/(a[3]*e+a[7]*n+a[11]*i+a[15]);return this.x=(a[0]*e+a[4]*n+a[8]*i+a[12])*r,this.y=(a[1]*e+a[5]*n+a[9]*i+a[13])*r,this.z=(a[2]*e+a[6]*n+a[10]*i+a[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,a=t.x,r=t.y,o=t.z,c=t.w,l=2*(r*i-o*n),u=2*(o*e-a*i),d=2*(a*n-r*e);return this.x=e+c*l+r*d-o*u,this.y=n+c*u+o*l-a*d,this.z=i+c*d+a*u-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i,this.y=a[1]*e+a[5]*n+a[9]*i,this.z=a[2]*e+a[6]*n+a[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,a=t.z,r=e.x,o=e.y,c=e.z;return this.x=i*c-a*o,this.y=a*r-n*c,this.z=n*o-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ea.copy(this).projectOnVector(t),this.sub(ea)}reflect(t){return this.sub(ea.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ea=new w,Ir=new Pn;class $n{constructor(t=new w(1/0,1/0,1/0),e=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const a=n.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,qe):qe.fromBufferAttribute(a,r),qe.applyMatrix4(t.matrixWorld),this.expandByPoint(qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zi.copy(n.boundingBox)),Zi.applyMatrix4(t.matrixWorld),this.union(Zi)}const i=t.children;for(let a=0,r=i.length;a<r;a++)this.expandByObject(i[a],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,qe),qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ui),Qi.subVectors(this.max,Ui),si.subVectors(t.a,Ui),ai.subVectors(t.b,Ui),ri.subVectors(t.c,Ui),_n.subVectors(ai,si),yn.subVectors(ri,ai),Nn.subVectors(si,ri);let e=[0,-_n.z,_n.y,0,-yn.z,yn.y,0,-Nn.z,Nn.y,_n.z,0,-_n.x,yn.z,0,-yn.x,Nn.z,0,-Nn.x,-_n.y,_n.x,0,-yn.y,yn.x,0,-Nn.y,Nn.x,0];return!na(e,si,ai,ri,Qi)||(e=[1,0,0,0,1,0,0,0,1],!na(e,si,ai,ri,Qi))?!1:(ts.crossVectors(_n,yn),e=[ts.x,ts.y,ts.z],na(e,si,ai,ri,Qi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(an),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const an=[new w,new w,new w,new w,new w,new w,new w,new w],qe=new w,Zi=new $n,si=new w,ai=new w,ri=new w,_n=new w,yn=new w,Nn=new w,Ui=new w,Qi=new w,ts=new w,Bn=new w;function na(s,t,e,n,i){for(let a=0,r=s.length-3;a<=r;a+=3){Bn.fromArray(s,a);const o=i.x*Math.abs(Bn.x)+i.y*Math.abs(Bn.y)+i.z*Math.abs(Bn.z),c=t.dot(Bn),l=e.dot(Bn),u=n.dot(Bn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const ql=new $n,Oi=new w,ia=new w;class Jn{constructor(t=new w,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ql.setFromPoints(t).getCenter(n);let i=0;for(let a=0,r=t.length;a<r;a++)i=Math.max(i,n.distanceToSquared(t[a]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Oi.subVectors(t,this.center);const e=Oi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Oi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ia.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Oi.copy(t.center).add(ia)),this.expandByPoint(Oi.copy(t.center).sub(ia))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const rn=new w,sa=new w,es=new w,Sn=new w,aa=new w,ns=new w,ra=new w;class Wi{constructor(t=new w,e=new w(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(rn.copy(this.origin).addScaledVector(this.direction,e),rn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){sa.copy(t).add(e).multiplyScalar(.5),es.copy(e).sub(t).normalize(),Sn.copy(this.origin).sub(sa);const a=t.distanceTo(e)*.5,r=-this.direction.dot(es),o=Sn.dot(this.direction),c=-Sn.dot(es),l=Sn.lengthSq(),u=Math.abs(1-r*r);let d,h,m,g;if(u>0)if(d=r*c-o,h=r*o-c,g=a*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,m=d*(d+r*h+2*o)+h*(r*d+h+2*c)+l}else h=a,d=Math.max(0,-(r*h+o)),m=-d*d+h*(h+2*c)+l;else h=-a,d=Math.max(0,-(r*h+o)),m=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-r*a+o)),h=d>0?-a:Math.min(Math.max(-a,-c),a),m=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-a,-c),a),m=h*(h+2*c)+l):(d=Math.max(0,-(r*a+o)),h=d>0?a:Math.min(Math.max(-a,-c),a),m=-d*d+h*(h+2*c)+l);else h=r>0?-a:a,d=Math.max(0,-(r*h+o)),m=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(sa).addScaledVector(es,h),m}intersectSphere(t,e){rn.subVectors(t.center,this.origin);const n=rn.dot(this.direction),i=rn.dot(rn)-n*n,a=t.radius*t.radius;if(i>a)return null;const r=Math.sqrt(a-i),o=n-r,c=n+r;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,a,r,o,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,i=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,i=(t.min.x-h.x)*l),u>=0?(a=(t.min.y-h.y)*u,r=(t.max.y-h.y)*u):(a=(t.max.y-h.y)*u,r=(t.min.y-h.y)*u),n>r||a>i||((a>n||isNaN(n))&&(n=a),(r<i||isNaN(i))&&(i=r),d>=0?(o=(t.min.z-h.z)*d,c=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,c=(t.min.z-h.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,rn)!==null}intersectTriangle(t,e,n,i,a){aa.subVectors(e,t),ns.subVectors(n,t),ra.crossVectors(aa,ns);let r=this.direction.dot(ra),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Sn.subVectors(this.origin,t);const c=o*this.direction.dot(ns.crossVectors(Sn,ns));if(c<0)return null;const l=o*this.direction.dot(aa.cross(Sn));if(l<0||c+l>r)return null;const u=-o*Sn.dot(ra);return u<0?null:this.at(u/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class te{constructor(t,e,n,i,a,r,o,c,l,u,d,h,m,g,_,p){te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,a,r,o,c,l,u,d,h,m,g,_,p)}set(t,e,n,i,a,r,o,c,l,u,d,h,m,g,_,p){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=a,f[5]=r,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=d,f[14]=h,f[3]=m,f[7]=g,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new te().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/oi.setFromMatrixColumn(t,0).length(),a=1/oi.setFromMatrixColumn(t,1).length(),r=1/oi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*a,e[5]=n[5]*a,e[6]=n[6]*a,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,a=t.z,r=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){const h=r*u,m=r*d,g=o*u,_=o*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=m+g*l,e[5]=h-_*l,e[9]=-o*c,e[2]=_-h*l,e[6]=g+m*l,e[10]=r*c}else if(t.order==="YXZ"){const h=c*u,m=c*d,g=l*u,_=l*d;e[0]=h+_*o,e[4]=g*o-m,e[8]=r*l,e[1]=r*d,e[5]=r*u,e[9]=-o,e[2]=m*o-g,e[6]=_+h*o,e[10]=r*c}else if(t.order==="ZXY"){const h=c*u,m=c*d,g=l*u,_=l*d;e[0]=h-_*o,e[4]=-r*d,e[8]=g+m*o,e[1]=m+g*o,e[5]=r*u,e[9]=_-h*o,e[2]=-r*l,e[6]=o,e[10]=r*c}else if(t.order==="ZYX"){const h=r*u,m=r*d,g=o*u,_=o*d;e[0]=c*u,e[4]=g*l-m,e[8]=h*l+_,e[1]=c*d,e[5]=_*l+h,e[9]=m*l-g,e[2]=-l,e[6]=o*c,e[10]=r*c}else if(t.order==="YZX"){const h=r*c,m=r*l,g=o*c,_=o*l;e[0]=c*u,e[4]=_-h*d,e[8]=g*d+m,e[1]=d,e[5]=r*u,e[9]=-o*u,e[2]=-l*u,e[6]=m*d+g,e[10]=h-_*d}else if(t.order==="XZY"){const h=r*c,m=r*l,g=o*c,_=o*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=h*d+_,e[5]=r*u,e[9]=m*d-g,e[2]=g*d-m,e[6]=o*u,e[10]=_*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Kl,t,$l)}lookAt(t,e,n){const i=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),xn.crossVectors(n,He),xn.lengthSq()===0&&(Math.abs(n.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),xn.crossVectors(n,He)),xn.normalize(),is.crossVectors(He,xn),i[0]=xn.x,i[4]=is.x,i[8]=He.x,i[1]=xn.y,i[5]=is.y,i[9]=He.y,i[2]=xn.z,i[6]=is.z,i[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,a=this.elements,r=n[0],o=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],m=n[13],g=n[2],_=n[6],p=n[10],f=n[14],M=n[3],S=n[7],A=n[11],I=n[15],C=i[0],T=i[4],D=i[8],b=i[12],y=i[1],L=i[5],F=i[9],k=i[13],Y=i[2],q=i[6],W=i[10],K=i[14],X=i[3],ut=i[7],dt=i[11],mt=i[15];return a[0]=r*C+o*y+c*Y+l*X,a[4]=r*T+o*L+c*q+l*ut,a[8]=r*D+o*F+c*W+l*dt,a[12]=r*b+o*k+c*K+l*mt,a[1]=u*C+d*y+h*Y+m*X,a[5]=u*T+d*L+h*q+m*ut,a[9]=u*D+d*F+h*W+m*dt,a[13]=u*b+d*k+h*K+m*mt,a[2]=g*C+_*y+p*Y+f*X,a[6]=g*T+_*L+p*q+f*ut,a[10]=g*D+_*F+p*W+f*dt,a[14]=g*b+_*k+p*K+f*mt,a[3]=M*C+S*y+A*Y+I*X,a[7]=M*T+S*L+A*q+I*ut,a[11]=M*D+S*F+A*W+I*dt,a[15]=M*b+S*k+A*K+I*mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],a=t[12],r=t[1],o=t[5],c=t[9],l=t[13],u=t[2],d=t[6],h=t[10],m=t[14],g=t[3],_=t[7],p=t[11],f=t[15];return g*(+a*c*d-i*l*d-a*o*h+n*l*h+i*o*m-n*c*m)+_*(+e*c*m-e*l*h+a*r*h-i*r*m+i*l*u-a*c*u)+p*(+e*l*d-e*o*m-a*r*d+n*r*m+a*o*u-n*l*u)+f*(-i*o*u-e*c*d+e*o*h+i*r*d-n*r*h+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],a=t[3],r=t[4],o=t[5],c=t[6],l=t[7],u=t[8],d=t[9],h=t[10],m=t[11],g=t[12],_=t[13],p=t[14],f=t[15],M=d*p*l-_*h*l+_*c*m-o*p*m-d*c*f+o*h*f,S=g*h*l-u*p*l-g*c*m+r*p*m+u*c*f-r*h*f,A=u*_*l-g*d*l+g*o*m-r*_*m-u*o*f+r*d*f,I=g*d*c-u*_*c-g*o*h+r*_*h+u*o*p-r*d*p,C=e*M+n*S+i*A+a*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return t[0]=M*T,t[1]=(_*h*a-d*p*a-_*i*m+n*p*m+d*i*f-n*h*f)*T,t[2]=(o*p*a-_*c*a+_*i*l-n*p*l-o*i*f+n*c*f)*T,t[3]=(d*c*a-o*h*a-d*i*l+n*h*l+o*i*m-n*c*m)*T,t[4]=S*T,t[5]=(u*p*a-g*h*a+g*i*m-e*p*m-u*i*f+e*h*f)*T,t[6]=(g*c*a-r*p*a-g*i*l+e*p*l+r*i*f-e*c*f)*T,t[7]=(r*h*a-u*c*a+u*i*l-e*h*l-r*i*m+e*c*m)*T,t[8]=A*T,t[9]=(g*d*a-u*_*a-g*n*m+e*_*m+u*n*f-e*d*f)*T,t[10]=(r*_*a-g*o*a+g*n*l-e*_*l-r*n*f+e*o*f)*T,t[11]=(u*o*a-r*d*a-u*n*l+e*d*l+r*n*m-e*o*m)*T,t[12]=I*T,t[13]=(u*_*i-g*d*i+g*n*h-e*_*h-u*n*p+e*d*p)*T,t[14]=(g*o*i-r*_*i-g*n*c+e*_*c+r*n*p-e*o*p)*T,t[15]=(r*d*i-u*o*i+u*n*c-e*d*c-r*n*h+e*o*h)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,a=t.z;return e[0]*=n,e[4]*=i,e[8]*=a,e[1]*=n,e[5]*=i,e[9]*=a,e[2]*=n,e[6]*=i,e[10]*=a,e[3]*=n,e[7]*=i,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),a=1-n,r=t.x,o=t.y,c=t.z,l=a*r,u=a*o;return this.set(l*r+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*r,0,l*c-i*o,u*c+i*r,a*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,a,r){return this.set(1,n,a,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,a=e._x,r=e._y,o=e._z,c=e._w,l=a+a,u=r+r,d=o+o,h=a*l,m=a*u,g=a*d,_=r*u,p=r*d,f=o*d,M=c*l,S=c*u,A=c*d,I=n.x,C=n.y,T=n.z;return i[0]=(1-(_+f))*I,i[1]=(m+A)*I,i[2]=(g-S)*I,i[3]=0,i[4]=(m-A)*C,i[5]=(1-(h+f))*C,i[6]=(p+M)*C,i[7]=0,i[8]=(g+S)*T,i[9]=(p-M)*T,i[10]=(1-(h+_))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let a=oi.set(i[0],i[1],i[2]).length();const r=oi.set(i[4],i[5],i[6]).length(),o=oi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(a=-a),t.x=i[12],t.y=i[13],t.z=i[14],Ke.copy(this);const l=1/a,u=1/r,d=1/o;return Ke.elements[0]*=l,Ke.elements[1]*=l,Ke.elements[2]*=l,Ke.elements[4]*=u,Ke.elements[5]*=u,Ke.elements[6]*=u,Ke.elements[8]*=d,Ke.elements[9]*=d,Ke.elements[10]*=d,e.setFromRotationMatrix(Ke),n.x=a,n.y=r,n.z=o,this}makePerspective(t,e,n,i,a,r,o=fn){const c=this.elements,l=2*a/(e-t),u=2*a/(n-i),d=(e+t)/(e-t),h=(n+i)/(n-i);let m,g;if(o===fn)m=-(r+a)/(r-a),g=-2*r*a/(r-a);else if(o===Is)m=-r/(r-a),g=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,a,r,o=fn){const c=this.elements,l=1/(e-t),u=1/(n-i),d=1/(r-a),h=(e+t)*l,m=(n+i)*u;let g,_;if(o===fn)g=(r+a)*d,_=-2*d;else if(o===Is)g=a*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const oi=new w,Ke=new te,Kl=new w(0,0,0),$l=new w(1,1,1),xn=new w,is=new w,He=new w,Dr=new te,Ur=new Pn;class nn{constructor(t=0,e=0,n=0,i=nn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,a=i[0],r=i[4],o=i[8],c=i[1],l=i[5],u=i[9],d=i[2],h=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Oe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Oe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Oe(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Dr.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Dr,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ur.setFromEuler(this),this.setFromQuaternion(Ur,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nn.DEFAULT_ORDER="XYZ";class ka{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Jl=0;const Or=new w,ci=new Pn,on=new te,ss=new w,Ni=new w,Zl=new w,Ql=new Pn,Nr=new w(1,0,0),Br=new w(0,1,0),Fr=new w(0,0,1),kr={type:"added"},th={type:"removed"},li={type:"childadded",child:null},oa={type:"childremoved",child:null};class Ce extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jl++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ce.DEFAULT_UP.clone();const t=new w,e=new nn,n=new Pn,i=new w(1,1,1);function a(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new te},normalMatrix:{value:new Ot}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=Ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ka,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ci.setFromAxisAngle(t,e),this.quaternion.multiply(ci),this}rotateOnWorldAxis(t,e){return ci.setFromAxisAngle(t,e),this.quaternion.premultiply(ci),this}rotateX(t){return this.rotateOnAxis(Nr,t)}rotateY(t){return this.rotateOnAxis(Br,t)}rotateZ(t){return this.rotateOnAxis(Fr,t)}translateOnAxis(t,e){return Or.copy(t).applyQuaternion(this.quaternion),this.position.add(Or.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nr,t)}translateY(t){return this.translateOnAxis(Br,t)}translateZ(t){return this.translateOnAxis(Fr,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(on.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ss.copy(t):ss.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ni.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?on.lookAt(Ni,ss,this.up):on.lookAt(ss,Ni,this.up),this.quaternion.setFromRotationMatrix(on),i&&(on.extractRotation(i.matrixWorld),ci.setFromRotationMatrix(on),this.quaternion.premultiply(ci.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(kr),li.child=t,this.dispatchEvent(li),li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(th),oa.child=t,this.dispatchEvent(oa),oa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),on.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),on.multiply(t.parent.matrixWorld)),t.applyMatrix4(on),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(kr),li.child=t,this.dispatchEvent(li),li.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let a=0,r=i.length;a<r;a++)i[a].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,t,Zl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,Ql,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const a=e[n];(a.matrixWorldAutoUpdate===!0||t===!0)&&a.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let a=0,r=i.length;a<r;a++){const o=i[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];a(t.shapes,d)}else a(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(t.materials,this.material[c]));i.material=o}else i.material=a(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(a(t.animations,c))}}if(e){const o=r(t.geometries),c=r(t.materials),l=r(t.textures),u=r(t.images),d=r(t.shapes),h=r(t.skeletons),m=r(t.animations),g=r(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ce.DEFAULT_UP=new w(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $e=new w,cn=new w,ca=new w,ln=new w,hi=new w,ui=new w,zr=new w,la=new w,ha=new w,ua=new w;class Ze{constructor(t=new w,e=new w,n=new w){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),$e.subVectors(t,e),i.cross($e);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(t,e,n,i,a){$e.subVectors(i,e),cn.subVectors(n,e),ca.subVectors(t,e);const r=$e.dot($e),o=$e.dot(cn),c=$e.dot(ca),l=cn.dot(cn),u=cn.dot(ca),d=r*l-o*o;if(d===0)return a.set(0,0,0),null;const h=1/d,m=(l*c-o*u)*h,g=(r*u-o*c)*h;return a.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ln)===null?!1:ln.x>=0&&ln.y>=0&&ln.x+ln.y<=1}static getInterpolation(t,e,n,i,a,r,o,c){return this.getBarycoord(t,e,n,i,ln)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,ln.x),c.addScaledVector(r,ln.y),c.addScaledVector(o,ln.z),c)}static isFrontFacing(t,e,n,i){return $e.subVectors(n,e),cn.subVectors(t,e),$e.cross(cn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $e.subVectors(this.c,this.b),cn.subVectors(this.a,this.b),$e.cross(cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ze.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ze.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,a){return Ze.getInterpolation(t,this.a,this.b,this.c,e,n,i,a)}containsPoint(t){return Ze.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ze.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,a=this.c;let r,o;hi.subVectors(i,n),ui.subVectors(a,n),la.subVectors(t,n);const c=hi.dot(la),l=ui.dot(la);if(c<=0&&l<=0)return e.copy(n);ha.subVectors(t,i);const u=hi.dot(ha),d=ui.dot(ha);if(u>=0&&d<=u)return e.copy(i);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return r=c/(c-u),e.copy(n).addScaledVector(hi,r);ua.subVectors(t,a);const m=hi.dot(ua),g=ui.dot(ua);if(g>=0&&m<=g)return e.copy(a);const _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(ui,o);const p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return zr.subVectors(a,i),o=(d-u)/(d-u+(m-g)),e.copy(i).addScaledVector(zr,o);const f=1/(p+_+h);return r=_*f,o=h*f,e.copy(n).addScaledVector(hi,r).addScaledVector(ui,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const oc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},as={h:0,s:0,l:0};function da(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class tt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Jt.workingColorSpace){if(t=Fl(t,1),e=Oe(e,0,1),n=Oe(n,0,1),e===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+e):n+e-n*e,r=2*n-a;this.r=da(r,a,t+1/3),this.g=da(r,a,t),this.b=da(r,a,t-1/3)}return Jt.toWorkingColorSpace(this,i),this}setStyle(t,e=je){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=i[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=je){const n=oc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ei(t.r),this.g=Ei(t.g),this.b=Ei(t.b),this}copyLinearToSRGB(t){return this.r=Qs(t.r),this.g=Qs(t.g),this.b=Qs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=je){return Jt.fromWorkingColorSpace(Pe.copy(this),t),Math.round(Oe(Pe.r*255,0,255))*65536+Math.round(Oe(Pe.g*255,0,255))*256+Math.round(Oe(Pe.b*255,0,255))}getHexString(t=je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Pe.copy(this),e);const n=Pe.r,i=Pe.g,a=Pe.b,r=Math.max(n,i,a),o=Math.min(n,i,a);let c,l;const u=(o+r)/2;if(o===r)c=0,l=0;else{const d=r-o;switch(l=u<=.5?d/(r+o):d/(2-r-o),r){case n:c=(i-a)/d+(i<a?6:0);break;case i:c=(a-n)/d+2;break;case a:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t=je){Jt.fromWorkingColorSpace(Pe.copy(this),t);const e=Pe.r,n=Pe.g,i=Pe.b;return t!==je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Mn),this.setHSL(Mn.h+t,Mn.s+e,Mn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Mn),t.getHSL(as);const n=Js(Mn.h,as.h,e),i=Js(Mn.s,as.s,e),a=Js(Mn.l,as.l,e);return this.setHSL(n,i,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,a=t.elements;return this.r=a[0]*e+a[3]*n+a[6]*i,this.g=a[1]*e+a[4]*n+a[7]*i,this.b=a[2]*e+a[5]*n+a[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pe=new tt;tt.NAMES=oc;let eh=0;class Zn extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eh++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=jn,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wa,this.blendDst=Ra,this.blendEquation=Vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ni,this.stencilZFail=ni,this.stencilZPass=ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==jn&&(n.blending=this.blending),this.side!==Cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ra&&(n.blendDst=this.blendDst),this.blendEquation!==Vn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ts&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tr&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(a){const r=[];for(const o in a){const c=a[o];delete c.metadata,r.push(c)}return r}if(e){const a=i(t.textures),r=i(t.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let a=0;a!==i;++a)n[a]=e[a].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ce extends Zn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=Xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Se=new w,rs=new Mt;class se{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=wr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return sc("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)rs.fromBufferAttribute(this,e),rs.applyMatrix3(t),this.setXY(e,rs.x,rs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Di(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Di(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Di(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Di(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Di(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),i=Ne(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,a){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),i=Ne(i,this.array),a=Ne(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==wr&&(t.usage=this.usage),t}}class cc extends se{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class lc extends se{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class re extends se{constructor(t,e,n){super(new Float32Array(t),e,n)}}let nh=0;const Ye=new te,fa=new Ce,di=new w,Ge=new $n,Bi=new $n,we=new w;class me extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nh++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ic(t)?lc:cc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Ot().getNormalMatrix(t);n.applyNormalMatrix(a),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ye.makeRotationFromQuaternion(t),this.applyMatrix4(Ye),this}rotateX(t){return Ye.makeRotationX(t),this.applyMatrix4(Ye),this}rotateY(t){return Ye.makeRotationY(t),this.applyMatrix4(Ye),this}rotateZ(t){return Ye.makeRotationZ(t),this.applyMatrix4(Ye),this}translate(t,e,n){return Ye.makeTranslation(t,e,n),this.applyMatrix4(Ye),this}scale(t,e,n){return Ye.makeScale(t,e,n),this.applyMatrix4(Ye),this}lookAt(t){return fa.lookAt(t),fa.updateMatrix(),this.applyMatrix4(fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(di).negate(),this.translate(di.x,di.y,di.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const a=t[n];e.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new re(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $n);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const a=e[n];Ge.setFromBufferAttribute(a),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,Ge.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,Ge.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(Ge.min),this.boundingBox.expandByPoint(Ge.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(t){const n=this.boundingSphere.center;if(Ge.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){const o=e[a];Bi.setFromBufferAttribute(o),this.morphTargetsRelative?(we.addVectors(Ge.min,Bi.min),Ge.expandByPoint(we),we.addVectors(Ge.max,Bi.max),Ge.expandByPoint(we)):(Ge.expandByPoint(Bi.min),Ge.expandByPoint(Bi.max))}Ge.getCenter(n);let i=0;for(let a=0,r=t.count;a<r;a++)we.fromBufferAttribute(t,a),i=Math.max(i,n.distanceToSquared(we));if(e)for(let a=0,r=e.length;a<r;a++){const o=e[a],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)we.fromBufferAttribute(o,l),c&&(di.fromBufferAttribute(t,l),we.add(di)),i=Math.max(i,n.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new se(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],c=[];for(let D=0;D<n.count;D++)o[D]=new w,c[D]=new w;const l=new w,u=new w,d=new w,h=new Mt,m=new Mt,g=new Mt,_=new w,p=new w;function f(D,b,y){l.fromBufferAttribute(n,D),u.fromBufferAttribute(n,b),d.fromBufferAttribute(n,y),h.fromBufferAttribute(a,D),m.fromBufferAttribute(a,b),g.fromBufferAttribute(a,y),u.sub(l),d.sub(l),m.sub(h),g.sub(h);const L=1/(m.x*g.y-g.x*m.y);isFinite(L)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(L),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(L),o[D].add(_),o[b].add(_),o[y].add(_),c[D].add(p),c[b].add(p),c[y].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let D=0,b=M.length;D<b;++D){const y=M[D],L=y.start,F=y.count;for(let k=L,Y=L+F;k<Y;k+=3)f(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const S=new w,A=new w,I=new w,C=new w;function T(D){I.fromBufferAttribute(i,D),C.copy(I);const b=o[D];S.copy(b),S.sub(I.multiplyScalar(I.dot(b))).normalize(),A.crossVectors(C,b);const L=A.dot(c[D])<0?-1:1;r.setXYZW(D,S.x,S.y,S.z,L)}for(let D=0,b=M.length;D<b;++D){const y=M[D],L=y.start,F=y.count;for(let k=L,Y=L+F;k<Y;k+=3)T(t.getX(k+0)),T(t.getX(k+1)),T(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new se(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const i=new w,a=new w,r=new w,o=new w,c=new w,l=new w,u=new w,d=new w;if(t)for(let h=0,m=t.count;h<m;h+=3){const g=t.getX(h+0),_=t.getX(h+1),p=t.getX(h+2);i.fromBufferAttribute(e,g),a.fromBufferAttribute(e,_),r.fromBufferAttribute(e,p),u.subVectors(r,a),d.subVectors(i,a),u.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,m=e.count;h<m;h+=3)i.fromBufferAttribute(e,h+0),a.fromBufferAttribute(e,h+1),r.fromBufferAttribute(e,h+2),u.subVectors(r,a),d.subVectors(i,a),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,d=o.normalized,h=new l.constructor(c.length*u);let m=0,g=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?m=c[_]*o.data.stride+o.offset:m=c[_]*u;for(let f=0;f<u;f++)h[g++]=l[m++]}return new se(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new me,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const a=this.morphAttributes;for(const o in a){const c=[],l=a[o];for(let u=0,d=l.length;u<d;u++){const h=l[u],m=t(h,n);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,c=r.length;o<c;o++){const l=r[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const m=l[d];u.push(m.toJSON(t.data))}u.length>0&&(i[c]=u,a=!0)}a&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(e))}const a=t.morphAttributes;for(const l in a){const u=[],d=a[l];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,u=r.length;l<u;l++){const d=r[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hr=new te,Fn=new Wi,os=new Jn,Gr=new w,fi=new w,pi=new w,mi=new w,pa=new w,cs=new w,ls=new Mt,hs=new Mt,us=new Mt,Vr=new w,Wr=new w,Xr=new w,ds=new w,fs=new w;class ot extends Ce{constructor(t=new me,e=new ce){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(a&&o){cs.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const u=o[c],d=a[c];u!==0&&(pa.fromBufferAttribute(d,t),r?cs.addScaledVector(pa,u):cs.addScaledVector(pa.sub(e),u))}e.add(cs)}return e}raycast(t,e){const n=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),os.copy(n.boundingSphere),os.applyMatrix4(a),Fn.copy(t.ray).recast(t.near),!(os.containsPoint(Fn.origin)===!1&&(Fn.intersectSphere(os,Gr)===null||Fn.origin.distanceToSquared(Gr)>(t.far-t.near)**2))&&(Hr.copy(a).invert(),Fn.copy(t.ray).applyMatrix4(Hr),!(n.boundingBox!==null&&Fn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Fn)))}_computeIntersections(t,e,n){let i;const a=this.geometry,r=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,u=a.attributes.uv1,d=a.attributes.normal,h=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,_=h.length;g<_;g++){const p=h[g],f=r[p.materialIndex],M=Math.max(p.start,m.start),S=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let A=M,I=S;A<I;A+=3){const C=o.getX(A),T=o.getX(A+1),D=o.getX(A+2);i=ps(this,f,t,n,l,u,d,C,T,D),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const M=o.getX(p),S=o.getX(p+1),A=o.getX(p+2);i=ps(this,r,t,n,l,u,d,M,S,A),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,_=h.length;g<_;g++){const p=h[g],f=r[p.materialIndex],M=Math.max(p.start,m.start),S=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let A=M,I=S;A<I;A+=3){const C=A,T=A+1,D=A+2;i=ps(this,f,t,n,l,u,d,C,T,D),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const M=p,S=p+1,A=p+2;i=ps(this,r,t,n,l,u,d,M,S,A),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function ih(s,t,e,n,i,a,r,o){let c;if(t.side===ge?c=n.intersectTriangle(r,a,i,!0,o):c=n.intersectTriangle(i,a,r,t.side===Cn,o),c===null)return null;fs.copy(o),fs.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(fs);return l<e.near||l>e.far?null:{distance:l,point:fs.clone(),object:s}}function ps(s,t,e,n,i,a,r,o,c,l){s.getVertexPosition(o,fi),s.getVertexPosition(c,pi),s.getVertexPosition(l,mi);const u=ih(s,t,e,n,fi,pi,mi,ds);if(u){i&&(ls.fromBufferAttribute(i,o),hs.fromBufferAttribute(i,c),us.fromBufferAttribute(i,l),u.uv=Ze.getInterpolation(ds,fi,pi,mi,ls,hs,us,new Mt)),a&&(ls.fromBufferAttribute(a,o),hs.fromBufferAttribute(a,c),us.fromBufferAttribute(a,l),u.uv1=Ze.getInterpolation(ds,fi,pi,mi,ls,hs,us,new Mt)),r&&(Vr.fromBufferAttribute(r,o),Wr.fromBufferAttribute(r,c),Xr.fromBufferAttribute(r,l),u.normal=Ze.getInterpolation(ds,fi,pi,mi,Vr,Wr,Xr,new w),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new w,materialIndex:0};Ze.getNormal(fi,pi,mi,d.normal),u.face=d}return u}class tn extends me{constructor(t=1,e=1,n=1,i=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:a,depthSegments:r};const o=this;i=Math.floor(i),a=Math.floor(a),r=Math.floor(r);const c=[],l=[],u=[],d=[];let h=0,m=0;g("z","y","x",-1,-1,n,e,t,r,a,0),g("z","y","x",1,-1,n,e,-t,r,a,1),g("x","z","y",1,1,t,n,e,i,r,2),g("x","z","y",1,-1,t,n,-e,i,r,3),g("x","y","z",1,-1,t,e,n,i,a,4),g("x","y","z",-1,-1,t,e,-n,i,a,5),this.setIndex(c),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(u,3)),this.setAttribute("uv",new re(d,2));function g(_,p,f,M,S,A,I,C,T,D,b){const y=A/T,L=I/D,F=A/2,k=I/2,Y=C/2,q=T+1,W=D+1;let K=0,X=0;const ut=new w;for(let dt=0;dt<W;dt++){const mt=dt*L-k;for(let Ht=0;Ht<q;Ht++){const Yt=Ht*y-F;ut[_]=Yt*M,ut[p]=mt*S,ut[f]=Y,l.push(ut.x,ut.y,ut.z),ut[_]=0,ut[p]=0,ut[f]=C>0?1:-1,u.push(ut.x,ut.y,ut.z),d.push(Ht/T),d.push(1-dt/D),K+=1}}for(let dt=0;dt<D;dt++)for(let mt=0;mt<T;mt++){const Ht=h+mt+q*dt,Yt=h+mt+q*(dt+1),j=h+(mt+1)+q*(dt+1),et=h+(mt+1)+q*dt;c.push(Ht,Yt,et),c.push(Yt,j,et),X+=6}o.addGroup(m,X,b),m+=X,h+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ci(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ue(s){const t={};for(let e=0;e<s.length;e++){const n=Ci(s[e]);for(const i in n)t[i]=n[i]}return t}function sh(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function hc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const ah={clone:Ci,merge:Ue};var rh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ee extends Zn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rh,this.fragmentShader=oh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ci(t.uniforms),this.uniformsGroups=sh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class uc extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=fn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const En=new w,Yr=new Mt,jr=new Mt;class Ve extends uc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ia*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(bs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ia*2*Math.atan(Math.tan(bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){En.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(En.x,En.y).multiplyScalar(-t/En.z),En.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(En.x,En.y).multiplyScalar(-t/En.z)}getViewSize(t,e){return this.getViewBounds(t,Yr,jr),e.subVectors(jr,Yr)}setViewOffset(t,e,n,i,a,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(bs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,a=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;a+=r.offsetX*i/c,e-=r.offsetY*n/l,i*=r.width/c,n*=r.height/l}const o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const gi=-90,vi=1;class ch extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ve(gi,vi,t,e);i.layers=this.layers,this.add(i);const a=new Ve(gi,vi,t,e);a.layers=this.layers,this.add(a);const r=new Ve(gi,vi,t,e);r.layers=this.layers,this.add(r);const o=new Ve(gi,vi,t,e);o.layers=this.layers,this.add(o);const c=new Ve(gi,vi,t,e);c.layers=this.layers,this.add(c);const l=new Ve(gi,vi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,a,r,o,c]=e;for(const l of e)this.remove(l);if(t===fn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Is)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,c,l,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,a),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(d,h,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class dc extends Ie{constructor(t,e,n,i,a,r,o,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:bi,super(t,e,n,i,a,r,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class lh extends qn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new dc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:We}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new tn(5,5,5),a=new Ee({name:"CubemapFromEquirect",uniforms:Ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ge,blending:wn});a.uniforms.tEquirect.value=e;const r=new ot(i,a),o=e.minFilter;return e.minFilter===Xn&&(e.minFilter=We),new ch(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(a)}}const ma=new w,hh=new w,uh=new Ot;class bn{constructor(t=new w(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ma.subVectors(n,e).cross(hh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ma),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||uh.getNormalMatrix(t),i=this.coplanarPoint(ma).applyMatrix4(t),a=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kn=new Jn,ms=new w;class za{constructor(t=new bn,e=new bn,n=new bn,i=new bn,a=new bn,r=new bn){this.planes=[t,e,n,i,a,r]}set(t,e,n,i,a,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(a),o[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=fn){const n=this.planes,i=t.elements,a=i[0],r=i[1],o=i[2],c=i[3],l=i[4],u=i[5],d=i[6],h=i[7],m=i[8],g=i[9],_=i[10],p=i[11],f=i[12],M=i[13],S=i[14],A=i[15];if(n[0].setComponents(c-a,h-l,p-m,A-f).normalize(),n[1].setComponents(c+a,h+l,p+m,A+f).normalize(),n[2].setComponents(c+r,h+u,p+g,A+M).normalize(),n[3].setComponents(c-r,h-u,p-g,A-M).normalize(),n[4].setComponents(c-o,h-d,p-_,A-S).normalize(),e===fn)n[5].setComponents(c+o,h+d,p+_,A+S).normalize();else if(e===Is)n[5].setComponents(o,d,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),kn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),kn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(kn)}intersectsSprite(t){return kn.center.set(0,0,0),kn.radius=.7071067811865476,kn.applyMatrix4(t.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ms.x=i.normal.x>0?t.max.x:t.min.x,ms.y=i.normal.y>0?t.max.y:t.min.y,ms.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ms)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fc(){let s=null,t=!1,e=null,n=null;function i(a,r){e(a,r),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){s=a}}}function dh(s){const t=new WeakMap;function e(o,c){const l=o.array,u=o.usage,d=l.byteLength,h=s.createBuffer();s.bindBuffer(c,h),s.bufferData(c,l,u),o.onUploadCallback();let m;if(l instanceof Float32Array)m=s.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=s.HALF_FLOAT:m=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=s.SHORT;else if(l instanceof Uint32Array)m=s.UNSIGNED_INT;else if(l instanceof Int32Array)m=s.INT;else if(l instanceof Int8Array)m=s.BYTE;else if(l instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const u=c.array,d=c._updateRange,h=c.updateRanges;if(s.bindBuffer(l,o),d.count===-1&&h.length===0&&s.bufferSubData(l,0,u),h.length!==0){for(let m=0,g=h.length;m<g;m++){const _=h[m];s.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}d.count!==-1&&(s.bufferSubData(l,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(s.deleteBuffer(c.buffer),t.delete(o))}function r(o,c){if(o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:a,update:r}}class Xi extends me{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const a=t/2,r=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,d=t/o,h=e/c,m=[],g=[],_=[],p=[];for(let f=0;f<u;f++){const M=f*h-r;for(let S=0;S<l;S++){const A=S*d-a;g.push(A,-M,0),_.push(0,0,1),p.push(S/o),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let M=0;M<o;M++){const S=M+l*f,A=M+l*(f+1),I=M+1+l*(f+1),C=M+1+l*f;m.push(S,A,C),m.push(A,I,C)}this.setIndex(m),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(_,3)),this.setAttribute("uv",new re(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xi(t.width,t.height,t.widthSegments,t.heightSegments)}}var fh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ph=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_h=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Sh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Mh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Eh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ah=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Th=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Rh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ch=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ph=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ih=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Uh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Oh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,Nh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Bh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Fh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,kh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Xh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Yh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$h=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,eu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,su=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,au=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ru=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ou=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,uu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,du=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_u=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Su=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Mu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Eu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Au=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ru=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Cu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Pu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Iu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Du=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ou=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Nu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ku=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Gu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ju=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,Ku=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$u=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ju=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Zu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,td=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ed=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,id=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ad=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,od=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ld=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ud=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,md=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_d=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Sd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Md=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ed=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ad=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Td=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,wd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ld=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Pd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Id=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Dd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ud=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Od=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Bd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Hd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ut={alphahash_fragment:fh,alphahash_pars_fragment:ph,alphamap_fragment:mh,alphamap_pars_fragment:gh,alphatest_fragment:vh,alphatest_pars_fragment:_h,aomap_fragment:yh,aomap_pars_fragment:Sh,batching_pars_vertex:xh,batching_vertex:Mh,begin_vertex:Eh,beginnormal_vertex:bh,bsdfs:Ah,iridescence_fragment:Th,bumpmap_pars_fragment:wh,clipping_planes_fragment:Rh,clipping_planes_pars_fragment:Ch,clipping_planes_pars_vertex:Lh,clipping_planes_vertex:Ph,color_fragment:Ih,color_pars_fragment:Dh,color_pars_vertex:Uh,color_vertex:Oh,common:Nh,cube_uv_reflection_fragment:Bh,defaultnormal_vertex:Fh,displacementmap_pars_vertex:kh,displacementmap_vertex:zh,emissivemap_fragment:Hh,emissivemap_pars_fragment:Gh,colorspace_fragment:Vh,colorspace_pars_fragment:Wh,envmap_fragment:Xh,envmap_common_pars_fragment:Yh,envmap_pars_fragment:jh,envmap_pars_vertex:qh,envmap_physical_pars_fragment:au,envmap_vertex:Kh,fog_vertex:$h,fog_pars_vertex:Jh,fog_fragment:Zh,fog_pars_fragment:Qh,gradientmap_pars_fragment:tu,lightmap_pars_fragment:eu,lights_lambert_fragment:nu,lights_lambert_pars_fragment:iu,lights_pars_begin:su,lights_toon_fragment:ru,lights_toon_pars_fragment:ou,lights_phong_fragment:cu,lights_phong_pars_fragment:lu,lights_physical_fragment:hu,lights_physical_pars_fragment:uu,lights_fragment_begin:du,lights_fragment_maps:fu,lights_fragment_end:pu,logdepthbuf_fragment:mu,logdepthbuf_pars_fragment:gu,logdepthbuf_pars_vertex:vu,logdepthbuf_vertex:_u,map_fragment:yu,map_pars_fragment:Su,map_particle_fragment:xu,map_particle_pars_fragment:Mu,metalnessmap_fragment:Eu,metalnessmap_pars_fragment:bu,morphinstance_vertex:Au,morphcolor_vertex:Tu,morphnormal_vertex:wu,morphtarget_pars_vertex:Ru,morphtarget_vertex:Cu,normal_fragment_begin:Lu,normal_fragment_maps:Pu,normal_pars_fragment:Iu,normal_pars_vertex:Du,normal_vertex:Uu,normalmap_pars_fragment:Ou,clearcoat_normal_fragment_begin:Nu,clearcoat_normal_fragment_maps:Bu,clearcoat_pars_fragment:Fu,iridescence_pars_fragment:ku,opaque_fragment:zu,packing:Hu,premultiplied_alpha_fragment:Gu,project_vertex:Vu,dithering_fragment:Wu,dithering_pars_fragment:Xu,roughnessmap_fragment:Yu,roughnessmap_pars_fragment:ju,shadowmap_pars_fragment:qu,shadowmap_pars_vertex:Ku,shadowmap_vertex:$u,shadowmask_pars_fragment:Ju,skinbase_vertex:Zu,skinning_pars_vertex:Qu,skinning_vertex:td,skinnormal_vertex:ed,specularmap_fragment:nd,specularmap_pars_fragment:id,tonemapping_fragment:sd,tonemapping_pars_fragment:ad,transmission_fragment:rd,transmission_pars_fragment:od,uv_pars_fragment:cd,uv_pars_vertex:ld,uv_vertex:hd,worldpos_vertex:ud,background_vert:dd,background_frag:fd,backgroundCube_vert:pd,backgroundCube_frag:md,cube_vert:gd,cube_frag:vd,depth_vert:_d,depth_frag:yd,distanceRGBA_vert:Sd,distanceRGBA_frag:xd,equirect_vert:Md,equirect_frag:Ed,linedashed_vert:bd,linedashed_frag:Ad,meshbasic_vert:Td,meshbasic_frag:wd,meshlambert_vert:Rd,meshlambert_frag:Cd,meshmatcap_vert:Ld,meshmatcap_frag:Pd,meshnormal_vert:Id,meshnormal_frag:Dd,meshphong_vert:Ud,meshphong_frag:Od,meshphysical_vert:Nd,meshphysical_frag:Bd,meshtoon_vert:Fd,meshtoon_frag:kd,points_vert:zd,points_frag:Hd,shadow_vert:Gd,shadow_frag:Vd,sprite_vert:Wd,sprite_frag:Xd},rt={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Je={basic:{uniforms:Ue([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:Ue([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:Ue([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:Ue([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:Ue([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:Ue([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:Ue([rt.points,rt.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:Ue([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:Ue([rt.common,rt.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:Ue([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:Ue([rt.sprite,rt.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:Ue([rt.common,rt.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:Ue([rt.lights,rt.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};Je.physical={uniforms:Ue([Je.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};const gs={r:0,b:0,g:0},zn=new nn,Yd=new te;function jd(s,t,e,n,i,a,r){const o=new tt(0);let c=a===!0?0:1,l,u,d=null,h=0,m=null;function g(M){let S=M.isScene===!0?M.background:null;return S&&S.isTexture&&(S=(M.backgroundBlurriness>0?e:t).get(S)),S}function _(M){let S=!1;const A=g(M);A===null?f(o,c):A&&A.isColor&&(f(A,1),S=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,r):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(s.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(M,S){const A=g(S);A&&(A.isCubeTexture||A.mapping===Bs)?(u===void 0&&(u=new ot(new tn(1,1,1),new Ee({name:"BackgroundCubeMaterial",uniforms:Ci(Je.backgroundCube.uniforms),vertexShader:Je.backgroundCube.vertexShader,fragmentShader:Je.backgroundCube.fragmentShader,side:ge,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,C,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),zn.copy(S.backgroundRotation),zn.x*=-1,zn.y*=-1,zn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(zn.y*=-1,zn.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Yd.makeRotationFromEuler(zn)),u.material.toneMapped=Jt.getTransfer(A.colorSpace)!==ie,(d!==A||h!==A.version||m!==s.toneMapping)&&(u.material.needsUpdate=!0,d=A,h=A.version,m=s.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new ot(new Xi(2,2),new Ee({name:"BackgroundMaterial",uniforms:Ci(Je.background.uniforms),vertexShader:Je.background.vertexShader,fragmentShader:Je.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(A.colorSpace)!==ie,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||h!==A.version||m!==s.toneMapping)&&(l.material.needsUpdate=!0,d=A,h=A.version,m=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function f(M,S){M.getRGB(gs,hc(s)),n.buffers.color.setClear(gs.r,gs.g,gs.b,S,r)}return{getClearColor:function(){return o},setClearColor:function(M,S=1){o.set(M),c=S,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,f(o,c)},render:_,addToRenderList:p}}function qd(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=h(null);let a=i,r=!1;function o(y,L,F,k,Y){let q=!1;const W=d(k,F,L);a!==W&&(a=W,l(a.object)),q=m(y,k,F,Y),q&&g(y,k,F,Y),Y!==null&&t.update(Y,s.ELEMENT_ARRAY_BUFFER),(q||r)&&(r=!1,A(y,L,F,k),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function c(){return s.createVertexArray()}function l(y){return s.bindVertexArray(y)}function u(y){return s.deleteVertexArray(y)}function d(y,L,F){const k=F.wireframe===!0;let Y=n[y.id];Y===void 0&&(Y={},n[y.id]=Y);let q=Y[L.id];q===void 0&&(q={},Y[L.id]=q);let W=q[k];return W===void 0&&(W=h(c()),q[k]=W),W}function h(y){const L=[],F=[],k=[];for(let Y=0;Y<e;Y++)L[Y]=0,F[Y]=0,k[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:k,object:y,attributes:{},index:null}}function m(y,L,F,k){const Y=a.attributes,q=L.attributes;let W=0;const K=F.getAttributes();for(const X in K)if(K[X].location>=0){const dt=Y[X];let mt=q[X];if(mt===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(mt=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(mt=y.instanceColor)),dt===void 0||dt.attribute!==mt||mt&&dt.data!==mt.data)return!0;W++}return a.attributesNum!==W||a.index!==k}function g(y,L,F,k){const Y={},q=L.attributes;let W=0;const K=F.getAttributes();for(const X in K)if(K[X].location>=0){let dt=q[X];dt===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(dt=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(dt=y.instanceColor));const mt={};mt.attribute=dt,dt&&dt.data&&(mt.data=dt.data),Y[X]=mt,W++}a.attributes=Y,a.attributesNum=W,a.index=k}function _(){const y=a.newAttributes;for(let L=0,F=y.length;L<F;L++)y[L]=0}function p(y){f(y,0)}function f(y,L){const F=a.newAttributes,k=a.enabledAttributes,Y=a.attributeDivisors;F[y]=1,k[y]===0&&(s.enableVertexAttribArray(y),k[y]=1),Y[y]!==L&&(s.vertexAttribDivisor(y,L),Y[y]=L)}function M(){const y=a.newAttributes,L=a.enabledAttributes;for(let F=0,k=L.length;F<k;F++)L[F]!==y[F]&&(s.disableVertexAttribArray(F),L[F]=0)}function S(y,L,F,k,Y,q,W){W===!0?s.vertexAttribIPointer(y,L,F,Y,q):s.vertexAttribPointer(y,L,F,k,Y,q)}function A(y,L,F,k){_();const Y=k.attributes,q=F.getAttributes(),W=L.defaultAttributeValues;for(const K in q){const X=q[K];if(X.location>=0){let ut=Y[K];if(ut===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(ut=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(ut=y.instanceColor)),ut!==void 0){const dt=ut.normalized,mt=ut.itemSize,Ht=t.get(ut);if(Ht===void 0)continue;const Yt=Ht.buffer,j=Ht.type,et=Ht.bytesPerElement,ft=j===s.INT||j===s.UNSIGNED_INT||ut.gpuType===qo;if(ut.isInterleavedBufferAttribute){const ct=ut.data,Nt=ct.stride,Ct=ut.offset;if(ct.isInstancedInterleavedBuffer){for(let Gt=0;Gt<X.locationSize;Gt++)f(X.location+Gt,ct.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Gt=0;Gt<X.locationSize;Gt++)p(X.location+Gt);s.bindBuffer(s.ARRAY_BUFFER,Yt);for(let Gt=0;Gt<X.locationSize;Gt++)S(X.location+Gt,mt/X.locationSize,j,dt,Nt*et,(Ct+mt/X.locationSize*Gt)*et,ft)}else{if(ut.isInstancedBufferAttribute){for(let ct=0;ct<X.locationSize;ct++)f(X.location+ct,ut.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let ct=0;ct<X.locationSize;ct++)p(X.location+ct);s.bindBuffer(s.ARRAY_BUFFER,Yt);for(let ct=0;ct<X.locationSize;ct++)S(X.location+ct,mt/X.locationSize,j,dt,mt*et,mt/X.locationSize*ct*et,ft)}}else if(W!==void 0){const dt=W[K];if(dt!==void 0)switch(dt.length){case 2:s.vertexAttrib2fv(X.location,dt);break;case 3:s.vertexAttrib3fv(X.location,dt);break;case 4:s.vertexAttrib4fv(X.location,dt);break;default:s.vertexAttrib1fv(X.location,dt)}}}}M()}function I(){D();for(const y in n){const L=n[y];for(const F in L){const k=L[F];for(const Y in k)u(k[Y].object),delete k[Y];delete L[F]}delete n[y]}}function C(y){if(n[y.id]===void 0)return;const L=n[y.id];for(const F in L){const k=L[F];for(const Y in k)u(k[Y].object),delete k[Y];delete L[F]}delete n[y.id]}function T(y){for(const L in n){const F=n[L];if(F[y.id]===void 0)continue;const k=F[y.id];for(const Y in k)u(k[Y].object),delete k[Y];delete F[y.id]}}function D(){b(),r=!0,a!==i&&(a=i,l(a.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:D,resetDefaultState:b,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:p,disableUnusedAttributes:M}}function Kd(s,t,e){let n;function i(l){n=l}function a(l,u){s.drawArrays(n,l,u),e.update(u,n,1)}function r(l,u,d){d!==0&&(s.drawArraysInstanced(n,l,u,d),e.update(u,n,d))}function o(l,u,d){if(d===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let m=0;m<d;m++)this.render(l[m],u[m]);else{h.multiDrawArraysWEBGL(n,l,0,u,0,d);let m=0;for(let g=0;g<d;g++)m+=u[g];e.update(m,n,1)}}function c(l,u,d,h){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)r(l[g],u[g],h[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];for(let _=0;_<h.length;_++)e.update(g,n,h[_])}}this.setMode=i,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function $d(s,t,e,n){let i;function a(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(C){return!(C!==Qe&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const T=C===Fs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Ln&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==dn&&!T)}function c(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=e.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),f=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,I=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:f,maxVaryings:M,maxFragmentUniforms:S,vertexTextures:A,maxSamples:I}}function Jd(s){const t=this;let e=null,n=0,i=!1,a=!1;const r=new bn,o=new Ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||n!==0||i;return i=h,n=d.length,m},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,m){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,f=s.get(d);if(!i||g===null||g.length===0||a&&!p)a?u(null):l();else{const M=a?0:n,S=M*4;let A=f.clippingState||null;c.value=A,A=u(g,h,S,m);for(let I=0;I!==S;++I)A[I]=e[I];f.clippingState=A,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,m,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const f=m+_*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<f)&&(p=new Float32Array(f));for(let S=0,A=m;S!==_;++S,A+=4)r.copy(d[S]).applyMatrix4(M,o),r.normal.toArray(p,A),p[A+3]=r.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Zd(s){let t=new WeakMap;function e(r,o){return o===Ca?r.mapping=bi:o===La&&(r.mapping=Ai),r}function n(r){if(r&&r.isTexture){const o=r.mapping;if(o===Ca||o===La)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new lh(c.height);return l.fromEquirectangularTexture(s,r),t.set(r,l),r.addEventListener("dispose",i),e(l.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function a(){t=new WeakMap}return{get:n,dispose:a}}class Qd extends uc{constructor(t=-1,e=1,n=1,i=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=n-t,r=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,r=a+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Si=4,qr=[.125,.215,.35,.446,.526,.582],Wn=20,ga=new Qd,Kr=new tt;let va=null,_a=0,ya=0,Sa=!1;const Gn=(1+Math.sqrt(5))/2,_i=1/Gn,$r=[new w(-Gn,_i,0),new w(Gn,_i,0),new w(-_i,0,Gn),new w(_i,0,Gn),new w(0,Gn,-_i),new w(0,Gn,_i),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)];class Jr{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){va=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),ya=this._renderer.getActiveMipmapLevel(),Sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,n,i,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=to(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(va,_a,ya),this._renderer.xr.enabled=Sa,t.scissorTest=!1,vs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===bi||t.mapping===Ai?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),va=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),ya=this._renderer.getActiveMipmapLevel(),Sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:We,minFilter:We,generateMipmaps:!1,type:Fs,format:Qe,colorSpace:In,depthBuffer:!1},i=Zr(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zr(t,e,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tf(a)),this._blurMaterial=ef(a,t,e)}return i}_compileMaterial(t){const e=new ot(this._lodPlanes[0],t);this._renderer.compile(e,ga)}_sceneToCubeUV(t,e,n,i){const o=new Ve(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Kr),u.toneMapping=Rn,u.autoClear=!1;const m=new ce({name:"PMREM.Background",side:ge,depthWrite:!1,depthTest:!1}),g=new ot(new tn,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(Kr),_=!0);for(let f=0;f<6;f++){const M=f%3;M===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):M===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));const S=this._cubeSize;vs(i,M*S,f>2?S:0,S,S),u.setRenderTarget(i),_&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===bi||t.mapping===Ai;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=to()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qr());const a=i?this._cubemapMaterial:this._equirectMaterial,r=new ot(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;const c=this._cubeSize;vs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,ga)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let a=1;a<i;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=$r[(i-a-1)%$r.length];this._blur(t,a-1,a,r,o)}e.autoClear=n}_blur(t,e,n,i,a){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",a),this._halfBlur(r,t,n,n,i,"longitudinal",a)}_halfBlur(t,e,n,i,a,r,o){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new ot(this._lodPlanes[i],l),h=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*Wn-1),_=a/g,p=isFinite(a)?1+Math.floor(u*_):Wn;p>Wn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Wn}`);const f=[];let M=0;for(let T=0;T<Wn;++T){const D=T/_,b=Math.exp(-D*D/2);f.push(b),T===0?M+=b:T<p&&(M+=2*b)}for(let T=0;T<f.length;T++)f[T]=f[T]/M;h.envMap.value=t.texture,h.samples.value=p,h.weights.value=f,h.latitudinal.value=r==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:S}=this;h.dTheta.value=g,h.mipInt.value=S-n;const A=this._sizeLods[i],I=3*A*(i>S-Si?i-S+Si:0),C=4*(this._cubeSize-A);vs(e,I,C,3*A,2*A),c.setRenderTarget(e),c.render(d,ga)}}function tf(s){const t=[],e=[],n=[];let i=s;const a=s-Si+1+qr.length;for(let r=0;r<a;r++){const o=Math.pow(2,i);e.push(o);let c=1/o;r>s-Si?c=qr[r-s+Si-1]:r===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,_=3,p=2,f=1,M=new Float32Array(_*g*m),S=new Float32Array(p*g*m),A=new Float32Array(f*g*m);for(let C=0;C<m;C++){const T=C%3*2/3-1,D=C>2?0:-1,b=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];M.set(b,_*g*C),S.set(h,p*g*C);const y=[C,C,C,C,C,C];A.set(y,f*g*C)}const I=new me;I.setAttribute("position",new se(M,_)),I.setAttribute("uv",new se(S,p)),I.setAttribute("faceIndex",new se(A,f)),t.push(I),i>Si&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Zr(s,t,e){const n=new qn(s,t,e);return n.texture.mapping=Bs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function ef(s,t,e){const n=new Float32Array(Wn),i=new w(0,1,0);return new Ee({name:"SphericalGaussianBlur",defines:{n:Wn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Qr(){return new Ee({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function to(){return new Ee({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Ha(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function nf(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Ca||c===La,u=c===bi||c===Ai;if(l||u){let d=t.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return e===null&&(e=new Jr(s)),d=l?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return l&&m&&m.height>0||u&&m&&i(m)?(e===null&&(e=new Jr(s)),d=l?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function i(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function a(o){const c=o.target;c.removeEventListener("dispose",a);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function sf(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&sc("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function af(s,t,e,n){const i={},a=new WeakMap;function r(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let p=0,f=_.length;p<f;p++)t.remove(_[p])}h.removeEventListener("dispose",r),delete i[h.id];const m=a.get(h);m&&(t.remove(m),a.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return i[h.id]===!0||(h.addEventListener("dispose",r),i[h.id]=!0,e.memory.geometries++),h}function c(d){const h=d.attributes;for(const g in h)t.update(h[g],s.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const _=m[g];for(let p=0,f=_.length;p<f;p++)t.update(_[p],s.ARRAY_BUFFER)}}function l(d){const h=[],m=d.index,g=d.attributes.position;let _=0;if(m!==null){const M=m.array;_=m.version;for(let S=0,A=M.length;S<A;S+=3){const I=M[S+0],C=M[S+1],T=M[S+2];h.push(I,C,C,T,T,I)}}else if(g!==void 0){const M=g.array;_=g.version;for(let S=0,A=M.length/3-1;S<A;S+=3){const I=S+0,C=S+1,T=S+2;h.push(I,C,C,T,T,I)}}else return;const p=new(ic(h)?lc:cc)(h,1);p.version=_;const f=a.get(d);f&&t.remove(f),a.set(d,p)}function u(d){const h=a.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&l(d)}else l(d);return a.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function rf(s,t,e){let n;function i(h){n=h}let a,r;function o(h){a=h.type,r=h.bytesPerElement}function c(h,m){s.drawElements(n,m,a,h*r),e.update(m,n,1)}function l(h,m,g){g!==0&&(s.drawElementsInstanced(n,m,a,h*r,g),e.update(m,n,g))}function u(h,m,g){if(g===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<g;p++)this.render(h[p]/r,m[p]);else{_.multiDrawElementsWEBGL(n,m,0,a,h,0,g);let p=0;for(let f=0;f<g;f++)p+=m[f];e.update(p,n,1)}}function d(h,m,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<h.length;f++)l(h[f]/r,m[f],_[f]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,a,h,0,_,0,g);let f=0;for(let M=0;M<g;M++)f+=m[M];for(let M=0;M<_.length;M++)e.update(f,n,_[M])}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function of(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=o*(a/3);break;case s.LINES:e.lines+=o*(a/2);break;case s.LINE_STRIP:e.lines+=o*(a-1);break;case s.LINE_LOOP:e.lines+=o*a;break;case s.POINTS:e.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function cf(s,t,e){const n=new WeakMap,i=new ae;function a(r,o,c){const l=r.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let y=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var m=y;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let A=0;g===!0&&(A=1),_===!0&&(A=2),p===!0&&(A=3);let I=o.attributes.position.count*A,C=1;I>t.maxTextureSize&&(C=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const T=new Float32Array(I*C*4*d),D=new rc(T,I,C,d);D.type=dn,D.needsUpdate=!0;const b=A*4;for(let L=0;L<d;L++){const F=f[L],k=M[L],Y=S[L],q=I*C*4*L;for(let W=0;W<F.count;W++){const K=W*b;g===!0&&(i.fromBufferAttribute(F,W),T[q+K+0]=i.x,T[q+K+1]=i.y,T[q+K+2]=i.z,T[q+K+3]=0),_===!0&&(i.fromBufferAttribute(k,W),T[q+K+4]=i.x,T[q+K+5]=i.y,T[q+K+6]=i.z,T[q+K+7]=0),p===!0&&(i.fromBufferAttribute(Y,W),T[q+K+8]=i.x,T[q+K+9]=i.y,T[q+K+10]=i.z,T[q+K+11]=Y.itemSize===4?i.w:1)}}h={count:d,texture:D,size:new Mt(I,C)},n.set(o,h),o.addEventListener("dispose",y)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",r.morphTexture,e);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:a}}function lf(s,t,e,n){let i=new WeakMap;function a(c){const l=n.render.frame,u=c.geometry,d=t.get(c,u);if(i.get(d)!==l&&(t.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;i.get(h)!==l&&(h.update(),i.set(h,l))}return d}function r(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:a,dispose:r}}class pc extends Ie{constructor(t,e,n,i,a,r,o,c,l,u=Mi){if(u!==Mi&&u!==Ri)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Mi&&(n=Ti),n===void 0&&u===Ri&&(n=wi),super(null,i,a,r,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Be,this.minFilter=c!==void 0?c:Be,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const mc=new Ie,gc=new pc(1,1);gc.compareFunction=nc;const vc=new rc,_c=new jl,yc=new dc,eo=[],no=[],io=new Float32Array(16),so=new Float32Array(9),ao=new Float32Array(4);function Pi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let a=eo[i];if(a===void 0&&(a=new Float32Array(i),eo[i]=a),t!==0){n.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=e,s[r].toArray(a,o)}return a}function be(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ae(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function zs(s,t){let e=no[t];e===void 0&&(e=new Int32Array(t),no[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function hf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function uf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;s.uniform2fv(this.addr,t),Ae(e,t)}}function df(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;s.uniform3fv(this.addr,t),Ae(e,t)}}function ff(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;s.uniform4fv(this.addr,t),Ae(e,t)}}function pf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(be(e,n))return;ao.set(n),s.uniformMatrix2fv(this.addr,!1,ao),Ae(e,n)}}function mf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(be(e,n))return;so.set(n),s.uniformMatrix3fv(this.addr,!1,so),Ae(e,n)}}function gf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(be(e,n))return;io.set(n),s.uniformMatrix4fv(this.addr,!1,io),Ae(e,n)}}function vf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function _f(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;s.uniform2iv(this.addr,t),Ae(e,t)}}function yf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;s.uniform3iv(this.addr,t),Ae(e,t)}}function Sf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;s.uniform4iv(this.addr,t),Ae(e,t)}}function xf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Mf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;s.uniform2uiv(this.addr,t),Ae(e,t)}}function Ef(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;s.uniform3uiv(this.addr,t),Ae(e,t)}}function bf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;s.uniform4uiv(this.addr,t),Ae(e,t)}}function Af(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const a=this.type===s.SAMPLER_2D_SHADOW?gc:mc;e.setTexture2D(t||a,i)}function Tf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||_c,i)}function wf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||yc,i)}function Rf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||vc,i)}function Cf(s){switch(s){case 5126:return hf;case 35664:return uf;case 35665:return df;case 35666:return ff;case 35674:return pf;case 35675:return mf;case 35676:return gf;case 5124:case 35670:return vf;case 35667:case 35671:return _f;case 35668:case 35672:return yf;case 35669:case 35673:return Sf;case 5125:return xf;case 36294:return Mf;case 36295:return Ef;case 36296:return bf;case 35678:case 36198:case 36298:case 36306:case 35682:return Af;case 35679:case 36299:case 36307:return Tf;case 35680:case 36300:case 36308:case 36293:return wf;case 36289:case 36303:case 36311:case 36292:return Rf}}function Lf(s,t){s.uniform1fv(this.addr,t)}function Pf(s,t){const e=Pi(t,this.size,2);s.uniform2fv(this.addr,e)}function If(s,t){const e=Pi(t,this.size,3);s.uniform3fv(this.addr,e)}function Df(s,t){const e=Pi(t,this.size,4);s.uniform4fv(this.addr,e)}function Uf(s,t){const e=Pi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Of(s,t){const e=Pi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Nf(s,t){const e=Pi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Bf(s,t){s.uniform1iv(this.addr,t)}function Ff(s,t){s.uniform2iv(this.addr,t)}function kf(s,t){s.uniform3iv(this.addr,t)}function zf(s,t){s.uniform4iv(this.addr,t)}function Hf(s,t){s.uniform1uiv(this.addr,t)}function Gf(s,t){s.uniform2uiv(this.addr,t)}function Vf(s,t){s.uniform3uiv(this.addr,t)}function Wf(s,t){s.uniform4uiv(this.addr,t)}function Xf(s,t,e){const n=this.cache,i=t.length,a=zs(e,i);be(n,a)||(s.uniform1iv(this.addr,a),Ae(n,a));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||mc,a[r])}function Yf(s,t,e){const n=this.cache,i=t.length,a=zs(e,i);be(n,a)||(s.uniform1iv(this.addr,a),Ae(n,a));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||_c,a[r])}function jf(s,t,e){const n=this.cache,i=t.length,a=zs(e,i);be(n,a)||(s.uniform1iv(this.addr,a),Ae(n,a));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||yc,a[r])}function qf(s,t,e){const n=this.cache,i=t.length,a=zs(e,i);be(n,a)||(s.uniform1iv(this.addr,a),Ae(n,a));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||vc,a[r])}function Kf(s){switch(s){case 5126:return Lf;case 35664:return Pf;case 35665:return If;case 35666:return Df;case 35674:return Uf;case 35675:return Of;case 35676:return Nf;case 5124:case 35670:return Bf;case 35667:case 35671:return Ff;case 35668:case 35672:return kf;case 35669:case 35673:return zf;case 5125:return Hf;case 36294:return Gf;case 36295:return Vf;case 36296:return Wf;case 35678:case 36198:case 36298:case 36306:case 35682:return Xf;case 35679:case 36299:case 36307:return Yf;case 35680:case 36300:case 36308:case 36293:return jf;case 36289:case 36303:case 36311:case 36292:return qf}}class $f{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Cf(e.type)}}class Jf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Kf(e.type)}}class Zf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let a=0,r=i.length;a!==r;++a){const o=i[a];o.setValue(t,e[o.id],n)}}}const xa=/(\w+)(\])?(\[|\.)?/g;function ro(s,t){s.seq.push(t),s.map[t.id]=t}function Qf(s,t,e){const n=s.name,i=n.length;for(xa.lastIndex=0;;){const a=xa.exec(n),r=xa.lastIndex;let o=a[1];const c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&r+2===i){ro(e,l===void 0?new $f(o,s,t):new Jf(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new Zf(o),ro(e,d)),e=d}}}class As{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const a=t.getActiveUniform(e,i),r=t.getUniformLocation(e,a.name);Qf(a,r,this)}}setValue(t,e,n,i){const a=this.map[e];a!==void 0&&a.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let a=0,r=e.length;a!==r;++a){const o=e[a],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,a=t.length;i!==a;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function oo(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const tp=37297;let ep=0;function np(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let r=i;r<a;r++){const o=r+1;n.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return n.join(`
`)}function ip(s){const t=Jt.getPrimaries(Jt.workingColorSpace),e=Jt.getPrimaries(s);let n;switch(t===e?n="":t===Ps&&e===Ls?n="LinearDisplayP3ToLinearSRGB":t===Ls&&e===Ps&&(n="LinearSRGBToLinearDisplayP3"),s){case In:case ks:return[n,"LinearTransferOETF"];case je:case Fa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function co(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const a=/ERROR: 0:(\d+)/.exec(i);if(a){const r=parseInt(a[1]);return e.toUpperCase()+`

`+i+`

`+np(s.getShaderSource(t),r)}else return i}function sp(s,t){const e=ip(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function ap(s,t){let e;switch(t){case dl:e="Linear";break;case fl:e="Reinhard";break;case pl:e="OptimizedCineon";break;case Yo:e="ACESFilmic";break;case gl:e="AgX";break;case vl:e="Neutral";break;case ml:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function rp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gi).join(`
`)}function op(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function cp(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const a=s.getActiveAttrib(t,i),r=a.name;let o=1;a.type===s.FLOAT_MAT2&&(o=2),a.type===s.FLOAT_MAT3&&(o=3),a.type===s.FLOAT_MAT4&&(o=4),e[r]={type:a.type,location:s.getAttribLocation(t,r),locationSize:o}}return e}function Gi(s){return s!==""}function lo(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ho(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const lp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Da(s){return s.replace(lp,up)}const hp=new Map;function up(s,t){let e=Ut[t];if(e===void 0){const n=hp.get(t);if(n!==void 0)e=Ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Da(e)}const dp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uo(s){return s.replace(dp,fp)}function fp(s,t,e,n){let i="";for(let a=parseInt(t);a<parseInt(e);a++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function fo(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function pp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Vo?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Wo?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===un&&(t="SHADOWMAP_TYPE_VSM"),t}function mp(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case bi:case Ai:t="ENVMAP_TYPE_CUBE";break;case Bs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function gp(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ai:t="ENVMAP_MODE_REFRACTION";break}return t}function vp(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Xo:t="ENVMAP_BLENDING_MULTIPLY";break;case hl:t="ENVMAP_BLENDING_MIX";break;case ul:t="ENVMAP_BLENDING_ADD";break}return t}function _p(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function yp(s,t,e,n){const i=s.getContext(),a=e.defines;let r=e.vertexShader,o=e.fragmentShader;const c=pp(e),l=mp(e),u=gp(e),d=vp(e),h=_p(e),m=rp(e),g=op(a),_=i.createProgram();let p,f,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Gi).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Gi).join(`
`),f.length>0&&(f+=`
`)):(p=[fo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gi).join(`
`),f=[fo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Rn?"#define TONE_MAPPING":"",e.toneMapping!==Rn?Ut.tonemapping_pars_fragment:"",e.toneMapping!==Rn?ap("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,sp("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gi).join(`
`)),r=Da(r),r=lo(r,e),r=ho(r,e),o=Da(o),o=lo(o,e),o=ho(o,e),r=uo(r),o=uo(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===Rr?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Rr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=M+p+r,A=M+f+o,I=oo(i,i.VERTEX_SHADER,S),C=oo(i,i.FRAGMENT_SHADER,A);i.attachShader(_,I),i.attachShader(_,C),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(L){if(s.debug.checkShaderErrors){const F=i.getProgramInfoLog(_).trim(),k=i.getShaderInfoLog(I).trim(),Y=i.getShaderInfoLog(C).trim();let q=!0,W=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,I,C);else{const K=co(i,I,"vertex"),X=co(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+F+`
`+K+`
`+X)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(k===""||Y==="")&&(W=!1);W&&(L.diagnostics={runnable:q,programLog:F,vertexShader:{log:k,prefix:p},fragmentShader:{log:Y,prefix:f}})}i.deleteShader(I),i.deleteShader(C),D=new As(i,_),b=cp(i,_)}let D;this.getUniforms=function(){return D===void 0&&T(this),D};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(_,tp)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ep++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=C,this}let Sp=0;class xp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),a=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Mp(t),e.set(t,n)),n}}class Mp{constructor(t){this.id=Sp++,this.code=t,this.usedTimes=0}}function Ep(s,t,e,n,i,a,r){const o=new ka,c=new xp,l=new Set,u=[],d=i.logarithmicDepthBuffer,h=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return l.add(b),b===0?"uv":`uv${b}`}function p(b,y,L,F,k){const Y=F.fog,q=k.geometry,W=b.isMeshStandardMaterial?F.environment:null,K=(b.isMeshStandardMaterial?e:t).get(b.envMap||W),X=K&&K.mapping===Bs?K.image.height:null,ut=g[b.type];b.precision!==null&&(m=i.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const dt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,mt=dt!==void 0?dt.length:0;let Ht=0;q.morphAttributes.position!==void 0&&(Ht=1),q.morphAttributes.normal!==void 0&&(Ht=2),q.morphAttributes.color!==void 0&&(Ht=3);let Yt,j,et,ft;if(ut){const jt=Je[ut];Yt=jt.vertexShader,j=jt.fragmentShader}else Yt=b.vertexShader,j=b.fragmentShader,c.update(b),et=c.getVertexShaderID(b),ft=c.getFragmentShaderID(b);const ct=s.getRenderTarget(),Nt=k.isInstancedMesh===!0,Ct=k.isBatchedMesh===!0,Gt=!!b.map,P=!!b.matcap,Vt=!!K,zt=!!b.aoMap,ne=!!b.lightMap,xt=!!b.bumpMap,Wt=!!b.normalMap,Bt=!!b.displacementMap,Lt=!!b.emissiveMap,oe=!!b.metalnessMap,R=!!b.roughnessMap,x=b.anisotropy>0,H=b.clearcoat>0,$=b.dispersion>0,Z=b.iridescence>0,Q=b.sheen>0,_t=b.transmission>0,at=x&&!!b.anisotropyMap,st=H&&!!b.clearcoatMap,Pt=H&&!!b.clearcoatNormalMap,nt=H&&!!b.clearcoatRoughnessMap,gt=Z&&!!b.iridescenceMap,kt=Z&&!!b.iridescenceThicknessMap,bt=Q&&!!b.sheenColorMap,lt=Q&&!!b.sheenRoughnessMap,It=!!b.specularMap,Dt=!!b.specularColorMap,le=!!b.specularIntensityMap,v=_t&&!!b.transmissionMap,G=_t&&!!b.thicknessMap,N=!!b.gradientMap,V=!!b.alphaMap,J=b.alphaTest>0,yt=!!b.alphaHash,Rt=!!b.extensions;let he=Rn;b.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(he=s.toneMapping);const ve={shaderID:ut,shaderType:b.type,shaderName:b.name,vertexShader:Yt,fragmentShader:j,defines:b.defines,customVertexShaderID:et,customFragmentShaderID:ft,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:Ct,batchingColor:Ct&&k._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&k.instanceColor!==null,instancingMorph:Nt&&k.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ct===null?s.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:In,alphaToCoverage:!!b.alphaToCoverage,map:Gt,matcap:P,envMap:Vt,envMapMode:Vt&&K.mapping,envMapCubeUVHeight:X,aoMap:zt,lightMap:ne,bumpMap:xt,normalMap:Wt,displacementMap:h&&Bt,emissiveMap:Lt,normalMapObjectSpace:Wt&&b.normalMapType===Ll,normalMapTangentSpace:Wt&&b.normalMapType===ec,metalnessMap:oe,roughnessMap:R,anisotropy:x,anisotropyMap:at,clearcoat:H,clearcoatMap:st,clearcoatNormalMap:Pt,clearcoatRoughnessMap:nt,dispersion:$,iridescence:Z,iridescenceMap:gt,iridescenceThicknessMap:kt,sheen:Q,sheenColorMap:bt,sheenRoughnessMap:lt,specularMap:It,specularColorMap:Dt,specularIntensityMap:le,transmission:_t,transmissionMap:v,thicknessMap:G,gradientMap:N,opaque:b.transparent===!1&&b.blending===jn&&b.alphaToCoverage===!1,alphaMap:V,alphaTest:J,alphaHash:yt,combine:b.combine,mapUv:Gt&&_(b.map.channel),aoMapUv:zt&&_(b.aoMap.channel),lightMapUv:ne&&_(b.lightMap.channel),bumpMapUv:xt&&_(b.bumpMap.channel),normalMapUv:Wt&&_(b.normalMap.channel),displacementMapUv:Bt&&_(b.displacementMap.channel),emissiveMapUv:Lt&&_(b.emissiveMap.channel),metalnessMapUv:oe&&_(b.metalnessMap.channel),roughnessMapUv:R&&_(b.roughnessMap.channel),anisotropyMapUv:at&&_(b.anisotropyMap.channel),clearcoatMapUv:st&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:lt&&_(b.sheenRoughnessMap.channel),specularMapUv:It&&_(b.specularMap.channel),specularColorMapUv:Dt&&_(b.specularColorMap.channel),specularIntensityMapUv:le&&_(b.specularIntensityMap.channel),transmissionMapUv:v&&_(b.transmissionMap.channel),thicknessMapUv:G&&_(b.thicknessMap.channel),alphaMapUv:V&&_(b.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Wt||x),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!q.attributes.uv&&(Gt||V),fog:!!Y,useFog:b.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:k.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:Ht,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:he,decodeVideoTexture:Gt&&b.map.isVideoTexture===!0&&Jt.getTransfer(b.map.colorSpace)===ie,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===pe,flipSided:b.side===ge,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Rt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Rt&&b.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ve.vertexUv1s=l.has(1),ve.vertexUv2s=l.has(2),ve.vertexUv3s=l.has(3),l.clear(),ve}function f(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)y.push(L),y.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(M(y,b),S(y,b),y.push(s.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function M(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function S(b,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.skinning&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.doubleSided&&o.enable(10),y.flipSided&&o.enable(11),y.useDepthPacking&&o.enable(12),y.dithering&&o.enable(13),y.transmission&&o.enable(14),y.sheen&&o.enable(15),y.opaque&&o.enable(16),y.pointsUvs&&o.enable(17),y.decodeVideoTexture&&o.enable(18),y.alphaToCoverage&&o.enable(19),b.push(o.mask)}function A(b){const y=g[b.type];let L;if(y){const F=Je[y];L=ah.clone(F.uniforms)}else L=b.uniforms;return L}function I(b,y){let L;for(let F=0,k=u.length;F<k;F++){const Y=u[F];if(Y.cacheKey===y){L=Y,++L.usedTimes;break}}return L===void 0&&(L=new yp(s,y,b,a),u.push(L)),L}function C(b){if(--b.usedTimes===0){const y=u.indexOf(b);u[y]=u[u.length-1],u.pop(),b.destroy()}}function T(b){c.remove(b)}function D(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:A,acquireProgram:I,releaseProgram:C,releaseShaderCache:T,programs:u,dispose:D}}function bp(){let s=new WeakMap;function t(a){let r=s.get(a);return r===void 0&&(r={},s.set(a,r)),r}function e(a){s.delete(a)}function n(a,r,o){s.get(a)[r]=o}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Ap(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function po(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function mo(){const s=[];let t=0;const e=[],n=[],i=[];function a(){t=0,e.length=0,n.length=0,i.length=0}function r(d,h,m,g,_,p){let f=s[t];return f===void 0?(f={id:d.id,object:d,geometry:h,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},s[t]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=m,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=p),t++,f}function o(d,h,m,g,_,p){const f=r(d,h,m,g,_,p);m.transmission>0?n.push(f):m.transparent===!0?i.push(f):e.push(f)}function c(d,h,m,g,_,p){const f=r(d,h,m,g,_,p);m.transmission>0?n.unshift(f):m.transparent===!0?i.unshift(f):e.unshift(f)}function l(d,h){e.length>1&&e.sort(d||Ap),n.length>1&&n.sort(h||po),i.length>1&&i.sort(h||po)}function u(){for(let d=t,h=s.length;d<h;d++){const m=s[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:a,push:o,unshift:c,finish:u,sort:l}}function Tp(){let s=new WeakMap;function t(n,i){const a=s.get(n);let r;return a===void 0?(r=new mo,s.set(n,[r])):i>=a.length?(r=new mo,a.push(r)):r=a[i],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function wp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new w,color:new tt};break;case"SpotLight":e={position:new w,direction:new w,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new w,color:new tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new w,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":e={color:new tt,position:new w,halfWidth:new w,halfHeight:new w};break}return s[t.id]=e,e}}}function Rp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Cp=0;function Lp(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Pp(s){const t=new wp,e=Rp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new w);const i=new w,a=new te,r=new te;function o(l){let u=0,d=0,h=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let m=0,g=0,_=0,p=0,f=0,M=0,S=0,A=0,I=0,C=0,T=0;l.sort(Lp);for(let b=0,y=l.length;b<y;b++){const L=l[b],F=L.color,k=L.intensity,Y=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=F.r*k,d+=F.g*k,h+=F.b*k;else if(L.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(L.sh.coefficients[W],k);T++}else if(L.isDirectionalLight){const W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const K=L.shadow,X=e.get(L);X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,n.directionalShadow[m]=X,n.directionalShadowMap[m]=q,n.directionalShadowMatrix[m]=L.shadow.matrix,M++}n.directional[m]=W,m++}else if(L.isSpotLight){const W=t.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(F).multiplyScalar(k),W.distance=Y,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,n.spot[_]=W;const K=L.shadow;if(L.map&&(n.spotLightMap[I]=L.map,I++,K.updateMatrices(L),L.castShadow&&C++),n.spotLightMatrix[_]=K.matrix,L.castShadow){const X=e.get(L);X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=q,A++}_++}else if(L.isRectAreaLight){const W=t.get(L);W.color.copy(F).multiplyScalar(k),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),n.rectArea[p]=W,p++}else if(L.isPointLight){const W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){const K=L.shadow,X=e.get(L);X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,X.shadowCameraNear=K.camera.near,X.shadowCameraFar=K.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=L.shadow.matrix,S++}n.point[g]=W,g++}else if(L.isHemisphereLight){const W=t.get(L);W.skyColor.copy(L.color).multiplyScalar(k),W.groundColor.copy(L.groundColor).multiplyScalar(k),n.hemi[f]=W,f++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=rt.LTC_FLOAT_1,n.rectAreaLTC2=rt.LTC_FLOAT_2):(n.rectAreaLTC1=rt.LTC_HALF_1,n.rectAreaLTC2=rt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const D=n.hash;(D.directionalLength!==m||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==p||D.hemiLength!==f||D.numDirectionalShadows!==M||D.numPointShadows!==S||D.numSpotShadows!==A||D.numSpotMaps!==I||D.numLightProbes!==T)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=A+I-C,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=T,D.directionalLength=m,D.pointLength=g,D.spotLength=_,D.rectAreaLength=p,D.hemiLength=f,D.numDirectionalShadows=M,D.numPointShadows=S,D.numSpotShadows=A,D.numSpotMaps=I,D.numLightProbes=T,n.version=Cp++)}function c(l,u){let d=0,h=0,m=0,g=0,_=0;const p=u.matrixWorldInverse;for(let f=0,M=l.length;f<M;f++){const S=l[f];if(S.isDirectionalLight){const A=n.directional[d];A.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(i),A.direction.transformDirection(p),d++}else if(S.isSpotLight){const A=n.spot[m];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(i),A.direction.transformDirection(p),m++}else if(S.isRectAreaLight){const A=n.rectArea[g];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),r.identity(),a.copy(S.matrixWorld),a.premultiply(p),r.extractRotation(a),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(r),A.halfHeight.applyMatrix4(r),g++}else if(S.isPointLight){const A=n.point[h];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),h++}else if(S.isHemisphereLight){const A=n.hemi[_];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(p),_++}}}return{setup:o,setupView:c,state:n}}function go(s){const t=new Pp(s),e=[],n=[];function i(u){l.camera=u,e.length=0,n.length=0}function a(u){e.push(u)}function r(u){n.push(u)}function o(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:a,pushShadow:r}}function Ip(s){let t=new WeakMap;function e(i,a=0){const r=t.get(i);let o;return r===void 0?(o=new go(s),t.set(i,[o])):a>=r.length?(o=new go(s),r.push(o)):o=r[a],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Dp extends Zn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Up extends Zn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Op=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Np=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Bp(s,t,e){let n=new za;const i=new Mt,a=new Mt,r=new ae,o=new Dp({depthPacking:Cl}),c=new Up,l={},u=e.maxTextureSize,d={[Cn]:ge,[ge]:Cn,[pe]:pe},h=new Ee({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:Op,fragmentShader:Np}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new me;g.setAttribute("position",new se(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ot(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vo;let f=this.type;this.render=function(C,T,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const b=s.getRenderTarget(),y=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),F=s.state;F.setBlending(wn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const k=f!==un&&this.type===un,Y=f===un&&this.type!==un;for(let q=0,W=C.length;q<W;q++){const K=C[q],X=K.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const ut=X.getFrameExtents();if(i.multiply(ut),a.copy(X.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/ut.x),i.x=a.x*ut.x,X.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/ut.y),i.y=a.y*ut.y,X.mapSize.y=a.y)),X.map===null||k===!0||Y===!0){const mt=this.type!==un?{minFilter:Be,magFilter:Be}:{};X.map!==null&&X.map.dispose(),X.map=new qn(i.x,i.y,mt),X.map.texture.name=K.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();const dt=X.getViewportCount();for(let mt=0;mt<dt;mt++){const Ht=X.getViewport(mt);r.set(a.x*Ht.x,a.y*Ht.y,a.x*Ht.z,a.y*Ht.w),F.viewport(r),X.updateMatrices(K,mt),n=X.getFrustum(),A(T,D,X.camera,K,this.type)}X.isPointLightShadow!==!0&&this.type===un&&M(X,D),X.needsUpdate=!1}f=this.type,p.needsUpdate=!1,s.setRenderTarget(b,y,L)};function M(C,T){const D=t.update(_);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new qn(i.x,i.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(T,null,D,h,_,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(T,null,D,m,_,null)}function S(C,T,D,b){let y=null;const L=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)y=L;else if(y=D.isPointLight===!0?c:o,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const F=y.uuid,k=T.uuid;let Y=l[F];Y===void 0&&(Y={},l[F]=Y);let q=Y[k];q===void 0&&(q=y.clone(),Y[k]=q,T.addEventListener("dispose",I)),y=q}if(y.visible=T.visible,y.wireframe=T.wireframe,b===un?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:d[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const F=s.properties.get(y);F.light=D}return y}function A(C,T,D,b,y){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===un)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const k=t.update(C),Y=C.material;if(Array.isArray(Y)){const q=k.groups;for(let W=0,K=q.length;W<K;W++){const X=q[W],ut=Y[X.materialIndex];if(ut&&ut.visible){const dt=S(C,ut,b,y);C.onBeforeShadow(s,C,T,D,k,dt,X),s.renderBufferDirect(D,null,k,dt,C,X),C.onAfterShadow(s,C,T,D,k,dt,X)}}}else if(Y.visible){const q=S(C,Y,b,y);C.onBeforeShadow(s,C,T,D,k,q,null),s.renderBufferDirect(D,null,k,q,C,null),C.onAfterShadow(s,C,T,D,k,q,null)}}const F=C.children;for(let k=0,Y=F.length;k<Y;k++)A(F[k],T,D,b,y)}function I(C){C.target.removeEventListener("dispose",I);for(const D in l){const b=l[D],y=C.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}function Fp(s){function t(){let v=!1;const G=new ae;let N=null;const V=new ae(0,0,0,0);return{setMask:function(J){N!==J&&!v&&(s.colorMask(J,J,J,J),N=J)},setLocked:function(J){v=J},setClear:function(J,yt,Rt,he,ve){ve===!0&&(J*=he,yt*=he,Rt*=he),G.set(J,yt,Rt,he),V.equals(G)===!1&&(s.clearColor(J,yt,Rt,he),V.copy(G))},reset:function(){v=!1,N=null,V.set(-1,0,0,0)}}}function e(){let v=!1,G=null,N=null,V=null;return{setTest:function(J){J?ft(s.DEPTH_TEST):ct(s.DEPTH_TEST)},setMask:function(J){G!==J&&!v&&(s.depthMask(J),G=J)},setFunc:function(J){if(N!==J){switch(J){case il:s.depthFunc(s.NEVER);break;case sl:s.depthFunc(s.ALWAYS);break;case al:s.depthFunc(s.LESS);break;case Ts:s.depthFunc(s.LEQUAL);break;case rl:s.depthFunc(s.EQUAL);break;case ol:s.depthFunc(s.GEQUAL);break;case cl:s.depthFunc(s.GREATER);break;case ll:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}N=J}},setLocked:function(J){v=J},setClear:function(J){V!==J&&(s.clearDepth(J),V=J)},reset:function(){v=!1,G=null,N=null,V=null}}}function n(){let v=!1,G=null,N=null,V=null,J=null,yt=null,Rt=null,he=null,ve=null;return{setTest:function(jt){v||(jt?ft(s.STENCIL_TEST):ct(s.STENCIL_TEST))},setMask:function(jt){G!==jt&&!v&&(s.stencilMask(jt),G=jt)},setFunc:function(jt,_e,ye){(N!==jt||V!==_e||J!==ye)&&(s.stencilFunc(jt,_e,ye),N=jt,V=_e,J=ye)},setOp:function(jt,_e,ye){(yt!==jt||Rt!==_e||he!==ye)&&(s.stencilOp(jt,_e,ye),yt=jt,Rt=_e,he=ye)},setLocked:function(jt){v=jt},setClear:function(jt){ve!==jt&&(s.clearStencil(jt),ve=jt)},reset:function(){v=!1,G=null,N=null,V=null,J=null,yt=null,Rt=null,he=null,ve=null}}}const i=new t,a=new e,r=new n,o=new WeakMap,c=new WeakMap;let l={},u={},d=new WeakMap,h=[],m=null,g=!1,_=null,p=null,f=null,M=null,S=null,A=null,I=null,C=new tt(0,0,0),T=0,D=!1,b=null,y=null,L=null,F=null,k=null;const Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,W=0;const K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(K)[1]),q=W>=1):K.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),q=W>=2);let X=null,ut={};const dt=s.getParameter(s.SCISSOR_BOX),mt=s.getParameter(s.VIEWPORT),Ht=new ae().fromArray(dt),Yt=new ae().fromArray(mt);function j(v,G,N,V){const J=new Uint8Array(4),yt=s.createTexture();s.bindTexture(v,yt),s.texParameteri(v,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(v,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Rt=0;Rt<N;Rt++)v===s.TEXTURE_3D||v===s.TEXTURE_2D_ARRAY?s.texImage3D(G,0,s.RGBA,1,1,V,0,s.RGBA,s.UNSIGNED_BYTE,J):s.texImage2D(G+Rt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,J);return yt}const et={};et[s.TEXTURE_2D]=j(s.TEXTURE_2D,s.TEXTURE_2D,1),et[s.TEXTURE_CUBE_MAP]=j(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[s.TEXTURE_2D_ARRAY]=j(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),et[s.TEXTURE_3D]=j(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),a.setClear(1),r.setClear(0),ft(s.DEPTH_TEST),a.setFunc(Ts),xt(!1),Wt(Ja),ft(s.CULL_FACE),zt(wn);function ft(v){l[v]!==!0&&(s.enable(v),l[v]=!0)}function ct(v){l[v]!==!1&&(s.disable(v),l[v]=!1)}function Nt(v,G){return u[v]!==G?(s.bindFramebuffer(v,G),u[v]=G,v===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=G),v===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=G),!0):!1}function Ct(v,G){let N=h,V=!1;if(v){N=d.get(G),N===void 0&&(N=[],d.set(G,N));const J=v.textures;if(N.length!==J.length||N[0]!==s.COLOR_ATTACHMENT0){for(let yt=0,Rt=J.length;yt<Rt;yt++)N[yt]=s.COLOR_ATTACHMENT0+yt;N.length=J.length,V=!0}}else N[0]!==s.BACK&&(N[0]=s.BACK,V=!0);V&&s.drawBuffers(N)}function Gt(v){return m!==v?(s.useProgram(v),m=v,!0):!1}const P={[Vn]:s.FUNC_ADD,[zc]:s.FUNC_SUBTRACT,[Hc]:s.FUNC_REVERSE_SUBTRACT};P[Gc]=s.MIN,P[Vc]=s.MAX;const Vt={[Wc]:s.ZERO,[Xc]:s.ONE,[Yc]:s.SRC_COLOR,[wa]:s.SRC_ALPHA,[Zc]:s.SRC_ALPHA_SATURATE,[$c]:s.DST_COLOR,[qc]:s.DST_ALPHA,[jc]:s.ONE_MINUS_SRC_COLOR,[Ra]:s.ONE_MINUS_SRC_ALPHA,[Jc]:s.ONE_MINUS_DST_COLOR,[Kc]:s.ONE_MINUS_DST_ALPHA,[Qc]:s.CONSTANT_COLOR,[tl]:s.ONE_MINUS_CONSTANT_COLOR,[el]:s.CONSTANT_ALPHA,[nl]:s.ONE_MINUS_CONSTANT_ALPHA};function zt(v,G,N,V,J,yt,Rt,he,ve,jt){if(v===wn){g===!0&&(ct(s.BLEND),g=!1);return}if(g===!1&&(ft(s.BLEND),g=!0),v!==kc){if(v!==_||jt!==D){if((p!==Vn||S!==Vn)&&(s.blendEquation(s.FUNC_ADD),p=Vn,S=Vn),jt)switch(v){case jn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qt:s.blendFunc(s.ONE,s.ONE);break;case Za:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Qa:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}else switch(v){case jn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qt:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Za:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Qa:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}f=null,M=null,A=null,I=null,C.set(0,0,0),T=0,_=v,D=jt}return}J=J||G,yt=yt||N,Rt=Rt||V,(G!==p||J!==S)&&(s.blendEquationSeparate(P[G],P[J]),p=G,S=J),(N!==f||V!==M||yt!==A||Rt!==I)&&(s.blendFuncSeparate(Vt[N],Vt[V],Vt[yt],Vt[Rt]),f=N,M=V,A=yt,I=Rt),(he.equals(C)===!1||ve!==T)&&(s.blendColor(he.r,he.g,he.b,ve),C.copy(he),T=ve),_=v,D=!1}function ne(v,G){v.side===pe?ct(s.CULL_FACE):ft(s.CULL_FACE);let N=v.side===ge;G&&(N=!N),xt(N),v.blending===jn&&v.transparent===!1?zt(wn):zt(v.blending,v.blendEquation,v.blendSrc,v.blendDst,v.blendEquationAlpha,v.blendSrcAlpha,v.blendDstAlpha,v.blendColor,v.blendAlpha,v.premultipliedAlpha),a.setFunc(v.depthFunc),a.setTest(v.depthTest),a.setMask(v.depthWrite),i.setMask(v.colorWrite);const V=v.stencilWrite;r.setTest(V),V&&(r.setMask(v.stencilWriteMask),r.setFunc(v.stencilFunc,v.stencilRef,v.stencilFuncMask),r.setOp(v.stencilFail,v.stencilZFail,v.stencilZPass)),Lt(v.polygonOffset,v.polygonOffsetFactor,v.polygonOffsetUnits),v.alphaToCoverage===!0?ft(s.SAMPLE_ALPHA_TO_COVERAGE):ct(s.SAMPLE_ALPHA_TO_COVERAGE)}function xt(v){b!==v&&(v?s.frontFace(s.CW):s.frontFace(s.CCW),b=v)}function Wt(v){v!==Bc?(ft(s.CULL_FACE),v!==y&&(v===Ja?s.cullFace(s.BACK):v===Fc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ct(s.CULL_FACE),y=v}function Bt(v){v!==L&&(q&&s.lineWidth(v),L=v)}function Lt(v,G,N){v?(ft(s.POLYGON_OFFSET_FILL),(F!==G||k!==N)&&(s.polygonOffset(G,N),F=G,k=N)):ct(s.POLYGON_OFFSET_FILL)}function oe(v){v?ft(s.SCISSOR_TEST):ct(s.SCISSOR_TEST)}function R(v){v===void 0&&(v=s.TEXTURE0+Y-1),X!==v&&(s.activeTexture(v),X=v)}function x(v,G,N){N===void 0&&(X===null?N=s.TEXTURE0+Y-1:N=X);let V=ut[N];V===void 0&&(V={type:void 0,texture:void 0},ut[N]=V),(V.type!==v||V.texture!==G)&&(X!==N&&(s.activeTexture(N),X=N),s.bindTexture(v,G||et[v]),V.type=v,V.texture=G)}function H(){const v=ut[X];v!==void 0&&v.type!==void 0&&(s.bindTexture(v.type,null),v.type=void 0,v.texture=void 0)}function $(){try{s.compressedTexImage2D.apply(s,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Z(){try{s.compressedTexImage3D.apply(s,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Q(){try{s.texSubImage2D.apply(s,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function _t(){try{s.texSubImage3D.apply(s,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function at(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function st(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Pt(){try{s.texStorage2D.apply(s,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function nt(){try{s.texStorage3D.apply(s,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function gt(){try{s.texImage2D.apply(s,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function kt(){try{s.texImage3D.apply(s,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function bt(v){Ht.equals(v)===!1&&(s.scissor(v.x,v.y,v.z,v.w),Ht.copy(v))}function lt(v){Yt.equals(v)===!1&&(s.viewport(v.x,v.y,v.z,v.w),Yt.copy(v))}function It(v,G){let N=c.get(G);N===void 0&&(N=new WeakMap,c.set(G,N));let V=N.get(v);V===void 0&&(V=s.getUniformBlockIndex(G,v.name),N.set(v,V))}function Dt(v,G){const V=c.get(G).get(v);o.get(G)!==V&&(s.uniformBlockBinding(G,V,v.__bindingPointIndex),o.set(G,V))}function le(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},X=null,ut={},u={},d=new WeakMap,h=[],m=null,g=!1,_=null,p=null,f=null,M=null,S=null,A=null,I=null,C=new tt(0,0,0),T=0,D=!1,b=null,y=null,L=null,F=null,k=null,Ht.set(0,0,s.canvas.width,s.canvas.height),Yt.set(0,0,s.canvas.width,s.canvas.height),i.reset(),a.reset(),r.reset()}return{buffers:{color:i,depth:a,stencil:r},enable:ft,disable:ct,bindFramebuffer:Nt,drawBuffers:Ct,useProgram:Gt,setBlending:zt,setMaterial:ne,setFlipSided:xt,setCullFace:Wt,setLineWidth:Bt,setPolygonOffset:Lt,setScissorTest:oe,activeTexture:R,bindTexture:x,unbindTexture:H,compressedTexImage2D:$,compressedTexImage3D:Z,texImage2D:gt,texImage3D:kt,updateUBOMapping:It,uniformBlockBinding:Dt,texStorage2D:Pt,texStorage3D:nt,texSubImage2D:Q,texSubImage3D:_t,compressedTexSubImage2D:at,compressedTexSubImage3D:st,scissor:bt,viewport:lt,reset:le}}function kp(s,t,e,n,i,a,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Mt,u=new WeakMap;let d;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,x){return m?new OffscreenCanvas(R,x):Ds("canvas")}function _(R,x,H){let $=1;const Z=oe(R);if((Z.width>H||Z.height>H)&&($=H/Math.max(Z.width,Z.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Q=Math.floor($*Z.width),_t=Math.floor($*Z.height);d===void 0&&(d=g(Q,_t));const at=x?g(Q,_t):d;return at.width=Q,at.height=_t,at.getContext("2d").drawImage(R,0,0,Q,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Q+"x"+_t+")."),at}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function p(R){return R.generateMipmaps&&R.minFilter!==Be&&R.minFilter!==We}function f(R){s.generateMipmap(R)}function M(R,x,H,$,Z=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Q=x;if(x===s.RED&&(H===s.FLOAT&&(Q=s.R32F),H===s.HALF_FLOAT&&(Q=s.R16F),H===s.UNSIGNED_BYTE&&(Q=s.R8)),x===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(Q=s.R8UI),H===s.UNSIGNED_SHORT&&(Q=s.R16UI),H===s.UNSIGNED_INT&&(Q=s.R32UI),H===s.BYTE&&(Q=s.R8I),H===s.SHORT&&(Q=s.R16I),H===s.INT&&(Q=s.R32I)),x===s.RG&&(H===s.FLOAT&&(Q=s.RG32F),H===s.HALF_FLOAT&&(Q=s.RG16F),H===s.UNSIGNED_BYTE&&(Q=s.RG8)),x===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(Q=s.RG8UI),H===s.UNSIGNED_SHORT&&(Q=s.RG16UI),H===s.UNSIGNED_INT&&(Q=s.RG32UI),H===s.BYTE&&(Q=s.RG8I),H===s.SHORT&&(Q=s.RG16I),H===s.INT&&(Q=s.RG32I)),x===s.RGB&&H===s.UNSIGNED_INT_5_9_9_9_REV&&(Q=s.RGB9_E5),x===s.RGBA){const _t=Z?Cs:Jt.getTransfer($);H===s.FLOAT&&(Q=s.RGBA32F),H===s.HALF_FLOAT&&(Q=s.RGBA16F),H===s.UNSIGNED_BYTE&&(Q=_t===ie?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function S(R,x){let H;return R?x===null||x===Ti||x===wi?H=s.DEPTH24_STENCIL8:x===dn?H=s.DEPTH32F_STENCIL8:x===Rs&&(H=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ti||x===wi?H=s.DEPTH_COMPONENT24:x===dn?H=s.DEPTH_COMPONENT32F:x===Rs&&(H=s.DEPTH_COMPONENT16),H}function A(R,x){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Be&&R.minFilter!==We?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function I(R){const x=R.target;x.removeEventListener("dispose",I),T(x),x.isVideoTexture&&u.delete(x)}function C(R){const x=R.target;x.removeEventListener("dispose",C),b(x)}function T(R){const x=n.get(R);if(x.__webglInit===void 0)return;const H=R.source,$=h.get(H);if($){const Z=$[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&D(R),Object.keys($).length===0&&h.delete(H)}n.remove(R)}function D(R){const x=n.get(R);s.deleteTexture(x.__webglTexture);const H=R.source,$=h.get(H);delete $[x.__cacheKey],r.memory.textures--}function b(R){const x=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let Z=0;Z<x.__webglFramebuffer[$].length;Z++)s.deleteFramebuffer(x.__webglFramebuffer[$][Z]);else s.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)s.deleteFramebuffer(x.__webglFramebuffer[$]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const H=R.textures;for(let $=0,Z=H.length;$<Z;$++){const Q=n.get(H[$]);Q.__webglTexture&&(s.deleteTexture(Q.__webglTexture),r.memory.textures--),n.remove(H[$])}n.remove(R)}let y=0;function L(){y=0}function F(){const R=y;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),y+=1,R}function k(R){const x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function Y(R,x){const H=n.get(R);if(R.isVideoTexture&&Bt(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){const $=R.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Yt(H,R,x);return}}e.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+x)}function q(R,x){const H=n.get(R);if(R.version>0&&H.__version!==R.version){Yt(H,R,x);return}e.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+x)}function W(R,x){const H=n.get(R);if(R.version>0&&H.__version!==R.version){Yt(H,R,x);return}e.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+x)}function K(R,x){const H=n.get(R);if(R.version>0&&H.__version!==R.version){j(H,R,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+x)}const X={[ws]:s.REPEAT,[Tn]:s.CLAMP_TO_EDGE,[Pa]:s.MIRRORED_REPEAT},ut={[Be]:s.NEAREST,[_l]:s.NEAREST_MIPMAP_NEAREST,[$i]:s.NEAREST_MIPMAP_LINEAR,[We]:s.LINEAR,[Xs]:s.LINEAR_MIPMAP_NEAREST,[Xn]:s.LINEAR_MIPMAP_LINEAR},dt={[Pl]:s.NEVER,[Bl]:s.ALWAYS,[Il]:s.LESS,[nc]:s.LEQUAL,[Dl]:s.EQUAL,[Nl]:s.GEQUAL,[Ul]:s.GREATER,[Ol]:s.NOTEQUAL};function mt(R,x){if(x.type===dn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===We||x.magFilter===Xs||x.magFilter===$i||x.magFilter===Xn||x.minFilter===We||x.minFilter===Xs||x.minFilter===$i||x.minFilter===Xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,X[x.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,X[x.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,X[x.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,ut[x.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,ut[x.minFilter]),x.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,dt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Be||x.minFilter!==$i&&x.minFilter!==Xn||x.type===dn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ht(R,x){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",I));const $=x.source;let Z=h.get($);Z===void 0&&(Z={},h.set($,Z));const Q=k(x);if(Q!==R.__cacheKey){Z[Q]===void 0&&(Z[Q]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,H=!0),Z[Q].usedTimes++;const _t=Z[R.__cacheKey];_t!==void 0&&(Z[R.__cacheKey].usedTimes--,_t.usedTimes===0&&D(x)),R.__cacheKey=Q,R.__webglTexture=Z[Q].texture}return H}function Yt(R,x,H){let $=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&($=s.TEXTURE_3D);const Z=Ht(R,x),Q=x.source;e.bindTexture($,R.__webglTexture,s.TEXTURE0+H);const _t=n.get(Q);if(Q.version!==_t.__version||Z===!0){e.activeTexture(s.TEXTURE0+H);const at=Jt.getPrimaries(Jt.workingColorSpace),st=x.colorSpace===An?null:Jt.getPrimaries(x.colorSpace),Pt=x.colorSpace===An||at===st?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let nt=_(x.image,!1,i.maxTextureSize);nt=Lt(x,nt);const gt=a.convert(x.format,x.colorSpace),kt=a.convert(x.type);let bt=M(x.internalFormat,gt,kt,x.colorSpace,x.isVideoTexture);mt($,x);let lt;const It=x.mipmaps,Dt=x.isVideoTexture!==!0,le=_t.__version===void 0||Z===!0,v=Q.dataReady,G=A(x,nt);if(x.isDepthTexture)bt=S(x.format===Ri,x.type),le&&(Dt?e.texStorage2D(s.TEXTURE_2D,1,bt,nt.width,nt.height):e.texImage2D(s.TEXTURE_2D,0,bt,nt.width,nt.height,0,gt,kt,null));else if(x.isDataTexture)if(It.length>0){Dt&&le&&e.texStorage2D(s.TEXTURE_2D,G,bt,It[0].width,It[0].height);for(let N=0,V=It.length;N<V;N++)lt=It[N],Dt?v&&e.texSubImage2D(s.TEXTURE_2D,N,0,0,lt.width,lt.height,gt,kt,lt.data):e.texImage2D(s.TEXTURE_2D,N,bt,lt.width,lt.height,0,gt,kt,lt.data);x.generateMipmaps=!1}else Dt?(le&&e.texStorage2D(s.TEXTURE_2D,G,bt,nt.width,nt.height),v&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,nt.width,nt.height,gt,kt,nt.data)):e.texImage2D(s.TEXTURE_2D,0,bt,nt.width,nt.height,0,gt,kt,nt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Dt&&le&&e.texStorage3D(s.TEXTURE_2D_ARRAY,G,bt,It[0].width,It[0].height,nt.depth);for(let N=0,V=It.length;N<V;N++)if(lt=It[N],x.format!==Qe)if(gt!==null)if(Dt){if(v)if(x.layerUpdates.size>0){for(const J of x.layerUpdates){const yt=lt.width*lt.height;e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,N,0,0,J,lt.width,lt.height,1,gt,lt.data.slice(yt*J,yt*(J+1)),0,0)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,N,0,0,0,lt.width,lt.height,nt.depth,gt,lt.data,0,0)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,N,bt,lt.width,lt.height,nt.depth,0,lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?v&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,N,0,0,0,lt.width,lt.height,nt.depth,gt,kt,lt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,N,bt,lt.width,lt.height,nt.depth,0,gt,kt,lt.data)}else{Dt&&le&&e.texStorage2D(s.TEXTURE_2D,G,bt,It[0].width,It[0].height);for(let N=0,V=It.length;N<V;N++)lt=It[N],x.format!==Qe?gt!==null?Dt?v&&e.compressedTexSubImage2D(s.TEXTURE_2D,N,0,0,lt.width,lt.height,gt,lt.data):e.compressedTexImage2D(s.TEXTURE_2D,N,bt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?v&&e.texSubImage2D(s.TEXTURE_2D,N,0,0,lt.width,lt.height,gt,kt,lt.data):e.texImage2D(s.TEXTURE_2D,N,bt,lt.width,lt.height,0,gt,kt,lt.data)}else if(x.isDataArrayTexture)if(Dt){if(le&&e.texStorage3D(s.TEXTURE_2D_ARRAY,G,bt,nt.width,nt.height,nt.depth),v)if(x.layerUpdates.size>0){let N;switch(kt){case s.UNSIGNED_BYTE:switch(gt){case s.ALPHA:N=1;break;case s.LUMINANCE:N=1;break;case s.LUMINANCE_ALPHA:N=2;break;case s.RGB:N=3;break;case s.RGBA:N=4;break;default:throw new Error(`Unknown texel size for format ${gt}.`)}break;case s.UNSIGNED_SHORT_4_4_4_4:case s.UNSIGNED_SHORT_5_5_5_1:case s.UNSIGNED_SHORT_5_6_5:N=1;break;default:throw new Error(`Unknown texel size for type ${kt}.`)}const V=nt.width*nt.height*N;for(const J of x.layerUpdates)e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,nt.width,nt.height,1,gt,kt,nt.data.slice(V*J,V*(J+1)));x.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,gt,kt,nt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,bt,nt.width,nt.height,nt.depth,0,gt,kt,nt.data);else if(x.isData3DTexture)Dt?(le&&e.texStorage3D(s.TEXTURE_3D,G,bt,nt.width,nt.height,nt.depth),v&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,gt,kt,nt.data)):e.texImage3D(s.TEXTURE_3D,0,bt,nt.width,nt.height,nt.depth,0,gt,kt,nt.data);else if(x.isFramebufferTexture){if(le)if(Dt)e.texStorage2D(s.TEXTURE_2D,G,bt,nt.width,nt.height);else{let N=nt.width,V=nt.height;for(let J=0;J<G;J++)e.texImage2D(s.TEXTURE_2D,J,bt,N,V,0,gt,kt,null),N>>=1,V>>=1}}else if(It.length>0){if(Dt&&le){const N=oe(It[0]);e.texStorage2D(s.TEXTURE_2D,G,bt,N.width,N.height)}for(let N=0,V=It.length;N<V;N++)lt=It[N],Dt?v&&e.texSubImage2D(s.TEXTURE_2D,N,0,0,gt,kt,lt):e.texImage2D(s.TEXTURE_2D,N,bt,gt,kt,lt);x.generateMipmaps=!1}else if(Dt){if(le){const N=oe(nt);e.texStorage2D(s.TEXTURE_2D,G,bt,N.width,N.height)}v&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,gt,kt,nt)}else e.texImage2D(s.TEXTURE_2D,0,bt,gt,kt,nt);p(x)&&f($),_t.__version=Q.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function j(R,x,H){if(x.image.length!==6)return;const $=Ht(R,x),Z=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+H);const Q=n.get(Z);if(Z.version!==Q.__version||$===!0){e.activeTexture(s.TEXTURE0+H);const _t=Jt.getPrimaries(Jt.workingColorSpace),at=x.colorSpace===An?null:Jt.getPrimaries(x.colorSpace),st=x.colorSpace===An||_t===at?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);const Pt=x.isCompressedTexture||x.image[0].isCompressedTexture,nt=x.image[0]&&x.image[0].isDataTexture,gt=[];for(let V=0;V<6;V++)!Pt&&!nt?gt[V]=_(x.image[V],!0,i.maxCubemapSize):gt[V]=nt?x.image[V].image:x.image[V],gt[V]=Lt(x,gt[V]);const kt=gt[0],bt=a.convert(x.format,x.colorSpace),lt=a.convert(x.type),It=M(x.internalFormat,bt,lt,x.colorSpace),Dt=x.isVideoTexture!==!0,le=Q.__version===void 0||$===!0,v=Z.dataReady;let G=A(x,kt);mt(s.TEXTURE_CUBE_MAP,x);let N;if(Pt){Dt&&le&&e.texStorage2D(s.TEXTURE_CUBE_MAP,G,It,kt.width,kt.height);for(let V=0;V<6;V++){N=gt[V].mipmaps;for(let J=0;J<N.length;J++){const yt=N[J];x.format!==Qe?bt!==null?Dt?v&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,J,0,0,yt.width,yt.height,bt,yt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,J,It,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?v&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,J,0,0,yt.width,yt.height,bt,lt,yt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,J,It,yt.width,yt.height,0,bt,lt,yt.data)}}}else{if(N=x.mipmaps,Dt&&le){N.length>0&&G++;const V=oe(gt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,G,It,V.width,V.height)}for(let V=0;V<6;V++)if(nt){Dt?v&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,gt[V].width,gt[V].height,bt,lt,gt[V].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,It,gt[V].width,gt[V].height,0,bt,lt,gt[V].data);for(let J=0;J<N.length;J++){const Rt=N[J].image[V].image;Dt?v&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,J+1,0,0,Rt.width,Rt.height,bt,lt,Rt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,J+1,It,Rt.width,Rt.height,0,bt,lt,Rt.data)}}else{Dt?v&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,bt,lt,gt[V]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,It,bt,lt,gt[V]);for(let J=0;J<N.length;J++){const yt=N[J];Dt?v&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,J+1,0,0,bt,lt,yt.image[V]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,J+1,It,bt,lt,yt.image[V])}}}p(x)&&f(s.TEXTURE_CUBE_MAP),Q.__version=Z.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function et(R,x,H,$,Z,Q){const _t=a.convert(H.format,H.colorSpace),at=a.convert(H.type),st=M(H.internalFormat,_t,at,H.colorSpace);if(!n.get(x).__hasExternalTextures){const nt=Math.max(1,x.width>>Q),gt=Math.max(1,x.height>>Q);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?e.texImage3D(Z,Q,st,nt,gt,x.depth,0,_t,at,null):e.texImage2D(Z,Q,st,nt,gt,0,_t,at,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),Wt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,Z,n.get(H).__webglTexture,0,xt(x)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,Z,n.get(H).__webglTexture,Q),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ft(R,x,H){if(s.bindRenderbuffer(s.RENDERBUFFER,R),x.depthBuffer){const $=x.depthTexture,Z=$&&$.isDepthTexture?$.type:null,Q=S(x.stencilBuffer,Z),_t=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=xt(x);Wt(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,at,Q,x.width,x.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,at,Q,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,Q,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,_t,s.RENDERBUFFER,R)}else{const $=x.textures;for(let Z=0;Z<$.length;Z++){const Q=$[Z],_t=a.convert(Q.format,Q.colorSpace),at=a.convert(Q.type),st=M(Q.internalFormat,_t,at,Q.colorSpace),Pt=xt(x);H&&Wt(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pt,st,x.width,x.height):Wt(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pt,st,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,st,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ct(R,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y(x.depthTexture,0);const $=n.get(x.depthTexture).__webglTexture,Z=xt(x);if(x.depthTexture.format===Mi)Wt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0);else if(x.depthTexture.format===Ri)Wt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Nt(R){const x=n.get(R),H=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!x.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");ct(x.__webglFramebuffer,R)}else if(H){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]=s.createRenderbuffer(),ft(x.__webglDepthbuffer[$],R,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=s.createRenderbuffer(),ft(x.__webglDepthbuffer,R,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ct(R,x,H){const $=n.get(R);x!==void 0&&et($.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&Nt(R)}function Gt(R){const x=R.texture,H=n.get(R),$=n.get(x);R.addEventListener("dispose",C);const Z=R.textures,Q=R.isWebGLCubeRenderTarget===!0,_t=Z.length>1;if(_t||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=x.version,r.memory.textures++),Q){H.__webglFramebuffer=[];for(let at=0;at<6;at++)if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer[at]=[];for(let st=0;st<x.mipmaps.length;st++)H.__webglFramebuffer[at][st]=s.createFramebuffer()}else H.__webglFramebuffer[at]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer=[];for(let at=0;at<x.mipmaps.length;at++)H.__webglFramebuffer[at]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(_t)for(let at=0,st=Z.length;at<st;at++){const Pt=n.get(Z[at]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=s.createTexture(),r.memory.textures++)}if(R.samples>0&&Wt(R)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let at=0;at<Z.length;at++){const st=Z[at];H.__webglColorRenderbuffer[at]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[at]);const Pt=a.convert(st.format,st.colorSpace),nt=a.convert(st.type),gt=M(st.internalFormat,Pt,nt,st.colorSpace,R.isXRRenderTarget===!0),kt=xt(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,kt,gt,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,H.__webglColorRenderbuffer[at])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),ft(H.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),mt(s.TEXTURE_CUBE_MAP,x);for(let at=0;at<6;at++)if(x.mipmaps&&x.mipmaps.length>0)for(let st=0;st<x.mipmaps.length;st++)et(H.__webglFramebuffer[at][st],R,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,st);else et(H.__webglFramebuffer[at],R,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);p(x)&&f(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let at=0,st=Z.length;at<st;at++){const Pt=Z[at],nt=n.get(Pt);e.bindTexture(s.TEXTURE_2D,nt.__webglTexture),mt(s.TEXTURE_2D,Pt),et(H.__webglFramebuffer,R,Pt,s.COLOR_ATTACHMENT0+at,s.TEXTURE_2D,0),p(Pt)&&f(s.TEXTURE_2D)}e.unbindTexture()}else{let at=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(at=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(at,$.__webglTexture),mt(at,x),x.mipmaps&&x.mipmaps.length>0)for(let st=0;st<x.mipmaps.length;st++)et(H.__webglFramebuffer[st],R,x,s.COLOR_ATTACHMENT0,at,st);else et(H.__webglFramebuffer,R,x,s.COLOR_ATTACHMENT0,at,0);p(x)&&f(at),e.unbindTexture()}R.depthBuffer&&Nt(R)}function P(R){const x=R.textures;for(let H=0,$=x.length;H<$;H++){const Z=x[H];if(p(Z)){const Q=R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,_t=n.get(Z).__webglTexture;e.bindTexture(Q,_t),f(Q),e.unbindTexture()}}}const Vt=[],zt=[];function ne(R){if(R.samples>0){if(Wt(R)===!1){const x=R.textures,H=R.width,$=R.height;let Z=s.COLOR_BUFFER_BIT;const Q=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_t=n.get(R),at=x.length>1;if(at)for(let st=0;st<x.length;st++)e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let st=0;st<x.length;st++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),at){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,_t.__webglColorRenderbuffer[st]);const Pt=n.get(x[st]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Pt,0)}s.blitFramebuffer(0,0,H,$,0,0,H,$,Z,s.NEAREST),c===!0&&(Vt.length=0,zt.length=0,Vt.push(s.COLOR_ATTACHMENT0+st),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Vt.push(Q),zt.push(Q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,zt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Vt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),at)for(let st=0;st<x.length;st++){e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.RENDERBUFFER,_t.__webglColorRenderbuffer[st]);const Pt=n.get(x[st]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.TEXTURE_2D,Pt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const x=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function xt(R){return Math.min(i.maxSamples,R.samples)}function Wt(R){const x=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Bt(R){const x=r.render.frame;u.get(R)!==x&&(u.set(R,x),R.update())}function Lt(R,x){const H=R.colorSpace,$=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==In&&H!==An&&(Jt.getTransfer(H)===ie?($!==Qe||Z!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),x}function oe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=L,this.setTexture2D=Y,this.setTexture2DArray=q,this.setTexture3D=W,this.setTextureCube=K,this.rebindTextures=Ct,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=et,this.useMultisampledRTT=Wt}function zp(s,t){function e(n,i=An){let a;const r=Jt.getTransfer(i);if(n===Ln)return s.UNSIGNED_BYTE;if(n===Ko)return s.UNSIGNED_SHORT_4_4_4_4;if(n===$o)return s.UNSIGNED_SHORT_5_5_5_1;if(n===xl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===yl)return s.BYTE;if(n===Sl)return s.SHORT;if(n===Rs)return s.UNSIGNED_SHORT;if(n===qo)return s.INT;if(n===Ti)return s.UNSIGNED_INT;if(n===dn)return s.FLOAT;if(n===Fs)return s.HALF_FLOAT;if(n===Ml)return s.ALPHA;if(n===El)return s.RGB;if(n===Qe)return s.RGBA;if(n===bl)return s.LUMINANCE;if(n===Al)return s.LUMINANCE_ALPHA;if(n===Mi)return s.DEPTH_COMPONENT;if(n===Ri)return s.DEPTH_STENCIL;if(n===Jo)return s.RED;if(n===Zo)return s.RED_INTEGER;if(n===Tl)return s.RG;if(n===Qo)return s.RG_INTEGER;if(n===tc)return s.RGBA_INTEGER;if(n===Ys||n===js||n===qs||n===Ks)if(r===ie)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Ys)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===js)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ks)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Ys)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===js)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ks)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===tr||n===er||n===nr||n===ir)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===tr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===er)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ir)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sr||n===ar||n===rr)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(n===sr||n===ar)return r===ie?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===rr)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===or||n===cr||n===lr||n===hr||n===ur||n===dr||n===fr||n===pr||n===mr||n===gr||n===vr||n===_r||n===yr||n===Sr)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(n===or)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===cr)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===lr)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hr)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ur)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===dr)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fr)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pr)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===mr)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gr)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vr)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_r)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yr)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sr)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$s||n===xr||n===Mr)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(n===$s)return r===ie?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xr)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Mr)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wl||n===Er||n===br||n===Ar)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(n===$s)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Er)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===br)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ar)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===wi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class Hp extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class wt extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gp={type:"move"};class Ma{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,a=null,r=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),f=this._getHandJoint(l,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&h>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&a!==null&&(i=a),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Gp)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new wt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Vp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Xp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ie,a=t.properties.get(i);a.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ee({vertexShader:Vp,fragmentShader:Wp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ot(new Xi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class Yp extends Kn{constructor(t,e){super();const n=this;let i=null,a=1,r=null,o="local-floor",c=1,l=null,u=null,d=null,h=null,m=null,g=null;const _=new Xp,p=e.getContextAttributes();let f=null,M=null;const S=[],A=[],I=new Mt;let C=null;const T=new Ve;T.layers.enable(1),T.viewport=new ae;const D=new Ve;D.layers.enable(2),D.viewport=new ae;const b=[T,D],y=new Hp;y.layers.enable(1),y.layers.enable(2);let L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let et=S[j];return et===void 0&&(et=new Ma,S[j]=et),et.getTargetRaySpace()},this.getControllerGrip=function(j){let et=S[j];return et===void 0&&(et=new Ma,S[j]=et),et.getGripSpace()},this.getHand=function(j){let et=S[j];return et===void 0&&(et=new Ma,S[j]=et),et.getHandSpace()};function k(j){const et=A.indexOf(j.inputSource);if(et===-1)return;const ft=S[et];ft!==void 0&&(ft.update(j.inputSource,j.frame,l||r),ft.dispatchEvent({type:j.type,data:j.inputSource}))}function Y(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",q);for(let j=0;j<S.length;j++){const et=A[j];et!==null&&(A[j]=null,S[j].disconnect(et))}L=null,F=null,_.reset(),t.setRenderTarget(f),m=null,h=null,d=null,i=null,M=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(I),i.renderState.layers===void 0){const et={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(i,e,et),i.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new qn(m.framebufferWidth,m.framebufferHeight,{format:Qe,type:Ln,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let et=null,ft=null,ct=null;p.depth&&(ct=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=p.stencil?Ri:Mi,ft=p.stencil?wi:Ti);const Nt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:a};d=new XRWebGLBinding(i,e),h=d.createProjectionLayer(Nt),i.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),M=new qn(h.textureWidth,h.textureHeight,{format:Qe,type:Ln,depthTexture:new pc(h.textureWidth,h.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await i.requestReferenceSpace(o),Yt.setContext(i),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function q(j){for(let et=0;et<j.removed.length;et++){const ft=j.removed[et],ct=A.indexOf(ft);ct>=0&&(A[ct]=null,S[ct].disconnect(ft))}for(let et=0;et<j.added.length;et++){const ft=j.added[et];let ct=A.indexOf(ft);if(ct===-1){for(let Ct=0;Ct<S.length;Ct++)if(Ct>=A.length){A.push(ft),ct=Ct;break}else if(A[Ct]===null){A[Ct]=ft,ct=Ct;break}if(ct===-1)break}const Nt=S[ct];Nt&&Nt.connect(ft)}}const W=new w,K=new w;function X(j,et,ft){W.setFromMatrixPosition(et.matrixWorld),K.setFromMatrixPosition(ft.matrixWorld);const ct=W.distanceTo(K),Nt=et.projectionMatrix.elements,Ct=ft.projectionMatrix.elements,Gt=Nt[14]/(Nt[10]-1),P=Nt[14]/(Nt[10]+1),Vt=(Nt[9]+1)/Nt[5],zt=(Nt[9]-1)/Nt[5],ne=(Nt[8]-1)/Nt[0],xt=(Ct[8]+1)/Ct[0],Wt=Gt*ne,Bt=Gt*xt,Lt=ct/(-ne+xt),oe=Lt*-ne;et.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(oe),j.translateZ(Lt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const R=Gt+Lt,x=P+Lt,H=Wt-oe,$=Bt+(ct-oe),Z=Vt*P/x*R,Q=zt*P/x*R;j.projectionMatrix.makePerspective(H,$,Z,Q,R,x),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function ut(j,et){et===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(et.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;_.texture!==null&&(j.near=_.depthNear,j.far=_.depthFar),y.near=D.near=T.near=j.near,y.far=D.far=T.far=j.far,(L!==y.near||F!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),L=y.near,F=y.far,T.near=L,T.far=F,D.near=L,D.far=F,T.updateProjectionMatrix(),D.updateProjectionMatrix(),j.updateProjectionMatrix());const et=j.parent,ft=y.cameras;ut(y,et);for(let ct=0;ct<ft.length;ct++)ut(ft[ct],et);ft.length===2?X(y,T,D):y.projectionMatrix.copy(T.projectionMatrix),dt(j,y,et)};function dt(j,et,ft){ft===null?j.matrix.copy(et.matrixWorld):(j.matrix.copy(ft.matrixWorld),j.matrix.invert(),j.matrix.multiply(et.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(et.projectionMatrix),j.projectionMatrixInverse.copy(et.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ia*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function(j){c=j,h!==null&&(h.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let mt=null;function Ht(j,et){if(u=et.getViewerPose(l||r),g=et,u!==null){const ft=u.views;m!==null&&(t.setRenderTargetFramebuffer(M,m.framebuffer),t.setRenderTarget(M));let ct=!1;ft.length!==y.cameras.length&&(y.cameras.length=0,ct=!0);for(let Ct=0;Ct<ft.length;Ct++){const Gt=ft[Ct];let P=null;if(m!==null)P=m.getViewport(Gt);else{const zt=d.getViewSubImage(h,Gt);P=zt.viewport,Ct===0&&(t.setRenderTargetTextures(M,zt.colorTexture,h.ignoreDepthValues?void 0:zt.depthStencilTexture),t.setRenderTarget(M))}let Vt=b[Ct];Vt===void 0&&(Vt=new Ve,Vt.layers.enable(Ct),Vt.viewport=new ae,b[Ct]=Vt),Vt.matrix.fromArray(Gt.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(Gt.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(P.x,P.y,P.width,P.height),Ct===0&&(y.matrix.copy(Vt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ct===!0&&y.cameras.push(Vt)}const Nt=i.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")){const Ct=d.getDepthInformation(ft[0]);Ct&&Ct.isValid&&Ct.texture&&_.init(t,Ct,i.renderState)}}for(let ft=0;ft<S.length;ft++){const ct=A[ft],Nt=S[ft];ct!==null&&Nt!==void 0&&Nt.update(ct,et,l||r)}mt&&mt(j,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const Yt=new fc;Yt.setAnimationLoop(Ht),this.setAnimationLoop=function(j){mt=j},this.dispose=function(){}}}const Hn=new nn,jp=new te;function qp(s,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,hc(s)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function i(p,f,M,S,A){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(p,f):f.isMeshToonMaterial?(a(p,f),d(p,f)):f.isMeshPhongMaterial?(a(p,f),u(p,f)):f.isMeshStandardMaterial?(a(p,f),h(p,f),f.isMeshPhysicalMaterial&&m(p,f,A)):f.isMeshMatcapMaterial?(a(p,f),g(p,f)):f.isMeshDepthMaterial?a(p,f):f.isMeshDistanceMaterial?(a(p,f),_(p,f)):f.isMeshNormalMaterial?a(p,f):f.isLineBasicMaterial?(r(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?c(p,f,M,S):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===ge&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===ge&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const M=t.get(f),S=M.envMap,A=M.envMapRotation;S&&(p.envMap.value=S,Hn.copy(A),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),p.envMapRotation.value.setFromMatrix4(jp.makeRotationFromEuler(Hn)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function r(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,M,S){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*M,p.scale.value=S*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,M){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ge&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){const M=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Kp(s,t,e,n){let i={},a={},r=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,S){const A=S.program;n.uniformBlockBinding(M,A)}function l(M,S){let A=i[M.id];A===void 0&&(g(M),A=u(M),i[M.id]=A,M.addEventListener("dispose",p));const I=S.program;n.updateUBOMapping(M,I);const C=t.render.frame;a[M.id]!==C&&(h(M),a[M.id]=C)}function u(M){const S=d();M.__bindingPointIndex=S;const A=s.createBuffer(),I=M.__size,C=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,A),s.bufferData(s.UNIFORM_BUFFER,I,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,A),A}function d(){for(let M=0;M<o;M++)if(r.indexOf(M)===-1)return r.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const S=i[M.id],A=M.uniforms,I=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let C=0,T=A.length;C<T;C++){const D=Array.isArray(A[C])?A[C]:[A[C]];for(let b=0,y=D.length;b<y;b++){const L=D[b];if(m(L,C,b,I)===!0){const F=L.__offset,k=Array.isArray(L.value)?L.value:[L.value];let Y=0;for(let q=0;q<k.length;q++){const W=k[q],K=_(W);typeof W=="number"||typeof W=="boolean"?(L.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,F+Y,L.__data)):W.isMatrix3?(L.__data[0]=W.elements[0],L.__data[1]=W.elements[1],L.__data[2]=W.elements[2],L.__data[3]=0,L.__data[4]=W.elements[3],L.__data[5]=W.elements[4],L.__data[6]=W.elements[5],L.__data[7]=0,L.__data[8]=W.elements[6],L.__data[9]=W.elements[7],L.__data[10]=W.elements[8],L.__data[11]=0):(W.toArray(L.__data,Y),Y+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(M,S,A,I){const C=M.value,T=S+"_"+A;if(I[T]===void 0)return typeof C=="number"||typeof C=="boolean"?I[T]=C:I[T]=C.clone(),!0;{const D=I[T];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return I[T]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function g(M){const S=M.uniforms;let A=0;const I=16;for(let T=0,D=S.length;T<D;T++){const b=Array.isArray(S[T])?S[T]:[S[T]];for(let y=0,L=b.length;y<L;y++){const F=b[y],k=Array.isArray(F.value)?F.value:[F.value];for(let Y=0,q=k.length;Y<q;Y++){const W=k[Y],K=_(W),X=A%I;X!==0&&I-X<K.boundary&&(A+=I-X),F.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=A,A+=K.storage}}}const C=A%I;return C>0&&(A+=I-C),M.__size=A,M.__cache={},this}function _(M){const S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),S}function p(M){const S=M.target;S.removeEventListener("dispose",p);const A=r.indexOf(S.__bindingPointIndex);r.splice(A,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete a[S.id]}function f(){for(const M in i)s.deleteBuffer(i[M]);r=[],i={},a={}}return{bind:c,update:l,dispose:f}}class $p{constructor(t={}){const{canvas:e=zl(),context:n=null,depth:i=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=r;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const f=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=je,this.toneMapping=Rn,this.toneMappingExposure=1;const S=this;let A=!1,I=0,C=0,T=null,D=-1,b=null;const y=new ae,L=new ae;let F=null;const k=new tt(0);let Y=0,q=e.width,W=e.height,K=1,X=null,ut=null;const dt=new ae(0,0,q,W),mt=new ae(0,0,q,W);let Ht=!1;const Yt=new za;let j=!1,et=!1;const ft=new te,ct=new w,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ct=!1;function Gt(){return T===null?K:1}let P=n;function Vt(E,U){return e.getContext(E,U)}try{const E={alpha:!0,depth:i,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ba}`),e.addEventListener("webglcontextlost",G,!1),e.addEventListener("webglcontextrestored",N,!1),e.addEventListener("webglcontextcreationerror",V,!1),P===null){const U="webgl2";if(P=Vt(U,E),P===null)throw Vt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let zt,ne,xt,Wt,Bt,Lt,oe,R,x,H,$,Z,Q,_t,at,st,Pt,nt,gt,kt,bt,lt,It,Dt;function le(){zt=new sf(P),zt.init(),lt=new zp(P,zt),ne=new $d(P,zt,t,lt),xt=new Fp(P),Wt=new of(P),Bt=new bp,Lt=new kp(P,zt,xt,Bt,ne,lt,Wt),oe=new Zd(S),R=new nf(S),x=new dh(P),It=new qd(P,x),H=new af(P,x,Wt,It),$=new lf(P,H,x,Wt),gt=new cf(P,ne,Lt),st=new Jd(Bt),Z=new Ep(S,oe,R,zt,ne,It,st),Q=new qp(S,Bt),_t=new Tp,at=new Ip(zt),nt=new jd(S,oe,R,xt,$,h,c),Pt=new Bp(S,$,ne),Dt=new Kp(P,Wt,ne,xt),kt=new Kd(P,zt,Wt),bt=new rf(P,zt,Wt),Wt.programs=Z.programs,S.capabilities=ne,S.extensions=zt,S.properties=Bt,S.renderLists=_t,S.shadowMap=Pt,S.state=xt,S.info=Wt}le();const v=new Yp(S,P);this.xr=v,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const E=zt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=zt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(E){E!==void 0&&(K=E,this.setSize(q,W,!1))},this.getSize=function(E){return E.set(q,W)},this.setSize=function(E,U,B=!0){if(v.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=E,W=U,e.width=Math.floor(E*K),e.height=Math.floor(U*K),B===!0&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(q*K,W*K).floor()},this.setDrawingBufferSize=function(E,U,B){q=E,W=U,K=B,e.width=Math.floor(E*B),e.height=Math.floor(U*B),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(y)},this.getViewport=function(E){return E.copy(dt)},this.setViewport=function(E,U,B,z){E.isVector4?dt.set(E.x,E.y,E.z,E.w):dt.set(E,U,B,z),xt.viewport(y.copy(dt).multiplyScalar(K).round())},this.getScissor=function(E){return E.copy(mt)},this.setScissor=function(E,U,B,z){E.isVector4?mt.set(E.x,E.y,E.z,E.w):mt.set(E,U,B,z),xt.scissor(L.copy(mt).multiplyScalar(K).round())},this.getScissorTest=function(){return Ht},this.setScissorTest=function(E){xt.setScissorTest(Ht=E)},this.setOpaqueSort=function(E){X=E},this.setTransparentSort=function(E){ut=E},this.getClearColor=function(E){return E.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor.apply(nt,arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha.apply(nt,arguments)},this.clear=function(E=!0,U=!0,B=!0){let z=0;if(E){let O=!1;if(T!==null){const it=T.texture.format;O=it===tc||it===Qo||it===Zo}if(O){const it=T.texture.type,ht=it===Ln||it===Ti||it===Rs||it===wi||it===Ko||it===$o,pt=nt.getClearColor(),vt=nt.getClearAlpha(),At=pt.r,Tt=pt.g,Et=pt.b;ht?(m[0]=At,m[1]=Tt,m[2]=Et,m[3]=vt,P.clearBufferuiv(P.COLOR,0,m)):(g[0]=At,g[1]=Tt,g[2]=Et,g[3]=vt,P.clearBufferiv(P.COLOR,0,g))}else z|=P.COLOR_BUFFER_BIT}U&&(z|=P.DEPTH_BUFFER_BIT),B&&(z|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",G,!1),e.removeEventListener("webglcontextrestored",N,!1),e.removeEventListener("webglcontextcreationerror",V,!1),_t.dispose(),at.dispose(),Bt.dispose(),oe.dispose(),R.dispose(),$.dispose(),It.dispose(),Dt.dispose(),Z.dispose(),v.dispose(),v.removeEventListener("sessionstart",_e),v.removeEventListener("sessionend",ye),Fe.stop()};function G(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const E=Wt.autoReset,U=Pt.enabled,B=Pt.autoUpdate,z=Pt.needsUpdate,O=Pt.type;le(),Wt.autoReset=E,Pt.enabled=U,Pt.autoUpdate=B,Pt.needsUpdate=z,Pt.type=O}function V(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function J(E){const U=E.target;U.removeEventListener("dispose",J),yt(U)}function yt(E){Rt(E),Bt.remove(E)}function Rt(E){const U=Bt.get(E).programs;U!==void 0&&(U.forEach(function(B){Z.releaseProgram(B)}),E.isShaderMaterial&&Z.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,B,z,O,it){U===null&&(U=Nt);const ht=O.isMesh&&O.matrixWorld.determinant()<0,pt=Dc(E,U,B,z,O);xt.setMaterial(z,ht);let vt=B.index,At=1;if(z.wireframe===!0){if(vt=H.getWireframeAttribute(B),vt===void 0)return;At=2}const Tt=B.drawRange,Et=B.attributes.position;let Kt=Tt.start*At,ue=(Tt.start+Tt.count)*At;it!==null&&(Kt=Math.max(Kt,it.start*At),ue=Math.min(ue,(it.start+it.count)*At)),vt!==null?(Kt=Math.max(Kt,0),ue=Math.min(ue,vt.count)):Et!=null&&(Kt=Math.max(Kt,0),ue=Math.min(ue,Et.count));const de=ue-Kt;if(de<0||de===1/0)return;It.setup(O,z,pt,B,vt);let ze,$t=kt;if(vt!==null&&(ze=x.get(vt),$t=bt,$t.setIndex(ze)),O.isMesh)z.wireframe===!0?(xt.setLineWidth(z.wireframeLinewidth*Gt()),$t.setMode(P.LINES)):$t.setMode(P.TRIANGLES);else if(O.isLine){let St=z.linewidth;St===void 0&&(St=1),xt.setLineWidth(St*Gt()),O.isLineSegments?$t.setMode(P.LINES):O.isLineLoop?$t.setMode(P.LINE_LOOP):$t.setMode(P.LINE_STRIP)}else O.isPoints?$t.setMode(P.POINTS):O.isSprite&&$t.setMode(P.TRIANGLES);if(O.isBatchedMesh)O._multiDrawInstances!==null?$t.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances):$t.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)$t.renderInstances(Kt,de,O.count);else if(B.isInstancedBufferGeometry){const St=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,De=Math.min(B.instanceCount,St);$t.renderInstances(Kt,de,De)}else $t.render(Kt,de)};function he(E,U,B){E.transparent===!0&&E.side===pe&&E.forceSinglePass===!1?(E.side=ge,E.needsUpdate=!0,qi(E,U,B),E.side=Cn,E.needsUpdate=!0,qi(E,U,B),E.side=pe):qi(E,U,B)}this.compile=function(E,U,B=null){B===null&&(B=E),p=at.get(B),p.init(U),M.push(p),B.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),E!==B&&E.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const z=new Set;return E.traverse(function(O){const it=O.material;if(it)if(Array.isArray(it))for(let ht=0;ht<it.length;ht++){const pt=it[ht];he(pt,B,O),z.add(pt)}else he(it,B,O),z.add(it)}),M.pop(),p=null,z},this.compileAsync=function(E,U,B=null){const z=this.compile(E,U,B);return new Promise(O=>{function it(){if(z.forEach(function(ht){Bt.get(ht).currentProgram.isReady()&&z.delete(ht)}),z.size===0){O(E);return}setTimeout(it,10)}zt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let ve=null;function jt(E){ve&&ve(E)}function _e(){Fe.stop()}function ye(){Fe.start()}const Fe=new fc;Fe.setAnimationLoop(jt),typeof self<"u"&&Fe.setContext(self),this.setAnimationLoop=function(E){ve=E,v.setAnimationLoop(E),E===null?Fe.stop():Fe.start()},v.addEventListener("sessionstart",_e),v.addEventListener("sessionend",ye),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),v.enabled===!0&&v.isPresenting===!0&&(v.cameraAutoUpdate===!0&&v.updateCamera(U),U=v.getCamera()),E.isScene===!0&&E.onBeforeRender(S,E,U,T),p=at.get(E,M.length),p.init(U),M.push(p),ft.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Yt.setFromProjectionMatrix(ft),et=this.localClippingEnabled,j=st.init(this.clippingPlanes,et),_=_t.get(E,f.length),_.init(),f.push(_),v.enabled===!0&&v.isPresenting===!0){const it=S.xr.getDepthSensingMesh();it!==null&&ke(it,U,-1/0,S.sortObjects)}ke(E,U,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(X,ut),Ct=v.enabled===!1||v.isPresenting===!1||v.hasDepthSensing()===!1,Ct&&nt.addToRenderList(_,E),this.info.render.frame++,j===!0&&st.beginShadows();const B=p.state.shadowsArray;Pt.render(B,E,U),j===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=_.opaque,O=_.transmissive;if(p.setupLights(),U.isArrayCamera){const it=U.cameras;if(O.length>0)for(let ht=0,pt=it.length;ht<pt;ht++){const vt=it[ht];Dn(z,O,E,vt)}Ct&&nt.render(E);for(let ht=0,pt=it.length;ht<pt;ht++){const vt=it[ht];gn(_,E,vt,vt.viewport)}}else O.length>0&&Dn(z,O,E,U),Ct&&nt.render(E),gn(_,E,U);T!==null&&(Lt.updateMultisampleRenderTarget(T),Lt.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(S,E,U),It.resetDefaultState(),D=-1,b=null,M.pop(),M.length>0?(p=M[M.length-1],j===!0&&st.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function ke(E,U,B,z){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)B=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Yt.intersectsSprite(E)){z&&ct.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ft);const ht=$.update(E),pt=E.material;pt.visible&&_.push(E,ht,pt,B,ct.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Yt.intersectsObject(E))){const ht=$.update(E),pt=E.material;if(z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ct.copy(E.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),ct.copy(ht.boundingSphere.center)),ct.applyMatrix4(E.matrixWorld).applyMatrix4(ft)),Array.isArray(pt)){const vt=ht.groups;for(let At=0,Tt=vt.length;At<Tt;At++){const Et=vt[At],Kt=pt[Et.materialIndex];Kt&&Kt.visible&&_.push(E,ht,Kt,B,ct.z,Et)}}else pt.visible&&_.push(E,ht,pt,B,ct.z,null)}}const it=E.children;for(let ht=0,pt=it.length;ht<pt;ht++)ke(it[ht],U,B,z)}function gn(E,U,B,z){const O=E.opaque,it=E.transmissive,ht=E.transparent;p.setupLightsView(B),j===!0&&st.setGlobalState(S.clippingPlanes,B),z&&xt.viewport(y.copy(z)),O.length>0&&Un(O,U,B),it.length>0&&Un(it,U,B),ht.length>0&&Un(ht,U,B),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Dn(E,U,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new qn(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?Fs:Ln,minFilter:Xn,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));const it=p.state.transmissionRenderTarget[z.id],ht=z.viewport||y;it.setSize(ht.z,ht.w);const pt=S.getRenderTarget();S.setRenderTarget(it),S.getClearColor(k),Y=S.getClearAlpha(),Y<1&&S.setClearColor(16777215,.5),Ct?nt.render(B):S.clear();const vt=S.toneMapping;S.toneMapping=Rn;const At=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),j===!0&&st.setGlobalState(S.clippingPlanes,z),Un(E,B,z),Lt.updateMultisampleRenderTarget(it),Lt.updateRenderTargetMipmap(it),zt.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let Et=0,Kt=U.length;Et<Kt;Et++){const ue=U[Et],de=ue.object,ze=ue.geometry,$t=ue.material,St=ue.group;if($t.side===pe&&de.layers.test(z.layers)){const De=$t.side;$t.side=ge,$t.needsUpdate=!0,ja(de,B,z,ze,$t,St),$t.side=De,$t.needsUpdate=!0,Tt=!0}}Tt===!0&&(Lt.updateMultisampleRenderTarget(it),Lt.updateRenderTargetMipmap(it))}S.setRenderTarget(pt),S.setClearColor(k,Y),At!==void 0&&(z.viewport=At),S.toneMapping=vt}function Un(E,U,B){const z=U.isScene===!0?U.overrideMaterial:null;for(let O=0,it=E.length;O<it;O++){const ht=E[O],pt=ht.object,vt=ht.geometry,At=z===null?ht.material:z,Tt=ht.group;pt.layers.test(B.layers)&&ja(pt,U,B,vt,At,Tt)}}function ja(E,U,B,z,O,it){E.onBeforeRender(S,U,B,z,O,it),E.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(S,U,B,z,E,it),O.transparent===!0&&O.side===pe&&O.forceSinglePass===!1?(O.side=ge,O.needsUpdate=!0,S.renderBufferDirect(B,U,z,O,E,it),O.side=Cn,O.needsUpdate=!0,S.renderBufferDirect(B,U,z,O,E,it),O.side=pe):S.renderBufferDirect(B,U,z,O,E,it),E.onAfterRender(S,U,B,z,O,it)}function qi(E,U,B){U.isScene!==!0&&(U=Nt);const z=Bt.get(E),O=p.state.lights,it=p.state.shadowsArray,ht=O.state.version,pt=Z.getParameters(E,O.state,it,U,B),vt=Z.getProgramCacheKey(pt);let At=z.programs;z.environment=E.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(E.isMeshStandardMaterial?R:oe).get(E.envMap||z.environment),z.envMapRotation=z.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,At===void 0&&(E.addEventListener("dispose",J),At=new Map,z.programs=At);let Tt=At.get(vt);if(Tt!==void 0){if(z.currentProgram===Tt&&z.lightsStateVersion===ht)return Ka(E,pt),Tt}else pt.uniforms=Z.getUniforms(E),E.onBuild(B,pt,S),E.onBeforeCompile(pt,S),Tt=Z.acquireProgram(pt,vt),At.set(vt,Tt),z.uniforms=pt.uniforms;const Et=z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Et.clippingPlanes=st.uniform),Ka(E,pt),z.needsLights=Oc(E),z.lightsStateVersion=ht,z.needsLights&&(Et.ambientLightColor.value=O.state.ambient,Et.lightProbe.value=O.state.probe,Et.directionalLights.value=O.state.directional,Et.directionalLightShadows.value=O.state.directionalShadow,Et.spotLights.value=O.state.spot,Et.spotLightShadows.value=O.state.spotShadow,Et.rectAreaLights.value=O.state.rectArea,Et.ltc_1.value=O.state.rectAreaLTC1,Et.ltc_2.value=O.state.rectAreaLTC2,Et.pointLights.value=O.state.point,Et.pointLightShadows.value=O.state.pointShadow,Et.hemisphereLights.value=O.state.hemi,Et.directionalShadowMap.value=O.state.directionalShadowMap,Et.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Et.spotShadowMap.value=O.state.spotShadowMap,Et.spotLightMatrix.value=O.state.spotLightMatrix,Et.spotLightMap.value=O.state.spotLightMap,Et.pointShadowMap.value=O.state.pointShadowMap,Et.pointShadowMatrix.value=O.state.pointShadowMatrix),z.currentProgram=Tt,z.uniformsList=null,Tt}function qa(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=As.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Ka(E,U){const B=Bt.get(E);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function Dc(E,U,B,z,O){U.isScene!==!0&&(U=Nt),Lt.resetTextureUnits();const it=U.fog,ht=z.isMeshStandardMaterial?U.environment:null,pt=T===null?S.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:In,vt=(z.isMeshStandardMaterial?R:oe).get(z.envMap||ht),At=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Tt=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Et=!!B.morphAttributes.position,Kt=!!B.morphAttributes.normal,ue=!!B.morphAttributes.color;let de=Rn;z.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(de=S.toneMapping);const ze=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,$t=ze!==void 0?ze.length:0,St=Bt.get(z),De=p.state.lights;if(j===!0&&(et===!0||E!==b)){const Xe=E===b&&z.id===D;st.setState(z,E,Xe)}let Qt=!1;z.version===St.__version?(St.needsLights&&St.lightsStateVersion!==De.state.version||St.outputColorSpace!==pt||O.isBatchedMesh&&St.batching===!1||!O.isBatchedMesh&&St.batching===!0||O.isBatchedMesh&&St.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&St.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&St.instancing===!1||!O.isInstancedMesh&&St.instancing===!0||O.isSkinnedMesh&&St.skinning===!1||!O.isSkinnedMesh&&St.skinning===!0||O.isInstancedMesh&&St.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&St.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&St.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&St.instancingMorph===!1&&O.morphTexture!==null||St.envMap!==vt||z.fog===!0&&St.fog!==it||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==st.numPlanes||St.numIntersection!==st.numIntersection)||St.vertexAlphas!==At||St.vertexTangents!==Tt||St.morphTargets!==Et||St.morphNormals!==Kt||St.morphColors!==ue||St.toneMapping!==de||St.morphTargetsCount!==$t)&&(Qt=!0):(Qt=!0,St.__version=z.version);let sn=St.currentProgram;Qt===!0&&(sn=qi(z,U,O));let Ki=!1,On=!1,Gs=!1;const Te=sn.getUniforms(),vn=St.uniforms;if(xt.useProgram(sn.program)&&(Ki=!0,On=!0,Gs=!0),z.id!==D&&(D=z.id,On=!0),Ki||b!==E){Te.setValue(P,"projectionMatrix",E.projectionMatrix),Te.setValue(P,"viewMatrix",E.matrixWorldInverse);const Xe=Te.map.cameraPosition;Xe!==void 0&&Xe.setValue(P,ct.setFromMatrixPosition(E.matrixWorld)),ne.logarithmicDepthBuffer&&Te.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Te.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),b!==E&&(b=E,On=!0,Gs=!0)}if(O.isSkinnedMesh){Te.setOptional(P,O,"bindMatrix"),Te.setOptional(P,O,"bindMatrixInverse");const Xe=O.skeleton;Xe&&(Xe.boneTexture===null&&Xe.computeBoneTexture(),Te.setValue(P,"boneTexture",Xe.boneTexture,Lt))}O.isBatchedMesh&&(Te.setOptional(P,O,"batchingTexture"),Te.setValue(P,"batchingTexture",O._matricesTexture,Lt),Te.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&Te.setValue(P,"batchingColorTexture",O._colorsTexture,Lt));const Vs=B.morphAttributes;if((Vs.position!==void 0||Vs.normal!==void 0||Vs.color!==void 0)&&gt.update(O,B,sn),(On||St.receiveShadow!==O.receiveShadow)&&(St.receiveShadow=O.receiveShadow,Te.setValue(P,"receiveShadow",O.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(vn.envMap.value=vt,vn.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(vn.envMapIntensity.value=U.environmentIntensity),On&&(Te.setValue(P,"toneMappingExposure",S.toneMappingExposure),St.needsLights&&Uc(vn,Gs),it&&z.fog===!0&&Q.refreshFogUniforms(vn,it),Q.refreshMaterialUniforms(vn,z,K,W,p.state.transmissionRenderTarget[E.id]),As.upload(P,qa(St),vn,Lt)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(As.upload(P,qa(St),vn,Lt),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Te.setValue(P,"center",O.center),Te.setValue(P,"modelViewMatrix",O.modelViewMatrix),Te.setValue(P,"normalMatrix",O.normalMatrix),Te.setValue(P,"modelMatrix",O.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Xe=z.uniformsGroups;for(let Ws=0,Nc=Xe.length;Ws<Nc;Ws++){const $a=Xe[Ws];Dt.update($a,sn),Dt.bind($a,sn)}}return sn}function Uc(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Oc(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,U,B){Bt.get(E.texture).__webglTexture=U,Bt.get(E.depthTexture).__webglTexture=B;const z=Bt.get(E);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){const B=Bt.get(E);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,B=0){T=E,I=U,C=B;let z=!0,O=null,it=!1,ht=!1;if(E){const vt=Bt.get(E);vt.__useDefaultFramebuffer!==void 0?(xt.bindFramebuffer(P.FRAMEBUFFER,null),z=!1):vt.__webglFramebuffer===void 0?Lt.setupRenderTarget(E):vt.__hasExternalTextures&&Lt.rebindTextures(E,Bt.get(E.texture).__webglTexture,Bt.get(E.depthTexture).__webglTexture);const At=E.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(ht=!0);const Tt=Bt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Tt[U])?O=Tt[U][B]:O=Tt[U],it=!0):E.samples>0&&Lt.useMultisampledRTT(E)===!1?O=Bt.get(E).__webglMultisampledFramebuffer:Array.isArray(Tt)?O=Tt[B]:O=Tt,y.copy(E.viewport),L.copy(E.scissor),F=E.scissorTest}else y.copy(dt).multiplyScalar(K).floor(),L.copy(mt).multiplyScalar(K).floor(),F=Ht;if(xt.bindFramebuffer(P.FRAMEBUFFER,O)&&z&&xt.drawBuffers(E,O),xt.viewport(y),xt.scissor(L),xt.setScissorTest(F),it){const vt=Bt.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,vt.__webglTexture,B)}else if(ht){const vt=Bt.get(E.texture),At=U||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,vt.__webglTexture,B||0,At)}D=-1},this.readRenderTargetPixels=function(E,U,B,z,O,it,ht){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=Bt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ht!==void 0&&(pt=pt[ht]),pt){xt.bindFramebuffer(P.FRAMEBUFFER,pt);try{const vt=E.texture,At=vt.format,Tt=vt.type;if(!ne.textureFormatReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(Tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-z&&B>=0&&B<=E.height-O&&P.readPixels(U,B,z,O,lt.convert(At),lt.convert(Tt),it)}finally{const vt=T!==null?Bt.get(T).__webglFramebuffer:null;xt.bindFramebuffer(P.FRAMEBUFFER,vt)}}},this.readRenderTargetPixelsAsync=async function(E,U,B,z,O,it,ht){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=Bt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ht!==void 0&&(pt=pt[ht]),pt){xt.bindFramebuffer(P.FRAMEBUFFER,pt);try{const vt=E.texture,At=vt.format,Tt=vt.type;if(!ne.textureFormatReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-z&&B>=0&&B<=E.height-O){const Et=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Et),P.bufferData(P.PIXEL_PACK_BUFFER,it.byteLength,P.STREAM_READ),P.readPixels(U,B,z,O,lt.convert(At),lt.convert(Tt),0),P.flush();const Kt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);await Hl(P,Kt,4);try{P.bindBuffer(P.PIXEL_PACK_BUFFER,Et),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,it)}finally{P.deleteBuffer(Et),P.deleteSync(Kt)}return it}}finally{const vt=T!==null?Bt.get(T).__webglFramebuffer:null;xt.bindFramebuffer(P.FRAMEBUFFER,vt)}}},this.copyFramebufferToTexture=function(E,U=null,B=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);const z=Math.pow(2,-B),O=Math.floor(E.image.width*z),it=Math.floor(E.image.height*z),ht=U!==null?U.x:0,pt=U!==null?U.y:0;Lt.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,B,0,0,ht,pt,O,it),xt.unbindTexture()},this.copyTextureToTexture=function(E,U,B=null,z=null,O=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,E=arguments[1],U=arguments[2],O=arguments[3]||0,B=null);let it,ht,pt,vt,At,Tt;B!==null?(it=B.max.x-B.min.x,ht=B.max.y-B.min.y,pt=B.min.x,vt=B.min.y):(it=E.image.width,ht=E.image.height,pt=0,vt=0),z!==null?(At=z.x,Tt=z.y):(At=0,Tt=0);const Et=lt.convert(U.format),Kt=lt.convert(U.type);Lt.setTexture2D(U,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const ue=P.getParameter(P.UNPACK_ROW_LENGTH),de=P.getParameter(P.UNPACK_IMAGE_HEIGHT),ze=P.getParameter(P.UNPACK_SKIP_PIXELS),$t=P.getParameter(P.UNPACK_SKIP_ROWS),St=P.getParameter(P.UNPACK_SKIP_IMAGES),De=E.isCompressedTexture?E.mipmaps[O]:E.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,De.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,De.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,pt),P.pixelStorei(P.UNPACK_SKIP_ROWS,vt),E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,O,At,Tt,it,ht,Et,Kt,De.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,O,At,Tt,De.width,De.height,Et,De.data):P.texSubImage2D(P.TEXTURE_2D,O,At,Tt,Et,Kt,De),P.pixelStorei(P.UNPACK_ROW_LENGTH,ue),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,de),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ze),P.pixelStorei(P.UNPACK_SKIP_ROWS,$t),P.pixelStorei(P.UNPACK_SKIP_IMAGES,St),O===0&&U.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),xt.unbindTexture()},this.copyTextureToTexture3D=function(E,U,B=null,z=null,O=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,E=arguments[2],U=arguments[3],O=arguments[4]||0);let it,ht,pt,vt,At,Tt,Et,Kt,ue;const de=E.isCompressedTexture?E.mipmaps[O]:E.image;B!==null?(it=B.max.x-B.min.x,ht=B.max.y-B.min.y,pt=B.max.z-B.min.z,vt=B.min.x,At=B.min.y,Tt=B.min.z):(it=de.width,ht=de.height,pt=de.depth,vt=0,At=0,Tt=0),z!==null?(Et=z.x,Kt=z.y,ue=z.z):(Et=0,Kt=0,ue=0);const ze=lt.convert(U.format),$t=lt.convert(U.type);let St;if(U.isData3DTexture)Lt.setTexture3D(U,0),St=P.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)Lt.setTexture2DArray(U,0),St=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const De=P.getParameter(P.UNPACK_ROW_LENGTH),Qt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),sn=P.getParameter(P.UNPACK_SKIP_PIXELS),Ki=P.getParameter(P.UNPACK_SKIP_ROWS),On=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,de.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,de.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,vt),P.pixelStorei(P.UNPACK_SKIP_ROWS,At),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Tt),E.isDataTexture||E.isData3DTexture?P.texSubImage3D(St,O,Et,Kt,ue,it,ht,pt,ze,$t,de.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(St,O,Et,Kt,ue,it,ht,pt,ze,de.data):P.texSubImage3D(St,O,Et,Kt,ue,it,ht,pt,ze,$t,de),P.pixelStorei(P.UNPACK_ROW_LENGTH,De),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Qt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,sn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ki),P.pixelStorei(P.UNPACK_SKIP_IMAGES,On),O===0&&U.generateMipmaps&&P.generateMipmap(St),xt.unbindTexture()},this.initRenderTarget=function(E){Bt.get(E).__webglFramebuffer===void 0&&Lt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Lt.setTextureCube(E,0):E.isData3DTexture?Lt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Lt.setTexture2DArray(E,0):Lt.setTexture2D(E,0),xt.unbindTexture()},this.resetState=function(){I=0,C=0,T=null,xt.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Fa?"display-p3":"srgb",e.unpackColorSpace=Jt.workingColorSpace===ks?"display-p3":"srgb"}}class Jp extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nn,this.environmentIntensity=1,this.environmentRotation=new nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Zp extends Ie{constructor(t=null,e=1,n=1,i,a,r,o,c,l=Be,u=Be,d,h){super(null,r,o,c,l,u,i,a,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vo extends se{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const yi=new te,_o=new te,_s=[],yo=new $n,Qp=new te,Fi=new ot,ki=new Jn;class tm extends ot{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Qp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new $n),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,yi),yo.copy(t.boundingBox).applyMatrix4(yi),this.boundingBox.union(yo)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,yi),ki.copy(t.boundingSphere).applyMatrix4(yi),this.boundingSphere.union(ki)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,a=n.length+1,r=t*a+1;for(let o=0;o<n.length;o++)n[o]=i[r+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Fi.geometry=this.geometry,Fi.material=this.material,Fi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ki.copy(this.boundingSphere),ki.applyMatrix4(n),t.ray.intersectsSphere(ki)!==!1))for(let a=0;a<i;a++){this.getMatrixAt(a,yi),_o.multiplyMatrices(n,yi),Fi.matrixWorld=_o,Fi.raycast(t,_s);for(let r=0,o=_s.length;r<o;r++){const c=_s[r];c.instanceId=a,c.object=this,e.push(c)}_s.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new vo(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Zp(new Float32Array(i*this.count),i,this.count,Jo,dn));const a=this.morphTexture.source.data.data;let r=0;for(let l=0;l<n.length;l++)r+=n[l];const o=this.geometry.morphTargetsRelative?1:1-r,c=i*t;a[c]=o,a.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ga extends Zn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Us=new w,Os=new w,So=new te,zi=new Wi,ys=new Jn,Ea=new w,xo=new w;class Sc extends Ce{constructor(t=new me,e=new Ga){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,a=e.count;i<a;i++)Us.fromBufferAttribute(e,i-1),Os.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Us.distanceTo(Os);t.setAttribute("lineDistance",new re(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,a=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ys.copy(n.boundingSphere),ys.applyMatrix4(i),ys.radius+=a,t.ray.intersectsSphere(ys)===!1)return;So.copy(i).invert(),zi.copy(t.ray).applyMatrix4(So);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const m=Math.max(0,r.start),g=Math.min(u.count,r.start+r.count);for(let _=m,p=g-1;_<p;_+=l){const f=u.getX(_),M=u.getX(_+1),S=Ss(this,t,zi,c,f,M);S&&e.push(S)}if(this.isLineLoop){const _=u.getX(g-1),p=u.getX(m),f=Ss(this,t,zi,c,_,p);f&&e.push(f)}}else{const m=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let _=m,p=g-1;_<p;_+=l){const f=Ss(this,t,zi,c,_,_+1);f&&e.push(f)}if(this.isLineLoop){const _=Ss(this,t,zi,c,g-1,m);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Ss(s,t,e,n,i,a){const r=s.geometry.attributes.position;if(Us.fromBufferAttribute(r,i),Os.fromBufferAttribute(r,a),e.distanceSqToSegment(Us,Os,Ea,xo)>n)return;Ea.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Ea);if(!(c<t.near||c>t.far))return{distance:c,point:xo.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,object:s}}const Mo=new w,Eo=new w;class em extends Sc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,a=e.count;i<a;i+=2)Mo.fromBufferAttribute(e,i),Eo.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Mo.distanceTo(Eo);t.setAttribute("lineDistance",new re(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Qn extends Zn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const bo=new te,Ua=new Wi,xs=new Jn,Ms=new w;class Ii extends Ce{constructor(t=new me,e=new Qn){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,a=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xs.copy(n.boundingSphere),xs.applyMatrix4(i),xs.radius+=a,t.ray.intersectsSphere(xs)===!1)return;bo.copy(i).invert(),Ua.copy(t.ray).applyMatrix4(bo);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){const h=Math.max(0,r.start),m=Math.min(l.count,r.start+r.count);for(let g=h,_=m;g<_;g++){const p=l.getX(g);Ms.fromBufferAttribute(d,p),Ao(Ms,p,c,i,t,e,this)}}else{const h=Math.max(0,r.start),m=Math.min(d.count,r.start+r.count);for(let g=h,_=m;g<_;g++)Ms.fromBufferAttribute(d,g),Ao(Ms,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Ao(s,t,e,n,i,a,r){const o=Ua.distanceSqToPoint(s);if(o<e){const c=new w;Ua.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;a.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,object:r})}}class Yi extends Ie{constructor(t,e,n,i,a,r,o,c,l){super(t,e,n,i,a,r,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class en extends me{constructor(t=1,e=1,n=1,i=32,a=1,r=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),a=Math.floor(a);const u=[],d=[],h=[],m=[];let g=0;const _=[],p=n/2;let f=0;M(),r===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new re(d,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(m,2));function M(){const A=new w,I=new w;let C=0;const T=(e-t)/n;for(let D=0;D<=a;D++){const b=[],y=D/a,L=y*(e-t)+t;for(let F=0;F<=i;F++){const k=F/i,Y=k*c+o,q=Math.sin(Y),W=Math.cos(Y);I.x=L*q,I.y=-y*n+p,I.z=L*W,d.push(I.x,I.y,I.z),A.set(q,T,W).normalize(),h.push(A.x,A.y,A.z),m.push(k,1-y),b.push(g++)}_.push(b)}for(let D=0;D<i;D++)for(let b=0;b<a;b++){const y=_[b][D],L=_[b+1][D],F=_[b+1][D+1],k=_[b][D+1];u.push(y,L,k),u.push(L,F,k),C+=6}l.addGroup(f,C,0),f+=C}function S(A){const I=g,C=new Mt,T=new w;let D=0;const b=A===!0?t:e,y=A===!0?1:-1;for(let F=1;F<=i;F++)d.push(0,p*y,0),h.push(0,y,0),m.push(.5,.5),g++;const L=g;for(let F=0;F<=i;F++){const Y=F/i*c+o,q=Math.cos(Y),W=Math.sin(Y);T.x=b*W,T.y=p*y,T.z=b*q,d.push(T.x,T.y,T.z),h.push(0,y,0),C.x=q*.5+.5,C.y=W*.5*y+.5,m.push(C.x,C.y),g++}for(let F=0;F<i;F++){const k=I+F,Y=L+F;A===!0?u.push(Y,Y+1,k):u.push(Y+1,Y,k),D+=3}l.addGroup(f,D,A===!0?1:2),f+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new en(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class pn extends en{constructor(t=1,e=1,n=32,i=1,a=!1,r=0,o=Math.PI*2){super(0,t,e,n,i,a,r,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(t){return new pn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ji extends me{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const a=[],r=[];o(i),l(n),u(),this.setAttribute("position",new re(a,3)),this.setAttribute("normal",new re(a.slice(),3)),this.setAttribute("uv",new re(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const S=new w,A=new w,I=new w;for(let C=0;C<e.length;C+=3)m(e[C+0],S),m(e[C+1],A),m(e[C+2],I),c(S,A,I,M)}function c(M,S,A,I){const C=I+1,T=[];for(let D=0;D<=C;D++){T[D]=[];const b=M.clone().lerp(A,D/C),y=S.clone().lerp(A,D/C),L=C-D;for(let F=0;F<=L;F++)F===0&&D===C?T[D][F]=b:T[D][F]=b.clone().lerp(y,F/L)}for(let D=0;D<C;D++)for(let b=0;b<2*(C-D)-1;b++){const y=Math.floor(b/2);b%2===0?(h(T[D][y+1]),h(T[D+1][y]),h(T[D][y])):(h(T[D][y+1]),h(T[D+1][y+1]),h(T[D+1][y]))}}function l(M){const S=new w;for(let A=0;A<a.length;A+=3)S.x=a[A+0],S.y=a[A+1],S.z=a[A+2],S.normalize().multiplyScalar(M),a[A+0]=S.x,a[A+1]=S.y,a[A+2]=S.z}function u(){const M=new w;for(let S=0;S<a.length;S+=3){M.x=a[S+0],M.y=a[S+1],M.z=a[S+2];const A=p(M)/2/Math.PI+.5,I=f(M)/Math.PI+.5;r.push(A,1-I)}g(),d()}function d(){for(let M=0;M<r.length;M+=6){const S=r[M+0],A=r[M+2],I=r[M+4],C=Math.max(S,A,I),T=Math.min(S,A,I);C>.9&&T<.1&&(S<.2&&(r[M+0]+=1),A<.2&&(r[M+2]+=1),I<.2&&(r[M+4]+=1))}}function h(M){a.push(M.x,M.y,M.z)}function m(M,S){const A=M*3;S.x=t[A+0],S.y=t[A+1],S.z=t[A+2]}function g(){const M=new w,S=new w,A=new w,I=new w,C=new Mt,T=new Mt,D=new Mt;for(let b=0,y=0;b<a.length;b+=9,y+=6){M.set(a[b+0],a[b+1],a[b+2]),S.set(a[b+3],a[b+4],a[b+5]),A.set(a[b+6],a[b+7],a[b+8]),C.set(r[y+0],r[y+1]),T.set(r[y+2],r[y+3]),D.set(r[y+4],r[y+5]),I.copy(M).add(S).add(A).divideScalar(3);const L=p(I);_(C,y+0,M,L),_(T,y+2,S,L),_(D,y+4,A,L)}}function _(M,S,A,I){I<0&&M.x===1&&(r[S]=M.x-1),A.x===0&&A.z===0&&(r[S]=I/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ji(t.vertices,t.indices,t.radius,t.details)}}class Hs extends ji{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Hs(t.radius,t.detail)}}class Va extends ji{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,a,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Va(t.radius,t.detail)}}class Wa extends ji{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Wa(t.radius,t.detail)}}class mn extends me{constructor(t=.5,e=1,n=32,i=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:a,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],l=[],u=[];let d=t;const h=(e-t)/i,m=new w,g=new Mt;for(let _=0;_<=i;_++){for(let p=0;p<=n;p++){const f=a+p/n*r;m.x=d*Math.cos(f),m.y=d*Math.sin(f),c.push(m.x,m.y,m.z),l.push(0,0,1),g.x=(m.x/e+1)/2,g.y=(m.y/e+1)/2,u.push(g.x,g.y)}d+=h}for(let _=0;_<i;_++){const p=_*(n+1);for(let f=0;f<n;f++){const M=f+p,S=M,A=M+n+1,I=M+n+2,C=M+1;o.push(S,A,C),o.push(A,I,C)}}this.setIndex(o),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mn(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Xt extends me{constructor(t=1,e=32,n=16,i=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:a,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(r+o,Math.PI);let l=0;const u=[],d=new w,h=new w,m=[],g=[],_=[],p=[];for(let f=0;f<=n;f++){const M=[],S=f/n;let A=0;f===0&&r===0?A=.5/e:f===n&&c===Math.PI&&(A=-.5/e);for(let I=0;I<=e;I++){const C=I/e;d.x=-t*Math.cos(i+C*a)*Math.sin(r+S*o),d.y=t*Math.cos(r+S*o),d.z=t*Math.sin(i+C*a)*Math.sin(r+S*o),g.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),p.push(C+A,1-S),M.push(l++)}u.push(M)}for(let f=0;f<n;f++)for(let M=0;M<e;M++){const S=u[f][M+1],A=u[f][M],I=u[f+1][M],C=u[f+1][M+1];(f!==0||r>0)&&m.push(S,A,C),(f!==n-1||c<Math.PI)&&m.push(A,I,C)}this.setIndex(m),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(_,3)),this.setAttribute("uv",new re(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Xa extends me{constructor(t=1,e=.4,n=12,i=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:a},n=Math.floor(n),i=Math.floor(i);const r=[],o=[],c=[],l=[],u=new w,d=new w,h=new w;for(let m=0;m<=n;m++)for(let g=0;g<=i;g++){const _=g/i*a,p=m/n*Math.PI*2;d.x=(t+e*Math.cos(p))*Math.cos(_),d.y=(t+e*Math.cos(p))*Math.sin(_),d.z=e*Math.sin(p),o.push(d.x,d.y,d.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),h.subVectors(d,u).normalize(),c.push(h.x,h.y,h.z),l.push(g/i),l.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=i;g++){const _=(i+1)*m+g-1,p=(i+1)*(m-1)+g-1,f=(i+1)*(m-1)+g,M=(i+1)*m+g;r.push(_,p,M),r.push(p,f,M)}this.setIndex(r),this.setAttribute("position",new re(o,3)),this.setAttribute("normal",new re(c,3)),this.setAttribute("uv",new re(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xa(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Zt extends Zn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ec,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ya extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class nm extends Ya{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new tt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ba=new te,To=new w,wo=new w;class im{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new za,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;To.setFromMatrixPosition(t.matrixWorld),e.position.copy(To),wo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wo),e.updateMatrixWorld(),ba.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ba),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ba)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ro=new te,Hi=new w,Aa=new w;class sm extends im{constructor(){super(new Ve(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Mt(4,2),this._viewportCount=6,this._viewports=[new ae(2,1,1,1),new ae(0,1,1,1),new ae(3,1,1,1),new ae(1,1,1,1),new ae(3,0,1,1),new ae(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,a=t.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),Hi.setFromMatrixPosition(t.matrixWorld),n.position.copy(Hi),Aa.copy(n.position),Aa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Aa),n.updateMatrixWorld(),i.makeTranslation(-Hi.x,-Hi.y,-Hi.z),Ro.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ro)}}class Oa extends Ya{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new sm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class am extends Ya{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Co=new te;class rm{constructor(t,e,n=0,i=1/0){this.ray=new Wi(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new ka,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Co.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Co),this}intersectObject(t,e=!0,n=[]){return Na(t,this,n,e),n.sort(Lo),n}intersectObjects(t,e=!0,n=[]){for(let i=0,a=t.length;i<a;i++)Na(t[i],this,n,e);return n.sort(Lo),n}}function Lo(s,t){return s.distance-t.distance}function Na(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const a=s.children;for(let r=0,o=a.length;r<o;r++)Na(a[r],t,e,!0)}}class Po{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Oe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ba}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ba);const Ft={MULTIVERSE:"MULTIVERSE",UNIVERSE:"UNIVERSE",GALAXIES:"GALAXIES",GALAXY:"GALAXY",MILKY_WAY:"MILKY_WAY",SOLAR_SYSTEM:"SOLAR_SYSTEM",PLANETS:"PLANETS",PLANET_ORBIT:"PLANET_ORBIT",HABITABILITY:"HABITABILITY",BLACK_HOLES:"BLACK_HOLES",SPACECRAFT:"SPACECRAFT",LEARNING:"LEARNING",CLOSE_APPROACH:"CLOSE_APPROACH"},xc=[{id:"milky-way",name:"Milky Way Galaxy",type:"Barred Spiral (SBbc)",diameterLy:"100,000 ly",starsCount:"~100–400 Billion",distanceFromEarth:"0 ly (Inside Orion Arm)",constellation:"Sagittarius (Center)",description:"Our home barred spiral galaxy. The Solar System is located in the Orion Spur, about 26,000 light-years from the supermassive black hole Sagittarius A* at the galactic core.",position:[0,-4500,-22e3],radius:12e3,particleCount:65e3,armCount:4,armTwist:3.8,colorCore:"#ffe099",colorArms:"#7fb9ff",colorDust:"#ff9070",containsSolarSystem:!0,hasCoreBlackHole:!0},{id:"andromeda",name:"Andromeda Galaxy (M31)",type:"Barred Spiral (SA(s)b)",diameterLy:"220,000 ly",starsCount:"~1 Trillion",distanceFromEarth:"2.537 Million ly",constellation:"Andromeda",description:'The largest galaxy in the Local Group, currently approaching the Milky Way at ~110 km/s. In ~4.5 billion years, it will collide with the Milky Way to form "Milkdromeda".',position:[48e3,9500,-4e4],radius:18e3,particleCount:45e3,armCount:2,armTwist:4.2,colorCore:"#fff2cc",colorArms:"#99c2ff",colorDust:"#e699ff",containsSolarSystem:!1,hasCoreBlackHole:!0},{id:"triangulum",name:"Triangulum Galaxy (M33)",type:"Spiral Galaxy (SA(s)cd)",diameterLy:"60,000 ly",starsCount:"~40 Billion",distanceFromEarth:"2.73 Million ly",constellation:"Triangulum",description:"The third-largest member of our Local Group. A pinwheel-like spiral galaxy with vigorous star formation in the NGC 604 emission nebula.",position:[36e3,-14e3,45e3],radius:9500,particleCount:25e3,armCount:2,armTwist:3.2,colorCore:"#ffeedd",colorArms:"#aaccff",colorDust:"#70ffb0",containsSolarSystem:!1},{id:"lmc",name:"Large Magellanic Cloud",type:"Magellanic Spiral / Dwarf",diameterLy:"14,000 ly",starsCount:"~20 Billion",distanceFromEarth:"163,000 ly",constellation:"Dorado / Mensa",description:"A satellite galaxy of the Milky Way containing the Tarantula Nebula — the most active starburst region in our Local Group.",position:[-24e3,-19e3,18e3],radius:6500,particleCount:16e3,armCount:1,armTwist:1.5,colorCore:"#ffe6cc",colorArms:"#cce6ff",colorDust:"#ff80bf",containsSolarSystem:!1},{id:"smc",name:"Small Magellanic Cloud",type:"Dwarf Irregular",diameterLy:"7,000 ly",starsCount:"~3 Billion",distanceFromEarth:"204,000 ly",constellation:"Tucana",description:"A dwarf satellite galaxy undergoing gravitational tidal disruption from interactions with the Milky Way and LMC.",position:[-28e3,-24e3,1e4],radius:4500,particleCount:1e4,armCount:0,armTwist:.5,colorCore:"#e6f2ff",colorArms:"#b3d9ff",colorDust:"#ffb3d9",containsSolarSystem:!1},{id:"sombrero",name:"Sombrero Galaxy (M104)",type:"Unbarred Spiral / Lenticular",diameterLy:"50,000 ly",starsCount:"~100 Billion",distanceFromEarth:"29.3 Million ly",constellation:"Virgo",description:"Famous for its bright white bulbous core and a prominent thick, dark dust lane in its inclined disk, resembling a Mexican hat.",position:[-65e3,24e3,-55e3],radius:12e3,particleCount:22e3,armCount:2,armTwist:5,colorCore:"#ffffff",colorArms:"#ffe0b2",colorDust:"#422810",containsSolarSystem:!1},{id:"whirlpool",name:"Whirlpool Galaxy (M51a)",type:"Grand Design Spiral",diameterLy:"76,000 ly",starsCount:"~100 Billion",distanceFromEarth:"23 Million ly",constellation:"Canes Venatici",description:"The quintessential grand design spiral galaxy, interacting with companion dwarf galaxy NGC 5195 to trigger massive star formation.",position:[62e3,32e3,22e3],radius:14e3,particleCount:28e3,armCount:2,armTwist:4.8,colorCore:"#fff8e7",colorArms:"#64b5f6",colorDust:"#e91e63",containsSolarSystem:!1},{id:"m87-galaxy",name:"Messier 87 (Virgo A)",type:"Supergiant Elliptical (E0-E1)",diameterLy:"240,000 ly",starsCount:"~1 Trillion",distanceFromEarth:"53.5 Million ly",constellation:"Virgo",description:"One of the most massive galaxies known, harboring a 6.5-billion solar mass supermassive black hole with a 5,000-ly relativistic plasma jet.",position:[-85e3,-38e3,-78e3],radius:22e3,particleCount:35e3,armCount:0,armTwist:.1,colorCore:"#fff5e6",colorArms:"#ffe0b2",colorDust:"#ffcc80",isElliptical:!0,containsSolarSystem:!1}],Mc=[{id:"sagittarius-a",name:"Sagittarius A*",type:"Supermassive Black Hole",mass:"4.154 Million M☉",eventHorizonRadius:"12 Million km (0.08 AU)",accretionTemp:"10^9 Kelvin",distanceFromEarth:"26,673 ly",location:"Milky Way Galactic Center",description:"The supermassive gravitational anchor at the heart of our galaxy. Imaged by the Event Horizon Telescope in 2022, revealing a ring-like shadow created by extreme gravitational light bending.",position:[0,-4500,-22e3],eventHorizonSize:85,diskInnerRadius:130,diskOuterRadius:420,jetHeight:650,jetColor:"#00e5ff",diskColorInner:"#ffffff",diskColorMid:"#ff9100",diskColorOuter:"#d50000"},{id:"cygnus-x1",name:"Cygnus X-1",type:"Stellar-Mass Black Hole (Binary)",mass:"21.2 M☉",eventHorizonRadius:"62.6 km",accretionTemp:"10^7 Kelvin",distanceFromEarth:"7,300 ly",location:"Cygnus Arm",description:"The first widely accepted black hole candidate, discovered in 1964. It strips matter from a blue supergiant companion star, emitting intense high-energy X-rays.",position:[5500,700,-3800],eventHorizonSize:40,diskInnerRadius:65,diskOuterRadius:210,jetHeight:380,jetColor:"#b388ff",diskColorInner:"#e1bee7",diskColorMid:"#7c4dff",diskColorOuter:"#304ffe"},{id:"m87-blackhole",name:"M87* (Pōwehi)",type:"Supergiant Supermassive Black Hole",mass:"6.5 Billion M☉",eventHorizonRadius:"19 Billion km (127 AU)",accretionTemp:"10^11 Kelvin",distanceFromEarth:"53.5 Million ly",location:"Center of Messier 87 Galaxy",description:"The first black hole ever directly photographed (2019 EHT). Its event horizon is larger than our entire Solar System, blasting a relativistic plasma jet 5,000 light-years into space.",position:[-85e3,-38e3,-78e3],eventHorizonSize:140,diskInnerRadius:220,diskOuterRadius:750,jetHeight:1200,jetColor:"#ff1744",diskColorInner:"#ffff8d",diskColorMid:"#ff6d00",diskColorOuter:"#dd2c00"}],Ec=[{id:"crab-pulsar",name:"Crab Pulsar (PSR B0531+21)",type:"Young Spin-Powered Pulsar",spinRate:"30.2 rotations / sec (33 ms)",surfaceMagneticField:"7.6 × 10^12 Gauss",distanceFromEarth:"6,500 ly",location:"Crab Nebula (Taurus)",description:"The remnant neutron star of supernova SN 1054 recorded by ancient astronomers. Weighs more than the Sun compressed into a 20 km ball, sweeping beams of gamma and radio waves like a cosmic lighthouse.",position:[-7e3,1500,5200],radius:18,beamLength:420,beamRadius:45,spinSpeed:15,color:"#00e5ff"},{id:"vela-pulsar",name:"Vela Pulsar (PSR B0833-45)",type:"Radio & Gamma-Ray Pulsar",spinRate:"11.2 rotations / sec (89 ms)",surfaceMagneticField:"3.4 × 10^12 Gauss",distanceFromEarth:"936 ly",location:"Vela Supernova Remnant",description:'One of the brightest high-energy objects in the night sky, famous for spin speed-ups ("glitches") caused by vortex unpinning inside its superfluid neutron core.',position:[4200,-1800,-6e3],radius:16,beamLength:360,beamRadius:38,spinSpeed:9,color:"#76ff03"}],bc=[{id:"orion-nebula",name:"Orion Nebula (M42)",type:"Diffuse Emission & Reflection Nebula",spanLy:"24 ly",distanceFromEarth:"1,344 ly",constellation:"Orion",description:"The closest massive star nursery to Earth. The Trapezium cluster at its heart excites hydrogen gas with intense UV radiation, producing brilliant pink, magenta, and cyan hues.",position:[3500,-800,6e3],radius:450,particleCount:4e3,colors:["#ff1779","#9c27b0","#00e5ff","#ff6d00"]},{id:"pillars-of-creation",name:"Pillars of Creation (Eagle Nebula M16)",type:"Star-Forming Molecular Dust Columns",spanLy:"4–5 ly tall",distanceFromEarth:"7,000 ly",constellation:"Serpens",description:"Iconic towering columns of interstellar gas and dust where newborn stars emerge from dense evaporating gaseous globules (EGGs).",position:[-5e3,2200,-4200],radius:380,particleCount:3500,colors:["#ff9100","#ffd600","#00b0ff","#4a148c"]},{id:"crab-nebula",name:"Crab Nebula (M1)",type:"Supernova Remnant (Plerion)",spanLy:"11 ly",distanceFromEarth:"6,500 ly",constellation:"Taurus",description:"Expanding gaseous filaments energized by the Crab Pulsar at its center, containing complex magnetic synchrotron emissions.",position:[-7e3,1500,5200],radius:350,particleCount:3200,colors:["#00e676","#ff3d00","#2979ff","#ffea00"]},{id:"ring-nebula",name:"Ring Nebula (M57)",type:"Planetary Nebula",spanLy:"1.3 ly",distanceFromEarth:"2,570 ly",constellation:"Lyra",description:"The glowing expelled outer atmosphere of a dying red giant star, leaving a hot white dwarf core at the center.",position:[6200,2800,3100],radius:300,particleCount:2600,colors:["#00e5ff","#76ff03","#ff1744","#651fff"]}],Li={sun:{id:"sun",name:"The Sun (Sol)",type:"Yellow Dwarf Star (G2V)",mass:"1.989 × 10^30 kg (333,000 Earths)",radiusKm:"696,340 km",surfaceTemp:"5,778 K (5,505 °C)",coreTemp:"15.7 Million K",rotationPeriod:"25.38 Earth days",luminosity:"3.828 × 10^26 Watts",age:"4.6 Billion Years",composition:"73.4% H, 25.0% He, 1.6% heavier elements",description:"The heart of our Solar System, generating 384.6 yottawatts of energy via proton-proton chain nuclear fusion in its core.",visualRadius:36,color:"#ff8c00"},planets:[{id:"mercury",name:"Mercury",type:"Terrestrial Planet",radiusKm:"2,439.7 km",mass:"3.301 × 10^23 kg",gravity:"3.7 m/s² (0.38g)",distanceAU:.387,semiMajorAxis:58,eccentricity:.2056,inclination:7,orbitalPeriodDays:87.97,rotationPeriodHours:1407.6,surfaceTempRange:"-180 °C to +430 °C",atmosphere:"Trace exosphere (Na, Mg, O, H, He)",moonsCount:0,visualRadius:3.2,color:"#a8a8a8",textureStyle:"rocky-gray",description:"The smallest and innermost planet, covered with impact craters like our Moon, experiencing the most extreme temperature swings in the Solar System."},{id:"venus",name:"Venus",type:"Terrestrial Planet",radiusKm:"6,051.8 km",mass:"4.867 × 10^24 kg",gravity:"8.87 m/s² (0.90g)",distanceAU:.723,semiMajorAxis:88,eccentricity:.0067,inclination:3.39,orbitalPeriodDays:224.7,rotationPeriodHours:-5832.5,surfaceTempRange:"465 °C (constant)",atmosphere:"96.5% CO2, 3.5% N2 (92 atm pressure)",moonsCount:0,visualRadius:5.8,color:"#f2d49b",textureStyle:"dense-atmosphere",description:`Earth's "evil twin", suffering from a runaway greenhouse effect that makes its surface hotter than Mercury, with sulfuric acid clouds and retrograde rotation.`},{id:"earth",name:"Earth",type:"Terrestrial Planet (Habitable)",radiusKm:"6,371.0 km",mass:"5.972 × 10^24 kg",gravity:"9.807 m/s² (1.00g)",distanceAU:1,semiMajorAxis:125,eccentricity:.0167,inclination:0,orbitalPeriodDays:365.256,rotationPeriodHours:23.934,axialTilt:23.44,surfaceTempRange:"-88 °C to +58 °C (avg 15 °C)",atmosphere:"78.1% N2, 20.9% O2, 0.93% Ar, 0.04% CO2",moonsCount:1,visualRadius:6.2,color:"#2b82c9",textureStyle:"earth-special",description:"The only known world harboring life, with vast liquid water oceans, an active magnetic dynamo, plate tectonics, and a protective oxygen-rich atmosphere.",moons:[{id:"moon",name:"The Moon (Luna)",radiusKm:"1,737.4 km",mass:"7.342 × 10^22 kg",gravity:"1.62 m/s² (0.166g)",distanceKm:"384,400 km",orbitalRadius:16,orbitalPeriodDays:27.32,visualRadius:1.6,color:"#b0b0b0",description:"Earth's only natural satellite, tidally locked to Earth, driving ocean tides and stabilizing Earth's axial tilt."}]},{id:"mars",name:"Mars",type:"Terrestrial Planet (Red Planet)",radiusKm:"3,389.5 km",mass:"6.417 × 10^23 kg",gravity:"3.72 m/s² (0.38g)",distanceAU:1.524,semiMajorAxis:175,eccentricity:.0934,inclination:1.85,orbitalPeriodDays:686.98,rotationPeriodHours:24.623,axialTilt:25.19,surfaceTempRange:"-140 °C to +20 °C (avg -63 °C)",atmosphere:"95.3% CO2, 2.6% N2, 1.9% Ar (0.006 atm)",moonsCount:2,visualRadius:4.1,color:"#c84c16",textureStyle:"martian-red",description:"The Red Planet, home to Olympus Mons (22 km high volcano) and Valles Marineris (4,000 km long canyon).",moons:[{id:"phobos",name:"Phobos",visualRadius:.5,orbitalRadius:7.5,orbitalPeriodDays:.32,color:"#8d6e63"},{id:"deimos",name:"Deimos",visualRadius:.4,orbitalRadius:10.5,orbitalPeriodDays:1.26,color:"#a1887f"}]},{id:"jupiter",name:"Jupiter",type:"Gas Giant",radiusKm:"69,911 km",mass:"1.898 × 10^27 kg (318 Earths)",gravity:"24.79 m/s² (2.53g)",distanceAU:5.204,semiMajorAxis:260,eccentricity:.0485,inclination:1.3,orbitalPeriodDays:4332.59,rotationPeriodHours:9.925,surfaceTempRange:"-110 °C (cloud tops)",atmosphere:"89.8% H2, 10.2% He, trace CH4, NH3",moonsCount:95,visualRadius:18,color:"#e2b388",textureStyle:"jupiter-bands",description:"The king of planets, possessing a magnetic field 20,000 times stronger than Earth's and the Great Red Spot anticyclonic storm raging for over 350 years.",moons:[{id:"io",name:"Io (Volcanic)",radiusKm:"1,821.6 km",visualRadius:1.5,orbitalRadius:28,orbitalPeriodDays:1.77,color:"#ffeb3b",description:"Most volcanically active body in the Solar System, fueled by tidal heating."},{id:"europa",name:"Europa (Subsurface Ocean)",radiusKm:"1,560.8 km",visualRadius:1.3,orbitalRadius:36,orbitalPeriodDays:3.55,color:"#e0f7fa",description:"Smooth ice crust covering a global subsurface liquid ocean holding 2x Earth's water."},{id:"ganymede",name:"Ganymede (Largest Moon)",radiusKm:"2,634.1 km",visualRadius:2.1,orbitalRadius:46,orbitalPeriodDays:7.15,color:"#9e9e9e",description:"The largest moon in the Solar System, larger than Mercury, with its own magnetic field."},{id:"callisto",name:"Callisto (Cratered Ice)",radiusKm:"2,410.3 km",visualRadius:1.9,orbitalRadius:58,orbitalPeriodDays:16.69,color:"#616161",description:"Most heavily cratered object in the Solar System, an ancient geological time capsule."}]},{id:"saturn",name:"Saturn",type:"Gas Giant (Ringed)",radiusKm:"58,232 km",mass:"5.683 × 10^26 kg (95 Earths)",gravity:"10.44 m/s² (1.07g)",distanceAU:9.582,semiMajorAxis:350,eccentricity:.0555,inclination:2.49,axialTilt:26.73,orbitalPeriodDays:10759.22,rotationPeriodHours:10.656,surfaceTempRange:"-140 °C",atmosphere:"96.3% H2, 3.25% He, trace CH4",moonsCount:146,visualRadius:15,ringInnerRadius:19,ringOuterRadius:38,color:"#faedcd",textureStyle:"saturn-rings",description:"Adorned with spectacular rings spanning up to 282,000 km yet averaging only 10 meters in thickness, composed of billions of chunks of almost pure water ice.",moons:[{id:"titan",name:"Titan (Atmosphere & Methane Lakes)",radiusKm:"2,574.7 km",visualRadius:2.2,orbitalRadius:52,orbitalPeriodDays:15.95,color:"#ffb74d",description:"Only moon with a dense atmosphere and stable surface liquid lakes (methane/ethane)."},{id:"enceladus",name:"Enceladus (Cryovolcanoes)",radiusKm:"252.1 km",visualRadius:.8,orbitalRadius:26,orbitalPeriodDays:1.37,color:"#ffffff",description:"Active ice geysers spraying water vapor and organic molecules from a subsurface ocean into space."}]},{id:"uranus",name:"Uranus",type:"Ice Giant",radiusKm:"25,362 km",mass:"8.681 × 10^25 kg (14.5 Earths)",gravity:"8.69 m/s² (0.89g)",distanceAU:19.201,semiMajorAxis:430,eccentricity:.0463,inclination:.77,axialTilt:97.77,orbitalPeriodDays:30685.4,rotationPeriodHours:-17.24,surfaceTempRange:"-224 °C",atmosphere:"82.5% H2, 15.2% He, 2.3% CH4 (cyan color)",moonsCount:28,visualRadius:9.5,color:"#5ee2f0",textureStyle:"ice-cyan",description:"An ice giant rolling on its side with an axial tilt of 98°, giving it extreme 42-year seasons of continuous sunlight and darkness at its poles."},{id:"neptune",name:"Neptune",type:"Ice Giant",radiusKm:"24,622 km",mass:"1.024 × 10^26 kg (17.1 Earths)",gravity:"11.15 m/s² (1.14g)",distanceAU:30.047,semiMajorAxis:510,eccentricity:.0095,inclination:1.77,axialTilt:28.32,orbitalPeriodDays:60189,rotationPeriodHours:16.11,surfaceTempRange:"-218 °C",atmosphere:"80.0% H2, 19.0% He, 1.5% CH4",moonsCount:16,visualRadius:9.2,color:"#2997ff",textureStyle:"deep-blue",description:"The outermost major planet, battered by supersonic planetary winds exceeding 2,100 km/h.",moons:[{id:"triton",name:"Triton (Retrograde Ice Moon)",radiusKm:"1,353.4 km",visualRadius:1.4,orbitalRadius:30,orbitalPeriodDays:-5.88,color:"#b0bec5",description:"Captured Kuiper Belt object with nitrogen geysers, orbiting backwards relative to Neptune."}]},{id:"pluto",name:"Pluto (134340 Pluto)",type:"Dwarf Planet (Plutoid)",radiusKm:"1,188.3 km",mass:"1.303 × 10^22 kg (0.0022 Earths)",gravity:"0.62 m/s² (0.063g)",distanceAU:39.482,semiMajorAxis:590,eccentricity:.2488,inclination:17.16,orbitalPeriodDays:90560,rotationPeriodHours:-153.29,surfaceTempRange:"-232 °C to -223 °C",atmosphere:"Thin seasonal N2, CH4, CO (10 µbar)",moonsCount:5,visualRadius:2.2,color:"#cbb5ad",textureStyle:"pluto-heart",description:"A fascinating dwarf planet in the Kuiper Belt with a famous nitrogen ice heart plain (Sputnik Planitia) and water ice mountain ranges."}]},om=[{id:"voyager-1",name:"Voyager 1",launchYear:1977,status:"Interstellar Space (Farthest Human Object)",distanceFromEarth:"163.5 AU (24.4 Billion km)",position:[620,280,410],speedKms:"17.0 km/s",description:"Launched by NASA in 1977, now exploring interstellar space beyond the heliopause carrying the famous Golden Record."},{id:"jwst",name:"James Webb Space Telescope (JWST)",launchYear:2021,status:"Sun-Earth L2 Lagrange Point",distanceFromEarth:"1.5 Million km",position:[130,4,15],description:"Premier space observatory featuring a 6.5m gold-coated beryllium mirror observing the cosmos in infrared."}],Ac=[{id:"proxima-centauri",name:"Proxima Centauri",catalogId:"HIP 70890 / GJ 551",objectType:"Star (Red Dwarf)",spectralType:"M5.5Ve",status:"REAL CATALOGUED OBJECT",visualizationStatus:"PROCEDURAL STELLAR SHADER",galaxy:"Milky Way (Alpha Centauri System)",distanceLy:"4.2465 ly",distanceFromEarth:"4.25 ly",coordinates:"RA 14h 29m 43s | Dec -62° 40′ 46″",mass:"0.1221 M☉",radiusKm:"107,280 km (0.154 R☉)",surfaceTemp:"3,042 K",luminosity:"0.0017 L☉",age:"4.85 Billion Years",discoveryYear:"1915 (Robert Innes)",description:"The closest known star to our Solar System. A flare star red dwarf hosting at least two confirmed exoplanets (Proxima b in the habitable zone and Proxima c).",source:"SIMBAD Astronomical Database / ESO",position:[750,-180,1100],visualRadius:8,color:"#ff6230",coronaColor:"#ff9060"},{id:"alpha-centauri-a",name:"Alpha Centauri A (Rigil Kentaurus)",catalogId:"HIP 71683 / HD 128620",objectType:"Star (Yellow Dwarf)",spectralType:"G2V",status:"REAL CATALOGUED OBJECT",visualizationStatus:"PROCEDURAL STELLAR SHADER",galaxy:"Milky Way",distanceLy:"4.37 ly",distanceFromEarth:"4.37 ly",coordinates:"RA 14h 39m 36s | Dec -60° 50′ 02″",mass:"1.100 M☉",radiusKm:"851,000 km (1.223 R☉)",surfaceTemp:"5,790 K",luminosity:"1.519 L☉",age:"5.3 Billion Years",description:"The primary star of the Alpha Centauri triple star system, very similar in mass, temperature, and spectral type to our Sun.",source:"SIMBAD / Yale Bright Star Catalog",position:[780,-190,1150],visualRadius:18,color:"#ffdd66",coronaColor:"#ffeeaa"},{id:"alpha-centauri-b",name:"Alpha Centauri B (Toliman)",catalogId:"HIP 71681 / HD 128621",objectType:"Star (Orange Dwarf)",spectralType:"K1V",status:"REAL CATALOGUED OBJECT",visualizationStatus:"PROCEDURAL STELLAR SHADER",galaxy:"Milky Way",distanceLy:"4.37 ly",distanceFromEarth:"4.37 ly",coordinates:"RA 14h 39m 35s | Dec -60° 50′ 13″",mass:"0.907 M☉",radiusKm:"601,000 km (0.863 R☉)",surfaceTemp:"5,260 K",luminosity:"0.500 L☉",age:"5.3 Billion Years",description:"The secondary star in the Alpha Centauri binary pair, orbiting Alpha Centauri A with an 80-year period.",source:"SIMBAD / ESO",position:[805,-195,1165],visualRadius:14,color:"#ffaa44",coronaColor:"#ffcc77"},{id:"sirius-a",name:"Sirius A (The Dog Star)",catalogId:"HIP 32349 / HD 48915",objectType:"Star (A-type Main Sequence)",spectralType:"A1V",status:"REAL CATALOGUED OBJECT",visualizationStatus:"PROCEDURAL STELLAR SHADER",galaxy:"Milky Way",distanceLy:"8.60 ly",distanceFromEarth:"8.60 ly",coordinates:"RA 06h 45m 09s | Dec -16° 42′ 58″",mass:"2.063 M☉",radiusKm:"1,190,000 km (1.711 R☉)",surfaceTemp:"9,940 K",luminosity:"25.4 L☉",age:"242 Million Years",description:"The brightest star in Earth’s night sky. A luminous white main-sequence star accompanied by a dense white dwarf companion, Sirius B.",source:"NASA ADS / SIMBAD",position:[-1400,-320,1800],visualRadius:24,color:"#e6f0ff",coronaColor:"#b3d1ff"},{id:"sirius-b",name:"Sirius B (The Pup)",catalogId:"HIP 32349 B",objectType:"White Dwarf",spectralType:"DA2",status:"REAL CATALOGUED OBJECT",visualizationStatus:"PROCEDURAL STELLAR SHADER",galaxy:"Milky Way",distanceLy:"8.60 ly",distanceFromEarth:"8.60 ly",coordinates:"RA 06h 45m 09s | Dec -16° 43′ 06″",mass:"1.018 M☉ (Compressed Sun-mass)",radiusKm:"5,800 km (0.0084 R☉ — Earth size)",surfaceTemp:"25,200 K (Extremely Hot)",luminosity:"0.056 L☉",age:"228 Million Years (as WD)",description:"The first white dwarf ever discovered (1862). Contains roughly the mass of the Sun compressed into a sphere smaller than Earth with extreme surface gravity (~350,000g).",source:"Hubble Space Telescope / SIMBAD",position:[-1380,-315,1785],visualRadius:3.5,color:"#ffffff",coronaColor:"#99c2ff"},{id:"betelgeuse",name:"Betelgeuse (Alpha Orionis)",catalogId:"HIP 27989 / HD 39801",objectType:"Red Supergiant",spectralType:"M1-2 Ia-ab",status:"REAL CATALOGUED OBJECT",visualizationStatus:"PROCEDURAL STELLAR SHADER",galaxy:"Milky Way",distanceLy:"548 ly",distanceFromEarth:"548 ly",coordinates:"RA 05h 55m 10s | Dec +07° 24′ 25″",mass:"16.5–19 M☉",radiusKm:"617,000,000 km (887 R☉ — Extends beyond Jupiter)",surfaceTemp:"3,600 K",luminosity:"126,000 L☉",age:"10 Million Years",description:"A colossal pulsating red supergiant star in Orion nearing the end of its life, destined to explode as a dramatic core-collapse supernova.",source:"ALMA / ESO / SIMBAD",position:[2400,3100,-6800],visualRadius:75,color:"#ff3a10",coronaColor:"#ff7040"},{id:"rigel",name:"Rigel (Beta Orionis)",catalogId:"HIP 24436 / HD 34085",objectType:"Blue-White Supergiant",spectralType:"B8Ia",status:"REAL CATALOGUED OBJECT",visualizationStatus:"PROCEDURAL STELLAR SHADER",galaxy:"Milky Way",distanceLy:"860 ly",distanceFromEarth:"860 ly",coordinates:"RA 05h 14m 32s | Dec -08° 12′ 06″",mass:"21 M☉",radiusKm:"54,900,000 km (78.9 R☉)",surfaceTemp:"12,100 K",luminosity:"120,000 L☉",age:"8 Million Years",description:"The brightest star in Orion and seventh-brightest in the night sky. Radiates over 100,000 times more light than the Sun.",source:"Hipparcos / SIMBAD",position:[2800,-2200,-8200],visualRadius:42,color:"#8ab8ff",coronaColor:"#cce0ff"},{id:"vega",name:"Vega (Alpha Lyrae)",catalogId:"HIP 91262 / HD 172167",objectType:"Star (A-type Main Sequence)",spectralType:"A0Va",status:"REAL CATALOGUED OBJECT",visualizationStatus:"PROCEDURAL STELLAR SHADER",galaxy:"Milky Way",distanceLy:"25.04 ly",distanceFromEarth:"25.04 ly",coordinates:"RA 18h 36m 56s | Dec +38° 47′ 01″",mass:"2.135 M☉",radiusKm:"1,643,000 km (2.362 R☉)",surfaceTemp:"9,602 K",luminosity:"40.12 L☉",age:"455 Million Years",description:"The baseline calibration star for astronomical photometry (magnitude 0.0). Rapidly rotating (equatorial bulge) with a prominent circumstellar dust disk.",source:"CHARA Array / SIMBAD",position:[-2800,4200,3100],visualRadius:22,color:"#d4e6ff",coronaColor:"#99c2ff"},{id:"polaris",name:"Polaris (The North Star)",catalogId:"HIP 11767 / HD 8890",objectType:"Yellow Supergiant (Classical Cepheid)",spectralType:"F7Ib",status:"REAL CATALOGUED OBJECT",visualizationStatus:"PROCEDURAL STELLAR SHADER",galaxy:"Milky Way",distanceLy:"433 ly",distanceFromEarth:"433 ly",coordinates:"RA 02h 31m 49s | Dec +89° 15′ 51″",mass:"5.4 M☉",radiusKm:"26,000,000 km (37.5 R☉)",surfaceTemp:"6,015 K",luminosity:"1,260 L☉",age:"70 Million Years",description:"The current northern pole star, aligned within 1 degree of Earth’s true rotational axis. A multiple star system led by a pulsating Cepheid supergiant.",source:"Gaia DR3 / SIMBAD",position:[600,8900,-3200],visualRadius:32,color:"#fff3cc",coronaColor:"#ffe699"},{id:"antares",name:"Antares (Alpha Scorpii)",catalogId:"HIP 80763 / HD 148478",objectType:"Red Supergiant",spectralType:"M1.5Iab-Ib",status:"REAL CATALOGUED OBJECT",visualizationStatus:"PROCEDURAL STELLAR SHADER",galaxy:"Milky Way",distanceLy:"550 ly",distanceFromEarth:"550 ly",coordinates:"RA 16h 29m 24s | Dec -26° 25′ 55″",mass:"11–14 M☉",radiusKm:"473,000,000 km (680 R☉)",surfaceTemp:"3,660 K",luminosity:"75,900 L☉",age:"12 Million Years",description:'The "Heart of the Scorpion", a massive red supergiant enveloped in a glowing reflection/emission nebula (Rho Ophiuchi cloud complex).',source:"VLTI / ESO / SIMBAD",position:[-3200,-1800,-6400],visualRadius:65,color:"#ff3010",coronaColor:"#ff6633"},{id:"barnards-star",name:"Barnard's Star",catalogId:"HIP 87937 / GJ 699",objectType:"Star (Red Dwarf)",spectralType:"M4V",status:"REAL CATALOGUED OBJECT",visualizationStatus:"PROCEDURAL STELLAR SHADER",galaxy:"Milky Way",distanceLy:"5.96 ly",distanceFromEarth:"5.96 ly",coordinates:"RA 17h 57m 48s | Dec +04° 41′ 36″",mass:"0.144 M☉",radiusKm:"136,000 km (0.196 R☉)",surfaceTemp:"3,134 K",luminosity:"0.0035 L☉",age:"10 Billion Years (Ancient Halo Star)",description:"The fourth-closest individual star to the Sun and the star with the highest known proper motion across Earth’s sky (10.3 arcseconds/year).",source:"NASA Exoplanet Archive / SIMBAD",position:[-950,420,1650],visualRadius:9,color:"#ff5522",coronaColor:"#ff8855"},{id:"tau-ceti",name:"Tau Ceti",catalogId:"HIP 8102 / HD 10700",objectType:"Star (Yellow Dwarf / Solar Analog)",spectralType:"G8.5V",status:"REAL CATALOGUED OBJECT",visualizationStatus:"PROCEDURAL STELLAR SHADER",galaxy:"Milky Way",distanceLy:"11.90 ly",distanceFromEarth:"11.90 ly",coordinates:"RA 01h 44m 04s | Dec -15° 56′ 15″",mass:"0.783 M☉",radiusKm:"552,000 km (0.793 R☉)",surfaceTemp:"5,344 K",luminosity:"0.52 L☉",age:"5.8 Billion Years",description:"A stable single yellow-orange dwarf star hosting a dense debris disk and multiple exoplanet candidates, a key target in the search for extraterrestrial life.",source:"HARPS / SIMBAD",position:[1800,-850,2100],visualRadius:15,color:"#ffd066",coronaColor:"#ffe599"}],Tc=[{id:"trappist-1",name:"TRAPPIST-1 System",catalogId:"2MASS J23062928-0502285",objectType:"Exoplanetary System (7 Rocky Worlds)",status:"REAL CATALOGUED OBJECT",visualizationStatus:"REAL ORBITS / PROCEDURAL PLANETARY SURFACES",distanceLy:"39.46 ly",distanceFromEarth:"39.46 ly",constellation:"Aquarius",discoveryYear:"2016–2017 (Gillon et al. / Spitzer / Kepler)",description:"An ultra-cool red dwarf star hosting the largest number of confirmed Earth-sized rocky exoplanets ever found in a single system, with three planets (e, f, g) in the circumstellar habitable zone.",source:"NASA Exoplanet Archive / Nature (2017)",position:[3200,-1100,4800],star:{name:"TRAPPIST-1",spectralType:"M8V (Ultra-Cool Dwarf)",mass:"0.0898 M☉",radiusKm:"84,200 km (0.121 R☉)",surfaceTemp:"2,566 K",luminosity:"0.000553 L☉",visualRadius:7,color:"#ff4d1a"},planets:[{id:"trappist-1b",name:"TRAPPIST-1b",type:"Terrestrial Exoplanet (Tidally Locked)",status:"REAL CATALOGUED OBJECT",visualizationStatus:"ARTIST-INSPIRED / PROCEDURAL VISUALIZATION",mass:"1.374 M⊕",radiusKm:"7,110 km (1.116 R⊕)",orbitalPeriodDays:1.51,semiMajorAxis:18,eccentricity:.006,surfaceTempRange:"120 °C to 230 °C",visualRadius:2.8,color:"#d48866",textureStyle:"rocky-gray",description:"The innermost planet, intensely heated by the host star with possible runaway greenhouse conditions."},{id:"trappist-1c",name:"TRAPPIST-1c",type:"Terrestrial Exoplanet",status:"REAL CATALOGUED OBJECT",visualizationStatus:"ARTIST-INSPIRED / PROCEDURAL VISUALIZATION",mass:"1.308 M⊕",radiusKm:"6,990 km (1.097 R⊕)",orbitalPeriodDays:2.42,semiMajorAxis:26,eccentricity:.007,surfaceTempRange:"60 °C to 110 °C",visualRadius:2.7,color:"#c99a72",textureStyle:"dense-atmosphere",description:"Dense rocky world examined by JWST, showing a thin or absent thick carbon dioxide atmosphere."},{id:"trappist-1d",name:"TRAPPIST-1d",type:"Terrestrial Exoplanet",status:"REAL CATALOGUED OBJECT",visualizationStatus:"ARTIST-INSPIRED / PROCEDURAL VISUALIZATION",mass:"0.388 M⊕",radiusKm:"4,990 km (0.784 R⊕)",orbitalPeriodDays:4.05,semiMajorAxis:34,eccentricity:.007,surfaceTempRange:"15 °C",visualRadius:2.1,color:"#b08d75",textureStyle:"rocky-gray",description:"Smallest planet in the system, receiving roughly the same amount of solar radiation as Earth."},{id:"trappist-1e",name:"TRAPPIST-1e (Habitable Zone)",type:"Terrestrial Exoplanet (Prime Astrobiology Target)",status:"REAL CATALOGUED OBJECT",visualizationStatus:"ARTIST-INSPIRED / PROCEDURAL VISUALIZATION",mass:"0.692 M⊕",radiusKm:"5,860 km (0.920 R⊕)",orbitalPeriodDays:6.1,semiMajorAxis:44,eccentricity:.005,surfaceTempRange:"-22 °C to +15 °C",visualRadius:2.4,color:"#4682b4",textureStyle:"earth-special",description:"Considered one of the most potentially habitable exoplanets known, with Earth-like density, size, and incident stellar flux."},{id:"trappist-1f",name:"TRAPPIST-1f (Habitable Zone)",type:"Terrestrial Exoplanet (Water-Rich Candidate)",status:"REAL CATALOGUED OBJECT",visualizationStatus:"ARTIST-INSPIRED / PROCEDURAL VISUALIZATION",mass:"1.039 M⊕",radiusKm:"6,660 km (1.045 R⊕)",orbitalPeriodDays:9.21,semiMajorAxis:56,eccentricity:.01,surfaceTempRange:"-54 °C",visualRadius:2.6,color:"#5f9ea0",textureStyle:"ice-cyan",description:"Orbits within the habitable zone, with models suggesting significant volatile water-ice content."},{id:"trappist-1g",name:"TRAPPIST-1g (Habitable Zone)",type:"Terrestrial Exoplanet",status:"REAL CATALOGUED OBJECT",visualizationStatus:"ARTIST-INSPIRED / PROCEDURAL VISUALIZATION",mass:"1.321 M⊕",radiusKm:"7,350 km (1.153 R⊕)",orbitalPeriodDays:12.35,semiMajorAxis:68,eccentricity:.002,surfaceTempRange:"-75 °C",visualRadius:2.9,color:"#708090",textureStyle:"ice-cyan",description:"The largest planet in the system, cold and potentially covered in an extensive global ice sheet."},{id:"trappist-1h",name:"TRAPPIST-1h",type:"Terrestrial Exoplanet (Frozen World)",status:"REAL CATALOGUED OBJECT",visualizationStatus:"ARTIST-INSPIRED / PROCEDURAL VISUALIZATION",mass:"0.326 M⊕",radiusKm:"4,930 km (0.773 R⊕)",orbitalPeriodDays:18.77,semiMajorAxis:82,eccentricity:.006,surfaceTempRange:"-104 °C",visualRadius:2,color:"#a9a9a9",textureStyle:"pluto-heart",description:"The outermost and coldest planet in the TRAPPIST-1 system, a frozen icy world."}]},{id:"proxima-system",name:"Proxima Centauri System",catalogId:"HIP 70890 System",objectType:"Exoplanetary System (Closest Exoplanet)",status:"REAL CATALOGUED OBJECT",visualizationStatus:"REAL ORBITS / PROCEDURAL PLANETARY SURFACES",distanceLy:"4.25 ly",distanceFromEarth:"4.25 ly",constellation:"Centaurus",discoveryYear:"2016 (Anglada-Escudé et al. / ESO)",description:"The closest planetary system to Earth. Hosts Proxima b, an Earth-mass exoplanet orbiting within the star’s habitable zone.",source:"Nature (2016) / ESO / HARPS",position:[750,-180,1100],star:{name:"Proxima Centauri",spectralType:"M5.5Ve",mass:"0.122 M☉",radiusKm:"107,280 km",surfaceTemp:"3,042 K",luminosity:"0.0017 L☉",visualRadius:8,color:"#ff6230"},planets:[{id:"proxima-b",name:"Proxima Centauri b (Habitable Zone)",type:"Terrestrial Exoplanet",status:"REAL CATALOGUED OBJECT",visualizationStatus:"ARTIST-INSPIRED / PROCEDURAL VISUALIZATION",mass:"1.07 M⊕",radiusKm:"6,560 km (1.03 R⊕)",orbitalPeriodDays:11.18,semiMajorAxis:32,eccentricity:.109,surfaceTempRange:"-39 °C (Equilibrium)",visualRadius:2.5,color:"#b26b48",textureStyle:"martian-red",description:"The closest known exoplanet to humanity, receiving 65% of Earth’s solar energy, subjected to periodic intense stellar flares."},{id:"proxima-c",name:"Proxima Centauri c",type:"Super-Earth / Sub-Neptune",status:"REAL CATALOGUED OBJECT",visualizationStatus:"ARTIST-INSPIRED / PROCEDURAL VISUALIZATION",mass:"7.0 M⊕",radiusKm:"12,500 km (1.95 R⊕)",orbitalPeriodDays:1928,semiMajorAxis:95,eccentricity:.04,surfaceTempRange:"-234 °C",visualRadius:4.2,color:"#6aa8c2",textureStyle:"ice-cyan",description:"A cold outer super-Earth candidate orbiting at 1.48 AU with possible ring structures."}]},{id:"kepler-186",name:"Kepler-186 System",catalogId:"KIC 8120608 / KOI-571",objectType:"Exoplanetary System (First Earth-Size HZ Planet)",status:"REAL CATALOGUED OBJECT",visualizationStatus:"REAL ORBITS / PROCEDURAL PLANETARY SURFACES",distanceLy:"582 ly",distanceFromEarth:"582 ly",constellation:"Cygnus",discoveryYear:"2014 (Quintana et al. / NASA Kepler)",description:"Milestone system containing Kepler-186f, the historic first verified Earth-sized planet orbiting inside the habitable zone of another star.",source:"NASA Ames / Science (2014)",position:[-3800,1900,-5200],star:{name:"Kepler-186",spectralType:"M1V (Red Dwarf)",mass:"0.54 M☉",radiusKm:"364,000 km (0.52 R☉)",surfaceTemp:"3,755 K",luminosity:"0.0412 L☉",visualRadius:11,color:"#ff7733"},planets:[{id:"kepler-186f",name:"Kepler-186f (First Earth-Sized HZ Exoplanet)",type:"Terrestrial Exoplanet",status:"REAL CATALOGUED OBJECT",visualizationStatus:"ARTIST-INSPIRED / PROCEDURAL VISUALIZATION",mass:"1.44 M⊕ (Estimated)",radiusKm:"7,450 km (1.17 R⊕)",orbitalPeriodDays:129.9,semiMajorAxis:58,eccentricity:.04,surfaceTempRange:"-85 °C to +5 °C",visualRadius:2.8,color:"#3d7e9a",textureStyle:"earth-special",description:"Historic discovery orbiting at the outer edge of its star’s habitable zone, receiving one-third of the sunlight Earth receives from our Sun."}]},{id:"kepler-452",name:"Kepler-452 System",catalogId:"KOI-7016",objectType:`Exoplanetary System ("Earth's Cousin")`,status:"REAL CATALOGUED OBJECT",visualizationStatus:"REAL ORBITS / PROCEDURAL PLANETARY SURFACES",distanceLy:"1,780 ly",distanceFromEarth:"1,780 ly",constellation:"Cygnus",discoveryYear:"2015 (Jenkins et al. / NASA Kepler)",description:"Hosts Kepler-452b, the first near-Earth-sized world discovered in the habitable zone of a Sun-like G2V star with a 385-day orbital period.",source:"NASA Kepler Mission / AJ (2015)",position:[-6200,3400,-8900],star:{name:"Kepler-452",spectralType:"G2V (Solar Twin)",mass:"1.037 M☉",radiusKm:"772,000 km (1.11 R☉)",surfaceTemp:"5,757 K",luminosity:"1.20 L☉",visualRadius:18,color:"#ffdd66"},planets:[{id:"kepler-452b",name:'Kepler-452b ("Earth 2.0")',type:"Super-Earth (Habitable Zone)",status:"REAL CATALOGUED OBJECT",visualizationStatus:"ARTIST-INSPIRED / PROCEDURAL VISUALIZATION",mass:"5.0 M⊕ (Estimated)",radiusKm:"10,380 km (1.63 R⊕)",orbitalPeriodDays:384.8,semiMajorAxis:130,eccentricity:.035,surfaceTempRange:"-20 °C to +25 °C",visualRadius:3.8,color:"#2a7b9b",textureStyle:"earth-special",description:"A super-Earth with a 385-day orbit around a Sun-like star 6 billion years old, offering a glimpse into Earth’s distant future."}]},{id:"51-pegasi",name:"51 Pegasi System",catalogId:"HIP 113357 / HD 217014",objectType:"Exoplanetary System (First Exoplanet Around Sun-Like Star)",status:"REAL CATALOGUED OBJECT",visualizationStatus:"REAL ORBITS / PROCEDURAL PLANETARY SURFACES",distanceLy:"50.45 ly",distanceFromEarth:"50.45 ly",constellation:"Pegasus",discoveryYear:"1995 (Mayor & Queloz — 2019 Nobel Prize in Physics)",description:'Historical breakthrough system where Michel Mayor and Didier Queloz discovered 51 Pegasi b, the prototype "Hot Jupiter" that ignited modern exoplanet science.',source:"Nature (1995) / Nobel Prize Committee (2019)",position:[2900,2400,3100],star:{name:"51 Pegasi (Helvetios)",spectralType:"G5V",mass:"1.11 M☉",radiusKm:"860,000 km (1.237 R☉)",surfaceTemp:"5,571 K",luminosity:"1.30 L☉",visualRadius:17,color:"#ffda66"},planets:[{id:"51-pegasi-b",name:"51 Pegasi b (Dimidium)",type:"Hot Jupiter (Gas Giant)",status:"REAL CATALOGUED OBJECT",visualizationStatus:"ARTIST-INSPIRED / PROCEDURAL VISUALIZATION",mass:"146 M⊕ (0.46 MJ)",radiusKm:"132,000 km (1.9 R Jup - Thermally Puffed)",orbitalPeriodDays:4.23,semiMajorAxis:24,eccentricity:.013,surfaceTempRange:"1,000 °C (1,280 K)",visualRadius:8.5,color:"#e6994d",textureStyle:"jupiter-bands",description:"The historic first confirmed exoplanet around a main-sequence star. Whizzes around its star in only 4.2 days at a distance of 0.052 AU."}]},{id:"55-cancri",name:"55 Cancri System (Copernicus)",catalogId:"HIP 43587 / HD 75732",objectType:"Multi-Planet System (5 Exoplanets)",status:"REAL CATALOGUED OBJECT",visualizationStatus:"REAL ORBITS / PROCEDURAL PLANETARY SURFACES",distanceLy:"41.06 ly",distanceFromEarth:"41.06 ly",constellation:"Cancer",discoveryYear:"1996–2007 (Butler, Marcy, Fischer et al.)",description:"A rich 5-planet system featuring 55 Cancri e (Janssen), an ultra-short-period super-Earth with an extreme lava/carbon-rich interior.",source:"NASA Exoplanet Archive / ApJ",position:[-2200,3100,2700],star:{name:"55 Cancri A",spectralType:"K0IV-V",mass:"0.905 M☉",radiusKm:"654,000 km (0.94 R☉)",surfaceTemp:"5,196 K",luminosity:"0.589 L☉",visualRadius:15,color:"#ffc555"},planets:[{id:"55-cancri-e",name:"55 Cancri e (Janssen — Lava Super-Earth)",type:"Ultra-Short Period Super-Earth",status:"REAL CATALOGUED OBJECT",visualizationStatus:"ARTIST-INSPIRED / PROCEDURAL VISUALIZATION",orbitalPeriodDays:.74,orbitalPeriodNote:"17.7 hours",eccentricity:.05,surfaceTempRange:"2,300 °C (Silicate magma oceans)",visualRadius:3.5,color:"#ff4411",textureStyle:"martian-red",description:"Scorching lava world completing an orbit in under 18 hours. JWST observations confirmed a thick secondary volatile atmosphere."},{id:"55-cancri-b",name:"55 Cancri b (Galileo)",type:"Warm Jupiter",status:"REAL CATALOGUED OBJECT",visualizationStatus:"ARTIST-INSPIRED / PROCEDURAL VISUALIZATION",mass:"264 M⊕ (0.83 MJ)",radiusKm:"88,000 km",orbitalPeriodDays:14.65,semiMajorAxis:38,eccentricity:.01,surfaceTempRange:"430 °C",visualRadius:7.2,color:"#d4a373",textureStyle:"jupiter-bands",description:"Gas giant orbiting at 0.115 AU with massive tidal interactions."}]},{id:"k2-18",name:"K2-18 System",catalogId:"EPIC 201912552",objectType:"Hycean World Candidate",status:"REAL CATALOGUED OBJECT",visualizationStatus:"REAL ORBITS / PROCEDURAL PLANETARY SURFACES",distanceLy:"124 ly",distanceFromEarth:"124 ly",constellation:"Leo",discoveryYear:"2015 (Montet et al. / Kepler K2)",description:"Hosts K2-18b, a habitable-zone sub-Neptune where Hubble and JWST spectroscopic observations detected water vapor, methane, and carbon dioxide.",source:"NASA JWST / ESA / Nature Astronomy (2019)",position:[-4200,4800,3900],star:{name:"K2-18",spectralType:"M2.5V",mass:"0.495 M☉",radiusKm:"326,000 km (0.469 R☉)",surfaceTemp:"3,457 K",luminosity:"0.023 L☉",visualRadius:10,color:"#ff6622"},planets:[{id:"k2-18b",name:"K2-18b (Hycean Candidate / Habitable Zone)",type:"Sub-Neptune / Hycean Ocean World",status:"REAL CATALOGUED OBJECT",visualizationStatus:"ARTIST-INSPIRED / PROCEDURAL VISUALIZATION",mass:"8.63 M⊕",radiusKm:"16,600 km (2.61 R⊕)",orbitalPeriodDays:32.9,semiMajorAxis:52,eccentricity:.2,surfaceTempRange:"-8 °C to +40 °C",visualRadius:4.8,color:"#348aa7",textureStyle:"ice-cyan",description:"A key target for biosignature searches; JWST detected carbon molecules (CH4, CO2) and possible dimethyl sulfide (DMS) signatures in its hydrogen atmosphere."}]},{id:"wasp-12",name:"WASP-12 System",catalogId:"2MASS J06303279+2940202",objectType:"Tidally Disrupted Hot Jupiter System",status:"REAL CATALOGUED OBJECT",visualizationStatus:"REAL ORBITS / PROCEDURAL PLANETARY SURFACES",distanceLy:"1,410 ly",distanceFromEarth:"1,410 ly",constellation:"Auriga",discoveryYear:"2008 (SuperWASP)",description:"Hosts WASP-12b, a pitch-black, egg-shaped hot Jupiter being actively devoured by its parent star via Roche-lobe overflow.",source:"Hubble Space Telescope / SuperWASP",position:[5800,6200,-7100],star:{name:"WASP-12",spectralType:"F8V",mass:"1.43 M☉",radiusKm:"1,148,000 km (1.65 R☉)",surfaceTemp:"6,313 K",luminosity:"3.70 L☉",visualRadius:21,color:"#fff1bb"},planets:[{id:"wasp-12b",name:"WASP-12b (Doomed Egg-Shaped Planet)",type:"Ultra-Hot Jupiter (Tidally Distorted)",status:"REAL CATALOGUED OBJECT",visualizationStatus:"ARTIST-INSPIRED / PROCEDURAL VISUALIZATION",orbitalPeriodDays:1.09,orbitalPeriodNote:"26 hours",eccentricity:.04,surfaceTempRange:"2,250 °C (2,500 K)",visualRadius:8.2,color:"#1a1a1a",textureStyle:"dense-atmosphere",description:"Tidally stretched into an egg shape, absorbing 94% of incident light (albedo 0.06), spiraling into its host star with ~3 million years remaining."}]}],wc=[{id:"ceres",name:"1 Ceres (Dwarf Planet)",catalogId:"1 Ceres / Minor Planet 1",objectType:"Dwarf Planet (Main Asteroid Belt)",status:"REAL CATALOGUED OBJECT",visualizationStatus:"REAL CRATERED TOPOGRAPHY / OCCATOR BRIGHT SPOTS",semiMajorAxis:215,eccentricity:.076,inclination:10.59,orbitalPeriodDays:1682,rotationPeriodHours:9.07,mass:"9.38 × 10^20 kg (1/3 of total asteroid belt mass)",radiusKm:"473.0 km (Diameter 940 km)",gravity:"0.28 m/s² (0.029g)",surfaceTempRange:"-106 °C to -38 °C",discoveryYear:"1801 (Giuseppe Piazzi)",location:"Main Asteroid Belt (2.77 AU from Sun)",description:"The largest object in the asteroid belt and only dwarf planet in the inner Solar System. Explored by NASA’s Dawn spacecraft, revealing sodium carbonate salt deposits in Occator Crater and water ice deposits.",source:"NASA JPL / Dawn Mission",visualRadius:2.2,color:"#8c8c8c",hasBrightSpots:!0},{id:"vesta",name:"4 Vesta (Protoplanet)",catalogId:"4 Vesta",objectType:"Differentiated Protoplanet",status:"REAL CATALOGUED OBJECT",visualizationStatus:"REAL TOPOGRAPHY / RHEASILVIA IMPACT BASIN",semiMajorAxis:202,eccentricity:.089,inclination:7.14,orbitalPeriodDays:1325.7,rotationPeriodHours:5.34,mass:"2.59 × 10^20 kg (9% of asteroid belt)",radiusKm:"262.7 km (525 km across)",gravity:"0.25 m/s²",surfaceTempRange:"-188 °C to -18 °C",discoveryYear:"1807 (Heinrich Olbers)",location:"Inner Asteroid Belt (2.36 AU)",description:"The second-most massive asteroid, a surviving intact protoplanet with an iron core, basaltic crust, and the colossal 505-km Rheasilvia crater at its south pole.",source:"NASA Dawn Mission / JPL",visualRadius:1.8,color:"#9e998c"},{id:"pallas",name:"2 Pallas",catalogId:"2 Pallas",objectType:"B-type Asteroid",status:"REAL CATALOGUED OBJECT",visualizationStatus:"SCIENTIFIC 3D APPROXIMATION",semiMajorAxis:218,eccentricity:.231,inclination:34.84,orbitalPeriodDays:1686,rotationPeriodHours:7.81,mass:"2.04 × 10^20 kg",radiusKm:"256.0 km",discoveryYear:"1802 (Heinrich Olbers)",location:"Asteroid Belt (34.8° inclination tilt)",description:"The third-largest asteroid, notable for its high 34.8° orbital inclination and dynamic heavily cratered surface.",source:"VLT / SPHERE / ESO",visualRadius:1.7,color:"#7a7a7a"},{id:"hygiea",name:"10 Hygiea",catalogId:"10 Hygiea",objectType:"Carbonaceous C-type Asteroid",status:"REAL CATALOGUED OBJECT",visualizationStatus:"SCIENTIFIC 3D APPROXIMATION",semiMajorAxis:228,eccentricity:.112,inclination:3.84,orbitalPeriodDays:2035,rotationPeriodHours:27.6,mass:"8.32 × 10^19 kg",radiusKm:"217.0 km (Nearly Spherical)",discoveryYear:"1849 (Annibale de Gasparis)",location:"Outer Asteroid Belt (3.14 AU)",description:"The fourth-largest asteroid, composed of dark primitive carbonaceous materials, nearly spherical in shape (potential dwarf planet candidate).",source:"ESO / Nature Astronomy (2019)",visualRadius:1.5,color:"#525252"},{id:"bennu",name:"101955 Bennu",catalogId:"101955 Bennu (1999 RQ36)",objectType:"Near-Earth Asteroid (Rubble Pile / B-type)",status:"REAL CATALOGUED OBJECT",visualizationStatus:"OSIRIS-REx 3D SURFACE MODEL",semiMajorAxis:112,eccentricity:.2037,inclination:6.03,orbitalPeriodDays:436.6,rotationPeriodHours:4.3,mass:"7.33 × 10^10 kg",radiusKm:"0.245 km (Diameter 490 m)",gravity:"0.00008 m/s² (Microgravity)",discoveryYear:"1999 (LINEAR)",location:"Apollo / Near-Earth Orbit (1.126 AU)",description:"A diamond-shaped spinning-top rubble-pile asteroid rich in organic compounds and hydrated minerals. Sampled by NASA’s OSIRIS-REx spacecraft in 2020 (delivered to Earth in 2023).",source:"NASA OSIRIS-REx / JPL",visualRadius:.9,color:"#3a3a3a",isIrregular:!0},{id:"ryugu",name:"162173 Ryugu",catalogId:"162173 Ryugu (1999 JU3)",objectType:"Near-Earth Asteroid (C-type / Rubble Pile)",status:"REAL CATALOGUED OBJECT",visualizationStatus:"HAYABUSA2 3D SHAPE MODEL",semiMajorAxis:119,eccentricity:.19,inclination:5.88,orbitalPeriodDays:474,rotationPeriodHours:7.63,mass:"4.50 × 10^11 kg",radiusKm:"0.450 km (Diameter 900 m)",discoveryYear:"1999 (LINEAR)",location:"Apollo Near-Earth Orbit",description:"A diamond-shaped carbonaceous near-Earth asteroid sampled by JAXA’s Hayabusa2 spacecraft, carrying pristine amino acids from the early Solar System.",source:"JAXA Hayabusa2 / Science (2019)",visualRadius:1,color:"#2e2e2e",isIrregular:!0},{id:"apophis",name:"99942 Apophis",catalogId:"99942 Apophis (2004 MN4)",objectType:"Near-Earth Asteroid (Aten Group)",status:"REAL CATALOGUED OBJECT",visualizationStatus:"RADAR 3D RECONSTRUCTION",semiMajorAxis:92,eccentricity:.191,inclination:3.33,orbitalPeriodDays:323.6,rotationPeriodHours:30.56,mass:"2.7 × 10^10 kg",radiusKm:"0.170 km (Diameter 340 m)",discoveryYear:"2004 (Tucker, Tholen, Bernardi)",location:"Aten Orbit (Crosses Earth’s orbit)",description:"Famous near-Earth asteroid that will safely pass within ~31,600 km (closer than geostationary satellites) of Earth’s surface on April 13, 2029, visible to the naked eye.",source:"NASA CNEOS / Goldstone Radar",visualRadius:.8,color:"#857866",isIrregular:!0},{id:"haumea",name:"136108 Haumea (Dwarf Planet)",catalogId:"136108 Haumea",objectType:"Trans-Neptunian Dwarf Planet (Ellipsoidal)",status:"REAL CATALOGUED OBJECT",visualizationStatus:"SCIENTIFIC 3D TRIAXIAL ELLIPSOID",semiMajorAxis:540,eccentricity:.191,inclination:28.19,orbitalPeriodDays:103774,rotationPeriodHours:3.915,mass:"4.006 × 10^21 kg",radiusKm:"816 km × 498 km (Elongated)",discoveryYear:"2004 (Brown et al. / Ortiz et al.)",location:"Kuiper Belt (43.1 AU)",description:"Rapidly spinning dwarf planet shaped like an elongated rugby ball with two small moons (Hiʻiaka & Namaka) and a ring system.",source:"Nature (2017) / NASA",visualRadius:1.8,color:"#d6d6d6",isEllipsoidal:!0},{id:"makemake",name:"136472 Makemake (Dwarf Planet)",catalogId:"136472 Makemake",objectType:"Kuiper Belt Dwarf Planet (Plutoid)",status:"REAL CATALOGUED OBJECT",visualizationStatus:"SCIENTIFIC 3D APPROXIMATION",semiMajorAxis:565,eccentricity:.155,inclination:29,orbitalPeriodDays:112897,rotationPeriodHours:22.83,mass:"3.1 × 10^21 kg",radiusKm:"715 km",discoveryYear:"2005 (Brown, Trujillo, Rabinowitz)",location:"Classical Kuiper Belt (45.7 AU)",description:"Extremely bright dwarf planet covered in reddish methane, ethane, and tholin ice with a moon discovered by Hubble in 2015.",source:"Hubble Space Telescope / NASA",visualRadius:1.7,color:"#b86644"},{id:"eris",name:"136199 Eris (Most Massive Dwarf Planet)",catalogId:"136199 Eris",objectType:"Scattered Disc Dwarf Planet",status:"REAL CATALOGUED OBJECT",visualizationStatus:"SCIENTIFIC 3D APPROXIMATION",semiMajorAxis:680,eccentricity:.44,inclination:44.04,orbitalPeriodDays:203830,mass:"1.66 × 10^22 kg (27% more massive than Pluto)",radiusKm:"1,163 km",discoveryYear:"2005 (Brown, Trujillo, Rabinowitz)",location:"Scattered Disc (67.8 AU / Aphelion 97.5 AU)",description:"The most massive dwarf planet known in our Solar System, with its discovery triggering the IAU definition of dwarf planets in 2006. Orbited by moon Dysnomia.",source:"NASA JPL / Keck Observatory",visualRadius:2.1,color:"#e0e0e0"}],Yn={id:"pluto-system",name:"Pluto & Charon Binary System",objectType:"Binary Dwarf Planet System",status:"REAL CATALOGUED OBJECT",visualizationStatus:"NEW HORIZONS HIGH-RES MAPS",distanceAU:39.48,discoveryYear:"1930 (Clyde Tombaugh) / 2015 (NASA New Horizons)",description:"A gravitationally locked binary system where Pluto and Charon orbit a common barycenter in open space above Pluto’s surface, accompanied by four small outer moons (Styx, Nix, Kerberos, Hydra).",source:"NASA New Horizons Mission / Johns Hopkins APL",moons:[{id:"charon",name:"Charon",type:"Major Binary Companion",radiusKm:"606.0 km (Half of Pluto)",mass:"1.586 × 10^21 kg",orbitalRadius:12,orbitalPeriodDays:6.387,visualRadius:1.1,color:"#9e9e9e",description:"Pluto’s mutually tidally locked twin with Mordor Macula (dark reddish north polar region)."},{id:"styx",name:"Styx",radiusKm:"8 km",orbitalRadius:18,orbitalPeriodDays:20.2,visualRadius:.25,color:"#bcaaa4"},{id:"nix",name:"Nix",radiusKm:"25 km",orbitalRadius:22,orbitalPeriodDays:24.9,visualRadius:.35,color:"#d7ccc8"},{id:"kerberos",name:"Kerberos",radiusKm:"9 km",orbitalRadius:26,orbitalPeriodDays:32.2,visualRadius:.25,color:"#a1887f"},{id:"hydra",name:"Hydra",radiusKm:"32 km",orbitalRadius:31,orbitalPeriodDays:38.2,visualRadius:.4,color:"#efebe9"}]},Rc=[{id:"halley",name:"1P/Halley (Halley's Comet)",catalogId:"1P/Halley",objectType:"Periodic Comet (Halley-Type)",status:"REAL CATALOGUED OBJECT",visualizationStatus:"SCIENTIFIC 3D COMET WITH DUST & ION TAILS",semiMajorAxis:280,eccentricity:.967,inclination:17.8,periodDays:75.3*365.25,perihelionAU:"0.586 AU",aphelionAU:"35.1 AU (Beyond Neptune)",nucleusDiameterKm:"15 × 8 × 8 km (Peanut shaped)",discoveryYear:"Recorded since 240 BCE / 1705 (Edmond Halley prediction)",nextPerihelion:"July 28, 2061",description:"The most famous periodic comet, returning to the inner Solar System every 75–76 years. Its dark nucleus expels volatile gas and dust jets creating glowing tails spanning millions of kilometers.",source:"NASA JPL Small-Body Database / ESA Giotto Mission",color:"#00e5ff"},{id:"hale-bopp",name:"C/1995 O1 (Hale-Bopp)",catalogId:"C/1995 O1",objectType:'Long-Period Giant Comet ("The Great Comet of 1997")',status:"REAL CATALOGUED OBJECT",visualizationStatus:"SCIENTIFIC 3D COMET WITH DUST & ION TAILS",semiMajorAxis:460,eccentricity:.995,inclination:89.4,periodDays:2533*365.25,perihelionAU:"0.914 AU",aphelionAU:"370.8 AU",nucleusDiameterKm:"~60 km (Colossal nucleus)",discoveryYear:"1995 (Alan Hale & Thomas Bopp)",description:"One of the brightest comets in modern history, visible to the naked eye for a record-breaking 18 months in 1996–1997 with vivid blue gas and white curved dust tails.",source:"NASA JPL / ESO",color:"#38bdf8"},{id:"67p",name:"67P/Churyumov–Gerasimenko",catalogId:"67P/C-G",objectType:"Jupiter-Family Contact Binary Comet",status:"REAL CATALOGUED OBJECT",visualizationStatus:"ROSETTA MISSION RECONSTRUCTED NUCLEUS",semiMajorAxis:245,eccentricity:.641,inclination:7.04,periodDays:6.44*365.25,perihelionAU:"1.24 AU",aphelionAU:"5.68 AU",nucleusDiameterKm:"4.1 × 3.3 × 1.8 km (Rubber duck shape)",discoveryYear:"1969 (Klim Churyumov & Svetlana Gerasimenko)",description:"The famous target of ESA’s historic Rosetta orbiter and Philae lander (2014–2016), discovering a dual-lobed contact binary structure, organic macromolecules, and molecular oxygen.",source:"ESA Rosetta Mission / Nature (2014)",color:"#a7f3d0"}],Cc=[{id:"pleiades",name:"Pleiades (Seven Sisters / M45)",catalogId:"Messier 45 / Melotte 22",objectType:"Open Star Cluster (Hot B-type Stars)",status:"REAL CATALOGUED OBJECT",visualizationStatus:"GPU PARTICLE STAR CLOUD WITH BLUE REFLECTION NEBULA",distanceLy:"444 ly",distanceFromEarth:"444 ly",constellation:"Taurus",estimatedStars:"~1,000 confirmed members",diameterLy:"17.5 ly (Core radius 8 ly)",age:"115 Million Years",description:"The most iconic open cluster in the night sky, dominated by luminous hot blue stars (Alcyone, Electra, Maia, Merope, Taygeta, Celaeno, Asterope) embedded in a faint blue dust reflection cloud.",source:"Gaia DR3 / Messier Catalog / SIMBAD",position:[-2200,1800,3600],particleCount:1200,radius:380,color:"#a8d5ff",coreColor:"#ffffff"},{id:"hyades",name:"Hyades Cluster (Caldwell 41)",catalogId:"Melotte 25 / Collinder 50",objectType:"Open Star Cluster (Closest to Earth)",status:"REAL CATALOGUED OBJECT",visualizationStatus:"GPU PARTICLE STAR CLUSTER",distanceLy:"153 ly",distanceFromEarth:"153 ly",constellation:"Taurus",estimatedStars:"~300–400 stars",diameterLy:"17.6 ly",age:"625 Million Years",description:"The nearest open cluster to the Solar System, forming a V-shape in Taurus pointing toward the red giant Aldebaran (which is an unrelated foreground star).",source:"SIMBAD / Hipparcos",position:[-1600,950,2800],particleCount:650,radius:290,color:"#ffe099",coreColor:"#ffffff"},{id:"omega-centauri",name:"Omega Centauri (NGC 5139)",catalogId:"NGC 5139 / Caldwell 80",objectType:"Globular Star Cluster (Most Massive in Milky Way)",status:"REAL CATALOGUED OBJECT",visualizationStatus:"HIGH-DENSITY GPU GLOBULAR CLUSTER",distanceLy:"15,800 ly",distanceFromEarth:"15,800 ly",constellation:"Centaurus",estimatedStars:"~10 Million Stars",diameterLy:"150 ly",age:"11.5–12 Billion Years",description:"The largest and brightest globular cluster in the Milky Way, widely believed to be the stripped remnant core of an ancient dwarf galaxy consumed by our galaxy.",source:"Hubble Space Telescope / ESO / Gaia",position:[4800,-3200,7200],particleCount:4500,radius:520,color:"#ffeedd",coreColor:"#ffffff"},{id:"47-tucanae",name:"47 Tucanae (NGC 104)",catalogId:"NGC 104 / Caldwell 106",objectType:"Globular Star Cluster (Millisecond Pulsar Rich)",status:"REAL CATALOGUED OBJECT",visualizationStatus:"HIGH-DENSITY GPU GLOBULAR CLUSTER",distanceLy:"13,000 ly",distanceFromEarth:"13,000 ly",constellation:"Tucana",estimatedStars:"~2–3 Million Stars",diameterLy:"120 ly",age:"13.06 Billion Years",description:"The second-brightest globular cluster in the night sky with an intensely dense core hosting at least 29 millisecond pulsars and numerous blue stragglers.",source:"NASA Chandra / Hubble / SIMBAD",position:[-5800,-6200,4100],particleCount:3500,radius:460,color:"#ffe6cc",coreColor:"#ffffff"}],Lc=[{id:"voyager-1",name:"Voyager 1",catalogId:"1977-084A / NORAD 10321",objectType:"Spacecraft (Interstellar Probe)",status:"REAL CATALOGUED OBJECT",visualizationStatus:"3D SPACECRAFT MODEL / APPROXIMATE MISSION POSITION",launchDate:"September 5, 1977",distanceAU:"163.8 AU (24.5 Billion km from Sun)",distanceFromEarth:"163.8 AU",speedKms:"16.9 km/s (38,000 mph)",location:"Interstellar Space (Beyond Heliopause in Ophiuchus)",missionStatus:"Operational (Farthest human-made object in history)",description:"Carrying the iconic Golden Record, Voyager 1 crossed the heliopause into interstellar space in August 2012, sampling the true interstellar magnetic medium.",source:"NASA JPL Voyager Interstellar Mission",position:[680,310,450],visualScale:1},{id:"voyager-2",name:"Voyager 2",catalogId:"1977-076A / NORAD 10271",objectType:"Spacecraft (Interstellar Probe)",status:"REAL CATALOGUED OBJECT",visualizationStatus:"3D SPACECRAFT MODEL / APPROXIMATE MISSION POSITION",launchDate:"August 20, 1977",distanceAU:"136.5 AU (20.4 Billion km from Sun)",distanceFromEarth:"136.5 AU",speedKms:"15.3 km/s",location:"Interstellar Space (Southern Celestial Hemisphere in Pavo)",missionStatus:"Operational (Only craft to visit Jupiter, Saturn, Uranus & Neptune)",description:'The legendary "Grand Tour" probe that executed flybys of Jupiter (1979), Saturn (1981), Uranus (1986), and Neptune (1989) before entering interstellar space in 2018.',source:"NASA JPL Voyager Project",position:[-520,-480,380],visualScale:1},{id:"new-horizons",name:"New Horizons",catalogId:"2006-001A / NORAD 28928",objectType:"Spacecraft (Kuiper Belt Probe)",status:"REAL CATALOGUED OBJECT",visualizationStatus:"3D SPACECRAFT MODEL / APPROXIMATE MISSION POSITION",launchDate:"January 19, 2006",distanceAU:"58.4 AU (8.7 Billion km)",distanceFromEarth:"58.4 AU",speedKms:"13.8 km/s",location:"Outer Kuiper Belt (Past Pluto & Arrokoth)",missionStatus:"Operational (Exploring outer heliosphere)",description:"Conducted the historic first close flyby of the Pluto-Charon system on July 14, 2015, revealing glaciers, mountains, and hazes, followed by contact binary Arrokoth in 2019.",source:"NASA / Johns Hopkins APL",position:[610,80,-210],visualScale:.9},{id:"pioneer-10",name:"Pioneer 10",catalogId:"1972-012A / NORAD 5894",objectType:"Spacecraft (Historic Deep Space Probe)",status:"REAL CATALOGUED OBJECT",visualizationStatus:"3D SPACECRAFT MODEL / APPROXIMATE MISSION POSITION",launchDate:"March 2, 1972",distanceAU:"134.2 AU (Heading toward Aldebaran)",distanceFromEarth:"134.2 AU",speedKms:"11.9 km/s",location:"Taurus Constellation (Deep Space)",missionStatus:"Decommissioned (Last signal received Jan 23, 2003)",description:"First probe to traverse the asteroid belt and complete a close flyby of Jupiter (1973), carrying the gold-anodized Pioneer Plaque designed by Carl Sagan.",source:"NASA Ames Research Center",position:[-650,140,480],visualScale:.9},{id:"pioneer-11",name:"Pioneer 11",catalogId:"1973-019A / NORAD 6426",objectType:"Spacecraft (Historic Deep Space Probe)",status:"REAL CATALOGUED OBJECT",visualizationStatus:"3D SPACECRAFT MODEL / APPROXIMATE MISSION POSITION",launchDate:"April 5, 1973",distanceAU:"112.0 AU (Heading toward Aquila)",distanceFromEarth:"112.0 AU",speedKms:"11.2 km/s",location:"Scutum / Aquila Constellation",missionStatus:"Decommissioned (Last signal received Nov 1995)",description:"First probe to encounter Saturn (1979), discovering Saturn’s F-ring and measuring Titan’s sub-zero temperatures.",source:"NASA Ames Research Center",position:[520,-110,-420],visualScale:.9},{id:"cassini",name:"Cassini-Huygens",catalogId:"1997-061A / NORAD 25008",objectType:"Spacecraft (Saturn Flagship Orbiter)",status:"REAL CATALOGUED OBJECT",visualizationStatus:"3D SPACECRAFT MODEL (HISTORIC TRAJECTORY)",launchDate:"October 15, 1997",distanceAU:"9.58 AU (Saturn Orbit)",distanceFromEarth:"1.4 Billion km",location:"Saturn Atmosphere (Grand Finale Sept 15, 2017)",missionStatus:"Mission Completed (13 years orbiting Saturn)",description:"Discovered liquid methane lakes on Titan, active water geysers on Enceladus, and complex propeller ringlets in Saturn’s rings before a planned atmospheric plunge.",source:"NASA JPL / ESA / ASI",position:[355,15,25],visualScale:.8},{id:"juno",name:"Juno",catalogId:"2011-040A / NORAD 37773",objectType:"Spacecraft (Jupiter Polar Orbiter)",status:"REAL CATALOGUED OBJECT",visualizationStatus:"3D SPACECRAFT MODEL (ACTIVE ORBIT)",launchDate:"August 5, 2011",distanceAU:"5.20 AU (Jupiter Orbit)",distanceFromEarth:"780 Million km",location:"Highly Elliptical Polar Orbit around Jupiter",missionStatus:"Active (Extended Mission exploring Galilean Moons)",description:"Equipped with radiation-hardened titanium vault and microwave radiometers, probing Jupiter’s deep atmosphere, auroral dynamos, and flybys of Io, Europa, and Ganymede.",source:"NASA JPL / SwRI",position:[264,8,12],visualScale:.8},{id:"osiris-rex",name:"OSIRIS-REx (OSIRIS-APEX)",catalogId:"2016-055A / NORAD 41754",objectType:"Spacecraft (Asteroid Sample Return)",status:"REAL CATALOGUED OBJECT",visualizationStatus:"3D SPACECRAFT MODEL / CRUISE TRAJECTORY",launchDate:"September 8, 2016",distanceAU:"1.15 AU (En route to Asteroid Apophis)",distanceFromEarth:"170 Million km",location:"Heliocentric Cruise toward 2029 Apophis Rendezvous",missionStatus:"Active (Delivered Bennu sample Sept 2023; repurposed to Apophis)",description:"Successfully collected over 120 grams of carbonaceous material from Asteroid Bennu (2020) and returned it to Earth, now redirected as OSIRIS-APEX to intercept Apophis during its 2029 close pass.",source:"NASA Goddard / University of Arizona",position:[115,4,18],visualScale:.7},{id:"jwst",name:"James Webb Space Telescope (JWST)",catalogId:"2021-130A / NORAD 50463",objectType:"Space Observatory (Infrared Flagship)",status:"REAL CATALOGUED OBJECT",visualizationStatus:"3D OBSERVATORY MODEL (L2 HALO ORBIT)",launchDate:"December 25, 2021",distanceAU:"1.01 AU (1.5 Million km from Earth at Sun-Earth L2)",distanceFromEarth:"1.5 Million km",location:"Sun-Earth L2 Lagrange Point Halo Orbit",missionStatus:"Active (Premier astrophysics observatory)",description:"Featuring a 6.5m gold-coated beryllium primary mirror and 5-layer tennis-court-sized sunshield, observing the first galaxies formed after the Big Bang and exoplanet atmospheres.",source:"NASA / ESA / CSA / STScI",position:[126.5,3.5,12],visualScale:.8},{id:"hubble",name:"Hubble Space Telescope (HST)",catalogId:"1990-037B / NORAD 20580",objectType:"Space Observatory (Visible / UV / Near-IR)",status:"REAL CATALOGUED OBJECT",visualizationStatus:"3D OBSERVATORY MODEL (LOW EARTH ORBIT)",launchDate:"April 24, 1990 (STS-31 Discovery)",distanceAU:"1.00 AU (535 km altitude LEO)",distanceFromEarth:"535 km (In Low Earth Orbit)",location:"Low Earth Orbit (28.5° inclination)",missionStatus:"Active (34+ years of groundbreaking astronomy)",description:"One of humanity’s greatest scientific instruments, measuring the cosmic expansion rate, imaging deep fields with thousands of newborn galaxies, and probing exoplanetary atmospheres.",source:"NASA / ESA / STScI",position:[125.2,.8,.5],visualScale:.6}];class cm{constructor(){this.objectsById=new Map,this.objectsByCategory={stars:[],planets:[],exoplanets:[],exoplanet_systems:[],asteroids:[],dwarf_planets:[],comets:[],clusters:[],galaxies:[],black_holes:[],pulsars:[],nebulae:[],spacecraft:[]},this.allSearchableList=[],this.init()}init(){this.register(Li.sun,"stars","The Sun (Sol)","Star (Yellow Dwarf G2V)"),Li.planets.forEach(t=>{this.register(t,"planets",t.name,t.type),t.moons&&t.moons.forEach(e=>this.register(e,"planets",e.name,`Moon of ${t.name}`))}),Ac.forEach(t=>this.register(t,"stars",t.name,t.objectType||t.spectralType)),Tc.forEach(t=>{this.register(t,"exoplanet_systems",t.name,t.objectType),t.planets&&t.planets.forEach(e=>{e.parentSystemId=t.id,e.star=t.star,this.register(e,"exoplanets",e.name,e.type)})}),wc.forEach(t=>{const e=t.objectType.includes("Dwarf Planet")?"dwarf_planets":"asteroids";this.register(t,e,t.name,t.objectType)}),this.register(Yn,"dwarf_planets",Yn.name,Yn.objectType),Yn.moons.forEach(t=>this.register(t,"dwarf_planets",t.name,t.type||"Moon of Pluto")),Rc.forEach(t=>this.register(t,"comets",t.name,t.objectType)),Cc.forEach(t=>this.register(t,"clusters",t.name,t.objectType)),xc.forEach(t=>this.register(t,"galaxies",t.name,t.type)),Mc.forEach(t=>this.register(t,"black_holes",t.name,t.type)),Ec.forEach(t=>this.register(t,"pulsars",t.name,t.type)),bc.forEach(t=>this.register(t,"nebulae",t.name,t.type)),Lc.forEach(t=>this.register(t,"spacecraft",t.name,t.objectType))}register(t,e,n,i){!t||!t.id||(this.objectsById.set(t.id,{raw:t,category:e,name:n||t.name,type:i||t.type||e}),this.objectsByCategory[e]&&this.objectsByCategory[e].push(t),this.allSearchableList.push({id:t.id,name:n||t.name,type:i||t.type||e,category:e,raw:t,distance:t.distanceFromEarth||t.distanceLy||(t.distanceAU?`${t.distanceAU} AU`:t.location||"Local")}))}get(t){return this.objectsById.get(t)}getByCategory(t){return t==="all"?this.allSearchableList:this.objectsByCategory[t]||[]}search(t){if(!t)return[];const e=t.toLowerCase().trim();return this.allSearchableList.filter(n=>n.name.toLowerCase().includes(e)||n.type.toLowerCase().includes(e)||n.raw.catalogId&&n.raw.catalogId.toLowerCase().includes(e)||n.raw.constellation&&n.raw.constellation.toLowerCase().includes(e))}getCounts(){return{all:this.allSearchableList.length,stars:(this.objectsByCategory.stars||[]).length,planets:(this.objectsByCategory.planets||[]).length,exoplanets:(this.objectsByCategory.exoplanets||[]).length,exoplanet_systems:(this.objectsByCategory.exoplanet_systems||[]).length,asteroids:(this.objectsByCategory.asteroids||[]).length+(this.objectsByCategory.dwarf_planets||[]).length,comets:(this.objectsByCategory.comets||[]).length,clusters:(this.objectsByCategory.clusters||[]).length,galaxies:(this.objectsByCategory.galaxies||[]).length,black_holes:(this.objectsByCategory.black_holes||[]).length,pulsars:(this.objectsByCategory.pulsars||[]).length,nebulae:(this.objectsByCategory.nebulae||[]).length,spacecraft:(this.objectsByCategory.spacecraft||[]).length}}}const Re=new cm,Io={type:"change"},Ta={type:"start"},Do={type:"end"},Es=new Wi,Uo=new bn,lm=Math.cos(70*kl.DEG2RAD);class hm extends Kn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new w,this.cursor=new w,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ti.ROTATE,MIDDLE:ti.DOLLY,RIGHT:ti.PAN},this.touches={ONE:ei.ROTATE,TWO:ei.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(v){v.addEventListener("keydown",st),this._domElementKeyEvents=v},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",st),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Io),n.update(),a=i.NONE},this.update=function(){const v=new w,G=new Pn().setFromUnitVectors(t.up,new w(0,1,0)),N=G.clone().invert(),V=new w,J=new Pn,yt=new w,Rt=2*Math.PI;return function(ve=null){const jt=n.object.position;v.copy(jt).sub(n.target),v.applyQuaternion(G),o.setFromVector3(v),n.autoRotate&&a===i.NONE&&F(y(ve)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let _e=n.minAzimuthAngle,ye=n.maxAzimuthAngle;isFinite(_e)&&isFinite(ye)&&(_e<-Math.PI?_e+=Rt:_e>Math.PI&&(_e-=Rt),ye<-Math.PI?ye+=Rt:ye>Math.PI&&(ye-=Rt),_e<=ye?o.theta=Math.max(_e,Math.min(ye,o.theta)):o.theta=o.theta>(_e+ye)/2?Math.max(_e,o.theta):Math.min(ye,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let Fe=!1;if(n.zoomToCursor&&C||n.object.isOrthographicCamera)o.radius=dt(o.radius);else{const ke=o.radius;o.radius=dt(o.radius*l),Fe=ke!=o.radius}if(v.setFromSpherical(o),v.applyQuaternion(N),jt.copy(n.target).add(v),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&C){let ke=null;if(n.object.isPerspectiveCamera){const gn=v.length();ke=dt(gn*l);const Dn=gn-ke;n.object.position.addScaledVector(A,Dn),n.object.updateMatrixWorld(),Fe=!!Dn}else if(n.object.isOrthographicCamera){const gn=new w(I.x,I.y,0);gn.unproject(n.object);const Dn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Fe=Dn!==n.object.zoom;const Un=new w(I.x,I.y,0);Un.unproject(n.object),n.object.position.sub(Un).add(gn),n.object.updateMatrixWorld(),ke=v.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ke!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ke).add(n.object.position):(Es.origin.copy(n.object.position),Es.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Es.direction))<lm?t.lookAt(n.target):(Uo.setFromNormalAndCoplanarPoint(n.object.up,n.target),Es.intersectPlane(Uo,n.target))))}else if(n.object.isOrthographicCamera){const ke=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),ke!==n.object.zoom&&(n.object.updateProjectionMatrix(),Fe=!0)}return l=1,C=!1,Fe||V.distanceToSquared(n.object.position)>r||8*(1-J.dot(n.object.quaternion))>r||yt.distanceToSquared(n.target)>r?(n.dispatchEvent(Io),V.copy(n.object.position),J.copy(n.object.quaternion),yt.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",gt),n.domElement.removeEventListener("pointerdown",oe),n.domElement.removeEventListener("pointercancel",x),n.domElement.removeEventListener("wheel",Z),n.domElement.removeEventListener("pointermove",R),n.domElement.removeEventListener("pointerup",x),n.domElement.getRootNode().removeEventListener("keydown",_t,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",st),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=i.NONE;const r=1e-6,o=new Po,c=new Po;let l=1;const u=new w,d=new Mt,h=new Mt,m=new Mt,g=new Mt,_=new Mt,p=new Mt,f=new Mt,M=new Mt,S=new Mt,A=new w,I=new Mt;let C=!1;const T=[],D={};let b=!1;function y(v){return v!==null?2*Math.PI/60*n.autoRotateSpeed*v:2*Math.PI/60/60*n.autoRotateSpeed}function L(v){const G=Math.abs(v*.01);return Math.pow(.95,n.zoomSpeed*G)}function F(v){c.theta-=v}function k(v){c.phi-=v}const Y=function(){const v=new w;return function(N,V){v.setFromMatrixColumn(V,0),v.multiplyScalar(-N),u.add(v)}}(),q=function(){const v=new w;return function(N,V){n.screenSpacePanning===!0?v.setFromMatrixColumn(V,1):(v.setFromMatrixColumn(V,0),v.crossVectors(n.object.up,v)),v.multiplyScalar(N),u.add(v)}}(),W=function(){const v=new w;return function(N,V){const J=n.domElement;if(n.object.isPerspectiveCamera){const yt=n.object.position;v.copy(yt).sub(n.target);let Rt=v.length();Rt*=Math.tan(n.object.fov/2*Math.PI/180),Y(2*N*Rt/J.clientHeight,n.object.matrix),q(2*V*Rt/J.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(Y(N*(n.object.right-n.object.left)/n.object.zoom/J.clientWidth,n.object.matrix),q(V*(n.object.top-n.object.bottom)/n.object.zoom/J.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function K(v){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(v){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ut(v,G){if(!n.zoomToCursor)return;C=!0;const N=n.domElement.getBoundingClientRect(),V=v-N.left,J=G-N.top,yt=N.width,Rt=N.height;I.x=V/yt*2-1,I.y=-(J/Rt)*2+1,A.set(I.x,I.y,1).unproject(n.object).sub(n.object.position).normalize()}function dt(v){return Math.max(n.minDistance,Math.min(n.maxDistance,v))}function mt(v){d.set(v.clientX,v.clientY)}function Ht(v){ut(v.clientX,v.clientX),f.set(v.clientX,v.clientY)}function Yt(v){g.set(v.clientX,v.clientY)}function j(v){h.set(v.clientX,v.clientY),m.subVectors(h,d).multiplyScalar(n.rotateSpeed);const G=n.domElement;F(2*Math.PI*m.x/G.clientHeight),k(2*Math.PI*m.y/G.clientHeight),d.copy(h),n.update()}function et(v){M.set(v.clientX,v.clientY),S.subVectors(M,f),S.y>0?K(L(S.y)):S.y<0&&X(L(S.y)),f.copy(M),n.update()}function ft(v){_.set(v.clientX,v.clientY),p.subVectors(_,g).multiplyScalar(n.panSpeed),W(p.x,p.y),g.copy(_),n.update()}function ct(v){ut(v.clientX,v.clientY),v.deltaY<0?X(L(v.deltaY)):v.deltaY>0&&K(L(v.deltaY)),n.update()}function Nt(v){let G=!1;switch(v.code){case n.keys.UP:v.ctrlKey||v.metaKey||v.shiftKey?k(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(0,n.keyPanSpeed),G=!0;break;case n.keys.BOTTOM:v.ctrlKey||v.metaKey||v.shiftKey?k(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(0,-n.keyPanSpeed),G=!0;break;case n.keys.LEFT:v.ctrlKey||v.metaKey||v.shiftKey?F(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(n.keyPanSpeed,0),G=!0;break;case n.keys.RIGHT:v.ctrlKey||v.metaKey||v.shiftKey?F(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(-n.keyPanSpeed,0),G=!0;break}G&&(v.preventDefault(),n.update())}function Ct(v){if(T.length===1)d.set(v.pageX,v.pageY);else{const G=Dt(v),N=.5*(v.pageX+G.x),V=.5*(v.pageY+G.y);d.set(N,V)}}function Gt(v){if(T.length===1)g.set(v.pageX,v.pageY);else{const G=Dt(v),N=.5*(v.pageX+G.x),V=.5*(v.pageY+G.y);g.set(N,V)}}function P(v){const G=Dt(v),N=v.pageX-G.x,V=v.pageY-G.y,J=Math.sqrt(N*N+V*V);f.set(0,J)}function Vt(v){n.enableZoom&&P(v),n.enablePan&&Gt(v)}function zt(v){n.enableZoom&&P(v),n.enableRotate&&Ct(v)}function ne(v){if(T.length==1)h.set(v.pageX,v.pageY);else{const N=Dt(v),V=.5*(v.pageX+N.x),J=.5*(v.pageY+N.y);h.set(V,J)}m.subVectors(h,d).multiplyScalar(n.rotateSpeed);const G=n.domElement;F(2*Math.PI*m.x/G.clientHeight),k(2*Math.PI*m.y/G.clientHeight),d.copy(h)}function xt(v){if(T.length===1)_.set(v.pageX,v.pageY);else{const G=Dt(v),N=.5*(v.pageX+G.x),V=.5*(v.pageY+G.y);_.set(N,V)}p.subVectors(_,g).multiplyScalar(n.panSpeed),W(p.x,p.y),g.copy(_)}function Wt(v){const G=Dt(v),N=v.pageX-G.x,V=v.pageY-G.y,J=Math.sqrt(N*N+V*V);M.set(0,J),S.set(0,Math.pow(M.y/f.y,n.zoomSpeed)),K(S.y),f.copy(M);const yt=(v.pageX+G.x)*.5,Rt=(v.pageY+G.y)*.5;ut(yt,Rt)}function Bt(v){n.enableZoom&&Wt(v),n.enablePan&&xt(v)}function Lt(v){n.enableZoom&&Wt(v),n.enableRotate&&ne(v)}function oe(v){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(v.pointerId),n.domElement.addEventListener("pointermove",R),n.domElement.addEventListener("pointerup",x)),!lt(v)&&(kt(v),v.pointerType==="touch"?Pt(v):H(v)))}function R(v){n.enabled!==!1&&(v.pointerType==="touch"?nt(v):$(v))}function x(v){switch(bt(v),T.length){case 0:n.domElement.releasePointerCapture(v.pointerId),n.domElement.removeEventListener("pointermove",R),n.domElement.removeEventListener("pointerup",x),n.dispatchEvent(Do),a=i.NONE;break;case 1:const G=T[0],N=D[G];Pt({pointerId:G,pageX:N.x,pageY:N.y});break}}function H(v){let G;switch(v.button){case 0:G=n.mouseButtons.LEFT;break;case 1:G=n.mouseButtons.MIDDLE;break;case 2:G=n.mouseButtons.RIGHT;break;default:G=-1}switch(G){case ti.DOLLY:if(n.enableZoom===!1)return;Ht(v),a=i.DOLLY;break;case ti.ROTATE:if(v.ctrlKey||v.metaKey||v.shiftKey){if(n.enablePan===!1)return;Yt(v),a=i.PAN}else{if(n.enableRotate===!1)return;mt(v),a=i.ROTATE}break;case ti.PAN:if(v.ctrlKey||v.metaKey||v.shiftKey){if(n.enableRotate===!1)return;mt(v),a=i.ROTATE}else{if(n.enablePan===!1)return;Yt(v),a=i.PAN}break;default:a=i.NONE}a!==i.NONE&&n.dispatchEvent(Ta)}function $(v){switch(a){case i.ROTATE:if(n.enableRotate===!1)return;j(v);break;case i.DOLLY:if(n.enableZoom===!1)return;et(v);break;case i.PAN:if(n.enablePan===!1)return;ft(v);break}}function Z(v){n.enabled===!1||n.enableZoom===!1||a!==i.NONE||(v.preventDefault(),n.dispatchEvent(Ta),ct(Q(v)),n.dispatchEvent(Do))}function Q(v){const G=v.deltaMode,N={clientX:v.clientX,clientY:v.clientY,deltaY:v.deltaY};switch(G){case 1:N.deltaY*=16;break;case 2:N.deltaY*=100;break}return v.ctrlKey&&!b&&(N.deltaY*=10),N}function _t(v){v.key==="Control"&&(b=!0,n.domElement.getRootNode().addEventListener("keyup",at,{passive:!0,capture:!0}))}function at(v){v.key==="Control"&&(b=!1,n.domElement.getRootNode().removeEventListener("keyup",at,{passive:!0,capture:!0}))}function st(v){n.enabled===!1||n.enablePan===!1||Nt(v)}function Pt(v){switch(It(v),T.length){case 1:switch(n.touches.ONE){case ei.ROTATE:if(n.enableRotate===!1)return;Ct(v),a=i.TOUCH_ROTATE;break;case ei.PAN:if(n.enablePan===!1)return;Gt(v),a=i.TOUCH_PAN;break;default:a=i.NONE}break;case 2:switch(n.touches.TWO){case ei.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Vt(v),a=i.TOUCH_DOLLY_PAN;break;case ei.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;zt(v),a=i.TOUCH_DOLLY_ROTATE;break;default:a=i.NONE}break;default:a=i.NONE}a!==i.NONE&&n.dispatchEvent(Ta)}function nt(v){switch(It(v),a){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ne(v),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;xt(v),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Bt(v),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Lt(v),n.update();break;default:a=i.NONE}}function gt(v){n.enabled!==!1&&v.preventDefault()}function kt(v){T.push(v.pointerId)}function bt(v){delete D[v.pointerId];for(let G=0;G<T.length;G++)if(T[G]==v.pointerId){T.splice(G,1);return}}function lt(v){for(let G=0;G<T.length;G++)if(T[G]==v.pointerId)return!0;return!1}function It(v){let G=D[v.pointerId];G===void 0&&(G=new Mt,D[v.pointerId]=G),G.set(v.pageX,v.pageY)}function Dt(v){const G=v.pointerId===T[0]?T[1]:T[0];return D[G]}n.domElement.addEventListener("contextmenu",gt),n.domElement.addEventListener("pointerdown",oe),n.domElement.addEventListener("pointercancel",x),n.domElement.addEventListener("wheel",Z,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",_t,{passive:!0,capture:!0}),this.update()}}class um{constructor(t){this.container=t,this.scene=new Jp,this.scene.background=new tt(66054),this.camera=new Ve(45,window.innerWidth/window.innerHeight,.1,3e5),this.camera.position.set(0,220,520),this.renderer=new $p({antialias:!0,powerPreference:"high-performance",logarithmicDepthBuffer:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=je,this.renderer.toneMapping=Yo,this.renderer.toneMappingExposure=1.25,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Wo,this.container.appendChild(this.renderer.domElement),this.controls=new hm(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.screenSpacePanning=!1,this.controls.minDistance=2,this.controls.maxDistance=2e5,this.controls.maxPolarAngle=Math.PI,this.ambientLight=new am(2635856,.55),this.scene.add(this.ambientLight),this.hemiLight=new nm(4219013,1581104,.4),this.scene.add(this.hemiLight),window.addEventListener("resize",()=>this.onWindowResize())}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}setQuality(t){switch(t){case"low":this.renderer.setPixelRatio(1),this.renderer.shadowMap.enabled=!1;break;case"medium":this.renderer.setPixelRatio(1),this.renderer.shadowMap.enabled=!0;break;case"high":case"ultra":this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0;break}}render(){this.renderer.render(this.scene,this.camera)}}class dm{constructor(){this.isPaused=!1,this.speedIndex=1,this.speedMultipliers=[.1,1,10,100,1e3,1e4,1e5],this.speedLabels=["0.1×","1× (Real)","10×","100×","1,000×","10,000×","100,000×"],this.currentTime=new Date,this.elapsedSimDays=0,this.lastRealTimestamp=performance.now(),this.deltaSeconds=0}togglePause(){return this.isPaused=!this.isPaused,this.isPaused}setSpeedIndex(t){t>=0&&t<this.speedMultipliers.length&&(this.speedIndex=t)}cycleSpeed(){return this.speedIndex=(this.speedIndex+1)%this.speedMultipliers.length,this.getSpeedLabel()}getSpeedMultiplier(){return this.isPaused?0:this.speedMultipliers[this.speedIndex]}getSpeedLabel(){return this.isPaused?"PAUSED":this.speedLabels[this.speedIndex]}update(){const t=performance.now(),e=Math.min((t-this.lastRealTimestamp)/1e3,.1);if(this.lastRealTimestamp=t,this.isPaused)this.deltaSeconds=0;else{const n=this.speedMultipliers[this.speedIndex],i=e*n/10;this.elapsedSimDays+=i,this.deltaSeconds=e;const a=i*864e5;this.currentTime=new Date(this.currentTime.getTime()+a)}return{deltaSeconds:this.deltaSeconds,elapsedSimDays:this.elapsedSimDays,currentDateStr:this.currentTime.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}),speedLabel:this.getSpeedLabel()}}}class fm{constructor(t=18e3,e=9e4){this.group=new wt,this.group.name="starfield";const n=new me,i=new Float32Array(t*3),a=new Float32Array(t*3),r=[new tt("#9bb0ff"),new tt("#cad7ff"),new tt("#f8f9ff"),new tt("#fff4e8"),new tt("#ffd2a1"),new tt("#ffb070")];for(let h=0;h<t;h++){const m=h*3,g=e*(.35+.65*Math.cbrt(Math.random())),_=Math.random()*Math.PI*2,p=Math.acos(2*Math.random()-1);i[m]=g*Math.sin(p)*Math.cos(_),i[m+1]=g*Math.cos(p),i[m+2]=g*Math.sin(p)*Math.sin(_);const f=r[Math.floor(Math.random()*r.length)],M=Math.random()<.85?.25+Math.random()*.35:.65+Math.random()*.35;a[m]=f.r*M,a[m+1]=f.g*M,a[m+2]=f.b*M}n.setAttribute("position",new se(i,3)),n.setAttribute("color",new se(a,3));const o=document.createElement("canvas");o.width=32,o.height=32;const c=o.getContext("2d"),l=c.createRadialGradient(16,16,0,16,16,16);l.addColorStop(0,"rgba(255,255,255,1)"),l.addColorStop(.25,"rgba(230,240,255,0.7)"),l.addColorStop(.7,"rgba(150,180,255,0.1)"),l.addColorStop(1,"rgba(0,0,0,0)"),c.fillStyle=l,c.fillRect(0,0,32,32);const u=new Yi(o),d=new Qn({size:1.6,sizeAttenuation:!1,map:u,vertexColors:!0,transparent:!0,opacity:.92,blending:qt,depthWrite:!1});this.points=new Ii(n,d),this.group.add(this.points)}}const xi={uniforms:{sunColor:{value:new tt("#ff8c00")},coronaColor:{value:new tt("#ffe066")}},vertexShader:`
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vWorldPosition;
    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPos.xyz;
      gl_Position = projectionMatrix * viewMatrix * worldPos;
    }
  `,fragmentShader:`
    uniform float time;
    uniform vec3 sunColor;
    uniform vec3 coronaColor;
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vWorldPosition;

    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
    vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

    float snoise(vec3 v) {
      const vec2 C = vec2(1.0/6.0, 1.0/3.0);
      const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
      vec3 i  = floor(v + dot(v, C.yyy));
      vec3 x0 = v - i + dot(i, C.xxx);
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min(g.xyz, l.zxy);
      vec3 i2 = max(g.xyz, l.zxy);
      vec3 x1 = x0 - i1 + C.xxx;
      vec3 x2 = x0 - i2 + C.yyy;
      vec3 x3 = x0 - D.yyy;
      i = mod289(i);
      vec4 p = permute(permute(permute(
                i.z + vec4(0.0, i1.z, i2.z, 1.0))
              + i.y + vec4(0.0, i1.y, i2.y, 1.0))
              + i.x + vec4(0.0, i1.x, i2.x, 1.0));
      float n_ = 0.142857142857;
      vec3 ns = n_ * D.wyz - D.xzx;
      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_);
      vec4 x = x_ *ns.x + ns.yyyy;
      vec4 y = y_ *ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);
      vec4 b0 = vec4(x.xy, y.xy);
      vec4 b1 = vec4(x.zw, y.zw);
      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
      vec3 p0 = vec3(a0.xy, h.x);
      vec3 p1 = vec3(a0.zw, h.y);
      vec3 p2 = vec3(a1.xy, h.z);
      vec3 p3 = vec3(a1.zw, h.w);
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
      p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
    }

    void main() {
      vec3 pos = normalize(vWorldPosition) * 3.5;
      float n1 = snoise(pos + vec3(0.0, 0.0, time * 0.18));
      float n2 = snoise(pos * 2.5 - vec3(time * 0.25, 0.0, 0.0));
      float granulation = snoise(pos * 8.0 + vec3(0.0, time * 0.4, 0.0));
      
      float pattern = (n1 * 0.5 + n2 * 0.35 + granulation * 0.15) * 0.5 + 0.5;
      
      vec3 viewDir = normalize(cameraPosition - vWorldPosition);
      float rim = 1.0 - max(dot(viewDir, vNormal), 0.0);
      
      vec3 col = mix(sunColor, coronaColor, pow(pattern, 1.8));
      col += vec3(1.0, 0.92, 0.7) * pow(rim, 2.5) * 1.8;
      
      gl_FragColor = vec4(col, 1.0);
    }
  `},Oo={uniforms:{sunDirection:{value:new w(1,0,0)}},vertexShader:`
    varying vec2 vUv;
    varying vec3 vWorldNormal;
    varying vec3 vWorldPosition;
    void main() {
      vUv = uv;
      vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPos.xyz;
      gl_Position = projectionMatrix * viewMatrix * worldPos;
    }
  `,fragmentShader:`
    uniform sampler2D dayMap;
    uniform sampler2D nightMap;
    uniform vec3 sunDirection;
    varying vec2 vUv;
    varying vec3 vWorldNormal;
    varying vec3 vWorldPosition;

    void main() {
      vec3 dayColor = texture2D(dayMap, vUv).rgb;
      vec3 nightColor = texture2D(nightMap, vUv).rgb;

      // Sun incident angle
      vec3 sunDir = normalize(sunDirection - vWorldPosition);
      float sunDot = dot(vWorldNormal, sunDir);

      // Smooth terminator transition (-0.1 to 0.15)
      float dayFactor = smoothstep(-0.08, 0.18, sunDot);
      float directLight = max(0.0, sunDot) * 1.15;
      float ambientLight = 0.16; // Subtle ambient so night side is not pitch black

      vec3 dayIlluminated = dayColor * (directLight + ambientLight);
      vec3 nightIlluminated = dayColor * ambientLight + nightColor * (1.0 - dayFactor) * 0.85;

      vec3 finalColor = mix(nightIlluminated, dayIlluminated, dayFactor);
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `},Ns={uniforms:{color:{value:new tt("#4ea8de")}},vertexShader:`
    varying vec3 vNormal;
    varying vec3 vWorldPosition;
    void main() {
      vNormal = normalize(normalMatrix * normal);
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPos.xyz;
      gl_Position = projectionMatrix * viewMatrix * worldPos;
    }
  `,fragmentShader:`
    uniform vec3 color;
    uniform float intensity;
    uniform float power;
    varying vec3 vNormal;
    varying vec3 vWorldPosition;

    void main() {
      vec3 viewDir = normalize(cameraPosition - vWorldPosition);
      float rim = 1.0 - max(dot(viewDir, vNormal), 0.0);
      float glow = pow(rim, power) * intensity;
      gl_FragColor = vec4(color, glow);
    }
  `},No={uniforms:{innerColor:{value:new tt("#ffffff")},midColor:{value:new tt("#ff9100")},outerColor:{value:new tt("#d50000")}},vertexShader:`
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    void main() {
      vUv = uv;
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPos.xyz;
      gl_Position = projectionMatrix * viewMatrix * worldPos;
    }
  `,fragmentShader:`
    uniform float time;
    uniform vec3 innerColor;
    uniform vec3 midColor;
    uniform vec3 outerColor;
    uniform float innerRadius;
    uniform float outerRadius;
    varying vec2 vUv;
    varying vec3 vWorldPosition;

    void main() {
      vec2 center = vUv - vec2(0.5);
      float dist = length(center) * 2.0;

      if (dist < innerRadius || dist > outerRadius) {
        discard;
      }

      float angle = atan(center.y, center.x);
      float spiral = sin(angle * 6.0 - dist * 14.0 + time * 3.5) * 0.5 + 0.5;
      float fineSwirl = sin(angle * 18.0 - dist * 32.0 + time * 6.0) * 0.5 + 0.5;
      
      // Doppler beaming effect
      float doppler = sin(angle - 0.4) * 0.45 + 0.55;
      float normR = (dist - innerRadius) / (outerRadius - innerRadius);
      
      vec3 col = mix(innerColor, midColor, smoothstep(0.0, 0.4, normR));
      col = mix(col, outerColor, smoothstep(0.4, 1.0, normR));
      
      col *= (0.7 + 0.3 * spiral + 0.15 * fineSwirl) * doppler * 2.2;
      
      float photonRing = 1.0 - smoothstep(innerRadius, innerRadius + 0.04, dist);
      col += vec3(1.0, 1.0, 1.0) * photonRing * 3.5;

      float alpha = smoothstep(innerRadius, innerRadius + 0.03, dist) * 
                    (1.0 - smoothstep(outerRadius - 0.08, outerRadius, dist)) * doppler;

      gl_FragColor = vec4(col, alpha);
    }
  `},Bo={uniforms:{jetColor:{value:new tt("#00e5ff")}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform float time;
    uniform vec3 jetColor;
    varying vec2 vUv;

    void main() {
      float y = vUv.y;
      float x = abs(vUv.x - 0.5) * 2.0;
      
      float pulse = sin(y * 25.0 - time * 8.0) * 0.5 + 0.5;
      float intensity = (1.0 - x) * (1.0 - y * 0.5) * (0.8 + 0.4 * pulse);
      
      vec3 col = jetColor * intensity * 2.5 + vec3(0.5, 0.8, 1.0) * pow(1.0 - x, 4.0) * 2.0;
      float alpha = intensity * (1.0 - y * 0.8) * 0.9;
      
      gl_FragColor = vec4(col, alpha);
    }
  `},Fo={uniforms:{beamColor:{value:new tt("#00e5ff")}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform float time;
    uniform vec3 beamColor;
    uniform float pulseFreq;
    varying vec2 vUv;

    void main() {
      float y = vUv.y;
      float x = abs(vUv.x - 0.5) * 2.0;
      float pulse = sin(time * pulseFreq) * 0.4 + 0.6;
      
      float core = pow(1.0 - x, 3.0);
      vec3 col = beamColor * core * 3.0 * pulse + vec3(1.0) * pow(1.0 - x, 6.0) * pulse;
      float alpha = core * (1.0 - y * 0.7) * pulse * 0.85;
      
      gl_FragColor = vec4(col, alpha);
    }
  `},ko={uniforms:{throatColor:{value:new tt("#9c27b0")},rimColor:{value:new tt("#00e5ff")}},vertexShader:`
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vWorldPosition;
    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPos.xyz;
      gl_Position = projectionMatrix * viewMatrix * worldPos;
    }
  `,fragmentShader:`
    uniform float time;
    uniform vec3 throatColor;
    uniform vec3 rimColor;
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vWorldPosition;

    void main() {
      vec3 viewDir = normalize(cameraPosition - vWorldPosition);
      float rim = 1.0 - abs(dot(viewDir, vNormal));
      
      vec2 center = vUv - 0.5;
      float dist = length(center) * 2.0;
      float angle = atan(center.y, center.x);
      
      // Spacetime distortion swirl
      float swirl = sin(angle * 8.0 - dist * 12.0 + time * 2.5) * 0.5 + 0.5;
      float ripples = sin(dist * 28.0 - time * 4.0) * 0.5 + 0.5;
      
      vec3 col = mix(throatColor, rimColor, pow(rim, 1.5));
      col += vec3(0.3, 0.7, 1.0) * swirl * 0.6;
      col += vec3(1.0, 0.8, 0.4) * ripples * pow(1.0 - dist, 2.0) * 0.8;
      
      float alpha = smoothstep(0.0, 0.3, dist) * (0.4 + 0.6 * pow(rim, 2.0));
      gl_FragColor = vec4(col, alpha);
    }
  `},zo={vertexShader:`
    varying vec2 vUv;
    varying vec3 vPosition;
    void main() {
      vUv = uv;
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform float time;
    varying vec2 vUv;
    varying vec3 vPosition;

    void main() {
      // Procedural CMB multipole temperature fluctuations (Planck anisotropy mock)
      vec3 p = normalize(vPosition) * 12.0;
      float n1 = sin(p.x * 2.5 + p.y * 1.8) * cos(p.z * 2.2);
      float n2 = sin(p.y * 5.0 - p.x * 3.2) * cos(p.x * 4.1 + p.z * 3.8);
      float n3 = sin(p.z * 11.0 + p.x * 9.0) * cos(p.y * 8.5);
      
      float val = (n1 * 0.5 + n2 * 0.35 + n3 * 0.15) * 0.5 + 0.5;
      
      // Planck color palette (Red -> Orange -> Cyan -> Deep Blue)
      vec3 cCold = vec3(0.05, 0.15, 0.55);
      vec3 cMid = vec3(0.0, 0.65, 0.85);
      vec3 cWarm = vec3(0.95, 0.6, 0.1);
      vec3 cHot = vec3(0.85, 0.15, 0.1);
      
      vec3 col = val < 0.35 ? mix(cCold, cMid, val / 0.35) :
                 val < 0.7 ? mix(cMid, cWarm, (val - 0.35) / 0.35) :
                 mix(cWarm, cHot, (val - 0.7) / 0.3);
                 
      gl_FragColor = vec4(col, 0.18);
    }
  `};class pm{constructor(t){this.data=t,this.group=new wt,this.group.name="sun_root",this.group.userData={type:"sun",data:t,name:t.name,clickable:!0},this.radius=t.visualRadius||36,this.buildSun()}buildSun(){const t=new Xt(this.radius,64,64);this.sunUniforms={time:{value:0},sunColor:{value:new tt("#ff8c00")},coronaColor:{value:new tt("#ffe066")}};const e=new Ee({uniforms:this.sunUniforms,vertexShader:xi.vertexShader,fragmentShader:xi.fragmentShader});this.sunSphere=new ot(t,e),this.group.add(this.sunSphere);const n=new Xt(this.radius*1.08,32,32),i=new ce({color:16755200,transparent:!0,opacity:.35,side:ge,blending:qt,depthWrite:!1});this.coronaInner=new ot(n,i),this.group.add(this.coronaInner);const a=new Xt(this.radius*1.25,32,32),r=new ce({color:16737792,transparent:!0,opacity:.15,side:ge,blending:qt,depthWrite:!1});this.coronaOuter=new ot(a,r),this.group.add(this.coronaOuter),this.pointLight=new Oa(16776693,3.8,0,0),this.pointLight.castShadow=!0,this.pointLight.shadow.bias=-.001,this.group.add(this.pointLight)}update(t,e){this.sunUniforms&&(this.sunUniforms.time.value=e),this.sunSphere&&(this.sunSphere.rotation.y+=.002*t*60),this.coronaOuter&&(this.coronaOuter.rotation.z+=.001*t*60)}}class mm{constructor(){this.cache=new Map}noise2D(t,e){const n=Math.sin(t*12.9898+e*78.233)*43758.5453;return n-Math.floor(n)}smoothNoise(t,e){const n=Math.floor(t),i=Math.floor(e),a=t-n,r=e-i,o=a*a*(3-2*a),c=r*r*(3-2*r),l=this.noise2D(n,i),u=this.noise2D(n+1,i),d=this.noise2D(n,i+1),h=this.noise2D(n+1,i+1),m=l*(1-o)+u*o,g=d*(1-o)+h*o;return m*(1-c)+g*c}fbm(t,e,n=6,i=2,a=.5){let r=0,o=1,c=1,l=0;for(let u=0;u<n;u++)r+=this.smoothNoise(t*c,e*c)*o,l+=o,o*=a,c*=i;return r/l}createCanvas(t=256,e=128){const n=document.createElement("canvas");return n.width=t,n.height=e,n}wrapTexture(t,e=!0){const n=new Yi(t);return n.wrapS=ws,n.wrapT=Tn,e&&(n.colorSpace=je),n.minFilter=We,n.magFilter=We,n.generateMipmaps=!1,n}getSunTexture(){if(this.cache.has("sun"))return this.cache.get("sun");const t=this.createCanvas(256,128),e=t.getContext("2d"),n=e.createImageData(t.width,t.height),i=n.data;for(let r=0;r<t.height;r++)for(let o=0;o<t.width;o++){const c=o/t.width,l=r/t.height,u=this.fbm(c*8,l*4,3,2,.5),d=Math.min(255,Math.floor(255*(.92+.08*u))),h=Math.min(255,Math.floor(190*Math.pow(u,1.1))),m=Math.min(255,Math.floor(40*Math.pow(u,2))),g=(r*t.width+o)*4;i[g]=d,i[g+1]=h,i[g+2]=m,i[g+3]=255}e.putImageData(n,0,0);const a=this.wrapTexture(t,!0);return this.cache.set("sun",a),a}getEarthDayTexture(){if(this.cache.has("earth_day"))return this.cache.get("earth_day");const t=this.createCanvas(256,128),e=t.getContext("2d"),n=e.createImageData(t.width,t.height),i=n.data;for(let r=0;r<t.height;r++){const o=(r/t.height-.5)*Math.PI,c=Math.abs(o)>1.25;for(let l=0;l<t.width;l++){const u=l/t.width*Math.PI*2,d=Math.cos(u)*Math.cos(o),h=Math.sin(o),m=Math.sin(u)*Math.cos(o),g=this.fbm((d+1)*2.5,(h+1)*2.5+(m+1)*2.5,3,2,.5),_=(r*t.width+l)*4;c?(i[_]=245,i[_+1]=250,i[_+2]=255):g>.5?(i[_]=40+Math.floor(60*g),i[_+1]=120+Math.floor(50*g),i[_+2]=50):(i[_]=20,i[_+1]=75+Math.floor(40*g),i[_+2]=180+Math.floor(50*g)),i[_+3]=255}}e.putImageData(n,0,0);const a=this.wrapTexture(t,!0);return this.cache.set("earth_day",a),a}getEarthCloudsTexture(){if(this.cache.has("earth_clouds"))return this.cache.get("earth_clouds");const t=this.createCanvas(256,128),e=t.getContext("2d"),n=e.createImageData(t.width,t.height),i=n.data;for(let r=0;r<t.height;r++)for(let o=0;o<t.width;o++){const c=o/t.width,l=r/t.height,u=this.fbm(c*6,l*3,3,2,.5),d=Math.max(0,Math.min(1,(u-.48)*3)),h=(r*t.width+o)*4;i[h]=255,i[h+1]=255,i[h+2]=255,i[h+3]=Math.floor(d*220)}e.putImageData(n,0,0);const a=this.wrapTexture(t,!0);return this.cache.set("earth_clouds",a),a}getEarthNightTexture(){if(this.cache.has("earth_night"))return this.cache.get("earth_night");const t=this.createCanvas(256,128),e=t.getContext("2d"),n=e.createImageData(t.width,t.height),i=n.data;for(let r=0;r<t.height;r++){const o=(r/t.height-.5)*Math.PI;for(let c=0;c<t.width;c++){const l=c/t.width*Math.PI*2,u=Math.cos(l)*Math.cos(o),d=Math.sin(o),h=Math.sin(l)*Math.cos(o),m=this.fbm((u+1)*2.5,(d+1)*2.5+(h+1)*2.5,3,2,.5),g=(r*t.width+c)*4;if(m>.53&&Math.abs(o)<1.1&&this.smoothNoise(u*12,d*12)>.62){i[g]=255,i[g+1]=210,i[g+2]=130,i[g+3]=255;continue}i[g]=0,i[g+1]=0,i[g+2]=0,i[g+3]=255}}e.putImageData(n,0,0);const a=this.wrapTexture(t,!0);return this.cache.set("earth_night",a),a}getJupiterTexture(){if(this.cache.has("jupiter"))return this.cache.get("jupiter");const t=this.createCanvas(256,128),e=t.getContext("2d"),n=e.createImageData(t.width,t.height),i=n.data;for(let r=0;r<t.height;r++){const o=r/t.height,c=Math.sin(o*Math.PI*14);for(let l=0;l<t.width;l++){const u=l/t.width,d=this.fbm(u*8,o*4,3,2,.5),h=.5+.3*c+.2*d,m=(u-.62)*8,g=(o-.66)*16,_=Math.sqrt(m*m+g*g),p=(r*t.width+l)*4;_<1?(i[p]=235,i[p+1]=95,i[p+2]=70):(i[p]=Math.floor(235*h+55*(1-h)),i[p+1]=Math.floor(190*h+45*(1-h)),i[p+2]=Math.floor(150*h+35*(1-h))),i[p+3]=255}}e.putImageData(n,0,0);const a=this.wrapTexture(t,!0);return this.cache.set("jupiter",a),a}getSaturnTexture(){if(this.cache.has("saturn"))return this.cache.get("saturn");const t=this.createCanvas(256,128),e=t.getContext("2d"),n=e.createImageData(t.width,t.height),i=n.data;for(let r=0;r<t.height;r++){const o=r/t.height,c=Math.sin(o*Math.PI*12)*.12;for(let l=0;l<t.width;l++){const u=l/t.width,d=this.smoothNoise(u*6,o*8)*.06,h=.82+c+d,m=(r*t.width+l)*4;i[m]=Math.min(255,Math.floor(245*h)),i[m+1]=Math.min(255,Math.floor(225*h)),i[m+2]=Math.min(255,Math.floor(180*h)),i[m+3]=255}}e.putImageData(n,0,0);const a=this.wrapTexture(t,!0);return this.cache.set("saturn",a),a}getSaturnRingsTexture(){if(this.cache.has("saturn_rings"))return this.cache.get("saturn_rings");const t=this.createCanvas(256,16),e=t.getContext("2d"),n=e.createImageData(t.width,t.height),i=n.data;for(let r=0;r<t.width;r++){const o=r/t.width;let c=.85,l=235,u=215,d=175;o<.22?c=.3*(o/.22):o<.58?c=.95:o<.65?(c=.04,l=60,u=55,d=50):o<.94?c=.8:c=(1-(o-.94)/.06)*.35;for(let h=0;h<t.height;h++){const m=(h*t.width+r)*4;i[m]=l,i[m+1]=u,i[m+2]=d,i[m+3]=Math.floor(c*255)}}e.putImageData(n,0,0);const a=this.wrapTexture(t,!0);return this.cache.set("saturn_rings",a),a}getRockyPlanetTexture(t="#c1440e",e=.6){const n=`rocky_${t}`;if(this.cache.has(n))return this.cache.get(n);const i=this.createCanvas(256,128),a=i.getContext("2d"),r=new tt(t),o=a.createImageData(i.width,i.height),c=o.data;for(let u=0;u<i.height;u++)for(let d=0;d<i.width;d++){const h=d/i.width,m=u/i.height,g=this.fbm(h*8,m*4,3,2,.5),_=Math.min(255,Math.floor(r.r*255*(.85+.35*g))),p=Math.min(255,Math.floor(r.g*255*(.85+.35*g))),f=Math.min(255,Math.floor(r.b*255*(.85+.35*g))),M=(u*i.width+d)*4;c[M]=_,c[M+1]=p,c[M+2]=f,c[M+3]=255}a.putImageData(o,0,0);const l=this.wrapTexture(i,!0);return this.cache.set(n,l),l}getIceGiantTexture(t="#4dd0e1"){const e=`ice_${t}`;if(this.cache.has(e))return this.cache.get(e);const n=this.createCanvas(256,128),i=n.getContext("2d"),a=new tt(t),r=i.createImageData(n.width,n.height),o=r.data;for(let l=0;l<n.height;l++){const u=l/n.height,d=Math.sin(u*Math.PI*8)*.08;for(let h=0;h<n.width;h++){const m=h/n.width,g=this.smoothNoise(m*6,u*3)*.08,_=.95+d+g,p=(l*n.width+h)*4;o[p]=Math.min(255,Math.floor(a.r*255*_)),o[p+1]=Math.min(255,Math.floor(a.g*255*_)),o[p+2]=Math.min(255,Math.floor(a.b*255*_)),o[p+3]=255}}i.putImageData(r,0,0);const c=this.wrapTexture(n,!0);return this.cache.set(e,c),c}}const xe=new mm;class Me{static solveKepler(t,e){let n=t;for(let i=0;i<6;i++){const a=n-e*Math.sin(n)-t,r=1-e*Math.cos(n),o=a/r;if(n-=o,Math.abs(o)<1e-6)break}return n}static calculatePosition(t,e,n,i,a,r=0){if(i===0)return new w(0,0,0);const c=(2*Math.PI/i*a+r)%(2*Math.PI),l=this.solveKepler(c,e),u=t*(Math.cos(l)-e),d=t*Math.sqrt(1-e*e)*Math.sin(l),h=n*Math.PI/180,m=u,g=-d*Math.sin(h),_=d*Math.cos(h);return new w(m,g,_)}static createOrbitPath(t,e,n,i="#4a7299",a=128){const r=[],o=n*Math.PI/180;for(let d=0;d<=a;d++){const h=d/a*Math.PI*2,m=t*(1-e*e)/(1+e*Math.cos(h)),g=m*Math.cos(h),_=m*Math.sin(h),p=g,f=-_*Math.sin(o),M=_*Math.cos(o);r.push(new w(p,f,M))}const c=new me().setFromPoints(r),l=new Ga({color:new tt(i),transparent:!0,opacity:.22,blending:qt,depthWrite:!1}),u=new Sc(c,l);return u.name="orbit_path",u}}class gm{constructor(t){this.data=t,this.group=new wt,this.group.name="planet_earth",this.group.userData={type:"planet",data:t,name:t.name,clickable:!0},this.radius=t.visualRadius||6.2,this.axialTiltRad=(t.axialTilt||23.44)*Math.PI/180,this.buildEarth(),this.buildMoon()}buildEarth(){this.planetContainer=new wt,this.planetContainer.rotation.z=this.axialTiltRad,this.group.add(this.planetContainer);const t=new Xt(this.radius,64,64),e=xe.getEarthDayTexture(),n=xe.getEarthNightTexture();this.earthUniforms={dayMap:{value:e},nightMap:{value:n},sunDirection:{value:new w(0,0,0)}};const i=new Ee({uniforms:this.earthUniforms,vertexShader:Oo.vertexShader,fragmentShader:Oo.fragmentShader});this.surfaceMesh=new ot(t,i),this.surfaceMesh.castShadow=!0,this.surfaceMesh.receiveShadow=!0,this.planetContainer.add(this.surfaceMesh);const a=new Xt(this.radius*1.015,48,48),r=xe.getEarthCloudsTexture(),o=new Zt({map:r,transparent:!0,opacity:.75,blending:jn,roughness:.9,metalness:0,depthWrite:!1});this.cloudMesh=new ot(a,o),this.planetContainer.add(this.cloudMesh);const c=new Xt(this.radius*1.035,32,32),l=new Ee({uniforms:{color:{value:new tt("#4ea8de")},intensity:{value:.85},power:{value:4}},vertexShader:Ns.vertexShader,fragmentShader:Ns.fragmentShader,side:ge,transparent:!0,blending:qt,depthWrite:!1});this.atmosMesh=new ot(c,l),this.group.add(this.atmosMesh)}buildMoon(){if(!this.data.moons||this.data.moons.length===0)return;const t=this.data.moons[0];this.moonGroup=new wt,this.moonGroup.name="moon_luna",this.moonGroup.userData={type:"moon",data:t,name:t.name,clickable:!0};const e=new Xt(t.visualRadius||1.6,32,32),n=xe.getRockyPlanetTexture("#b0b0b0",.8),i=new Zt({map:n,roughness:.85,metalness:0});this.moonMesh=new ot(e,i),this.moonMesh.castShadow=!0,this.moonMesh.receiveShadow=!0,this.moonGroup.add(this.moonMesh),this.group.add(this.moonGroup);const a=Me.createOrbitPath(t.orbitalRadius,.0549,5.14,"#7fa8c9",64);this.group.add(a)}update(t,e){if(this.surfaceMesh&&(this.surfaceMesh.rotation.y+=.015*t*60),this.cloudMesh&&(this.cloudMesh.rotation.y+=.018*t*60),this.moonGroup&&this.data.moons&&this.data.moons.length>0){const n=this.data.moons[0],i=Me.calculatePosition(n.orbitalRadius,.0549,5.14,n.orbitalPeriodDays,e);this.moonGroup.position.copy(i),this.moonMesh.rotation.y+=.005*t*60}}}class vm{constructor(t){this.data=t,this.group=new wt,this.group.name="planet_jupiter",this.group.userData={type:"planet",data:t,name:t.name,clickable:!0},this.radius=t.visualRadius||18,this.moons=[],this.buildJupiter(),this.buildGalileanMoons()}buildJupiter(){const t=new Xt(this.radius,64,64),e=xe.getJupiterTexture(),n=new Zt({map:e,roughness:.7,metalness:0});this.mesh=new ot(t,n),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.group.add(this.mesh)}buildGalileanMoons(){this.data.moons&&this.data.moons.forEach(t=>{const e=new wt;e.name=`moon_${t.id}`,e.userData={type:"moon",data:t,name:t.name,clickable:!0};const n=new Xt(t.visualRadius,24,24),i=xe.getRockyPlanetTexture(t.color,.7),a=new Zt({map:i,roughness:.8,metalness:0}),r=new ot(n,a);r.castShadow=!0,r.receiveShadow=!0,e.add(r),this.group.add(e);const o=Me.createOrbitPath(t.orbitalRadius,.005,.2,"#bcaaa4",48);this.group.add(o),this.moons.push({group:e,data:t})})}update(t,e){this.mesh&&(this.mesh.rotation.y+=.035*t*60),this.moons.forEach(n=>{const i=Me.calculatePosition(n.data.orbitalRadius,.005,.2,n.data.orbitalPeriodDays,e);n.group.position.copy(i)})}}class _m{constructor(t){this.data=t,this.group=new wt,this.group.name="planet_saturn",this.group.userData={type:"planet",data:t,name:t.name,clickable:!0},this.radius=t.visualRadius||15,this.axialTiltRad=(t.axialTilt||26.73)*Math.PI/180,this.moons=[],this.buildSaturn(),this.buildMoons()}buildSaturn(){this.tiltedGroup=new wt,this.tiltedGroup.rotation.z=this.axialTiltRad,this.group.add(this.tiltedGroup);const t=new Xt(this.radius,64,64),e=xe.getSaturnTexture(),n=new Zt({map:e,roughness:.7,metalness:0});this.bodyMesh=new ot(t,n),this.bodyMesh.castShadow=!0,this.bodyMesh.receiveShadow=!0,this.tiltedGroup.add(this.bodyMesh);const i=this.data.ringInnerRadius||19,a=this.data.ringOuterRadius||38,r=new mn(i,a,96),o=r.attributes.position,c=new w;for(let d=0;d<o.count;d++)c.fromBufferAttribute(o,d),r.attributes.uv.setXY(d,(c.length()-i)/(a-i),0);const l=xe.getSaturnRingsTexture(),u=new Zt({map:l,side:pe,transparent:!0,opacity:.95,roughness:.75,metalness:0});this.ringMesh=new ot(r,u),this.ringMesh.rotation.x=Math.PI/2,this.ringMesh.castShadow=!0,this.ringMesh.receiveShadow=!0,this.tiltedGroup.add(this.ringMesh)}buildMoons(){this.data.moons&&this.data.moons.forEach(t=>{const e=new wt;e.name=`moon_${t.id}`,e.userData={type:"moon",data:t,name:t.name,clickable:!0};const n=new Xt(t.visualRadius,24,24),i=xe.getRockyPlanetTexture(t.color,.6),a=new Zt({map:i,roughness:.85,metalness:0}),r=new ot(n,a);r.castShadow=!0,r.receiveShadow=!0,e.add(r),this.group.add(e);const o=Me.createOrbitPath(t.orbitalRadius,.02,.3,"#faedcd",48);this.group.add(o),this.moons.push({group:e,data:t})})}update(t,e){this.bodyMesh&&(this.bodyMesh.rotation.y+=.03*t*60),this.moons.forEach(n=>{const i=Me.calculatePosition(n.data.orbitalRadius,.02,.3,n.data.orbitalPeriodDays,e);n.group.position.copy(i)})}}class Pc{static createPlanet(t){const e=new wt;e.name=`planet_${t.id}`,e.userData={type:"planet",data:t,name:t.name,clickable:!0};const n=t.visualRadius||4,i=(t.axialTilt||0)*Math.PI/180,a=new wt;a.rotation.z=i,e.add(a);const r=new Xt(n,48,48);let o;switch(t.textureStyle){case"rocky-gray":o=xe.getRockyPlanetTexture("#a8a8a8",.9);break;case"dense-atmosphere":o=xe.getRockyPlanetTexture("#f2d49b",.2);break;case"martian-red":o=xe.getRockyPlanetTexture("#c84c16",.7);break;case"ice-cyan":o=xe.getIceGiantTexture("#5ee2f0");break;case"deep-blue":o=xe.getIceGiantTexture("#2997ff");break;case"pluto-heart":o=xe.getRockyPlanetTexture("#cbb5ad",.5);break;default:o=xe.getRockyPlanetTexture(t.color||"#999999",.5)}const c=new Zt({map:o,roughness:.75,metalness:0}),l=new ot(r,c);if(l.castShadow=!0,l.receiveShadow=!0,a.add(l),t.id==="venus"||t.id==="mars"||t.id==="uranus"||t.id==="neptune"){const d=t.id==="venus"?"#ffe099":t.id==="mars"?"#ff9980":t.id==="uranus"?"#80deea":"#42a5f5",h=new Xt(n*1.035,32,32),m=new Ee({uniforms:{color:{value:new tt(d)},intensity:{value:.75},power:{value:4}},vertexShader:Ns.vertexShader,fragmentShader:Ns.fragmentShader,side:ge,transparent:!0,blending:qt,depthWrite:!1}),g=new ot(h,m);e.add(g)}if(t.id==="uranus"){const d=new mn(n*1.5,n*2,64),h=new ce({color:8445674,side:pe,transparent:!0,opacity:.35,depthWrite:!1}),m=new ot(d,h);m.rotation.x=Math.PI/2,a.add(m)}const u=[];return t.moons&&t.moons.length>0&&t.moons.forEach(d=>{const h=new wt;h.name=`moon_${d.id}`,h.userData={type:"moon",data:d,name:d.name,clickable:!0};const m=new Xt(d.visualRadius,16,16),g=xe.getRockyPlanetTexture(d.color,.5),_=new Zt({map:g,roughness:.85,metalness:0}),p=new ot(m,_);p.castShadow=!0,p.receiveShadow=!0,h.add(p),e.add(h);const f=Me.createOrbitPath(d.orbitalRadius,.01,1,"#90a4ae",32);e.add(f),u.push({group:h,data:d})}),{group:e,mesh:l,moons:u,update:(d,h)=>{l.rotation.y+=.02*d*60,u.forEach(m=>{const g=Me.calculatePosition(m.data.orbitalRadius,.01,1,m.data.orbitalPeriodDays,h);m.group.position.copy(g)})}}}}class Ho{constructor(t=205,e=235,n=2500,i="main_asteroid_belt"){this.group=new wt,this.group.name=i;const a=new Hs(.8,1),r=new Zt({color:7697781,roughness:.9,metalness:.1});this.instancedMesh=new tm(a,r,n),this.instancedMesh.castShadow=!0,this.instancedMesh.receiveShadow=!0,this.asteroidData=[];const o=new Ce;for(let c=0;c<n;c++){const l=t+Math.random()*(e-t),u=Math.random()*Math.PI*2,d=(Math.random()-.5)*14,h=.3+Math.random()*.9,m=(.5+Math.random()*.5)*3e-4,g=(Math.random()-.5)*.05,_=(Math.random()-.5)*.05;this.asteroidData.push({radius:l,angle:u,height:d,scale:h,speed:m,rotSpeedX:g,rotSpeedY:_,rotX:Math.random()*Math.PI,rotY:Math.random()*Math.PI}),o.position.set(Math.cos(u)*l,d,Math.sin(u)*l),o.scale.set(h,h*(.8+Math.random()*.4),h),o.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0),o.updateMatrix(),this.instancedMesh.setMatrixAt(c,o.matrix)}this.instancedMesh.instanceMatrix.needsUpdate=!0,this.group.add(this.instancedMesh),this.dummy=o}update(t){if(this.instancedMesh){for(let e=0;e<this.asteroidData.length;e++){const n=this.asteroidData[e];n.angle+=n.speed*t*60,n.rotX+=n.rotSpeedX,n.rotY+=n.rotSpeedY,this.dummy.position.set(Math.cos(n.angle)*n.radius,n.height,Math.sin(n.angle)*n.radius),this.dummy.scale.set(n.scale,n.scale,n.scale),this.dummy.rotation.set(n.rotX,n.rotY,0),this.dummy.updateMatrix(),this.instancedMesh.setMatrixAt(e,this.dummy.matrix)}this.instancedMesh.instanceMatrix.needsUpdate=!0}}}class Ic{constructor(t,e,n,i,a="#00e5ff"){this.group=new wt,this.group.name=`comet_${t}`,this.semiMajorAxis=e,this.eccentricity=n,this.periodDays=i;const r=new Hs(1.2,1),o=new Zt({color:3355443,roughness:.95});this.nucleus=new ot(r,o),this.group.add(this.nucleus);const c=new Xt(3.5,16,16),l=new ce({color:new tt(a),transparent:!0,opacity:.6,blending:qt});this.coma=new ot(c,l),this.group.add(this.coma);const u=new pn(4,45,16,1,!0);u.translate(0,22.5,0);const d=new ce({color:new tt(a),transparent:!0,opacity:.45,blending:qt,side:pe});this.tail=new ot(u,d),this.group.add(this.tail)}update(t){this.group.position.copy(t);const e=t.clone().normalize();this.tail.quaternion.setFromUnitVectors(new w(0,1,0),e);const n=t.length(),i=Math.max(.1,Math.min(1.5,200/n));this.tail.scale.set(i,i*1.5,i),this.coma.scale.setScalar(i)}}class ym{constructor(t){this.scene=t,this.group=new wt,this.group.name="solar_system_root",this.scene.add(this.group),this.planets=[],this.orbitLines=[],this.showOrbits=!0,this.buildSystem()}buildSystem(){this.sun=new pm(Li.sun),this.group.add(this.sun.group),Li.planets.forEach(t=>{let e;t.id==="earth"?e=new gm(t):t.id==="jupiter"?e=new vm(t):t.id==="saturn"?e=new _m(t):e=Pc.createPlanet(t),this.group.add(e.group),this.planets.push({id:t.id,data:t,instance:e,group:e.group});const n=Me.createOrbitPath(t.semiMajorAxis,t.eccentricity,t.inclination,t.color||"#3a88c8",128);this.group.add(n),this.orbitLines.push(n)}),this.mainAsteroidBelt=new Ho(195,230,2200,"main_asteroid_belt"),this.group.add(this.mainAsteroidBelt.group),this.kuiperBelt=new Ho(540,680,1600,"kuiper_belt"),this.group.add(this.kuiperBelt.group),this.halleyComet=new Ic("halley",280,.967,75.3*365.25,"#00e5ff"),this.group.add(this.halleyComet.group)}toggleOrbits(t){this.showOrbits=t,this.orbitLines.forEach(e=>{e.visible=t})}update(t,e,n){if(this.sun&&this.sun.update(t,n),this.planets.forEach(i=>{const a=Me.calculatePosition(i.data.semiMajorAxis,i.data.eccentricity,i.data.inclination,i.data.orbitalPeriodDays,e);i.group.position.copy(a),i.instance.update&&i.instance.update(t,e,n)}),this.mainAsteroidBelt&&this.mainAsteroidBelt.update(t),this.kuiperBelt&&this.kuiperBelt.update(t),this.halleyComet){const i=Me.calculatePosition(this.halleyComet.semiMajorAxis,this.halleyComet.eccentricity,18,this.halleyComet.periodDays,e);this.halleyComet.update(i)}}getPlanetById(t){return this.planets.find(e=>e.id===t)}}class Sm{constructor(t){this.data=t,this.group=new wt,this.group.name=`galaxy_${t.id}`,this.group.position.set(...t.position),this.group.userData={type:"galaxy",data:t,clickable:!0,name:t.name},this.particleCount=t.particleCount||4e4,this.radius=t.radius||3e3,this.rotationSpeed=15e-5,this.targetOpacity=.12,this.currentOpacity=.12,this.targetSize=2.2,this.currentSize=2.2,this.targetCoreOpacity=.04,this.currentCoreOpacity=.04,this.buildGalaxy()}buildGalaxy(){const t=new me,e=new Float32Array(this.particleCount*3),n=new Float32Array(this.particleCount*3),i=new tt(this.data.colorCore||"#ffe099"),a=new tt(this.data.colorArms||"#7fb9ff"),r=new tt(this.data.colorDust||"#ff9070"),o=this.data.armCount??4,c=this.data.armTwist??3.5,l=this.data.isElliptical||!1;for(let _=0;_<this.particleCount;_++){const p=_*3;if(l){const f=Math.pow(Math.random(),2)*this.radius,M=Math.random()*Math.PI*2,S=Math.acos(Math.max(-1,Math.min(1,2*Math.random()-1)));e[p]=f*Math.sin(S)*Math.cos(M),e[p+1]=f*Math.cos(S)*.6,e[p+2]=f*Math.sin(S)*Math.sin(M);const A=f/this.radius,I=i.clone().lerp(a,A);n[p]=I.r,n[p+1]=I.g,n[p+2]=I.b}else{const f=Math.pow(Math.random(),1.6)*this.radius,M=_%(o>0?o:1),S=o>0?M*2*Math.PI/o:0,A=f/this.radius*c,I=Math.pow(Math.random(),3)*(Math.random()<.5?1:-1)*(f*.22+20),C=Math.pow(Math.random(),3)*(Math.random()<.5?1:-1)*(180*(1-f/this.radius)+30),T=Math.pow(Math.random(),3)*(Math.random()<.5?1:-1)*(f*.22+20),D=S+A;e[p]=Math.cos(D)*f+I,e[p+1]=C,e[p+2]=Math.sin(D)*f+T;const b=f/this.radius;let y;b<.18?y=i.clone().lerp(new tt("#ffffff"),.5):b<.45&&Math.random()<.25?y=r:y=a.clone().lerp(new tt("#ffffff"),Math.random()*.3),n[p]=y.r,n[p+1]=y.g,n[p+2]=y.b}}t.setAttribute("position",new se(e,3)),t.setAttribute("color",new se(n,3));const u=document.createElement("canvas");u.width=32,u.height=32;const d=u.getContext("2d"),h=d.createRadialGradient(16,16,0,16,16,16);h.addColorStop(0,"rgba(255,255,255,1)"),h.addColorStop(.3,"rgba(230,240,255,0.7)"),h.addColorStop(.7,"rgba(150,180,255,0.15)"),h.addColorStop(1,"rgba(0,0,0,0)"),d.fillStyle=h,d.fillRect(0,0,32,32);const m=new Yi(u);this.pointsMaterial=new Qn({size:this.currentSize,map:m,vertexColors:!0,transparent:!0,opacity:this.currentOpacity,blending:qt,depthWrite:!1}),this.points=new Ii(t,this.pointsMaterial),this.group.add(this.points);const g=new Xt(this.radius*.08,16,16);this.coreMaterial=new ce({color:new tt(this.data.colorCore||"#ffe099"),transparent:!0,opacity:this.currentCoreOpacity,blending:qt,depthWrite:!1}),this.coreMesh=new ot(g,this.coreMaterial),this.group.add(this.coreMesh),this.data.containsSolarSystem&&this.addSolarSystemMarker()}addSolarSystemMarker(){const t=this.radius*.58,e=1.35,n=new w(Math.cos(e)*t,12,Math.sin(e)*t),i=new wt;i.name="solar_system_galaxy_marker",i.position.copy(n);const a=new Xt(14,12,12),r=new ce({color:16771584}),o=new ot(a,r);i.add(o);const c=new mn(20,24,32),l=new ce({color:58879,side:pe,transparent:!0,opacity:.8}),u=new ot(c,l);u.rotation.x=Math.PI/2,i.add(u),i.userData={type:"solar_system_entrance",name:"Solar System (Orion Spur)",clickable:!0},this.group.add(i),this.solarMarker=i}setScaleMode(t){switch(t){case Ft.UNIVERSE:this.targetOpacity=.85,this.targetSize=8.5,this.targetCoreOpacity=.45;break;case Ft.GALAXY:this.targetOpacity=.65,this.targetSize=6,this.targetCoreOpacity=.35;break;case Ft.SOLAR_SYSTEM:this.targetOpacity=.12,this.targetSize=2,this.targetCoreOpacity=.04;break;case Ft.PLANET_ORBIT:case Ft.CLOSE_APPROACH:this.targetOpacity=.08,this.targetSize=1.6,this.targetCoreOpacity=.02;break}}update(t){if(this.points&&(this.points.rotation.y+=this.rotationSpeed*t*60),this.solarMarker){const e=this.solarMarker.children[1];e&&(e.rotation.z+=.02)}this.currentOpacity+=(this.targetOpacity-this.currentOpacity)*.08,this.currentSize+=(this.targetSize-this.currentSize)*.08,this.currentCoreOpacity+=(this.targetCoreOpacity-this.currentCoreOpacity)*.08,this.pointsMaterial&&(this.pointsMaterial.opacity=this.currentOpacity,this.pointsMaterial.size=this.currentSize),this.coreMaterial&&(this.coreMaterial.opacity=this.currentCoreOpacity)}}class xm{constructor(t){this.data=t,this.group=new wt,this.group.name=`blackhole_${t.id}`,this.group.position.set(...t.position),this.group.userData={type:"black_hole",data:t,name:t.name,clickable:!0},this.eventHorizonRadius=t.eventHorizonSize||60,this.diskInner=t.diskInnerRadius||90,this.diskOuter=t.diskOuterRadius||300,this.jetHeight=t.jetHeight||500,this.buildBlackHole()}buildBlackHole(){const t=new Xt(this.eventHorizonRadius,32,32),e=new ce({color:0});this.horizonMesh=new ot(t,e),this.group.add(this.horizonMesh);const n=new mn(this.eventHorizonRadius*1.01,this.eventHorizonRadius*1.35,64),i=new ce({color:16771276,side:pe,transparent:!0,opacity:.95,blending:qt,depthWrite:!1});this.photonRing=new ot(n,i),this.photonRing.rotation.x=Math.PI/2,this.group.add(this.photonRing);const a=new Xt(this.eventHorizonRadius*1.45,32,32),r=new ce({color:16755268,transparent:!0,opacity:.25,blending:qt,side:ge,depthWrite:!1});this.lensMesh=new ot(a,r),this.group.add(this.lensMesh);const o=new Xi(this.diskOuter*2,this.diskOuter*2);this.accretionUniforms={time:{value:0},innerColor:{value:new tt(this.data.diskColorInner||"#ffffff")},midColor:{value:new tt(this.data.diskColorMid||"#ff9100")},outerColor:{value:new tt(this.data.diskColorOuter||"#d50000")},innerRadius:{value:this.diskInner/this.diskOuter},outerRadius:{value:1}},this.accretionMat=new Ee({uniforms:this.accretionUniforms,vertexShader:No.vertexShader,fragmentShader:No.fragmentShader,side:pe,transparent:!0,blending:qt,depthWrite:!1}),this.accretionDisk=new ot(o,this.accretionMat),this.accretionDisk.rotation.x=Math.PI/2,this.group.add(this.accretionDisk),this.buildJets()}buildJets(){this.jetUniforms={time:{value:0},jetColor:{value:new tt(this.data.jetColor||"#00e5ff")}};const t=new Ee({uniforms:this.jetUniforms,vertexShader:Bo.vertexShader,fragmentShader:Bo.fragmentShader,side:pe,transparent:!0,blending:qt,depthWrite:!1}),e=new en(this.eventHorizonRadius*.4,2,this.jetHeight,16,1,!0);e.translate(0,this.jetHeight/2,0),this.jetN=new ot(e,t),this.group.add(this.jetN);const n=new en(this.eventHorizonRadius*.4,2,this.jetHeight,16,1,!0);n.translate(0,-this.jetHeight/2,0),n.rotateX(Math.PI),this.jetS=new ot(n,t),this.group.add(this.jetS)}update(t,e){this.accretionUniforms&&(this.accretionUniforms.time.value=e),this.jetUniforms&&(this.jetUniforms.time.value=e),this.photonRing&&(this.photonRing.rotation.z+=.01)}}class Mm{constructor(t){this.data=t,this.group=new wt,this.group.name=`pulsar_${t.id}`,this.group.position.set(...t.position),this.group.userData={type:"pulsar",data:t,name:t.name,clickable:!0},this.radius=t.radius||15,this.spinSpeed=t.spinSpeed||12,this.beamLength=t.beamLength||350,this.beamRadius=t.beamRadius||35,this.buildPulsar()}buildPulsar(){const t=new Xt(this.radius,32,32),e=new ce({color:16777215});this.coreMesh=new ot(t,e),this.group.add(this.coreMesh),this.magneticGroup=new wt,this.magneticGroup.rotation.z=.55,this.group.add(this.magneticGroup),this.beamUniforms={time:{value:0},beamColor:{value:new tt(this.data.color||"#00e5ff")},pulseFreq:{value:this.spinSpeed*2}};const n=new Ee({uniforms:this.beamUniforms,vertexShader:Fo.vertexShader,fragmentShader:Fo.fragmentShader,side:pe,transparent:!0,blending:qt,depthWrite:!1}),i=new pn(this.beamRadius,this.beamLength,24,1,!0);i.translate(0,this.beamLength/2,0),this.beamN=new ot(i,n),this.magneticGroup.add(this.beamN);const a=new pn(this.beamRadius,this.beamLength,24,1,!0);a.translate(0,-this.beamLength/2,0),a.rotateX(Math.PI),this.beamS=new ot(a,n),this.magneticGroup.add(this.beamS);const r=new Xa(this.radius*2.8,.8,8,32),o=new ce({color:new tt(this.data.color||"#00e5ff"),transparent:!0,opacity:.4,blending:qt}),c=new ot(r,o);c.rotation.x=Math.PI/2,this.magneticGroup.add(c)}update(t,e){this.group.rotation.y+=this.spinSpeed*t,this.beamUniforms&&(this.beamUniforms.time.value=e)}}class Em{constructor(t){this.data=t,this.group=new wt,this.group.name=`nebula_${t.id}`,this.group.position.set(...t.position),this.group.userData={type:"nebula",data:t,name:t.name,clickable:!0},this.buildNebula()}buildNebula(){const t=this.data.particleCount||3500,e=this.data.radius||250,n=new me,i=new Float32Array(t*3),a=new Float32Array(t*3),r=new Float32Array(t),o=(this.data.colors||["#ff007f","#7f00ff","#00e5ff"]).map(m=>new tt(m));for(let m=0;m<t;m++){const g=m*3,_=Math.random()*Math.PI*2,p=(Math.random()-.5)*e*.6,f=Math.pow(Math.random(),1.4)*e,M=Math.random()*Math.PI*2,S=Math.acos(Math.max(-1,Math.min(1,2*Math.random()-1)));i[g]=f*Math.sin(S)*Math.cos(M)+Math.cos(_)*p,i[g+1]=f*Math.cos(S)*.7+(Math.random()-.5)*40,i[g+2]=f*Math.sin(S)*Math.sin(M)+Math.sin(_)*p;const A=Math.floor(Math.random()*o.length),I=o[A];a[g]=I.r,a[g+1]=I.g,a[g+2]=I.b,r[m]=Math.random()*25+10}n.setAttribute("position",new se(i,3)),n.setAttribute("color",new se(a,3)),n.setAttribute("size",new se(r,1));const c=document.createElement("canvas");c.width=64,c.height=64;const l=c.getContext("2d"),u=l.createRadialGradient(32,32,0,32,32,32);u.addColorStop(0,"rgba(255,255,255,0.7)"),u.addColorStop(.4,"rgba(200,220,255,0.3)"),u.addColorStop(1,"rgba(0,0,0,0)"),l.fillStyle=u,l.fillRect(0,0,64,64);const d=new Yi(c),h=new Qn({size:32,map:d,vertexColors:!0,transparent:!0,opacity:.45,blending:qt,depthWrite:!1});this.points=new Ii(n,h),this.group.add(this.points)}update(t){this.points&&(this.points.rotation.y+=2e-4*t*60)}}class bm{constructor(t){this.data=t||{id:"wormhole-alpha",name:"Einstein-Rosen Bridge (Wormhole)",position:[15e3,3500,-12e3],radius:450,dataStatus:"THEORETICAL / HYPOTHETICAL (NOT OBSERVED)"},this.group=new wt,this.group.name=`wormhole_${this.data.id}`,this.group.position.set(...this.data.position),this.group.userData={type:"wormhole",data:this.data,name:this.data.name,clickable:!0},this.buildWormhole()}buildWormhole(){const t=this.data.radius||450,e=new Xt(t,48,48);this.uniforms={time:{value:0},throatColor:{value:new tt("#9c27b0")},rimColor:{value:new tt("#00e5ff")}},this.material=new Ee({uniforms:this.uniforms,vertexShader:ko.vertexShader,fragmentShader:ko.fragmentShader,side:pe,transparent:!0,blending:qt,depthWrite:!1}),this.mesh=new ot(e,this.material),this.group.add(this.mesh);const n=new mn(t*1.05,t*1.65,64),i=new ce({color:58879,side:pe,transparent:!0,opacity:.65,blending:qt,depthWrite:!1});this.lensingRing=new ot(n,i),this.lensingRing.rotation.x=Math.PI/3,this.group.add(this.lensingRing);const a=new mn(t*1.2,t*1.9,64),r=new ce({color:14696699,side:pe,transparent:!0,opacity:.45,blending:qt,depthWrite:!1});this.lensingRing2=new ot(a,r),this.lensingRing2.rotation.y=Math.PI/4,this.group.add(this.lensingRing2)}update(t,e){this.uniforms&&(this.uniforms.time.value=e),this.lensingRing&&(this.lensingRing.rotation.z+=.008),this.lensingRing2&&(this.lensingRing2.rotation.x+=.005)}}class Am{constructor(){this.group=new wt,this.group.name="cosmic_web_system",this.buildCMBSphere(),this.buildFilaments()}buildCMBSphere(){const t=new Xt(14e4,48,48);this.cmbUniforms={time:{value:0}};const e=new Ee({uniforms:this.cmbUniforms,vertexShader:zo.vertexShader,fragmentShader:zo.fragmentShader,side:ge,transparent:!0,blending:qt,depthWrite:!1});this.cmbMesh=new ot(t,e),this.cmbMesh.userData={name:"Cosmic Microwave Background (CMB)",type:"Relic Radiation",clickable:!0,data:{id:"cmb",name:"Cosmic Microwave Background (CMB)",objectType:"Relic Radiation of the Big Bang",distanceFromEarth:"13.8 Billion Light-Years",surfaceTemp:"2.7255 K (-270.42 °C)",dataStatus:"CONFIRMED / REAL CATALOGUED"}},this.group.add(this.cmbMesh)}buildFilaments(){const e=new Float32Array(36e3),n=new Float32Array(12e3*3),i=new tt("#4fc3f7"),a=new tt("#ab47bc"),r=new tt("#ffb74d");for(let l=0;l<12e3;l++){const u=Math.random(),d=Math.random()*Math.PI*2,h=Math.acos(Math.max(-1,Math.min(1,2*Math.random()-1))),m=25e3+Math.pow(u,.7)*9e4,g=Math.sin(d*6)*Math.cos(h*4),_=m*(.85+.25*g),p=_*Math.sin(h)*Math.cos(d),f=_*Math.sin(h)*Math.sin(d)*.75,M=_*Math.cos(h);e[l*3]=p,e[l*3+1]=f,e[l*3+2]=M;const S=u<.4?i:u<.8?a:r;n[l*3]=S.r,n[l*3+1]=S.g,n[l*3+2]=S.b}const o=new me;o.setAttribute("position",new se(e,3)),o.setAttribute("color",new se(n,3));const c=new Qn({size:140,vertexColors:!0,transparent:!0,opacity:.7,blending:qt,depthWrite:!1});this.points=new Ii(o,c),this.points.userData={name:"Cosmic Web Filaments",type:"Large-Scale Structure",clickable:!0,data:{id:"cosmic-web",name:"The Cosmic Web & Voids",objectType:"Large-Scale Structure of Spacetime",distanceFromEarth:"Spans billions of light-years",dataStatus:"OBSERVED / 3D SURVEY CONFIRMED"}},this.group.add(this.points)}update(t,e){this.cmbUniforms&&(this.cmbUniforms.time.value=e),this.points&&(this.points.rotation.y+=2e-4)}}const fe={MULTIVERSE:"MULTIVERSE",UNIVERSE:"UNIVERSE",GALAXIES:"GALAXIES",GALAXY:"GALAXY",MILKY_WAY:"MILKY_WAY",SOLAR_SYSTEM:"SOLAR_SYSTEM",PLANETS:"PLANETS",PLANET_ORBIT:"PLANET_ORBIT",HABITABILITY:"HABITABILITY",BLACK_HOLES:"BLACK_HOLES",SPACECRAFT:"SPACECRAFT",LEARNING:"LEARNING",CLOSE_APPROACH:"CLOSE_APPROACH"},Tm={REAL_CATALOGUED:"REAL / CATALOGUED"},wm={LIFE_CONFIRMED:"LIFE CONFIRMED"},Rm={COSMIC_WEB:["#020617","#164E63","#7C3AED"]};class Cm{constructor(){this.group=new wt,this.group.name="multiverse_realm",this.group.position.set(0,12e4,18e4),this.universes=[{id:"observable-universe",name:"Our Observable Universe",type:"Standard Lambda-CDM Universe",position:[0,0,0],radius:4500,palette:Rm.COSMIC_WEB,dataStatus:"CONFIRMED / REAL CATALOGUED",description:"Our home cosmos containing ~2 trillion galaxies and 93 billion light-years diameter.",laws:"Standard Model physics, c = 299,792 km/s, H₀ ≈ 67.4 km/s/Mpc"},{id:"universe-bubble-alpha",name:"Bubble Universe Alpha (High Dark Energy)",type:"Theoretical Bubble Universe",position:[-16e3,4500,-8e3],radius:3800,palette:["#4C1D95","#EC4899","#38BDF8"],dataStatus:"THEORETICAL / HYPOTHETICAL (NOT OBSERVED)",description:"A theoretical bubble where dark energy density is 10× higher, accelerating expansion rapidly.",laws:"Accelerated cosmic inflation, matter sparsely distributed"},{id:"universe-bubble-beta",name:"Domain Beta (Compact Gravity Realm)",type:"Hypothetical High-G Universe",position:[18e3,-3500,-1e4],radius:3200,palette:["#065F46","#10B981","#F59E0B"],dataStatus:"THEORETICAL / HYPOTHETICAL (NOT OBSERVED)",description:"A theoretical universe model with a stronger gravitational constant G, producing hyper-dense stars.",laws:"G is 4× stronger, shorter stellar lifespans"},{id:"universe-bubble-gamma",name:"Anti-De Sitter Bubble Gamma",type:"Hypothetical Hyperbolic Universe",position:[9e3,12e3,-18e3],radius:4e3,palette:["#1E1B4B","#6366F1","#A855F7"],dataStatus:"THEORETICAL / HYPOTHETICAL (NOT OBSERVED)",description:"A spacetime bubble with negative cosmological constant producing negative curvature.",laws:"AdS/CFT duality theoretical testbed"},{id:"universe-bubble-delta",name:"Eternal Inflation Realm Delta",type:"Primordial Inflationary Foam",position:[-12e3,-1e4,12e3],radius:4200,palette:["#7C2D12","#EA580C","#FDE047"],dataStatus:"THEORETICAL / HYPOTHETICAL (NOT OBSERVED)",description:"A pocket of perpetually inflating false vacuum continuously budding daughter universes.",laws:"Eternal chaotic inflation (Guth-Linde model)"}],this.bubbleMeshes=[],this.buildMultiverse()}buildMultiverse(){this.universes.forEach(t=>{const e=new wt;e.name=`multiverse_${t.id}`,e.position.set(...t.position),e.userData={type:"multiverse_universe",data:t,name:t.name,clickable:!0};const n=new tt(t.palette[0]),i=new tt(t.palette[1]),a=new tt(t.palette[2]||"#ffffff"),r=new Va(t.radius,4),o=new Zt({color:i,emissive:n,emissiveIntensity:.35,transparent:!0,opacity:.32,roughness:.2,metalness:.1,wireframe:!1,side:pe}),c=new ot(r,o);e.add(c);const l=new ce({color:a,wireframe:!0,transparent:!0,opacity:.18}),u=new ot(r,l);e.add(u);const d=1800,h=new Float32Array(d*3),m=new Float32Array(d*3);for(let f=0;f<d;f++){const M=Math.pow(Math.random(),.5)*(t.radius*.85),S=Math.random()*Math.PI*2,A=Math.acos(Math.max(-1,Math.min(1,2*Math.random()-1)));h[f*3]=M*Math.sin(A)*Math.cos(S),h[f*3+1]=M*Math.sin(A)*Math.sin(S),h[f*3+2]=M*Math.cos(A);const I=n.clone().lerp(a,Math.random());m[f*3]=I.r,m[f*3+1]=I.g,m[f*3+2]=I.b}const g=new me;g.setAttribute("position",new se(h,3)),g.setAttribute("color",new se(m,3));const _=new Qn({size:32,vertexColors:!0,transparent:!0,opacity:.85,blending:qt}),p=new Ii(g,_);e.add(p),this.group.add(e),this.bubbleMeshes.push({group:e,membrane:c,wire:u,clusters:p,data:t})})}update(t){this.bubbleMeshes.forEach((e,n)=>{const i=.04*(n%2===0?1:-1);e.group.rotation.y+=i*t,e.membrane.rotation.x+=i*.5*t})}}class Lm{constructor(t){this.scene=t,this.group=new wt,this.group.name="universe_root",this.scene.add(this.group),this.galaxies=[],this.blackHoles=[],this.pulsars=[],this.nebulae=[],this.probes=[],this.wormholes=[],this.cosmicWeb=null,this.multiverse=null,this.buildUniverse()}buildUniverse(){this.multiverse=new Cm,this.group.add(this.multiverse.group),this.cosmicWeb=new Am,this.group.add(this.cosmicWeb.group);const t=new bm({id:"wormhole-alpha",name:"Einstein-Rosen Bridge (Wormhole)",position:[15e3,3500,-12e3],radius:450,dataStatus:"THEORETICAL / HYPOTHETICAL (NOT OBSERVED)"});this.group.add(t.group),this.wormholes.push({id:"wormhole-alpha",data:t.data,instance:t,group:t.group}),xc.forEach(e=>{const n=new Sm(e);this.group.add(n.group),this.galaxies.push({id:e.id,data:e,instance:n,group:n.group})}),Mc.forEach(e=>{const n=new xm(e);this.group.add(n.group),this.blackHoles.push({id:e.id,data:e,instance:n,group:n.group})}),Ec.forEach(e=>{const n=new Mm(e);this.group.add(n.group),this.pulsars.push({id:e.id,data:e,instance:n,group:n.group})}),bc.forEach(e=>{const n=new Em(e);this.group.add(n.group),this.nebulae.push({id:e.id,data:e,instance:n,group:n.group})}),om.forEach(e=>{const n=new wt;n.name=`probe_${e.id}`,n.position.set(...e.position),n.userData={type:"probe",data:e,name:e.name,clickable:!0};const i=new en(.8,1.2,2,8),a=new Zt({color:13421772,metalness:.8,roughness:.2}),r=new ot(i,a);n.add(r);const o=new pn(2.2,.6,16,1,!0);o.rotateX(Math.PI);const c=new Zt({color:16777215,metalness:.9,roughness:.1}),l=new ot(o,c);l.position.y=1.4,n.add(l);const u=new tn(4,.1,1.5),d=new Zt({color:16766720,metalness:.9,roughness:.3}),h=new ot(u,d);n.add(h),this.group.add(n),this.probes.push({id:e.id,data:e,group:n})})}setScaleMode(t){this.galaxies.forEach(e=>{e.instance.setScaleMode&&e.instance.setScaleMode(t)})}update(t,e){this.multiverse&&this.multiverse.update(t),this.cosmicWeb&&this.cosmicWeb.update(t,e),this.wormholes.forEach(n=>{n.instance.update&&n.instance.update(t,e)}),this.galaxies.forEach(n=>{n.instance.update&&n.instance.update(t)}),this.blackHoles.forEach(n=>{n.instance.update&&n.instance.update(t,e)}),this.pulsars.forEach(n=>{n.instance.update&&n.instance.update(t,e)}),this.nebulae.forEach(n=>{n.instance.update&&n.instance.update(t)}),this.probes.forEach(n=>{n.group.rotation.y+=.005*t*60})}}class Pm{constructor(t){this.scene=t,this.group=new wt,this.group.name="star_and_exoplanet_systems_root",this.scene.add(this.group),this.stars=[],this.exoplanetSystems=[],this.buildStars(),this.buildExoplanetSystems()}buildStars(){Ac.forEach(t=>{const e=new wt;e.name=`star_${t.id}`,e.position.set(...t.position),e.userData={type:"star",data:t,name:t.name,clickable:!0};const n=t.visualRadius||15,i=new Xt(n,48,48),a={time:{value:0},sunColor:{value:new tt(t.color||"#ff8c00")},coronaColor:{value:new tt(t.coronaColor||"#ffdd55")}},r=new Ee({uniforms:a,vertexShader:xi.vertexShader,fragmentShader:xi.fragmentShader}),o=new ot(i,r);e.add(o);const c=new Xt(n*1.12,24,24),l=new ce({color:new tt(t.color||"#ff8c00"),transparent:!0,opacity:.25,side:ge,blending:qt,depthWrite:!1}),u=new ot(c,l);e.add(u);const d=new Oa(new tt(t.color||"#ffffff"),1.8,1200,1.2);e.add(d),this.group.add(e),this.stars.push({id:t.id,data:t,group:e,uniforms:a})})}buildExoplanetSystems(){Tc.forEach(t=>{const e=new wt;e.name=`exosystem_${t.id}`,e.position.set(...t.position),e.userData={type:"exoplanet_system",data:t,name:t.name,clickable:!0};const n=t.star,i=n.visualRadius||12,a=new Xt(i,36,36),r={time:{value:0},sunColor:{value:new tt(n.color||"#ff5522")},coronaColor:{value:new tt("#ffaa66")}},o=new Ee({uniforms:r,vertexShader:xi.vertexShader,fragmentShader:xi.fragmentShader}),c=new ot(a,o);c.userData={type:"star",data:n,name:n.name,clickable:!0},e.add(c);const l=new Oa(new tt(n.color||"#ffeedd"),3.2,0,0);e.add(l);const u=[];t.planets&&t.planets.forEach(d=>{const h=Pc.createPlanet(d);e.add(h.group);const m=Me.createOrbitPath(d.semiMajorAxis,d.eccentricity||.01,d.inclination||0,d.color||"#4682b4",64);e.add(m),u.push({data:d,instance:h,group:h.group})}),this.group.add(e),this.exoplanetSystems.push({id:t.id,data:t,group:e,uniforms:r,planets:u})})}update(t,e,n){this.stars.forEach(i=>{i.uniforms&&(i.uniforms.time.value=n),i.group.children[0].rotation.y+=.003*t*60}),this.exoplanetSystems.forEach(i=>{i.uniforms&&(i.uniforms.time.value=n),i.planets.forEach(a=>{const r=Me.calculatePosition(a.data.semiMajorAxis,a.data.eccentricity||.01,a.data.inclination||0,a.data.orbitalPeriodDays,e);a.group.position.copy(r),a.instance.update&&a.instance.update(t,e)})})}}class Im{constructor(t){this.scene=t,this.group=new wt,this.group.name="real_asteroids_catalog_root",this.scene.add(this.group),this.asteroids=[],this.comets=[],this.buildAsteroids(),this.buildPlutoSystem(),this.buildComets()}buildAsteroids(){wc.forEach(t=>{const e=new wt;e.name=`asteroid_${t.id}`,e.userData={type:"asteroid",data:t,name:t.name,clickable:!0};let n;const i=t.visualRadius||1.2;if(t.isIrregular){n=new Wa(i,2);const l=n.attributes.position;for(let u=0;u<l.count;u++){const d=l.getX(u),h=l.getY(u),m=l.getZ(u),g=1+(Math.sin(d*5)+Math.cos(h*5)+Math.sin(m*5))*.12;l.setXYZ(u,d*g,h*g,m*g)}n.computeVertexNormals()}else t.isEllipsoidal?(n=new Xt(i,32,32),n.scale(1.8,1,.9)):n=new Xt(i,32,32);const a=xe.getRockyPlanetTexture(t.color||"#888888",.8),r=new Zt({map:a,roughness:.88,metalness:0}),o=new ot(n,r);if(o.castShadow=!0,o.receiveShadow=!0,e.add(o),t.hasBrightSpots){const l=new Xt(i*.18,8,8),u=new ce({color:16777215}),d=new ot(l,u);d.position.set(0,i*.85,i*.45),e.add(d)}const c=Me.createOrbitPath(t.semiMajorAxis,t.eccentricity,t.inclination,"#6b7280",96);this.group.add(c),this.group.add(e),this.asteroids.push({id:t.id,data:t,group:e,mesh:o})})}buildPlutoSystem(){this.plutoGroup=new wt,this.plutoGroup.name="pluto_system_complex",this.plutoGroup.userData={type:"dwarf_planet",data:Yn,name:Yn.name,clickable:!0};const t=new Xt(2.2,36,36),e=xe.getRockyPlanetTexture("#cbb5ad",.5),n=new Zt({map:e,roughness:.8,metalness:0});this.plutoMesh=new ot(t,n),this.plutoGroup.add(this.plutoMesh),this.plutoMoons=[],Yn.moons.forEach(i=>{const a=new wt;a.name=`moon_${i.id}`,a.userData={type:"moon",data:i,name:i.name,clickable:!0};const r=new Xt(i.visualRadius,16,16),o=xe.getRockyPlanetTexture(i.color,.7),c=new Zt({map:o,roughness:.85,metalness:0}),l=new ot(r,c);a.add(l),this.plutoGroup.add(a);const u=Me.createOrbitPath(i.orbitalRadius,.005,.5,"#9ca3af",32);this.plutoGroup.add(u),this.plutoMoons.push({data:i,group:a})}),this.group.add(this.plutoGroup)}buildComets(){Rc.forEach(t=>{const e=new Ic(t.id,t.semiMajorAxis,t.eccentricity,t.periodDays,t.color||"#00e5ff");e.group.userData={type:"comet",data:t,name:t.name,clickable:!0};const n=Me.createOrbitPath(t.semiMajorAxis,t.eccentricity,t.inclination,t.color||"#00e5ff",128);this.group.add(n),this.group.add(e.group),this.comets.push({id:t.id,data:t,instance:e})})}update(t,e){if(this.asteroids.forEach(n=>{const i=Me.calculatePosition(n.data.semiMajorAxis,n.data.eccentricity,n.data.inclination,n.data.orbitalPeriodDays,e);n.group.position.copy(i),n.mesh.rotation.y+=.02*t*60}),this.plutoGroup){const n=Me.calculatePosition(590,.2488,17.16,90560,e);this.plutoGroup.position.copy(n),this.plutoMesh&&(this.plutoMesh.rotation.y+=.01*t*60),this.plutoMoons.forEach(i=>{const a=Me.calculatePosition(i.data.orbitalRadius,.005,.5,i.data.orbitalPeriodDays,e);i.group.position.copy(a)})}this.comets.forEach(n=>{const i=Me.calculatePosition(n.data.semiMajorAxis,n.data.eccentricity,n.data.inclination,n.data.periodDays,e);n.instance.update(i)})}}class Dm{constructor(t){this.scene=t,this.group=new wt,this.group.name="star_clusters_root",this.scene.add(this.group),this.clusters=[],this.buildClusters()}buildClusters(){Cc.forEach(t=>{const e=new wt;e.name=`cluster_${t.id}`,e.position.set(...t.position),e.userData={type:"star_cluster",data:t,name:t.name,clickable:!0};const n=t.particleCount||1e3,i=t.radius||300,a=new me,r=new Float32Array(n*3),o=new Float32Array(n*3),c=new tt(t.color||"#a8d5ff"),l=new tt(t.coreColor||"#ffffff");for(let S=0;S<n;S++){const A=S*3,I=Math.pow(Math.random(),2.2)*i,C=Math.random()*Math.PI*2,T=Math.acos(Math.max(-1,Math.min(1,2*Math.random()-1)));r[A]=I*Math.sin(T)*Math.cos(C),r[A+1]=I*Math.cos(T),r[A+2]=I*Math.sin(T)*Math.sin(C);const D=I/i,b=l.clone().lerp(c,D);o[A]=b.r,o[A+1]=b.g,o[A+2]=b.b}a.setAttribute("position",new se(r,3)),a.setAttribute("color",new se(o,3));const u=document.createElement("canvas");u.width=32,u.height=32;const d=u.getContext("2d"),h=d.createRadialGradient(16,16,0,16,16,16);h.addColorStop(0,"rgba(255,255,255,1)"),h.addColorStop(.3,"rgba(200,230,255,0.8)"),h.addColorStop(.8,"rgba(120,180,255,0.15)"),h.addColorStop(1,"rgba(0,0,0,0)"),d.fillStyle=h,d.fillRect(0,0,32,32);const m=new Yi(u),g=new Qn({size:5.5,map:m,vertexColors:!0,transparent:!0,opacity:.85,blending:qt,depthWrite:!1}),_=new Ii(a,g);e.add(_);const p=new Xt(i*.15,16,16),f=new ce({color:c,transparent:!0,opacity:.35,blending:qt,depthWrite:!1}),M=new ot(p,f);e.add(M),this.group.add(e),this.clusters.push({id:t.id,data:t,group:e,points:_})})}update(t){this.clusters.forEach(e=>{e.points.rotation.y+=3e-4*t*60})}}class Um{constructor(t){this.scene=t,this.group=new wt,this.group.name="spacecraft_fleet_root",this.scene.add(this.group),this.spacecraft=[],this.buildFleet()}buildFleet(){Lc.forEach(t=>{const e=new wt;e.name=`spacecraft_${t.id}`,e.position.set(...t.position),e.userData={type:"spacecraft",data:t,name:t.name,clickable:!0};const n=t.visualScale||1;if(t.id==="jwst"){const i=new tn(6*n,.1,3.5*n),a=new Zt({color:9479342,metalness:.8,roughness:.2}),r=new ot(i,a);e.add(r);const o=new en(1.8*n,1.8*n,.2,6);o.rotateX(Math.PI/3);const c=new Zt({color:16766720,metalness:.95,roughness:.1}),l=new ot(o,c);l.position.set(0,1.2*n,0),e.add(l)}else if(t.id==="hubble"){const i=new en(.8*n,.8*n,3.5*n,16);i.rotateZ(Math.PI/2);const a=new Zt({color:14279404,metalness:.85,roughness:.2}),r=new ot(i,a);e.add(r);const o=new tn(.1,1.2*n,4.2*n),c=new Zt({color:1920728,metalness:.6,roughness:.3}),l=new ot(o,c);e.add(l)}else{const i=new tn(1.4*n,1*n,1.4*n),a=new Zt({color:4674921,metalness:.7,roughness:.3}),r=new ot(i,a);e.add(r);const o=new pn(2.4*n,.6*n,24,1,!0);o.rotateX(Math.PI);const c=new Zt({color:16777215,metalness:.8,roughness:.2}),l=new ot(o,c);l.position.y=1.2*n,e.add(l);const u=new en(.08,.08,3.8*n,8);u.rotateZ(Math.PI/3);const d=new Zt({color:3359061}),h=new ot(u,d);h.position.set(1.5*n,-.4*n,0),e.add(h)}this.group.add(e),this.spacecraft.push({id:t.id,data:t,group:e})})}update(t){this.spacecraft.forEach(e=>{e.group.rotation.y+=.005*t*60})}}class Om{constructor(){this.ctx=null,this.isMuted=!1,this.isInitialized=!1,this.ambientGain=null,this.engineGain=null,this.engineOsc=null}init(){if(!this.isInitialized)try{const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.setupMasterChain(),this.startAmbience(),this.setupEngineSynth(),this.isInitialized=!0}catch(t){console.warn("AudioContext initialization deferred until user interaction.",t)}}ensureContext(){this.isInitialized||this.init(),this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setupMasterChain(){this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(.6,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination)}startAmbience(){const t=this.ctx.createOscillator(),e=this.ctx.createOscillator(),n=this.ctx.createBiquadFilter();this.ambientGain=this.ctx.createGain(),t.type="sawtooth",t.frequency.setValueAtTime(55,this.ctx.currentTime),e.type="sine",e.frequency.setValueAtTime(110.5,this.ctx.currentTime),n.type="lowpass",n.frequency.setValueAtTime(180,this.ctx.currentTime),n.Q.setValueAtTime(3,this.ctx.currentTime),this.ambientGain.gain.setValueAtTime(.12,this.ctx.currentTime),t.connect(n),e.connect(n),n.connect(this.ambientGain),this.ambientGain.connect(this.masterGain),t.start(),e.start()}setupEngineSynth(){this.engineOsc=this.ctx.createOscillator();const t=this.ctx.createBiquadFilter();this.engineGain=this.ctx.createGain(),this.engineOsc.type="triangle",this.engineOsc.frequency.setValueAtTime(70,this.ctx.currentTime),t.type="lowpass",t.frequency.setValueAtTime(250,this.ctx.currentTime),this.engineGain.gain.setValueAtTime(0,this.ctx.currentTime),this.engineOsc.connect(t),t.connect(this.engineGain),this.engineGain.connect(this.masterGain),this.engineOsc.start()}setEngineThrust(t){if(!this.isInitialized||!this.engineGain||this.isMuted)return;const e=Math.max(0,Math.min(1,t)),n=e*.25,i=60+e*120;this.engineGain.gain.setTargetAtTime(n,this.ctx.currentTime,.05),this.engineOsc.frequency.setTargetAtTime(i,this.ctx.currentTime,.05)}playWarpSound(){if(this.ensureContext(),!this.ctx||this.isMuted)return;const t=this.ctx.createOscillator(),e=this.ctx.createGain(),n=this.ctx.currentTime;t.type="sine",t.frequency.setValueAtTime(120,n),t.frequency.exponentialRampToValueAtTime(1200,n+.6),t.frequency.exponentialRampToValueAtTime(80,n+1.8),e.gain.setValueAtTime(.01,n),e.gain.linearRampToValueAtTime(.4,n+.4),e.gain.exponentialRampToValueAtTime(.001,n+2),t.connect(e),e.connect(this.masterGain),t.start(n),t.stop(n+2)}playDiscoveryChime(){if(this.ensureContext(),!this.ctx||this.isMuted)return;const t=[523.25,659.25,783.99,1046.5],e=this.ctx.currentTime;t.forEach((n,i)=>{const a=this.ctx.createOscillator(),r=this.ctx.createGain(),o=e+i*.12;a.type="sine",a.frequency.setValueAtTime(n,o),r.gain.setValueAtTime(0,o),r.gain.linearRampToValueAtTime(.18,o+.03),r.gain.exponentialRampToValueAtTime(.001,o+1.2),a.connect(r),r.connect(this.masterGain),a.start(o),a.stop(o+1.2)})}playClick(){if(this.ensureContext(),!this.ctx||this.isMuted)return;const t=this.ctx.createOscillator(),e=this.ctx.createGain(),n=this.ctx.currentTime;t.type="sine",t.frequency.setValueAtTime(880,n),t.frequency.exponentialRampToValueAtTime(440,n+.05),e.gain.setValueAtTime(.15,n),e.gain.exponentialRampToValueAtTime(.001,n+.05),t.connect(e),e.connect(this.masterGain),t.start(n),t.stop(n+.05)}toggleMute(){return this.isMuted=!this.isMuted,this.masterGain&&this.ctx&&this.masterGain.gain.setValueAtTime(this.isMuted?0:.6,this.ctx.currentTime),this.isMuted}}const ee=new Om;class Nm{constructor(t){this.camera=t,this.group=new wt,this.group.name="player_spacecraft",this.position=new w(0,30,200),this.velocity=new w(0,0,0),this.quaternion=new Pn,this.speed=0,this.maxSpeed=800,this.thrustPower=400,this.damping=.985,this.keys={forward:!1,backward:!1,left:!1,right:!1,up:!1,down:!1,rollLeft:!1,rollRight:!1,boost:!1},this.flightModeActive=!1,this.cameraMode="chase",this.buildShipMesh(),this.setupKeyListeners()}buildShipMesh(){this.shipMesh=new wt;const t=new pn(2.2,9,8);t.rotateX(Math.PI/2);const e=new Zt({color:13687008,metalness:.85,roughness:.25}),n=new ot(t,e);this.shipMesh.add(n);const i=new Xt(1.2,16,16);i.scale(.8,.6,1.8),i.translate(0,.7,.8);const a=new Zt({color:58879,metalness:.9,roughness:.1,transparent:!0,opacity:.85}),r=new ot(i,a);this.shipMesh.add(r);const o=new tn(9,.2,4);o.translate(0,-.2,-1.2);const c=new Zt({color:2899536,metalness:.7,roughness:.3}),l=new ot(o,c);this.shipMesh.add(l);const u=new en(.6,.7,5.5,12);u.rotateX(Math.PI/2);const d=new Zt({color:1713455,metalness:.8,roughness:.3}),h=new ot(u,d);h.position.set(-4.2,.2,-1.2),this.shipMesh.add(h);const m=new ot(u,d);m.position.set(4.2,.2,-1.2),this.shipMesh.add(m);const g=new pn(.5,3.5,12);g.rotateX(-Math.PI/2),g.translate(0,0,-4.5),this.plumeMat=new ce({color:58879,transparent:!0,opacity:.85,blending:qt}),this.plumeL=new ot(g,this.plumeMat),this.plumeL.position.set(-4.2,.2,0),this.shipMesh.add(this.plumeL),this.plumeR=new ot(g,this.plumeMat),this.plumeR.position.set(4.2,.2,0),this.shipMesh.add(this.plumeR),this.group.add(this.shipMesh),this.group.position.copy(this.position)}setupKeyListeners(){window.addEventListener("keydown",t=>{if(this.flightModeActive)switch(t.code){case"KeyW":this.keys.forward=!0;break;case"KeyS":this.keys.backward=!0;break;case"KeyA":this.keys.left=!0;break;case"KeyD":this.keys.right=!0;break;case"Space":this.keys.up=!0,t.preventDefault();break;case"ShiftLeft":case"ShiftRight":this.keys.boost=!0;break;case"KeyC":this.keys.down=!0;break;case"KeyQ":this.keys.rollLeft=!0;break;case"KeyE":this.keys.rollRight=!0;break}}),window.addEventListener("keyup",t=>{switch(t.code){case"KeyW":this.keys.forward=!1;break;case"KeyS":this.keys.backward=!1;break;case"KeyA":this.keys.left=!1;break;case"KeyD":this.keys.right=!1;break;case"Space":this.keys.up=!1;break;case"ShiftLeft":case"ShiftRight":this.keys.boost=!1;break;case"KeyC":this.keys.down=!1;break;case"KeyQ":this.keys.rollLeft=!1;break;case"KeyE":this.keys.rollRight=!1;break}})}setFlightMode(t){this.flightModeActive=t,this.group.visible=!0,t||ee.setEngineThrust(0)}toggleCameraMode(){return this.cameraMode==="chase"?this.cameraMode="cockpit":this.cameraMode==="cockpit"&&(this.cameraMode="chase"),this.cameraMode}update(t){if(!this.flightModeActive)return;const e=new w,n=new w(0,0,-1).applyQuaternion(this.group.quaternion),i=new w(1,0,0).applyQuaternion(this.group.quaternion),a=new w(0,1,0).applyQuaternion(this.group.quaternion);let r=this.keys.boost?2.5:1,o=!1;this.keys.forward&&(e.addScaledVector(n,this.thrustPower*r),o=!0),this.keys.backward&&e.addScaledVector(n,-this.thrustPower*.5),this.keys.left&&e.addScaledVector(i,-this.thrustPower*.6),this.keys.right&&e.addScaledVector(i,this.thrustPower*.6),this.keys.up&&e.addScaledVector(a,this.thrustPower*.6),this.keys.down&&e.addScaledVector(a,-this.thrustPower*.6),this.keys.rollLeft&&this.group.rotateZ(1.8*t),this.keys.rollRight&&this.group.rotateZ(-1.8*t),this.velocity.addScaledVector(e,t),this.velocity.multiplyScalar(this.damping);const c=this.maxSpeed*(this.keys.boost?2.5:1);this.velocity.length()>c&&this.velocity.setLength(c),this.group.position.addScaledVector(this.velocity,t),this.speed=this.velocity.length();const l=o?this.keys.boost?1:.6:this.speed>5?.2:0;if(ee.setEngineThrust(l),this.plumeMat){const u=.5+l*1.5;this.plumeL.scale.set(1,1,u),this.plumeR.scale.set(1,1,u),this.plumeMat.opacity=.3+l*.7}if(this.cameraMode==="chase"){const u=new w(0,5,22).applyQuaternion(this.group.quaternion),d=this.group.position.clone().add(u);this.camera.position.lerp(d,.12),this.camera.lookAt(this.group.position.clone().add(n.clone().multiplyScalar(40)))}else if(this.cameraMode==="cockpit"){const u=new w(0,.8,1.2).applyQuaternion(this.group.quaternion);this.camera.position.copy(this.group.position.clone().add(u)),this.camera.quaternion.copy(this.group.quaternion)}}getTelemetry(){return{speedKms:(this.speed*120).toFixed(0),warpFactor:(this.speed/100).toFixed(2),position:this.group.position,heading:(this.group.rotation.y*(180/Math.PI)%360+360)%360}}}class Bm{constructor(t,e=1200){this.camera=t,this.group=new wt,this.group.name="warp_effect_layer",this.active=!1,this.intensity=0;const n=new Float32Array(e*6);this.streakData=[];for(let a=0;a<e;a++){const r=(Math.random()-.5)*800,o=(Math.random()-.5)*800,c=-Math.random()*1200,l=40+Math.random()*90,u=15+Math.random()*25;this.streakData.push({x:r,y:o,z:c,length:l,speed:u})}const i=new me;i.setAttribute("position",new se(n,3)),this.material=new Ga({color:58879,transparent:!0,opacity:0,blending:qt}),this.lines=new em(i,this.material),this.lines.visible=!1,this.group.add(this.lines)}setWarp(t){this.active=t,t||(this.intensity=0,this.lines.visible=!1)}update(t){if(this.active?this.intensity=Math.min(1,this.intensity+t*3):this.intensity=Math.max(0,this.intensity-t*4),this.material.opacity=this.intensity*.85,this.intensity<=.001){this.lines.visible=!1;return}this.lines.visible=!0,this.group.position.copy(this.camera.position),this.group.quaternion.copy(this.camera.quaternion);const e=this.lines.geometry.attributes.position.array;for(let n=0;n<this.streakData.length;n++){const i=this.streakData[n];i.z+=i.speed*t*60*(1+this.intensity*2),i.z>50&&(i.z=-1200,i.x=(Math.random()-.5)*800,i.y=(Math.random()-.5)*800);const a=n*6;e[a]=i.x,e[a+1]=i.y,e[a+2]=i.z,e[a+3]=i.x,e[a+4]=i.y,e[a+5]=i.z-i.length*(1+this.intensity*1.5)}this.lines.geometry.attributes.position.needsUpdate=!0}}const hn={FREE_EXPLORE:"FREE_EXPLORE",ORBIT:"ORBIT",FOLLOW:"FOLLOW",PLANET:"PLANET",HOME:"HOME"};class Fm{constructor(t,e){this.camera=t,this.controls=e,this.currentScale=Ft.SOLAR_SYSTEM,this.cameraMode=hn.ORBIT,this.focusTarget=null,this.trackingObject=null,this.scaleChangeCallbacks=[],this.modeChangeCallbacks=[]}onScaleChange(t){this.scaleChangeCallbacks.push(t)}onModeChange(t){this.modeChangeCallbacks.push(t)}setCameraMode(t,e=null){switch(this.cameraMode=t,e&&(this.trackingObject=e),t){case hn.FREE_EXPLORE:this.trackingObject=null,this.controls.enableRotate=!0,this.controls.enablePan=!0,this.controls.enableZoom=!0;break;case hn.ORBIT:this.controls.enableRotate=!0,this.controls.enablePan=!1;break;case hn.FOLLOW:e&&(this.trackingObject=e),this.controls.enableRotate=!0,this.controls.enablePan=!1;break;case hn.PLANET:this.controls.minDistance=2,this.controls.maxDistance=800;break;case hn.HOME:this.trackingObject=null,this.setScale(Ft.SOLAR_SYSTEM);break}this.modeChangeCallbacks.forEach(n=>n(t,e))}setScale(t,e=null){switch(this.currentScale=t,t){case Ft.MULTIVERSE:case Ft.UNIVERSE:this.controls.minDistance=2e3,this.controls.maxDistance=3e5,this.trackingObject=null;break;case Ft.GALAXY:case Ft.GALAXIES:case Ft.MILKY_WAY:this.controls.minDistance=200,this.controls.maxDistance=5e4,this.trackingObject=null;break;case Ft.SOLAR_SYSTEM:this.controls.minDistance=15,this.controls.maxDistance=8e3,this.trackingObject=null;break;case Ft.PLANET_ORBIT:case Ft.CLOSE_APPROACH:case Ft.PLANETS:case Ft.HABITABILITY:case Ft.BLACK_HOLES:this.controls.minDistance=2,this.controls.maxDistance=1500,e&&(this.trackingObject=e);break}this.scaleChangeCallbacks.forEach(n=>n(t,e))}setFocusTarget(t){this.trackingObject=t}update(){if(this.trackingObject&&(this.cameraMode===hn.FOLLOW||this.cameraMode===hn.ORBIT||this.cameraMode===hn.PLANET)){const t=new THREE.Vector3;this.trackingObject.getWorldPosition(t),this.controls.target.lerp(t,.15)}}}class km{constructor(t,e,n){this.camera=t,this.controls=e,this.warpEffect=n,this.isTravelling=!1,this.travelProgress=0,this.travelDuration=2.5,this.startCamPos=new w,this.endCamPos=new w,this.startLookAt=new w,this.endLookAt=new w,this.midPoint=new w,this.targetObject=null,this.onArrivalCallback=null}cancel(){this.isTravelling&&(this.isTravelling=!1,this.controls.enabled=!0,this.warpEffect&&this.warpEffect.setWarp(!1))}flyTo(t,e,n=null,i=2.2,a=null){this.isTravelling=!0,this.travelProgress=0,this.travelDuration=i,this.targetObject=n,this.onArrivalCallback=a,this.startCamPos.copy(this.camera.position),this.endCamPos.copy(t),this.startLookAt.copy(this.controls.target),this.endLookAt.copy(e),this.midPoint.addVectors(this.startCamPos,this.endCamPos).multiplyScalar(.5);const r=this.startCamPos.distanceTo(this.endCamPos);this.midPoint.y+=r*.25,r>150&&(this.warpEffect&&this.warpEffect.setWarp(!0),ee.playWarpSound()),this.controls.enabled=!1}update(t){if(!this.isTravelling)return;if(this.travelProgress+=t/this.travelDuration,this.travelProgress>=1){this.isTravelling=!1,this.camera.position.copy(this.endCamPos),this.controls.target.copy(this.endLookAt),this.controls.enabled=!0,this.warpEffect&&this.warpEffect.setWarp(!1),this.onArrivalCallback&&this.onArrivalCallback();return}const e=this.travelProgress,n=e*e*(3-2*e),i=this.startCamPos,a=this.midPoint,r=this.endCamPos;if(this.targetObject){const l=new w;this.targetObject.getWorldPosition(l);const u=this.endCamPos.clone().sub(this.endLookAt);r.copy(l.clone().add(u)),this.endLookAt.copy(l)}const o=new w().addScaledVector(i,(1-n)*(1-n)).addScaledVector(a,2*(1-n)*n).addScaledVector(r,n*n);this.camera.position.copy(o);const c=new w().lerpVectors(this.startLookAt,this.endLookAt,n);this.controls.target.copy(c)}}class zm{constructor(t,e,n){this.camera=t,this.scene=e,this.domElement=n,this.raycaster=new rm,this.mouse=new Mt(-1e3,-1e3),this.hoveredObject=null,this.onSelectCallback=null,this.onHoverCallback=null,this.setupListeners()}setupListeners(){this.domElement.addEventListener("mousemove",t=>{const e=this.domElement.getBoundingClientRect();this.mouse.x=(t.clientX-e.left)/e.width*2-1,this.mouse.y=-((t.clientY-e.top)/e.height)*2+1}),this.domElement.addEventListener("click",t=>{this.hoveredObject&&this.onSelectCallback&&(ee.playClick(),this.onSelectCallback(this.hoveredObject))})}onSelect(t){this.onSelectCallback=t}onHover(t){this.onHoverCallback=t}update(){if(this.mouse.x<-1||this.mouse.x>1||this.mouse.y<-1||this.mouse.y>1)return;this.raycaster.setFromCamera(this.mouse,this.camera);const t=this.raycaster.intersectObjects(this.scene.children,!0);let e=null;for(let n=0;n<t.length;n++){let i=t[n].object;for(;i&&i!==this.scene;){if(i.userData&&i.userData.clickable){e=i;break}i=i.parent}if(e)break}e!==this.hoveredObject&&(this.hoveredObject=e,this.domElement.style.cursor=e?"pointer":"default",this.onHoverCallback&&this.onHoverCallback(e))}}class Hm{constructor(t,e,n=document.body){this.camera=t,this.controls=e,this.domElement=n,this.keys={forward:!1,backward:!1,left:!1,right:!1,up:!1,down:!1,boost:!1},this.velocity=new w,this.moveDir=new w,this.damping=.88,this.baseSpeed=60,this.boostMultiplier=3.5,this.speedScale=1,this.onUserInterrupt=null,this.isPointerLocked=!1,this.mouseLookEnabled=!1,this.setupListeners()}setupListeners(){window.addEventListener("keydown",t=>this.onKeyDown(t)),window.addEventListener("keyup",t=>this.onKeyUp(t)),this.domElement&&this.domElement.addEventListener("wheel",t=>this.onWheel(t),{passive:!1})}onWheel(t){if(document.activeElement&&(document.activeElement.tagName==="INPUT"||document.activeElement.tagName==="TEXTAREA"))return;this.onUserInterrupt&&this.onUserInterrupt();const e=new w(0,0,-1).applyQuaternion(this.camera.quaternion).normalize(),n=this.camera.position.length(),i=Math.max(10,n*.08)*(t.deltaY<0?1:-1),a=e.clone().multiplyScalar(i);this.camera.position.add(a),this.controls.target.add(a)}onKeyDown(t){if(document.activeElement&&(document.activeElement.tagName==="INPUT"||document.activeElement.tagName==="TEXTAREA"))return;let e=!0;switch(t.code){case"KeyW":case"ArrowUp":this.keys.forward=!0;break;case"KeyS":case"ArrowDown":this.keys.backward=!0;break;case"KeyA":case"ArrowLeft":this.keys.left=!0;break;case"KeyD":case"ArrowRight":this.keys.right=!0;break;case"KeyE":case"Space":case"PageUp":this.keys.up=!0;break;case"KeyQ":case"PageDown":this.keys.down=!0;break;case"ShiftLeft":case"ShiftRight":this.keys.boost=!0;break;case"Escape":this.onUserInterrupt&&this.onUserInterrupt();break;default:e=!1;break}e&&(this.keys.forward||this.keys.backward||this.keys.left||this.keys.right||this.keys.up||this.keys.down)&&this.onUserInterrupt&&this.onUserInterrupt()}onKeyUp(t){switch(t.code){case"KeyW":case"ArrowUp":this.keys.forward=!1;break;case"KeyS":case"ArrowDown":this.keys.backward=!1;break;case"KeyA":case"ArrowLeft":this.keys.left=!1;break;case"KeyD":case"ArrowRight":this.keys.right=!1;break;case"KeyE":case"Space":case"PageUp":this.keys.up=!1;break;case"KeyQ":case"PageDown":this.keys.down=!1;break;case"ShiftLeft":case"ShiftRight":this.keys.boost=!1;break}}isMoving(){return this.keys.forward||this.keys.backward||this.keys.left||this.keys.right||this.keys.up||this.keys.down}update(t){if(!this.controls||!this.controls.enabled)return;const e=this.camera.position.length();let n=Math.max(15,e*.45);this.keys.boost&&(n*=this.boostMultiplier);const i=new w(0,0,-1).applyQuaternion(this.camera.quaternion).normalize(),a=new w(1,0,0).applyQuaternion(this.camera.quaternion).normalize(),r=new w(0,1,0).applyQuaternion(this.camera.quaternion).normalize();if(this.moveDir.set(0,0,0),this.keys.forward&&this.moveDir.add(i),this.keys.backward&&this.moveDir.addScaledVector(i,-1),this.keys.right&&this.moveDir.add(a),this.keys.left&&this.moveDir.addScaledVector(a,-1),this.keys.up&&this.moveDir.add(r),this.keys.down&&this.moveDir.addScaledVector(r,-1),this.moveDir.lengthSq()>1e-4){this.moveDir.normalize();const o=this.moveDir.clone().multiplyScalar(n);this.velocity.lerp(o,.25)}else this.velocity.multiplyScalar(this.damping);if(this.velocity.lengthSq()>.01){const o=this.velocity.clone().multiplyScalar(t);this.camera.position.add(o),this.controls.target.add(o)}}}class Gm{constructor(){this.container=document.getElementById("flight-hud"),this.speedEl=document.getElementById("hud-speed-val"),this.warpEl=document.getElementById("hud-warp-val"),this.headingEl=document.getElementById("hud-heading-val"),this.pitchEl=document.getElementById("hud-pitch-val"),this.targetBracket=document.getElementById("hud-target-bracket"),this.targetDistEl=document.getElementById("hud-target-dist")}show(){this.container&&this.container.classList.remove("hidden")}hide(){this.container&&this.container.classList.add("hidden")}update(t,e=null,n=null){if(!(!this.container||this.container.classList.contains("hidden")))if(this.speedEl&&(this.speedEl.textContent=`${t.speedKms} km/s`),this.warpEl&&(this.warpEl.textContent=`Warp ${t.warpFactor}`),this.headingEl&&(this.headingEl.textContent=`${Math.round(t.heading)}°`),this.pitchEl&&(this.pitchEl.textContent=`${t.position.y.toFixed(1)} AU-Y`),e&&n&&this.targetBracket&&this.targetDistEl){const i=e.clone().project(n);if(i.z<1){const a=(i.x*.5+.5)*window.innerWidth,r=(-i.y*.5+.5)*window.innerHeight;this.targetBracket.style.display="block",this.targetBracket.style.transform=`translate(${a-30}px, ${r-30}px)`;const o=n.position.distanceTo(e);this.targetDistEl.textContent=`${(o*1.5).toFixed(1)} M-km`}else this.targetBracket.style.display="none"}else this.targetBracket&&(this.targetBracket.style.display="none")}}class Vm{constructor(t){this.app=t,this.currentSelectedObject=null,this.currentQuizData=[],this.currentQuizIndex=0,this.quizScore=0,this.activeVisualTab=null,this.setupDOMElements(),this.setupEventListeners(),this.populateSidebar(),this.setupSearch()}setupDOMElements(){this.navButtons=document.querySelectorAll(".nav-btn"),this.breadcrumbBar=document.getElementById("breadcrumb-bar"),this.brandLogo=document.getElementById("brand-logo"),this.infoPanel=document.getElementById("info-panel"),this.infoBadgeRow=document.getElementById("info-badge-row"),this.infoTitle=document.getElementById("info-title"),this.infoType=document.getElementById("info-type"),this.infoCloseBtn=document.getElementById("info-close-btn"),this.infoMinimizeBtn=document.getElementById("info-min-btn"),this.flyToTargetBtn=document.getElementById("fly-to-target-btn"),this.takeQuizBtn=document.getElementById("take-quiz-btn"),this.levelBtnEasy=document.getElementById("level-btn-easy"),this.levelBtnScience=document.getElementById("level-btn-science"),this.easyModeContent=document.getElementById("easy-mode-content"),this.scienceModeContent=document.getElementById("science-mode-content"),this.learnMeetText=document.getElementById("learn-meet-text"),this.learnWhatText=document.getElementById("learn-what-text"),this.learnSizeText=document.getElementById("learn-size-text"),this.learnWhereText=document.getElementById("learn-where-text"),this.learnMadeText=document.getElementById("learn-made-text"),this.learnLikeText=document.getElementById("learn-like-text"),this.learnWaterText=document.getElementById("learn-water-text"),this.learnAtmoText=document.getElementById("learn-atmo-text"),this.learnLifeText=document.getElementById("learn-life-text"),this.learnSpecialText=document.getElementById("learn-special-text"),this.learnFactText=document.getElementById("learn-fact-text"),this.scienceSummaryText=document.getElementById("science-summary-text"),this.visualButtons=document.querySelectorAll(".v-btn[data-tab]"),this.visualLearningContainer=document.getElementById("visual-learning-container"),this.visualLearningTitle=document.getElementById("visual-learning-title"),this.visualLearningContent=document.getElementById("visual-learning-content"),this.quizContainer=document.getElementById("quiz-container"),this.quizQuestionText=document.getElementById("quiz-question-text"),this.quizOptionsList=document.getElementById("quiz-options-list"),this.quizFeedbackBox=document.getElementById("quiz-feedback-box"),this.quizScoreIndicator=document.getElementById("quiz-score-indicator"),this.quizNextBtn=document.getElementById("quiz-next-btn"),this.quizRetryBtn=document.getElementById("quiz-retry-btn"),this.infoStatsGrid=document.getElementById("info-stats-grid"),this.searchInput=document.getElementById("search-input"),this.searchResults=document.getElementById("search-results"),this.simSpeedBtn=document.getElementById("sim-speed-btn"),this.simSpeedLabel=document.getElementById("sim-speed-label"),this.simPauseBtn=document.getElementById("sim-pause-btn"),this.simDateLabel=document.getElementById("sim-date-label"),this.targetDistIndicator=document.getElementById("target-dist-indicator"),this.toggleFlightBtn=document.getElementById("toggle-flight-btn"),this.toggleOrbitsBtn=document.getElementById("toggle-orbits-btn"),this.toggleSoundBtn=document.getElementById("toggle-sound-btn"),this.qualitySelect=document.getElementById("quality-select"),this.camModeButtons=document.querySelectorAll(".cam-mode-btn"),this.hoverTooltip=document.getElementById("hover-tooltip"),this.toastContainer=document.getElementById("toast-container")}setupEventListeners(){this.brandLogo&&this.brandLogo.addEventListener("click",()=>{ee.playClick(),this.app.switchScale(fe.SOLAR_SYSTEM)}),this.camModeButtons.forEach(t=>{t.addEventListener("click",()=>{const e=t.dataset.camMode;ee.playClick(),this.camModeButtons.forEach(n=>n.classList.remove("active")),t.classList.add("active"),e==="HOME"?this.app.switchScale(fe.SOLAR_SYSTEM):(this.app.navSystem.setCameraMode(e,this.currentSelectedObject),e==="FREE_EXPLORE"?this.showToast("Free 6-DOF Exploration","Use WASD to fly, QE for vertical thrust, Shift for speed boost, and mouse to look around freely."):e==="FOLLOW"&&this.currentSelectedObject&&this.showToast("Follow Trajectory",`Tracking ${this.currentSelectedObject.name||"object"} along orbital flight.`))})}),this.levelBtnEasy&&this.levelBtnScience&&(this.levelBtnEasy.addEventListener("click",()=>{ee.playClick(),this.setLevelMode("easy")}),this.levelBtnScience.addEventListener("click",()=>{ee.playClick(),this.setLevelMode("science")})),this.navButtons.forEach(t=>{t.addEventListener("click",()=>{const e=t.dataset.scale;ee.playClick(),this.app.switchScale(e)})}),this.infoCloseBtn&&this.infoCloseBtn.addEventListener("click",()=>{this.closeInfoPanel()}),this.infoMinimizeBtn&&this.infoMinimizeBtn.addEventListener("click",()=>{if(this.infoPanel){const t=this.infoPanel.classList.toggle("minimized");this.infoMinimizeBtn.textContent=t?"▲":"▼"}}),this.flyToTargetBtn&&this.flyToTargetBtn.addEventListener("click",()=>{this.currentSelectedObject&&(ee.playClick(),this.app.flyToObject(this.currentSelectedObject))}),this.takeQuizBtn&&this.takeQuizBtn.addEventListener("click",()=>{ee.playClick(),this.quizContainer&&this.quizContainer.scrollIntoView({behavior:"smooth"})}),this.visualButtons.forEach(t=>{t.addEventListener("click",()=>{const e=t.dataset.tab;this.toggleVisualTab(e,t)})}),this.quizNextBtn&&this.quizNextBtn.addEventListener("click",()=>{this.currentQuizIndex++,this.renderQuizQuestion()}),this.quizRetryBtn&&this.quizRetryBtn.addEventListener("click",()=>{this.currentQuizIndex=0,this.quizScore=0,this.renderQuizQuestion()}),this.simPauseBtn&&this.simPauseBtn.addEventListener("click",()=>{const t=this.app.simClock.togglePause();this.simPauseBtn.textContent=t?"▶ Resume":"⏸ Pause",this.simPauseBtn.classList.toggle("active",t),ee.playClick()}),this.simSpeedBtn&&this.simSpeedBtn.addEventListener("click",()=>{const t=this.app.simClock.cycleSpeed();this.simSpeedLabel&&(this.simSpeedLabel.textContent=t),ee.playClick()}),this.toggleFlightBtn&&this.toggleFlightBtn.addEventListener("click",()=>{ee.playClick(),this.app.toggleFlightMode()}),this.toggleOrbitsBtn&&this.toggleOrbitsBtn.addEventListener("click",()=>{ee.playClick();const t=this.app.solarSystem.showOrbits;this.app.solarSystem.toggleOrbits(!t),this.toggleOrbitsBtn.classList.toggle("active",!t)}),this.toggleSoundBtn&&this.toggleSoundBtn.addEventListener("click",()=>{const t=ee.toggleMute();this.toggleSoundBtn.textContent=t?"🔇 Audio Off":"🔊 Audio On",this.toggleSoundBtn.classList.toggle("active",!t)}),this.qualitySelect&&this.qualitySelect.addEventListener("change",t=>{this.app.sceneManager.setQuality(t.target.value)}),window.addEventListener("keydown",t=>{document.activeElement===this.searchInput||document.activeElement?.id==="catalog-search-input"||(t.code==="Space"&&!this.app.spacecraft.flightModeActive&&!this.app.freeFlyController.isMoving()&&this.simPauseBtn&&this.simPauseBtn.click(),t.code==="KeyF"&&this.app.toggleFlightMode(),t.code==="Escape"&&(this.app.travelSystem.isTravelling?(this.app.travelSystem.cancel(),this.showToast("Autopilot Cancelled","Switched to free camera flight.")):this.closeInfoPanel()))})}toggleVisualTab(t,e){if(ee.playClick(),this.activeVisualTab===t&&this.visualLearningContainer.classList.contains("active")){this.visualLearningContainer.classList.remove("active"),this.visualButtons.forEach(o=>o.classList.remove("active")),this.activeVisualTab=null;return}this.activeVisualTab=t,this.visualButtons.forEach(o=>o.classList.toggle("active",o===e));const n=this.currentSelectedObject;if(!n)return;const i=n.educational||{};let a="",r="";switch(t){case"why":a=`🧠 WHY: ${i.whyQuestion||`Why is ${n.name} like this?`}`,r=i.whyAnswer||n.description||"Scientific mechanisms explain this world’s distinct features.";break;case"how":a=`🔬 HOW: ${i.howQuestion||`How does ${n.name} work?`}`,r=i.howAnswer||`Orbital dynamics, stellar radiation, and planetary geology govern ${n.name}.`;break;case"what":a="🔭 WHAT: Composition & Anatomy",r=`
          <strong>Core Nature:</strong> ${n.objectType||n.type||"Celestial Object"}<br>
          <strong>Atmosphere:</strong> ${n.atmosphere||"UNKNOWN / None"}<br>
          <strong>Magnetic Field:</strong> ${n.magneticField||"UNKNOWN / None detected"}
        `;break;case"compare":a="⚖️ SIZE & SCALE COMPARISON",r=this.generateSizeComparisonHTML(n);break;case"scale":a="📏 COSMIC SCALE",r=`
          <strong>Radius:</strong> ${n.radiusKm?`${n.radiusKm.toLocaleString()} km`:n.radius?`${n.radius} units`:"UNKNOWN"}<br>
          <strong>Mass:</strong> ${n.massFormatted||n.mass||"UNKNOWN"}<br>
          <strong>Distance from Earth:</strong> ${n.distanceFromEarth||(n.distanceAU?`${n.distanceAU} AU`:"UNKNOWN")}
        `;break;case"evidence":a="🔍 SCIENTIFIC EVIDENCE & OBSERVATIONS",r=`
          <strong>Data Status:</strong> ${n.dataStatus||"REAL / CATALOGUED"}<br>
          <strong>Source / Missions:</strong> ${n.source||"NASA / JPL / ESA Scientific Observatories"}<br>
          <strong>Evidence:</strong> ${i.evidenceText||"Verified through spectroscopic measurements and orbital radar scans."}
        `;break;case"water":a="💧 WATER & ICE STATUS",r=`
          <strong>Classification:</strong> ${n.waterStatus||"UNKNOWN"}<br>
          <strong>Details:</strong> ${n.waterDetails||"No significant water reservoir detected."}
        `;break;case"atmosphere":a="💨 ATMOSPHERE & CLIMATE",r=`
          <strong>Composition:</strong> ${n.atmosphere||"UNKNOWN"}<br>
          <strong>Pressure / Thickness:</strong> ${n.atmosphereThickness||(n.atmospherePressure?`${n.atmospherePressure} bar`:"UNKNOWN")}
        `;break;case"life":a="🌱 HABITABILITY & LIFE STATUS",r=`
          <strong>Life Status:</strong> <span style="color:${n.lifeStatus===wm.LIFE_CONFIRMED?"#00e676":"#ffb300"}; font-weight:700;">${n.lifeStatus||"UNKNOWN"}</span><br>
          <strong>Habitability Assessment:</strong> ${n.habitability||"Hostile extreme environment."}
        `;break}this.visualLearningTitle&&(this.visualLearningTitle.innerHTML=a),this.visualLearningContent&&(this.visualLearningContent.innerHTML=r),this.visualLearningContainer.classList.add("active")}generateSizeComparisonHTML(t){const e=t.radiusKm||6371,n=6371,i=1737,a=69911,r=(e/n).toFixed(2),o=(e/i).toFixed(2),c=(e/a).toFixed(2);return`
      <div style="display:flex; flex-direction:column; gap:6px; margin-top:4px;">
        <div><strong>Relative to Earth (6,371 km):</strong> ${r}× Earth radius</div>
        <div><strong>Relative to Moon (1,737 km):</strong> ${o}× Moon radius</div>
        <div><strong>Relative to Jupiter (69,911 km):</strong> ${c}× Jupiter radius</div>
        <div style="background:rgba(0,0,0,0.4); border-radius:4px; height:12px; position:relative; margin-top:4px; overflow:hidden;">
          <div style="width:${Math.min(100,Math.max(5,e/n*50))}%; height:100%; background:linear-gradient(90deg, var(--accent-cyan), var(--accent-gold)); border-radius:4px;"></div>
        </div>
      </div>
    `}setLevelMode(t){t==="easy"?(this.levelBtnEasy&&(this.levelBtnEasy.classList.add("active"),this.levelBtnEasy.style.background="var(--accent-cyan)",this.levelBtnEasy.style.color="#010308"),this.levelBtnScience&&(this.levelBtnScience.classList.remove("active"),this.levelBtnScience.style.background="transparent",this.levelBtnScience.style.color="var(--text-dim)"),this.easyModeContent&&(this.easyModeContent.style.display="flex"),this.scienceModeContent&&(this.scienceModeContent.style.display="none")):(this.levelBtnScience&&(this.levelBtnScience.classList.add("active"),this.levelBtnScience.style.background="var(--accent-magenta)",this.levelBtnScience.style.color="#fff"),this.levelBtnEasy&&(this.levelBtnEasy.classList.remove("active"),this.levelBtnEasy.style.background="transparent",this.levelBtnEasy.style.color="var(--text-dim)"),this.easyModeContent&&(this.easyModeContent.style.display="none"),this.scienceModeContent&&(this.scienceModeContent.style.display="flex"))}async showInfoPanel(t){if(!this.infoPanel)return;this.currentSelectedObject=t;try{const n=await fetch(`/api/objects/${t.id}`);if(n.ok){const i=await n.json();i.success&&i.object&&(t={...t,...i.object},this.currentSelectedObject=t)}}catch{}if(this.setLevelMode("easy"),this.infoBadgeRow){const n=t.dataStatus||t.status||Tm.REAL_CATALOGUED,a=n.includes("HYPOTHETICAL")||n.includes("THEORETICAL")?"background:rgba(224,64,251,0.25); border-color:#e040fb; color:#e040fb; font-weight:800;":"",r=t.visualizationStatus||"ACCURATE MODEL";this.infoBadgeRow.innerHTML=`
        <span class="badge-real" style="${a}">${n}</span>
        ${t.catalogId?`<span class="badge-real" style="border-color:var(--accent-gold); color:var(--accent-gold);">${t.catalogId}</span>`:""}
        <span class="badge-vis">VISUAL: ${r}</span>
      `}this.infoTitle&&(this.infoTitle.textContent=t.name||"Celestial Body"),this.infoType&&(this.infoType.textContent=t.objectType||t.type||"");const e=t.educational||{};this.learnMeetText&&(this.learnMeetText.textContent=e.meet||(t.name?`Meet ${t.name}, an awe-inspiring astronomical marvel!`:"Meet this incredible cosmic wonder!")),this.learnWhatText&&(this.learnWhatText.textContent=e.whatIsIt||t.description||"A fascinating celestial body observed in the cosmos."),this.learnSizeText&&(this.learnSizeText.textContent=e.howBig||(t.radiusKm?`${t.radiusKm.toLocaleString()} km radius`:t.radius?`${t.radius} km radius`:"Measured astronomical scale")),this.learnWhereText&&(this.learnWhereText.textContent=e.whereIsIt||t.distanceFromEarth||(t.distanceAU?`${t.distanceAU} AU from Sun`:t.location||"Deep space coordinate")),this.learnMadeText&&(this.learnMadeText.textContent=e.whatMadeOf||t.composition||t.atmosphere||"Dense astrophysical elements and cosmic plasma."),this.learnLikeText&&(this.learnLikeText.textContent=e.whatIsItLike||e.whatLike||t.surfaceTemp||(t.temperatureK?`${t.temperatureK} K`:"Unique cosmic space environment.")),this.learnWaterText&&(this.learnWaterText.textContent=e.doesItHaveWater||t.waterStatus||t.waterDetails||"No liquid surface water detected."),this.learnAtmoText&&(this.learnAtmoText.textContent=e.doesItHaveAtmosphere||t.atmosphere||"Trace exosphere / vacuum space environment."),this.learnLifeText&&(this.learnLifeText.textContent=e.couldLifeExist||t.lifeStatus||t.habitability||"Extreme hostile environment."),this.learnSpecialText&&(this.learnSpecialText.textContent=e.whySpecial||t.habitability||t.specialFeatures||"Key astronomical properties observed."),this.learnFactText&&(this.learnFactText.textContent=e.didYouKnow||"Light travels across the universe at 299,792 km per second!"),this.scienceSummaryText&&(this.scienceSummaryText.innerHTML=`
        <div style="margin-bottom:6px;"><strong>Astrophysical Overview:</strong> ${e.moreScience||t.description||"Data compiled from astronomical survey catalogs."}</div>
        <div style="display:flex; flex-direction:column; gap:3px; font-size:10.5px; background:rgba(0,0,0,0.3); padding:8px; border-radius:6px;">
          <div>• <strong>Spectral / Structural Class:</strong> ${t.spectralType||t.objectType||t.type||"N/A"}</div>
          <div>• <strong>Gravitational Surface Acceleration:</strong> ${t.gravity||"N/A"}</div>
          <div>• <strong>Density / State:</strong> ${t.density||"N/A"}</div>
          <div>• <strong>Magnetic Field:</strong> ${t.magneticField||"N/A"}</div>
          <div>• <strong>Observational Authority:</strong> ${t.source||"NASA / JPL Horizons / ESA Gaia / SIMBAD"}</div>
        </div>
      `),this.visualLearningContainer&&(this.visualLearningContainer.classList.remove("active"),this.visualButtons.forEach(n=>n.classList.remove("active")),this.activeVisualTab=null),this.infoStatsGrid&&(this.infoStatsGrid.innerHTML="",[["Mass",t.massFormatted||t.mass||"UNKNOWN"],["Radius",t.radiusKm?`${t.radiusKm.toLocaleString()} km`:t.radius||t.diameterLy||"UNKNOWN"],["Surface Temp",t.surfaceTemp||(t.temperatureK?`${t.temperatureK} K`:"UNKNOWN")],["Distance",t.distanceFromEarth||(t.distanceAU?`${t.distanceAU} AU`:"UNKNOWN")],["Orbit Period",t.orbitalPeriod||(t.orbitalPeriodDays?`${t.orbitalPeriodDays.toFixed(1)} days`:"UNKNOWN")],["Rotation",t.rotationPeriod||(t.rotationPeriodHours?`${Math.abs(t.rotationPeriodHours).toFixed(1)} hrs`:"UNKNOWN")],["Gravity",t.gravity||"UNKNOWN"],["Atmosphere",t.atmosphere||"UNKNOWN"],["Water Status",t.waterStatus||"UNKNOWN"],["Life Status",t.lifeStatus||"UNKNOWN"],["Source / Ref",t.source||"NASA / JPL / ESA"]].forEach(([i,a])=>{const r=document.createElement("div");r.className="stat-card",r.innerHTML=`
          <div class="stat-label">${i}</div>
          <div class="stat-val">${a}</div>
        `,this.infoStatsGrid.appendChild(r)})),this.loadQuizForObject(t),this.targetDistIndicator&&(this.targetDistIndicator.innerHTML=`🎯 <strong>TARGET:</strong> ${t.name} (${t.distanceFromEarth||(t.distanceAU?`${t.distanceAU} AU`:"In Range")})`),this.infoPanel.classList.remove("hidden"),this.infoPanel.classList.remove("minimized"),this.infoMinimizeBtn&&(this.infoMinimizeBtn.textContent="▼")}loadQuizForObject(t){if(this.currentQuizData=t.quiz||[],this.currentQuizIndex=0,this.quizScore=0,this.currentQuizData.length===0){const e=t.name||"this celestial body",n=t.objectType||t.type||"astronomical body";this.currentQuizData=[{question:`What kind of object is ${e}?`,options:[n,"A wandering black hole","An interstellar cloud of helium","A rogue artificial satellite"],correct:"A",explanation:`${e} is catalogued as a ${n}.`},{question:`What is the life status of ${e}?`,options:[t.lifeStatus||"NO CONFIRMED LIFE","Alien civilization thriving","Full of dinosaurs","Covered in tropical forests"],correct:"A",explanation:`According to real astronomical data, ${e} is marked as "${t.lifeStatus||"NO CONFIRMED LIFE"}".`}]}this.renderQuizQuestion()}renderQuizQuestion(){if(!this.quizContainer||!this.quizQuestionText)return;if(this.currentQuizIndex>=this.currentQuizData.length){this.quizQuestionText.textContent=`🎉 Quiz Completed! You scored ${this.quizScore} / ${this.currentQuizData.length}!`,this.quizOptionsList.innerHTML="",this.quizFeedbackBox.className="quiz-feedback show success",this.quizFeedbackBox.textContent=`Great job exploring ${this.currentSelectedObject?.name||"space"}! Keep discovering new worlds.`,this.quizNextBtn&&(this.quizNextBtn.style.display="none"),this.quizRetryBtn&&(this.quizRetryBtn.style.display="inline-block"),this.quizScoreIndicator&&(this.quizScoreIndicator.textContent=`Score: ${this.quizScore}/${this.currentQuizData.length} ⭐`);return}const t=this.currentQuizData[this.currentQuizIndex];this.quizQuestionText.textContent=`Q${this.currentQuizIndex+1}: ${t.question}`,this.quizOptionsList.innerHTML="",this.quizFeedbackBox.className="quiz-feedback",this.quizFeedbackBox.style.display="none",this.quizNextBtn&&(this.quizNextBtn.style.display="none"),this.quizRetryBtn&&(this.quizRetryBtn.style.display="none"),this.quizScoreIndicator&&(this.quizScoreIndicator.textContent=`Question ${this.currentQuizIndex+1}/${this.currentQuizData.length} | Score: ${this.quizScore}`);const e=["A","B","C","D"];t.options.forEach((n,i)=>{const a=e[i],r=document.createElement("button");r.className="quiz-opt-btn",r.innerHTML=`<strong>${a}.</strong> ${n}`,r.addEventListener("click",()=>{this.handleQuizAnswer(a,t,r)}),this.quizOptionsList.appendChild(r)})}handleQuizAnswer(t,e,n){const i=this.quizOptionsList.querySelectorAll(".quiz-opt-btn");if(i.forEach(r=>r.disabled=!0),t.toUpperCase()===e.correct.toUpperCase())n.classList.add("correct"),ee.playDiscoveryChime(),this.quizScore++,this.quizFeedbackBox.className="quiz-feedback show success",this.quizFeedbackBox.innerHTML=`✅ <strong>Correct!</strong> ${e.explanation}`;else{n.classList.add("wrong");const r=["A","B","C","D"];i.forEach((o,c)=>{r[c]===e.correct.toUpperCase()&&o.classList.add("correct")}),ee.playClick(),this.quizFeedbackBox.className="quiz-feedback show failure",this.quizFeedbackBox.innerHTML=`❌ <strong>Not quite!</strong> ${e.explanation}`}this.quizScoreIndicator&&(this.quizScoreIndicator.textContent=`Score: ${this.quizScore}/${this.currentQuizData.length}`),this.quizNextBtn&&(this.quizNextBtn.style.display="inline-block")}closeInfoPanel(){this.infoPanel&&this.infoPanel.classList.add("hidden"),this.currentSelectedObject=null,this.targetDistIndicator&&(this.targetDistIndicator.innerHTML="🎯 <strong>TARGET:</strong> None")}updateBreadcrumb(t,e=null){if(!this.breadcrumbBar)return;let n="";const i=(a,r)=>`<span class="crumb-link" data-scale="${r}">${a}</span>`;switch(t){case fe.MULTIVERSE:n='<span class="crumb-active">MULTIVERSE</span>';break;case fe.UNIVERSE:n=`${i("MULTIVERSE",fe.MULTIVERSE)} &gt; <span class="crumb-active">OBSERVABLE UNIVERSE</span>`;break;case fe.GALAXIES:case fe.GALAXY:case fe.MILKY_WAY:n=`${i("UNIVERSE",fe.UNIVERSE)} &gt; <span class="crumb-active">MILKY WAY GALAXY</span>`;break;case fe.SOLAR_SYSTEM:case fe.PLANETS:n=`${i("UNIVERSE",fe.UNIVERSE)} &gt; ${i("MILKY WAY",fe.MILKY_WAY)} &gt; <span class="crumb-active">SOLAR SYSTEM</span>`;break;case fe.PLANET_ORBIT:case fe.CLOSE_APPROACH:case fe.HABITABILITY:case fe.BLACK_HOLES:case fe.SPACECRAFT:case fe.LEARNING:const a=e||"CELESTIAL OBJECT";n=`${i("UNIVERSE",fe.UNIVERSE)} &gt; ${i("MILKY WAY",fe.MILKY_WAY)} &gt; ${i("SOLAR SYSTEM",fe.SOLAR_SYSTEM)} &gt; <span class="crumb-active">${a.toUpperCase()}</span>`;break}this.breadcrumbBar.innerHTML=n,this.breadcrumbBar.querySelectorAll(".crumb-link").forEach(a=>{a.addEventListener("click",()=>{const r=a.dataset.scale;ee.playClick(),this.app.switchScale(r)})})}updateScaleUI(t){this.navButtons.forEach(e=>{e.classList.toggle("active",e.dataset.scale===t)})}populateSidebar(){const t=document.getElementById("sidebar-objects-list");if(!t)return;t.innerHTML="";const e=h=>{const m=document.createElement("div");m.className="sidebar-section-title",m.textContent=h,t.appendChild(m)};e("SOLAR SYSTEM"),Re.getByCategory("planets").forEach(h=>{t.appendChild(this.createSidebarItem(h.name,h.id==="sun"?"Star":"Planet",()=>{this.app.selectObject(h),this.app.flyToObject(h)}))}),e("HABITABLE EXOPLANETS"),Re.getByCategory("exoplanets").slice(0,6).forEach(h=>{t.appendChild(this.createSidebarItem(h.name,"Exoplanet",()=>{this.app.selectObject(h),this.app.flyToObject(h)}))}),e("NEARBY STARS"),Re.getByCategory("stars").slice(0,6).forEach(h=>{t.appendChild(this.createSidebarItem(h.name,h.spectralType||"Star",()=>{this.app.selectObject(h),this.app.flyToObject(h)}))}),e("ASTEROIDS & DWARFS"),Re.getByCategory("asteroids").slice(0,6).forEach(h=>{t.appendChild(this.createSidebarItem(h.name,h.objectType||"Asteroid",()=>{this.app.selectObject(h),this.app.flyToObject(h)}))}),e("BLACK HOLES & PULSARS"),Re.getByCategory("black_holes").forEach(h=>{t.appendChild(this.createSidebarItem(h.name,"Black Hole",()=>{this.app.selectObject(h),this.app.flyToObject(h)}))}),Re.getByCategory("pulsars").forEach(h=>{t.appendChild(this.createSidebarItem(h.name,"Pulsar",()=>{this.app.selectObject(h),this.app.flyToObject(h)}))}),e("GALAXIES & NEBULAE"),Re.getByCategory("galaxies").slice(0,4).forEach(h=>{t.appendChild(this.createSidebarItem(h.name,"Galaxy",()=>{this.app.selectObject(h),this.app.flyToObject(h)}))}),Re.getByCategory("nebulae").slice(0,4).forEach(h=>{t.appendChild(this.createSidebarItem(h.name,"Nebula",()=>{this.app.selectObject(h),this.app.flyToObject(h)}))}),e("SPACECRAFT MISSIONS"),Re.getByCategory("spacecraft").slice(0,5).forEach(h=>{t.appendChild(this.createSidebarItem(h.name,"Probe",()=>{this.app.selectObject(h),this.app.flyToObject(h)}))})}createSidebarItem(t,e,n){const i=document.createElement("div");return i.className="sidebar-item",i.innerHTML=`
      <span class="item-name">${t}</span>
      <span class="item-type">${e}</span>
    `,i.addEventListener("click",()=>{ee.playClick(),n()}),i}setupSearch(){!this.searchInput||!this.searchResults||(this.searchInput.addEventListener("input",async t=>{const e=t.target.value.toLowerCase().trim();if(!e){this.searchResults.classList.add("hidden");return}let n=[];try{const i=await fetch(`/api/search?q=${encodeURIComponent(e)}`);if(i.ok){const a=await i.json();a.success&&a.results&&(n=a.results.map(r=>{const o=Re.get(r.id);return{id:r.id,name:r.name,type:r.objectType||r.category,distance:r.distance||"Catalogued",raw:o?.raw||r}}))}}catch{}n.length===0&&(n=Re.search(e)),this.searchResults.innerHTML="",n.length===0?this.searchResults.innerHTML='<div class="search-item-empty">No astronomical catalog entries found</div>':n.slice(0,10).forEach(i=>{const a=document.createElement("div");a.className="search-item",a.innerHTML=`
            <div>
              <div class="s-name">${i.name}</div>
              <div style="font-size:9.5px; color:#94a3b8;">${i.distance||"Catalogue position"}</div>
            </div>
            <span class="s-type">${i.type}</span>
          `,a.addEventListener("click",()=>{this.searchInput.value="",this.searchResults.classList.add("hidden"),ee.playClick(),this.app.selectObject(i.raw),this.app.flyToObject(i.raw)}),this.searchResults.appendChild(a)}),this.searchResults.classList.remove("hidden")}),document.addEventListener("click",t=>{!this.searchInput.contains(t.target)&&!this.searchResults.contains(t.target)&&this.searchResults.classList.add("hidden")}))}showTooltip(t,e,n){if(this.hoverTooltip){if(!t){this.hoverTooltip.style.display="none";return}this.hoverTooltip.style.display="block",this.hoverTooltip.style.left=`${e+14}px`,this.hoverTooltip.style.top=`${n+14}px`,this.hoverTooltip.textContent=t}}showToast(t,e){if(!this.toastContainer)return;ee.playDiscoveryChime();const n=document.createElement("div");n.className="discovery-toast",n.innerHTML=`
      <div class="toast-header">✨ DISCOVERY LOGGED</div>
      <div class="toast-title">${t}</div>
      <div class="toast-body">${e}</div>
    `,this.toastContainer.appendChild(n),setTimeout(()=>{n.classList.add("fade-out"),setTimeout(()=>n.remove(),600)},4500)}updateTimeDisplay(t){this.simDateLabel&&(this.simDateLabel.textContent=t.currentDateStr)}updateScaleUI(t){this.navButtons&&this.navButtons.forEach(e=>{const n=e.dataset.scale===t;e.classList.toggle("active",n)})}updateBreadcrumb(t,e=null){if(!this.breadcrumbBar)return;let n=[];switch(t){case"MULTIVERSE":n=[{label:"MULTIVERSE",scale:"MULTIVERSE",active:!e}];break;case"COSMIC_WEB":n=[{label:"MULTIVERSE",scale:"MULTIVERSE"},{label:"COSMIC WEB",scale:"COSMIC_WEB",active:!e}];break;case"UNIVERSE":n=[{label:"MULTIVERSE",scale:"MULTIVERSE"},{label:"OBSERVABLE UNIVERSE",scale:"UNIVERSE",active:!e}];break;case"GALAXIES":n=[{label:"UNIVERSE",scale:"UNIVERSE"},{label:"LOCAL GROUP GALAXIES",scale:"GALAXIES",active:!e}];break;case"MILKY_WAY":case"GALAXY":n=[{label:"UNIVERSE",scale:"UNIVERSE"},{label:"MILKY WAY",scale:"MILKY_WAY",active:!e}];break;case"SOLAR_SYSTEM":n=[{label:"UNIVERSE",scale:"UNIVERSE"},{label:"MILKY WAY",scale:"MILKY_WAY"},{label:"SOLAR SYSTEM",scale:"SOLAR_SYSTEM",active:!e}];break;case"PLANETS":case"PLANET_ORBIT":case"HABITABILITY":n=[{label:"UNIVERSE",scale:"UNIVERSE"},{label:"MILKY WAY",scale:"MILKY_WAY"},{label:"SOLAR SYSTEM",scale:"SOLAR_SYSTEM"},{label:e?e.toUpperCase():"PLANETS",scale:"PLANETS",active:!0}];break;case"BLACK_HOLES":n=[{label:"UNIVERSE",scale:"UNIVERSE"},{label:"MILKY WAY",scale:"MILKY_WAY"},{label:e?e.toUpperCase():"BLACK HOLES",scale:"BLACK_HOLES",active:!0}];break;case"WORMHOLE":n=[{label:"UNIVERSE",scale:"UNIVERSE"},{label:"SPACETIME ANOMALIES",scale:"WORMHOLE"},{label:"EINSTEIN-ROSEN BRIDGE",scale:"WORMHOLE",active:!0}];break;case"SPACECRAFT":n=[{label:"SOLAR SYSTEM",scale:"SOLAR_SYSTEM"},{label:"FLEET MISSIONS",scale:"SPACECRAFT",active:!e}];break;default:n=[{label:"UNIVERSE",scale:"UNIVERSE"},{label:"SOLAR SYSTEM",scale:"SOLAR_SYSTEM",active:!e}]}e&&!n.some(i=>i.label===e.toUpperCase())&&n.push({label:e.toUpperCase(),active:!0}),this.breadcrumbBar.innerHTML=n.map((i,a)=>a===n.length-1||i.active?`<span class="crumb-active">${i.label}</span>`:`<span class="crumb-link" data-scale="${i.scale}" style="cursor:pointer; color:var(--accent-cyan);">${i.label}</span> &gt; `).join(""),this.breadcrumbBar.querySelectorAll(".crumb-link").forEach(i=>{i.addEventListener("click",()=>{const a=i.dataset.scale;a&&(ee.playClick(),this.app.switchScale(a))})})}}class Wm{constructor(t){this.app=t,this.modal=document.getElementById("catalog-modal"),this.openBtn=document.getElementById("open-catalog-btn"),this.closeBtn=document.getElementById("catalog-close-btn"),this.filterButtons=document.querySelectorAll(".catalog-tab-btn"),this.searchInput=document.getElementById("catalog-search-input"),this.gridContainer=document.getElementById("catalog-grid"),this.currentCategory="all",this.currentSearchQuery="",this.setupEvents(),this.updateTabCounts()}setupEvents(){this.openBtn&&this.openBtn.addEventListener("click",()=>{ee.playClick(),this.open()}),this.closeBtn&&this.closeBtn.addEventListener("click",()=>{this.close()}),this.filterButtons.forEach(t=>{t.addEventListener("click",()=>{ee.playClick(),this.filterButtons.forEach(e=>e.classList.remove("active")),t.classList.add("active"),this.currentCategory=t.dataset.category,this.renderGrid()})}),this.searchInput&&this.searchInput.addEventListener("input",t=>{this.currentSearchQuery=t.target.value.toLowerCase().trim(),this.renderGrid()})}open(){this.modal&&(this.modal.classList.remove("hidden"),this.renderGrid())}close(){this.modal&&this.modal.classList.add("hidden")}updateTabCounts(){const t=Re.getCounts(),e={all:document.getElementById("count-all"),stars:document.getElementById("count-stars"),exoplanets:document.getElementById("count-exoplanets"),planets:document.getElementById("count-planets"),asteroids:document.getElementById("count-asteroids"),comets:document.getElementById("count-comets"),clusters:document.getElementById("count-clusters"),galaxies:document.getElementById("count-galaxies"),black_holes:document.getElementById("count-blackholes"),nebulae:document.getElementById("count-nebulae"),spacecraft:document.getElementById("count-spacecraft")};for(const[n,i]of Object.entries(e))i&&t[n]!==void 0&&(i.textContent=`(${t[n]})`)}renderGrid(){if(!this.gridContainer)return;this.gridContainer.innerHTML="";let t=[];if(this.currentCategory==="all"?t=Re.getByCategory("all"):t=Re.getByCategory(this.currentCategory).map(n=>({id:n.id,name:n.name,type:n.type||n.objectType||this.currentCategory,category:this.currentCategory,raw:n,distance:n.distanceFromEarth||n.distanceLy||(n.distanceAU?`${n.distanceAU} AU`:n.location||"Local")})),this.currentSearchQuery&&(t=t.filter(e=>e.name.toLowerCase().includes(this.currentSearchQuery)||e.type.toLowerCase().includes(this.currentSearchQuery)||e.raw.catalogId&&e.raw.catalogId.toLowerCase().includes(this.currentSearchQuery))),t.length===0){this.gridContainer.innerHTML=`
        <div class="catalog-empty">
          <div style="font-size:24px; margin-bottom:8px;">🔍</div>
          No catalogued objects found matching your criteria.
        </div>
      `;return}t.forEach(e=>{const n=document.createElement("div");n.className="catalog-card";const i=e.raw,a=i.status||"REAL CATALOGUED OBJECT",r=i.visualizationStatus?`<div class="card-vis-status">VISUAL: ${i.visualizationStatus}</div>`:"",o=i.catalogId?`<div class="card-catalog-id">${i.catalogId}</div>`:"",c=e.distance?`<div class="card-prop"><span>Distance:</span> ${e.distance}</div>`:"",l=i.spectralType?`<div class="card-prop"><span>Spectral:</span> ${i.spectralType}</div>`:"",u=i.mass?`<div class="card-prop"><span>Mass:</span> ${i.mass}</div>`:"";n.innerHTML=`
        <div class="card-header">
          <div class="card-title">${e.name}</div>
          <div class="card-badge">${a}</div>
        </div>
        ${o}
        <div class="card-type">${e.type}</div>
        <div class="card-details">
          ${c}
          ${l}
          ${u}
        </div>
        ${r}
        <button class="card-fly-btn">🚀 Engage Intercept Course</button>
      `,n.querySelector(".card-fly-btn").addEventListener("click",()=>{ee.playClick(),this.close(),this.app.selectObject(i),this.app.flyToObject(i)}),this.gridContainer.appendChild(n)})}}class Xm{constructor(){console.log("[App] Step 0: container & clock"),this.container=document.getElementById("canvas-container"),this.simClock=new dm,console.log("[App] Step 1: SceneManager"),this.sceneManager=new um(this.container),this.scene=this.sceneManager.scene,this.camera=this.sceneManager.camera,this.controls=this.sceneManager.controls,console.log("[App] Step 2: StarField & Warp"),this.starField=new fm(18e3,9e4),this.scene.add(this.starField.group),this.warpEffect=new Bm(this.camera,1200),this.scene.add(this.warpEffect.group),console.log("[App] Step 3.1: SolarSystem"),this.solarSystem=new ym(this.scene),console.log("[App] Step 3.2: UniverseSystem"),this.universeSystem=new Lm(this.scene),console.log("[App] Step 3.3: StarSystems"),this.starSystems=new Pm(this.scene),console.log("[App] Step 3.4: AsteroidCatalog"),this.asteroidCatalog=new Im(this.scene),console.log("[App] Step 3.5: ClusterSystem"),this.clusterSystem=new Dm(this.scene),console.log("[App] Step 3.6: SpacecraftFleet"),this.spacecraftFleet=new Um(this.scene),console.log("[App] Step 4: Spacecraft"),this.spacecraft=new Nm(this.camera),this.scene.add(this.spacecraft.group),this.spacecraft.group.visible=!1,console.log("[App] Step 5: Navigation & Travel"),this.navSystem=new Fm(this.camera,this.controls),this.travelSystem=new km(this.camera,this.controls,this.warpEffect),console.log("[App] Step 6: FreeFlyController"),this.freeFlyController=new Hm(this.camera,this.controls,this.container),this.freeFlyController.onUserInterrupt=()=>{this.travelSystem.isTravelling&&this.travelSystem.cancel()},console.log("[App] Step 7: RaycasterSystem"),this.raycasterSystem=new zm(this.camera,this.scene,this.sceneManager.renderer.domElement),console.log("[App] Step 8: Selection Ring"),this.buildSelectionIndicator(),console.log("[App] Step 9: HUD & UI"),this.hud=new Gm,this.catalogUI=new Wm(this),this.ui=new Vm(this),this.discoveredObjects=new Set,this.totalTime=0,this.selectedTargetObject=null,this.setupInteractionHandlers(),this.camera.position.set(0,380,720),this.controls.target.set(0,0,0),this.navSystem.setScale(Ft.SOLAR_SYSTEM),this.universeSystem.setScaleMode(Ft.SOLAR_SYSTEM),this.ui.updateScaleUI(Ft.SOLAR_SYSTEM),this.ui.updateBreadcrumb(Ft.SOLAR_SYSTEM),console.log("[App] Finished constructor successfully!")}buildSelectionIndicator(){const t=new mn(1.2,1.35,48),e=new ce({color:58879,side:pe,transparent:!0,opacity:.85,depthWrite:!1,blending:qt});this.selectionRing=new ot(t,e),this.selectionRing.rotation.x=Math.PI/2,this.selectionRing.visible=!1,this.scene.add(this.selectionRing)}setupInteractionHandlers(){this.raycasterSystem.onSelect(t=>{const e=t.userData?.data;e&&this.selectObject(e,t)}),this.raycasterSystem.onHover(t=>{t&&t.userData?.name?this.ui.showTooltip(`${t.userData.name} (${t.userData.type||""})`,window.event?.clientX,window.event?.clientY):this.ui.showTooltip(null)})}selectObject(t,e=null){if(this.selectedTargetObject=e||this.findMeshForData(t),this.ui.showInfoPanel(t),this.ui.updateBreadcrumb(this.navSystem.currentScale,t.name),this.selectionRing&&this.selectedTargetObject){const n=t.visualRadius||t.eventHorizonSize||(t.radius?t.radius*.05:8);this.selectionRing.scale.setScalar(n*1.5),this.selectionRing.visible=!0}this.discoveredObjects.has(t.id||t.name)||(this.discoveredObjects.add(t.id||t.name),this.ui.showToast(t.name,`New discovery logged: ${t.objectType||t.type||"Celestial Body"}`))}findMeshForData(t){if(!t)return null;if(t.id==="sun")return this.solarSystem.sun.group;const e=this.solarSystem.getPlanetById(t.id);if(e)return e.group;const n=this.starSystems.stars.find(g=>g.id===t.id);if(n)return n.group;const i=this.starSystems.exoplanetSystems.find(g=>g.id===t.id||g.id===t.parentSystemId);if(i){if(t.parentSystemId){const g=i.planets.find(_=>_.data.id===t.id);if(g)return g.group}return i.group}const a=this.asteroidCatalog.asteroids.find(g=>g.id===t.id);if(a)return a.group;if(t.id==="pluto-system"||t.id==="pluto")return this.asteroidCatalog.plutoGroup;const r=this.asteroidCatalog.comets.find(g=>g.id===t.id);if(r)return r.instance.group;const o=this.clusterSystem.clusters.find(g=>g.id===t.id);if(o)return o.group;const c=this.spacecraftFleet.spacecraft.find(g=>g.id===t.id);if(c)return c.group;const l=this.universeSystem.wormholes.find(g=>g.id===t.id);if(l)return l.group;if(this.universeSystem.multiverse){const g=this.universeSystem.multiverse.bubbleMeshes.find(_=>_.data.id===t.id);if(g)return g.group}if(t.id==="cosmic-web"&&this.universeSystem.cosmicWeb)return this.universeSystem.cosmicWeb.points;if(t.id==="cmb"&&this.universeSystem.cosmicWeb)return this.universeSystem.cosmicWeb.cmbMesh;const u=this.universeSystem.galaxies.find(g=>g.id===t.id);if(u)return u.group;const d=this.universeSystem.blackHoles.find(g=>g.id===t.id);if(d)return d.group;const h=this.universeSystem.pulsars.find(g=>g.id===t.id);if(h)return h.group;const m=this.universeSystem.nebulae.find(g=>g.id===t.id);return m?m.group:null}flyToObject(t){const e=new w,n=this.findMeshForData(t);n?n.getWorldPosition(e):t.position&&e.set(...t.position);const i=t.visualRadius||t.eventHorizonSize||(t.radius?t.radius*.08:10),a=Math.max(12,i*4.2+10);let r;if(t.id==="sun"||e.lengthSq()<10)r=new w(0,50,160),this.navSystem.setScale(Ft.PLANET_ORBIT,n);else{const o=e.clone().normalize(),c=new w(-o.z,.4,o.x).normalize(),l=o.clone().multiplyScalar(.7).add(c.multiplyScalar(.7)).normalize();r=e.clone().add(l.multiplyScalar(a)),this.navSystem.setScale(Ft.PLANET_ORBIT,n)}this.travelSystem.flyTo(r,e,n,2.2)}switchScale(t){switch(this.navSystem.setScale(t),this.universeSystem.setScaleMode(t),this.ui.updateScaleUI(t),this.ui.updateBreadcrumb(t),this.selectionRing&&(t===Ft.UNIVERSE||t===Ft.MULTIVERSE||t===Ft.SOLAR_SYSTEM)&&(this.selectionRing.visible=!1),t){case Ft.MULTIVERSE:this.travelSystem.flyTo(new w(0,14e4,22e4),new w(0,12e4,18e4),null,2.8),this.ui.showToast("Multiverse Inflation Realm","THEORETICAL — Exploring hypothetical bubble universes spanning cosmic inflation space.");break;case"WORMHOLE":const e=this.universeSystem.wormholes[0];e&&(this.selectObject(e.data),this.flyToObject(e.data),this.ui.showToast("Hypothetical Wormhole","HYPOTHETICAL — Einstein-Rosen Bridge spacetime shortcut (Not observed)."));break;case"COSMIC_WEB":case Ft.UNIVERSE:this.travelSystem.flyTo(new w(0,45e3,75e3),new w(0,0,0),null,2.8);break;case Ft.GALAXIES:this.travelSystem.flyTo(new w(3e4,18e3,4e4),new w(0,-4500,-22e3),null,2.6),this.ui.showToast("Local Group Galaxies","Navigating Milky Way, Andromeda, Triangulum, and Magellanic Clouds.");break;case Ft.MILKY_WAY:case Ft.GALAXY:this.travelSystem.flyTo(new w(0,6500,11e3),new w(0,-4500,-22e3),null,2.5);break;case Ft.SOLAR_SYSTEM:this.travelSystem.flyTo(new w(0,380,720),new w(0,0,0),null,2.2);break;case Ft.PLANETS:case Ft.PLANET_ORBIT:this.selectPlanet("earth");break;case Ft.HABITABILITY:const n=Re.get("europa");n&&(this.selectObject(n.raw),this.flyToObject(n.raw),this.ui.showToast("Ocean Worlds","Europa: Subsurface liquid water ocean beneath icy crust."));break;case Ft.BLACK_HOLES:const i=Re.get("sagittarius-a");i&&(this.selectObject(i.raw),this.flyToObject(i.raw),this.ui.showToast("Black Hole Physics","Sagittarius A*: Relativistic accretion disk & gravitational lensing."));break;case Ft.SPACECRAFT:const a=Re.get("voyager-1");a&&(this.selectObject(a.raw),this.flyToObject(a.raw),this.ui.showToast("Interstellar Probe","Voyager 1: Most distant human-made object at >160 AU."));break;case Ft.LEARNING:this.selectPlanet("earth"),this.ui.showToast("Class 5–10 Learning","Explore Earth, take the Quick Quiz, and compare worlds!");break}}selectSun(){this.selectObject(Li.sun),this.flyToObject(Li.sun)}selectPlanet(t){const e=Re.get(t);e&&(this.selectObject(e.raw),this.flyToObject(e.raw))}toggleFlightMode(){const t=!this.spacecraft.flightModeActive;if(this.spacecraft.setFlightMode(t),t){this.controls.enabled=!1,this.hud.show();const e=new w(0,0,-1).applyQuaternion(this.camera.quaternion);this.spacecraft.group.position.copy(this.camera.position).addScaledVector(e,25),this.spacecraft.group.quaternion.copy(this.camera.quaternion),this.spacecraft.velocity.set(0,0,0)}else this.controls.enabled=!0,this.hud.hide();this.ui.toggleFlightBtn&&(this.ui.toggleFlightBtn.classList.toggle("active",t),this.ui.toggleFlightBtn.textContent=t?"🚀 Exit Spacecraft (F)":"🚀 Spacecraft Mode (F)")}update(){const t=this.simClock.update(),e=t.deltaSeconds;if(this.totalTime+=e,this.solarSystem.update(e,t.elapsedSimDays,this.totalTime),this.universeSystem.update(e,this.totalTime),this.starSystems.update(e,t.elapsedSimDays,this.totalTime),this.asteroidCatalog.update(e,t.elapsedSimDays),this.clusterSystem.update(e),this.spacecraftFleet.update(e),this.selectionRing&&this.selectionRing.visible&&this.selectedTargetObject){const n=new w;this.selectedTargetObject.getWorldPosition(n),this.selectionRing.position.copy(n),this.selectionRing.rotation.z+=.015*e*60}if(this.spacecraft.flightModeActive){this.spacecraft.update(e);const n=this.spacecraft.getTelemetry();this.hud.update(n,this.controls.target,this.camera)}else this.freeFlyController.update(e),this.controls.update(),this.navSystem.update();this.travelSystem.update(e),this.warpEffect.update(e),this.raycasterSystem.update(),this.ui.updateTimeDisplay(t),this.sceneManager.render()}}function Go(){if(!window.__app_initialized){window.__app_initialized=!0;try{let e=function(){requestAnimationFrame(e),t.update()};var s=e;console.log("🌌 Initializing Universe Explorer...");const t=new Xm;window.app=t,e(),console.log("✨ Universe Explorer initialized and animation loop running.")}catch(t){console.error("❌ Failed to initialize Universe Explorer:",t)}}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Go):Go();
