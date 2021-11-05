/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});
;
/*!
 * jQuery Once v2.2.3 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */
(function(e){"use strict";if(typeof exports==="object"&&typeof exports.nodeName!=="string"){e(require("jquery"))}else if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(t){"use strict";var r=function(e){e=e||"once";if(typeof e!=="string"){throw new TypeError("The jQuery Once id parameter must be a string")}return e};t.fn.once=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)!==true}).data(n,true)};t.fn.removeOnce=function(e){return this.findOnce(e).removeData("jquery-once-"+r(e))};t.fn.findOnce=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)===true})}});

/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function () {
  var settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');

  window.drupalSettings = {};

  if (settingsElement !== null) {
    window.drupalSettings = JSON.parse(settingsElement.textContent);
  }
})();;
window.drupalTranslations = {"strings":{"":{"Save":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c","An AJAX HTTP error occurred.":"\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 AJAX HTTP \u043e\u0448\u0438\u0431\u043a\u0430.","HTTP Result Code: !status":"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0439 \u043a\u043e\u0434 HTTP: !status","An AJAX HTTP request terminated abnormally.":"AJAX HTTP-\u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0435\u043e\u0436\u0438\u0434\u0430\u043d\u043d\u043e \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043d.","Debugging information follows.":"\u0421\u043b\u0435\u0434\u0443\u0435\u0442 \u043e\u0442\u043b\u0430\u0434\u043e\u0447\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f.","Path: !uri":"\u041f\u0443\u0442\u044c: !uri","StatusText: !statusText":"\u0422\u0435\u043a\u0441\u0442 \u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f: !statusText","ResponseText: !responseText":"\u0422\u0435\u043a\u0441\u0442 \u041e\u0442\u0432\u0435\u0442\u0430: !responseText","ReadyState: !readyState":"ReadyState: !readyState","CustomMessage: !customMessage":"\u0421\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435: !customMessage","Please wait...":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435...","The response failed verification so will not be processed.":"\u041e\u0442\u0432\u0435\u0442 \u043d\u0435 \u043f\u0440\u043e\u0448\u0435\u043b \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443 \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0435 \u0431\u0443\u0434\u0435\u0442.","The callback URL is not local and not trusted: !url":"URL-\u0430\u0434\u0440\u0435\u0441 \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0433\u043e \u0432\u044b\u0437\u043e\u0432\u0430 \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u0434\u043e\u0432\u0435\u0440\u0435\u043d\u043d\u044b\u043c: !url","Changed":"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435","Home":"\u0413\u043b\u0430\u0432\u043d\u0430\u044f","Next":"Next","Delete":"Delete","closed":"\u0437\u0430\u043a\u0440\u044b\u0442\u043e","Cancel":"\u041e\u0442\u043c\u0435\u043d\u0430","Disabled":"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u043e","Enabled":"\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u043e","File":"\u0424\u0430\u0439\u043b","Edit":"Edit","Date":"\u0414\u0430\u0442\u0430","Size":"\u0420\u0430\u0437\u043c\u0435\u0440","Link":"\u0421\u0441\u044b\u043b\u043a\u0430","Image":"Image","root":"\u043a\u043e\u0440\u0435\u043d\u044c","Name":"Name","Open":"\u041e\u0442\u043a\u0440\u044b\u0442\u044c","Sunday":"\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435","Monday":"\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a","Tuesday":"\u0432\u0442\u043e\u0440\u043d\u0438\u043a","Wednesday":"\u0441\u0440\u0435\u0434\u0430","Thursday":"\u0447\u0435\u0442\u0432\u0435\u0440\u0433","Friday":"\u043f\u044f\u0442\u043d\u0438\u0446\u0430","Saturday":"\u0441\u0443\u0431\u0431\u043e\u0442\u0430","Add":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c","Refresh":"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c","Upload":"\u0417\u0430\u043a\u0430\u0447\u0430\u0442\u044c","Continue":"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c","Create":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c","Done":"\u0413\u043e\u0442\u043e\u0432\u043e","OK":"OK","Width":"\u0428\u0438\u0440\u0438\u043d\u0430","Height":"\u0412\u044b\u0441\u043e\u0442\u0430","Prev":"\u041d\u0430\u0437\u0430\u0434","Mon":"\u043f\u043d","Tue":"\u0432\u0442","Wed":"\u0441\u0440","Thu":"\u0447\u0442","Fri":"\u043f\u0442","Sat":"\u0441\u0431","Sun":"\u0432\u0441","May":"\u041c\u0430\u0439","Close":"Close","Add group":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0433\u0440\u0443\u043f\u043f\u0443","Show":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c","1 item\u0003@count items":"@count \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0003@count \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u0003@count[2] \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432","Select all rows in this table":"\u041e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u0432\u0441\u0435 \u0441\u0442\u0440\u043e\u043a\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b","Deselect all rows in this table":"\u0421\u043d\u044f\u0442\u044c \u043e\u0442\u043c\u0435\u0442\u043a\u0443 \u0441\u043e \u0432\u0441\u0435\u0445 \u043a\u043e\u043b\u043e\u043d\u043e\u043a \u0442\u0430\u0431\u043b\u0438\u0446\u044b","Today":"\u0421\u0435\u0433\u043e\u0434\u043d\u044f","Jan":"\u044f\u043d\u0432","Feb":"\u0444\u0435\u0432","Mar":"\u043c\u0430\u0440","Apr":"\u0430\u043f\u0440","Jun":"\u0438\u044e\u043d","Jul":"\u0438\u044e\u043b","Aug":"\u0430\u0432\u0433","Sep":"\u0441\u0435\u043d","Oct":"\u043e\u043a\u0442","Nov":"\u043d\u043e\u044f","Dec":"\u0434\u0435\u043a","Extend":"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f","Su":"\u0432\u0441","Mo":"\u043f\u043d","Tu":"\u0432\u0442","We":"\u0441\u0440","Th":"\u0447\u0442","Fr":"\u043f\u0442","Sa":"\u0441\u0431","Not published":"\u041d\u0435 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043e","Loading...":"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...","Apply":"Apply","Select":"\u0412\u044b\u0431\u0440\u0430\u0442\u044c","Hide":"\u0421\u043a\u0440\u044b\u0442\u044c","Unlink":"\u041e\u0442\u0432\u044f\u0437\u0430\u0442\u044c","Resize":"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0440\u0430\u0437\u043c\u0435\u0440\u0430","Not promoted":"\u041d\u0435 \u0432\u044b\u0432\u0435\u0434\u0435\u043d\u043e \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e","mm\/dd\/yy":"mm\/dd\/yy","Quick edit":"\u0411\u044b\u0441\u0442\u0440\u043e\u0435 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435","button":"\u043a\u043d\u043e\u043f\u043a\u0430","Only files with the following extensions are allowed: %files-allowed.":"\u041f\u0440\u0438\u043a\u0440\u0435\u043f\u043b\u044f\u0442\u044c \u043c\u043e\u0436\u043d\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u0444\u0430\u0439\u043b\u044b \u0441 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f\u043c\u0438: %files-allowed.","Edit Link":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443","Remove group":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0433\u0440\u0443\u043f\u043f\u0443","Not in book":"\u041d\u0435 \u0432 \u043a\u043d\u0438\u0433\u0435","New book":"\u041d\u043e\u0432\u0430\u044f \u043a\u043d\u0438\u0433\u0430","By @name on @date":"@name, @date","By @name":"@name","Not in menu":"\u041d\u0435 \u0432 \u043c\u0435\u043d\u044e","Alias: @alias":"\u0421\u0438\u043d\u043e\u043d\u0438\u043c: @alias","No alias":"\u0421\u0438\u043d\u043e\u043d\u0438\u043c \u043d\u0435 \u0437\u0430\u0434\u0430\u043d","@label":"@label","New revision":"\u041d\u043e\u0432\u0430\u044f \u0440\u0435\u0434\u0430\u043a\u0446\u0438\u044f","Drag to re-order":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u043e\u0440\u044f\u0434\u043e\u043a \u043c\u043e\u0436\u043d\u043e, \u043f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0432 \u043f\u0443\u043d\u043a\u0442 \u043c\u044b\u0448\u043a\u043e\u0439.","Changes made in this table will not be saved until the form is submitted.":"\u0421\u0434\u0435\u043b\u0430\u043d\u043d\u044b\u0435 \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043d\u0435 \u0432\u0441\u0442\u0443\u043f\u044f\u0442 \u0432 \u0441\u0438\u043b\u0443, \u043f\u043e\u043a\u0430 \u0432\u044b \u043d\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u0435 \u0438\u0445.","1 byte\u0003@count bytes":"@count \u0431\u0430\u0439\u0442\u0003@count \u0431\u0430\u0439\u0442\u0430\u0003@count[2] \u0431\u0430\u0439\u0442","@size KB":"@size \u041a\u0411","@size MB":"@size \u041c\u0411","Discard changes":"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f","Show description":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435","New group":"\u041d\u043e\u0432\u0430\u044f \u0433\u0440\u0443\u043f\u043f\u0430","Saving":"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435","This permission is inherited from the authenticated user role.":"\u042d\u0442\u043e \u043f\u0440\u0430\u0432\u043e \u043d\u0430\u0441\u043b\u0435\u0434\u0443\u0435\u0442\u0441\u044f \u043e\u0442 \u0440\u043e\u043b\u0438 \u00ab\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u00bb.","No revision":"\u041d\u0435\u0442 \u0440\u0435\u0434\u0430\u043a\u0446\u0438\u0438","Requires a title":"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a","Not restricted":"\u0411\u0435\u0437 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439","(active tab)":"(\u0430\u043a\u0442\u0438\u0432\u043d\u0430\u044f \u0432\u043a\u043b\u0430\u0434\u043a\u0430)","Restricted to certain pages":"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043e \u0434\u043b\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u0445 \u0441\u0442\u0440\u0430\u043d\u0438\u0446","The block cannot be placed in this region.":"\u0411\u043b\u043e\u043a \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0449\u0451\u043d \u0432 \u0434\u0430\u043d\u043d\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438.","Hide summary":"\u0421\u043a\u0440\u044b\u0442\u044c \u043a\u0440\u0430\u0442\u043a\u043e\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435","Edit summary":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u0440\u0430\u0442\u043a\u043e\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435","Don\u0027t display post information":"\u041d\u0435 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438","Collapse":"\u0421\u0432\u0435\u0440\u043d\u0443\u0442\u044c","The selected file %filename cannot be uploaded. Only files with the following extensions are allowed: %extensions.":"\u0412\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b %filename \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0444\u0430\u0439\u043b\u043e\u0432 \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c\u0438 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f\u043c\u0438: %extensions.","Show row weights":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0435\u0441 \u0441\u0442\u0440\u043e\u043a","Hide row weights":"\u0421\u043a\u0440\u044b\u0442\u044c \u0432\u0435\u0441 \u0441\u0442\u0440\u043e\u043a","Apply (all displays)":"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c (\u0432\u0441\u0435 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f)","Apply (this display)":"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c (\u0434\u0430\u043d\u043d\u043e\u0435 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435)","Revert to default":"\u0412\u0435\u0440\u043d\u0443\u0442\u044c \u043a \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u043c \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e","Hide description":"\u0421\u043a\u0440\u044b\u0442\u044c \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435","You have unsaved changes":"\u0418\u043c\u0435\u044e\u0442\u0441\u044f \u043d\u0435\u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f","Needs to be updated":"\u041d\u0443\u0436\u0434\u0430\u0435\u0442\u0441\u044f \u0432 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438","Does not need to be updated":"\u041d\u0435 \u043d\u0443\u0436\u0434\u0430\u0435\u0442\u0441\u044f \u0432 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438","Show all columns":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u044b","Show table cells that were hidden to make the table fit within a small screen.":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u044f\u0447\u0435\u0439\u043a\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u044b\u043b\u0438 \u0441\u043a\u0440\u044b\u0442\u044b, \u0447\u0442\u043e\u0431\u044b \u0440\u0430\u0437\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u0432\u0441\u044e \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u043d\u0430 \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u043e\u043c \u044d\u043a\u0440\u0430\u043d\u0435.","List additional actions":"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439","Flag other translations as outdated":"\u041f\u043e\u043c\u0435\u0442\u0438\u0442\u044c \u0434\u0440\u0443\u0433\u0438\u0435 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u044b \u043a\u0430\u043a \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0435","Do not flag other translations as outdated":"\u041d\u0435 \u043f\u043e\u043c\u0435\u0447\u0430\u0439\u0442\u0435 \u0434\u0440\u0443\u0433\u0438\u0435 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u044b \u043a\u0430\u043a \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0435","opened":"\u041e\u0442\u043a\u0440\u044b\u0442\u043e","Horizontal orientation":"\u0413\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u0430\u044f \u043e\u0440\u0438\u0435\u043d\u0442\u0430\u0446\u0438\u044f","Vertical orientation":"\u0412\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u0430\u044f \u043e\u0440\u0438\u0435\u043d\u0442\u0430\u0446\u0438\u044f","Tray orientation changed to @orientation.":"\u041e\u0440\u0438\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u043f\u0430\u043d\u0435\u043b\u0438 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0430 \u043d\u0430 @orientation.","You have unsaved changes.":"\u0415\u0441\u0442\u044c \u043d\u0435\u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f.","No styles configured":"\u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0435 \u0441\u0442\u0438\u043b\u0438","@count styles configured":"\u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u043e @count \u0441\u0442\u0438\u043b\u044c\r\n\u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u043e @count \u0441\u0442\u0438\u043b\u044f\r\n\u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u043e @count[2] \u0441\u0442\u0438\u043b\u0435\u0439","@action @title configuration options":"@action @title \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438","Tabbing is no longer constrained by the Contextual module.":"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0432\u043a\u043b\u0430\u0434\u043e\u043a \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0435 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043e \u043c\u043e\u0434\u0443\u043b\u0435\u043c Context.","Tabbing is constrained to a set of @contextualsCount and the edit mode toggle.":"\u0412\u043a\u043b\u0430\u0434\u043a\u0430 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0430 \u043d\u0430\u0431\u043e\u0440\u043e\u043c @contextualsCount \u0438 \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0430\u0442\u0435\u043b\u0435\u043c \u0440\u0435\u0436\u0438\u043c\u0430 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f.","Press the esc key to exit.":"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 ESC \u0434\u043b\u044f \u0432\u044b\u0445\u043e\u0434\u0430.","@count contextual link\u0003@count contextual links":"@count \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u043d\u0430\u044f \u0441\u0441\u044b\u043b\u043a\u0430\u0003@count \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u043d\u044b\u0445 \u0441\u0441\u044b\u043b\u043a\u0438\u0003@count[2] \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u043d\u044b\u0445 \u0441\u0441\u044b\u043b\u043e\u043a","Based on the text editor configuration, these tags have automatically been added: \u003Cstrong\u003E@tag-list\u003C\/strong\u003E.":"\u041d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0433\u043e \u0440\u0435\u0434\u0430\u043a\u0442\u043e\u0440\u0430, \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0442\u0435\u0433\u0438 \u0431\u044b\u043b\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u003Cstrong\u003E@tag-list\u003C\/strong\u003E.","!tour_item of !total":"!tour_item \u0438\u0437 !total","End tour":"\u041a\u043e\u043d\u0435\u0446 \u0442\u0443\u0440\u0430","Uploads disabled":"\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u044b","Uploads enabled, max size: @size @dimensions":"\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u044b, \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0440\u0430\u0437\u043c\u0435\u0440: @size @dimensions","Discard changes?":"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f?","The toolbar cannot be set to a horizontal orientation when it is locked.":"\u041f\u0430\u043d\u0435\u043b\u044c \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0430 \u0432 \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043a\u043e\u0433\u0434\u0430 \u043e\u043d\u0430 \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d\u0430.","Could not load the form for \u003Cq\u003E@field-label\u003C\/q\u003E, either due to a website problem or a network connection problem.\u003Cbr\u003EPlease try again.":"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u043e\u0440\u043c\u0443 \u0434\u043b\u044f \u003Cq\u003E@field-label\u003C\/q\u003E \u0438\u0437-\u0437\u0430 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0441 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u043e\u043c \u0438\u043b\u0438 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0441 \u0441\u0435\u0442\u0435\u0432\u044b\u043c \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u043c. \u003Cbr\u003E\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437.","Your changes to \u003Cq\u003E@entity-title\u003C\/q\u003E could not be saved, either due to a website problem or a network connection problem.\u003Cbr\u003EPlease try again.":"\u041d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0432\u0430\u0448\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432 \u003Cq\u003E@entity-title\u003C\/q\u003E \u0438\u0437-\u0437\u0430 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0441 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u043e\u043c \u0438\u043b\u0438 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0441 \u0441\u0435\u0442\u0435\u0432\u044b\u043c \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u043c. \u003Cbr\u003E\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437.","Hide group names":"\u0421\u043a\u0440\u044b\u0442\u044c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f \u0433\u0440\u0443\u043f\u043f","Show group names":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f \u0433\u0440\u0443\u043f\u043f","@groupName button group in position @position of @positionCount in row @row of @rowCount.":"\u0413\u0440\u0443\u043f\u043f\u0430 \u043a\u043d\u043e\u043f\u043e\u043a @groupName \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u043d\u0430 \u043f\u043e\u0437\u0438\u0446\u0438\u0438 @position \u0438\u0437 @positionCount \u0432 \u0441\u0442\u0440\u043e\u043a\u0435 @row \u0438\u0437 @rowCount.","Press the down arrow key to create a new row.":"\u0414\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043d\u043e\u0432\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043b\u0430\u0432\u0438\u0448\u0443 \u0022\u0421\u0442\u0440\u0435\u043b\u043a\u0430 \u0432\u043d\u0438\u0437\u0022.","@name @type.":"@name @type.","Press the down arrow key to activate.":"\u0414\u043b\u044f \u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043b\u0430\u0432\u0438\u0448\u0443 \u0022\u0421\u0442\u0440\u0435\u043b\u043a\u0430 \u0432\u043d\u0438\u0437\u0022.","@name @type in position @position of @positionCount in @groupName button group in row @row of @rowCount.":"@type @name \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u043d\u0430 \u043f\u043e\u0437\u0438\u0446\u0438\u0438 @position \u0438\u0437 @positionCount \u0432 \u0433\u0440\u0443\u043f\u043f\u0435 \u043a\u043d\u043e\u043f\u043e\u043a @groupName \u0432 \u0441\u0442\u0440\u043e\u043a\u0435 @row \u0438\u0437 @rowCount.","Press the down arrow key to create a new button group in a new row.":"\u0414\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043d\u043e\u0432\u043e\u0439 \u0433\u0440\u0443\u043f\u043f\u044b \u043a\u043d\u043e\u043f\u043e\u043a \u043d\u0430 \u043d\u043e\u0432\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0435 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043b\u0430\u0432\u0438\u0448\u0443 \u0022\u0421\u0442\u0440\u0435\u043b\u043a\u0430 \u0432\u043d\u0438\u0437\u0022.","This is the last group. Move the button forward to create a new group.":"\u042d\u0442\u043e \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044f\u044f \u0433\u0440\u0443\u043f\u043f\u0430. \u0414\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043d\u043e\u0432\u043e\u0439 \u0433\u0440\u0443\u043f\u043f\u044b \u043f\u0435\u0440\u0435\u043c\u0435\u0441\u0442\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u0432\u043f\u0435\u0440\u0451\u0434.","The \u0022@name\u0022 button is currently enabled.":"\u041a\u043d\u043e\u043f\u043a\u0430 \u0022@name\u0022 \u0432 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0430.","Use the keyboard arrow keys to change the position of this button.":"\u0414\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u044d\u0442\u043e\u0439 \u043a\u043d\u043e\u043f\u043a\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0438 \u0441\u043e \u0441\u0442\u0440\u0435\u043b\u043a\u0430\u043c\u0438 \u043d\u0430 \u043a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0435.","Press the up arrow key on the top row to disable the button.":"\u0427\u0442\u043e\u0431\u044b \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0443, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043b\u0430\u0432\u0438\u0448\u0443 \u0022\u0421\u0442\u0440\u0435\u043b\u043a\u0430 \u0432\u0432\u0435\u0440\u0445\u0022 \u043d\u0430 \u0432\u0435\u0440\u0445\u043d\u0435\u0439 \u0441\u0442\u0440\u043e\u043a\u0435.","The \u0022@name\u0022 button is currently disabled.":"\u041a\u043d\u043e\u043f\u043a\u0430 \u0022@name\u0022 \u0432 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0430.","Use the down arrow key to move this button into the active toolbar.":"\u0427\u0442\u043e\u0431\u044b \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0443, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043b\u0430\u0432\u0438\u0448\u0443 \u0022\u0421\u0442\u0440\u0435\u043b\u043a\u0430 \u0432\u043d\u0438\u0437\u0022 \u043d\u0430 \u043d\u0430 \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0439 \u043f\u0430\u043d\u0435\u043b\u0438 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432.","This @name is currently enabled.":"@name \u0432 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u043e.","Use the keyboard arrow keys to change the position of this separator.":"\u0414\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043a\u043b\u0430\u0432\u0438\u0448\u0438 \u0441\u043e \u0441\u0442\u0440\u0435\u043b\u043a\u0430\u043c\u0438 \u043d\u0430 \u043a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0435.","Separators are used to visually split individual buttons.":"\u0420\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0432\u0438\u0437\u0443\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u043a\u043d\u043e\u043f\u043e\u043a.","This @name is currently disabled.":"@name \u0432 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d\u043e.","Use the down arrow key to move this separator into the active toolbar.":"\u0427\u0442\u043e\u0431\u044b \u043f\u0435\u0440\u0435\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044c \u0432 \u0430\u043a\u0442\u0438\u0432\u043d\u0443\u044e \u043f\u0430\u043d\u0435\u043b\u044c, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043a\u043b\u0430\u0432\u0438\u0448\u0443 \u0022\u0421\u0442\u0440\u0435\u043b\u043a\u0430 \u0432\u043d\u0438\u0437\u0022","You may add multiple separators to each button group.":"\u041a \u043a\u0430\u0436\u0434\u043e\u0439 \u0433\u0440\u0443\u043f\u043f\u0435 \u043a\u043d\u043e\u043f\u043e\u043a \u043c\u043e\u0436\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u0435\u0439.","Please provide a name for the button group.":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u0433\u0440\u0443\u043f\u043f\u044b \u043a\u043d\u043e\u043f\u043e\u043a.","Button group name":"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0433\u0440\u0443\u043f\u043f\u044b \u043a\u043d\u043e\u043f\u043e\u043a","Editing the name of the new button group in a dialog.":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f \u043d\u043e\u0432\u043e\u0439 \u0433\u0440\u0443\u043f\u043f\u044b \u043a\u043d\u043e\u043f\u043e\u043a \u0432 \u0434\u0438\u0430\u043b\u043e\u0433\u0435.","Editing the name of the \u0022@groupName\u0022 button group in a dialog.":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f \u0433\u0440\u0443\u043f\u043f\u044b \u043a\u043d\u043e\u043f\u043e\u043a \u0022@groupName\u0022 \u0432 \u0434\u0438\u0430\u043b\u043e\u0433\u0435.","Place a button to create a new button group.":"\u0427\u0442\u043e\u0431\u044b \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0433\u0440\u0443\u043f\u043f\u0443 \u043a\u043d\u043e\u043f\u043e\u043a \u0440\u0430\u0437\u043c\u0435\u0441\u0442\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443.","Add a CKEditor button group to the end of this row.":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0433\u0440\u0443\u043f\u043f\u0443 \u043a\u043d\u043e\u043f\u043e\u043a CKEditor \u0432 \u043a\u043e\u043d\u0435\u0446 \u0434\u0430\u043d\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438.","Changing the text format to %text_format will permanently remove content that is not allowed in that text format.\u003Cbr\u003E\u003Cbr\u003ESave your changes before switching the text format to avoid losing data.":"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0433\u043e \u0444\u043e\u0440\u043c\u0430\u0442\u0430 \u043d\u0430 %text_format \u0431\u0435\u0437\u0432\u043e\u0437\u0432\u0440\u0430\u0442\u043d\u043e \u0443\u0434\u0430\u043b\u0438\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435, \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0435 \u0432 \u043d\u043e\u0432\u043e\u043c \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435.\u003Cbr\u003E\u003Cbr\u003E\u0414\u043b\u044f \u043f\u0440\u0435\u0434\u043e\u0442\u0432\u0440\u0430\u0449\u0435\u043d\u0438\u044f \u043f\u043e\u0442\u0435\u0440\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043f\u0435\u0440\u0435\u0434 \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0430.","Change text format?":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0444\u043e\u0440\u043c\u0430\u0442 \u0442\u0435\u043a\u0441\u0442\u0430?","Rich Text Editor, !label field":"\u0420\u0435\u0434\u0430\u043a\u0442\u043e\u0440 \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0442\u0435\u043a\u0441\u0442\u0430, \u043f\u043e\u043b\u0435 !label","Tray \u0022@tray\u0022 @action.":"\u041f\u0430\u043d\u0435\u043b\u044c \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0022@tray\u0022 @action.","Tray @action.":"\u041f\u0430\u043d\u0435\u043b\u044c \u0437\u0430\u0434\u0430\u0447 @action.","Hide lower priority columns":"\u0421\u043a\u0440\u044b\u0442\u044c \u0441\u0442\u043e\u043b\u0431\u0446\u044b \u0441 \u043d\u0438\u0437\u043a\u0438\u043c \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u043e\u043c","!modules modules are available in the modified list.":"\u041c\u043e\u0434\u0443\u043b\u0438 !modules \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0432 \u043c\u043e\u0434\u0438\u0444\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u043c \u0441\u043f\u0438\u0441\u043a\u0435.","Network problem!":"\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0441 \u0441\u0435\u0442\u044c\u044e!","Authored on @date":"\u0421\u043e\u0437\u0434\u0430\u043d\u043e \u0432 @date","1 block is available in the modified list.\u0003@count blocks are available in the modified list.":"\u0412 \u0438\u0437\u043c\u0435\u043d\u0451\u043d\u043d\u043e\u043c \u0441\u043f\u0438\u0441\u043a\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d 1 \u0431\u043b\u043e\u043a.\u0003\u0412 \u0438\u0437\u043c\u0435\u043d\u0451\u043d\u043d\u043e\u043c \u0441\u043f\u0438\u0441\u043a\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e @count \u0431\u043b\u043e\u043a\u0430.\u0003\u0412 \u0438\u0437\u043c\u0435\u043d\u0451\u043d\u043d\u043e\u043c \u0441\u043f\u0438\u0441\u043a\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e @count \u0431\u043b\u043e\u043a\u043e\u0432.","Show media item weights":"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0432\u0435\u0441 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043c\u0435\u0434\u0438\u0430","Hide media item weights":"\u0421\u043a\u0440\u044b\u0442\u044c \u0432\u0435\u0441 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043c\u0435\u0434\u0438\u0430","New folder":"\u041d\u043e\u0432\u0430\u044f \u043f\u0430\u043f\u043a\u0430","Folder name":"\u0418\u043c\u044f \u043f\u0430\u043f\u043a\u0438","Add file":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u0430\u0439\u043b","Create a copy":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u043e\u043f\u0438\u044e","Please select a file.":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043b.","Open File Browser":"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0444\u0430\u0439\u043b\u043e\u0432","Use the selected file.":"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b.","%path is a predefined path and can not be modified.":"%path \u043f\u0440\u0435\u0434\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0439 \u043f\u0443\u0442\u044c \u0438 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d.","%filename is not allowed.":"%filename \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f.","%filename contains invalid characters. Use only alphanumeric characters for better portability.":"%filename \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0431\u0443\u043a\u0432\u0435\u043d\u043d\u043e-\u0446\u0438\u0444\u0440\u043e\u0432\u044b\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b \u0434\u043b\u044f \u043b\u0443\u0447\u0448\u0435\u0439 \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u0438\u043c\u043e\u0441\u0442\u0438.","Image dimensions must be smaller than %dimensions pixels.":"\u0420\u0430\u0437\u043c\u0435\u0440\u044b \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043c\u0435\u043d\u044c\u0448\u0435 \u0447\u0435\u043c %dimensions \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439.","%name is not an image.":"%name \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043c.","Delete !filename?\u0003Delete the selected @count items?":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c !filename?\u0003\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0435 @count \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432?","%filename already exists.":"%filename \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442.","%filename is %filesize exceeding the maximum file size of %maxsize.":"%filename \u0440\u0430\u0437\u043c\u0435\u0440\u043e\u043c %filesize \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0435\u0442 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0440\u0430\u0437\u043c\u0435\u0440 \u0444\u0430\u0439\u043b\u0430 %maxsize.","Invalid response received from the server.":"\u041e\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442.","Insert images using Imce File Manager":"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0444\u0430\u0439\u043b\u043e\u0432 Imce","Insert file links using Imce File Manager":"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0444\u0430\u0439\u043b\u043e\u0432 Imce","Rename":"\u041f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u0442\u044c","Insert this token into your form":"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u044d\u0442\u043e\u0442 \u0442\u043e\u043a\u0435\u043d \u0432 \u0432\u0430\u0448\u0443 \u0444\u043e\u0440\u043c\u0443","First click a text field to insert your tokens into.":"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u043a\u043b\u0438\u043a\u043d\u0438\u0442\u0435 \u0432 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0435 \u043f\u043e\u043b\u0435, \u0447\u0442\u043e\u0431\u044b \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0442\u043e\u043a\u0435\u043d\u044b.","Automatic alias":"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0441\u0438\u043d\u043e\u043d\u0438\u043c"},"Long month name":{"January":"\u044f\u043d\u0432\u0430\u0440\u044f","February":"\u0444\u0435\u0432\u0440\u0430\u043b\u044f","March":"\u043c\u0430\u0440\u0442\u0430","April":"\u0430\u043f\u0440\u0435\u043b\u044f","May":"\u043c\u0430\u044f","June":"\u0438\u044e\u043d\u044f","July":"\u0438\u044e\u043b\u044f","August":"\u0430\u0432\u0433\u0443\u0441\u0442\u0430","September":"\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f","October":"\u043e\u043a\u0442\u044f\u0431\u0440\u044f","November":"\u043d\u043e\u044f\u0431\u0440\u044f","December":"\u0434\u0435\u043a\u0430\u0431\u0440\u044f"}},"pluralFormula":{"1":0,"2":1,"3":1,"4":1,"21":0,"22":1,"23":1,"24":1,"31":0,"32":1,"33":1,"34":1,"41":0,"42":1,"43":1,"44":1,"51":0,"52":1,"53":1,"54":1,"61":0,"62":1,"63":1,"64":1,"71":0,"72":1,"73":1,"74":1,"81":0,"82":1,"83":1,"84":1,"91":0,"92":1,"93":1,"94":1,"101":0,"102":1,"103":1,"104":1,"121":0,"122":1,"123":1,"124":1,"131":0,"132":1,"133":1,"134":1,"141":0,"142":1,"143":1,"144":1,"151":0,"152":1,"153":1,"154":1,"161":0,"162":1,"163":1,"164":1,"171":0,"172":1,"173":1,"174":1,"181":0,"182":1,"183":1,"184":1,"191":0,"192":1,"193":1,"194":1,"default":2}};;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

window.Drupal = { behaviors: {}, locale: {} };

(function (Drupal, drupalSettings, drupalTranslations, console, Proxy, Reflect) {
  Drupal.throwError = function (error) {
    setTimeout(function () {
      throw error;
    }, 0);
  };

  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    var behaviors = Drupal.behaviors;

    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].attach === 'function') {
        try {
          behaviors[i].attach(context, settings);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || drupalSettings;
    trigger = trigger || 'unload';
    var behaviors = Drupal.behaviors;

    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].detach === 'function') {
        try {
          behaviors[i].detach(context, settings, trigger);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.checkPlain = function (str) {
    str = str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    return str;
  };

  Drupal.formatString = function (str, args) {
    var processedArgs = {};

    Object.keys(args || {}).forEach(function (key) {
      switch (key.charAt(0)) {
        case '@':
          processedArgs[key] = Drupal.checkPlain(args[key]);
          break;

        case '!':
          processedArgs[key] = args[key];
          break;

        default:
          processedArgs[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
    });

    return Drupal.stringReplace(str, processedArgs, null);
  };

  Drupal.stringReplace = function (str, args, keys) {
    if (str.length === 0) {
      return str;
    }

    if (!Array.isArray(keys)) {
      keys = Object.keys(args || {});

      keys.sort(function (a, b) {
        return a.length - b.length;
      });
    }

    if (keys.length === 0) {
      return str;
    }

    var key = keys.pop();
    var fragments = str.split(key);

    if (keys.length) {
      for (var i = 0; i < fragments.length; i++) {
        fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
      }
    }

    return fragments.join(args[key]);
  };

  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) {
      str = drupalTranslations.strings[options.context][str];
    }

    if (args) {
      str = Drupal.formatString(str, args);
    }
    return str;
  };

  Drupal.url = function (path) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
  };

  Drupal.url.toAbsolute = function (url) {
    var urlParsingNode = document.createElement('a');

    try {
      url = decodeURIComponent(url);
    } catch (e) {}

    urlParsingNode.setAttribute('href', url);

    return urlParsingNode.cloneNode(false).href;
  };

  Drupal.url.isLocal = function (url) {
    var absoluteUrl = Drupal.url.toAbsolute(url);
    var protocol = window.location.protocol;

    if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
      protocol = 'https:';
    }
    var baseUrl = protocol + '//' + window.location.host + drupalSettings.path.baseUrl.slice(0, -1);

    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    } catch (e) {}
    try {
      baseUrl = decodeURIComponent(baseUrl);
    } catch (e) {}

    return absoluteUrl === baseUrl || absoluteUrl.indexOf(baseUrl + '/') === 0;
  };

  Drupal.formatPlural = function (count, singular, plural, args, options) {
    args = args || {};
    args['@count'] = count;

    var pluralDelimiter = drupalSettings.pluralDelimiter;
    var translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
    var index = 0;

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) {
      index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula.default;
    } else if (args['@count'] !== 1) {
      index = 1;
    }

    return translations[index];
  };

  Drupal.encodePath = function (item) {
    return window.encodeURIComponent(item).replace(/%2F/g, '/');
  };

  Drupal.deprecationError = function (_ref) {
    var message = _ref.message;

    if (drupalSettings.suppressDeprecationErrors === false && typeof console !== 'undefined' && console.warn) {
      console.warn('[Deprecation] ' + message);
    }
  };

  Drupal.deprecatedProperty = function (_ref2) {
    var target = _ref2.target,
        deprecatedProperty = _ref2.deprecatedProperty,
        message = _ref2.message;

    if (!Proxy || !Reflect) {
      return target;
    }

    return new Proxy(target, {
      get: function get(target, key) {
        for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          rest[_key - 2] = arguments[_key];
        }

        if (key === deprecatedProperty) {
          Drupal.deprecationError({ message: message });
        }
        return Reflect.get.apply(Reflect, [target, key].concat(rest));
      }
    });
  };

  Drupal.theme = function (func) {
    if (func in Drupal.theme) {
      var _Drupal$theme;

      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return (_Drupal$theme = Drupal.theme)[func].apply(_Drupal$theme, args);
    }
  };

  Drupal.theme.placeholder = function (str) {
    return '<em class="placeholder">' + Drupal.checkPlain(str) + '</em>';
  };
})(Drupal, window.drupalSettings, window.drupalTranslations, window.console, window.Proxy, window.Reflect);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (window.jQuery) {
  jQuery.noConflict();
}

document.documentElement.className += ' js';

(function (Drupal, drupalSettings) {
  var domReady = function domReady(callback) {
    if (document.readyState !== 'loading') {
      callback();
    } else {
      var listener = function listener() {
        callback();
        document.removeEventListener('DOMContentLoaded', listener);
      };
      document.addEventListener('DOMContentLoaded', listener);
    }
  };

  domReady(function () {
    Drupal.attachBehaviors(document, drupalSettings);
  });
})(Drupal, window.drupalSettings);;
/**
 * @file
 * Cherries by @toddmotto, @cferdinandi, @adamfschwartz, @daniellmb.
 *
 * @todo: Use Cash or Underscore when jQuery is dropped by supported plugins.
 */

/* global define, module */
(function (root, factory) {

  'use strict';

  // Inspired by https://github.com/addyosmani/memoize.js/blob/master/memoize.js
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  }
  else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but only CommonJS-like
    // environments that support module.exports, like Node.
    module.exports = factory();
  }
  else {
    // Browser globals (root is window).
    root.dBlazy = factory();
  }
})(this, function () {

  'use strict';

  /**
   * Object for public APIs where dBlazy stands for drupalBlazy.
   *
   * @namespace
   */
  var dBlazy = {};

  // See https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  }

  /**
   * Check if the given element matches the selector.
   *
   * @name dBlazy.matches
   *
   * @param {Element} elem
   *   The current element.
   * @param {String} selector
   *   Selector to match against (class, ID, data attribute, or tag).
   *
   * @return {Boolean}
   *   Returns true if found, else false.
   *
   * @see http://caniuse.com/#feat=matchesselector
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
   */
  dBlazy.matches = function (elem, selector) {
    // Check if matches, excluding HTMLDocument, see ::closest().
    if (elem.matches(selector)) {
      return true;
    }

    return false;
  };

  /**
   * Returns device pixel ratio.
   *
   * @return {Integer}
   *   Returns the device pixel ratio.
   */
  dBlazy.pixelRatio = function () {
    return window.devicePixelRatio || 1;
  };

  /**
   * Returns cross-browser window width.
   *
   * @return {Integer}
   *   Returns the window width.
   */
  dBlazy.windowWidth = function () {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || window.screen.width;
  };

  /**
   * Returns cross-browser window width and height.
   *
   * @return {Object}
   *   Returns the window width and height.
   */
  dBlazy.windowSize = function () {
    return {
      width: this.windowWidth,
      height: window.innerHeight
    };
  };

  /**
   * Returns data from the current active window.
   *
   * When being resized, the browser gave no data about pixel ratio from desktop
   * to mobile, not vice versa. Unless delayed for 4s+, not less, which is of
   * course unacceptable.
   *
   * @name dBlazy.activeWidth
   *
   * @param {Object} dataset
   *   The dataset object must be keyed by window width.
   * @param {Boolean} mobileFirst
   *   Whether to use min-width, or max-width.
   *
   * @return {mixed}
   *   Returns data from the current active window.
   */
  dBlazy.activeWidth = function (dataset, mobileFirst) {
    var me = this;
    var keys = Object.keys(dataset);
    var xs = keys[0];
    var xl = keys[keys.length - 1];
    var pr = (me.windowWidth() * me.pixelRatio());
    var ww = mobileFirst ? me.windowWidth() : pr;
    var mw = function (w) {
      // The picture wants <= (approximate), non-picture wants >=, wtf.
      return mobileFirst ? parseInt(w) <= ww : parseInt(w) >= ww;
    };

    var data = keys.filter(mw).map(function (v) {
      return dataset[v];
    })[mobileFirst ? 'pop' : 'shift']();

    return typeof data === 'undefined' ? dataset[ww >= xl ? xl : xs] : data;
  };

  /**
   * Check if the HTML tag matches a specified string.
   *
   * @name dBlazy.equal
   *
   * @param {Element} el
   *   The element to compare.
   * @param {String} str
   *   HTML tag to match against.
   *
   * @return {Boolean}
   *   Returns true if matches, else false.
   */
  dBlazy.equal = function (el, str) {
    return el !== null && el.nodeName.toLowerCase() === str;
  };

  /**
   * Get the closest matching element up the DOM tree.
   *
   * Inspired by Chris Ferdinandi, http://github.com/cferdinandi/smooth-scroll.
   *
   * @name dBlazy.closest
   *
   * @param {Element} el
   *   Starting element.
   * @param {String} selector
   *   Selector to match against (class, ID, data attribute, or tag).
   *
   * @return {Boolean|Element}
   *   Returns null if not match found.
   *
   * @see http://caniuse.com/#feat=element-closest
   * @see http://caniuse.com/#feat=matchesselector
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
   */
  dBlazy.closest = function (el, selector) {
    var parent;
    while (el) {
      parent = el.parentElement;
      if (parent && parent.matches(selector)) {
        return parent;
      }
      el = parent;
    }

    return null;
  };

  /**
   * Returns a new object after merging two, or more objects.
   *
   * Inspired by @adamfschwartz, @zackbloom, http://youmightnotneedjquery.com.
   *
   * @name dBlazy.extend
   *
   * @param {Object} out
   *   The objects to merge together.
   *
   * @return {Object}
   *   Merged values of defaults and options.
   */
  dBlazy.extend = Object.assign || function (out) {
    out = out || {};

    for (var i = 1, len = arguments.length; i < len; i++) {
      if (!arguments[i]) {
        continue;
      }

      for (var key in arguments[i]) {
        if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
          out[key] = arguments[i][key];
        }
      }
    }

    return out;
  };

  /**
   * A simple forEach() implementation for Arrays, Objects and NodeLists.
   *
   * @name dBlazy.forEach
   *
   * @author Todd Motto
   * @link https://github.com/toddmotto/foreach
   *
   * @param {Array|Object|NodeList} collection
   *   Collection of items to iterate.
   * @param {Function} callback
   *   Callback function for each iteration.
   * @param {Array|Object|NodeList} scope
   *   Object/NodeList/Array that forEach is iterating over (aka `this`).
   */
  dBlazy.forEach = function (collection, callback, scope) {
    var proto = Object.prototype;
    if (proto.toString.call(collection) === '[object Object]') {
      for (var prop in collection) {
        if (proto.hasOwnProperty.call(collection, prop)) {
          callback.call(scope, collection[prop], prop, collection);
        }
      }
    }
    else if (collection) {
      for (var i = 0, len = collection.length; i < len; i++) {
        callback.call(scope, collection[i], i, collection);
      }
    }
  };

  /**
   * A simple hasClass wrapper.
   *
   * @name dBlazy.hasClass
   *
   * @param {Element} el
   *   The HTML element.
   * @param {String} name
   *   The class name.
   *
   * @return {bool}
   *   True if the method is supported.
   *
   * @todo remove for el.classList.contains() alone.
   */
  dBlazy.hasClass = function (el, name) {
    if (el.classList) {
      return el.classList.contains(name);
    }
    else {
      return el.className.indexOf(name) !== -1;
    }
  };

  /**
   * A forgiving attribute wrapper with fallback.
   *
   * @name dBlazy.attr
   *
   * @param {Element} el
   *   The HTML element.
   * @param {String} attr
   *   The attr name.
   * @param {String} def
   *   The default value.
   *
   * @return {String}
   *   The attribute value, or fallback.
   */
  dBlazy.attr = function (el, attr, def) {
    def = def || '';
    return el !== null && el.hasAttribute(attr) ? el.getAttribute(attr) : def;
  };

  /**
   * A simple attributes wrapper.
   *
   * @name dBlazy.setAttr
   *
   * @param {Element} el
   *   The HTML element.
   * @param {String} attr
   *   The attr name.
   * @param {Boolean} remove
   *   True if should remove.
   */
  dBlazy.setAttr = function (el, attr, remove) {
    if (el && el.hasAttribute('data-' + attr)) {
      var dataAttr = el.getAttribute('data-' + attr);
      if (attr === 'src') {
        el.src = dataAttr;
      }
      else {
        el.setAttribute(attr, dataAttr);
      }

      if (remove) {
        el.removeAttribute('data-' + attr);
      }
    }
  };

  /**
   * A simple attributes wrapper looping based on the given attributes.
   *
   * @name dBlazy.setAttrs
   *
   * @param {Element} el
   *   The HTML element.
   * @param {Array} attrs
   *   The attr names.
   * @param {Boolean} remove
   *   True if should remove.
   */
  dBlazy.setAttrs = function (el, attrs, remove) {
    var me = this;

    me.forEach(attrs, function (src) {
      me.setAttr(el, src, remove);
    });
  };

  /**
   * A simple attributes wrapper, looping based on sources (picture/ video).
   *
   * @name dBlazy.setAttrsWithSources
   *
   * @param {Element} el
   *   The starting HTML element.
   * @param {String} attr
   *   The attr name, can be SRC or SRCSET.
   * @param {Boolean} remove
   *   True if should remove.
   */
  dBlazy.setAttrsWithSources = function (el, attr, remove) {
    var me = this;
    var parent = el.parentNode || null;
    var isPicture = parent && me.equal(parent, 'picture');
    var targets = isPicture ? parent.getElementsByTagName('source') : el.getElementsByTagName('source');

    attr = attr || (isPicture ? 'srcset' : 'src');

    if (targets.length) {
      me.forEach(targets, function (source) {
        me.setAttr(source, attr, remove);
      });
    }
  };

  /**
   * Checks if image is decoded/ completely loaded.
   *
   * @name dBlazy.isDecoded
   *
   * @param {Image} img
   *   The Image object.
   *
   * @return {bool}
   *   True if the image is loaded.
   */
  dBlazy.isDecoded = function (img) {
    if ('decoded' in img) {
      return img.decoded;
    }

    return img.complete;
  };

  /**
   * Decodes the image.
   *
   * @name dBlazy.decode
   *
   * @param {Image} img
   *   The Image object.
   *
   * @return {Promise}
   *   The Promise object.
   */
  dBlazy.decode = function (img) {
    var me = this;

    if (me.isDecoded(img)) {
      return Promise.resolve(img);
    }

    if ('decode' in img) {
      return img.decode();
    }

    return new Promise(function (resolve, reject) {
      img.onload = function () {
        resolve(img);
      };
      img.onerror = reject();
    });
  };

  /**
   * Updates CSS background with multi-breakpoint images.
   *
   * @name dBlazy.updateBg
   *
   * @param {Element} el
   *   The container HTML element.
   * @param {Boolean} mobileFirst
   *   Whether to use min-width or max-width.
   */
  dBlazy.updateBg = function (el, mobileFirst) {
    var me = this;
    var backgrounds = me.parse(el.getAttribute('data-backgrounds'));

    if (backgrounds) {
      var bg = me.activeWidth(backgrounds, mobileFirst);
      if (bg && bg !== 'undefined') {
        el.style.backgroundImage = 'url("' + bg.src + '")';

        // Allows to disable Aspect ratio if it has known/ fixed heights such as
        // gridstack multi-size boxes.
        if (bg.ratio && !el.classList.contains('b-noratio')) {
          el.style.paddingBottom = bg.ratio + '%';
        }
      }
    }
  };

  /**
   * A simple removeAttribute wrapper.
   *
   * @name dBlazy.removeAttrs
   *
   * @param {Element} el
   *   The HTML element.
   * @param {Array} attrs
   *   The attr names.
   */
  dBlazy.removeAttrs = function (el, attrs) {
    this.forEach(attrs, function (attr) {
      el.removeAttribute('data-' + attr);
    });
  };

  /**
   * A simple wrapper for [add|remove]EventListener.
   *
   * Made public from original bLazy library.
   *
   * @name dBlazy.binding
   *
   * @param {String} which
   *   Whether bind or unbind.
   * @param {Element} el
   *   The HTML element.
   * @param {String} eventName
   *   The event name to add.
   * @param {Function} fn
   *   The callback function.
   * @param {Object|Boolean} params
   *   The optional param passed into a custom event.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
   * @todo remove old IE references after another check.
   */
  dBlazy.binding = function (which, el, eventName, fn, params) {
    if (el && typeof fn === 'function') {
      var defaults = {capture: false, passive: true};
      var extras;
      if (typeof params === 'boolean') {
        extras = params;
      }
      else {
        extras = params ? this.extend(defaults, params) : defaults;
      }
      var bind = function (e) {
        if (el.attachEvent) {
          el[(which === 'bind' ? 'attach' : 'detach') + 'Event']('on' + e, fn, extras);
        }
        else {
          el[(which === 'bind' ? 'add' : 'remove') + 'EventListener'](e, fn, extras);
        }
      };

      if (eventName.indexOf(' ') > 0) {
        this.forEach(eventName.split(' '), bind);
      }
      else {
        bind(eventName);
      }
    }
  };

  /**
   * A simple wrapper for event delegation like jQuery.on().
   *
   * Inspired by http://stackoverflow.com/questions/30880757/
   * javascript-equivalent-to-on.
   *
   * @name dBlazy.onoff
   *
   * @param {String} which
   *   Whether on or off.
   * @param {Element} elm
   *   The parent HTML element.
   * @param {String} eventName
   *   The event name to trigger.
   * @param {String} childEl
   *   Child selector to match against (class, ID, data attribute, or tag).
   * @param {Function} callback
   *   The callback function.
   * @param {Object|Boolean} params
   *   The optional param passed into a custom event.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
   */
  dBlazy.onoff = function (which, elm, eventName, childEl, callback, params) {
    params = params || {capture: true, passive: false};
    var bind = function (e) {
      var t = e.target;
      e.delegateTarget = elm;
      while (t && t !== this) {
        if (dBlazy.matches(t, childEl)) {
          callback.call(t, e);
        }
        t = t.parentNode;
      }
    };

    this.binding(which === 'on' ? 'bind' : 'unbind', elm, eventName, bind, params);
  };

  /**
   * A simple wrapper for event delegation like jQuery.on().
   *
   * @name dBlazy.on
   *
   * @param {Element} elm
   *   The parent HTML element.
   * @param {String} eventName
   *   The event name to trigger.
   * @param {String} childEl
   *   Child selector to match against (class, ID, data attribute, or tag).
   * @param {Function} callback
   *   The callback function.
   * @param {Object|Boolean} params
   *   The optional param passed into a custom event.
   */
  dBlazy.on = function (elm, eventName, childEl, callback, params) {
    this.onoff('on', elm, eventName, childEl, callback, params);
  };

  /**
   * A simple wrapper for event detachment.
   *
   * @name dBlazy.off
   *
   * @param {Element} elm
   *   The parent HTML element.
   * @param {String} eventName
   *   The event name to trigger.
   * @param {String} childEl
   *   Child selector to match against (class, ID, data attribute, or tag).
   * @param {Function} callback
   *   The callback function.
   * @param {Object|Boolean} params
   *   The optional param passed into a custom event.
   */
  dBlazy.off = function (elm, eventName, childEl, callback, params) {
    this.onoff('off', elm, eventName, childEl, callback, params);
  };

  /**
   * A simple wrapper for addEventListener.
   *
   * @name dBlazy.bindEvent
   *
   * @param {Element} el
   *   The HTML element.
   * @param {String} eventName
   *   The event name to remove.
   * @param {Function} fn
   *   The callback function.
   * @param {Object|Boolean} params
   *   The optional param passed into a custom event.
   */
  dBlazy.bindEvent = function (el, eventName, fn, params) {
    this.binding('bind', el, eventName, fn, params);
  };

  /**
   * A simple wrapper for removeEventListener.
   *
   * @name dBlazy.unbindEvent
   *
   * @param {Element} el
   *   The HTML element.
   * @param {String} eventName
   *   The event name to remove.
   * @param {Function} fn
   *   The callback function.
   * @param {Object} params
   *   The optional param passed into a custom event.
   */
  dBlazy.unbindEvent = function (el, eventName, fn, params) {
    this.binding('unbind', el, eventName, fn, params);
  };

  /**
   * Executes a function once.
   *
   * @name dBlazy.once
   *
   * @author Daniel Lamb <dlamb.open.source@gmail.com>
   * @link https://github.com/daniellmb/once.js
   *
   * @param {Function} fn
   *   The executed function.
   *
   * @return {Object}
   *   The function result.
   */
  dBlazy.once = function (fn) {
    var result;
    var ran = false;
    return function proxy() {
      if (ran) {
        return result;
      }
      ran = true;
      result = fn.apply(this, arguments);
      // For garbage collection.
      fn = null;
      return result;
    };
  };

  /**
   * A simple wrapper for JSON.parse() for string within data-* attributes.
   *
   * @name dBlazy.parse
   *
   * @param {String} str
   *   The string to convert into JSON object.
   *
   * @return {Object|Boolean}
   *   The JSON object, or false in case invalid.
   */
  dBlazy.parse = function (str) {
    try {
      return JSON.parse(str);
    }
    catch (e) {
      return false;
    }
  };

  /**
   * A simple wrapper to animate anything using animate.css.
   *
   * @name dBlazy.animate
   *
   * @param {Element} el
   *   The animated HTML element.
   * @param {String} animation
   *   Any custom animation name, fallbacks to [data-animation].
   */
  dBlazy.animate = function (el, animation) {
    var me = this;
    var props = [
      'animation',
      'animation-duration',
      'animation-delay',
      'animation-iteration-count'
    ];

    animation = animation || el.dataset.animation;
    el.classList.add('animated', animation);
    me.forEach(['Duration', 'Delay', 'IterationCount'], function (key) {
      if ('animation' + key in el.dataset) {
        el.style['animation' + key] = el.dataset['animation' + key];
      }
    });

    // Supports both BG and regular image.
    var cn = me.closest(el, '.media');
    cn = cn === null ? el : cn;
    var blur = cn.querySelector('.b-blur--tmp');

    function animationEnd() {
      me.removeAttrs(el, props);

      el.classList.add('is-b-animated');
      el.classList.remove('animated', animation);

      me.forEach(props, function (key) {
        el.style.removeProperty(key);
      });

      if (blur !== null && blur.parentNode !== null) {
        blur.parentNode.removeChild(blur);
      }

      me.unbindEvent(el, 'animationend', animationEnd);
    }

    me.bindEvent(el, 'animationend', animationEnd);
  };

  /**
   * Removes common loading indicator classes.
   *
   * @name dBlazy.clearLoading
   *
   * @param {Element} el
   *   The loading HTML element.
   */
  dBlazy.clearLoading = function (el) {
    var me = this;
    // The .b-lazy element can be attached to IMG, or DIV as CSS background.
    // The .(*)loading can be .media, .grid, .slide__content, .box, etc.
    var loaders = [el, me.closest(el, '[class*="loading"]')];

    this.forEach(loaders, function (loader) {
      if (loader !== null) {
        loader.className = loader.className.replace(/(\S+)loading/g, '');
      }
    });
  };

  /**
   * A simple wrapper to delay callback function, taken out of blazy library.
   *
   * Alternative to core Drupal.debounce for D7 compatibility, and easy port.
   *
   * @name dBlazy.throttle
   *
   * @param {Function} fn
   *   The callback function.
   * @param {Int} minDelay
   *   The execution delay in milliseconds.
   * @param {Object} scope
   *   The scope of the function to apply to, normally this.
   *
   * @return {Function}
   *   The function executed at the specified minDelay.
   */
  dBlazy.throttle = function (fn, minDelay, scope) {
    var lastCall = 0;
    return function () {
      var now = +new Date();
      if (now - lastCall < minDelay) {
        return;
      }
      lastCall = now;
      fn.apply(scope, arguments);
    };
  };

  /**
   * A simple wrapper to delay callback function on window resize.
   *
   * @name dBlazy.resize
   *
   * @link https://github.com/louisremi/jquery-smartresize
   *
   * @param {Function} c
   *   The callback function.
   * @param {Int} t
   *   The timeout.
   *
   * @return {Function}
   *   The callback function.
   */
  dBlazy.resize = function (c, t) {
    window.onresize = function () {
      window.clearTimeout(t);
      t = window.setTimeout(c, 200);
    };
    return c;
  };

  /**
   * A simple wrapper for triggering event like jQuery.trigger().
   *
   * @name dBlazy.trigger
   *
   * @param {Element} elm
   *   The HTML element.
   * @param {String} eventName
   *   The event name to trigger.
   * @param {Object} custom
   *   The optional object passed into a custom event.
   * @param {Object} param
   *   The optional param passed into a custom event.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
   * @todo: See if any consistent way for both custom and native events.
   */
  dBlazy.trigger = function (elm, eventName, custom, param) {
    var event;
    var data = {
      detail: custom || {}
    };

    if (typeof param === 'undefined') {
      data.bubbles = true;
      data.cancelable = true;
    }

    // Native.
    // IE >= 9 compat, else SCRIPT445: Object doesn't support this action.
    // https://msdn.microsoft.com/library/ff975299(v=vs.85).aspx
    if (typeof window.CustomEvent === 'function') {
      event = new CustomEvent(eventName, data);
    }
    else {
      event = document.createEvent('CustomEvent');
      event.initCustomEvent(eventName, true, true, data);
    }

    elm.dispatchEvent(event);
  };

  return dBlazy;

});
;
!function(n){"function"==typeof define&&define.amd?define(["jquery"],function(e){return n(e)}):"object"==typeof module&&"object"==typeof module.exports?module.exports=n(require("jquery")):n(jQuery)}(function(n){function e(n){var e=7.5625,t=2.75;return n<1/t?e*n*n:n<2/t?e*(n-=1.5/t)*n+.75:n<2.5/t?e*(n-=2.25/t)*n+.9375:e*(n-=2.625/t)*n+.984375}void 0!==n.easing&&(n.easing.jswing=n.easing.swing);var t=Math.pow,u=Math.sqrt,r=Math.sin,i=Math.cos,a=Math.PI,o=1.70158,c=1.525*o,s=2*a/3,f=2*a/4.5;return n.extend(n.easing,{def:"easeOutQuad",swing:function(e){return n.easing[n.easing.def](e)},easeInQuad:function(n){return n*n},easeOutQuad:function(n){return 1-(1-n)*(1-n)},easeInOutQuad:function(n){return n<.5?2*n*n:1-t(-2*n+2,2)/2},easeInCubic:function(n){return n*n*n},easeOutCubic:function(n){return 1-t(1-n,3)},easeInOutCubic:function(n){return n<.5?4*n*n*n:1-t(-2*n+2,3)/2},easeInQuart:function(n){return n*n*n*n},easeOutQuart:function(n){return 1-t(1-n,4)},easeInOutQuart:function(n){return n<.5?8*n*n*n*n:1-t(-2*n+2,4)/2},easeInQuint:function(n){return n*n*n*n*n},easeOutQuint:function(n){return 1-t(1-n,5)},easeInOutQuint:function(n){return n<.5?16*n*n*n*n*n:1-t(-2*n+2,5)/2},easeInSine:function(n){return 1-i(n*a/2)},easeOutSine:function(n){return r(n*a/2)},easeInOutSine:function(n){return-(i(a*n)-1)/2},easeInExpo:function(n){return 0===n?0:t(2,10*n-10)},easeOutExpo:function(n){return 1===n?1:1-t(2,-10*n)},easeInOutExpo:function(n){return 0===n?0:1===n?1:n<.5?t(2,20*n-10)/2:(2-t(2,-20*n+10))/2},easeInCirc:function(n){return 1-u(1-t(n,2))},easeOutCirc:function(n){return u(1-t(n-1,2))},easeInOutCirc:function(n){return n<.5?(1-u(1-t(2*n,2)))/2:(u(1-t(-2*n+2,2))+1)/2},easeInElastic:function(n){return 0===n?0:1===n?1:-t(2,10*n-10)*r((10*n-10.75)*s)},easeOutElastic:function(n){return 0===n?0:1===n?1:t(2,-10*n)*r((10*n-.75)*s)+1},easeInOutElastic:function(n){return 0===n?0:1===n?1:n<.5?-t(2,20*n-10)*r((20*n-11.125)*f)/2:t(2,-20*n+10)*r((20*n-11.125)*f)/2+1},easeInBack:function(n){return 2.70158*n*n*n-o*n*n},easeOutBack:function(n){return 1+2.70158*t(n-1,3)+o*t(n-1,2)},easeInOutBack:function(n){return n<.5?t(2*n,2)*(7.189819*n-c)/2:(t(2*n-2,2)*((c+1)*(2*n-2)+c)+2)/2},easeInBounce:function(n){return 1-e(1-n)},easeOutBounce:e,easeInOutBounce:function(n){return n<.5?(1-e(1-2*n))/2:(1+e(2*n-1))/2}}),n});;
/*!
 * jQuery Mousewheel 3.1.13
 * Copyright OpenJS Foundation and other contributors
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e:e(jQuery)}(function(u){var f,d,e=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],t="onwheel"in window.document||9<=window.document.documentMode?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],w=Array.prototype.slice;if(u.event.fixHooks)for(var i=e.length;i;)u.event.fixHooks[e[--i]]=u.event.mouseHooks;var c=u.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var e=t.length;e;)this.addEventListener(t[--e],n,!1);else this.onmousewheel=n;u.data(this,"mousewheel-line-height",c.getLineHeight(this)),u.data(this,"mousewheel-page-height",c.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var e=t.length;e;)this.removeEventListener(t[--e],n,!1);else this.onmousewheel=null;u.removeData(this,"mousewheel-line-height"),u.removeData(this,"mousewheel-page-height")},getLineHeight:function(e){var t=u(e),i=t["offsetParent"in u.fn?"offsetParent":"parent"]();return i.length||(i=u("body")),parseInt(i.css("fontSize"),10)||parseInt(t.css("fontSize"),10)||16},getPageHeight:function(e){return u(e).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};function n(e){var t,i=e||window.event,n=w.call(arguments,1),o=0,l=0,s=0;if((e=u.event.fix(i)).type="mousewheel","detail"in i&&(s=-1*i.detail),"wheelDelta"in i&&(s=i.wheelDelta),"wheelDeltaY"in i&&(s=i.wheelDeltaY),"wheelDeltaX"in i&&(l=-1*i.wheelDeltaX),"axis"in i&&i.axis===i.HORIZONTAL_AXIS&&(l=-1*s,s=0),o=0===s?l:s,"deltaY"in i&&(o=s=-1*i.deltaY),"deltaX"in i&&(l=i.deltaX,0===s&&(o=-1*l)),0!==s||0!==l){if(1===i.deltaMode){var a=u.data(this,"mousewheel-line-height");o*=a,s*=a,l*=a}else if(2===i.deltaMode){var h=u.data(this,"mousewheel-page-height");o*=h,s*=h,l*=h}if(t=Math.max(Math.abs(s),Math.abs(l)),(!d||t<d)&&g(i,d=t)&&(d/=40),g(i,t)&&(o/=40,l/=40,s/=40),o=Math[1<=o?"floor":"ceil"](o/d),l=Math[1<=l?"floor":"ceil"](l/d),s=Math[1<=s?"floor":"ceil"](s/d),c.settings.normalizeOffset&&this.getBoundingClientRect){var r=this.getBoundingClientRect();e.offsetX=e.clientX-r.left,e.offsetY=e.clientY-r.top}return e.deltaX=l,e.deltaY=s,e.deltaFactor=d,e.deltaMode=0,n.unshift(e,o,l,s),f&&window.clearTimeout(f),f=window.setTimeout(m,200),(u.event.dispatch||u.event.handle).apply(this,n)}}function m(){d=null}function g(e,t){return c.settings.adjustOldDeltas&&"mousewheel"===e.type&&t%120==0}u.fn.extend({mousewheel:function(e){return e?this.on("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.off("mousewheel",e)}})});;
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});
;
/**
 * @file
 * Provides native, Intersection Observer API, or bLazy lazy loader.
 *
 * @todo Decouple Native, Aspect ratio, Picture post 2.3+, or 3+.
 */

(function (Drupal, drupalSettings, _db, window, document) {

  'use strict';

  var _dataAnimation = 'data-animation';
  var _dataDimensions = 'data-dimensions';
  var _dataBg = 'data-backgrounds';
  var _dataRatio = 'data-ratio';
  var _isNativeExecuted = false;
  var _resizeTick = 0;

  /**
   * Blazy public methods.
   *
   * @namespace
   */
  Drupal.blazy = Drupal.blazy || {
    context: null,
    init: null,
    instances: [],
    items: [],
    windowWidth: 0,
    blazySettings: drupalSettings.blazy || {},
    ioSettings: drupalSettings.blazyIo || {},
    revalidate: false,
    options: {},
    globals: function () {
      var me = this;
      var commons = {
        success: me.clearing.bind(me),
        error: me.clearing.bind(me),
        selector: '.b-lazy',
        errorClass: 'b-error',
        successClass: 'b-loaded'
      };

      return _db.extend(me.blazySettings, me.ioSettings, commons);
    },

    clearing: function (el) {
      var me = this;
      var cn = _db.closest(el, '.media');
      var an = _db.closest(el, '[' + _dataAnimation + ']');

      // Clear loading classes.
      _db.clearLoading(el);

      // Reevaluate the element.
      me.reevaluate(el);

      // Container might be the el itself for BG, do not NULL check here.
      me.updateContainer(el, cn);

      // Supports blur, animate.css for CSS background, picture, image, media.
      if (an !== null || me.has(el, _dataAnimation)) {
        _db.animate(an !== null ? an : el);
      }

      // Provides event listeners for easy overrides without full overrides.
      // Runs before native to allow native use this on its own onload event.
      _db.trigger(el, 'blazy.done', {options: me.options});

      // Initializes the native lazy loading once the first found is loaded.
      if (!_isNativeExecuted) {
        _db.trigger(me.context, 'blazy.native', {options: me.options});

        _isNativeExecuted = true;
      }
    },

    isLoaded: function (el) {
      return el !== null && el.classList.contains(this.options.successClass);
    },

    reevaluate: function (el) {
      var me = this;
      var ie = el.classList.contains('b-responsive') && el.hasAttribute('data-pfsrc');

      // In case an error, try forcing it, once.
      if (me.init !== null && _db.hasClass(el, me.options.errorClass) && !_db.hasClass(el, 'b-checked')) {
        el.classList.add('b-checked');

        // This is a rare case, hardly called, just nice to have for errors.
        window.setTimeout(function () {
          if (me.has(el, _dataBg)) {
            _db.updateBg(el, me.options.mobileFirst);
          }
          else {
            me.init.load(el);
          }
        }, 100);
      }

      // @see http://scottjehl.github.io/picturefill/
      if (window.picturefill && ie) {
        window.picturefill({
          reevaluate: true,
          elements: [el]
        });
      }
    },

    has: function (el, attribute) {
      return el !== null && el.hasAttribute(attribute);
    },

    contains: function (el, name) {
      return el !== null && el.classList.contains(name);
    },

    updateContainer: function (el, cn) {
      var me = this;
      var isPicture = _db.equal(el.parentNode, 'picture') && me.has(cn, _dataDimensions);

      // Fixed for effect Blur messes up Aspect ratio Fluid calculation.
      window.setTimeout(function () {
        if (me.isLoaded(el)) {
          // Adds context for effetcs: blur, etc. considering BG, or just media.
          (me.contains(cn, 'media') ? cn : el).classList.add('is-b-loaded');

          // Only applies to ratio fluid.
          if (isPicture) {
            me.updatePicture(el, cn);
          }

          // Basically makes multi-breakpoint BG work for IO or old bLazy once.
          if (me.has(el, _dataBg)) {
            _db.updateBg(el, me.options.mobileFirst);
          }
        }
      });
    },

    updatePicture: function (el, cn) {
      var me = this;
      var pad = Math.round(((el.naturalHeight / el.naturalWidth) * 100), 2);

      cn.style.paddingBottom = pad + '%';

      // Swap all aspect ratio once to reduce abrupt ratio changes for the rest.
      if (me.instances.length > 0) {
        var picture = function (elm) {
          if (!('blazyInstance' in elm) && !('blazyUniform' in elm)) {
            return;
          }

          if ((elm.blazyInstance === cn.blazyInstance) && (_resizeTick > 1 || !('isBlazyPicture' in elm))) {
            _db.trigger(elm, 'blazy.uniform.' + elm.blazyInstance, {pad: pad});
            elm.isBlazyPicture = true;
          }
        };

        // Uniform sizes must apply to each instance, not globally.
        _db.forEach(me.instances, function (elm) {
          Drupal.debounce(picture(elm), 201, true);
        }, me.context);
      }
    },

    /**
     * Attempts to fix for Views rewrite stripping out data URI causing 404.
     *
     * E.g.: src="image/jpg;base64 should be src="data:image/jpg;base64.
     * The "Placeholder" 1px.gif via Blazy UI costs extra HTTP requests. This is
     * a less costly solution, but not bulletproof due to being client-side
     * which means too late to the party. Yet not bad for 404s below the fold.
     * This must be run before any lazy (native, bLazy or IO) kicks in.
     *
     * @todo Remove if a permanent non-client available other than Placeholder.
     */
    fixMissingDataUri: function () {
      var me = this;
      var doc = me.context;
      var sel = me.options.selector + '[src^="image"]:not(.' + me.options.successClass + ')';
      var els = doc.querySelector(sel) === null ? [] : doc.querySelectorAll(sel);

      var fixDataUri = function (img) {
        var src = img.getAttribute('src');
        if (src.indexOf('base64') !== -1 || src.indexOf('svg+xml') !== -1) {
          img.setAttribute('src', src.replace('image', 'data:image'));
        }
      };

      if (els.length > 0) {
        _db.forEach(els, fixDataUri);
      }
    },

    /**
     * Updates the dynamic multi-breakpoint aspect ratio: bg, picture or image.
     *
     * This only applies to Responsive images with aspect ratio fluid.
     * Static ratio (media--ratio--169, etc.) is ignored and uses CSS instead.
     *
     * @param {HTMLElement} cn
     *   The .media--ratio--fluid container HTML element.
     */
    updateRatio: function (cn) {
      var me = this;
      var el = _db.closest(cn, '.blazy');
      var dimensions = _db.parse(cn.getAttribute(_dataDimensions));

      if (!dimensions) {
        me.updateFallbackRatio(cn);
        return;
      }

      // For picture, this is more a dummy space till the image is downloaded.
      var isPicture = cn.querySelector('picture') !== null && _resizeTick > 0;
      var pad = _db.activeWidth(dimensions, isPicture);

      // Provides marker for grouping between multiple instances.
      cn.blazyInstance = el !== null && 'blazyInstance' in el ? el.blazyInstance : null;
      if (pad !== 'undefined') {
        cn.style.paddingBottom = pad + '%';
      }

      // Fix for picture or bg element with resizing.
      if (_resizeTick > 0 && (isPicture || me.has(cn, _dataBg))) {
        me.updateContainer((isPicture ? cn.querySelector('img') : cn), cn);
      }
    },

    updateFallbackRatio: function (cn) {
      // Only rewrites if the style is indeed stripped out by Twig, and not set.
      if (!cn.hasAttribute('style') && cn.hasAttribute(_dataRatio)) {
        cn.style.paddingBottom = cn.getAttribute(_dataRatio) + '%';
      }
    },

    /**
     * Swap lazy attributes to let supportive browsers lazy load them.
     *
     * This means Blazy and even IO should not lazy-load them any more.
     * Ensures to not touch lazy-loaded AJAX, or likely non-supported elements:
     * Video, DIV, etc. Only IMG and IFRAME are supported for now.
     * Due to native init is deferred, the first row is still using IO/ bLazy.
     */
    doNativeLazy: function () {
      var me = this;

      if (!me.isNativeLazy()) {
        return;
      }

      var doc = me.context;
      var sel = me.options.selector + '[loading]:not(.' + me.options.successClass + ')';

      me.items = doc.querySelector(sel) === null ? [] : doc.querySelectorAll(sel);
      if (me.items.length === 0) {
        return;
      }

      var onNativeEvent = function (e) {
        var el = e.target;
        var er = e.type === 'error';

        // Refines based on actual result, runs clearing, animation, etc.
        el.classList.add(me.options[er ? 'errorClass' : 'successClass']);
        me.clearing(el);

        _db.unbindEvent(el, e.type, onNativeEvent);
      };

      var doNative = function (el) {
        // Reset attributes, and let supportive browsers lazy load natively.
        _db.setAttrs(el, ['srcset', 'src'], true);

        // Also supports PICTURE or (future) VIDEO which contains SOURCEs.
        _db.setAttrsWithSources(el, false, true);

        // Blur thumbnail is just making use of the swap due to being small.
        if (me.contains(el, 'b-blur')) {
          el.removeAttribute('loading');
        }
        else {
          // Mark it loaded to prevent bLazy/ IO to do any further work.
          el.classList.add(me.options.successClass);

          // Attempts to make nice with the harsh native, defer clearing, etc.
          _db.bindEvent(el, 'load', onNativeEvent);
          _db.bindEvent(el, 'error', onNativeEvent);
        }
      };

      var onNative = function () {
        _db.forEach(me.items, doNative);
      };

      _db.bindEvent(me.context, 'blazy.native', onNative, {once: true});
    },

    isNativeLazy: function () {
      return 'loading' in HTMLImageElement.prototype;
    },

    isIo: function () {
      return this.ioSettings && this.ioSettings.enabled && 'IntersectionObserver' in window;
    },

    isRo: function () {
      return 'ResizeObserver' in window;
    },

    isBlazy: function () {
      return !this.isIo() && 'Blazy' in window;
    },

    forEach: function (context) {
      var blazies = context.querySelectorAll('.blazy:not(.blazy--on)');

      // Various use cases: w/o formaters, custom, or basic, and mixed.
      // The [data-blazy] is set by the module for formatters, or Views gallery.
      if (blazies.length > 0) {
        _db.forEach(blazies, doBlazy, context);
      }

      // Initializes blazy, we'll decouple features from lazy load scripts.
      // We'll revert to 2.1 if any issue with this.
      initBlazy(context);
    },

    run: function (opts) {
      return this.isIo() ? new BioMedia(opts) : new Blazy(opts);
    },

    afterInit: function () {
      var me = this;
      var doc = me.context;
      var rObserver = false;
      var ratioItems = doc.querySelector('.media--ratio') === null ? [] : doc.querySelectorAll('.media--ratio');
      var shouldLoop = ratioItems.length > 0;

      var loopRatio = function (entries) {
        me.windowWidth = _db.windowWidth();

        // BC with bLazy, native/IO doesn't need to revalidate, bLazy does.
        // Scenarios: long horizontal containers, Slick carousel slidesToShow >
        // 3. If any issue, add a class `blazy--revalidate` manually to .blazy.
        if (!me.isNativeLazy() && (me.isBlazy() || me.revalidate)) {
          me.init.revalidate(true);
        }

        if (shouldLoop) {
          _db.forEach(entries, function (entry) {
            me.updateRatio('target' in entry ? entry.target : entry);
          }, doc);
        }

        _resizeTick++;
        return false;
      };

      var checkRatio = function () {
        return me.isRo() ? new ResizeObserver(loopRatio) : loopRatio(ratioItems);
      };

      // Checks for aspect ratio, onload event is a bit later.
      // Uses ResizeObserver for modern browsers, else degrades.
      rObserver = checkRatio();
      if (rObserver) {
        if (shouldLoop) {
          _db.forEach(ratioItems, function (entry) {
            rObserver.observe(entry);
          }, doc);
        }
      }
      else {
        _db.bindEvent(window, 'resize', Drupal.debounce(checkRatio, 200, true));
      }
    }
  };

  /**
   * Initialize the blazy instance, either basic, advanced, or native.
   *
   * @param {HTMLElement} context
   *   This can be document, or anything weird.
   */
  var initBlazy = function (context) {
    var me = Drupal.blazy;
    var documentElement = context instanceof HTMLDocument ? context : _db.closest(context, 'html');
    var opts = {};

    opts.mobileFirst = opts.mobileFirst || false;

    // Weirdo: documentElement is null after colorbox cbox_close event.
    documentElement = documentElement || document;

    // Set docroot in case we are in an iframe.
    if (!document.documentElement.isSameNode(documentElement)) {
      opts.root = documentElement;
    }

    me.options = _db.extend({}, me.globals(), opts);
    me.context = documentElement;

    // Old bLazy, not IO, might need scrolling CSS selector like Modal library.
    // A scrolling modal with an iframe like Entity Browser has no issue since
    // the scrolling container is the entire DOM. Another use case is parallax.
    var scrollElms = '#drupal-modal, .is-b-scroll';
    if (me.options.container) {
      scrollElms += ', ' + me.options.container.trim();
    }
    me.options.container = scrollElms;

    // Attempts to fix for Views rewrite stripping out data URI causing 404.
    me.fixMissingDataUri();

    // Swap lazy attributes to let supportive browsers lazy load them.
    me.doNativeLazy();

    // Put the blazy/IO instance into a public object for references/ overrides.
    // If native lazy load is supported, the following will skip internally.
    me.init = me.run(me.options);

    // Runs after init.
    me.afterInit();
  };

  /**
   * Blazy utility functions.
   *
   * @param {HTMLElement} elm
   *   The .blazy/[data-blazy] container, not the lazyloaded .b-lazy element.
   *
   * @todo reenable initBlazy here if any issue with the following:
   *   Each [data-blazy] may or may not:
   *     - be ajaxified, be lightboxed, have uniform or different sizes, and
   *       have few more unique features per instance, etc.
   */
  function doBlazy(elm) {
    var me = Drupal.blazy;
    var dataAttr = elm.getAttribute('data-blazy');
    var opts = (!dataAttr || dataAttr === '1') ? {} : (_db.parse(dataAttr) || {});
    var isUniform = me.contains(elm, 'blazy--field') || me.contains(elm, 'block-grid') || me.contains(elm, 'blazy--uniform');
    var instance = (Math.random() * 10000).toFixed(0);
    var eventId = 'blazy.uniform.' + instance;
    var localItems = elm.querySelector('.media--ratio') === null ? [] : elm.querySelectorAll('.media--ratio');

    me.options = _db.extend(me.options, opts);
    me.revalidate = me.revalidate || elm.classList.contains('blazy--revalidate');
    elm.classList.add('blazy--on');
    elm.blazyInstance = instance;

    if (isUniform) {
      elm.blazyUniform = true;
    }

    me.instances.push(elm);

    var swapRatio = function (e) {
      var pad = e.detail.pad || 0;

      if (pad > 10) {
        _db.forEach(localItems, function (cn) {
          cn.style.paddingBottom = pad + '%';
        }, elm);
      }
    };

    // Reduces abrupt ratio changes for the rest after the first loaded.
    // To support resizing, use debounce. To disable use {once: true}.
    if (isUniform && localItems.length > 0) {
      _db.bindEvent(elm, eventId, swapRatio);
    }
  }

  /**
   * Attaches blazy behavior to HTML element identified by .blazy/[data-blazy].
   *
   * The .blazy/[data-blazy] is the .b-lazy container, might be .field, etc.
   * The .b-lazy is the individual IMG, IFRAME, PICTURE, VIDEO, DIV, BODY, etc.
   * The lazy-loaded element is .b-lazy, not its container. Note the hypen (b-)!
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.blazy = {
    attach: function (context) {
      // Drupal.attachBehaviors already does this so if this is necessary,
      // someone does an invalid call. But let's be robust here.
      // Note: context can be unexpected <script> element with Media library.
      context = context || document;

      // Originally identified at D7, yet might happen at D8 with AJAX.
      // Prevents jQuery AJAX messes up where context might be an array.
      if ('length' in context) {
        context = context[0];
      }

      // Runs Blazy with multi-serving images, and aspect ratio supports.
      // W/o [data-blazy] to address various scenarios like custom simple works,
      // or within Views UI which is not easy to set [data-blazy] via UI.
      _db.once(Drupal.blazy.forEach(context));
    }
  };

}(Drupal, drupalSettings, dBlazy, this, this.document));
;
(function (Drupal, $) {
  'use strict';

  Drupal.behaviors.browser_detect = {
    browserVersion: function () {
      const userBrowser = (navigator.userAgent).toLowerCase();
      const maxTouchPoints = navigator.maxTouchPoints;
      let $html = document.getElementsByTagName('html')[0],
        browsers = [],
        systemOp = [],
        matches;

      // Browser
      browsers.safari = userBrowser.indexOf('safari');
      browsers.chrome = (userBrowser.indexOf('chrome') > -1 || userBrowser.indexOf('crios') > -1 ) ? 1 : -1;
      browsers.firefox = userBrowser.indexOf('firefox');
      browsers.ie = userBrowser.indexOf('msie');
      browsers.ie11 = userBrowser.indexOf('rv:11');
      browsers.msedge = userBrowser.indexOf('edg');
      browsers.samsung = userBrowser.indexOf('samsung');
      browsers.ucbrowser = userBrowser.indexOf('ucbrowser');
      browsers.facebook = (userBrowser.indexOf('fbdv') > -1 || userBrowser.indexOf('fb_iab') > -1 ) ? 1 : -1;
      browsers.instagram = userBrowser.indexOf('instagram');

      //SO
      systemOp.linux = userBrowser.indexOf('linux');
      systemOp.macintosh = (userBrowser.indexOf('macintosh') > -1 && maxTouchPoints === 0) ? 1 : -1;
      systemOp.windows = userBrowser.indexOf('windows');
      systemOp.ipad = (userBrowser.indexOf('ipad') > -1) || (userBrowser.indexOf('macintosh') && maxTouchPoints > 0) ? 1 : -1;
      systemOp.android = userBrowser.indexOf('android');
      systemOp.iphone = userBrowser.indexOf('iphone');

      //Chrome, Safari, Edge, Samsung, UC, Facebook & Instagram className
      if(browsers.samsung > -1) {
        $html.classList.add('samsungbrowser');
      } else if(browsers.ucbrowser > -1) {
        $html.classList.add('ucbrowser');
      } else if(browsers.facebook > -1) {
        $html.classList.add('facebook');
      } else if(browsers.instagram > -1) {
        $html.classList.add('instagram');
      } else if ((browsers.safari > -1) && (browsers.chrome <= -1) && (browsers.msedge <= -1)) {
        $html.classList.add('safari');
        matches = userBrowser.match(/version\/([0-9]*)/);
        $html.classList.add(`safari${matches[1]}`);
      } else if ((browsers.chrome > -1) && (browsers.msedge <= -1)) {
        $html.classList.add('chrome');
        matches = userBrowser.match(/chrome\/([0-9]*)|crios\/([0-9]*)/);
        $html.classList.add(`chrome${matches[1]}`);
      } else if (browsers.msedge > -1) {
        $html.classList.add('edge');
        matches = userBrowser.match(/edge\/([0-9]*)|edg\/([0-9]*)/);
        $html.classList.add(`edge${matches[1]}`);
      }

      //firefox
      if (browsers.firefox > -1) {
        $html.classList.add('firefox');
        matches = userBrowser.match(/firefox\/([0-9]*)/);
        $html.classList.add(`firefox${matches[1]}`);
      }

      //IE
      if (browsers.ie > -1 || browsers.ie11 > -1) {
        $html.classList.add('ie');
        if (browsers.ie > -1) {
          matches = userBrowser.match(/msie\ ([0-9]*)/);
          $html.classList.add(`ie${matches[1]}`);
        } else {
          //IE11
          $html.classList.add('ie11');
        }
      }

      //Windows
      if (systemOp.windows > -1) {
        $html.classList.add('windows');
        $html.classList.add('desktop');
      }
      //macintosh
      if (systemOp.macintosh > -1) {
        $html.classList.add('macintosh');
        $html.classList.add('desktop');
      }
      //linux
      if (systemOp.linux > -1 && systemOp.android <= -1) {
        $html.classList.add('linux');
        $html.classList.add('desktop');
      }
      //android
      if (systemOp.android > -1) {
        $html.classList.add('android');
        $html.classList.add('mobile');
      }
      //ipad
      if (systemOp.ipad > -1) {
        $html.classList.add('ipad');
        $html.classList.add('mobile');
        $html.classList.add('ios');
      }
      //iphone
      if (systemOp.iphone > -1) {
        $html.classList.add('iphone');
        $html.classList.add('mobile');
        $html.classList.add('ios');
      }
    },

    attach: function (context) {
      const hasHtmlTag = $('html', context).length;
      if (hasHtmlTag) {
        Drupal.behaviors.browser_detect.browserVersion();
      }
    }
  };

})(Drupal, jQuery);
;
// ==================================================
// fancyBox v3.5.7
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2019 fancyApps
//
// ==================================================
!function(t,e,n,o){"use strict";function i(t,e){var o,i,a,s=[],r=0;t&&t.isDefaultPrevented()||(t.preventDefault(),e=e||{},t&&t.data&&(e=h(t.data.options,e)),o=e.$target||n(t.currentTarget).trigger("blur"),(a=n.fancybox.getInstance())&&a.$trigger&&a.$trigger.is(o)||(e.selector?s=n(e.selector):(i=o.attr("data-fancybox")||"",i?(s=t.data?t.data.items:[],s=s.length?s.filter('[data-fancybox="'+i+'"]'):n('[data-fancybox="'+i+'"]')):s=[o]),r=n(s).index(o),r<0&&(r=0),a=n.fancybox.open(s,e,r),a.$trigger=o))}if(t.console=t.console||{info:function(t){}},n){if(n.fn.fancybox)return void console.info("fancyBox already initialized");var a={closeExisting:!1,loop:!1,gutter:50,keyboard:!0,preventCaptionOverlap:!0,arrows:!0,infobar:!0,smallBtn:"auto",toolbar:"auto",buttons:["zoom","slideShow","thumbs","close"],idleTime:3,protect:!1,modal:!1,image:{preload:!1},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',preload:!0,css:{},attr:{scrolling:"auto"}},video:{tpl:'<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',format:"",autoStart:!0},defaultType:"image",animationEffect:"zoom",animationDuration:366,zoomOpacity:"auto",transitionEffect:"fade",transitionDuration:366,slideClass:"",baseClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>{{ERROR}}</p></div>',btnTpl:{download:'<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',zoom:'<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',arrowLeft:'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',arrowRight:'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',smallBtn:'<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'},parentEl:"body",hideScrollbar:!0,autoFocus:!0,backFocus:!0,trapFocus:!0,fullScreen:{autoStart:!1},touch:{vertical:!0,momentum:!0},hash:null,media:{},slideShow:{autoStart:!1,speed:3e3},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"},wheel:"auto",onInit:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeClose:n.noop,afterClose:n.noop,onActivate:n.noop,onDeactivate:n.noop,clickContent:function(t,e){return"image"===t.type&&"zoom"},clickSlide:"close",clickOutside:"close",dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1,mobile:{preventCaptionOverlap:!1,idleTime:!1,clickContent:function(t,e){return"image"===t.type&&"toggleControls"},clickSlide:function(t,e){return"image"===t.type?"toggleControls":"close"},dblclickContent:function(t,e){return"image"===t.type&&"zoom"},dblclickSlide:function(t,e){return"image"===t.type&&"zoom"}},lang:"en",i18n:{en:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",ERROR:"The requested content cannot be loaded. <br/> Please try again later.",PLAY_START:"Start slideshow",PLAY_STOP:"Pause slideshow",FULL_SCREEN:"Full screen",THUMBS:"Thumbnails",DOWNLOAD:"Download",SHARE:"Share",ZOOM:"Zoom"},de:{CLOSE:"Schlie&szlig;en",NEXT:"Weiter",PREV:"Zur&uuml;ck",ERROR:"Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",PLAY_START:"Diaschau starten",PLAY_STOP:"Diaschau beenden",FULL_SCREEN:"Vollbild",THUMBS:"Vorschaubilder",DOWNLOAD:"Herunterladen",SHARE:"Teilen",ZOOM:"Vergr&ouml;&szlig;ern"}}},s=n(t),r=n(e),c=0,l=function(t){return t&&t.hasOwnProperty&&t instanceof n},d=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),u=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),f=function(){var t,n=e.createElement("fakeelement"),o={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in o)if(void 0!==n.style[t])return o[t];return"transitionend"}(),p=function(t){return t&&t.length&&t[0].offsetHeight},h=function(t,e){var o=n.extend(!0,{},t,e);return n.each(e,function(t,e){n.isArray(e)&&(o[t]=e)}),o},g=function(t){var o,i;return!(!t||t.ownerDocument!==e)&&(n(".fancybox-container").css("pointer-events","none"),o={x:t.getBoundingClientRect().left+t.offsetWidth/2,y:t.getBoundingClientRect().top+t.offsetHeight/2},i=e.elementFromPoint(o.x,o.y)===t,n(".fancybox-container").css("pointer-events",""),i)},b=function(t,e,o){var i=this;i.opts=h({index:o},n.fancybox.defaults),n.isPlainObject(e)&&(i.opts=h(i.opts,e)),n.fancybox.isMobile&&(i.opts=h(i.opts,i.opts.mobile)),i.id=i.opts.id||++c,i.currIndex=parseInt(i.opts.index,10)||0,i.prevIndex=null,i.prevPos=null,i.currPos=0,i.firstRun=!0,i.group=[],i.slides={},i.addContent(t),i.group.length&&i.init()};n.extend(b.prototype,{init:function(){var o,i,a=this,s=a.group[a.currIndex],r=s.opts;r.closeExisting&&n.fancybox.close(!0),n("body").addClass("fancybox-active"),!n.fancybox.getInstance()&&!1!==r.hideScrollbar&&!n.fancybox.isMobile&&e.body.scrollHeight>t.innerHeight&&(n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:'+(t.innerWidth-e.documentElement.clientWidth)+"px;}</style>"),n("body").addClass("compensate-for-scrollbar")),i="",n.each(r.buttons,function(t,e){i+=r.btnTpl[e]||""}),o=n(a.translate(a,r.baseTpl.replace("{{buttons}}",i).replace("{{arrows}}",r.btnTpl.arrowLeft+r.btnTpl.arrowRight))).attr("id","fancybox-container-"+a.id).addClass(r.baseClass).data("FancyBox",a).appendTo(r.parentEl),a.$refs={container:o},["bg","inner","infobar","toolbar","stage","caption","navigation"].forEach(function(t){a.$refs[t]=o.find(".fancybox-"+t)}),a.trigger("onInit"),a.activate(),a.jumpTo(a.currIndex)},translate:function(t,e){var n=t.opts.i18n[t.opts.lang]||t.opts.i18n.en;return e.replace(/\{\{(\w+)\}\}/g,function(t,e){return void 0===n[e]?t:n[e]})},addContent:function(t){var e,o=this,i=n.makeArray(t);n.each(i,function(t,e){var i,a,s,r,c,l={},d={};n.isPlainObject(e)?(l=e,d=e.opts||e):"object"===n.type(e)&&n(e).length?(i=n(e),d=i.data()||{},d=n.extend(!0,{},d,d.options),d.$orig=i,l.src=o.opts.src||d.src||i.attr("href"),l.type||l.src||(l.type="inline",l.src=e)):l={type:"html",src:e+""},l.opts=n.extend(!0,{},o.opts,d),n.isArray(d.buttons)&&(l.opts.buttons=d.buttons),n.fancybox.isMobile&&l.opts.mobile&&(l.opts=h(l.opts,l.opts.mobile)),a=l.type||l.opts.type,r=l.src||"",!a&&r&&((s=r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))?(a="video",l.opts.video.format||(l.opts.video.format="video/"+("ogv"===s[1]?"ogg":s[1]))):r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?a="image":r.match(/\.(pdf)((\?|#).*)?$/i)?(a="iframe",l=n.extend(!0,l,{contentType:"pdf",opts:{iframe:{preload:!1}}})):"#"===r.charAt(0)&&(a="inline")),a?l.type=a:o.trigger("objectNeedsType",l),l.contentType||(l.contentType=n.inArray(l.type,["html","inline","ajax"])>-1?"html":l.type),l.index=o.group.length,"auto"==l.opts.smallBtn&&(l.opts.smallBtn=n.inArray(l.type,["html","inline","ajax"])>-1),"auto"===l.opts.toolbar&&(l.opts.toolbar=!l.opts.smallBtn),l.$thumb=l.opts.$thumb||null,l.opts.$trigger&&l.index===o.opts.index&&(l.$thumb=l.opts.$trigger.find("img:first"),l.$thumb.length&&(l.opts.$orig=l.opts.$trigger)),l.$thumb&&l.$thumb.length||!l.opts.$orig||(l.$thumb=l.opts.$orig.find("img:first")),l.$thumb&&!l.$thumb.length&&(l.$thumb=null),l.thumb=l.opts.thumb||(l.$thumb?l.$thumb[0].src:null),"function"===n.type(l.opts.caption)&&(l.opts.caption=l.opts.caption.apply(e,[o,l])),"function"===n.type(o.opts.caption)&&(l.opts.caption=o.opts.caption.apply(e,[o,l])),l.opts.caption instanceof n||(l.opts.caption=void 0===l.opts.caption?"":l.opts.caption+""),"ajax"===l.type&&(c=r.split(/\s+/,2),c.length>1&&(l.src=c.shift(),l.opts.filter=c.shift())),l.opts.modal&&(l.opts=n.extend(!0,l.opts,{trapFocus:!0,infobar:0,toolbar:0,smallBtn:0,keyboard:0,slideShow:0,fullScreen:0,thumbs:0,touch:0,clickContent:!1,clickSlide:!1,clickOutside:!1,dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1})),o.group.push(l)}),Object.keys(o.slides).length&&(o.updateControls(),(e=o.Thumbs)&&e.isActive&&(e.create(),e.focus()))},addEvents:function(){var e=this;e.removeEvents(),e.$refs.container.on("click.fb-close","[data-fancybox-close]",function(t){t.stopPropagation(),t.preventDefault(),e.close(t)}).on("touchstart.fb-prev click.fb-prev","[data-fancybox-prev]",function(t){t.stopPropagation(),t.preventDefault(),e.previous()}).on("touchstart.fb-next click.fb-next","[data-fancybox-next]",function(t){t.stopPropagation(),t.preventDefault(),e.next()}).on("click.fb","[data-fancybox-zoom]",function(t){e[e.isScaledDown()?"scaleToActual":"scaleToFit"]()}),s.on("orientationchange.fb resize.fb",function(t){t&&t.originalEvent&&"resize"===t.originalEvent.type?(e.requestId&&u(e.requestId),e.requestId=d(function(){e.update(t)})):(e.current&&"iframe"===e.current.type&&e.$refs.stage.hide(),setTimeout(function(){e.$refs.stage.show(),e.update(t)},n.fancybox.isMobile?600:250))}),r.on("keydown.fb",function(t){var o=n.fancybox?n.fancybox.getInstance():null,i=o.current,a=t.keyCode||t.which;if(9==a)return void(i.opts.trapFocus&&e.focus(t));if(!(!i.opts.keyboard||t.ctrlKey||t.altKey||t.shiftKey||n(t.target).is("input,textarea,video,audio,select")))return 8===a||27===a?(t.preventDefault(),void e.close(t)):37===a||38===a?(t.preventDefault(),void e.previous()):39===a||40===a?(t.preventDefault(),void e.next()):void e.trigger("afterKeydown",t,a)}),e.group[e.currIndex].opts.idleTime&&(e.idleSecondsCounter=0,r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",function(t){e.idleSecondsCounter=0,e.isIdle&&e.showControls(),e.isIdle=!1}),e.idleInterval=t.setInterval(function(){++e.idleSecondsCounter>=e.group[e.currIndex].opts.idleTime&&!e.isDragging&&(e.isIdle=!0,e.idleSecondsCounter=0,e.hideControls())},1e3))},removeEvents:function(){var e=this;s.off("orientationchange.fb resize.fb"),r.off("keydown.fb .fb-idle"),this.$refs.container.off(".fb-close .fb-prev .fb-next"),e.idleInterval&&(t.clearInterval(e.idleInterval),e.idleInterval=null)},previous:function(t){return this.jumpTo(this.currPos-1,t)},next:function(t){return this.jumpTo(this.currPos+1,t)},jumpTo:function(t,e){var o,i,a,s,r,c,l,d,u,f=this,h=f.group.length;if(!(f.isDragging||f.isClosing||f.isAnimating&&f.firstRun)){if(t=parseInt(t,10),!(a=f.current?f.current.opts.loop:f.opts.loop)&&(t<0||t>=h))return!1;if(o=f.firstRun=!Object.keys(f.slides).length,r=f.current,f.prevIndex=f.currIndex,f.prevPos=f.currPos,s=f.createSlide(t),h>1&&((a||s.index<h-1)&&f.createSlide(t+1),(a||s.index>0)&&f.createSlide(t-1)),f.current=s,f.currIndex=s.index,f.currPos=s.pos,f.trigger("beforeShow",o),f.updateControls(),s.forcedDuration=void 0,n.isNumeric(e)?s.forcedDuration=e:e=s.opts[o?"animationDuration":"transitionDuration"],e=parseInt(e,10),i=f.isMoved(s),s.$slide.addClass("fancybox-slide--current"),o)return s.opts.animationEffect&&e&&f.$refs.container.css("transition-duration",e+"ms"),f.$refs.container.addClass("fancybox-is-open").trigger("focus"),f.loadSlide(s),void f.preload("image");c=n.fancybox.getTranslate(r.$slide),l=n.fancybox.getTranslate(f.$refs.stage),n.each(f.slides,function(t,e){n.fancybox.stop(e.$slide,!0)}),r.pos!==s.pos&&(r.isComplete=!1),r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"),i?(u=c.left-(r.pos*c.width+r.pos*r.opts.gutter),n.each(f.slides,function(t,o){o.$slide.removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")});var i=o.pos*c.width+o.pos*o.opts.gutter;n.fancybox.setTranslate(o.$slide,{top:0,left:i-l.left+u}),o.pos!==s.pos&&o.$slide.addClass("fancybox-slide--"+(o.pos>s.pos?"next":"previous")),p(o.$slide),n.fancybox.animate(o.$slide,{top:0,left:(o.pos-s.pos)*c.width+(o.pos-s.pos)*o.opts.gutter},e,function(){o.$slide.css({transform:"",opacity:""}).removeClass("fancybox-slide--next fancybox-slide--previous"),o.pos===f.currPos&&f.complete()})})):e&&s.opts.transitionEffect&&(d="fancybox-animated fancybox-fx-"+s.opts.transitionEffect,r.$slide.addClass("fancybox-slide--"+(r.pos>s.pos?"next":"previous")),n.fancybox.animate(r.$slide,d,e,function(){r.$slide.removeClass(d).removeClass("fancybox-slide--next fancybox-slide--previous")},!1)),s.isLoaded?f.revealContent(s):f.loadSlide(s),f.preload("image")}},createSlide:function(t){var e,o,i=this;return o=t%i.group.length,o=o<0?i.group.length+o:o,!i.slides[t]&&i.group[o]&&(e=n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage),i.slides[t]=n.extend(!0,{},i.group[o],{pos:t,$slide:e,isLoaded:!1}),i.updateSlide(i.slides[t])),i.slides[t]},scaleToActual:function(t,e,o){var i,a,s,r,c,l=this,d=l.current,u=d.$content,f=n.fancybox.getTranslate(d.$slide).width,p=n.fancybox.getTranslate(d.$slide).height,h=d.width,g=d.height;l.isAnimating||l.isMoved()||!u||"image"!=d.type||!d.isLoaded||d.hasError||(l.isAnimating=!0,n.fancybox.stop(u),t=void 0===t?.5*f:t,e=void 0===e?.5*p:e,i=n.fancybox.getTranslate(u),i.top-=n.fancybox.getTranslate(d.$slide).top,i.left-=n.fancybox.getTranslate(d.$slide).left,r=h/i.width,c=g/i.height,a=.5*f-.5*h,s=.5*p-.5*g,h>f&&(a=i.left*r-(t*r-t),a>0&&(a=0),a<f-h&&(a=f-h)),g>p&&(s=i.top*c-(e*c-e),s>0&&(s=0),s<p-g&&(s=p-g)),l.updateCursor(h,g),n.fancybox.animate(u,{top:s,left:a,scaleX:r,scaleY:c},o||366,function(){l.isAnimating=!1}),l.SlideShow&&l.SlideShow.isActive&&l.SlideShow.stop())},scaleToFit:function(t){var e,o=this,i=o.current,a=i.$content;o.isAnimating||o.isMoved()||!a||"image"!=i.type||!i.isLoaded||i.hasError||(o.isAnimating=!0,n.fancybox.stop(a),e=o.getFitPos(i),o.updateCursor(e.width,e.height),n.fancybox.animate(a,{top:e.top,left:e.left,scaleX:e.width/a.width(),scaleY:e.height/a.height()},t||366,function(){o.isAnimating=!1}))},getFitPos:function(t){var e,o,i,a,s=this,r=t.$content,c=t.$slide,l=t.width||t.opts.width,d=t.height||t.opts.height,u={};return!!(t.isLoaded&&r&&r.length)&&(e=n.fancybox.getTranslate(s.$refs.stage).width,o=n.fancybox.getTranslate(s.$refs.stage).height,e-=parseFloat(c.css("paddingLeft"))+parseFloat(c.css("paddingRight"))+parseFloat(r.css("marginLeft"))+parseFloat(r.css("marginRight")),o-=parseFloat(c.css("paddingTop"))+parseFloat(c.css("paddingBottom"))+parseFloat(r.css("marginTop"))+parseFloat(r.css("marginBottom")),l&&d||(l=e,d=o),i=Math.min(1,e/l,o/d),l*=i,d*=i,l>e-.5&&(l=e),d>o-.5&&(d=o),"image"===t.type?(u.top=Math.floor(.5*(o-d))+parseFloat(c.css("paddingTop")),u.left=Math.floor(.5*(e-l))+parseFloat(c.css("paddingLeft"))):"video"===t.contentType&&(a=t.opts.width&&t.opts.height?l/d:t.opts.ratio||16/9,d>l/a?d=l/a:l>d*a&&(l=d*a)),u.width=l,u.height=d,u)},update:function(t){var e=this;n.each(e.slides,function(n,o){e.updateSlide(o,t)})},updateSlide:function(t,e){var o=this,i=t&&t.$content,a=t.width||t.opts.width,s=t.height||t.opts.height,r=t.$slide;o.adjustCaption(t),i&&(a||s||"video"===t.contentType)&&!t.hasError&&(n.fancybox.stop(i),n.fancybox.setTranslate(i,o.getFitPos(t)),t.pos===o.currPos&&(o.isAnimating=!1,o.updateCursor())),o.adjustLayout(t),r.length&&(r.trigger("refresh"),t.pos===o.currPos&&o.$refs.toolbar.add(o.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar",r.get(0).scrollHeight>r.get(0).clientHeight)),o.trigger("onUpdate",t,e)},centerSlide:function(t){var e=this,o=e.current,i=o.$slide;!e.isClosing&&o&&(i.siblings().css({transform:"",opacity:""}),i.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"),n.fancybox.animate(i,{top:0,left:0,opacity:1},void 0===t?0:t,function(){i.css({transform:"",opacity:""}),o.isComplete||e.complete()},!1))},isMoved:function(t){var e,o,i=t||this.current;return!!i&&(o=n.fancybox.getTranslate(this.$refs.stage),e=n.fancybox.getTranslate(i.$slide),!i.$slide.hasClass("fancybox-animated")&&(Math.abs(e.top-o.top)>.5||Math.abs(e.left-o.left)>.5))},updateCursor:function(t,e){var o,i,a=this,s=a.current,r=a.$refs.container;s&&!a.isClosing&&a.Guestures&&(r.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"),o=a.canPan(t,e),i=!!o||a.isZoomable(),r.toggleClass("fancybox-is-zoomable",i),n("[data-fancybox-zoom]").prop("disabled",!i),o?r.addClass("fancybox-can-pan"):i&&("zoom"===s.opts.clickContent||n.isFunction(s.opts.clickContent)&&"zoom"==s.opts.clickContent(s))?r.addClass("fancybox-can-zoomIn"):s.opts.touch&&(s.opts.touch.vertical||a.group.length>1)&&"video"!==s.contentType&&r.addClass("fancybox-can-swipe"))},isZoomable:function(){var t,e=this,n=e.current;if(n&&!e.isClosing&&"image"===n.type&&!n.hasError){if(!n.isLoaded)return!0;if((t=e.getFitPos(n))&&(n.width>t.width||n.height>t.height))return!0}return!1},isScaledDown:function(t,e){var o=this,i=!1,a=o.current,s=a.$content;return void 0!==t&&void 0!==e?i=t<a.width&&e<a.height:s&&(i=n.fancybox.getTranslate(s),i=i.width<a.width&&i.height<a.height),i},canPan:function(t,e){var o=this,i=o.current,a=null,s=!1;return"image"===i.type&&(i.isComplete||t&&e)&&!i.hasError&&(s=o.getFitPos(i),void 0!==t&&void 0!==e?a={width:t,height:e}:i.isComplete&&(a=n.fancybox.getTranslate(i.$content)),a&&s&&(s=Math.abs(a.width-s.width)>1.5||Math.abs(a.height-s.height)>1.5)),s},loadSlide:function(t){var e,o,i,a=this;if(!t.isLoading&&!t.isLoaded){if(t.isLoading=!0,!1===a.trigger("beforeLoad",t))return t.isLoading=!1,!1;switch(e=t.type,o=t.$slide,o.off("refresh").trigger("onReset").addClass(t.opts.slideClass),e){case"image":a.setImage(t);break;case"iframe":a.setIframe(t);break;case"html":a.setContent(t,t.src||t.content);break;case"video":a.setContent(t,t.opts.video.tpl.replace(/\{\{src\}\}/gi,t.src).replace("{{format}}",t.opts.videoFormat||t.opts.video.format||"").replace("{{poster}}",t.thumb||""));break;case"inline":n(t.src).length?a.setContent(t,n(t.src)):a.setError(t);break;case"ajax":a.showLoading(t),i=n.ajax(n.extend({},t.opts.ajax.settings,{url:t.src,success:function(e,n){"success"===n&&a.setContent(t,e)},error:function(e,n){e&&"abort"!==n&&a.setError(t)}})),o.one("onReset",function(){i.abort()});break;default:a.setError(t)}return!0}},setImage:function(t){var o,i=this;setTimeout(function(){var e=t.$image;i.isClosing||!t.isLoading||e&&e.length&&e[0].complete||t.hasError||i.showLoading(t)},50),i.checkSrcset(t),t.$content=n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")),!1!==t.opts.preload&&t.opts.width&&t.opts.height&&t.thumb&&(t.width=t.opts.width,t.height=t.opts.height,o=e.createElement("img"),o.onerror=function(){n(this).remove(),t.$ghost=null},o.onload=function(){i.afterLoad(t)},t.$ghost=n(o).addClass("fancybox-image").appendTo(t.$content).attr("src",t.thumb)),i.setBigImage(t)},checkSrcset:function(e){var n,o,i,a,s=e.opts.srcset||e.opts.image.srcset;if(s){i=t.devicePixelRatio||1,a=t.innerWidth*i,o=s.split(",").map(function(t){var e={};return t.trim().split(/\s+/).forEach(function(t,n){var o=parseInt(t.substring(0,t.length-1),10);if(0===n)return e.url=t;o&&(e.value=o,e.postfix=t[t.length-1])}),e}),o.sort(function(t,e){return t.value-e.value});for(var r=0;r<o.length;r++){var c=o[r];if("w"===c.postfix&&c.value>=a||"x"===c.postfix&&c.value>=i){n=c;break}}!n&&o.length&&(n=o[o.length-1]),n&&(e.src=n.url,e.width&&e.height&&"w"==n.postfix&&(e.height=e.width/e.height*n.value,e.width=n.value),e.opts.srcset=s)}},setBigImage:function(t){var o=this,i=e.createElement("img"),a=n(i);t.$image=a.one("error",function(){o.setError(t)}).one("load",function(){var e;t.$ghost||(o.resolveImageSlideSize(t,this.naturalWidth,this.naturalHeight),o.afterLoad(t)),o.isClosing||(t.opts.srcset&&(e=t.opts.sizes,e&&"auto"!==e||(e=(t.width/t.height>1&&s.width()/s.height()>1?"100":Math.round(t.width/t.height*100))+"vw"),a.attr("sizes",e).attr("srcset",t.opts.srcset)),t.$ghost&&setTimeout(function(){t.$ghost&&!o.isClosing&&t.$ghost.hide()},Math.min(300,Math.max(1e3,t.height/1600))),o.hideLoading(t))}).addClass("fancybox-image").attr("src",t.src).appendTo(t.$content),(i.complete||"complete"==i.readyState)&&a.naturalWidth&&a.naturalHeight?a.trigger("load"):i.error&&a.trigger("error")},resolveImageSlideSize:function(t,e,n){var o=parseInt(t.opts.width,10),i=parseInt(t.opts.height,10);t.width=e,t.height=n,o>0&&(t.width=o,t.height=Math.floor(o*n/e)),i>0&&(t.width=Math.floor(i*e/n),t.height=i)},setIframe:function(t){var e,o=this,i=t.opts.iframe,a=t.$slide;t.$content=n('<div class="fancybox-content'+(i.preload?" fancybox-is-hidden":"")+'"></div>').css(i.css).appendTo(a),a.addClass("fancybox-slide--"+t.contentType),t.$iframe=e=n(i.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr(i.attr).appendTo(t.$content),i.preload?(o.showLoading(t),e.on("load.fb error.fb",function(e){this.isReady=1,t.$slide.trigger("refresh"),o.afterLoad(t)}),a.on("refresh.fb",function(){var n,o,s=t.$content,r=i.css.width,c=i.css.height;if(1===e[0].isReady){try{n=e.contents(),o=n.find("body")}catch(t){}o&&o.length&&o.children().length&&(a.css("overflow","visible"),s.css({width:"100%","max-width":"100%",height:"9999px"}),void 0===r&&(r=Math.ceil(Math.max(o[0].clientWidth,o.outerWidth(!0)))),s.css("width",r||"").css("max-width",""),void 0===c&&(c=Math.ceil(Math.max(o[0].clientHeight,o.outerHeight(!0)))),s.css("height",c||""),a.css("overflow","auto")),s.removeClass("fancybox-is-hidden")}})):o.afterLoad(t),e.attr("src",t.src),a.one("onReset",function(){try{n(this).find("iframe").hide().unbind().attr("src","//about:blank")}catch(t){}n(this).off("refresh.fb").empty(),t.isLoaded=!1,t.isRevealed=!1})},setContent:function(t,e){var o=this;o.isClosing||(o.hideLoading(t),t.$content&&n.fancybox.stop(t.$content),t.$slide.empty(),l(e)&&e.parent().length?((e.hasClass("fancybox-content")||e.parent().hasClass("fancybox-content"))&&e.parents(".fancybox-slide").trigger("onReset"),t.$placeholder=n("<div>").hide().insertAfter(e),e.css("display","inline-block")):t.hasError||("string"===n.type(e)&&(e=n("<div>").append(n.trim(e)).contents()),t.opts.filter&&(e=n("<div>").html(e).find(t.opts.filter))),t.$slide.one("onReset",function(){n(this).find("video,audio").trigger("pause"),t.$placeholder&&(t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(),t.$placeholder=null),t.$smallBtn&&(t.$smallBtn.remove(),t.$smallBtn=null),t.hasError||(n(this).empty(),t.isLoaded=!1,t.isRevealed=!1)}),n(e).appendTo(t.$slide),n(e).is("video,audio")&&(n(e).addClass("fancybox-video"),n(e).wrap("<div></div>"),t.contentType="video",t.opts.width=t.opts.width||n(e).attr("width"),t.opts.height=t.opts.height||n(e).attr("height")),t.$content=t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(),t.$content.siblings().hide(),t.$content.length||(t.$content=t.$slide.wrapInner("<div></div>").children().first()),t.$content.addClass("fancybox-content"),t.$slide.addClass("fancybox-slide--"+t.contentType),o.afterLoad(t))},setError:function(t){t.hasError=!0,t.$slide.trigger("onReset").removeClass("fancybox-slide--"+t.contentType).addClass("fancybox-slide--error"),t.contentType="html",this.setContent(t,this.translate(t,t.opts.errorTpl)),t.pos===this.currPos&&(this.isAnimating=!1)},showLoading:function(t){var e=this;(t=t||e.current)&&!t.$spinner&&(t.$spinner=n(e.translate(e,e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))},hideLoading:function(t){var e=this;(t=t||e.current)&&t.$spinner&&(t.$spinner.stop().remove(),delete t.$spinner)},afterLoad:function(t){var e=this;e.isClosing||(t.isLoading=!1,t.isLoaded=!0,e.trigger("afterLoad",t),e.hideLoading(t),!t.opts.smallBtn||t.$smallBtn&&t.$smallBtn.length||(t.$smallBtn=n(e.translate(t,t.opts.btnTpl.smallBtn)).appendTo(t.$content)),t.opts.protect&&t.$content&&!t.hasError&&(t.$content.on("contextmenu.fb",function(t){return 2==t.button&&t.preventDefault(),!0}),"image"===t.type&&n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),e.adjustCaption(t),e.adjustLayout(t),t.pos===e.currPos&&e.updateCursor(),e.revealContent(t))},adjustCaption:function(t){var e,n=this,o=t||n.current,i=o.opts.caption,a=o.opts.preventCaptionOverlap,s=n.$refs.caption,r=!1;s.toggleClass("fancybox-caption--separate",a),a&&i&&i.length&&(o.pos!==n.currPos?(e=s.clone().appendTo(s.parent()),e.children().eq(0).empty().html(i),r=e.outerHeight(!0),e.empty().remove()):n.$caption&&(r=n.$caption.outerHeight(!0)),o.$slide.css("padding-bottom",r||""))},adjustLayout:function(t){var e,n,o,i,a=this,s=t||a.current;s.isLoaded&&!0!==s.opts.disableLayoutFix&&(s.$content.css("margin-bottom",""),s.$content.outerHeight()>s.$slide.height()+.5&&(o=s.$slide[0].style["padding-bottom"],i=s.$slide.css("padding-bottom"),parseFloat(i)>0&&(e=s.$slide[0].scrollHeight,s.$slide.css("padding-bottom",0),Math.abs(e-s.$slide[0].scrollHeight)<1&&(n=i),s.$slide.css("padding-bottom",o))),s.$content.css("margin-bottom",n))},revealContent:function(t){var e,o,i,a,s=this,r=t.$slide,c=!1,l=!1,d=s.isMoved(t),u=t.isRevealed;return t.isRevealed=!0,e=t.opts[s.firstRun?"animationEffect":"transitionEffect"],i=t.opts[s.firstRun?"animationDuration":"transitionDuration"],i=parseInt(void 0===t.forcedDuration?i:t.forcedDuration,10),!d&&t.pos===s.currPos&&i||(e=!1),"zoom"===e&&(t.pos===s.currPos&&i&&"image"===t.type&&!t.hasError&&(l=s.getThumbPos(t))?c=s.getFitPos(t):e="fade"),"zoom"===e?(s.isAnimating=!0,c.scaleX=c.width/l.width,c.scaleY=c.height/l.height,a=t.opts.zoomOpacity,"auto"==a&&(a=Math.abs(t.width/t.height-l.width/l.height)>.1),a&&(l.opacity=.1,c.opacity=1),n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"),l),p(t.$content),void n.fancybox.animate(t.$content,c,i,function(){s.isAnimating=!1,s.complete()})):(s.updateSlide(t),e?(n.fancybox.stop(r),o="fancybox-slide--"+(t.pos>=s.prevPos?"next":"previous")+" fancybox-animated fancybox-fx-"+e,r.addClass(o).removeClass("fancybox-slide--current"),t.$content.removeClass("fancybox-is-hidden"),p(r),"image"!==t.type&&t.$content.hide().show(0),void n.fancybox.animate(r,"fancybox-slide--current",i,function(){r.removeClass(o).css({transform:"",opacity:""}),t.pos===s.currPos&&s.complete()},!0)):(t.$content.removeClass("fancybox-is-hidden"),u||!d||"image"!==t.type||t.hasError||t.$content.hide().fadeIn("fast"),void(t.pos===s.currPos&&s.complete())))},getThumbPos:function(t){var e,o,i,a,s,r=!1,c=t.$thumb;return!(!c||!g(c[0]))&&(e=n.fancybox.getTranslate(c),o=parseFloat(c.css("border-top-width")||0),i=parseFloat(c.css("border-right-width")||0),a=parseFloat(c.css("border-bottom-width")||0),s=parseFloat(c.css("border-left-width")||0),r={top:e.top+o,left:e.left+s,width:e.width-i-s,height:e.height-o-a,scaleX:1,scaleY:1},e.width>0&&e.height>0&&r)},complete:function(){var t,e=this,o=e.current,i={};!e.isMoved()&&o.isLoaded&&(o.isComplete||(o.isComplete=!0,o.$slide.siblings().trigger("onReset"),e.preload("inline"),p(o.$slide),o.$slide.addClass("fancybox-slide--complete"),n.each(e.slides,function(t,o){o.pos>=e.currPos-1&&o.pos<=e.currPos+1?i[o.pos]=o:o&&(n.fancybox.stop(o.$slide),o.$slide.off().remove())}),e.slides=i),e.isAnimating=!1,e.updateCursor(),e.trigger("afterShow"),o.opts.video.autoStart&&o.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended",function(){Document.exitFullscreen?Document.exitFullscreen():this.webkitExitFullscreen&&this.webkitExitFullscreen(),e.next()}),o.opts.autoFocus&&"html"===o.contentType&&(t=o.$content.find("input[autofocus]:enabled:visible:first"),t.length?t.trigger("focus"):e.focus(null,!0)),o.$slide.scrollTop(0).scrollLeft(0))},preload:function(t){var e,n,o=this;o.group.length<2||(n=o.slides[o.currPos+1],e=o.slides[o.currPos-1],e&&e.type===t&&o.loadSlide(e),n&&n.type===t&&o.loadSlide(n))},focus:function(t,o){var i,a,s=this,r=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","video","audio","[contenteditable]",'[tabindex]:not([tabindex^="-"])'].join(",");s.isClosing||(i=!t&&s.current&&s.current.isComplete?s.current.$slide.find("*:visible"+(o?":not(.fancybox-close-small)":"")):s.$refs.container.find("*:visible"),i=i.filter(r).filter(function(){return"hidden"!==n(this).css("visibility")&&!n(this).hasClass("disabled")}),i.length?(a=i.index(e.activeElement),t&&t.shiftKey?(a<0||0==a)&&(t.preventDefault(),i.eq(i.length-1).trigger("focus")):(a<0||a==i.length-1)&&(t&&t.preventDefault(),i.eq(0).trigger("focus"))):s.$refs.container.trigger("focus"))},activate:function(){var t=this;n(".fancybox-container").each(function(){var e=n(this).data("FancyBox");e&&e.id!==t.id&&!e.isClosing&&(e.trigger("onDeactivate"),e.removeEvents(),e.isVisible=!1)}),t.isVisible=!0,(t.current||t.isIdle)&&(t.update(),t.updateControls()),t.trigger("onActivate"),t.addEvents()},close:function(t,e){var o,i,a,s,r,c,l,u=this,f=u.current,h=function(){u.cleanUp(t)};return!u.isClosing&&(u.isClosing=!0,!1===u.trigger("beforeClose",t)?(u.isClosing=!1,d(function(){u.update()}),!1):(u.removeEvents(),a=f.$content,o=f.opts.animationEffect,i=n.isNumeric(e)?e:o?f.opts.animationDuration:0,f.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),!0!==t?n.fancybox.stop(f.$slide):o=!1,f.$slide.siblings().trigger("onReset").remove(),i&&u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration",i+"ms"),u.hideLoading(f),u.hideControls(!0),u.updateCursor(),"zoom"!==o||a&&i&&"image"===f.type&&!u.isMoved()&&!f.hasError&&(l=u.getThumbPos(f))||(o="fade"),"zoom"===o?(n.fancybox.stop(a),s=n.fancybox.getTranslate(a),c={top:s.top,left:s.left,scaleX:s.width/l.width,scaleY:s.height/l.height,width:l.width,height:l.height},r=f.opts.zoomOpacity,
"auto"==r&&(r=Math.abs(f.width/f.height-l.width/l.height)>.1),r&&(l.opacity=0),n.fancybox.setTranslate(a,c),p(a),n.fancybox.animate(a,l,i,h),!0):(o&&i?n.fancybox.animate(f.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"),"fancybox-animated fancybox-fx-"+o,i,h):!0===t?setTimeout(h,i):h(),!0)))},cleanUp:function(e){var o,i,a,s=this,r=s.current.opts.$orig;s.current.$slide.trigger("onReset"),s.$refs.container.empty().remove(),s.trigger("afterClose",e),s.current.opts.backFocus&&(r&&r.length&&r.is(":visible")||(r=s.$trigger),r&&r.length&&(i=t.scrollX,a=t.scrollY,r.trigger("focus"),n("html, body").scrollTop(a).scrollLeft(i))),s.current=null,o=n.fancybox.getInstance(),o?o.activate():(n("body").removeClass("fancybox-active compensate-for-scrollbar"),n("#fancybox-style-noscroll").remove())},trigger:function(t,e){var o,i=Array.prototype.slice.call(arguments,1),a=this,s=e&&e.opts?e:a.current;if(s?i.unshift(s):s=a,i.unshift(a),n.isFunction(s.opts[t])&&(o=s.opts[t].apply(s,i)),!1===o)return o;"afterClose"!==t&&a.$refs?a.$refs.container.trigger(t+".fb",i):r.trigger(t+".fb",i)},updateControls:function(){var t=this,o=t.current,i=o.index,a=t.$refs.container,s=t.$refs.caption,r=o.opts.caption;o.$slide.trigger("refresh"),r&&r.length?(t.$caption=s,s.children().eq(0).html(r)):t.$caption=null,t.hasHiddenControls||t.isIdle||t.showControls(),a.find("[data-fancybox-count]").html(t.group.length),a.find("[data-fancybox-index]").html(i+1),a.find("[data-fancybox-prev]").prop("disabled",!o.opts.loop&&i<=0),a.find("[data-fancybox-next]").prop("disabled",!o.opts.loop&&i>=t.group.length-1),"image"===o.type?a.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href",o.opts.image.src||o.src).show():o.opts.toolbar&&a.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),n(e.activeElement).is(":hidden,[disabled]")&&t.$refs.container.trigger("focus")},hideControls:function(t){var e=this,n=["infobar","toolbar","nav"];!t&&e.current.opts.preventCaptionOverlap||n.push("caption"),this.$refs.container.removeClass(n.map(function(t){return"fancybox-show-"+t}).join(" ")),this.hasHiddenControls=!0},showControls:function(){var t=this,e=t.current?t.current.opts:t.opts,n=t.$refs.container;t.hasHiddenControls=!1,t.idleSecondsCounter=0,n.toggleClass("fancybox-show-toolbar",!(!e.toolbar||!e.buttons)).toggleClass("fancybox-show-infobar",!!(e.infobar&&t.group.length>1)).toggleClass("fancybox-show-caption",!!t.$caption).toggleClass("fancybox-show-nav",!!(e.arrows&&t.group.length>1)).toggleClass("fancybox-is-modal",!!e.modal)},toggleControls:function(){this.hasHiddenControls?this.showControls():this.hideControls()}}),n.fancybox={version:"3.5.7",defaults:a,getInstance:function(t){var e=n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),o=Array.prototype.slice.call(arguments,1);return e instanceof b&&("string"===n.type(t)?e[t].apply(e,o):"function"===n.type(t)&&t.apply(e,o),e)},open:function(t,e,n){return new b(t,e,n)},close:function(t){var e=this.getInstance();e&&(e.close(),!0===t&&this.close(t))},destroy:function(){this.close(!0),r.add("body").off("click.fb-start","**")},isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),use3d:function(){var n=e.createElement("div");return t.getComputedStyle&&t.getComputedStyle(n)&&t.getComputedStyle(n).getPropertyValue("transform")&&!(e.documentMode&&e.documentMode<11)}(),getTranslate:function(t){var e;return!(!t||!t.length)&&(e=t[0].getBoundingClientRect(),{top:e.top||0,left:e.left||0,width:e.width,height:e.height,opacity:parseFloat(t.css("opacity"))})},setTranslate:function(t,e){var n="",o={};if(t&&e)return void 0===e.left&&void 0===e.top||(n=(void 0===e.left?t.position().left:e.left)+"px, "+(void 0===e.top?t.position().top:e.top)+"px",n=this.use3d?"translate3d("+n+", 0px)":"translate("+n+")"),void 0!==e.scaleX&&void 0!==e.scaleY?n+=" scale("+e.scaleX+", "+e.scaleY+")":void 0!==e.scaleX&&(n+=" scaleX("+e.scaleX+")"),n.length&&(o.transform=n),void 0!==e.opacity&&(o.opacity=e.opacity),void 0!==e.width&&(o.width=e.width),void 0!==e.height&&(o.height=e.height),t.css(o)},animate:function(t,e,o,i,a){var s,r=this;n.isFunction(o)&&(i=o,o=null),r.stop(t),s=r.getTranslate(t),t.on(f,function(c){(!c||!c.originalEvent||t.is(c.originalEvent.target)&&"z-index"!=c.originalEvent.propertyName)&&(r.stop(t),n.isNumeric(o)&&t.css("transition-duration",""),n.isPlainObject(e)?void 0!==e.scaleX&&void 0!==e.scaleY&&r.setTranslate(t,{top:e.top,left:e.left,width:s.width*e.scaleX,height:s.height*e.scaleY,scaleX:1,scaleY:1}):!0!==a&&t.removeClass(e),n.isFunction(i)&&i(c))}),n.isNumeric(o)&&t.css("transition-duration",o+"ms"),n.isPlainObject(e)?(void 0!==e.scaleX&&void 0!==e.scaleY&&(delete e.width,delete e.height,t.parent().hasClass("fancybox-slide--image")&&t.parent().addClass("fancybox-is-scaling")),n.fancybox.setTranslate(t,e)):t.addClass(e),t.data("timer",setTimeout(function(){t.trigger(f)},o+33))},stop:function(t,e){t&&t.length&&(clearTimeout(t.data("timer")),e&&t.trigger(f),t.off(f).css("transition-duration",""),t.parent().removeClass("fancybox-is-scaling"))}},n.fn.fancybox=function(t){var e;return t=t||{},e=t.selector||!1,e?n("body").off("click.fb-start",e).on("click.fb-start",e,{options:t},i):this.off("click.fb-start").on("click.fb-start",{items:this,options:t},i),this},r.on("click.fb-start","[data-fancybox]",i),r.on("click.fb-start","[data-fancybox-trigger]",function(t){n('[data-fancybox="'+n(this).attr("data-fancybox-trigger")+'"]').eq(n(this).attr("data-fancybox-index")||0).trigger("click.fb-start",{$trigger:n(this)})}),function(){var t=null;r.on("mousedown mouseup focus blur",".fancybox-button",function(e){switch(e.type){case"mousedown":t=n(this);break;case"mouseup":t=null;break;case"focusin":n(".fancybox-button").removeClass("fancybox-focus"),n(this).is(t)||n(this).is("[disabled]")||n(this).addClass("fancybox-focus");break;case"focusout":n(".fancybox-button").removeClass("fancybox-focus")}})}()}}(window,document,jQuery),function(t){"use strict";var e={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"https://www.youtube-nocookie.com/embed/$4",thumb:"https://img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},gmap_place:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/?ll="+(t[9]?t[9]+"&z="+Math.floor(t[10])+(t[12]?t[12].replace(/^\//,"&"):""):t[12]+"").replace(/\?/,"&")+"&output="+(t[12]&&t[12].indexOf("layer=c")>0?"svembed":"embed")}},gmap_search:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/maps?q="+t[5].replace("query=","q=").replace("api=1","")+"&output=embed"}}},n=function(e,n,o){if(e)return o=o||"","object"===t.type(o)&&(o=t.param(o,!0)),t.each(n,function(t,n){e=e.replace("$"+t,n||"")}),o.length&&(e+=(e.indexOf("?")>0?"&":"?")+o),e};t(document).on("objectNeedsType.fb",function(o,i,a){var s,r,c,l,d,u,f,p=a.src||"",h=!1;s=t.extend(!0,{},e,a.opts.media),t.each(s,function(e,o){if(c=p.match(o.matcher)){if(h=o.type,f=e,u={},o.paramPlace&&c[o.paramPlace]){d=c[o.paramPlace],"?"==d[0]&&(d=d.substring(1)),d=d.split("&");for(var i=0;i<d.length;++i){var s=d[i].split("=",2);2==s.length&&(u[s[0]]=decodeURIComponent(s[1].replace(/\+/g," ")))}}return l=t.extend(!0,{},o.params,a.opts[e],u),p="function"===t.type(o.url)?o.url.call(this,c,l,a):n(o.url,c,l),r="function"===t.type(o.thumb)?o.thumb.call(this,c,l,a):n(o.thumb,c),"youtube"===e?p=p.replace(/&t=((\d+)m)?(\d+)s/,function(t,e,n,o){return"&start="+((n?60*parseInt(n,10):0)+parseInt(o,10))}):"vimeo"===e&&(p=p.replace("&%23","#")),!1}}),h?(a.opts.thumb||a.opts.$thumb&&a.opts.$thumb.length||(a.opts.thumb=r),"iframe"===h&&(a.opts=t.extend(!0,a.opts,{iframe:{preload:!1,attr:{scrolling:"no"}}})),t.extend(a,{type:h,src:p,origSrc:a.src,contentSource:f,contentType:"image"===h?"image":"gmap_place"==f||"gmap_search"==f?"map":"video"})):p&&(a.type=a.opts.defaultType)});var o={youtube:{src:"https://www.youtube.com/iframe_api",class:"YT",loading:!1,loaded:!1},vimeo:{src:"https://player.vimeo.com/api/player.js",class:"Vimeo",loading:!1,loaded:!1},load:function(t){var e,n=this;if(this[t].loaded)return void setTimeout(function(){n.done(t)});this[t].loading||(this[t].loading=!0,e=document.createElement("script"),e.type="text/javascript",e.src=this[t].src,"youtube"===t?window.onYouTubeIframeAPIReady=function(){n[t].loaded=!0,n.done(t)}:e.onload=function(){n[t].loaded=!0,n.done(t)},document.body.appendChild(e))},done:function(e){var n,o,i;"youtube"===e&&delete window.onYouTubeIframeAPIReady,(n=t.fancybox.getInstance())&&(o=n.current.$content.find("iframe"),"youtube"===e&&void 0!==YT&&YT?i=new YT.Player(o.attr("id"),{events:{onStateChange:function(t){0==t.data&&n.next()}}}):"vimeo"===e&&void 0!==Vimeo&&Vimeo&&(i=new Vimeo.Player(o),i.on("ended",function(){n.next()})))}};t(document).on({"afterShow.fb":function(t,e,n){e.group.length>1&&("youtube"===n.contentSource||"vimeo"===n.contentSource)&&o.load(n.contentSource)}})}(jQuery),function(t,e,n){"use strict";var o=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),i=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),a=function(e){var n=[];e=e.originalEvent||e||t.e,e=e.touches&&e.touches.length?e.touches:e.changedTouches&&e.changedTouches.length?e.changedTouches:[e];for(var o in e)e[o].pageX?n.push({x:e[o].pageX,y:e[o].pageY}):e[o].clientX&&n.push({x:e[o].clientX,y:e[o].clientY});return n},s=function(t,e,n){return e&&t?"x"===n?t.x-e.x:"y"===n?t.y-e.y:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)):0},r=function(t){if(t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe')||n.isFunction(t.get(0).onclick)||t.data("selectable"))return!0;for(var e=0,o=t[0].attributes,i=o.length;e<i;e++)if("data-fancybox-"===o[e].nodeName.substr(0,14))return!0;return!1},c=function(e){var n=t.getComputedStyle(e)["overflow-y"],o=t.getComputedStyle(e)["overflow-x"],i=("scroll"===n||"auto"===n)&&e.scrollHeight>e.clientHeight,a=("scroll"===o||"auto"===o)&&e.scrollWidth>e.clientWidth;return i||a},l=function(t){for(var e=!1;;){if(e=c(t.get(0)))break;if(t=t.parent(),!t.length||t.hasClass("fancybox-stage")||t.is("body"))break}return e},d=function(t){var e=this;e.instance=t,e.$bg=t.$refs.bg,e.$stage=t.$refs.stage,e.$container=t.$refs.container,e.destroy(),e.$container.on("touchstart.fb.touch mousedown.fb.touch",n.proxy(e,"ontouchstart"))};d.prototype.destroy=function(){var t=this;t.$container.off(".fb.touch"),n(e).off(".fb.touch"),t.requestId&&(i(t.requestId),t.requestId=null),t.tapped&&(clearTimeout(t.tapped),t.tapped=null)},d.prototype.ontouchstart=function(o){var i=this,c=n(o.target),d=i.instance,u=d.current,f=u.$slide,p=u.$content,h="touchstart"==o.type;if(h&&i.$container.off("mousedown.fb.touch"),(!o.originalEvent||2!=o.originalEvent.button)&&f.length&&c.length&&!r(c)&&!r(c.parent())&&(c.is("img")||!(o.originalEvent.clientX>c[0].clientWidth+c.offset().left))){if(!u||d.isAnimating||u.$slide.hasClass("fancybox-animated"))return o.stopPropagation(),void o.preventDefault();i.realPoints=i.startPoints=a(o),i.startPoints.length&&(u.touch&&o.stopPropagation(),i.startEvent=o,i.canTap=!0,i.$target=c,i.$content=p,i.opts=u.opts.touch,i.isPanning=!1,i.isSwiping=!1,i.isZooming=!1,i.isScrolling=!1,i.canPan=d.canPan(),i.startTime=(new Date).getTime(),i.distanceX=i.distanceY=i.distance=0,i.canvasWidth=Math.round(f[0].clientWidth),i.canvasHeight=Math.round(f[0].clientHeight),i.contentLastPos=null,i.contentStartPos=n.fancybox.getTranslate(i.$content)||{top:0,left:0},i.sliderStartPos=n.fancybox.getTranslate(f),i.stagePos=n.fancybox.getTranslate(d.$refs.stage),i.sliderStartPos.top-=i.stagePos.top,i.sliderStartPos.left-=i.stagePos.left,i.contentStartPos.top-=i.stagePos.top,i.contentStartPos.left-=i.stagePos.left,n(e).off(".fb.touch").on(h?"touchend.fb.touch touchcancel.fb.touch":"mouseup.fb.touch mouseleave.fb.touch",n.proxy(i,"ontouchend")).on(h?"touchmove.fb.touch":"mousemove.fb.touch",n.proxy(i,"ontouchmove")),n.fancybox.isMobile&&e.addEventListener("scroll",i.onscroll,!0),((i.opts||i.canPan)&&(c.is(i.$stage)||i.$stage.find(c).length)||(c.is(".fancybox-image")&&o.preventDefault(),n.fancybox.isMobile&&c.parents(".fancybox-caption").length))&&(i.isScrollable=l(c)||l(c.parent()),n.fancybox.isMobile&&i.isScrollable||o.preventDefault(),(1===i.startPoints.length||u.hasError)&&(i.canPan?(n.fancybox.stop(i.$content),i.isPanning=!0):i.isSwiping=!0,i.$container.addClass("fancybox-is-grabbing")),2===i.startPoints.length&&"image"===u.type&&(u.isLoaded||u.$ghost)&&(i.canTap=!1,i.isSwiping=!1,i.isPanning=!1,i.isZooming=!0,n.fancybox.stop(i.$content),i.centerPointStartX=.5*(i.startPoints[0].x+i.startPoints[1].x)-n(t).scrollLeft(),i.centerPointStartY=.5*(i.startPoints[0].y+i.startPoints[1].y)-n(t).scrollTop(),i.percentageOfImageAtPinchPointX=(i.centerPointStartX-i.contentStartPos.left)/i.contentStartPos.width,i.percentageOfImageAtPinchPointY=(i.centerPointStartY-i.contentStartPos.top)/i.contentStartPos.height,i.startDistanceBetweenFingers=s(i.startPoints[0],i.startPoints[1]))))}},d.prototype.onscroll=function(t){var n=this;n.isScrolling=!0,e.removeEventListener("scroll",n.onscroll,!0)},d.prototype.ontouchmove=function(t){var e=this;return void 0!==t.originalEvent.buttons&&0===t.originalEvent.buttons?void e.ontouchend(t):e.isScrolling?void(e.canTap=!1):(e.newPoints=a(t),void((e.opts||e.canPan)&&e.newPoints.length&&e.newPoints.length&&(e.isSwiping&&!0===e.isSwiping||t.preventDefault(),e.distanceX=s(e.newPoints[0],e.startPoints[0],"x"),e.distanceY=s(e.newPoints[0],e.startPoints[0],"y"),e.distance=s(e.newPoints[0],e.startPoints[0]),e.distance>0&&(e.isSwiping?e.onSwipe(t):e.isPanning?e.onPan():e.isZooming&&e.onZoom()))))},d.prototype.onSwipe=function(e){var a,s=this,r=s.instance,c=s.isSwiping,l=s.sliderStartPos.left||0;if(!0!==c)"x"==c&&(s.distanceX>0&&(s.instance.group.length<2||0===s.instance.current.index&&!s.instance.current.opts.loop)?l+=Math.pow(s.distanceX,.8):s.distanceX<0&&(s.instance.group.length<2||s.instance.current.index===s.instance.group.length-1&&!s.instance.current.opts.loop)?l-=Math.pow(-s.distanceX,.8):l+=s.distanceX),s.sliderLastPos={top:"x"==c?0:s.sliderStartPos.top+s.distanceY,left:l},s.requestId&&(i(s.requestId),s.requestId=null),s.requestId=o(function(){s.sliderLastPos&&(n.each(s.instance.slides,function(t,e){var o=e.pos-s.instance.currPos;n.fancybox.setTranslate(e.$slide,{top:s.sliderLastPos.top,left:s.sliderLastPos.left+o*s.canvasWidth+o*e.opts.gutter})}),s.$container.addClass("fancybox-is-sliding"))});else if(Math.abs(s.distance)>10){if(s.canTap=!1,r.group.length<2&&s.opts.vertical?s.isSwiping="y":r.isDragging||!1===s.opts.vertical||"auto"===s.opts.vertical&&n(t).width()>800?s.isSwiping="x":(a=Math.abs(180*Math.atan2(s.distanceY,s.distanceX)/Math.PI),s.isSwiping=a>45&&a<135?"y":"x"),"y"===s.isSwiping&&n.fancybox.isMobile&&s.isScrollable)return void(s.isScrolling=!0);r.isDragging=s.isSwiping,s.startPoints=s.newPoints,n.each(r.slides,function(t,e){var o,i;n.fancybox.stop(e.$slide),o=n.fancybox.getTranslate(e.$slide),i=n.fancybox.getTranslate(r.$refs.stage),e.$slide.css({transform:"",opacity:"","transition-duration":""}).removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")}),e.pos===r.current.pos&&(s.sliderStartPos.top=o.top-i.top,s.sliderStartPos.left=o.left-i.left),n.fancybox.setTranslate(e.$slide,{top:o.top-i.top,left:o.left-i.left})}),r.SlideShow&&r.SlideShow.isActive&&r.SlideShow.stop()}},d.prototype.onPan=function(){var t=this;if(s(t.newPoints[0],t.realPoints[0])<(n.fancybox.isMobile?10:5))return void(t.startPoints=t.newPoints);t.canTap=!1,t.contentLastPos=t.limitMovement(),t.requestId&&i(t.requestId),t.requestId=o(function(){n.fancybox.setTranslate(t.$content,t.contentLastPos)})},d.prototype.limitMovement=function(){var t,e,n,o,i,a,s=this,r=s.canvasWidth,c=s.canvasHeight,l=s.distanceX,d=s.distanceY,u=s.contentStartPos,f=u.left,p=u.top,h=u.width,g=u.height;return i=h>r?f+l:f,a=p+d,t=Math.max(0,.5*r-.5*h),e=Math.max(0,.5*c-.5*g),n=Math.min(r-h,.5*r-.5*h),o=Math.min(c-g,.5*c-.5*g),l>0&&i>t&&(i=t-1+Math.pow(-t+f+l,.8)||0),l<0&&i<n&&(i=n+1-Math.pow(n-f-l,.8)||0),d>0&&a>e&&(a=e-1+Math.pow(-e+p+d,.8)||0),d<0&&a<o&&(a=o+1-Math.pow(o-p-d,.8)||0),{top:a,left:i}},d.prototype.limitPosition=function(t,e,n,o){var i=this,a=i.canvasWidth,s=i.canvasHeight;return n>a?(t=t>0?0:t,t=t<a-n?a-n:t):t=Math.max(0,a/2-n/2),o>s?(e=e>0?0:e,e=e<s-o?s-o:e):e=Math.max(0,s/2-o/2),{top:e,left:t}},d.prototype.onZoom=function(){var e=this,a=e.contentStartPos,r=a.width,c=a.height,l=a.left,d=a.top,u=s(e.newPoints[0],e.newPoints[1]),f=u/e.startDistanceBetweenFingers,p=Math.floor(r*f),h=Math.floor(c*f),g=(r-p)*e.percentageOfImageAtPinchPointX,b=(c-h)*e.percentageOfImageAtPinchPointY,m=(e.newPoints[0].x+e.newPoints[1].x)/2-n(t).scrollLeft(),v=(e.newPoints[0].y+e.newPoints[1].y)/2-n(t).scrollTop(),y=m-e.centerPointStartX,x=v-e.centerPointStartY,w=l+(g+y),$=d+(b+x),S={top:$,left:w,scaleX:f,scaleY:f};e.canTap=!1,e.newWidth=p,e.newHeight=h,e.contentLastPos=S,e.requestId&&i(e.requestId),e.requestId=o(function(){n.fancybox.setTranslate(e.$content,e.contentLastPos)})},d.prototype.ontouchend=function(t){var o=this,s=o.isSwiping,r=o.isPanning,c=o.isZooming,l=o.isScrolling;if(o.endPoints=a(t),o.dMs=Math.max((new Date).getTime()-o.startTime,1),o.$container.removeClass("fancybox-is-grabbing"),n(e).off(".fb.touch"),e.removeEventListener("scroll",o.onscroll,!0),o.requestId&&(i(o.requestId),o.requestId=null),o.isSwiping=!1,o.isPanning=!1,o.isZooming=!1,o.isScrolling=!1,o.instance.isDragging=!1,o.canTap)return o.onTap(t);o.speed=100,o.velocityX=o.distanceX/o.dMs*.5,o.velocityY=o.distanceY/o.dMs*.5,r?o.endPanning():c?o.endZooming():o.endSwiping(s,l)},d.prototype.endSwiping=function(t,e){var o=this,i=!1,a=o.instance.group.length,s=Math.abs(o.distanceX),r="x"==t&&a>1&&(o.dMs>130&&s>10||s>50);o.sliderLastPos=null,"y"==t&&!e&&Math.abs(o.distanceY)>50?(n.fancybox.animate(o.instance.current.$slide,{top:o.sliderStartPos.top+o.distanceY+150*o.velocityY,opacity:0},200),i=o.instance.close(!0,250)):r&&o.distanceX>0?i=o.instance.previous(300):r&&o.distanceX<0&&(i=o.instance.next(300)),!1!==i||"x"!=t&&"y"!=t||o.instance.centerSlide(200),o.$container.removeClass("fancybox-is-sliding")},d.prototype.endPanning=function(){var t,e,o,i=this;i.contentLastPos&&(!1===i.opts.momentum||i.dMs>350?(t=i.contentLastPos.left,e=i.contentLastPos.top):(t=i.contentLastPos.left+500*i.velocityX,e=i.contentLastPos.top+500*i.velocityY),o=i.limitPosition(t,e,i.contentStartPos.width,i.contentStartPos.height),o.width=i.contentStartPos.width,o.height=i.contentStartPos.height,n.fancybox.animate(i.$content,o,366))},d.prototype.endZooming=function(){var t,e,o,i,a=this,s=a.instance.current,r=a.newWidth,c=a.newHeight;a.contentLastPos&&(t=a.contentLastPos.left,e=a.contentLastPos.top,i={top:e,left:t,width:r,height:c,scaleX:1,scaleY:1},n.fancybox.setTranslate(a.$content,i),r<a.canvasWidth&&c<a.canvasHeight?a.instance.scaleToFit(150):r>s.width||c>s.height?a.instance.scaleToActual(a.centerPointStartX,a.centerPointStartY,150):(o=a.limitPosition(t,e,r,c),n.fancybox.animate(a.$content,o,150)))},d.prototype.onTap=function(e){var o,i=this,s=n(e.target),r=i.instance,c=r.current,l=e&&a(e)||i.startPoints,d=l[0]?l[0].x-n(t).scrollLeft()-i.stagePos.left:0,u=l[0]?l[0].y-n(t).scrollTop()-i.stagePos.top:0,f=function(t){var o=c.opts[t];if(n.isFunction(o)&&(o=o.apply(r,[c,e])),o)switch(o){case"close":r.close(i.startEvent);break;case"toggleControls":r.toggleControls();break;case"next":r.next();break;case"nextOrClose":r.group.length>1?r.next():r.close(i.startEvent);break;case"zoom":"image"==c.type&&(c.isLoaded||c.$ghost)&&(r.canPan()?r.scaleToFit():r.isScaledDown()?r.scaleToActual(d,u):r.group.length<2&&r.close(i.startEvent))}};if((!e.originalEvent||2!=e.originalEvent.button)&&(s.is("img")||!(d>s[0].clientWidth+s.offset().left))){if(s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))o="Outside";else if(s.is(".fancybox-slide"))o="Slide";else{if(!r.current.$content||!r.current.$content.find(s).addBack().filter(s).length)return;o="Content"}if(i.tapped){if(clearTimeout(i.tapped),i.tapped=null,Math.abs(d-i.tapX)>50||Math.abs(u-i.tapY)>50)return this;f("dblclick"+o)}else i.tapX=d,i.tapY=u,c.opts["dblclick"+o]&&c.opts["dblclick"+o]!==c.opts["click"+o]?i.tapped=setTimeout(function(){i.tapped=null,r.isAnimating||f("click"+o)},500):f("click"+o);return this}},n(e).on("onActivate.fb",function(t,e){e&&!e.Guestures&&(e.Guestures=new d(e))}).on("beforeClose.fb",function(t,e){e&&e.Guestures&&e.Guestures.destroy()})}(window,document,jQuery),function(t,e){"use strict";e.extend(!0,e.fancybox.defaults,{btnTpl:{slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'},slideShow:{autoStart:!1,speed:3e3,progress:!0}});var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{timer:null,isActive:!1,$button:null,init:function(){var t=this,n=t.instance,o=n.group[n.currIndex].opts.slideShow;t.$button=n.$refs.toolbar.find("[data-fancybox-play]").on("click",function(){t.toggle()}),n.group.length<2||!o?t.$button.hide():o.progress&&(t.$progress=e('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner))},set:function(t){var n=this,o=n.instance,i=o.current;i&&(!0===t||i.opts.loop||o.currIndex<o.group.length-1)?n.isActive&&"video"!==i.contentType&&(n.$progress&&e.fancybox.animate(n.$progress.show(),{scaleX:1},i.opts.slideShow.speed),n.timer=setTimeout(function(){o.current.opts.loop||o.current.index!=o.group.length-1?o.next():o.jumpTo(0)},i.opts.slideShow.speed)):(n.stop(),o.idleSecondsCounter=0,o.showControls())},clear:function(){var t=this;clearTimeout(t.timer),t.timer=null,t.$progress&&t.$progress.removeAttr("style").hide()},start:function(){var t=this,e=t.instance.current;e&&(t.$button.attr("title",(e.opts.i18n[e.opts.lang]||e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),t.isActive=!0,e.isComplete&&t.set(!0),t.instance.trigger("onSlideShowChange",!0))},stop:function(){var t=this,e=t.instance.current;t.clear(),t.$button.attr("title",(e.opts.i18n[e.opts.lang]||e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"),t.isActive=!1,t.instance.trigger("onSlideShowChange",!1),t.$progress&&t.$progress.removeAttr("style").hide()},toggle:function(){var t=this;t.isActive?t.stop():t.start()}}),e(t).on({"onInit.fb":function(t,e){e&&!e.SlideShow&&(e.SlideShow=new n(e))},"beforeShow.fb":function(t,e,n,o){var i=e&&e.SlideShow;o?i&&n.opts.slideShow.autoStart&&i.start():i&&i.isActive&&i.clear()},"afterShow.fb":function(t,e,n){var o=e&&e.SlideShow;o&&o.isActive&&o.set()},"afterKeydown.fb":function(n,o,i,a,s){var r=o&&o.SlideShow;!r||!i.opts.slideShow||80!==s&&32!==s||e(t.activeElement).is("button,a,input")||(a.preventDefault(),r.toggle())},"beforeClose.fb onDeactivate.fb":function(t,e){var n=e&&e.SlideShow;n&&n.stop()}}),e(t).on("visibilitychange",function(){var n=e.fancybox.getInstance(),o=n&&n.SlideShow;o&&o.isActive&&(t.hidden?o.clear():o.set())})}(document,jQuery),function(t,e){"use strict";var n=function(){for(var e=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n={},o=0;o<e.length;o++){var i=e[o];if(i&&i[1]in t){for(var a=0;a<i.length;a++)n[e[0][a]]=i[a];return n}}return!1}();if(n){var o={request:function(e){e=e||t.documentElement,e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)},exit:function(){t[n.exitFullscreen]()},toggle:function(e){e=e||t.documentElement,this.isFullscreen()?this.exit():this.request(e)},isFullscreen:function(){return Boolean(t[n.fullscreenElement])},enabled:function(){return Boolean(t[n.fullscreenEnabled])}};e.extend(!0,e.fancybox.defaults,{btnTpl:{fullScreen:'<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'},fullScreen:{autoStart:!1}}),e(t).on(n.fullscreenchange,function(){var t=o.isFullscreen(),n=e.fancybox.getInstance();n&&(n.current&&"image"===n.current.type&&n.isAnimating&&(n.isAnimating=!1,n.update(!0,!0,0),n.isComplete||n.complete()),n.trigger("onFullscreenChange",t),n.$refs.container.toggleClass("fancybox-is-fullscreen",t),n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter",!t).toggleClass("fancybox-button--fsexit",t))})}e(t).on({"onInit.fb":function(t,e){var i;if(!n)return void e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();e&&e.group[e.currIndex].opts.fullScreen?(i=e.$refs.container,i.on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(t){t.stopPropagation(),t.preventDefault(),o.toggle()}),e.opts.fullScreen&&!0===e.opts.fullScreen.autoStart&&o.request(),e.FullScreen=o):e&&e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()},"afterKeydown.fb":function(t,e,n,o,i){e&&e.FullScreen&&70===i&&(o.preventDefault(),e.FullScreen.toggle())},"beforeClose.fb":function(t,e){e&&e.FullScreen&&e.$refs.container.hasClass("fancybox-is-fullscreen")&&o.exit()}})}(document,jQuery),function(t,e){"use strict";var n="fancybox-thumbs";e.fancybox.defaults=e.extend(!0,{btnTpl:{thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"}},e.fancybox.defaults);var o=function(t){this.init(t)};e.extend(o.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,isActive:!1,init:function(t){var e=this,n=t.group,o=0;e.instance=t,e.opts=n[t.currIndex].opts.thumbs,t.Thumbs=e,e.$button=t.$refs.toolbar.find("[data-fancybox-thumbs]");for(var i=0,a=n.length;i<a&&(n[i].thumb&&o++,!(o>1));i++);o>1&&e.opts?(e.$button.removeAttr("style").on("click",function(){e.toggle()}),e.isActive=!0):e.$button.hide()},create:function(){var t,o=this,i=o.instance,a=o.opts.parentEl,s=[];o.$grid||(o.$grid=e('<div class="'+n+" "+n+"-"+o.opts.axis+'"></div>').appendTo(i.$refs.container.find(a).addBack().filter(a)),o.$grid.on("click","a",function(){i.jumpTo(e(this).attr("data-index"))})),o.$list||(o.$list=e('<div class="'+n+'__list">').appendTo(o.$grid)),e.each(i.group,function(e,n){t=n.thumb,t||"image"!==n.type||(t=n.src),s.push('<a href="javascript:;" tabindex="0" data-index="'+e+'"'+(t&&t.length?' style="background-image:url('+t+')"':'class="fancybox-thumbs-missing"')+"></a>")}),o.$list[0].innerHTML=s.join(""),"x"===o.opts.axis&&o.$list.width(parseInt(o.$grid.css("padding-right"),10)+i.group.length*o.$list.children().eq(0).outerWidth(!0))},focus:function(t){var e,n,o=this,i=o.$list,a=o.$grid;o.instance.current&&(e=i.children().removeClass("fancybox-thumbs-active").filter('[data-index="'+o.instance.current.index+'"]').addClass("fancybox-thumbs-active"),n=e.position(),"y"===o.opts.axis&&(n.top<0||n.top>i.height()-e.outerHeight())?i.stop().animate({scrollTop:i.scrollTop()+n.top},t):"x"===o.opts.axis&&(n.left<a.scrollLeft()||n.left>a.scrollLeft()+(a.width()-e.outerWidth()))&&i.parent().stop().animate({scrollLeft:n.left},t))},update:function(){var t=this;t.instance.$refs.container.toggleClass("fancybox-show-thumbs",this.isVisible),t.isVisible?(t.$grid||t.create(),t.instance.trigger("onThumbsShow"),t.focus(0)):t.$grid&&t.instance.trigger("onThumbsHide"),t.instance.update()},hide:function(){this.isVisible=!1,this.update()},show:function(){this.isVisible=!0,this.update()},toggle:function(){this.isVisible=!this.isVisible,this.update()}}),e(t).on({"onInit.fb":function(t,e){var n;e&&!e.Thumbs&&(n=new o(e),n.isActive&&!0===n.opts.autoStart&&n.show())},"beforeShow.fb":function(t,e,n,o){var i=e&&e.Thumbs;i&&i.isVisible&&i.focus(o?0:250)},"afterKeydown.fb":function(t,e,n,o,i){var a=e&&e.Thumbs;a&&a.isActive&&71===i&&(o.preventDefault(),a.toggle())},"beforeClose.fb":function(t,e){var n=e&&e.Thumbs;n&&n.isVisible&&!1!==n.opts.hideOnClose&&n.$grid.hide()}})}(document,jQuery),function(t,e){"use strict";function n(t){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};return String(t).replace(/[&<>"'`=\/]/g,function(t){return e[t]})}e.extend(!0,e.fancybox.defaults,{btnTpl:{share:'<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'},share:{url:function(t,e){return!t.currentHash&&"inline"!==e.type&&"html"!==e.type&&(e.origSrc||e.src)||window.location},
tpl:'<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'}}),e(t).on("click","[data-fancybox-share]",function(){var t,o,i=e.fancybox.getInstance(),a=i.current||null;a&&("function"===e.type(a.opts.share.url)&&(t=a.opts.share.url.apply(a,[i,a])),o=a.opts.share.tpl.replace(/\{\{media\}\}/g,"image"===a.type?encodeURIComponent(a.src):"").replace(/\{\{url\}\}/g,encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g,n(t)).replace(/\{\{descr\}\}/g,i.$caption?encodeURIComponent(i.$caption.text()):""),e.fancybox.open({src:i.translate(i,o),type:"html",opts:{touch:!1,animationEffect:!1,afterLoad:function(t,e){i.$refs.container.one("beforeClose.fb",function(){t.close(null,0)}),e.$content.find(".fancybox-share__button").click(function(){return window.open(this.href,"Share","width=550, height=450"),!1})},mobile:{autoFocus:!1}}}))})}(document,jQuery),function(t,e,n){"use strict";function o(){var e=t.location.hash.substr(1),n=e.split("-"),o=n.length>1&&/^\+?\d+$/.test(n[n.length-1])?parseInt(n.pop(-1),10)||1:1,i=n.join("-");return{hash:e,index:o<1?1:o,gallery:i}}function i(t){""!==t.gallery&&n("[data-fancybox='"+n.escapeSelector(t.gallery)+"']").eq(t.index-1).focus().trigger("click.fb-start")}function a(t){var e,n;return!!t&&(e=t.current?t.current.opts:t.opts,""!==(n=e.hash||(e.$orig?e.$orig.data("fancybox")||e.$orig.data("fancybox-trigger"):""))&&n)}n.escapeSelector||(n.escapeSelector=function(t){return(t+"").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t})}),n(function(){!1!==n.fancybox.defaults.hash&&(n(e).on({"onInit.fb":function(t,e){var n,i;!1!==e.group[e.currIndex].opts.hash&&(n=o(),(i=a(e))&&n.gallery&&i==n.gallery&&(e.currIndex=n.index-1))},"beforeShow.fb":function(n,o,i,s){var r;i&&!1!==i.opts.hash&&(r=a(o))&&(o.currentHash=r+(o.group.length>1?"-"+(i.index+1):""),t.location.hash!=="#"+o.currentHash&&(s&&!o.origHash&&(o.origHash=t.location.hash),o.hashTimer&&clearTimeout(o.hashTimer),o.hashTimer=setTimeout(function(){"replaceState"in t.history?(t.history[s?"pushState":"replaceState"]({},e.title,t.location.pathname+t.location.search+"#"+o.currentHash),s&&(o.hasCreatedHistory=!0)):t.location.hash=o.currentHash,o.hashTimer=null},300)))},"beforeClose.fb":function(n,o,i){i&&!1!==i.opts.hash&&(clearTimeout(o.hashTimer),o.currentHash&&o.hasCreatedHistory?t.history.back():o.currentHash&&("replaceState"in t.history?t.history.replaceState({},e.title,t.location.pathname+t.location.search+(o.origHash||"")):t.location.hash=o.origHash),o.currentHash=null)}}),n(t).on("hashchange.fb",function(){var t=o(),e=null;n.each(n(".fancybox-container").get().reverse(),function(t,o){var i=n(o).data("FancyBox");if(i&&i.currentHash)return e=i,!1}),e?e.currentHash===t.gallery+"-"+t.index||1===t.index&&e.currentHash==t.gallery||(e.currentHash=null,e.close()):""!==t.gallery&&i(t)}),setTimeout(function(){n.fancybox.getInstance()||i(o())},50))})}(window,document,jQuery),function(t,e){"use strict";var n=(new Date).getTime();e(t).on({"onInit.fb":function(t,e,o){e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll",function(t){var o=e.current,i=(new Date).getTime();e.group.length<2||!1===o.opts.wheel||"auto"===o.opts.wheel&&"image"!==o.type||(t.preventDefault(),t.stopPropagation(),o.$slide.hasClass("fancybox-animated")||(t=t.originalEvent||t,i-n<250||(n=i,e[(-t.deltaY||-t.deltaX||t.wheelDelta||-t.detail)<0?"next":"previous"]())))})}})}(document,jQuery);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.theme.progressBar = function (id) {
    return '<div id="' + id + '" class="progress" aria-live="polite">' + '<div class="progress__label">&nbsp;</div>' + '<div class="progress__track"><div class="progress__bar"></div></div>' + '<div class="progress__percentage"></div>' + '<div class="progress__description">&nbsp;</div>' + '</div>';
  };

  Drupal.ProgressBar = function (id, updateCallback, method, errorCallback) {
    this.id = id;
    this.method = method || 'GET';
    this.updateCallback = updateCallback;
    this.errorCallback = errorCallback;

    this.element = $(Drupal.theme('progressBar', id));
  };

  $.extend(Drupal.ProgressBar.prototype, {
    setProgress: function setProgress(percentage, message, label) {
      if (percentage >= 0 && percentage <= 100) {
        $(this.element).find('div.progress__bar').css('width', percentage + '%');
        $(this.element).find('div.progress__percentage').html(percentage + '%');
      }
      $('div.progress__description', this.element).html(message);
      $('div.progress__label', this.element).html(label);
      if (this.updateCallback) {
        this.updateCallback(percentage, message, this);
      }
    },
    startMonitoring: function startMonitoring(uri, delay) {
      this.delay = delay;
      this.uri = uri;
      this.sendPing();
    },
    stopMonitoring: function stopMonitoring() {
      clearTimeout(this.timer);

      this.uri = null;
    },
    sendPing: function sendPing() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (this.uri) {
        var pb = this;

        var uri = this.uri;
        if (uri.indexOf('?') === -1) {
          uri += '?';
        } else {
          uri += '&';
        }
        uri += '_format=json';
        $.ajax({
          type: this.method,
          url: uri,
          data: '',
          dataType: 'json',
          success: function success(progress) {
            if (progress.status === 0) {
              pb.displayError(progress.data);
              return;
            }

            pb.setProgress(progress.percentage, progress.message, progress.label);

            pb.timer = setTimeout(function () {
              pb.sendPing();
            }, pb.delay);
          },
          error: function error(xmlhttp) {
            var e = new Drupal.AjaxError(xmlhttp, pb.uri);
            pb.displayError('<pre>' + e.message + '</pre>');
          }
        });
      }
    },
    displayError: function displayError(string) {
      var error = $('<div class="messages messages--error"></div>').html(string);
      $(this.element).before(error).hide();

      if (this.errorCallback) {
        this.errorCallback(this);
      }
    }
  });
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function ($, window, Drupal, drupalSettings) {
  Drupal.behaviors.AJAX = {
    attach: function attach(context, settings) {
      function loadAjaxBehavior(base) {
        var elementSettings = settings.ajax[base];
        if (typeof elementSettings.selector === 'undefined') {
          elementSettings.selector = '#' + base;
        }
        $(elementSettings.selector).once('drupal-ajax').each(function () {
          elementSettings.element = this;
          elementSettings.base = base;
          Drupal.ajax(elementSettings);
        });
      }

      Object.keys(settings.ajax || {}).forEach(function (base) {
        return loadAjaxBehavior(base);
      });

      Drupal.ajax.bindAjaxLinks(document.body);

      $('.use-ajax-submit').once('ajax').each(function () {
        var elementSettings = {};

        elementSettings.url = $(this.form).attr('action');

        elementSettings.setClick = true;

        elementSettings.event = 'click';

        elementSettings.progress = { type: 'throbber' };
        elementSettings.base = $(this).attr('id');
        elementSettings.element = this;

        Drupal.ajax(elementSettings);
      });
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        Drupal.ajax.expired().forEach(function (instance) {
          Drupal.ajax.instances[instance.instanceIndex] = null;
        });
      }
    }
  };

  Drupal.AjaxError = function (xmlhttp, uri, customMessage) {
    var statusCode = void 0;
    var statusText = void 0;
    var responseText = void 0;
    if (xmlhttp.status) {
      statusCode = '\n' + Drupal.t('An AJAX HTTP error occurred.') + '\n' + Drupal.t('HTTP Result Code: !status', {
        '!status': xmlhttp.status
      });
    } else {
      statusCode = '\n' + Drupal.t('An AJAX HTTP request terminated abnormally.');
    }
    statusCode += '\n' + Drupal.t('Debugging information follows.');
    var pathText = '\n' + Drupal.t('Path: !uri', { '!uri': uri });
    statusText = '';

    try {
      statusText = '\n' + Drupal.t('StatusText: !statusText', {
        '!statusText': $.trim(xmlhttp.statusText)
      });
    } catch (e) {}

    responseText = '';

    try {
      responseText = '\n' + Drupal.t('ResponseText: !responseText', {
        '!responseText': $.trim(xmlhttp.responseText)
      });
    } catch (e) {}

    responseText = responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, '');
    responseText = responseText.replace(/[\n]+\s+/g, '\n');

    var readyStateText = xmlhttp.status === 0 ? '\n' + Drupal.t('ReadyState: !readyState', {
      '!readyState': xmlhttp.readyState
    }) : '';

    customMessage = customMessage ? '\n' + Drupal.t('CustomMessage: !customMessage', {
      '!customMessage': customMessage
    }) : '';

    this.message = statusCode + pathText + statusText + customMessage + responseText + readyStateText;

    this.name = 'AjaxError';
  };

  Drupal.AjaxError.prototype = new Error();
  Drupal.AjaxError.prototype.constructor = Drupal.AjaxError;

  Drupal.ajax = function (settings) {
    if (arguments.length !== 1) {
      throw new Error('Drupal.ajax() function must be called with one configuration object only');
    }

    var base = settings.base || false;
    var element = settings.element || false;
    delete settings.base;
    delete settings.element;

    if (!settings.progress && !element) {
      settings.progress = false;
    }

    var ajax = new Drupal.Ajax(base, element, settings);
    ajax.instanceIndex = Drupal.ajax.instances.length;
    Drupal.ajax.instances.push(ajax);

    return ajax;
  };

  Drupal.ajax.instances = [];

  Drupal.ajax.expired = function () {
    return Drupal.ajax.instances.filter(function (instance) {
      return instance && instance.element !== false && !document.body.contains(instance.element);
    });
  };

  Drupal.ajax.bindAjaxLinks = function (element) {
    $(element).find('.use-ajax').once('ajax').each(function (i, ajaxLink) {
      var $linkElement = $(ajaxLink);

      var elementSettings = {
        progress: { type: 'throbber' },
        dialogType: $linkElement.data('dialog-type'),
        dialog: $linkElement.data('dialog-options'),
        dialogRenderer: $linkElement.data('dialog-renderer'),
        base: $linkElement.attr('id'),
        element: ajaxLink
      };
      var href = $linkElement.attr('href');

      if (href) {
        elementSettings.url = href;
        elementSettings.event = 'click';
      }
      Drupal.ajax(elementSettings);
    });
  };

  Drupal.Ajax = function (base, element, elementSettings) {
    var defaults = {
      event: element ? 'mousedown' : null,
      keypress: true,
      selector: base ? '#' + base : null,
      effect: 'none',
      speed: 'none',
      method: 'replaceWith',
      progress: {
        type: 'throbber',
        message: Drupal.t('Please wait...')
      },
      submit: {
        js: true
      }
    };

    $.extend(this, defaults, elementSettings);

    this.commands = new Drupal.AjaxCommands();

    this.instanceIndex = false;

    if (this.wrapper) {
      this.wrapper = '#' + this.wrapper;
    }

    this.element = element;

    this.element_settings = elementSettings;

    this.elementSettings = elementSettings;

    if (this.element && this.element.form) {
      this.$form = $(this.element.form);
    }

    if (!this.url) {
      var $element = $(this.element);
      if ($element.is('a')) {
        this.url = $element.attr('href');
      } else if (this.element && element.form) {
        this.url = this.$form.attr('action');
      }
    }

    var originalUrl = this.url;

    this.url = this.url.replace(/\/nojs(\/|$|\?|#)/, '/ajax$1');

    if (drupalSettings.ajaxTrustedUrl[originalUrl]) {
      drupalSettings.ajaxTrustedUrl[this.url] = true;
    }

    var ajax = this;

    ajax.options = {
      url: ajax.url,
      data: ajax.submit,
      beforeSerialize: function beforeSerialize(elementSettings, options) {
        return ajax.beforeSerialize(elementSettings, options);
      },
      beforeSubmit: function beforeSubmit(formValues, elementSettings, options) {
        ajax.ajaxing = true;
        return ajax.beforeSubmit(formValues, elementSettings, options);
      },
      beforeSend: function beforeSend(xmlhttprequest, options) {
        ajax.ajaxing = true;
        return ajax.beforeSend(xmlhttprequest, options);
      },
      success: function success(response, status, xmlhttprequest) {
        if (typeof response === 'string') {
          response = $.parseJSON(response);
        }

        if (response !== null && !drupalSettings.ajaxTrustedUrl[ajax.url]) {
          if (xmlhttprequest.getResponseHeader('X-Drupal-Ajax-Token') !== '1') {
            var customMessage = Drupal.t('The response failed verification so will not be processed.');
            return ajax.error(xmlhttprequest, ajax.url, customMessage);
          }
        }

        return ajax.success(response, status);
      },
      complete: function complete(xmlhttprequest, status) {
        ajax.ajaxing = false;
        if (status === 'error' || status === 'parsererror') {
          return ajax.error(xmlhttprequest, ajax.url);
        }
      },

      dataType: 'json',
      jsonp: false,
      type: 'POST'
    };

    if (elementSettings.dialog) {
      ajax.options.data.dialogOptions = elementSettings.dialog;
    }

    if (ajax.options.url.indexOf('?') === -1) {
      ajax.options.url += '?';
    } else {
      ajax.options.url += '&';
    }

    var wrapper = 'drupal_' + (elementSettings.dialogType || 'ajax');
    if (elementSettings.dialogRenderer) {
      wrapper += '.' + elementSettings.dialogRenderer;
    }
    ajax.options.url += Drupal.ajax.WRAPPER_FORMAT + '=' + wrapper;

    $(ajax.element).on(elementSettings.event, function (event) {
      if (!drupalSettings.ajaxTrustedUrl[ajax.url] && !Drupal.url.isLocal(ajax.url)) {
        throw new Error(Drupal.t('The callback URL is not local and not trusted: !url', {
          '!url': ajax.url
        }));
      }
      return ajax.eventResponse(this, event);
    });

    if (elementSettings.keypress) {
      $(ajax.element).on('keypress', function (event) {
        return ajax.keypressResponse(this, event);
      });
    }

    if (elementSettings.prevent) {
      $(ajax.element).on(elementSettings.prevent, false);
    }
  };

  Drupal.ajax.WRAPPER_FORMAT = '_wrapper_format';

  Drupal.Ajax.AJAX_REQUEST_PARAMETER = '_drupal_ajax';

  Drupal.Ajax.prototype.execute = function () {
    if (this.ajaxing) {
      return;
    }

    try {
      this.beforeSerialize(this.element, this.options);

      return $.ajax(this.options);
    } catch (e) {
      this.ajaxing = false;
      window.alert('An error occurred while attempting to process ' + this.options.url + ': ' + e.message);

      return $.Deferred().reject();
    }
  };

  Drupal.Ajax.prototype.keypressResponse = function (element, event) {
    var ajax = this;

    if (event.which === 13 || event.which === 32 && element.type !== 'text' && element.type !== 'textarea' && element.type !== 'tel' && element.type !== 'number') {
      event.preventDefault();
      event.stopPropagation();
      $(element).trigger(ajax.elementSettings.event);
    }
  };

  Drupal.Ajax.prototype.eventResponse = function (element, event) {
    event.preventDefault();
    event.stopPropagation();

    var ajax = this;

    if (ajax.ajaxing) {
      return;
    }

    try {
      if (ajax.$form) {
        if (ajax.setClick) {
          element.form.clk = element;
        }

        ajax.$form.ajaxSubmit(ajax.options);
      } else {
        ajax.beforeSerialize(ajax.element, ajax.options);
        $.ajax(ajax.options);
      }
    } catch (e) {
      ajax.ajaxing = false;
      window.alert('An error occurred while attempting to process ' + ajax.options.url + ': ' + e.message);
    }
  };

  Drupal.Ajax.prototype.beforeSerialize = function (element, options) {
    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.detachBehaviors(this.$form.get(0), settings, 'serialize');
    }

    options.data[Drupal.Ajax.AJAX_REQUEST_PARAMETER] = 1;

    var pageState = drupalSettings.ajaxPageState;
    options.data['ajax_page_state[theme]'] = pageState.theme;
    options.data['ajax_page_state[theme_token]'] = pageState.theme_token;
    options.data['ajax_page_state[libraries]'] = pageState.libraries;
  };

  Drupal.Ajax.prototype.beforeSubmit = function (formValues, element, options) {};

  Drupal.Ajax.prototype.beforeSend = function (xmlhttprequest, options) {
    if (this.$form) {
      options.extraData = options.extraData || {};

      options.extraData.ajax_iframe_upload = '1';

      var v = $.fieldValue(this.element);
      if (v !== null) {
        options.extraData[this.element.name] = v;
      }
    }

    $(this.element).prop('disabled', true);

    if (!this.progress || !this.progress.type) {
      return;
    }

    var progressIndicatorMethod = 'setProgressIndicator' + this.progress.type.slice(0, 1).toUpperCase() + this.progress.type.slice(1).toLowerCase();
    if (progressIndicatorMethod in this && typeof this[progressIndicatorMethod] === 'function') {
      this[progressIndicatorMethod].call(this);
    }
  };

  Drupal.theme.ajaxProgressThrobber = function (message) {
    var messageMarkup = typeof message === 'string' ? Drupal.theme('ajaxProgressMessage', message) : '';
    var throbber = '<div class="throbber">&nbsp;</div>';

    return '<div class="ajax-progress ajax-progress-throbber">' + throbber + messageMarkup + '</div>';
  };

  Drupal.theme.ajaxProgressIndicatorFullscreen = function () {
    return '<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>';
  };

  Drupal.theme.ajaxProgressMessage = function (message) {
    return '<div class="message">' + message + '</div>';
  };

  Drupal.theme.ajaxProgressBar = function ($element) {
    return $('<div class="ajax-progress ajax-progress-bar"></div>').append($element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorBar = function () {
    var progressBar = new Drupal.ProgressBar('ajax-progress-' + this.element.id, $.noop, this.progress.method, $.noop);
    if (this.progress.message) {
      progressBar.setProgress(-1, this.progress.message);
    }
    if (this.progress.url) {
      progressBar.startMonitoring(this.progress.url, this.progress.interval || 1500);
    }
    this.progress.element = $(Drupal.theme('ajaxProgressBar', progressBar.element));
    this.progress.object = progressBar;
    $(this.element).after(this.progress.element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorThrobber = function () {
    this.progress.element = $(Drupal.theme('ajaxProgressThrobber', this.progress.message));
    $(this.element).after(this.progress.element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorFullscreen = function () {
    this.progress.element = $(Drupal.theme('ajaxProgressIndicatorFullscreen'));
    $('body').append(this.progress.element);
  };

  Drupal.Ajax.prototype.success = function (response, status) {
    var _this = this;

    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }
    $(this.element).prop('disabled', false);

    var elementParents = $(this.element).parents('[data-drupal-selector]').addBack().toArray();

    var focusChanged = false;
    Object.keys(response || {}).forEach(function (i) {
      if (response[i].command && _this.commands[response[i].command]) {
        _this.commands[response[i].command](_this, response[i], status);
        if (response[i].command === 'invoke' && response[i].method === 'focus') {
          focusChanged = true;
        }
      }
    });

    if (!focusChanged && this.element && !$(this.element).data('disable-refocus')) {
      var target = false;

      for (var n = elementParents.length - 1; !target && n >= 0; n--) {
        target = document.querySelector('[data-drupal-selector="' + elementParents[n].getAttribute('data-drupal-selector') + '"]');
      }

      if (target) {
        $(target).trigger('focus');
      }
    }

    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }

    this.settings = null;
  };

  Drupal.Ajax.prototype.getEffect = function (response) {
    var type = response.effect || this.effect;
    var speed = response.speed || this.speed;

    var effect = {};
    if (type === 'none') {
      effect.showEffect = 'show';
      effect.hideEffect = 'hide';
      effect.showSpeed = '';
    } else if (type === 'fade') {
      effect.showEffect = 'fadeIn';
      effect.hideEffect = 'fadeOut';
      effect.showSpeed = speed;
    } else {
      effect.showEffect = type + 'Toggle';
      effect.hideEffect = type + 'Toggle';
      effect.showSpeed = speed;
    }

    return effect;
  };

  Drupal.Ajax.prototype.error = function (xmlhttprequest, uri, customMessage) {
    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }

    $(this.wrapper).show();

    $(this.element).prop('disabled', false);

    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }
    throw new Drupal.AjaxError(xmlhttprequest, uri, customMessage);
  };

  Drupal.theme.ajaxWrapperNewContent = function ($newContent, ajax, response) {
    return (response.effect || ajax.effect) !== 'none' && $newContent.filter(function (i) {
      return !($newContent[i].nodeName === '#comment' || $newContent[i].nodeName === '#text' && /^(\s|\n|\r)*$/.test($newContent[i].textContent));
    }).length > 1 ? Drupal.theme('ajaxWrapperMultipleRootElements', $newContent) : $newContent;
  };

  Drupal.theme.ajaxWrapperMultipleRootElements = function ($elements) {
    return $('<div></div>').append($elements);
  };

  Drupal.AjaxCommands = function () {};
  Drupal.AjaxCommands.prototype = {
    insert: function insert(ajax, response) {
      var $wrapper = response.selector ? $(response.selector) : $(ajax.wrapper);
      var method = response.method || ajax.method;
      var effect = ajax.getEffect(response);

      var settings = response.settings || ajax.settings || drupalSettings;

      var $newContent = $($.parseHTML(response.data, document, true));

      $newContent = Drupal.theme('ajaxWrapperNewContent', $newContent, ajax, response);

      switch (method) {
        case 'html':
        case 'replaceWith':
        case 'replaceAll':
        case 'empty':
        case 'remove':
          Drupal.detachBehaviors($wrapper.get(0), settings);
          break;
        default:
          break;
      }

      $wrapper[method]($newContent);

      if (effect.showEffect !== 'show') {
        $newContent.hide();
      }

      var $ajaxNewContent = $newContent.find('.ajax-new-content');
      if ($ajaxNewContent.length) {
        $ajaxNewContent.hide();
        $newContent.show();
        $ajaxNewContent[effect.showEffect](effect.showSpeed);
      } else if (effect.showEffect !== 'show') {
        $newContent[effect.showEffect](effect.showSpeed);
      }

      if ($newContent.parents('html').length) {
        $newContent.each(function (index, element) {
          if (element.nodeType === Node.ELEMENT_NODE) {
            Drupal.attachBehaviors(element, settings);
          }
        });
      }
    },
    remove: function remove(ajax, response, status) {
      var settings = response.settings || ajax.settings || drupalSettings;
      $(response.selector).each(function () {
        Drupal.detachBehaviors(this, settings);
      }).remove();
    },
    changed: function changed(ajax, response, status) {
      var $element = $(response.selector);
      if (!$element.hasClass('ajax-changed')) {
        $element.addClass('ajax-changed');
        if (response.asterisk) {
          $element.find(response.asterisk).append(' <abbr class="ajax-changed" title="' + Drupal.t('Changed') + '">*</abbr> ');
        }
      }
    },
    alert: function alert(ajax, response, status) {
      window.alert(response.text, response.title);
    },
    announce: function announce(ajax, response) {
      if (response.priority) {
        Drupal.announce(response.text, response.priority);
      } else {
        Drupal.announce(response.text);
      }
    },
    redirect: function redirect(ajax, response, status) {
      window.location = response.url;
    },
    css: function css(ajax, response, status) {
      $(response.selector).css(response.argument);
    },
    settings: function settings(ajax, response, status) {
      var ajaxSettings = drupalSettings.ajax;

      if (ajaxSettings) {
        Drupal.ajax.expired().forEach(function (instance) {

          if (instance.selector) {
            var selector = instance.selector.replace('#', '');
            if (selector in ajaxSettings) {
              delete ajaxSettings[selector];
            }
          }
        });
      }

      if (response.merge) {
        $.extend(true, drupalSettings, response.settings);
      } else {
        ajax.settings = response.settings;
      }
    },
    data: function data(ajax, response, status) {
      $(response.selector).data(response.name, response.value);
    },
    invoke: function invoke(ajax, response, status) {
      var $element = $(response.selector);
      $element[response.method].apply($element, _toConsumableArray(response.args));
    },
    restripe: function restripe(ajax, response, status) {
      $(response.selector).find('> tbody > tr:visible, > tr:visible').removeClass('odd even').filter(':even').addClass('odd').end().filter(':odd').addClass('even');
    },
    update_build_id: function update_build_id(ajax, response, status) {
      $('input[name="form_build_id"][value="' + response.old + '"]').val(response.new);
    },
    add_css: function add_css(ajax, response, status) {
      $('head').prepend(response.data);
    },
    message: function message(ajax, response) {
      var messages = new Drupal.Message(document.querySelector(response.messageWrapperQuerySelector));
      if (response.clearPrevious) {
        messages.clear();
      }
      messages.add(response.message, response.messageOptions);
    }
  };
})(jQuery, window, Drupal, drupalSettings);;
$ = jQuery.noConflict();

$('.button-up').fadeOut();
$(window).scroll(function () {
     // Если отступ сверху больше 50px то показываем кнопку "Наверх"
     if ($(this).scrollTop() > 50) {
         $('.button-up').fadeIn();
     } else {
         $('.button-up').fadeOut();
     }
 });
 /** При нажатии на кнопку мы перемещаемся к началу страницы */
 $('.button-up').click(function () {
     $('body,html').animate({
         scrollTop: 0
     }, 500);
     return false;
 });











/*  https://drupal.ru/docs/videouroki/drupalbookru/88-rabota-s-javascriptjquery-v-drupal-8-chto-takoe-behaviors  */ 
/* https://druki.ru/wiki/drupal-once   c 9.2.0 */
// пример
/*  Drupal.behaviors.syfyGlobalHideMenu = {
    attach: function (context, settings) {
      $('.nav-flyout', context).once('remove-modals', function () {
        $(document).keyup(function (e) {
          if (e.keyCode == 27) {
            $('.nav-flyout', context).removeClass('js-flyout-active');
          }
        });
      });
    }
  }; */



/* accordeon */
//$ = jQuery.noConflict();
 // $(document).ready(function () {
    
        //прикрепляем клик по заголовкам
  //    $('.menu-header__item_collapsed').on('click', function (e) {
  //      e.preventDefault();
    
  //      $(this).toggleClass('active'); /* поворот галочки */
  //      $('.menu-header__item_collapsed').not($(this)).removeClass('active');
       //скрываем все кроме того, что должны открыть
  //     $('.menu-header__item_collapsed').not($(this)).find('.submenu').slideUp(300)//;
       // открываем или скрываем блок под заголовком, по которому кликнули
  //      $(this).find('.submenu').slideToggle(300);
  //    });
       
  //  });


/* toggle */
// $ = jQuery.noConflict();
/*     jQuery('.menu-header__item_collapsed').on('click', function (e) {
      e.preventDefault();
      
      jQuery(this).toggleClass('active');
      jQuery(this).find('.submenu').slideToggle(300);
  
  
    }); */

    (function ($) {
      // при клике удаляет placeholder
      Drupal.behaviors.hidePlaceholder = {
       attach: function (context, settings) {
         $('input, texterea:not(.hide-placeholder__processed)', context).each(function(){
          
          var _this = $(this);
           $(this).on("click", function () {
            $(this).addClass('hide-placeholder__processed');
             
            var __this = $(this);
            var placeholder = __this.attr('placeholder');
            __this.attr('placeholder', "");
            _this.attr('data-placeholder', placeholder)
          }).blur(function(){
            var __this = $(this);
            var placeholder = __this.attr('data-placeholder');
            __this.attr('placeholder', placeholder);
          })

         });
       }
      };
     })(jQuery);

 /**
 * @file
 * Mobile menu behaviors.
 */

//(function(Drupal) {
//
//  Drupal.behaviors.dlogMobileMenu = {
//    attach: function(context, settings) {
//      let toggler = context.querySelector('.mobile-menu-toggle:not(.//menu-toggle--processed)');
//      let mobileMenu = context.querySelector('.header-mobile__content');
//
//      if (toggler && mobileMenu) {
//        toggler.addEventListener('click', e => {
//          this.toggle(e, mobileMenu);
//        });
//        toggler.classList.add('menu-toggle--processed');
//      }
//    },
//
//    toggle: function(event, mobileMenu) {
//      event.target.classList.toggle('header-mobile__menu-button--active');
//      mobileMenu.classList.toggle('header-mobile__content--active');
//    },
//  };
//
//})(Drupal);

// добавляет стили для страницы sitemap
if ($('.sitemap').length) {
  $('.sitemap .main-menu').addClass('sitemap-menu');
  $('.sitemap .main-menu').removeClass('main-menu');
}





;

window.addEventListener('DOMContentLoaded', e => {

  let body = document.querySelector('body');
  let menu = document.querySelector('.menu-header');
  let burger = document.querySelectorAll('.icon-menu');

   //работа c menu-header / menu-mobile
  burger.forEach(el => el.addEventListener('click', e => {
 
    burger.forEach(el => el.classList.toggle('active'));
    body.classList.toggle('lock');

    let active = document.querySelector('.icon-menu')
      .classList.contains('active');
    
    if (active) {
      menu.classList.add('menu-mobile');
      setTimeout(() => { // нужно для эффекта transision
        menu.classList.add('active');
      }, 50);

      menu.classList.remove('menu-header');
    } else {
      let menuMobile = document.querySelector('.menu-mobile');

      setTimeout(() => { // нужно для эффекта transision
        menuMobile.classList.remove('menu-mobile');
        menuMobile.classList.add('menu-header');
      }, 500); 
      
      menuMobile.classList.remove('active');
    }
  }));
  /* клик по области не меню */
  document.addEventListener('click', e => {
    
    let target = e.target;
    let its_menu = target == menu || menu.contains(target);
    let its_burger = target == burger.length;
    let menu_is_active = menu.classList.contains('active');
    
    if (!its_menu && !its_burger && menu_is_active) {
      e.preventDefault();
      burger.forEach(el => el.classList.toggle('active'));
      menu.classList.toggle('active');
      body.classList.toggle('lock');
     /* возвращает исходное меню sesctop */
      let menuMobile = document.querySelector('.menu-mobile');
      setTimeout(() => { 
        menuMobile.classList.remove('menu-mobile');
        menuMobile.classList.add('menu-header');
      }, 500);
    }
  })

 // add hover on maim item of menu
  if (document.documentElement.clientWidth > 1450) {
    let submenu = document.querySelectorAll('.menu-header.submenu');
console.log('works')
    submenu.forEach(el => el.addEventListener('mouseover', (e) => {
  
      e.target.closest('.main>.menu-header__item_collapsed').style.backgroundColor = '#0083b7';
  
    }));
  
    submenu.forEach(el => el.addEventListener('mouseout', () => {
  
      submenu.forEach(el => el.closest('.menu-header__item_collapsed').style.backgroundColor = '');
    }));
  };

});


$ = jQuery.noConflict();
 /* accordeon */
$(document).ready(function () {

  if ($(window).width() < 1495) {
  
    $('.menu-header').attr('id', 'menu-mobile');
  }

  $('#menu-mobile li.menu-header__item_collapsed>a').on('click', function () {
     
      $(this).removeAttr('href');
      var element = $(this).parent('li');
      if (element.hasClass('active')) {
        element.removeClass('active');
        element.find('li').removeClass('active');
        element.find('ul').slideUp();
      }
      else {
        element.addClass('active');
        element.children('ul').slideDown();
        element.siblings('li').children('ul').slideUp();
        element.siblings('li').removeClass('active');
        element.siblings('li').find('li').removeClass('active');
        element.siblings('li').find('ul').slideUp();
      }
  });


  /* меняем место при адаптиве */
  if ($(window).width() < 1350) {
    $('.center-header__contacts').appendTo('#menu-mobile');
  }

/*   if ($(window).width() < 555) {
      $('#block-views-block-social-links').appendTo('#menu-mobile');
  } */

  if ($(window).width() < 685) {
    $('.top-header__icons').appendTo('.bottom-header');
  }
  
  if ($(window).width() < 1047) {
    $('.section-1__banners').appendTo('.content-section-1');
}

});



;

$ = jQuery.noConflict();

/* accordeon for main-menu */
$(document).ready(function () {

   $('.main-menu li.main-menu__item_collapsed>a').on('click', function(){
       $(this).removeAttr('href');
       let element = $(this).parent('li');
       if (element.hasClass('active')) {
         element.removeClass('active');
         element.find('li').removeClass('active');
         element.find('ul').slideUp();
       }
       else {
         element.addClass('active');
         element.children('ul').slideDown();
         element.siblings('li').children('ul').slideUp();
         element.siblings('li').removeClass('active');
         element.siblings('li').find('li').removeClass('active');
         element.siblings('li').find('ul').slideUp();
       }
     });
});

/* toggle for main-menu */
$(document).ready(function () {

  if ($(window).width() < 1045) {
  
    $('#block-menu-main-menu').on('click', function () {

      $(this).siblings().slideToggle(400);
      $('#block-tretemenyu-menu').siblings().slideToggle(400);
      $(this).toggleClass('active');

    });
  }

});


/* раскрывает главное меню, если открыты страницы */
const slideDown = () => {
  $('.main-menu').children().first().toggleClass('active');
  $('.main-menu .submenu').first().slideDown(0);
}
if (window.location.pathname === '/sveden/education') {
  slideDown();
}
if (window.location.pathname === '/sveden/common') {
  slideDown();
}
if (window.location.pathname ==='/sveden/struct') {
  slideDown();
}
if (window.location.pathname ==='/sveden/document') {
  slideDown();
}
if (window.location.pathname === '/sveden/eduStandarts') {
  slideDown();
}
if (window.location.pathname === '/sveden/employees') {
  slideDown();
}
if (window.location.pathname === '/sveden/objects') {
  slideDown();
}
if (window.location.pathname === '/sveden/grants') {
  slideDown();
}
if (window.location.pathname === '/sveden/paid_edu') {
  slideDown();
}
if (window.location.pathname === '/sveden/budget') {
  slideDown();
}
if (window.location.pathname === '/sveden/vacant') {
  slideDown();
}
if (window.location.pathname === '/sveden/ovz') {
  slideDown();
}
if (window.location.pathname === '/sveden/inter') {
  slideDown();
};
$ = jQuery.noConflict();
/* slick for banners */
$(document).ready(function () {

  if ($(window).width() > 1045) {
    // если админка, увеличиваем timout 
    if ($('#toolbar-administration').length) { 

      setTimeout(function () {
      
        jQuery('.banners-custom__inner').slick({
          infinite: true,
          autoplay: true,
          slidesToShow: 1,
          arrows: false,
          dots: false,
          centerMode: true,
          variableWidth: true,
        });
          // mousewheel on   // прокрутка мышкой
         let slider = $(".banners-custom__inner");
  
         slider.on('wheel', (function (e) {
          e.preventDefault();
  
         if (e.originalEvent.deltaY < 0) {
           $(this).slick('slickNext');
         } else {
           $(this).slick('slickPrev');
         }
        }));
  
      }, 2000);
    } else {
      setTimeout(function () {
      
        jQuery('.banners-custom__inner').slick({
          infinite: true,
          autoplay: true,
          slidesToShow: 1,
          arrows: false,
          dots: false,
          centerMode: true,
          variableWidth: true,
        });
      }, 500);
    }
  }


  if ($(window).width() < 1045) {
    setTimeout(function () {
      jQuery('.banners-custom__inner').slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        arrows: false,
        dots: false,
        centerMode: true,
        variableWidth: true
      });
    }, 500);
  }
});;
$ = jQuery.noConflict();

$(document).ready(function () {
  $('#block-views-block-comments .view-content').slick({
    speed:700,
    infinite: true,
    /* autoplay: true, */
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    prevArrow: '<button class="slick-prev slick-arrow"></button>',
    nextArrow: '<button class="slick-next slick-arrow"></button>',
          responsive: [
           {
             breakpoint: 1560,
             settings: {
               arrows: false,
               dots: true,
             }
           },
         ] 
  });
});;
$ = jQuery.noConflict();

/* toggle for menu-footer */
/* $(document).ready(function () {

  if ($(window).width() < 1275) {
  
    $('#block-start-theme-footer-menu').on('click', function () {

      $(this).siblings().slideToggle(400);
      $('.view-site-info-block-3').slideToggle(400);
      $('.view-site-info-block-4').slideToggle(400);
      $('.views-field-field-full-name').slideToggle(400);
      $('.views-field-field-full-name').slideToggle(400);
      $('.view-social-block-1').slideToggle(400);
      $(this).toggleClass('active');

    });
  }

}); */;
/*!
	Colorbox 1.6.4
	license: MIT
	http://www.jacklmoore.com/colorbox
*/
(function(t,e,i){function n(i,n,o){var r=e.createElement(i);return n&&(r.id=Z+n),o&&(r.style.cssText=o),t(r)}function o(){return i.innerHeight?i.innerHeight:t(i).height()}function r(e,i){i!==Object(i)&&(i={}),this.cache={},this.el=e,this.value=function(e){var n;return void 0===this.cache[e]&&(n=t(this.el).attr("data-cbox-"+e),void 0!==n?this.cache[e]=n:void 0!==i[e]?this.cache[e]=i[e]:void 0!==X[e]&&(this.cache[e]=X[e])),this.cache[e]},this.get=function(e){var i=this.value(e);return t.isFunction(i)?i.call(this.el,this):i}}function h(t){var e=W.length,i=(A+t)%e;return 0>i?e+i:i}function a(t,e){return Math.round((/%/.test(t)?("x"===e?E.width():o())/100:1)*parseInt(t,10))}function s(t,e){return t.get("photo")||t.get("photoRegex").test(e)}function l(t,e){return t.get("retinaUrl")&&i.devicePixelRatio>1?e.replace(t.get("photoRegex"),t.get("retinaSuffix")):e}function d(t){"contains"in x[0]&&!x[0].contains(t.target)&&t.target!==v[0]&&(t.stopPropagation(),x.focus())}function c(t){c.str!==t&&(x.add(v).removeClass(c.str).addClass(t),c.str=t)}function g(e){A=0,e&&e!==!1&&"nofollow"!==e?(W=t("."+te).filter(function(){var i=t.data(this,Y),n=new r(this,i);return n.get("rel")===e}),A=W.index(_.el),-1===A&&(W=W.add(_.el),A=W.length-1)):W=t(_.el)}function u(i){t(e).trigger(i),ae.triggerHandler(i)}function f(i){var o;if(!G){if(o=t(i).data(Y),_=new r(i,o),g(_.get("rel")),!U){U=$=!0,c(_.get("className")),x.css({visibility:"hidden",display:"block",opacity:""}),I=n(se,"LoadedContent","width:0; height:0; overflow:hidden; visibility:hidden"),b.css({width:"",height:""}).append(I),j=T.height()+k.height()+b.outerHeight(!0)-b.height(),D=C.width()+H.width()+b.outerWidth(!0)-b.width(),N=I.outerHeight(!0),z=I.outerWidth(!0);var h=a(_.get("initialWidth"),"x"),s=a(_.get("initialHeight"),"y"),l=_.get("maxWidth"),f=_.get("maxHeight");_.w=Math.max((l!==!1?Math.min(h,a(l,"x")):h)-z-D,0),_.h=Math.max((f!==!1?Math.min(s,a(f,"y")):s)-N-j,0),I.css({width:"",height:_.h}),J.position(),u(ee),_.get("onOpen"),O.add(F).hide(),x.focus(),_.get("trapFocus")&&e.addEventListener&&(e.addEventListener("focus",d,!0),ae.one(re,function(){e.removeEventListener("focus",d,!0)})),_.get("returnFocus")&&ae.one(re,function(){t(_.el).focus()})}var p=parseFloat(_.get("opacity"));v.css({opacity:p===p?p:"",cursor:_.get("overlayClose")?"pointer":"",visibility:"visible"}).show(),_.get("closeButton")?B.html(_.get("close")).appendTo(b):B.appendTo("<div/>"),w()}}function p(){x||(V=!1,E=t(i),x=n(se).attr({id:Y,"class":t.support.opacity===!1?Z+"IE":"",role:"dialog",tabindex:"-1"}).hide(),v=n(se,"Overlay").hide(),L=t([n(se,"LoadingOverlay")[0],n(se,"LoadingGraphic")[0]]),y=n(se,"Wrapper"),b=n(se,"Content").append(F=n(se,"Title"),R=n(se,"Current"),P=t('<button type="button"/>').attr({id:Z+"Previous"}),K=t('<button type="button"/>').attr({id:Z+"Next"}),S=t('<button type="button"/>').attr({id:Z+"Slideshow"}),L),B=t('<button type="button"/>').attr({id:Z+"Close"}),y.append(n(se).append(n(se,"TopLeft"),T=n(se,"TopCenter"),n(se,"TopRight")),n(se,!1,"clear:left").append(C=n(se,"MiddleLeft"),b,H=n(se,"MiddleRight")),n(se,!1,"clear:left").append(n(se,"BottomLeft"),k=n(se,"BottomCenter"),n(se,"BottomRight"))).find("div div").css({"float":"left"}),M=n(se,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),O=K.add(P).add(R).add(S)),e.body&&!x.parent().length&&t(e.body).append(v,x.append(y,M))}function m(){function i(t){t.which>1||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),f(this))}return x?(V||(V=!0,K.click(function(){J.next()}),P.click(function(){J.prev()}),B.click(function(){J.close()}),v.click(function(){_.get("overlayClose")&&J.close()}),t(e).bind("keydown."+Z,function(t){var e=t.keyCode;U&&_.get("escKey")&&27===e&&(t.preventDefault(),J.close()),U&&_.get("arrowKey")&&W[1]&&!t.altKey&&(37===e?(t.preventDefault(),P.click()):39===e&&(t.preventDefault(),K.click()))}),t.isFunction(t.fn.on)?t(e).on("click."+Z,"."+te,i):t("."+te).live("click."+Z,i)),!0):!1}function w(){var e,o,r,h=J.prep,d=++le;if($=!0,q=!1,u(he),u(ie),_.get("onLoad"),_.h=_.get("height")?a(_.get("height"),"y")-N-j:_.get("innerHeight")&&a(_.get("innerHeight"),"y"),_.w=_.get("width")?a(_.get("width"),"x")-z-D:_.get("innerWidth")&&a(_.get("innerWidth"),"x"),_.mw=_.w,_.mh=_.h,_.get("maxWidth")&&(_.mw=a(_.get("maxWidth"),"x")-z-D,_.mw=_.w&&_.w<_.mw?_.w:_.mw),_.get("maxHeight")&&(_.mh=a(_.get("maxHeight"),"y")-N-j,_.mh=_.h&&_.h<_.mh?_.h:_.mh),e=_.get("href"),Q=setTimeout(function(){L.show()},100),_.get("inline")){var c=t(e).eq(0);r=t("<div>").hide().insertBefore(c),ae.one(he,function(){r.replaceWith(c)}),h(c)}else _.get("iframe")?h(" "):_.get("html")?h(_.get("html")):s(_,e)?(e=l(_,e),q=_.get("createImg"),t(q).addClass(Z+"Photo").bind("error."+Z,function(){h(n(se,"Error").html(_.get("imgError")))}).one("load",function(){d===le&&setTimeout(function(){var e;_.get("retinaImage")&&i.devicePixelRatio>1&&(q.height=q.height/i.devicePixelRatio,q.width=q.width/i.devicePixelRatio),_.get("scalePhotos")&&(o=function(){q.height-=q.height*e,q.width-=q.width*e},_.mw&&q.width>_.mw&&(e=(q.width-_.mw)/q.width,o()),_.mh&&q.height>_.mh&&(e=(q.height-_.mh)/q.height,o())),_.h&&(q.style.marginTop=Math.max(_.mh-q.height,0)/2+"px"),W[1]&&(_.get("loop")||W[A+1])&&(q.style.cursor="pointer",t(q).bind("click."+Z,function(){J.next()})),q.style.width=q.width+"px",q.style.height=q.height+"px",h(q)},1)}),q.src=e):e&&M.load(e,_.get("data"),function(e,i){d===le&&h("error"===i?n(se,"Error").html(_.get("xhrError")):t(this).contents())})}var v,x,y,b,T,C,H,k,W,E,I,M,L,F,R,S,K,P,B,O,_,j,D,N,z,A,q,U,$,G,Q,J,V,X={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,rel:function(){return this.rel},href:function(){return t(this).attr("href")},title:function(){return this.title},createImg:function(){var e=new Image,i=t(this).data("cbox-img-attrs");return"object"==typeof i&&t.each(i,function(t,i){e[t]=i}),e},createIframe:function(){var i=e.createElement("iframe"),n=t(this).data("cbox-iframe-attrs");return"object"==typeof n&&t.each(n,function(t,e){i[t]=e}),"frameBorder"in i&&(i.frameBorder=0),"allowTransparency"in i&&(i.allowTransparency="true"),i.name=(new Date).getTime(),i.allowFullscreen=!0,i}},Y="colorbox",Z="cbox",te=Z+"Element",ee=Z+"_open",ie=Z+"_load",ne=Z+"_complete",oe=Z+"_cleanup",re=Z+"_closed",he=Z+"_purge",ae=t("<a/>"),se="div",le=0,de={},ce=function(){function t(){clearTimeout(h)}function e(){(_.get("loop")||W[A+1])&&(t(),h=setTimeout(J.next,_.get("slideshowSpeed")))}function i(){S.html(_.get("slideshowStop")).unbind(s).one(s,n),ae.bind(ne,e).bind(ie,t),x.removeClass(a+"off").addClass(a+"on")}function n(){t(),ae.unbind(ne,e).unbind(ie,t),S.html(_.get("slideshowStart")).unbind(s).one(s,function(){J.next(),i()}),x.removeClass(a+"on").addClass(a+"off")}function o(){r=!1,S.hide(),t(),ae.unbind(ne,e).unbind(ie,t),x.removeClass(a+"off "+a+"on")}var r,h,a=Z+"Slideshow_",s="click."+Z;return function(){r?_.get("slideshow")||(ae.unbind(oe,o),o()):_.get("slideshow")&&W[1]&&(r=!0,ae.one(oe,o),_.get("slideshowAuto")?i():n(),S.show())}}();t[Y]||(t(p),J=t.fn[Y]=t[Y]=function(e,i){var n,o=this;return e=e||{},t.isFunction(o)&&(o=t("<a/>"),e.open=!0),o[0]?(p(),m()&&(i&&(e.onComplete=i),o.each(function(){var i=t.data(this,Y)||{};t.data(this,Y,t.extend(i,e))}).addClass(te),n=new r(o[0],e),n.get("open")&&f(o[0])),o):o},J.position=function(e,i){function n(){T[0].style.width=k[0].style.width=b[0].style.width=parseInt(x[0].style.width,10)-D+"px",b[0].style.height=C[0].style.height=H[0].style.height=parseInt(x[0].style.height,10)-j+"px"}var r,h,s,l=0,d=0,c=x.offset();if(E.unbind("resize."+Z),x.css({top:-9e4,left:-9e4}),h=E.scrollTop(),s=E.scrollLeft(),_.get("fixed")?(c.top-=h,c.left-=s,x.css({position:"fixed"})):(l=h,d=s,x.css({position:"absolute"})),d+=_.get("right")!==!1?Math.max(E.width()-_.w-z-D-a(_.get("right"),"x"),0):_.get("left")!==!1?a(_.get("left"),"x"):Math.round(Math.max(E.width()-_.w-z-D,0)/2),l+=_.get("bottom")!==!1?Math.max(o()-_.h-N-j-a(_.get("bottom"),"y"),0):_.get("top")!==!1?a(_.get("top"),"y"):Math.round(Math.max(o()-_.h-N-j,0)/2),x.css({top:c.top,left:c.left,visibility:"visible"}),y[0].style.width=y[0].style.height="9999px",r={width:_.w+z+D,height:_.h+N+j,top:l,left:d},e){var g=0;t.each(r,function(t){return r[t]!==de[t]?(g=e,void 0):void 0}),e=g}de=r,e||x.css(r),x.dequeue().animate(r,{duration:e||0,complete:function(){n(),$=!1,y[0].style.width=_.w+z+D+"px",y[0].style.height=_.h+N+j+"px",_.get("reposition")&&setTimeout(function(){E.bind("resize."+Z,J.position)},1),t.isFunction(i)&&i()},step:n})},J.resize=function(t){var e;U&&(t=t||{},t.width&&(_.w=a(t.width,"x")-z-D),t.innerWidth&&(_.w=a(t.innerWidth,"x")),I.css({width:_.w}),t.height&&(_.h=a(t.height,"y")-N-j),t.innerHeight&&(_.h=a(t.innerHeight,"y")),t.innerHeight||t.height||(e=I.scrollTop(),I.css({height:"auto"}),_.h=I.height()),I.css({height:_.h}),e&&I.scrollTop(e),J.position("none"===_.get("transition")?0:_.get("speed")))},J.prep=function(i){function o(){return _.w=_.w||I.width(),_.w=_.mw&&_.mw<_.w?_.mw:_.w,_.w}function a(){return _.h=_.h||I.height(),_.h=_.mh&&_.mh<_.h?_.mh:_.h,_.h}if(U){var d,g="none"===_.get("transition")?0:_.get("speed");I.remove(),I=n(se,"LoadedContent").append(i),I.hide().appendTo(M.show()).css({width:o(),overflow:_.get("scrolling")?"auto":"hidden"}).css({height:a()}).prependTo(b),M.hide(),t(q).css({"float":"none"}),c(_.get("className")),d=function(){function i(){t.support.opacity===!1&&x[0].style.removeAttribute("filter")}var n,o,a=W.length;U&&(o=function(){clearTimeout(Q),L.hide(),u(ne),_.get("onComplete")},F.html(_.get("title")).show(),I.show(),a>1?("string"==typeof _.get("current")&&R.html(_.get("current").replace("{current}",A+1).replace("{total}",a)).show(),K[_.get("loop")||a-1>A?"show":"hide"]().html(_.get("next")),P[_.get("loop")||A?"show":"hide"]().html(_.get("previous")),ce(),_.get("preloading")&&t.each([h(-1),h(1)],function(){var i,n=W[this],o=new r(n,t.data(n,Y)),h=o.get("href");h&&s(o,h)&&(h=l(o,h),i=e.createElement("img"),i.src=h)})):O.hide(),_.get("iframe")?(n=_.get("createIframe"),_.get("scrolling")||(n.scrolling="no"),t(n).attr({src:_.get("href"),"class":Z+"Iframe"}).one("load",o).appendTo(I),ae.one(he,function(){n.src="//about:blank"}),_.get("fastIframe")&&t(n).trigger("load")):o(),"fade"===_.get("transition")?x.fadeTo(g,1,i):i())},"fade"===_.get("transition")?x.fadeTo(g,0,function(){J.position(0,d)}):J.position(g,d)}},J.next=function(){!$&&W[1]&&(_.get("loop")||W[A+1])&&(A=h(1),f(W[A]))},J.prev=function(){!$&&W[1]&&(_.get("loop")||A)&&(A=h(-1),f(W[A]))},J.close=function(){U&&!G&&(G=!0,U=!1,u(oe),_.get("onCleanup"),E.unbind("."+Z),v.fadeTo(_.get("fadeOut")||0,0),x.stop().fadeTo(_.get("fadeOut")||0,0,function(){x.hide(),v.hide(),u(he),I.remove(),setTimeout(function(){G=!1,u(re),_.get("onClosed")},1)}))},J.remove=function(){x&&(x.stop(),t[Y].close(),x.stop(!1,!0).remove(),v.remove(),G=!1,x=null,t("."+te).removeData(Y).removeClass(te),t(e).unbind("click."+Z).unbind("keydown."+Z))},J.element=function(){return t(_.el)},J.settings=X)})(jQuery,document,window);;
/**
 * @file
 * Colorbox JS.
 */

(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.initColorbox = {
    attach: function (context, settings) {
      if (!$.isFunction($.colorbox) || typeof settings.colorbox === 'undefined') {
        return;
      }

      if (settings.colorbox.mobiledetect && window.matchMedia) {
        // Disable Colorbox for small screens.
        var mq = window.matchMedia('(max-device-width: ' + settings.colorbox.mobiledevicewidth + ')');
        if (mq.matches) {
          $.colorbox.remove();
          return;
        }
      }

      settings.colorbox.rel = function () {
        return $(this).data('colorbox-gallery')
      };

      $('.colorbox', context)
        .once('init-colorbox')
        .colorbox(settings.colorbox);
    }
  };

})(jQuery, Drupal);
;
/**
 * @file
 * Colorbox Style JS.
 */

(function ($) {

Drupal.behaviors.initColorboxDefaultStyle = {
  attach: function (context, settings) {
    $(context).bind('cbox_complete', function () {
      // Only run if there is a title.
      if ($('#cboxTitle:empty', context).length == false) {
        $('#cboxLoadedContent img', context).bind('mouseover', function () {
          $('#cboxTitle', context).slideDown();
        });
        $('#cboxOverlay', context).bind('mouseover', function () {
          $('#cboxTitle', context).slideUp();
        });
      }
      else {
        $('#cboxTitle', context).hide();
      }
    });
  }
};

})(jQuery);
;
/*!
 * Vue.js v2.6.12
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).Vue=t()}(this,function(){"use strict";var e=Object.freeze({});function t(e){return null==e}function n(e){return null!=e}function r(e){return!0===e}function i(e){return"string"==typeof e||"number"==typeof e||"symbol"==typeof e||"boolean"==typeof e}function o(e){return null!==e&&"object"==typeof e}var a=Object.prototype.toString;function s(e){return"[object Object]"===a.call(e)}function c(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function u(e){return n(e)&&"function"==typeof e.then&&"function"==typeof e.catch}function l(e){return null==e?"":Array.isArray(e)||s(e)&&e.toString===a?JSON.stringify(e,null,2):String(e)}function f(e){var t=parseFloat(e);return isNaN(t)?e:t}function p(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}var d=p("slot,component",!0),v=p("key,ref,slot,slot-scope,is");function h(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}var m=Object.prototype.hasOwnProperty;function y(e,t){return m.call(e,t)}function g(e){var t=Object.create(null);return function(n){return t[n]||(t[n]=e(n))}}var _=/-(\w)/g,b=g(function(e){return e.replace(_,function(e,t){return t?t.toUpperCase():""})}),$=g(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),w=/\B([A-Z])/g,C=g(function(e){return e.replace(w,"-$1").toLowerCase()});var x=Function.prototype.bind?function(e,t){return e.bind(t)}:function(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n};function k(e,t){t=t||0;for(var n=e.length-t,r=new Array(n);n--;)r[n]=e[n+t];return r}function A(e,t){for(var n in t)e[n]=t[n];return e}function O(e){for(var t={},n=0;n<e.length;n++)e[n]&&A(t,e[n]);return t}function S(e,t,n){}var T=function(e,t,n){return!1},E=function(e){return e};function N(e,t){if(e===t)return!0;var n=o(e),r=o(t);if(!n||!r)return!n&&!r&&String(e)===String(t);try{var i=Array.isArray(e),a=Array.isArray(t);if(i&&a)return e.length===t.length&&e.every(function(e,n){return N(e,t[n])});if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(i||a)return!1;var s=Object.keys(e),c=Object.keys(t);return s.length===c.length&&s.every(function(n){return N(e[n],t[n])})}catch(e){return!1}}function j(e,t){for(var n=0;n<e.length;n++)if(N(e[n],t))return n;return-1}function D(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}var L="data-server-rendered",M=["component","directive","filter"],I=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],F={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:T,isReservedAttr:T,isUnknownElement:T,getTagNamespace:S,parsePlatformTagName:E,mustUseProp:T,async:!0,_lifecycleHooks:I},P=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function R(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var H=new RegExp("[^"+P.source+".$_\\d]");var B,U="__proto__"in{},z="undefined"!=typeof window,V="undefined"!=typeof WXEnvironment&&!!WXEnvironment.platform,K=V&&WXEnvironment.platform.toLowerCase(),J=z&&window.navigator.userAgent.toLowerCase(),q=J&&/msie|trident/.test(J),W=J&&J.indexOf("msie 9.0")>0,Z=J&&J.indexOf("edge/")>0,G=(J&&J.indexOf("android"),J&&/iphone|ipad|ipod|ios/.test(J)||"ios"===K),X=(J&&/chrome\/\d+/.test(J),J&&/phantomjs/.test(J),J&&J.match(/firefox\/(\d+)/)),Y={}.watch,Q=!1;if(z)try{var ee={};Object.defineProperty(ee,"passive",{get:function(){Q=!0}}),window.addEventListener("test-passive",null,ee)}catch(e){}var te=function(){return void 0===B&&(B=!z&&!V&&"undefined"!=typeof global&&(global.process&&"server"===global.process.env.VUE_ENV)),B},ne=z&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function re(e){return"function"==typeof e&&/native code/.test(e.toString())}var ie,oe="undefined"!=typeof Symbol&&re(Symbol)&&"undefined"!=typeof Reflect&&re(Reflect.ownKeys);ie="undefined"!=typeof Set&&re(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var ae=S,se=0,ce=function(){this.id=se++,this.subs=[]};ce.prototype.addSub=function(e){this.subs.push(e)},ce.prototype.removeSub=function(e){h(this.subs,e)},ce.prototype.depend=function(){ce.target&&ce.target.addDep(this)},ce.prototype.notify=function(){for(var e=this.subs.slice(),t=0,n=e.length;t<n;t++)e[t].update()},ce.target=null;var ue=[];function le(e){ue.push(e),ce.target=e}function fe(){ue.pop(),ce.target=ue[ue.length-1]}var pe=function(e,t,n,r,i,o,a,s){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},de={child:{configurable:!0}};de.child.get=function(){return this.componentInstance},Object.defineProperties(pe.prototype,de);var ve=function(e){void 0===e&&(e="");var t=new pe;return t.text=e,t.isComment=!0,t};function he(e){return new pe(void 0,void 0,void 0,String(e))}function me(e){var t=new pe(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}var ye=Array.prototype,ge=Object.create(ye);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(e){var t=ye[e];R(ge,e,function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];var i,o=t.apply(this,n),a=this.__ob__;switch(e){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2)}return i&&a.observeArray(i),a.dep.notify(),o})});var _e=Object.getOwnPropertyNames(ge),be=!0;function $e(e){be=e}var we=function(e){var t;this.value=e,this.dep=new ce,this.vmCount=0,R(e,"__ob__",this),Array.isArray(e)?(U?(t=ge,e.__proto__=t):function(e,t,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];R(e,o,t[o])}}(e,ge,_e),this.observeArray(e)):this.walk(e)};function Ce(e,t){var n;if(o(e)&&!(e instanceof pe))return y(e,"__ob__")&&e.__ob__ instanceof we?n=e.__ob__:be&&!te()&&(Array.isArray(e)||s(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new we(e)),t&&n&&n.vmCount++,n}function xe(e,t,n,r,i){var o=new ce,a=Object.getOwnPropertyDescriptor(e,t);if(!a||!1!==a.configurable){var s=a&&a.get,c=a&&a.set;s&&!c||2!==arguments.length||(n=e[t]);var u=!i&&Ce(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=s?s.call(e):n;return ce.target&&(o.depend(),u&&(u.dep.depend(),Array.isArray(t)&&function e(t){for(var n=void 0,r=0,i=t.length;r<i;r++)(n=t[r])&&n.__ob__&&n.__ob__.dep.depend(),Array.isArray(n)&&e(n)}(t))),t},set:function(t){var r=s?s.call(e):n;t===r||t!=t&&r!=r||s&&!c||(c?c.call(e,t):n=t,u=!i&&Ce(t),o.notify())}})}}function ke(e,t,n){if(Array.isArray(e)&&c(t))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(t in e&&!(t in Object.prototype))return e[t]=n,n;var r=e.__ob__;return e._isVue||r&&r.vmCount?n:r?(xe(r.value,t,n),r.dep.notify(),n):(e[t]=n,n)}function Ae(e,t){if(Array.isArray(e)&&c(t))e.splice(t,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||y(e,t)&&(delete e[t],n&&n.dep.notify())}}we.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)xe(e,t[n])},we.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)Ce(e[t])};var Oe=F.optionMergeStrategies;function Se(e,t){if(!t)return e;for(var n,r,i,o=oe?Reflect.ownKeys(t):Object.keys(t),a=0;a<o.length;a++)"__ob__"!==(n=o[a])&&(r=e[n],i=t[n],y(e,n)?r!==i&&s(r)&&s(i)&&Se(r,i):ke(e,n,i));return e}function Te(e,t,n){return n?function(){var r="function"==typeof t?t.call(n,n):t,i="function"==typeof e?e.call(n,n):e;return r?Se(r,i):i}:t?e?function(){return Se("function"==typeof t?t.call(this,this):t,"function"==typeof e?e.call(this,this):e)}:t:e}function Ee(e,t){var n=t?e?e.concat(t):Array.isArray(t)?t:[t]:e;return n?function(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}(n):n}function Ne(e,t,n,r){var i=Object.create(e||null);return t?A(i,t):i}Oe.data=function(e,t,n){return n?Te(e,t,n):t&&"function"!=typeof t?e:Te(e,t)},I.forEach(function(e){Oe[e]=Ee}),M.forEach(function(e){Oe[e+"s"]=Ne}),Oe.watch=function(e,t,n,r){if(e===Y&&(e=void 0),t===Y&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var i={};for(var o in A(i,e),t){var a=i[o],s=t[o];a&&!Array.isArray(a)&&(a=[a]),i[o]=a?a.concat(s):Array.isArray(s)?s:[s]}return i},Oe.props=Oe.methods=Oe.inject=Oe.computed=function(e,t,n,r){if(!e)return t;var i=Object.create(null);return A(i,e),t&&A(i,t),i},Oe.provide=Te;var je=function(e,t){return void 0===t?e:t};function De(e,t,n){if("function"==typeof t&&(t=t.options),function(e,t){var n=e.props;if(n){var r,i,o={};if(Array.isArray(n))for(r=n.length;r--;)"string"==typeof(i=n[r])&&(o[b(i)]={type:null});else if(s(n))for(var a in n)i=n[a],o[b(a)]=s(i)?i:{type:i};e.props=o}}(t),function(e,t){var n=e.inject;if(n){var r=e.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(s(n))for(var o in n){var a=n[o];r[o]=s(a)?A({from:o},a):{from:a}}}}(t),function(e){var t=e.directives;if(t)for(var n in t){var r=t[n];"function"==typeof r&&(t[n]={bind:r,update:r})}}(t),!t._base&&(t.extends&&(e=De(e,t.extends,n)),t.mixins))for(var r=0,i=t.mixins.length;r<i;r++)e=De(e,t.mixins[r],n);var o,a={};for(o in e)c(o);for(o in t)y(e,o)||c(o);function c(r){var i=Oe[r]||je;a[r]=i(e[r],t[r],n,r)}return a}function Le(e,t,n,r){if("string"==typeof n){var i=e[t];if(y(i,n))return i[n];var o=b(n);if(y(i,o))return i[o];var a=$(o);return y(i,a)?i[a]:i[n]||i[o]||i[a]}}function Me(e,t,n,r){var i=t[e],o=!y(n,e),a=n[e],s=Pe(Boolean,i.type);if(s>-1)if(o&&!y(i,"default"))a=!1;else if(""===a||a===C(e)){var c=Pe(String,i.type);(c<0||s<c)&&(a=!0)}if(void 0===a){a=function(e,t,n){if(!y(t,"default"))return;var r=t.default;if(e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n])return e._props[n];return"function"==typeof r&&"Function"!==Ie(t.type)?r.call(e):r}(r,i,e);var u=be;$e(!0),Ce(a),$e(u)}return a}function Ie(e){var t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:""}function Fe(e,t){return Ie(e)===Ie(t)}function Pe(e,t){if(!Array.isArray(t))return Fe(t,e)?0:-1;for(var n=0,r=t.length;n<r;n++)if(Fe(t[n],e))return n;return-1}function Re(e,t,n){le();try{if(t)for(var r=t;r=r.$parent;){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{if(!1===i[o].call(r,e,t,n))return}catch(e){Be(e,r,"errorCaptured hook")}}Be(e,t,n)}finally{fe()}}function He(e,t,n,r,i){var o;try{(o=n?e.apply(t,n):e.call(t))&&!o._isVue&&u(o)&&!o._handled&&(o.catch(function(e){return Re(e,r,i+" (Promise/async)")}),o._handled=!0)}catch(e){Re(e,r,i)}return o}function Be(e,t,n){if(F.errorHandler)try{return F.errorHandler.call(null,e,t,n)}catch(t){t!==e&&Ue(t,null,"config.errorHandler")}Ue(e,t,n)}function Ue(e,t,n){if(!z&&!V||"undefined"==typeof console)throw e;console.error(e)}var ze,Ve=!1,Ke=[],Je=!1;function qe(){Je=!1;var e=Ke.slice(0);Ke.length=0;for(var t=0;t<e.length;t++)e[t]()}if("undefined"!=typeof Promise&&re(Promise)){var We=Promise.resolve();ze=function(){We.then(qe),G&&setTimeout(S)},Ve=!0}else if(q||"undefined"==typeof MutationObserver||!re(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())ze="undefined"!=typeof setImmediate&&re(setImmediate)?function(){setImmediate(qe)}:function(){setTimeout(qe,0)};else{var Ze=1,Ge=new MutationObserver(qe),Xe=document.createTextNode(String(Ze));Ge.observe(Xe,{characterData:!0}),ze=function(){Ze=(Ze+1)%2,Xe.data=String(Ze)},Ve=!0}function Ye(e,t){var n;if(Ke.push(function(){if(e)try{e.call(t)}catch(e){Re(e,t,"nextTick")}else n&&n(t)}),Je||(Je=!0,ze()),!e&&"undefined"!=typeof Promise)return new Promise(function(e){n=e})}var Qe=new ie;function et(e){!function e(t,n){var r,i;var a=Array.isArray(t);if(!a&&!o(t)||Object.isFrozen(t)||t instanceof pe)return;if(t.__ob__){var s=t.__ob__.dep.id;if(n.has(s))return;n.add(s)}if(a)for(r=t.length;r--;)e(t[r],n);else for(i=Object.keys(t),r=i.length;r--;)e(t[i[r]],n)}(e,Qe),Qe.clear()}var tt=g(function(e){var t="&"===e.charAt(0),n="~"===(e=t?e.slice(1):e).charAt(0),r="!"===(e=n?e.slice(1):e).charAt(0);return{name:e=r?e.slice(1):e,once:n,capture:r,passive:t}});function nt(e,t){function n(){var e=arguments,r=n.fns;if(!Array.isArray(r))return He(r,null,arguments,t,"v-on handler");for(var i=r.slice(),o=0;o<i.length;o++)He(i[o],null,e,t,"v-on handler")}return n.fns=e,n}function rt(e,n,i,o,a,s){var c,u,l,f;for(c in e)u=e[c],l=n[c],f=tt(c),t(u)||(t(l)?(t(u.fns)&&(u=e[c]=nt(u,s)),r(f.once)&&(u=e[c]=a(f.name,u,f.capture)),i(f.name,u,f.capture,f.passive,f.params)):u!==l&&(l.fns=u,e[c]=l));for(c in n)t(e[c])&&o((f=tt(c)).name,n[c],f.capture)}function it(e,i,o){var a;e instanceof pe&&(e=e.data.hook||(e.data.hook={}));var s=e[i];function c(){o.apply(this,arguments),h(a.fns,c)}t(s)?a=nt([c]):n(s.fns)&&r(s.merged)?(a=s).fns.push(c):a=nt([s,c]),a.merged=!0,e[i]=a}function ot(e,t,r,i,o){if(n(t)){if(y(t,r))return e[r]=t[r],o||delete t[r],!0;if(y(t,i))return e[r]=t[i],o||delete t[i],!0}return!1}function at(e){return i(e)?[he(e)]:Array.isArray(e)?function e(o,a){var s=[];var c,u,l,f;for(c=0;c<o.length;c++)t(u=o[c])||"boolean"==typeof u||(l=s.length-1,f=s[l],Array.isArray(u)?u.length>0&&(st((u=e(u,(a||"")+"_"+c))[0])&&st(f)&&(s[l]=he(f.text+u[0].text),u.shift()),s.push.apply(s,u)):i(u)?st(f)?s[l]=he(f.text+u):""!==u&&s.push(he(u)):st(u)&&st(f)?s[l]=he(f.text+u.text):(r(o._isVList)&&n(u.tag)&&t(u.key)&&n(a)&&(u.key="__vlist"+a+"_"+c+"__"),s.push(u)));return s}(e):void 0}function st(e){return n(e)&&n(e.text)&&!1===e.isComment}function ct(e,t){if(e){for(var n=Object.create(null),r=oe?Reflect.ownKeys(e):Object.keys(e),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){for(var a=e[o].from,s=t;s;){if(s._provided&&y(s._provided,a)){n[o]=s._provided[a];break}s=s.$parent}if(!s&&"default"in e[o]){var c=e[o].default;n[o]="function"==typeof c?c.call(t):c}}}return n}}function ut(e,t){if(!e||!e.length)return{};for(var n={},r=0,i=e.length;r<i;r++){var o=e[r],a=o.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,o.context!==t&&o.fnContext!==t||!a||null==a.slot)(n.default||(n.default=[])).push(o);else{var s=a.slot,c=n[s]||(n[s]=[]);"template"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var u in n)n[u].every(lt)&&delete n[u];return n}function lt(e){return e.isComment&&!e.asyncFactory||" "===e.text}function ft(t,n,r){var i,o=Object.keys(n).length>0,a=t?!!t.$stable:!o,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&r&&r!==e&&s===r.$key&&!o&&!r.$hasNormal)return r;for(var c in i={},t)t[c]&&"$"!==c[0]&&(i[c]=pt(n,c,t[c]))}else i={};for(var u in n)u in i||(i[u]=dt(n,u));return t&&Object.isExtensible(t)&&(t._normalized=i),R(i,"$stable",a),R(i,"$key",s),R(i,"$hasNormal",o),i}function pt(e,t,n){var r=function(){var e=arguments.length?n.apply(null,arguments):n({});return(e=e&&"object"==typeof e&&!Array.isArray(e)?[e]:at(e))&&(0===e.length||1===e.length&&e[0].isComment)?void 0:e};return n.proxy&&Object.defineProperty(e,t,{get:r,enumerable:!0,configurable:!0}),r}function dt(e,t){return function(){return e[t]}}function vt(e,t){var r,i,a,s,c;if(Array.isArray(e)||"string"==typeof e)for(r=new Array(e.length),i=0,a=e.length;i<a;i++)r[i]=t(e[i],i);else if("number"==typeof e)for(r=new Array(e),i=0;i<e;i++)r[i]=t(i+1,i);else if(o(e))if(oe&&e[Symbol.iterator]){r=[];for(var u=e[Symbol.iterator](),l=u.next();!l.done;)r.push(t(l.value,r.length)),l=u.next()}else for(s=Object.keys(e),r=new Array(s.length),i=0,a=s.length;i<a;i++)c=s[i],r[i]=t(e[c],c,i);return n(r)||(r=[]),r._isVList=!0,r}function ht(e,t,n,r){var i,o=this.$scopedSlots[e];o?(n=n||{},r&&(n=A(A({},r),n)),i=o(n)||t):i=this.$slots[e]||t;var a=n&&n.slot;return a?this.$createElement("template",{slot:a},i):i}function mt(e){return Le(this.$options,"filters",e)||E}function yt(e,t){return Array.isArray(e)?-1===e.indexOf(t):e!==t}function gt(e,t,n,r,i){var o=F.keyCodes[t]||n;return i&&r&&!F.keyCodes[t]?yt(i,r):o?yt(o,e):r?C(r)!==t:void 0}function _t(e,t,n,r,i){if(n)if(o(n)){var a;Array.isArray(n)&&(n=O(n));var s=function(o){if("class"===o||"style"===o||v(o))a=e;else{var s=e.attrs&&e.attrs.type;a=r||F.mustUseProp(t,s,o)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var c=b(o),u=C(o);c in a||u in a||(a[o]=n[o],i&&((e.on||(e.on={}))["update:"+o]=function(e){n[o]=e}))};for(var c in n)s(c)}else;return e}function bt(e,t){var n=this._staticTrees||(this._staticTrees=[]),r=n[e];return r&&!t?r:(wt(r=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),"__static__"+e,!1),r)}function $t(e,t,n){return wt(e,"__once__"+t+(n?"_"+n:""),!0),e}function wt(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&"string"!=typeof e[r]&&Ct(e[r],t+"_"+r,n);else Ct(e,t,n)}function Ct(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function xt(e,t){if(t)if(s(t)){var n=e.on=e.on?A({},e.on):{};for(var r in t){var i=n[r],o=t[r];n[r]=i?[].concat(i,o):o}}else;return e}function kt(e,t,n,r){t=t||{$stable:!n};for(var i=0;i<e.length;i++){var o=e[i];Array.isArray(o)?kt(o,t,n):o&&(o.proxy&&(o.fn.proxy=!0),t[o.key]=o.fn)}return r&&(t.$key=r),t}function At(e,t){for(var n=0;n<t.length;n+=2){var r=t[n];"string"==typeof r&&r&&(e[t[n]]=t[n+1])}return e}function Ot(e,t){return"string"==typeof e?t+e:e}function St(e){e._o=$t,e._n=f,e._s=l,e._l=vt,e._t=ht,e._q=N,e._i=j,e._m=bt,e._f=mt,e._k=gt,e._b=_t,e._v=he,e._e=ve,e._u=kt,e._g=xt,e._d=At,e._p=Ot}function Tt(t,n,i,o,a){var s,c=this,u=a.options;y(o,"_uid")?(s=Object.create(o))._original=o:(s=o,o=o._original);var l=r(u._compiled),f=!l;this.data=t,this.props=n,this.children=i,this.parent=o,this.listeners=t.on||e,this.injections=ct(u.inject,o),this.slots=function(){return c.$slots||ft(t.scopedSlots,c.$slots=ut(i,o)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return ft(t.scopedSlots,this.slots())}}),l&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=ft(t.scopedSlots,this.$slots)),u._scopeId?this._c=function(e,t,n,r){var i=Pt(s,e,t,n,r,f);return i&&!Array.isArray(i)&&(i.fnScopeId=u._scopeId,i.fnContext=o),i}:this._c=function(e,t,n,r){return Pt(s,e,t,n,r,f)}}function Et(e,t,n,r,i){var o=me(e);return o.fnContext=n,o.fnOptions=r,t.slot&&((o.data||(o.data={})).slot=t.slot),o}function Nt(e,t){for(var n in t)e[b(n)]=t[n]}St(Tt.prototype);var jt={init:function(e,t){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var r=e;jt.prepatch(r,r)}else{(e.componentInstance=function(e,t){var r={_isComponent:!0,_parentVnode:e,parent:t},i=e.data.inlineTemplate;n(i)&&(r.render=i.render,r.staticRenderFns=i.staticRenderFns);return new e.componentOptions.Ctor(r)}(e,Wt)).$mount(t?e.elm:void 0,t)}},prepatch:function(t,n){var r=n.componentOptions;!function(t,n,r,i,o){var a=i.data.scopedSlots,s=t.$scopedSlots,c=!!(a&&!a.$stable||s!==e&&!s.$stable||a&&t.$scopedSlots.$key!==a.$key),u=!!(o||t.$options._renderChildren||c);t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i);if(t.$options._renderChildren=o,t.$attrs=i.data.attrs||e,t.$listeners=r||e,n&&t.$options.props){$e(!1);for(var l=t._props,f=t.$options._propKeys||[],p=0;p<f.length;p++){var d=f[p],v=t.$options.props;l[d]=Me(d,v,n,t)}$e(!0),t.$options.propsData=n}r=r||e;var h=t.$options._parentListeners;t.$options._parentListeners=r,qt(t,r,h),u&&(t.$slots=ut(o,i.context),t.$forceUpdate())}(n.componentInstance=t.componentInstance,r.propsData,r.listeners,n,r.children)},insert:function(e){var t,n=e.context,r=e.componentInstance;r._isMounted||(r._isMounted=!0,Yt(r,"mounted")),e.data.keepAlive&&(n._isMounted?((t=r)._inactive=!1,en.push(t)):Xt(r,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?function e(t,n){if(n&&(t._directInactive=!0,Gt(t)))return;if(!t._inactive){t._inactive=!0;for(var r=0;r<t.$children.length;r++)e(t.$children[r]);Yt(t,"deactivated")}}(t,!0):t.$destroy())}},Dt=Object.keys(jt);function Lt(i,a,s,c,l){if(!t(i)){var f=s.$options._base;if(o(i)&&(i=f.extend(i)),"function"==typeof i){var p;if(t(i.cid)&&void 0===(i=function(e,i){if(r(e.error)&&n(e.errorComp))return e.errorComp;if(n(e.resolved))return e.resolved;var a=Ht;a&&n(e.owners)&&-1===e.owners.indexOf(a)&&e.owners.push(a);if(r(e.loading)&&n(e.loadingComp))return e.loadingComp;if(a&&!n(e.owners)){var s=e.owners=[a],c=!0,l=null,f=null;a.$on("hook:destroyed",function(){return h(s,a)});var p=function(e){for(var t=0,n=s.length;t<n;t++)s[t].$forceUpdate();e&&(s.length=0,null!==l&&(clearTimeout(l),l=null),null!==f&&(clearTimeout(f),f=null))},d=D(function(t){e.resolved=Bt(t,i),c?s.length=0:p(!0)}),v=D(function(t){n(e.errorComp)&&(e.error=!0,p(!0))}),m=e(d,v);return o(m)&&(u(m)?t(e.resolved)&&m.then(d,v):u(m.component)&&(m.component.then(d,v),n(m.error)&&(e.errorComp=Bt(m.error,i)),n(m.loading)&&(e.loadingComp=Bt(m.loading,i),0===m.delay?e.loading=!0:l=setTimeout(function(){l=null,t(e.resolved)&&t(e.error)&&(e.loading=!0,p(!1))},m.delay||200)),n(m.timeout)&&(f=setTimeout(function(){f=null,t(e.resolved)&&v(null)},m.timeout)))),c=!1,e.loading?e.loadingComp:e.resolved}}(p=i,f)))return function(e,t,n,r,i){var o=ve();return o.asyncFactory=e,o.asyncMeta={data:t,context:n,children:r,tag:i},o}(p,a,s,c,l);a=a||{},$n(i),n(a.model)&&function(e,t){var r=e.model&&e.model.prop||"value",i=e.model&&e.model.event||"input";(t.attrs||(t.attrs={}))[r]=t.model.value;var o=t.on||(t.on={}),a=o[i],s=t.model.callback;n(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(o[i]=[s].concat(a)):o[i]=s}(i.options,a);var d=function(e,r,i){var o=r.options.props;if(!t(o)){var a={},s=e.attrs,c=e.props;if(n(s)||n(c))for(var u in o){var l=C(u);ot(a,c,u,l,!0)||ot(a,s,u,l,!1)}return a}}(a,i);if(r(i.options.functional))return function(t,r,i,o,a){var s=t.options,c={},u=s.props;if(n(u))for(var l in u)c[l]=Me(l,u,r||e);else n(i.attrs)&&Nt(c,i.attrs),n(i.props)&&Nt(c,i.props);var f=new Tt(i,c,a,o,t),p=s.render.call(null,f._c,f);if(p instanceof pe)return Et(p,i,f.parent,s);if(Array.isArray(p)){for(var d=at(p)||[],v=new Array(d.length),h=0;h<d.length;h++)v[h]=Et(d[h],i,f.parent,s);return v}}(i,d,a,s,c);var v=a.on;if(a.on=a.nativeOn,r(i.options.abstract)){var m=a.slot;a={},m&&(a.slot=m)}!function(e){for(var t=e.hook||(e.hook={}),n=0;n<Dt.length;n++){var r=Dt[n],i=t[r],o=jt[r];i===o||i&&i._merged||(t[r]=i?Mt(o,i):o)}}(a);var y=i.options.name||l;return new pe("vue-component-"+i.cid+(y?"-"+y:""),a,void 0,void 0,void 0,s,{Ctor:i,propsData:d,listeners:v,tag:l,children:c},p)}}}function Mt(e,t){var n=function(n,r){e(n,r),t(n,r)};return n._merged=!0,n}var It=1,Ft=2;function Pt(e,a,s,c,u,l){return(Array.isArray(s)||i(s))&&(u=c,c=s,s=void 0),r(l)&&(u=Ft),function(e,i,a,s,c){if(n(a)&&n(a.__ob__))return ve();n(a)&&n(a.is)&&(i=a.is);if(!i)return ve();Array.isArray(s)&&"function"==typeof s[0]&&((a=a||{}).scopedSlots={default:s[0]},s.length=0);c===Ft?s=at(s):c===It&&(s=function(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}(s));var u,l;if("string"==typeof i){var f;l=e.$vnode&&e.$vnode.ns||F.getTagNamespace(i),u=F.isReservedTag(i)?new pe(F.parsePlatformTagName(i),a,s,void 0,void 0,e):a&&a.pre||!n(f=Le(e.$options,"components",i))?new pe(i,a,s,void 0,void 0,e):Lt(f,a,e,s,i)}else u=Lt(i,a,e,s);return Array.isArray(u)?u:n(u)?(n(l)&&function e(i,o,a){i.ns=o;"foreignObject"===i.tag&&(o=void 0,a=!0);if(n(i.children))for(var s=0,c=i.children.length;s<c;s++){var u=i.children[s];n(u.tag)&&(t(u.ns)||r(a)&&"svg"!==u.tag)&&e(u,o,a)}}(u,l),n(a)&&function(e){o(e.style)&&et(e.style);o(e.class)&&et(e.class)}(a),u):ve()}(e,a,s,c,u)}var Rt,Ht=null;function Bt(e,t){return(e.__esModule||oe&&"Module"===e[Symbol.toStringTag])&&(e=e.default),o(e)?t.extend(e):e}function Ut(e){return e.isComment&&e.asyncFactory}function zt(e){if(Array.isArray(e))for(var t=0;t<e.length;t++){var r=e[t];if(n(r)&&(n(r.componentOptions)||Ut(r)))return r}}function Vt(e,t){Rt.$on(e,t)}function Kt(e,t){Rt.$off(e,t)}function Jt(e,t){var n=Rt;return function r(){null!==t.apply(null,arguments)&&n.$off(e,r)}}function qt(e,t,n){Rt=e,rt(t,n||{},Vt,Kt,Jt,e),Rt=void 0}var Wt=null;function Zt(e){var t=Wt;return Wt=e,function(){Wt=t}}function Gt(e){for(;e&&(e=e.$parent);)if(e._inactive)return!0;return!1}function Xt(e,t){if(t){if(e._directInactive=!1,Gt(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)Xt(e.$children[n]);Yt(e,"activated")}}function Yt(e,t){le();var n=e.$options[t],r=t+" hook";if(n)for(var i=0,o=n.length;i<o;i++)He(n[i],e,null,e,r);e._hasHookEvent&&e.$emit("hook:"+t),fe()}var Qt=[],en=[],tn={},nn=!1,rn=!1,on=0;var an=0,sn=Date.now;if(z&&!q){var cn=window.performance;cn&&"function"==typeof cn.now&&sn()>document.createEvent("Event").timeStamp&&(sn=function(){return cn.now()})}function un(){var e,t;for(an=sn(),rn=!0,Qt.sort(function(e,t){return e.id-t.id}),on=0;on<Qt.length;on++)(e=Qt[on]).before&&e.before(),t=e.id,tn[t]=null,e.run();var n=en.slice(),r=Qt.slice();on=Qt.length=en.length=0,tn={},nn=rn=!1,function(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,Xt(e[t],!0)}(n),function(e){var t=e.length;for(;t--;){var n=e[t],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Yt(r,"updated")}}(r),ne&&F.devtools&&ne.emit("flush")}var ln=0,fn=function(e,t,n,r,i){this.vm=e,i&&(e._watcher=this),e._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++ln,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ie,this.newDepIds=new ie,this.expression="","function"==typeof t?this.getter=t:(this.getter=function(e){if(!H.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}(t),this.getter||(this.getter=S)),this.value=this.lazy?void 0:this.get()};fn.prototype.get=function(){var e;le(this);var t=this.vm;try{e=this.getter.call(t,t)}catch(e){if(!this.user)throw e;Re(e,t,'getter for watcher "'+this.expression+'"')}finally{this.deep&&et(e),fe(),this.cleanupDeps()}return e},fn.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},fn.prototype.cleanupDeps=function(){for(var e=this.deps.length;e--;){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},fn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():function(e){var t=e.id;if(null==tn[t]){if(tn[t]=!0,rn){for(var n=Qt.length-1;n>on&&Qt[n].id>e.id;)n--;Qt.splice(n+1,0,e)}else Qt.push(e);nn||(nn=!0,Ye(un))}}(this)},fn.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||o(e)||this.deep){var t=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,t)}catch(e){Re(e,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,e,t)}}},fn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},fn.prototype.depend=function(){for(var e=this.deps.length;e--;)this.deps[e].depend()},fn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||h(this.vm._watchers,this);for(var e=this.deps.length;e--;)this.deps[e].removeSub(this);this.active=!1}};var pn={enumerable:!0,configurable:!0,get:S,set:S};function dn(e,t,n){pn.get=function(){return this[t][n]},pn.set=function(e){this[t][n]=e},Object.defineProperty(e,n,pn)}function vn(e){e._watchers=[];var t=e.$options;t.props&&function(e,t){var n=e.$options.propsData||{},r=e._props={},i=e.$options._propKeys=[];e.$parent&&$e(!1);var o=function(o){i.push(o);var a=Me(o,t,n,e);xe(r,o,a),o in e||dn(e,"_props",o)};for(var a in t)o(a);$e(!0)}(e,t.props),t.methods&&function(e,t){e.$options.props;for(var n in t)e[n]="function"!=typeof t[n]?S:x(t[n],e)}(e,t.methods),t.data?function(e){var t=e.$options.data;s(t=e._data="function"==typeof t?function(e,t){le();try{return e.call(t,t)}catch(e){return Re(e,t,"data()"),{}}finally{fe()}}(t,e):t||{})||(t={});var n=Object.keys(t),r=e.$options.props,i=(e.$options.methods,n.length);for(;i--;){var o=n[i];r&&y(r,o)||(a=void 0,36!==(a=(o+"").charCodeAt(0))&&95!==a&&dn(e,"_data",o))}var a;Ce(t,!0)}(e):Ce(e._data={},!0),t.computed&&function(e,t){var n=e._computedWatchers=Object.create(null),r=te();for(var i in t){var o=t[i],a="function"==typeof o?o:o.get;r||(n[i]=new fn(e,a||S,S,hn)),i in e||mn(e,i,o)}}(e,t.computed),t.watch&&t.watch!==Y&&function(e,t){for(var n in t){var r=t[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)_n(e,n,r[i]);else _n(e,n,r)}}(e,t.watch)}var hn={lazy:!0};function mn(e,t,n){var r=!te();"function"==typeof n?(pn.get=r?yn(t):gn(n),pn.set=S):(pn.get=n.get?r&&!1!==n.cache?yn(t):gn(n.get):S,pn.set=n.set||S),Object.defineProperty(e,t,pn)}function yn(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),ce.target&&t.depend(),t.value}}function gn(e){return function(){return e.call(this,this)}}function _n(e,t,n,r){return s(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=e[n]),e.$watch(t,n,r)}var bn=0;function $n(e){var t=e.options;if(e.super){var n=$n(e.super);if(n!==e.superOptions){e.superOptions=n;var r=function(e){var t,n=e.options,r=e.sealedOptions;for(var i in n)n[i]!==r[i]&&(t||(t={}),t[i]=n[i]);return t}(e);r&&A(e.extendOptions,r),(t=e.options=De(n,e.extendOptions)).name&&(t.components[t.name]=e)}}return t}function wn(e){this._init(e)}function Cn(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r];var o=e.name||n.options.name,a=function(e){this._init(e)};return(a.prototype=Object.create(n.prototype)).constructor=a,a.cid=t++,a.options=De(n.options,e),a.super=n,a.options.props&&function(e){var t=e.options.props;for(var n in t)dn(e.prototype,"_props",n)}(a),a.options.computed&&function(e){var t=e.options.computed;for(var n in t)mn(e.prototype,n,t[n])}(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,M.forEach(function(e){a[e]=n[e]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=e,a.sealedOptions=A({},a.options),i[r]=a,a}}function xn(e){return e&&(e.Ctor.options.name||e.tag)}function kn(e,t){return Array.isArray(e)?e.indexOf(t)>-1:"string"==typeof e?e.split(",").indexOf(t)>-1:(n=e,"[object RegExp]"===a.call(n)&&e.test(t));var n}function An(e,t){var n=e.cache,r=e.keys,i=e._vnode;for(var o in n){var a=n[o];if(a){var s=xn(a.componentOptions);s&&!t(s)&&On(n,o,r,i)}}}function On(e,t,n,r){var i=e[t];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),e[t]=null,h(n,t)}!function(t){t.prototype._init=function(t){var n=this;n._uid=bn++,n._isVue=!0,t&&t._isComponent?function(e,t){var n=e.$options=Object.create(e.constructor.options),r=t._parentVnode;n.parent=t.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}(n,t):n.$options=De($n(n.constructor),t||{},n),n._renderProxy=n,n._self=n,function(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}(n),function(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&qt(e,t)}(n),function(t){t._vnode=null,t._staticTrees=null;var n=t.$options,r=t.$vnode=n._parentVnode,i=r&&r.context;t.$slots=ut(n._renderChildren,i),t.$scopedSlots=e,t._c=function(e,n,r,i){return Pt(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return Pt(t,e,n,r,i,!0)};var o=r&&r.data;xe(t,"$attrs",o&&o.attrs||e,null,!0),xe(t,"$listeners",n._parentListeners||e,null,!0)}(n),Yt(n,"beforeCreate"),function(e){var t=ct(e.$options.inject,e);t&&($e(!1),Object.keys(t).forEach(function(n){xe(e,n,t[n])}),$e(!0))}(n),vn(n),function(e){var t=e.$options.provide;t&&(e._provided="function"==typeof t?t.call(e):t)}(n),Yt(n,"created"),n.$options.el&&n.$mount(n.$options.el)}}(wn),function(e){var t={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=ke,e.prototype.$delete=Ae,e.prototype.$watch=function(e,t,n){if(s(t))return _n(this,e,t,n);(n=n||{}).user=!0;var r=new fn(this,e,t,n);if(n.immediate)try{t.call(this,r.value)}catch(e){Re(e,this,'callback for immediate watcher "'+r.expression+'"')}return function(){r.teardown()}}}(wn),function(e){var t=/^hook:/;e.prototype.$on=function(e,n){var r=this;if(Array.isArray(e))for(var i=0,o=e.length;i<o;i++)r.$on(e[i],n);else(r._events[e]||(r._events[e]=[])).push(n),t.test(e)&&(r._hasHookEvent=!0);return r},e.prototype.$once=function(e,t){var n=this;function r(){n.$off(e,r),t.apply(n,arguments)}return r.fn=t,n.$on(e,r),n},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(e)){for(var r=0,i=e.length;r<i;r++)n.$off(e[r],t);return n}var o,a=n._events[e];if(!a)return n;if(!t)return n._events[e]=null,n;for(var s=a.length;s--;)if((o=a[s])===t||o.fn===t){a.splice(s,1);break}return n},e.prototype.$emit=function(e){var t=this._events[e];if(t){t=t.length>1?k(t):t;for(var n=k(arguments,1),r='event handler for "'+e+'"',i=0,o=t.length;i<o;i++)He(t[i],this,n,this,r)}return this}}(wn),function(e){e.prototype._update=function(e,t){var n=this,r=n.$el,i=n._vnode,o=Zt(n);n._vnode=e,n.$el=i?n.__patch__(i,e):n.__patch__(n.$el,e,t,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},e.prototype.$forceUpdate=function(){this._watcher&&this._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Yt(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||h(t.$children,e),e._watcher&&e._watcher.teardown();for(var n=e._watchers.length;n--;)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Yt(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}(wn),function(e){St(e.prototype),e.prototype.$nextTick=function(e){return Ye(e,this)},e.prototype._render=function(){var e,t=this,n=t.$options,r=n.render,i=n._parentVnode;i&&(t.$scopedSlots=ft(i.data.scopedSlots,t.$slots,t.$scopedSlots)),t.$vnode=i;try{Ht=t,e=r.call(t._renderProxy,t.$createElement)}catch(n){Re(n,t,"render"),e=t._vnode}finally{Ht=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof pe||(e=ve()),e.parent=i,e}}(wn);var Sn=[String,RegExp,Array],Tn={KeepAlive:{name:"keep-alive",abstract:!0,props:{include:Sn,exclude:Sn,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)On(this.cache,e,this.keys)},mounted:function(){var e=this;this.$watch("include",function(t){An(e,function(e){return kn(t,e)})}),this.$watch("exclude",function(t){An(e,function(e){return!kn(t,e)})})},render:function(){var e=this.$slots.default,t=zt(e),n=t&&t.componentOptions;if(n){var r=xn(n),i=this.include,o=this.exclude;if(i&&(!r||!kn(i,r))||o&&r&&kn(o,r))return t;var a=this.cache,s=this.keys,c=null==t.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):t.key;a[c]?(t.componentInstance=a[c].componentInstance,h(s,c),s.push(c)):(a[c]=t,s.push(c),this.max&&s.length>parseInt(this.max)&&On(a,s[0],s,this._vnode)),t.data.keepAlive=!0}return t||e&&e[0]}}};!function(e){var t={get:function(){return F}};Object.defineProperty(e,"config",t),e.util={warn:ae,extend:A,mergeOptions:De,defineReactive:xe},e.set=ke,e.delete=Ae,e.nextTick=Ye,e.observable=function(e){return Ce(e),e},e.options=Object.create(null),M.forEach(function(t){e.options[t+"s"]=Object.create(null)}),e.options._base=e,A(e.options.components,Tn),function(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var n=k(arguments,1);return n.unshift(this),"function"==typeof e.install?e.install.apply(e,n):"function"==typeof e&&e.apply(null,n),t.push(e),this}}(e),function(e){e.mixin=function(e){return this.options=De(this.options,e),this}}(e),Cn(e),function(e){M.forEach(function(t){e[t]=function(e,n){return n?("component"===t&&s(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&"function"==typeof n&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}})}(e)}(wn),Object.defineProperty(wn.prototype,"$isServer",{get:te}),Object.defineProperty(wn.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(wn,"FunctionalRenderContext",{value:Tt}),wn.version="2.6.12";var En=p("style,class"),Nn=p("input,textarea,option,select,progress"),jn=function(e,t,n){return"value"===n&&Nn(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},Dn=p("contenteditable,draggable,spellcheck"),Ln=p("events,caret,typing,plaintext-only"),Mn=function(e,t){return Hn(t)||"false"===t?"false":"contenteditable"===e&&Ln(t)?t:"true"},In=p("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),Fn="http://www.w3.org/1999/xlink",Pn=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},Rn=function(e){return Pn(e)?e.slice(6,e.length):""},Hn=function(e){return null==e||!1===e};function Bn(e){for(var t=e.data,r=e,i=e;n(i.componentInstance);)(i=i.componentInstance._vnode)&&i.data&&(t=Un(i.data,t));for(;n(r=r.parent);)r&&r.data&&(t=Un(t,r.data));return function(e,t){if(n(e)||n(t))return zn(e,Vn(t));return""}(t.staticClass,t.class)}function Un(e,t){return{staticClass:zn(e.staticClass,t.staticClass),class:n(e.class)?[e.class,t.class]:t.class}}function zn(e,t){return e?t?e+" "+t:e:t||""}function Vn(e){return Array.isArray(e)?function(e){for(var t,r="",i=0,o=e.length;i<o;i++)n(t=Vn(e[i]))&&""!==t&&(r&&(r+=" "),r+=t);return r}(e):o(e)?function(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}(e):"string"==typeof e?e:""}var Kn={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Jn=p("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),qn=p("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Wn=function(e){return Jn(e)||qn(e)};function Zn(e){return qn(e)?"svg":"math"===e?"math":void 0}var Gn=Object.create(null);var Xn=p("text,number,password,search,email,tel,url");function Yn(e){if("string"==typeof e){var t=document.querySelector(e);return t||document.createElement("div")}return e}var Qn=Object.freeze({createElement:function(e,t){var n=document.createElement(e);return"select"!==e?n:(t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n)},createElementNS:function(e,t){return document.createElementNS(Kn[e],t)},createTextNode:function(e){return document.createTextNode(e)},createComment:function(e){return document.createComment(e)},insertBefore:function(e,t,n){e.insertBefore(t,n)},removeChild:function(e,t){e.removeChild(t)},appendChild:function(e,t){e.appendChild(t)},parentNode:function(e){return e.parentNode},nextSibling:function(e){return e.nextSibling},tagName:function(e){return e.tagName},setTextContent:function(e,t){e.textContent=t},setStyleScope:function(e,t){e.setAttribute(t,"")}}),er={create:function(e,t){tr(t)},update:function(e,t){e.data.ref!==t.data.ref&&(tr(e,!0),tr(t))},destroy:function(e){tr(e,!0)}};function tr(e,t){var r=e.data.ref;if(n(r)){var i=e.context,o=e.componentInstance||e.elm,a=i.$refs;t?Array.isArray(a[r])?h(a[r],o):a[r]===o&&(a[r]=void 0):e.data.refInFor?Array.isArray(a[r])?a[r].indexOf(o)<0&&a[r].push(o):a[r]=[o]:a[r]=o}}var nr=new pe("",{},[]),rr=["create","activate","update","remove","destroy"];function ir(e,i){return e.key===i.key&&(e.tag===i.tag&&e.isComment===i.isComment&&n(e.data)===n(i.data)&&function(e,t){if("input"!==e.tag)return!0;var r,i=n(r=e.data)&&n(r=r.attrs)&&r.type,o=n(r=t.data)&&n(r=r.attrs)&&r.type;return i===o||Xn(i)&&Xn(o)}(e,i)||r(e.isAsyncPlaceholder)&&e.asyncFactory===i.asyncFactory&&t(i.asyncFactory.error))}function or(e,t,r){var i,o,a={};for(i=t;i<=r;++i)n(o=e[i].key)&&(a[o]=i);return a}var ar={create:sr,update:sr,destroy:function(e){sr(e,nr)}};function sr(e,t){(e.data.directives||t.data.directives)&&function(e,t){var n,r,i,o=e===nr,a=t===nr,s=ur(e.data.directives,e.context),c=ur(t.data.directives,t.context),u=[],l=[];for(n in c)r=s[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,fr(i,"update",t,e),i.def&&i.def.componentUpdated&&l.push(i)):(fr(i,"bind",t,e),i.def&&i.def.inserted&&u.push(i));if(u.length){var f=function(){for(var n=0;n<u.length;n++)fr(u[n],"inserted",t,e)};o?it(t,"insert",f):f()}l.length&&it(t,"postpatch",function(){for(var n=0;n<l.length;n++)fr(l[n],"componentUpdated",t,e)});if(!o)for(n in s)c[n]||fr(s[n],"unbind",e,e,a)}(e,t)}var cr=Object.create(null);function ur(e,t){var n,r,i=Object.create(null);if(!e)return i;for(n=0;n<e.length;n++)(r=e[n]).modifiers||(r.modifiers=cr),i[lr(r)]=r,r.def=Le(t.$options,"directives",r.name);return i}function lr(e){return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".")}function fr(e,t,n,r,i){var o=e.def&&e.def[t];if(o)try{o(n.elm,e,n,r,i)}catch(r){Re(r,n.context,"directive "+e.name+" "+t+" hook")}}var pr=[er,ar];function dr(e,r){var i=r.componentOptions;if(!(n(i)&&!1===i.Ctor.options.inheritAttrs||t(e.data.attrs)&&t(r.data.attrs))){var o,a,s=r.elm,c=e.data.attrs||{},u=r.data.attrs||{};for(o in n(u.__ob__)&&(u=r.data.attrs=A({},u)),u)a=u[o],c[o]!==a&&vr(s,o,a);for(o in(q||Z)&&u.value!==c.value&&vr(s,"value",u.value),c)t(u[o])&&(Pn(o)?s.removeAttributeNS(Fn,Rn(o)):Dn(o)||s.removeAttribute(o))}}function vr(e,t,n){e.tagName.indexOf("-")>-1?hr(e,t,n):In(t)?Hn(n)?e.removeAttribute(t):(n="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,e.setAttribute(t,n)):Dn(t)?e.setAttribute(t,Mn(t,n)):Pn(t)?Hn(n)?e.removeAttributeNS(Fn,Rn(t)):e.setAttributeNS(Fn,t,n):hr(e,t,n)}function hr(e,t,n){if(Hn(n))e.removeAttribute(t);else{if(q&&!W&&"TEXTAREA"===e.tagName&&"placeholder"===t&&""!==n&&!e.__ieph){var r=function(t){t.stopImmediatePropagation(),e.removeEventListener("input",r)};e.addEventListener("input",r),e.__ieph=!0}e.setAttribute(t,n)}}var mr={create:dr,update:dr};function yr(e,r){var i=r.elm,o=r.data,a=e.data;if(!(t(o.staticClass)&&t(o.class)&&(t(a)||t(a.staticClass)&&t(a.class)))){var s=Bn(r),c=i._transitionClasses;n(c)&&(s=zn(s,Vn(c))),s!==i._prevClass&&(i.setAttribute("class",s),i._prevClass=s)}}var gr,_r,br,$r,wr,Cr,xr={create:yr,update:yr},kr=/[\w).+\-_$\]]/;function Ar(e){var t,n,r,i,o,a=!1,s=!1,c=!1,u=!1,l=0,f=0,p=0,d=0;for(r=0;r<e.length;r++)if(n=t,t=e.charCodeAt(r),a)39===t&&92!==n&&(a=!1);else if(s)34===t&&92!==n&&(s=!1);else if(c)96===t&&92!==n&&(c=!1);else if(u)47===t&&92!==n&&(u=!1);else if(124!==t||124===e.charCodeAt(r+1)||124===e.charCodeAt(r-1)||l||f||p){switch(t){case 34:s=!0;break;case 39:a=!0;break;case 96:c=!0;break;case 40:p++;break;case 41:p--;break;case 91:f++;break;case 93:f--;break;case 123:l++;break;case 125:l--}if(47===t){for(var v=r-1,h=void 0;v>=0&&" "===(h=e.charAt(v));v--);h&&kr.test(h)||(u=!0)}}else void 0===i?(d=r+1,i=e.slice(0,r).trim()):m();function m(){(o||(o=[])).push(e.slice(d,r).trim()),d=r+1}if(void 0===i?i=e.slice(0,r).trim():0!==d&&m(),o)for(r=0;r<o.length;r++)i=Or(i,o[r]);return i}function Or(e,t){var n=t.indexOf("(");if(n<0)return'_f("'+t+'")('+e+")";var r=t.slice(0,n),i=t.slice(n+1);return'_f("'+r+'")('+e+(")"!==i?","+i:i)}function Sr(e,t){console.error("[Vue compiler]: "+e)}function Tr(e,t){return e?e.map(function(e){return e[t]}).filter(function(e){return e}):[]}function Er(e,t,n,r,i){(e.props||(e.props=[])).push(Rr({name:t,value:n,dynamic:i},r)),e.plain=!1}function Nr(e,t,n,r,i){(i?e.dynamicAttrs||(e.dynamicAttrs=[]):e.attrs||(e.attrs=[])).push(Rr({name:t,value:n,dynamic:i},r)),e.plain=!1}function jr(e,t,n,r){e.attrsMap[t]=n,e.attrsList.push(Rr({name:t,value:n},r))}function Dr(e,t,n,r,i,o,a,s){(e.directives||(e.directives=[])).push(Rr({name:t,rawName:n,value:r,arg:i,isDynamicArg:o,modifiers:a},s)),e.plain=!1}function Lr(e,t,n){return n?"_p("+t+',"'+e+'")':e+t}function Mr(t,n,r,i,o,a,s,c){var u;(i=i||e).right?c?n="("+n+")==='click'?'contextmenu':("+n+")":"click"===n&&(n="contextmenu",delete i.right):i.middle&&(c?n="("+n+")==='click'?'mouseup':("+n+")":"click"===n&&(n="mouseup")),i.capture&&(delete i.capture,n=Lr("!",n,c)),i.once&&(delete i.once,n=Lr("~",n,c)),i.passive&&(delete i.passive,n=Lr("&",n,c)),i.native?(delete i.native,u=t.nativeEvents||(t.nativeEvents={})):u=t.events||(t.events={});var l=Rr({value:r.trim(),dynamic:c},s);i!==e&&(l.modifiers=i);var f=u[n];Array.isArray(f)?o?f.unshift(l):f.push(l):u[n]=f?o?[l,f]:[f,l]:l,t.plain=!1}function Ir(e,t,n){var r=Fr(e,":"+t)||Fr(e,"v-bind:"+t);if(null!=r)return Ar(r);if(!1!==n){var i=Fr(e,t);if(null!=i)return JSON.stringify(i)}}function Fr(e,t,n){var r;if(null!=(r=e.attrsMap[t]))for(var i=e.attrsList,o=0,a=i.length;o<a;o++)if(i[o].name===t){i.splice(o,1);break}return n&&delete e.attrsMap[t],r}function Pr(e,t){for(var n=e.attrsList,r=0,i=n.length;r<i;r++){var o=n[r];if(t.test(o.name))return n.splice(r,1),o}}function Rr(e,t){return t&&(null!=t.start&&(e.start=t.start),null!=t.end&&(e.end=t.end)),e}function Hr(e,t,n){var r=n||{},i=r.number,o="$$v";r.trim&&(o="(typeof $$v === 'string'? $$v.trim(): $$v)"),i&&(o="_n("+o+")");var a=Br(t,o);e.model={value:"("+t+")",expression:JSON.stringify(t),callback:"function ($$v) {"+a+"}"}}function Br(e,t){var n=function(e){if(e=e.trim(),gr=e.length,e.indexOf("[")<0||e.lastIndexOf("]")<gr-1)return($r=e.lastIndexOf("."))>-1?{exp:e.slice(0,$r),key:'"'+e.slice($r+1)+'"'}:{exp:e,key:null};_r=e,$r=wr=Cr=0;for(;!zr();)Vr(br=Ur())?Jr(br):91===br&&Kr(br);return{exp:e.slice(0,wr),key:e.slice(wr+1,Cr)}}(e);return null===n.key?e+"="+t:"$set("+n.exp+", "+n.key+", "+t+")"}function Ur(){return _r.charCodeAt(++$r)}function zr(){return $r>=gr}function Vr(e){return 34===e||39===e}function Kr(e){var t=1;for(wr=$r;!zr();)if(Vr(e=Ur()))Jr(e);else if(91===e&&t++,93===e&&t--,0===t){Cr=$r;break}}function Jr(e){for(var t=e;!zr()&&(e=Ur())!==t;);}var qr,Wr="__r",Zr="__c";function Gr(e,t,n){var r=qr;return function i(){null!==t.apply(null,arguments)&&Qr(e,i,n,r)}}var Xr=Ve&&!(X&&Number(X[1])<=53);function Yr(e,t,n,r){if(Xr){var i=an,o=t;t=o._wrapper=function(e){if(e.target===e.currentTarget||e.timeStamp>=i||e.timeStamp<=0||e.target.ownerDocument!==document)return o.apply(this,arguments)}}qr.addEventListener(e,t,Q?{capture:n,passive:r}:n)}function Qr(e,t,n,r){(r||qr).removeEventListener(e,t._wrapper||t,n)}function ei(e,r){if(!t(e.data.on)||!t(r.data.on)){var i=r.data.on||{},o=e.data.on||{};qr=r.elm,function(e){if(n(e[Wr])){var t=q?"change":"input";e[t]=[].concat(e[Wr],e[t]||[]),delete e[Wr]}n(e[Zr])&&(e.change=[].concat(e[Zr],e.change||[]),delete e[Zr])}(i),rt(i,o,Yr,Qr,Gr,r.context),qr=void 0}}var ti,ni={create:ei,update:ei};function ri(e,r){if(!t(e.data.domProps)||!t(r.data.domProps)){var i,o,a=r.elm,s=e.data.domProps||{},c=r.data.domProps||{};for(i in n(c.__ob__)&&(c=r.data.domProps=A({},c)),s)i in c||(a[i]="");for(i in c){if(o=c[i],"textContent"===i||"innerHTML"===i){if(r.children&&(r.children.length=0),o===s[i])continue;1===a.childNodes.length&&a.removeChild(a.childNodes[0])}if("value"===i&&"PROGRESS"!==a.tagName){a._value=o;var u=t(o)?"":String(o);ii(a,u)&&(a.value=u)}else if("innerHTML"===i&&qn(a.tagName)&&t(a.innerHTML)){(ti=ti||document.createElement("div")).innerHTML="<svg>"+o+"</svg>";for(var l=ti.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;l.firstChild;)a.appendChild(l.firstChild)}else if(o!==s[i])try{a[i]=o}catch(e){}}}}function ii(e,t){return!e.composing&&("OPTION"===e.tagName||function(e,t){var n=!0;try{n=document.activeElement!==e}catch(e){}return n&&e.value!==t}(e,t)||function(e,t){var r=e.value,i=e._vModifiers;if(n(i)){if(i.number)return f(r)!==f(t);if(i.trim)return r.trim()!==t.trim()}return r!==t}(e,t))}var oi={create:ri,update:ri},ai=g(function(e){var t={},n=/:(.+)/;return e.split(/;(?![^(]*\))/g).forEach(function(e){if(e){var r=e.split(n);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t});function si(e){var t=ci(e.style);return e.staticStyle?A(e.staticStyle,t):t}function ci(e){return Array.isArray(e)?O(e):"string"==typeof e?ai(e):e}var ui,li=/^--/,fi=/\s*!important$/,pi=function(e,t,n){if(li.test(t))e.style.setProperty(t,n);else if(fi.test(n))e.style.setProperty(C(t),n.replace(fi,""),"important");else{var r=vi(t);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)e.style[r]=n[i];else e.style[r]=n}},di=["Webkit","Moz","ms"],vi=g(function(e){if(ui=ui||document.createElement("div").style,"filter"!==(e=b(e))&&e in ui)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<di.length;n++){var r=di[n]+t;if(r in ui)return r}});function hi(e,r){var i=r.data,o=e.data;if(!(t(i.staticStyle)&&t(i.style)&&t(o.staticStyle)&&t(o.style))){var a,s,c=r.elm,u=o.staticStyle,l=o.normalizedStyle||o.style||{},f=u||l,p=ci(r.data.style)||{};r.data.normalizedStyle=n(p.__ob__)?A({},p):p;var d=function(e,t){var n,r={};if(t)for(var i=e;i.componentInstance;)(i=i.componentInstance._vnode)&&i.data&&(n=si(i.data))&&A(r,n);(n=si(e.data))&&A(r,n);for(var o=e;o=o.parent;)o.data&&(n=si(o.data))&&A(r,n);return r}(r,!0);for(s in f)t(d[s])&&pi(c,s,"");for(s in d)(a=d[s])!==f[s]&&pi(c,s,null==a?"":a)}}var mi={create:hi,update:hi},yi=/\s+/;function gi(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(yi).forEach(function(t){return e.classList.add(t)}):e.classList.add(t);else{var n=" "+(e.getAttribute("class")||"")+" ";n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function _i(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(yi).forEach(function(t){return e.classList.remove(t)}):e.classList.remove(t),e.classList.length||e.removeAttribute("class");else{for(var n=" "+(e.getAttribute("class")||"")+" ",r=" "+t+" ";n.indexOf(r)>=0;)n=n.replace(r," ");(n=n.trim())?e.setAttribute("class",n):e.removeAttribute("class")}}function bi(e){if(e){if("object"==typeof e){var t={};return!1!==e.css&&A(t,$i(e.name||"v")),A(t,e),t}return"string"==typeof e?$i(e):void 0}}var $i=g(function(e){return{enterClass:e+"-enter",enterToClass:e+"-enter-to",enterActiveClass:e+"-enter-active",leaveClass:e+"-leave",leaveToClass:e+"-leave-to",leaveActiveClass:e+"-leave-active"}}),wi=z&&!W,Ci="transition",xi="animation",ki="transition",Ai="transitionend",Oi="animation",Si="animationend";wi&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(ki="WebkitTransition",Ai="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Oi="WebkitAnimation",Si="webkitAnimationEnd"));var Ti=z?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()};function Ei(e){Ti(function(){Ti(e)})}function Ni(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),gi(e,t))}function ji(e,t){e._transitionClasses&&h(e._transitionClasses,t),_i(e,t)}function Di(e,t,n){var r=Mi(e,t),i=r.type,o=r.timeout,a=r.propCount;if(!i)return n();var s=i===Ci?Ai:Si,c=0,u=function(){e.removeEventListener(s,l),n()},l=function(t){t.target===e&&++c>=a&&u()};setTimeout(function(){c<a&&u()},o+1),e.addEventListener(s,l)}var Li=/\b(transform|all)(,|$)/;function Mi(e,t){var n,r=window.getComputedStyle(e),i=(r[ki+"Delay"]||"").split(", "),o=(r[ki+"Duration"]||"").split(", "),a=Ii(i,o),s=(r[Oi+"Delay"]||"").split(", "),c=(r[Oi+"Duration"]||"").split(", "),u=Ii(s,c),l=0,f=0;return t===Ci?a>0&&(n=Ci,l=a,f=o.length):t===xi?u>0&&(n=xi,l=u,f=c.length):f=(n=(l=Math.max(a,u))>0?a>u?Ci:xi:null)?n===Ci?o.length:c.length:0,{type:n,timeout:l,propCount:f,hasTransform:n===Ci&&Li.test(r[ki+"Property"])}}function Ii(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max.apply(null,t.map(function(t,n){return Fi(t)+Fi(e[n])}))}function Fi(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function Pi(e,r){var i=e.elm;n(i._leaveCb)&&(i._leaveCb.cancelled=!0,i._leaveCb());var a=bi(e.data.transition);if(!t(a)&&!n(i._enterCb)&&1===i.nodeType){for(var s=a.css,c=a.type,u=a.enterClass,l=a.enterToClass,p=a.enterActiveClass,d=a.appearClass,v=a.appearToClass,h=a.appearActiveClass,m=a.beforeEnter,y=a.enter,g=a.afterEnter,_=a.enterCancelled,b=a.beforeAppear,$=a.appear,w=a.afterAppear,C=a.appearCancelled,x=a.duration,k=Wt,A=Wt.$vnode;A&&A.parent;)k=A.context,A=A.parent;var O=!k._isMounted||!e.isRootInsert;if(!O||$||""===$){var S=O&&d?d:u,T=O&&h?h:p,E=O&&v?v:l,N=O&&b||m,j=O&&"function"==typeof $?$:y,L=O&&w||g,M=O&&C||_,I=f(o(x)?x.enter:x),F=!1!==s&&!W,P=Bi(j),R=i._enterCb=D(function(){F&&(ji(i,E),ji(i,T)),R.cancelled?(F&&ji(i,S),M&&M(i)):L&&L(i),i._enterCb=null});e.data.show||it(e,"insert",function(){var t=i.parentNode,n=t&&t._pending&&t._pending[e.key];n&&n.tag===e.tag&&n.elm._leaveCb&&n.elm._leaveCb(),j&&j(i,R)}),N&&N(i),F&&(Ni(i,S),Ni(i,T),Ei(function(){ji(i,S),R.cancelled||(Ni(i,E),P||(Hi(I)?setTimeout(R,I):Di(i,c,R)))})),e.data.show&&(r&&r(),j&&j(i,R)),F||P||R()}}}function Ri(e,r){var i=e.elm;n(i._enterCb)&&(i._enterCb.cancelled=!0,i._enterCb());var a=bi(e.data.transition);if(t(a)||1!==i.nodeType)return r();if(!n(i._leaveCb)){var s=a.css,c=a.type,u=a.leaveClass,l=a.leaveToClass,p=a.leaveActiveClass,d=a.beforeLeave,v=a.leave,h=a.afterLeave,m=a.leaveCancelled,y=a.delayLeave,g=a.duration,_=!1!==s&&!W,b=Bi(v),$=f(o(g)?g.leave:g),w=i._leaveCb=D(function(){i.parentNode&&i.parentNode._pending&&(i.parentNode._pending[e.key]=null),_&&(ji(i,l),ji(i,p)),w.cancelled?(_&&ji(i,u),m&&m(i)):(r(),h&&h(i)),i._leaveCb=null});y?y(C):C()}function C(){w.cancelled||(!e.data.show&&i.parentNode&&((i.parentNode._pending||(i.parentNode._pending={}))[e.key]=e),d&&d(i),_&&(Ni(i,u),Ni(i,p),Ei(function(){ji(i,u),w.cancelled||(Ni(i,l),b||(Hi($)?setTimeout(w,$):Di(i,c,w)))})),v&&v(i,w),_||b||w())}}function Hi(e){return"number"==typeof e&&!isNaN(e)}function Bi(e){if(t(e))return!1;var r=e.fns;return n(r)?Bi(Array.isArray(r)?r[0]:r):(e._length||e.length)>1}function Ui(e,t){!0!==t.data.show&&Pi(t)}var zi=function(e){var o,a,s={},c=e.modules,u=e.nodeOps;for(o=0;o<rr.length;++o)for(s[rr[o]]=[],a=0;a<c.length;++a)n(c[a][rr[o]])&&s[rr[o]].push(c[a][rr[o]]);function l(e){var t=u.parentNode(e);n(t)&&u.removeChild(t,e)}function f(e,t,i,o,a,c,l){if(n(e.elm)&&n(c)&&(e=c[l]=me(e)),e.isRootInsert=!a,!function(e,t,i,o){var a=e.data;if(n(a)){var c=n(e.componentInstance)&&a.keepAlive;if(n(a=a.hook)&&n(a=a.init)&&a(e,!1),n(e.componentInstance))return d(e,t),v(i,e.elm,o),r(c)&&function(e,t,r,i){for(var o,a=e;a.componentInstance;)if(a=a.componentInstance._vnode,n(o=a.data)&&n(o=o.transition)){for(o=0;o<s.activate.length;++o)s.activate[o](nr,a);t.push(a);break}v(r,e.elm,i)}(e,t,i,o),!0}}(e,t,i,o)){var f=e.data,p=e.children,m=e.tag;n(m)?(e.elm=e.ns?u.createElementNS(e.ns,m):u.createElement(m,e),g(e),h(e,p,t),n(f)&&y(e,t),v(i,e.elm,o)):r(e.isComment)?(e.elm=u.createComment(e.text),v(i,e.elm,o)):(e.elm=u.createTextNode(e.text),v(i,e.elm,o))}}function d(e,t){n(e.data.pendingInsert)&&(t.push.apply(t,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,m(e)?(y(e,t),g(e)):(tr(e),t.push(e))}function v(e,t,r){n(e)&&(n(r)?u.parentNode(r)===e&&u.insertBefore(e,t,r):u.appendChild(e,t))}function h(e,t,n){if(Array.isArray(t))for(var r=0;r<t.length;++r)f(t[r],n,e.elm,null,!0,t,r);else i(e.text)&&u.appendChild(e.elm,u.createTextNode(String(e.text)))}function m(e){for(;e.componentInstance;)e=e.componentInstance._vnode;return n(e.tag)}function y(e,t){for(var r=0;r<s.create.length;++r)s.create[r](nr,e);n(o=e.data.hook)&&(n(o.create)&&o.create(nr,e),n(o.insert)&&t.push(e))}function g(e){var t;if(n(t=e.fnScopeId))u.setStyleScope(e.elm,t);else for(var r=e;r;)n(t=r.context)&&n(t=t.$options._scopeId)&&u.setStyleScope(e.elm,t),r=r.parent;n(t=Wt)&&t!==e.context&&t!==e.fnContext&&n(t=t.$options._scopeId)&&u.setStyleScope(e.elm,t)}function _(e,t,n,r,i,o){for(;r<=i;++r)f(n[r],o,e,t,!1,n,r)}function b(e){var t,r,i=e.data;if(n(i))for(n(t=i.hook)&&n(t=t.destroy)&&t(e),t=0;t<s.destroy.length;++t)s.destroy[t](e);if(n(t=e.children))for(r=0;r<e.children.length;++r)b(e.children[r])}function $(e,t,r){for(;t<=r;++t){var i=e[t];n(i)&&(n(i.tag)?(w(i),b(i)):l(i.elm))}}function w(e,t){if(n(t)||n(e.data)){var r,i=s.remove.length+1;for(n(t)?t.listeners+=i:t=function(e,t){function n(){0==--n.listeners&&l(e)}return n.listeners=t,n}(e.elm,i),n(r=e.componentInstance)&&n(r=r._vnode)&&n(r.data)&&w(r,t),r=0;r<s.remove.length;++r)s.remove[r](e,t);n(r=e.data.hook)&&n(r=r.remove)?r(e,t):t()}else l(e.elm)}function C(e,t,r,i){for(var o=r;o<i;o++){var a=t[o];if(n(a)&&ir(e,a))return o}}function x(e,i,o,a,c,l){if(e!==i){n(i.elm)&&n(a)&&(i=a[c]=me(i));var p=i.elm=e.elm;if(r(e.isAsyncPlaceholder))n(i.asyncFactory.resolved)?O(e.elm,i,o):i.isAsyncPlaceholder=!0;else if(r(i.isStatic)&&r(e.isStatic)&&i.key===e.key&&(r(i.isCloned)||r(i.isOnce)))i.componentInstance=e.componentInstance;else{var d,v=i.data;n(v)&&n(d=v.hook)&&n(d=d.prepatch)&&d(e,i);var h=e.children,y=i.children;if(n(v)&&m(i)){for(d=0;d<s.update.length;++d)s.update[d](e,i);n(d=v.hook)&&n(d=d.update)&&d(e,i)}t(i.text)?n(h)&&n(y)?h!==y&&function(e,r,i,o,a){for(var s,c,l,p=0,d=0,v=r.length-1,h=r[0],m=r[v],y=i.length-1,g=i[0],b=i[y],w=!a;p<=v&&d<=y;)t(h)?h=r[++p]:t(m)?m=r[--v]:ir(h,g)?(x(h,g,o,i,d),h=r[++p],g=i[++d]):ir(m,b)?(x(m,b,o,i,y),m=r[--v],b=i[--y]):ir(h,b)?(x(h,b,o,i,y),w&&u.insertBefore(e,h.elm,u.nextSibling(m.elm)),h=r[++p],b=i[--y]):ir(m,g)?(x(m,g,o,i,d),w&&u.insertBefore(e,m.elm,h.elm),m=r[--v],g=i[++d]):(t(s)&&(s=or(r,p,v)),t(c=n(g.key)?s[g.key]:C(g,r,p,v))?f(g,o,e,h.elm,!1,i,d):ir(l=r[c],g)?(x(l,g,o,i,d),r[c]=void 0,w&&u.insertBefore(e,l.elm,h.elm)):f(g,o,e,h.elm,!1,i,d),g=i[++d]);p>v?_(e,t(i[y+1])?null:i[y+1].elm,i,d,y,o):d>y&&$(r,p,v)}(p,h,y,o,l):n(y)?(n(e.text)&&u.setTextContent(p,""),_(p,null,y,0,y.length-1,o)):n(h)?$(h,0,h.length-1):n(e.text)&&u.setTextContent(p,""):e.text!==i.text&&u.setTextContent(p,i.text),n(v)&&n(d=v.hook)&&n(d=d.postpatch)&&d(e,i)}}}function k(e,t,i){if(r(i)&&n(e.parent))e.parent.data.pendingInsert=t;else for(var o=0;o<t.length;++o)t[o].data.hook.insert(t[o])}var A=p("attrs,class,staticClass,staticStyle,key");function O(e,t,i,o){var a,s=t.tag,c=t.data,u=t.children;if(o=o||c&&c.pre,t.elm=e,r(t.isComment)&&n(t.asyncFactory))return t.isAsyncPlaceholder=!0,!0;if(n(c)&&(n(a=c.hook)&&n(a=a.init)&&a(t,!0),n(a=t.componentInstance)))return d(t,i),!0;if(n(s)){if(n(u))if(e.hasChildNodes())if(n(a=c)&&n(a=a.domProps)&&n(a=a.innerHTML)){if(a!==e.innerHTML)return!1}else{for(var l=!0,f=e.firstChild,p=0;p<u.length;p++){if(!f||!O(f,u[p],i,o)){l=!1;break}f=f.nextSibling}if(!l||f)return!1}else h(t,u,i);if(n(c)){var v=!1;for(var m in c)if(!A(m)){v=!0,y(t,i);break}!v&&c.class&&et(c.class)}}else e.data!==t.text&&(e.data=t.text);return!0}return function(e,i,o,a){if(!t(i)){var c,l=!1,p=[];if(t(e))l=!0,f(i,p);else{var d=n(e.nodeType);if(!d&&ir(e,i))x(e,i,p,null,null,a);else{if(d){if(1===e.nodeType&&e.hasAttribute(L)&&(e.removeAttribute(L),o=!0),r(o)&&O(e,i,p))return k(i,p,!0),e;c=e,e=new pe(u.tagName(c).toLowerCase(),{},[],void 0,c)}var v=e.elm,h=u.parentNode(v);if(f(i,p,v._leaveCb?null:h,u.nextSibling(v)),n(i.parent))for(var y=i.parent,g=m(i);y;){for(var _=0;_<s.destroy.length;++_)s.destroy[_](y);if(y.elm=i.elm,g){for(var w=0;w<s.create.length;++w)s.create[w](nr,y);var C=y.data.hook.insert;if(C.merged)for(var A=1;A<C.fns.length;A++)C.fns[A]()}else tr(y);y=y.parent}n(h)?$([e],0,0):n(e.tag)&&b(e)}}return k(i,p,l),i.elm}n(e)&&b(e)}}({nodeOps:Qn,modules:[mr,xr,ni,oi,mi,z?{create:Ui,activate:Ui,remove:function(e,t){!0!==e.data.show?Ri(e,t):t()}}:{}].concat(pr)});W&&document.addEventListener("selectionchange",function(){var e=document.activeElement;e&&e.vmodel&&Xi(e,"input")});var Vi={inserted:function(e,t,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?it(n,"postpatch",function(){Vi.componentUpdated(e,t,n)}):Ki(e,t,n.context),e._vOptions=[].map.call(e.options,Wi)):("textarea"===n.tag||Xn(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("compositionstart",Zi),e.addEventListener("compositionend",Gi),e.addEventListener("change",Gi),W&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){Ki(e,t,n.context);var r=e._vOptions,i=e._vOptions=[].map.call(e.options,Wi);if(i.some(function(e,t){return!N(e,r[t])}))(e.multiple?t.value.some(function(e){return qi(e,i)}):t.value!==t.oldValue&&qi(t.value,i))&&Xi(e,"change")}}};function Ki(e,t,n){Ji(e,t,n),(q||Z)&&setTimeout(function(){Ji(e,t,n)},0)}function Ji(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var o,a,s=0,c=e.options.length;s<c;s++)if(a=e.options[s],i)o=j(r,Wi(a))>-1,a.selected!==o&&(a.selected=o);else if(N(Wi(a),r))return void(e.selectedIndex!==s&&(e.selectedIndex=s));i||(e.selectedIndex=-1)}}function qi(e,t){return t.every(function(t){return!N(t,e)})}function Wi(e){return"_value"in e?e._value:e.value}function Zi(e){e.target.composing=!0}function Gi(e){e.target.composing&&(e.target.composing=!1,Xi(e.target,"input"))}function Xi(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function Yi(e){return!e.componentInstance||e.data&&e.data.transition?e:Yi(e.componentInstance._vnode)}var Qi={model:Vi,show:{bind:function(e,t,n){var r=t.value,i=(n=Yi(n)).data&&n.data.transition,o=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i?(n.data.show=!0,Pi(n,function(){e.style.display=o})):e.style.display=r?o:"none"},update:function(e,t,n){var r=t.value;!r!=!t.oldValue&&((n=Yi(n)).data&&n.data.transition?(n.data.show=!0,r?Pi(n,function(){e.style.display=e.__vOriginalDisplay}):Ri(n,function(){e.style.display="none"})):e.style.display=r?e.__vOriginalDisplay:"none")},unbind:function(e,t,n,r,i){i||(e.style.display=e.__vOriginalDisplay)}}},eo={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function to(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?to(zt(t.children)):e}function no(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var o in i)t[b(o)]=i[o];return t}function ro(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}var io=function(e){return e.tag||Ut(e)},oo=function(e){return"show"===e.name},ao={name:"transition",props:eo,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(io)).length){var r=this.mode,o=n[0];if(function(e){for(;e=e.parent;)if(e.data.transition)return!0}(this.$vnode))return o;var a=to(o);if(!a)return o;if(this._leaving)return ro(e,o);var s="__transition-"+this._uid+"-";a.key=null==a.key?a.isComment?s+"comment":s+a.tag:i(a.key)?0===String(a.key).indexOf(s)?a.key:s+a.key:a.key;var c=(a.data||(a.data={})).transition=no(this),u=this._vnode,l=to(u);if(a.data.directives&&a.data.directives.some(oo)&&(a.data.show=!0),l&&l.data&&!function(e,t){return t.key===e.key&&t.tag===e.tag}(a,l)&&!Ut(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var f=l.data.transition=A({},c);if("out-in"===r)return this._leaving=!0,it(f,"afterLeave",function(){t._leaving=!1,t.$forceUpdate()}),ro(e,o);if("in-out"===r){if(Ut(a))return u;var p,d=function(){p()};it(c,"afterEnter",d),it(c,"enterCancelled",d),it(f,"delayLeave",function(e){p=e})}}return o}}},so=A({tag:String,moveClass:String},eo);function co(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function uo(e){e.data.newPos=e.elm.getBoundingClientRect()}function lo(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var o=e.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}delete so.mode;var fo={Transition:ao,TransitionGroup:{props:so,beforeMount:function(){var e=this,t=this._update;this._update=function(n,r){var i=Zt(e);e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,i(),t.call(e,n,r)}},render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],a=no(this),s=0;s<i.length;s++){var c=i[s];c.tag&&null!=c.key&&0!==String(c.key).indexOf("__vlist")&&(o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=a)}if(r){for(var u=[],l=[],f=0;f<r.length;f++){var p=r[f];p.data.transition=a,p.data.pos=p.elm.getBoundingClientRect(),n[p.key]?u.push(p):l.push(p)}this.kept=e(t,null,u),this.removed=l}return e(t,null,o)},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";e.length&&this.hasMove(e[0].elm,t)&&(e.forEach(co),e.forEach(uo),e.forEach(lo),this._reflow=document.body.offsetHeight,e.forEach(function(e){if(e.data.moved){var n=e.elm,r=n.style;Ni(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(Ai,n._moveCb=function e(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(Ai,e),n._moveCb=null,ji(n,t))})}}))},methods:{hasMove:function(e,t){if(!wi)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach(function(e){_i(n,e)}),gi(n,t),n.style.display="none",this.$el.appendChild(n);var r=Mi(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}}};wn.config.mustUseProp=jn,wn.config.isReservedTag=Wn,wn.config.isReservedAttr=En,wn.config.getTagNamespace=Zn,wn.config.isUnknownElement=function(e){if(!z)return!0;if(Wn(e))return!1;if(e=e.toLowerCase(),null!=Gn[e])return Gn[e];var t=document.createElement(e);return e.indexOf("-")>-1?Gn[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:Gn[e]=/HTMLUnknownElement/.test(t.toString())},A(wn.options.directives,Qi),A(wn.options.components,fo),wn.prototype.__patch__=z?zi:S,wn.prototype.$mount=function(e,t){return function(e,t,n){var r;return e.$el=t,e.$options.render||(e.$options.render=ve),Yt(e,"beforeMount"),r=function(){e._update(e._render(),n)},new fn(e,r,S,{before:function(){e._isMounted&&!e._isDestroyed&&Yt(e,"beforeUpdate")}},!0),n=!1,null==e.$vnode&&(e._isMounted=!0,Yt(e,"mounted")),e}(this,e=e&&z?Yn(e):void 0,t)},z&&setTimeout(function(){F.devtools&&ne&&ne.emit("init",wn)},0);var po=/\{\{((?:.|\r?\n)+?)\}\}/g,vo=/[-.*+?^${}()|[\]\/\\]/g,ho=g(function(e){var t=e[0].replace(vo,"\\$&"),n=e[1].replace(vo,"\\$&");return new RegExp(t+"((?:.|\\n)+?)"+n,"g")});var mo={staticKeys:["staticClass"],transformNode:function(e,t){t.warn;var n=Fr(e,"class");n&&(e.staticClass=JSON.stringify(n));var r=Ir(e,"class",!1);r&&(e.classBinding=r)},genData:function(e){var t="";return e.staticClass&&(t+="staticClass:"+e.staticClass+","),e.classBinding&&(t+="class:"+e.classBinding+","),t}};var yo,go={staticKeys:["staticStyle"],transformNode:function(e,t){t.warn;var n=Fr(e,"style");n&&(e.staticStyle=JSON.stringify(ai(n)));var r=Ir(e,"style",!1);r&&(e.styleBinding=r)},genData:function(e){var t="";return e.staticStyle&&(t+="staticStyle:"+e.staticStyle+","),e.styleBinding&&(t+="style:("+e.styleBinding+"),"),t}},_o=function(e){return(yo=yo||document.createElement("div")).innerHTML=e,yo.textContent},bo=p("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),$o=p("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),wo=p("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),Co=/^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,xo=/^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,ko="[a-zA-Z_][\\-\\.0-9_a-zA-Z"+P.source+"]*",Ao="((?:"+ko+"\\:)?"+ko+")",Oo=new RegExp("^<"+Ao),So=/^\s*(\/?)>/,To=new RegExp("^<\\/"+Ao+"[^>]*>"),Eo=/^<!DOCTYPE [^>]+>/i,No=/^<!\--/,jo=/^<!\[/,Do=p("script,style,textarea",!0),Lo={},Mo={"&lt;":"<","&gt;":">","&quot;":'"',"&amp;":"&","&#10;":"\n","&#9;":"\t","&#39;":"'"},Io=/&(?:lt|gt|quot|amp|#39);/g,Fo=/&(?:lt|gt|quot|amp|#39|#10|#9);/g,Po=p("pre,textarea",!0),Ro=function(e,t){return e&&Po(e)&&"\n"===t[0]};function Ho(e,t){var n=t?Fo:Io;return e.replace(n,function(e){return Mo[e]})}var Bo,Uo,zo,Vo,Ko,Jo,qo,Wo,Zo=/^@|^v-on:/,Go=/^v-|^@|^:|^#/,Xo=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,Yo=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,Qo=/^\(|\)$/g,ea=/^\[.*\]$/,ta=/:(.*)$/,na=/^:|^\.|^v-bind:/,ra=/\.[^.\]]+(?=[^\]]*$)/g,ia=/^v-slot(:|$)|^#/,oa=/[\r\n]/,aa=/\s+/g,sa=g(_o),ca="_empty_";function ua(e,t,n){return{type:1,tag:e,attrsList:t,attrsMap:ma(t),rawAttrsMap:{},parent:n,children:[]}}function la(e,t){Bo=t.warn||Sr,Jo=t.isPreTag||T,qo=t.mustUseProp||T,Wo=t.getTagNamespace||T;t.isReservedTag;zo=Tr(t.modules,"transformNode"),Vo=Tr(t.modules,"preTransformNode"),Ko=Tr(t.modules,"postTransformNode"),Uo=t.delimiters;var n,r,i=[],o=!1!==t.preserveWhitespace,a=t.whitespace,s=!1,c=!1;function u(e){if(l(e),s||e.processed||(e=fa(e,t)),i.length||e===n||n.if&&(e.elseif||e.else)&&da(n,{exp:e.elseif,block:e}),r&&!e.forbidden)if(e.elseif||e.else)a=e,(u=function(e){var t=e.length;for(;t--;){if(1===e[t].type)return e[t];e.pop()}}(r.children))&&u.if&&da(u,{exp:a.elseif,block:a});else{if(e.slotScope){var o=e.slotTarget||'"default"';(r.scopedSlots||(r.scopedSlots={}))[o]=e}r.children.push(e),e.parent=r}var a,u;e.children=e.children.filter(function(e){return!e.slotScope}),l(e),e.pre&&(s=!1),Jo(e.tag)&&(c=!1);for(var f=0;f<Ko.length;f++)Ko[f](e,t)}function l(e){if(!c)for(var t;(t=e.children[e.children.length-1])&&3===t.type&&" "===t.text;)e.children.pop()}return function(e,t){for(var n,r,i=[],o=t.expectHTML,a=t.isUnaryTag||T,s=t.canBeLeftOpenTag||T,c=0;e;){if(n=e,r&&Do(r)){var u=0,l=r.toLowerCase(),f=Lo[l]||(Lo[l]=new RegExp("([\\s\\S]*?)(</"+l+"[^>]*>)","i")),p=e.replace(f,function(e,n,r){return u=r.length,Do(l)||"noscript"===l||(n=n.replace(/<!\--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),Ro(l,n)&&(n=n.slice(1)),t.chars&&t.chars(n),""});c+=e.length-p.length,e=p,A(l,c-u,c)}else{var d=e.indexOf("<");if(0===d){if(No.test(e)){var v=e.indexOf("--\x3e");if(v>=0){t.shouldKeepComment&&t.comment(e.substring(4,v),c,c+v+3),C(v+3);continue}}if(jo.test(e)){var h=e.indexOf("]>");if(h>=0){C(h+2);continue}}var m=e.match(Eo);if(m){C(m[0].length);continue}var y=e.match(To);if(y){var g=c;C(y[0].length),A(y[1],g,c);continue}var _=x();if(_){k(_),Ro(_.tagName,e)&&C(1);continue}}var b=void 0,$=void 0,w=void 0;if(d>=0){for($=e.slice(d);!(To.test($)||Oo.test($)||No.test($)||jo.test($)||(w=$.indexOf("<",1))<0);)d+=w,$=e.slice(d);b=e.substring(0,d)}d<0&&(b=e),b&&C(b.length),t.chars&&b&&t.chars(b,c-b.length,c)}if(e===n){t.chars&&t.chars(e);break}}function C(t){c+=t,e=e.substring(t)}function x(){var t=e.match(Oo);if(t){var n,r,i={tagName:t[1],attrs:[],start:c};for(C(t[0].length);!(n=e.match(So))&&(r=e.match(xo)||e.match(Co));)r.start=c,C(r[0].length),r.end=c,i.attrs.push(r);if(n)return i.unarySlash=n[1],C(n[0].length),i.end=c,i}}function k(e){var n=e.tagName,c=e.unarySlash;o&&("p"===r&&wo(n)&&A(r),s(n)&&r===n&&A(n));for(var u=a(n)||!!c,l=e.attrs.length,f=new Array(l),p=0;p<l;p++){var d=e.attrs[p],v=d[3]||d[4]||d[5]||"",h="a"===n&&"href"===d[1]?t.shouldDecodeNewlinesForHref:t.shouldDecodeNewlines;f[p]={name:d[1],value:Ho(v,h)}}u||(i.push({tag:n,lowerCasedTag:n.toLowerCase(),attrs:f,start:e.start,end:e.end}),r=n),t.start&&t.start(n,f,u,e.start,e.end)}function A(e,n,o){var a,s;if(null==n&&(n=c),null==o&&(o=c),e)for(s=e.toLowerCase(),a=i.length-1;a>=0&&i[a].lowerCasedTag!==s;a--);else a=0;if(a>=0){for(var u=i.length-1;u>=a;u--)t.end&&t.end(i[u].tag,n,o);i.length=a,r=a&&i[a-1].tag}else"br"===s?t.start&&t.start(e,[],!0,n,o):"p"===s&&(t.start&&t.start(e,[],!1,n,o),t.end&&t.end(e,n,o))}A()}(e,{warn:Bo,expectHTML:t.expectHTML,isUnaryTag:t.isUnaryTag,canBeLeftOpenTag:t.canBeLeftOpenTag,shouldDecodeNewlines:t.shouldDecodeNewlines,shouldDecodeNewlinesForHref:t.shouldDecodeNewlinesForHref,shouldKeepComment:t.comments,outputSourceRange:t.outputSourceRange,start:function(e,o,a,l,f){var p=r&&r.ns||Wo(e);q&&"svg"===p&&(o=function(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];ya.test(r.name)||(r.name=r.name.replace(ga,""),t.push(r))}return t}(o));var d,v=ua(e,o,r);p&&(v.ns=p),"style"!==(d=v).tag&&("script"!==d.tag||d.attrsMap.type&&"text/javascript"!==d.attrsMap.type)||te()||(v.forbidden=!0);for(var h=0;h<Vo.length;h++)v=Vo[h](v,t)||v;s||(!function(e){null!=Fr(e,"v-pre")&&(e.pre=!0)}(v),v.pre&&(s=!0)),Jo(v.tag)&&(c=!0),s?function(e){var t=e.attrsList,n=t.length;if(n)for(var r=e.attrs=new Array(n),i=0;i<n;i++)r[i]={name:t[i].name,value:JSON.stringify(t[i].value)},null!=t[i].start&&(r[i].start=t[i].start,r[i].end=t[i].end);else e.pre||(e.plain=!0)}(v):v.processed||(pa(v),function(e){var t=Fr(e,"v-if");if(t)e.if=t,da(e,{exp:t,block:e});else{null!=Fr(e,"v-else")&&(e.else=!0);var n=Fr(e,"v-else-if");n&&(e.elseif=n)}}(v),function(e){null!=Fr(e,"v-once")&&(e.once=!0)}(v)),n||(n=v),a?u(v):(r=v,i.push(v))},end:function(e,t,n){var o=i[i.length-1];i.length-=1,r=i[i.length-1],u(o)},chars:function(e,t,n){if(r&&(!q||"textarea"!==r.tag||r.attrsMap.placeholder!==e)){var i,u,l,f=r.children;if(e=c||e.trim()?"script"===(i=r).tag||"style"===i.tag?e:sa(e):f.length?a?"condense"===a&&oa.test(e)?"":" ":o?" ":"":"")c||"condense"!==a||(e=e.replace(aa," ")),!s&&" "!==e&&(u=function(e,t){var n=t?ho(t):po;if(n.test(e)){for(var r,i,o,a=[],s=[],c=n.lastIndex=0;r=n.exec(e);){(i=r.index)>c&&(s.push(o=e.slice(c,i)),a.push(JSON.stringify(o)));var u=Ar(r[1].trim());a.push("_s("+u+")"),s.push({"@binding":u}),c=i+r[0].length}return c<e.length&&(s.push(o=e.slice(c)),a.push(JSON.stringify(o))),{expression:a.join("+"),tokens:s}}}(e,Uo))?l={type:2,expression:u.expression,tokens:u.tokens,text:e}:" "===e&&f.length&&" "===f[f.length-1].text||(l={type:3,text:e}),l&&f.push(l)}},comment:function(e,t,n){if(r){var i={type:3,text:e,isComment:!0};r.children.push(i)}}}),n}function fa(e,t){var n,r;(r=Ir(n=e,"key"))&&(n.key=r),e.plain=!e.key&&!e.scopedSlots&&!e.attrsList.length,function(e){var t=Ir(e,"ref");t&&(e.ref=t,e.refInFor=function(e){var t=e;for(;t;){if(void 0!==t.for)return!0;t=t.parent}return!1}(e))}(e),function(e){var t;"template"===e.tag?(t=Fr(e,"scope"),e.slotScope=t||Fr(e,"slot-scope")):(t=Fr(e,"slot-scope"))&&(e.slotScope=t);var n=Ir(e,"slot");n&&(e.slotTarget='""'===n?'"default"':n,e.slotTargetDynamic=!(!e.attrsMap[":slot"]&&!e.attrsMap["v-bind:slot"]),"template"===e.tag||e.slotScope||Nr(e,"slot",n,function(e,t){return e.rawAttrsMap[":"+t]||e.rawAttrsMap["v-bind:"+t]||e.rawAttrsMap[t]}(e,"slot")));if("template"===e.tag){var r=Pr(e,ia);if(r){var i=va(r),o=i.name,a=i.dynamic;e.slotTarget=o,e.slotTargetDynamic=a,e.slotScope=r.value||ca}}else{var s=Pr(e,ia);if(s){var c=e.scopedSlots||(e.scopedSlots={}),u=va(s),l=u.name,f=u.dynamic,p=c[l]=ua("template",[],e);p.slotTarget=l,p.slotTargetDynamic=f,p.children=e.children.filter(function(e){if(!e.slotScope)return e.parent=p,!0}),p.slotScope=s.value||ca,e.children=[],e.plain=!1}}}(e),function(e){"slot"===e.tag&&(e.slotName=Ir(e,"name"))}(e),function(e){var t;(t=Ir(e,"is"))&&(e.component=t);null!=Fr(e,"inline-template")&&(e.inlineTemplate=!0)}(e);for(var i=0;i<zo.length;i++)e=zo[i](e,t)||e;return function(e){var t,n,r,i,o,a,s,c,u=e.attrsList;for(t=0,n=u.length;t<n;t++)if(r=i=u[t].name,o=u[t].value,Go.test(r))if(e.hasBindings=!0,(a=ha(r.replace(Go,"")))&&(r=r.replace(ra,"")),na.test(r))r=r.replace(na,""),o=Ar(o),(c=ea.test(r))&&(r=r.slice(1,-1)),a&&(a.prop&&!c&&"innerHtml"===(r=b(r))&&(r="innerHTML"),a.camel&&!c&&(r=b(r)),a.sync&&(s=Br(o,"$event"),c?Mr(e,'"update:"+('+r+")",s,null,!1,0,u[t],!0):(Mr(e,"update:"+b(r),s,null,!1,0,u[t]),C(r)!==b(r)&&Mr(e,"update:"+C(r),s,null,!1,0,u[t])))),a&&a.prop||!e.component&&qo(e.tag,e.attrsMap.type,r)?Er(e,r,o,u[t],c):Nr(e,r,o,u[t],c);else if(Zo.test(r))r=r.replace(Zo,""),(c=ea.test(r))&&(r=r.slice(1,-1)),Mr(e,r,o,a,!1,0,u[t],c);else{var l=(r=r.replace(Go,"")).match(ta),f=l&&l[1];c=!1,f&&(r=r.slice(0,-(f.length+1)),ea.test(f)&&(f=f.slice(1,-1),c=!0)),Dr(e,r,i,o,f,c,a,u[t])}else Nr(e,r,JSON.stringify(o),u[t]),!e.component&&"muted"===r&&qo(e.tag,e.attrsMap.type,r)&&Er(e,r,"true",u[t])}(e),e}function pa(e){var t;if(t=Fr(e,"v-for")){var n=function(e){var t=e.match(Xo);if(!t)return;var n={};n.for=t[2].trim();var r=t[1].trim().replace(Qo,""),i=r.match(Yo);i?(n.alias=r.replace(Yo,"").trim(),n.iterator1=i[1].trim(),i[2]&&(n.iterator2=i[2].trim())):n.alias=r;return n}(t);n&&A(e,n)}}function da(e,t){e.ifConditions||(e.ifConditions=[]),e.ifConditions.push(t)}function va(e){var t=e.name.replace(ia,"");return t||"#"!==e.name[0]&&(t="default"),ea.test(t)?{name:t.slice(1,-1),dynamic:!0}:{name:'"'+t+'"',dynamic:!1}}function ha(e){var t=e.match(ra);if(t){var n={};return t.forEach(function(e){n[e.slice(1)]=!0}),n}}function ma(e){for(var t={},n=0,r=e.length;n<r;n++)t[e[n].name]=e[n].value;return t}var ya=/^xmlns:NS\d+/,ga=/^NS\d+:/;function _a(e){return ua(e.tag,e.attrsList.slice(),e.parent)}var ba=[mo,go,{preTransformNode:function(e,t){if("input"===e.tag){var n,r=e.attrsMap;if(!r["v-model"])return;if((r[":type"]||r["v-bind:type"])&&(n=Ir(e,"type")),r.type||n||!r["v-bind"]||(n="("+r["v-bind"]+").type"),n){var i=Fr(e,"v-if",!0),o=i?"&&("+i+")":"",a=null!=Fr(e,"v-else",!0),s=Fr(e,"v-else-if",!0),c=_a(e);pa(c),jr(c,"type","checkbox"),fa(c,t),c.processed=!0,c.if="("+n+")==='checkbox'"+o,da(c,{exp:c.if,block:c});var u=_a(e);Fr(u,"v-for",!0),jr(u,"type","radio"),fa(u,t),da(c,{exp:"("+n+")==='radio'"+o,block:u});var l=_a(e);return Fr(l,"v-for",!0),jr(l,":type",n),fa(l,t),da(c,{exp:i,block:l}),a?c.else=!0:s&&(c.elseif=s),c}}}}];var $a,wa,Ca={expectHTML:!0,modules:ba,directives:{model:function(e,t,n){var r=t.value,i=t.modifiers,o=e.tag,a=e.attrsMap.type;if(e.component)return Hr(e,r,i),!1;if("select"===o)!function(e,t,n){var r='var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return '+(n&&n.number?"_n(val)":"val")+"});";r=r+" "+Br(t,"$event.target.multiple ? $$selectedVal : $$selectedVal[0]"),Mr(e,"change",r,null,!0)}(e,r,i);else if("input"===o&&"checkbox"===a)!function(e,t,n){var r=n&&n.number,i=Ir(e,"value")||"null",o=Ir(e,"true-value")||"true",a=Ir(e,"false-value")||"false";Er(e,"checked","Array.isArray("+t+")?_i("+t+","+i+")>-1"+("true"===o?":("+t+")":":_q("+t+","+o+")")),Mr(e,"change","var $$a="+t+",$$el=$event.target,$$c=$$el.checked?("+o+"):("+a+");if(Array.isArray($$a)){var $$v="+(r?"_n("+i+")":i)+",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&("+Br(t,"$$a.concat([$$v])")+")}else{$$i>-1&&("+Br(t,"$$a.slice(0,$$i).concat($$a.slice($$i+1))")+")}}else{"+Br(t,"$$c")+"}",null,!0)}(e,r,i);else if("input"===o&&"radio"===a)!function(e,t,n){var r=n&&n.number,i=Ir(e,"value")||"null";Er(e,"checked","_q("+t+","+(i=r?"_n("+i+")":i)+")"),Mr(e,"change",Br(t,i),null,!0)}(e,r,i);else if("input"===o||"textarea"===o)!function(e,t,n){var r=e.attrsMap.type,i=n||{},o=i.lazy,a=i.number,s=i.trim,c=!o&&"range"!==r,u=o?"change":"range"===r?Wr:"input",l="$event.target.value";s&&(l="$event.target.value.trim()"),a&&(l="_n("+l+")");var f=Br(t,l);c&&(f="if($event.target.composing)return;"+f),Er(e,"value","("+t+")"),Mr(e,u,f,null,!0),(s||a)&&Mr(e,"blur","$forceUpdate()")}(e,r,i);else if(!F.isReservedTag(o))return Hr(e,r,i),!1;return!0},text:function(e,t){t.value&&Er(e,"textContent","_s("+t.value+")",t)},html:function(e,t){t.value&&Er(e,"innerHTML","_s("+t.value+")",t)}},isPreTag:function(e){return"pre"===e},isUnaryTag:bo,mustUseProp:jn,canBeLeftOpenTag:$o,isReservedTag:Wn,getTagNamespace:Zn,staticKeys:function(e){return e.reduce(function(e,t){return e.concat(t.staticKeys||[])},[]).join(",")}(ba)},xa=g(function(e){return p("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap"+(e?","+e:""))});function ka(e,t){e&&($a=xa(t.staticKeys||""),wa=t.isReservedTag||T,function e(t){t.static=function(e){if(2===e.type)return!1;if(3===e.type)return!0;return!(!e.pre&&(e.hasBindings||e.if||e.for||d(e.tag)||!wa(e.tag)||function(e){for(;e.parent;){if("template"!==(e=e.parent).tag)return!1;if(e.for)return!0}return!1}(e)||!Object.keys(e).every($a)))}(t);if(1===t.type){if(!wa(t.tag)&&"slot"!==t.tag&&null==t.attrsMap["inline-template"])return;for(var n=0,r=t.children.length;n<r;n++){var i=t.children[n];e(i),i.static||(t.static=!1)}if(t.ifConditions)for(var o=1,a=t.ifConditions.length;o<a;o++){var s=t.ifConditions[o].block;e(s),s.static||(t.static=!1)}}}(e),function e(t,n){if(1===t.type){if((t.static||t.once)&&(t.staticInFor=n),t.static&&t.children.length&&(1!==t.children.length||3!==t.children[0].type))return void(t.staticRoot=!0);if(t.staticRoot=!1,t.children)for(var r=0,i=t.children.length;r<i;r++)e(t.children[r],n||!!t.for);if(t.ifConditions)for(var o=1,a=t.ifConditions.length;o<a;o++)e(t.ifConditions[o].block,n)}}(e,!1))}var Aa=/^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/,Oa=/\([^)]*?\);*$/,Sa=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,Ta={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},Ea={esc:["Esc","Escape"],tab:"Tab",enter:"Enter",space:[" ","Spacebar"],up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete","Del"]},Na=function(e){return"if("+e+")return null;"},ja={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:Na("$event.target !== $event.currentTarget"),ctrl:Na("!$event.ctrlKey"),shift:Na("!$event.shiftKey"),alt:Na("!$event.altKey"),meta:Na("!$event.metaKey"),left:Na("'button' in $event && $event.button !== 0"),middle:Na("'button' in $event && $event.button !== 1"),right:Na("'button' in $event && $event.button !== 2")};function Da(e,t){var n=t?"nativeOn:":"on:",r="",i="";for(var o in e){var a=La(e[o]);e[o]&&e[o].dynamic?i+=o+","+a+",":r+='"'+o+'":'+a+","}return r="{"+r.slice(0,-1)+"}",i?n+"_d("+r+",["+i.slice(0,-1)+"])":n+r}function La(e){if(!e)return"function(){}";if(Array.isArray(e))return"["+e.map(function(e){return La(e)}).join(",")+"]";var t=Sa.test(e.value),n=Aa.test(e.value),r=Sa.test(e.value.replace(Oa,""));if(e.modifiers){var i="",o="",a=[];for(var s in e.modifiers)if(ja[s])o+=ja[s],Ta[s]&&a.push(s);else if("exact"===s){var c=e.modifiers;o+=Na(["ctrl","shift","alt","meta"].filter(function(e){return!c[e]}).map(function(e){return"$event."+e+"Key"}).join("||"))}else a.push(s);return a.length&&(i+=function(e){return"if(!$event.type.indexOf('key')&&"+e.map(Ma).join("&&")+")return null;"}(a)),o&&(i+=o),"function($event){"+i+(t?"return "+e.value+"($event)":n?"return ("+e.value+")($event)":r?"return "+e.value:e.value)+"}"}return t||n?e.value:"function($event){"+(r?"return "+e.value:e.value)+"}"}function Ma(e){var t=parseInt(e,10);if(t)return"$event.keyCode!=="+t;var n=Ta[e],r=Ea[e];return"_k($event.keyCode,"+JSON.stringify(e)+","+JSON.stringify(n)+",$event.key,"+JSON.stringify(r)+")"}var Ia={on:function(e,t){e.wrapListeners=function(e){return"_g("+e+","+t.value+")"}},bind:function(e,t){e.wrapData=function(n){return"_b("+n+",'"+e.tag+"',"+t.value+","+(t.modifiers&&t.modifiers.prop?"true":"false")+(t.modifiers&&t.modifiers.sync?",true":"")+")"}},cloak:S},Fa=function(e){this.options=e,this.warn=e.warn||Sr,this.transforms=Tr(e.modules,"transformCode"),this.dataGenFns=Tr(e.modules,"genData"),this.directives=A(A({},Ia),e.directives);var t=e.isReservedTag||T;this.maybeComponent=function(e){return!!e.component||!t(e.tag)},this.onceId=0,this.staticRenderFns=[],this.pre=!1};function Pa(e,t){var n=new Fa(t);return{render:"with(this){return "+(e?Ra(e,n):'_c("div")')+"}",staticRenderFns:n.staticRenderFns}}function Ra(e,t){if(e.parent&&(e.pre=e.pre||e.parent.pre),e.staticRoot&&!e.staticProcessed)return Ha(e,t);if(e.once&&!e.onceProcessed)return Ba(e,t);if(e.for&&!e.forProcessed)return za(e,t);if(e.if&&!e.ifProcessed)return Ua(e,t);if("template"!==e.tag||e.slotTarget||t.pre){if("slot"===e.tag)return function(e,t){var n=e.slotName||'"default"',r=qa(e,t),i="_t("+n+(r?","+r:""),o=e.attrs||e.dynamicAttrs?Ga((e.attrs||[]).concat(e.dynamicAttrs||[]).map(function(e){return{name:b(e.name),value:e.value,dynamic:e.dynamic}})):null,a=e.attrsMap["v-bind"];!o&&!a||r||(i+=",null");o&&(i+=","+o);a&&(i+=(o?"":",null")+","+a);return i+")"}(e,t);var n;if(e.component)n=function(e,t,n){var r=t.inlineTemplate?null:qa(t,n,!0);return"_c("+e+","+Va(t,n)+(r?","+r:"")+")"}(e.component,e,t);else{var r;(!e.plain||e.pre&&t.maybeComponent(e))&&(r=Va(e,t));var i=e.inlineTemplate?null:qa(e,t,!0);n="_c('"+e.tag+"'"+(r?","+r:"")+(i?","+i:"")+")"}for(var o=0;o<t.transforms.length;o++)n=t.transforms[o](e,n);return n}return qa(e,t)||"void 0"}function Ha(e,t){e.staticProcessed=!0;var n=t.pre;return e.pre&&(t.pre=e.pre),t.staticRenderFns.push("with(this){return "+Ra(e,t)+"}"),t.pre=n,"_m("+(t.staticRenderFns.length-1)+(e.staticInFor?",true":"")+")"}function Ba(e,t){if(e.onceProcessed=!0,e.if&&!e.ifProcessed)return Ua(e,t);if(e.staticInFor){for(var n="",r=e.parent;r;){if(r.for){n=r.key;break}r=r.parent}return n?"_o("+Ra(e,t)+","+t.onceId+++","+n+")":Ra(e,t)}return Ha(e,t)}function Ua(e,t,n,r){return e.ifProcessed=!0,function e(t,n,r,i){if(!t.length)return i||"_e()";var o=t.shift();return o.exp?"("+o.exp+")?"+a(o.block)+":"+e(t,n,r,i):""+a(o.block);function a(e){return r?r(e,n):e.once?Ba(e,n):Ra(e,n)}}(e.ifConditions.slice(),t,n,r)}function za(e,t,n,r){var i=e.for,o=e.alias,a=e.iterator1?","+e.iterator1:"",s=e.iterator2?","+e.iterator2:"";return e.forProcessed=!0,(r||"_l")+"(("+i+"),function("+o+a+s+"){return "+(n||Ra)(e,t)+"})"}function Va(e,t){var n="{",r=function(e,t){var n=e.directives;if(!n)return;var r,i,o,a,s="directives:[",c=!1;for(r=0,i=n.length;r<i;r++){o=n[r],a=!0;var u=t.directives[o.name];u&&(a=!!u(e,o,t.warn)),a&&(c=!0,s+='{name:"'+o.name+'",rawName:"'+o.rawName+'"'+(o.value?",value:("+o.value+"),expression:"+JSON.stringify(o.value):"")+(o.arg?",arg:"+(o.isDynamicArg?o.arg:'"'+o.arg+'"'):"")+(o.modifiers?",modifiers:"+JSON.stringify(o.modifiers):"")+"},")}if(c)return s.slice(0,-1)+"]"}(e,t);r&&(n+=r+","),e.key&&(n+="key:"+e.key+","),e.ref&&(n+="ref:"+e.ref+","),e.refInFor&&(n+="refInFor:true,"),e.pre&&(n+="pre:true,"),e.component&&(n+='tag:"'+e.tag+'",');for(var i=0;i<t.dataGenFns.length;i++)n+=t.dataGenFns[i](e);if(e.attrs&&(n+="attrs:"+Ga(e.attrs)+","),e.props&&(n+="domProps:"+Ga(e.props)+","),e.events&&(n+=Da(e.events,!1)+","),e.nativeEvents&&(n+=Da(e.nativeEvents,!0)+","),e.slotTarget&&!e.slotScope&&(n+="slot:"+e.slotTarget+","),e.scopedSlots&&(n+=function(e,t,n){var r=e.for||Object.keys(t).some(function(e){var n=t[e];return n.slotTargetDynamic||n.if||n.for||Ka(n)}),i=!!e.if;if(!r)for(var o=e.parent;o;){if(o.slotScope&&o.slotScope!==ca||o.for){r=!0;break}o.if&&(i=!0),o=o.parent}var a=Object.keys(t).map(function(e){return Ja(t[e],n)}).join(",");return"scopedSlots:_u(["+a+"]"+(r?",null,true":"")+(!r&&i?",null,false,"+function(e){var t=5381,n=e.length;for(;n;)t=33*t^e.charCodeAt(--n);return t>>>0}(a):"")+")"}(e,e.scopedSlots,t)+","),e.model&&(n+="model:{value:"+e.model.value+",callback:"+e.model.callback+",expression:"+e.model.expression+"},"),e.inlineTemplate){var o=function(e,t){var n=e.children[0];if(n&&1===n.type){var r=Pa(n,t.options);return"inlineTemplate:{render:function(){"+r.render+"},staticRenderFns:["+r.staticRenderFns.map(function(e){return"function(){"+e+"}"}).join(",")+"]}"}}(e,t);o&&(n+=o+",")}return n=n.replace(/,$/,"")+"}",e.dynamicAttrs&&(n="_b("+n+',"'+e.tag+'",'+Ga(e.dynamicAttrs)+")"),e.wrapData&&(n=e.wrapData(n)),e.wrapListeners&&(n=e.wrapListeners(n)),n}function Ka(e){return 1===e.type&&("slot"===e.tag||e.children.some(Ka))}function Ja(e,t){var n=e.attrsMap["slot-scope"];if(e.if&&!e.ifProcessed&&!n)return Ua(e,t,Ja,"null");if(e.for&&!e.forProcessed)return za(e,t,Ja);var r=e.slotScope===ca?"":String(e.slotScope),i="function("+r+"){return "+("template"===e.tag?e.if&&n?"("+e.if+")?"+(qa(e,t)||"undefined")+":undefined":qa(e,t)||"undefined":Ra(e,t))+"}",o=r?"":",proxy:true";return"{key:"+(e.slotTarget||'"default"')+",fn:"+i+o+"}"}function qa(e,t,n,r,i){var o=e.children;if(o.length){var a=o[0];if(1===o.length&&a.for&&"template"!==a.tag&&"slot"!==a.tag){var s=n?t.maybeComponent(a)?",1":",0":"";return""+(r||Ra)(a,t)+s}var c=n?function(e,t){for(var n=0,r=0;r<e.length;r++){var i=e[r];if(1===i.type){if(Wa(i)||i.ifConditions&&i.ifConditions.some(function(e){return Wa(e.block)})){n=2;break}(t(i)||i.ifConditions&&i.ifConditions.some(function(e){return t(e.block)}))&&(n=1)}}return n}(o,t.maybeComponent):0,u=i||Za;return"["+o.map(function(e){return u(e,t)}).join(",")+"]"+(c?","+c:"")}}function Wa(e){return void 0!==e.for||"template"===e.tag||"slot"===e.tag}function Za(e,t){return 1===e.type?Ra(e,t):3===e.type&&e.isComment?(r=e,"_e("+JSON.stringify(r.text)+")"):"_v("+(2===(n=e).type?n.expression:Xa(JSON.stringify(n.text)))+")";var n,r}function Ga(e){for(var t="",n="",r=0;r<e.length;r++){var i=e[r],o=Xa(i.value);i.dynamic?n+=i.name+","+o+",":t+='"'+i.name+'":'+o+","}return t="{"+t.slice(0,-1)+"}",n?"_d("+t+",["+n.slice(0,-1)+"])":t}function Xa(e){return e.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b")+"\\b");function Ya(e,t){try{return new Function(e)}catch(n){return t.push({err:n,code:e}),S}}function Qa(e){var t=Object.create(null);return function(n,r,i){(r=A({},r)).warn;delete r.warn;var o=r.delimiters?String(r.delimiters)+n:n;if(t[o])return t[o];var a=e(n,r),s={},c=[];return s.render=Ya(a.render,c),s.staticRenderFns=a.staticRenderFns.map(function(e){return Ya(e,c)}),t[o]=s}}var es,ts,ns=(es=function(e,t){var n=la(e.trim(),t);!1!==t.optimize&&ka(n,t);var r=Pa(n,t);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}},function(e){function t(t,n){var r=Object.create(e),i=[],o=[];if(n)for(var a in n.modules&&(r.modules=(e.modules||[]).concat(n.modules)),n.directives&&(r.directives=A(Object.create(e.directives||null),n.directives)),n)"modules"!==a&&"directives"!==a&&(r[a]=n[a]);r.warn=function(e,t,n){(n?o:i).push(e)};var s=es(t.trim(),r);return s.errors=i,s.tips=o,s}return{compile:t,compileToFunctions:Qa(t)}})(Ca),rs=(ns.compile,ns.compileToFunctions);function is(e){return(ts=ts||document.createElement("div")).innerHTML=e?'<a href="\n"/>':'<div a="\n"/>',ts.innerHTML.indexOf("&#10;")>0}var os=!!z&&is(!1),as=!!z&&is(!0),ss=g(function(e){var t=Yn(e);return t&&t.innerHTML}),cs=wn.prototype.$mount;return wn.prototype.$mount=function(e,t){if((e=e&&Yn(e))===document.body||e===document.documentElement)return this;var n=this.$options;if(!n.render){var r=n.template;if(r)if("string"==typeof r)"#"===r.charAt(0)&&(r=ss(r));else{if(!r.nodeType)return this;r=r.innerHTML}else e&&(r=function(e){if(e.outerHTML)return e.outerHTML;var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}(e));if(r){var i=rs(r,{outputSourceRange:!1,shouldDecodeNewlines:os,shouldDecodeNewlinesForHref:as,delimiters:n.delimiters,comments:n.comments},this),o=i.render,a=i.staticRenderFns;n.render=o,n.staticRenderFns=a}}return cs.call(this,e,t)},wn.compile=rs,wn});;
/*! For license information please see main.js.LICENSE.txt */
!function(){var t={6193:function(t,n,e){"use strict";e(7014),e(378),e(8207),e(7271),e(7296),e(2976),e(7267),e(5566),e(866),e(6397),e(2427),e(7852),e(4115),e(7450)},7014:function(t,n,e){e(8786),e(6073),e(4805),e(8411),e(6043),e(3359),e(204),e(5854),e(8783),e(3699),e(5548),e(1162),e(5860),e(7553),e(7044),e(9693),e(3851),e(9409),e(9050),e(3452),e(3307),e(2548),e(3384),e(3951),e(8262),e(2734),e(977),e(3559),e(3734),e(3842),e(3535),e(2137),e(7571),e(766),e(7736),e(7854),e(5474),e(5085),e(1803),e(9097),e(8809),e(824),e(5454),e(5130),e(6894),e(3088),e(2123),e(8513),e(3263),e(874),e(5349),e(7656),e(6519),e(5460),e(9105),e(1474),e(5909),e(9786),e(3593),e(5309),e(6730),e(789),e(5766),e(8301),e(3696),e(8363),e(4962),e(2102),e(4830),e(8177),e(6269),e(3617),e(1664),e(3185),e(7549),e(9784),e(139),e(3070),e(2913),e(7340),e(3216),e(6119),e(8451),e(7577),e(5534),e(9938),e(8377),e(2346),e(7667),e(1954),e(3159),e(9682),e(6850),e(825),e(6677),e(8685),e(9346),e(3917),e(5198),e(7352),e(236),e(4121),e(3254),e(5817),e(4358),e(1753),e(4836),e(5101),e(4055),e(1561),e(3677),e(8072),e(8048),e(2211),e(1597),e(4222),e(8923),e(7438),e(2789),e(5857),e(9787),e(6578),e(6315),e(1853),e(580),e(6561),e(4654),e(1135),e(4507),e(8192),e(5853),e(2519),e(9018),e(3737),e(120),e(9074),e(8891),e(5510),t.exports=e(2515)},8207:function(t,n,e){e(3447),t.exports=e(2515).Array.flatMap},378:function(t,n,e){e(7303),t.exports=e(2515).Array.includes},2427:function(t,n,e){e(3046),t.exports=e(2515).Object.entries},866:function(t,n,e){e(6949),t.exports=e(2515).Object.getOwnPropertyDescriptors},6397:function(t,n,e){e(1421),t.exports=e(2515).Object.values},7852:function(t,n,e){"use strict";e(4055),e(7695),t.exports=e(2515).Promise.finally},7296:function(t,n,e){e(1940),t.exports=e(2515).String.padEnd},7271:function(t,n,e){e(4068),t.exports=e(2515).String.padStart},7267:function(t,n,e){e(5134),t.exports=e(2515).String.trimRight},2976:function(t,n,e){e(6027),t.exports=e(2515).String.trimLeft},5566:function(t,n,e){e(6459),t.exports=e(5657).f("asyncIterator")},3959:function(t,n,e){e(9140),t.exports=e(6032).global},4356:function(t){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},848:function(t,n,e){var r=e(1777);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},6032:function(t){var n=t.exports={version:"2.6.12"};"number"==typeof __e&&(__e=n)},8747:function(t,n,e){var r=e(4356);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},7086:function(t,n,e){t.exports=!e(1663)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},4389:function(t,n,e){var r=e(1777),o=e(1376).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},6187:function(t,n,e){var r=e(1376),o=e(6032),i=e(8747),a=e(8110),u=e(3033),c=function t(n,e,c){var s,f,l,p=n&t.F,h=n&t.G,d=n&t.S,v=n&t.P,y=n&t.B,m=n&t.W,g=h?o:o[e]||(o[e]={}),b=g.prototype,_=h?r:d?r[e]:(r[e]||{}).prototype;for(s in h&&(c=e),c)(f=!p&&_&&void 0!==_[s])&&u(g,s)||(l=f?_[s]:c[s],g[s]=h&&"function"!=typeof _[s]?c[s]:y&&f?i(l,r):m&&_[s]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(l):v&&"function"==typeof l?i(Function.call,l):l,v&&((g.virtual||(g.virtual={}))[s]=l,n&t.R&&b&&!b[s]&&a(b,s,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},1663:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},1376:function(t){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},3033:function(t){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},8110:function(t,n,e){var r=e(4417),o=e(191);t.exports=e(7086)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},1219:function(t,n,e){t.exports=!e(7086)&&!e(1663)((function(){return 7!=Object.defineProperty(e(4389)("div"),"a",{get:function(){return 7}}).a}))},1777:function(t){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t.exports=function(t){return"object"===n(t)?null!==t:"function"==typeof t}},4417:function(t,n,e){var r=e(848),o=e(1219),i=e(6362),a=Object.defineProperty;n.f=e(7086)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return a(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},191:function(t){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},6362:function(t,n,e){var r=e(1777);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},9140:function(t,n,e){var r=e(6187);r(r.G,{global:e(1376)})},914:function(t){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},5485:function(t,n,e){var r=e(6625);t.exports=function(t,n){if("number"!=typeof t&&"Number"!=r(t))throw TypeError(n);return+t}},5173:function(t,n,e){var r=e(142)("unscopables"),o=Array.prototype;null==o[r]&&e(2785)(o,r,{}),t.exports=function(t){o[r][t]=!0}},3661:function(t,n,e){"use strict";var r=e(8422)(!0);t.exports=function(t,n,e){return n+(e?r(t,n).length:1)}},5311:function(t){t.exports=function(t,n,e,r){if(!(t instanceof n)||void 0!==r&&r in t)throw TypeError(e+": incorrect invocation!");return t}},3568:function(t,n,e){var r=e(4675);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},1967:function(t,n,e){"use strict";var r=e(7167),o=e(4474),i=e(8634);t.exports=[].copyWithin||function(t,n){var e=r(this),a=i(e.length),u=o(t,a),c=o(n,a),s=arguments.length>2?arguments[2]:void 0,f=Math.min((void 0===s?a:o(s,a))-c,a-u),l=1;for(c<u&&u<c+f&&(l=-1,c+=f-1,u+=f-1);f-- >0;)c in e?e[u]=e[c]:delete e[u],u+=l,c+=l;return e}},8755:function(t,n,e){"use strict";var r=e(7167),o=e(4474),i=e(8634);t.exports=function(t){for(var n=r(this),e=i(n.length),a=arguments.length,u=o(a>1?arguments[1]:void 0,e),c=a>2?arguments[2]:void 0,s=void 0===c?e:o(c,e);s>u;)n[u++]=t;return n}},1516:function(t,n,e){var r=e(6936),o=e(8634),i=e(4474);t.exports=function(t){return function(n,e,a){var u,c=r(n),s=o(c.length),f=i(a,s);if(t&&e!=e){for(;s>f;)if((u=c[f++])!=u)return!0}else for(;s>f;f++)if((t||f in c)&&c[f]===e)return t||f||0;return!t&&-1}}},4733:function(t,n,e){var r=e(5586),o=e(2013),i=e(7167),a=e(8634),u=e(584);t.exports=function(t,n){var e=1==t,c=2==t,s=3==t,f=4==t,l=6==t,p=5==t||l,h=n||u;return function(n,u,d){for(var v,y,m=i(n),g=o(m),b=r(u,d,3),_=a(g.length),w=0,x=e?h(n,_):c?h(n,0):void 0;_>w;w++)if((p||w in g)&&(y=b(v=g[w],w,m),t))if(e)x[w]=y;else if(y)switch(t){case 3:return!0;case 5:return v;case 6:return w;case 2:x.push(v)}else if(f)return!1;return l?-1:s||f?f:x}}},6021:function(t,n,e){var r=e(914),o=e(7167),i=e(2013),a=e(8634);t.exports=function(t,n,e,u,c){r(n);var s=o(t),f=i(s),l=a(s.length),p=c?l-1:0,h=c?-1:1;if(e<2)for(;;){if(p in f){u=f[p],p+=h;break}if(p+=h,c?p<0:l<=p)throw TypeError("Reduce of empty array with no initial value")}for(;c?p>=0:l>p;p+=h)p in f&&(u=n(u,f[p],p,s));return u}},2099:function(t,n,e){var r=e(4675),o=e(8386),i=e(142)("species");t.exports=function(t){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)||(n=void 0),r(n)&&null===(n=n[i])&&(n=void 0)),void 0===n?Array:n}},584:function(t,n,e){var r=e(2099);t.exports=function(t,n){return new(r(t))(n)}},2764:function(t,n,e){"use strict";var r=e(914),o=e(4675),i=e(7666),a=[].slice,u={},c=function(t,n,e){if(!(n in u)){for(var r=[],o=0;o<n;o++)r[o]="a["+o+"]";u[n]=Function("F,a","return new F("+r.join(",")+")")}return u[n](t,e)};t.exports=Function.bind||function(t){var n=r(this),e=a.call(arguments,1),u=function r(){var o=e.concat(a.call(arguments));return this instanceof r?c(n,o.length,o):i(n,o,t)};return o(n.prototype)&&(u.prototype=n.prototype),u}},8151:function(t,n,e){var r=e(6625),o=e(142)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?e:i?r(n):"Object"==(a=r(n))&&"function"==typeof n.callee?"Arguments":a}},6625:function(t){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},5415:function(t,n,e){"use strict";var r=e(4749).f,o=e(5627),i=e(1062),a=e(5586),u=e(5311),c=e(8958),s=e(2283),f=e(6756),l=e(3640),p=e(8305),h=e(3970).fastKey,d=e(4210),v=p?"_s":"size",y=function(t,n){var e,r=h(n);if("F"!==r)return t._i[r];for(e=t._f;e;e=e.n)if(e.k==n)return e};t.exports={getConstructor:function(t,n,e,s){var f=t((function(t,r){u(t,f,n,"_i"),t._t=n,t._i=o(null),t._f=void 0,t._l=void 0,t[v]=0,null!=r&&c(r,e,t[s],t)}));return i(f.prototype,{clear:function(){for(var t=d(this,n),e=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete e[r.i];t._f=t._l=void 0,t[v]=0},delete:function(t){var e=d(this,n),r=y(e,t);if(r){var o=r.n,i=r.p;delete e._i[r.i],r.r=!0,i&&(i.n=o),o&&(o.p=i),e._f==r&&(e._f=o),e._l==r&&(e._l=i),e[v]--}return!!r},forEach:function(t){d(this,n);for(var e,r=a(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.n:this._f;)for(r(e.v,e.k,this);e&&e.r;)e=e.p},has:function(t){return!!y(d(this,n),t)}}),p&&r(f.prototype,"size",{get:function(){return d(this,n)[v]}}),f},def:function(t,n,e){var r,o,i=y(t,n);return i?i.v=e:(t._l=i={i:o=h(n,!0),k:n,v:e,p:r=t._l,n:void 0,r:!1},t._f||(t._f=i),r&&(r.n=i),t[v]++,"F"!==o&&(t._i[o]=i)),t},getEntry:y,setStrong:function(t,n,e){s(t,n,(function(t,e){this._t=d(t,n),this._k=e,this._l=void 0}),(function(){for(var t=this,n=t._k,e=t._l;e&&e.r;)e=e.p;return t._t&&(t._l=e=e?e.n:t._t._f)?f(0,"keys"==n?e.k:"values"==n?e.v:[e.k,e.v]):(t._t=void 0,f(1))}),e?"entries":"values",!e,!0),l(n)}}},6666:function(t,n,e){"use strict";var r=e(1062),o=e(3970).getWeak,i=e(3568),a=e(4675),u=e(5311),c=e(8958),s=e(4733),f=e(9476),l=e(4210),p=s(5),h=s(6),d=0,v=function(t){return t._l||(t._l=new y)},y=function(){this.a=[]},m=function(t,n){return p(t.a,(function(t){return t[0]===n}))};y.prototype={get:function(t){var n=m(this,t);if(n)return n[1]},has:function(t){return!!m(this,t)},set:function(t,n){var e=m(this,t);e?e[1]=n:this.a.push([t,n])},delete:function(t){var n=h(this.a,(function(n){return n[0]===t}));return~n&&this.a.splice(n,1),!!~n}},t.exports={getConstructor:function(t,n,e,i){var s=t((function(t,r){u(t,s,n,"_i"),t._t=n,t._i=d++,t._l=void 0,null!=r&&c(r,e,t[i],t)}));return r(s.prototype,{delete:function(t){if(!a(t))return!1;var e=o(t);return!0===e?v(l(this,n)).delete(t):e&&f(e,this._i)&&delete e[this._i]},has:function(t){if(!a(t))return!1;var e=o(t);return!0===e?v(l(this,n)).has(t):e&&f(e,this._i)}}),s},def:function(t,n,e){var r=o(i(n),!0);return!0===r?v(t).set(n,e):r[t._i]=e,t},ufstore:v}},3700:function(t,n,e){"use strict";var r=e(6234),o=e(4987),i=e(1164),a=e(1062),u=e(3970),c=e(8958),s=e(5311),f=e(4675),l=e(3791),p=e(5297),h=e(8118),d=e(2984);t.exports=function(t,n,e,v,y,m){var g=r[t],b=g,_=y?"set":"add",w=b&&b.prototype,x={},S=function(t){var n=w[t];i(w,t,"delete"==t||"has"==t?function(t){return!(m&&!f(t))&&n.call(this,0===t?0:t)}:"get"==t?function(t){return m&&!f(t)?void 0:n.call(this,0===t?0:t)}:"add"==t?function(t){return n.call(this,0===t?0:t),this}:function(t,e){return n.call(this,0===t?0:t,e),this})};if("function"==typeof b&&(m||w.forEach&&!l((function(){(new b).entries().next()})))){var O=new b,E=O[_](m?{}:-0,1)!=O,A=l((function(){O.has(1)})),C=p((function(t){new b(t)})),j=!m&&l((function(){for(var t=new b,n=5;n--;)t[_](n,n);return!t.has(-0)}));C||((b=n((function(n,e){s(n,b,t);var r=d(new g,n,b);return null!=e&&c(e,y,r[_],r),r}))).prototype=w,w.constructor=b),(A||j)&&(S("delete"),S("has"),y&&S("get")),(j||E)&&S(_),m&&w.clear&&delete w.clear}else b=v.getConstructor(n,t,y,_),a(b.prototype,e),u.NEED=!0;return h(b,t),x[t]=b,o(o.G+o.W+o.F*(b!=g),x),m||v.setStrong(b,t,y),b}},2515:function(t){var n=t.exports={version:"2.6.12"};"number"==typeof __e&&(__e=n)},5185:function(t,n,e){"use strict";var r=e(4749),o=e(9532);t.exports=function(t,n,e){n in t?r.f(t,n,o(0,e)):t[n]=e}},5586:function(t,n,e){var r=e(914);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},2374:function(t,n,e){"use strict";var r=e(3791),o=Date.prototype.getTime,i=Date.prototype.toISOString,a=function(t){return t>9?t:"0"+t};t.exports=r((function(){return"0385-07-25T07:06:39.999Z"!=i.call(new Date(-50000000000001))}))||!r((function(){i.call(new Date(NaN))}))?function(){if(!isFinite(o.call(this)))throw RangeError("Invalid time value");var t=this,n=t.getUTCFullYear(),e=t.getUTCMilliseconds(),r=n<0?"-":n>9999?"+":"";return r+("00000"+Math.abs(n)).slice(r?-6:-4)+"-"+a(t.getUTCMonth()+1)+"-"+a(t.getUTCDate())+"T"+a(t.getUTCHours())+":"+a(t.getUTCMinutes())+":"+a(t.getUTCSeconds())+"."+(e>99?e:"0"+a(e))+"Z"}:i},2640:function(t,n,e){"use strict";var r=e(3568),o=e(8873),i="number";t.exports=function(t){if("string"!==t&&t!==i&&"default"!==t)throw TypeError("Incorrect hint");return o(r(this),t!=i)}},3765:function(t){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},8305:function(t,n,e){t.exports=!e(3791)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},2777:function(t,n,e){var r=e(4675),o=e(6234).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},9171:function(t){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},6985:function(t,n,e){var r=e(3230),o=e(5322),i=e(9449);t.exports=function(t){var n=r(t),e=o.f;if(e)for(var a,u=e(t),c=i.f,s=0;u.length>s;)c.call(t,a=u[s++])&&n.push(a);return n}},4987:function(t,n,e){var r=e(6234),o=e(2515),i=e(2785),a=e(1164),u=e(5586),c=function t(n,e,c){var s,f,l,p,h=n&t.F,d=n&t.G,v=n&t.P,y=n&t.B,m=d?r:n&t.S?r[e]||(r[e]={}):(r[e]||{}).prototype,g=d?o:o[e]||(o[e]={}),b=g.prototype||(g.prototype={});for(s in d&&(c=e),c)l=((f=!h&&m&&void 0!==m[s])?m:c)[s],p=y&&f?u(l,r):v&&"function"==typeof l?u(Function.call,l):l,m&&a(m,s,l,n&t.U),g[s]!=l&&i(g,s,p),v&&b[s]!=l&&(b[s]=l)};r.core=o,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},4934:function(t,n,e){var r=e(142)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[r]=!1,!"/./"[t](n)}catch(t){}}return!0}},3791:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},634:function(t,n,e){"use strict";e(4121);var r=e(1164),o=e(2785),i=e(3791),a=e(3765),u=e(142),c=e(9949),s=u("species"),f=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2===e.length&&"a"===e[0]&&"b"===e[1]}();t.exports=function(t,n,e){var p=u(t),h=!i((function(){var n={};return n[p]=function(){return 7},7!=""[t](n)})),d=h?!i((function(){var n=!1,e=/a/;return e.exec=function(){return n=!0,null},"split"===t&&(e.constructor={},e.constructor[s]=function(){return e}),e[p](""),!n})):void 0;if(!h||!d||"replace"===t&&!f||"split"===t&&!l){var v=/./[p],y=e(a,p,""[t],(function(t,n,e,r,o){return n.exec===c?h&&!o?{done:!0,value:v.call(n,e,r)}:{done:!0,value:t.call(e,n,r)}:{done:!1}})),m=y[0],g=y[1];r(String.prototype,t,m),o(RegExp.prototype,p,2==n?function(t,n){return g.call(t,this,n)}:function(t){return g.call(t,this)})}}},6614:function(t,n,e){"use strict";var r=e(3568);t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},5410:function(t,n,e){"use strict";var r=e(8386),o=e(4675),i=e(8634),a=e(5586),u=e(142)("isConcatSpreadable");t.exports=function t(n,e,c,s,f,l,p,h){for(var d,v,y=f,m=0,g=!!p&&a(p,h,3);m<s;){if(m in c){if(d=g?g(c[m],m,e):c[m],v=!1,o(d)&&(v=void 0!==(v=d[u])?!!v:r(d)),v&&l>0)y=t(n,e,d,i(d.length),y,l-1)-1;else{if(y>=9007199254740991)throw TypeError();n[y]=d}y++}m++}return y}},8958:function(t,n,e){var r=e(5586),o=e(4718),i=e(6726),a=e(3568),u=e(8634),c=e(6289),s={},f={},l=t.exports=function(t,n,e,l,p){var h,d,v,y,m=p?function(){return t}:c(t),g=r(e,l,n?2:1),b=0;if("function"!=typeof m)throw TypeError(t+" is not iterable!");if(i(m)){for(h=u(t.length);h>b;b++)if((y=n?g(a(d=t[b])[0],d[1]):g(t[b]))===s||y===f)return y}else for(v=m.call(t);!(d=v.next()).done;)if((y=o(v,g,d.value,n))===s||y===f)return y};l.BREAK=s,l.RETURN=f},6795:function(t,n,e){t.exports=e(4267)("native-function-to-string",Function.toString)},6234:function(t){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},9476:function(t){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},2785:function(t,n,e){var r=e(4749),o=e(9532);t.exports=e(8305)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},1365:function(t,n,e){var r=e(6234).document;t.exports=r&&r.documentElement},7002:function(t,n,e){t.exports=!e(8305)&&!e(3791)((function(){return 7!=Object.defineProperty(e(2777)("div"),"a",{get:function(){return 7}}).a}))},2984:function(t,n,e){var r=e(4675),o=e(5435).set;t.exports=function(t,n,e){var i,a=n.constructor;return a!==e&&"function"==typeof a&&(i=a.prototype)!==e.prototype&&r(i)&&o&&o(t,i),t}},7666:function(t){t.exports=function(t,n,e){var r=void 0===e;switch(n.length){case 0:return r?t():t.call(e);case 1:return r?t(n[0]):t.call(e,n[0]);case 2:return r?t(n[0],n[1]):t.call(e,n[0],n[1]);case 3:return r?t(n[0],n[1],n[2]):t.call(e,n[0],n[1],n[2]);case 4:return r?t(n[0],n[1],n[2],n[3]):t.call(e,n[0],n[1],n[2],n[3])}return t.apply(e,n)}},2013:function(t,n,e){var r=e(6625);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},6726:function(t,n,e){var r=e(5029),o=e(142)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},8386:function(t,n,e){var r=e(6625);t.exports=Array.isArray||function(t){return"Array"==r(t)}},7615:function(t,n,e){var r=e(4675),o=Math.floor;t.exports=function(t){return!r(t)&&isFinite(t)&&o(t)===t}},4675:function(t){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t.exports=function(t){return"object"===n(t)?null!==t:"function"==typeof t}},344:function(t,n,e){var r=e(4675),o=e(6625),i=e(142)("match");t.exports=function(t){var n;return r(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))}},4718:function(t,n,e){var r=e(3568);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},2759:function(t,n,e){"use strict";var r=e(5627),o=e(9532),i=e(8118),a={};e(2785)(a,e(142)("iterator"),(function(){return this})),t.exports=function(t,n,e){t.prototype=r(a,{next:o(1,e)}),i(t,n+" Iterator")}},2283:function(t,n,e){"use strict";var r=e(2297),o=e(4987),i=e(1164),a=e(2785),u=e(5029),c=e(2759),s=e(8118),f=e(7967),l=e(142)("iterator"),p=!([].keys&&"next"in[].keys()),h="keys",d="values",v=function(){return this};t.exports=function(t,n,e,y,m,g,b){c(e,n,y);var _,w,x,S=function(t){if(!p&&t in C)return C[t];switch(t){case h:case d:return function(){return new e(this,t)}}return function(){return new e(this,t)}},O=n+" Iterator",E=m==d,A=!1,C=t.prototype,j=C[l]||C["@@iterator"]||m&&C[m],k=j||S(m),$=m?E?S("entries"):k:void 0,P="Array"==n&&C.entries||j;if(P&&(x=f(P.call(new t)))!==Object.prototype&&x.next&&(s(x,O,!0),r||"function"==typeof x[l]||a(x,l,v)),E&&j&&j.name!==d&&(A=!0,k=function(){return j.call(this)}),r&&!b||!p&&!A&&C[l]||a(C,l,k),u[n]=k,u[O]=v,m)if(_={values:E?k:S(d),keys:g?k:S(h),entries:$},b)for(w in _)w in C||i(C,w,_[w]);else o(o.P+o.F*(p||A),n,_);return _}},5297:function(t,n,e){var r=e(142)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i=[7],a=i[r]();a.next=function(){return{done:e=!0}},i[r]=function(){return a},t(i)}catch(t){}return e}},6756:function(t){t.exports=function(t,n){return{value:n,done:!!t}}},5029:function(t){t.exports={}},2297:function(t){t.exports=!1},693:function(t){var n=Math.expm1;t.exports=!n||n(10)>22025.465794806718||n(10)<22025.465794806718||-2e-17!=n(-2e-17)?function(t){return 0==(t=+t)?t:t>-1e-6&&t<1e-6?t+t*t/2:Math.exp(t)-1}:n},4319:function(t,n,e){var r=e(5056),o=Math.pow,i=o(2,-52),a=o(2,-23),u=o(2,127)*(2-a),c=o(2,-126);t.exports=Math.fround||function(t){var n,e,o=Math.abs(t),s=r(t);return o<c?s*(o/c/a+1/i-1/i)*c*a:(e=(n=(1+a/i)*o)-(n-o))>u||e!=e?s*(1/0):s*e}},4384:function(t){t.exports=Math.log1p||function(t){return(t=+t)>-1e-8&&t<1e-8?t-t*t/2:Math.log(1+t)}},5056:function(t){t.exports=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},3970:function(t,n,e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=e(1870)("meta"),i=e(4675),a=e(9476),u=e(4749).f,c=0,s=Object.isExtensible||function(){return!0},f=!e(3791)((function(){return s(Object.preventExtensions({}))})),l=function(t){u(t,o,{value:{i:"O"+ ++c,w:{}}})},p=t.exports={KEY:o,NEED:!1,fastKey:function(t,n){if(!i(t))return"symbol"==r(t)?t:("string"==typeof t?"S":"P")+t;if(!a(t,o)){if(!s(t))return"F";if(!n)return"E";l(t)}return t[o].i},getWeak:function(t,n){if(!a(t,o)){if(!s(t))return!0;if(!n)return!1;l(t)}return t[o].w},onFreeze:function(t){return f&&p.NEED&&s(t)&&!a(t,o)&&l(t),t}}},1747:function(t,n,e){var r=e(6234),o=e(3712).set,i=r.MutationObserver||r.WebKitMutationObserver,a=r.process,u=r.Promise,c="process"==e(6625)(a);t.exports=function(){var t,n,e,s=function(){var r,o;for(c&&(r=a.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?e():n=void 0,r}}n=void 0,r&&r.enter()};if(c)e=function(){a.nextTick(s)};else if(!i||r.navigator&&r.navigator.standalone)if(u&&u.resolve){var f=u.resolve(void 0);e=function(){f.then(s)}}else e=function(){o.call(r,s)};else{var l=!0,p=document.createTextNode("");new i(s).observe(p,{characterData:!0}),e=function(){p.data=l=!l}}return function(r){var o={fn:r,next:void 0};n&&(n.next=o),t||(t=o,e()),n=o}}},3274:function(t,n,e){"use strict";var r=e(914);function o(t){var n,e;this.promise=new t((function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r})),this.resolve=r(n),this.reject=r(e)}t.exports.f=function(t){return new o(t)}},7789:function(t,n,e){"use strict";var r=e(8305),o=e(3230),i=e(5322),a=e(9449),u=e(7167),c=e(2013),s=Object.assign;t.exports=!s||e(3791)((function(){var t={},n={},e=Symbol(),r="abcdefghijklmnopqrst";return t[e]=7,r.split("").forEach((function(t){n[t]=t})),7!=s({},t)[e]||Object.keys(s({},n)).join("")!=r}))?function(t,n){for(var e=u(t),s=arguments.length,f=1,l=i.f,p=a.f;s>f;)for(var h,d=c(arguments[f++]),v=l?o(d).concat(l(d)):o(d),y=v.length,m=0;y>m;)h=v[m++],r&&!p.call(d,h)||(e[h]=d[h]);return e}:s},5627:function(t,n,e){var r=e(3568),o=e(8315),i=e(9171),a=e(9426)("IE_PROTO"),u=function(){},c=function(){var t,n=e(2777)("iframe"),r=i.length;for(n.style.display="none",e(1365).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;r--;)delete c.prototype[i[r]];return c()};t.exports=Object.create||function(t,n){var e;return null!==t?(u.prototype=r(t),e=new u,u.prototype=null,e[a]=t):e=c(),void 0===n?e:o(e,n)}},4749:function(t,n,e){var r=e(3568),o=e(7002),i=e(8873),a=Object.defineProperty;n.f=e(8305)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return a(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},8315:function(t,n,e){var r=e(4749),o=e(3568),i=e(3230);t.exports=e(8305)?Object.defineProperties:function(t,n){o(t);for(var e,a=i(n),u=a.length,c=0;u>c;)r.f(t,e=a[c++],n[e]);return t}},8428:function(t,n,e){var r=e(9449),o=e(9532),i=e(6936),a=e(8873),u=e(9476),c=e(7002),s=Object.getOwnPropertyDescriptor;n.f=e(8305)?s:function(t,n){if(t=i(t),n=a(n,!0),c)try{return s(t,n)}catch(t){}if(u(t,n))return o(!r.f.call(t,n),t[n])}},395:function(t,n,e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=e(6936),i=e(4524).f,a={}.toString,u="object"==("undefined"==typeof window?"undefined":r(window))&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==a.call(t)?function(t){try{return i(t)}catch(t){return u.slice()}}(t):i(o(t))}},4524:function(t,n,e){var r=e(1320),o=e(9171).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},5322:function(t,n){n.f=Object.getOwnPropertySymbols},7967:function(t,n,e){var r=e(9476),o=e(7167),i=e(9426)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},1320:function(t,n,e){var r=e(9476),o=e(6936),i=e(1516)(!1),a=e(9426)("IE_PROTO");t.exports=function(t,n){var e,u=o(t),c=0,s=[];for(e in u)e!=a&&r(u,e)&&s.push(e);for(;n.length>c;)r(u,e=n[c++])&&(~i(s,e)||s.push(e));return s}},3230:function(t,n,e){var r=e(1320),o=e(9171);t.exports=Object.keys||function(t){return r(t,o)}},9449:function(t,n){n.f={}.propertyIsEnumerable},4029:function(t,n,e){var r=e(4987),o=e(2515),i=e(3791);t.exports=function(t,n){var e=(o.Object||{})[t]||Object[t],a={};a[t]=n(e),r(r.S+r.F*i((function(){e(1)})),"Object",a)}},1268:function(t,n,e){var r=e(8305),o=e(3230),i=e(6936),a=e(9449).f;t.exports=function(t){return function(n){for(var e,u=i(n),c=o(u),s=c.length,f=0,l=[];s>f;)e=c[f++],r&&!a.call(u,e)||l.push(t?[e,u[e]]:u[e]);return l}}},6469:function(t,n,e){var r=e(4524),o=e(5322),i=e(3568),a=e(6234).Reflect;t.exports=a&&a.ownKeys||function(t){var n=r.f(i(t)),e=o.f;return e?n.concat(e(t)):n}},6504:function(t,n,e){var r=e(6234).parseFloat,o=e(9225).trim;t.exports=1/r(e(3978)+"-0")!=-1/0?function(t){var n=o(String(t),3),e=r(n);return 0===e&&"-"==n.charAt(0)?-0:e}:r},1874:function(t,n,e){var r=e(6234).parseInt,o=e(9225).trim,i=e(3978),a=/^[-+]?0[xX]/;t.exports=8!==r(i+"08")||22!==r(i+"0x16")?function(t,n){var e=o(String(t),3);return r(e,n>>>0||(a.test(e)?16:10))}:r},1179:function(t){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},7297:function(t,n,e){var r=e(3568),o=e(4675),i=e(3274);t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=i.f(t);return(0,e.resolve)(n),e.promise}},9532:function(t){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},1062:function(t,n,e){var r=e(1164);t.exports=function(t,n,e){for(var o in n)r(t,o,n[o],e);return t}},1164:function(t,n,e){var r=e(6234),o=e(2785),i=e(9476),a=e(1870)("src"),u=e(6795),c="toString",s=(""+u).split(c);e(2515).inspectSource=function(t){return u.call(t)},(t.exports=function(t,n,e,u){var c="function"==typeof e;c&&(i(e,"name")||o(e,"name",n)),t[n]!==e&&(c&&(i(e,a)||o(e,a,t[n]?""+t[n]:s.join(String(n)))),t===r?t[n]=e:u?t[n]?t[n]=e:o(t,n,e):(delete t[n],o(t,n,e)))})(Function.prototype,c,(function(){return"function"==typeof this&&this[a]||u.call(this)}))},8044:function(t,n,e){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=e(8151),i=RegExp.prototype.exec;t.exports=function(t,n){var e=t.exec;if("function"==typeof e){var a=e.call(t,n);if("object"!==r(a))throw new TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==o(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,n)}},9949:function(t,n,e){"use strict";var r,o,i=e(6614),a=RegExp.prototype.exec,u=String.prototype.replace,c=a,s=(r=/a/,o=/b*/g,a.call(r,"a"),a.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),f=void 0!==/()??/.exec("")[1];(s||f)&&(c=function(t){var n,e,r,o,c=this;return f&&(e=new RegExp("^"+c.source+"$(?!\\s)",i.call(c))),s&&(n=c.lastIndex),r=a.call(c,t),s&&r&&(c.lastIndex=c.global?r.index+r[0].length:n),f&&r&&r.length>1&&u.call(r[0],e,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=c},5590:function(t){t.exports=Object.is||function(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n}},5435:function(t,n,e){var r=e(4675),o=e(3568),i=function(t,n){if(o(t),!r(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,r){try{(r=e(5586)(Function.call,e(8428).f(Object.prototype,"__proto__").set,2))(t,[]),n=!(t instanceof Array)}catch(t){n=!0}return function(t,e){return i(t,e),n?t.__proto__=e:r(t,e),t}}({},!1):void 0),check:i}},3640:function(t,n,e){"use strict";var r=e(6234),o=e(4749),i=e(8305),a=e(142)("species");t.exports=function(t){var n=r[t];i&&n&&!n[a]&&o.f(n,a,{configurable:!0,get:function(){return this}})}},8118:function(t,n,e){var r=e(4749).f,o=e(9476),i=e(142)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},9426:function(t,n,e){var r=e(4267)("keys"),o=e(1870);t.exports=function(t){return r[t]||(r[t]=o(t))}},4267:function(t,n,e){var r=e(2515),o=e(6234),i="__core-js_shared__",a=o[i]||(o[i]={});(t.exports=function(t,n){return a[t]||(a[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(2297)?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},3857:function(t,n,e){var r=e(3568),o=e(914),i=e(142)("species");t.exports=function(t,n){var e,a=r(t).constructor;return void 0===a||null==(e=r(a)[i])?n:o(e)}},6635:function(t,n,e){"use strict";var r=e(3791);t.exports=function(t,n){return!!t&&r((function(){n?t.call(null,(function(){}),1):t.call(null)}))}},8422:function(t,n,e){var r=e(6042),o=e(3765);t.exports=function(t){return function(n,e){var i,a,u=String(o(n)),c=r(e),s=u.length;return c<0||c>=s?t?"":void 0:(i=u.charCodeAt(c))<55296||i>56319||c+1===s||(a=u.charCodeAt(c+1))<56320||a>57343?t?u.charAt(c):i:t?u.slice(c,c+2):a-56320+(i-55296<<10)+65536}}},2643:function(t,n,e){var r=e(344),o=e(3765);t.exports=function(t,n,e){if(r(n))throw TypeError("String#"+e+" doesn't accept regex!");return String(o(t))}},8431:function(t,n,e){var r=e(4987),o=e(3791),i=e(3765),a=/"/g,u=function(t,n,e,r){var o=String(i(t)),u="<"+n;return""!==e&&(u+=" "+e+'="'+String(r).replace(a,"&quot;")+'"'),u+">"+o+"</"+n+">"};t.exports=function(t,n){var e={};e[t]=n(u),r(r.P+r.F*o((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3})),"String",e)}},9042:function(t,n,e){var r=e(8634),o=e(8240),i=e(3765);t.exports=function(t,n,e,a){var u=String(i(t)),c=u.length,s=void 0===e?" ":String(e),f=r(n);if(f<=c||""==s)return u;var l=f-c,p=o.call(s,Math.ceil(l/s.length));return p.length>l&&(p=p.slice(0,l)),a?p+u:u+p}},8240:function(t,n,e){"use strict";var r=e(6042),o=e(3765);t.exports=function(t){var n=String(o(this)),e="",i=r(t);if(i<0||i==1/0)throw RangeError("Count can't be negative");for(;i>0;(i>>>=1)&&(n+=n))1&i&&(e+=n);return e}},9225:function(t,n,e){var r=e(4987),o=e(3765),i=e(3791),a=e(3978),u="["+a+"]",c=RegExp("^"+u+u+"*"),s=RegExp(u+u+"*$"),f=function(t,n,e){var o={},u=i((function(){return!!a[t]()||"​"!="​"[t]()})),c=o[t]=u?n(l):a[t];e&&(o[e]=c),r(r.P+r.F*u,"String",o)},l=f.trim=function(t,n){return t=String(o(t)),1&n&&(t=t.replace(c,"")),2&n&&(t=t.replace(s,"")),t};t.exports=f},3978:function(t){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},3712:function(t,n,e){var r,o,i,a=e(5586),u=e(7666),c=e(1365),s=e(2777),f=e(6234),l=f.process,p=f.setImmediate,h=f.clearImmediate,d=f.MessageChannel,v=f.Dispatch,y=0,m={},g=function(){var t=+this;if(m.hasOwnProperty(t)){var n=m[t];delete m[t],n()}},b=function(t){g.call(t.data)};p&&h||(p=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return m[++y]=function(){u("function"==typeof t?t:Function(t),n)},r(y),y},h=function(t){delete m[t]},"process"==e(6625)(l)?r=function(t){l.nextTick(a(g,t,1))}:v&&v.now?r=function(t){v.now(a(g,t,1))}:d?(i=(o=new d).port2,o.port1.onmessage=b,r=a(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",b,!1)):r="onreadystatechange"in s("script")?function(t){c.appendChild(s("script")).onreadystatechange=function(){c.removeChild(this),g.call(t)}}:function(t){setTimeout(a(g,t,1),0)}),t.exports={set:p,clear:h}},4474:function(t,n,e){var r=e(6042),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=r(t))<0?o(t+n,0):i(t,n)}},2892:function(t,n,e){var r=e(6042),o=e(8634);t.exports=function(t){if(void 0===t)return 0;var n=r(t),e=o(n);if(n!==e)throw RangeError("Wrong length!");return e}},6042:function(t){var n=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:n)(t)}},6936:function(t,n,e){var r=e(2013),o=e(3765);t.exports=function(t){return r(o(t))}},8634:function(t,n,e){var r=e(6042),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},7167:function(t,n,e){var r=e(3765);t.exports=function(t){return Object(r(t))}},8873:function(t,n,e){var r=e(4675);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},3564:function(t,n,e){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}if(e(8305)){var o=e(2297),i=e(6234),a=e(3791),u=e(4987),c=e(9814),s=e(5535),f=e(5586),l=e(5311),p=e(9532),h=e(2785),d=e(1062),v=e(6042),y=e(8634),m=e(2892),g=e(4474),b=e(8873),_=e(9476),w=e(8151),x=e(4675),S=e(7167),O=e(6726),E=e(5627),A=e(7967),C=e(4524).f,j=e(6289),k=e(1870),$=e(142),P=e(4733),T=e(1516),F=e(3857),M=e(7352),I=e(5029),N=e(5297),L=e(3640),R=e(8755),D=e(1967),U=e(4749),G=e(8428),V=U.f,W=G.f,B=i.RangeError,H=i.TypeError,z=i.Uint8Array,q="ArrayBuffer",X="SharedArrayBuffer",K="BYTES_PER_ELEMENT",J=Array.prototype,Y=s.ArrayBuffer,Z=s.DataView,Q=P(0),tt=P(2),nt=P(3),et=P(4),rt=P(5),ot=P(6),it=T(!0),at=T(!1),ut=M.values,ct=M.keys,st=M.entries,ft=J.lastIndexOf,lt=J.reduce,pt=J.reduceRight,ht=J.join,dt=J.sort,vt=J.slice,yt=J.toString,mt=J.toLocaleString,gt=$("iterator"),bt=$("toStringTag"),_t=k("typed_constructor"),wt=k("def_constructor"),xt=c.CONSTR,St=c.TYPED,Ot=c.VIEW,Et="Wrong length!",At=P(1,(function(t,n){return Pt(F(t,t[wt]),n)})),Ct=a((function(){return 1===new z(new Uint16Array([1]).buffer)[0]})),jt=!!z&&!!z.prototype.set&&a((function(){new z(1).set({})})),kt=function(t,n){var e=v(t);if(e<0||e%n)throw B("Wrong offset!");return e},$t=function(t){if(x(t)&&St in t)return t;throw H(t+" is not a typed array!")},Pt=function(t,n){if(!x(t)||!(_t in t))throw H("It is not a typed array constructor!");return new t(n)},Tt=function(t,n){return Ft(F(t,t[wt]),n)},Ft=function(t,n){for(var e=0,r=n.length,o=Pt(t,r);r>e;)o[e]=n[e++];return o},Mt=function(t,n,e){V(t,n,{get:function(){return this._d[e]}})},It=function(t){var n,e,r,o,i,a,u=S(t),c=arguments.length,s=c>1?arguments[1]:void 0,l=void 0!==s,p=j(u);if(null!=p&&!O(p)){for(a=p.call(u),r=[],n=0;!(i=a.next()).done;n++)r.push(i.value);u=r}for(l&&c>2&&(s=f(s,arguments[2],2)),n=0,e=y(u.length),o=Pt(this,e);e>n;n++)o[n]=l?s(u[n],n):u[n];return o},Nt=function(){for(var t=0,n=arguments.length,e=Pt(this,n);n>t;)e[t]=arguments[t++];return e},Lt=!!z&&a((function(){mt.call(new z(1))})),Rt=function(){return mt.apply(Lt?vt.call($t(this)):$t(this),arguments)},Dt={copyWithin:function(t,n){return D.call($t(this),t,n,arguments.length>2?arguments[2]:void 0)},every:function(t){return et($t(this),t,arguments.length>1?arguments[1]:void 0)},fill:function(t){return R.apply($t(this),arguments)},filter:function(t){return Tt(this,tt($t(this),t,arguments.length>1?arguments[1]:void 0))},find:function(t){return rt($t(this),t,arguments.length>1?arguments[1]:void 0)},findIndex:function(t){return ot($t(this),t,arguments.length>1?arguments[1]:void 0)},forEach:function(t){Q($t(this),t,arguments.length>1?arguments[1]:void 0)},indexOf:function(t){return at($t(this),t,arguments.length>1?arguments[1]:void 0)},includes:function(t){return it($t(this),t,arguments.length>1?arguments[1]:void 0)},join:function(t){return ht.apply($t(this),arguments)},lastIndexOf:function(t){return ft.apply($t(this),arguments)},map:function(t){return At($t(this),t,arguments.length>1?arguments[1]:void 0)},reduce:function(t){return lt.apply($t(this),arguments)},reduceRight:function(t){return pt.apply($t(this),arguments)},reverse:function(){for(var t,n=this,e=$t(n).length,r=Math.floor(e/2),o=0;o<r;)t=n[o],n[o++]=n[--e],n[e]=t;return n},some:function(t){return nt($t(this),t,arguments.length>1?arguments[1]:void 0)},sort:function(t){return dt.call($t(this),t)},subarray:function(t,n){var e=$t(this),r=e.length,o=g(t,r);return new(F(e,e[wt]))(e.buffer,e.byteOffset+o*e.BYTES_PER_ELEMENT,y((void 0===n?r:g(n,r))-o))}},Ut=function(t,n){return Tt(this,vt.call($t(this),t,n))},Gt=function(t){$t(this);var n=kt(arguments[1],1),e=this.length,r=S(t),o=y(r.length),i=0;if(o+n>e)throw B(Et);for(;i<o;)this[n+i]=r[i++]},Vt={entries:function(){return st.call($t(this))},keys:function(){return ct.call($t(this))},values:function(){return ut.call($t(this))}},Wt=function(t,n){return x(t)&&t[St]&&"symbol"!=r(n)&&n in t&&String(+n)==String(n)},Bt=function(t,n){return Wt(t,n=b(n,!0))?p(2,t[n]):W(t,n)},Ht=function(t,n,e){return!(Wt(t,n=b(n,!0))&&x(e)&&_(e,"value"))||_(e,"get")||_(e,"set")||e.configurable||_(e,"writable")&&!e.writable||_(e,"enumerable")&&!e.enumerable?V(t,n,e):(t[n]=e.value,t)};xt||(G.f=Bt,U.f=Ht),u(u.S+u.F*!xt,"Object",{getOwnPropertyDescriptor:Bt,defineProperty:Ht}),a((function(){yt.call({})}))&&(yt=mt=function(){return ht.call(this)});var zt=d({},Dt);d(zt,Vt),h(zt,gt,Vt.values),d(zt,{slice:Ut,set:Gt,constructor:function(){},toString:yt,toLocaleString:Rt}),Mt(zt,"buffer","b"),Mt(zt,"byteOffset","o"),Mt(zt,"byteLength","l"),Mt(zt,"length","e"),V(zt,bt,{get:function(){return this[St]}}),t.exports=function(t,n,e,r){var s=t+((r=!!r)?"Clamped":"")+"Array",f="get"+t,p="set"+t,d=i[s],v=d||{},g=d&&A(d),b=!d||!c.ABV,_={},S=d&&d.prototype,O=function(t,e){V(t,e,{get:function(){return function(t,e){var r=t._d;return r.v[f](e*n+r.o,Ct)}(this,e)},set:function(t){return function(t,e,o){var i=t._d;r&&(o=(o=Math.round(o))<0?0:o>255?255:255&o),i.v[p](e*n+i.o,o,Ct)}(this,e,t)},enumerable:!0})};b?(d=e((function(t,e,r,o){l(t,d,s,"_d");var i,a,u,c,f=0,p=0;if(x(e)){if(!(e instanceof Y||(c=w(e))==q||c==X))return St in e?Ft(d,e):It.call(d,e);i=e,p=kt(r,n);var v=e.byteLength;if(void 0===o){if(v%n)throw B(Et);if((a=v-p)<0)throw B(Et)}else if((a=y(o)*n)+p>v)throw B(Et);u=a/n}else u=m(e),i=new Y(a=u*n);for(h(t,"_d",{b:i,o:p,l:a,e:u,v:new Z(i)});f<u;)O(t,f++)})),S=d.prototype=E(zt),h(S,"constructor",d)):a((function(){d(1)}))&&a((function(){new d(-1)}))&&N((function(t){new d,new d(null),new d(1.5),new d(t)}),!0)||(d=e((function(t,e,r,o){var i;return l(t,d,s),x(e)?e instanceof Y||(i=w(e))==q||i==X?void 0!==o?new v(e,kt(r,n),o):void 0!==r?new v(e,kt(r,n)):new v(e):St in e?Ft(d,e):It.call(d,e):new v(m(e))})),Q(g!==Function.prototype?C(v).concat(C(g)):C(v),(function(t){t in d||h(d,t,v[t])})),d.prototype=S,o||(S.constructor=d));var j=S[gt],k=!!j&&("values"==j.name||null==j.name),$=Vt.values;h(d,_t,!0),h(S,St,s),h(S,Ot,!0),h(S,wt,d),(r?new d(1)[bt]==s:bt in S)||V(S,bt,{get:function(){return s}}),_[s]=d,u(u.G+u.W+u.F*(d!=v),_),u(u.S,s,{BYTES_PER_ELEMENT:n}),u(u.S+u.F*a((function(){v.of.call(d,1)})),s,{from:It,of:Nt}),K in S||h(S,K,n),u(u.P,s,Dt),L(s),u(u.P+u.F*jt,s,{set:Gt}),u(u.P+u.F*!k,s,Vt),o||S.toString==yt||(S.toString=yt),u(u.P+u.F*a((function(){new d(1).slice()})),s,{slice:Ut}),u(u.P+u.F*(a((function(){return[1,2].toLocaleString()!=new d([1,2]).toLocaleString()}))||!a((function(){S.toLocaleString.call([1,2])}))),s,{toLocaleString:Rt}),I[s]=k?j:$,o||k||h(S,gt,$)}}else t.exports=function(){}},5535:function(t,n,e){"use strict";var r=e(6234),o=e(8305),i=e(2297),a=e(9814),u=e(2785),c=e(1062),s=e(3791),f=e(5311),l=e(6042),p=e(8634),h=e(2892),d=e(4524).f,v=e(4749).f,y=e(8755),m=e(8118),g="ArrayBuffer",b="DataView",_="Wrong index!",w=r.ArrayBuffer,x=r.DataView,S=r.Math,O=r.RangeError,E=r.Infinity,A=w,C=S.abs,j=S.pow,k=S.floor,$=S.log,P=S.LN2,T="buffer",F="byteLength",M="byteOffset",I=o?"_b":T,N=o?"_l":F,L=o?"_o":M;function R(t,n,e){var r,o,i,a=new Array(e),u=8*e-n-1,c=(1<<u)-1,s=c>>1,f=23===n?j(2,-24)-j(2,-77):0,l=0,p=t<0||0===t&&1/t<0?1:0;for((t=C(t))!=t||t===E?(o=t!=t?1:0,r=c):(r=k($(t)/P),t*(i=j(2,-r))<1&&(r--,i*=2),(t+=r+s>=1?f/i:f*j(2,1-s))*i>=2&&(r++,i/=2),r+s>=c?(o=0,r=c):r+s>=1?(o=(t*i-1)*j(2,n),r+=s):(o=t*j(2,s-1)*j(2,n),r=0));n>=8;a[l++]=255&o,o/=256,n-=8);for(r=r<<n|o,u+=n;u>0;a[l++]=255&r,r/=256,u-=8);return a[--l]|=128*p,a}function D(t,n,e){var r,o=8*e-n-1,i=(1<<o)-1,a=i>>1,u=o-7,c=e-1,s=t[c--],f=127&s;for(s>>=7;u>0;f=256*f+t[c],c--,u-=8);for(r=f&(1<<-u)-1,f>>=-u,u+=n;u>0;r=256*r+t[c],c--,u-=8);if(0===f)f=1-a;else{if(f===i)return r?NaN:s?-E:E;r+=j(2,n),f-=a}return(s?-1:1)*r*j(2,f-n)}function U(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]}function G(t){return[255&t]}function V(t){return[255&t,t>>8&255]}function W(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function B(t){return R(t,52,8)}function H(t){return R(t,23,4)}function z(t,n,e){v(t.prototype,n,{get:function(){return this[e]}})}function q(t,n,e,r){var o=h(+e);if(o+n>t[N])throw O(_);var i=t[I]._b,a=o+t[L],u=i.slice(a,a+n);return r?u:u.reverse()}function X(t,n,e,r,o,i){var a=h(+e);if(a+n>t[N])throw O(_);for(var u=t[I]._b,c=a+t[L],s=r(+o),f=0;f<n;f++)u[c+f]=s[i?f:n-f-1]}if(a.ABV){if(!s((function(){w(1)}))||!s((function(){new w(-1)}))||s((function(){return new w,new w(1.5),new w(NaN),w.name!=g}))){for(var K,J=(w=function(t){return f(this,w),new A(h(t))}).prototype=A.prototype,Y=d(A),Z=0;Y.length>Z;)(K=Y[Z++])in w||u(w,K,A[K]);i||(J.constructor=w)}var Q=new x(new w(2)),tt=x.prototype.setInt8;Q.setInt8(0,2147483648),Q.setInt8(1,2147483649),!Q.getInt8(0)&&Q.getInt8(1)||c(x.prototype,{setInt8:function(t,n){tt.call(this,t,n<<24>>24)},setUint8:function(t,n){tt.call(this,t,n<<24>>24)}},!0)}else w=function(t){f(this,w,g);var n=h(t);this._b=y.call(new Array(n),0),this[N]=n},x=function(t,n,e){f(this,x,b),f(t,w,b);var r=t[N],o=l(n);if(o<0||o>r)throw O("Wrong offset!");if(o+(e=void 0===e?r-o:p(e))>r)throw O("Wrong length!");this[I]=t,this[L]=o,this[N]=e},o&&(z(w,F,"_l"),z(x,T,"_b"),z(x,F,"_l"),z(x,M,"_o")),c(x.prototype,{getInt8:function(t){return q(this,1,t)[0]<<24>>24},getUint8:function(t){return q(this,1,t)[0]},getInt16:function(t){var n=q(this,2,t,arguments[1]);return(n[1]<<8|n[0])<<16>>16},getUint16:function(t){var n=q(this,2,t,arguments[1]);return n[1]<<8|n[0]},getInt32:function(t){return U(q(this,4,t,arguments[1]))},getUint32:function(t){return U(q(this,4,t,arguments[1]))>>>0},getFloat32:function(t){return D(q(this,4,t,arguments[1]),23,4)},getFloat64:function(t){return D(q(this,8,t,arguments[1]),52,8)},setInt8:function(t,n){X(this,1,t,G,n)},setUint8:function(t,n){X(this,1,t,G,n)},setInt16:function(t,n){X(this,2,t,V,n,arguments[2])},setUint16:function(t,n){X(this,2,t,V,n,arguments[2])},setInt32:function(t,n){X(this,4,t,W,n,arguments[2])},setUint32:function(t,n){X(this,4,t,W,n,arguments[2])},setFloat32:function(t,n){X(this,4,t,H,n,arguments[2])},setFloat64:function(t,n){X(this,8,t,B,n,arguments[2])}});m(w,g),m(x,b),u(x.prototype,a.VIEW,!0),n.ArrayBuffer=w,n.DataView=x},9814:function(t,n,e){for(var r,o=e(6234),i=e(2785),a=e(1870),u=a("typed_array"),c=a("view"),s=!(!o.ArrayBuffer||!o.DataView),f=s,l=0,p="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");l<9;)(r=o[p[l++]])?(i(r.prototype,u,!0),i(r.prototype,c,!0)):f=!1;t.exports={ABV:s,CONSTR:f,TYPED:u,VIEW:c}},1870:function(t){var n=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+e).toString(36))}},8123:function(t,n,e){var r=e(6234).navigator;t.exports=r&&r.userAgent||""},4210:function(t,n,e){var r=e(4675);t.exports=function(t,n){if(!r(t)||t._t!==n)throw TypeError("Incompatible receiver, "+n+" required!");return t}},8029:function(t,n,e){var r=e(6234),o=e(2515),i=e(2297),a=e(5657),u=e(4749).f;t.exports=function(t){var n=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in n||u(n,t,{value:a.f(t)})}},5657:function(t,n,e){n.f=e(142)},142:function(t,n,e){var r=e(4267)("wks"),o=e(1870),i=e(6234).Symbol,a="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=a&&i[t]||(a?i:o)("Symbol."+t))}).store=r},6289:function(t,n,e){var r=e(8151),o=e(142)("iterator"),i=e(5029);t.exports=e(2515).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||i[r(t)]}},6677:function(t,n,e){var r=e(4987);r(r.P,"Array",{copyWithin:e(1967)}),e(5173)("copyWithin")},1954:function(t,n,e){"use strict";var r=e(4987),o=e(4733)(4);r(r.P+r.F*!e(6635)([].every,!0),"Array",{every:function(t){return o(this,t,arguments[1])}})},8685:function(t,n,e){var r=e(4987);r(r.P,"Array",{fill:e(8755)}),e(5173)("fill")},2346:function(t,n,e){"use strict";var r=e(4987),o=e(4733)(2);r(r.P+r.F*!e(6635)([].filter,!0),"Array",{filter:function(t){return o(this,t,arguments[1])}})},3917:function(t,n,e){"use strict";var r=e(4987),o=e(4733)(6),i="findIndex",a=!0;i in[]&&Array(1)[i]((function(){a=!1})),r(r.P+r.F*a,"Array",{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),e(5173)(i)},9346:function(t,n,e){"use strict";var r=e(4987),o=e(4733)(5),i="find",a=!0;i in[]&&Array(1).find((function(){a=!1})),r(r.P+r.F*a,"Array",{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),e(5173)(i)},9938:function(t,n,e){"use strict";var r=e(4987),o=e(4733)(0),i=e(6635)([].forEach,!0);r(r.P+r.F*!i,"Array",{forEach:function(t){return o(this,t,arguments[1])}})},3216:function(t,n,e){"use strict";var r=e(5586),o=e(4987),i=e(7167),a=e(4718),u=e(6726),c=e(8634),s=e(5185),f=e(6289);o(o.S+o.F*!e(5297)((function(t){Array.from(t)})),"Array",{from:function(t){var n,e,o,l,p=i(t),h="function"==typeof this?this:Array,d=arguments.length,v=d>1?arguments[1]:void 0,y=void 0!==v,m=0,g=f(p);if(y&&(v=r(v,d>2?arguments[2]:void 0,2)),null==g||h==Array&&u(g))for(e=new h(n=c(p.length));n>m;m++)s(e,m,y?v(p[m],m):p[m]);else for(l=g.call(p),e=new h;!(o=l.next()).done;m++)s(e,m,y?a(l,v,[o.value,m],!0):o.value);return e.length=m,e}})},6850:function(t,n,e){"use strict";var r=e(4987),o=e(1516)(!1),i=[].indexOf,a=!!i&&1/[1].indexOf(1,-0)<0;r(r.P+r.F*(a||!e(6635)(i)),"Array",{indexOf:function(t){return a?i.apply(this,arguments)||0:o(this,t,arguments[1])}})},7340:function(t,n,e){var r=e(4987);r(r.S,"Array",{isArray:e(8386)})},7352:function(t,n,e){"use strict";var r=e(5173),o=e(6756),i=e(5029),a=e(6936);t.exports=e(2283)(Array,"Array",(function(t,n){this._t=a(t),this._i=0,this._k=n}),(function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):o(0,"keys"==n?e:"values"==n?t[e]:[e,t[e]])}),"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},8451:function(t,n,e){"use strict";var r=e(4987),o=e(6936),i=[].join;r(r.P+r.F*(e(2013)!=Object||!e(6635)(i)),"Array",{join:function(t){return i.call(o(this),void 0===t?",":t)}})},825:function(t,n,e){"use strict";var r=e(4987),o=e(6936),i=e(6042),a=e(8634),u=[].lastIndexOf,c=!!u&&1/[1].lastIndexOf(1,-0)<0;r(r.P+r.F*(c||!e(6635)(u)),"Array",{lastIndexOf:function(t){if(c)return u.apply(this,arguments)||0;var n=o(this),e=a(n.length),r=e-1;for(arguments.length>1&&(r=Math.min(r,i(arguments[1]))),r<0&&(r=e+r);r>=0;r--)if(r in n&&n[r]===t)return r||0;return-1}})},8377:function(t,n,e){"use strict";var r=e(4987),o=e(4733)(1);r(r.P+r.F*!e(6635)([].map,!0),"Array",{map:function(t){return o(this,t,arguments[1])}})},6119:function(t,n,e){"use strict";var r=e(4987),o=e(5185);r(r.S+r.F*e(3791)((function(){function t(){}return!(Array.of.call(t)instanceof t)})),"Array",{of:function(){for(var t=0,n=arguments.length,e=new("function"==typeof this?this:Array)(n);n>t;)o(e,t,arguments[t++]);return e.length=n,e}})},9682:function(t,n,e){"use strict";var r=e(4987),o=e(6021);r(r.P+r.F*!e(6635)([].reduceRight,!0),"Array",{reduceRight:function(t){return o(this,t,arguments.length,arguments[1],!0)}})},3159:function(t,n,e){"use strict";var r=e(4987),o=e(6021);r(r.P+r.F*!e(6635)([].reduce,!0),"Array",{reduce:function(t){return o(this,t,arguments.length,arguments[1],!1)}})},7577:function(t,n,e){"use strict";var r=e(4987),o=e(1365),i=e(6625),a=e(4474),u=e(8634),c=[].slice;r(r.P+r.F*e(3791)((function(){o&&c.call(o)})),"Array",{slice:function(t,n){var e=u(this.length),r=i(this);if(n=void 0===n?e:n,"Array"==r)return c.call(this,t,n);for(var o=a(t,e),s=a(n,e),f=u(s-o),l=new Array(f),p=0;p<f;p++)l[p]="String"==r?this.charAt(o+p):this[o+p];return l}})},7667:function(t,n,e){"use strict";var r=e(4987),o=e(4733)(3);r(r.P+r.F*!e(6635)([].some,!0),"Array",{some:function(t){return o(this,t,arguments[1])}})},5534:function(t,n,e){"use strict";var r=e(4987),o=e(914),i=e(7167),a=e(3791),u=[].sort,c=[1,2,3];r(r.P+r.F*(a((function(){c.sort(void 0)}))||!a((function(){c.sort(null)}))||!e(6635)(u)),"Array",{sort:function(t){return void 0===t?u.call(i(this)):u.call(i(this),o(t))}})},5198:function(t,n,e){e(3640)("Array")},7549:function(t,n,e){var r=e(4987);r(r.S,"Date",{now:function(){return(new Date).getTime()}})},139:function(t,n,e){var r=e(4987),o=e(2374);r(r.P+r.F*(Date.prototype.toISOString!==o),"Date",{toISOString:o})},9784:function(t,n,e){"use strict";var r=e(4987),o=e(7167),i=e(8873);r(r.P+r.F*e(3791)((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})})),"Date",{toJSON:function(t){var n=o(this),e=i(n);return"number"!=typeof e||isFinite(e)?n.toISOString():null}})},2913:function(t,n,e){var r=e(142)("toPrimitive"),o=Date.prototype;r in o||e(2785)(o,r,e(2640))},3070:function(t,n,e){var r=Date.prototype,o="Invalid Date",i=r.toString,a=r.getTime;new Date(NaN)+""!=o&&e(1164)(r,"toString",(function(){var t=a.call(this);return t==t?i.call(this):o}))},9050:function(t,n,e){var r=e(4987);r(r.P,"Function",{bind:e(2764)})},3307:function(t,n,e){"use strict";var r=e(4675),o=e(7967),i=e(142)("hasInstance"),a=Function.prototype;i in a||e(4749).f(a,i,{value:function(t){if("function"!=typeof this||!r(t))return!1;if(!r(this.prototype))return t instanceof this;for(;t=o(t);)if(this.prototype===t)return!0;return!1}})},3452:function(t,n,e){var r=e(4749).f,o=Function.prototype,i=/^\s*function ([^ (]*)/,a="name";a in o||e(8305)&&r(o,a,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},1561:function(t,n,e){"use strict";var r=e(5415),o=e(4210),i="Map";t.exports=e(3700)(i,(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var n=r.getEntry(o(this,i),t);return n&&n.v},set:function(t,n){return r.def(o(this,i),0===t?0:t,n)}},r,!0)},7854:function(t,n,e){var r=e(4987),o=e(4384),i=Math.sqrt,a=Math.acosh;r(r.S+r.F*!(a&&710==Math.floor(a(Number.MAX_VALUE))&&a(1/0)==1/0),"Math",{acosh:function(t){return(t=+t)<1?NaN:t>94906265.62425156?Math.log(t)+Math.LN2:o(t-1+i(t-1)*i(t+1))}})},5474:function(t,n,e){var r=e(4987),o=Math.asinh;r(r.S+r.F*!(o&&1/o(0)>0),"Math",{asinh:function t(n){return isFinite(n=+n)&&0!=n?n<0?-t(-n):Math.log(n+Math.sqrt(n*n+1)):n}})},5085:function(t,n,e){var r=e(4987),o=Math.atanh;r(r.S+r.F*!(o&&1/o(-0)<0),"Math",{atanh:function(t){return 0==(t=+t)?t:Math.log((1+t)/(1-t))/2}})},1803:function(t,n,e){var r=e(4987),o=e(5056);r(r.S,"Math",{cbrt:function(t){return o(t=+t)*Math.pow(Math.abs(t),1/3)}})},9097:function(t,n,e){var r=e(4987);r(r.S,"Math",{clz32:function(t){return(t>>>=0)?31-Math.floor(Math.log(t+.5)*Math.LOG2E):32}})},8809:function(t,n,e){var r=e(4987),o=Math.exp;r(r.S,"Math",{cosh:function(t){return(o(t=+t)+o(-t))/2}})},824:function(t,n,e){var r=e(4987),o=e(693);r(r.S+r.F*(o!=Math.expm1),"Math",{expm1:o})},5454:function(t,n,e){var r=e(4987);r(r.S,"Math",{fround:e(4319)})},5130:function(t,n,e){var r=e(4987),o=Math.abs;r(r.S,"Math",{hypot:function(t,n){for(var e,r,i=0,a=0,u=arguments.length,c=0;a<u;)c<(e=o(arguments[a++]))?(i=i*(r=c/e)*r+1,c=e):i+=e>0?(r=e/c)*r:e;return c===1/0?1/0:c*Math.sqrt(i)}})},6894:function(t,n,e){var r=e(4987),o=Math.imul;r(r.S+r.F*e(3791)((function(){return-5!=o(4294967295,5)||2!=o.length})),"Math",{imul:function(t,n){var e=65535,r=+t,o=+n,i=e&r,a=e&o;return 0|i*a+((e&r>>>16)*a+i*(e&o>>>16)<<16>>>0)}})},3088:function(t,n,e){var r=e(4987);r(r.S,"Math",{log10:function(t){return Math.log(t)*Math.LOG10E}})},2123:function(t,n,e){var r=e(4987);r(r.S,"Math",{log1p:e(4384)})},8513:function(t,n,e){var r=e(4987);r(r.S,"Math",{log2:function(t){return Math.log(t)/Math.LN2}})},3263:function(t,n,e){var r=e(4987);r(r.S,"Math",{sign:e(5056)})},874:function(t,n,e){var r=e(4987),o=e(693),i=Math.exp;r(r.S+r.F*e(3791)((function(){return-2e-17!=!Math.sinh(-2e-17)})),"Math",{sinh:function(t){return Math.abs(t=+t)<1?(o(t)-o(-t))/2:(i(t-1)-i(-t-1))*(Math.E/2)}})},5349:function(t,n,e){var r=e(4987),o=e(693),i=Math.exp;r(r.S,"Math",{tanh:function(t){var n=o(t=+t),e=o(-t);return n==1/0?1:e==1/0?-1:(n-e)/(i(t)+i(-t))}})},7656:function(t,n,e){var r=e(4987);r(r.S,"Math",{trunc:function(t){return(t>0?Math.floor:Math.ceil)(t)}})},3951:function(t,n,e){"use strict";var r=e(6234),o=e(9476),i=e(6625),a=e(2984),u=e(8873),c=e(3791),s=e(4524).f,f=e(8428).f,l=e(4749).f,p=e(9225).trim,h="Number",d=r.Number,v=d,y=d.prototype,m=i(e(5627)(y))==h,g="trim"in String.prototype,b=function(t){var n=u(t,!1);if("string"==typeof n&&n.length>2){var e,r,o,i=(n=g?n.trim():p(n,3)).charCodeAt(0);if(43===i||45===i){if(88===(e=n.charCodeAt(2))||120===e)return NaN}else if(48===i){switch(n.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+n}for(var a,c=n.slice(2),s=0,f=c.length;s<f;s++)if((a=c.charCodeAt(s))<48||a>o)return NaN;return parseInt(c,r)}}return+n};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof d&&(m?c((function(){y.valueOf.call(e)})):i(e)!=h)?a(new v(b(n)),e,d):b(n)};for(var _,w=e(8305)?s(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;w.length>x;x++)o(v,_=w[x])&&!o(d,_)&&l(d,_,f(v,_));d.prototype=y,y.constructor=d,e(1164)(r,h,d)}},977:function(t,n,e){var r=e(4987);r(r.S,"Number",{EPSILON:Math.pow(2,-52)})},3559:function(t,n,e){var r=e(4987),o=e(6234).isFinite;r(r.S,"Number",{isFinite:function(t){return"number"==typeof t&&o(t)}})},3734:function(t,n,e){var r=e(4987);r(r.S,"Number",{isInteger:e(7615)})},3842:function(t,n,e){var r=e(4987);r(r.S,"Number",{isNaN:function(t){return t!=t}})},3535:function(t,n,e){var r=e(4987),o=e(7615),i=Math.abs;r(r.S,"Number",{isSafeInteger:function(t){return o(t)&&i(t)<=9007199254740991}})},2137:function(t,n,e){var r=e(4987);r(r.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},7571:function(t,n,e){var r=e(4987);r(r.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},766:function(t,n,e){var r=e(4987),o=e(6504);r(r.S+r.F*(Number.parseFloat!=o),"Number",{parseFloat:o})},7736:function(t,n,e){var r=e(4987),o=e(1874);r(r.S+r.F*(Number.parseInt!=o),"Number",{parseInt:o})},8262:function(t,n,e){"use strict";var r=e(4987),o=e(6042),i=e(5485),a=e(8240),u=1..toFixed,c=Math.floor,s=[0,0,0,0,0,0],f="Number.toFixed: incorrect invocation!",l="0",p=function(t,n){for(var e=-1,r=n;++e<6;)r+=t*s[e],s[e]=r%1e7,r=c(r/1e7)},h=function(t){for(var n=6,e=0;--n>=0;)e+=s[n],s[n]=c(e/t),e=e%t*1e7},d=function(){for(var t=6,n="";--t>=0;)if(""!==n||0===t||0!==s[t]){var e=String(s[t]);n=""===n?e:n+a.call(l,7-e.length)+e}return n},v=function t(n,e,r){return 0===e?r:e%2==1?t(n,e-1,r*n):t(n*n,e/2,r)};r(r.P+r.F*(!!u&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!e(3791)((function(){u.call({})}))),"Number",{toFixed:function(t){var n,e,r,u,c=i(this,f),s=o(t),y="",m=l;if(s<0||s>20)throw RangeError(f);if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(y="-",c=-c),c>1e-21)if(e=(n=function(t){for(var n=0,e=t;e>=4096;)n+=12,e/=4096;for(;e>=2;)n+=1,e/=2;return n}(c*v(2,69,1))-69)<0?c*v(2,-n,1):c/v(2,n,1),e*=4503599627370496,(n=52-n)>0){for(p(0,e),r=s;r>=7;)p(1e7,0),r-=7;for(p(v(10,r,1),0),r=n-1;r>=23;)h(1<<23),r-=23;h(1<<r),p(1,1),h(2),m=d()}else p(0,e),p(1<<-n,0),m=d()+a.call(l,s);return s>0?y+((u=m.length)<=s?"0."+a.call(l,s-u)+m:m.slice(0,u-s)+"."+m.slice(u-s)):y+m}})},2734:function(t,n,e){"use strict";var r=e(4987),o=e(3791),i=e(5485),a=1..toPrecision;r(r.P+r.F*(o((function(){return"1"!==a.call(1,void 0)}))||!o((function(){a.call({})}))),"Number",{toPrecision:function(t){var n=i(this,"Number#toPrecision: incorrect invocation!");return void 0===t?a.call(n):a.call(n,t)}})},7044:function(t,n,e){var r=e(4987);r(r.S+r.F,"Object",{assign:e(7789)})},6073:function(t,n,e){var r=e(4987);r(r.S,"Object",{create:e(5627)})},8411:function(t,n,e){var r=e(4987);r(r.S+r.F*!e(8305),"Object",{defineProperties:e(8315)})},4805:function(t,n,e){var r=e(4987);r(r.S+r.F*!e(8305),"Object",{defineProperty:e(4749).f})},8783:function(t,n,e){var r=e(4675),o=e(3970).onFreeze;e(4029)("freeze",(function(t){return function(n){return t&&r(n)?t(o(n)):n}}))},6043:function(t,n,e){var r=e(6936),o=e(8428).f;e(4029)("getOwnPropertyDescriptor",(function(){return function(t,n){return o(r(t),n)}}))},5854:function(t,n,e){e(4029)("getOwnPropertyNames",(function(){return e(395).f}))},3359:function(t,n,e){var r=e(7167),o=e(7967);e(4029)("getPrototypeOf",(function(){return function(t){return o(r(t))}}))},7553:function(t,n,e){var r=e(4675);e(4029)("isExtensible",(function(t){return function(n){return!!r(n)&&(!t||t(n))}}))},1162:function(t,n,e){var r=e(4675);e(4029)("isFrozen",(function(t){return function(n){return!r(n)||!!t&&t(n)}}))},5860:function(t,n,e){var r=e(4675);e(4029)("isSealed",(function(t){return function(n){return!r(n)||!!t&&t(n)}}))},9693:function(t,n,e){var r=e(4987);r(r.S,"Object",{is:e(5590)})},204:function(t,n,e){var r=e(7167),o=e(3230);e(4029)("keys",(function(){return function(t){return o(r(t))}}))},5548:function(t,n,e){var r=e(4675),o=e(3970).onFreeze;e(4029)("preventExtensions",(function(t){return function(n){return t&&r(n)?t(o(n)):n}}))},3699:function(t,n,e){var r=e(4675),o=e(3970).onFreeze;e(4029)("seal",(function(t){return function(n){return t&&r(n)?t(o(n)):n}}))},3851:function(t,n,e){var r=e(4987);r(r.S,"Object",{setPrototypeOf:e(5435).set})},9409:function(t,n,e){"use strict";var r=e(8151),o={};o[e(142)("toStringTag")]="z",o+""!="[object z]"&&e(1164)(Object.prototype,"toString",(function(){return"[object "+r(this)+"]"}),!0)},3384:function(t,n,e){var r=e(4987),o=e(6504);r(r.G+r.F*(parseFloat!=o),{parseFloat:o})},2548:function(t,n,e){var r=e(4987),o=e(1874);r(r.G+r.F*(parseInt!=o),{parseInt:o})},4055:function(t,n,e){"use strict";var r,o,i,a,u=e(2297),c=e(6234),s=e(5586),f=e(8151),l=e(4987),p=e(4675),h=e(914),d=e(5311),v=e(8958),y=e(3857),m=e(3712).set,g=e(1747)(),b=e(3274),_=e(1179),w=e(8123),x=e(7297),S="Promise",O=c.TypeError,E=c.process,A=E&&E.versions,C=A&&A.v8||"",j=c.Promise,k="process"==f(E),$=function(){},P=o=b.f,T=!!function(){try{var t=j.resolve(1),n=(t.constructor={})[e(142)("species")]=function(t){t($,$)};return(k||"function"==typeof PromiseRejectionEvent)&&t.then($)instanceof n&&0!==C.indexOf("6.6")&&-1===w.indexOf("Chrome/66")}catch(t){}}(),F=function(t){var n;return!(!p(t)||"function"!=typeof(n=t.then))&&n},M=function(t,n){if(!t._n){t._n=!0;var e=t._c;g((function(){for(var r=t._v,o=1==t._s,i=0,a=function(n){var e,i,a,u=o?n.ok:n.fail,c=n.resolve,s=n.reject,f=n.domain;try{u?(o||(2==t._h&&L(t),t._h=1),!0===u?e=r:(f&&f.enter(),e=u(r),f&&(f.exit(),a=!0)),e===n.promise?s(O("Promise-chain cycle")):(i=F(e))?i.call(e,c,s):c(e)):s(r)}catch(t){f&&!a&&f.exit(),s(t)}};e.length>i;)a(e[i++]);t._c=[],t._n=!1,n&&!t._h&&I(t)}))}},I=function(t){m.call(c,(function(){var n,e,r,o=t._v,i=N(t);if(i&&(n=_((function(){k?E.emit("unhandledRejection",o,t):(e=c.onunhandledrejection)?e({promise:t,reason:o}):(r=c.console)&&r.error&&r.error("Unhandled promise rejection",o)})),t._h=k||N(t)?2:1),t._a=void 0,i&&n.e)throw n.v}))},N=function(t){return 1!==t._h&&0===(t._a||t._c).length},L=function(t){m.call(c,(function(){var n;k?E.emit("rejectionHandled",t):(n=c.onrejectionhandled)&&n({promise:t,reason:t._v})}))},R=function(t){var n=this;n._d||(n._d=!0,(n=n._w||n)._v=t,n._s=2,n._a||(n._a=n._c.slice()),M(n,!0))},D=function t(n){var e,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===n)throw O("Promise can't be resolved itself");(e=F(n))?g((function(){var o={_w:r,_d:!1};try{e.call(n,s(t,o,1),s(R,o,1))}catch(t){R.call(o,t)}})):(r._v=n,r._s=1,M(r,!1))}catch(t){R.call({_w:r,_d:!1},t)}}};T||(j=function(t){d(this,j,S,"_h"),h(t),r.call(this);try{t(s(D,this,1),s(R,this,1))}catch(t){R.call(this,t)}},(r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=e(1062)(j.prototype,{then:function(t,n){var e=P(y(this,j));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=k?E.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&M(this,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=s(D,t,1),this.reject=s(R,t,1)},b.f=P=function(t){return t===j||t===a?new i(t):o(t)}),l(l.G+l.W+l.F*!T,{Promise:j}),e(8118)(j,S),e(3640)(S),a=e(2515).Promise,l(l.S+l.F*!T,S,{reject:function(t){var n=P(this);return(0,n.reject)(t),n.promise}}),l(l.S+l.F*(u||!T),S,{resolve:function(t){return x(u&&this===a?j:this,t)}}),l(l.S+l.F*!(T&&e(5297)((function(t){j.all(t).catch($)}))),S,{all:function(t){var n=this,e=P(n),r=e.resolve,o=e.reject,i=_((function(){var e=[],i=0,a=1;v(t,!1,(function(t){var u=i++,c=!1;e.push(void 0),a++,n.resolve(t).then((function(t){c||(c=!0,e[u]=t,--a||r(e))}),o)})),--a||r(e)}));return i.e&&o(i.v),e.promise},race:function(t){var n=this,e=P(n),r=e.reject,o=_((function(){v(t,!1,(function(t){n.resolve(t).then(e.resolve,r)}))}));return o.e&&r(o.v),e.promise}})},580:function(t,n,e){var r=e(4987),o=e(914),i=e(3568),a=(e(6234).Reflect||{}).apply,u=Function.apply;r(r.S+r.F*!e(3791)((function(){a((function(){}))})),"Reflect",{apply:function(t,n,e){var r=o(t),c=i(e);return a?a(r,n,c):u.call(r,n,c)}})},6561:function(t,n,e){var r=e(4987),o=e(5627),i=e(914),a=e(3568),u=e(4675),c=e(3791),s=e(2764),f=(e(6234).Reflect||{}).construct,l=c((function(){function t(){}return!(f((function(){}),[],t)instanceof t)})),p=!c((function(){f((function(){}))}));r(r.S+r.F*(l||p),"Reflect",{construct:function(t,n){i(t),a(n);var e=arguments.length<3?t:i(arguments[2]);if(p&&!l)return f(t,n,e);if(t==e){switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3])}var r=[null];return r.push.apply(r,n),new(s.apply(t,r))}var c=e.prototype,h=o(u(c)?c:Object.prototype),d=Function.apply.call(t,h,n);return u(d)?d:h}})},4654:function(t,n,e){var r=e(4749),o=e(4987),i=e(3568),a=e(8873);o(o.S+o.F*e(3791)((function(){Reflect.defineProperty(r.f({},1,{value:1}),1,{value:2})})),"Reflect",{defineProperty:function(t,n,e){i(t),n=a(n,!0),i(e);try{return r.f(t,n,e),!0}catch(t){return!1}}})},1135:function(t,n,e){var r=e(4987),o=e(8428).f,i=e(3568);r(r.S,"Reflect",{deleteProperty:function(t,n){var e=o(i(t),n);return!(e&&!e.configurable)&&delete t[n]}})},4507:function(t,n,e){"use strict";var r=e(4987),o=e(3568),i=function(t){this._t=o(t),this._i=0;var n,e=this._k=[];for(n in t)e.push(n)};e(2759)(i,"Object",(function(){var t,n=this,e=n._k;do{if(n._i>=e.length)return{value:void 0,done:!0}}while(!((t=e[n._i++])in n._t));return{value:t,done:!1}})),r(r.S,"Reflect",{enumerate:function(t){return new i(t)}})},5853:function(t,n,e){var r=e(8428),o=e(4987),i=e(3568);o(o.S,"Reflect",{getOwnPropertyDescriptor:function(t,n){return r.f(i(t),n)}})},2519:function(t,n,e){var r=e(4987),o=e(7967),i=e(3568);r(r.S,"Reflect",{getPrototypeOf:function(t){return o(i(t))}})},8192:function(t,n,e){var r=e(8428),o=e(7967),i=e(9476),a=e(4987),u=e(4675),c=e(3568);a(a.S,"Reflect",{get:function t(n,e){var a,s,f=arguments.length<3?n:arguments[2];return c(n)===f?n[e]:(a=r.f(n,e))?i(a,"value")?a.value:void 0!==a.get?a.get.call(f):void 0:u(s=o(n))?t(s,e,f):void 0}})},9018:function(t,n,e){var r=e(4987);r(r.S,"Reflect",{has:function(t,n){return n in t}})},3737:function(t,n,e){var r=e(4987),o=e(3568),i=Object.isExtensible;r(r.S,"Reflect",{isExtensible:function(t){return o(t),!i||i(t)}})},120:function(t,n,e){var r=e(4987);r(r.S,"Reflect",{ownKeys:e(6469)})},9074:function(t,n,e){var r=e(4987),o=e(3568),i=Object.preventExtensions;r(r.S,"Reflect",{preventExtensions:function(t){o(t);try{return i&&i(t),!0}catch(t){return!1}}})},5510:function(t,n,e){var r=e(4987),o=e(5435);o&&r(r.S,"Reflect",{setPrototypeOf:function(t,n){o.check(t,n);try{return o.set(t,n),!0}catch(t){return!1}}})},8891:function(t,n,e){var r=e(4749),o=e(8428),i=e(7967),a=e(9476),u=e(4987),c=e(9532),s=e(3568),f=e(4675);u(u.S,"Reflect",{set:function t(n,e,u){var l,p,h=arguments.length<4?n:arguments[3],d=o.f(s(n),e);if(!d){if(f(p=i(n)))return t(p,e,u,h);d=c(0)}if(a(d,"value")){if(!1===d.writable||!f(h))return!1;if(l=o.f(h,e)){if(l.get||l.set||!1===l.writable)return!1;l.value=u,r.f(h,e,l)}else r.f(h,e,c(0,u));return!0}return void 0!==d.set&&(d.set.call(h,u),!0)}})},236:function(t,n,e){var r=e(6234),o=e(2984),i=e(4749).f,a=e(4524).f,u=e(344),c=e(6614),s=r.RegExp,f=s,l=s.prototype,p=/a/g,h=/a/g,d=new s(p)!==p;if(e(8305)&&(!d||e(3791)((function(){return h[e(142)("match")]=!1,s(p)!=p||s(h)==h||"/a/i"!=s(p,"i")})))){s=function(t,n){var e=this instanceof s,r=u(t),i=void 0===n;return!e&&r&&t.constructor===s&&i?t:o(d?new f(r&&!i?t.source:t,n):f((r=t instanceof s)?t.source:t,r&&i?c.call(t):n),e?this:l,s)};for(var v=function(t){t in s||i(s,t,{configurable:!0,get:function(){return f[t]},set:function(n){f[t]=n}})},y=a(f),m=0;y.length>m;)v(y[m++]);l.constructor=s,s.prototype=l,e(1164)(r,"RegExp",s)}e(3640)("RegExp")},4121:function(t,n,e){"use strict";var r=e(9949);e(4987)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},5817:function(t,n,e){e(8305)&&"g"!=/./g.flags&&e(4749).f(RegExp.prototype,"flags",{configurable:!0,get:e(6614)})},4358:function(t,n,e){"use strict";var r=e(3568),o=e(8634),i=e(3661),a=e(8044);e(634)("match",1,(function(t,n,e,u){return[function(e){var r=t(this),o=null==e?void 0:e[n];return void 0!==o?o.call(e,r):new RegExp(e)[n](String(r))},function(t){var n=u(e,t,this);if(n.done)return n.value;var c=r(t),s=String(this);if(!c.global)return a(c,s);var f=c.unicode;c.lastIndex=0;for(var l,p=[],h=0;null!==(l=a(c,s));){var d=String(l[0]);p[h]=d,""===d&&(c.lastIndex=i(s,o(c.lastIndex),f)),h++}return 0===h?null:p}]}))},1753:function(t,n,e){"use strict";var r=e(3568),o=e(7167),i=e(8634),a=e(6042),u=e(3661),c=e(8044),s=Math.max,f=Math.min,l=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,h=/\$([$&`']|\d\d?)/g;e(634)("replace",2,(function(t,n,e,d){return[function(r,o){var i=t(this),a=null==r?void 0:r[n];return void 0!==a?a.call(r,i,o):e.call(String(i),r,o)},function(t,n){var o=d(e,t,this,n);if(o.done)return o.value;var l=r(t),p=String(this),h="function"==typeof n;h||(n=String(n));var y=l.global;if(y){var m=l.unicode;l.lastIndex=0}for(var g=[];;){var b=c(l,p);if(null===b)break;if(g.push(b),!y)break;""===String(b[0])&&(l.lastIndex=u(p,i(l.lastIndex),m))}for(var _,w="",x=0,S=0;S<g.length;S++){b=g[S];for(var O=String(b[0]),E=s(f(a(b.index),p.length),0),A=[],C=1;C<b.length;C++)A.push(void 0===(_=b[C])?_:String(_));var j=b.groups;if(h){var k=[O].concat(A,E,p);void 0!==j&&k.push(j);var $=String(n.apply(void 0,k))}else $=v(O,p,E,A,j,n);E>=x&&(w+=p.slice(x,E)+$,x=E+O.length)}return w+p.slice(x)}];function v(t,n,r,i,a,u){var c=r+t.length,s=i.length,f=h;return void 0!==a&&(a=o(a),f=p),e.call(u,f,(function(e,o){var u;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(c);case"<":u=a[o.slice(1,-1)];break;default:var f=+o;if(0===f)return e;if(f>s){var p=l(f/10);return 0===p?e:p<=s?void 0===i[p-1]?o.charAt(1):i[p-1]+o.charAt(1):e}u=i[f-1]}return void 0===u?"":u}))}}))},4836:function(t,n,e){"use strict";var r=e(3568),o=e(5590),i=e(8044);e(634)("search",1,(function(t,n,e,a){return[function(e){var r=t(this),o=null==e?void 0:e[n];return void 0!==o?o.call(e,r):new RegExp(e)[n](String(r))},function(t){var n=a(e,t,this);if(n.done)return n.value;var u=r(t),c=String(this),s=u.lastIndex;o(s,0)||(u.lastIndex=0);var f=i(u,c);return o(u.lastIndex,s)||(u.lastIndex=s),null===f?-1:f.index}]}))},5101:function(t,n,e){"use strict";var r=e(344),o=e(3568),i=e(3857),a=e(3661),u=e(8634),c=e(8044),s=e(9949),f=e(3791),l=Math.min,p=[].push,h=4294967295,d=!f((function(){RegExp(h,"y")}));e(634)("split",2,(function(t,n,e,f){var v;return v="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var o=String(this);if(void 0===t&&0===n)return[];if(!r(t))return e.call(o,t,n);for(var i,a,u,c=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),l=0,d=void 0===n?h:n>>>0,v=new RegExp(t.source,f+"g");(i=s.call(v,o))&&!((a=v.lastIndex)>l&&(c.push(o.slice(l,i.index)),i.length>1&&i.index<o.length&&p.apply(c,i.slice(1)),u=i[0].length,l=a,c.length>=d));)v.lastIndex===i.index&&v.lastIndex++;return l===o.length?!u&&v.test("")||c.push(""):c.push(o.slice(l)),c.length>d?c.slice(0,d):c}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,r){var o=t(this),i=null==e?void 0:e[n];return void 0!==i?i.call(e,o,r):v.call(String(o),e,r)},function(t,n){var r=f(v,t,this,n,v!==e);if(r.done)return r.value;var s=o(t),p=String(this),y=i(s,RegExp),m=s.unicode,g=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(d?"y":"g"),b=new y(d?s:"^(?:"+s.source+")",g),_=void 0===n?h:n>>>0;if(0===_)return[];if(0===p.length)return null===c(b,p)?[p]:[];for(var w=0,x=0,S=[];x<p.length;){b.lastIndex=d?x:0;var O,E=c(b,d?p:p.slice(x));if(null===E||(O=l(u(b.lastIndex+(d?0:x)),p.length))===w)x=a(p,x,m);else{if(S.push(p.slice(w,x)),S.length===_)return S;for(var A=1;A<=E.length-1;A++)if(S.push(E[A]),S.length===_)return S;x=w=O}}return S.push(p.slice(w)),S}]}))},3254:function(t,n,e){"use strict";e(5817);var r=e(3568),o=e(6614),i=e(8305),a="toString",u=/./.toString,c=function(t){e(1164)(RegExp.prototype,a,t,!0)};e(3791)((function(){return"/a/b"!=u.call({source:"a",flags:"b"})}))?c((function(){var t=r(this);return"/".concat(t.source,"/","flags"in t?t.flags:!i&&t instanceof RegExp?o.call(t):void 0)})):u.name!=a&&c((function(){return u.call(this)}))},3677:function(t,n,e){"use strict";var r=e(5415),o=e(4210);t.exports=e(3700)("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return r.def(o(this,"Set"),t=0===t?0:t,t)}},r)},789:function(t,n,e){"use strict";e(8431)("anchor",(function(t){return function(n){return t(this,"a","name",n)}}))},5766:function(t,n,e){"use strict";e(8431)("big",(function(t){return function(){return t(this,"big","","")}}))},8301:function(t,n,e){"use strict";e(8431)("blink",(function(t){return function(){return t(this,"blink","","")}}))},3696:function(t,n,e){"use strict";e(8431)("bold",(function(t){return function(){return t(this,"b","","")}}))},5909:function(t,n,e){"use strict";var r=e(4987),o=e(8422)(!1);r(r.P,"String",{codePointAt:function(t){return o(this,t)}})},9786:function(t,n,e){"use strict";var r=e(4987),o=e(8634),i=e(2643),a="endsWith",u="".endsWith;r(r.P+r.F*e(4934)(a),"String",{endsWith:function(t){var n=i(this,t,a),e=arguments.length>1?arguments[1]:void 0,r=o(n.length),c=void 0===e?r:Math.min(o(e),r),s=String(t);return u?u.call(n,s,c):n.slice(c-s.length,c)===s}})},8363:function(t,n,e){"use strict";e(8431)("fixed",(function(t){return function(){return t(this,"tt","","")}}))},4962:function(t,n,e){"use strict";e(8431)("fontcolor",(function(t){return function(n){return t(this,"font","color",n)}}))},2102:function(t,n,e){"use strict";e(8431)("fontsize",(function(t){return function(n){return t(this,"font","size",n)}}))},6519:function(t,n,e){var r=e(4987),o=e(4474),i=String.fromCharCode,a=String.fromCodePoint;r(r.S+r.F*(!!a&&1!=a.length),"String",{fromCodePoint:function(t){for(var n,e=[],r=arguments.length,a=0;r>a;){if(n=+arguments[a++],o(n,1114111)!==n)throw RangeError(n+" is not a valid code point");e.push(n<65536?i(n):i(55296+((n-=65536)>>10),n%1024+56320))}return e.join("")}})},3593:function(t,n,e){"use strict";var r=e(4987),o=e(2643),i="includes";r(r.P+r.F*e(4934)(i),"String",{includes:function(t){return!!~o(this,t,i).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},4830:function(t,n,e){"use strict";e(8431)("italics",(function(t){return function(){return t(this,"i","","")}}))},1474:function(t,n,e){"use strict";var r=e(8422)(!0);e(2283)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})}))},8177:function(t,n,e){"use strict";e(8431)("link",(function(t){return function(n){return t(this,"a","href",n)}}))},5460:function(t,n,e){var r=e(4987),o=e(6936),i=e(8634);r(r.S,"String",{raw:function(t){for(var n=o(t.raw),e=i(n.length),r=arguments.length,a=[],u=0;e>u;)a.push(String(n[u++])),u<r&&a.push(String(arguments[u]));return a.join("")}})},5309:function(t,n,e){var r=e(4987);r(r.P,"String",{repeat:e(8240)})},6269:function(t,n,e){"use strict";e(8431)("small",(function(t){return function(){return t(this,"small","","")}}))},6730:function(t,n,e){"use strict";var r=e(4987),o=e(8634),i=e(2643),a="startsWith",u="".startsWith;r(r.P+r.F*e(4934)(a),"String",{startsWith:function(t){var n=i(this,t,a),e=o(Math.min(arguments.length>1?arguments[1]:void 0,n.length)),r=String(t);return u?u.call(n,r,e):n.slice(e,e+r.length)===r}})},3617:function(t,n,e){"use strict";e(8431)("strike",(function(t){return function(){return t(this,"strike","","")}}))},1664:function(t,n,e){"use strict";e(8431)("sub",(function(t){return function(){return t(this,"sub","","")}}))},3185:function(t,n,e){"use strict";e(8431)("sup",(function(t){return function(){return t(this,"sup","","")}}))},9105:function(t,n,e){"use strict";e(9225)("trim",(function(t){return function(){return t(this,3)}}))},8786:function(t,n,e){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=e(6234),i=e(9476),a=e(8305),u=e(4987),c=e(1164),s=e(3970).KEY,f=e(3791),l=e(4267),p=e(8118),h=e(1870),d=e(142),v=e(5657),y=e(8029),m=e(6985),g=e(8386),b=e(3568),_=e(4675),w=e(7167),x=e(6936),S=e(8873),O=e(9532),E=e(5627),A=e(395),C=e(8428),j=e(5322),k=e(4749),$=e(3230),P=C.f,T=k.f,F=A.f,M=o.Symbol,I=o.JSON,N=I&&I.stringify,L=d("_hidden"),R=d("toPrimitive"),D={}.propertyIsEnumerable,U=l("symbol-registry"),G=l("symbols"),V=l("op-symbols"),W=Object.prototype,B="function"==typeof M&&!!j.f,H=o.QObject,z=!H||!H.prototype||!H.prototype.findChild,q=a&&f((function(){return 7!=E(T({},"a",{get:function(){return T(this,"a",{value:7}).a}})).a}))?function(t,n,e){var r=P(W,n);r&&delete W[n],T(t,n,e),r&&t!==W&&T(W,n,r)}:T,X=function(t){var n=G[t]=E(M.prototype);return n._k=t,n},K=B&&"symbol"==r(M.iterator)?function(t){return"symbol"==r(t)}:function(t){return t instanceof M},J=function(t,n,e){return t===W&&J(V,n,e),b(t),n=S(n,!0),b(e),i(G,n)?(e.enumerable?(i(t,L)&&t[L][n]&&(t[L][n]=!1),e=E(e,{enumerable:O(0,!1)})):(i(t,L)||T(t,L,O(1,{})),t[L][n]=!0),q(t,n,e)):T(t,n,e)},Y=function(t,n){b(t);for(var e,r=m(n=x(n)),o=0,i=r.length;i>o;)J(t,e=r[o++],n[e]);return t},Z=function(t){var n=D.call(this,t=S(t,!0));return!(this===W&&i(G,t)&&!i(V,t))&&(!(n||!i(this,t)||!i(G,t)||i(this,L)&&this[L][t])||n)},Q=function(t,n){if(t=x(t),n=S(n,!0),t!==W||!i(G,n)||i(V,n)){var e=P(t,n);return!e||!i(G,n)||i(t,L)&&t[L][n]||(e.enumerable=!0),e}},tt=function(t){for(var n,e=F(x(t)),r=[],o=0;e.length>o;)i(G,n=e[o++])||n==L||n==s||r.push(n);return r},nt=function(t){for(var n,e=t===W,r=F(e?V:x(t)),o=[],a=0;r.length>a;)!i(G,n=r[a++])||e&&!i(W,n)||o.push(G[n]);return o};B||(c((M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor!");var t=h(arguments.length>0?arguments[0]:void 0),n=function n(e){this===W&&n.call(V,e),i(this,L)&&i(this[L],t)&&(this[L][t]=!1),q(this,t,O(1,e))};return a&&z&&q(W,t,{configurable:!0,set:n}),X(t)}).prototype,"toString",(function(){return this._k})),C.f=Q,k.f=J,e(4524).f=A.f=tt,e(9449).f=Z,j.f=nt,a&&!e(2297)&&c(W,"propertyIsEnumerable",Z,!0),v.f=function(t){return X(d(t))}),u(u.G+u.W+u.F*!B,{Symbol:M});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),rt=0;et.length>rt;)d(et[rt++]);for(var ot=$(d.store),it=0;ot.length>it;)y(ot[it++]);u(u.S+u.F*!B,"Symbol",{for:function(t){return i(U,t+="")?U[t]:U[t]=M(t)},keyFor:function(t){if(!K(t))throw TypeError(t+" is not a symbol!");for(var n in U)if(U[n]===t)return n},useSetter:function(){z=!0},useSimple:function(){z=!1}}),u(u.S+u.F*!B,"Object",{create:function(t,n){return void 0===n?E(t):Y(E(t),n)},defineProperty:J,defineProperties:Y,getOwnPropertyDescriptor:Q,getOwnPropertyNames:tt,getOwnPropertySymbols:nt});var at=f((function(){j.f(1)}));u(u.S+u.F*at,"Object",{getOwnPropertySymbols:function(t){return j.f(w(t))}}),I&&u(u.S+u.F*(!B||f((function(){var t=M();return"[null]"!=N([t])||"{}"!=N({a:t})||"{}"!=N(Object(t))}))),"JSON",{stringify:function(t){for(var n,e,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(e=n=r[1],(_(n)||void 0!==t)&&!K(t))return g(n)||(n=function(t,n){if("function"==typeof e&&(n=e.call(this,t,n)),!K(n))return n}),r[1]=n,N.apply(I,r)}}),M.prototype[R]||e(2785)(M.prototype,R,M.prototype.valueOf),p(M,"Symbol"),p(Math,"Math",!0),p(o.JSON,"JSON",!0)},2211:function(t,n,e){"use strict";var r=e(4987),o=e(9814),i=e(5535),a=e(3568),u=e(4474),c=e(8634),s=e(4675),f=e(6234).ArrayBuffer,l=e(3857),p=i.ArrayBuffer,h=i.DataView,d=o.ABV&&f.isView,v=p.prototype.slice,y=o.VIEW,m="ArrayBuffer";r(r.G+r.W+r.F*(f!==p),{ArrayBuffer:p}),r(r.S+r.F*!o.CONSTR,m,{isView:function(t){return d&&d(t)||s(t)&&y in t}}),r(r.P+r.U+r.F*e(3791)((function(){return!new p(2).slice(1,void 0).byteLength})),m,{slice:function(t,n){if(void 0!==v&&void 0===n)return v.call(a(this),t);for(var e=a(this).byteLength,r=u(t,e),o=u(void 0===n?e:n,e),i=new(l(this,p))(c(o-r)),s=new h(this),f=new h(i),d=0;r<o;)f.setUint8(d++,s.getUint8(r++));return i}}),e(3640)(m)},1597:function(t,n,e){var r=e(4987);r(r.G+r.W+r.F*!e(9814).ABV,{DataView:e(5535).DataView})},6315:function(t,n,e){e(3564)("Float32",4,(function(t){return function(n,e,r){return t(this,n,e,r)}}))},1853:function(t,n,e){e(3564)("Float64",8,(function(t){return function(n,e,r){return t(this,n,e,r)}}))},2789:function(t,n,e){e(3564)("Int16",2,(function(t){return function(n,e,r){return t(this,n,e,r)}}))},9787:function(t,n,e){e(3564)("Int32",4,(function(t){return function(n,e,r){return t(this,n,e,r)}}))},4222:function(t,n,e){e(3564)("Int8",1,(function(t){return function(n,e,r){return t(this,n,e,r)}}))},5857:function(t,n,e){e(3564)("Uint16",2,(function(t){return function(n,e,r){return t(this,n,e,r)}}))},6578:function(t,n,e){e(3564)("Uint32",4,(function(t){return function(n,e,r){return t(this,n,e,r)}}))},8923:function(t,n,e){e(3564)("Uint8",1,(function(t){return function(n,e,r){return t(this,n,e,r)}}))},7438:function(t,n,e){e(3564)("Uint8",1,(function(t){return function(n,e,r){return t(this,n,e,r)}}),!0)},8072:function(t,n,e){"use strict";var r,o=e(6234),i=e(4733)(0),a=e(1164),u=e(3970),c=e(7789),s=e(6666),f=e(4675),l=e(4210),p=e(4210),h=!o.ActiveXObject&&"ActiveXObject"in o,d="WeakMap",v=u.getWeak,y=Object.isExtensible,m=s.ufstore,g=function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},b={get:function(t){if(f(t)){var n=v(t);return!0===n?m(l(this,d)).get(t):n?n[this._i]:void 0}},set:function(t,n){return s.def(l(this,d),t,n)}},_=t.exports=e(3700)(d,g,b,s,!0,!0);p&&h&&(c((r=s.getConstructor(g,d)).prototype,b),u.NEED=!0,i(["delete","has","get","set"],(function(t){var n=_.prototype,e=n[t];a(n,t,(function(n,o){if(f(n)&&!y(n)){this._f||(this._f=new r);var i=this._f[t](n,o);return"set"==t?this:i}return e.call(this,n,o)}))})))},8048:function(t,n,e){"use strict";var r=e(6666),o=e(4210),i="WeakSet";e(3700)(i,(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return r.def(o(this,i),t,!0)}},r,!1,!0)},3447:function(t,n,e){"use strict";var r=e(4987),o=e(5410),i=e(7167),a=e(8634),u=e(914),c=e(584);r(r.P,"Array",{flatMap:function(t){var n,e,r=i(this);return u(t),n=a(r.length),e=c(r,0),o(e,r,r,n,0,1,t,arguments[1]),e}}),e(5173)("flatMap")},7303:function(t,n,e){"use strict";var r=e(4987),o=e(1516)(!0);r(r.P,"Array",{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),e(5173)("includes")},3046:function(t,n,e){var r=e(4987),o=e(1268)(!0);r(r.S,"Object",{entries:function(t){return o(t)}})},6949:function(t,n,e){var r=e(4987),o=e(6469),i=e(6936),a=e(8428),u=e(5185);r(r.S,"Object",{getOwnPropertyDescriptors:function(t){for(var n,e,r=i(t),c=a.f,s=o(r),f={},l=0;s.length>l;)void 0!==(e=c(r,n=s[l++]))&&u(f,n,e);return f}})},1421:function(t,n,e){var r=e(4987),o=e(1268)(!1);r(r.S,"Object",{values:function(t){return o(t)}})},7695:function(t,n,e){"use strict";var r=e(4987),o=e(2515),i=e(6234),a=e(3857),u=e(7297);r(r.P+r.R,"Promise",{finally:function(t){var n=a(this,o.Promise||i.Promise),e="function"==typeof t;return this.then(e?function(e){return u(n,t()).then((function(){return e}))}:t,e?function(e){return u(n,t()).then((function(){throw e}))}:t)}})},1940:function(t,n,e){"use strict";var r=e(4987),o=e(9042),i=e(8123),a=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);r(r.P+r.F*a,"String",{padEnd:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0,!1)}})},4068:function(t,n,e){"use strict";var r=e(4987),o=e(9042),i=e(8123),a=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);r(r.P+r.F*a,"String",{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},6027:function(t,n,e){"use strict";e(9225)("trimLeft",(function(t){return function(){return t(this,1)}}),"trimStart")},5134:function(t,n,e){"use strict";e(9225)("trimRight",(function(t){return function(){return t(this,2)}}),"trimEnd")},6459:function(t,n,e){e(8029)("asyncIterator")},8390:function(t,n,e){for(var r=e(7352),o=e(3230),i=e(1164),a=e(6234),u=e(2785),c=e(5029),s=e(142),f=s("iterator"),l=s("toStringTag"),p=c.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},d=o(h),v=0;v<d.length;v++){var y,m=d[v],g=h[m],b=a[m],_=b&&b.prototype;if(_&&(_[f]||u(_,f,p),_[l]||u(_,l,m),c[m]=p,g))for(y in r)_[y]||i(_,y,r[y],!0)}},5453:function(t,n,e){var r=e(4987),o=e(3712);r(r.G+r.B,{setImmediate:o.set,clearImmediate:o.clear})},6587:function(t,n,e){var r=e(6234),o=e(4987),i=e(8123),a=[].slice,u=/MSIE .\./.test(i),c=function(t){return function(n,e){var r=arguments.length>2,o=!!r&&a.call(arguments,2);return t(r?function(){("function"==typeof n?n:Function(n)).apply(this,o)}:n,e)}};o(o.G+o.B+o.F*u,{setTimeout:c(r.setTimeout),setInterval:c(r.setInterval)})},4115:function(t,n,e){e(6587),e(5453),e(8390),t.exports=e(2515)},7450:function(t,n,e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=function(t){"use strict";var n,e=Object.prototype,o=e.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{s({},"")}catch(t){s=function(t,n,e){return t[n]=e}}function f(t,n,e,r){var o=n&&n.prototype instanceof m?n:m,i=Object.create(o.prototype),a=new k(r||[]);return i._invoke=function(t,n,e){var r=p;return function(o,i){if(r===d)throw new Error("Generator is already running");if(r===v){if("throw"===o)throw i;return P()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var u=A(a,e);if(u){if(u===y)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(r===p)throw r=v,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r=d;var c=l(t,n,e);if("normal"===c.type){if(r=e.done?v:h,c.arg===y)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(r=v,e.method="throw",e.arg=c.arg)}}}(t,e,a),i}function l(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var p="suspendedStart",h="suspendedYield",d="executing",v="completed",y={};function m(){}function g(){}function b(){}var _={};_[a]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w($([])));x&&x!==e&&o.call(x,a)&&(_=x);var S=b.prototype=m.prototype=Object.create(_);function O(t){["next","throw","return"].forEach((function(n){s(t,n,(function(t){return this._invoke(n,t)}))}))}function E(t,n){function e(i,a,u,c){var s=l(t[i],t,a);if("throw"!==s.type){var f=s.arg,p=f.value;return p&&"object"===r(p)&&o.call(p,"__await")?n.resolve(p.__await).then((function(t){e("next",t,u,c)}),(function(t){e("throw",t,u,c)})):n.resolve(p).then((function(t){f.value=t,u(f)}),(function(t){return e("throw",t,u,c)}))}c(s.arg)}var i;this._invoke=function(t,r){function o(){return new n((function(n,o){e(t,r,n,o)}))}return i=i?i.then(o,o):o()}}function A(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,A(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=l(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function C(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function j(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function $(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:P}}function P(){return{value:n,done:!0}}return g.prototype=S.constructor=b,b.constructor=g,g.displayName=s(b,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===g||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,c,"GeneratorFunction")),t.prototype=Object.create(S),t},t.awrap=function(t){return{__await:t}},O(E.prototype),E.prototype[u]=function(){return this},t.AsyncIterator=E,t.async=function(n,e,r,o,i){void 0===i&&(i=Promise);var a=new E(f(n,e,r,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(S),s(S,c,"Generator"),S[a]=function(){return this},S.toString=function(){return"[object Generator]"},t.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=$,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return u.type="throw",u.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),y},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),j(e),y}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;j(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:$(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),y}},t}("object"===r(t=e.nmd(t))?t.exports:{});try{regeneratorRuntime=o}catch(t){Function("r","regeneratorRuntime = r")(o)}},7027:function(t,n,e){var r,o,i,a;function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t=e.nmd(t),"undefined"!=typeof self&&self,a=function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==u(t)&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=10)}([function(t,n){t.exports=function(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}},function(t,n){function e(t){return(e="function"==typeof Symbol&&"symbol"==u(Symbol.iterator)?function(t){return u(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":u(t)})(t)}function r(n){return"function"==typeof Symbol&&"symbol"===e(Symbol.iterator)?t.exports=r=function(t){return e(t)}:t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":e(t)},r(n)}t.exports=r},function(t,n,e){t.exports=e(16)},function(t,n,e){var r=e(0);t.exports=function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},o=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})))),o.forEach((function(n){r(t,n,e[n])}))}return t}},function(t,n,e){var r=e(12),o=e(13),i=e(14);t.exports=function(t){return r(t)||o(t)||i()}},function(t,n){function e(t,n,e,r,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void e(t)}u.done?n(c):Promise.resolve(c).then(r,o)}t.exports=function(t){return function(){var n=this,r=arguments;return new Promise((function(o,i){var a=t.apply(n,r);function u(t){e(a,o,i,u,c,"next",t)}function c(t){e(a,o,i,u,c,"throw",t)}u(void 0)}))}}},function(t,n){t.exports=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},function(t,n){function e(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}},function(t,n,e){var r=e(11);t.exports=function(t,n){if(null==t)return{};var e,o,i=r(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)e=a[o],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}},function(t,n,e){var r=e(17),o=e(18),i=e(19);t.exports=function(t,n){return r(t)||o(t,n)||i()}},function(t,n,e){t.exports=e(20)},function(t,n){t.exports=function(t,n){if(null==t)return{};var e,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}},function(t,n){t.exports=function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}},function(t,n){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},function(t,n){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(t,n,e){"use strict";var r=/[|\\{}()[\]^$+*?.]/g;t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(r,"\\$&")}},function(t,n,e){var r=function(t){"use strict";var n,e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,n,e,r){var o=n&&n.prototype instanceof y?n:y,i=Object.create(o.prototype),a=new j(r||[]);return i._invoke=function(t,n,e){var r=l;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return $()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var u=E(a,e);if(u){if(u===v)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(r===l)throw r=d,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r=h;var c=f(t,n,e);if("normal"===c.type){if(r=e.done?d:p,c.arg===v)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(r=d,e.method="throw",e.arg=c.arg)}}}(t,e,a),i}function f(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var l="suspendedStart",p="suspendedYield",h="executing",d="completed",v={};function y(){}function m(){}function g(){}var b={};b[i]=function(){return this};var _=Object.getPrototypeOf,w=_&&_(_(k([])));w&&w!==e&&r.call(w,i)&&(b=w);var x=g.prototype=y.prototype=Object.create(b);function S(t){["next","throw","return"].forEach((function(n){t[n]=function(t){return this._invoke(n,t)}}))}function O(t){var n;this._invoke=function(e,o){function i(){return new Promise((function(n,i){!function n(e,o,i,a){var c=f(t[e],t,o);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"==u(l)&&r.call(l,"__await")?Promise.resolve(l.__await).then((function(t){n("next",t,i,a)}),(function(t){n("throw",t,i,a)})):Promise.resolve(l).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,a)}))}a(c.arg)}(e,o,n,i)}))}return n=n?n.then(i,i):i()}}function E(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,E(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function A(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function C(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function k(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(r.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}return{next:$}}function $(){return{value:n,done:!0}}return m.prototype=x.constructor=g,g.constructor=m,g[c]=m.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===m||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},S(O.prototype),O.prototype[a]=function(){return this},t.AsyncIterator=O,t.async=function(n,e,r,o){var i=new O(s(n,e,r,o));return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},S(x),x[c]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=k,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(r,o){return u.type="throw",u.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),v},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),C(e),v}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;C(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},function(t,n){t.exports=function(t){if(Array.isArray(t))return t}},function(t,n){t.exports=function(t,n){var e=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(e.push(a.value),!n||e.length!==n);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return e}},function(t,n){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(t,n,e){"use strict";e.r(n);var r=e(3),o=e.n(r),i=e(6),a=e.n(i),u=e(7),c=e.n(u),s=e(1),f=e.n(s),l=e(8),p=e.n(l),h=e(0),d=e.n(h),v=e(4),y=e.n(v),m=e(15),g=new Map;function b(t){var n=function(t,n){if("object"!==f()(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!==f()(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===f()(n)?n:String(n)}function _(t){return t.filter((function(t,n,e){return n==e.indexOf(t)}))}function w(t,n){return"string"==typeof n&&n.match(/[\*\!]/)?t.filter((function(t){return function(t,n,e){var r=function(t,n){var e=Object.assign({caseSensitive:!1},undefined),r=t+JSON.stringify(e);if(g.has(r))return g.get(r);var o="!"===t[0];o&&(t=t.slice(1)),t=m(t).replace(/\\\*/g,".*");var i=new RegExp("^".concat(t,"$"),e.caseSensitive?"":"i");return i.negated=o,g.set(r,i),i}(n),o=r.test(t);return r.negated?!o:o}(t,n)})).length>0:Array.isArray(n)?n.some((function(n){return w(t,n)})):t.includes(n)}function x(t){return t.length>0}function S(t,n){return _([].concat(y()(t),[n]))}function O(t,n){return _(t).filter((function(t){return t!==n}))}function E(t,n,e){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:100;return e>r?A(t,n):o()({},t,d()({},n,{current:e,total:r,percent:100*e/r}))}function A(t,n){return t[n],p()(t,[n].map(b))}function C(t,n){var e=t[n];return e?e.percent:0}var j,k=e(2),$=e.n(k),P=e(5),T=e.n(P),F=e(9),M=e.n(F);function I(t,n){var e={};"object"===f()(t)&&(n=t,t=null);for(var r=Array.isArray(n),o=function(){var n=M()(a[i],2),o=n[0],u=n[1],c=void 0,s=void 0,f=void 0;u===Object(u)?(r?(c=u.action,void 0!==u.method&&(c=u.method)):c=o,s=u.action,f=u.loader):r?(c=s=u,f=u):(c=s=o,f=u),f||(f=s),s&&(e[c]=T()($.a.mark((function n(){var e,r,o,i,a=arguments;return $.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for(n.prev=0,this.__$waitInstance.start(f),r=a.length,o=new Array(r),i=0;i<r;i++)o[i]=a[i];return n.next=5,(e=this.$store).dispatch.apply(e,[t?"".concat(t,"/").concat(s):s].concat(o));case 5:return n.abrupt("return",n.sent);case 6:return n.prev=6,this.__$waitInstance.end(f),n.finish(6);case 9:case"end":return n.stop()}}),n,this,[[0,,6,9]])}))))},i=0,a=Object.entries(n);i<a.length;i++)o();return e}function N(t){var n={};return Object.keys(t).forEach((function(e){var r=t[e];n[e]=function(){return this.__$waitInstance.is(r)}})),n}function L(t,n){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return"function"!=typeof n?(console.warn("[vue-wait] waitFor second argument must be a function"),n):!0===e?function(){try{this.__$waitInstance.start(t);for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return n.apply(this,r)}finally{this.__$waitInstance.end(t)}}:T()($.a.mark((function e(){var r,o,i,a=arguments;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(e.prev=0,this.__$waitInstance.start(t),r=a.length,o=new Array(r),i=0;i<r;i++)o[i]=a[i];return e.next=5,n.apply(this,o);case 5:return e.abrupt("return",e.sent);case 6:return e.prev=6,this.__$waitInstance.end(t),e.finish(6);case 9:case"end":return e.stop()}}),e,this,[[0,,6,9]])})))}var R="START",D="PROGRESS",U={namespaced:!0,state:{waitingFor:[],progresses:{}},getters:{is:function(t){return function(n){return w(t.waitingFor,n)}},any:function(t){return x(t.waitingFor)},percent:function(t){return function(n){return C(t.progresses,n)}}},actions:{start:function(t,n){return(0,t.commit)(R,n)},end:function(t,n){return(0,t.commit)("END",n)},progress:function(t,n){return(0,t.commit)(D,n)}},mutations:(j={},d()(j,R,(function(t,n){t.waitingFor=S(t.waitingFor,n)})),d()(j,"END",(function(t,n){t.waitingFor=O(t.waitingFor,n),t.progresses=A(t.progresses,n)})),d()(j,D,(function(t,n){var e=n.waiter,r=n.current,o=n.total;t.progresses=E(t.progresses,e,r,o)})),j)},G=function(t,n,e,r,o,i,a,u){var c="function"==typeof t?t.options:t;return n&&(c.render=n,c.staticRenderFns=[],c._compiled=!0),{exports:t,options:c}}({props:{visible:Boolean,for:[String,Array],message:String,transition:String,duration:Number,mode:{type:String,default:"out-in"},enterClass:{type:String,default:"enter"},enterActiveClass:{type:String,default:"enter-active"},enterToClass:{type:String,default:"enter-to"},leaveClass:{type:String,default:"leave"},leaveActiveClass:{type:String,default:"leave-active"},leaveToClass:{type:String,default:"leave-to"}},methods:{transitionClass:function(t){return"".concat(this.transition,"-").concat(t)}},computed:{waitsFor:function(){return this.visible?this.visible:this.for?this.__$waitInstance.is(this.for):this.__$waitInstance.any}}},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.transition?e("transition",{attrs:{name:t.transition,mode:t.mode,duration:t.duration,"enter-class":t.transitionClass(t.enterClass),"enter-active-class":t.transitionClass(t.enterActiveClass),"enter-to-class":t.transitionClass(t.enterToClass),"leave-class":t.transitionClass(t.leaveClass),"leave-active-class":t.transitionClass(t.leaveActiveClass),"leave-to-class":t.transitionClass(t.leaveToClass)},on:{beforeEnter:function(n){return t.$emit("beforeEnter")},enter:function(n){return t.$emit("enter")},afterAnter:function(n){return t.$emit("afterEnter")},enterCancelled:function(n){return t.$emit("enterCancelled")},beforeLeave:function(n){return t.$emit("beforeLeave")},leave:function(n){return t.$emit("leave")},afterLeave:function(n){return t.$emit("afterLeave")},leaveCancelled:function(n){return t.$emit("leaveCancelled")}}},[t.waitsFor?e("span",[t._t("waiting"),t._v(" "),t.message?e("span",[t._v(t._s(t.message))]):t._e()],2):e("div",[t._t("default")],2)]):e("div",[t.waitsFor?e("span",[t._t("waiting"),t._v(" "),t.message?e("span",[t._v(t._s(t.message))]):t._e()],2):t._t("default")],2)})).exports;function V(t,n,e,r){var o=n.arg,i=n.modifiers,a=n.value,u=e.context.__$waitInstance.is(a);(i.not||["hidden","enabled"].includes(o))&&(u=!u);var c="none"===t.style.display?"":t.style.display;switch(o){case"visible":case"hidden":t.style.display=u?c:"none";break;case"enabled":case"disabled":u?t.setAttribute("disabled",!0):t.removeAttribute("disabled")}}var W={bind:function(t,n,e,r){var o=n.arg,i=n.modifiers,a=n.value,u=e.context.__$waitInstance;switch(o){case"click":if(i.start){t.addEventListener("click",(function(){return u.start(a)}),!1);break}if(i.end){t.addEventListener("click",(function(){return u.end(a)}),!1);break}if(i.progress){t.addEventListener("click",(function(){return u.progress.apply(u,y()(a))}),!1);break}break;case"toggle":t.addEventListener("click",(function(){u.is(a)?u.end(a):u.start(a)}),!1)}V(t,n,e)},update:V};e.d(n,"default",(function(){return B})),e.d(n,"install",(function(){return H})),e.d(n,"mapWaitingActions",(function(){return I})),e.d(n,"mapWaitingGetters",(function(){return N})),e.d(n,"waitFor",(function(){return L}));var B=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a()(this,t),this.options=o()({},{accessorName:"$wait",useVuex:!1,vuexModuleName:"wait",registerComponent:!0,componentName:"v-wait",registerDirective:!0,directiveName:"wait"},n),this.initialized=!1}return c()(t,[{key:"init",value:function(t,n){if(!this.initialized){if(this.options.registerComponent&&t.component(this.options.componentName,G),this.options.registerDirective&&t.directive(this.options.directiveName,W),this.options.useVuex){var e=this.options.vuexModuleName;if(!n)throw new Error("[vue-wait] Vuex not initialized.");this.store=n,n._modules.get([e])||n.registerModule(e,U),this.stateHandler=new t({computed:{is:function(){return function(t){return n.getters["".concat(e,"/is")](t)}},any:function(){return n.getters["".concat(e,"/any")]},percent:function(){return function(t){return n.getters["".concat(e,"/percent")](t)}}}})}else this.stateHandler=new t({data:function(){return{waitingFor:[],progresses:{}}},computed:{is:function(){var t=this;return function(n){return w(t.waitingFor,n)}},any:function(){return x(this.waitingFor)},percent:function(){var t=this;return function(n){return C(t.progresses,n)}}},methods:{start:function(t){this.waitingFor=S(this.waitingFor,t)},end:function(t){this.waitingFor=O(this.waitingFor,t),this.progresses=A(this.progresses,t)},progress:function(t){var n=t.waiter,e=t.current,r=t.total;this.progresses=E(this.progresses,n,e,r)}}});this.initialized=!0}}},{key:"is",value:function(t){return this.stateHandler.is(t)}},{key:"waiting",value:function(t){return this.is(t)}},{key:"percent",value:function(t){return this.stateHandler.percent(t)}},{key:"dispatchWaitingAction",value:function(t,n){var e=this.options.vuexModuleName;this.store.dispatch("".concat(e,"/").concat(t),n,{root:!0})}},{key:"start",value:function(t){this.options.useVuex?this.dispatchWaitingAction("start",t):this.stateHandler.start(t)}},{key:"end",value:function(t){this.options.useVuex?this.dispatchWaitingAction("end",t):this.stateHandler.end(t)}},{key:"progress",value:function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;this.is(t)||this.start(t),n>e?this.end(t):this.options.useVuex?this.dispatchWaitingAction("progress",{waiter:t,current:n,total:e}):this.stateHandler.progress({waiter:t,current:n,total:e})}},{key:"any",get:function(){return this.stateHandler.any}}]),t}();function H(t){H.installed&&t||(t.mixin({beforeCreate:function(){var n=this.$options,e=n.wait,r=n.store,o=n.parent,i=null;e?(i="function"==typeof e?new e:e).init(t,r):o&&o.__$waitInstance&&(i=o.__$waitInstance).init(t,o.$store),i&&(this.__$waitInstance=i,this[i.options.accessorName]=i)}}),H.installed=!0)}B.install=H}])},"object"==u(n)&&"object"==u(t)?t.exports=a():(o=[],void 0===(i="function"==typeof(r=a)?r.apply(n,o):r)||(t.exports=i))},6608:function(){}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,loaded:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t},function(){"use strict";e(6193);var t,n=(t=e(3959))&&t.__esModule?t:{default:t};n.default._babelPolyfill&&"undefined"!=typeof console&&console.warn&&console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended and may have consequences if different versions of the polyfills are applied sequentially. If you do need to load the polyfill more than once, use @babel/polyfill/noConflict instead to bypass the warning."),n.default._babelPolyfill=!0}(),function(){"use strict";function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(n)}var n=Object.freeze({});function r(t){return null==t}function o(t){return null!=t}function i(t){return!0===t}function a(n){return"string"==typeof n||"number"==typeof n||"symbol"===t(n)||"boolean"==typeof n}function u(n){return null!==n&&"object"===t(n)}var c=Object.prototype.toString;function s(t){return"[object Object]"===c.call(t)}function f(t){var n=parseFloat(String(t));return n>=0&&Math.floor(n)===n&&isFinite(t)}function l(t){return o(t)&&"function"==typeof t.then&&"function"==typeof t.catch}function p(t){return null==t?"":Array.isArray(t)||s(t)&&t.toString===c?JSON.stringify(t,null,2):String(t)}function h(t){var n=parseFloat(t);return isNaN(n)?t:n}function d(t,n){for(var e=Object.create(null),r=t.split(","),o=0;o<r.length;o++)e[r[o]]=!0;return n?function(t){return e[t.toLowerCase()]}:function(t){return e[t]}}d("slot,component",!0);var v=d("key,ref,slot,slot-scope,is");function y(t,n){if(t.length){var e=t.indexOf(n);if(e>-1)return t.splice(e,1)}}var m=Object.prototype.hasOwnProperty;function g(t,n){return m.call(t,n)}function b(t){var n=Object.create(null);return function(e){return n[e]||(n[e]=t(e))}}var _=/-(\w)/g,w=b((function(t){return t.replace(_,(function(t,n){return n?n.toUpperCase():""}))})),x=b((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})),S=/\B([A-Z])/g,O=b((function(t){return t.replace(S,"-$1").toLowerCase()})),E=Function.prototype.bind?function(t,n){return t.bind(n)}:function(t,n){function e(e){var r=arguments.length;return r?r>1?t.apply(n,arguments):t.call(n,e):t.call(n)}return e._length=t.length,e};function A(t,n){n=n||0;for(var e=t.length-n,r=new Array(e);e--;)r[e]=t[e+n];return r}function C(t,n){for(var e in n)t[e]=n[e];return t}function j(t){for(var n={},e=0;e<t.length;e++)t[e]&&C(n,t[e]);return n}function k(t,n,e){}var $=function(t,n,e){return!1},P=function(t){return t};function T(t,n){if(t===n)return!0;var e=u(t),r=u(n);if(!e||!r)return!e&&!r&&String(t)===String(n);try{var o=Array.isArray(t),i=Array.isArray(n);if(o&&i)return t.length===n.length&&t.every((function(t,e){return T(t,n[e])}));if(t instanceof Date&&n instanceof Date)return t.getTime()===n.getTime();if(o||i)return!1;var a=Object.keys(t),c=Object.keys(n);return a.length===c.length&&a.every((function(e){return T(t[e],n[e])}))}catch(t){return!1}}function F(t,n){for(var e=0;e<t.length;e++)if(T(t[e],n))return e;return-1}function M(t){var n=!1;return function(){n||(n=!0,t.apply(this,arguments))}}var I="data-server-rendered",N=["component","directive","filter"],L=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],R={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:$,isReservedAttr:$,isUnknownElement:$,getTagNamespace:k,parsePlatformTagName:P,mustUseProp:$,async:!0,_lifecycleHooks:L};function D(t,n,e,r){Object.defineProperty(t,n,{value:e,enumerable:!!r,writable:!0,configurable:!0})}var U,G=new RegExp("[^"+/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/.source+".$_\\d]"),V="__proto__"in{},W="undefined"!=typeof window,B="undefined"!=typeof WXEnvironment&&!!WXEnvironment.platform,H=B&&WXEnvironment.platform.toLowerCase(),z=W&&window.navigator.userAgent.toLowerCase(),q=z&&/msie|trident/.test(z),X=z&&z.indexOf("msie 9.0")>0,K=z&&z.indexOf("edge/")>0,J=(z&&z.indexOf("android"),z&&/iphone|ipad|ipod|ios/.test(z)||"ios"===H),Y=(z&&/chrome\/\d+/.test(z),z&&/phantomjs/.test(z),z&&z.match(/firefox\/(\d+)/)),Z={}.watch,Q=!1;if(W)try{var tt={};Object.defineProperty(tt,"passive",{get:function(){Q=!0}}),window.addEventListener("test-passive",null,tt)}catch(t){}var nt=function(){return void 0===U&&(U=!W&&!B&&void 0!==e.g&&e.g.process&&"server"===e.g.process.env.VUE_ENV),U},et=W&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function rt(t){return"function"==typeof t&&/native code/.test(t.toString())}var ot,it="undefined"!=typeof Symbol&&rt(Symbol)&&"undefined"!=typeof Reflect&&rt(Reflect.ownKeys);ot="undefined"!=typeof Set&&rt(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var at=k,ut=0,ct=function(){this.id=ut++,this.subs=[]};ct.prototype.addSub=function(t){this.subs.push(t)},ct.prototype.removeSub=function(t){y(this.subs,t)},ct.prototype.depend=function(){ct.target&&ct.target.addDep(this)},ct.prototype.notify=function(){for(var t=this.subs.slice(),n=0,e=t.length;n<e;n++)t[n].update()},ct.target=null;var st=[];function ft(t){st.push(t),ct.target=t}function lt(){st.pop(),ct.target=st[st.length-1]}var pt=function(t,n,e,r,o,i,a,u){this.tag=t,this.data=n,this.children=e,this.text=r,this.elm=o,this.ns=void 0,this.context=i,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=n&&n.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=u,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},ht={child:{configurable:!0}};ht.child.get=function(){return this.componentInstance},Object.defineProperties(pt.prototype,ht);var dt=function(t){void 0===t&&(t="");var n=new pt;return n.text=t,n.isComment=!0,n};function vt(t){return new pt(void 0,void 0,void 0,String(t))}function yt(t){var n=new pt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return n.ns=t.ns,n.isStatic=t.isStatic,n.key=t.key,n.isComment=t.isComment,n.fnContext=t.fnContext,n.fnOptions=t.fnOptions,n.fnScopeId=t.fnScopeId,n.asyncMeta=t.asyncMeta,n.isCloned=!0,n}var mt=Array.prototype,gt=Object.create(mt);["push","pop","shift","unshift","splice","sort","reverse"].forEach((function(t){var n=mt[t];D(gt,t,(function(){for(var e=[],r=arguments.length;r--;)e[r]=arguments[r];var o,i=n.apply(this,e),a=this.__ob__;switch(t){case"push":case"unshift":o=e;break;case"splice":o=e.slice(2)}return o&&a.observeArray(o),a.dep.notify(),i}))}));var bt=Object.getOwnPropertyNames(gt),_t=!0;function wt(t){_t=t}var xt=function(t){this.value=t,this.dep=new ct,this.vmCount=0,D(t,"__ob__",this),Array.isArray(t)?(V?function(t,n){t.__proto__=n}(t,gt):function(t,n,e){for(var r=0,o=e.length;r<o;r++){var i=e[r];D(t,i,n[i])}}(t,gt,bt),this.observeArray(t)):this.walk(t)};function St(t,n){var e;if(u(t)&&!(t instanceof pt))return g(t,"__ob__")&&t.__ob__ instanceof xt?e=t.__ob__:_t&&!nt()&&(Array.isArray(t)||s(t))&&Object.isExtensible(t)&&!t._isVue&&(e=new xt(t)),n&&e&&e.vmCount++,e}function Ot(t,n,e,r,o){var i=new ct,a=Object.getOwnPropertyDescriptor(t,n);if(!a||!1!==a.configurable){var u=a&&a.get,c=a&&a.set;u&&!c||2!==arguments.length||(e=t[n]);var s=!o&&St(e);Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:function(){var n=u?u.call(t):e;return ct.target&&(i.depend(),s&&(s.dep.depend(),Array.isArray(n)&&Ct(n))),n},set:function(n){var r=u?u.call(t):e;n===r||n!=n&&r!=r||u&&!c||(c?c.call(t,n):e=n,s=!o&&St(n),i.notify())}})}}function Et(t,n,e){if(Array.isArray(t)&&f(n))return t.length=Math.max(t.length,n),t.splice(n,1,e),e;if(n in t&&!(n in Object.prototype))return t[n]=e,e;var r=t.__ob__;return t._isVue||r&&r.vmCount?e:r?(Ot(r.value,n,e),r.dep.notify(),e):(t[n]=e,e)}function At(t,n){if(Array.isArray(t)&&f(n))t.splice(n,1);else{var e=t.__ob__;t._isVue||e&&e.vmCount||g(t,n)&&(delete t[n],e&&e.dep.notify())}}function Ct(t){for(var n=void 0,e=0,r=t.length;e<r;e++)(n=t[e])&&n.__ob__&&n.__ob__.dep.depend(),Array.isArray(n)&&Ct(n)}xt.prototype.walk=function(t){for(var n=Object.keys(t),e=0;e<n.length;e++)Ot(t,n[e])},xt.prototype.observeArray=function(t){for(var n=0,e=t.length;n<e;n++)St(t[n])};var jt=R.optionMergeStrategies;function kt(t,n){if(!n)return t;for(var e,r,o,i=it?Reflect.ownKeys(n):Object.keys(n),a=0;a<i.length;a++)"__ob__"!==(e=i[a])&&(r=t[e],o=n[e],g(t,e)?r!==o&&s(r)&&s(o)&&kt(r,o):Et(t,e,o));return t}function $t(t,n,e){return e?function(){var r="function"==typeof n?n.call(e,e):n,o="function"==typeof t?t.call(e,e):t;return r?kt(r,o):o}:n?t?function(){return kt("function"==typeof n?n.call(this,this):n,"function"==typeof t?t.call(this,this):t)}:n:t}function Pt(t,n){var e=n?t?t.concat(n):Array.isArray(n)?n:[n]:t;return e?function(t){for(var n=[],e=0;e<t.length;e++)-1===n.indexOf(t[e])&&n.push(t[e]);return n}(e):e}function Tt(t,n,e,r){var o=Object.create(t||null);return n?C(o,n):o}jt.data=function(t,n,e){return e?$t(t,n,e):n&&"function"!=typeof n?t:$t(t,n)},L.forEach((function(t){jt[t]=Pt})),N.forEach((function(t){jt[t+"s"]=Tt})),jt.watch=function(t,n,e,r){if(t===Z&&(t=void 0),n===Z&&(n=void 0),!n)return Object.create(t||null);if(!t)return n;var o={};for(var i in C(o,t),n){var a=o[i],u=n[i];a&&!Array.isArray(a)&&(a=[a]),o[i]=a?a.concat(u):Array.isArray(u)?u:[u]}return o},jt.props=jt.methods=jt.inject=jt.computed=function(t,n,e,r){if(!t)return n;var o=Object.create(null);return C(o,t),n&&C(o,n),o},jt.provide=$t;var Ft=function(t,n){return void 0===n?t:n};function Mt(t,n,e){if("function"==typeof n&&(n=n.options),function(t,n){var e=t.props;if(e){var r,o,i={};if(Array.isArray(e))for(r=e.length;r--;)"string"==typeof(o=e[r])&&(i[w(o)]={type:null});else if(s(e))for(var a in e)o=e[a],i[w(a)]=s(o)?o:{type:o};t.props=i}}(n),function(t,n){var e=t.inject;if(e){var r=t.inject={};if(Array.isArray(e))for(var o=0;o<e.length;o++)r[e[o]]={from:e[o]};else if(s(e))for(var i in e){var a=e[i];r[i]=s(a)?C({from:i},a):{from:a}}}}(n),function(t){var n=t.directives;if(n)for(var e in n){var r=n[e];"function"==typeof r&&(n[e]={bind:r,update:r})}}(n),!n._base&&(n.extends&&(t=Mt(t,n.extends,e)),n.mixins))for(var r=0,o=n.mixins.length;r<o;r++)t=Mt(t,n.mixins[r],e);var i,a={};for(i in t)u(i);for(i in n)g(t,i)||u(i);function u(r){var o=jt[r]||Ft;a[r]=o(t[r],n[r],e,r)}return a}function It(t,n,e,r){if("string"==typeof e){var o=t[n];if(g(o,e))return o[e];var i=w(e);if(g(o,i))return o[i];var a=x(i);return g(o,a)?o[a]:o[e]||o[i]||o[a]}}function Nt(t,n,e,r){var o=n[t],i=!g(e,t),a=e[t],u=Dt(Boolean,o.type);if(u>-1)if(i&&!g(o,"default"))a=!1;else if(""===a||a===O(t)){var c=Dt(String,o.type);(c<0||u<c)&&(a=!0)}if(void 0===a){a=function(t,n,e){if(g(n,"default")){var r=n.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[e]&&void 0!==t._props[e]?t._props[e]:"function"==typeof r&&"Function"!==Lt(n.type)?r.call(t):r}}(r,o,t);var s=_t;wt(!0),St(a),wt(s)}return a}function Lt(t){var n=t&&t.toString().match(/^\s*function (\w+)/);return n?n[1]:""}function Rt(t,n){return Lt(t)===Lt(n)}function Dt(t,n){if(!Array.isArray(n))return Rt(n,t)?0:-1;for(var e=0,r=n.length;e<r;e++)if(Rt(n[e],t))return e;return-1}function Ut(t,n,e){ft();try{if(n)for(var r=n;r=r.$parent;){var o=r.$options.errorCaptured;if(o)for(var i=0;i<o.length;i++)try{if(!1===o[i].call(r,t,n,e))return}catch(t){Vt(t,r,"errorCaptured hook")}}Vt(t,n,e)}finally{lt()}}function Gt(t,n,e,r,o){var i;try{(i=e?t.apply(n,e):t.call(n))&&!i._isVue&&l(i)&&!i._handled&&(i.catch((function(t){return Ut(t,r,o+" (Promise/async)")})),i._handled=!0)}catch(t){Ut(t,r,o)}return i}function Vt(t,n,e){if(R.errorHandler)try{return R.errorHandler.call(null,t,n,e)}catch(n){n!==t&&Wt(n)}Wt(t)}function Wt(t,n,e){if(!W&&!B||"undefined"==typeof console)throw t;console.error(t)}var Bt,Ht=!1,zt=[],qt=!1;function Xt(){qt=!1;var t=zt.slice(0);zt.length=0;for(var n=0;n<t.length;n++)t[n]()}if("undefined"!=typeof Promise&&rt(Promise)){var Kt=Promise.resolve();Bt=function(){Kt.then(Xt),J&&setTimeout(k)},Ht=!0}else if(q||"undefined"==typeof MutationObserver||!rt(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())Bt="undefined"!=typeof setImmediate&&rt(setImmediate)?function(){setImmediate(Xt)}:function(){setTimeout(Xt,0)};else{var Jt=1,Yt=new MutationObserver(Xt),Zt=document.createTextNode(String(Jt));Yt.observe(Zt,{characterData:!0}),Bt=function(){Jt=(Jt+1)%2,Zt.data=String(Jt)},Ht=!0}function Qt(t,n){var e;if(zt.push((function(){if(t)try{t.call(n)}catch(t){Ut(t,n,"nextTick")}else e&&e(n)})),qt||(qt=!0,Bt()),!t&&"undefined"!=typeof Promise)return new Promise((function(t){e=t}))}var tn=new ot;function nn(t){en(t,tn),tn.clear()}function en(t,n){var e,r,o=Array.isArray(t);if(!(!o&&!u(t)||Object.isFrozen(t)||t instanceof pt)){if(t.__ob__){var i=t.__ob__.dep.id;if(n.has(i))return;n.add(i)}if(o)for(e=t.length;e--;)en(t[e],n);else for(e=(r=Object.keys(t)).length;e--;)en(t[r[e]],n)}}var rn=b((function(t){var n="&"===t.charAt(0),e="~"===(t=n?t.slice(1):t).charAt(0),r="!"===(t=e?t.slice(1):t).charAt(0);return{name:t=r?t.slice(1):t,once:e,capture:r,passive:n}}));function on(t,n){function e(){var t=arguments,r=e.fns;if(!Array.isArray(r))return Gt(r,null,arguments,n,"v-on handler");for(var o=r.slice(),i=0;i<o.length;i++)Gt(o[i],null,t,n,"v-on handler")}return e.fns=t,e}function an(t,n,e,o,a,u){var c,s,f,l;for(c in t)s=t[c],f=n[c],l=rn(c),r(s)||(r(f)?(r(s.fns)&&(s=t[c]=on(s,u)),i(l.once)&&(s=t[c]=a(l.name,s,l.capture)),e(l.name,s,l.capture,l.passive,l.params)):s!==f&&(f.fns=s,t[c]=f));for(c in n)r(t[c])&&o((l=rn(c)).name,n[c],l.capture)}function un(t,n,e){var a;t instanceof pt&&(t=t.data.hook||(t.data.hook={}));var u=t[n];function c(){e.apply(this,arguments),y(a.fns,c)}r(u)?a=on([c]):o(u.fns)&&i(u.merged)?(a=u).fns.push(c):a=on([u,c]),a.merged=!0,t[n]=a}function cn(t,n,e,r,i){if(o(n)){if(g(n,e))return t[e]=n[e],i||delete n[e],!0;if(g(n,r))return t[e]=n[r],i||delete n[r],!0}return!1}function sn(t){return a(t)?[vt(t)]:Array.isArray(t)?ln(t):void 0}function fn(t){return o(t)&&o(t.text)&&!1===t.isComment}function ln(t,n){var e,u,c,s,f=[];for(e=0;e<t.length;e++)r(u=t[e])||"boolean"==typeof u||(s=f[c=f.length-1],Array.isArray(u)?u.length>0&&(fn((u=ln(u,(n||"")+"_"+e))[0])&&fn(s)&&(f[c]=vt(s.text+u[0].text),u.shift()),f.push.apply(f,u)):a(u)?fn(s)?f[c]=vt(s.text+u):""!==u&&f.push(vt(u)):fn(u)&&fn(s)?f[c]=vt(s.text+u.text):(i(t._isVList)&&o(u.tag)&&r(u.key)&&o(n)&&(u.key="__vlist"+n+"_"+e+"__"),f.push(u)));return f}function pn(t,n){if(t){for(var e=Object.create(null),r=it?Reflect.ownKeys(t):Object.keys(t),o=0;o<r.length;o++){var i=r[o];if("__ob__"!==i){for(var a=t[i].from,u=n;u;){if(u._provided&&g(u._provided,a)){e[i]=u._provided[a];break}u=u.$parent}if(!u&&"default"in t[i]){var c=t[i].default;e[i]="function"==typeof c?c.call(n):c}}}return e}}function hn(t,n){if(!t||!t.length)return{};for(var e={},r=0,o=t.length;r<o;r++){var i=t[r],a=i.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,i.context!==n&&i.fnContext!==n||!a||null==a.slot)(e.default||(e.default=[])).push(i);else{var u=a.slot,c=e[u]||(e[u]=[]);"template"===i.tag?c.push.apply(c,i.children||[]):c.push(i)}}for(var s in e)e[s].every(dn)&&delete e[s];return e}function dn(t){return t.isComment&&!t.asyncFactory||" "===t.text}function vn(t,e,r){var o,i=Object.keys(e).length>0,a=t?!!t.$stable:!i,u=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&r&&r!==n&&u===r.$key&&!i&&!r.$hasNormal)return r;for(var c in o={},t)t[c]&&"$"!==c[0]&&(o[c]=yn(e,c,t[c]))}else o={};for(var s in e)s in o||(o[s]=mn(e,s));return t&&Object.isExtensible(t)&&(t._normalized=o),D(o,"$stable",a),D(o,"$key",u),D(o,"$hasNormal",i),o}function yn(n,e,r){var o=function(){var n=arguments.length?r.apply(null,arguments):r({});return(n=n&&"object"===t(n)&&!Array.isArray(n)?[n]:sn(n))&&(0===n.length||1===n.length&&n[0].isComment)?void 0:n};return r.proxy&&Object.defineProperty(n,e,{get:o,enumerable:!0,configurable:!0}),o}function mn(t,n){return function(){return t[n]}}function gn(t,n){var e,r,i,a,c;if(Array.isArray(t)||"string"==typeof t)for(e=new Array(t.length),r=0,i=t.length;r<i;r++)e[r]=n(t[r],r);else if("number"==typeof t)for(e=new Array(t),r=0;r<t;r++)e[r]=n(r+1,r);else if(u(t))if(it&&t[Symbol.iterator]){e=[];for(var s=t[Symbol.iterator](),f=s.next();!f.done;)e.push(n(f.value,e.length)),f=s.next()}else for(a=Object.keys(t),e=new Array(a.length),r=0,i=a.length;r<i;r++)c=a[r],e[r]=n(t[c],c,r);return o(e)||(e=[]),e._isVList=!0,e}function bn(t,n,e,r){var o,i=this.$scopedSlots[t];i?(e=e||{},r&&(e=C(C({},r),e)),o=i(e)||n):o=this.$slots[t]||n;var a=e&&e.slot;return a?this.$createElement("template",{slot:a},o):o}function _n(t){return It(this.$options,"filters",t)||P}function wn(t,n){return Array.isArray(t)?-1===t.indexOf(n):t!==n}function xn(t,n,e,r,o){var i=R.keyCodes[n]||e;return o&&r&&!R.keyCodes[n]?wn(o,r):i?wn(i,t):r?O(r)!==n:void 0}function Sn(t,n,e,r,o){if(e&&u(e)){var i;Array.isArray(e)&&(e=j(e));var a=function(a){if("class"===a||"style"===a||v(a))i=t;else{var u=t.attrs&&t.attrs.type;i=r||R.mustUseProp(n,u,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=w(a),s=O(a);c in i||s in i||(i[a]=e[a],o&&((t.on||(t.on={}))["update:"+a]=function(t){e[a]=t}))};for(var c in e)a(c)}return t}function On(t,n){var e=this._staticTrees||(this._staticTrees=[]),r=e[t];return r&&!n||An(r=e[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),"__static__"+t,!1),r}function En(t,n,e){return An(t,"__once__"+n+(e?"_"+e:""),!0),t}function An(t,n,e){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!=typeof t[r]&&Cn(t[r],n+"_"+r,e);else Cn(t,n,e)}function Cn(t,n,e){t.isStatic=!0,t.key=n,t.isOnce=e}function jn(t,n){if(n&&s(n)){var e=t.on=t.on?C({},t.on):{};for(var r in n){var o=e[r],i=n[r];e[r]=o?[].concat(o,i):i}}return t}function kn(t,n,e,r){n=n||{$stable:!e};for(var o=0;o<t.length;o++){var i=t[o];Array.isArray(i)?kn(i,n,e):i&&(i.proxy&&(i.fn.proxy=!0),n[i.key]=i.fn)}return r&&(n.$key=r),n}function $n(t,n){for(var e=0;e<n.length;e+=2){var r=n[e];"string"==typeof r&&r&&(t[n[e]]=n[e+1])}return t}function Pn(t,n){return"string"==typeof t?n+t:t}function Tn(t){t._o=En,t._n=h,t._s=p,t._l=gn,t._t=bn,t._q=T,t._i=F,t._m=On,t._f=_n,t._k=xn,t._b=Sn,t._v=vt,t._e=dt,t._u=kn,t._g=jn,t._d=$n,t._p=Pn}function Fn(t,e,r,o,a){var u,c=this,s=a.options;g(o,"_uid")?(u=Object.create(o))._original=o:(u=o,o=o._original);var f=i(s._compiled),l=!f;this.data=t,this.props=e,this.children=r,this.parent=o,this.listeners=t.on||n,this.injections=pn(s.inject,o),this.slots=function(){return c.$slots||vn(t.scopedSlots,c.$slots=hn(r,o)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return vn(t.scopedSlots,this.slots())}}),f&&(this.$options=s,this.$slots=this.slots(),this.$scopedSlots=vn(t.scopedSlots,this.$slots)),s._scopeId?this._c=function(t,n,e,r){var i=Un(u,t,n,e,r,l);return i&&!Array.isArray(i)&&(i.fnScopeId=s._scopeId,i.fnContext=o),i}:this._c=function(t,n,e,r){return Un(u,t,n,e,r,l)}}function Mn(t,n,e,r,o){var i=yt(t);return i.fnContext=e,i.fnOptions=r,n.slot&&((i.data||(i.data={})).slot=n.slot),i}function In(t,n){for(var e in n)t[w(e)]=n[e]}Tn(Fn.prototype);var Nn={init:function(t,n){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var e=t;Nn.prepatch(e,e)}else(t.componentInstance=function(t,n){var e={_isComponent:!0,_parentVnode:t,parent:n},r=t.data.inlineTemplate;return o(r)&&(e.render=r.render,e.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(e)}(t,Yn)).$mount(n?t.elm:void 0,n)},prepatch:function(t,e){var r=e.componentOptions;!function(t,e,r,o,i){var a=o.data.scopedSlots,u=t.$scopedSlots,c=!!(a&&!a.$stable||u!==n&&!u.$stable||a&&t.$scopedSlots.$key!==a.$key),s=!!(i||t.$options._renderChildren||c);if(t.$options._parentVnode=o,t.$vnode=o,t._vnode&&(t._vnode.parent=o),t.$options._renderChildren=i,t.$attrs=o.data.attrs||n,t.$listeners=r||n,e&&t.$options.props){wt(!1);for(var f=t._props,l=t.$options._propKeys||[],p=0;p<l.length;p++){var h=l[p],d=t.$options.props;f[h]=Nt(h,d,e,t)}wt(!0),t.$options.propsData=e}r=r||n;var v=t.$options._parentListeners;t.$options._parentListeners=r,Jn(t,r,v),s&&(t.$slots=hn(i,o.context),t.$forceUpdate())}(e.componentInstance=t.componentInstance,r.propsData,r.listeners,e,r.children)},insert:function(t){var n,e=t.context,r=t.componentInstance;r._isMounted||(r._isMounted=!0,ee(r,"mounted")),t.data.keepAlive&&(e._isMounted?((n=r)._inactive=!1,oe.push(n)):te(r,!0))},destroy:function(t){var n=t.componentInstance;n._isDestroyed||(t.data.keepAlive?ne(n,!0):n.$destroy())}},Ln=Object.keys(Nn);function Rn(t,e,a,c,s){if(!r(t)){var f=a.$options._base;if(u(t)&&(t=f.extend(t)),"function"==typeof t){var p;if(r(t.cid)&&void 0===(t=function(t,n){if(i(t.error)&&o(t.errorComp))return t.errorComp;if(o(t.resolved))return t.resolved;var e=Wn;if(e&&o(t.owners)&&-1===t.owners.indexOf(e)&&t.owners.push(e),i(t.loading)&&o(t.loadingComp))return t.loadingComp;if(e&&!o(t.owners)){var a=t.owners=[e],c=!0,s=null,f=null;e.$on("hook:destroyed",(function(){return y(a,e)}));var p=function(t){for(var n=0,e=a.length;n<e;n++)a[n].$forceUpdate();t&&(a.length=0,null!==s&&(clearTimeout(s),s=null),null!==f&&(clearTimeout(f),f=null))},h=M((function(e){t.resolved=Bn(e,n),c?a.length=0:p(!0)})),d=M((function(n){o(t.errorComp)&&(t.error=!0,p(!0))})),v=t(h,d);return u(v)&&(l(v)?r(t.resolved)&&v.then(h,d):l(v.component)&&(v.component.then(h,d),o(v.error)&&(t.errorComp=Bn(v.error,n)),o(v.loading)&&(t.loadingComp=Bn(v.loading,n),0===v.delay?t.loading=!0:s=setTimeout((function(){s=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,p(!1))}),v.delay||200)),o(v.timeout)&&(f=setTimeout((function(){f=null,r(t.resolved)&&d(null)}),v.timeout)))),c=!1,t.loading?t.loadingComp:t.resolved}}(p=t,f)))return function(t,n,e,r,o){var i=dt();return i.asyncFactory=t,i.asyncMeta={data:n,context:e,children:r,tag:o},i}(p,e,a,c,s);e=e||{},Se(t),o(e.model)&&function(t,n){var e=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(n.attrs||(n.attrs={}))[e]=n.model.value;var i=n.on||(n.on={}),a=i[r],u=n.model.callback;o(a)?(Array.isArray(a)?-1===a.indexOf(u):a!==u)&&(i[r]=[u].concat(a)):i[r]=u}(t.options,e);var h=function(t,n,e){var i=n.options.props;if(!r(i)){var a={},u=t.attrs,c=t.props;if(o(u)||o(c))for(var s in i){var f=O(s);cn(a,c,s,f,!0)||cn(a,u,s,f,!1)}return a}}(e,t);if(i(t.options.functional))return function(t,e,r,i,a){var u=t.options,c={},s=u.props;if(o(s))for(var f in s)c[f]=Nt(f,s,e||n);else o(r.attrs)&&In(c,r.attrs),o(r.props)&&In(c,r.props);var l=new Fn(r,c,a,i,t),p=u.render.call(null,l._c,l);if(p instanceof pt)return Mn(p,r,l.parent,u);if(Array.isArray(p)){for(var h=sn(p)||[],d=new Array(h.length),v=0;v<h.length;v++)d[v]=Mn(h[v],r,l.parent,u);return d}}(t,h,e,a,c);var d=e.on;if(e.on=e.nativeOn,i(t.options.abstract)){var v=e.slot;e={},v&&(e.slot=v)}!function(t){for(var n=t.hook||(t.hook={}),e=0;e<Ln.length;e++){var r=Ln[e],o=n[r],i=Nn[r];o===i||o&&o._merged||(n[r]=o?Dn(i,o):i)}}(e);var m=t.options.name||s;return new pt("vue-component-"+t.cid+(m?"-"+m:""),e,void 0,void 0,void 0,a,{Ctor:t,propsData:h,listeners:d,tag:s,children:c},p)}}}function Dn(t,n){var e=function(e,r){t(e,r),n(e,r)};return e._merged=!0,e}function Un(t,n,e,r,c,s){return(Array.isArray(e)||a(e))&&(c=r,r=e,e=void 0),i(s)&&(c=2),function(t,n,e,r,i){if(o(e)&&o(e.__ob__))return dt();if(o(e)&&o(e.is)&&(n=e.is),!n)return dt();var a,c,s;(Array.isArray(r)&&"function"==typeof r[0]&&((e=e||{}).scopedSlots={default:r[0]},r.length=0),2===i?r=sn(r):1===i&&(r=function(t){for(var n=0;n<t.length;n++)if(Array.isArray(t[n]))return Array.prototype.concat.apply([],t);return t}(r)),"string"==typeof n)?(c=t.$vnode&&t.$vnode.ns||R.getTagNamespace(n),a=R.isReservedTag(n)?new pt(R.parsePlatformTagName(n),e,r,void 0,void 0,t):e&&e.pre||!o(s=It(t.$options,"components",n))?new pt(n,e,r,void 0,void 0,t):Rn(s,e,t,r,n)):a=Rn(n,e,t,r);return Array.isArray(a)?a:o(a)?(o(c)&&Gn(a,c),o(e)&&function(t){u(t.style)&&nn(t.style),u(t.class)&&nn(t.class)}(e),a):dt()}(t,n,e,r,c)}function Gn(t,n,e){if(t.ns=n,"foreignObject"===t.tag&&(n=void 0,e=!0),o(t.children))for(var a=0,u=t.children.length;a<u;a++){var c=t.children[a];o(c.tag)&&(r(c.ns)||i(e)&&"svg"!==c.tag)&&Gn(c,n,e)}}var Vn,Wn=null;function Bn(t,n){return(t.__esModule||it&&"Module"===t[Symbol.toStringTag])&&(t=t.default),u(t)?n.extend(t):t}function Hn(t){return t.isComment&&t.asyncFactory}function zn(t){if(Array.isArray(t))for(var n=0;n<t.length;n++){var e=t[n];if(o(e)&&(o(e.componentOptions)||Hn(e)))return e}}function qn(t,n){Vn.$on(t,n)}function Xn(t,n){Vn.$off(t,n)}function Kn(t,n){var e=Vn;return function r(){var o=n.apply(null,arguments);null!==o&&e.$off(t,r)}}function Jn(t,n,e){Vn=t,an(n,e||{},qn,Xn,Kn,t),Vn=void 0}var Yn=null;function Zn(t){var n=Yn;return Yn=t,function(){Yn=n}}function Qn(t){for(;t&&(t=t.$parent);)if(t._inactive)return!0;return!1}function te(t,n){if(n){if(t._directInactive=!1,Qn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var e=0;e<t.$children.length;e++)te(t.$children[e]);ee(t,"activated")}}function ne(t,n){if(!(n&&(t._directInactive=!0,Qn(t))||t._inactive)){t._inactive=!0;for(var e=0;e<t.$children.length;e++)ne(t.$children[e]);ee(t,"deactivated")}}function ee(t,n){ft();var e=t.$options[n],r=n+" hook";if(e)for(var o=0,i=e.length;o<i;o++)Gt(e[o],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+n),lt()}var re=[],oe=[],ie={},ae=!1,ue=!1,ce=0,se=0,fe=Date.now;if(W&&!q){var le=window.performance;le&&"function"==typeof le.now&&fe()>document.createEvent("Event").timeStamp&&(fe=function(){return le.now()})}function pe(){var t,n;for(se=fe(),ue=!0,re.sort((function(t,n){return t.id-n.id})),ce=0;ce<re.length;ce++)(t=re[ce]).before&&t.before(),n=t.id,ie[n]=null,t.run();var e=oe.slice(),r=re.slice();ce=re.length=oe.length=0,ie={},ae=ue=!1,function(t){for(var n=0;n<t.length;n++)t[n]._inactive=!0,te(t[n],!0)}(e),function(t){for(var n=t.length;n--;){var e=t[n],r=e.vm;r._watcher===e&&r._isMounted&&!r._isDestroyed&&ee(r,"updated")}}(r),et&&R.devtools&&et.emit("flush")}var he=0,de=function(t,n,e,r,o){this.vm=t,o&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=e,this.id=++he,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ot,this.newDepIds=new ot,this.expression="","function"==typeof n?this.getter=n:(this.getter=function(t){if(!G.test(t)){var n=t.split(".");return function(t){for(var e=0;e<n.length;e++){if(!t)return;t=t[n[e]]}return t}}}(n),this.getter||(this.getter=k)),this.value=this.lazy?void 0:this.get()};de.prototype.get=function(){var t;ft(this);var n=this.vm;try{t=this.getter.call(n,n)}catch(t){if(!this.user)throw t;Ut(t,n,'getter for watcher "'+this.expression+'"')}finally{this.deep&&nn(t),lt(),this.cleanupDeps()}return t},de.prototype.addDep=function(t){var n=t.id;this.newDepIds.has(n)||(this.newDepIds.add(n),this.newDeps.push(t),this.depIds.has(n)||t.addSub(this))},de.prototype.cleanupDeps=function(){for(var t=this.deps.length;t--;){var n=this.deps[t];this.newDepIds.has(n.id)||n.removeSub(this)}var e=this.depIds;this.depIds=this.newDepIds,this.newDepIds=e,this.newDepIds.clear(),e=this.deps,this.deps=this.newDeps,this.newDeps=e,this.newDeps.length=0},de.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():function(t){var n=t.id;if(null==ie[n]){if(ie[n]=!0,ue){for(var e=re.length-1;e>ce&&re[e].id>t.id;)e--;re.splice(e+1,0,t)}else re.push(t);ae||(ae=!0,Qt(pe))}}(this)},de.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||u(t)||this.deep){var n=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,n)}catch(t){Ut(t,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,n)}}},de.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},de.prototype.depend=function(){for(var t=this.deps.length;t--;)this.deps[t].depend()},de.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||y(this.vm._watchers,this);for(var t=this.deps.length;t--;)this.deps[t].removeSub(this);this.active=!1}};var ve={enumerable:!0,configurable:!0,get:k,set:k};function ye(t,n,e){ve.get=function(){return this[n][e]},ve.set=function(t){this[n][e]=t},Object.defineProperty(t,e,ve)}var me={lazy:!0};function ge(t,n,e){var r=!nt();"function"==typeof e?(ve.get=r?be(n):_e(e),ve.set=k):(ve.get=e.get?r&&!1!==e.cache?be(n):_e(e.get):k,ve.set=e.set||k),Object.defineProperty(t,n,ve)}function be(t){return function(){var n=this._computedWatchers&&this._computedWatchers[t];if(n)return n.dirty&&n.evaluate(),ct.target&&n.depend(),n.value}}function _e(t){return function(){return t.call(this,this)}}function we(t,n,e,r){return s(e)&&(r=e,e=e.handler),"string"==typeof e&&(e=t[e]),t.$watch(n,e,r)}var xe=0;function Se(t){var n=t.options;if(t.super){var e=Se(t.super);if(e!==t.superOptions){t.superOptions=e;var r=function(t){var n,e=t.options,r=t.sealedOptions;for(var o in e)e[o]!==r[o]&&(n||(n={}),n[o]=e[o]);return n}(t);r&&C(t.extendOptions,r),(n=t.options=Mt(e,t.extendOptions)).name&&(n.components[n.name]=t)}}return n}function Oe(t){this._init(t)}function Ee(t){return t&&(t.Ctor.options.name||t.tag)}function Ae(t,n){return Array.isArray(t)?t.indexOf(n)>-1:"string"==typeof t?t.split(",").indexOf(n)>-1:(e=t,!("[object RegExp]"!==c.call(e))&&t.test(n));var e}function Ce(t,n){var e=t.cache,r=t.keys,o=t._vnode;for(var i in e){var a=e[i];if(a){var u=Ee(a.componentOptions);u&&!n(u)&&je(e,i,r,o)}}}function je(t,n,e,r){var o=t[n];!o||r&&o.tag===r.tag||o.componentInstance.$destroy(),t[n]=null,y(e,n)}!function(t){t.prototype._init=function(t){var e=this;e._uid=xe++,e._isVue=!0,t&&t._isComponent?function(t,n){var e=t.$options=Object.create(t.constructor.options),r=n._parentVnode;e.parent=n.parent,e._parentVnode=r;var o=r.componentOptions;e.propsData=o.propsData,e._parentListeners=o.listeners,e._renderChildren=o.children,e._componentTag=o.tag,n.render&&(e.render=n.render,e.staticRenderFns=n.staticRenderFns)}(e,t):e.$options=Mt(Se(e.constructor),t||{},e),e._renderProxy=e,e._self=e,function(t){var n=t.$options,e=n.parent;if(e&&!n.abstract){for(;e.$options.abstract&&e.$parent;)e=e.$parent;e.$children.push(t)}t.$parent=e,t.$root=e?e.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}(e),function(t){t._events=Object.create(null),t._hasHookEvent=!1;var n=t.$options._parentListeners;n&&Jn(t,n)}(e),function(t){t._vnode=null,t._staticTrees=null;var e=t.$options,r=t.$vnode=e._parentVnode,o=r&&r.context;t.$slots=hn(e._renderChildren,o),t.$scopedSlots=n,t._c=function(n,e,r,o){return Un(t,n,e,r,o,!1)},t.$createElement=function(n,e,r,o){return Un(t,n,e,r,o,!0)};var i=r&&r.data;Ot(t,"$attrs",i&&i.attrs||n,null,!0),Ot(t,"$listeners",e._parentListeners||n,null,!0)}(e),ee(e,"beforeCreate"),function(t){var n=pn(t.$options.inject,t);n&&(wt(!1),Object.keys(n).forEach((function(e){Ot(t,e,n[e])})),wt(!0))}(e),function(t){t._watchers=[];var n=t.$options;n.props&&function(t,n){var e=t.$options.propsData||{},r=t._props={},o=t.$options._propKeys=[];t.$parent&&wt(!1);var i=function(i){o.push(i);var a=Nt(i,n,e,t);Ot(r,i,a),i in t||ye(t,"_props",i)};for(var a in n)i(a);wt(!0)}(t,n.props),n.methods&&function(t,n){for(var e in t.$options.props,n)t[e]="function"!=typeof n[e]?k:E(n[e],t)}(t,n.methods),n.data?function(t){var n=t.$options.data;s(n=t._data="function"==typeof n?function(t,n){ft();try{return t.call(n,n)}catch(t){return Ut(t,n,"data()"),{}}finally{lt()}}(n,t):n||{})||(n={});for(var e,r=Object.keys(n),o=t.$options.props,i=(t.$options.methods,r.length);i--;){var a=r[i];o&&g(o,a)||(e=void 0,36===(e=(a+"").charCodeAt(0))||95===e)||ye(t,"_data",a)}St(n,!0)}(t):St(t._data={},!0),n.computed&&function(t,n){var e=t._computedWatchers=Object.create(null),r=nt();for(var o in n){var i=n[o],a="function"==typeof i?i:i.get;r||(e[o]=new de(t,a||k,k,me)),o in t||ge(t,o,i)}}(t,n.computed),n.watch&&n.watch!==Z&&function(t,n){for(var e in n){var r=n[e];if(Array.isArray(r))for(var o=0;o<r.length;o++)we(t,e,r[o]);else we(t,e,r)}}(t,n.watch)}(e),function(t){var n=t.$options.provide;n&&(t._provided="function"==typeof n?n.call(t):n)}(e),ee(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}(Oe),function(t){Object.defineProperty(t.prototype,"$data",{get:function(){return this._data}}),Object.defineProperty(t.prototype,"$props",{get:function(){return this._props}}),t.prototype.$set=Et,t.prototype.$delete=At,t.prototype.$watch=function(t,n,e){var r=this;if(s(n))return we(r,t,n,e);(e=e||{}).user=!0;var o=new de(r,t,n,e);if(e.immediate)try{n.call(r,o.value)}catch(t){Ut(t,r,'callback for immediate watcher "'+o.expression+'"')}return function(){o.teardown()}}}(Oe),function(t){var n=/^hook:/;t.prototype.$on=function(t,e){var r=this;if(Array.isArray(t))for(var o=0,i=t.length;o<i;o++)r.$on(t[o],e);else(r._events[t]||(r._events[t]=[])).push(e),n.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,n){var e=this;function r(){e.$off(t,r),n.apply(e,arguments)}return r.fn=n,e.$on(t,r),e},t.prototype.$off=function(t,n){var e=this;if(!arguments.length)return e._events=Object.create(null),e;if(Array.isArray(t)){for(var r=0,o=t.length;r<o;r++)e.$off(t[r],n);return e}var i,a=e._events[t];if(!a)return e;if(!n)return e._events[t]=null,e;for(var u=a.length;u--;)if((i=a[u])===n||i.fn===n){a.splice(u,1);break}return e},t.prototype.$emit=function(t){var n=this,e=n._events[t];if(e){e=e.length>1?A(e):e;for(var r=A(arguments,1),o='event handler for "'+t+'"',i=0,a=e.length;i<a;i++)Gt(e[i],n,r,n,o)}return n}}(Oe),function(t){t.prototype._update=function(t,n){var e=this,r=e.$el,o=e._vnode,i=Zn(e);e._vnode=t,e.$el=o?e.__patch__(o,t):e.__patch__(e.$el,t,n,!1),i(),r&&(r.__vue__=null),e.$el&&(e.$el.__vue__=e),e.$vnode&&e.$parent&&e.$vnode===e.$parent._vnode&&(e.$parent.$el=e.$el)},t.prototype.$forceUpdate=function(){this._watcher&&this._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){ee(t,"beforeDestroy"),t._isBeingDestroyed=!0;var n=t.$parent;!n||n._isBeingDestroyed||t.$options.abstract||y(n.$children,t),t._watcher&&t._watcher.teardown();for(var e=t._watchers.length;e--;)t._watchers[e].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),ee(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}(Oe),function(t){Tn(t.prototype),t.prototype.$nextTick=function(t){return Qt(t,this)},t.prototype._render=function(){var t,n=this,e=n.$options,r=e.render,o=e._parentVnode;o&&(n.$scopedSlots=vn(o.data.scopedSlots,n.$slots,n.$scopedSlots)),n.$vnode=o;try{Wn=n,t=r.call(n._renderProxy,n.$createElement)}catch(e){Ut(e,n,"render"),t=n._vnode}finally{Wn=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof pt||(t=dt()),t.parent=o,t}}(Oe);var ke=[String,RegExp,Array],$e={KeepAlive:{name:"keep-alive",abstract:!0,props:{include:ke,exclude:ke,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)je(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",(function(n){Ce(t,(function(t){return Ae(n,t)}))})),this.$watch("exclude",(function(n){Ce(t,(function(t){return!Ae(n,t)}))}))},render:function(){var t=this.$slots.default,n=zn(t),e=n&&n.componentOptions;if(e){var r=Ee(e),o=this.include,i=this.exclude;if(o&&(!r||!Ae(o,r))||i&&r&&Ae(i,r))return n;var a=this.cache,u=this.keys,c=null==n.key?e.Ctor.cid+(e.tag?"::"+e.tag:""):n.key;a[c]?(n.componentInstance=a[c].componentInstance,y(u,c),u.push(c)):(a[c]=n,u.push(c),this.max&&u.length>parseInt(this.max)&&je(a,u[0],u,this._vnode)),n.data.keepAlive=!0}return n||t&&t[0]}}};!function(t){var n={get:function(){return R}};Object.defineProperty(t,"config",n),t.util={warn:at,extend:C,mergeOptions:Mt,defineReactive:Ot},t.set=Et,t.delete=At,t.nextTick=Qt,t.observable=function(t){return St(t),t},t.options=Object.create(null),N.forEach((function(n){t.options[n+"s"]=Object.create(null)})),t.options._base=t,C(t.options.components,$e),function(t){t.use=function(t){var n=this._installedPlugins||(this._installedPlugins=[]);if(n.indexOf(t)>-1)return this;var e=A(arguments,1);return e.unshift(this),"function"==typeof t.install?t.install.apply(t,e):"function"==typeof t&&t.apply(null,e),n.push(t),this}}(t),function(t){t.mixin=function(t){return this.options=Mt(this.options,t),this}}(t),function(t){t.cid=0;var n=1;t.extend=function(t){t=t||{};var e=this,r=e.cid,o=t._Ctor||(t._Ctor={});if(o[r])return o[r];var i=t.name||e.options.name,a=function(t){this._init(t)};return(a.prototype=Object.create(e.prototype)).constructor=a,a.cid=n++,a.options=Mt(e.options,t),a.super=e,a.options.props&&function(t){var n=t.options.props;for(var e in n)ye(t.prototype,"_props",e)}(a),a.options.computed&&function(t){var n=t.options.computed;for(var e in n)ge(t.prototype,e,n[e])}(a),a.extend=e.extend,a.mixin=e.mixin,a.use=e.use,N.forEach((function(t){a[t]=e[t]})),i&&(a.options.components[i]=a),a.superOptions=e.options,a.extendOptions=t,a.sealedOptions=C({},a.options),o[r]=a,a}}(t),function(t){N.forEach((function(n){t[n]=function(t,e){return e?("component"===n&&s(e)&&(e.name=e.name||t,e=this.options._base.extend(e)),"directive"===n&&"function"==typeof e&&(e={bind:e,update:e}),this.options[n+"s"][t]=e,e):this.options[n+"s"][t]}}))}(t)}(Oe),Object.defineProperty(Oe.prototype,"$isServer",{get:nt}),Object.defineProperty(Oe.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Oe,"FunctionalRenderContext",{value:Fn}),Oe.version="2.6.12";var Pe=d("style,class"),Te=d("input,textarea,option,select,progress"),Fe=d("contenteditable,draggable,spellcheck"),Me=d("events,caret,typing,plaintext-only"),Ie=d("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),Ne="http://www.w3.org/1999/xlink",Le=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},Re=function(t){return Le(t)?t.slice(6,t.length):""},De=function(t){return null==t||!1===t};function Ue(t,n){return{staticClass:Ge(t.staticClass,n.staticClass),class:o(t.class)?[t.class,n.class]:n.class}}function Ge(t,n){return t?n?t+" "+n:t:n||""}function Ve(t){return Array.isArray(t)?function(t){for(var n,e="",r=0,i=t.length;r<i;r++)o(n=Ve(t[r]))&&""!==n&&(e&&(e+=" "),e+=n);return e}(t):u(t)?function(t){var n="";for(var e in t)t[e]&&(n&&(n+=" "),n+=e);return n}(t):"string"==typeof t?t:""}var We={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Be=d("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),He=d("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),ze=function(t){return Be(t)||He(t)},qe=Object.create(null),Xe=d("text,number,password,search,email,tel,url"),Ke=Object.freeze({createElement:function(t,n){var e=document.createElement(t);return"select"!==t||n.data&&n.data.attrs&&void 0!==n.data.attrs.multiple&&e.setAttribute("multiple","multiple"),e},createElementNS:function(t,n){return document.createElementNS(We[t],n)},createTextNode:function(t){return document.createTextNode(t)},createComment:function(t){return document.createComment(t)},insertBefore:function(t,n,e){t.insertBefore(n,e)},removeChild:function(t,n){t.removeChild(n)},appendChild:function(t,n){t.appendChild(n)},parentNode:function(t){return t.parentNode},nextSibling:function(t){return t.nextSibling},tagName:function(t){return t.tagName},setTextContent:function(t,n){t.textContent=n},setStyleScope:function(t,n){t.setAttribute(n,"")}}),Je={create:function(t,n){Ye(n)},update:function(t,n){t.data.ref!==n.data.ref&&(Ye(t,!0),Ye(n))},destroy:function(t){Ye(t,!0)}};function Ye(t,n){var e=t.data.ref;if(o(e)){var r=t.context,i=t.componentInstance||t.elm,a=r.$refs;n?Array.isArray(a[e])?y(a[e],i):a[e]===i&&(a[e]=void 0):t.data.refInFor?Array.isArray(a[e])?a[e].indexOf(i)<0&&a[e].push(i):a[e]=[i]:a[e]=i}}var Ze=new pt("",{},[]),Qe=["create","activate","update","remove","destroy"];function tr(t,n){return t.key===n.key&&(t.tag===n.tag&&t.isComment===n.isComment&&o(t.data)===o(n.data)&&function(t,n){if("input"!==t.tag)return!0;var e,r=o(e=t.data)&&o(e=e.attrs)&&e.type,i=o(e=n.data)&&o(e=e.attrs)&&e.type;return r===i||Xe(r)&&Xe(i)}(t,n)||i(t.isAsyncPlaceholder)&&t.asyncFactory===n.asyncFactory&&r(n.asyncFactory.error))}function nr(t,n,e){var r,i,a={};for(r=n;r<=e;++r)o(i=t[r].key)&&(a[i]=r);return a}var er={create:rr,update:rr,destroy:function(t){rr(t,Ze)}};function rr(t,n){(t.data.directives||n.data.directives)&&function(t,n){var e,r,o,i=t===Ze,a=n===Ze,u=ir(t.data.directives,t.context),c=ir(n.data.directives,n.context),s=[],f=[];for(e in c)r=u[e],o=c[e],r?(o.oldValue=r.value,o.oldArg=r.arg,ur(o,"update",n,t),o.def&&o.def.componentUpdated&&f.push(o)):(ur(o,"bind",n,t),o.def&&o.def.inserted&&s.push(o));if(s.length){var l=function(){for(var e=0;e<s.length;e++)ur(s[e],"inserted",n,t)};i?un(n,"insert",l):l()}if(f.length&&un(n,"postpatch",(function(){for(var e=0;e<f.length;e++)ur(f[e],"componentUpdated",n,t)})),!i)for(e in u)c[e]||ur(u[e],"unbind",t,t,a)}(t,n)}var or=Object.create(null);function ir(t,n){var e,r,o=Object.create(null);if(!t)return o;for(e=0;e<t.length;e++)(r=t[e]).modifiers||(r.modifiers=or),o[ar(r)]=r,r.def=It(n.$options,"directives",r.name);return o}function ar(t){return t.rawName||t.name+"."+Object.keys(t.modifiers||{}).join(".")}function ur(t,n,e,r,o){var i=t.def&&t.def[n];if(i)try{i(e.elm,t,e,r,o)}catch(r){Ut(r,e.context,"directive "+t.name+" "+n+" hook")}}var cr=[Je,er];function sr(t,n){var e=n.componentOptions;if(!(o(e)&&!1===e.Ctor.options.inheritAttrs||r(t.data.attrs)&&r(n.data.attrs))){var i,a,u=n.elm,c=t.data.attrs||{},s=n.data.attrs||{};for(i in o(s.__ob__)&&(s=n.data.attrs=C({},s)),s)a=s[i],c[i]!==a&&fr(u,i,a);for(i in(q||K)&&s.value!==c.value&&fr(u,"value",s.value),c)r(s[i])&&(Le(i)?u.removeAttributeNS(Ne,Re(i)):Fe(i)||u.removeAttribute(i))}}function fr(t,n,e){t.tagName.indexOf("-")>-1?lr(t,n,e):Ie(n)?De(e)?t.removeAttribute(n):(e="allowfullscreen"===n&&"EMBED"===t.tagName?"true":n,t.setAttribute(n,e)):Fe(n)?t.setAttribute(n,function(t,n){return De(n)||"false"===n?"false":"contenteditable"===t&&Me(n)?n:"true"}(n,e)):Le(n)?De(e)?t.removeAttributeNS(Ne,Re(n)):t.setAttributeNS(Ne,n,e):lr(t,n,e)}function lr(t,n,e){De(e)?t.removeAttribute(n):(!q||X||"TEXTAREA"!==t.tagName||"placeholder"!==n||""===e||t.__ieph||(t.addEventListener("input",(function n(e){e.stopImmediatePropagation(),t.removeEventListener("input",n)})),t.__ieph=!0),t.setAttribute(n,e))}var pr={create:sr,update:sr};function hr(t,n){var e=n.elm,i=n.data,a=t.data;if(!(r(i.staticClass)&&r(i.class)&&(r(a)||r(a.staticClass)&&r(a.class)))){var u=function(t){for(var n=t.data,e=t,r=t;o(r.componentInstance);)(r=r.componentInstance._vnode)&&r.data&&(n=Ue(r.data,n));for(;o(e=e.parent);)e&&e.data&&(n=Ue(n,e.data));return i=n.staticClass,a=n.class,o(i)||o(a)?Ge(i,Ve(a)):"";var i,a}(n),c=e._transitionClasses;o(c)&&(u=Ge(u,Ve(c))),u!==e._prevClass&&(e.setAttribute("class",u),e._prevClass=u)}}var dr,vr={create:hr,update:hr};function yr(t,n,e){var r=dr;return function o(){var i=n.apply(null,arguments);null!==i&&br(t,o,e,r)}}var mr=Ht&&!(Y&&Number(Y[1])<=53);function gr(t,n,e,r){if(mr){var o=se,i=n;n=i._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=o||t.timeStamp<=0||t.target.ownerDocument!==document)return i.apply(this,arguments)}}dr.addEventListener(t,n,Q?{capture:e,passive:r}:e)}function br(t,n,e,r){(r||dr).removeEventListener(t,n._wrapper||n,e)}function _r(t,n){if(!r(t.data.on)||!r(n.data.on)){var e=n.data.on||{},i=t.data.on||{};dr=n.elm,function(t){if(o(t.__r)){var n=q?"change":"input";t[n]=[].concat(t.__r,t[n]||[]),delete t.__r}o(t.__c)&&(t.change=[].concat(t.__c,t.change||[]),delete t.__c)}(e),an(e,i,gr,br,yr,n.context),dr=void 0}}var wr,xr={create:_r,update:_r};function Sr(t,n){if(!r(t.data.domProps)||!r(n.data.domProps)){var e,i,a=n.elm,u=t.data.domProps||{},c=n.data.domProps||{};for(e in o(c.__ob__)&&(c=n.data.domProps=C({},c)),u)e in c||(a[e]="");for(e in c){if(i=c[e],"textContent"===e||"innerHTML"===e){if(n.children&&(n.children.length=0),i===u[e])continue;1===a.childNodes.length&&a.removeChild(a.childNodes[0])}if("value"===e&&"PROGRESS"!==a.tagName){a._value=i;var s=r(i)?"":String(i);Or(a,s)&&(a.value=s)}else if("innerHTML"===e&&He(a.tagName)&&r(a.innerHTML)){(wr=wr||document.createElement("div")).innerHTML="<svg>"+i+"</svg>";for(var f=wr.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;f.firstChild;)a.appendChild(f.firstChild)}else if(i!==u[e])try{a[e]=i}catch(t){}}}}function Or(t,n){return!t.composing&&("OPTION"===t.tagName||function(t,n){var e=!0;try{e=document.activeElement!==t}catch(t){}return e&&t.value!==n}(t,n)||function(t,n){var e=t.value,r=t._vModifiers;if(o(r)){if(r.number)return h(e)!==h(n);if(r.trim)return e.trim()!==n.trim()}return e!==n}(t,n))}var Er={create:Sr,update:Sr},Ar=b((function(t){var n={},e=/:(.+)/;return t.split(/;(?![^(]*\))/g).forEach((function(t){if(t){var r=t.split(e);r.length>1&&(n[r[0].trim()]=r[1].trim())}})),n}));function Cr(t){var n=jr(t.style);return t.staticStyle?C(t.staticStyle,n):n}function jr(t){return Array.isArray(t)?j(t):"string"==typeof t?Ar(t):t}var kr,$r=/^--/,Pr=/\s*!important$/,Tr=function(t,n,e){if($r.test(n))t.style.setProperty(n,e);else if(Pr.test(e))t.style.setProperty(O(n),e.replace(Pr,""),"important");else{var r=Mr(n);if(Array.isArray(e))for(var o=0,i=e.length;o<i;o++)t.style[r]=e[o];else t.style[r]=e}},Fr=["Webkit","Moz","ms"],Mr=b((function(t){if(kr=kr||document.createElement("div").style,"filter"!==(t=w(t))&&t in kr)return t;for(var n=t.charAt(0).toUpperCase()+t.slice(1),e=0;e<Fr.length;e++){var r=Fr[e]+n;if(r in kr)return r}}));function Ir(t,n){var e=n.data,i=t.data;if(!(r(e.staticStyle)&&r(e.style)&&r(i.staticStyle)&&r(i.style))){var a,u,c=n.elm,s=i.staticStyle,f=i.normalizedStyle||i.style||{},l=s||f,p=jr(n.data.style)||{};n.data.normalizedStyle=o(p.__ob__)?C({},p):p;var h=function(t,n){for(var e,r={},o=t;o.componentInstance;)(o=o.componentInstance._vnode)&&o.data&&(e=Cr(o.data))&&C(r,e);(e=Cr(t.data))&&C(r,e);for(var i=t;i=i.parent;)i.data&&(e=Cr(i.data))&&C(r,e);return r}(n);for(u in l)r(h[u])&&Tr(c,u,"");for(u in h)(a=h[u])!==l[u]&&Tr(c,u,null==a?"":a)}}var Nr={create:Ir,update:Ir},Lr=/\s+/;function Rr(t,n){if(n&&(n=n.trim()))if(t.classList)n.indexOf(" ")>-1?n.split(Lr).forEach((function(n){return t.classList.add(n)})):t.classList.add(n);else{var e=" "+(t.getAttribute("class")||"")+" ";e.indexOf(" "+n+" ")<0&&t.setAttribute("class",(e+n).trim())}}function Dr(t,n){if(n&&(n=n.trim()))if(t.classList)n.indexOf(" ")>-1?n.split(Lr).forEach((function(n){return t.classList.remove(n)})):t.classList.remove(n),t.classList.length||t.removeAttribute("class");else{for(var e=" "+(t.getAttribute("class")||"")+" ",r=" "+n+" ";e.indexOf(r)>=0;)e=e.replace(r," ");(e=e.trim())?t.setAttribute("class",e):t.removeAttribute("class")}}function Ur(n){if(n){if("object"===t(n)){var e={};return!1!==n.css&&C(e,Gr(n.name||"v")),C(e,n),e}return"string"==typeof n?Gr(n):void 0}}var Gr=b((function(t){return{enterClass:t+"-enter",enterToClass:t+"-enter-to",enterActiveClass:t+"-enter-active",leaveClass:t+"-leave",leaveToClass:t+"-leave-to",leaveActiveClass:t+"-leave-active"}})),Vr=W&&!X,Wr="transition",Br="animation",Hr="transition",zr="transitionend",qr="animation",Xr="animationend";Vr&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Hr="WebkitTransition",zr="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(qr="WebkitAnimation",Xr="webkitAnimationEnd"));var Kr=W?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function Jr(t){Kr((function(){Kr(t)}))}function Yr(t,n){var e=t._transitionClasses||(t._transitionClasses=[]);e.indexOf(n)<0&&(e.push(n),Rr(t,n))}function Zr(t,n){t._transitionClasses&&y(t._transitionClasses,n),Dr(t,n)}function Qr(t,n,e){var r=no(t,n),o=r.type,i=r.timeout,a=r.propCount;if(!o)return e();var u=o===Wr?zr:Xr,c=0,s=function(){t.removeEventListener(u,f),e()},f=function(n){n.target===t&&++c>=a&&s()};setTimeout((function(){c<a&&s()}),i+1),t.addEventListener(u,f)}var to=/\b(transform|all)(,|$)/;function no(t,n){var e,r=window.getComputedStyle(t),o=(r[Hr+"Delay"]||"").split(", "),i=(r[Hr+"Duration"]||"").split(", "),a=eo(o,i),u=(r[qr+"Delay"]||"").split(", "),c=(r[qr+"Duration"]||"").split(", "),s=eo(u,c),f=0,l=0;return n===Wr?a>0&&(e=Wr,f=a,l=i.length):n===Br?s>0&&(e=Br,f=s,l=c.length):l=(e=(f=Math.max(a,s))>0?a>s?Wr:Br:null)?e===Wr?i.length:c.length:0,{type:e,timeout:f,propCount:l,hasTransform:e===Wr&&to.test(r[Hr+"Property"])}}function eo(t,n){for(;t.length<n.length;)t=t.concat(t);return Math.max.apply(null,n.map((function(n,e){return ro(n)+ro(t[e])})))}function ro(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function oo(t,n){var e=t.elm;o(e._leaveCb)&&(e._leaveCb.cancelled=!0,e._leaveCb());var i=Ur(t.data.transition);if(!r(i)&&!o(e._enterCb)&&1===e.nodeType){for(var a=i.css,c=i.type,s=i.enterClass,f=i.enterToClass,l=i.enterActiveClass,p=i.appearClass,d=i.appearToClass,v=i.appearActiveClass,y=i.beforeEnter,m=i.enter,g=i.afterEnter,b=i.enterCancelled,_=i.beforeAppear,w=i.appear,x=i.afterAppear,S=i.appearCancelled,O=i.duration,E=Yn,A=Yn.$vnode;A&&A.parent;)E=A.context,A=A.parent;var C=!E._isMounted||!t.isRootInsert;if(!C||w||""===w){var j=C&&p?p:s,k=C&&v?v:l,$=C&&d?d:f,P=C&&_||y,T=C&&"function"==typeof w?w:m,F=C&&x||g,I=C&&S||b,N=h(u(O)?O.enter:O),L=!1!==a&&!X,R=uo(T),D=e._enterCb=M((function(){L&&(Zr(e,$),Zr(e,k)),D.cancelled?(L&&Zr(e,j),I&&I(e)):F&&F(e),e._enterCb=null}));t.data.show||un(t,"insert",(function(){var n=e.parentNode,r=n&&n._pending&&n._pending[t.key];r&&r.tag===t.tag&&r.elm._leaveCb&&r.elm._leaveCb(),T&&T(e,D)})),P&&P(e),L&&(Yr(e,j),Yr(e,k),Jr((function(){Zr(e,j),D.cancelled||(Yr(e,$),R||(ao(N)?setTimeout(D,N):Qr(e,c,D)))}))),t.data.show&&(n&&n(),T&&T(e,D)),L||R||D()}}}function io(t,n){var e=t.elm;o(e._enterCb)&&(e._enterCb.cancelled=!0,e._enterCb());var i=Ur(t.data.transition);if(r(i)||1!==e.nodeType)return n();if(!o(e._leaveCb)){var a=i.css,c=i.type,s=i.leaveClass,f=i.leaveToClass,l=i.leaveActiveClass,p=i.beforeLeave,d=i.leave,v=i.afterLeave,y=i.leaveCancelled,m=i.delayLeave,g=i.duration,b=!1!==a&&!X,_=uo(d),w=h(u(g)?g.leave:g),x=e._leaveCb=M((function(){e.parentNode&&e.parentNode._pending&&(e.parentNode._pending[t.key]=null),b&&(Zr(e,f),Zr(e,l)),x.cancelled?(b&&Zr(e,s),y&&y(e)):(n(),v&&v(e)),e._leaveCb=null}));m?m(S):S()}function S(){x.cancelled||(!t.data.show&&e.parentNode&&((e.parentNode._pending||(e.parentNode._pending={}))[t.key]=t),p&&p(e),b&&(Yr(e,s),Yr(e,l),Jr((function(){Zr(e,s),x.cancelled||(Yr(e,f),_||(ao(w)?setTimeout(x,w):Qr(e,c,x)))}))),d&&d(e,x),b||_||x())}}function ao(t){return"number"==typeof t&&!isNaN(t)}function uo(t){if(r(t))return!1;var n=t.fns;return o(n)?uo(Array.isArray(n)?n[0]:n):(t._length||t.length)>1}function co(t,n){!0!==n.data.show&&oo(n)}var so=function(t){var n,e,u={},c=t.modules,s=t.nodeOps;for(n=0;n<Qe.length;++n)for(u[Qe[n]]=[],e=0;e<c.length;++e)o(c[e][Qe[n]])&&u[Qe[n]].push(c[e][Qe[n]]);function f(t){var n=s.parentNode(t);o(n)&&s.removeChild(n,t)}function l(t,n,e,r,a,c,f){if(o(t.elm)&&o(c)&&(t=c[f]=yt(t)),t.isRootInsert=!a,!function(t,n,e,r){var a=t.data;if(o(a)){var c=o(t.componentInstance)&&a.keepAlive;if(o(a=a.hook)&&o(a=a.init)&&a(t,!1),o(t.componentInstance))return p(t,n),h(e,t.elm,r),i(c)&&function(t,n,e,r){for(var i,a=t;a.componentInstance;)if(o(i=(a=a.componentInstance._vnode).data)&&o(i=i.transition)){for(i=0;i<u.activate.length;++i)u.activate[i](Ze,a);n.push(a);break}h(e,t.elm,r)}(t,n,e,r),!0}}(t,n,e,r)){var l=t.data,d=t.children,y=t.tag;o(y)?(t.elm=t.ns?s.createElementNS(t.ns,y):s.createElement(y,t),g(t),v(t,d,n),o(l)&&m(t,n),h(e,t.elm,r)):i(t.isComment)?(t.elm=s.createComment(t.text),h(e,t.elm,r)):(t.elm=s.createTextNode(t.text),h(e,t.elm,r))}}function p(t,n){o(t.data.pendingInsert)&&(n.push.apply(n,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,y(t)?(m(t,n),g(t)):(Ye(t),n.push(t))}function h(t,n,e){o(t)&&(o(e)?s.parentNode(e)===t&&s.insertBefore(t,n,e):s.appendChild(t,n))}function v(t,n,e){if(Array.isArray(n))for(var r=0;r<n.length;++r)l(n[r],e,t.elm,null,!0,n,r);else a(t.text)&&s.appendChild(t.elm,s.createTextNode(String(t.text)))}function y(t){for(;t.componentInstance;)t=t.componentInstance._vnode;return o(t.tag)}function m(t,e){for(var r=0;r<u.create.length;++r)u.create[r](Ze,t);o(n=t.data.hook)&&(o(n.create)&&n.create(Ze,t),o(n.insert)&&e.push(t))}function g(t){var n;if(o(n=t.fnScopeId))s.setStyleScope(t.elm,n);else for(var e=t;e;)o(n=e.context)&&o(n=n.$options._scopeId)&&s.setStyleScope(t.elm,n),e=e.parent;o(n=Yn)&&n!==t.context&&n!==t.fnContext&&o(n=n.$options._scopeId)&&s.setStyleScope(t.elm,n)}function b(t,n,e,r,o,i){for(;r<=o;++r)l(e[r],i,t,n,!1,e,r)}function _(t){var n,e,r=t.data;if(o(r))for(o(n=r.hook)&&o(n=n.destroy)&&n(t),n=0;n<u.destroy.length;++n)u.destroy[n](t);if(o(n=t.children))for(e=0;e<t.children.length;++e)_(t.children[e])}function w(t,n,e){for(;n<=e;++n){var r=t[n];o(r)&&(o(r.tag)?(x(r),_(r)):f(r.elm))}}function x(t,n){if(o(n)||o(t.data)){var e,r=u.remove.length+1;for(o(n)?n.listeners+=r:n=function(t,n){function e(){0==--e.listeners&&f(t)}return e.listeners=n,e}(t.elm,r),o(e=t.componentInstance)&&o(e=e._vnode)&&o(e.data)&&x(e,n),e=0;e<u.remove.length;++e)u.remove[e](t,n);o(e=t.data.hook)&&o(e=e.remove)?e(t,n):n()}else f(t.elm)}function S(t,n,e,r){for(var i=e;i<r;i++){var a=n[i];if(o(a)&&tr(t,a))return i}}function O(t,n,e,a,c,f){if(t!==n){o(n.elm)&&o(a)&&(n=a[c]=yt(n));var p=n.elm=t.elm;if(i(t.isAsyncPlaceholder))o(n.asyncFactory.resolved)?C(t.elm,n,e):n.isAsyncPlaceholder=!0;else if(i(n.isStatic)&&i(t.isStatic)&&n.key===t.key&&(i(n.isCloned)||i(n.isOnce)))n.componentInstance=t.componentInstance;else{var h,d=n.data;o(d)&&o(h=d.hook)&&o(h=h.prepatch)&&h(t,n);var v=t.children,m=n.children;if(o(d)&&y(n)){for(h=0;h<u.update.length;++h)u.update[h](t,n);o(h=d.hook)&&o(h=h.update)&&h(t,n)}r(n.text)?o(v)&&o(m)?v!==m&&function(t,n,e,i,a){for(var u,c,f,p=0,h=0,d=n.length-1,v=n[0],y=n[d],m=e.length-1,g=e[0],_=e[m],x=!a;p<=d&&h<=m;)r(v)?v=n[++p]:r(y)?y=n[--d]:tr(v,g)?(O(v,g,i,e,h),v=n[++p],g=e[++h]):tr(y,_)?(O(y,_,i,e,m),y=n[--d],_=e[--m]):tr(v,_)?(O(v,_,i,e,m),x&&s.insertBefore(t,v.elm,s.nextSibling(y.elm)),v=n[++p],_=e[--m]):tr(y,g)?(O(y,g,i,e,h),x&&s.insertBefore(t,y.elm,v.elm),y=n[--d],g=e[++h]):(r(u)&&(u=nr(n,p,d)),r(c=o(g.key)?u[g.key]:S(g,n,p,d))?l(g,i,t,v.elm,!1,e,h):tr(f=n[c],g)?(O(f,g,i,e,h),n[c]=void 0,x&&s.insertBefore(t,f.elm,v.elm)):l(g,i,t,v.elm,!1,e,h),g=e[++h]);p>d?b(t,r(e[m+1])?null:e[m+1].elm,e,h,m,i):h>m&&w(n,p,d)}(p,v,m,e,f):o(m)?(o(t.text)&&s.setTextContent(p,""),b(p,null,m,0,m.length-1,e)):o(v)?w(v,0,v.length-1):o(t.text)&&s.setTextContent(p,""):t.text!==n.text&&s.setTextContent(p,n.text),o(d)&&o(h=d.hook)&&o(h=h.postpatch)&&h(t,n)}}}function E(t,n,e){if(i(e)&&o(t.parent))t.parent.data.pendingInsert=n;else for(var r=0;r<n.length;++r)n[r].data.hook.insert(n[r])}var A=d("attrs,class,staticClass,staticStyle,key");function C(t,n,e,r){var a,u=n.tag,c=n.data,s=n.children;if(r=r||c&&c.pre,n.elm=t,i(n.isComment)&&o(n.asyncFactory))return n.isAsyncPlaceholder=!0,!0;if(o(c)&&(o(a=c.hook)&&o(a=a.init)&&a(n,!0),o(a=n.componentInstance)))return p(n,e),!0;if(o(u)){if(o(s))if(t.hasChildNodes())if(o(a=c)&&o(a=a.domProps)&&o(a=a.innerHTML)){if(a!==t.innerHTML)return!1}else{for(var f=!0,l=t.firstChild,h=0;h<s.length;h++){if(!l||!C(l,s[h],e,r)){f=!1;break}l=l.nextSibling}if(!f||l)return!1}else v(n,s,e);if(o(c)){var d=!1;for(var y in c)if(!A(y)){d=!0,m(n,e);break}!d&&c.class&&nn(c.class)}}else t.data!==n.text&&(t.data=n.text);return!0}return function(t,n,e,a){if(!r(n)){var c,f=!1,p=[];if(r(t))f=!0,l(n,p);else{var h=o(t.nodeType);if(!h&&tr(t,n))O(t,n,p,null,null,a);else{if(h){if(1===t.nodeType&&t.hasAttribute(I)&&(t.removeAttribute(I),e=!0),i(e)&&C(t,n,p))return E(n,p,!0),t;c=t,t=new pt(s.tagName(c).toLowerCase(),{},[],void 0,c)}var d=t.elm,v=s.parentNode(d);if(l(n,p,d._leaveCb?null:v,s.nextSibling(d)),o(n.parent))for(var m=n.parent,g=y(n);m;){for(var b=0;b<u.destroy.length;++b)u.destroy[b](m);if(m.elm=n.elm,g){for(var x=0;x<u.create.length;++x)u.create[x](Ze,m);var S=m.data.hook.insert;if(S.merged)for(var A=1;A<S.fns.length;A++)S.fns[A]()}else Ye(m);m=m.parent}o(v)?w([t],0,0):o(t.tag)&&_(t)}}return E(n,p,f),n.elm}o(t)&&_(t)}}({nodeOps:Ke,modules:[pr,vr,xr,Er,Nr,W?{create:co,activate:co,remove:function(t,n){!0!==t.data.show?io(t,n):n()}}:{}].concat(cr)});X&&document.addEventListener("selectionchange",(function(){var t=document.activeElement;t&&t.vmodel&&go(t,"input")}));var fo={inserted:function(t,n,e,r){"select"===e.tag?(r.elm&&!r.elm._vOptions?un(e,"postpatch",(function(){fo.componentUpdated(t,n,e)})):lo(t,n,e.context),t._vOptions=[].map.call(t.options,vo)):("textarea"===e.tag||Xe(t.type))&&(t._vModifiers=n.modifiers,n.modifiers.lazy||(t.addEventListener("compositionstart",yo),t.addEventListener("compositionend",mo),t.addEventListener("change",mo),X&&(t.vmodel=!0)))},componentUpdated:function(t,n,e){if("select"===e.tag){lo(t,n,e.context);var r=t._vOptions,o=t._vOptions=[].map.call(t.options,vo);o.some((function(t,n){return!T(t,r[n])}))&&(t.multiple?n.value.some((function(t){return ho(t,o)})):n.value!==n.oldValue&&ho(n.value,o))&&go(t,"change")}}};function lo(t,n,e){po(t,n),(q||K)&&setTimeout((function(){po(t,n)}),0)}function po(t,n,e){var r=n.value,o=t.multiple;if(!o||Array.isArray(r)){for(var i,a,u=0,c=t.options.length;u<c;u++)if(a=t.options[u],o)i=F(r,vo(a))>-1,a.selected!==i&&(a.selected=i);else if(T(vo(a),r))return void(t.selectedIndex!==u&&(t.selectedIndex=u));o||(t.selectedIndex=-1)}}function ho(t,n){return n.every((function(n){return!T(n,t)}))}function vo(t){return"_value"in t?t._value:t.value}function yo(t){t.target.composing=!0}function mo(t){t.target.composing&&(t.target.composing=!1,go(t.target,"input"))}function go(t,n){var e=document.createEvent("HTMLEvents");e.initEvent(n,!0,!0),t.dispatchEvent(e)}function bo(t){return!t.componentInstance||t.data&&t.data.transition?t:bo(t.componentInstance._vnode)}var _o={model:fo,show:{bind:function(t,n,e){var r=n.value,o=(e=bo(e)).data&&e.data.transition,i=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;r&&o?(e.data.show=!0,oo(e,(function(){t.style.display=i}))):t.style.display=r?i:"none"},update:function(t,n,e){var r=n.value;!r!=!n.oldValue&&((e=bo(e)).data&&e.data.transition?(e.data.show=!0,r?oo(e,(function(){t.style.display=t.__vOriginalDisplay})):io(e,(function(){t.style.display="none"}))):t.style.display=r?t.__vOriginalDisplay:"none")},unbind:function(t,n,e,r,o){o||(t.style.display=t.__vOriginalDisplay)}}},wo={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function xo(t){var n=t&&t.componentOptions;return n&&n.Ctor.options.abstract?xo(zn(n.children)):t}function So(t){var n={},e=t.$options;for(var r in e.propsData)n[r]=t[r];var o=e._parentListeners;for(var i in o)n[w(i)]=o[i];return n}function Oo(t,n){if(/\d-keep-alive$/.test(n.tag))return t("keep-alive",{props:n.componentOptions.propsData})}var Eo=function(t){return t.tag||Hn(t)},Ao=function(t){return"show"===t.name},Co={name:"transition",props:wo,abstract:!0,render:function(t){var n=this,e=this.$slots.default;if(e&&(e=e.filter(Eo)).length){var r=this.mode,o=e[0];if(function(t){for(;t=t.parent;)if(t.data.transition)return!0}(this.$vnode))return o;var i=xo(o);if(!i)return o;if(this._leaving)return Oo(t,o);var u="__transition-"+this._uid+"-";i.key=null==i.key?i.isComment?u+"comment":u+i.tag:a(i.key)?0===String(i.key).indexOf(u)?i.key:u+i.key:i.key;var c=(i.data||(i.data={})).transition=So(this),s=this._vnode,f=xo(s);if(i.data.directives&&i.data.directives.some(Ao)&&(i.data.show=!0),f&&f.data&&!function(t,n){return n.key===t.key&&n.tag===t.tag}(i,f)&&!Hn(f)&&(!f.componentInstance||!f.componentInstance._vnode.isComment)){var l=f.data.transition=C({},c);if("out-in"===r)return this._leaving=!0,un(l,"afterLeave",(function(){n._leaving=!1,n.$forceUpdate()})),Oo(t,o);if("in-out"===r){if(Hn(i))return s;var p,h=function(){p()};un(c,"afterEnter",h),un(c,"enterCancelled",h),un(l,"delayLeave",(function(t){p=t}))}}return o}}},jo=C({tag:String,moveClass:String},wo);function ko(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function $o(t){t.data.newPos=t.elm.getBoundingClientRect()}function Po(t){var n=t.data.pos,e=t.data.newPos,r=n.left-e.left,o=n.top-e.top;if(r||o){t.data.moved=!0;var i=t.elm.style;i.transform=i.WebkitTransform="translate("+r+"px,"+o+"px)",i.transitionDuration="0s"}}delete jo.mode;var To={Transition:Co,TransitionGroup:{props:jo,beforeMount:function(){var t=this,n=this._update;this._update=function(e,r){var o=Zn(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,o(),n.call(t,e,r)}},render:function(t){for(var n=this.tag||this.$vnode.data.tag||"span",e=Object.create(null),r=this.prevChildren=this.children,o=this.$slots.default||[],i=this.children=[],a=So(this),u=0;u<o.length;u++){var c=o[u];c.tag&&null!=c.key&&0!==String(c.key).indexOf("__vlist")&&(i.push(c),e[c.key]=c,(c.data||(c.data={})).transition=a)}if(r){for(var s=[],f=[],l=0;l<r.length;l++){var p=r[l];p.data.transition=a,p.data.pos=p.elm.getBoundingClientRect(),e[p.key]?s.push(p):f.push(p)}this.kept=t(n,null,s),this.removed=f}return t(n,null,i)},updated:function(){var t=this.prevChildren,n=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,n)&&(t.forEach(ko),t.forEach($o),t.forEach(Po),this._reflow=document.body.offsetHeight,t.forEach((function(t){if(t.data.moved){var e=t.elm,r=e.style;Yr(e,n),r.transform=r.WebkitTransform=r.transitionDuration="",e.addEventListener(zr,e._moveCb=function t(r){r&&r.target!==e||r&&!/transform$/.test(r.propertyName)||(e.removeEventListener(zr,t),e._moveCb=null,Zr(e,n))})}})))},methods:{hasMove:function(t,n){if(!Vr)return!1;if(this._hasMove)return this._hasMove;var e=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach((function(t){Dr(e,t)})),Rr(e,n),e.style.display="none",this.$el.appendChild(e);var r=no(e);return this.$el.removeChild(e),this._hasMove=r.hasTransform}}}};Oe.config.mustUseProp=function(t,n,e){return"value"===e&&Te(t)&&"button"!==n||"selected"===e&&"option"===t||"checked"===e&&"input"===t||"muted"===e&&"video"===t},Oe.config.isReservedTag=ze,Oe.config.isReservedAttr=Pe,Oe.config.getTagNamespace=function(t){return He(t)?"svg":"math"===t?"math":void 0},Oe.config.isUnknownElement=function(t){if(!W)return!0;if(ze(t))return!1;if(t=t.toLowerCase(),null!=qe[t])return qe[t];var n=document.createElement(t);return t.indexOf("-")>-1?qe[t]=n.constructor===window.HTMLUnknownElement||n.constructor===window.HTMLElement:qe[t]=/HTMLUnknownElement/.test(n.toString())},C(Oe.options.directives,_o),C(Oe.options.components,To),Oe.prototype.__patch__=W?so:k,Oe.prototype.$mount=function(t,n){return function(t,n,e){var r;return t.$el=n,t.$options.render||(t.$options.render=dt),ee(t,"beforeMount"),r=function(){t._update(t._render(),e)},new de(t,r,k,{before:function(){t._isMounted&&!t._isDestroyed&&ee(t,"beforeUpdate")}},!0),e=!1,null==t.$vnode&&(t._isMounted=!0,ee(t,"mounted")),t}(this,t=t&&W?function(t){return"string"==typeof t?document.querySelector(t)||document.createElement("div"):t}(t):void 0,n)},W&&setTimeout((function(){R.devtools&&et&&et.emit("init",Oe)}),0);var Fo=Oe;function Mo(t){return(Mo="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Io(t){this.state=2,this.value=void 0,this.deferred=[];var n=this;try{t((function(t){n.resolve(t)}),(function(t){n.reject(t)}))}catch(t){n.reject(t)}}Io.reject=function(t){return new Io((function(n,e){e(t)}))},Io.resolve=function(t){return new Io((function(n,e){n(t)}))},Io.all=function(t){return new Io((function(n,e){var r=0,o=[];function i(e){return function(i){o[e]=i,(r+=1)===t.length&&n(o)}}0===t.length&&n(o);for(var a=0;a<t.length;a+=1)Io.resolve(t[a]).then(i(a),e)}))},Io.race=function(t){return new Io((function(n,e){for(var r=0;r<t.length;r+=1)Io.resolve(t[r]).then(n,e)}))};var No=Io.prototype;function Lo(t,n){this.promise=t instanceof Promise?t:new Promise(t.bind(n)),this.context=n}No.resolve=function(t){var n=this;if(2===n.state){if(t===n)throw new TypeError("Promise settled with itself.");var e=!1;try{var r=t&&t.then;if(null!==t&&"object"===Mo(t)&&"function"==typeof r)return void r.call(t,(function(t){e||n.resolve(t),e=!0}),(function(t){e||n.reject(t),e=!0}))}catch(t){return void(e||n.reject(t))}n.state=0,n.value=t,n.notify()}},No.reject=function(t){var n=this;if(2===n.state){if(t===n)throw new TypeError("Promise settled with itself.");n.state=1,n.value=t,n.notify()}},No.notify=function(){var t=this;Do((function(){if(2!==t.state)for(;t.deferred.length;){var n=t.deferred.shift(),e=n[0],r=n[1],o=n[2],i=n[3];try{0===t.state?o("function"==typeof e?e.call(void 0,t.value):t.value):1===t.state&&("function"==typeof r?o(r.call(void 0,t.value)):i(t.value))}catch(t){i(t)}}}),undefined)},No.then=function(t,n){var e=this;return new Io((function(r,o){e.deferred.push([t,n,r,o]),e.notify()}))},No.catch=function(t){return this.then(void 0,t)},"undefined"==typeof Promise&&(window.Promise=Io),Lo.all=function(t,n){return new Lo(Promise.all(t),n)},Lo.resolve=function(t,n){return new Lo(Promise.resolve(t),n)},Lo.reject=function(t,n){return new Lo(Promise.reject(t),n)},Lo.race=function(t,n){return new Lo(Promise.race(t),n)};var Ro=Lo.prototype;Ro.bind=function(t){return this.context=t,this},Ro.then=function(t,n){return t&&t.bind&&this.context&&(t=t.bind(this.context)),n&&n.bind&&this.context&&(n=n.bind(this.context)),new Lo(this.promise.then(t,n),this.context)},Ro.catch=function(t){return t&&t.bind&&this.context&&(t=t.bind(this.context)),new Lo(this.promise.catch(t),this.context)},Ro.finally=function(t){return this.then((function(n){return t.call(this),n}),(function(n){return t.call(this),Promise.reject(n)}))};var Do,Uo={}.hasOwnProperty,Go=[].slice,Vo=!1,Wo="undefined"!=typeof window;function Bo(t){return t?t.replace(/^\s*|\s*$/g,""):""}function Ho(t){return t?t.toLowerCase():""}var zo=Array.isArray;function qo(t){return"string"==typeof t}function Xo(t){return"function"==typeof t}function Ko(t){return null!==t&&"object"===Mo(t)}function Jo(t){return Ko(t)&&Object.getPrototypeOf(t)==Object.prototype}function Yo(t,n,e){var r=Lo.resolve(t);return arguments.length<2?r:r.then(n,e)}function Zo(t,n,e){return Xo(e=e||{})&&(e=e.call(n)),ni(t.bind({$vm:n,$options:e}),t,{$options:e})}function Qo(t,n){var e,r;if(zo(t))for(e=0;e<t.length;e++)n.call(t[e],t[e],e);else if(Ko(t))for(r in t)Uo.call(t,r)&&n.call(t[r],t[r],r);return t}var ti=Object.assign||function(t){var n=Go.call(arguments,1);return n.forEach((function(n){ei(t,n)})),t};function ni(t){var n=Go.call(arguments,1);return n.forEach((function(n){ei(t,n,!0)})),t}function ei(t,n,e){for(var r in n)e&&(Jo(n[r])||zo(n[r]))?(Jo(n[r])&&!Jo(t[r])&&(t[r]={}),zo(n[r])&&!zo(t[r])&&(t[r]=[]),ei(t[r],n[r],e)):void 0!==n[r]&&(t[r]=n[r])}function ri(t){return null!=t}function oi(t){return";"===t||"&"===t||"?"===t}function ii(t,n,e){return n="+"===t||"#"===t?ai(n):encodeURIComponent(n),e?encodeURIComponent(e)+"="+n:n}function ai(t){return t.split(/(%[0-9A-Fa-f]{2})/g).map((function(t){return/%[0-9A-Fa-f]/.test(t)||(t=encodeURI(t)),t})).join("")}function ui(t,n){var e,r=this||{},o=t;return qo(t)&&(o={url:t,params:n}),o=ni({},ui.options,r.$options,o),ui.transforms.forEach((function(t){qo(t)&&(t=ui.transform[t]),Xo(t)&&(e=function(t,n,e){return function(r){return t.call(e,r,n)}}(t,e,r.$vm))})),e(o)}function ci(t,n,e){var r,o=zo(n),i=Jo(n);Qo(n,(function(n,a){r=Ko(n)||zo(n),e&&(a=e+"["+(i||r?a:"")+"]"),!e&&o?t.add(n.name,n.value):r?ci(t,n,a):t.add(a,n)}))}function si(t){return new Lo((function(n){var e=new XDomainRequest,r=function(r){var o=r.type,i=0;"load"===o?i=200:"error"===o&&(i=500),n(t.respondWith(e.responseText,{status:i}))};t.abort=function(){return e.abort()},e.open(t.method,t.getUrl()),t.timeout&&(e.timeout=t.timeout),e.onload=r,e.onabort=r,e.onerror=r,e.ontimeout=r,e.onprogress=function(){},e.send(t.getBody())}))}ui.options={url:"",root:null,params:{}},ui.transform={template:function(t){var n=[],e=function(t,n,e){var r=function(t){var n=["+","#",".","/",";","?","&"],e=[];return{vars:e,expand:function(r){return t.replace(/\{([^{}]+)\}|([^{}]+)/g,(function(t,o,i){if(o){var a=null,u=[];if(-1!==n.indexOf(o.charAt(0))&&(a=o.charAt(0),o=o.substr(1)),o.split(/,/g).forEach((function(t){var n=/([^:*]*)(?::(\d+)|(\*))?/.exec(t);u.push.apply(u,function(t,n,e,r){var o=t[e],i=[];if(ri(o)&&""!==o)if("string"==typeof o||"number"==typeof o||"boolean"==typeof o)o=o.toString(),r&&"*"!==r&&(o=o.substring(0,parseInt(r,10))),i.push(ii(n,o,oi(n)?e:null));else if("*"===r)Array.isArray(o)?o.filter(ri).forEach((function(t){i.push(ii(n,t,oi(n)?e:null))})):Object.keys(o).forEach((function(t){ri(o[t])&&i.push(ii(n,o[t],t))}));else{var a=[];Array.isArray(o)?o.filter(ri).forEach((function(t){a.push(ii(n,t))})):Object.keys(o).forEach((function(t){ri(o[t])&&(a.push(encodeURIComponent(t)),a.push(ii(n,o[t].toString())))})),oi(n)?i.push(encodeURIComponent(e)+"="+a.join(",")):0!==a.length&&i.push(a.join(","))}else";"===n?i.push(encodeURIComponent(e)):""!==o||"&"!==n&&"?"!==n?""===o&&i.push(""):i.push(encodeURIComponent(e)+"=");return i}(r,a,n[1],n[2]||n[3])),e.push(n[1])})),a&&"+"!==a){var c=",";return"?"===a?c="&":"#"!==a&&(c=a),(0!==u.length?a:"")+u.join(c)}return u.join(",")}return ai(i)}))}}}(t),o=r.expand(n);return e&&e.push.apply(e,r.vars),o}(t.url,t.params,n);return n.forEach((function(n){delete t.params[n]})),e},query:function(t,n){var e=Object.keys(ui.options.params),r={},o=n(t);return Qo(t.params,(function(t,n){-1===e.indexOf(n)&&(r[n]=t)})),(r=ui.params(r))&&(o+=(-1==o.indexOf("?")?"?":"&")+r),o},root:function(t,n){var e,r=n(t);return qo(t.root)&&!/^(https?:)?\//.test(r)&&("/",r=((e=t.root)?e.replace(new RegExp("[/]+$"),""):e)+"/"+r),r}},ui.transforms=["template","query","root"],ui.params=function(t){var n=[],e=encodeURIComponent;return n.add=function(t,n){Xo(n)&&(n=n()),null===n&&(n=""),this.push(e(t)+"="+e(n))},ci(n,t),n.join("&").replace(/%20/g,"+")},ui.parse=function(t){var n=document.createElement("a");return document.documentMode&&(n.href=t,t=n.href),n.href=t,{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",port:n.port,host:n.host,hostname:n.hostname,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):""}};var fi=Wo&&"withCredentials"in new XMLHttpRequest;function li(t){return new Lo((function(n){var e,r,o=t.jsonp||"callback",i=t.jsonpCallback||"_jsonp"+Math.random().toString(36).substr(2),a=null;e=function(e){var o=e.type,u=0;"load"===o&&null!==a?u=200:"error"===o&&(u=500),u&&window[i]&&(delete window[i],document.body.removeChild(r)),n(t.respondWith(a,{status:u}))},window[i]=function(t){a=JSON.stringify(t)},t.abort=function(){e({type:"abort"})},t.params[o]=i,t.timeout&&setTimeout(t.abort,t.timeout),(r=document.createElement("script")).src=t.getUrl(),r.type="text/javascript",r.async=!0,r.onload=e,r.onerror=e,document.body.appendChild(r)}))}function pi(t){return new Lo((function(n){var e=new XMLHttpRequest,r=function(r){var o=t.respondWith("response"in e?e.response:e.responseText,{status:1223===e.status?204:e.status,statusText:1223===e.status?"No Content":Bo(e.statusText)});Qo(Bo(e.getAllResponseHeaders()).split("\n"),(function(t){o.headers.append(t.slice(0,t.indexOf(":")),t.slice(t.indexOf(":")+1))})),n(o)};t.abort=function(){return e.abort()},e.open(t.method,t.getUrl(),!0),t.timeout&&(e.timeout=t.timeout),t.responseType&&"responseType"in e&&(e.responseType=t.responseType),(t.withCredentials||t.credentials)&&(e.withCredentials=!0),t.crossOrigin||t.headers.set("X-Requested-With","XMLHttpRequest"),Xo(t.progress)&&"GET"===t.method&&e.addEventListener("progress",t.progress),Xo(t.downloadProgress)&&e.addEventListener("progress",t.downloadProgress),Xo(t.progress)&&/^(POST|PUT)$/i.test(t.method)&&e.upload.addEventListener("progress",t.progress),Xo(t.uploadProgress)&&e.upload&&e.upload.addEventListener("progress",t.uploadProgress),t.headers.forEach((function(t,n){e.setRequestHeader(n,t)})),e.onload=r,e.onabort=r,e.onerror=r,e.ontimeout=r,e.send(t.getBody())}))}function hi(t){var n=e(6608);return new Lo((function(e){var r,o=t.getUrl(),i=t.getBody(),a=t.method,u={};t.headers.forEach((function(t,n){u[n]=t})),n(o,{body:i,method:a,headers:u}).then(r=function(n){var r=t.respondWith(n.body,{status:n.statusCode,statusText:Bo(n.statusMessage)});Qo(n.headers,(function(t,n){r.headers.set(n,t)})),e(r)},(function(t){return r(t.response)}))}))}function di(t){return(t.client||(Wo?pi:hi))(t)}var vi=function(){function t(t){var n=this;this.map={},Qo(t,(function(t,e){return n.append(e,t)}))}var n=t.prototype;return n.has=function(t){return null!==yi(this.map,t)},n.get=function(t){var n=this.map[yi(this.map,t)];return n?n.join():null},n.getAll=function(t){return this.map[yi(this.map,t)]||[]},n.set=function(t,n){this.map[function(t){if(/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return Bo(t)}(yi(this.map,t)||t)]=[Bo(n)]},n.append=function(t,n){var e=this.map[yi(this.map,t)];e?e.push(Bo(n)):this.set(t,n)},n.delete=function(t){delete this.map[yi(this.map,t)]},n.deleteAll=function(){this.map={}},n.forEach=function(t,n){var e=this;Qo(this.map,(function(r,o){Qo(r,(function(r){return t.call(n,r,o,e)}))}))},t}();function yi(t,n){return Object.keys(t).reduce((function(t,e){return Ho(n)===Ho(e)?e:t}),null)}var mi=function(){function t(t,n){var e=n.url,r=n.headers,o=n.status,i=n.statusText;this.url=e,this.ok=o>=200&&o<300,this.status=o||0,this.statusText=i||"",this.headers=new vi(r),this.body=t,qo(t)?this.bodyText=t:"undefined"!=typeof Blob&&t instanceof Blob&&(this.bodyBlob=t,function(t){return 0===t.type.indexOf("text")||-1!==t.type.indexOf("json")}(t)&&(this.bodyText=function(t){return new Lo((function(n){var e=new FileReader;e.readAsText(t),e.onload=function(){n(e.result)}}))}(t)))}var n=t.prototype;return n.blob=function(){return Yo(this.bodyBlob)},n.text=function(){return Yo(this.bodyText)},n.json=function(){return Yo(this.text(),(function(t){return JSON.parse(t)}))},t}();Object.defineProperty(mi.prototype,"data",{get:function(){return this.body},set:function(t){this.body=t}});var gi=function(){function t(t){var n;this.body=null,this.params={},ti(this,t,{method:(n=t.method||"GET",n?n.toUpperCase():"")}),this.headers instanceof vi||(this.headers=new vi(this.headers))}var n=t.prototype;return n.getUrl=function(){return ui(this)},n.getBody=function(){return this.body},n.respondWith=function(t,n){return new mi(t,ti(n||{},{url:this.getUrl()}))},t}(),bi={"Content-Type":"application/json;charset=utf-8"};function _i(t){var n=this||{},e=function(t){var n=[di],e=[];function r(r){for(;n.length;){var o=n.pop();if(Xo(o)){var i=function(){var n=void 0,i=void 0;if(Ko(n=o.call(t,r,(function(t){return i=t}))||i))return{v:new Lo((function(r,o){e.forEach((function(e){n=Yo(n,(function(n){return e.call(t,n)||n}),o)})),Yo(n,r,o)}),t)};Xo(n)&&e.unshift(n)}();if("object"===Mo(i))return i.v}else a="Invalid interceptor of type "+Mo(o)+", must be a function","undefined"!=typeof console&&Vo&&console.warn("[VueResource warn]: "+a)}var a}return Ko(t)||(t=null),r.use=function(t){n.push(t)},r}(n.$vm);return function(t){Go.call(arguments,1).forEach((function(n){for(var e in n)void 0===t[e]&&(t[e]=n[e])}))}(t||{},n.$options,_i.options),_i.interceptors.forEach((function(t){qo(t)&&(t=_i.interceptor[t]),Xo(t)&&e.use(t)})),e(new gi(t)).then((function(t){return t.ok?t:Lo.reject(t)}),(function(t){var n;return t instanceof Error&&(n=t,"undefined"!=typeof console&&console.error(n)),Lo.reject(t)}))}function wi(t,n,e,r){var o=this||{},i={};return Qo(e=ti({},wi.actions,e),(function(e,a){e=ni({url:t,params:ti({},n)},r,e),i[a]=function(){return(o.$http||_i)(xi(e,arguments))}})),i}function xi(t,n){var e,r=ti({},t),o={};switch(n.length){case 2:o=n[0],e=n[1];break;case 1:/^(POST|PUT|PATCH)$/i.test(r.method)?e=n[0]:o=n[0];break;case 0:break;default:throw"Expected up to 2 arguments [params, body], got "+n.length+" arguments"}return r.body=e,r.params=ti({},r.params,o),r}function Si(t){Si.installed||(function(t){var n=t.config,e=t.nextTick;Do=e,Vo=n.debug||!n.silent}(t),t.url=ui,t.http=_i,t.resource=wi,t.Promise=Lo,Object.defineProperties(t.prototype,{$url:{get:function(){return Zo(t.url,this,this.$options.url)}},$http:{get:function(){return Zo(t.http,this,this.$options.http)}},$resource:{get:function(){return t.resource.bind(this)}},$promise:{get:function(){var n=this;return function(e){return new t.Promise(e,n)}}}}))}_i.options={},_i.headers={put:bi,post:bi,patch:bi,delete:bi,common:{Accept:"application/json, text/plain, */*"},custom:{}},_i.interceptor={before:function(t){Xo(t.before)&&t.before.call(this,t)},method:function(t){t.emulateHTTP&&/^(PUT|PATCH|DELETE)$/i.test(t.method)&&(t.headers.set("X-HTTP-Method-Override",t.method),t.method="POST")},jsonp:function(t){"JSONP"==t.method&&(t.client=li)},json:function(t){var n=t.headers.get("Content-Type")||"";return Ko(t.body)&&0===n.indexOf("application/json")&&(t.body=JSON.stringify(t.body)),function(t){return t.bodyText?Yo(t.text(),(function(n){var e,r;if(0===(t.headers.get("Content-Type")||"").indexOf("application/json")||(r=(e=n).match(/^\s*(\[|\{)/))&&{"[":/]\s*$/,"{":/}\s*$/}[r[1]].test(e))try{t.body=JSON.parse(n)}catch(n){t.body=null}else t.body=n;return t})):t}},form:function(t){var n;n=t.body,"undefined"!=typeof FormData&&n instanceof FormData?t.headers.delete("Content-Type"):Ko(t.body)&&t.emulateJSON&&(t.body=ui.params(t.body),t.headers.set("Content-Type","application/x-www-form-urlencoded"))},header:function(t){Qo(ti({},_i.headers.common,t.crossOrigin?{}:_i.headers.custom,_i.headers[Ho(t.method)]),(function(n,e){t.headers.has(e)||t.headers.set(e,n)}))},cors:function(t){if(Wo){var n=ui.parse(location.href),e=ui.parse(t.getUrl());e.protocol===n.protocol&&e.host===n.host||(t.crossOrigin=!0,t.emulateHTTP=!1,fi||(t.client=si))}}},_i.interceptors=["before","method","jsonp","json","form","header","cors"],["get","delete","head","jsonp"].forEach((function(t){_i[t]=function(n,e){return this(ti(e||{},{url:n,method:t}))}})),["post","put","patch"].forEach((function(t){_i[t]=function(n,e,r){return this(ti(r||{},{url:n,method:t,body:e}))}})),wi.actions={get:{method:"GET"},save:{method:"POST"},query:{method:"GET"},update:{method:"PUT"},remove:{method:"DELETE"},delete:{method:"DELETE"}},"undefined"!=typeof window&&window.Vue&&!window.Vue.resource&&window.Vue.use(Si);var Oi=Si,Ei=e(7027),Ai=e.n(Ei);function Ci(t){return(Ci="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var ji=("undefined"!=typeof window?window:void 0!==e.g?e.g:{}).__VUE_DEVTOOLS_GLOBAL_HOOK__;function ki(t,n){if(void 0===n&&(n=[]),null===t||"object"!==Ci(t))return t;var e,r=(e=function(n){return n.original===t},n.filter(e)[0]);if(r)return r.copy;var o=Array.isArray(t)?[]:{};return n.push({original:t,copy:o}),Object.keys(t).forEach((function(e){o[e]=ki(t[e],n)})),o}function $i(t,n){Object.keys(t).forEach((function(e){return n(t[e],e)}))}function Pi(t){return null!==t&&"object"===Ci(t)}var Ti=function(t,n){this.runtime=n,this._children=Object.create(null),this._rawModule=t;var e=t.state;this.state=("function"==typeof e?e():e)||{}},Fi={namespaced:{configurable:!0}};Fi.namespaced.get=function(){return!!this._rawModule.namespaced},Ti.prototype.addChild=function(t,n){this._children[t]=n},Ti.prototype.removeChild=function(t){delete this._children[t]},Ti.prototype.getChild=function(t){return this._children[t]},Ti.prototype.hasChild=function(t){return t in this._children},Ti.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},Ti.prototype.forEachChild=function(t){$i(this._children,t)},Ti.prototype.forEachGetter=function(t){this._rawModule.getters&&$i(this._rawModule.getters,t)},Ti.prototype.forEachAction=function(t){this._rawModule.actions&&$i(this._rawModule.actions,t)},Ti.prototype.forEachMutation=function(t){this._rawModule.mutations&&$i(this._rawModule.mutations,t)},Object.defineProperties(Ti.prototype,Fi);var Mi,Ii=function(t){this.register([],t,!1)};function Ni(t,n,e){if(n.update(e),e.modules)for(var r in e.modules){if(!n.getChild(r))return;Ni(t.concat(r),n.getChild(r),e.modules[r])}}Ii.prototype.get=function(t){return t.reduce((function(t,n){return t.getChild(n)}),this.root)},Ii.prototype.getNamespace=function(t){var n=this.root;return t.reduce((function(t,e){return t+((n=n.getChild(e)).namespaced?e+"/":"")}),"")},Ii.prototype.update=function(t){Ni([],this.root,t)},Ii.prototype.register=function(t,n,e){var r=this;void 0===e&&(e=!0);var o=new Ti(n,e);0===t.length?this.root=o:this.get(t.slice(0,-1)).addChild(t[t.length-1],o),n.modules&&$i(n.modules,(function(n,o){r.register(t.concat(o),n,e)}))},Ii.prototype.unregister=function(t){var n=this.get(t.slice(0,-1)),e=t[t.length-1],r=n.getChild(e);r&&r.runtime&&n.removeChild(e)},Ii.prototype.isRegistered=function(t){var n=this.get(t.slice(0,-1)),e=t[t.length-1];return!!n&&n.hasChild(e)};var Li=function(t){var n=this;void 0===t&&(t={}),!Mi&&"undefined"!=typeof window&&window.Vue&&Hi(window.Vue);var e=t.plugins;void 0===e&&(e=[]);var r=t.strict;void 0===r&&(r=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Ii(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new Mi,this._makeLocalGettersCache=Object.create(null);var o=this,i=this.dispatch,a=this.commit;this.dispatch=function(t,n){return i.call(o,t,n)},this.commit=function(t,n,e){return a.call(o,t,n,e)},this.strict=r;var u=this._modules.root.state;Vi(this,u,[],this._modules.root),Gi(this,u),e.forEach((function(t){return t(n)})),(void 0!==t.devtools?t.devtools:Mi.config.devtools)&&function(t){ji&&(t._devtoolHook=ji,ji.emit("vuex:init",t),ji.on("vuex:travel-to-state",(function(n){t.replaceState(n)})),t.subscribe((function(t,n){ji.emit("vuex:mutation",t,n)}),{prepend:!0}),t.subscribeAction((function(t,n){ji.emit("vuex:action",t,n)}),{prepend:!0}))}(this)},Ri={state:{configurable:!0}};function Di(t,n,e){return n.indexOf(t)<0&&(e&&e.prepend?n.unshift(t):n.push(t)),function(){var e=n.indexOf(t);e>-1&&n.splice(e,1)}}function Ui(t,n){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var e=t.state;Vi(t,e,[],t._modules.root,!0),Gi(t,e,n)}function Gi(t,n,e){var r=t._vm;t.getters={},t._makeLocalGettersCache=Object.create(null);var o=t._wrappedGetters,i={};$i(o,(function(n,e){i[e]=function(t,n){return function(){return t(n)}}(n,t),Object.defineProperty(t.getters,e,{get:function(){return t._vm[e]},enumerable:!0})}));var a=Mi.config.silent;Mi.config.silent=!0,t._vm=new Mi({data:{$$state:n},computed:i}),Mi.config.silent=a,t.strict&&function(t){t._vm.$watch((function(){return this._data.$$state}),(function(){}),{deep:!0,sync:!0})}(t),r&&(e&&t._withCommit((function(){r._data.$$state=null})),Mi.nextTick((function(){return r.$destroy()})))}function Vi(t,n,e,r,o){var i=!e.length,a=t._modules.getNamespace(e);if(r.namespaced&&(t._modulesNamespaceMap[a],t._modulesNamespaceMap[a]=r),!i&&!o){var u=Wi(n,e.slice(0,-1)),c=e[e.length-1];t._withCommit((function(){Mi.set(u,c,r.state)}))}var s=r.context=function(t,n,e){var r=""===n,o={dispatch:r?t.dispatch:function(e,r,o){var i=Bi(e,r,o),a=i.payload,u=i.options,c=i.type;return u&&u.root||(c=n+c),t.dispatch(c,a)},commit:r?t.commit:function(e,r,o){var i=Bi(e,r,o),a=i.payload,u=i.options,c=i.type;u&&u.root||(c=n+c),t.commit(c,a,u)}};return Object.defineProperties(o,{getters:{get:r?function(){return t.getters}:function(){return function(t,n){if(!t._makeLocalGettersCache[n]){var e={},r=n.length;Object.keys(t.getters).forEach((function(o){if(o.slice(0,r)===n){var i=o.slice(r);Object.defineProperty(e,i,{get:function(){return t.getters[o]},enumerable:!0})}})),t._makeLocalGettersCache[n]=e}return t._makeLocalGettersCache[n]}(t,n)}},state:{get:function(){return Wi(t.state,e)}}}),o}(t,a,e);r.forEachMutation((function(n,e){!function(t,n,e,r){(t._mutations[n]||(t._mutations[n]=[])).push((function(n){e.call(t,r.state,n)}))}(t,a+e,n,s)})),r.forEachAction((function(n,e){var r=n.root?e:a+e,o=n.handler||n;!function(t,n,e,r){(t._actions[n]||(t._actions[n]=[])).push((function(n){var o,i=e.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},n);return(o=i)&&"function"==typeof o.then||(i=Promise.resolve(i)),t._devtoolHook?i.catch((function(n){throw t._devtoolHook.emit("vuex:error",n),n})):i}))}(t,r,o,s)})),r.forEachGetter((function(n,e){!function(t,n,e,r){t._wrappedGetters[n]||(t._wrappedGetters[n]=function(t){return e(r.state,r.getters,t.state,t.getters)})}(t,a+e,n,s)})),r.forEachChild((function(r,i){Vi(t,n,e.concat(i),r,o)}))}function Wi(t,n){return n.reduce((function(t,n){return t[n]}),t)}function Bi(t,n,e){return Pi(t)&&t.type&&(e=n,n=t,t=t.type),{type:t,payload:n,options:e}}function Hi(t){Mi&&t===Mi||function(t){if(Number(t.version.split(".")[0])>=2)t.mixin({beforeCreate:e});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[e].concat(t.init):e,n.call(this,t)}}function e(){var t=this.$options;t.store?this.$store="function"==typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}(Mi=t)}Ri.state.get=function(){return this._vm._data.$$state},Ri.state.set=function(t){},Li.prototype.commit=function(t,n,e){var r=this,o=Bi(t,n,e),i=o.type,a=o.payload,u=(o.options,{type:i,payload:a}),c=this._mutations[i];c&&(this._withCommit((function(){c.forEach((function(t){t(a)}))})),this._subscribers.slice().forEach((function(t){return t(u,r.state)})))},Li.prototype.dispatch=function(t,n){var e=this,r=Bi(t,n),o=r.type,i=r.payload,a={type:o,payload:i},u=this._actions[o];if(u){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(a,e.state)}))}catch(t){}var c=u.length>1?Promise.all(u.map((function(t){return t(i)}))):u[0](i);return new Promise((function(t,n){c.then((function(n){try{e._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(a,e.state)}))}catch(t){}t(n)}),(function(t){try{e._actionSubscribers.filter((function(t){return t.error})).forEach((function(n){return n.error(a,e.state,t)}))}catch(t){}n(t)}))}))}},Li.prototype.subscribe=function(t,n){return Di(t,this._subscribers,n)},Li.prototype.subscribeAction=function(t,n){return Di("function"==typeof t?{before:t}:t,this._actionSubscribers,n)},Li.prototype.watch=function(t,n,e){var r=this;return this._watcherVM.$watch((function(){return t(r.state,r.getters)}),n,e)},Li.prototype.replaceState=function(t){var n=this;this._withCommit((function(){n._vm._data.$$state=t}))},Li.prototype.registerModule=function(t,n,e){void 0===e&&(e={}),"string"==typeof t&&(t=[t]),this._modules.register(t,n),Vi(this,this.state,t,this._modules.get(t),e.preserveState),Gi(this,this.state)},Li.prototype.unregisterModule=function(t){var n=this;"string"==typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var e=Wi(n.state,t.slice(0,-1));Mi.delete(e,t[t.length-1])})),Ui(this)},Li.prototype.hasModule=function(t){return"string"==typeof t&&(t=[t]),this._modules.isRegistered(t)},Li.prototype.hotUpdate=function(t){this._modules.update(t),Ui(this,!0)},Li.prototype._withCommit=function(t){var n=this._committing;this._committing=!0,t(),this._committing=n},Object.defineProperties(Li.prototype,Ri);var zi=Yi((function(t,n){var e={};return Ji(n).forEach((function(n){var r=n.key,o=n.val;e[r]=function(){var n=this.$store.state,e=this.$store.getters;if(t){var r=Zi(this.$store,0,t);if(!r)return;n=r.context.state,e=r.context.getters}return"function"==typeof o?o.call(this,n,e):n[o]},e[r].vuex=!0})),e})),qi=Yi((function(t,n){var e={};return Ji(n).forEach((function(n){var r=n.key,o=n.val;e[r]=function(){for(var n=[],e=arguments.length;e--;)n[e]=arguments[e];var r=this.$store.commit;if(t){var i=Zi(this.$store,0,t);if(!i)return;r=i.context.commit}return"function"==typeof o?o.apply(this,[r].concat(n)):r.apply(this.$store,[o].concat(n))}})),e})),Xi=Yi((function(t,n){var e={};return Ji(n).forEach((function(n){var r=n.key,o=n.val;o=t+o,e[r]=function(){if(!t||Zi(this.$store,0,t))return this.$store.getters[o]},e[r].vuex=!0})),e})),Ki=Yi((function(t,n){var e={};return Ji(n).forEach((function(n){var r=n.key,o=n.val;e[r]=function(){for(var n=[],e=arguments.length;e--;)n[e]=arguments[e];var r=this.$store.dispatch;if(t){var i=Zi(this.$store,0,t);if(!i)return;r=i.context.dispatch}return"function"==typeof o?o.apply(this,[r].concat(n)):r.apply(this.$store,[o].concat(n))}})),e}));function Ji(t){return function(t){return Array.isArray(t)||Pi(t)}(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(n){return{key:n,val:t[n]}})):[]}function Yi(t){return function(n,e){return"string"!=typeof n?(e=n,n=""):"/"!==n.charAt(n.length-1)&&(n+="/"),t(n,e)}}function Zi(t,n,e){return t._modulesNamespaceMap[e]}function Qi(t,n,e){var r=e?t.groupCollapsed:t.group;try{r.call(t,n)}catch(e){t.log(n)}}function ta(t){try{t.groupEnd()}catch(n){t.log("—— log end ——")}}function na(){var t=new Date;return" @ "+ea(t.getHours(),2)+":"+ea(t.getMinutes(),2)+":"+ea(t.getSeconds(),2)+"."+ea(t.getMilliseconds(),3)}function ea(t,n){return"0",e=n-t.toString().length,new Array(e+1).join("0")+t;var e}var ra={Store:Li,install:Hi,version:"3.6.2",mapState:zi,mapMutations:qi,mapGetters:Xi,mapActions:Ki,createNamespacedHelpers:function(t){return{mapState:zi.bind(null,t),mapGetters:Xi.bind(null,t),mapMutations:qi.bind(null,t),mapActions:Ki.bind(null,t)}},createLogger:function(t){void 0===t&&(t={});var n=t.collapsed;void 0===n&&(n=!0);var e=t.filter;void 0===e&&(e=function(t,n,e){return!0});var r=t.transformer;void 0===r&&(r=function(t){return t});var o=t.mutationTransformer;void 0===o&&(o=function(t){return t});var i=t.actionFilter;void 0===i&&(i=function(t,n){return!0});var a=t.actionTransformer;void 0===a&&(a=function(t){return t});var u=t.logMutations;void 0===u&&(u=!0);var c=t.logActions;void 0===c&&(c=!0);var s=t.logger;return void 0===s&&(s=console),function(t){var f=ki(t.state);void 0!==s&&(u&&t.subscribe((function(t,i){var a=ki(i);if(e(t,f,a)){var u=na(),c=o(t),l="mutation "+t.type+u;Qi(s,l,n),s.log("%c prev state","color: #9E9E9E; font-weight: bold",r(f)),s.log("%c mutation","color: #03A9F4; font-weight: bold",c),s.log("%c next state","color: #4CAF50; font-weight: bold",r(a)),ta(s)}f=a})),c&&t.subscribeAction((function(t,e){if(i(t,e)){var r=na(),o=a(t),u="action "+t.type+r;Qi(s,u,n),s.log("%c action","color: #03A9F4; font-weight: bold",o),ta(s)}})))}}},oa={namespaced:!0,state:{},actions:{doSearchGlobal:function(t,n){var e={params:{_format:"json",text:n}};return Vue.http.get("/api/search/global",e).then((function(t){return t.body}),(function(t){console.log(t)}))}},getters:{},mutations:{}};Fo.use(ra);var ia=new ra.Store({modules:{api:oa}}),aa={bind:function(t,n,e){n.event=function(r){t==r.target||t.contains(r.target)||e.context[n.expression](r)},document.body.addEventListener("click",n.event)},unbind:function(t,n){document.body.removeEventListener("click",n.event)}},ua={install:function(t){t.directive("click-outside",aa)}},ca=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.onClickOutside,expression:"onClickOutside"}],staticClass:"search-vue"},[e("div",{staticClass:"search-vue__form",class:{"search-vue__form_has-results":t.searchResults.length}},[e("input",{staticClass:"search-vue__input",attrs:{type:"search",autocomplete:"off",placeholder:"Поиск"},on:{input:t.onTextInput,focus:t.onTextFocus,keypress:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.onButtonClick(n)}}}),t._v(" "),e("button",{staticClass:"search-vue__submit",on:{click:t.onButtonClick}}),t._v(" "),e("button",{staticClass:"search-vue__clear",on:{click:t.onClearClick}})]),t._v(" "),t.searchResults.length&&!t.resultsHidden?e("div",{staticClass:"search-vue__results"},t._l(t.searchResults,(function(n){return e("div",[e("a",{staticClass:"search-vue__result",attrs:{href:n.url}},[t._v(t._s(n.label)+"\n      ")])])})),0):t.text.length>3&&!t.searchResults.length&&!t.resultsHidden?e("div",{staticClass:"search-vue__results"},[e("p",{staticClass:"search-vue__result"},[t._v("\n     К сожалению, ничего не найдено...\n    ")])]):t._e()])};function sa(t){return(sa="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}ca._withStripped=!0;var fa=function(t){var n=sa(t);return null!=t&&("object"==n||"function"==n)};function la(t){return(la="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var pa="object"==("undefined"==typeof global?"undefined":la(global))&&global&&global.Object===Object&&global;function ha(t){return(ha="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var da="object"==("undefined"==typeof self?"undefined":ha(self))&&self&&self.Object===Object&&self,va=pa||da||Function("return this")(),ya=function(){return va.Date.now()},ma=/\s/,ga=/^\s+/,ba=function(t){return t?t.slice(0,function(t){for(var n=t.length;n--&&ma.test(t.charAt(n)););return n}(t)+1).replace(ga,""):t},_a=va.Symbol,wa=Object.prototype,xa=wa.hasOwnProperty,Sa=wa.toString,Oa=_a?_a.toStringTag:void 0,Ea=Object.prototype.toString,Aa=_a?_a.toStringTag:void 0,Ca=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":Aa&&Aa in Object(t)?function(t){var n=xa.call(t,Oa),e=t[Oa];try{t[Oa]=void 0;var r=!0}catch(t){}var o=Sa.call(t);return r&&(n?t[Oa]=e:delete t[Oa]),o}(t):function(t){return Ea.call(t)}(t)};function ja(t){return(ja="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function ka(t){return(ka="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var $a=function(t){return"symbol"==ka(t)||function(t){return null!=t&&"object"==ja(t)}(t)&&"[object Symbol]"==Ca(t)},Pa=/^[-+]0x[0-9a-f]+$/i,Ta=/^0b[01]+$/i,Fa=/^0o[0-7]+$/i,Ma=parseInt,Ia=function(t){if("number"==typeof t)return t;if($a(t))return NaN;if(fa(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=fa(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=ba(t);var e=Ta.test(t);return e||Fa.test(t)?Ma(t.slice(2),e?2:8):Pa.test(t)?NaN:+t},Na=Math.max,La=Math.min,Ra=function(t,n,e,r,o,i,a,u){var c,s="function"==typeof t?t.options:t;if(n&&(s.render=n,s.staticRenderFns=[],s._compiled=!0),c)if(s.functional){s._injectStyles=c;var f=s.render;s.render=function(t,n){return c.call(n),f(t,n)}}else{var l=s.beforeCreate;s.beforeCreate=l?[].concat(l,c):[c]}return{exports:t,options:s}}({data:function(){return{text:"",searchResults:{},resultsHidden:!1}},watch:{text:function(t,n){var e=this;t.length>2?this.$store.dispatch("api/doSearchGlobal",t).then((function(t){return e.searchResults=t.items})):this.searchResults={}}},methods:{onTextInput:function(t,n,e){var r,o,i,a,u,c,s=0,f=!1,l=!1,p=!0;function h(n){var e=r,i=o;return r=o=void 0,s=n,a=t.apply(i,e)}function d(t){return s=t,u=setTimeout(y,n),f?h(t):a}function v(t){var e=t-c;return void 0===c||e>=n||e<0||l&&t-s>=i}function y(){var t=ya();if(v(t))return m(t);u=setTimeout(y,function(t){var e=n-(t-c);return l?La(e,i-(t-s)):e}(t))}function m(t){return u=void 0,p&&r?h(t):(r=o=void 0,a)}function g(){var t=ya(),e=v(t);if(r=arguments,o=this,c=t,e){if(void 0===u)return d(c);if(l)return clearTimeout(u),u=setTimeout(y,n),h(c)}return void 0===u&&(u=setTimeout(y,n)),a}return n=Ia(n)||0,fa(e)&&(f=!!e.leading,i=(l="maxWait"in e)?Na(Ia(e.maxWait)||0,n):i,p="trailing"in e?!!e.trailing:p),g.cancel=function(){void 0!==u&&clearTimeout(u),s=0,r=c=o=u=void 0},g.flush=function(){return void 0===u?a:m(ya())},g}((function(t){this.text=t.target.value}),200),onTextFocus:function(t){this.resultsHidden=!1},onButtonClick:function(){var t=new URL("/search",window.location.origin);t.searchParams.append("text",this.text),window.location.href=t.href},onClearClick:function(){this.text="",document.querySelector(".search-vue__input").value=""},onClickOutside:function(t){this.text="",this.resultsHidden=!0,document.querySelector(".search-vue__input").value="";var n=document.querySelector(".search-vue__submit");document.querySelector(".search-vue__clear").style.display="none",n.style.display="block"}},mounted:function(){var t=document.querySelector(".search-vue__input"),n=document.querySelector(".search-vue__submit"),e=document.querySelector(".search-vue__clear");t.oninput=function(t){1===t.target.value.length&&(n.style.display="none",e.style.display="block")},e.onclick=function(){e.style.display="none",n.style.display="block"}}},ca);Ra.options.__file="assets/src/components/Search.vue";var Da=Ra.exports;Fo.use(Oi),Fo.use(Ai()),Fo.use(ua),new Fo({el:"#vue-search",render:function(t){return t(Da)},store:ia,wait:new(Ai())({useVuex:!0})})}()}();;
(function ($) {


function include(url) {
        var script = document.createElement('script');
        script.src = url;
        document.getElementsByTagName('head')[0].appendChild(script);
    }


include("/modules/custom/code_block/js/script4itemprop.js?" + Math.random());


})(jQuery);


;
/* let style_1 = '<style type="text/css">#js-show-iframe-wrapper{position:relative;display:flex;align-items:center;justify-content:center;width:100%;min-width:293px;max-width:100%;background:linear-gradient(138.4deg,#38bafe 26.49%,#2d73bc 79.45%);color:#fff;cursor:pointer}#js-show-iframe-wrapper .pos-banner-fluid *{box-sizing:border-box}#js-show-iframe-wrapper .pos-banner-fluid .pos-banner-btn_2{display:block;width:240px;min-height:56px;font-size:18px;line-height:24px;cursor:pointer;background:#0d4cd3;color:#fff;border:none;border-radius:8px;outline:0}#js-show-iframe-wrapper .pos-banner-fluid .pos-banner-btn_2:hover{background:#1d5deb}#js-show-iframe-wrapper .pos-banner-fluid .pos-banner-btn_2:focus{background:#2a63ad}#js-show-iframe-wrapper .pos-banner-fluid .pos-banner-btn_2:active{background:#2a63ad}@-webkit-keyframes fadeInFromNone{0%{display:none;opacity:0}1%{display:block;opacity:0}100%{display:block;opacity:1}}@keyframes fadeInFromNone{0%{display:none;opacity:0}1%{display:block;opacity:0}100%{display:block;opacity:1}}@font-face{font-family:LatoWebLight;src:url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Light.woff2) format("woff2"),url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Light.woff) format("woff"),url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Light.ttf) format("truetype");font-style:normal;font-weight:400}@font-face{font-family:LatoWeb;src:url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Regular.woff2) format("woff2"),url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Regular.woff) format("woff"),url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Regular.ttf) format("truetype");font-style:normal;font-weight:400}@font-face{font-family:LatoWebBold;src:url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Bold.woff2) format("woff2"),url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Bold.woff) format("woff"),url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Bold.ttf) format("truetype");font-style:normal;font-weight:400}</style>';

let style_2 = '<style type="text/css">#js-show-iframe-wrapper .bf-2{position:relative;display:grid;grid-template-columns:var(--pos-banner-fluid-2__grid-template-columns);grid-template-rows:var(--pos-banner-fluid-2__grid-template-rows);width:100%;max-width:1060px;font-family:LatoWeb,sans-serif;box-sizing:border-box}#js-show-iframe-wrapper .bf-2__decor{grid-column:var(--pos-banner-fluid-2__decor-grid-column);grid-row:var(--pos-banner-fluid-2__decor-grid-row);padding:var(--pos-banner-fluid-2__decor-padding);background:var(--pos-banner-fluid-2__bg-url) var(--pos-banner-fluid-2__bg-position) no-repeat;background-size:var(--pos-banner-fluid-2__bg-size)}#js-show-iframe-wrapper .bf-2__logo-wrap{position:absolute;top:var(--pos-banner-fluid-2__logo-wrap-top);bottom:var(--pos-banner-fluid-2__logo-wrap-bottom);right:0;display:flex;flex-direction:column;align-items:flex-end;padding:var(--pos-banner-fluid-2__logo-wrap-padding);background:#2d73bc;border-radius:var(--pos-banner-fluid-2__logo-wrap-border-radius)}#js-show-iframe-wrapper .bf-2__logo{width:128px}#js-show-iframe-wrapper .bf-2__slogan{font-family:LatoWebBold,sans-serif;font-size:var(--pos-banner-fluid-2__slogan-font-size);line-height:var(--pos-banner-fluid-2__slogan-line-height)}#js-show-iframe-wrapper .bf-2__content{padding:var(--pos-banner-fluid-2__content-padding)}#js-show-iframe-wrapper .bf-2__description{display:flex;flex-direction:column;margin-bottom:24px}#js-show-iframe-wrapper .bf-2__text{margin-bottom:12px;font-size:24px;line-height:32px;font-family:LatoWebBold,sans-serif}#js-show-iframe-wrapper .bf-2__text_small{margin-bottom:0;font-size:16px;line-height:24px;font-family:LatoWeb,sans-serif}#js-show-iframe-wrapper .bf-2__btn-wrap{display:flex;align-items:center;justify-content:center}</style>';

let bannerHtml = '<div id="js-show-iframe-wrapper"><div class="pos-banner-fluid bf-2"><div class="bf-2__decor"><div class="bf-2__logo-wrap"><img alt="Госуслуги" class="bf-2__logo" src="https://pos.gosuslugi.ru/bin/banner-fluid/gosuslugi-logo.svg" /><div class="bf-2__slogan">Решаем вместе</div></div></div><div class="bf-2__content"><div class="bf-2__description"><span class="bf-2__text">Не убран мусор, яма на дороге, не горит фонарь? </span> <span class="bf-2__text bf-2__text_small"> Столкнулись с проблемой&nbsp;— сообщите о ней! </span></div><div class="bf-2__btn-wrap"><!-- pos-banner-btn_2 не удалять; другие классы не добавлять --><button class="pos-banner-btn_2" type="button">Сообщить о проблеме</button></div></div></div></div>';



let script_1 = '<script src="https://pos.gosuslugi.ru/bin/script.min.js"></script>';

let script_2 = '<script>Widget("https://pos.gosuslugi.ru/form", 243405)</script>';

let script_3 = '<script>(function(){"use strict";function ownKeys(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);if(t)n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable});o.push.apply(o,n)}return o}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};if(t%2)ownKeys(Object(o),true).forEach(function(t){_defineProperty(e,t,o[t])});else if(Object.getOwnPropertyDescriptors)Object.defineProperties(e,Object.getOwnPropertyDescriptors(o));else ownKeys(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}function _defineProperty(e,t,o){if(t in e)Object.defineProperty(e,t,{value:o,enumerable:true,configurable:true,writable:true});else e[t]=o;return e}var POS_PREFIX_2="--pos-banner-fluid-2__",posOptionsInitial={"grid-template-columns":"100%","grid-template-rows":"310px auto","decor-grid-column":"initial","decor-grid-row":"initial","decor-padding":"30px 30px 0 30px","bg-url":"url(https://pos.gosuslugi.ru/bin/banner-fluid/2/banner-fluid-bg-2-small.svg)","bg-position":"calc(10% + 64px) calc(100% - 20px)","bg-size":"cover","content-padding":"0 30px 30px 30px","slogan-font-size":"20px","slogan-line-height":"32px","logo-wrap-padding":"20px 30px 30px 40px","logo-wrap-top":"0","logo-wrap-bottom":"initial","logo-wrap-border-radius":"0 0 0 80px"},setStyles=function(e,t){Object.keys(e).forEach(function(o){t.style.setProperty(POS_PREFIX_2+o,e[o])})},removeStyles=function(e,t){Object.keys(e).forEach(function(e){t.style.removeProperty(POS_PREFIX_2+e)})};function changePosBannerOnResize(){var e=document.documentElement,t=_objectSpread({},posOptionsInitial),o=document.getElementById("js-show-iframe-wrapper"),n=o?o.offsetWidth:document.body.offsetWidth;if(n>405)t["slogan-font-size"]="24px",t["logo-wrap-padding"]="30px 50px 30px 70px";if(n>500)t["grid-template-columns"]="min-content 1fr",t["grid-template-rows"]="100%",t["decor-grid-column"]="2",t["decor-grid-row"]="1",t["decor-padding"]="30px 30px 30px 0",t["content-padding"]="30px",t["bg-position"]="0% calc(100% - 70px)",t["logo-wrap-padding"]="30px 30px 24px 40px",t["logo-wrap-top"]="initial",t["logo-wrap-bottom"]="0",t["logo-wrap-border-radius"]="80px 0 0 0";if(n>585)t["bg-position"]="0% calc(100% - 6px)";if(n>800)t["bg-url"]="url(https://pos.gosuslugi.ru/bin/banner-fluid/2/banner-fluid-bg-2.svg)",t["bg-position"]="0% center";if(n>1020)t["slogan-font-size"]="32px",t["line-height"]="40px",t["logo-wrap-padding"]="30px 30px 24px 50px";setStyles(t,e)}changePosBannerOnResize(),window.addEventListener("resize",changePosBannerOnResize),window.onunload=function(){var e=document.documentElement;window.removeEventListener("resize",changePosBannerOnResize),removeStyles(posOptionsInitial,e)};})()</script>';





let bannerCode = script_1 + style_1 + style_2 + bannerHtml + script_3 + script_2;



  
setTimeout(() => {
  document.getElementById('modal_login')
  .insertAdjacentHTML('afterEnd', bannerCode);
}, 1000); */
/* 
Куда по отношению к elem вставлять строку. Всего четыре варианта:

beforeBegin – перед elem.
afterBegin – внутрь elem, в самое начало.
beforeEnd – внутрь elem, в конец.
afterEnd – после elem. */



;
$ = jQuery.noConflict();

//FAVICON
var logoImg = $('.oo .site_logo img').attr("src");
$('link[rel|="shortcut icon"]').attr('href', ''+logoImg+'');

$('body').append('<div class="cookie-policy">Сайт использует <a href="#" class="popup_cookie__info">cookie-файлы</a>.'
	+' Продолжив просмотр сайта, Вы таким образом подтверждаете свое согласие на использование этих файлов.'
	+'<button class="cookie-popup__close">Согласен</button></div>'
	);
// Скрывать на определенных страницах

/*if(location.href.match(/admin/) || location.href.match(/user/)) {
$('body .cookie-policy').remove();
}*/

$('body').append('<div class="cookie_info">'
+ '<h4>Что такое cookie?</h4>'
+ '<p>Cookie – это простой текстовый файл, который создается веб-сервером и хранится на вашем компьютере или мобильном устройстве. Только этот веб-сервер будет иметь возможность получать или считывать содержимое этих сookie.</p>'
+ '<p>Cookie индивидуальны для вашего веб-браузера. Они содержат определенные личные данные – уникальный идентификатор, название сайта и некоторые числа. С помощью cookie веб-сайт запоминает некоторые данные, такие как ваши личные настройки.</p>'
+ '<p>Файлы сookie могут быть установлены веб-сайтом, который вы посещаете («основные файлы сookie»), или они могут быть установлены другими веб-сайтами, которые запускают содержимое на странице, которую вы просматриваете («сторонние файлы сookie»).</p>'
+ '<h4>Согласие на использование cookie</h4>'
+ '<p>Сеансовые cookie-файлы не требуют вашего предварительного согласия, так как они необходимы для работы сайта и будут удалены после закрытия веб-браузера.</p>'
+ '<p>Постоянные cookie-файлы, которые отслеживают ваши прошлые действия и предпочтения, но не являются необходимыми для работы сайта, требуют вашего предварительного согласия. Посещая наш сайт, вы соглашаетесь на использование постоянных cookie-файлов, если не измените настройки своего компьютера, чтобы эти cookie-файлы не сохранялись. То же самое относится к cookie-файлам третьих сторон.</p>'
+ '<h4>Яндекс. Метрика</h4>'
+ '<p>Этот сайт использует сервис веб-аналитики Яндекс.Метрика, предоставляемый компанией ООО «ЯНДЕКС», 119021, Россия, Москва, ул. Л. Толстого, 16 (далее — Яндекс).</p>'
+ '<p>Сервис Яндекс.Метрика использует технологию «cookie» — небольшие текстовые файлы, размещаемые на компьютере пользователей с целью анализа их пользовательской активности.</p>'
+ '<p>Вы можете отказаться от использования файлов cookie, выбрав соответствующие настройки в браузере. Также вы можете использовать инструмент — https://yandex.ru/support/metrika/general/opt-out.html. Однако это может повлиять на работу некоторых функций сайта. Используя этот сайт, вы соглашаетесь на обработку данных о вас Яндексом в порядке и целях, указанных выше.</p>'
+ '<p>Собранная при помощи cookie информация не может идентифицировать вас, однако может помочь нам улучшить работу нашего сайта. Информация об использовании вами данного сайта, собранная при помощи cookie, будет передаваться Яндексу и храниться на сервере Яндекса в ЕС и Российской Федерации. Яндекс будет обрабатывать эту информацию для оценки использования вами сайта, составления для нас отчетов о деятельности нашего сайта, и предоставления других услуг. Яндекс обрабатывает эту информацию в порядке, установленном в условиях использования сервиса Яндекс.Метрика.</p>'
+ '<h4>Разрешить/Запретить cookie</h4>'
+ '<p>Пользуясь нашим веб-сайтом, вы даете согласие на использование и хранение файлов сookie на вашем устройстве. Вы можете просматривать наш веб-сайт без использования файлов сookie, но при этом некоторые сервисы, доступные для вас, будут ограничены.</p>'
+ '<p>Вы можете отключить сохранение файлов сookie на вашем устройстве, выбрав в настройках своего браузера опцию "не принимать файлы cookie". Следует помнить, что большинство браузеров принимают файлы cookie автоматически.</p>'
+ '<p>Ко всему прочему, вы можете в любое время удалить файлы cookie, которые были сохранены на вашем устройстве. Более подробные инструкции доступны по ссылкам ниже:</p>'
+ '<p><a href="https://support.microsoft.com/ru-ru/help/17442/windows-internet-explorer-delete-manage-cookies">- Internet Explorer</a></p>'
+ '<p><a href="https://support.google.com/chrome/answer/95647?hl=ru&hlrm=ru">- Chrome</a></p>'
+ '<p><a href="https://support.apple.com/ru-ru/HT201265">- Safari</a></p>'
+ '<p><a href="https://support.mozilla.org/ru/kb/uluchshennaya-zashita-ot-otslezhivaniya-v-firefox-?redirectlocale=ru&redirectslug=vklyuchenie-i-otklyuchenie-kukov-ispolzuemyh-veb-s">- Firefox</a></p>'
+ '<p><a href="https://help.opera.com/ru/latest/web-preferences/#cookies">- Opera</a></p>'
+ '<button class="cookie_info__close">Закрыть</button>'
+ '</div>'
);

$(document).ready(function() {
var cookiepolicy = $.cookie('cookiepolicy')//Получаем значение куки
	  if(cookiepolicy =='none'){//Делаем проверку
	  	$('.cookie-policy').remove();//И закрываем блок если куки есть
	  } else {
                   $('.cookie-policy').fadeIn();
   		}
	  $('.cookie-popup__close').click(function() {//При клике на кнопку закрытия
		  $('.cookie-policy').fadeOut();//Закрываем сам  блок
  $.cookie('cookiepolicy', 'none', { path: '/', expires: 5});//И создаём куку
		  });
});


$('.start').append('<div class="polit-conf"><a href="/privacy-policy">Политика конфиденциальности</a> | <a href="#" class="popup_cookie__info">Использование Cookie</a></div>');

$('.popup_cookie__info').click(function(){
    $('.cookie_info').show();
});
$('.cookie_info__close').click(function(){
    $('.cookie_info').hide();
});


;
/**
 * Create a cookie with the given name and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String name The name of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given name.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String name The name of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
document.cookie = 'same-site-cookie=foo; SameSite=Lax';
document.cookie = 'cross-site-cookie=bar; SameSite=None; Secure';
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};
;
(function ($) {


function include(url) {
        var script = document.createElement('script');
        script.src = url;
        document.getElementsByTagName('head')[0].appendChild(script);
    }


include("/modules/custom/info_block/js/custom.js?" + Math.random());


})(jQuery);


;
$ = jQuery.noConflict();

$('.vs_panel').addClass('bvi-open');
$('.vs_voice').addClass('bvi-voice');
;
if("undefined"!=typeof responsiveVoice){console.log("ResponsiveVoice already loaded"),console.log(responsiveVoice)}else{var ResponsiveVoice=function(){var a=this;a.version="1.5.12";console.log("ResponsiveVoice r"+a.version);a.responsivevoices=[{name:"UK English Female",flag:"gb",gender:"f",lang:"en-GB",voiceIDs:[3,7,171,278,201,5,1,257,286,342,258,287,343,8]},{name:"UK English Male",flag:"gb",gender:"m",lang:"en-GB",voiceIDs:[0,277,202,75,4,2,256,285,341,159,6,7]},{name:"US English Female",flag:"us",gender:"f",lang:"en-US",voiceIDs:[39,40,41,42,383,205,204,43,173,235,283,339,408,44]},{name:"US English Male",flag:"us",gender:"m",lang:"en-US",voiceIDs:[234,282,338,236,284,340,237,382,2,4,0,6,7,75,195,169]},{name:"Arabic Male",flag:"ar",gender:"m",lang:"ar-SA",voiceIDs:[96,95,97,196,388]},{name:"Arabic Female",flag:"ar",gender:"f",lang:"ar-SA",voiceIDs:[98]},{name:"Armenian Male",flag:"hy",gender:"f",lang:"hy-AM",voiceIDs:[99]},{name:"Australian Female",flag:"au",gender:"f",lang:"en-AU",voiceIDs:[276,201,87,5,88]},{name:"Australian Male",flag:"au",gender:"m",lang:"en-AU",voiceIDs:[86,381,386]},{name:"Brazilian Portuguese Female",flag:"br",gender:"f",lang:"pt-BR",voiceIDs:[245,124,123,125,186,223,126]},{name:"Brazilian Portuguese Male",flag:"br",gender:"m",lang:"pt-BR",voiceIDs:[315,332,371,399]},{name:"Chinese Female",flag:"cn",gender:"f",lang:"zh-CN",voiceIDs:[249,58,59,380,281,231,155,60,191,268,297,353,269,298,354,409,61]},{name:"Chinese Male",flag:"cn",gender:"m",lang:"zh-CN",voiceIDs:[317,334,373,389]},{name:"Chinese (Hong Kong) Female",flag:"hk",gender:"f",lang:"zh-HK",voiceIDs:[192,193,232,250,251,270,299,355,409,252]},{name:"Chinese (Hong Kong) Male",flag:"hk",gender:"m",lang:"zh-HK",voiceIDs:[318,335,374,390]},{name:"Chinese Taiwan Female",flag:"tw",gender:"f",lang:"zh-TW",voiceIDs:[194,233,253,254,305,322,361,384,319,336,375,409,255]},{name:"Chinese Taiwan Male",flag:"tw",gender:"m",lang:"zh-TW",voiceIDs:[320,337,376,391]},{name:"Czech Female",flag:"cz",gender:"f",lang:"cs-CZ",voiceIDs:[101,100,102,197,103]},{name:"Czech Male",flag:"cz",gender:"m",lang:"cs-CZ",voiceIDs:[161]},{name:"Danish Female",flag:"dk",gender:"f",lang:"da-DK",voiceIDs:[105,104,106,198,107]},{name:"Danish Male",flag:"da",gender:"m",lang:"da-DK",voiceIDs:[162]},{name:"Deutsch Female",flag:"de",gender:"f",lang:"de-DE",voiceIDs:[27,28,29,30,78,170,275,199,31,261,290,346,262,291,347,32]},{name:"Deutsch Male",flag:"de",gender:"m",lang:"de-DE",voiceIDs:[307,324,363,377,393]},{name:"Dutch Female",flag:"nl",gender:"f",lang:"nl-NL",voiceIDs:[243,219,84,157,158,184,45]},{name:"Dutch Male",flag:"nl",gender:"m",lang:"nl-NL",voiceIDs:[157,220,407]},{name:"Finnish Female",flag:"fi",gender:"f",lang:"fi-FI",voiceIDs:[90,89,91,209,92]},{name:"Finnish Male",flag:"fi",gender:"m",lang:"fi-FI",voiceIDs:[160]},{name:"French Female",flag:"fr",gender:"f",lang:"fr-FR",voiceIDs:[240,21,22,23,77,178,279,210,266,295,351,304,321,360,26]},{name:"French Male",flag:"fr",gender:"m",lang:"fr-FR",voiceIDs:[311,328,367,378,392]},{name:"Greek Female",flag:"gr",gender:"f",lang:"el-GR",voiceIDs:[62,63,80,200,64]},{name:"Greek Male",flag:"gr",gender:"m",lang:"el-GR",voiceIDs:[163]},{name:"Hindi Female",flag:"hi",gender:"f",lang:"hi-IN",voiceIDs:[247,66,154,179,213,259,288,344,67]},{name:"Hindi Male",flag:"hi",gender:"m",lang:"hi-IN",voiceIDs:[394]},{name:"Hungarian Female",flag:"hu",gender:"f",lang:"hu-HU",voiceIDs:[9,10,81,214,11]},{name:"Hungarian Male",flag:"hu",gender:"m",lang:"hu-HU",voiceIDs:[164]},{name:"Indonesian Female",flag:"id",gender:"f",lang:"id-ID",voiceIDs:[241,111,112,180,215,113]},{name:"Indonesian Male",flag:"id",gender:"m",lang:"id-ID",voiceIDs:[395]},{name:"Italian Female",flag:"it",gender:"f",lang:"it-IT",voiceIDs:[242,33,34,35,36,37,79,181,216,271,300,356,38]},{name:"Italian Male",flag:"it",gender:"m",lang:"it-IT",voiceIDs:[312,329,368,406]},{name:"Japanese Female",flag:"jp",gender:"f",lang:"ja-JP",voiceIDs:[248,50,51,280,217,52,153,182,273,302,358,274,303,359,53]},{name:"Japanese Male",flag:"jp",gender:"m",lang:"ja-JP",voiceIDs:[313,330,369,379,396]},{name:"Korean Female",flag:"kr",gender:"f",lang:"ko-KR",voiceIDs:[54,55,56,156,183,218,306,323,362,384,57]},{name:"Korean Male",flag:"kr",gender:"m",lang:"ko-KR",voiceIDs:[397]},{name:"Latin Female",flag:"va",gender:"f",lang:"la",voiceIDs:[114],deprecated:!0},{name:"Latin Male",flag:"va",gender:"m",lang:"la",voiceIDs:[165]},{name:"Norwegian Female",flag:"no",gender:"f",lang:"nb-NO",voiceIDs:[72,73,221,74]},{name:"Norwegian Male",flag:"no",gender:"m",lang:"nb-NO",voiceIDs:[166]},{name:"Polish Female",flag:"pl",gender:"f",lang:"pl-PL",voiceIDs:[244,120,119,121,185,222,267,296,352,122]},{name:"Polish Male",flag:"pl",gender:"m",lang:"pl-PL",voiceIDs:[314,331,370,398]},{name:"Portuguese Female",flag:"br",gender:"f",lang:"pt-BR",voiceIDs:[128,127,129,187,224,272,301,357,130]},{name:"Portuguese Male",flag:"br",gender:"m",lang:"pt-BR",voiceIDs:[400]},{name:"Romanian Female",flag:"ro",gender:"f",lang:"ro-RO",voiceIDs:[151,150,152,225,46]},{name:"Russian Female",flag:"ru",gender:"f",lang:"ru-RU",voiceIDs:[246,47,48,83,188,226,260,289,345,49]},{name:"Russian Male",flag:"ru",gender:"m",lang:"ru-RU",voiceIDs:[316,333,372,387]},{name:"Slovak Female",flag:"sk",gender:"f",lang:"sk-SK",voiceIDs:[133,132,134,227,135]},{name:"Slovak Male",flag:"sk",gender:"m",lang:"sk-SK",voiceIDs:[167],deprecated:!0},{name:"Spanish Female",flag:"es",gender:"f",lang:"es-ES",voiceIDs:[19,238,16,17,18,20,76,174,207,263,292,348,264,293,349,15]},{name:"Spanish Male",flag:"es",gender:"m",lang:"es-ES",voiceIDs:[309,326,365,401]},{name:"Spanish Latin American Female",flag:"es",gender:"f",lang:"es-MX",voiceIDs:[239,137,136,138,175,208,265,294,350,139]},{name:"Spanish Latin American Male",flag:"es",gender:"m",lang:"es-MX",voiceIDs:[136,310,327,366,402]},{name:"Swedish Female",flag:"sv",gender:"f",lang:"sv-SE",voiceIDs:[85,149,228,65]},{name:"Swedish Male",flag:"sv",gender:"m",lang:"sv-SE",voiceIDs:[148,168]},{name:"Tamil Male",flag:"hi",gender:"m",lang:"hi-IN",voiceIDs:[141]},{name:"Thai Female",flag:"th",gender:"f",lang:"th-TH",voiceIDs:[143,142,144,189,229,145]},{name:"Thai Male",flag:"th",gender:"m",lang:"th-TH",voiceIDs:[403]},{name:"Turkish Female",flag:"tr",gender:"f",lang:"tr-TR",voiceIDs:[69,70,82,190,230,71]},{name:"Turkish Male",flag:"tr",gender:"m",lang:"tr-TR",voiceIDs:[404]},{name:"Vietnamese Female",flag:"vi",gender:"f",lang:"vi-VN",voiceIDs:[405]},{name:"Vietnamese Male",flag:"vi",gender:"m",lang:"vi-VN",voiceIDs:[146]},{name:"Afrikaans Male",flag:"af",gender:"m",lang:"af-ZA",voiceIDs:[93]},{name:"Albanian Male",flag:"sq",gender:"m",lang:"sq-AL",voiceIDs:[94]},{name:"Bosnian Male",flag:"bs",gender:"m",lang:"bs",voiceIDs:[14]},{name:"Catalan Male",flag:"catalonia",gender:"m",lang:"ca-ES",voiceIDs:[68]},{name:"Croatian Male",flag:"hr",gender:"m",lang:"hr-HR",voiceIDs:[13]},{name:"Esperanto Male",flag:"eo",gender:"m",lang:"eo",voiceIDs:[108]},{name:"Icelandic Male",flag:"is",gender:"m",lang:"is-IS",voiceIDs:[110]},{name:"Latvian Male",flag:"lv",gender:"m",lang:"lv-LV",voiceIDs:[115]},{name:"Macedonian Male",flag:"mk",gender:"m",lang:"mk-MK",voiceIDs:[116]},{name:"Moldavian Female",flag:"md",gender:"f",lang:"md",voiceIDs:[117]},{name:"Moldavian Male",flag:"md",gender:"m",lang:"md",voiceIDs:[117],deprecated:!0},{name:"Montenegrin Male",flag:"me",gender:"m",lang:"me",voiceIDs:[118]},{name:"Serbian Male",flag:"sr",gender:"m",lang:"sr-RS",voiceIDs:[12]},{name:"Serbo-Croatian Male",flag:"hr",gender:"m",lang:"hr-HR",voiceIDs:[131]},{name:"Swahili Male",flag:"sw",gender:"m",lang:"sw-KE",voiceIDs:[140]},{name:"Welsh Male",flag:"cy",gender:"m",lang:"cy",voiceIDs:[147]},{name:"Fallback UK Female",flag:"gb",gender:"f",lang:"en-GB",voiceIDs:[8]}];a.voicecollection=[{name:"Google UK English Male"},{name:"Agnes"},{name:"Daniel Compact"},{name:"Google UK English Female"},{name:"en-GB",rate:0.25,pitch:1},{name:"en-AU",rate:0.25,pitch:1},{name:"ingl\u00e9s Reino Unido"},{name:"English United Kingdom"},{name:"Fallback en-GB Female",lang:"en-GB",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Eszter Compact"},{name:"hu-HU",rate:0.4},{name:"Fallback Hungarian Female",lang:"hu",fallbackvoice:!0,service:"g1"},{name:"Fallback Serbian Male",lang:"sr",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Croatian Male",lang:"hr",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Bosnian Male",lang:"bs",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Spanish Female",lang:"es",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Spanish Spain"},{name:"espa\u00f1ol Espa\u00f1a"},{name:"Diego Compact",rate:0.3},{name:"Google Espa\u00f1ol"},{name:"es-ES",rate:0.2},{name:"Google Fran\u00e7ais"},{name:"French France"},{name:"franc\u00e9s Francia"},{name:"Virginie Compact",rate:0.5},{name:"fr-FR",rate:0.25},{name:"Fallback French Female",lang:"fr",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Google Deutsch"},{name:"German Germany"},{name:"alem\u00e1n Alemania"},{name:"Yannick Compact",rate:0.5},{name:"de-DE",rate:0.25},{name:"Fallback Deutsch Female",lang:"de",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Google Italiano"},{name:"Italian Italy"},{name:"italiano Italia"},{name:"Paolo Compact",rate:0.5},{name:"it-IT",rate:0.25},{name:"Fallback Italian Female",lang:"it",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Google US English",timerSpeed:1},{name:"English United States"},{name:"ingl\u00e9s Estados Unidos"},{name:"Vicki"},{name:"en-US",rate:0.2,pitch:1,timerSpeed:1.3},{name:"Fallback US English",lang:"en-US",fallbackvoice:!0,timerSpeed:0,service:"g1",gender:"female"},{name:"Fallback Dutch Female",lang:"nl",fallbackvoice:!0,timerSpeed:0,service:"g1",gender:"female"},{name:"Fallback Romanian",lang:"ro",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Milena Compact"},{name:"ru-RU",rate:0.25},{name:"Fallback Russian",lang:"ru",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Google \u65e5\u672c\u4eba",timerSpeed:1},{name:"Kyoko Compact"},{name:"ja-JP",rate:0.25},{name:"Fallback Japanese Female",lang:"ja",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Google \ud55c\uad6d\uc758",timerSpeed:1},{name:"Narae Compact"},{name:"ko-KR",rate:0.25},{name:"Fallback Korean Female",lang:"ko",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Google \u4e2d\u56fd\u7684",timerSpeed:1},{name:"Ting-Ting Compact"},{name:"zh-CN",rate:0.25},{name:"Fallback Chinese",lang:"zh-CN",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Alexandros Compact"},{name:"el-GR",rate:0.25},{name:"Fallback Greek",lang:"el",fallbackvoice:!0,service:"g2",gender:"female"},{name:"Fallback Swedish",lang:"sv",fallbackvoice:!0,service:"g2",gender:"female"},{name:"hi-IN",rate:0.25},{name:"Fallback Hindi Female",lang:"hi",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Fallback Catalan",lang:"ca",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Aylin Compact"},{name:"tr-TR",rate:0.25},{name:"Fallback Turkish",lang:"tr",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Stine Compact"},{name:"no-NO",rate:0.25},{name:"Fallback Norwegian",lang:"no",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Daniel"},{name:"Monica"},{name:"Amelie"},{name:"Anna"},{name:"Alice"},{name:"Melina"},{name:"Mariska"},{name:"Yelda"},{name:"Milena"},{name:"Xander"},{name:"Alva"},{name:"Lee Compact"},{name:"Karen"},{name:"Fallback Australian Female",lang:"en-AU",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Mikko Compact"},{name:"Satu"},{name:"fi-FI",rate:0.25},{name:"Fallback Finnish",lang:"fi",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Fallback Afrikans",lang:"af",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Albanian",lang:"sq",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Maged Compact"},{name:"Tarik"},{name:"ar-SA",rate:0.25},{name:"Fallback Arabic",lang:"ar",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Fallback Armenian",lang:"hy",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Zuzana Compact"},{name:"Zuzana"},{name:"cs-CZ",rate:0.25},{name:"Fallback Czech",lang:"cs",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Ida Compact"},{name:"Sara"},{name:"da-DK",rate:0.25},{name:"Fallback Danish",lang:"da",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Fallback Esperanto",lang:"eo",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Haitian Creole",lang:"ht",fallbackvoice:!0},{name:"Fallback Icelandic",lang:"is",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Damayanti"},{name:"id-ID",rate:0.25},{name:"Fallback Indonesian Female",lang:"id",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Fallback Latin Female",lang:"la",fallbackvoice:!0,service:"g2",gender:"female"},{name:"Fallback Latvian Male",lang:"lv",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Macedonian Male",lang:"mk",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Moldavian Female",lang:"mo",fallbackvoice:!0,service:"g2",gender:"female"},{name:"Fallback Montenegrin Male",lang:"sr-ME",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Agata Compact"},{name:"Zosia"},{name:"pl-PL",rate:0.25},{name:"Fallback Polish Female",lang:"pl",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Raquel Compact"},{name:"Luciana"},{name:"pt-BR",rate:0.25},{name:"Fallback Brazilian Portuguese Female",lang:"pt-BR",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Joana Compact"},{name:"Joana"},{name:"pt-PT",rate:0.25},{name:"Fallback Portuguese",lang:"pt-PT",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Fallback Serbo-Croation",lang:"sh",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Laura Compact"},{name:"Laura"},{name:"sk-SK",rate:0.25},{name:"Fallback Slovak",lang:"sk",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Javier Compact"},{name:"Paulina"},{name:"es-MX",rate:0.25},{name:"Fallback Spanish (Latin American) Female",lang:"es-419",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Fallback Swahili",lang:"sw",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Tamil",lang:"ta",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Narisa Compact"},{name:"Kanya"},{name:"th-TH",rate:0.25},{name:"Fallback Thai Female",lang:"th",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Fallback Vietnamese Male",lang:"vi",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Welsh",lang:"cy",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Oskar Compact"},{name:"sv-SE",rate:0.25},{name:"Simona Compact"},{name:"Ioana"},{name:"ro-RO",rate:0.25},{name:"Kyoko"},{name:"Lekha"},{name:"Ting-Ting"},{name:"Yuna"},{name:"Xander Compact"},{name:"nl-NL",rate:0.25},{name:"Fallback UK English Male",lang:"en-GB",fallbackvoice:!0,service:"g1",voicename:"rjs",gender:"male"},{name:"Finnish Male",lang:"fi",fallbackvoice:!0,service:"g1",voicename:"",gender:"male"},{name:"Czech Male",lang:"cs",fallbackvoice:!0,service:"g1",voicename:"",gender:"male"},{name:"Danish Male",lang:"da",fallbackvoice:!0,service:"g1",voicename:"",gender:"male"},{name:"Greek Male",lang:"el",fallbackvoice:!0,service:"g1",voicename:"",gender:"male"},{name:"Hungarian Male",lang:"hu",fallbackvoice:!0,service:"g1",voicename:"",gender:"male"},{name:"Latin Male",lang:"la",fallbackvoice:!0,service:"g2",voicename:"",gender:"male"},{name:"Norwegian Male",lang:"no",fallbackvoice:!0,service:"g1",voicename:"",gender:"male"},{name:"Slovak Male",lang:"sk",fallbackvoice:!0,service:"g1",voicename:"",gender:"male"},{name:"Swedish Male",lang:"sv",fallbackvoice:!0,service:"g1",voicename:"",gender:"male"},{name:"Fallback US English Male",lang:"en-US",fallbackvoice:!0,service:"g1",voicename:"",gender:"male"},{name:"German Germany",lang:"de_DE"},{name:"English United Kingdom",lang:"en_GB"},{name:"English India",lang:"en_IN"},{name:"English United States",lang:"en_US"},{name:"Spanish Spain",lang:"es_ES"},{name:"Spanish Mexico",lang:"es_MX"},{name:"Spanish United States",lang:"es_US"},{name:"French Belgium",lang:"fr_BE"},{name:"French France",lang:"fr_FR"},{name:"Hindi India",lang:"hi_IN"},{name:"Indonesian Indonesia",lang:"in_ID"},{name:"Italian Italy",lang:"it_IT"},{name:"Japanese Japan",lang:"ja_JP"},{name:"Korean South Korea",lang:"ko_KR"},{name:"Dutch Netherlands",lang:"nl_NL"},{name:"Polish Poland",lang:"pl_PL"},{name:"Portuguese Brazil",lang:"pt_BR"},{name:"Portuguese Portugal",lang:"pt_PT"},{name:"Russian Russia",lang:"ru_RU"},{name:"Thai Thailand",lang:"th_TH"},{name:"Turkish Turkey",lang:"tr_TR"},{name:"Chinese China",lang:"zh_CN_#Hans"},{name:"Chinese Hong Kong",lang:"zh_HK_#Hans"},{name:"Chinese Hong Kong",lang:"zh_HK_#Hant"},{name:"Chinese Taiwan",lang:"zh_TW_#Hant"},{name:"Alex"},{name:"Maged",lang:"ar-SA"},{name:"Zuzana",lang:"cs-CZ"},{name:"Sara",lang:"da-DK"},{name:"Anna",lang:"de-DE"},{name:"Melina",lang:"el-GR"},{name:"Karen",lang:"en-AU"},{name:"Daniel",lang:"en-GB"},{name:"Moira",lang:"en-IE"},{name:"Samantha (Enhanced)",lang:"en-US"},{name:"Samantha",lang:"en-US"},{name:"Tessa",lang:"en-ZA"},{name:"Monica",lang:"es-ES"},{name:"Paulina",lang:"es-MX"},{name:"Satu",lang:"fi-FI"},{name:"Amelie",lang:"fr-CA"},{name:"Thomas",lang:"fr-FR"},{name:"Carmit",lang:"he-IL"},{name:"Lekha",lang:"hi-IN"},{name:"Mariska",lang:"hu-HU"},{name:"Damayanti",lang:"id-ID"},{name:"Alice",lang:"it-IT"},{name:"Kyoko",lang:"ja-JP"},{name:"Yuna",lang:"ko-KR"},{name:"Ellen",lang:"nl-BE"},{name:"Xander",lang:"nl-NL"},{name:"Nora",lang:"no-NO"},{name:"Zosia",lang:"pl-PL"},{name:"Luciana",lang:"pt-BR"},{name:"Joana",lang:"pt-PT"},{name:"Ioana",lang:"ro-RO"},{name:"Milena",lang:"ru-RU"},{name:"Laura",lang:"sk-SK"},{name:"Alva",lang:"sv-SE"},{name:"Kanya",lang:"th-TH"},{name:"Yelda",lang:"tr-TR"},{name:"Ting-Ting",lang:"zh-CN"},{name:"Sin-Ji",lang:"zh-HK"},{name:"Mei-Jia",lang:"zh-TW"},{name:"Microsoft David Mobile - English (United States)",lang:"en-US"},{name:"Microsoft Zira Mobile - English (United States)",lang:"en-US"},{name:"Microsoft Mark Mobile - English (United States)",lang:"en-US"},{name:"native",lang:""},{name:"Google espa\u00f1ol"},{name:"Google espa\u00f1ol de Estados Unidos"},{name:"Google fran\u00e7ais"},{name:"Google Bahasa Indonesia"},{name:"Google italiano"},{name:"Google Nederlands"},{name:"Google polski"},{name:"Google portugu\u00eas do Brasil"},{name:"Google \u0440\u0443\u0441\u0441\u043a\u0438\u0439"},{name:"Google \u0939\u093f\u0928\u094d\u0926\u0940"},{name:"Google \u65e5\u672c\u8a9e"},{name:"Google \u666e\u901a\u8bdd\uff08\u4e2d\u56fd\u5927\u9646\uff09"},{name:"Google \u7ca4\u8a9e\uff08\u9999\u6e2f\uff09"},{name:"zh-HK",rate:0.25},{name:"Fallback Chinese (Hong Kong) Female",lang:"zh-HK",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Google \u7ca4\u8a9e\uff08\u9999\u6e2f\uff09"},{name:"zh-TW",rate:0.25},{name:"Fallback Chinese (Taiwan) Female",lang:"zh-TW",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Microsoft George Mobile - English (United Kingdom)",lang:"en-GB"},{name:"Microsoft Susan Mobile - English (United Kingdom)",lang:"en-GB"},{name:"Microsoft Hazel Mobile - English (United Kingdom)",lang:"en-GB"},{name:"Microsoft Heera Mobile - English (India)",lang:"en-In"},{name:"Microsoft Irina Mobile - Russian (Russia)",lang:"ru-RU"},{name:"Microsoft Hedda Mobile - German (Germany)",lang:"de-DE"},{name:"Microsoft Katja Mobile - German (Germany)",lang:"de-DE"},{name:"Microsoft Helena Mobile - Spanish (Spain)",lang:"es-ES"},{name:"Microsoft Laura Mobile - Spanish (Spain)",lang:"es-ES"},{name:"Microsoft Sabina Mobile - Spanish (Mexico)",lang:"es-MX"},{name:"Microsoft Julie Mobile - French (France)",lang:"fr-FR"},{name:"Microsoft Paulina Mobile - Polish (Poland)",lang:"pl-PL"},{name:"Microsoft Huihui Mobile - Chinese (Simplified, PRC)",lang:"zh-CN"},{name:"Microsoft Yaoyao Mobile - Chinese (Simplified, PRC)",lang:"zh-CN"},{name:"Microsoft Tracy Mobile - Chinese (Traditional, Hong Kong S.A.R.)",lang:"zh-CN"},{name:"Microsoft Elsa Mobile - Italian (Italy)",lang:"it-IT"},{name:"Microsoft Maria Mobile - Portuguese (Brazil)",lang:"pt-BR"},{name:"Microsoft Ayumi Mobile - Japanese (Japan)",lang:"ja-JP"},{name:"Microsoft Haruka Mobile - Japanese (Japan)",lang:"ja-JP"},{name:"Helena",lang:"de-DE"},{name:"Catherine",lang:"en-AU"},{name:"Arthur",lang:"en-GB"},{name:"Martha",lang:"en-GB"},{name:"Marie",lang:"fr-FR"},{name:"O-ren",lang:"ja-JP"},{name:"Yu-shu",lang:"zh-CN"},{name:"Microsoft David - English (United States)",lang:"en-US"},{name:"Microsoft Zira - English (United States)",lang:"en-US"},{name:"Microsoft Mark - English (United States)",lang:"en-US"},{name:"Microsoft George - English (United Kingdom)",lang:"en-GB"},{name:"Microsoft Susan - English (United Kingdom)",lang:"en-GB"},{name:"Microsoft Hazel - English (United Kingdom)",lang:"en-GB"},{name:"Microsoft Heera - English (India)",lang:"en-In"},{name:"Microsoft Irina - Russian (Russia)",lang:"ru-RU"},{name:"Microsoft Hedda - German (Germany)",lang:"de-DE"},{name:"Microsoft Katja - German (Germany)",lang:"de-DE"},{name:"Microsoft Helena - Spanish (Spain)",lang:"es-ES"},{name:"Microsoft Laura - Spanish (Spain)",lang:"es-ES"},{name:"Microsoft Sabina - Spanish (Mexico)",lang:"es-MX"},{name:"Microsoft Julie - French (France)",lang:"fr-FR"},{name:"Microsoft Paulina - Polish (Poland)",lang:"pl-PL"},{name:"Microsoft Huihui - Chinese (Simplified, PRC)",lang:"zh-CN"},{name:"Microsoft Yaoyao - Chinese (Simplified, PRC)",lang:"zh-CN"},{name:"Microsoft Tracy - Chinese (Traditional, Hong Kong S.A.R.)",lang:"zh-CN"},{name:"Microsoft Elsa - Italian (Italy)",lang:"it-IT"},{name:"Microsoft Maria - Portuguese (Brazil)",lang:"pt-BR"},{name:"Microsoft Ayumi - Japanese (Japan)",lang:"ja-JP"},{name:"Microsoft Haruka - Japanese (Japan)",lang:"ja-JP"},{name:"Microsoft Hortense - French (France)",lang:"fr-FR"},{name:"Microsoft Hanhan - Chinese (Traditional, Taiwan)",lang:"zh-TW"},{name:"Microsoft Heami - Korean (Korean)",lang:"ko-KR"},{name:"Microsoft Stefan - German (Germany)",lang:"de-DE"},{name:"Microsoft Ravi - English (India)",lang:"en-IN"},{name:"Microsoft Pablo - Spanish (Spain)",lang:"es-ES"},{name:"Microsoft Raul - Spanish (Mexico)",lang:"es-MX"},{name:"Microsoft Paul - French (France)",lang:"fr-FR"},{name:"Microsoft Cosimo - Italian (Italy)",lang:"it-IT"},{name:"Microsoft Ichiro - Japanese (Japan)",lang:"ja-JP"},{name:"Microsoft Adam - Polish (Poland)",lang:"pl-PL"},{name:"Microsoft Daniel - Portuguese (Brazil)",lang:"pt-BR"},{name:"Microsoft Pavel - Russian (Russia)",lang:"ru-RU"},{name:"Microsoft Kangkang - Chinese (Simplified, PRC)",lang:"zh-CN"},{name:"Microsoft Danny - Chinese (Traditional, Hong Kong S.A.R.)",lang:"zh-HK"},{name:"Microsoft Yating - Chinese (Traditional, Taiwan)",lang:"zh-TW"},{name:"Microsoft Zhiwei - Chinese (Traditional, Taiwan)",lang:"zh-TW"},{name:"Microsoft Hortense Mobile - French (France)",lang:"fr-FR"},{name:"Microsoft Hanhan Mobile - Chinese (Traditional, Taiwan)",lang:"zh-TW"},{name:"Microsoft Heami Mobile - Korean (Korean)",lang:"ko-KR"},{name:"Microsoft Stefan Mobile - German (Germany)",lang:"de-DE"},{name:"Microsoft Ravi Mobile - English (India)",lang:"en-IN"},{name:"Microsoft Pablo Mobile - Spanish (Spain)",lang:"es-ES"},{name:"Microsoft Raul Mobile - Spanish (Mexico)",lang:"es-MX"},{name:"Microsoft Paul Mobile - French (France)",lang:"fr-FR"},{name:"Microsoft Cosimo Mobile - Italian (Italy)",lang:"it-IT"},{name:"Microsoft Ichiro Mobile - Japanese (Japan)",lang:"ja-JP"},{name:"Microsoft Adam Mobile - Polish (Poland)",lang:"pl-PL"},{name:"Microsoft Daniel Mobile - Portuguese (Brazil)",lang:"pt-BR"},{name:"Microsoft Pavel Mobile - Russian (Russia)",lang:"ru-RU"},{name:"Microsoft Kangkang Mobile - Chinese (Simplified, PRC)",lang:"zh-CN"},{name:"Microsoft Danny Mobile - Chinese (Traditional, Hong Kong S.A.R.)",lang:"zh-HK"},{name:"Microsoft Yating Mobile - Chinese (Traditional, Taiwan)",lang:"zh-TW"},{name:"Microsoft Zhiwei Mobile - Chinese (Traditional, Taiwan)",lang:"zh-TW"},{name:"Microsoft David Desktop - English (United States)",lang:"en-US"},{name:"Microsoft Zira Desktop - English (United States)",lang:"en-US"},{name:"Microsoft Mark Desktop - English (United States)",lang:"en-US"},{name:"Microsoft George Desktop - English (United Kingdom)",lang:"en-GB"},{name:"Microsoft Susan Desktop - English (United Kingdom)",lang:"en-GB"},{name:"Microsoft Hazel Desktop - English (United Kingdom)",lang:"en-GB"},{name:"Microsoft Heera Desktop - English (India)",lang:"en-In"},{name:"Microsoft Irina Desktop - Russian (Russia)",lang:"ru-RU"},{name:"Microsoft Hedda Desktop - German (Germany)",lang:"de-DE"},{name:"Microsoft Katja Desktop - German (Germany)",lang:"de-DE"},{name:"Microsoft Helena Desktop - Spanish (Spain)",lang:"es-ES"},{name:"Microsoft Laura Desktop - Spanish (Spain)",lang:"es-ES"},{name:"Microsoft Sabina Desktop - Spanish (Mexico)",lang:"es-MX"},{name:"Microsoft Julie Desktop - French (France)",lang:"fr-FR"},{name:"Microsoft Paulina Desktop - Polish (Poland)",lang:"pl-PL"},{name:"Microsoft Huihui Desktop - Chinese (Simplified, PRC)",lang:"zh-CN"},{name:"Microsoft Yaoyao Desktop - Chinese (Simplified, PRC)",lang:"zh-CN"},{name:"Microsoft Tracy Desktop - Chinese (Traditional, Hong Kong S.A.R.)",lang:"zh-CN"},{name:"Microsoft Elsa Desktop - Italian (Italy)",lang:"it-IT"},{name:"Microsoft Maria Desktop - Portuguese (Brazil)",lang:"pt-BR"},{name:"Microsoft Ayumi Desktop - Japanese (Japan)",lang:"ja-JP"},{name:"Microsoft Haruka Desktop - Japanese (Japan)",lang:"ja-JP"},{name:"Microsoft Hortense Desktop - French (France)",lang:"fr-FR"},{name:"Microsoft Hanhan Desktop - Chinese (Traditional, Taiwan)",lang:"zh-TW"},{name:"Microsoft Heami Desktop - Korean (Korean)",lang:"ko-KR"},{name:"Microsoft Stefan Desktop - German (Germany)",lang:"de-DE"},{name:"Microsoft Ravi Desktop - English (India)",lang:"en-IN"},{name:"Microsoft Pablo Desktop - Spanish (Spain)",lang:"es-ES"},{name:"Microsoft Raul Desktop - Spanish (Mexico)",lang:"es-MX"},{name:"Microsoft Paul Desktop - French (France)",lang:"fr-FR"},{name:"Microsoft Cosimo Desktop - Italian (Italy)",lang:"it-IT"},{name:"Microsoft Ichiro Desktop - Japanese (Japan)",lang:"ja-JP"},{name:"Microsoft Adam Desktop - Polish (Poland)",lang:"pl-PL"},{name:"Microsoft Daniel Desktop - Portuguese (Brazil)",lang:"pt-BR"},{name:"Microsoft Pavel Desktop - Russian (Russia)",lang:"ru-RU"},{name:"Microsoft Kangkang Desktop - Chinese (Simplified, PRC)",lang:"zh-CN"},{name:"Microsoft Danny Desktop - Chinese (Traditional, Hong Kong S.A.R.)",lang:"zh-HK"},{name:"Microsoft Yating Desktop - Chinese (Traditional, Taiwan)",lang:"zh-TW"},{name:"Microsoft Zhiwei Desktop - Chinese (Traditional, Taiwan)",lang:"zh-TW"},{name:"Martin",lang:"de-DE"},{name:"Daniel",lang:"fr-FR"},{name:"Hattori",lang:"ja-JP"},{name:"Li-mu",lang:"zh-CN"},{name:"Gordon",lang:"en-AU"},{name:"Aaron",lang:"en-US"},{name:"Nicky",lang:"en-US"},{name:"Microsoft Hanhan Desktop - Chinese (Taiwan)",lang:"zh-TW"},{name:"Microsoft Heami Desktop - Korean",lang:"ko-KR"},{name:"Fallback Australian Male",lang:"en-AU",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Russian Male",lang:"ru",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Arabic Male",lang:"ar",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Chinese",lang:"zh-CN",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Chinese HK",lang:"zh-HK",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Chinese TW",lang:"zh-TW",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback French Male",lang:"fr",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Deutsch Male",lang:"de",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Hindi Male",lang:"hi",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Indonesian Male",lang:"id",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Japanese Male",lang:"ja",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Korean Male",lang:"ko",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Polish Male",lang:"pl",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Brazilian Portuguese Male",lang:"pt-BR",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Portuguese Male",lang:"pt-PT",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Spanish Male",lang:"es",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Spanish (Latin American) Male",lang:"es-419",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Thai Male",lang:"th",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Turkish Male",lang:"tr",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Vietnamese Female",lang:"vi",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Fallback Italian Male",lang:"it",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Dutch Male",lang:"nl",fallbackvoice:!0,timerSpeed:0,service:"g1",gender:"male"},{name:"Microsoft Anna - English (United States)",lang:"en-US",gender:"female"},{name:"Microsoft Lili - Chinese (China)",lang:"zh-CN",gender:"female"}];a.iOS=/(iPad|iPhone|iPod)/g.test(navigator.userAgent);a.iOS9=/(iphone|ipod|ipad).* os 9_/.test(navigator.userAgent.toLowerCase());a.iOS10=/(iphone|ipod|ipad).* os 10_/.test(navigator.userAgent.toLowerCase());a.iOS11=/(iphone|ipod|ipad).* os 11_/.test(navigator.userAgent.toLowerCase());a.iOS9plus=/(iphone|ipod|ipad).* os 10_/.test(navigator.userAgent.toLowerCase())||/(iphone|ipod|ipad).* os 10_/.test(navigator.userAgent.toLowerCase());a.iOS12_0=/(iphone|ipod|ipad).* os 12_0/.test(navigator.userAgent.toLowerCase());a.iOS12=/(iphone|ipod|ipad).* os 12_/.test(navigator.userAgent.toLowerCase());a.is_chrome=-1<navigator.userAgent.indexOf("Chrome");a.is_safari=-1<navigator.userAgent.indexOf("Safari");a.is_chrome&&a.is_safari&&(a.is_safari=!1);a.is_opera=!!window.opera||0<=navigator.userAgent.indexOf(" OPR/");a.is_android=-1<navigator.userAgent.toLowerCase().indexOf("android");a.iOS_initialized=!1;a.iOS9_initialized=!1;a.iOS10_initialized=!1;a.iOS11_initialized=!1;a.cache_ios_voices=[{name:"he-IL",voiceURI:"he-IL",lang:"he-IL"},{name:"th-TH",voiceURI:"th-TH",lang:"th-TH"},{name:"pt-BR",voiceURI:"pt-BR",lang:"pt-BR"},{name:"sk-SK",voiceURI:"sk-SK",lang:"sk-SK"},{name:"fr-CA",voiceURI:"fr-CA",lang:"fr-CA"},{name:"ro-RO",voiceURI:"ro-RO",lang:"ro-RO"},{name:"no-NO",voiceURI:"no-NO",lang:"no-NO"},{name:"fi-FI",voiceURI:"fi-FI",lang:"fi-FI"},{name:"pl-PL",voiceURI:"pl-PL",lang:"pl-PL"},{name:"de-DE",voiceURI:"de-DE",lang:"de-DE"},{name:"nl-NL",voiceURI:"nl-NL",lang:"nl-NL"},{name:"id-ID",voiceURI:"id-ID",lang:"id-ID"},{name:"tr-TR",voiceURI:"tr-TR",lang:"tr-TR"},{name:"it-IT",voiceURI:"it-IT",lang:"it-IT"},{name:"pt-PT",voiceURI:"pt-PT",lang:"pt-PT"},{name:"fr-FR",voiceURI:"fr-FR",lang:"fr-FR"},{name:"ru-RU",voiceURI:"ru-RU",lang:"ru-RU"},{name:"es-MX",voiceURI:"es-MX",lang:"es-MX"},{name:"zh-HK",voiceURI:"zh-HK",lang:"zh-HK"},{name:"sv-SE",voiceURI:"sv-SE",lang:"sv-SE"},{name:"hu-HU",voiceURI:"hu-HU",lang:"hu-HU"},{name:"zh-TW",voiceURI:"zh-TW",lang:"zh-TW"},{name:"es-ES",voiceURI:"es-ES",lang:"es-ES"},{name:"zh-CN",voiceURI:"zh-CN",lang:"zh-CN"},{name:"nl-BE",voiceURI:"nl-BE",lang:"nl-BE"},{name:"en-GB",voiceURI:"en-GB",lang:"en-GB"},{name:"ar-SA",voiceURI:"ar-SA",lang:"ar-SA"},{name:"ko-KR",voiceURI:"ko-KR",lang:"ko-KR"},{name:"cs-CZ",voiceURI:"cs-CZ",lang:"cs-CZ"},{name:"en-ZA",voiceURI:"en-ZA",lang:"en-ZA"},{name:"en-AU",voiceURI:"en-AU",lang:"en-AU"},{name:"da-DK",voiceURI:"da-DK",lang:"da-DK"},{name:"en-US",voiceURI:"en-US",lang:"en-US"},{name:"en-IE",voiceURI:"en-IE",lang:"en-IE"},{name:"hi-IN",voiceURI:"hi-IN",lang:"hi-IN"},{name:"el-GR",voiceURI:"el-GR",lang:"el-GR"},{name:"ja-JP",voiceURI:"ja-JP",lang:"ja-JP"}];a.cache_ios9_voices=[{name:"Maged",voiceURI:"com.apple.ttsbundle.Maged-compact",lang:"ar-SA",localService:!0,"default":!0},{name:"Zuzana",voiceURI:"com.apple.ttsbundle.Zuzana-compact",lang:"cs-CZ",localService:!0,"default":!0},{name:"Sara",voiceURI:"com.apple.ttsbundle.Sara-compact",lang:"da-DK",localService:!0,"default":!0},{name:"Anna",voiceURI:"com.apple.ttsbundle.Anna-compact",lang:"de-DE",localService:!0,"default":!0},{name:"Melina",voiceURI:"com.apple.ttsbundle.Melina-compact",lang:"el-GR",localService:!0,"default":!0},{name:"Karen",voiceURI:"com.apple.ttsbundle.Karen-compact",lang:"en-AU",localService:!0,"default":!0},{name:"Daniel",voiceURI:"com.apple.ttsbundle.Daniel-compact",lang:"en-GB",localService:!0,"default":!0},{name:"Moira",voiceURI:"com.apple.ttsbundle.Moira-compact",lang:"en-IE",localService:!0,"default":!0},{name:"Samantha (Enhanced)",voiceURI:"com.apple.ttsbundle.Samantha-premium",lang:"en-US",localService:!0,"default":!0},{name:"Samantha",voiceURI:"com.apple.ttsbundle.Samantha-compact",lang:"en-US",localService:!0,"default":!0},{name:"Tessa",voiceURI:"com.apple.ttsbundle.Tessa-compact",lang:"en-ZA",localService:!0,"default":!0},{name:"Monica",voiceURI:"com.apple.ttsbundle.Monica-compact",lang:"es-ES",localService:!0,"default":!0},{name:"Paulina",voiceURI:"com.apple.ttsbundle.Paulina-compact",lang:"es-MX",localService:!0,"default":!0},{name:"Satu",voiceURI:"com.apple.ttsbundle.Satu-compact",lang:"fi-FI",localService:!0,"default":!0},{name:"Amelie",voiceURI:"com.apple.ttsbundle.Amelie-compact",lang:"fr-CA",localService:!0,"default":!0},{name:"Thomas",voiceURI:"com.apple.ttsbundle.Thomas-compact",lang:"fr-FR",localService:!0,"default":!0},{name:"Carmit",voiceURI:"com.apple.ttsbundle.Carmit-compact",lang:"he-IL",localService:!0,"default":!0},{name:"Lekha",voiceURI:"com.apple.ttsbundle.Lekha-compact",lang:"hi-IN",localService:!0,"default":!0},{name:"Mariska",voiceURI:"com.apple.ttsbundle.Mariska-compact",lang:"hu-HU",localService:!0,"default":!0},{name:"Damayanti",voiceURI:"com.apple.ttsbundle.Damayanti-compact",lang:"id-ID",localService:!0,"default":!0},{name:"Alice",voiceURI:"com.apple.ttsbundle.Alice-compact",lang:"it-IT",localService:!0,"default":!0},{name:"Kyoko",voiceURI:"com.apple.ttsbundle.Kyoko-compact",lang:"ja-JP",localService:!0,"default":!0},{name:"Yuna",voiceURI:"com.apple.ttsbundle.Yuna-compact",lang:"ko-KR",localService:!0,"default":!0},{name:"Ellen",voiceURI:"com.apple.ttsbundle.Ellen-compact",lang:"nl-BE",localService:!0,"default":!0},{name:"Xander",voiceURI:"com.apple.ttsbundle.Xander-compact",lang:"nl-NL",localService:!0,"default":!0},{name:"Nora",voiceURI:"com.apple.ttsbundle.Nora-compact",lang:"no-NO",localService:!0,"default":!0},{name:"Zosia",voiceURI:"com.apple.ttsbundle.Zosia-compact",lang:"pl-PL",localService:!0,"default":!0},{name:"Luciana",voiceURI:"com.apple.ttsbundle.Luciana-compact",lang:"pt-BR",localService:!0,"default":!0},{name:"Joana",voiceURI:"com.apple.ttsbundle.Joana-compact",lang:"pt-PT",localService:!0,"default":!0},{name:"Ioana",voiceURI:"com.apple.ttsbundle.Ioana-compact",lang:"ro-RO",localService:!0,"default":!0},{name:"Milena",voiceURI:"com.apple.ttsbundle.Milena-compact",lang:"ru-RU",localService:!0,"default":!0},{name:"Laura",voiceURI:"com.apple.ttsbundle.Laura-compact",lang:"sk-SK",localService:!0,"default":!0},{name:"Alva",voiceURI:"com.apple.ttsbundle.Alva-compact",lang:"sv-SE",localService:!0,"default":!0},{name:"Kanya",voiceURI:"com.apple.ttsbundle.Kanya-compact",lang:"th-TH",localService:!0,"default":!0},{name:"Yelda",voiceURI:"com.apple.ttsbundle.Yelda-compact",lang:"tr-TR",localService:!0,"default":!0},{name:"Ting-Ting",voiceURI:"com.apple.ttsbundle.Ting-Ting-compact",lang:"zh-CN",localService:!0,"default":!0},{name:"Sin-Ji",voiceURI:"com.apple.ttsbundle.Sin-Ji-compact",lang:"zh-HK",localService:!0,"default":!0},{name:"Mei-Jia",voiceURI:"com.apple.ttsbundle.Mei-Jia-compact",lang:"zh-TW",localService:!0,"default":!0}];a.cache_ios10_voices=[{name:"Maged",voiceURI:"com.apple.ttsbundle.Maged-compact",lang:"ar-SA"},{name:"Zuzana",voiceURI:"com.apple.ttsbundle.Zuzana-compact",lang:"cs-CZ"},{name:"Sara",voiceURI:"com.apple.ttsbundle.Sara-compact",lang:"da-DK"},{name:"Anna",voiceURI:"com.apple.ttsbundle.Anna-compact",lang:"de-DE"},{name:"Helena",voiceURI:"com.apple.ttsbundle.siri_female_de-DE_compact",lang:"de-DE"},{name:"Martin",voiceURI:"com.apple.ttsbundle.siri_male_de-DE_compact",lang:"de-DE"},{name:"Nikos (Enhanced)",voiceURI:"com.apple.ttsbundle.Nikos-premium",lang:"el-GR"},{name:"Melina",voiceURI:"com.apple.ttsbundle.Melina-compact",lang:"el-GR"},{name:"Nikos",voiceURI:"com.apple.ttsbundle.Nikos-compact",lang:"el-GR"},{name:"Catherine",voiceURI:"com.apple.ttsbundle.siri_female_en-AU_compact",lang:"en-AU"},{name:"Gordon",voiceURI:"com.apple.ttsbundle.siri_male_en-AU_compact",lang:"en-AU"},{name:"Karen",voiceURI:"com.apple.ttsbundle.Karen-compact",lang:"en-AU"},{name:"Daniel (Enhanced)",voiceURI:"com.apple.ttsbundle.Daniel-premium",lang:"en-GB"},{name:"Arthur",voiceURI:"com.apple.ttsbundle.siri_male_en-GB_compact",lang:"en-GB"},{name:"Daniel",voiceURI:"com.apple.ttsbundle.Daniel-compact",lang:"en-GB"},{name:"Martha",voiceURI:"com.apple.ttsbundle.siri_female_en-GB_compact",lang:"en-GB"},{name:"Moira",voiceURI:"com.apple.ttsbundle.Moira-compact",lang:"en-IE"},{name:"Nicky (Enhanced)",voiceURI:"com.apple.ttsbundle.siri_female_en-US_premium",lang:"en-US"},{name:"Samantha (Enhanced)",voiceURI:"com.apple.ttsbundle.Samantha-premium",lang:"en-US"},{name:"Aaron",voiceURI:"com.apple.ttsbundle.siri_male_en-US_compact",lang:"en-US"},{name:"Fred",voiceURI:"com.apple.speech.synthesis.voice.Fred",lang:"en-US"},{name:"Nicky",voiceURI:"com.apple.ttsbundle.siri_female_en-US_compact",lang:"en-US"},{name:"Samantha",voiceURI:"com.apple.ttsbundle.Samantha-compact",lang:"en-US"},{name:"Tessa",voiceURI:"com.apple.ttsbundle.Tessa-compact",lang:"en-ZA"},{name:"Monica",voiceURI:"com.apple.ttsbundle.Monica-compact",lang:"es-ES"},{name:"Paulina",voiceURI:"com.apple.ttsbundle.Paulina-compact",lang:"es-MX"},{name:"Satu",voiceURI:"com.apple.ttsbundle.Satu-compact",lang:"fi-FI"},{name:"Amelie",voiceURI:"com.apple.ttsbundle.Amelie-compact",lang:"fr-CA"},{name:"Daniel",voiceURI:"com.apple.ttsbundle.siri_male_fr-FR_compact",lang:"fr-FR"},{name:"Marie",voiceURI:"com.apple.ttsbundle.siri_female_fr-FR_compact",lang:"fr-FR"},{name:"Thomas",voiceURI:"com.apple.ttsbundle.Thomas-compact",lang:"fr-FR"},{name:"Carmit",voiceURI:"com.apple.ttsbundle.Carmit-compact",lang:"he-IL"},{name:"Lekha",voiceURI:"com.apple.ttsbundle.Lekha-compact",lang:"hi-IN"},{name:"Mariska",voiceURI:"com.apple.ttsbundle.Mariska-compact",lang:"hu-HU"},{name:"Damayanti",voiceURI:"com.apple.ttsbundle.Damayanti-compact",lang:"id-ID"},{name:"Alice",voiceURI:"com.apple.ttsbundle.Alice-compact",lang:"it-IT"},{name:"Hattori",voiceURI:"com.apple.ttsbundle.siri_male_ja-JP_compact",lang:"ja-JP"},{name:"Kyoko",voiceURI:"com.apple.ttsbundle.Kyoko-compact",lang:"ja-JP"},{name:"O-ren",voiceURI:"com.apple.ttsbundle.siri_female_ja-JP_compact",lang:"ja-JP"},{name:"Yuna",voiceURI:"com.apple.ttsbundle.Yuna-compact",lang:"ko-KR"},{name:"Ellen",voiceURI:"com.apple.ttsbundle.Ellen-compact",lang:"nl-BE"},{name:"Xander",voiceURI:"com.apple.ttsbundle.Xander-compact",lang:"nl-NL"},{name:"Nora",voiceURI:"com.apple.ttsbundle.Nora-compact",lang:"no-NO"},{name:"Zosia",voiceURI:"com.apple.ttsbundle.Zosia-compact",lang:"pl-PL"},{name:"Luciana",voiceURI:"com.apple.ttsbundle.Luciana-compact",lang:"pt-BR"},{name:"Joana",voiceURI:"com.apple.ttsbundle.Joana-compact",lang:"pt-PT"},{name:"Ioana",voiceURI:"com.apple.ttsbundle.Ioana-compact",lang:"ro-RO"},{name:"Milena",voiceURI:"com.apple.ttsbundle.Milena-compact",lang:"ru-RU"},{name:"Laura",voiceURI:"com.apple.ttsbundle.Laura-compact",lang:"sk-SK"},{name:"Alva",voiceURI:"com.apple.ttsbundle.Alva-compact",lang:"sv-SE"},{name:"Kanya",voiceURI:"com.apple.ttsbundle.Kanya-compact",lang:"th-TH"},{name:"Yelda",voiceURI:"com.apple.ttsbundle.Yelda-compact",lang:"tr-TR"},{name:"Li-mu",voiceURI:"com.apple.ttsbundle.siri_male_zh-CN_compact",lang:"zh-CN"},{name:"Ting-Ting",voiceURI:"com.apple.ttsbundle.Ting-Ting-compact",lang:"zh-CN"},{name:"Yu-shu",voiceURI:"com.apple.ttsbundle.siri_female_zh-CN_compact",lang:"zh-CN"},{name:"Sin-Ji",voiceURI:"com.apple.ttsbundle.Sin-Ji-compact",lang:"zh-HK"},{name:"Mei-Jia",voiceURI:"com.apple.ttsbundle.Mei-Jia-compact",lang:"zh-TW"}];a.cache_ios11_voices=[{name:"Maged",voiceURI:"com.apple.ttsbundle.Maged-compact",lang:"ar-SA"},{name:"Zuzana",voiceURI:"com.apple.ttsbundle.Zuzana-compact",lang:"cs-CZ"},{name:"Sara",voiceURI:"com.apple.ttsbundle.Sara-compact",lang:"da-DK"},{name:"Anna",voiceURI:"com.apple.ttsbundle.Anna-compact",lang:"de-DE"},{name:"Helena",voiceURI:"com.apple.ttsbundle.siri_female_de-DE_compact",lang:"de-DE"},{name:"Martin",voiceURI:"com.apple.ttsbundle.siri_male_de-DE_compact",lang:"de-DE"},{name:"Melina",voiceURI:"com.apple.ttsbundle.Melina-compact",lang:"el-GR"},{name:"Catherine",voiceURI:"com.apple.ttsbundle.siri_female_en-AU_compact",lang:"en-AU"},{name:"Gordon",voiceURI:"com.apple.ttsbundle.siri_male_en-AU_compact",lang:"en-AU"},{name:"Karen",voiceURI:"com.apple.ttsbundle.Karen-compact",lang:"en-AU"},{name:"Arthur",voiceURI:"com.apple.ttsbundle.siri_male_en-GB_compact",lang:"en-GB"},{name:"Daniel",voiceURI:"com.apple.ttsbundle.Daniel-compact",lang:"en-GB"},{name:"Martha",voiceURI:"com.apple.ttsbundle.siri_female_en-GB_compact",lang:"en-GB"},{name:"Moira",voiceURI:"com.apple.ttsbundle.Moira-compact",lang:"en-IE"},{name:"Aaron",voiceURI:"com.apple.ttsbundle.siri_male_en-US_compact",lang:"en-US"},{name:"Fred",voiceURI:"com.apple.speech.synthesis.voice.Fred",lang:"en-US"},{name:"Nicky",voiceURI:"com.apple.ttsbundle.siri_female_en-US_compact",lang:"en-US"},{name:"Samantha",voiceURI:"com.apple.ttsbundle.Samantha-compact",lang:"en-US"},{name:"Tessa",voiceURI:"com.apple.ttsbundle.Tessa-compact",lang:"en-ZA"},{name:"Monica",voiceURI:"com.apple.ttsbundle.Monica-compact",lang:"es-ES"},{name:"Paulina",voiceURI:"com.apple.ttsbundle.Paulina-compact",lang:"es-MX"},{name:"Satu",voiceURI:"com.apple.ttsbundle.Satu-compact",lang:"fi-FI"},{name:"Amelie",voiceURI:"com.apple.ttsbundle.Amelie-compact",lang:"fr-CA"},{name:"Daniel",voiceURI:"com.apple.ttsbundle.siri_male_fr-FR_compact",lang:"fr-FR"},{name:"Marie",voiceURI:"com.apple.ttsbundle.siri_female_fr-FR_compact",lang:"fr-FR"},{name:"Thomas",voiceURI:"com.apple.ttsbundle.Thomas-compact",lang:"fr-FR"},{name:"Carmit",voiceURI:"com.apple.ttsbundle.Carmit-compact",lang:"he-IL"},{name:"Lekha",voiceURI:"com.apple.ttsbundle.Lekha-compact",lang:"hi-IN"},{name:"Mariska",voiceURI:"com.apple.ttsbundle.Mariska-compact",lang:"hu-HU"},{name:"Damayanti",voiceURI:"com.apple.ttsbundle.Damayanti-compact",lang:"id-ID"},{name:"Alice",voiceURI:"com.apple.ttsbundle.Alice-compact",lang:"it-IT"},{name:"Hattori",voiceURI:"com.apple.ttsbundle.siri_male_ja-JP_compact",lang:"ja-JP"},{name:"Kyoko",voiceURI:"com.apple.ttsbundle.Kyoko-compact",lang:"ja-JP"},{name:"O-ren",voiceURI:"com.apple.ttsbundle.siri_female_ja-JP_compact",lang:"ja-JP"},{name:"Yuna",voiceURI:"com.apple.ttsbundle.Yuna-compact",lang:"ko-KR"},{name:"Ellen",voiceURI:"com.apple.ttsbundle.Ellen-compact",lang:"nl-BE"},{name:"Xander",voiceURI:"com.apple.ttsbundle.Xander-compact",lang:"nl-NL"},{name:"Nora",voiceURI:"com.apple.ttsbundle.Nora-compact",lang:"no-NO"},{name:"Zosia",voiceURI:"com.apple.ttsbundle.Zosia-compact",lang:"pl-PL"},{name:"Luciana",voiceURI:"com.apple.ttsbundle.Luciana-compact",lang:"pt-BR"},{name:"Joana",voiceURI:"com.apple.ttsbundle.Joana-compact",lang:"pt-PT"},{name:"Ioana",voiceURI:"com.apple.ttsbundle.Ioana-compact",lang:"ro-RO"},{name:"Milena",voiceURI:"com.apple.ttsbundle.Milena-compact",lang:"ru-RU"},{name:"Laura",voiceURI:"com.apple.ttsbundle.Laura-compact",lang:"sk-SK"},{name:"Alva",voiceURI:"com.apple.ttsbundle.Alva-compact",lang:"sv-SE"},{name:"Kanya",voiceURI:"com.apple.ttsbundle.Kanya-compact",lang:"th-TH"},{name:"Yelda",voiceURI:"com.apple.ttsbundle.Yelda-compact",lang:"tr-TR"},{name:"Li-mu",voiceURI:"com.apple.ttsbundle.siri_male_zh-CN_compact",lang:"zh-CN"},{name:"Ting-Ting",voiceURI:"com.apple.ttsbundle.Ting-Ting-compact",lang:"zh-CN"},{name:"Yu-shu",voiceURI:"com.apple.ttsbundle.siri_female_zh-CN_compact",lang:"zh-CN"},{name:"Sin-Ji",voiceURI:"com.apple.ttsbundle.Sin-Ji-compact",lang:"zh-HK"},{name:"Mei-Jia",voiceURI:"com.apple.ttsbundle.Mei-Jia-compact",lang:"zh-TW"}];a.systemvoices=null;a.CHARACTER_LIMIT=100;a.VOICESUPPORT_ATTEMPTLIMIT=5;a.voicesupport_attempts=0;a.fallbackMode=!1;a.WORDS_PER_MINUTE=130;a.fallback_audio=null;a.fallback_playbackrate=1;a.def_fallback_playbackrate=a.fallback_playbackrate;a.fallback_audiopool=[];a.msgparameters=null;a.timeoutId=null;a.OnLoad_callbacks=[];a.useTimer=!1;a.utterances=[];a.userInteractionEvents=["mousedown","mouseup","mousewheel","keydown"];a.fallbackBufferLength=5;a.tstCompiled=function(a){return eval("typeof xy === 'undefined'")};a.fallbackServicePath="https://code.responsivevoice.org/"+(a.tstCompiled()?"":"develop/")+"getvoice.php";a.default_rv=a.responsivevoices[0];a.debug=!1;a.rvsMapped=!1;a.forcedFallbackMode=!1;a.speechAllowedByUser=!0;a.log=function(b){a.debug&&console.log(b)};a.init=function(){a.is_android&&(a.useTimer=!0);a.is_opera||"undefined"===typeof speechSynthesis?(console.log("RV: Voice synthesis not supported"),a.enableFallbackMode()):setTimeout(function(){var b=setInterval(function(){var c=window.speechSynthesis.getVoices();0!=c.length||null!=a.systemvoices&&0!=a.systemvoices.length?(console.log("RV: Voice support ready"),a.systemVoicesReady(c),clearInterval(b)):(console.log("Voice support NOT ready"),a.voicesupport_attempts++,a.voicesupport_attempts>a.VOICESUPPORT_ATTEMPTLIMIT&&(clearInterval(b),null!=window.speechSynthesis?a.iOS?(a.iOS11?a.systemVoicesReady(a.cache_ios11_voices):a.iOS10?a.systemVoicesReady(a.cache_ios10_voices):a.iOS9?a.systemVoicesReady(a.cache_ios9_voices):a.systemVoicesReady(a.cache_ios_voices),console.log("RV: Voice support ready (cached)")):(console.log("RV: speechSynthesis present but no system voices found"),a.enableFallbackMode()):a.enableFallbackMode()))},100)},100);(a.iOS||a.is_android||a.is_safari)&&a.enableWindowClickHook();a.Dispatch("OnLoad")};a.systemVoicesReady=function(b){a.systemvoices=b;a.mapRVs();null!=a.OnVoiceReady&&a.OnVoiceReady.call();a.Dispatch("OnReady");window.hasOwnProperty("dispatchEvent")&&window.dispatchEvent(new Event("ResponsiveVoice_OnReady"))};a.enableFallbackMode=function(){a.fallbackMode=!0;a.forcedFallbackMode=!0;console.log("RV: Enabling fallback mode");a.mapRVs();null!=a.OnVoiceReady&&a.OnVoiceReady.call();a.Dispatch("OnReady");window.hasOwnProperty("dispatchEvent")&&window.dispatchEvent(new Event("ResponsiveVoice_OnReady"));a.Dispatch("OnServiceSwitched")};a.getVoices=function(){for(var b=[],c=0;c<a.responsivevoices.length;c++){b.push({name:a.responsivevoices[c].name})}return b};a.speak=function(b,c,d){if(a.rvsMapped){var h=null;if(a.isPlaying()){a.log("Cancelling previous speech"),a.cancel(),setTimeout(function(){a.speak(b,c,d)},50)}else{b=b.replace(/["`]/gm,"'");a.msgparameters=d||{};a.msgtext=b;a.msgvoicename=c;a.onstartFired=!1;var k=[];if(b.length>a.CHARACTER_LIMIT){for(var f=b;f.length>a.CHARACTER_LIMIT;){var g=f.search(/([:!\u00a1?\u00bf;\(\)\[\]\u2014\u00ab\u00bb\n]+|\.[^0-9]+)/),e="";if(-1==g||g>=a.CHARACTER_LIMIT){g=f.search(/,[^0-9]+/)}if(-1==g||g>=a.CHARACTER_LIMIT){var l=f.split(" ");for(g=0;g<l.length;g++){if(e.length+l[g].length+1>a.CHARACTER_LIMIT){l[g].length>=a.CHARACTER_LIMIT&&(e+=l[g].substr(0,a.CHARACTER_LIMIT-e.length-1));break}e+=(0!=g?" ":"")+l[g]}}else{e=f.substr(0,g+1)}f=f.substr(e.length,f.length-e.length);k.push(e)}0<f.length&&k.push(f)}else{k.push(b)}console.log(k);a.multipartText=k;null==c?(g=a.default_rv,a.setDefaultVoice(g.name)):g=a.getResponsiveVoice(c);!0===g.deprecated&&console.warn("ResponsiveVoice: Voice "+g.name+" is deprecated and will be removed in future releases");f={};if(null!=g.mappedProfile){f=g.mappedProfile}else{if(f.systemvoice=a.getMatchedVoice(g),f.collectionvoice={},null==f.systemvoice){console.log("RV: ERROR: No voice found for: "+c);return}}if(a.checkSpeechAllowed()){a.fallbackMode&&0<a.fallback_audiopool.length&&a.clearFallbackPool();a.msgprofile=f;a.log("Voice picked: "+a.msgprofile.systemvoice.name);a.utterances=[];a.fallbackChunks=[];for(g=0;g<k.length;g++){if(!a.fallbackMode&&a.getServiceEnabled(a.services.NATIVE_TTS)){a.log("Using SpeechSynthesis"),h=a.services.NATIVE_TTS,e=new SpeechSynthesisUtterance,e.voiceURI=f.systemvoice.voiceURI,e.volume=a.selectBest([f.collectionvoice.volume,f.systemvoice.volume,1]),e.rate=a.selectBest([a.iOS9plus?1:null,f.collectionvoice.rate,f.systemvoice.rate,1]),e.pitch=a.selectBest([f.collectionvoice.pitch,f.systemvoice.pitch,1]),e.text=k[g],e.lang=a.selectBest([f.collectionvoice.lang,f.systemvoice.lang]),e.rvIndex=g,e.rvTotal=k.length,0==g&&(e.onstart=a.speech_onstart),a.msgparameters.onendcalled=!1,null!=d?(e.voice="undefined"!==typeof d.voice?d.voice:f.systemvoice,g<k.length-1&&1<k.length?(e.onend=a.onPartEnd,e.hasOwnProperty("addEventListener")&&e.addEventListener("end",a.onPartEnd)):(e.onend=a.speech_onend,e.hasOwnProperty("addEventListener")&&e.addEventListener("end",a.speech_onend)),e.onerror=d.onerror||function(b){a.log("RV: Unknow Error");a.log(b)},d.rate=a.validateParameters(d,"rate"),d.pitch=a.validateParameters(d,"pitch"),d.volume=a.validateParameters(d,"volume"),e.onpause=d.onpause,e.onresume=d.onresume,e.onmark=d.onmark,e.onboundary=d.onboundary||a.onboundary,e.pitch=null!=d.pitch?d.pitch:e.pitch,e.rate=a.iOS?(null!=d.rate?d.rate*d.rate:1)*e.rate:(null!=d.rate?d.rate:1)*e.rate,e.volume=null!=d.volume?d.volume:e.volume):(a.log("No Params received for current Utterance"),e.voice=f.systemvoice,e.onend=a.speech_onend,e.onboundary=a.onboundary,e.onerror=function(b){a.log("RV: Unknow Error");a.log(b)}),a.utterances.push(e),0==g&&(a.currentMsg=e),console.log(e),a.tts_speak(e)}else{if(a.fallbackMode&&a.getServiceEnabled(a.services.FALLBACK_AUDIO)){h=a.services.FALLBACK_AUDIO;a.fallback_playbackrate=a.def_fallback_playbackrate;e=a.selectBest([f.collectionvoice.pitch,f.systemvoice.pitch,1]);l=a.selectBest([a.iOS9plus?1:null,f.collectionvoice.rate,f.systemvoice.rate,1]);var m=a.selectBest([f.collectionvoice.volume,f.systemvoice.volume,1]);if(null!=d){e*=null!=d.pitch?d.pitch:1;l*=null!=d.rate?d.rate:1;m*=null!=d.volume?d.volume:1;var n=d.extraParams||null}e/=2;l/=2;m*=2;e=Math.min(Math.max(e,0),1);l=Math.min(Math.max(l,0),1);m=Math.min(Math.max(m,0),1);e=a.fallbackServicePath+"?t="+encodeURIComponent(k[g])+"&tl="+(f.collectionvoice.lang||f.systemvoice.lang||"en-US")+"&sv="+(f.collectionvoice.service||f.systemvoice.service||"")+"&vn="+(f.collectionvoice.voicename||f.systemvoice.voicename||"")+"&pitch="+e.toString()+"&rate="+l.toString()+"&vol="+m.toString();void 0!==f.collectionvoice.gender&&(e+="&gender="+f.collectionvoice.gender);n&&(e+="&extraParams="+JSON.stringify(n));a.fallbackChunks.push({text:k[g],url:e,audio:null})}}}a.fallbackMode&&a.getServiceEnabled(a.services.FALLBACK_AUDIO)&&(a.fallbackChunkIndex=0,a.fallback_startPart());a.log("Service used: "+h)}else{a.scheduledSpeak={text:b,voicename:c,parameters:d}}}}else{setTimeout(function(){a.speak(b,c,d)},15)}};a.startTimeout=function(b,c){var d=a.msgprofile.collectionvoice.timerSpeed;null==a.msgprofile.collectionvoice.timerSpeed&&(d=1);0>=d||(a.timeoutId=setTimeout(c,a.getEstimatedTimeLength(b,d)),a.log("Timeout ID: "+a.timeoutId))};a.checkAndCancelTimeout=function(){null!=a.timeoutId&&(clearTimeout(a.timeoutId),a.timeoutId=null)};a.speech_timedout=function(){a.cancel();a.cancelled=!1;a.speech_onend()};a.speech_onend=function(){a.checkAndCancelTimeout();!0===a.cancelled?a.cancelled=!1:(a.log("on end fired"),null!=a.msgparameters&&null!=a.msgparameters.onend&&1!=a.msgparameters.onendcalled&&(a.log("Speech on end called  -"+a.msgtext),a.msgparameters.onendcalled=!0,a.msgparameters.onend()))};a.speech_onstart=function(){if(!a.onstartFired){a.onstartFired=!0;a.log("Speech start");if(a.iOS||a.is_safari||a.useTimer){a.fallbackMode||a.startTimeout(a.msgtext,a.speech_timedout)}a.msgparameters.onendcalled=!1;if(null!=a.msgparameters&&null!=a.msgparameters.onstart){a.msgparameters.onstart()}}};a.fallback_startPart=function(){0==a.fallbackChunkIndex&&a.speech_onstart();a.fallback_updateChunksBuffer();a.fallback_audio=a.fallbackChunks[a.fallbackChunkIndex].audio;null==a.fallback_audio?a.log("RV: Fallback Audio is not available"):(function(){var b=a.fallback_audio;setTimeout(function(){b.playbackRate=a.fallback_playbackrate},50);b.onloadedmetadata=function(){b.playbackRate=a.fallback_playbackrate};if(2<=b.readyState){b.play()}else{var c=function(){b.play();b.removeEventListener("canplaythrough",c)};b.addEventListener("canplaythrough",c,!1)}}(),a.fallback_errors&&(a.log("RV: Speech cancelled due to errors"),a.speech_onend()),a.fallback_audio.addEventListener("ended",a.fallback_finishPart),a.useTimer&&a.startTimeout(a.multipartText[a.fallbackChunkIndex],a.fallback_finishPart))};a.isFallbackAudioPlaying=function(){var b;for(b=0;b<a.fallback_audiopool.length;b++){var c=a.fallback_audiopool[b];if(!c.paused&&!c.ended&&c.currentTime!=c.duration){return !0}}return !1};a.fallback_finishPart=function(b){a.isFallbackAudioPlaying()?(a.checkAndCancelTimeout(),a.timeoutId=setTimeout(a.fallback_finishPart,1000*(a.fallback_audio.duration-a.fallback_audio.currentTime))):(a.checkAndCancelTimeout(),a.fallbackChunkIndex<a.fallbackChunks.length-1?(a.fallbackChunkIndex++,a.fallback_startPart()):a.speech_onend())};a.cancel=function(){a.checkAndCancelTimeout();a.fallbackMode?(null!=a.fallback_audio&&a.fallback_audio.pause(),a.clearFallbackPool()):(a.cancelled=!0,speechSynthesis.cancel())};a.voiceSupport=function(){return"speechSynthesis" in window};a.OnFinishedPlaying=function(b){if(null!=a.msgparameters&&null!=a.msgparameters.onend){a.msgparameters.onend()}};a.setDefaultVoice=function(b){if(a.rvsMapped){var c=a.getResponsiveVoice(b);null!=c&&(a.default_rv=c)}else{setTimeout(function(){a.setDefaultVoice(b)},15)}};a.mapRVs=function(){if("object"==typeof navigator){var b,c="anguage";var d=navigator;d=(b=d["l"+c+"s"],b&&b.length?b:(c=d["l"+c]||d["browserL"+c]||d["userL"+c])?[c]:c)}else{d=void 0}b=d[0];for(c=0;c<a.responsivevoices.length;c++){d=a.responsivevoices[c];for(var h=0;h<d.voiceIDs.length;h++){var k=a.voicecollection[d.voiceIDs[h]];if(1!=k.fallbackvoice){var f=a.getSystemVoice(k.name);a.forcedFallbackMode&&(f=null);a.iOS12_0&&d.lang.toLowerCase()!=b.toLowerCase()&&d.lang.toLowerCase().split("-")[0]!=b.toLowerCase()&&(f=null);if(null!=f){d.mappedProfile={systemvoice:f,collectionvoice:k};break}}else{d.mappedProfile={systemvoice:{},collectionvoice:k};break}}}a.rvsMapped=!0};a.getMatchedVoice=function(b){for(var c=0;c<b.voiceIDs.length;c++){var d=a.getSystemVoice(a.voicecollection[b.voiceIDs[c]].name);if(null!=d){return d}}return null};a.getSystemVoice=function(b){var c=String.fromCharCode(160);var d=b.replace(new RegExp("\\s+|"+c,"g"),"");if("undefined"===typeof a.systemvoices||null===a.systemvoices){return null}for(var h=0;h<a.systemvoices.length;h++){if(0===a.systemvoices[h].name.localeCompare(b)||0===a.systemvoices[h].name.replace(new RegExp("\\s+|"+c,"g"),"").replace(/ *\([^)]*\) */g,"").localeCompare(d)){return a.systemvoices[h]}}return null};a.getResponsiveVoice=function(b){for(var c=0;c<a.responsivevoices.length;c++){if(a.responsivevoices[c].name==b){return b=a.fallbackMode,a.fallbackMode=!0===a.responsivevoices[c].mappedProfile.collectionvoice.fallbackvoice||!0===a.forcedFallbackMode?!0:!1,b!=a.fallbackMode&&(a.mapRVs(),a.Dispatch("OnServiceSwitched")),a.responsivevoices[c]}}return null};a.Dispatch=function(b){if(a.hasOwnProperty(b+"_callbacks")&&null!=a[b+"_callbacks"]&&0<a[b+"_callbacks"].length){for(var c=a[b+"_callbacks"],d=0;d<c.length;d++){c[d]()}return !0}var h=b+"_callbacks_timeout",k=b+"_callbacks_timeoutCount";a.hasOwnProperty(h)||(a[k]=10,a[h]=setInterval(function(){--a[k];(a.Dispatch(b)||0>a[k])&&clearTimeout(a[h])},50));return !1};a.AddEventListener=function(b,c){a.hasOwnProperty(b+"_callbacks")||(a[b+"_callbacks"]=[]);a[b+"_callbacks"].push(c)};a.addEventListener=a.AddEventListener;a.RemoveEventListener=function(b,c){a[b+"_callbacks"]&&-1!=a[b+"_callbacks"].indexOf(c)&&a[b+"_callbacks"].splice(a[b+"_callbacks"].indexOf(c),1)};a.clickEvent=function(){a.log("Click event");a.click_event_detected=!0;a.initializePermissions();a.userInteractionEvents.forEach(function(b){window.removeEventListener(b,a.clickEvent,!1)});a.Dispatch("OnClickEvent")};a.initializePermissions=function(){if(a.iOS&&!a.iOS_initialized){a.log("Initializing iOS click event");var b=new SpeechSynthesisUtterance(" ");speechSynthesis.speak(b);a.iOS_initialized=!0}a.is_android&&!a.android_initialized&&(a.log("Initializing Android click event"),b=new SpeechSynthesisUtterance(" "),speechSynthesis.speak(b));a.initFallbackPool()};a.isPlaying=function(){return a.fallbackMode?null!=a.fallback_audio&&!a.fallback_audio.ended&&!a.fallback_audio.paused:speechSynthesis.speaking};a.clearFallbackPool=function(){for(var b=0;b<a.fallback_audiopool.length;b++){null!=a.fallback_audiopool[b]&&(a.fallback_audiopool[b].pause(),a.fallback_audiopool[b].src="")}a.fallback_audiopool_index=0;a.fallbackChunks=[]};a.initFallbackPool=function(){if(!a.fallback_audiopool||0==a.fallback_audiopool.length){for(var b=0;10>b;b++){var c=b,d=document.createElement("AUDIO");d.preload="auto";a.is_android&&(d.src="",d.load(),9==c&&(a.log("Android HTML audio initialized"),a.android_initialized=!0));a.iOS&&(d.src="",d.load(),9==c&&(a.log("iOS HTML audio initialized"),a.iOS_initialized=!0));a.fallback_audiopool.push(d)}a.fallback_audiopool_index=0}};a.allowSpeechClicked=function(b){a.allowSpeechDiv.parentNode.removeChild(a.allowSpeechDiv);a.allowSpeechDiv=null;if(a.speechAllowedByUser=b){a.clickEvent(),a.scheduledSpeak&&(a.speak(a.scheduledSpeak.text,a.scheduledSpeak.voicename,a.scheduledSpeak.parameters),a.scheduledSpeak=null)}a.Dispatch("OnAllowSpeechClicked")};a.checkSpeechAllowed=function(b){if(0==a.speechAllowedByUser){return !1}if((a.is_android||a.iOS||a.is_safari&&(a.fallbackMode||a.forcedFallbackMode))&&!a.click_event_detected){if(a.allowSpeechDiv){return}a.allowSpeechDiv_appearances=null==a.allowSpeechDiv_appearances?1:++a.allowSpeechDiv_appearances;if(2<a.allowSpeechDiv_appearances){return console.log("ResponsiveVoice: Speech not allowed by user"),!1}var c=document.createElement("style");c.innerHTML='.rvNotification{position:fixed;background-color:#fff;text-align:center;font-family:-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-weight:400;line-height:1.5;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);z-index:10000;width:100vw;left:0;bottom:0;font-size:1rem;padding-bottom:.5em;padding-right:.5em}.rvButtonRow{padding-right:2em;padding-bottom:1em;text-align:right;font-size:medium}.rvButton{cursor:pointer;display:inline-block;margin-left:1em;padding:.8em 2em;border-radius:3px;font-size:small}.rvButtonAllow{border:none;background-color:#2b8cff;color:#fff}.rvButtonDeny{border:1px solid #2b8cff;color:#2b8cff;background-color:#fff}.rvTextRow{padding-top:1em;padding-bottom:2em}@media (min-width:576px){.rvNotification{width:60vw;left:20vw}}@media (min-width:768px){.rvNotification{width:50vw;left:25vw}}@media (min-width:992px){.rvNotification{width:40vw;left:30vw}}@media (min-width:1200px){.rvNotification{width:30vw;left:35vw}}';document.body.appendChild(c);a.allowSpeechDiv=document.createElement("div");a.allowSpeechDiv.classList.add("rvNotification");void 0==b&&(b={});a.allowSpeechDiv.innerHTML='<div class="rvTextRow"><strong>'+(void 0!=b.urlOverride?b.urlOverride:window.location.hostname)+"</strong> "+(void 0!=b.textOverride?b.textOverride:"wants to play speech")+'</div><div class="rvButtonRow"><div onclick="responsiveVoice.allowSpeechClicked(false);" class="rvButton rvButtonDeny">DENY</div><div onclick="responsiveVoice.allowSpeechClicked(true);" class="rvButton rvButtonAllow">ALLOW</div></div>';document.body.appendChild(a.allowSpeechDiv);return !1}return !0};a.fallback_audioPool_getAudio=function(){a.initFallbackPool();a.fallback_audiopool_index>=a.fallback_audiopool.length&&(a.fallback_audiopool_index=0);return a.fallback_audiopool[a.fallback_audiopool_index++]};a.fallback_updateChunksBuffer=function(){for(var b=a.fallbackChunkIndex;b<Math.min(a.fallbackChunks.length,a.fallbackChunkIndex+a.fallbackBufferLength);b++){var c=a.fallbackChunks[b];null==c.audio&&(c.audio=a.fallback_audioPool_getAudio(),c.audio.src=c.url,c.audio.playbackRate=a.fallback_playbackrate,c.audio.preload="auto",c.audio.load())}};a.selectBest=function(a){for(var b=0;b<a.length;b++){if(null!=a[b]){return a[b]}}return null};a.pause=function(){a.fallbackMode?null!=a.fallback_audio&&a.fallback_audio.pause():speechSynthesis.pause()};a.resume=function(){a.fallbackMode?null!=a.fallback_audio&&a.fallback_audio.play():speechSynthesis.resume()};a.tts_speak=function(b){setTimeout(function(){a.cancelled=!1;speechSynthesis.speak(b)},0.01)};a.setVolume=function(b){if(a.isPlaying()){if(a.fallbackMode){for(var c=0;c<a.fallback_audiopool.length;c++){a.fallback_audiopool[c].volume=b}a.fallback_audio.volume=b}else{for(c=0;c<a.utterances.length;c++){a.utterances[c].volume=b}}}};a.onPartEnd=function(b){if(null!=a.msgparameters&&null!=a.msgparameters.onchuckend){a.msgparameters.onchuckend()}a.Dispatch("OnPartEnd");b=a.utterances.indexOf(b.utterance);a.currentMsg=a.utterances[b+1]};a.onboundary=function(b){a.log("On Boundary");a.iOS&&!a.onstartFired&&a.speech_onstart()};a.numToWords=function(b){function c(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++){c[b]=a[b]}return c}return Array.from(a)}var d=function(){return function(a,b){if(Array.isArray(a)){return a}if(Symbol.iterator in Object(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g=a[Symbol.iterator](),h;!(d=(h=g.next()).done)&&(c.push(h.value),!b||c.length!==b);d=!0){}}catch(r){e=!0,f=r}finally{try{if(!d&&g["return"]){g["return"]()}}finally{if(e){throw f}}}return c}throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),h=function(a){return 0===a.length},k=function(a){return function(b){return b.slice(0,a)}},f=function(a){return function(b){return b.slice(a)}},g=function(a){return a.slice(0).reverse()},e=function(a){return function(b){return function(c){return a(b(c))}}},l=function(a){return !a},m=function q(a){return function(b){return h(b)?[]:[k(a)(b)].concat(c(q(a)(f(a)(b))))}},n=" one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" "),p="  twenty thirty forty fifty sixty seventy eighty ninety".split(" "),t=" thousand million billion trillion quadrillion quintillion sextillion septillion octillion nonillion".split(" "),u=function(a){var b=d(a,3);a=b[0];var c=b[1];b=b[2];return[0===(Number(b)||0)?"":n[b]+" hundred ",0===(Number(a)||0)?p[c]:p[c]&&p[c]+" "||"",n[c+a]||n[a]].join("")},v=function(a,b){return""===a?a:a+" "+t[b]};return"number"===typeof b?a.numToWords(String(b)):"0"===b?"zero":e(m(3))(g)(Array.from(b)).map(u).map(v).filter(e(l)(h)).reverse().join(" ").trim()};a.getWords=function(b){b=b.replace(/$|\u00a5|\u20a1|\u20ac|\u00a3|\u20aa|\u20b9|\uffe5|\u17db|\u20a9|\u20a6|\u0e3f|\u20b4|\u20ab/gi," dummy currency ");var c=b.split(/(\s*[\s,]\s*|\?|;|:|\.|\(|\)|!)/);c=c.filter(function(a){return/[^\s]/.test(a)});for(var d=0;d<c.length;d++){null!=(b=c[d].toString().match(/\d+/))&&(c.splice(d,1),a.numToWords(+b[0]).split(/\s+/).map(function(a){c.push(a)}))}return c};a.getEstimatedTimeLength=function(b,c){var d=a.getWords(b),h=0,k=a.fallbackMode?1300:700;c=c||1;d.map(function(a,b){h+=(a.toString().match(/[^ ]/igm)||a).length});var f=d.length,g=60/a.WORDS_PER_MINUTE*c*1000*f;5>f&&(g=c*(k+50*h));a.log("Estimated time length: "+g+" ms, words: ["+d+"], charsCount: "+h);return g};a.validateParameters=function(a,c){if("undefined"===typeof a[c]){return a[c]}switch(c){case"rate":case"pitch":case"volume":var b=Number(a[c]);isNaN(b)&&console.warn("ResponsiveVoice: the parameter "+c+' has a wrong value "'+a[c]+'". Defaults were used.');a[c]=isNaN(b)?"1":a[c]}return a[c]};a.services={NATIVE_TTS:0,FALLBACK_AUDIO:1};a.servicesPriority=[0,1];a.servicesEnabled=[];a.setServiceEnabled=function(b,c){a.servicesEnabled[b]=c};a.getServiceEnabled=function(b){return a.servicesEnabled[b]||!1};a.setServiceEnabled(a.services.NATIVE_TTS,!0);a.setServiceEnabled(a.services.FALLBACK_AUDIO,!0);a.forceFallbackMode=function(b){a.forcedFallbackMode=b;a.fallbackMode=b;a.mapRVs();a.Dispatch("OnServiceSwitched")};a.enableWindowClickHook=function(){a.userInteractionEvents.forEach(function(b){window.addEventListener(b,a.clickEvent,!1)})};"interactive"===document.readyState?a.init():document.addEventListener("DOMContentLoaded",function(){a.init()})},responsiveVoice=new ResponsiveVoice};;
/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function(b){var d;if(typeof define==="function"&&define.amd){define(b);d=true}if(typeof exports==="object"){module.exports=b();d=true}if(!d){var a=window.Cookies;var c=window.Cookies=b();c.noConflict=function(){window.Cookies=a;return c}}}(function(){function c(){var g=0;var d={};for(;g<arguments.length;g++){var e=arguments[g];for(var f in e){d[f]=e[f]}}return d}function a(d){return d.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}function b(f){function e(){}function g(k,m,i){if(typeof document==="undefined"){return}i=c({path:"/"},e.defaults,i);if(typeof i.expires==="number"){i.expires=new Date(new Date()*1+i.expires*86400000)}i.expires=i.expires?i.expires.toUTCString():"";try{var h=JSON.stringify(m);if(/^[\{\[]/.test(h)){m=h}}catch(n){}m=f.write?f.write(m,k):encodeURIComponent(String(m)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent);k=encodeURIComponent(String(k)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var l="";for(var j in i){if(!i[j]){continue}l+="; "+j;if(i[j]===true){continue}l+="="+i[j].split(";")[0]}return(document.cookie=k+"="+m+l)}function d(o,q){if(typeof document==="undefined"){return}var k={};var p=document.cookie?document.cookie.split("; "):[];var m=0;for(;m<p.length;m++){var l=p[m].split("=");var j=l.slice(1).join("=");if(!q&&j.charAt(0)==='"'){j=j.slice(1,-1)}try{var h=a(l[0]);j=(f.read||f)(j,h)||a(j);if(q){try{j=JSON.parse(j)}catch(n){}}k[h]=j;if(o===h){break}}catch(n){}}return o?k[o]:k}e.set=g;e.get=function(h){return d(h,false)};e.getJSON=function(h){return d(h,true)};e.remove=function(i,h){g(i,"",c(h,{expires:-1}))};e.defaults={};e.withConverter=b;return e}return b(function(){})}));;
jQuery(document).ready(function($){
 //   $.bvi();
$.bvi({
            'bvi_target': '.bvi-open',
            "bvi_theme":"white",
            "bvi_font":"arial",
            "bvi_font_size":16,
            "bvi_letter_spacing":"normal",
            "bvi_line_height":"normal",
            "bvi_images":true,
            "bvi_reload":false,
            "bvi_fixed":false,
            "bvi_voice":true,
            "bvi_flash_iframe":true,
            "bvi_hide":false
    });
});
;
/*!
 * Button visually impaired v1.0.8
 */
(function($){
    $.bvi = function(options) {
        var default_setting = $.extend({
            'bvi_target': '.bvi-open',
            'bvi_theme': 'white',
            'bvi_font': 'arial',
            'bvi_font_size': 16,
            'bvi_letter_spacing': 'normal',
            'bvi_line_height': 'normal',
            'bvi_images': true,
            'bvi_reload': false,
            'bvi_fixed': true,
            'bvi_voice': true,
            'bvi_flash_iframe': true,
            'bvi_hide': false
        }, options);

        console.log('Button visually impaired v1.0.8');

        var versionIE = detectIE();
        var selector = default_setting.bvi_target;
        var check_bvi_theme,
            check_bvi_font,
            check_bvi_letter_spacing,
            check_bvi_line_height,
            check_bvi_font_size,
            check_bvi_images,
            check_bvi_fixed,
            check_bvi_voice,
            check_bvi_flash_iframe,
            check_bvi_hide,
            checkError;

        function detectIE() {
            var ua = window.navigator.userAgent;
            var msie = ua.indexOf('MSIE ');
            if (msie > 0) {
                return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
            }

            var trident = ua.indexOf('Trident/');
            if (trident > 0) {
                var rv = ua.indexOf('rv:');
                return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
            }

            var edge = ua.indexOf('Edge/');
            if (edge > 0) {
                return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
            }

            return false;
        }

        function bvi_voice_check() {
            if(Cookies.get('bvi-voice') === 'true'){
                $('.bvi-link').show();
            } else {
                $('.bvi-link').hide();
            }
        }

        function bvi_panel_voice(text) {
            if(Cookies.get('bvi-voice') === 'true'){
                if(responsiveVoice.voiceSupport()) {
                    responsiveVoice.setDefaultVoice("Russian Female");
                    responsiveVoice.cancel();
                    responsiveVoice.speak(text);
                }
            } else {
                responsiveVoice.cancel();
            }
        }

        function bvi_voice() {
            var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
            var content
            isOpera ? content = '<a href="#" class="bvi-play bvi-btn bvi-btn-outline-dark bvi-btn-sm>К сожалению, чтение голосом в данном браузере не поддерживается</a>' 
                :
                content = '<a href="#" class="bvi-play bvi-btn bvi-btn-outline-dark bvi-btn-sm">Воспроизвести</a>' +
                '<a href="#" class="bvi-stop bvi-btn bvi-btn-outline-dark bvi-btn-sm">Стоп</i></a>'
               

            if(responsiveVoice.voiceSupport() || versionIE >= 11 || versionIE >= 10 || versionIE >= 9) {
                responsiveVoice.setDefaultVoice("Russian Female");
                var bvi_voice = $(".bvi-voice");
                bvi_voice.each(function(index){
                    var bvi_voice_text_id = 'bvi-voice-text-id-' + index;
                    $(this).wrapInner('<div class="bvi-voice-text ' + bvi_voice_text_id + '"></div>');
                    $(this).prepend('<div class="bvi bvi-link" data-bvi-voice-class=".' + bvi_voice_text_id + '"><div class="bvi-btn-group">' + content)
                });
                $('.bvi-play').click(function() {
                    var bvi_voice_class = $(this).parent().parent().data('bvi-voice-class');
                    var bvi_voice_text = $(bvi_voice_class).text();
                    if(bvi_voice_class) {
                        if(Cookies.get('bvi-voice') === 'true'){
                            responsiveVoice.speak(bvi_voice_text);
                        }
                    } else {
                        responsiveVoice.cancel();
                    }
                    return false;
                });
                $('.bvi-stop').click(function () {
                    responsiveVoice.cancel();
                    return false;
                });
            } else {
                $('.bvi-btn-voice').hide();
                set('data-bvi-voice', 'bvi-voice', false);
                console.log('Ваш браузер не поддерживает синтез речи.')
            }
        }

        function bvi_click() {
            $("#bvi-panel-close, .bvi-panel-close").click(function() {
                if (Cookies.get("bvi-reload") === 'true') {
                    document.location.reload(true);
                }
                $('.bvi-img-off').remove();
                $("img").each(function() {
                    $(this).show();
                    $(this).removeClass('grayscale');
                });
                Cookies.remove("bvi-panel-active", {path: "/"});
                Cookies.remove("bvi-font-size", {path: "/" });
                Cookies.remove("bvi-theme", {path: "/"});
                Cookies.remove("bvi-images", {path: "/"});
                Cookies.remove("bvi-line-height", {path: "/"});
                Cookies.remove("bvi-letter-spacing", {path: "/"});
                Cookies.remove("bvi-voice", {path: "/"});
                Cookies.remove("bvi-font-family", {path: "/"});
                Cookies.remove("bvi-panel-hide", {path: "/"});
                Cookies.remove("bvi-flash-iframe", {path: "/"});
                Cookies.remove("bvi-reload", {path: "/"});
                if(responsiveVoice.voiceSupport()) {
                        responsiveVoice.cancel();
                }
                active();
                bvi_panel_voice('Обычная версия сайта');
                return false;
            });

            $('#bvi-panel-hide').click(function() {
                $('.bvi-panel').toggle(0);
                $('.bvi-eye-link').toggle(0);
                set('data-bvi-panel-hide', 'bvi-panel-hide', true);
                bvi_panel_voice('Панель скрыта');
                return false;
            });

            $('#bvi-panel-show').click(function() {
                $('.bvi-panel').toggle(0);
                $('.bvi-eye-link').toggle(0);
                set('data-bvi-panel-hide', 'bvi-panel-hide', false);
                bvi_panel_voice('Панель открыта');
                return false;
            });

            $('#bvi-setting').click(function() {
                $('.bvi-setting-menu').toggle(0);
                $(this).toggleClass("active");
                bvi_panel_voice('Дополнительные настройки');
                return false;
            });

            $('#bvi-setting-close').click(function() {
                $('.bvi-setting-menu').toggle(0);
                $('#bvi-setting').toggleClass("active");
                bvi_panel_voice('Дополнительные настройки закрыты');
                return false;
            });

            $('#bvi-font-size-less').click(function () {
                size = parseFloat(Cookies.get("bvi-font-size")) - 1;
                $(this).addClass('active').siblings().removeClass('active');
                if (size != 0) {
                    set('data-bvi-size', 'bvi-font-size', size);
                    bvi_panel_voice('Размер шрифта уменьшен');
                }
                return false;
            });

            $('#bvi-font-size-more').click(function () {
                size = parseFloat(Cookies.get("bvi-font-size")) + 1;
                $(this).addClass('active').siblings().removeClass('active');
                if (size != 40) {
                    set('data-bvi-size', 'bvi-font-size', size);
                    bvi_panel_voice('Размер шрифта увеличен');
                }
                return false;
            });

            $("#bvi-theme-white").click(function() {
                $(this).addClass('active').siblings().removeClass('active');
                set('data-bvi-theme', 'bvi-theme', 'white');
                bvi_panel_voice('Цвет сайта черным по белому');
                return false;
            });

            $("#bvi-theme-black").click(function() {
                $(this).addClass('active').siblings().removeClass('active');
                set('data-bvi-theme', 'bvi-theme', 'black');
                bvi_panel_voice('Цвет сайта белым по черному');
                return false;
            });

            $("#bvi-theme-blue").click(function() {
                $(this).addClass('active').siblings().removeClass('active');
                set('data-bvi-theme', 'bvi-theme', 'blue');
                bvi_panel_voice('Цвет сайта тёмно-синим по голубому');
                return false;
            });

            $("#bvi-theme-brown").click(function() {
                $(this).addClass('active').siblings().removeClass('active');
                set('data-bvi-theme', 'bvi-theme', 'brown');
                bvi_panel_voice('Цвет сайта коричневым по бежевому');
                return false;
            });

            $("#bvi-theme-green").click(function() {
                $(this).addClass('active').siblings().removeClass('active');
                set('data-bvi-theme', 'bvi-theme', 'green');
                bvi_panel_voice('Цвет сайта зеленым по тёмно-коричневому');
                return false;
            });

            $('#bvi-images-true').click(function () {
                $(this).addClass('active').siblings().removeClass('active');
                set('data-bvi-images', 'bvi-images', true);
                bvi_panel_voice('Изображения включены');
                return false;
            });

            $('#bvi-images-false').click(function () {
                $(this).addClass('active').siblings().removeClass('active');
                set('data-bvi-images', 'bvi-images', false);
                bvi_panel_voice('Изображения выключены');
                return false;
            });

            $('#bvi-images-grayscale').click(function () {
                $(this).addClass('active').siblings().removeClass('active');
                set('data-bvi-images', 'bvi-images', 'grayscale');
                bvi_panel_voice('Изображения чёрно-белые');
                return false;
            });

            $("#bvi-line-height-normal").click(function() {
                $(this).addClass('active').siblings().removeClass('active');
                set('data-bvi-line-height', 'bvi-line-height', 'normal');
                bvi_panel_voice('Междустрочный интервал cтандартный');
                return false;
            });

            $("#bvi-line-height-average").click(function() {
                $(this).addClass('active').siblings().removeClass('active');
                set('data-bvi-line-height', 'bvi-line-height', 'average');
                bvi_panel_voice('Междустрочный интервал средний');
                return false;
            });

            $("#bvi-line-height-big").click(function() {
                $(this).addClass('active').siblings().removeClass('active');
                set('data-bvi-line-height', 'bvi-line-height', 'big');
                bvi_panel_voice('Междустрочный интервал большой');
                return false;
            });

            $("#bvi-letter-spacing-normal").click(function() {
                $(this).addClass('active').siblings().removeClass('active');
                set('data-bvi-letter-spacing', 'bvi-letter-spacing', 'normal');
                bvi_panel_voice('Межбуквенный интервал одинарный');
                return false;
            });

            $("#bvi-letter-spacing-average").click(function() {
                $(this).addClass('active').siblings().removeClass('active');
                set('data-bvi-letter-spacing', 'bvi-letter-spacing', 'average');
                bvi_panel_voice('Межбуквенный интервал полуторный');
                return false;
            });

            $("#bvi-letter-spacing-big").click(function() {
                $(this).addClass('active').siblings().removeClass('active');
                set('data-bvi-letter-spacing', 'bvi-letter-spacing', 'big');
                bvi_panel_voice('Межбуквенный интервал двойной');
                return false;
            });

            $("#bvi-font-family-arial").click(function() {
                $(this).addClass('active').siblings().removeClass('active');
                set('data-bvi-font-family', 'bvi-font-family', 'arial');
                bvi_panel_voice('Шрифт без засечек');
                return false;
            });

            $("#bvi-font-family-times").click(function() {
                $(this).addClass('active').siblings().removeClass('active');
                set('data-bvi-font-family', 'bvi-font-family', 'times');
                bvi_panel_voice('Шрифт с засечками');
                return false;
            });

            $("#bvi-flash-iframe-true").click(function () {
                $(this).addClass('active').siblings().removeClass('active');
                set('data-bvi-flash-iframe', 'bvi-flash-iframe', true);
                bvi_panel_voice('Включить фрейм');
                return false;
            });

            $("#bvi-flash-iframe-false").click(function () {
                $(this).addClass('active').siblings().removeClass('active');
                set('data-bvi-flash-iframe', 'bvi-flash-iframe', false);
                bvi_panel_voice('Выключить фрейм');
                return false;
            });

            $("#bvi-voice-true").click(function () {
                $(this).addClass('active').siblings().removeClass('active');
                set('data-bvi-voice', 'bvi-voice', true);
                bvi_panel_voice('Синтез речи включён');
                bvi_voice_check();
                return false;
            });

            $("#bvi-voice-false").click(function () {
                $(this).addClass('active').siblings().removeClass('active');
                set('data-bvi-voice', 'bvi-voice', false);
                bvi_panel_voice('Синтез речи выключён');
                bvi_voice_check();
                return false;
            });

            $("#bvi-settings-default").click(function() {
                $('#bvi-theme-' + Cookies.get("bvi-theme")).removeClass('active');
                $('#bvi-images-' + Cookies.get("bvi-images")).removeClass('active');
                $('#bvi-line-height-' + Cookies.get("bvi-line-height")).removeClass('active');
                $('#bvi-letter-spacing-' + Cookies.get("bvi-letter-spacing")).removeClass('active');
                $('#bvi-font-family-' + Cookies.get("bvi-font-family")).removeClass('active');
                $('#bvi-flash-iframe-' + Cookies.get("bvi-flash-iframe")).removeClass('active');
                $('#bvi-voice-' + Cookies.get("bvi-voice")).removeClass('active');

                $('#bvi-theme-' + default_setting.bvi_theme).addClass('active');
                $('#bvi-images-' + default_setting.bvi_images).addClass('active');
                $('#bvi-line-height-' + default_setting.bvi_line_height).addClass('active');
                $('#bvi-letter-spacing-' + default_setting.bvi_letter_spacing).addClass('active');
                $('#bvi-font-family-' + default_setting.bvi_font).addClass('active');
                $('#bvi-flash-iframe-' + default_setting.bvi_flash_iframe).addClass('active');
                $('#bvi-voice-' + default_setting.bvi_voice).addClass('active');

                set('data-bvi-size', 'bvi-font-size', default_setting.bvi_font_size);
                set('data-bvi-theme', 'bvi-theme', default_setting.bvi_theme);
                set('data-bvi-images', 'bvi-images', default_setting.bvi_images);
                set('data-bvi-line-height', 'bvi-line-height', default_setting.bvi_line_height);
                set('data-bvi-letter-spacing', 'bvi-letter-spacing', default_setting.bvi_letter_spacing);
                set('data-bvi-font-family', 'bvi-font-family', default_setting.bvi_font);
                set('data-bvi-flash-iframe', 'bvi-flash-iframe', default_setting.bvi_flash_iframe);
                set('data-bvi-voice', 'bvi-voice', default_setting.bvi_voice);
                bvi_panel_voice('Настройки по умолчанию');
                return false;
            });
        }

        function set(data, set_cookies, set_cookies_data) {
            Cookies.set(set_cookies, set_cookies_data, {path: "/", expires: 1});
            $(".bvi-body").attr(data, Cookies.get(set_cookies));
            get_image();
        }

        function set_active_link() {
            $('#bvi-theme-' + Cookies.get("bvi-theme")).addClass('active');
            $('#bvi-images-' + Cookies.get("bvi-images")).addClass('active');
            $('#bvi-line-height-' + Cookies.get("bvi-line-height")).addClass('active');
            $('#bvi-letter-spacing-' + Cookies.get("bvi-letter-spacing")).addClass('active');
            $('#bvi-font-family-' + Cookies.get("bvi-font-family")).addClass('active');
            $('#bvi-flash-iframe-' + Cookies.get("bvi-flash-iframe")).addClass('active');
            $('#bvi-voice-' + Cookies.get("bvi-voice")).addClass('active');
        }

        function get() {
            if (typeof Cookies.get("bvi-font-size") === 'undefined'
                || typeof Cookies.get("bvi-theme") === 'undefined'
                || typeof Cookies.get("bvi-images") === 'undefined'
                || typeof Cookies.get("bvi-line-height") === 'undefined'
                || typeof Cookies.get("bvi-letter-spacing") === 'undefined'
                || typeof Cookies.get("bvi-voice") === 'undefined'
                || typeof Cookies.get("bvi-font-family") === 'undefined'
                || typeof Cookies.get("bvi-panel-hide") === 'undefined'
                || typeof Cookies.get("bvi-flash-iframe") === 'undefined'
                || typeof Cookies.get("bvi-reload") === 'undefined'
                || typeof Cookies.get("bvi-fixed") === 'undefined'
            ){
                Cookies.set("bvi-font-size", default_setting.bvi_font_size, {path: "/", expires: 1});
                Cookies.set("bvi-theme", default_setting.bvi_theme, {path: "/", expires: 1});
                Cookies.set("bvi-images", default_setting.bvi_images, {path: "/", expires: 1});
                Cookies.set("bvi-line-height", default_setting.bvi_line_height, {path: "/", expires: 1});
                Cookies.set("bvi-letter-spacing", default_setting.bvi_letter_spacing, {path: "/", expires: 1});
                Cookies.set("bvi-voice", default_setting.bvi_voice, {path: "/", expires: 1});
                Cookies.set("bvi-font-family", default_setting.bvi_font, {path: "/", expires: 1});
                Cookies.set("bvi-panel-hide", default_setting.bvi_hide, {path: "/", expires: 1});
                Cookies.set("bvi-flash-iframe", default_setting.bvi_flash_iframe, {path: "/", expires: 1});
                Cookies.set("bvi-reload", default_setting.bvi_reload, {path: "/", expires: 1});
                Cookies.set("bvi-fixed", default_setting.bvi_fixed, {path: "/", expires: 1});
            }

            $('.bvi-body').attr({
                'data-bvi-panel-hide' : Cookies.get("bvi-panel-hide"),
                'data-bvi-size' : Cookies.get("bvi-font-size"),
                'data-bvi-theme' : Cookies.get("bvi-theme"),
                'data-bvi-images' : Cookies.get("bvi-images"),
                'data-bvi-line-height' : Cookies.get("bvi-line-height"),
                'data-bvi-letter-spacing' : Cookies.get("bvi-letter-spacing"),
                'data-bvi-font-family' : Cookies.get("bvi-font-family"),
                'data-bvi-flash-iframe' : Cookies.get("bvi-flash-iframe"),
                'data-bvi-reload' : Cookies.get("bvi-reload"),
                'data-bvi-voice' : Cookies.get("bvi-voice"),
                'data-bvi-fixed' : Cookies.get("bvi-fixed")

            });

            var bvi_panel = Cookies.get("bvi-panel-hide");
            
            if(bvi_panel === 'false' || typeof bvi_panel === 'undefined') {
                $('.bvi-panel').show();
                $('.bvi-eye-link').hide();
            } else {
                $('.bvi-panel').hide();
                $('.bvi-eye-link').show("slow");
            }
        }

        function get_image() {
            var bvi_images;
            bvi_images = Cookies.get("bvi-images");

            if (bvi_images === 'true') {
                $("img").each(function() {
                    $(this).removeClass('grayscale');
                    $(this).show();
                    $('.bvi-img-off').remove();
                    if(versionIE == 11 || versionIE == 10 || versionIE == 9) {
                        var databviimgorign = $(this).attr('data-bvi-img-orign') || this.src;
                        this.src = databviimgorign;
                    }
                });
            }

            if (bvi_images === 'false') {
                $(".bvi-img-off").remove();
                $("img").each(function() {
                    $(this).removeClass('grayscale');
                    $(this).hide();
                    var alt = this.alt || 'Нет описания к изображению';
                    var imgClass = $(this).attr("class") || '';
                    var imgId = $(this).attr("id") || '';
                    $(this).after($('<div class="bvi-img-off '+imgClass+'" id="'+imgId+'" style="width: ' + $(this).width() + "px; height: " + $(this).height() + 'px">').html(alt));
                });
            }

            if (bvi_images === 'grayscale') {
                $("img").each(function() {
                    $(this).show();
                    $(this).addClass('grayscale');
                    $('.bvi-img-off').remove();
                    if(versionIE == 11 || versionIE == 10 || versionIE == 9) {
                        $(this).attr('data-bvi-img-orign', this.src);
                        var src = grayscale(this.src);
                        this.src = src;
                    }
                });
            }
        }

        function grayscale(src){
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            var imgObj = new Image();
            //imgObj.crossOrigin = 'anonymous';
            imgObj.src = src;
            canvas.width = imgObj.width;
            canvas.height = imgObj.height;
            ctx.drawImage(imgObj, 0, 0);
            var imgPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
            for(var y = 0; y < imgPixels.height; y++){
                for(var x = 0; x < imgPixels.width; x++){
                    var i = (y * 4) * imgPixels.width + x * 4;
                    var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
                    imgPixels.data[i] = avg;
                    imgPixels.data[i + 1] = avg;
                    imgPixels.data[i + 2] = avg;
                }
            }
            ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);

            return canvas.toDataURL();
        }

        function active() {
            if(versionIE == 8 || versionIE == 7 || versionIE == 6 || versionIE == 5) {
                console.log('Браузер не поддерживается.');
            } else {
                if (Cookies.get('bvi-panel-active') === 'true') {
                    $(selector).hide().after($('<a href="#" class="bvi-panel-close" title="Обычная версия сайта">Обычная версия сайта</a>'));
                    panel();
                    bvi_voice();
                    bvi_voice_check();
                    bvi_click();
                    set_active_link();
                } else {
                    bvi_voice();
                    $(selector).show();
                    $('.bvi-panel-close').remove();
                    $(".bvi").remove();
                    $('body > .bvi-body').contents().unwrap();
                    $('.bvi-voice-text').contents().unwrap();
                }
            }
        }

        function panel() {
            $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">');
            $('body').wrapInner('<div class="bvi-body"></div>');
            $('body').prepend('<div class="bvi bvi-panel">\n' +
                '    <div class="bvi-container bvi-my-auto">\n' +
                '        <div class="bvi-row">\n' +
                '            <div class="bvi-col-sm-3 bvi-col-md-6 bvi-col-lg-2 bvi-p-0">\n' +
                '                <div class="bvi-text-center">\n' +
                '                    <div class="bvi-title bvi-mb-2">Размер шрифта</div>\n' +
                '                    <div class="bvi-btn-group">\n' +
                '                        <a href="#" id="bvi-font-size-less" class="bvi-btn bvi-btn-outline-dark bg" title="Уменьшить размер шрифта"><i class="bvi-icon bvi-font"></i><i class="bvi-icon bvi-minus"></i></a>\n' +
                '                        <a href="#" id="bvi-font-size-more" class="bvi-btn bvi-btn-outline-dark" title="Увеличить размер шрифта"><i class="bvi-icon bvi-font"></i><i class="bvi-icon bvi-plus"></i></a>\n' +
                '                    </div>\n' +
                '                </div>\n' +
                '            </div>\n' +
                '            <div class="bvi-col-sm-5 bvi-col-md-6 bvi-col-lg-3 bvi-p-0">\n' +
                '                <div class="bvi-text-center">\n' +
                '                    <div class="bvi-title bvi-mb-2">Цвета сайта</div>\n' +
                '                    <div class="bvi-btn-group">\n' +
                '                        <a href="#" id="bvi-theme-white" class="bvi-btn bvi-btn-link bvi-border bvi-border-dark" title="Черным по белому" style="color: black; background-color: white !important;"><i class="bvi-icon bvi-font"></i></a>\n' +
                '                        <a href="#" id="bvi-theme-black" class="bvi-btn bvi-btn-link" title="Белым по черному" style="color: white !important; background-color: black !important;"><i class="bvi-icon bvi-font"></i></a>\n' +
                '                        <a href="#" id="bvi-theme-blue" class="bvi-btn bvi-btn-link bvi-border bvi-border-dark" title="Темно-синим по голубому" style="color: #063462 !important; background-color: #9DD1FF !important;"><i class="bvi-icon bvi-font"></i></a>\n' +
                '                        <a href="#" id="bvi-theme-brown" class="bvi-btn bvi-btn-dark bvi-border bvi-border-dark" title="Коричневым по бежевому" style="color: #4D4B43 !important; background-color: #F7F3D6 !important;"><i class="bvi-icon bvi-font"></i></a>\n' +
                '                        <a href="#" id="bvi-theme-green" class="bvi-btn bvi-btn-dark bvi-border bvi-border-dark" title="Зеленым по темно-коричневому" style="color: #A9E44D !important; background-color: #3B2716 !important;"><i class="bvi-icon bvi-font"></i></a>\n' +
                '                    </div>\n' +
                '                </div>\n' +
                '            </div>\n' +
                '            <div class="bvi-col-sm-4 bvi-col-md-6 bvi-col-lg-2 bvi-p-0">\n' +
                '                <div class="bvi-text-center">\n' +
                '                    <div class="bvi-title bvi-mb-2">Изображения</div>\n' +
                '                    <div class="bvi-btn-group">\n' +
                '                        <a href="#" id="bvi-images-true" class="bvi-btn bvi-btn-outline-dark" title="Изображения включены"><i class="bvi-icon bvi-circle"></i></a>\n' +
                '                        <a href="#" id="bvi-images-false" class="bvi-btn bvi-btn-outline-dark" title="Изображения выключены"><i class="bvi-icon bvi-circle-notch"></i></a>\n' +
                '                        <a href="#" id="bvi-images-grayscale" class="bvi-btn bvi-btn-outline-dark" title="Изображения черно-белые"><i class="bvi-icon bvi-adjust"></i></a>\n' +
                '                    </div>\n' +
                '                </div>\n' +
                '            </div>\n' +
                '            <div class="bvi-col-sm-12 bvi-col-md-6 bvi-col-lg-5 bvi-p-0">\n' +
                '                <div class="bvi-text-center">\n' +
                '                    <div class="bvi-title bvi-mb-2">Дополнительно</div>\n' +
                '                    <div class="bvi-btn-group bvi-btn-voice">\n' +
                '                        <a href="#" id="bvi-voice-true" class="bvi-btn bvi-btn-outline-dark" title=""><i class="bvi-icon bvi-volume-up"></i></a>\n' +
                '                        <a href="#" id="bvi-voice-false" class="bvi-btn bvi-btn-outline-dark"><i class="bvi-icon bvi-volume-off"></i></a>\n' +
                '                    </div>\n' +
                '                    <div class="bvi-btn-group">\n' +
                '                        <a href="#" id="bvi-setting" class="bvi-btn bvi-btn-outline-dark" title="Настройки"><i class="bvi-icon bvi-cogs bvi-mr-1"></i> Настройки</a>\n' +
                '                        <a href="#" id="bvi-panel-close" class="bvi-btn bvi-btn-outline-dark" title="Обычная версия сайта"><i class="bvi-icon bvi-low-vision"></i></a>\n' +
                '                        <a href="#" id="bvi-panel-hide" class="bvi-btn bvi-btn-outline-dark" title="Скрыть панель"><i class="bvi-icon bvi-chevron-circle-up"></i></a>\n' +
                '                    </div>\n' +
                '                </div>\n' +
                '            </div>\n' +
                '        </div>\n' +
                '        <div class="bvi-row bvi-setting-menu">\n' +
                '            <div class="bvi-col">\n' +
                '                <hr class="bvi-hr mt-1">\n' +
                '                <div class="bvi-row">\n' +
                '                    <div class="bvi-col bvi-p-0">\n' +
                '                        <div class="bvi-text-center">\n' +
                '                            <div class="bvi-title bvi-mb-2">Междустрочный интервал</div>\n' +
                '                            <div class="bvi-btn-group">\n' +
                '                                <a href="#" id="bvi-line-height-normal" class="bvi-btn bvi-btn-outline-dark" title="Междустрочный интервал стандартный">Стандартный</a>\n' +
                '                                <a href="#" id="bvi-line-height-average" class="bvi-btn bvi-btn-outline-dark" title="Междустрочный интервал средний">Средний</a>\n' +
                '                                <a href="#" id="bvi-line-height-big" class="bvi-btn bvi-btn-outline-dark" title="Междустрочный интервал большой">Большой</a>\n' +
                '                            </div>\n' +
                '                        </div>\n' +
                '                    </div>\n' +
                '                    <div class="bvi-col bvi-p-0">\n' +
                '                        <div class="bvi-text-center">\n' +
                '                            <div class="bvi-title bvi-mb-2">Межбуквенный интервал</div>\n' +
                '                            <div class="bvi-btn-group">\n' +
                '                                <a href="#" id="bvi-letter-spacing-normal" class="bvi-btn bvi-btn-outline-dark" title="Межбуквенный интервал одинарный">Одинарный</a>\n' +
                '                                <a href="#" id="bvi-letter-spacing-average" class="bvi-btn bvi-btn-outline-dark" title="Межбуквенный интервал полуторный">Полуторный</a>\n' +
                '                                <a href="#" id="bvi-letter-spacing-big" class="bvi-btn bvi-btn-outline-dark" title="Межбуквенный интервал двойной">Двойной</a>\n' +
                '                            </div>\n' +
                '                        </div>\n' +
                '                    </div>\n' +
                '                    <div class="bvi-col bvi-p-0">\n' +
                '                        <div class="bvi-text-center">\n' +
                '                            <div class="bvi-title bvi-mb-2">Шрифт</div>\n' +
                '                            <div class="bvi-btn-group">\n' +
                '                                <a href="#" id="bvi-font-family-arial" class="bvi-btn bvi-btn-outline-dark" title="Шрифт без засечек">Без засечек</a>\n' +
                '                                <a href="#" id="bvi-font-family-times" class="bvi-btn bvi-btn-outline-dark" title="Шрифт с засечками">С засечками</a>\n' +
                '                            </div>\n' +
                '                        </div>\n' +
                '                    </div>\n' +
                '                </div>\n' +
                '                <div class="bvi-row">\n' +
                '                    <div class="bvi-col bvi-p-0">\n' +
                '                        <div class="bvi-text-left bvi-mt-3">\n' +
                '                            <div class="bvi-btn-group">\n' +
                '                                <a href="#" id="bvi-flash-iframe-true" class="bvi-btn bvi-btn-outline-dark bvi-btn-sm" title="Включить Фрейм"><i class="bvi-icon bvi-bolt"></i> Включить Фрейм</a>\n' +
                '                                <a href="#" id="bvi-flash-iframe-false" class="bvi-btn bvi-btn-outline-dark bvi-btn-sm" title="Включить Фрейм"><i class="bvi-icon bvi-bolt"></i> Выключить Фрейм</a>\n' +
                '                            </div>\n' +
                '                        </div>\n' +
                '                    </div>\n' +
                '                    <div class="bvi-col bvi-p-0">\n' +
                '                        <div class="bvi-text-right bvi-mt-3">\n' +
                '                            <a href="#" id="bvi-settings-default" class="bvi-btn bvi-btn-outline-dark bvi-btn-sm" title="Вернуть стандартные настройки"><i class="bvi-icon bvi-sync-alt"></i> Настройки по умолчанию</a>\n' +
                '                            <a href="#" id="bvi-setting-close" class="bvi-btn bvi-btn-dark bvi-btn-sm" title="Закрыть панель">Закрыть <i class="bvi-icon bvi-times-circle"></i> </a>\n' +
                '                        </div>\n' +
                '                    </div>\n' +
                '                </div>\n' +
                '                <div class="bvi-row">\n' +
                '                    <div class="bvi-col bvi-p-0">\n' +
                '                        <div class="bvi-text-center bvi-copy bvi-mt-2">\n' +
                '                        </div>\n' +
                '                    </div>\n' +
                '                </div>\n' +
                '            </div>\n' +
                '        </div>\n' +
                '    </div>\n' +
                '</div>\n' +
                '<div class="bvi">\n' +
                '    <a href="#" id="bvi-panel-show" class="bvi-btn bvi-btn-danger shadow-sm bvi-eye-link" style="display: none"><i class="bvi-icon bvi-eye bvi-2x"></i></a>\n' +
                '</div>');

            var scroll = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

            if (scroll > 99) {
                if (Cookies.get("bvi-fixed") == 'true') {
                    $(".bvi-panel").addClass("bvi-fixed-top");
                }
            }
                $(window).scroll(function () {
                    if ($(this).scrollTop() >= 99) {
                        if (Cookies.get("bvi-fixed") == 'true') {
                            $(".bvi-panel").addClass('bvi-fixed-top');
                        }
                    } else {
                        $(".bvi-panel").removeClass("bvi-fixed-top");
                    }
                });

            get();
            get_image();
        }

        if (default_setting.bvi_theme == 'white' ||
            default_setting.bvi_theme == 'black' ||
            default_setting.bvi_theme == 'blue' ||
            default_setting.bvi_theme == 'brown' ||
            default_setting.bvi_theme == 'green') {
            check_bvi_theme = true;
        } else {
            check_bvi_theme = false;
            checkError = ['bvi_theme'];
        }

        if (default_setting.bvi_font == 'times' || default_setting.bvi_font == 'arial'){
            check_bvi_font = true;
        } else {
            check_bvi_font = false;
            checkError = ['bvi_font'];
        }

        if (default_setting.bvi_letter_spacing == 'normal' || default_setting.bvi_letter_spacing == 'average' || default_setting.bvi_letter_spacing == 'big'){
            check_bvi_letter_spacing = true;
        } else {
            check_bvi_letter_spacing = false;
            checkError = ['bvi_letter_spacing'];
        }

        if (default_setting.bvi_line_height == 'normal' || default_setting.bvi_line_height == 'average' || default_setting.bvi_line_height == 'big'){
            check_bvi_line_height = true;
        } else {
            check_bvi_line_height = false;
            checkError = ['bvi_line_height'];
        }

        if (default_setting.bvi_font_size == 0) {
            check_bvi_font_size = false;
            checkError = ['bvi_font_size'];
        } else if(default_setting.bvi_font_size <= 40){
            check_bvi_font_size = true;
        } else {
            check_bvi_font_size = false;
            checkError = ['bvi_font_size'];
        }

        if(default_setting.bvi_images === false || default_setting.bvi_images === true || default_setting.bvi_images === 'grayscale') {
            check_bvi_images = true;
        } else {
            check_bvi_images = false;
            checkError = ['bvi_images'];
        }

        if(default_setting.bvi_fixed === false || default_setting.bvi_fixed === true ) {
            check_bvi_fixed = true;
        } else {
            check_bvi_fixed = false;
            checkError = ['bvi_fixed'];
        }

        if(default_setting.bvi_voice === false || default_setting.bvi_voice === true ) {
            check_bvi_voice = true;
        } else {
            check_bvi_voice = false;
            checkError = ['bvi_voice'];
        }

        if(default_setting.bvi_flash_iframe === false || default_setting.bvi_flash_iframe === true ) {
            check_bvi_flash_iframe = true;
        } else {
            check_bvi_flash_iframe = false;
            checkError = ['bvi_flash_iframe'];
        }

        if(default_setting.bvi_hide === false || default_setting.bvi_hide === true ) {
            check_bvi_hide = true;
        } else {
            check_bvi_hide = false;
            checkError = ['bvi_hide'];
        }

        if(check_bvi_theme === true &&
            check_bvi_font === true &&
            check_bvi_letter_spacing === true &&
            check_bvi_line_height === true &&
            check_bvi_font_size === true &&
            check_bvi_images === true &&
            check_bvi_fixed === true &&
            check_bvi_flash_iframe === true &&
            check_bvi_voice === true &&
            check_bvi_hide === true){
            if ($(selector).length) {
                $(selector).click(function () {
                    Cookies.set('bvi-panel-active', true, {path: "/", expires: 1});
                    active();
                    bvi_panel_voice('Версия сайта для слабовидящих');
                    return false;
                });
            } else {
                console.log('Неправильный параметр: bvi_target');
            }
            active();
        } else {
            console.log('ERROR BVI v1.0.7 - Неправильный параметр: ' + checkError);
        }
    };
})(jQuery);
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

Drupal.debounce = function (func, wait, immediate) {
  var timeout = void 0;
  var result = void 0;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = this;
    var later = function later() {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
    }
    return result;
  };
};;
!function(i,n,s){"use strict";function l(l,t){function e(i){if(g.find(".b-lazy:not(.b-loaded)").length){var s=g.find(i?".slide:not(.slick-cloned) .b-lazy:not(.b-loaded)":".slick-active .b-lazy:not(.b-loaded)");s.length||(s=g.find(".slick-cloned .b-lazy:not(.b-loaded)")),s.length&&n.blazy.init.load(s)}}function a(){b&&r(),y&&e(!1)}function o(n){var s=i(n),l=s.closest(".slide")||s.closest(".unslick");s.parentsUntil(l).removeClass(function(i,n){return(n.match(/(\S+)loading/g)||[]).join(" ")});var t=s.closest(".media--background");t.length&&t.find("> img").length&&(t.css("background-image","url("+s.attr("src")+")"),t.find("> img").remove(),t.removeAttr("data-lazy"))}function d(){g.children().sort(function(){return.5-Math.random()}).each(function(){g.append(this)})}function c(i){var n=i.slideCount<=i.options.slidesToShow,s=n||!1===i.options.arrows;if(g.attr("id")===i.$slider.attr("id")){i.options.centerPadding&&"0"!==i.options.centerPadding||i.$list.css("padding",""),n&&i.$slideTrack.width()<=i.$slider.width()&&i.$slideTrack.css({left:"",transform:""});var l=g.find(".b-loaded ~ .b-loader");l.length&&l.remove(),p[s?"addClass":"removeClass"]("visually-hidden")}}function r(){g.removeClass("is-paused"),g.find(".is-playing").length&&g.find(".is-playing").removeClass("is-playing").find(".media__icon--close").click()}function u(){g.addClass("is-paused").slick("slickPause")}function f(s){return _?{}:{slide:s.slide,lazyLoad:s.lazyLoad,dotsClass:s.dotsClass,rtl:s.rtl,prevArrow:i(".slick-prev",p),nextArrow:i(".slick-next",p),appendArrows:p,customPaging:function(i,l){var t=i.$slides.eq(l).find("[data-thumb]")||null,e='<img alt="'+n.t(t.find("img").attr("alt"))+'" src="'+t.data("thumb")+'">',a=t.length&&s.dotsClass.indexOf("thumbnail")>0?'<div class="slick-dots__thumbnail">'+e+"</div>":"",o=i.defaults.customPaging(i,l);return a?o.add(a):o}}}var k,g=i("> .slick__slider",t).length?i("> .slick__slider",t):i(t),p=i("> .slick__arrow",t),h=g.data("slick")?i.extend({},s.slick,g.data("slick")):i.extend({},s.slick),m=!("array"!==i.type(h.responsive)||!h.responsive.length)&&h.responsive,v=h.appendDots,y="blazy"===h.lazyLoad&&n.blazy,b=g.find(".media--player").length,_=g.hasClass("unslick");if(_||(h.appendDots=".slick__arrow"===v?p:v||i(g)),m)for(k in m)Object.prototype.hasOwnProperty.call(m,k)&&"unslick"!==m[k].settings&&(m[k].settings=i.extend({},s.slick,f(h),m[k].settings));g.data("slick",h),h=g.data("slick"),function(){h.randomize&&!g.hasClass("slick-initiliazed")&&d(),_||g.on("init.sl",function(s,l){".slick__arrow"===v&&i(l.$dots).insertAfter(l.$prevArrow);var t=g.find(".slick-cloned.slick-active .b-lazy:not(.b-loaded)");y&&t.length&&n.blazy.init.load(t)}),y?g.on("beforeChange.sl",function(){e(!0)}):i(".media",g).closest(".slide__content").addClass("is-loading"),g.on("setPosition.sl",function(i,n){c(n)})}(),g.slick(f(h)),function(){g.parent().on("click.sl",".slick-down",function(n){n.preventDefault();var s=i(this);i("html, body").stop().animate({scrollTop:i(s.data("target")).offset().top-(s.data("offset")||0)},800,"easeOutQuad"in i.easing&&h.easing?h.easing:"swing")}),h.mouseWheel&&g.on("mousewheel.sl",function(i,n){return i.preventDefault(),g.slick(n<0?"slickNext":"slickPrev")}),y||g.on("lazyLoaded lazyLoadError",function(i,n,s){o(s)}),g.on("afterChange.sl",a),b&&(g.on("click.sl",".media__icon--close",r),g.on("click.sl",".media__icon--play",u))}(),_&&g.slick("unslick"),i(t).addClass("slick--initialized")}n.behaviors.slick={attach:function(n){i(".slick",n).once("slick").each(l)}}}(jQuery,Drupal,drupalSettings);
;
