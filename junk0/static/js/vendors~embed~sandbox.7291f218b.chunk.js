(this.csbJsonP=this.csbJsonP||[]).push([["vendors~embed~sandbox"],{"../../node_modules/@babel/runtime/helpers/interopRequireDefault.js":function(e,r){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},"../../node_modules/assert/assert.js":function(e,r,t){"use strict";(function(r){var n=t("../../node_modules/object-assign/index.js");function o(e,r){if(e===r)return 0;for(var t=e.length,n=r.length,o=0,i=Math.min(t,n);o<i;++o)if(e[o]!==r[o]){t=e[o],n=r[o];break}return t<n?-1:n<t?1:0}function i(e){return r.Buffer&&"function"==typeof r.Buffer.isBuffer?r.Buffer.isBuffer(e):!(null==e||!e._isBuffer)}var s=t("../../node_modules/util/util.js"),a=Object.prototype.hasOwnProperty,u=Array.prototype.slice,c="foo"===function(){}.name;function p(e){return Object.prototype.toString.call(e)}function l(e){return!i(e)&&("function"==typeof r.ArrayBuffer&&("function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(e):!!e&&(e instanceof DataView||!!(e.buffer&&e.buffer instanceof ArrayBuffer))))}var f=e.exports=w,h=/\s*function\s+([^\(\s]*)\s*/;function v(e){if(s.isFunction(e)){if(c)return e.name;var r=e.toString().match(h);return r&&r[1]}}function m(e,r){return"string"==typeof e?e.length<r?e:e.slice(0,r):e}function d(e){if(c||!s.isFunction(e))return s.inspect(e);var r=v(e);return"[Function"+(r?": "+r:"")+"]"}function g(e,r,t,n,o){throw new f.AssertionError({message:t,actual:e,expected:r,operator:n,stackStartFunction:o})}function w(e,r){e||g(e,!0,r,"==",f.ok)}function y(e,r,t,n){if(e===r)return!0;if(i(e)&&i(r))return 0===o(e,r);if(s.isDate(e)&&s.isDate(r))return e.getTime()===r.getTime();if(s.isRegExp(e)&&s.isRegExp(r))return e.source===r.source&&e.global===r.global&&e.multiline===r.multiline&&e.lastIndex===r.lastIndex&&e.ignoreCase===r.ignoreCase;if(null!==e&&"object"==typeof e||null!==r&&"object"==typeof r){if(l(e)&&l(r)&&p(e)===p(r)&&!(e instanceof Float32Array||e instanceof Float64Array))return 0===o(new Uint8Array(e.buffer),new Uint8Array(r.buffer));if(i(e)!==i(r))return!1;var a=(n=n||{actual:[],expected:[]}).actual.indexOf(e);return-1!==a&&a===n.expected.indexOf(r)||(n.actual.push(e),n.expected.push(r),function(e,r,t,n){if(null==e||null==r)return!1;if(s.isPrimitive(e)||s.isPrimitive(r))return e===r;if(t&&Object.getPrototypeOf(e)!==Object.getPrototypeOf(r))return!1;var o=E(e),i=E(r);if(o&&!i||!o&&i)return!1;if(o)return e=u.call(e),r=u.call(r),y(e,r,t);var a,c,p=x(e),l=x(r);if(p.length!==l.length)return!1;for(p.sort(),l.sort(),c=p.length-1;c>=0;c--)if(p[c]!==l[c])return!1;for(c=p.length-1;c>=0;c--)if(a=p[c],!y(e[a],r[a],t,n))return!1;return!0}(e,r,t,n))}return t?e===r:e==r}function E(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function b(e,r){if(!e||!r)return!1;if("[object RegExp]"==Object.prototype.toString.call(r))return r.test(e);try{if(e instanceof r)return!0}catch(e){}return!Error.isPrototypeOf(r)&&!0===r.call({},e)}function j(e,r,t,n){var o;if("function"!=typeof r)throw new TypeError('"block" argument must be a function');"string"==typeof t&&(n=t,t=null),o=function(e){var r;try{e()}catch(e){r=e}return r}(r),n=(t&&t.name?" ("+t.name+").":".")+(n?" "+n:"."),e&&!o&&g(o,t,"Missing expected exception"+n);var i="string"==typeof n,a=!e&&o&&!t;if((!e&&s.isError(o)&&i&&b(o,t)||a)&&g(o,t,"Got unwanted exception"+n),e&&o&&t&&!b(o,t)||!e&&o)throw o}f.AssertionError=function(e){var r;this.name="AssertionError",this.actual=e.actual,this.expected=e.expected,this.operator=e.operator,e.message?(this.message=e.message,this.generatedMessage=!1):(this.message=m(d((r=this).actual),128)+" "+r.operator+" "+m(d(r.expected),128),this.generatedMessage=!0);var t=e.stackStartFunction||g;if(Error.captureStackTrace)Error.captureStackTrace(this,t);else{var n=new Error;if(n.stack){var o=n.stack,i=v(t),s=o.indexOf("\n"+i);if(s>=0){var a=o.indexOf("\n",s+1);o=o.substring(a+1)}this.stack=o}}},s.inherits(f.AssertionError,Error),f.fail=g,f.ok=w,f.equal=function(e,r,t){e!=r&&g(e,r,t,"==",f.equal)},f.notEqual=function(e,r,t){e==r&&g(e,r,t,"!=",f.notEqual)},f.deepEqual=function(e,r,t){y(e,r,!1)||g(e,r,t,"deepEqual",f.deepEqual)},f.deepStrictEqual=function(e,r,t){y(e,r,!0)||g(e,r,t,"deepStrictEqual",f.deepStrictEqual)},f.notDeepEqual=function(e,r,t){y(e,r,!1)&&g(e,r,t,"notDeepEqual",f.notDeepEqual)},f.notDeepStrictEqual=function e(r,t,n){y(r,t,!0)&&g(r,t,n,"notDeepStrictEqual",e)},f.strictEqual=function(e,r,t){e!==r&&g(e,r,t,"===",f.strictEqual)},f.notStrictEqual=function(e,r,t){e===r&&g(e,r,t,"!==",f.notStrictEqual)},f.throws=function(e,r,t){j(!0,e,r,t)},f.doesNotThrow=function(e,r,t){j(!1,e,r,t)},f.ifError=function(e){if(e)throw e},f.strict=n((function e(r,t){r||g(r,!0,t,"==",e)}),f,{equal:f.strictEqual,deepEqual:f.deepStrictEqual,notEqual:f.notStrictEqual,notDeepEqual:f.notDeepStrictEqual}),f.strict.strict=f.strict;var x=Object.keys||function(e){var r=[];for(var t in e)a.call(e,t)&&r.push(t);return r}}).call(this,t("../../node_modules/webpack/buildin/global.js"))},"../../node_modules/lz-string/libs/lz-string.js":function(e,r,t){var n,o=function(){var e=String.fromCharCode,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",n={};function o(e,r){if(!n[e]){n[e]={};for(var t=0;t<e.length;t++)n[e][e.charAt(t)]=t}return n[e][r]}var i={compressToBase64:function(e){if(null==e)return"";var t=i._compress(e,6,(function(e){return r.charAt(e)}));switch(t.length%4){default:case 0:return t;case 1:return t+"===";case 2:return t+"==";case 3:return t+"="}},decompressFromBase64:function(e){return null==e?"":""==e?null:i._decompress(e.length,32,(function(t){return o(r,e.charAt(t))}))},compressToUTF16:function(r){return null==r?"":i._compress(r,15,(function(r){return e(r+32)}))+" "},decompressFromUTF16:function(e){return null==e?"":""==e?null:i._decompress(e.length,16384,(function(r){return e.charCodeAt(r)-32}))},compressToUint8Array:function(e){for(var r=i.compress(e),t=new Uint8Array(2*r.length),n=0,o=r.length;n<o;n++){var s=r.charCodeAt(n);t[2*n]=s>>>8,t[2*n+1]=s%256}return t},decompressFromUint8Array:function(r){if(null==r)return i.decompress(r);for(var t=new Array(r.length/2),n=0,o=t.length;n<o;n++)t[n]=256*r[2*n]+r[2*n+1];var s=[];return t.forEach((function(r){s.push(e(r))})),i.decompress(s.join(""))},compressToEncodedURIComponent:function(e){return null==e?"":i._compress(e,6,(function(e){return t.charAt(e)}))},decompressFromEncodedURIComponent:function(e){return null==e?"":""==e?null:(e=e.replace(/ /g,"+"),i._decompress(e.length,32,(function(r){return o(t,e.charAt(r))})))},compress:function(r){return i._compress(r,16,(function(r){return e(r)}))},_compress:function(e,r,t){if(null==e)return"";var n,o,i,s={},a={},u="",c="",p="",l=2,f=3,h=2,v=[],m=0,d=0;for(i=0;i<e.length;i+=1)if(u=e.charAt(i),Object.prototype.hasOwnProperty.call(s,u)||(s[u]=f++,a[u]=!0),c=p+u,Object.prototype.hasOwnProperty.call(s,c))p=c;else{if(Object.prototype.hasOwnProperty.call(a,p)){if(p.charCodeAt(0)<256){for(n=0;n<h;n++)m<<=1,d==r-1?(d=0,v.push(t(m)),m=0):d++;for(o=p.charCodeAt(0),n=0;n<8;n++)m=m<<1|1&o,d==r-1?(d=0,v.push(t(m)),m=0):d++,o>>=1}else{for(o=1,n=0;n<h;n++)m=m<<1|o,d==r-1?(d=0,v.push(t(m)),m=0):d++,o=0;for(o=p.charCodeAt(0),n=0;n<16;n++)m=m<<1|1&o,d==r-1?(d=0,v.push(t(m)),m=0):d++,o>>=1}0==--l&&(l=Math.pow(2,h),h++),delete a[p]}else for(o=s[p],n=0;n<h;n++)m=m<<1|1&o,d==r-1?(d=0,v.push(t(m)),m=0):d++,o>>=1;0==--l&&(l=Math.pow(2,h),h++),s[c]=f++,p=String(u)}if(""!==p){if(Object.prototype.hasOwnProperty.call(a,p)){if(p.charCodeAt(0)<256){for(n=0;n<h;n++)m<<=1,d==r-1?(d=0,v.push(t(m)),m=0):d++;for(o=p.charCodeAt(0),n=0;n<8;n++)m=m<<1|1&o,d==r-1?(d=0,v.push(t(m)),m=0):d++,o>>=1}else{for(o=1,n=0;n<h;n++)m=m<<1|o,d==r-1?(d=0,v.push(t(m)),m=0):d++,o=0;for(o=p.charCodeAt(0),n=0;n<16;n++)m=m<<1|1&o,d==r-1?(d=0,v.push(t(m)),m=0):d++,o>>=1}0==--l&&(l=Math.pow(2,h),h++),delete a[p]}else for(o=s[p],n=0;n<h;n++)m=m<<1|1&o,d==r-1?(d=0,v.push(t(m)),m=0):d++,o>>=1;0==--l&&(l=Math.pow(2,h),h++)}for(o=2,n=0;n<h;n++)m=m<<1|1&o,d==r-1?(d=0,v.push(t(m)),m=0):d++,o>>=1;for(;;){if(m<<=1,d==r-1){v.push(t(m));break}d++}return v.join("")},decompress:function(e){return null==e?"":""==e?null:i._decompress(e.length,32768,(function(r){return e.charCodeAt(r)}))},_decompress:function(r,t,n){var o,i,s,a,u,c,p,l=[],f=4,h=4,v=3,m="",d=[],g={val:n(0),position:t,index:1};for(o=0;o<3;o+=1)l[o]=o;for(s=0,u=Math.pow(2,2),c=1;c!=u;)a=g.val&g.position,g.position>>=1,0==g.position&&(g.position=t,g.val=n(g.index++)),s|=(a>0?1:0)*c,c<<=1;switch(s){case 0:for(s=0,u=Math.pow(2,8),c=1;c!=u;)a=g.val&g.position,g.position>>=1,0==g.position&&(g.position=t,g.val=n(g.index++)),s|=(a>0?1:0)*c,c<<=1;p=e(s);break;case 1:for(s=0,u=Math.pow(2,16),c=1;c!=u;)a=g.val&g.position,g.position>>=1,0==g.position&&(g.position=t,g.val=n(g.index++)),s|=(a>0?1:0)*c,c<<=1;p=e(s);break;case 2:return""}for(l[3]=p,i=p,d.push(p);;){if(g.index>r)return"";for(s=0,u=Math.pow(2,v),c=1;c!=u;)a=g.val&g.position,g.position>>=1,0==g.position&&(g.position=t,g.val=n(g.index++)),s|=(a>0?1:0)*c,c<<=1;switch(p=s){case 0:for(s=0,u=Math.pow(2,8),c=1;c!=u;)a=g.val&g.position,g.position>>=1,0==g.position&&(g.position=t,g.val=n(g.index++)),s|=(a>0?1:0)*c,c<<=1;l[h++]=e(s),p=h-1,f--;break;case 1:for(s=0,u=Math.pow(2,16),c=1;c!=u;)a=g.val&g.position,g.position>>=1,0==g.position&&(g.position=t,g.val=n(g.index++)),s|=(a>0?1:0)*c,c<<=1;l[h++]=e(s),p=h-1,f--;break;case 2:return d.join("")}if(0==f&&(f=Math.pow(2,v),v++),l[p])m=l[p];else{if(p!==h)return null;m=i+i.charAt(0)}d.push(m),l[h++]=i+m.charAt(0),i=m,0==--f&&(f=Math.pow(2,v),v++)}}};return i}();void 0===(n=function(){return o}.call(r,t,r,e))||(e.exports=n)},"../../node_modules/uuid/dist/esm-browser/index.js":function(e,r,t){},"./node_modules/semver/semver.js":function(e,r,t){(function(t){var n;r=e.exports=K,n="object"==typeof t&&t.env&&t.env.NODE_DEBUG&&/\bsemver\b/i.test(t.env.NODE_DEBUG)?function(){var e=Array.prototype.slice.call(arguments,0);e.unshift("SEMVER"),console.log.apply(console,e)}:function(){},r.SEMVER_SPEC_VERSION="2.0.0";var o=Number.MAX_SAFE_INTEGER||9007199254740991,i=r.re=[],s=r.safeRe=[],a=r.src=[],u=0,c=[["\\s",1],["\\d",256],["[a-zA-Z0-9-]",250]];function p(e){for(var r=0;r<c.length;r++){var t=c[r][0],n=c[r][1];e=e.split(t+"*").join(t+"{0,"+n+"}").split(t+"+").join(t+"{1,"+n+"}")}return e}var l=u++;a[l]="0|[1-9]\\d*";var f=u++;a[f]="\\d+";var h=u++;a[h]="\\d*[a-zA-Z-][a-zA-Z0-9-]*";var v=u++;a[v]="("+a[l]+")\\.("+a[l]+")\\.("+a[l]+")";var m=u++;a[m]="("+a[f]+")\\.("+a[f]+")\\.("+a[f]+")";var d=u++;a[d]="(?:"+a[l]+"|"+a[h]+")";var g=u++;a[g]="(?:"+a[f]+"|"+a[h]+")";var w=u++;a[w]="(?:-("+a[d]+"(?:\\."+a[d]+")*))";var y=u++;a[y]="(?:-?("+a[g]+"(?:\\."+a[g]+")*))";var E=u++;a[E]="[a-zA-Z0-9-]+";var b=u++;a[b]="(?:\\+("+a[E]+"(?:\\."+a[E]+")*))";var j=u++,x="v?"+a[v]+a[w]+"?"+a[b]+"?";a[j]="^"+x+"$";var A="[v=\\s]*"+a[m]+a[y]+"?"+a[b]+"?",S=u++;a[S]="^"+A+"$";var q=u++;a[q]="((?:<|>)?=?)";var k=u++;a[k]=a[f]+"|x|X|\\*";var R=u++;a[R]=a[l]+"|x|X|\\*";var _=u++;a[_]="[v=\\s]*("+a[R]+")(?:\\.("+a[R]+")(?:\\.("+a[R]+")(?:"+a[w]+")?"+a[b]+"?)?)?";var O=u++;a[O]="[v=\\s]*("+a[k]+")(?:\\.("+a[k]+")(?:\\.("+a[k]+")(?:"+a[y]+")?"+a[b]+"?)?)?";var T=u++;a[T]="^"+a[q]+"\\s*"+a[_]+"$";var P=u++;a[P]="^"+a[q]+"\\s*"+a[O]+"$";var M=u++;a[M]="(?:^|[^\\d])(\\d{1,16})(?:\\.(\\d{1,16}))?(?:\\.(\\d{1,16}))?(?:$|[^\\d])";var C=u++;a[C]="(?:~>?)";var $=u++;a[$]="(\\s*)"+a[C]+"\\s+",i[$]=new RegExp(a[$],"g"),s[$]=new RegExp(p(a[$]),"g");var I=u++;a[I]="^"+a[C]+a[_]+"$";var D=u++;a[D]="^"+a[C]+a[O]+"$";var B=u++;a[B]="(?:\\^)";var F=u++;a[F]="(\\s*)"+a[B]+"\\s+",i[F]=new RegExp(a[F],"g"),s[F]=new RegExp(p(a[F]),"g");var V=u++;a[V]="^"+a[B]+a[_]+"$";var U=u++;a[U]="^"+a[B]+a[O]+"$";var N=u++;a[N]="^"+a[q]+"\\s*("+A+")$|^$";var z=u++;a[z]="^"+a[q]+"\\s*("+x+")$|^$";var G=u++;a[G]="(\\s*)"+a[q]+"\\s*("+A+"|"+a[_]+")",i[G]=new RegExp(a[G],"g"),s[G]=new RegExp(p(a[G]),"g");var X=u++;a[X]="^\\s*("+a[_]+")\\s+-\\s+("+a[_]+")\\s*$";var Z=u++;a[Z]="^\\s*("+a[O]+")\\s+-\\s+("+a[O]+")\\s*$";var J=u++;a[J]="(<|>)?=?\\s*\\*";for(var L=0;L<35;L++)n(L,a[L]),i[L]||(i[L]=new RegExp(a[L]),s[L]=new RegExp(p(a[L])));function H(e,r){if(r&&"object"==typeof r||(r={loose:!!r,includePrerelease:!1}),e instanceof K)return e;if("string"!=typeof e)return null;if(e.length>256)return null;if(!(r.loose?s[S]:s[j]).test(e))return null;try{return new K(e,r)}catch(e){return null}}function K(e,r){if(r&&"object"==typeof r||(r={loose:!!r,includePrerelease:!1}),e instanceof K){if(e.loose===r.loose)return e;e=e.version}else if("string"!=typeof e)throw new TypeError("Invalid Version: "+e);if(e.length>256)throw new TypeError("version is longer than 256 characters");if(!(this instanceof K))return new K(e,r);n("SemVer",e,r),this.options=r,this.loose=!!r.loose;var t=e.trim().match(r.loose?s[S]:s[j]);if(!t)throw new TypeError("Invalid Version: "+e);if(this.raw=e,this.major=+t[1],this.minor=+t[2],this.patch=+t[3],this.major>o||this.major<0)throw new TypeError("Invalid major version");if(this.minor>o||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>o||this.patch<0)throw new TypeError("Invalid patch version");t[4]?this.prerelease=t[4].split(".").map((function(e){if(/^[0-9]+$/.test(e)){var r=+e;if(r>=0&&r<o)return r}return e})):this.prerelease=[],this.build=t[5]?t[5].split("."):[],this.format()}r.parse=H,r.valid=function(e,r){var t=H(e,r);return t?t.version:null},r.clean=function(e,r){var t=H(e.trim().replace(/^[=v]+/,""),r);return t?t.version:null},r.SemVer=K,K.prototype.format=function(){return this.version=this.major+"."+this.minor+"."+this.patch,this.prerelease.length&&(this.version+="-"+this.prerelease.join(".")),this.version},K.prototype.toString=function(){return this.version},K.prototype.compare=function(e){return n("SemVer.compare",this.version,this.options,e),e instanceof K||(e=new K(e,this.options)),this.compareMain(e)||this.comparePre(e)},K.prototype.compareMain=function(e){return e instanceof K||(e=new K(e,this.options)),W(this.major,e.major)||W(this.minor,e.minor)||W(this.patch,e.patch)},K.prototype.comparePre=function(e){if(e instanceof K||(e=new K(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;var r=0;do{var t=this.prerelease[r],o=e.prerelease[r];if(n("prerelease compare",r,t,o),void 0===t&&void 0===o)return 0;if(void 0===o)return 1;if(void 0===t)return-1;if(t!==o)return W(t,o)}while(++r)},K.prototype.inc=function(e,r){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",r);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",r);break;case"prepatch":this.prerelease.length=0,this.inc("patch",r),this.inc("pre",r);break;case"prerelease":0===this.prerelease.length&&this.inc("patch",r),this.inc("pre",r);break;case"major":0===this.minor&&0===this.patch&&0!==this.prerelease.length||this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":0===this.patch&&0!==this.prerelease.length||this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":if(0===this.prerelease.length)this.prerelease=[0];else{for(var t=this.prerelease.length;--t>=0;)"number"==typeof this.prerelease[t]&&(this.prerelease[t]++,t=-2);-1===t&&this.prerelease.push(0)}r&&(this.prerelease[0]===r?isNaN(this.prerelease[1])&&(this.prerelease=[r,0]):this.prerelease=[r,0]);break;default:throw new Error("invalid increment argument: "+e)}return this.format(),this.raw=this.version,this},r.inc=function(e,r,t,n){"string"==typeof t&&(n=t,t=void 0);try{return new K(e,t).inc(r,n).version}catch(e){return null}},r.diff=function(e,r){if(te(e,r))return null;var t=H(e),n=H(r),o="";if(t.prerelease.length||n.prerelease.length){o="pre";var i="prerelease"}for(var s in t)if(("major"===s||"minor"===s||"patch"===s)&&t[s]!==n[s])return o+s;return i},r.compareIdentifiers=W;var Q=/^[0-9]+$/;function W(e,r){var t=Q.test(e),n=Q.test(r);return t&&n&&(e=+e,r=+r),e===r?0:t&&!n?-1:n&&!t?1:e<r?-1:1}function Y(e,r,t){return new K(e,t).compare(new K(r,t))}function ee(e,r,t){return Y(e,r,t)>0}function re(e,r,t){return Y(e,r,t)<0}function te(e,r,t){return 0===Y(e,r,t)}function ne(e,r,t){return 0!==Y(e,r,t)}function oe(e,r,t){return Y(e,r,t)>=0}function ie(e,r,t){return Y(e,r,t)<=0}function se(e,r,t,n){switch(r){case"===":return"object"==typeof e&&(e=e.version),"object"==typeof t&&(t=t.version),e===t;case"!==":return"object"==typeof e&&(e=e.version),"object"==typeof t&&(t=t.version),e!==t;case"":case"=":case"==":return te(e,t,n);case"!=":return ne(e,t,n);case">":return ee(e,t,n);case">=":return oe(e,t,n);case"<":return re(e,t,n);case"<=":return ie(e,t,n);default:throw new TypeError("Invalid operator: "+r)}}function ae(e,r){if(r&&"object"==typeof r||(r={loose:!!r,includePrerelease:!1}),e instanceof ae){if(e.loose===!!r.loose)return e;e=e.value}if(!(this instanceof ae))return new ae(e,r);e=e.trim().split(/\s+/).join(" "),n("comparator",e,r),this.options=r,this.loose=!!r.loose,this.parse(e),this.semver===ue?this.value="":this.value=this.operator+this.semver.version,n("comp",this)}r.rcompareIdentifiers=function(e,r){return W(r,e)},r.major=function(e,r){return new K(e,r).major},r.minor=function(e,r){return new K(e,r).minor},r.patch=function(e,r){return new K(e,r).patch},r.compare=Y,r.compareLoose=function(e,r){return Y(e,r,!0)},r.rcompare=function(e,r,t){return Y(r,e,t)},r.sort=function(e,t){return e.sort((function(e,n){return r.compare(e,n,t)}))},r.rsort=function(e,t){return e.sort((function(e,n){return r.rcompare(e,n,t)}))},r.gt=ee,r.lt=re,r.eq=te,r.neq=ne,r.gte=oe,r.lte=ie,r.cmp=se,r.Comparator=ae;var ue={};function ce(e,r){if(r&&"object"==typeof r||(r={loose:!!r,includePrerelease:!1}),e instanceof ce)return e.loose===!!r.loose&&e.includePrerelease===!!r.includePrerelease?e:new ce(e.raw,r);if(e instanceof ae)return new ce(e.value,r);if(!(this instanceof ce))return new ce(e,r);if(this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease,this.raw=e.trim().split(/\s+/).join(" "),this.set=this.raw.split("||").map((function(e){return this.parseRange(e.trim())}),this).filter((function(e){return e.length})),!this.set.length)throw new TypeError("Invalid SemVer Range: "+this.raw);this.format()}function pe(e){return!e||"x"===e.toLowerCase()||"*"===e}function le(e,r,t,n,o,i,s,a,u,c,p,l,f){return((r=pe(t)?"":pe(n)?">="+t+".0.0":pe(o)?">="+t+"."+n+".0":">="+r)+" "+(a=pe(u)?"":pe(c)?"<"+(+u+1)+".0.0":pe(p)?"<"+u+"."+(+c+1)+".0":l?"<="+u+"."+c+"."+p+"-"+l:"<="+a)).trim()}function fe(e,r,t){for(var o=0;o<e.length;o++)if(!e[o].test(r))return!1;if(r.prerelease.length&&!t.includePrerelease){for(o=0;o<e.length;o++)if(n(e[o].semver),e[o].semver!==ue&&e[o].semver.prerelease.length>0){var i=e[o].semver;if(i.major===r.major&&i.minor===r.minor&&i.patch===r.patch)return!0}return!1}return!0}function he(e,r,t){try{r=new ce(r,t)}catch(e){return!1}return r.test(e)}function ve(e,r,t,n){var o,i,s,a,u;switch(e=new K(e,n),r=new ce(r,n),t){case">":o=ee,i=ie,s=re,a=">",u=">=";break;case"<":o=re,i=oe,s=ee,a="<",u="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(he(e,r,n))return!1;for(var c=0;c<r.set.length;++c){var p=r.set[c],l=null,f=null;if(p.forEach((function(e){e.semver===ue&&(e=new ae(">=0.0.0")),l=l||e,f=f||e,o(e.semver,l.semver,n)?l=e:s(e.semver,f.semver,n)&&(f=e)})),l.operator===a||l.operator===u)return!1;if((!f.operator||f.operator===a)&&i(e,f.semver))return!1;if(f.operator===u&&s(e,f.semver))return!1}return!0}ae.prototype.parse=function(e){var r=this.options.loose?s[N]:s[z],t=e.match(r);if(!t)throw new TypeError("Invalid comparator: "+e);this.operator=t[1],"="===this.operator&&(this.operator=""),t[2]?this.semver=new K(t[2],this.options.loose):this.semver=ue},ae.prototype.toString=function(){return this.value},ae.prototype.test=function(e){return n("Comparator.test",e,this.options.loose),this.semver===ue||("string"==typeof e&&(e=new K(e,this.options)),se(e,this.operator,this.semver,this.options))},ae.prototype.intersects=function(e,r){if(!(e instanceof ae))throw new TypeError("a Comparator is required");var t;if(r&&"object"==typeof r||(r={loose:!!r,includePrerelease:!1}),""===this.operator)return t=new ce(e.value,r),he(this.value,t,r);if(""===e.operator)return t=new ce(this.value,r),he(e.semver,t,r);var n=!(">="!==this.operator&&">"!==this.operator||">="!==e.operator&&">"!==e.operator),o=!("<="!==this.operator&&"<"!==this.operator||"<="!==e.operator&&"<"!==e.operator),i=this.semver.version===e.semver.version,s=!(">="!==this.operator&&"<="!==this.operator||">="!==e.operator&&"<="!==e.operator),a=se(this.semver,"<",e.semver,r)&&(">="===this.operator||">"===this.operator)&&("<="===e.operator||"<"===e.operator),u=se(this.semver,">",e.semver,r)&&("<="===this.operator||"<"===this.operator)&&(">="===e.operator||">"===e.operator);return n||o||i&&s||a||u},r.Range=ce,ce.prototype.format=function(){return this.range=this.set.map((function(e){return e.join(" ").trim()})).join("||").trim(),this.range},ce.prototype.toString=function(){return this.range},ce.prototype.parseRange=function(e){var r=this.options.loose,t=r?s[Z]:s[X];e=e.replace(t,le),n("hyphen replace",e),e=e.replace(s[G],"$1$2$3"),n("comparator trim",e,s[G]),e=(e=e.replace(s[$],"$1~")).replace(s[F],"$1^");var o=r?s[N]:s[z],i=e.split(" ").map((function(e){return function(e,r){return n("comp",e,r),e=function(e,r){return e.trim().split(/\s+/).map((function(e){return function(e,r){n("caret",e,r);var t=r.loose?s[U]:s[V];return e.replace(t,(function(r,t,o,i,s){var a;return n("caret",e,r,t,o,i,s),pe(t)?a="":pe(o)?a=">="+t+".0.0 <"+(+t+1)+".0.0":pe(i)?a="0"===t?">="+t+"."+o+".0 <"+t+"."+(+o+1)+".0":">="+t+"."+o+".0 <"+(+t+1)+".0.0":s?(n("replaceCaret pr",s),a="0"===t?"0"===o?">="+t+"."+o+"."+i+"-"+s+" <"+t+"."+o+"."+(+i+1):">="+t+"."+o+"."+i+"-"+s+" <"+t+"."+(+o+1)+".0":">="+t+"."+o+"."+i+"-"+s+" <"+(+t+1)+".0.0"):(n("no pr"),a="0"===t?"0"===o?">="+t+"."+o+"."+i+" <"+t+"."+o+"."+(+i+1):">="+t+"."+o+"."+i+" <"+t+"."+(+o+1)+".0":">="+t+"."+o+"."+i+" <"+(+t+1)+".0.0"),n("caret return",a),a}))}(e,r)})).join(" ")}(e,r),n("caret",e),e=function(e,r){return e.trim().split(/\s+/).map((function(e){return function(e,r){var t=r.loose?s[D]:s[I];return e.replace(t,(function(r,t,o,i,s){var a;return n("tilde",e,r,t,o,i,s),pe(t)?a="":pe(o)?a=">="+t+".0.0 <"+(+t+1)+".0.0":pe(i)?a=">="+t+"."+o+".0 <"+t+"."+(+o+1)+".0":s?(n("replaceTilde pr",s),a=">="+t+"."+o+"."+i+"-"+s+" <"+t+"."+(+o+1)+".0"):a=">="+t+"."+o+"."+i+" <"+t+"."+(+o+1)+".0",n("tilde return",a),a}))}(e,r)})).join(" ")}(e,r),n("tildes",e),e=function(e,r){return n("replaceXRanges",e,r),e.split(/\s+/).map((function(e){return function(e,r){e=e.trim();var t=r.loose?s[P]:s[T];return e.replace(t,(function(r,t,o,i,s,a){n("xRange",e,r,t,o,i,s,a);var u=pe(o),c=u||pe(i),p=c||pe(s);return"="===t&&p&&(t=""),u?r=">"===t||"<"===t?"<0.0.0":"*":t&&p?(c&&(i=0),s=0,">"===t?(t=">=",c?(o=+o+1,i=0,s=0):(i=+i+1,s=0)):"<="===t&&(t="<",c?o=+o+1:i=+i+1),r=t+o+"."+i+"."+s):c?r=">="+o+".0.0 <"+(+o+1)+".0.0":p&&(r=">="+o+"."+i+".0 <"+o+"."+(+i+1)+".0"),n("xRange return",r),r}))}(e,r)})).join(" ")}(e,r),n("xrange",e),e=function(e,r){return n("replaceStars",e,r),e.trim().replace(s[J],"")}(e,r),n("stars",e),e}(e,this.options)}),this).join(" ").split(/\s+/);return this.options.loose&&(i=i.filter((function(e){return!!e.match(o)}))),i=i.map((function(e){return new ae(e,this.options)}),this)},ce.prototype.intersects=function(e,r){if(!(e instanceof ce))throw new TypeError("a Range is required");return this.set.some((function(t){return t.every((function(t){return e.set.some((function(e){return e.every((function(e){return t.intersects(e,r)}))}))}))}))},r.toComparators=function(e,r){return new ce(e,r).set.map((function(e){return e.map((function(e){return e.value})).join(" ").trim().split(" ")}))},ce.prototype.test=function(e){if(!e)return!1;"string"==typeof e&&(e=new K(e,this.options));for(var r=0;r<this.set.length;r++)if(fe(this.set[r],e,this.options))return!0;return!1},r.satisfies=he,r.maxSatisfying=function(e,r,t){var n=null,o=null;try{var i=new ce(r,t)}catch(e){return null}return e.forEach((function(e){i.test(e)&&(n&&-1!==o.compare(e)||(o=new K(n=e,t)))})),n},r.minSatisfying=function(e,r,t){var n=null,o=null;try{var i=new ce(r,t)}catch(e){return null}return e.forEach((function(e){i.test(e)&&(n&&1!==o.compare(e)||(o=new K(n=e,t)))})),n},r.minVersion=function(e,r){e=new ce(e,r);var t=new K("0.0.0");if(e.test(t))return t;if(t=new K("0.0.0-0"),e.test(t))return t;t=null;for(var n=0;n<e.set.length;++n){e.set[n].forEach((function(e){var r=new K(e.semver.version);switch(e.operator){case">":0===r.prerelease.length?r.patch++:r.prerelease.push(0),r.raw=r.format();case"":case">=":t&&!ee(t,r)||(t=r);break;case"<":case"<=":break;default:throw new Error("Unexpected operation: "+e.operator)}}))}if(t&&e.test(t))return t;return null},r.validRange=function(e,r){try{return new ce(e,r).range||"*"}catch(e){return null}},r.ltr=function(e,r,t){return ve(e,r,"<",t)},r.gtr=function(e,r,t){return ve(e,r,">",t)},r.outside=ve,r.prerelease=function(e,r){var t=H(e,r);return t&&t.prerelease.length?t.prerelease:null},r.intersects=function(e,r,t){return e=new ce(e,t),r=new ce(r,t),e.intersects(r)},r.coerce=function(e){if(e instanceof K)return e;if("string"!=typeof e)return null;var r=e.match(s[M]);if(null==r)return null;return H(r[1]+"."+(r[2]||"0")+"."+(r[3]||"0"))}}).call(this,t("../../node_modules/process/browser.js"))}}]);
//# sourceMappingURL=vendors~embed~sandbox.7291f218b.chunk.js.map