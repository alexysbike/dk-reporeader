webpackJsonp([1],{1387:function(e,n,t){"use strict";function r(e){var n=[],t=new i.a(e);n.push(t);var r=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.getLanguageServiceWorker.apply(t,e)},c=e.languageId;n.push(monaco.languages.registerCompletionItemProvider(c,new o.a(r))),n.push(monaco.languages.registerHoverProvider(c,new o.h(r))),n.push(monaco.languages.registerDocumentSymbolProvider(c,new o.f(r))),n.push(monaco.languages.registerDocumentFormattingEditProvider(c,new o.d(r))),n.push(monaco.languages.registerDocumentRangeFormattingEditProvider(c,new o.e(r))),n.push(new o.b(c,r,e)),n.push(monaco.languages.setTokensProvider(c,Object(a.a)(!0))),n.push(monaco.languages.setLanguageConfiguration(c,u)),n.push(monaco.languages.registerColorProvider(c,new o.c(r))),n.push(monaco.languages.registerFoldingRangeProvider(c,new o.g(r)))}Object.defineProperty(n,"__esModule",{value:!0}),n.setupMode=r;var i=t(1429),o=t(1430),a=t(1432),u={wordPattern:/(-?\d*\.\d\w*)|([^\[\{\]\}\:\"\,\s]+)/g,comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"]],autoClosingPairs:[{open:"{",close:"}",notIn:["string"]},{open:"[",close:"]",notIn:["string"]},{open:'"',close:'"',notIn:["string"]}]}},1420:function(e,n,t){"use strict";function r(e,n){function t(n,t){for(var r=0,i=0;r<n||!t;){var o=e.charCodeAt(d);if(o>=48&&o<=57)i=16*i+o-48;else if(o>=65&&o<=70)i=16*i+o-65+10;else{if(!(o>=97&&o<=102))break;i=16*i+o-97+10}d++,r++}return r<n&&(i=-1),i}function r(e){d=e,h="",p=0,v=16,m=0}function u(){var n=d;if(48===e.charCodeAt(d))d++;else for(d++;d<e.length&&a(e.charCodeAt(d));)d++;if(d<e.length&&46===e.charCodeAt(d)){if(!(++d<e.length&&a(e.charCodeAt(d))))return m=3,e.substring(n,d);for(d++;d<e.length&&a(e.charCodeAt(d));)d++}var t=d;if(d<e.length&&(69===e.charCodeAt(d)||101===e.charCodeAt(d)))if(d++,(d<e.length&&43===e.charCodeAt(d)||45===e.charCodeAt(d))&&d++,d<e.length&&a(e.charCodeAt(d))){for(d++;d<e.length&&a(e.charCodeAt(d));)d++;t=d}else m=3;return e.substring(n,t)}function c(){for(var n="",r=d;;){if(d>=g){n+=e.substring(r,d),m=2;break}var i=e.charCodeAt(d);if(34===i){n+=e.substring(r,d),d++;break}if(92!==i){if(i>=0&&i<=31){if(o(i)){n+=e.substring(r,d),m=2;break}m=6}d++}else{if(n+=e.substring(r,d),++d>=g){m=2;break}switch(i=e.charCodeAt(d++)){case 34:n+='"';break;case 92:n+="\\";break;case 47:n+="/";break;case 98:n+="\b";break;case 102:n+="\f";break;case 110:n+="\n";break;case 114:n+="\r";break;case 116:n+="\t";break;case 117:var a=t(4,!0);a>=0?n+=String.fromCharCode(a):m=4;break;default:m=5}r=d}}return n}function s(){if(h="",m=0,p=d,d>=g)return p=g,v=17;var n=e.charCodeAt(d);if(i(n)){do{d++,h+=String.fromCharCode(n),n=e.charCodeAt(d)}while(i(n));return v=15}if(o(n))return d++,h+=String.fromCharCode(n),13===n&&10===e.charCodeAt(d)&&(d++,h+="\n"),v=14;switch(n){case 123:return d++,v=1;case 125:return d++,v=2;case 91:return d++,v=3;case 93:return d++,v=4;case 58:return d++,v=6;case 44:return d++,v=5;case 34:return d++,h=c(),v=10;case 47:var t=d-1;if(47===e.charCodeAt(d+1)){for(d+=2;d<g&&!o(e.charCodeAt(d));)d++;return h=e.substring(t,d),v=12}if(42===e.charCodeAt(d+1)){d+=2;for(var r=!1;d<g;){if(42===e.charCodeAt(d)&&d+1<g&&47===e.charCodeAt(d+1)){d+=2,r=!0;break}d++}return r||(d++,m=1),h=e.substring(t,d),v=13}return h+=String.fromCharCode(n),d++,v=16;case 45:if(h+=String.fromCharCode(n),++d===g||!a(e.charCodeAt(d)))return v=16;case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return h+=u(),v=11;default:for(;d<g&&f(n);)d++,n=e.charCodeAt(d);if(p!==d){switch(h=e.substring(p,d)){case"true":return v=8;case"false":return v=9;case"null":return v=7}return v=16}return h+=String.fromCharCode(n),d++,v=16}}function f(e){if(i(e)||o(e))return!1;switch(e){case 125:case 93:case 123:case 91:case 34:case 58:case 44:case 47:return!1}return!0}function l(){var e;do{e=s()}while(e>=12&&e<=15);return e}void 0===n&&(n=!1);var d=0,g=e.length,h="",p=0,v=16,m=0;return{setPosition:r,getPosition:function(){return d},scan:n?l:s,getToken:function(){return v},getTokenValue:function(){return h},getTokenOffset:function(){return p},getTokenLength:function(){return d-p},getTokenError:function(){return m}}}function i(e){return 32===e||9===e||11===e||12===e||160===e||5760===e||e>=8192&&e<=8203||8239===e||8287===e||12288===e||65279===e}function o(e){return 10===e||13===e||8232===e||8233===e}function a(e){return e>=48&&e<=57}n.a=r},1421:function(e,n,t){"use strict";function r(e,n,t){function r(){return b+i(m,l+k)}function s(){var e=w.scan();for(y=!1;15===e||14===e;)y=y||14===e,e=w.scan();return C=16===e||0!==w.getTokenError(),e}function f(n,t,r){!C&&t<p&&r>h&&e.substring(t,r)!==n&&_.push({offset:t,length:r-t,content:n})}var l,d,g,h,p;if(n){for(h=n.offset,p=h+n.length,g=h;g>0&&!u(e,g-1);)g--;for(var v=p;v<e.length&&!u(e,v);)v++;d=e.substring(g,v),l=o(d,t)}else d=e,l=0,g=0,h=0,p=e.length;var m,b=a(t,e),y=!1,k=0;m=t.insertSpaces?i(" ",t.tabSize||4):"\t";var w=Object(c.a)(d,!1),C=!1,_=[],E=s();if(17!==E){var A=w.getTokenOffset()+g;f(i(m,l),g,A)}for(;17!==E;){for(var T=w.getTokenOffset()+w.getTokenLength()+g,S=s(),x="";!y&&(12===S||13===S);){f(" ",T,w.getTokenOffset()+g),T=w.getTokenOffset()+w.getTokenLength()+g,x=12===S?r():"",S=s()}if(2===S)1!==E&&(k--,x=r());else if(4===S)3!==E&&(k--,x=r());else{switch(E){case 3:case 1:k++,x=r();break;case 5:case 12:x=r();break;case 13:x=y?r():" ";break;case 6:x=" ";break;case 10:if(6===S){x="";break}case 7:case 8:case 9:case 11:case 2:case 4:12===S||13===S?x=" ":5!==S&&17!==S&&(C=!0);break;case 16:C=!0}!y||12!==S&&13!==S||(x=r())}f(x,T,w.getTokenOffset()+g),E=S}return _}function i(e,n){for(var t="",r=0;r<n;r++)t+=e;return t}function o(e,n){for(var t=0,r=0,i=n.tabSize||4;t<e.length;){var o=e.charAt(t);if(" "===o)r++;else{if("\t"!==o)break;r+=i}t++}return Math.floor(r/i)}function a(e,n){for(var t=0;t<n.length;t++){var r=n.charAt(t);if("\r"===r)return t+1<n.length&&"\n"===n.charAt(t+1)?"\r\n":"\r";if("\n"===r)return"\n"}return e&&e.eol||"\n"}function u(e,n){return-1!=="\r\n".indexOf(e.charAt(n))}n.a=r,n.b=u;var c=t(1420)},1422:function(e,n,t){"use strict";function r(e,n){function t(e,n,t,r){a.value=e,a.offset=n,a.length=t,a.type=r,a.colonOffset=void 0,o=a}var r=[],i=new Object,o=void 0,a={value:{},offset:0,length:0,type:"object",parent:void 0},u=!1;try{l(e,{onObjectBegin:function(e,t){if(n<=e)throw i;o=void 0,u=n>e,r.push("")},onObjectProperty:function(e,o,a){if(n<o)throw i;if(t(e,o,a,"property"),r[r.length-1]=e,n<=o+a)throw i},onObjectEnd:function(e,t){if(n<=e)throw i;o=void 0,r.pop()},onArrayBegin:function(e,t){if(n<=e)throw i;o=void 0,r.push(0)},onArrayEnd:function(e,t){if(n<=e)throw i;o=void 0,r.pop()},onLiteralValue:function(e,r,o){if(n<r)throw i;if(t(e,r,o,g(e)),n<=r+o)throw i},onSeparator:function(e,t,a){if(n<=t)throw i;if(":"===e&&o&&"property"===o.type)o.colonOffset=t,u=!1,o=void 0;else if(","===e){var c=r[r.length-1];"number"===typeof c?r[r.length-1]=c+1:(u=!0,r[r.length-1]=""),o=void 0}}})}catch(e){if(e!==i)throw e}return{path:r,previousNode:o,isAtPropertyKey:u,matches:function(e){for(var n=0,t=0;n<e.length&&t<r.length;t++)if(e[n]===r[t]||"*"===e[n])n++;else if("**"!==e[n])return!1;return n===e.length}}}function i(e,n,t){function r(e){Array.isArray(o)?o.push(e):i&&(o[i]=e)}void 0===n&&(n=[]);var i=null,o=[],a=[];return l(e,{onObjectBegin:function(){var e={};r(e),a.push(o),o=e,i=null},onObjectProperty:function(e){i=e},onObjectEnd:function(){o=a.pop()},onArrayBegin:function(){var e=[];r(e),a.push(o),o=e,i=null},onArrayEnd:function(){o=a.pop()},onLiteralValue:r,onError:function(e,t,r){n.push({error:e,offset:t,length:r})}},t),o[0]}function o(e,n,t){function r(e){"property"===o.type&&(o.length=e-o.offset,o=o.parent)}function i(e){return o.children.push(e),e}void 0===n&&(n=[]);var o={type:"array",offset:-1,length:-1,children:[],parent:void 0};l(e,{onObjectBegin:function(e){o=i({type:"object",offset:e,length:-1,parent:o,children:[]})},onObjectProperty:function(e,n,t){o=i({type:"property",offset:n,length:-1,parent:o,children:[]}),o.children.push({type:"string",value:e,offset:n,length:t,parent:o})},onObjectEnd:function(e,n){o.length=e+n-o.offset,o=o.parent,r(e+n)},onArrayBegin:function(e,n){o=i({type:"array",offset:e,length:-1,parent:o,children:[]})},onArrayEnd:function(e,n){o.length=e+n-o.offset,o=o.parent,r(e+n)},onLiteralValue:function(e,n,t){i({type:g(e),offset:n,length:t,parent:o,value:e}),r(n+t)},onSeparator:function(e,n,t){"property"===o.type&&(":"===e?o.colonOffset=n:","===e&&r(n))},onError:function(e,t,r){n.push({error:e,offset:t,length:r})}},t);var a=o.children[0];return a&&delete a.parent,a}function a(e,n){if(e){for(var t=e,r=0,i=n;r<i.length;r++){var o=i[r];if("string"===typeof o){if("object"!==t.type||!Array.isArray(t.children))return;for(var a=!1,u=0,c=t.children;u<c.length;u++){var s=c[u];if(Array.isArray(s.children)&&s.children[0].value===o){t=s.children[1],a=!0;break}}if(!a)return}else{var f=o;if("array"!==t.type||f<0||!Array.isArray(t.children)||f>=t.children.length)return;t=t.children[f]}}return t}}function u(e){if(!e.parent||!e.parent.children)return[];var n=u(e.parent);if("property"===e.parent.type){var t=e.parent.children[0].value;n.push(t)}else if("array"===e.parent.type){var r=e.parent.children.indexOf(e);-1!==r&&n.push(r)}return n}function c(e){switch(e.type){case"array":return e.children.map(c);case"object":for(var n=Object.create(null),t=0,r=e.children;t<r.length;t++){var i=r[t],o=i.children[1];o&&(n[i.children[0].value]=c(o))}return n;case"null":case"string":case"number":case"boolean":return e.value;default:return}}function s(e,n,t){return void 0===t&&(t=!1),n>=e.offset&&n<e.offset+e.length||t&&n===e.offset+e.length}function f(e,n,t){if(void 0===t&&(t=!1),s(e,n,t)){var r=e.children;if(Array.isArray(r))for(var i=0;i<r.length&&r[i].offset<=n;i++){var o=f(r[i],n,t);if(o)return o}return e}}function l(e,n,t){function r(e){return e?function(){return e(g.getTokenOffset(),g.getTokenLength())}:function(){return!0}}function i(e){return e?function(n){return e(n,g.getTokenOffset(),g.getTokenLength())}:function(){return!0}}function o(){for(;;){var e=g.scan();switch(g.getTokenError()){case 4:a(14);break;case 5:a(15);break;case 3:a(13);break;case 1:E||a(11);break;case 2:a(12);break;case 6:a(16)}switch(e){case 12:case 13:E?a(10):C();break;case 16:a(1);break;case 15:case 14:break;default:return e}}}function a(e,n,t){if(void 0===n&&(n=[]),void 0===t&&(t=[]),_(e),n.length+t.length>0)for(var r=g.getToken();17!==r;){if(-1!==n.indexOf(r)){o();break}if(-1!==t.indexOf(r))break;r=o()}}function u(e){var n=g.getTokenValue();return e?k(n):v(n),o(),!0}function c(){switch(g.getToken()){case 11:var e=0;try{e=JSON.parse(g.getTokenValue()),"number"!==typeof e&&(a(2),e=0)}catch(e){a(2)}k(e);break;case 7:k(null);break;case 8:k(!0);break;case 9:k(!1);break;default:return!1}return o(),!0}function s(){return 10!==g.getToken()?(a(3,[],[2,5]),!1):(u(!1),6===g.getToken()?(w(":"),o(),d()||a(4,[],[2,5])):a(5,[],[2,5]),!0)}function f(){p(),o();for(var e=!1;2!==g.getToken()&&17!==g.getToken();){if(5===g.getToken()){if(e||a(4,[],[]),w(","),o(),2===g.getToken()&&A)break}else e&&a(6,[],[]);s()||a(4,[],[2,5]),e=!0}return m(),2!==g.getToken()?a(7,[2],[]):o(),!0}function l(){b(),o();for(var e=!1;4!==g.getToken()&&17!==g.getToken();){if(5===g.getToken()){if(e||a(4,[],[]),w(","),o(),4===g.getToken()&&A)break}else e&&a(6,[],[]);d()||a(4,[],[4,5]),e=!0}return y(),4!==g.getToken()?a(8,[4],[]):o(),!0}function d(){switch(g.getToken()){case 3:return l();case 1:return f();case 10:return u(!0);default:return c()}}var g=Object(h.a)(e,!1),p=r(n.onObjectBegin),v=i(n.onObjectProperty),m=r(n.onObjectEnd),b=r(n.onArrayBegin),y=r(n.onArrayEnd),k=i(n.onLiteralValue),w=i(n.onSeparator),C=r(n.onComment),_=i(n.onError),E=t&&t.disallowComments,A=t&&t.allowTrailingComma;return o(),17===g.getToken()||(d()?(17!==g.getToken()&&a(9,[],[]),!0):(a(4,[],[]),!1))}function d(e,n){var t,r,i=Object(h.a)(e),o=[],a=0;do{switch(r=i.getPosition(),t=i.scan()){case 12:case 13:case 17:a!==r&&o.push(e.substring(a,r)),void 0!==n&&o.push(i.getTokenValue().replace(/[^\r\n]/g,n)),a=i.getPosition()}}while(17!==t);return o.join("")}function g(e){switch(typeof e){case"boolean":return"boolean";case"number":return"number";case"string":return"string";default:return"null"}}n.c=r,n.f=i,n.g=o,n.a=a,n.d=u,n.e=c,n.b=f,n.i=l,n.h=d;var h=t(1420)},1429:function(e,n,t){"use strict";function r(e){var n,t,r=new i(function(e,r){n=e,t=r},function(){});return e.then(n,t),r}t.d(n,"a",function(){return o});var i=monaco.Promise,o=function(){function e(e){var n=this;this._defaults=e,this._worker=null,this._idleCheckInterval=setInterval(function(){return n._checkIfIdle()},3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange(function(){return n._stopWorker()})}return e.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},e.prototype.dispose=function(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()},e.prototype._checkIfIdle=function(){if(this._worker){Date.now()-this._lastUsedTime>12e4&&this._stopWorker()}},e.prototype._getClient=function(){return this._lastUsedTime=Date.now(),this._client||(this._worker=monaco.editor.createWebWorker({moduleId:"vs/language/json/jsonWorker",label:this._defaults.languageId,createData:{languageSettings:this._defaults.diagnosticsOptions,languageId:this._defaults.languageId}}),this._client=this._worker.getProxy()),this._client},e.prototype.getLanguageServiceWorker=function(){for(var e=this,n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var i;return r(this._getClient().then(function(e){i=e}).then(function(t){return e._worker.withSyncedResources(n)}).then(function(e){return i}))},e}()},1430:function(e,n,t){"use strict";function r(e){switch(e){case m.b.Error:return monaco.MarkerSeverity.Error;case m.b.Warning:return monaco.MarkerSeverity.Warning;case m.b.Information:return monaco.MarkerSeverity.Info;case m.b.Hint:return monaco.MarkerSeverity.Hint;default:return monaco.MarkerSeverity.Info}}function i(e,n){var t="number"===typeof n.code?String(n.code):n.code;return{severity:r(n.severity),startLineNumber:n.range.start.line+1,startColumn:n.range.start.character+1,endLineNumber:n.range.end.line+1,endColumn:n.range.end.character+1,message:n.message,code:t,source:n.source}}function o(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function a(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}function u(e){if(e)return new b(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function c(e){var n=monaco.languages.CompletionItemKind;switch(e){case m.a.Text:return n.Text;case m.a.Method:return n.Method;case m.a.Function:return n.Function;case m.a.Constructor:return n.Constructor;case m.a.Field:return n.Field;case m.a.Variable:return n.Variable;case m.a.Class:return n.Class;case m.a.Interface:return n.Interface;case m.a.Module:return n.Module;case m.a.Property:return n.Property;case m.a.Unit:return n.Unit;case m.a.Value:return n.Value;case m.a.Enum:return n.Enum;case m.a.Keyword:return n.Keyword;case m.a.Snippet:return n.Snippet;case m.a.Color:return n.Color;case m.a.File:return n.File;case m.a.Reference:return n.Reference}return n.Property}function s(e){if(e)return{range:u(e.range),text:e.newText}}function f(e){return e&&"object"===typeof e&&"string"===typeof e.kind}function l(e){return"string"===typeof e?{value:e}:f(e)?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"}}function d(e){if(e)return Array.isArray(e)?e.map(l):[l(e)]}function g(e){var n=monaco.languages.SymbolKind;switch(e){case m.f.File:return n.Array;case m.f.Module:return n.Module;case m.f.Namespace:return n.Namespace;case m.f.Package:return n.Package;case m.f.Class:return n.Class;case m.f.Method:return n.Method;case m.f.Property:return n.Property;case m.f.Field:return n.Field;case m.f.Constructor:return n.Constructor;case m.f.Enum:return n.Enum;case m.f.Interface:return n.Interface;case m.f.Function:return n.Function;case m.f.Variable:return n.Variable;case m.f.Constant:return n.Constant;case m.f.String:return n.String;case m.f.Number:return n.Number;case m.f.Boolean:return n.Boolean;case m.f.Array:return n.Array}return n.Function}function h(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}function p(e){switch(e){case m.c.Comment:return monaco.languages.FoldingRangeKind.Comment;case m.c.Imports:return monaco.languages.FoldingRangeKind.Imports;case m.c.Region:return monaco.languages.FoldingRangeKind.Region}}function v(e,n){return n.cancel&&e.onCancellationRequested(function(){return n.cancel()}),n}t.d(n,"b",function(){return y}),t.d(n,"a",function(){return k}),t.d(n,"h",function(){return w}),t.d(n,"f",function(){return C}),t.d(n,"d",function(){return _}),t.d(n,"e",function(){return E}),t.d(n,"c",function(){return A}),t.d(n,"g",function(){return T});var m=t(1431),b=(monaco.Uri,monaco.Range),y=function(){function e(e,n,t){var r=this;this._languageId=e,this._worker=n,this._disposables=[],this._listener=Object.create(null);var i=function(e){var n=e.getModeId();if(n===r._languageId){var t;r._listener[e.uri.toString()]=e.onDidChangeContent(function(){clearTimeout(t),t=setTimeout(function(){return r._doValidate(e.uri,n)},500)}),r._doValidate(e.uri,n)}},o=function(e){monaco.editor.setModelMarkers(e,r._languageId,[]);var n=e.uri.toString(),t=r._listener[n];t&&(t.dispose(),delete r._listener[n])};this._disposables.push(monaco.editor.onDidCreateModel(i)),this._disposables.push(monaco.editor.onWillDisposeModel(function(e){o(e),r._resetSchema(e.uri)})),this._disposables.push(monaco.editor.onDidChangeModelLanguage(function(e){o(e.model),i(e.model),r._resetSchema(e.model.uri)})),this._disposables.push(t.onDidChange(function(e){monaco.editor.getModels().forEach(function(e){e.getModeId()===r._languageId&&(o(e),i(e))})})),this._disposables.push({dispose:function(){monaco.editor.getModels().forEach(o);for(var e in r._listener)r._listener[e].dispose()}}),monaco.editor.getModels().forEach(i)}return e.prototype.dispose=function(){this._disposables.forEach(function(e){return e&&e.dispose()}),this._disposables=[]},e.prototype._resetSchema=function(e){this._worker().then(function(n){n.resetSchema(e.toString())})},e.prototype._doValidate=function(e,n){this._worker(e).then(function(t){return t.doValidation(e.toString()).then(function(t){var r=t.map(function(n){return i(e,n)}),o=monaco.editor.getModel(e);o.getModeId()===n&&monaco.editor.setModelMarkers(o,n,r)})}).then(void 0,function(e){console.error(e)})},e}(),k=function(){function e(e){this._worker=e}return Object.defineProperty(e.prototype,"triggerCharacters",{get:function(){return[" ",":"]},enumerable:!0,configurable:!0}),e.prototype.provideCompletionItems=function(e,n,t){var r=(e.getWordUntilPosition(n),e.uri);return v(t,this._worker(r).then(function(e){return e.doComplete(r.toString(),o(n))}).then(function(e){if(e){var n=e.items.map(function(e){var n={label:e.label,insertText:e.insertText,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,kind:c(e.kind)};return e.textEdit&&(n.range=u(e.textEdit.range),n.insertText=e.textEdit.newText),e.insertTextFormat===m.d.Snippet&&(n.insertText={value:n.insertText}),n});return{isIncomplete:e.isIncomplete,items:n}}}))},e}(),w=function(){function e(e){this._worker=e}return e.prototype.provideHover=function(e,n,t){var r=e.uri;return v(t,this._worker(r).then(function(e){return e.doHover(r.toString(),o(n))}).then(function(e){if(e)return{range:u(e.range),contents:d(e.contents)}}))},e}(),C=function(){function e(e){this._worker=e}return e.prototype.provideDocumentSymbols=function(e,n){var t=e.uri;return v(n,this._worker(t).then(function(e){return e.findDocumentSymbols(t.toString())}).then(function(e){if(e)return e.map(function(e){return{name:e.name,detail:"",containerName:e.containerName,kind:g(e.kind),range:u(e.location.range),selectionRange:u(e.location.range)}})}))},e}(),_=function(){function e(e){this._worker=e}return e.prototype.provideDocumentFormattingEdits=function(e,n,t){var r=e.uri;return v(t,this._worker(r).then(function(e){return e.format(r.toString(),null,h(n)).then(function(e){if(e&&0!==e.length)return e.map(s)})}))},e}(),E=function(){function e(e){this._worker=e}return e.prototype.provideDocumentRangeFormattingEdits=function(e,n,t,r){var i=e.uri;return v(r,this._worker(i).then(function(e){return e.format(i.toString(),a(n),h(t)).then(function(e){if(e&&0!==e.length)return e.map(s)})}))},e}(),A=function(){function e(e){this._worker=e}return e.prototype.provideDocumentColors=function(e,n){var t=e.uri;return v(n,this._worker(t).then(function(e){return e.findDocumentColors(t.toString())}).then(function(e){if(e)return e.map(function(e){return{color:e.color,range:u(e.range)}})}))},e.prototype.provideColorPresentations=function(e,n,t){var r=e.uri;return v(t,this._worker(r).then(function(e){return e.getColorPresentations(r.toString(),n.color,a(n.range))}).then(function(e){if(e)return e.map(function(e){var n={label:e.label};return e.textEdit&&(n.textEdit=s(e.textEdit)),e.additionalTextEdits&&(n.additionalTextEdits=e.additionalTextEdits.map(s)),n})}))},e}(),T=function(){function e(e){this._worker=e}return e.prototype.provideFoldingRanges=function(e,n,t){var r=e.uri;return v(t,this._worker(r).then(function(e){return e.provideFoldingRanges(r.toString(),n)}).then(function(e){if(e)return e.map(function(e){var n={start:e.startLine+1,end:e.endLine+1};return"undefined"!==typeof e.kind&&(n.kind=p(e.kind)),n})}))},e}()},1431:function(e,n,t){"use strict";t.d(n,"c",function(){return s}),t.d(n,"b",function(){return d}),t.d(n,"g",function(){return p}),t.d(n,"e",function(){return C}),t.d(n,"a",function(){return E}),t.d(n,"d",function(){return A}),t.d(n,"f",function(){return L});var r;!function(e){function n(e,n){return{line:e,character:n}}function t(e){var n=e;return J.objectLiteral(n)&&J.number(n.line)&&J.number(n.character)}e.create=n,e.is=t}(r||(r={}));var i;!function(e){function n(e,n,t,i){if(J.number(e)&&J.number(n)&&J.number(t)&&J.number(i))return{start:r.create(e,n),end:r.create(t,i)};if(r.is(e)&&r.is(n))return{start:e,end:n};throw new Error("Range#create called with invalid arguments["+e+", "+n+", "+t+", "+i+"]")}function t(e){var n=e;return J.objectLiteral(n)&&r.is(n.start)&&r.is(n.end)}e.create=n,e.is=t}(i||(i={}));var o;!function(e){function n(e,n){return{uri:e,range:n}}function t(e){var n=e;return J.defined(n)&&i.is(n.range)&&(J.string(n.uri)||J.undefined(n.uri))}e.create=n,e.is=t}(o||(o={}));var a;!function(e){function n(e,n,t,r){return{red:e,green:n,blue:t,alpha:r}}function t(e){var n=e;return J.number(n.red)&&J.number(n.green)&&J.number(n.blue)&&J.number(n.alpha)}e.create=n,e.is=t}(a||(a={}));var u;!function(e){function n(e,n){return{range:e,color:n}}function t(e){var n=e;return i.is(n.range)&&a.is(n.color)}e.create=n,e.is=t}(u||(u={}));var c;!function(e){function n(e,n,t){return{label:e,textEdit:n,additionalTextEdits:t}}function t(e){var n=e;return J.string(n.label)&&(J.undefined(n.textEdit)||p.is(n))&&(J.undefined(n.additionalTextEdits)||J.typedArray(n.additionalTextEdits,p.is))}e.create=n,e.is=t}(c||(c={}));var s;!function(e){e.Comment="comment",e.Imports="imports",e.Region="region"}(s||(s={}));var f;!function(e){function n(e,n,t,r,i){var o={startLine:e,endLine:n};return J.defined(t)&&(o.startCharacter=t),J.defined(r)&&(o.endCharacter=r),J.defined(i)&&(o.kind=i),o}function t(e){var n=e;return J.number(n.startLine)&&J.number(n.startLine)&&(J.undefined(n.startCharacter)||J.number(n.startCharacter))&&(J.undefined(n.endCharacter)||J.number(n.endCharacter))&&(J.undefined(n.kind)||J.string(n.kind))}e.create=n,e.is=t}(f||(f={}));var l;!function(e){function n(e,n){return{location:e,message:n}}function t(e){var n=e;return J.defined(n)&&o.is(n.location)&&J.string(n.message)}e.create=n,e.is=t}(l||(l={}));var d;!function(e){e.Error=1,e.Warning=2,e.Information=3,e.Hint=4}(d||(d={}));var g;!function(e){function n(e,n,t,r,i,o){var a={range:e,message:n};return J.defined(t)&&(a.severity=t),J.defined(r)&&(a.code=r),J.defined(i)&&(a.source=i),J.defined(o)&&(a.relatedInformation=o),a}function t(e){var n=e;return J.defined(n)&&i.is(n.range)&&J.string(n.message)&&(J.number(n.severity)||J.undefined(n.severity))&&(J.number(n.code)||J.string(n.code)||J.undefined(n.code))&&(J.string(n.source)||J.undefined(n.source))&&(J.undefined(n.relatedInformation)||J.typedArray(n.relatedInformation,l.is))}e.create=n,e.is=t}(g||(g={}));var h;!function(e){function n(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var i={title:e,command:n};return J.defined(t)&&t.length>0&&(i.arguments=t),i}function t(e){var n=e;return J.defined(n)&&J.string(n.title)&&J.string(n.command)}e.create=n,e.is=t}(h||(h={}));var p;!function(e){function n(e,n){return{range:e,newText:n}}function t(e,n){return{range:{start:e,end:e},newText:n}}function r(e){return{range:e,newText:""}}function o(e){var n=e;return J.objectLiteral(n)&&J.string(n.newText)&&i.is(n.range)}e.replace=n,e.insert=t,e.del=r,e.is=o}(p||(p={}));var v;!function(e){function n(e,n){return{textDocument:e,edits:n}}function t(e){var n=e;return J.defined(n)&&k.is(n.textDocument)&&Array.isArray(n.edits)}e.create=n,e.is=t}(v||(v={}));var m;!function(e){function n(e){var n=e;return n&&(void 0!==n.changes||void 0!==n.documentChanges)&&(void 0===n.documentChanges||J.typedArray(n.documentChanges,v.is))}e.is=n}(m||(m={}));var b,y=function(){function e(e){this.edits=e}return e.prototype.insert=function(e,n){this.edits.push(p.insert(e,n))},e.prototype.replace=function(e,n){this.edits.push(p.replace(e,n))},e.prototype.delete=function(e){this.edits.push(p.del(e))},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e}();!function(){function e(e){var n=this;this._textEditChanges=Object.create(null),e&&(this._workspaceEdit=e,e.documentChanges?e.documentChanges.forEach(function(e){var t=new y(e.edits);n._textEditChanges[e.textDocument.uri]=t}):e.changes&&Object.keys(e.changes).forEach(function(t){var r=new y(e.changes[t]);n._textEditChanges[t]=r}))}Object.defineProperty(e.prototype,"edit",{get:function(){return this._workspaceEdit},enumerable:!0,configurable:!0}),e.prototype.getTextEditChange=function(e){if(k.is(e)){if(this._workspaceEdit||(this._workspaceEdit={documentChanges:[]}),!this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for versioned document changes.");var n=e,t=this._textEditChanges[n.uri];if(!t){var r=[],i={textDocument:n,edits:r};this._workspaceEdit.documentChanges.push(i),t=new y(r),this._textEditChanges[n.uri]=t}return t}if(this._workspaceEdit||(this._workspaceEdit={changes:Object.create(null)}),!this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");var t=this._textEditChanges[e];if(!t){var r=[];this._workspaceEdit.changes[e]=r,t=new y(r),this._textEditChanges[e]=t}return t}}();!function(e){function n(e){return{uri:e}}function t(e){var n=e;return J.defined(n)&&J.string(n.uri)}e.create=n,e.is=t}(b||(b={}));var k;!function(e){function n(e,n){return{uri:e,version:n}}function t(e){var n=e;return J.defined(n)&&J.string(n.uri)&&J.number(n.version)}e.create=n,e.is=t}(k||(k={}));var w;!function(e){function n(e,n,t,r){return{uri:e,languageId:n,version:t,text:r}}function t(e){var n=e;return J.defined(n)&&J.string(n.uri)&&J.string(n.languageId)&&J.number(n.version)&&J.string(n.text)}e.create=n,e.is=t}(w||(w={}));var C;!function(e){e.PlainText="plaintext",e.Markdown="markdown"}(C||(C={})),function(e){function n(n){var t=n;return t===e.PlainText||t===e.Markdown}e.is=n}(C||(C={}));var _;!function(e){function n(e){var n=e;return J.objectLiteral(e)&&C.is(n.kind)&&J.string(n.value)}e.is=n}(_||(_={}));var E;!function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25}(E||(E={}));var A;!function(e){e.PlainText=1,e.Snippet=2}(A||(A={}));var T;!function(e){function n(e){return{label:e}}e.create=n}(T||(T={}));var S;!function(e){function n(e,n){return{items:e||[],isIncomplete:!!n}}e.create=n}(S||(S={}));var x;!function(e){function n(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}function t(e){var n=e;return J.string(n)||J.objectLiteral(n)&&J.string(n.language)&&J.string(n.value)}e.fromPlainText=n,e.is=t}(x||(x={}));var O;!function(e){function n(e){var n=e;return J.objectLiteral(n)&&(_.is(n.contents)||x.is(n.contents)||J.typedArray(n.contents,x.is))&&(void 0===e.range||i.is(e.range))}e.is=n}(O||(O={}));var j;!function(e){function n(e,n){return n?{label:e,documentation:n}:{label:e}}e.create=n}(j||(j={}));var I;!function(e){function n(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var i={label:e};return J.defined(n)&&(i.documentation=n),J.defined(t)?i.parameters=t:i.parameters=[],i}e.create=n}(I||(I={}));var P;!function(e){e.Text=1,e.Read=2,e.Write=3}(P||(P={}));var M;!function(e){function n(e,n){var t={range:e};return J.number(n)&&(t.kind=n),t}e.create=n}(M||(M={}));var L;!function(e){e.File=1,e.Module=2,e.Namespace=3,e.Package=4,e.Class=5,e.Method=6,e.Property=7,e.Field=8,e.Constructor=9,e.Enum=10,e.Interface=11,e.Function=12,e.Variable=13,e.Constant=14,e.String=15,e.Number=16,e.Boolean=17,e.Array=18,e.Object=19,e.Key=20,e.Null=21,e.EnumMember=22,e.Struct=23,e.Event=24,e.Operator=25,e.TypeParameter=26}(L||(L={}));var F;!function(e){function n(e,n,t,r,i){var o={name:e,kind:n,location:{uri:r,range:t}};return i&&(o.containerName=i),o}e.create=n}(F||(F={}));var R=function(){function e(){}return e}();!function(e){function n(e,n,t,r,i,o){var a={name:e,detail:n,kind:t,range:r,selectionRange:i};return void 0!==o&&(a.children=o),a}function t(e){var n=e;return n&&J.string(n.name)&&J.string(n.detail)&&J.number(n.kind)&&i.is(n.range)&&i.is(n.selectionRange)&&(void 0===n.deprecated||J.boolean(n.deprecated))&&(void 0===n.children||Array.isArray(n.children))}e.create=n,e.is=t}(R||(R={}));var D;!function(e){e.QuickFix="quickfix",e.Refactor="refactor",e.RefactorExtract="refactor.extract",e.RefactorInline="refactor.inline",e.RefactorRewrite="refactor.rewrite",e.Source="source",e.SourceOrganizeImports="source.organizeImports"}(D||(D={}));var N;!function(e){function n(e,n){var t={diagnostics:e};return void 0!==n&&null!==n&&(t.only=n),t}function t(e){var n=e;return J.defined(n)&&J.typedArray(n.diagnostics,g.is)&&(void 0===n.only||J.typedArray(n.only,J.string))}e.create=n,e.is=t}(N||(N={}));var W;!function(e){function n(e,n,t){var r={title:e};return h.is(n)?r.command=n:r.edit=n,void 0!==t&&(r.kind=t),r}function t(e){var n=e;return n&&J.string(n.title)&&(void 0===n.diagnostics||J.typedArray(n.diagnostics,g.is))&&(void 0===n.kind||J.string(n.kind))&&(void 0!==n.edit||void 0!==n.command)&&(void 0===n.command||h.is(n.command))&&(void 0===n.edit||m.is(n.edit))}e.create=n,e.is=t}(W||(W={}));var V;!function(e){function n(e,n){var t={range:e};return J.defined(n)&&(t.data=n),t}function t(e){var n=e;return J.defined(n)&&i.is(n.range)&&(J.undefined(n.command)||h.is(n.command))}e.create=n,e.is=t}(V||(V={}));var B;!function(e){function n(e,n){return{tabSize:e,insertSpaces:n}}function t(e){var n=e;return J.defined(n)&&J.number(n.tabSize)&&J.boolean(n.insertSpaces)}e.create=n,e.is=t}(B||(B={}));var K=function(){function e(){}return e}();!function(e){function n(e,n,t){return{range:e,target:n,data:t}}function t(e){var n=e;return J.defined(n)&&i.is(n.range)&&(J.undefined(n.target)||J.string(n.target))}e.create=n,e.is=t}(K||(K={}));var z;!function(e){function n(e,n,t,r){return new H(e,n,t,r)}function t(e){var n=e;return!!(J.defined(n)&&J.string(n.uri)&&(J.undefined(n.languageId)||J.string(n.languageId))&&J.number(n.lineCount)&&J.func(n.getText)&&J.func(n.positionAt)&&J.func(n.offsetAt))}function r(e,n){for(var t=e.getText(),r=i(n,function(e,n){var t=e.range.start.line-n.range.start.line;return 0===t?e.range.start.character-n.range.start.character:t}),o=t.length,a=r.length-1;a>=0;a--){var u=r[a],c=e.offsetAt(u.range.start),s=e.offsetAt(u.range.end);if(!(s<=o))throw new Error("Ovelapping edit");t=t.substring(0,c)+u.newText+t.substring(s,t.length),o=c}return t}function i(e,n){if(e.length<=1)return e;var t=e.length/2|0,r=e.slice(0,t),o=e.slice(t);i(r,n),i(o,n);for(var a=0,u=0,c=0;a<r.length&&u<o.length;){var s=n(r[a],o[u]);e[c++]=s<=0?r[a++]:o[u++]}for(;a<r.length;)e[c++]=r[a++];for(;u<o.length;)e[c++]=o[u++];return e}e.create=n,e.is=t,e.applyEdits=r}(z||(z={}));var U;!function(e){e.Manual=1,e.AfterDelay=2,e.FocusOut=3}(U||(U={}));var J,H=function(){function e(e,n,t,r){this._uri=e,this._languageId=n,this._version=t,this._content=r,this._lineOffsets=null}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!0,configurable:!0}),e.prototype.getText=function(e){if(e){var n=this.offsetAt(e.start),t=this.offsetAt(e.end);return this._content.substring(n,t)}return this._content},e.prototype.update=function(e,n){this._content=e.text,this._version=n,this._lineOffsets=null},e.prototype.getLineOffsets=function(){if(null===this._lineOffsets){for(var e=[],n=this._content,t=!0,r=0;r<n.length;r++){t&&(e.push(r),t=!1);var i=n.charAt(r);t="\r"===i||"\n"===i,"\r"===i&&r+1<n.length&&"\n"===n.charAt(r+1)&&r++}t&&n.length>0&&e.push(n.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var n=this.getLineOffsets(),t=0,i=n.length;if(0===i)return r.create(0,e);for(;t<i;){var o=Math.floor((t+i)/2);n[o]>e?i=o:t=o+1}var a=t-1;return r.create(a,e-n[a])},e.prototype.offsetAt=function(e){var n=this.getLineOffsets();if(e.line>=n.length)return this._content.length;if(e.line<0)return 0;var t=n[e.line],r=e.line+1<n.length?n[e.line+1]:this._content.length;return Math.max(Math.min(t+e.character,r),t)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!0,configurable:!0}),e}();!function(e){function n(e){return"undefined"!==typeof e}function t(e){return"undefined"===typeof e}function r(e){return!0===e||!1===e}function i(e){return"[object String]"===s.call(e)}function o(e){return"[object Number]"===s.call(e)}function a(e){return"[object Function]"===s.call(e)}function u(e){return null!==e&&"object"===typeof e}function c(e,n){return Array.isArray(e)&&e.every(n)}var s=Object.prototype.toString;e.defined=n,e.undefined=t,e.boolean=r,e.string=i,e.number=o,e.func=a,e.objectLiteral=u,e.typedArray=c}(J||(J={}))},1432:function(e,n,t){"use strict";function r(e){return{getInitialState:function(){return new m(null,null,!1)},tokenize:function(n,t,r,o){return i(e,n,t,r,o)}}}function i(e,n,t,r,i){void 0===r&&(r=0);var b=0,y=!1;switch(t.scanError){case 2:n='"'+n,b=1;break;case 1:n="/*"+n,b=2}var k,w,C=o.a(n),_=t.lastWasColon;for(w={tokens:[],endState:t.clone()};;){var E=r+C.getPosition(),A="";if(17===(k=C.scan()))break;if(E===r+C.getPosition())throw new Error("Scanner did not advance, next 3 characters are: "+n.substr(C.getPosition(),3));switch(y&&(E-=b),y=b>0,k){case 1:case 2:A=a,_=!1;break;case 3:case 4:A=u,_=!1;break;case 6:A=c,_=!0;break;case 5:A=s,_=!1;break;case 8:case 9:A=f,_=!1;break;case 7:A=l,_=!1;break;case 10:A=_?d:h,_=!1;break;case 11:A=g,_=!1}if(e)switch(k){case 12:A=v;break;case 13:A=p}w.endState=new m(t.getStateData(),C.getTokenError(),_),w.tokens.push({startIndex:E,scopes:A})}return w}n.a=r;var o=t(1433),a="delimiter.bracket.json",u="delimiter.array.json",c="delimiter.colon.json",s="delimiter.comma.json",f="keyword.json",l="keyword.json",d="string.value.json",g="number.json",h="string.key.json",p="comment.block.json",v="comment.line.json",m=function(){function e(e,n,t){this._state=e,this.scanError=n,this.lastWasColon=t}return e.prototype.clone=function(){return new e(this._state,this.scanError,this.lastWasColon)},e.prototype.equals=function(n){return n===this||!!(n&&n instanceof e)&&(this.scanError===n.scanError&&this.lastWasColon===n.lastWasColon)},e.prototype.getStateData=function(){return this._state},e.prototype.setStateData=function(e){this._state=e},e}()},1433:function(e,n,t){"use strict";t.d(n,"a",function(){return o});var r=(t(1421),t(1434),t(1420)),i=t(1422),o=r.a;i.c,i.f,i.g,i.a,i.b,i.d,i.e,i.i,i.h},1434:function(e,n,t){"use strict";function r(e,n,t,r,o){for(var a=[],c=Object(u.g)(e,a),s=void 0,f=void 0;n.length>0&&(f=n.pop(),void 0===(s=Object(u.a)(c,n))&&void 0!==t);)"string"===typeof f?(E={},E[f]=t,t=E):t=[t];if(s){if("object"===s.type&&"string"===typeof f&&Array.isArray(s.children)){var l=Object(u.a)(s,[f]);if(void 0!==l){if(void 0===t){if(!l.parent)throw new Error("Malformed AST");var d=s.children.indexOf(l.parent),g=void 0,h=l.parent.offset+l.parent.length;if(d>0){var p=s.children[d-1];g=p.offset+p.length}else if(g=s.offset+1,s.children.length>1){var v=s.children[1];h=v.offset}return i(e,{offset:g,length:h-g,content:""},r)}return i(e,{offset:l.offset,length:l.length,content:JSON.stringify(t)},r)}if(void 0===t)return[];var m=JSON.stringify(f)+": "+JSON.stringify(t),b=o?o(s.children.map(function(e){return e.children[0].value})):s.children.length,y=void 0;if(b>0){var p=s.children[b-1];y={offset:p.offset+p.length,length:0,content:","+m}}else y=0===s.children.length?{offset:s.offset+1,length:0,content:m}:{offset:s.offset+1,length:0,content:m+","};return i(e,y,r)}if("array"===s.type&&"number"===typeof f&&Array.isArray(s.children)){if(-1===f){var m=""+JSON.stringify(t),y=void 0;if(0===s.children.length)y={offset:s.offset+1,length:0,content:m};else{var p=s.children[s.children.length-1];y={offset:p.offset+p.length,length:0,content:","+m}}return i(e,y,r)}if(void 0===t&&s.children.length>=0){var k=f,w=s.children[k],y=void 0;if(1===s.children.length)y={offset:s.offset+1,length:s.length-2,content:""};else if(s.children.length-1===k){var p=s.children[k-1],C=p.offset+p.length,_=s.offset+s.length;y={offset:C,length:_-2-C,content:""}}else y={offset:w.offset,length:s.children[k+1].offset-w.offset,content:""};return i(e,y,r)}throw new Error("Array modification not supported yet")}throw new Error("Can not add "+("number"!==typeof f?"index":"property")+" to parent of type "+s.type)}if(void 0===t)throw new Error("Can not delete in empty document");return i(e,{offset:c?c.offset:0,length:c?c.length:0,content:JSON.stringify(t)},r);var E}function i(e,n,t){var r=o(e,n),i=n.offset,u=n.offset+n.content.length;if(0===n.length||0===n.content.length){for(;i>0&&!Object(a.b)(r,i-1);)i--;for(;u<r.length&&!Object(a.b)(r,u);)u++}for(var c=Object(a.a)(r,{offset:i,length:u-i},t),s=c.length-1;s>=0;s--){var f=c[s];r=o(r,f),i=Math.min(i,f.offset),u=Math.max(u,f.offset+f.length),u+=f.content.length-f.length}return[{offset:i,length:e.length-(r.length-u)-i,content:r.substring(i,u)}]}function o(e,n){return e.substring(0,n.offset)+n.content+e.substring(n.offset+n.length)}n.b=r,n.a=o;var a=t(1421),u=t(1422)}});
//# sourceMappingURL=1.f3d37a15.chunk.js.map