var Cufon=(function(){var m=function(){return m.replace.apply(null,arguments)};var x=m.DOM={ready:(function(){var C=false,E={loaded:1,complete:1};var B=[],D=function(){if(C){return}C=true;for(var F;F=B.shift();F()){}};if(document.addEventListener){document.addEventListener("DOMContentLoaded",D,false);window.addEventListener("pageshow",D,false)}if(!window.opera&&document.readyState){(function(){E[document.readyState]?D():setTimeout(arguments.callee,10)})()}if(document.readyState&&document.createStyleSheet){(function(){try{document.body.doScroll("left");D()}catch(F){setTimeout(arguments.callee,1)}})()}q(window,"load",D);return function(F){if(!arguments.length){D()}else{C?F():B.push(F)}}})(),root:function(){return document.documentElement||document.body}};var n=m.CSS={Size:function(C,B){this.value=parseFloat(C);this.unit=String(C).match(/[a-z%]*$/)[0]||"px";this.convert=function(D){return D/B*this.value};this.convertFrom=function(D){return D/this.value*B};this.toString=function(){return this.value+this.unit}},addClass:function(C,B){var D=C.className;C.className=D+(D&&" ")+B;return C},color:j(function(C){var B={};B.color=C.replace(/^rgba\((.*?),\s*([\d.]+)\)/,function(E,D,F){B.opacity=parseFloat(F);return"rgb("+D+")"});return B}),fontStretch:j(function(B){if(typeof B=="number"){return B}if(/%$/.test(B)){return parseFloat(B)/100}return{"ultra-condensed":0.5,"extra-condensed":0.625,condensed:0.75,"semi-condensed":0.875,"semi-expanded":1.125,expanded:1.25,"extra-expanded":1.5,"ultra-expanded":2}[B]||1}),getStyle:function(C){var B=document.defaultView;if(B&&B.getComputedStyle){return new a(B.getComputedStyle(C,null))}if(C.currentStyle){return new a(C.currentStyle)}return new a(C.style)},gradient:j(function(F){var G={id:F,type:F.match(/^-([a-z]+)-gradient\(/)[1],stops:[]},C=F.substr(F.indexOf("(")).match(/([\d.]+=)?(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)/ig);for(var E=0,B=C.length,D;E<B;++E){D=C[E].split("=",2).reverse();G.stops.push([D[1]||E/(B-1),D[0]])}return G}),quotedList:j(function(E){var D=[],C=/\s*((["'])([\s\S]*?[^\\])\2|[^,]+)\s*/g,B;while(B=C.exec(E)){D.push(B[3]||B[1])}return D}),recognizesMedia:j(function(G){var E=document.createElement("style"),D,C,B;E.type="text/css";E.media=G;try{E.appendChild(document.createTextNode("/**/"))}catch(F){}C=g("head")[0];C.insertBefore(E,C.firstChild);D=(E.sheet||E.styleSheet);B=D&&!D.disabled;C.removeChild(E);return B}),removeClass:function(D,C){var B=RegExp("(?:^|\\s+)"+C+"(?=\\s|$)","g");D.className=D.className.replace(B,"");return D},supports:function(D,C){var B=document.createElement("span").style;if(B[D]===undefined){return false}B[D]=C;return B[D]===C},textAlign:function(E,D,B,C){if(D.get("textAlign")=="right"){if(B>0){E=" "+E}}else{if(B<C-1){E+=" "}}return E},textShadow:j(function(F){if(F=="none"){return null}var E=[],G={},B,C=0;var D=/(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)|(-?[\d.]+[a-z%]*)|,/ig;while(B=D.exec(F)){if(B[0]==","){E.push(G);G={};C=0}else{if(B[1]){G.color=B[1]}else{G[["offX","offY","blur"][C++]]=B[2]}}}E.push(G);return E}),textTransform:(function(){var B={uppercase:function(C){return C.toUpperCase()},lowercase:function(C){return C.toLowerCase()},capitalize:function(C){return C.replace(/\b./g,function(D){return D.toUpperCase()})}};return function(E,D){var C=B[D.get("textTransform")];return C?C(E):E}})(),whiteSpace:(function(){var D={inline:1,"inline-block":1,"run-in":1};var C=/^\s+/,B=/\s+$/;return function(H,F,G,E){if(E){if(E.nodeName.toLowerCase()=="br"){H=H.replace(C,"")}}if(D[F.get("display")]){return H}if(!G.previousSibling){H=H.replace(C,"")}if(!G.nextSibling){H=H.replace(B,"")}return H}})()};n.ready=(function(){var B=!n.recognizesMedia("all"),E=false;var D=[],H=function(){B=true;for(var K;K=D.shift();K()){}};var I=g("link"),J=g("style");function C(K){return K.disabled||G(K.sheet,K.media||"screen")}function G(M,P){if(!n.recognizesMedia(P||"all")){return true}if(!M||M.disabled){return false}try{var Q=M.cssRules,O;if(Q){search:for(var L=0,K=Q.length;O=Q[L],L<K;++L){switch(O.type){case 2:break;case 3:if(!G(O.styleSheet,O.media.mediaText)){return false}break;default:break search}}}}catch(N){}return true}function F(){if(document.createStyleSheet){return true}var L,K;for(K=0;L=I[K];++K){if(L.rel.toLowerCase()=="stylesheet"&&!C(L)){return false}}for(K=0;L=J[K];++K){if(!C(L)){return false}}return true}x.ready(function(){if(!E){E=n.getStyle(document.body).isUsable()}if(B||(E&&F())){H()}else{setTimeout(arguments.callee,10)}});return function(K){if(B){K()}else{D.push(K)}}})();function s(D){var C=this.face=D.face,B={"\u0020":1,"\u00a0":1,"\u3000":1};this.glyphs=D.glyphs;this.w=D.w;this.baseSize=parseInt(C["units-per-em"],10);this.family=C["font-family"].toLowerCase();this.weight=C["font-weight"];this.style=C["font-style"]||"normal";this.viewBox=(function(){var F=C.bbox.split(/\s+/);var E={minX:parseInt(F[0],10),minY:parseInt(F[1],10),maxX:parseInt(F[2],10),maxY:parseInt(F[3],10)};E.width=E.maxX-E.minX;E.height=E.maxY-E.minY;E.toString=function(){return[this.minX,this.minY,this.width,this.height].join(" ")};return E})();this.ascent=-parseInt(C.ascent,10);this.descent=-parseInt(C.descent,10);this.height=-this.ascent+this.descent;this.spacing=function(L,N,E){var O=this.glyphs,M,K,G,P=[],F=0,J=-1,I=-1,H;while(H=L[++J]){M=O[H]||this.missingGlyph;if(!M){continue}if(K){F-=G=K[H]||0;P[I]-=G}F+=P[++I]=~~(M.w||this.w)+N+(B[H]?E:0);K=M.k}P.total=F;return P}}function f(){var C={},B={oblique:"italic",italic:"oblique"};this.add=function(D){(C[D.style]||(C[D.style]={}))[D.weight]=D};this.get=function(H,I){var G=C[H]||C[B[H]]||C.normal||C.italic||C.oblique;if(!G){return null}I={normal:400,bold:700}[I]||parseInt(I,10);if(G[I]){return G[I]}var E={1:1,99:0}[I%100],K=[],F,D;if(E===undefined){E=I>400}if(I==500){I=400}for(var J in G){if(!k(G,J)){continue}J=parseInt(J,10);if(!F||J<F){F=J}if(!D||J>D){D=J}K.push(J)}if(I<F){I=F}if(I>D){I=D}K.sort(function(M,L){return(E?(M>=I&&L>=I)?M<L:M>L:(M<=I&&L<=I)?M>L:M<L)?-1:1});return G[K[0]]}}function r(){function D(F,G){if(F.contains){return F.contains(G)}return F.compareDocumentPosition(G)&16}function B(G){var F=G.relatedTarget;if(!F||D(this,F)){return}C(this,G.type=="mouseover")}function E(F){C(this,F.type=="mouseenter")}function C(F,G){setTimeout(function(){var H=d.get(F).options;m.replace(F,G?h(H,H.hover):H,true)},10)}this.attach=function(F){if(F.onmouseenter===undefined){q(F,"mouseover",B);q(F,"mouseout",B)}else{q(F,"mouseenter",E);q(F,"mouseleave",E)}}}function u(){var C=[],D={};function B(H){var E=[],G;for(var F=0;G=H[F];++F){E[F]=C[D[G]]}return E}this.add=function(F,E){D[F]=C.push(E)-1};this.repeat=function(){var E=arguments.length?B(arguments):C,F;for(var G=0;F=E[G++];){m.replace(F[0],F[1],true)}}}function A(){var D={},B=0;function C(E){return E.cufid||(E.cufid=++B)}this.get=function(E){var F=C(E);return D[F]||(D[F]={})}}function a(B){var D={},C={};this.extend=function(E){for(var F in E){if(k(E,F)){D[F]=E[F]}}return this};this.get=function(E){return D[E]!=undefined?D[E]:B[E]};this.getSize=function(F,E){return C[F]||(C[F]=new n.Size(this.get(F),E))};this.isUsable=function(){return !!B}}function q(C,B,D){if(C.addEventListener){C.addEventListener(B,D,false)}else{if(C.attachEvent){C.attachEvent("on"+B,function(){return D.call(C,window.event)})}}}function v(C,B){var D=d.get(C);if(D.options){return C}if(B.hover&&B.hoverables[C.nodeName.toLowerCase()]){b.attach(C)}D.options=B;return C}function j(B){var C={};return function(D){if(!k(C,D)){C[D]=B.apply(null,arguments)}return C[D]}}function c(F,E){var B=n.quotedList(E.get("fontFamily").toLowerCase()),D;for(var C=0;D=B[C];++C){if(i[D]){return i[D].get(E.get("fontStyle"),E.get("fontWeight"))}}return null}function g(B){return document.getElementsByTagName(B)}function k(C,B){return C.hasOwnProperty(B)}function h(){var C={},B,F;for(var E=0,D=arguments.length;B=arguments[E],E<D;++E){for(F in B){if(k(B,F)){C[F]=B[F]}}}return C}function o(E,M,C,N,F,D){var K=document.createDocumentFragment(),H;if(M===""){return K}var L=N.separate;var I=M.split(p[L]),B=(L=="words");if(B&&t){if(/^\s/.test(M)){I.unshift("")}if(/\s$/.test(M)){I.push("")}}for(var J=0,G=I.length;J<G;++J){H=z[N.engine](E,B?n.textAlign(I[J],C,J,G):I[J],C,N,F,D,J<G-1);if(H){K.appendChild(H)}}return K}function l(D,M){var C=D.nodeName.toLowerCase();if(M.ignore[C]){return}var E=!M.textless[C];var B=n.getStyle(v(D,M)).extend(M);var F=c(D,B),G,K,I,H,L,J;if(!F){return}for(G=D.firstChild;G;G=I){K=G.nodeType;I=G.nextSibling;if(E&&K==3){if(H){H.appendData(G.data);D.removeChild(G)}else{H=G}if(I){continue}}if(H){D.replaceChild(o(F,n.whiteSpace(H.data,B,H,J),B,M,G,D),H);H=null}if(K==1){if(G.firstChild){if(G.nodeName.toLowerCase()=="cufon"){z[M.engine](F,null,B,M,G,D)}else{arguments.callee(G,M)}}J=G}}}var t=" ".split(/\s+/).length==0;var d=new A();var b=new r();var y=new u();var e=false;var z={},i={},w={autoDetect:false,engine:null,forceHitArea:false,hover:false,hoverables:{a:true},ignore:{applet:1,canvas:1,col:1,colgroup:1,head:1,iframe:1,map:1,optgroup:1,option:1,script:1,select:1,style:1,textarea:1,title:1,pre:1},printable:true,selector:(window.Sizzle||(window.jQuery&&function(B){return jQuery(B)})||(window.dojo&&dojo.query)||(window.Ext&&Ext.query)||(window.YAHOO&&YAHOO.util&&YAHOO.util.Selector&&YAHOO.util.Selector.query)||(window.$$&&function(B){return $$(B)})||(window.$&&function(B){return $(B)})||(document.querySelectorAll&&function(B){return document.querySelectorAll(B)})||g),separate:"words",textless:{dl:1,html:1,ol:1,table:1,tbody:1,thead:1,tfoot:1,tr:1,ul:1},textShadow:"none"};var p={words:/\s/.test("\u00a0")?/[^\S\u00a0]+/:/\s+/,characters:"",none:/^/};m.now=function(){x.ready();return m};m.refresh=function(){y.repeat.apply(y,arguments);return m};m.registerEngine=function(C,B){if(!B){return m}z[C]=B;return m.set("engine",C)};m.registerFont=function(D){if(!D){return m}var B=new s(D),C=B.family;if(!i[C]){i[C]=new f()}i[C].add(B);return m.set("fontFamily",'"'+C+'"')};m.replace=function(D,C,B){C=h(w,C);if(!C.engine){return m}if(!e){n.addClass(x.root(),"cufon-active cufon-loading");n.ready(function(){n.addClass(n.removeClass(x.root(),"cufon-loading"),"cufon-ready")});e=true}if(C.hover){C.forceHitArea=true}if(C.autoDetect){delete C.fontFamily}if(typeof C.textShadow=="string"){C.textShadow=n.textShadow(C.textShadow)}if(typeof C.color=="string"&&/^-/.test(C.color)){C.textGradient=n.gradient(C.color)}else{delete C.textGradient}if(!B){y.add(D,arguments)}if(D.nodeType||typeof D=="string"){D=[D]}n.ready(function(){for(var F=0,E=D.length;F<E;++F){var G=D[F];if(typeof G=="string"){m.replace(C.selector(G),C,true)}else{l(G,C)}}});return m};m.set=function(B,C){w[B]=C;return m};return m})();Cufon.registerEngine("canvas",(function(){var b=document.createElement("canvas");if(!b||!b.getContext||!b.getContext.apply){return}b=null;var a=Cufon.CSS.supports("display","inline-block");var e=!a&&(document.compatMode=="BackCompat"||/frameset|transitional/i.test(document.doctype.publicId));var f=document.createElement("style");f.type="text/css";f.appendChild(document.createTextNode(("cufon{text-indent:0;}@media screen,projection{cufon{display:inline;display:inline-block;position:relative;vertical-align:middle;"+(e?"":"font-size:1px;line-height:1px;")+"}cufon cufontext{display:-moz-inline-box;display:inline-block;width:0;height:0;overflow:hidden;text-indent:-10000in;}"+(a?"cufon canvas{position:relative;}":"cufon canvas{position:absolute;}")+"}@media print{cufon{padding:0;}cufon canvas{display:none;}}").replace(/;/g,"!important;")));document.getElementsByTagName("head")[0].appendChild(f);function d(p,h){var n=0,m=0;var g=[],o=/([mrvxe])([^a-z]*)/g,k;generate:for(var j=0;k=o.exec(p);++j){var l=k[2].split(",");switch(k[1]){case"v":g[j]={m:"bezierCurveTo",a:[n+~~l[0],m+~~l[1],n+~~l[2],m+~~l[3],n+=~~l[4],m+=~~l[5]]};break;case"r":g[j]={m:"lineTo",a:[n+=~~l[0],m+=~~l[1]]};break;case"m":g[j]={m:"moveTo",a:[n=~~l[0],m=~~l[1]]};break;case"x":g[j]={m:"closePath"};break;case"e":break generate}h[g[j].m].apply(h,g[j].a)}return g}function c(m,k){for(var j=0,h=m.length;j<h;++j){var g=m[j];k[g.m].apply(k,g.a)}}return function(V,w,P,t,C,W){var k=(w===null);if(k){w=C.getAttribute("alt")}var A=V.viewBox;var m=P.getSize("fontSize",V.baseSize);var B=0,O=0,N=0,u=0;var z=t.textShadow,L=[];if(z){for(var U=z.length;U--;){var F=z[U];var K=m.convertFrom(parseFloat(F.offX));var I=m.convertFrom(parseFloat(F.offY));L[U]=[K,I];if(I<B){B=I}if(K>O){O=K}if(I>N){N=I}if(K<u){u=K}}}var Z=Cufon.CSS.textTransform(w,P).split("");var E=V.spacing(Z,~~m.convertFrom(parseFloat(P.get("letterSpacing"))||0),~~m.convertFrom(parseFloat(P.get("wordSpacing"))||0));if(!E.length){return null}var h=E.total;O+=A.width-E[E.length-1];u+=A.minX;var s,n;if(k){s=C;n=C.firstChild}else{s=document.createElement("cufon");s.className="cufon cufon-canvas";s.setAttribute("alt",w);n=document.createElement("canvas");s.appendChild(n);if(t.printable){var S=document.createElement("cufontext");S.appendChild(document.createTextNode(w));s.appendChild(S)}}var aa=s.style;var H=n.style;var j=m.convert(A.height);var Y=Math.ceil(j);var M=Y/j;var G=M*Cufon.CSS.fontStretch(P.get("fontStretch"));var J=h*G;var Q=Math.ceil(m.convert(J+O-u));var o=Math.ceil(m.convert(A.height-B+N));n.width=Q;n.height=o;H.width=Q+"px";H.height=o+"px";B+=A.minY;H.top=Math.round(m.convert(B-V.ascent))+"px";H.left=Math.round(m.convert(u))+"px";var r=Math.max(Math.ceil(m.convert(J)),0)+"px";if(a){aa.width=r;aa.height=m.convert(V.height)+"px"}else{aa.paddingLeft=r;aa.paddingBottom=(m.convert(V.height)-1)+"px"}var X=n.getContext("2d"),D=j/A.height;X.scale(D,D*M);X.translate(-u,-B);X.save();function T(){var x=V.glyphs,ab,l=-1,g=-1,y;X.scale(G,1);while(y=Z[++l]){var ab=x[Z[l]]||V.missingGlyph;if(!ab){continue}if(ab.d){X.beginPath();if(ab.code){c(ab.code,X)}else{ab.code=d("m"+ab.d,X)}X.fill()}X.translate(E[++g],0)}X.restore()}if(z){for(var U=z.length;U--;){var F=z[U];X.save();X.fillStyle=F.color;X.translate.apply(X,L[U]);T()}}var q=t.textGradient;if(q){var v=q.stops,p=X.createLinearGradient(0,A.minY,0,A.maxY);for(var U=0,R=v.length;U<R;++U){p.addColorStop.apply(p,v[U])}X.fillStyle=p}else{X.fillStyle=P.get("color")}T();return s}})());Cufon.registerEngine("vml",(function(){var e=document.namespaces;if(!e){return}e.add("cvml","urn:schemas-microsoft-com:vml");e=null;var b=document.createElement("cvml:shape");b.style.behavior="url(#default#VML)";if(!b.coordsize){return}b=null;var h=(document.documentMode||0)<8;document.write(('<style type="text/css">cufoncanvas{text-indent:0;}@media screen{cvml\\:shape,cvml\\:rect,cvml\\:fill,cvml\\:shadow{behavior:url(#default#VML);display:block;antialias:true;position:absolute;}cufoncanvas{position:absolute;text-align:left;}cufon{display:inline-block;position:relative;vertical-align:'+(h?"middle":"text-bottom")+";}cufon cufontext{position:absolute;left:-10000in;font-size:1px;}a cufon{cursor:pointer}}@media print{cufon cufoncanvas{display:none;}}</style>").replace(/;/g,"!important;"));function c(i,j){return a(i,/(?:em|ex|%)$|^[a-z-]+$/i.test(j)?"1em":j)}function a(l,m){if(m==="0"){return 0}if(/px$/i.test(m)){return parseFloat(m)}var k=l.style.left,j=l.runtimeStyle.left;l.runtimeStyle.left=l.currentStyle.left;l.style.left=m.replace("%","em");var i=l.style.pixelLeft;l.style.left=k;l.runtimeStyle.left=j;return i}function f(l,k,j,n){var i="computed"+n,m=k[i];if(isNaN(m)){m=k.get(n);k[i]=m=(m=="normal")?0:~~j.convertFrom(a(l,m))}return m}var g={};function d(p){var q=p.id;if(!g[q]){var n=p.stops,o=document.createElement("cvml:fill"),i=[];o.type="gradient";o.angle=180;o.focus="0";o.method="sigma";o.color=n[0][1];for(var m=1,l=n.length-1;m<l;++m){i.push(n[m][0]*100+"% "+n[m][1])}o.colors=i.join(",");o.color2=n[l][1];g[q]=o}return g[q]}return function(ac,G,Y,C,K,ad,W){var n=(G===null);if(n){G=K.alt}var I=ac.viewBox;var p=Y.computedFontSize||(Y.computedFontSize=new Cufon.CSS.Size(c(ad,Y.get("fontSize"))+"px",ac.baseSize));var y,q;if(n){y=K;q=K.firstChild}else{y=document.createElement("cufon");y.className="cufon cufon-vml";y.alt=G;q=document.createElement("cufoncanvas");y.appendChild(q);if(C.printable){var Z=document.createElement("cufontext");Z.appendChild(document.createTextNode(G));y.appendChild(Z)}if(!W){y.appendChild(document.createElement("cvml:shape"))}}var ai=y.style;var R=q.style;var l=p.convert(I.height),af=Math.ceil(l);var V=af/l;var P=V*Cufon.CSS.fontStretch(Y.get("fontStretch"));var U=I.minX,T=I.minY;R.height=af;R.top=Math.round(p.convert(T-ac.ascent));R.left=Math.round(p.convert(U));ai.height=p.convert(ac.height)+"px";var F=Y.get("color");var ag=Cufon.CSS.textTransform(G,Y).split("");var L=ac.spacing(ag,f(ad,Y,p,"letterSpacing"),f(ad,Y,p,"wordSpacing"));if(!L.length){return null}var k=L.total;var x=-U+k+(I.width-L[L.length-1]);var ah=p.convert(x*P),X=Math.round(ah);var O=x+","+I.height,m;var J="r"+O+"ns";var u=C.textGradient&&d(C.textGradient);var o=ac.glyphs,S=0;var H=C.textShadow;var ab=-1,aa=0,w;while(w=ag[++ab]){var D=o[ag[ab]]||ac.missingGlyph,v;if(!D){continue}if(n){v=q.childNodes[aa];while(v.firstChild){v.removeChild(v.firstChild)}}else{v=document.createElement("cvml:shape");q.appendChild(v)}v.stroked="f";v.coordsize=O;v.coordorigin=m=(U-S)+","+T;v.path=(D.d?"m"+D.d+"xe":"")+"m"+m+J;v.fillcolor=F;if(u){v.appendChild(u.cloneNode(false))}var ae=v.style;ae.width=X;ae.height=af;if(H){var s=H[0],r=H[1];var B=Cufon.CSS.color(s.color),z;var N=document.createElement("cvml:shadow");N.on="t";N.color=B.color;N.offset=s.offX+","+s.offY;if(r){z=Cufon.CSS.color(r.color);N.type="double";N.color2=z.color;N.offset2=r.offX+","+r.offY}N.opacity=B.opacity||(z&&z.opacity)||1;v.appendChild(N)}S+=L[aa++]}var M=v.nextSibling,t,A;if(C.forceHitArea){if(!M){M=document.createElement("cvml:rect");M.stroked="f";M.className="cufon-vml-cover";t=document.createElement("cvml:fill");t.opacity=0;M.appendChild(t);q.appendChild(M)}A=M.style;A.width=X;A.height=af}else{if(M){q.removeChild(M)}}ai.width=Math.max(Math.ceil(p.convert(k*P)),0);if(h){var Q=Y.computedYAdjust;if(Q===undefined){var E=Y.get("lineHeight");if(E=="normal"){E="1em"}else{if(!isNaN(E)){E+="em"}}Y.computedYAdjust=Q=0.5*(a(ad,E)-parseFloat(ai.height))}if(Q){ai.marginTop=Math.ceil(Q)+"px";ai.marginBottom=Q+"px"}}return y}})());

//Go to top
$(function () {

			var scroll_timer;
			var displayed = false;
			var $message = $('#message');
			var $window = $(window);
			var top = $(document.body).children(0).position().top;

			$window.scroll(function () {
				window.clearTimeout(scroll_timer);
				scroll_timer = window.setTimeout(function () {
					if($window.scrollTop() <= top) 
					{
						displayed = false;
						$message.fadeOut(500);
					}
					else if(displayed == false) 
					{
						displayed = true;
						$message.stop(true, true).fadeIn(500).click(function () { $message.fadeOut(500); });
					}
				}, 100);
			});
			$('#top-link').click(function(e) { 
				e.preventDefault();
				$.scrollTo(0,300); 
			   });
		});
		
		
		
//Tipsy
		
$(function() {

    $('.north').tipsy({gravity: 'n'});
    
});


//Contact Form Box
  
  $(document).ready(function(){
  				$("a[rel='gallery']").colorbox();
				$("#contact").colorbox({width:"500", height:"580", iframe:true});
			});

// ColorBox v1.3.6 - a full featured, light-weight, customizable lightbox based on jQuery 1.3
// c) 2009 Jack Moore - www.colorpowered.com - jack@colorpowered.com
// Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php

(function ($) {
	// Shortcuts (to increase compression)
	var colorbox = 'colorbox',
	hover = 'hover',
	TRUE = true,
	FALSE = false,
	cboxPublic,
	isIE = !$.support.opacity,
	isIE6 = isIE && !window.XMLHttpRequest,

	// Event Strings (to increase compression)
	cbox_open = 'cbox_open',
	cbox_load = 'cbox_load',
	cbox_complete = 'cbox_complete',
	cbox_cleanup = 'cbox_cleanup',
	cbox_closed = 'cbox_closed',
	cbox_resize = 'resize.cbox_resize',

	// Cached jQuery Object Variables
	$overlay,
	$cbox,
	$wrap,
	$content,
	$topBorder,
	$leftBorder,
	$rightBorder,
	$bottomBorder,
	$related,
	$window,
	$loaded,
	$loadingBay,
	$loadingOverlay,
	$loadingGraphic,
	$title,
	$current,
	$slideshow,
	$next,
	$prev,
	$close,

	// Variables for cached values or use across multiple functions
	interfaceHeight,
	interfaceWidth,
	loadedHeight,
	loadedWidth,
	element,
	bookmark,
	index,
	settings,
	open,
	active,
	
	// ColorBox Default Settings.	
	// See http://colorpowered.com/colorbox for details.
	defaults = {
		transition: "elastic",
		speed: 350,
		width: FALSE,
		height: FALSE,
		innerWidth: FALSE,
		innerHeight: FALSE,
		initialWidth: "400",
		initialHeight: "400",
		maxWidth: FALSE,
		maxHeight: FALSE,
		scalePhotos: TRUE,
		scrolling: TRUE,
		inline: FALSE,
		html: FALSE,
		iframe: FALSE,
		photo: FALSE,
		href: FALSE,
		title: FALSE,
		rel: FALSE,
		opacity: 0.9,
		preloading: TRUE,
		current: "Image {current} of {total}",
		previous: "Previous",
		next: "Next",
		close: "Close",
		open: FALSE,
		overlayClose: TRUE,
		
		slideshow: FALSE,
		slideshowAuto: TRUE,
		slideshowSpeed: 2500,
		slideshowStart: "start slideshow",
		slideshowStop: "stop slideshow",
		
		onOpen: FALSE,
		onLoad: FALSE,
		onComplete: FALSE,
		onCleanup: FALSE,
		onClosed: FALSE
	};
	
	// ****************
	// HELPER FUNCTIONS
	// ****************
		
	// Convert % values to pixels
	function setSize(size, dimension) {
		dimension = dimension === 'x' ? $window.width() : $window.height();//document.documentElement.clientWidth : document.documentElement.clientHeight;
		return (typeof size === 'string') ? Math.round((size.match(/%/) ? (dimension / 100) * parseInt(size, 10) : parseInt(size, 10))) : size;
	}

	// Checks an href to see if it is a photo.
	// There is a force photo option (photo: true) for hrefs that cannot be matched by this regex.
	function isImage(url) {
		url = $.isFunction(url) ? url.call(element) : url;
		return settings.photo || url.match(/\.(gif|png|jpg|jpeg|bmp)(?:\?([^#]*))?(?:#(\.*))?$/i);
	}
	
	// Assigns functions results to their respective settings.  This allows functions to be used to set ColorBox options.
	function process() {
		for (var i in settings) {
			if ($.isFunction(settings[i]) && i.substring(0, 2) !== 'on') { // checks to make sure the function isn't one of the callbacks, they will be handled at the appropriate time.
			    settings[i] = settings[i].call(element);
			}
		}
		settings.rel = settings.rel || element.rel;
		settings.href = settings.href || element.href;
		settings.title = settings.title || element.title;
	}

	function launch(elem) {
		
		element = elem;
		
		settings = $(element).data(colorbox);
		
		process(); // Convert functions to their returned values.
		
		if (settings.rel && settings.rel !== 'nofollow') {
			$related = $('.cboxElement').filter(function () {
				var relRelated = $(this).data(colorbox).rel || this.rel;
				return (relRelated === settings.rel);
			});
			index = $related.index(element);
			
			// Check direct calls to ColorBox.
			if (index < 0) {
				$related = $related.add(element);
				index = $related.length - 1;
			}
		} else {
			$related = $(element);
			index = 0;
		}
		
		if (!open) {
			open = TRUE;
			
			active = TRUE; // Prevents the page-change action from queuing up if the visitor holds down the left or right keys.
			
			bookmark = element;
			
			bookmark.blur(); // Remove the focus from the calling element.
			
			// Set Navigation Key Bindings
			$(document).bind("keydown.cbox_close", function (e) {
				if (e.keyCode === 27) {
					e.preventDefault();
					cboxPublic.close();
				}
			}).bind("keydown.cbox_arrows", function (e) {
				if ($related.length > 1) {
					if (e.keyCode === 37) {
						e.preventDefault();
						$prev.click();
					} else if (e.keyCode === 39) {
						e.preventDefault();
						$next.click();
					}
				}
			});
			
			if (settings.overlayClose) {
				$overlay.css({"cursor": "pointer"}).one('click', cboxPublic.close);
			}
			
			$.event.trigger(cbox_open);
			if (settings.onOpen) {
				settings.onOpen.call(element);
			}
			
			$overlay.css({"opacity": settings.opacity}).show();
			
			// Opens inital empty ColorBox prior to content being loaded.
			settings.w = setSize(settings.initialWidth, 'x');
			settings.h = setSize(settings.initialHeight, 'y');
			cboxPublic.position(0);
			
			if (isIE6) {
				$window.bind('resize.cboxie6 scroll.cboxie6', function () {
					$overlay.css({width: $window.width(), height: $window.height(), top: $window.scrollTop(), left: $window.scrollLeft()});
				}).trigger("scroll.cboxie6");
			}
		}
		
		$current.add($prev).add($next).add($slideshow).add($title).hide();
		
		$close.html(settings.close).show();
		
		cboxPublic.slideshow();
		
		cboxPublic.load();
	}

	// ****************
	// PUBLIC FUNCTIONS
	// Usage format: $.fn.colorbox.close();
	// Usage from within an iframe: parent.$.fn.colorbox.close();
	// ****************
	
	cboxPublic = $.fn.colorbox = function (options, callback) {
		var $this = this;
		
		if (!$this.length) {
			if ($this.selector === '') { // empty selector means a direct call, ie: $.fn.colorbox();
				$this = $('<a/>');
				options.open = TRUE;
			} else { // else the selector didn't match anything, and colorbox should go ahead and return.
				return this;
			}
		}
		
		$this.each(function () {
			var data = $.extend({}, $(this).data(colorbox) ? $(this).data(colorbox) : defaults, options);
			
			$(this).data(colorbox, data).addClass("cboxElement");
			
			if (callback) {
				$(this).data(colorbox).onComplete = callback;
			}
		});
		
		if (options && options.open) {
			launch($this);
		}
		
		return this;
	};

	// Initialize ColorBox: store common calculations, preload the interface graphics, append the html.
	// This preps colorbox for a speedy open when clicked, and lightens the burdon on the browser by only
	// having to run once, instead of each time colorbox is opened.
	cboxPublic.init = function () {
		
		// jQuery object generator to save a bit of space
		function $div(id) {
			return $('<div id="cbox' + id + '"/>');
		}
		
		// Create & Append jQuery Objects
		$window = $(window);
		$cbox = $('<div id="colorbox"/>');
		$overlay = $div("Overlay").hide();
		$wrap = $div("Wrapper");
		$content = $div("Content").append(
			$loaded = $div("LoadedContent").css({width: 0, height: 0}),
			$loadingOverlay = $div("LoadingOverlay"),
			$loadingGraphic = $div("LoadingGraphic"),
			$title = $div("Title"),
			$current = $div("Current"),
			$slideshow = $div("Slideshow"),
			$next = $div("Next"),
			$prev = $div("Previous"),
			$close = $div("Close")
		);
		$wrap.append( // The 3x3 Grid that makes up ColorBox
			$('<div/>').append(
				$div("TopLeft"),
				$topBorder = $div("TopCenter"),
				$div("TopRight")
			),
			$('<div/>').append(
				$leftBorder = $div("MiddleLeft"),
				$content,
				$rightBorder = $div("MiddleRight")
			),
			$('<div/>').append(
				$div("BottomLeft"),
				$bottomBorder = $div("BottomCenter"),
				$div("BottomRight")
			)
		).children().children().css({'float': 'left'});
		
		$loadingBay = $("<div style='position:absolute; top:0; left:0; width:9999px; height:0;'/>");
		
		$('body').prepend($overlay, $cbox.append($wrap, $loadingBay));
				
		if (isIE) {
			$cbox.addClass('cboxIE');
			if (isIE6) {
				$overlay.css('position', 'absolute');
			}
		}
		
		// Add rollover event to navigation elements
		$content.children()
		.bind('mouseover mouseout', function(){
			$(this).toggleClass(hover);
		}).addClass(hover);
		
		// Cache values needed for size calculations
		interfaceHeight = $topBorder.height() + $bottomBorder.height() + $content.outerHeight(TRUE) - $content.height();//Subtraction needed for IE6
		interfaceWidth = $leftBorder.width() + $rightBorder.width() + $content.outerWidth(TRUE) - $content.width();
		loadedHeight = $loaded.outerHeight(TRUE);
		loadedWidth = $loaded.outerWidth(TRUE);
		
		// Setting padding to remove the need to do size conversions during the animation step.
		$cbox.css({"padding-bottom": interfaceHeight, "padding-right": interfaceWidth}).hide();
		
		// Setup button & key events.
		$next.click(cboxPublic.next);
		$prev.click(cboxPublic.prev);
		$close.click(cboxPublic.close);
		
		// Adding the 'hover' class allowed the browser to load the hover-state
		// background graphics.  The class can now can be removed.
		$content.children().removeClass(hover);
		
		$('.cboxElement').live('click', function (e) {
			if (e.button !== 0 && typeof e.button !== 'undefined') {// checks to see if it was a non-left mouse-click.
				return TRUE;
			} else {
				launch(this);			
				return FALSE;
			}
		});
	};

	cboxPublic.position = function (speed, loadedCallback) {
		var
		animate_speed,
		winHeight = $window.height(),
		// keeps the top and left positions within the browser's viewport.
		posTop = Math.max(winHeight - settings.h - loadedHeight - interfaceHeight,0)/2 + $window.scrollTop(),
		posLeft = Math.max(document.documentElement.clientWidth - settings.w - loadedWidth - interfaceWidth,0)/2 + $window.scrollLeft();
		
		// setting the speed to 0 to reduce the delay between same-sized content.
		animate_speed = ($cbox.width() === settings.w+loadedWidth && $cbox.height() === settings.h+loadedHeight) ? 0 : speed;
		
		// this gives the wrapper plenty of breathing room so it's floated contents can move around smoothly,
		// but it has to be shrank down around the size of div#colorbox when it's done.  If not,
		// it can invoke an obscure IE bug when using iframes.
		$wrap[0].style.width = $wrap[0].style.height = "9999px";
		
		function modalDimensions (that) {
			// loading overlay size has to be sure that IE6 uses the correct height.
			$topBorder[0].style.width = $bottomBorder[0].style.width = $content[0].style.width = that.style.width;
			$loadingGraphic[0].style.height = $loadingOverlay[0].style.height = $content[0].style.height = $leftBorder[0].style.height = $rightBorder[0].style.height = that.style.height;
		}
		
		$cbox.dequeue().animate({width:settings.w+loadedWidth, height:settings.h+loadedHeight, top:posTop, left:posLeft}, {duration: animate_speed,
			complete: function(){
				modalDimensions(this);
				
				active = FALSE;
				
				// shrink the wrapper down to exactly the size of colorbox to avoid a bug in IE's iframe implementation.
				$wrap[0].style.width = (settings.w+loadedWidth+interfaceWidth) + "px";
				$wrap[0].style.height = (settings.h+loadedHeight+interfaceHeight) + "px";
				
				if (loadedCallback) {loadedCallback();}
			},
			step: function(){
				modalDimensions(this);
			}
		});
	};

	cboxPublic.resize = function (object) {
		if(!open){ return; }
		
		var topMargin,
		prev,
		prevSrc,
		next,
		nextSrc,
		photo,
		timeout,
		speed = settings.transition==="none" ? 0 : settings.speed;
		
		$window.unbind(cbox_resize);
		
		if(!object){
			timeout = setTimeout(function(){ // timer allows IE to render the dimensions before attempting to calculate the height
				var $child = $loaded.wrapInner("<div style='overflow:auto'></div>").children(); // temporary wrapper to get an accurate estimate of just how high the total content should be.
				settings.h = $child.height();
				$loaded.css({height:settings.h});
				$child.replaceWith($child.children()); // ditch the temporary wrapper div used in height calculation
				cboxPublic.position(speed);
			}, 1);
			return;
		}
		
		$loaded.remove();
		$loaded = $('<div id="cboxLoadedContent"/>').html(object);
		
		function getWidth(){
			settings.w = settings.w || $loaded.width();
			settings.w = settings.mw && settings.mw < settings.w ? settings.mw : settings.w;
			return settings.w;
		}
		function getHeight(){
			settings.h = settings.h || $loaded.height();
			settings.h = settings.mh && settings.mh < settings.h ? settings.mh : settings.h;
			return settings.h;
		}
		
		$loaded.hide()
		.appendTo($loadingBay)// content has to be appended to the DOM for accurate size calculations.  Appended to an absolutely positioned element, rather than BODY, which avoids an extremely brief display of the vertical scrollbar in Firefox that can occur for a small minority of websites.
		.css({width:getWidth(), overflow:settings.scrolling ? 'auto' : 'hidden'})
		.css({height:getHeight()})// sets the height independently from the width in case the new width influences the value of height.
		.prependTo($content);
		
		$('#cboxPhoto').css({cssFloat:'none'});// floating the IMG removes the bottom line-height and fixed a problem where IE miscalculates the width of the parent element as 100% of the document width.
		
		// Hides SELECT elements in IE6 because they would otherwise sit on top of the overlay.
		if (isIE6) {
			$('select:not(#colorbox select)').filter(function(){
				return this.style.visibility !== 'hidden';
			}).css({'visibility':'hidden'}).one(cbox_cleanup, function(){
				this.style.visibility = 'inherit';
			});
		}
				
		function setPosition (s) {
			cboxPublic.position(s, function(){
				if (!open) { return; }
				
				if (isIE) {
					//This fadeIn helps the bicubic resampling to kick-in.
					if( photo ){$loaded.fadeIn(100);}
					//IE adds a filter when ColorBox fades in and out that can cause problems if the loaded content contains transparent pngs.
					$cbox[0].style.removeAttribute("filter");
				}
				
				//Waited until the iframe is added to the DOM & it is visible before setting the src.
				//This increases compatability with pages using DOM dependent JavaScript.
				if(settings.iframe){
					$loaded.append("<iframe id='cboxIframe'" + (settings.scrolling ? " " : "scrolling='no'") + " name='iframe_"+new Date().getTime()+"' frameborder=0 src='"+settings.href+"' " + (isIE ? "allowtransparency='true'" : '') + " />");
				}
				
				$loaded.show();
				
				$title.show().html(settings.title);
				
				if ($related.length>1) {
					$current.html(settings.current.replace(/\{current\}/, index+1).replace(/\{total\}/, $related.length)).show();
					$next.html(settings.next).show();
					$prev.html(settings.previous).show();
					
					if(settings.slideshow){
						$slideshow.show();
					}
				}
				
				$loadingOverlay.hide();
				$loadingGraphic.hide();
				
				$.event.trigger(cbox_complete);
				if (settings.onComplete) {
					settings.onComplete.call(element);
				}
				
				if (settings.transition === 'fade'){
					$cbox.fadeTo(speed, 1, function(){
						if(isIE){$cbox[0].style.removeAttribute("filter");}
					});
				}
				
				$window.bind(cbox_resize, function(){
					cboxPublic.position(0);
				});
			});
		}
		
		if((settings.transition === 'fade' && $cbox.fadeTo(speed, 0, function(){setPosition(0);})) || setPosition(speed)){}
		
		// Preloads images within a rel group
		if (settings.preloading && $related.length>1) {
			prev = index > 0 ? $related[index-1] : $related[$related.length-1];
			next = index < $related.length-1 ? $related[index+1] : $related[0];
			nextSrc = $(next).data(colorbox).href || next.href;
			prevSrc = $(prev).data(colorbox).href || prev.href;
			
			if(isImage(nextSrc)){
				$('<img />').attr('src', nextSrc);
			}
			
			if(isImage(prevSrc)){
				$('<img />').attr('src', prevSrc);
			}
		}
	};

	cboxPublic.load = function () {
		var href, img, setResize, resize = cboxPublic.resize;
		
		active = TRUE;
		
		/*
		 
		// I decided to comment this out because I can see it causing problems as users
		// really should just set the dimensions on their IMG elements instead,
		// but I'm leaving the code in as it may be useful to someone.
		// To use, uncomment the function and change 'if(textStatus === "success"){ resize(this); }'
		// to 'if(textStatus === "success"){ preload(this); }'
		
		// Preload loops through the HTML to find IMG elements and loads their sources.
		// This allows the resize method to accurately estimate the dimensions of the new content.
		function preload(html){
			var
			$ajax = $(html),
			$imgs = $ajax.find('img'),
			x = $imgs.length;
			
			function loadloop(){
				var img = new Image();
				x = x-1;
				if(x >= 0){
					img.onload = loadloop;
					img.src = $imgs[x].src;
				} else {
					resize($ajax);
				}
			}
			
			loadloop();
		}
		*/
		
		element = $related[index];
		
		settings = $(element).data(colorbox);
		
		//convert functions to static values
		process();
		
		$.event.trigger(cbox_load);
		if (settings.onLoad) {
			settings.onLoad.call(element);
		}
		
		// Evaluate the height based on the optional height and width settings.
		settings.h = settings.height ?
				setSize(settings.height, 'y') - loadedHeight - interfaceHeight :
				settings.innerHeight ?
					setSize(settings.innerHeight, 'y') :
					FALSE;
		settings.w = settings.width ?
				setSize(settings.width, 'x') - loadedWidth - interfaceWidth :
				settings.innerWidth ?
					setSize(settings.innerWidth, 'x') :
					FALSE;
		
		// Sets the minimum dimensions for use in image scaling
		settings.mw = settings.w;
		settings.mh = settings.h;
		
		// Re-evaluate the minimum width and height based on maxWidth and maxHeight values.
		// If the width or height exceed the maxWidth or maxHeight, use the maximum values instead.
		if(settings.maxWidth){
			settings.mw = setSize(settings.maxWidth, 'x') - loadedWidth - interfaceWidth;
			settings.mw = settings.w && settings.w < settings.mw ? settings.w : settings.mw;
		}
		if(settings.maxHeight){
			settings.mh = setSize(settings.maxHeight, 'y') - loadedHeight - interfaceHeight;
			settings.mh = settings.h && settings.h < settings.mh ? settings.h : settings.mh;
		}
		
		href = settings.href;
		
		$loadingOverlay.show();
		$loadingGraphic.show();
		
		if (settings.inline) {
			// Inserts an empty placeholder where inline content is being pulled from.
			// An event is bound to put inline content back when ColorBox closes or loads new content.
			$('<div id="cboxInlineTemp" />').hide().insertBefore($(href)[0]).bind(cbox_load+' '+cbox_cleanup, function(){
				$(this).replaceWith($loaded.children());
			});
			resize($(href));
		} else if (settings.iframe) {
			// IFrame element won't be added to the DOM until it is ready to be displayed,
			// to avoid problems with DOM-ready JS that might be trying to run in that iframe.
			resize(" ");
		} else if (settings.html) {
			resize(settings.html);
		} else if (isImage(href)){
			img = new Image();
			img.onload = function(){
				var percent;
				
				img.onload = null;
				
				img.id = 'cboxPhoto';
				
				$(img).css({margin:'auto', border:'none', display:'block', cssFloat:'left'});
				
				if(settings.scalePhotos){
					setResize = function(){
						img.height -= img.height * percent;
						img.width -= img.width * percent;	
					};
					if(settings.mw && img.width > settings.mw){
						percent = (img.width - settings.mw) / img.width;
						setResize();
					}
					if(settings.mh && img.height > settings.mh){
						percent = (img.height - settings.mh) / img.height;
						setResize();
					}
				}
				
				if (settings.h) {
					img.style.marginTop = Math.max(settings.h - img.height,0)/2 + 'px';
				}
				
				resize(img);
				
				if($related.length > 1){
					$(img).css({cursor:'pointer'}).click(cboxPublic.next);
				}
				
				if(isIE){
					img.style.msInterpolationMode='bicubic';
				}
			};
			img.src = href;
		} else {
			$('<div />').appendTo($loadingBay).load(href, function(data, textStatus){
				if(textStatus === "success"){
					resize(this);
				} else {
					resize($("<p>Request unsuccessful.</p>"));
				}
			});
		}
	};

	// Navigates to the next page/image in a set.
	cboxPublic.next = function () {
		if(!active){
			index = index < $related.length-1 ? index+1 : 0;
			cboxPublic.load();
		}
	};
	
	cboxPublic.prev = function () {
		if(!active){
			index = index > 0 ? index-1 : $related.length-1;
			cboxPublic.load();
		}
	};

	cboxPublic.slideshow = function () {
		var stop, timeOut, className = 'cboxSlideshow_';
		
		$slideshow.bind(cbox_closed, function(){
			$slideshow.unbind();
			clearTimeout(timeOut);
			$cbox.removeClass(className+"off"+" "+className+"on");
		});
		
		function start(){
			$slideshow
			.text(settings.slideshowStop)
			.bind(cbox_complete, function(){
				timeOut = setTimeout(cboxPublic.next, settings.slideshowSpeed);
			})
			.bind(cbox_load, function(){
				clearTimeout(timeOut);	
			}).one("click", function(){
				stop();
				$(this).removeClass(hover);
			});
			$cbox.removeClass(className+"off").addClass(className+"on");
		}
		
		stop = function(){
			clearTimeout(timeOut);
			$slideshow
			.text(settings.slideshowStart)
			.unbind(cbox_complete+' '+cbox_load)
			.one("click", function(){
				start();
				timeOut = setTimeout(cboxPublic.next, settings.slideshowSpeed);
				$(this).removeClass(hover);
			});
			$cbox.removeClass(className+"on").addClass(className+"off");
		};
		
		if(settings.slideshow && $related.length>1){
			if(settings.slideshowAuto){
				start();
			} else {
				stop();
			}
		}
	};

	// Note: to use this within an iframe use the following format: parent.$.fn.colorbox.close();
	cboxPublic.close = function () {
		
		$.event.trigger(cbox_cleanup);
		if (settings.onCleanup) {
			settings.onCleanup.call(element);
		}
		
		open = FALSE;
		$(document).unbind("keydown.cbox_close keydown.cbox_arrows");
		$window.unbind(cbox_resize+' resize.cboxie6 scroll.cboxie6');
		$overlay.css({cursor: 'auto'}).fadeOut('fast');
		
		$cbox
		.stop(TRUE, FALSE)
		.fadeOut('fast', function () {
			$('#colorbox iframe').attr('src', 'about:blank');
			$loaded.remove();
			$cbox.css({'opacity': 1});
			
			try{
				bookmark.focus();
			} catch (er){
				// do nothing
			}
			
			$.event.trigger(cbox_closed);
			if (settings.onClosed) {
				settings.onClosed.call(element);
			}
		});
	};

	// A method for fetching the current element ColorBox is referencing.
	// returns a jQuery object.
	cboxPublic.element = function(){ return $(element); };

	cboxPublic.settings = defaults;

	// Initializes ColorBox when the DOM has loaded
	$(cboxPublic.init);

}(jQuery));

(function($) {
    function fixTitle($ele) {
        if ($ele.attr('title') || typeof($ele.attr('original-title')) != 'string') {
            $ele.attr('original-title', $ele.attr('title') || '').removeAttr('title');
        }
    }
    
    $.fn.tipsy = function(options) {

        options = $.extend({}, $.fn.tipsy.defaults, options);
        
        return this.each(function() {
            
            fixTitle($(this));
            var opts = $.fn.tipsy.elementOptions(this, options);
            var timeout = null;
            
            $(this).hover(function() {
                var self = this;
                timeout = setTimeout(function() {
                    $.data(self, 'cancel.tipsy', true);

                    var tip = $.data(self, 'active.tipsy');
                    if (!tip) {
                        tip = $('<div class="tipsy"><div class="tipsy-inner"/></div>');
                        tip.css({position: 'absolute', zIndex: 100000});
                        $.data(self, 'active.tipsy', tip);
                    }

                    fixTitle($(self));

                    var title;
                    if (typeof opts.title == 'string') {
                        title = $(self).attr(opts.title == 'title' ? 'original-title' : opts.title);
                    } else if (typeof opts.title == 'function') {
                        title = opts.title.call(self);
                    }

                    tip.find('.tipsy-inner')[opts.html ? 'html' : 'text'](title || opts.fallback);

                    var pos = $.extend({}, $(self).offset(), {width: self.offsetWidth, height: self.offsetHeight});
                    tip.get(0).className = 'tipsy'; // reset classname in case of dynamic gravity
                    tip.remove().css({top: 0, left: 0, visibility: 'hidden', display: 'block'}).appendTo(document.body);
                    var actualWidth = tip[0].offsetWidth, actualHeight = tip[0].offsetHeight;
                    var gravity = (typeof opts.gravity == 'function') ? opts.gravity.call(self) : opts.gravity;

                    switch (gravity.charAt(0)) {
                        case 'n':
                            tip.css({top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2}).addClass('tipsy-north');
                            break;
                        case 's':
                            tip.css({top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2}).addClass('tipsy-south');
                            break;
                        case 'e':
                            tip.css({top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth}).addClass('tipsy-east');
                            break;
                        case 'w':
                            tip.css({top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width}).addClass('tipsy-west');
                            break;
                    }

                    if (opts.fade) {
                        tip.stop().css({opacity: 0, display: 'block', visibility: 'visible'}).animate({opacity: opts.opacity});
                    } else {
                        tip.css({visibility: 'visible', opacity: opts.opacity});
                    }
                }, opts.delayIn);

            }, function() {
                $.data(this, 'cancel.tipsy', false);
                var self = this;
                clearTimeout(timeout);
                setTimeout(function() {
                    if ($.data(this, 'cancel.tipsy')) return;
                    var tip = $.data(self, 'active.tipsy');
                    if (opts.fade) {
                        tip.stop().fadeOut(function() { $(this).remove(); });
                    } else if (tip) {
                        tip.remove();
                    }
                }, opts.delayOut);

            });
            
        });
        
    };
    
    // Overwrite this method to provide options on a per-element basis.
    // For example, you could store the gravity in a 'tipsy-gravity' attribute:
    // return $.extend({}, options, {gravity: $(ele).attr('tipsy-gravity') || 'n' });
    // (remember - do not modify 'options' in place!)
    $.fn.tipsy.elementOptions = function(ele, options) {
        return $.metadata ? $.extend({}, options, $(ele).metadata()) : options;
    };
    
    $.fn.tipsy.defaults = {
        delayIn: 0,
        delayOut: 100,
        fade: false,
        fallback: '',
        gravity: 'n',
        html: false,
        opacity: 0.8,
        title: 'title'
    };
    
    $.fn.tipsy.autoNS = function() {
        return $(this).offset().top > ($(document).scrollTop() + $(window).height() / 2) ? 's' : 'n';
    };
    
    $.fn.tipsy.autoWE = function() {
        return $(this).offset().left > ($(document).scrollLeft() + $(window).width() / 2) ? 'e' : 'w';
    };
    
})(jQuery);

/*!
 * jQuery JavaScript Library v1.4.2
 * http://jquery.com/
 *
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2010, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Sat Feb 13 22:33:48 2010 -0500
 */
(function(A,w){function ma(){if(!c.isReady){try{s.documentElement.doScroll("left")}catch(a){setTimeout(ma,1);return}c.ready()}}function Qa(a,b){b.src?c.ajax({url:b.src,async:false,dataType:"script"}):c.globalEval(b.text||b.textContent||b.innerHTML||"");b.parentNode&&b.parentNode.removeChild(b)}function X(a,b,d,f,e,j){var i=a.length;if(typeof b==="object"){for(var o in b)X(a,o,b[o],f,e,d);return a}if(d!==w){f=!j&&f&&c.isFunction(d);for(o=0;o<i;o++)e(a[o],b,f?d.call(a[o],o,e(a[o],b)):d,j);return a}return i?
e(a[0],b):w}function J(){return(new Date).getTime()}function Y(){return false}function Z(){return true}function na(a,b,d){d[0].type=a;return c.event.handle.apply(b,d)}function oa(a){var b,d=[],f=[],e=arguments,j,i,o,k,n,r;i=c.data(this,"events");if(!(a.liveFired===this||!i||!i.live||a.button&&a.type==="click")){a.liveFired=this;var u=i.live.slice(0);for(k=0;k<u.length;k++){i=u[k];i.origType.replace(O,"")===a.type?f.push(i.selector):u.splice(k--,1)}j=c(a.target).closest(f,a.currentTarget);n=0;for(r=
j.length;n<r;n++)for(k=0;k<u.length;k++){i=u[k];if(j[n].selector===i.selector){o=j[n].elem;f=null;if(i.preType==="mouseenter"||i.preType==="mouseleave")f=c(a.relatedTarget).closest(i.selector)[0];if(!f||f!==o)d.push({elem:o,handleObj:i})}}n=0;for(r=d.length;n<r;n++){j=d[n];a.currentTarget=j.elem;a.data=j.handleObj.data;a.handleObj=j.handleObj;if(j.handleObj.origHandler.apply(j.elem,e)===false){b=false;break}}return b}}function pa(a,b){return"live."+(a&&a!=="*"?a+".":"")+b.replace(/\./g,"`").replace(/ /g,
"&")}function qa(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function ra(a,b){var d=0;b.each(function(){if(this.nodeName===(a[d]&&a[d].nodeName)){var f=c.data(a[d++]),e=c.data(this,f);if(f=f&&f.events){delete e.handle;e.events={};for(var j in f)for(var i in f[j])c.event.add(this,j,f[j][i],f[j][i].data)}}})}function sa(a,b,d){var f,e,j;b=b&&b[0]?b[0].ownerDocument||b[0]:s;if(a.length===1&&typeof a[0]==="string"&&a[0].length<512&&b===s&&!ta.test(a[0])&&(c.support.checkClone||!ua.test(a[0]))){e=
true;if(j=c.fragments[a[0]])if(j!==1)f=j}if(!f){f=b.createDocumentFragment();c.clean(a,b,f,d)}if(e)c.fragments[a[0]]=j?f:1;return{fragment:f,cacheable:e}}function K(a,b){var d={};c.each(va.concat.apply([],va.slice(0,b)),function(){d[this]=a});return d}function wa(a){return"scrollTo"in a&&a.document?a:a.nodeType===9?a.defaultView||a.parentWindow:false}var c=function(a,b){return new c.fn.init(a,b)},Ra=A.jQuery,Sa=A.$,s=A.document,T,Ta=/^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,Ua=/^.[^:#\[\.,]*$/,Va=/\S/,
Wa=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,Xa=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,P=navigator.userAgent,xa=false,Q=[],L,$=Object.prototype.toString,aa=Object.prototype.hasOwnProperty,ba=Array.prototype.push,R=Array.prototype.slice,ya=Array.prototype.indexOf;c.fn=c.prototype={init:function(a,b){var d,f;if(!a)return this;if(a.nodeType){this.context=this[0]=a;this.length=1;return this}if(a==="body"&&!b){this.context=s;this[0]=s.body;this.selector="body";this.length=1;return this}if(typeof a==="string")if((d=Ta.exec(a))&&
(d[1]||!b))if(d[1]){f=b?b.ownerDocument||b:s;if(a=Xa.exec(a))if(c.isPlainObject(b)){a=[s.createElement(a[1])];c.fn.attr.call(a,b,true)}else a=[f.createElement(a[1])];else{a=sa([d[1]],[f]);a=(a.cacheable?a.fragment.cloneNode(true):a.fragment).childNodes}return c.merge(this,a)}else{if(b=s.getElementById(d[2])){if(b.id!==d[2])return T.find(a);this.length=1;this[0]=b}this.context=s;this.selector=a;return this}else if(!b&&/^\w+$/.test(a)){this.selector=a;this.context=s;a=s.getElementsByTagName(a);return c.merge(this,
a)}else return!b||b.jquery?(b||T).find(a):c(b).find(a);else if(c.isFunction(a))return T.ready(a);if(a.selector!==w){this.selector=a.selector;this.context=a.context}return c.makeArray(a,this)},selector:"",jquery:"1.4.2",length:0,size:function(){return this.length},toArray:function(){return R.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this.slice(a)[0]:this[a]},pushStack:function(a,b,d){var f=c();c.isArray(a)?ba.apply(f,a):c.merge(f,a);f.prevObject=this;f.context=this.context;if(b===
"find")f.selector=this.selector+(this.selector?" ":"")+d;else if(b)f.selector=this.selector+"."+b+"("+d+")";return f},each:function(a,b){return c.each(this,a,b)},ready:function(a){c.bindReady();if(c.isReady)a.call(s,c);else Q&&Q.push(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(R.apply(this,arguments),"slice",R.call(arguments).join(","))},map:function(a){return this.pushStack(c.map(this,
function(b,d){return a.call(b,d,b)}))},end:function(){return this.prevObject||c(null)},push:ba,sort:[].sort,splice:[].splice};c.fn.init.prototype=c.fn;c.extend=c.fn.extend=function(){var a=arguments[0]||{},b=1,d=arguments.length,f=false,e,j,i,o;if(typeof a==="boolean"){f=a;a=arguments[1]||{};b=2}if(typeof a!=="object"&&!c.isFunction(a))a={};if(d===b){a=this;--b}for(;b<d;b++)if((e=arguments[b])!=null)for(j in e){i=a[j];o=e[j];if(a!==o)if(f&&o&&(c.isPlainObject(o)||c.isArray(o))){i=i&&(c.isPlainObject(i)||
c.isArray(i))?i:c.isArray(o)?[]:{};a[j]=c.extend(f,i,o)}else if(o!==w)a[j]=o}return a};c.extend({noConflict:function(a){A.$=Sa;if(a)A.jQuery=Ra;return c},isReady:false,ready:function(){if(!c.isReady){if(!s.body)return setTimeout(c.ready,13);c.isReady=true;if(Q){for(var a,b=0;a=Q[b++];)a.call(s,c);Q=null}c.fn.triggerHandler&&c(s).triggerHandler("ready")}},bindReady:function(){if(!xa){xa=true;if(s.readyState==="complete")return c.ready();if(s.addEventListener){s.addEventListener("DOMContentLoaded",
L,false);A.addEventListener("load",c.ready,false)}else if(s.attachEvent){s.attachEvent("onreadystatechange",L);A.attachEvent("onload",c.ready);var a=false;try{a=A.frameElement==null}catch(b){}s.documentElement.doScroll&&a&&ma()}}},isFunction:function(a){return $.call(a)==="[object Function]"},isArray:function(a){return $.call(a)==="[object Array]"},isPlainObject:function(a){if(!a||$.call(a)!=="[object Object]"||a.nodeType||a.setInterval)return false;if(a.constructor&&!aa.call(a,"constructor")&&!aa.call(a.constructor.prototype,
"isPrototypeOf"))return false;var b;for(b in a);return b===w||aa.call(a,b)},isEmptyObject:function(a){for(var b in a)return false;return true},error:function(a){throw a;},parseJSON:function(a){if(typeof a!=="string"||!a)return null;a=c.trim(a);if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return A.JSON&&A.JSON.parse?A.JSON.parse(a):(new Function("return "+
a))();else c.error("Invalid JSON: "+a)},noop:function(){},globalEval:function(a){if(a&&Va.test(a)){var b=s.getElementsByTagName("head")[0]||s.documentElement,d=s.createElement("script");d.type="text/javascript";if(c.support.scriptEval)d.appendChild(s.createTextNode(a));else d.text=a;b.insertBefore(d,b.firstChild);b.removeChild(d)}},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,b,d){var f,e=0,j=a.length,i=j===w||c.isFunction(a);if(d)if(i)for(f in a){if(b.apply(a[f],
d)===false)break}else for(;e<j;){if(b.apply(a[e++],d)===false)break}else if(i)for(f in a){if(b.call(a[f],f,a[f])===false)break}else for(d=a[0];e<j&&b.call(d,e,d)!==false;d=a[++e]);return a},trim:function(a){return(a||"").replace(Wa,"")},makeArray:function(a,b){b=b||[];if(a!=null)a.length==null||typeof a==="string"||c.isFunction(a)||typeof a!=="function"&&a.setInterval?ba.call(b,a):c.merge(b,a);return b},inArray:function(a,b){if(b.indexOf)return b.indexOf(a);for(var d=0,f=b.length;d<f;d++)if(b[d]===
a)return d;return-1},merge:function(a,b){var d=a.length,f=0;if(typeof b.length==="number")for(var e=b.length;f<e;f++)a[d++]=b[f];else for(;b[f]!==w;)a[d++]=b[f++];a.length=d;return a},grep:function(a,b,d){for(var f=[],e=0,j=a.length;e<j;e++)!d!==!b(a[e],e)&&f.push(a[e]);return f},map:function(a,b,d){for(var f=[],e,j=0,i=a.length;j<i;j++){e=b(a[j],j,d);if(e!=null)f[f.length]=e}return f.concat.apply([],f)},guid:1,proxy:function(a,b,d){if(arguments.length===2)if(typeof b==="string"){d=a;a=d[b];b=w}else if(b&&
!c.isFunction(b)){d=b;b=w}if(!b&&a)b=function(){return a.apply(d||this,arguments)};if(a)b.guid=a.guid=a.guid||b.guid||c.guid++;return b},uaMatch:function(a){a=a.toLowerCase();a=/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||!/compatible/.test(a)&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(a)||[];return{browser:a[1]||"",version:a[2]||"0"}},browser:{}});P=c.uaMatch(P);if(P.browser){c.browser[P.browser]=true;c.browser.version=P.version}if(c.browser.webkit)c.browser.safari=
true;if(ya)c.inArray=function(a,b){return ya.call(b,a)};T=c(s);if(s.addEventListener)L=function(){s.removeEventListener("DOMContentLoaded",L,false);c.ready()};else if(s.attachEvent)L=function(){if(s.readyState==="complete"){s.detachEvent("onreadystatechange",L);c.ready()}};(function(){c.support={};var a=s.documentElement,b=s.createElement("script"),d=s.createElement("div"),f="script"+J();d.style.display="none";d.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
var e=d.getElementsByTagName("*"),j=d.getElementsByTagName("a")[0];if(!(!e||!e.length||!j)){c.support={leadingWhitespace:d.firstChild.nodeType===3,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/red/.test(j.getAttribute("style")),hrefNormalized:j.getAttribute("href")==="/a",opacity:/^0.55$/.test(j.style.opacity),cssFloat:!!j.style.cssFloat,checkOn:d.getElementsByTagName("input")[0].value==="on",optSelected:s.createElement("select").appendChild(s.createElement("option")).selected,
parentNode:d.removeChild(d.appendChild(s.createElement("div"))).parentNode===null,deleteExpando:true,checkClone:false,scriptEval:false,noCloneEvent:true,boxModel:null};b.type="text/javascript";try{b.appendChild(s.createTextNode("window."+f+"=1;"))}catch(i){}a.insertBefore(b,a.firstChild);if(A[f]){c.support.scriptEval=true;delete A[f]}try{delete b.test}catch(o){c.support.deleteExpando=false}a.removeChild(b);if(d.attachEvent&&d.fireEvent){d.attachEvent("onclick",function k(){c.support.noCloneEvent=
false;d.detachEvent("onclick",k)});d.cloneNode(true).fireEvent("onclick")}d=s.createElement("div");d.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";a=s.createDocumentFragment();a.appendChild(d.firstChild);c.support.checkClone=a.cloneNode(true).cloneNode(true).lastChild.checked;c(function(){var k=s.createElement("div");k.style.width=k.style.paddingLeft="1px";s.body.appendChild(k);c.boxModel=c.support.boxModel=k.offsetWidth===2;s.body.removeChild(k).style.display="none"});a=function(k){var n=
s.createElement("div");k="on"+k;var r=k in n;if(!r){n.setAttribute(k,"return;");r=typeof n[k]==="function"}return r};c.support.submitBubbles=a("submit");c.support.changeBubbles=a("change");a=b=d=e=j=null}})();c.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};var G="jQuery"+J(),Ya=0,za={};c.extend({cache:{},expando:G,noData:{embed:true,object:true,
applet:true},data:function(a,b,d){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var f=a[G],e=c.cache;if(!f&&typeof b==="string"&&d===w)return null;f||(f=++Ya);if(typeof b==="object"){a[G]=f;e[f]=c.extend(true,{},b)}else if(!e[f]){a[G]=f;e[f]={}}a=e[f];if(d!==w)a[b]=d;return typeof b==="string"?a[b]:a}},removeData:function(a,b){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var d=a[G],f=c.cache,e=f[d];if(b){if(e){delete e[b];c.isEmptyObject(e)&&c.removeData(a)}}else{if(c.support.deleteExpando)delete a[c.expando];
else a.removeAttribute&&a.removeAttribute(c.expando);delete f[d]}}}});c.fn.extend({data:function(a,b){if(typeof a==="undefined"&&this.length)return c.data(this[0]);else if(typeof a==="object")return this.each(function(){c.data(this,a)});var d=a.split(".");d[1]=d[1]?"."+d[1]:"";if(b===w){var f=this.triggerHandler("getData"+d[1]+"!",[d[0]]);if(f===w&&this.length)f=c.data(this[0],a);return f===w&&d[1]?this.data(d[0]):f}else return this.trigger("setData"+d[1]+"!",[d[0],b]).each(function(){c.data(this,
a,b)})},removeData:function(a){return this.each(function(){c.removeData(this,a)})}});c.extend({queue:function(a,b,d){if(a){b=(b||"fx")+"queue";var f=c.data(a,b);if(!d)return f||[];if(!f||c.isArray(d))f=c.data(a,b,c.makeArray(d));else f.push(d);return f}},dequeue:function(a,b){b=b||"fx";var d=c.queue(a,b),f=d.shift();if(f==="inprogress")f=d.shift();if(f){b==="fx"&&d.unshift("inprogress");f.call(a,function(){c.dequeue(a,b)})}}});c.fn.extend({queue:function(a,b){if(typeof a!=="string"){b=a;a="fx"}if(b===
w)return c.queue(this[0],a);return this.each(function(){var d=c.queue(this,a,b);a==="fx"&&d[0]!=="inprogress"&&c.dequeue(this,a)})},dequeue:function(a){return this.each(function(){c.dequeue(this,a)})},delay:function(a,b){a=c.fx?c.fx.speeds[a]||a:a;b=b||"fx";return this.queue(b,function(){var d=this;setTimeout(function(){c.dequeue(d,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var Aa=/[\n\t]/g,ca=/\s+/,Za=/\r/g,$a=/href|src|style/,ab=/(button|input)/i,bb=/(button|input|object|select|textarea)/i,
cb=/^(a|area)$/i,Ba=/radio|checkbox/;c.fn.extend({attr:function(a,b){return X(this,a,b,true,c.attr)},removeAttr:function(a){return this.each(function(){c.attr(this,a,"");this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(c.isFunction(a))return this.each(function(n){var r=c(this);r.addClass(a.call(this,n,r.attr("class")))});if(a&&typeof a==="string")for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1)if(e.className){for(var j=" "+e.className+" ",
i=e.className,o=0,k=b.length;o<k;o++)if(j.indexOf(" "+b[o]+" ")<0)i+=" "+b[o];e.className=c.trim(i)}else e.className=a}return this},removeClass:function(a){if(c.isFunction(a))return this.each(function(k){var n=c(this);n.removeClass(a.call(this,k,n.attr("class")))});if(a&&typeof a==="string"||a===w)for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1&&e.className)if(a){for(var j=(" "+e.className+" ").replace(Aa," "),i=0,o=b.length;i<o;i++)j=j.replace(" "+b[i]+" ",
" ");e.className=c.trim(j)}else e.className=""}return this},toggleClass:function(a,b){var d=typeof a,f=typeof b==="boolean";if(c.isFunction(a))return this.each(function(e){var j=c(this);j.toggleClass(a.call(this,e,j.attr("class"),b),b)});return this.each(function(){if(d==="string")for(var e,j=0,i=c(this),o=b,k=a.split(ca);e=k[j++];){o=f?o:!i.hasClass(e);i[o?"addClass":"removeClass"](e)}else if(d==="undefined"||d==="boolean"){this.className&&c.data(this,"__className__",this.className);this.className=
this.className||a===false?"":c.data(this,"__className__")||""}})},hasClass:function(a){a=" "+a+" ";for(var b=0,d=this.length;b<d;b++)if((" "+this[b].className+" ").replace(Aa," ").indexOf(a)>-1)return true;return false},val:function(a){if(a===w){var b=this[0];if(b){if(c.nodeName(b,"option"))return(b.attributes.value||{}).specified?b.value:b.text;if(c.nodeName(b,"select")){var d=b.selectedIndex,f=[],e=b.options;b=b.type==="select-one";if(d<0)return null;var j=b?d:0;for(d=b?d+1:e.length;j<d;j++){var i=
e[j];if(i.selected){a=c(i).val();if(b)return a;f.push(a)}}return f}if(Ba.test(b.type)&&!c.support.checkOn)return b.getAttribute("value")===null?"on":b.value;return(b.value||"").replace(Za,"")}return w}var o=c.isFunction(a);return this.each(function(k){var n=c(this),r=a;if(this.nodeType===1){if(o)r=a.call(this,k,n.val());if(typeof r==="number")r+="";if(c.isArray(r)&&Ba.test(this.type))this.checked=c.inArray(n.val(),r)>=0;else if(c.nodeName(this,"select")){var u=c.makeArray(r);c("option",this).each(function(){this.selected=
c.inArray(c(this).val(),u)>=0});if(!u.length)this.selectedIndex=-1}else this.value=r}})}});c.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(a,b,d,f){if(!a||a.nodeType===3||a.nodeType===8)return w;if(f&&b in c.attrFn)return c(a)[b](d);f=a.nodeType!==1||!c.isXMLDoc(a);var e=d!==w;b=f&&c.props[b]||b;if(a.nodeType===1){var j=$a.test(b);if(b in a&&f&&!j){if(e){b==="type"&&ab.test(a.nodeName)&&a.parentNode&&c.error("type property can't be changed");
a[b]=d}if(c.nodeName(a,"form")&&a.getAttributeNode(b))return a.getAttributeNode(b).nodeValue;if(b==="tabIndex")return(b=a.getAttributeNode("tabIndex"))&&b.specified?b.value:bb.test(a.nodeName)||cb.test(a.nodeName)&&a.href?0:w;return a[b]}if(!c.support.style&&f&&b==="style"){if(e)a.style.cssText=""+d;return a.style.cssText}e&&a.setAttribute(b,""+d);a=!c.support.hrefNormalized&&f&&j?a.getAttribute(b,2):a.getAttribute(b);return a===null?w:a}return c.style(a,b,d)}});var O=/\.(.*)$/,db=function(a){return a.replace(/[^\w\s\.\|`]/g,
function(b){return"\\"+b})};c.event={add:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){if(a.setInterval&&a!==A&&!a.frameElement)a=A;var e,j;if(d.handler){e=d;d=e.handler}if(!d.guid)d.guid=c.guid++;if(j=c.data(a)){var i=j.events=j.events||{},o=j.handle;if(!o)j.handle=o=function(){return typeof c!=="undefined"&&!c.event.triggered?c.event.handle.apply(o.elem,arguments):w};o.elem=a;b=b.split(" ");for(var k,n=0,r;k=b[n++];){j=e?c.extend({},e):{handler:d,data:f};if(k.indexOf(".")>-1){r=k.split(".");
k=r.shift();j.namespace=r.slice(0).sort().join(".")}else{r=[];j.namespace=""}j.type=k;j.guid=d.guid;var u=i[k],z=c.event.special[k]||{};if(!u){u=i[k]=[];if(!z.setup||z.setup.call(a,f,r,o)===false)if(a.addEventListener)a.addEventListener(k,o,false);else a.attachEvent&&a.attachEvent("on"+k,o)}if(z.add){z.add.call(a,j);if(!j.handler.guid)j.handler.guid=d.guid}u.push(j);c.event.global[k]=true}a=null}}},global:{},remove:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){var e,j=0,i,o,k,n,r,u,z=c.data(a),
C=z&&z.events;if(z&&C){if(b&&b.type){d=b.handler;b=b.type}if(!b||typeof b==="string"&&b.charAt(0)==="."){b=b||"";for(e in C)c.event.remove(a,e+b)}else{for(b=b.split(" ");e=b[j++];){n=e;i=e.indexOf(".")<0;o=[];if(!i){o=e.split(".");e=o.shift();k=new RegExp("(^|\\.)"+c.map(o.slice(0).sort(),db).join("\\.(?:.*\\.)?")+"(\\.|$)")}if(r=C[e])if(d){n=c.event.special[e]||{};for(B=f||0;B<r.length;B++){u=r[B];if(d.guid===u.guid){if(i||k.test(u.namespace)){f==null&&r.splice(B--,1);n.remove&&n.remove.call(a,u)}if(f!=
null)break}}if(r.length===0||f!=null&&r.length===1){if(!n.teardown||n.teardown.call(a,o)===false)Ca(a,e,z.handle);delete C[e]}}else for(var B=0;B<r.length;B++){u=r[B];if(i||k.test(u.namespace)){c.event.remove(a,n,u.handler,B);r.splice(B--,1)}}}if(c.isEmptyObject(C)){if(b=z.handle)b.elem=null;delete z.events;delete z.handle;c.isEmptyObject(z)&&c.removeData(a)}}}}},trigger:function(a,b,d,f){var e=a.type||a;if(!f){a=typeof a==="object"?a[G]?a:c.extend(c.Event(e),a):c.Event(e);if(e.indexOf("!")>=0){a.type=
e=e.slice(0,-1);a.exclusive=true}if(!d){a.stopPropagation();c.event.global[e]&&c.each(c.cache,function(){this.events&&this.events[e]&&c.event.trigger(a,b,this.handle.elem)})}if(!d||d.nodeType===3||d.nodeType===8)return w;a.result=w;a.target=d;b=c.makeArray(b);b.unshift(a)}a.currentTarget=d;(f=c.data(d,"handle"))&&f.apply(d,b);f=d.parentNode||d.ownerDocument;try{if(!(d&&d.nodeName&&c.noData[d.nodeName.toLowerCase()]))if(d["on"+e]&&d["on"+e].apply(d,b)===false)a.result=false}catch(j){}if(!a.isPropagationStopped()&&
f)c.event.trigger(a,b,f,true);else if(!a.isDefaultPrevented()){f=a.target;var i,o=c.nodeName(f,"a")&&e==="click",k=c.event.special[e]||{};if((!k._default||k._default.call(d,a)===false)&&!o&&!(f&&f.nodeName&&c.noData[f.nodeName.toLowerCase()])){try{if(f[e]){if(i=f["on"+e])f["on"+e]=null;c.event.triggered=true;f[e]()}}catch(n){}if(i)f["on"+e]=i;c.event.triggered=false}}},handle:function(a){var b,d,f,e;a=arguments[0]=c.event.fix(a||A.event);a.currentTarget=this;b=a.type.indexOf(".")<0&&!a.exclusive;
if(!b){d=a.type.split(".");a.type=d.shift();f=new RegExp("(^|\\.)"+d.slice(0).sort().join("\\.(?:.*\\.)?")+"(\\.|$)")}e=c.data(this,"events");d=e[a.type];if(e&&d){d=d.slice(0);e=0;for(var j=d.length;e<j;e++){var i=d[e];if(b||f.test(i.namespace)){a.handler=i.handler;a.data=i.data;a.handleObj=i;i=i.handler.apply(this,arguments);if(i!==w){a.result=i;if(i===false){a.preventDefault();a.stopPropagation()}}if(a.isImmediatePropagationStopped())break}}}return a.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
fix:function(a){if(a[G])return a;var b=a;a=c.Event(b);for(var d=this.props.length,f;d;){f=this.props[--d];a[f]=b[f]}if(!a.target)a.target=a.srcElement||s;if(a.target.nodeType===3)a.target=a.target.parentNode;if(!a.relatedTarget&&a.fromElement)a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;if(a.pageX==null&&a.clientX!=null){b=s.documentElement;d=s.body;a.pageX=a.clientX+(b&&b.scrollLeft||d&&d.scrollLeft||0)-(b&&b.clientLeft||d&&d.clientLeft||0);a.pageY=a.clientY+(b&&b.scrollTop||
d&&d.scrollTop||0)-(b&&b.clientTop||d&&d.clientTop||0)}if(!a.which&&(a.charCode||a.charCode===0?a.charCode:a.keyCode))a.which=a.charCode||a.keyCode;if(!a.metaKey&&a.ctrlKey)a.metaKey=a.ctrlKey;if(!a.which&&a.button!==w)a.which=a.button&1?1:a.button&2?3:a.button&4?2:0;return a},guid:1E8,proxy:c.proxy,special:{ready:{setup:c.bindReady,teardown:c.noop},live:{add:function(a){c.event.add(this,a.origType,c.extend({},a,{handler:oa}))},remove:function(a){var b=true,d=a.origType.replace(O,"");c.each(c.data(this,
"events").live||[],function(){if(d===this.origType.replace(O,""))return b=false});b&&c.event.remove(this,a.origType,oa)}},beforeunload:{setup:function(a,b,d){if(this.setInterval)this.onbeforeunload=d;return false},teardown:function(a,b){if(this.onbeforeunload===b)this.onbeforeunload=null}}}};var Ca=s.removeEventListener?function(a,b,d){a.removeEventListener(b,d,false)}:function(a,b,d){a.detachEvent("on"+b,d)};c.Event=function(a){if(!this.preventDefault)return new c.Event(a);if(a&&a.type){this.originalEvent=
a;this.type=a.type}else this.type=a;this.timeStamp=J();this[G]=true};c.Event.prototype={preventDefault:function(){this.isDefaultPrevented=Z;var a=this.originalEvent;if(a){a.preventDefault&&a.preventDefault();a.returnValue=false}},stopPropagation:function(){this.isPropagationStopped=Z;var a=this.originalEvent;if(a){a.stopPropagation&&a.stopPropagation();a.cancelBubble=true}},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Z;this.stopPropagation()},isDefaultPrevented:Y,isPropagationStopped:Y,
isImmediatePropagationStopped:Y};var Da=function(a){var b=a.relatedTarget;try{for(;b&&b!==this;)b=b.parentNode;if(b!==this){a.type=a.data;c.event.handle.apply(this,arguments)}}catch(d){}},Ea=function(a){a.type=a.data;c.event.handle.apply(this,arguments)};c.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){c.event.special[a]={setup:function(d){c.event.add(this,b,d&&d.selector?Ea:Da,a)},teardown:function(d){c.event.remove(this,b,d&&d.selector?Ea:Da)}}});if(!c.support.submitBubbles)c.event.special.submit=
{setup:function(){if(this.nodeName.toLowerCase()!=="form"){c.event.add(this,"click.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="submit"||d==="image")&&c(b).closest("form").length)return na("submit",this,arguments)});c.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="text"||d==="password")&&c(b).closest("form").length&&a.keyCode===13)return na("submit",this,arguments)})}else return false},teardown:function(){c.event.remove(this,".specialSubmit")}};
if(!c.support.changeBubbles){var da=/textarea|input|select/i,ea,Fa=function(a){var b=a.type,d=a.value;if(b==="radio"||b==="checkbox")d=a.checked;else if(b==="select-multiple")d=a.selectedIndex>-1?c.map(a.options,function(f){return f.selected}).join("-"):"";else if(a.nodeName.toLowerCase()==="select")d=a.selectedIndex;return d},fa=function(a,b){var d=a.target,f,e;if(!(!da.test(d.nodeName)||d.readOnly)){f=c.data(d,"_change_data");e=Fa(d);if(a.type!=="focusout"||d.type!=="radio")c.data(d,"_change_data",
e);if(!(f===w||e===f))if(f!=null||e){a.type="change";return c.event.trigger(a,b,d)}}};c.event.special.change={filters:{focusout:fa,click:function(a){var b=a.target,d=b.type;if(d==="radio"||d==="checkbox"||b.nodeName.toLowerCase()==="select")return fa.call(this,a)},keydown:function(a){var b=a.target,d=b.type;if(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(d==="checkbox"||d==="radio")||d==="select-multiple")return fa.call(this,a)},beforeactivate:function(a){a=a.target;c.data(a,
"_change_data",Fa(a))}},setup:function(){if(this.type==="file")return false;for(var a in ea)c.event.add(this,a+".specialChange",ea[a]);return da.test(this.nodeName)},teardown:function(){c.event.remove(this,".specialChange");return da.test(this.nodeName)}};ea=c.event.special.change.filters}s.addEventListener&&c.each({focus:"focusin",blur:"focusout"},function(a,b){function d(f){f=c.event.fix(f);f.type=b;return c.event.handle.call(this,f)}c.event.special[b]={setup:function(){this.addEventListener(a,
d,true)},teardown:function(){this.removeEventListener(a,d,true)}}});c.each(["bind","one"],function(a,b){c.fn[b]=function(d,f,e){if(typeof d==="object"){for(var j in d)this[b](j,f,d[j],e);return this}if(c.isFunction(f)){e=f;f=w}var i=b==="one"?c.proxy(e,function(k){c(this).unbind(k,i);return e.apply(this,arguments)}):e;if(d==="unload"&&b!=="one")this.one(d,f,e);else{j=0;for(var o=this.length;j<o;j++)c.event.add(this[j],d,i,f)}return this}});c.fn.extend({unbind:function(a,b){if(typeof a==="object"&&
!a.preventDefault)for(var d in a)this.unbind(d,a[d]);else{d=0;for(var f=this.length;d<f;d++)c.event.remove(this[d],a,b)}return this},delegate:function(a,b,d,f){return this.live(b,d,f,a)},undelegate:function(a,b,d){return arguments.length===0?this.unbind("live"):this.die(b,null,d,a)},trigger:function(a,b){return this.each(function(){c.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){a=c.Event(a);a.preventDefault();a.stopPropagation();c.event.trigger(a,b,this[0]);return a.result}},
toggle:function(a){for(var b=arguments,d=1;d<b.length;)c.proxy(a,b[d++]);return this.click(c.proxy(a,function(f){var e=(c.data(this,"lastToggle"+a.guid)||0)%d;c.data(this,"lastToggle"+a.guid,e+1);f.preventDefault();return b[e].apply(this,arguments)||false}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Ga={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};c.each(["live","die"],function(a,b){c.fn[b]=function(d,f,e,j){var i,o=0,k,n,r=j||this.selector,
u=j?this:c(this.context);if(c.isFunction(f)){e=f;f=w}for(d=(d||"").split(" ");(i=d[o++])!=null;){j=O.exec(i);k="";if(j){k=j[0];i=i.replace(O,"")}if(i==="hover")d.push("mouseenter"+k,"mouseleave"+k);else{n=i;if(i==="focus"||i==="blur"){d.push(Ga[i]+k);i+=k}else i=(Ga[i]||i)+k;b==="live"?u.each(function(){c.event.add(this,pa(i,r),{data:f,selector:r,handler:e,origType:i,origHandler:e,preType:n})}):u.unbind(pa(i,r),e)}}return this}});c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),
function(a,b){c.fn[b]=function(d){return d?this.bind(b,d):this.trigger(b)};if(c.attrFn)c.attrFn[b]=true});A.attachEvent&&!A.addEventListener&&A.attachEvent("onunload",function(){for(var a in c.cache)if(c.cache[a].handle)try{c.event.remove(c.cache[a].handle.elem)}catch(b){}});(function(){function a(g){for(var h="",l,m=0;g[m];m++){l=g[m];if(l.nodeType===3||l.nodeType===4)h+=l.nodeValue;else if(l.nodeType!==8)h+=a(l.childNodes)}return h}function b(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];
if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1&&!p){t.sizcache=l;t.sizset=q}if(t.nodeName.toLowerCase()===h){y=t;break}t=t[g]}m[q]=y}}}function d(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1){if(!p){t.sizcache=l;t.sizset=q}if(typeof h!=="string"){if(t===h){y=true;break}}else if(k.filter(h,[t]).length>0){y=t;break}}t=t[g]}m[q]=y}}}var f=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
e=0,j=Object.prototype.toString,i=false,o=true;[0,0].sort(function(){o=false;return 0});var k=function(g,h,l,m){l=l||[];var q=h=h||s;if(h.nodeType!==1&&h.nodeType!==9)return[];if(!g||typeof g!=="string")return l;for(var p=[],v,t,y,S,H=true,M=x(h),I=g;(f.exec(""),v=f.exec(I))!==null;){I=v[3];p.push(v[1]);if(v[2]){S=v[3];break}}if(p.length>1&&r.exec(g))if(p.length===2&&n.relative[p[0]])t=ga(p[0]+p[1],h);else for(t=n.relative[p[0]]?[h]:k(p.shift(),h);p.length;){g=p.shift();if(n.relative[g])g+=p.shift();
t=ga(g,t)}else{if(!m&&p.length>1&&h.nodeType===9&&!M&&n.match.ID.test(p[0])&&!n.match.ID.test(p[p.length-1])){v=k.find(p.shift(),h,M);h=v.expr?k.filter(v.expr,v.set)[0]:v.set[0]}if(h){v=m?{expr:p.pop(),set:z(m)}:k.find(p.pop(),p.length===1&&(p[0]==="~"||p[0]==="+")&&h.parentNode?h.parentNode:h,M);t=v.expr?k.filter(v.expr,v.set):v.set;if(p.length>0)y=z(t);else H=false;for(;p.length;){var D=p.pop();v=D;if(n.relative[D])v=p.pop();else D="";if(v==null)v=h;n.relative[D](y,v,M)}}else y=[]}y||(y=t);y||k.error(D||
g);if(j.call(y)==="[object Array]")if(H)if(h&&h.nodeType===1)for(g=0;y[g]!=null;g++){if(y[g]&&(y[g]===true||y[g].nodeType===1&&E(h,y[g])))l.push(t[g])}else for(g=0;y[g]!=null;g++)y[g]&&y[g].nodeType===1&&l.push(t[g]);else l.push.apply(l,y);else z(y,l);if(S){k(S,q,l,m);k.uniqueSort(l)}return l};k.uniqueSort=function(g){if(B){i=o;g.sort(B);if(i)for(var h=1;h<g.length;h++)g[h]===g[h-1]&&g.splice(h--,1)}return g};k.matches=function(g,h){return k(g,null,null,h)};k.find=function(g,h,l){var m,q;if(!g)return[];
for(var p=0,v=n.order.length;p<v;p++){var t=n.order[p];if(q=n.leftMatch[t].exec(g)){var y=q[1];q.splice(1,1);if(y.substr(y.length-1)!=="\\"){q[1]=(q[1]||"").replace(/\\/g,"");m=n.find[t](q,h,l);if(m!=null){g=g.replace(n.match[t],"");break}}}}m||(m=h.getElementsByTagName("*"));return{set:m,expr:g}};k.filter=function(g,h,l,m){for(var q=g,p=[],v=h,t,y,S=h&&h[0]&&x(h[0]);g&&h.length;){for(var H in n.filter)if((t=n.leftMatch[H].exec(g))!=null&&t[2]){var M=n.filter[H],I,D;D=t[1];y=false;t.splice(1,1);if(D.substr(D.length-
1)!=="\\"){if(v===p)p=[];if(n.preFilter[H])if(t=n.preFilter[H](t,v,l,p,m,S)){if(t===true)continue}else y=I=true;if(t)for(var U=0;(D=v[U])!=null;U++)if(D){I=M(D,t,U,v);var Ha=m^!!I;if(l&&I!=null)if(Ha)y=true;else v[U]=false;else if(Ha){p.push(D);y=true}}if(I!==w){l||(v=p);g=g.replace(n.match[H],"");if(!y)return[];break}}}if(g===q)if(y==null)k.error(g);else break;q=g}return v};k.error=function(g){throw"Syntax error, unrecognized expression: "+g;};var n=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(g){return g.getAttribute("href")}},
relative:{"+":function(g,h){var l=typeof h==="string",m=l&&!/\W/.test(h);l=l&&!m;if(m)h=h.toLowerCase();m=0;for(var q=g.length,p;m<q;m++)if(p=g[m]){for(;(p=p.previousSibling)&&p.nodeType!==1;);g[m]=l||p&&p.nodeName.toLowerCase()===h?p||false:p===h}l&&k.filter(h,g,true)},">":function(g,h){var l=typeof h==="string";if(l&&!/\W/.test(h)){h=h.toLowerCase();for(var m=0,q=g.length;m<q;m++){var p=g[m];if(p){l=p.parentNode;g[m]=l.nodeName.toLowerCase()===h?l:false}}}else{m=0;for(q=g.length;m<q;m++)if(p=g[m])g[m]=
l?p.parentNode:p.parentNode===h;l&&k.filter(h,g,true)}},"":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("parentNode",h,m,g,p,l)},"~":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("previousSibling",h,m,g,p,l)}},find:{ID:function(g,h,l){if(typeof h.getElementById!=="undefined"&&!l)return(g=h.getElementById(g[1]))?[g]:[]},NAME:function(g,h){if(typeof h.getElementsByName!=="undefined"){var l=[];
h=h.getElementsByName(g[1]);for(var m=0,q=h.length;m<q;m++)h[m].getAttribute("name")===g[1]&&l.push(h[m]);return l.length===0?null:l}},TAG:function(g,h){return h.getElementsByTagName(g[1])}},preFilter:{CLASS:function(g,h,l,m,q,p){g=" "+g[1].replace(/\\/g,"")+" ";if(p)return g;p=0;for(var v;(v=h[p])!=null;p++)if(v)if(q^(v.className&&(" "+v.className+" ").replace(/[\t\n]/g," ").indexOf(g)>=0))l||m.push(v);else if(l)h[p]=false;return false},ID:function(g){return g[1].replace(/\\/g,"")},TAG:function(g){return g[1].toLowerCase()},
CHILD:function(g){if(g[1]==="nth"){var h=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(g[2]==="even"&&"2n"||g[2]==="odd"&&"2n+1"||!/\D/.test(g[2])&&"0n+"+g[2]||g[2]);g[2]=h[1]+(h[2]||1)-0;g[3]=h[3]-0}g[0]=e++;return g},ATTR:function(g,h,l,m,q,p){h=g[1].replace(/\\/g,"");if(!p&&n.attrMap[h])g[1]=n.attrMap[h];if(g[2]==="~=")g[4]=" "+g[4]+" ";return g},PSEUDO:function(g,h,l,m,q){if(g[1]==="not")if((f.exec(g[3])||"").length>1||/^\w/.test(g[3]))g[3]=k(g[3],null,null,h);else{g=k.filter(g[3],h,l,true^q);l||m.push.apply(m,
g);return false}else if(n.match.POS.test(g[0])||n.match.CHILD.test(g[0]))return true;return g},POS:function(g){g.unshift(true);return g}},filters:{enabled:function(g){return g.disabled===false&&g.type!=="hidden"},disabled:function(g){return g.disabled===true},checked:function(g){return g.checked===true},selected:function(g){return g.selected===true},parent:function(g){return!!g.firstChild},empty:function(g){return!g.firstChild},has:function(g,h,l){return!!k(l[3],g).length},header:function(g){return/h\d/i.test(g.nodeName)},
text:function(g){return"text"===g.type},radio:function(g){return"radio"===g.type},checkbox:function(g){return"checkbox"===g.type},file:function(g){return"file"===g.type},password:function(g){return"password"===g.type},submit:function(g){return"submit"===g.type},image:function(g){return"image"===g.type},reset:function(g){return"reset"===g.type},button:function(g){return"button"===g.type||g.nodeName.toLowerCase()==="button"},input:function(g){return/input|select|textarea|button/i.test(g.nodeName)}},
setFilters:{first:function(g,h){return h===0},last:function(g,h,l,m){return h===m.length-1},even:function(g,h){return h%2===0},odd:function(g,h){return h%2===1},lt:function(g,h,l){return h<l[3]-0},gt:function(g,h,l){return h>l[3]-0},nth:function(g,h,l){return l[3]-0===h},eq:function(g,h,l){return l[3]-0===h}},filter:{PSEUDO:function(g,h,l,m){var q=h[1],p=n.filters[q];if(p)return p(g,l,h,m);else if(q==="contains")return(g.textContent||g.innerText||a([g])||"").indexOf(h[3])>=0;else if(q==="not"){h=
h[3];l=0;for(m=h.length;l<m;l++)if(h[l]===g)return false;return true}else k.error("Syntax error, unrecognized expression: "+q)},CHILD:function(g,h){var l=h[1],m=g;switch(l){case "only":case "first":for(;m=m.previousSibling;)if(m.nodeType===1)return false;if(l==="first")return true;m=g;case "last":for(;m=m.nextSibling;)if(m.nodeType===1)return false;return true;case "nth":l=h[2];var q=h[3];if(l===1&&q===0)return true;h=h[0];var p=g.parentNode;if(p&&(p.sizcache!==h||!g.nodeIndex)){var v=0;for(m=p.firstChild;m;m=
m.nextSibling)if(m.nodeType===1)m.nodeIndex=++v;p.sizcache=h}g=g.nodeIndex-q;return l===0?g===0:g%l===0&&g/l>=0}},ID:function(g,h){return g.nodeType===1&&g.getAttribute("id")===h},TAG:function(g,h){return h==="*"&&g.nodeType===1||g.nodeName.toLowerCase()===h},CLASS:function(g,h){return(" "+(g.className||g.getAttribute("class"))+" ").indexOf(h)>-1},ATTR:function(g,h){var l=h[1];g=n.attrHandle[l]?n.attrHandle[l](g):g[l]!=null?g[l]:g.getAttribute(l);l=g+"";var m=h[2];h=h[4];return g==null?m==="!=":m===
"="?l===h:m==="*="?l.indexOf(h)>=0:m==="~="?(" "+l+" ").indexOf(h)>=0:!h?l&&g!==false:m==="!="?l!==h:m==="^="?l.indexOf(h)===0:m==="$="?l.substr(l.length-h.length)===h:m==="|="?l===h||l.substr(0,h.length+1)===h+"-":false},POS:function(g,h,l,m){var q=n.setFilters[h[2]];if(q)return q(g,l,h,m)}}},r=n.match.POS;for(var u in n.match){n.match[u]=new RegExp(n.match[u].source+/(?![^\[]*\])(?![^\(]*\))/.source);n.leftMatch[u]=new RegExp(/(^(?:.|\r|\n)*?)/.source+n.match[u].source.replace(/\\(\d+)/g,function(g,
h){return"\\"+(h-0+1)}))}var z=function(g,h){g=Array.prototype.slice.call(g,0);if(h){h.push.apply(h,g);return h}return g};try{Array.prototype.slice.call(s.documentElement.childNodes,0)}catch(C){z=function(g,h){h=h||[];if(j.call(g)==="[object Array]")Array.prototype.push.apply(h,g);else if(typeof g.length==="number")for(var l=0,m=g.length;l<m;l++)h.push(g[l]);else for(l=0;g[l];l++)h.push(g[l]);return h}}var B;if(s.documentElement.compareDocumentPosition)B=function(g,h){if(!g.compareDocumentPosition||
!h.compareDocumentPosition){if(g==h)i=true;return g.compareDocumentPosition?-1:1}g=g.compareDocumentPosition(h)&4?-1:g===h?0:1;if(g===0)i=true;return g};else if("sourceIndex"in s.documentElement)B=function(g,h){if(!g.sourceIndex||!h.sourceIndex){if(g==h)i=true;return g.sourceIndex?-1:1}g=g.sourceIndex-h.sourceIndex;if(g===0)i=true;return g};else if(s.createRange)B=function(g,h){if(!g.ownerDocument||!h.ownerDocument){if(g==h)i=true;return g.ownerDocument?-1:1}var l=g.ownerDocument.createRange(),m=
h.ownerDocument.createRange();l.setStart(g,0);l.setEnd(g,0);m.setStart(h,0);m.setEnd(h,0);g=l.compareBoundaryPoints(Range.START_TO_END,m);if(g===0)i=true;return g};(function(){var g=s.createElement("div"),h="script"+(new Date).getTime();g.innerHTML="<a name='"+h+"'/>";var l=s.documentElement;l.insertBefore(g,l.firstChild);if(s.getElementById(h)){n.find.ID=function(m,q,p){if(typeof q.getElementById!=="undefined"&&!p)return(q=q.getElementById(m[1]))?q.id===m[1]||typeof q.getAttributeNode!=="undefined"&&
q.getAttributeNode("id").nodeValue===m[1]?[q]:w:[]};n.filter.ID=function(m,q){var p=typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id");return m.nodeType===1&&p&&p.nodeValue===q}}l.removeChild(g);l=g=null})();(function(){var g=s.createElement("div");g.appendChild(s.createComment(""));if(g.getElementsByTagName("*").length>0)n.find.TAG=function(h,l){l=l.getElementsByTagName(h[1]);if(h[1]==="*"){h=[];for(var m=0;l[m];m++)l[m].nodeType===1&&h.push(l[m]);l=h}return l};g.innerHTML="<a href='#'></a>";
if(g.firstChild&&typeof g.firstChild.getAttribute!=="undefined"&&g.firstChild.getAttribute("href")!=="#")n.attrHandle.href=function(h){return h.getAttribute("href",2)};g=null})();s.querySelectorAll&&function(){var g=k,h=s.createElement("div");h.innerHTML="<p class='TEST'></p>";if(!(h.querySelectorAll&&h.querySelectorAll(".TEST").length===0)){k=function(m,q,p,v){q=q||s;if(!v&&q.nodeType===9&&!x(q))try{return z(q.querySelectorAll(m),p)}catch(t){}return g(m,q,p,v)};for(var l in g)k[l]=g[l];h=null}}();
(function(){var g=s.createElement("div");g.innerHTML="<div class='test e'></div><div class='test'></div>";if(!(!g.getElementsByClassName||g.getElementsByClassName("e").length===0)){g.lastChild.className="e";if(g.getElementsByClassName("e").length!==1){n.order.splice(1,0,"CLASS");n.find.CLASS=function(h,l,m){if(typeof l.getElementsByClassName!=="undefined"&&!m)return l.getElementsByClassName(h[1])};g=null}}})();var E=s.compareDocumentPosition?function(g,h){return!!(g.compareDocumentPosition(h)&16)}:
function(g,h){return g!==h&&(g.contains?g.contains(h):true)},x=function(g){return(g=(g?g.ownerDocument||g:0).documentElement)?g.nodeName!=="HTML":false},ga=function(g,h){var l=[],m="",q;for(h=h.nodeType?[h]:h;q=n.match.PSEUDO.exec(g);){m+=q[0];g=g.replace(n.match.PSEUDO,"")}g=n.relative[g]?g+"*":g;q=0;for(var p=h.length;q<p;q++)k(g,h[q],l);return k.filter(m,l)};c.find=k;c.expr=k.selectors;c.expr[":"]=c.expr.filters;c.unique=k.uniqueSort;c.text=a;c.isXMLDoc=x;c.contains=E})();var eb=/Until$/,fb=/^(?:parents|prevUntil|prevAll)/,
gb=/,/;R=Array.prototype.slice;var Ia=function(a,b,d){if(c.isFunction(b))return c.grep(a,function(e,j){return!!b.call(e,j,e)===d});else if(b.nodeType)return c.grep(a,function(e){return e===b===d});else if(typeof b==="string"){var f=c.grep(a,function(e){return e.nodeType===1});if(Ua.test(b))return c.filter(b,f,!d);else b=c.filter(b,f)}return c.grep(a,function(e){return c.inArray(e,b)>=0===d})};c.fn.extend({find:function(a){for(var b=this.pushStack("","find",a),d=0,f=0,e=this.length;f<e;f++){d=b.length;
c.find(a,this[f],b);if(f>0)for(var j=d;j<b.length;j++)for(var i=0;i<d;i++)if(b[i]===b[j]){b.splice(j--,1);break}}return b},has:function(a){var b=c(a);return this.filter(function(){for(var d=0,f=b.length;d<f;d++)if(c.contains(this,b[d]))return true})},not:function(a){return this.pushStack(Ia(this,a,false),"not",a)},filter:function(a){return this.pushStack(Ia(this,a,true),"filter",a)},is:function(a){return!!a&&c.filter(a,this).length>0},closest:function(a,b){if(c.isArray(a)){var d=[],f=this[0],e,j=
{},i;if(f&&a.length){e=0;for(var o=a.length;e<o;e++){i=a[e];j[i]||(j[i]=c.expr.match.POS.test(i)?c(i,b||this.context):i)}for(;f&&f.ownerDocument&&f!==b;){for(i in j){e=j[i];if(e.jquery?e.index(f)>-1:c(f).is(e)){d.push({selector:i,elem:f});delete j[i]}}f=f.parentNode}}return d}var k=c.expr.match.POS.test(a)?c(a,b||this.context):null;return this.map(function(n,r){for(;r&&r.ownerDocument&&r!==b;){if(k?k.index(r)>-1:c(r).is(a))return r;r=r.parentNode}return null})},index:function(a){if(!a||typeof a===
"string")return c.inArray(this[0],a?c(a):this.parent().children());return c.inArray(a.jquery?a[0]:a,this)},add:function(a,b){a=typeof a==="string"?c(a,b||this.context):c.makeArray(a);b=c.merge(this.get(),a);return this.pushStack(qa(a[0])||qa(b[0])?b:c.unique(b))},andSelf:function(){return this.add(this.prevObject)}});c.each({parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},parents:function(a){return c.dir(a,"parentNode")},parentsUntil:function(a,b,d){return c.dir(a,"parentNode",
d)},next:function(a){return c.nth(a,2,"nextSibling")},prev:function(a){return c.nth(a,2,"previousSibling")},nextAll:function(a){return c.dir(a,"nextSibling")},prevAll:function(a){return c.dir(a,"previousSibling")},nextUntil:function(a,b,d){return c.dir(a,"nextSibling",d)},prevUntil:function(a,b,d){return c.dir(a,"previousSibling",d)},siblings:function(a){return c.sibling(a.parentNode.firstChild,a)},children:function(a){return c.sibling(a.firstChild)},contents:function(a){return c.nodeName(a,"iframe")?
a.contentDocument||a.contentWindow.document:c.makeArray(a.childNodes)}},function(a,b){c.fn[a]=function(d,f){var e=c.map(this,b,d);eb.test(a)||(f=d);if(f&&typeof f==="string")e=c.filter(f,e);e=this.length>1?c.unique(e):e;if((this.length>1||gb.test(f))&&fb.test(a))e=e.reverse();return this.pushStack(e,a,R.call(arguments).join(","))}});c.extend({filter:function(a,b,d){if(d)a=":not("+a+")";return c.find.matches(a,b)},dir:function(a,b,d){var f=[];for(a=a[b];a&&a.nodeType!==9&&(d===w||a.nodeType!==1||!c(a).is(d));){a.nodeType===
1&&f.push(a);a=a[b]}return f},nth:function(a,b,d){b=b||1;for(var f=0;a;a=a[d])if(a.nodeType===1&&++f===b)break;return a},sibling:function(a,b){for(var d=[];a;a=a.nextSibling)a.nodeType===1&&a!==b&&d.push(a);return d}});var Ja=/ jQuery\d+="(?:\d+|null)"/g,V=/^\s+/,Ka=/(<([\w:]+)[^>]*?)\/>/g,hb=/^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,La=/<([\w:]+)/,ib=/<tbody/i,jb=/<|&#?\w+;/,ta=/<script|<object|<embed|<option|<style/i,ua=/checked\s*(?:[^=]|=\s*.checked.)/i,Ma=function(a,b,d){return hb.test(d)?
a:b+"></"+d+">"},F={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};F.optgroup=F.option;F.tbody=F.tfoot=F.colgroup=F.caption=F.thead;F.th=F.td;if(!c.support.htmlSerialize)F._default=[1,"div<div>","</div>"];c.fn.extend({text:function(a){if(c.isFunction(a))return this.each(function(b){var d=
c(this);d.text(a.call(this,b,d.text()))});if(typeof a!=="object"&&a!==w)return this.empty().append((this[0]&&this[0].ownerDocument||s).createTextNode(a));return c.text(this)},wrapAll:function(a){if(c.isFunction(a))return this.each(function(d){c(this).wrapAll(a.call(this,d))});if(this[0]){var b=c(a,this[0].ownerDocument).eq(0).clone(true);this[0].parentNode&&b.insertBefore(this[0]);b.map(function(){for(var d=this;d.firstChild&&d.firstChild.nodeType===1;)d=d.firstChild;return d}).append(this)}return this},
wrapInner:function(a){if(c.isFunction(a))return this.each(function(b){c(this).wrapInner(a.call(this,b))});return this.each(function(){var b=c(this),d=b.contents();d.length?d.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){c(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){c.nodeName(this,"body")||c(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.appendChild(a)})},
prepend:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,this)});else if(arguments.length){var a=c(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,
this.nextSibling)});else if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,c(arguments[0]).toArray());return a}},remove:function(a,b){for(var d=0,f;(f=this[d])!=null;d++)if(!a||c.filter(a,[f]).length){if(!b&&f.nodeType===1){c.cleanData(f.getElementsByTagName("*"));c.cleanData([f])}f.parentNode&&f.parentNode.removeChild(f)}return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++)for(b.nodeType===1&&c.cleanData(b.getElementsByTagName("*"));b.firstChild;)b.removeChild(b.firstChild);
return this},clone:function(a){var b=this.map(function(){if(!c.support.noCloneEvent&&!c.isXMLDoc(this)){var d=this.outerHTML,f=this.ownerDocument;if(!d){d=f.createElement("div");d.appendChild(this.cloneNode(true));d=d.innerHTML}return c.clean([d.replace(Ja,"").replace(/=([^="'>\s]+\/)>/g,'="$1">').replace(V,"")],f)[0]}else return this.cloneNode(true)});if(a===true){ra(this,b);ra(this.find("*"),b.find("*"))}return b},html:function(a){if(a===w)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(Ja,
""):null;else if(typeof a==="string"&&!ta.test(a)&&(c.support.leadingWhitespace||!V.test(a))&&!F[(La.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Ka,Ma);try{for(var b=0,d=this.length;b<d;b++)if(this[b].nodeType===1){c.cleanData(this[b].getElementsByTagName("*"));this[b].innerHTML=a}}catch(f){this.empty().append(a)}}else c.isFunction(a)?this.each(function(e){var j=c(this),i=j.html();j.empty().append(function(){return a.call(this,e,i)})}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&
this[0].parentNode){if(c.isFunction(a))return this.each(function(b){var d=c(this),f=d.html();d.replaceWith(a.call(this,b,f))});if(typeof a!=="string")a=c(a).detach();return this.each(function(){var b=this.nextSibling,d=this.parentNode;c(this).remove();b?c(b).before(a):c(d).append(a)})}else return this.pushStack(c(c.isFunction(a)?a():a),"replaceWith",a)},detach:function(a){return this.remove(a,true)},domManip:function(a,b,d){function f(u){return c.nodeName(u,"table")?u.getElementsByTagName("tbody")[0]||
u.appendChild(u.ownerDocument.createElement("tbody")):u}var e,j,i=a[0],o=[],k;if(!c.support.checkClone&&arguments.length===3&&typeof i==="string"&&ua.test(i))return this.each(function(){c(this).domManip(a,b,d,true)});if(c.isFunction(i))return this.each(function(u){var z=c(this);a[0]=i.call(this,u,b?z.html():w);z.domManip(a,b,d)});if(this[0]){e=i&&i.parentNode;e=c.support.parentNode&&e&&e.nodeType===11&&e.childNodes.length===this.length?{fragment:e}:sa(a,this,o);k=e.fragment;if(j=k.childNodes.length===
1?(k=k.firstChild):k.firstChild){b=b&&c.nodeName(j,"tr");for(var n=0,r=this.length;n<r;n++)d.call(b?f(this[n],j):this[n],n>0||e.cacheable||this.length>1?k.cloneNode(true):k)}o.length&&c.each(o,Qa)}return this}});c.fragments={};c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){c.fn[a]=function(d){var f=[];d=c(d);var e=this.length===1&&this[0].parentNode;if(e&&e.nodeType===11&&e.childNodes.length===1&&d.length===1){d[b](this[0]);
return this}else{e=0;for(var j=d.length;e<j;e++){var i=(e>0?this.clone(true):this).get();c.fn[b].apply(c(d[e]),i);f=f.concat(i)}return this.pushStack(f,a,d.selector)}}});c.extend({clean:function(a,b,d,f){b=b||s;if(typeof b.createElement==="undefined")b=b.ownerDocument||b[0]&&b[0].ownerDocument||s;for(var e=[],j=0,i;(i=a[j])!=null;j++){if(typeof i==="number")i+="";if(i){if(typeof i==="string"&&!jb.test(i))i=b.createTextNode(i);else if(typeof i==="string"){i=i.replace(Ka,Ma);var o=(La.exec(i)||["",
""])[1].toLowerCase(),k=F[o]||F._default,n=k[0],r=b.createElement("div");for(r.innerHTML=k[1]+i+k[2];n--;)r=r.lastChild;if(!c.support.tbody){n=ib.test(i);o=o==="table"&&!n?r.firstChild&&r.firstChild.childNodes:k[1]==="<table>"&&!n?r.childNodes:[];for(k=o.length-1;k>=0;--k)c.nodeName(o[k],"tbody")&&!o[k].childNodes.length&&o[k].parentNode.removeChild(o[k])}!c.support.leadingWhitespace&&V.test(i)&&r.insertBefore(b.createTextNode(V.exec(i)[0]),r.firstChild);i=r.childNodes}if(i.nodeType)e.push(i);else e=
c.merge(e,i)}}if(d)for(j=0;e[j];j++)if(f&&c.nodeName(e[j],"script")&&(!e[j].type||e[j].type.toLowerCase()==="text/javascript"))f.push(e[j].parentNode?e[j].parentNode.removeChild(e[j]):e[j]);else{e[j].nodeType===1&&e.splice.apply(e,[j+1,0].concat(c.makeArray(e[j].getElementsByTagName("script"))));d.appendChild(e[j])}return e},cleanData:function(a){for(var b,d,f=c.cache,e=c.event.special,j=c.support.deleteExpando,i=0,o;(o=a[i])!=null;i++)if(d=o[c.expando]){b=f[d];if(b.events)for(var k in b.events)e[k]?
c.event.remove(o,k):Ca(o,k,b.handle);if(j)delete o[c.expando];else o.removeAttribute&&o.removeAttribute(c.expando);delete f[d]}}});var kb=/z-?index|font-?weight|opacity|zoom|line-?height/i,Na=/alpha\([^)]*\)/,Oa=/opacity=([^)]*)/,ha=/float/i,ia=/-([a-z])/ig,lb=/([A-Z])/g,mb=/^-?\d+(?:px)?$/i,nb=/^-?\d/,ob={position:"absolute",visibility:"hidden",display:"block"},pb=["Left","Right"],qb=["Top","Bottom"],rb=s.defaultView&&s.defaultView.getComputedStyle,Pa=c.support.cssFloat?"cssFloat":"styleFloat",ja=
function(a,b){return b.toUpperCase()};c.fn.css=function(a,b){return X(this,a,b,true,function(d,f,e){if(e===w)return c.curCSS(d,f);if(typeof e==="number"&&!kb.test(f))e+="px";c.style(d,f,e)})};c.extend({style:function(a,b,d){if(!a||a.nodeType===3||a.nodeType===8)return w;if((b==="width"||b==="height")&&parseFloat(d)<0)d=w;var f=a.style||a,e=d!==w;if(!c.support.opacity&&b==="opacity"){if(e){f.zoom=1;b=parseInt(d,10)+""==="NaN"?"":"alpha(opacity="+d*100+")";a=f.filter||c.curCSS(a,"filter")||"";f.filter=
Na.test(a)?a.replace(Na,b):b}return f.filter&&f.filter.indexOf("opacity=")>=0?parseFloat(Oa.exec(f.filter)[1])/100+"":""}if(ha.test(b))b=Pa;b=b.replace(ia,ja);if(e)f[b]=d;return f[b]},css:function(a,b,d,f){if(b==="width"||b==="height"){var e,j=b==="width"?pb:qb;function i(){e=b==="width"?a.offsetWidth:a.offsetHeight;f!=="border"&&c.each(j,function(){f||(e-=parseFloat(c.curCSS(a,"padding"+this,true))||0);if(f==="margin")e+=parseFloat(c.curCSS(a,"margin"+this,true))||0;else e-=parseFloat(c.curCSS(a,
"border"+this+"Width",true))||0})}a.offsetWidth!==0?i():c.swap(a,ob,i);return Math.max(0,Math.round(e))}return c.curCSS(a,b,d)},curCSS:function(a,b,d){var f,e=a.style;if(!c.support.opacity&&b==="opacity"&&a.currentStyle){f=Oa.test(a.currentStyle.filter||"")?parseFloat(RegExp.$1)/100+"":"";return f===""?"1":f}if(ha.test(b))b=Pa;if(!d&&e&&e[b])f=e[b];else if(rb){if(ha.test(b))b="float";b=b.replace(lb,"-$1").toLowerCase();e=a.ownerDocument.defaultView;if(!e)return null;if(a=e.getComputedStyle(a,null))f=
a.getPropertyValue(b);if(b==="opacity"&&f==="")f="1"}else if(a.currentStyle){d=b.replace(ia,ja);f=a.currentStyle[b]||a.currentStyle[d];if(!mb.test(f)&&nb.test(f)){b=e.left;var j=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;e.left=d==="fontSize"?"1em":f||0;f=e.pixelLeft+"px";e.left=b;a.runtimeStyle.left=j}}return f},swap:function(a,b,d){var f={};for(var e in b){f[e]=a.style[e];a.style[e]=b[e]}d.call(a);for(e in b)a.style[e]=f[e]}});if(c.expr&&c.expr.filters){c.expr.filters.hidden=function(a){var b=
a.offsetWidth,d=a.offsetHeight,f=a.nodeName.toLowerCase()==="tr";return b===0&&d===0&&!f?true:b>0&&d>0&&!f?false:c.curCSS(a,"display")==="none"};c.expr.filters.visible=function(a){return!c.expr.filters.hidden(a)}}var sb=J(),tb=/<script(.|\s)*?\/script>/gi,ub=/select|textarea/i,vb=/color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,N=/=\?(&|$)/,ka=/\?/,wb=/(\?|&)_=.*?(&|$)/,xb=/^(\w+:)?\/\/([^\/?#]+)/,yb=/%20/g,zb=c.fn.load;c.fn.extend({load:function(a,b,d){if(typeof a!==
"string")return zb.call(this,a);else if(!this.length)return this;var f=a.indexOf(" ");if(f>=0){var e=a.slice(f,a.length);a=a.slice(0,f)}f="GET";if(b)if(c.isFunction(b)){d=b;b=null}else if(typeof b==="object"){b=c.param(b,c.ajaxSettings.traditional);f="POST"}var j=this;c.ajax({url:a,type:f,dataType:"html",data:b,complete:function(i,o){if(o==="success"||o==="notmodified")j.html(e?c("<div />").append(i.responseText.replace(tb,"")).find(e):i.responseText);d&&j.each(d,[i.responseText,o,i])}});return this},
serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?c.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ub.test(this.nodeName)||vb.test(this.type))}).map(function(a,b){a=c(this).val();return a==null?null:c.isArray(a)?c.map(a,function(d){return{name:b.name,value:d}}):{name:b.name,value:a}}).get()}});c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
function(a,b){c.fn[b]=function(d){return this.bind(b,d)}});c.extend({get:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b=null}return c.ajax({type:"GET",url:a,data:b,success:d,dataType:f})},getScript:function(a,b){return c.get(a,null,b,"script")},getJSON:function(a,b,d){return c.get(a,b,d,"json")},post:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b={}}return c.ajax({type:"POST",url:a,data:b,success:d,dataType:f})},ajaxSetup:function(a){c.extend(c.ajaxSettings,a)},ajaxSettings:{url:location.href,
global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:A.XMLHttpRequest&&(A.location.protocol!=="file:"||!A.ActiveXObject)?function(){return new A.XMLHttpRequest}:function(){try{return new A.ActiveXObject("Microsoft.XMLHTTP")}catch(a){}},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},etag:{},ajax:function(a){function b(){e.success&&
e.success.call(k,o,i,x);e.global&&f("ajaxSuccess",[x,e])}function d(){e.complete&&e.complete.call(k,x,i);e.global&&f("ajaxComplete",[x,e]);e.global&&!--c.active&&c.event.trigger("ajaxStop")}function f(q,p){(e.context?c(e.context):c.event).trigger(q,p)}var e=c.extend(true,{},c.ajaxSettings,a),j,i,o,k=a&&a.context||e,n=e.type.toUpperCase();if(e.data&&e.processData&&typeof e.data!=="string")e.data=c.param(e.data,e.traditional);if(e.dataType==="jsonp"){if(n==="GET")N.test(e.url)||(e.url+=(ka.test(e.url)?
"&":"?")+(e.jsonp||"callback")+"=?");else if(!e.data||!N.test(e.data))e.data=(e.data?e.data+"&":"")+(e.jsonp||"callback")+"=?";e.dataType="json"}if(e.dataType==="json"&&(e.data&&N.test(e.data)||N.test(e.url))){j=e.jsonpCallback||"jsonp"+sb++;if(e.data)e.data=(e.data+"").replace(N,"="+j+"$1");e.url=e.url.replace(N,"="+j+"$1");e.dataType="script";A[j]=A[j]||function(q){o=q;b();d();A[j]=w;try{delete A[j]}catch(p){}z&&z.removeChild(C)}}if(e.dataType==="script"&&e.cache===null)e.cache=false;if(e.cache===
false&&n==="GET"){var r=J(),u=e.url.replace(wb,"$1_="+r+"$2");e.url=u+(u===e.url?(ka.test(e.url)?"&":"?")+"_="+r:"")}if(e.data&&n==="GET")e.url+=(ka.test(e.url)?"&":"?")+e.data;e.global&&!c.active++&&c.event.trigger("ajaxStart");r=(r=xb.exec(e.url))&&(r[1]&&r[1]!==location.protocol||r[2]!==location.host);if(e.dataType==="script"&&n==="GET"&&r){var z=s.getElementsByTagName("head")[0]||s.documentElement,C=s.createElement("script");C.src=e.url;if(e.scriptCharset)C.charset=e.scriptCharset;if(!j){var B=
false;C.onload=C.onreadystatechange=function(){if(!B&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){B=true;b();d();C.onload=C.onreadystatechange=null;z&&C.parentNode&&z.removeChild(C)}}}z.insertBefore(C,z.firstChild);return w}var E=false,x=e.xhr();if(x){e.username?x.open(n,e.url,e.async,e.username,e.password):x.open(n,e.url,e.async);try{if(e.data||a&&a.contentType)x.setRequestHeader("Content-Type",e.contentType);if(e.ifModified){c.lastModified[e.url]&&x.setRequestHeader("If-Modified-Since",
c.lastModified[e.url]);c.etag[e.url]&&x.setRequestHeader("If-None-Match",c.etag[e.url])}r||x.setRequestHeader("X-Requested-With","XMLHttpRequest");x.setRequestHeader("Accept",e.dataType&&e.accepts[e.dataType]?e.accepts[e.dataType]+", */*":e.accepts._default)}catch(ga){}if(e.beforeSend&&e.beforeSend.call(k,x,e)===false){e.global&&!--c.active&&c.event.trigger("ajaxStop");x.abort();return false}e.global&&f("ajaxSend",[x,e]);var g=x.onreadystatechange=function(q){if(!x||x.readyState===0||q==="abort"){E||
d();E=true;if(x)x.onreadystatechange=c.noop}else if(!E&&x&&(x.readyState===4||q==="timeout")){E=true;x.onreadystatechange=c.noop;i=q==="timeout"?"timeout":!c.httpSuccess(x)?"error":e.ifModified&&c.httpNotModified(x,e.url)?"notmodified":"success";var p;if(i==="success")try{o=c.httpData(x,e.dataType,e)}catch(v){i="parsererror";p=v}if(i==="success"||i==="notmodified")j||b();else c.handleError(e,x,i,p);d();q==="timeout"&&x.abort();if(e.async)x=null}};try{var h=x.abort;x.abort=function(){x&&h.call(x);
g("abort")}}catch(l){}e.async&&e.timeout>0&&setTimeout(function(){x&&!E&&g("timeout")},e.timeout);try{x.send(n==="POST"||n==="PUT"||n==="DELETE"?e.data:null)}catch(m){c.handleError(e,x,null,m);d()}e.async||g();return x}},handleError:function(a,b,d,f){if(a.error)a.error.call(a.context||a,b,d,f);if(a.global)(a.context?c(a.context):c.event).trigger("ajaxError",[b,a,f])},active:0,httpSuccess:function(a){try{return!a.status&&location.protocol==="file:"||a.status>=200&&a.status<300||a.status===304||a.status===
1223||a.status===0}catch(b){}return false},httpNotModified:function(a,b){var d=a.getResponseHeader("Last-Modified"),f=a.getResponseHeader("Etag");if(d)c.lastModified[b]=d;if(f)c.etag[b]=f;return a.status===304||a.status===0},httpData:function(a,b,d){var f=a.getResponseHeader("content-type")||"",e=b==="xml"||!b&&f.indexOf("xml")>=0;a=e?a.responseXML:a.responseText;e&&a.documentElement.nodeName==="parsererror"&&c.error("parsererror");if(d&&d.dataFilter)a=d.dataFilter(a,b);if(typeof a==="string")if(b===
"json"||!b&&f.indexOf("json")>=0)a=c.parseJSON(a);else if(b==="script"||!b&&f.indexOf("javascript")>=0)c.globalEval(a);return a},param:function(a,b){function d(i,o){if(c.isArray(o))c.each(o,function(k,n){b||/\[\]$/.test(i)?f(i,n):d(i+"["+(typeof n==="object"||c.isArray(n)?k:"")+"]",n)});else!b&&o!=null&&typeof o==="object"?c.each(o,function(k,n){d(i+"["+k+"]",n)}):f(i,o)}function f(i,o){o=c.isFunction(o)?o():o;e[e.length]=encodeURIComponent(i)+"="+encodeURIComponent(o)}var e=[];if(b===w)b=c.ajaxSettings.traditional;
if(c.isArray(a)||a.jquery)c.each(a,function(){f(this.name,this.value)});else for(var j in a)d(j,a[j]);return e.join("&").replace(yb,"+")}});var la={},Ab=/toggle|show|hide/,Bb=/^([+-]=)?([\d+-.]+)(.*)$/,W,va=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];c.fn.extend({show:function(a,b){if(a||a===0)return this.animate(K("show",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");
this[a].style.display=d||"";if(c.css(this[a],"display")==="none"){d=this[a].nodeName;var f;if(la[d])f=la[d];else{var e=c("<"+d+" />").appendTo("body");f=e.css("display");if(f==="none")f="block";e.remove();la[d]=f}c.data(this[a],"olddisplay",f)}}a=0;for(b=this.length;a<b;a++)this[a].style.display=c.data(this[a],"olddisplay")||"";return this}},hide:function(a,b){if(a||a===0)return this.animate(K("hide",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");!d&&d!=="none"&&c.data(this[a],
"olddisplay",c.css(this[a],"display"))}a=0;for(b=this.length;a<b;a++)this[a].style.display="none";return this}},_toggle:c.fn.toggle,toggle:function(a,b){var d=typeof a==="boolean";if(c.isFunction(a)&&c.isFunction(b))this._toggle.apply(this,arguments);else a==null||d?this.each(function(){var f=d?a:c(this).is(":hidden");c(this)[f?"show":"hide"]()}):this.animate(K("toggle",3),a,b);return this},fadeTo:function(a,b,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,d)},
animate:function(a,b,d,f){var e=c.speed(b,d,f);if(c.isEmptyObject(a))return this.each(e.complete);return this[e.queue===false?"each":"queue"](function(){var j=c.extend({},e),i,o=this.nodeType===1&&c(this).is(":hidden"),k=this;for(i in a){var n=i.replace(ia,ja);if(i!==n){a[n]=a[i];delete a[i];i=n}if(a[i]==="hide"&&o||a[i]==="show"&&!o)return j.complete.call(this);if((i==="height"||i==="width")&&this.style){j.display=c.css(this,"display");j.overflow=this.style.overflow}if(c.isArray(a[i])){(j.specialEasing=
j.specialEasing||{})[i]=a[i][1];a[i]=a[i][0]}}if(j.overflow!=null)this.style.overflow="hidden";j.curAnim=c.extend({},a);c.each(a,function(r,u){var z=new c.fx(k,j,r);if(Ab.test(u))z[u==="toggle"?o?"show":"hide":u](a);else{var C=Bb.exec(u),B=z.cur(true)||0;if(C){u=parseFloat(C[2]);var E=C[3]||"px";if(E!=="px"){k.style[r]=(u||1)+E;B=(u||1)/z.cur(true)*B;k.style[r]=B+E}if(C[1])u=(C[1]==="-="?-1:1)*u+B;z.custom(B,u,E)}else z.custom(B,u,"")}});return true})},stop:function(a,b){var d=c.timers;a&&this.queue([]);
this.each(function(){for(var f=d.length-1;f>=0;f--)if(d[f].elem===this){b&&d[f](true);d.splice(f,1)}});b||this.dequeue();return this}});c.each({slideDown:K("show",1),slideUp:K("hide",1),slideToggle:K("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(a,b){c.fn[a]=function(d,f){return this.animate(b,d,f)}});c.extend({speed:function(a,b,d){var f=a&&typeof a==="object"?a:{complete:d||!d&&b||c.isFunction(a)&&a,duration:a,easing:d&&b||b&&!c.isFunction(b)&&b};f.duration=c.fx.off?0:typeof f.duration===
"number"?f.duration:c.fx.speeds[f.duration]||c.fx.speeds._default;f.old=f.complete;f.complete=function(){f.queue!==false&&c(this).dequeue();c.isFunction(f.old)&&f.old.call(this)};return f},easing:{linear:function(a,b,d,f){return d+f*a},swing:function(a,b,d,f){return(-Math.cos(a*Math.PI)/2+0.5)*f+d}},timers:[],fx:function(a,b,d){this.options=b;this.elem=a;this.prop=d;if(!b.orig)b.orig={}}});c.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this);(c.fx.step[this.prop]||
c.fx.step._default)(this);if((this.prop==="height"||this.prop==="width")&&this.elem.style)this.elem.style.display="block"},cur:function(a){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];return(a=parseFloat(c.css(this.elem,this.prop,a)))&&a>-10000?a:parseFloat(c.curCSS(this.elem,this.prop))||0},custom:function(a,b,d){function f(j){return e.step(j)}this.startTime=J();this.start=a;this.end=b;this.unit=d||this.unit||"px";this.now=this.start;
this.pos=this.state=0;var e=this;f.elem=this.elem;if(f()&&c.timers.push(f)&&!W)W=setInterval(c.fx.tick,13)},show:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.show=true;this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());c(this.elem).show()},hide:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(a){var b=J(),d=true;if(a||b>=this.options.duration+this.startTime){this.now=
this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;for(var f in this.options.curAnim)if(this.options.curAnim[f]!==true)d=false;if(d){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;a=c.data(this.elem,"olddisplay");this.elem.style.display=a?a:this.options.display;if(c.css(this.elem,"display")==="none")this.elem.style.display="block"}this.options.hide&&c(this.elem).hide();if(this.options.hide||this.options.show)for(var e in this.options.curAnim)c.style(this.elem,
e,this.options.orig[e]);this.options.complete.call(this.elem)}return false}else{e=b-this.startTime;this.state=e/this.options.duration;a=this.options.easing||(c.easing.swing?"swing":"linear");this.pos=c.easing[this.options.specialEasing&&this.options.specialEasing[this.prop]||a](this.state,e,0,1,this.options.duration);this.now=this.start+(this.end-this.start)*this.pos;this.update()}return true}};c.extend(c.fx,{tick:function(){for(var a=c.timers,b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||
c.fx.stop()},stop:function(){clearInterval(W);W=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){c.style(a.elem,"opacity",a.now)},_default:function(a){if(a.elem.style&&a.elem.style[a.prop]!=null)a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit;else a.elem[a.prop]=a.now}}});if(c.expr&&c.expr.filters)c.expr.filters.animated=function(a){return c.grep(c.timers,function(b){return a===b.elem}).length};c.fn.offset="getBoundingClientRect"in s.documentElement?
function(a){var b=this[0];if(a)return this.each(function(e){c.offset.setOffset(this,a,e)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);var d=b.getBoundingClientRect(),f=b.ownerDocument;b=f.body;f=f.documentElement;return{top:d.top+(self.pageYOffset||c.support.boxModel&&f.scrollTop||b.scrollTop)-(f.clientTop||b.clientTop||0),left:d.left+(self.pageXOffset||c.support.boxModel&&f.scrollLeft||b.scrollLeft)-(f.clientLeft||b.clientLeft||0)}}:function(a){var b=
this[0];if(a)return this.each(function(r){c.offset.setOffset(this,a,r)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);c.offset.initialize();var d=b.offsetParent,f=b,e=b.ownerDocument,j,i=e.documentElement,o=e.body;f=(e=e.defaultView)?e.getComputedStyle(b,null):b.currentStyle;for(var k=b.offsetTop,n=b.offsetLeft;(b=b.parentNode)&&b!==o&&b!==i;){if(c.offset.supportsFixedPosition&&f.position==="fixed")break;j=e?e.getComputedStyle(b,null):b.currentStyle;
k-=b.scrollTop;n-=b.scrollLeft;if(b===d){k+=b.offsetTop;n+=b.offsetLeft;if(c.offset.doesNotAddBorder&&!(c.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(b.nodeName))){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=d;d=b.offsetParent}if(c.offset.subtractsBorderForOverflowNotVisible&&j.overflow!=="visible"){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=j}if(f.position==="relative"||f.position==="static"){k+=o.offsetTop;n+=o.offsetLeft}if(c.offset.supportsFixedPosition&&
f.position==="fixed"){k+=Math.max(i.scrollTop,o.scrollTop);n+=Math.max(i.scrollLeft,o.scrollLeft)}return{top:k,left:n}};c.offset={initialize:function(){var a=s.body,b=s.createElement("div"),d,f,e,j=parseFloat(c.curCSS(a,"marginTop",true))||0;c.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"});b.innerHTML="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
a.insertBefore(b,a.firstChild);d=b.firstChild;f=d.firstChild;e=d.nextSibling.firstChild.firstChild;this.doesNotAddBorder=f.offsetTop!==5;this.doesAddBorderForTableAndCells=e.offsetTop===5;f.style.position="fixed";f.style.top="20px";this.supportsFixedPosition=f.offsetTop===20||f.offsetTop===15;f.style.position=f.style.top="";d.style.overflow="hidden";d.style.position="relative";this.subtractsBorderForOverflowNotVisible=f.offsetTop===-5;this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==j;a.removeChild(b);
c.offset.initialize=c.noop},bodyOffset:function(a){var b=a.offsetTop,d=a.offsetLeft;c.offset.initialize();if(c.offset.doesNotIncludeMarginInBodyOffset){b+=parseFloat(c.curCSS(a,"marginTop",true))||0;d+=parseFloat(c.curCSS(a,"marginLeft",true))||0}return{top:b,left:d}},setOffset:function(a,b,d){if(/static/.test(c.curCSS(a,"position")))a.style.position="relative";var f=c(a),e=f.offset(),j=parseInt(c.curCSS(a,"top",true),10)||0,i=parseInt(c.curCSS(a,"left",true),10)||0;if(c.isFunction(b))b=b.call(a,
d,e);d={top:b.top-e.top+j,left:b.left-e.left+i};"using"in b?b.using.call(a,d):f.css(d)}};c.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),d=this.offset(),f=/^body|html$/i.test(b[0].nodeName)?{top:0,left:0}:b.offset();d.top-=parseFloat(c.curCSS(a,"marginTop",true))||0;d.left-=parseFloat(c.curCSS(a,"marginLeft",true))||0;f.top+=parseFloat(c.curCSS(b[0],"borderTopWidth",true))||0;f.left+=parseFloat(c.curCSS(b[0],"borderLeftWidth",true))||0;return{top:d.top-
f.top,left:d.left-f.left}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||s.body;a&&!/^body|html$/i.test(a.nodeName)&&c.css(a,"position")==="static";)a=a.offsetParent;return a})}});c.each(["Left","Top"],function(a,b){var d="scroll"+b;c.fn[d]=function(f){var e=this[0],j;if(!e)return null;if(f!==w)return this.each(function(){if(j=wa(this))j.scrollTo(!a?f:c(j).scrollLeft(),a?f:c(j).scrollTop());else this[d]=f});else return(j=wa(e))?"pageXOffset"in j?j[a?"pageYOffset":
"pageXOffset"]:c.support.boxModel&&j.document.documentElement[d]||j.document.body[d]:e[d]}});c.each(["Height","Width"],function(a,b){var d=b.toLowerCase();c.fn["inner"+b]=function(){return this[0]?c.css(this[0],d,false,"padding"):null};c.fn["outer"+b]=function(f){return this[0]?c.css(this[0],d,false,f?"margin":"border"):null};c.fn[d]=function(f){var e=this[0];if(!e)return f==null?null:this;if(c.isFunction(f))return this.each(function(j){var i=c(this);i[d](f.call(this,j,i[d]()))});return"scrollTo"in
e&&e.document?e.document.compatMode==="CSS1Compat"&&e.document.documentElement["client"+b]||e.document.body["client"+b]:e.nodeType===9?Math.max(e.documentElement["client"+b],e.body["scroll"+b],e.documentElement["scroll"+b],e.body["offset"+b],e.documentElement["offset"+b]):f===w?c.css(e,d):this.css(d,typeof f==="string"?f:f+"px")}});A.jQuery=A.$=c})(window);

/*!
 * The following copyright notice may not be removed under any circumstances.
 * 
 * Copyright:
 * Copyright © 2000 Adobe Systems Incorporated. All Rights Reserved. U.S. Patent
 * Des. pending.
 * 
 * Trademark:
 * Myriad is a registered trademark of Adobe Systems Incorporated.
 * 
 * Full name:
 * MyriadPro-Regular
 * 
 * Designer:
 * Robert Slimbach and Carol Twombly
 * 
 * Vendor URL:
 * http://www.adobe.com/type
 * 
 * License information:
 * http://www.adobe.com/type/legal.html
 */
Cufon.registerFont({"w":184,"face":{"font-family":"Myriad","font-weight":400,"font-stretch":"normal","units-per-em":"360","panose-1":"2 11 5 3 3 4 3 2 2 4","ascent":"270","descent":"-90","x-height":"4","bbox":"-17 -270 302 90","underline-thickness":"18","underline-position":"-18","stemh":"24","stemv":"32","unicode-range":"U+0020-U+007E"},"glyphs":{" ":{"w":76},"\u00a0":{"w":76,"k":{"T":15,"V":13,"W":13,"Y":17}},"!":{"d":"54,-69r-25,0r-5,-174r35,0xm41,4v-12,0,-21,-9,-21,-22v0,-13,9,-23,21,-23v13,0,22,10,22,23v0,13,-9,22,-22,22","w":82},"\"":{"d":"18,-249r31,0r-5,86r-20,0xm72,-249r31,0r-6,86r-19,0","w":121,"k":{"T":-6,"J":21,"M":2,"V":-6,"W":-6,"A":22,"f":-9,"g":4,"c":3,"d":3,"e":3,"o":3,"q":3,"t":-9,"v":-8,"w":-8,"y":-8,",":41,".":41}},"#":{"d":"68,-92r37,0r7,-52r-37,0xm55,0r-21,0r9,-71r-30,0r0,-21r33,0r7,-52r-31,0r0,-21r34,0r10,-69r21,0r-10,69r38,0r9,-69r21,0r-9,69r30,0r0,21r-33,0r-6,52r31,0r0,21r-35,0r-9,71r-21,0r9,-71r-38,0","w":178},"$":{"d":"101,31r-23,0r0,-36v-21,0,-41,-7,-54,-16r8,-24v25,21,97,23,95,-20v0,-20,-14,-32,-41,-43v-37,-14,-59,-32,-59,-63v0,-30,21,-53,54,-58r0,-36r22,0r0,35v22,1,37,7,47,13r-9,24v-8,-4,-22,-13,-45,-13v-28,0,-38,16,-38,31v0,18,12,31,44,41v73,23,76,113,-1,128r0,37"},"%":{"d":"11,-165v0,-47,25,-73,57,-73v32,0,53,25,53,70v0,49,-25,73,-55,73v-30,0,-55,-23,-55,-70xm66,-219v-19,0,-30,23,-30,53v0,30,10,52,30,52v21,0,30,-22,30,-53v0,-28,-8,-52,-30,-52xm83,4r-20,0r138,-242r20,0xm220,-141v32,0,54,24,54,69v0,98,-112,100,-111,4v0,-47,26,-73,57,-73xm219,-122v-19,0,-31,23,-31,53v0,30,11,52,31,52v21,0,30,-22,30,-53v0,-28,-8,-52,-30,-52","w":285},"&":{"d":"217,0r-38,0v-7,-7,-13,-13,-22,-23v-44,49,-146,26,-146,-41v0,-34,22,-55,48,-72v-37,-40,-24,-109,41,-111v30,0,54,20,54,52v0,27,-17,45,-54,66r59,67v11,-17,19,-39,24,-70r29,0v-6,38,-17,68,-35,89xm42,-69v0,53,73,63,99,27r-68,-76v-13,8,-31,23,-31,49xm98,-225v-42,0,-35,58,-12,79v25,-14,40,-27,40,-48v0,-15,-8,-31,-28,-31","w":217},"(":{"d":"70,-250r25,0v-26,36,-45,82,-45,148v0,64,20,110,45,146r-25,0v-23,-30,-47,-77,-47,-147v0,-71,24,-117,47,-147","w":102,"k":{"T":-17,"J":-6,"C":4,"G":4,"O":4,"Q":4,"V":-18,"W":-18,"X":-4,"Y":-15,"A":4,"j":-20}},")":{"d":"32,44r-25,0v57,-62,59,-232,0,-294r25,0v23,30,47,76,47,147v0,71,-24,116,-47,147","w":102},"*":{"d":"97,-247r21,13r-34,45r55,-7r0,25v-18,-1,-39,-7,-55,-6r35,43r-23,13v-8,-16,-13,-35,-23,-50r-23,50r-20,-13r34,-44r-53,7r0,-25v17,1,38,7,53,6r-34,-44r22,-12v8,16,13,35,23,50","w":149},"+":{"d":"96,-192r23,0r0,85r81,0r0,22r-81,0r0,85r-23,0r0,-85r-82,0r0,-22r82,0r0,-85","w":214},",":{"d":"28,42r-22,3v8,-22,17,-61,21,-87r36,-3v-9,31,-25,70,-35,87","w":74,"k":{"\"":37,"'":37}},"-":{"d":"11,-109r89,0r0,23r-89,0r0,-23","w":110},"\u00ad":{"d":"11,-109r89,0r0,23r-89,0r0,-23","w":110,"k":{"T":18,"J":7,"C":-5,"G":-5,"O":-5,"Q":-5,"V":4,"W":4,"X":8,"Y":18,"A":1,"g":-5,"c":-6,"d":-6,"e":-6,"o":-6,"q":-6,"v":2,"w":2,"y":2}},".":{"d":"40,4v-12,0,-21,-10,-21,-23v0,-13,8,-22,21,-22v13,0,22,9,22,22v0,13,-9,23,-22,23","w":74,"k":{"\"":37,"'":37}},"\/":{"d":"24,14r-24,0r100,-261r25,0","w":123},"0":{"d":"91,4v-46,0,-78,-43,-78,-120v0,-79,34,-122,82,-122v49,0,77,43,77,118v0,80,-30,124,-81,124xm45,-118v-1,61,17,97,48,97v32,0,47,-37,47,-97v0,-58,-14,-95,-47,-95v-29,0,-48,36,-48,95"},"1":{"d":"85,0r-1,-204r-40,21r-7,-24v25,-10,40,-31,79,-27r0,234r-31,0"},"2":{"d":"166,0r-150,0v-4,-27,13,-32,25,-44v58,-58,87,-87,87,-122v0,-24,-11,-46,-46,-46v-21,0,-39,11,-50,20r-10,-22v16,-13,40,-24,67,-24v50,0,71,35,71,68v0,47,-56,99,-99,144r105,0r0,26"},"3":{"d":"15,-12r9,-24v9,5,30,14,52,14v40,0,53,-25,53,-45v-1,-39,-38,-50,-79,-47r0,-24v35,2,66,-5,70,-39v5,-40,-68,-42,-88,-20r-8,-23v13,-9,36,-18,61,-18v82,0,87,90,24,111v27,8,52,26,52,61v0,37,-29,70,-85,70v-26,0,-49,-8,-61,-16"},"4":{"d":"144,0r-30,0r0,-64r-109,0r0,-21r105,-149r34,0r0,145r33,0r0,25r-33,0r0,64xm114,-89r0,-114v-22,44,-50,75,-77,114r77,0"},"5":{"d":"58,-147v54,-8,99,16,103,71v5,69,-93,99,-146,66r8,-25v32,22,110,16,106,-38v7,-41,-52,-58,-100,-49r15,-112r112,0r0,27r-89,0"},"6":{"d":"150,-238r0,26v-62,-1,-101,39,-105,85v34,-49,128,-27,128,48v0,43,-29,83,-78,83v-50,0,-83,-39,-83,-100v0,-89,51,-139,138,-142xm141,-77v0,-66,-97,-70,-97,-11v0,39,18,67,51,67v27,0,46,-23,46,-56"},"7":{"d":"21,-234r147,0r0,21r-102,213r-32,0r101,-208r-114,0r0,-26"},"8":{"d":"59,-122v-64,-31,-38,-118,36,-116v77,2,93,84,29,112v27,14,47,33,47,62v0,41,-34,68,-79,68v-91,0,-103,-102,-33,-126xm88,-112v-55,12,-58,92,5,93v28,0,46,-18,46,-42v0,-28,-19,-42,-51,-51xm93,-215v-26,0,-41,17,-41,37v0,23,18,36,45,43v42,-9,52,-78,-4,-80"},"9":{"d":"35,4r0,-26v59,1,100,-33,104,-86v-36,49,-125,20,-125,-47v0,-44,33,-83,81,-83v95,0,90,167,37,208v-26,20,-57,34,-97,34xm46,-157v0,60,94,67,94,14v0,-40,-15,-71,-48,-71v-27,0,-46,24,-46,57"},":":{"d":"40,-123v-12,0,-21,-9,-21,-22v0,-13,9,-23,21,-23v13,0,22,10,22,23v0,13,-9,22,-22,22xm40,4v-12,0,-21,-9,-21,-22v0,-13,9,-23,21,-23v13,0,22,10,22,23v0,13,-9,22,-22,22","w":74},";":{"d":"28,42r-22,2v8,-21,18,-60,22,-86r35,-3v-9,31,-25,70,-35,87xm64,-145v0,13,-8,22,-22,22v-12,0,-20,-9,-20,-22v0,-13,9,-23,21,-23v13,0,21,10,21,23","w":74},"<":{"d":"24,-86r0,-19r167,-87r0,25r-141,72r141,70r0,25","w":214},"=":{"d":"200,-121r-186,0r0,-22r186,0r0,22xm200,-51r-186,0r0,-21r186,0r0,21","w":214},">":{"d":"191,-106r0,20r-167,86r0,-25r142,-71r-142,-71r0,-25","w":214},"?":{"d":"79,-69r-28,0v-17,-43,45,-86,47,-121v2,-34,-50,-39,-71,-20r-9,-22v12,-9,33,-15,52,-15v77,3,68,78,29,116v-20,20,-24,37,-20,62xm64,4v-12,0,-21,-9,-21,-22v0,-13,9,-23,21,-23v13,0,22,10,22,23v0,13,-9,22,-22,22","w":146},"@":{"d":"117,-43v36,0,48,-51,52,-89v-40,-13,-76,21,-75,62v0,16,7,27,23,27xm183,8r6,15v-78,40,-174,-3,-174,-98v0,-74,52,-138,132,-138v63,0,104,44,104,104v0,54,-29,86,-63,86v-15,0,-26,-13,-28,-32v-21,43,-88,45,-90,-14v-2,-58,63,-103,124,-78r-12,66v-5,27,-2,40,10,40v18,1,39,-25,39,-66v0,-53,-31,-90,-87,-90v-59,0,-108,47,-108,120v0,82,81,120,147,85","w":265},"A":{"d":"153,-76r-86,0r-26,76r-32,0r82,-243r38,0r83,243r-33,0xm73,-101r73,0r-37,-114v-8,39,-24,77,-36,114","w":220,"k":{"T":28,"J":-7,"M":1,"C":5,"G":5,"O":5,"Q":5,"U":10,"V":19,"W":19,"X":5,"Y":28,"a":-1,"f":3,"g":4,"j":1,"c":4,"d":4,"e":4,"o":4,"q":4,"s":2,"t":4,"u":4,"v":8,"w":8,"y":8,"z":-5,")":3,"]":3,"}":3,"\"":21,"'":21}},"B":{"d":"180,-69v0,70,-85,76,-153,68r0,-238v57,-10,144,-11,144,55v0,25,-18,43,-41,54v23,5,50,25,50,61xm59,-218r0,78v42,4,80,-8,80,-41v0,-38,-46,-43,-80,-37xm59,-116r0,92v40,6,89,-1,88,-45v0,-42,-42,-50,-88,-47","w":195,"k":{"T":3,"V":-1,"W":-1,"Y":5,"c":-1,"d":-1,"e":-1,"o":-1,"q":-1,"v":-1,"w":-1,"y":-1,"\u00ad":-2,",":5,".":5}},"C":{"d":"190,-33r7,25v-11,6,-35,12,-65,12v-68,0,-119,-43,-119,-123v0,-97,98,-150,184,-117r-8,26v-67,-29,-143,8,-143,90v0,79,75,116,144,87","w":208,"k":{"T":-10,"J":-1,"C":8,"G":8,"O":8,"Q":8,"V":-4,"W":-4,"A":-1,"a":3,"c":4,"d":4,"e":4,"o":4,"q":4,"u":4,"v":7,"w":7,"y":7,"z":-1,")":-6,"]":-6,"}":-6}},"D":{"d":"227,-127v0,107,-90,142,-200,126r0,-238v103,-18,200,7,200,112xm59,-216r0,192v81,9,135,-25,135,-102v0,-69,-60,-107,-135,-90","w":239,"k":{"T":9,"X":10,"Y":10,"A":5,"f":-6,"g":-2,"j":-2,"c":-1,"d":-1,"e":-1,"o":-1,"q":-1,"t":-6,"v":-5,"w":-5,"y":-5,"x":2,"\u00ad":-5,")":3,"]":3,"}":3,",":12,".":12}},"E":{"d":"153,-140r0,26r-94,0r0,88r105,0r0,26r-137,0r0,-243r131,0r0,27r-99,0r0,76r94,0","w":177,"k":{"T":-6,"J":-6,"V":-3,"W":-3,"g":2,"c":1,"d":1,"e":1,"o":1,"q":1,"u":3,"v":3,"w":3,"y":3,",":1,".":1}},"F":{"d":"27,0r0,-243r131,0r0,27r-99,0r0,80r91,0r0,26r-91,0r0,110r-32,0","w":175,"k":{"J":31,"M":6,"A":28,"a":16,"g":6,"c":11,"d":11,"e":11,"o":11,"q":11,"u":13,"v":8,"w":8,"y":8,"b":6,"h":6,"k":6,"l":6,"i":9,"m":9,"n":9,"p":9,"r":9,":":5,";":5,",":35,".":35}},"G":{"d":"138,3v-73,1,-125,-46,-125,-123v0,-94,102,-150,192,-114r-8,26v-66,-30,-151,5,-151,87v0,78,68,114,135,91r0,-72r-49,0r0,-25r80,0r0,116v-14,5,-41,14,-74,14","w":232,"k":{"a":-3,"c":-2,"d":-2,"e":-2,"o":-2,"q":-2}},"H":{"d":"27,-243r32,0r0,102r117,0r0,-102r32,0r0,243r-32,0r0,-114r-117,0r0,114r-32,0r0,-243","w":234,"k":{"Y":3,"f":-4,"j":-3,"t":-6,"v":-3,"w":-3,"y":-3,"z":-4,"b":-4,"h":-4,"k":-4,"l":-4,"i":-4,"m":-4,"n":-4,"p":-4,"r":-4,"x":-2}},"I":{"d":"27,-243r32,0r0,243r-32,0r0,-243","w":86,"k":{"Y":3,"f":-4,"j":-3,"t":-6,"v":-3,"w":-3,"y":-3,"z":-4,"b":-4,"h":-4,"k":-4,"l":-4,"i":-4,"m":-4,"n":-4,"p":-4,"r":-4,"x":-2}},"J":{"d":"77,-83r0,-160r31,0r0,163v1,79,-50,94,-107,78r5,-25v39,10,71,5,71,-56","w":133,"k":{"v":-4,"w":-4,"y":-4,")":-15,"]":-15,"}":-15,",":4,".":4}},"K":{"d":"27,0r0,-243r32,0r1,117v29,-41,62,-78,93,-117r39,0r-88,103r95,140r-37,0r-80,-119r-23,26r0,93r-32,0","w":195,"k":{"T":-8,"J":-14,"C":6,"G":6,"O":6,"Q":6,"V":-5,"W":-5,"Y":3,"A":-4,"Z":-7,"a":-6,"g":2,"u":2,"v":6,"w":6,"y":6,"b":-4,"h":-4,"k":-4,"l":-4,"i":-4,"m":-4,"n":-4,"p":-4,"r":-4,":":-8,";":-8,"\u00ad":6,")":-8,"]":-8,"}":-8,",":-6,".":-6}},"L":{"d":"27,0r0,-243r32,0r0,217r103,0r0,26r-135,0","w":169,"k":{"T":32,"J":-4,"C":14,"G":14,"O":14,"Q":14,"U":13,"V":21,"W":21,"Y":30,"c":5,"d":5,"e":5,"o":5,"q":5,"t":1,"u":5,"v":10,"w":10,"y":10,"\u00ad":15,"\"":35,"'":35}},"M":{"d":"238,0r-11,-211v-9,28,-18,59,-30,92r-43,118r-24,0r-40,-116v-13,-33,-18,-67,-28,-94r-11,211r-30,0r17,-243r40,0r41,118v10,30,19,57,25,82v17,-63,47,-137,69,-200r40,0r16,243r-31,0","w":289,"k":{"T":4,"A":4,"a":-2,"j":-4,"c":-2,"d":-2,"e":-2,"o":-2,"q":-2,"v":-3,"w":-3,"y":-3,"i":-4,"m":-4,"n":-4,"p":-4,"r":-4,"\u00ad":-2}},"N":{"d":"57,0r-30,0r0,-243r35,0r77,123v19,28,32,56,45,79v-6,-61,-3,-134,-4,-202r30,0r0,243r-32,0r-77,-123v-18,-27,-32,-57,-46,-81","w":236,"k":{"Y":3,"f":-4,"j":-3,"t":-6,"v":-3,"w":-3,"y":-3,"z":-4,"b":-4,"h":-4,"k":-4,"l":-4,"i":-4,"m":-4,"n":-4,"p":-4,"r":-4,"x":-2}},"O":{"d":"122,4v-64,0,-109,-50,-109,-123v0,-77,47,-128,112,-128v67,0,110,51,110,123v0,83,-51,128,-113,128xm46,-120v0,51,28,99,78,98v50,0,78,-45,78,-100v0,-48,-26,-99,-78,-99v-52,0,-78,48,-78,101","w":248,"k":{"T":9,"X":10,"Y":10,"A":5,"f":-6,"g":-2,"j":-2,"c":-1,"d":-1,"e":-1,"o":-1,"q":-1,"t":-6,"v":-5,"w":-5,"y":-5,"x":2,"\u00ad":-5,")":3,"]":3,"}":3,",":12,".":12}},"P":{"d":"177,-174v0,61,-57,88,-118,76r0,98r-32,0r0,-239v62,-12,150,-6,150,65xm59,-217r0,94v44,9,86,-7,86,-49v0,-43,-48,-54,-86,-45","w":191,"k":{"J":27,"M":4,"X":5,"Y":3,"A":30,"Z":11,"a":9,"g":9,"c":9,"d":9,"e":9,"o":9,"q":9,"s":8,"t":-2,"u":5,"v":-1,"w":-1,"y":-1,"b":2,"h":2,"k":2,"l":2,"i":6,"m":6,"n":6,"p":6,"r":6,":":4,";":4,"\u00ad":6,",":50,".":50}},"Q":{"d":"228,35v-39,-9,-73,-22,-108,-31v-58,-2,-107,-45,-107,-123v0,-78,47,-128,113,-128v66,0,109,51,109,123v0,64,-32,99,-69,118v24,6,50,11,71,15xm46,-120v0,51,28,99,78,98v50,0,78,-45,78,-100v0,-49,-26,-99,-77,-99v-53,0,-79,48,-79,101","w":248,"k":{"T":9,"X":10,"Y":10,"A":5,"f":-6,"g":-2,"j":-2,"c":-1,"d":-1,"e":-1,"o":-1,"q":-1,"t":-6,"v":-5,"w":-5,"y":-5,"x":2,"\u00ad":-5,")":3,"]":3,"}":3,",":12,".":12}},"R":{"d":"27,-239v64,-11,150,-9,150,61v0,33,-23,51,-46,62v37,3,43,98,54,116r-32,0v-4,-7,-10,-28,-16,-58v-8,-44,-32,-49,-78,-47r0,105r-32,0r0,-239xm59,-217r0,88v46,4,86,-6,86,-46v0,-43,-50,-50,-86,-42","w":193,"k":{"T":-3,"V":-6,"W":-6,"X":-2,"Y":4,"A":-2,"a":-4,"c":-1,"d":-1,"e":-1,"o":-1,"q":-1,"t":-7,"v":-5,"w":-5,"y":-5,"b":-3,"h":-3,"k":-3,"l":-3,"i":-4,"m":-4,"n":-4,"p":-4,"r":-4}},"S":{"d":"15,-12r8,-26v29,23,107,21,107,-26v0,-23,-13,-36,-46,-48v-40,-14,-64,-34,-64,-68v0,-58,86,-81,132,-55r-9,26v-8,-5,-23,-11,-45,-11v-33,0,-46,19,-46,36v0,22,14,36,48,46v88,26,83,142,-23,142v-23,0,-49,-7,-62,-16","w":177,"k":{"j":1,"c":-2,"d":-2,"e":-2,"o":-2,"q":-2,"v":3,"w":3,"y":3,"\u00ad":-2}},"T":{"d":"73,0r0,-216r-73,0r0,-27r179,0r0,27r-74,0r0,216r-32,0","w":178,"k":{"i":16,"T":-14,"J":15,"C":10,"G":10,"O":10,"Q":10,"V":-14,"W":-14,"X":-8,"Y":-10,"A":27,"S":2,"a":23,"g":23,"c":26,"d":26,"e":26,"o":26,"q":26,"s":19,"u":16,"v":14,"w":14,"y":14,"z":18,"b":3,"h":3,"k":3,"l":3,"m":16,"n":16,"p":16,"r":16,"x":12,":":9,";":9,"\u00ad":18,")":-22,"]":-22,"}":-22,"\"":-6,"'":-6,",":22,".":22}},"U":{"d":"27,-243r32,0r0,144v0,54,24,77,56,77v36,0,59,-24,59,-77r0,-144r32,0r0,142v0,75,-39,105,-92,105v-50,0,-87,-28,-87,-104r0,-143","w":232,"k":{"A":12,"a":1,"f":-3,"s":2,"t":-1,"z":2,"x":3,",":10,".":10}},"V":{"d":"115,0r-34,0r-80,-243r34,0r65,211v17,-69,46,-144,68,-211r34,0","w":200,"k":{"T":-12,"J":8,"V":-6,"W":-6,"A":21,"a":12,"g":3,"c":12,"d":12,"e":12,"o":12,"q":12,"s":9,"t":-3,"u":6,"v":1,"w":1,"y":1,"b":2,"h":2,"k":2,"l":2,"i":6,"m":6,"n":6,"p":6,"r":6,":":6,";":6,"\u00ad":5,")":-20,"]":-20,"}":-20,"\"":-7,"'":-7,",":20,".":20}},"W":{"d":"100,0r-33,0r-62,-243r34,0r47,207r52,-207r33,0r30,123v8,28,10,60,17,84r52,-207r32,0r-69,243r-33,0r-30,-126v-9,-30,-11,-58,-17,-80v-12,65,-37,141,-53,206","w":304,"k":{"T":-12,"J":8,"V":-6,"W":-6,"A":21,"a":12,"g":3,"c":12,"d":12,"e":12,"o":12,"q":12,"s":9,"t":-3,"u":6,"v":1,"w":1,"y":1,"b":2,"h":2,"k":2,"l":2,"i":6,"m":6,"n":6,"p":6,"r":6,":":6,";":6,"\u00ad":5,")":-20,"]":-20,"}":-20,"\"":-7,"'":-7,",":20,".":20}},"X":{"d":"197,0r-37,0r-60,-102r-55,102r-36,0r74,-123r-71,-120r36,0r56,98r54,-98r37,0r-74,118","w":205,"k":{"T":-3,"J":-1,"C":10,"G":10,"O":10,"Q":10,"V":-3,"W":-3,"X":5,"Y":-2,"A":3,"a":2,"c":4,"d":4,"e":4,"o":4,"q":4,"u":3,"v":7,"w":7,"y":7,"\u00ad":8}},"Y":{"d":"113,0r-32,0r0,-103r-77,-140r36,0r59,117v17,-38,41,-79,60,-117r35,0r-81,140r0,103","w":194,"k":{"T":-12,"J":19,"M":4,"C":13,"G":13,"O":13,"Q":13,"V":-10,"W":-10,"A":29,"S":5,"B":3,"D":3,"E":3,"F":3,"H":3,"I":3,"K":3,"L":3,"N":3,"P":3,"R":3,"a":25,"g":14,"c":27,"d":27,"e":27,"o":27,"q":27,"s":19,"t":7,"u":19,"v":10,"w":10,"y":10,"z":9,"b":3,"h":3,"k":3,"l":3,"i":5,"m":5,"n":5,"p":5,"r":5,"x":9,":":12,";":12,"\u00ad":18,")":-20,"]":-20,"}":-20,"\"":-3,"'":-3,",":34,".":34}},"Z":{"d":"11,0r0,-18r134,-198r-123,0r0,-27r164,0r0,19r-134,198r136,0r0,26r-177,0","w":199,"k":{"J":-3,"C":8,"G":8,"O":8,"Q":8,"X":2,"c":4,"d":4,"e":4,"o":4,"q":4,"u":3,"v":3,"w":3,"y":3,"\u00ad":10}},"[":{"d":"95,40r-66,0r0,-287r66,0r0,20r-41,0r0,248r41,0r0,19","w":102,"k":{"T":-17,"J":-6,"C":4,"G":4,"O":4,"Q":4,"V":-18,"W":-18,"X":-4,"Y":-15,"A":4,"j":-20}},"\\":{"d":"123,14r-24,0r-98,-261r24,0","w":122},"]":{"d":"7,-247r66,0r0,287r-66,0r0,-19r41,0r0,-248r-41,0r0,-20","w":102},"^":{"d":"193,-68r-25,0r-61,-140r-60,140r-25,0r74,-166r23,0","w":214},"_":{"d":"0,27r180,0r0,18r-180,0r0,-18","w":180},"a":{"d":"82,-178v97,3,56,97,70,178r-29,0v-2,-7,0,-17,-4,-22v-9,14,-28,26,-53,26v-35,0,-53,-25,-53,-50v0,-42,37,-65,104,-65v0,-18,-2,-42,-39,-44v-17,0,-34,5,-46,13r-7,-21v14,-9,35,-15,57,-15xm74,-19v38,-2,48,-28,44,-70v-35,-1,-74,5,-74,39v0,21,14,31,30,31","w":173},"b":{"d":"25,0r1,-256r32,0r1,109v36,-59,133,-28,133,57v0,95,-95,123,-138,61r-2,29r-27,0xm108,-153v-36,-1,-54,36,-50,83v2,31,23,48,49,49v33,0,52,-27,52,-67v0,-35,-17,-65,-51,-65","w":204,"k":{"T":14,"v":3,"w":3,"y":3,"z":3,"x":5,"\u00ad":-5,"\"":4,"'":4,",":9,".":9}},"c":{"d":"145,-30r5,24v-8,4,-27,10,-50,10v-53,0,-86,-36,-86,-89v0,-70,72,-113,137,-84r-7,24v-43,-23,-105,7,-98,58v-4,57,55,78,99,57","w":161,"k":{"T":4,"c":2,"d":2,"e":2,"o":2,"q":2,"t":-5,"v":-6,"w":-6,"y":-6,"\u00ad":-2,",":4,".":4}},"d":{"d":"145,-256r32,0r1,256r-28,0r-2,-30v-34,62,-134,32,-134,-55v0,-86,90,-120,131,-67r0,-104xm46,-86v0,73,95,89,99,13v2,-45,-7,-80,-47,-80v-33,0,-52,29,-52,67","w":203,"k":{",":4,".":4}},"e":{"d":"166,-81r-122,0v-2,63,66,69,108,51r6,22v-11,5,-31,12,-59,12v-53,0,-85,-36,-85,-88v0,-53,31,-94,82,-94v63,0,74,53,70,97xm45,-104r92,0v0,-20,-9,-52,-44,-52v-32,0,-45,30,-48,52","w":180,"k":{"T":12,"\u00ad":-10,",":4,".":4}},"f":{"d":"29,-174v-6,-57,36,-101,90,-81r-4,25v-35,-14,-62,13,-55,56r43,0r0,24r-42,0r0,150r-32,0r0,-150r-24,0r0,-24r24,0","w":105,"k":{"g":4,"c":5,"d":5,"e":5,"o":5,"q":5,"s":3,"t":-4,":":-12,";":-12,")":-37,"]":-37,"}":-37,"\"":-20,"'":-20,",":12,".":12}},"g":{"d":"175,-26v0,95,-78,120,-146,87r8,-25v44,31,124,12,106,-66v-9,16,-28,29,-55,29v-43,0,-74,-36,-74,-85v0,-90,99,-118,134,-62r1,-26r28,0v-4,41,-2,102,-2,148xm97,-25v36,1,51,-36,47,-81v-3,-28,-19,-48,-46,-48v-30,0,-52,26,-52,67v0,34,17,62,51,62","w":201,"k":{"T":12,"f":-1,"i":2,"m":2,"n":2,"p":2,"r":2,",":5,".":5}},"h":{"d":"103,-152v-63,0,-42,91,-45,152r-32,0r0,-256r32,0r1,109v29,-45,116,-50,116,43r0,104r-32,0v-6,-59,22,-152,-40,-152","w":199,"k":{"T":18,"t":1,"v":5,"w":5,"y":5,"\"":3,"'":3}},"i":{"d":"58,0r-32,0r0,-174r32,0r0,174xm62,-223v0,10,-8,19,-21,19v-12,0,-19,-9,-19,-19v0,-11,8,-20,20,-20v12,0,20,9,20,20","w":84},"j":{"d":"-17,51v43,-7,47,-15,47,-79r0,-146r32,0v-8,98,36,248,-75,250xm66,-223v0,10,-7,19,-21,19v-12,0,-19,-9,-19,-19v0,-11,8,-20,20,-20v12,0,20,9,20,20","w":87,"k":{",":4,".":4}},"k":{"d":"58,-256r1,162v20,-28,44,-53,66,-80r38,0r-67,71r76,103r-38,0r-60,-84r-16,18r0,66r-32,0r0,-256r32,0","w":168,"k":{"T":7,"a":-6,"u":-1,"v":-5,"w":-5,"y":-5,"b":-6,"h":-6,"k":-6,"l":-6,"i":-6,"m":-6,"n":-6,"p":-6,"r":-6,":":-4,";":-4,"\u00ad":4,",":-5,".":-5}},"l":{"d":"26,0r0,-256r32,0r0,256r-32,0","w":84,"k":{",":4,".":4}},"m":{"d":"99,-152v-60,0,-38,92,-42,152r-31,0r-1,-174r28,0v1,9,-1,21,2,28v15,-39,91,-43,105,3v28,-49,114,-57,115,40r0,103r-31,0v-4,-55,18,-152,-37,-152v-59,0,-37,93,-41,152r-31,0v-5,-56,20,-152,-36,-152","w":300,"k":{"T":18,"t":1,"v":5,"w":5,"y":5,"\"":3,"'":3}},"n":{"d":"103,-152v-63,0,-42,91,-45,152r-32,0r-1,-174r28,0r2,28v27,-44,120,-54,120,42r0,104r-32,0v-6,-59,22,-152,-40,-152","w":199,"k":{"T":18,"t":1,"v":5,"w":5,"y":5,"\"":3,"'":3}},"o":{"d":"184,-89v0,65,-45,93,-87,93v-47,0,-83,-35,-83,-90v0,-58,38,-92,86,-92v50,0,84,36,84,89xm46,-87v0,38,21,67,53,67v30,0,53,-28,53,-68v0,-30,-16,-66,-53,-66v-37,0,-53,34,-53,67","w":197,"k":{"T":14,"v":3,"w":3,"y":3,"z":3,"x":5,"\u00ad":-5,"\"":4,"'":4,",":9,".":9}},"p":{"d":"26,71r-1,-245r28,0v2,9,0,22,3,30v37,-63,136,-32,136,54v0,91,-89,121,-134,67r0,94r-32,0xm108,-153v-36,0,-50,35,-50,82v0,32,23,49,49,50v33,0,52,-27,52,-67v0,-35,-18,-65,-51,-65","w":204,"k":{"T":14,"v":3,"w":3,"y":3,"z":3,"x":5,"\u00ad":-5,"\"":4,"'":4,",":9,".":9}},"q":{"d":"145,71r-1,-98v-34,58,-130,29,-130,-57v0,-95,94,-120,133,-64r1,-26r30,0r-1,245r-32,0xm97,-21v37,0,48,-36,48,-83v0,-30,-19,-49,-47,-49v-33,0,-52,28,-52,67v0,35,16,65,51,65","w":202,"k":{"T":11,",":3,".":3}},"r":{"d":"112,-148v-70,-8,-52,83,-54,148r-32,0r-1,-174r28,0v1,11,-1,25,2,34v10,-25,30,-42,57,-37r0,29","w":117,"k":{"T":5,"a":2,"f":-11,"g":3,"c":4,"d":4,"e":4,"o":4,"q":4,"t":-9,"v":-9,"w":-9,"y":-9,"z":-3,"b":-1,"h":-1,"k":-1,"l":-1,"i":-1,"m":-1,"n":-1,"p":-1,"r":-1,"x":-6,":":-3,";":-3,"\u00ad":2,",":19,".":19}},"s":{"d":"14,-9r8,-23v18,15,76,19,76,-14v0,-15,-8,-25,-32,-32v-69,-20,-58,-98,13,-100v18,0,34,5,43,11r-8,22v-13,-12,-64,-16,-64,14v0,14,8,23,32,30v67,18,58,108,-19,105v-19,0,-37,-6,-49,-13","w":142,"k":{"T":9,",":4,".":4}},"t":{"d":"108,-1v-39,14,-75,-5,-75,-54r0,-95r-27,0r0,-24r27,0r0,-32r31,-10r0,42r46,0r0,24r-46,0r0,93v-3,31,19,38,43,32","w":119,"k":{"g":2,"c":2,"d":2,"e":2,"o":2,"q":2,"v":-3,"w":-3,"y":-3,"\u00ad":2}},"u":{"d":"96,-22v64,0,40,-91,44,-152r32,0r2,174r-29,0v-1,-9,1,-21,-2,-28v-8,14,-27,32,-58,32v-27,0,-60,-15,-60,-76r0,-102r32,0v4,57,-19,152,39,152","w":198,"k":{"T":11,",":3,".":3}},"v":{"d":"5,-174r34,0r49,142r48,-142r34,0r-69,174r-30,0","w":173,"k":{"T":11,"a":1,"g":4,"c":4,"d":4,"e":4,"o":4,"q":4,"s":2,"v":-4,"w":-4,"y":-4,":":-9,";":-9,"\u00ad":1,",":14,".":14}},"w":{"d":"6,-174r33,0r37,144v11,-49,29,-97,44,-144r27,0r43,144v8,-48,26,-98,38,-144r32,0r-57,174r-28,0r-43,-141v-11,51,-29,94,-44,141r-29,0","w":264,"k":{"T":11,"a":1,"g":4,"c":4,"d":4,"e":4,"o":4,"q":4,"s":2,"v":-4,"w":-4,"y":-4,":":-9,";":-9,"\u00ad":1,",":14,".":14}},"x":{"d":"6,-174r35,0r44,66v13,-24,27,-44,41,-66r35,0r-59,84r60,90r-36,0r-45,-69r-43,69r-35,0r62,-89","w":166,"k":{"T":8,"c":5,"d":5,"e":5,"o":5,"q":5,"s":2,"t":-5,"v":-5,"w":-5,"y":-5,"\u00ad":2}},"y":{"d":"13,53v25,-9,45,-29,57,-58r-67,-169r35,0r50,138r46,-138r33,0v-41,86,-59,232,-146,253","w":169,"k":{"T":11,"a":1,"g":4,"c":4,"d":4,"e":4,"o":4,"q":4,"s":2,"v":-4,"w":-4,"y":-4,":":-9,";":-9,"\u00ad":1,",":14,".":14}},"z":{"d":"6,0r0,-18r102,-131r-94,0r0,-25r133,0r0,20r-101,129r102,0r0,25r-142,0","w":154,"k":{"T":7,"c":3,"d":3,"e":3,"o":3,"q":3,"v":-9,"w":-9,"y":-9}},"{":{"d":"33,-9v-1,-33,28,-83,-23,-86r0,-18v52,-3,21,-53,23,-87v2,-35,25,-49,60,-47r0,20v-74,-8,5,110,-55,123v60,8,-20,127,55,125r0,19v-35,1,-59,-10,-60,-49","w":102,"k":{"T":-17,"J":-6,"C":4,"G":4,"O":4,"Q":4,"V":-18,"W":-18,"X":-4,"Y":-15,"A":4,"j":-20}},"|":{"d":"31,-270r24,0r0,360r-24,0r0,-360","w":86},"}":{"d":"69,-200v1,35,-28,84,23,87r0,18v-51,3,-21,51,-23,86v-2,39,-25,51,-60,49r0,-19v72,8,-3,-111,55,-125v-59,-8,20,-126,-55,-123r0,-20v35,-1,59,12,60,47","w":102},"~":{"d":"197,-129v-1,98,-90,33,-137,23v-13,0,-21,9,-21,30r-21,0v-1,-36,17,-54,42,-54v24,0,72,32,96,31v13,0,20,-10,20,-30r21,0","w":214},"'":{"d":"18,-249r31,0r-5,86r-20,0","w":67,"k":{"T":-6,"J":21,"M":2,"V":-6,"W":-6,"A":22,"f":-9,"g":4,"c":3,"d":3,"e":3,"o":3,"q":3,"t":-9,"v":-8,"w":-8,"y":-8,",":41,".":41}},"`":{"d":"8,-249r34,0r32,51r-22,0","w":108}}});
/*!
 * The following copyright notice may not be removed under any circumstances.
 * 
 * Copyright:
 * Copyright © 2000 Adobe Systems Incorporated. All Rights Reserved. U.S. Patent
 * Des. pending.
 * 
 * Trademark:
 * Myriad is a registered trademark of Adobe Systems Incorporated.
 * 
 * Full name:
 * MyriadPro-Bold
 * 
 * Designer:
 * Robert Slimbach and Carol Twombly
 * 
 * Vendor URL:
 * http://www.adobe.com/type
 * 
 * License information:
 * http://www.adobe.com/type/legal.html
 */
Cufon.registerFont({"w":199,"face":{"font-family":"Myriad","font-weight":700,"font-stretch":"normal","units-per-em":"360","panose-1":"2 11 7 3 3 4 3 2 2 4","ascent":"270","descent":"-90","x-height":"4","bbox":"-14 -270 315 90","underline-thickness":"18","underline-position":"-18","stemh":"40","stemv":"55","unicode-range":"U+0020-U+007E"},"glyphs":{" ":{"w":72},"\u00a0":{"w":72,"k":{"T":14,"V":13,"W":13,"Y":14}},"!":{"d":"69,-80r-41,0r-8,-163r57,0xm48,4v-19,0,-32,-14,-32,-33v0,-19,13,-33,32,-33v19,0,32,14,32,33v0,19,-13,33,-32,33","w":96},"\"":{"d":"13,-249r48,0r-8,97r-32,0xm82,-249r48,0r-8,97r-32,0","w":142,"k":{"T":-3,"J":21,"C":3,"G":3,"O":3,"Q":3,"V":-3,"W":-3,"X":-1,"Y":-3,"A":17,"f":-9,"g":7,"c":5,"d":5,"e":5,"o":5,"q":5,"t":-8,"v":-2,"w":-2,"y":-2,",":45,".":45}},"#":{"d":"80,-98r33,0r6,-40r-33,0xm66,0r-33,0r10,-64r-30,0r0,-34r35,0r6,-40r-30,0r0,-33r35,0r9,-63r32,0r-9,63r33,0r9,-63r32,0r-9,63r29,0r0,33r-34,0r-6,40r30,0r0,34r-35,0r-9,64r-33,0r10,-64r-33,0","w":198},"$":{"d":"116,31r-35,0r0,-34v-24,-1,-47,-7,-61,-15r11,-42v20,14,94,28,94,-7v0,-14,-10,-25,-38,-31v-80,-17,-88,-116,-4,-130r0,-34r35,0r0,31v24,1,41,6,53,12r-11,41v-8,-11,-83,-24,-83,8v0,12,11,21,43,30v83,23,79,120,-4,134r0,37"},"%":{"d":"10,-165v0,-42,25,-73,66,-73v40,0,62,30,62,70v0,49,-31,74,-65,74v-36,0,-63,-27,-63,-71xm74,-208v-16,0,-24,18,-24,42v0,24,9,43,25,43v15,0,23,-16,23,-43v0,-24,-7,-42,-24,-42xm105,4r-29,0r135,-242r29,0xm244,-141v40,0,63,30,63,70v0,49,-31,74,-65,74v-35,0,-63,-26,-63,-70v0,-42,25,-74,65,-74xm243,-111v-16,0,-24,19,-24,42v0,24,9,42,24,42v15,0,23,-16,23,-42v0,-24,-6,-42,-23,-42","w":316},"&":{"d":"242,0r-64,0v-5,-5,-10,-11,-16,-17v-16,12,-37,21,-66,21v-105,0,-105,-107,-39,-140v-35,-42,-17,-111,55,-111v37,0,65,22,65,57v0,25,-16,45,-47,64v14,15,28,33,40,45v10,-15,17,-37,20,-59r49,0v-6,37,-18,68,-40,92xm82,-107v-30,16,-23,71,22,71v14,0,26,-5,33,-12v-15,-15,-35,-37,-55,-59xm131,-188v0,-12,-7,-26,-22,-24v-30,3,-24,42,-5,59v18,-12,27,-21,27,-35","w":244},"(":{"d":"63,-249r38,0v-47,59,-48,232,0,291r-38,0v-19,-28,-41,-76,-41,-145v0,-70,22,-118,41,-146","w":113,"k":{"T":-8,"J":-4,"C":8,"G":8,"O":8,"Q":8,"V":-10,"W":-10,"X":-2,"Y":-11,"A":7,"j":-18}},")":{"d":"51,42r-38,0v46,-58,47,-233,0,-291r38,0v19,28,41,76,41,146v0,70,-22,117,-41,145","w":113},"*":{"d":"103,-247r31,18r-39,47r58,-12r0,37v-19,-2,-41,-9,-58,-9r39,44r-32,19r-21,-55r-21,55r-31,-19v12,-15,29,-32,38,-45r-56,10r0,-37v18,3,40,11,56,11r-38,-45r32,-19v8,18,12,39,21,55","w":163},"+":{"d":"90,-192r35,0r0,79r75,0r0,33r-75,0r0,80r-35,0r0,-80r-76,0r0,-33r76,0r0,-79","w":214},",":{"d":"37,40r-37,3v12,-32,22,-69,27,-102r55,-4v-12,37,-28,75,-45,103","w":93,"k":{"\"":44,"'":44}},"-":{"d":"11,-113r94,0r0,37r-94,0r0,-37","w":115},"\u00ad":{"d":"11,-113r94,0r0,37r-94,0r0,-37","w":115,"k":{"T":20,"J":2,"C":-4,"G":-4,"O":-4,"Q":-4,"V":9,"W":9,"X":6,"Y":22,"A":2,"g":-1,"c":-6,"d":-6,"e":-6,"o":-6,"q":-6}},".":{"d":"50,4v-18,0,-32,-14,-32,-33v0,-20,13,-34,32,-34v19,0,32,14,32,34v0,19,-13,33,-32,33","w":93,"k":{"\"":44,"'":44}},"\/":{"d":"42,14r-36,0r77,-261r36,0","w":119},"0":{"d":"188,-118v0,72,-29,122,-89,122v-60,0,-87,-55,-87,-121v0,-68,29,-121,89,-121v62,0,87,56,87,120xm100,-37v21,0,33,-27,33,-80v0,-52,-11,-80,-33,-80v-21,0,-33,27,-33,80v0,54,12,80,33,80"},"1":{"d":"85,0r-1,-185r-44,21r-9,-41r62,-29r45,0r0,234r-53,0"},"2":{"d":"181,0r-166,0r0,-33v38,-35,115,-99,107,-127v4,-44,-69,-38,-88,-15r-16,-39v17,-13,46,-24,77,-24v53,0,82,31,82,73v0,48,-50,88,-84,120r88,0r0,45"},"3":{"d":"14,-12r11,-42v19,16,100,25,97,-16v-2,-30,-35,-36,-69,-34r0,-39v29,1,60,0,63,-27v3,-34,-69,-26,-84,-11r-11,-39v14,-9,42,-18,73,-18v87,0,103,90,34,113v28,5,51,27,51,58v0,41,-37,71,-96,71v-30,0,-55,-8,-69,-16"},"4":{"d":"164,0r-52,0r0,-56r-104,0r0,-35r88,-143r68,0r0,137r28,0r0,41r-28,0r0,56xm59,-98v15,3,36,0,53,1r0,-95v-16,33,-34,64,-53,94"},"5":{"d":"76,-153v56,-6,106,19,105,75v0,44,-38,82,-101,82v-28,0,-52,-6,-65,-13r10,-41v26,14,101,21,100,-25v8,-33,-56,-43,-98,-36r15,-123r129,0r0,45r-90,0"},"6":{"d":"165,-237r0,42v-53,-3,-98,25,-97,56v43,-38,122,-14,122,58v0,46,-36,85,-86,85v-113,0,-113,-155,-51,-207v28,-24,65,-36,112,-34xm100,-118v-20,1,-35,12,-35,34v0,25,13,48,38,48v19,0,32,-18,32,-42v0,-22,-12,-40,-35,-40"},"7":{"d":"18,-234r165,0r0,34r-97,200r-58,0r97,-189r-107,0r0,-45"},"8":{"d":"102,-238v88,4,98,79,43,113v75,28,43,129,-47,129v-97,0,-112,-95,-45,-124v-65,-34,-28,-121,49,-118xm100,-34v19,0,32,-12,32,-29v0,-21,-15,-33,-36,-39v-39,7,-38,67,4,68xm104,-142v30,-6,35,-59,-5,-59v-19,0,-28,13,-28,27v0,16,14,26,33,32"},"9":{"d":"32,3r0,-43v49,6,96,-19,99,-58v-40,37,-120,10,-120,-56v0,-46,37,-84,88,-84v109,0,106,160,48,208v-28,24,-66,36,-115,33xm98,-120v21,0,34,-8,34,-29v0,-25,-9,-50,-35,-49v-18,0,-32,17,-32,41v0,20,11,37,33,37"},":":{"d":"50,-112v-19,0,-32,-14,-32,-33v0,-19,13,-33,32,-33v19,0,32,13,32,33v0,19,-13,33,-32,33xm50,4v-19,0,-32,-14,-32,-33v0,-19,13,-33,32,-33v19,0,32,13,32,33v0,19,-13,33,-32,33","w":93},";":{"d":"37,40r-36,3v12,-32,21,-69,26,-102r55,-4v-12,37,-28,75,-45,103xm52,-112v-19,0,-32,-14,-32,-33v0,-19,13,-33,32,-33v19,0,32,13,32,33v0,19,-13,33,-32,33","w":93},"<":{"d":"21,-80r0,-31r173,-80r0,38r-131,58r131,57r0,38","w":214},"=":{"d":"200,-117r-186,0r0,-33r186,0r0,33xm200,-42r-186,0r0,-34r186,0r0,34","w":214},">":{"d":"194,-112r0,33r-173,79r0,-38r133,-58r-133,-57r0,-38","w":214},"?":{"d":"147,-191v1,49,-54,62,-49,112r-48,0v-13,-38,38,-72,41,-103v3,-29,-44,-25,-61,-11r-12,-39v13,-8,34,-15,60,-15v47,0,69,26,69,56xm105,-29v0,19,-13,33,-33,33v-19,0,-32,-14,-32,-33v0,-19,13,-33,32,-33v19,0,33,14,33,33","w":160},"@":{"d":"129,-53v25,0,32,-43,36,-71v-31,-9,-54,17,-54,49v0,14,6,22,18,22xm190,4r6,20v-82,36,-179,-3,-178,-100v0,-73,54,-137,135,-137v64,0,109,44,109,104v0,53,-30,86,-69,86v-17,0,-29,-9,-31,-28v-22,40,-87,39,-87,-20v0,-60,69,-103,127,-74r-11,67v-3,21,-1,31,9,31v15,1,35,-20,35,-61v0,-47,-30,-83,-86,-83v-55,0,-103,43,-103,112v0,81,77,113,144,83","w":277},"A":{"d":"150,-62r-70,0r-17,62r-57,0r74,-243r72,0r76,243r-60,0xm88,-103r53,0r-28,-99v-6,34,-16,68,-25,99","w":236,"k":{"T":30,"J":-5,"C":9,"G":9,"O":9,"Q":9,"U":13,"V":21,"W":21,"X":9,"Y":34,"Z":-2,"f":5,"g":5,"b":2,"h":2,"k":2,"l":2,"j":2,"i":2,"m":2,"n":2,"p":2,"r":2,"c":5,"d":5,"e":5,"o":5,"q":5,"t":7,"u":5,"v":11,"w":11,"y":11,"\u00ad":3,")":6,"]":6,"}":6,"\"":17,"'":17}},"B":{"d":"204,-71v0,60,-45,73,-121,74v-27,0,-47,-2,-59,-4r0,-238v14,-3,43,-5,71,-5v58,-1,100,13,100,61v0,21,-12,42,-39,52v28,7,48,29,48,60xm78,-203r0,56v32,2,65,-5,62,-29v5,-26,-36,-31,-62,-27xm78,-107r0,68v31,4,68,-1,68,-34v0,-30,-33,-36,-68,-34","w":217,"k":{"T":6,"V":4,"W":4,"Y":12,"A":1,"c":-2,"d":-2,"e":-2,"o":-2,"q":-2,"v":2,"w":2,"y":2,"\u00ad":-4,",":5,".":5}},"C":{"d":"194,-50r8,43v-10,5,-33,11,-62,11v-84,0,-127,-53,-127,-122v0,-105,103,-149,192,-118r-12,44v-54,-23,-123,-3,-123,71v0,66,65,94,124,71","w":214,"k":{"T":-5,"J":-4,"C":11,"G":11,"O":11,"Q":11,"V":-3,"W":-3,"Y":-3,"A":-4,"i":1,"m":1,"n":1,"p":1,"r":1,"c":7,"d":7,"e":7,"o":7,"q":7,"u":7,"v":12,"w":12,"y":12,"a":4,"z":-3,")":-3,"]":-3,"}":-3,"\"":-2,"'":-2}},"D":{"d":"238,-127v5,116,-104,141,-214,126r0,-238v20,-4,47,-5,74,-5v91,0,136,34,140,117xm78,-200r0,159v62,7,102,-19,102,-84v0,-59,-44,-85,-102,-75","w":250,"k":{"T":10,"V":3,"W":3,"X":12,"Y":13,"A":6,"f":-4,"g":-1,"i":-1,"m":-1,"n":-1,"p":-1,"r":-1,"t":-5,"u":-2,"v":-4,"w":-4,"y":-4,"x":4,"\u00ad":-4,")":7,"]":7,"}":7,",":14,".":14}},"E":{"d":"168,-147r0,44r-89,0r0,58r100,0r0,45r-155,0r0,-243r150,0r0,45r-95,0r0,51r89,0","w":192,"k":{"T":-2,"J":-8,"V":-3,"W":-3,"f":2,"g":3,"b":-1,"h":-1,"k":-1,"l":-1,"j":2,"c":1,"d":1,"e":1,"o":1,"q":1,"t":2,"u":4,"v":4,"w":4,"y":4,"z":-2,"s":-1,",":3,".":3}},"F":{"d":"24,0r0,-243r148,0r0,45r-93,0r0,56r87,0r0,44r-87,0r0,98r-55,0","w":189,"k":{"J":25,"A":24,"M":5,"g":3,"b":5,"h":5,"k":5,"l":5,"i":7,"m":7,"n":7,"p":7,"r":7,"c":9,"d":9,"e":9,"o":9,"q":9,"u":10,"v":7,"w":7,"y":7,"a":14,":":6,";":6,",":32,".":32}},"G":{"d":"145,3v-83,1,-128,-44,-132,-121v-6,-107,115,-149,206,-116r-12,45v-53,-25,-137,-9,-137,68v0,60,47,89,104,76r0,-51r-38,0r0,-43r90,0r0,128v-17,6,-49,14,-81,14","w":245,"k":{"c":-2,"d":-2,"e":-2,"o":-2,"q":-2,"v":3,"w":3,"y":3,"a":-3}},"H":{"d":"24,-243r55,0r0,94r90,0r0,-94r55,0r0,243r-55,0r0,-101r-90,0r0,101r-55,0r0,-243","w":248,"k":{"Y":6,"f":-2,"t":-3}},"I":{"d":"24,-243r55,0r0,243r-55,0r0,-243","w":102,"k":{"Y":6,"f":-2,"t":-3}},"J":{"d":"71,-90r0,-153r55,0r0,154v2,86,-58,104,-126,87r6,-44v34,9,65,7,65,-44","w":147,"k":{"a":2,")":-5,"]":-5,"}":-5,",":3,".":3}},"K":{"d":"24,0r0,-243r54,0r1,108r71,-108r68,0r-80,104r84,139r-64,0r-59,-105r-21,26r0,79r-54,0","w":221,"k":{"T":-2,"J":-10,"C":12,"G":12,"O":12,"Q":12,"Y":5,"Z":-6,"A":-5,"g":5,"c":6,"d":6,"e":6,"o":6,"q":6,"u":7,"v":15,"w":15,"y":15,":":-3,";":-3,"\u00ad":8,")":-3,"]":-3,"}":-3,"\"":-1,"'":-1,",":-3,".":-3}},"L":{"d":"24,0r0,-243r55,0r0,197r96,0r0,46r-151,0","w":183,"k":{"T":37,"J":-10,"C":14,"G":14,"O":14,"Q":14,"U":11,"V":23,"W":23,"Y":32,"A":-2,"j":1,"c":3,"d":3,"e":3,"o":3,"q":3,"t":2,"u":4,"v":13,"w":13,"y":13,"a":-1,"\u00ad":6,"\"":36,"'":36}},"M":{"d":"233,0r-7,-193r-57,189r-43,0r-26,-94v-8,-28,-16,-63,-22,-95r-9,193r-51,0r16,-243r73,0r24,81v10,27,12,63,22,87v13,-58,31,-114,48,-168r72,0r13,243r-53,0","w":304,"k":{"T":5,"i":-2,"m":-2,"n":-2,"p":-2,"r":-2}},"N":{"d":"74,0r-50,0r0,-243r64,0r50,89v15,25,28,58,41,83v-6,-52,-5,-113,-5,-172r51,0r0,243r-58,0r-52,-94v-15,-25,-29,-59,-43,-85","w":248,"k":{"Y":6,"f":-2,"t":-3}},"O":{"d":"127,4v-72,0,-114,-55,-114,-124v0,-73,47,-127,118,-127v75,0,115,56,115,123v0,80,-48,128,-119,128xm71,-121v0,46,21,81,59,81v37,0,58,-34,58,-82v0,-44,-20,-81,-58,-81v-38,0,-59,37,-59,82","w":258,"k":{"T":10,"V":3,"W":3,"X":12,"Y":13,"A":6,"f":-4,"g":-1,"i":-1,"m":-1,"n":-1,"p":-1,"r":-1,"t":-5,"u":-2,"v":-4,"w":-4,"y":-4,"x":4,"\u00ad":-4,")":7,"]":7,"}":7,",":14,".":14}},"P":{"d":"198,-169v2,64,-54,89,-120,82r0,87r-54,0r0,-239v17,-3,41,-5,74,-5v62,-1,98,21,100,75xm78,-201r0,72v33,6,68,-8,66,-38v4,-30,-37,-41,-66,-34","w":209,"k":{"J":27,"V":3,"W":3,"X":10,"Y":7,"Z":3,"A":22,"M":5,"g":9,"i":3,"m":3,"n":3,"p":3,"r":3,"c":9,"d":9,"e":9,"o":9,"q":9,"t":-4,"u":4,"v":-3,"w":-3,"y":-3,"a":6,"s":8,":":4,";":4,"\u00ad":5,")":1,"]":1,"}":1,",":52,".":52}},"Q":{"d":"231,42v-41,-10,-70,-31,-112,-38v-54,-9,-106,-44,-106,-123v0,-73,45,-128,118,-128v74,0,115,57,115,123v0,57,-28,92,-57,110v18,5,39,9,58,13xm71,-121v0,46,21,81,59,81v37,0,58,-34,58,-82v0,-44,-21,-81,-58,-81v-37,0,-59,36,-59,82","w":258,"k":{"T":10,"V":3,"W":3,"X":12,"Y":13,"A":6,"f":-4,"g":-1,"i":-1,"m":-1,"n":-1,"p":-1,"r":-1,"t":-5,"u":-2,"v":-4,"w":-4,"y":-4,"x":4,"\u00ad":-4,")":7,"]":7,"}":7,",":14,".":14}},"R":{"d":"97,-244v61,-1,99,17,101,70v1,32,-24,50,-43,60v35,8,40,92,52,114r-56,0v-4,-7,-10,-27,-17,-57v-8,-38,-21,-39,-56,-38r0,95r-54,0r0,-239v18,-3,43,-5,73,-5xm78,-202r0,67v35,3,65,-6,65,-35v0,-31,-37,-36,-65,-32","w":213,"k":{"J":-2,"C":1,"G":1,"O":1,"Q":1,"U":2,"V":2,"W":2,"X":-3,"Y":7,"A":-3,"b":-3,"h":-3,"k":-3,"l":-3,"i":-4,"m":-4,"n":-4,"p":-4,"r":-4,"t":-4,"v":-1,"w":-1,"y":-1,"a":-3}},"S":{"d":"14,-12r12,-45v21,16,99,29,99,-11v0,-15,-12,-24,-41,-34v-40,-14,-67,-37,-67,-72v0,-41,35,-72,92,-72v28,0,48,5,62,12r-12,44v-13,-13,-86,-20,-86,12v0,15,12,24,45,34v96,30,81,150,-35,148v-28,0,-55,-8,-69,-16","w":194,"k":{"b":1,"h":1,"k":1,"l":1,"j":3,"c":-3,"d":-3,"e":-3,"o":-3,"q":-3,"t":2,"v":5,"w":5,"y":5,"a":-3,"\u00ad":-4}},"T":{"d":"71,0r0,-197r-66,0r0,-46r187,0r0,46r-66,0r0,197r-55,0","w":197,"k":{"i":19,"T":-8,"J":19,"C":10,"G":10,"O":10,"Q":10,"V":-10,"W":-10,"X":-6,"Y":-3,"A":26,"M":1,"S":3,"g":22,"b":4,"h":4,"k":4,"l":4,"m":19,"n":19,"p":19,"r":19,"c":29,"d":29,"e":29,"o":29,"q":29,"u":19,"v":19,"w":19,"y":19,"a":24,"z":21,"s":26,"x":5,":":13,";":13,"\u00ad":22,")":-11,"]":-11,"}":-11,"\"":-3,"'":-3,",":30,".":30}},"U":{"d":"24,-243r54,0v6,70,-25,203,44,203v70,0,38,-133,45,-203r55,0r0,136v0,75,-38,111,-101,111v-61,0,-97,-34,-97,-111r0,-136","w":245,"k":{"A":11,"f":-2,"v":2,"w":2,"y":2,"a":2,"z":3,"s":5,"x":4,",":8,".":8}},"V":{"d":"145,0r-64,0r-78,-243r60,0r30,103v10,28,12,61,23,87v14,-66,35,-127,52,-190r59,0","w":228,"k":{"T":-8,"J":14,"C":3,"G":3,"O":3,"Q":3,"V":-2,"W":-2,"A":19,"S":3,"g":3,"b":3,"h":3,"k":3,"l":3,"i":10,"m":10,"n":10,"p":10,"r":10,"c":15,"d":15,"e":15,"o":15,"q":15,"t":3,"u":11,"v":5,"w":5,"y":5,"a":15,"s":14,":":8,";":8,"\u00ad":9,")":-10,"]":-10,"}":-10,"\"":-5,"'":-5,",":25,".":25}},"W":{"d":"123,0r-60,0r-58,-243r59,0r34,185v9,-61,24,-126,36,-185r58,0r33,184r34,-184r56,0r-63,243r-59,0r-21,-104v-6,-23,-6,-50,-12,-75v-9,63,-25,119,-37,179","w":319,"k":{"T":-8,"J":14,"C":3,"G":3,"O":3,"Q":3,"V":-2,"W":-2,"A":19,"S":3,"g":3,"b":3,"h":3,"k":3,"l":3,"i":10,"m":10,"n":10,"p":10,"r":10,"c":15,"d":15,"e":15,"o":15,"q":15,"t":3,"u":11,"v":5,"w":5,"y":5,"a":15,"s":14,":":8,";":8,"\u00ad":9,")":-10,"]":-10,"}":-10,"\"":-5,"'":-5,",":25,".":25}},"X":{"d":"215,0r-63,0r-45,-87v-10,27,-27,59,-39,87r-62,0r70,-123r-68,-120r63,0r41,85v11,-31,24,-57,37,-85r62,0r-68,119","w":220,"k":{"T":-2,"J":-4,"C":14,"G":14,"O":14,"Q":14,"V":-3,"W":-3,"X":4,"Y":-4,"A":5,"c":7,"d":7,"e":7,"o":7,"q":7,"u":4,"v":13,"w":13,"y":13,"a":3,"\u00ad":6,"\"":-1,"'":-1}},"Y":{"d":"135,0r-55,0r0,-99r-77,-144r63,0r44,105r43,-105r62,0r-80,142r0,101","w":217,"k":{"J":25,"C":17,"G":17,"O":17,"Q":17,"V":-7,"W":-7,"X":8,"Y":9,"A":33,"M":8,"S":10,"B":6,"D":6,"E":6,"F":6,"H":6,"I":6,"K":6,"L":6,"N":6,"P":6,"R":6,"g":29,"b":5,"h":5,"k":5,"l":5,"i":8,"m":8,"n":8,"p":8,"r":8,"c":39,"d":39,"e":39,"o":39,"q":39,"t":16,"u":26,"v":19,"w":19,"y":19,"a":33,"z":18,"s":23,"x":20,":":18,";":18,"\u00ad":22,")":-12,"]":-12,"}":-12,"\"":-3,"'":-3,",":42,".":42}},"Z":{"d":"9,0r0,-30r115,-167r-105,0r0,-46r176,0r0,32r-113,166r115,0r0,45r-188,0","w":207,"k":{"J":-8,"C":8,"G":8,"O":8,"Q":8,"X":2,"Y":-2,"A":-3,"c":3,"d":3,"e":3,"o":3,"q":3,"u":4,"v":6,"w":6,"y":6,"a":-1,"\u00ad":3}},"[":{"d":"98,40r-74,0r0,-287r74,0r0,30r-34,0r0,227r34,0r0,30","w":113,"k":{"T":-8,"J":-4,"C":8,"G":8,"O":8,"Q":8,"V":-10,"W":-10,"X":-2,"Y":-11,"A":7,"j":-18}},"\\":{"d":"113,14r-36,0r-73,-261r37,0","w":118},"]":{"d":"15,-247r74,0r0,287r-74,0r0,-30r34,0r0,-227r-34,0r0,-30","w":113},"^":{"d":"199,-64r-39,0r-53,-128r-53,128r-39,0r76,-170r33,0","w":214},"_":{"d":"0,27r180,0r0,18r-180,0r0,-18","w":180},"a":{"d":"91,-180v104,-1,69,96,80,180r-49,0v-2,-6,-1,-14,-4,-18v-28,40,-108,20,-108,-32v0,-46,42,-67,104,-67v4,-35,-62,-26,-81,-12r-10,-35v12,-7,36,-16,68,-16xm64,-55v0,35,52,19,52,-9r0,-19v-29,0,-52,7,-52,28","w":190},"b":{"d":"21,0r1,-256r55,0r0,101v40,-51,126,-19,126,64v0,63,-40,95,-80,95v-22,1,-40,-9,-54,-28r-2,24r-46,0xm148,-89v0,-54,-68,-68,-71,-12v-2,34,4,61,33,62v23,0,38,-18,38,-50","w":215,"k":{"T":18,"v":3,"w":3,"y":3,"z":3,"x":9,"\u00ad":-6,")":3,"]":3,"}":3,"\"":7,"'":7,",":12,".":12}},"c":{"d":"148,-45r6,40v-62,26,-150,-7,-142,-81v-6,-64,69,-113,142,-87r-8,41v-32,-16,-78,2,-78,43v0,45,45,59,80,44","w":162,"k":{"T":5,"f":-3,"c":4,"d":4,"e":4,"o":4,"q":4,"t":-6,"v":-5,"w":-5,"y":-5,"a":-1,"\u00ad":-4,"\"":-2,"'":-2,",":3,".":3}},"d":{"d":"138,-256r55,0r1,256r-49,0v-2,-8,0,-20,-3,-26v-39,59,-130,24,-130,-60v0,-82,80,-120,126,-74r0,-96xm67,-88v0,58,71,64,71,10v0,-33,-4,-60,-33,-60v-25,0,-38,22,-38,50","w":214,"k":{",":3,".":3}},"e":{"d":"177,-71r-113,0v3,40,65,39,98,26r8,37v-68,30,-158,3,-158,-78v0,-45,28,-94,89,-94v64,0,84,54,76,109xm64,-108r65,0v0,-13,-6,-36,-31,-36v-23,0,-33,22,-34,36","w":190,"k":{"T":15,"v":2,"w":2,"y":2,"x":4,"\u00ad":-11,",":6,".":6}},"f":{"d":"28,-176v-5,-57,42,-98,100,-80r-2,42v-27,-8,-48,6,-43,38r35,0r0,40r-35,0r0,136r-55,0r0,-136r-23,0r0,-40r23,0","w":122,"k":{"g":3,"c":4,"d":4,"e":4,"o":4,"q":4,"t":-5,"s":2,":":-10,";":-10,")":-26,"]":-26,"}":-26,"\"":-15,"'":-15,",":14,".":14}},"g":{"d":"189,-26v11,91,-86,123,-162,88r11,-42v32,22,111,20,96,-44v-41,51,-122,10,-122,-63v0,-81,87,-122,129,-68r2,-21r47,0xm67,-89v0,52,67,65,67,11v0,-32,-3,-61,-31,-61v-20,0,-36,18,-36,50","w":210,"k":{"T":12,",":6,".":6}},"h":{"d":"106,-136v-50,0,-22,88,-29,136r-55,0r0,-256r55,0r0,101v34,-44,112,-30,112,52r0,103r-55,0r0,-97v0,-23,-7,-39,-28,-39","w":210,"k":{"T":21,"t":2,"v":7,"w":7,"y":7,"\"":5,"'":5}},"i":{"d":"77,0r-55,0r0,-176r55,0r0,176xm49,-198v-17,0,-28,-12,-28,-27v0,-15,11,-27,29,-27v18,0,28,12,28,27v0,15,-11,27,-29,27","w":98},"j":{"d":"-14,35v38,-6,43,-14,43,-69r0,-142r55,0v-7,107,36,260,-93,253xm56,-198v-17,0,-29,-12,-29,-27v0,-15,12,-27,30,-27v18,0,28,12,28,27v0,15,-11,27,-29,27","w":104,"k":{",":4,".":4}},"k":{"d":"77,-256r0,154v15,-27,33,-49,49,-74r66,0r-63,71r72,105r-68,0r-43,-72r-13,17r0,55r-55,0r0,-256r55,0","w":195,"k":{"T":10,"g":5,"b":-4,"h":-4,"k":-4,"l":-4,"i":-4,"m":-4,"n":-4,"p":-4,"r":-4,"c":5,"d":5,"e":5,"o":5,"q":5,"a":-2,"\u00ad":2,",":-1,".":-1}},"l":{"d":"22,0r0,-256r55,0r0,256r-55,0","w":99,"k":{",":3,".":3}},"m":{"d":"103,-136v-50,0,-21,88,-28,136r-53,0r-1,-176r46,0v2,7,0,18,3,24v8,-12,23,-28,53,-28v23,0,41,12,49,30v32,-47,116,-42,116,46r0,104r-53,0r0,-95v7,-52,-53,-52,-53,-8r0,103r-53,0r0,-99v0,-22,-8,-37,-26,-37","w":309,"k":{"T":21,"t":2,"v":7,"w":7,"y":7,"\"":5,"'":5}},"n":{"d":"107,-136v-51,0,-23,87,-30,136r-55,0r-1,-176r47,0v2,7,0,18,4,24v7,-12,24,-28,54,-28v36,0,63,24,63,76r0,104r-55,0r0,-98v0,-23,-7,-38,-27,-38","w":210,"k":{"T":21,"t":2,"v":7,"w":7,"y":7,"\"":5,"'":5}},"o":{"d":"103,4v-51,0,-91,-34,-91,-91v0,-57,37,-93,94,-93v54,0,90,37,90,90v0,64,-46,94,-93,94xm104,-35v22,0,35,-21,35,-53v0,-26,-10,-53,-35,-53v-26,0,-36,27,-36,53v0,30,13,53,36,53","w":207,"k":{"T":18,"v":3,"w":3,"y":3,"z":3,"x":9,"\u00ad":-6,")":3,"]":3,"}":3,"\"":7,"'":7,",":12,".":12}},"p":{"d":"22,71r-1,-247r47,0r3,24v42,-55,132,-25,132,62v0,86,-81,119,-126,74r0,87r-55,0xm148,-88v0,-56,-67,-66,-71,-12v-2,33,4,62,33,62v24,0,38,-20,38,-50","w":215,"k":{"T":18,"v":3,"w":3,"y":3,"z":3,"x":9,"\u00ad":-6,")":3,"]":3,"}":3,"\"":7,"'":7,",":12,".":12}},"q":{"d":"12,-86v0,-88,86,-121,128,-69r1,-21r53,0r-1,247r-55,0r-1,-93v-41,54,-125,19,-125,-64xm67,-88v0,57,69,65,71,12v2,-33,-3,-61,-33,-61v-25,0,-38,21,-38,49","w":214,"k":{"T":13,",":3,".":3}},"r":{"d":"130,-127v-29,-7,-53,7,-53,38r0,89r-55,0r-1,-176r46,0v2,10,-2,26,4,33v13,-30,31,-40,59,-36r0,52","w":136,"k":{"T":7,"f":-10,"g":3,"c":3,"d":3,"e":3,"o":3,"q":3,"t":-8,"v":-6,"w":-6,"y":-6,"a":4,"z":-3,"x":-5,":":1,";":1,",":23,".":23}},"s":{"d":"12,-9r10,-39v13,9,68,24,70,-1v0,-9,-5,-14,-25,-20v-81,-21,-59,-111,21,-111v21,0,38,5,49,10r-9,38v-11,-7,-57,-20,-59,4v0,8,6,13,28,20v75,21,59,115,-28,112v-23,0,-44,-6,-57,-13","w":156,"k":{"T":13,",":4,".":4}},"t":{"d":"121,-1v-47,14,-91,-3,-91,-63r0,-72r-24,0r0,-40r24,0r0,-33r53,-15r0,48r39,0r0,40r-39,0v4,39,-17,108,38,94r0,41","w":132,"k":{"g":2,"c":2,"d":2,"e":2,"o":2,"q":2,"v":-2,"w":-2,"y":-2,",":3,".":3}},"u":{"d":"76,-81v-7,51,57,52,57,10r0,-105r55,0r1,176r-47,0v-2,-8,0,-19,-4,-25v-7,11,-23,29,-55,29v-36,0,-62,-23,-62,-77r0,-103r55,0r0,95","w":209,"k":{"T":13,",":3,".":3}},"v":{"d":"3,-176r60,0v13,40,19,88,35,125v7,-43,21,-84,32,-125r58,0r-66,176r-55,0","w":190,"k":{"T":13,"g":5,"c":5,"d":5,"e":5,"o":5,"q":5,"v":-7,"w":-7,"y":-7,"a":3,"s":6,":":-2,";":-2,"\u00ad":3,",":17,".":17}},"w":{"d":"4,-176r56,0r25,130r31,-130r43,0r32,130v6,-45,16,-88,25,-130r54,0r-54,176r-51,0r-29,-117v-6,47,-18,77,-29,117r-52,0","w":273,"k":{"T":13,"g":5,"c":5,"d":5,"e":5,"o":5,"q":5,"v":-7,"w":-7,"y":-7,"a":3,"s":6,":":-2,";":-2,"\u00ad":3,",":17,".":17}},"x":{"d":"3,-176r61,0v11,18,20,39,32,56r29,-56r60,0r-58,84r58,92r-62,0v-11,-19,-19,-41,-32,-59v-9,21,-20,39,-30,59r-60,0r60,-90","w":186,"k":{"T":10,"c":8,"d":8,"e":8,"o":8,"q":8,"t":-5,"v":-7,"w":-7,"y":-7,"s":3,"\u00ad":1}},"y":{"d":"20,33v22,-5,58,-22,47,-48r-65,-161r61,0r36,119r30,-119r58,0v-40,94,-59,246,-156,256","w":188,"k":{"T":13,"g":5,"c":5,"d":5,"e":5,"o":5,"q":5,"v":-7,"w":-7,"y":-7,"a":3,"s":6,":":-2,";":-2,"\u00ad":3,",":17,".":17}},"z":{"d":"8,0r0,-32r55,-69v10,-12,18,-21,28,-31r-77,0r0,-44r144,0r0,33r-53,67v-10,11,-19,22,-29,32r85,0r0,44r-153,0","w":168,"k":{"T":10,"c":3,"d":3,"e":3,"o":3,"q":3,"v":-3,"w":-3,"y":-3}},"{":{"d":"34,-9v-2,-34,25,-76,-23,-81r0,-27v48,-4,21,-47,23,-81v2,-38,28,-52,68,-49r0,31v-63,-6,7,108,-56,113v37,2,31,51,27,87v-2,19,8,28,29,26r0,30v-40,2,-66,-8,-68,-49","w":113,"k":{"T":-8,"J":-4,"C":8,"G":8,"O":8,"Q":8,"V":-10,"W":-10,"X":-2,"Y":-11,"A":7,"j":-18}},"|":{"d":"32,-270r38,0r0,360r-38,0r0,-360","w":101},"}":{"d":"79,-198v2,34,-25,77,23,81r0,27v-48,5,-21,47,-23,81v-2,40,-28,51,-67,49r0,-30v62,5,-8,-109,55,-114v-37,-2,-30,-51,-27,-87v2,-18,-8,-27,-28,-25r0,-31v40,-2,65,11,67,49","w":113},"~":{"d":"151,-67v-25,0,-64,-30,-84,-32v-9,0,-16,7,-17,30r-35,0v0,-48,22,-67,51,-67v25,0,63,30,84,31v8,0,14,-7,15,-29r34,0v2,51,-21,67,-48,67","w":214},"'":{"d":"13,-249r48,0r-8,97r-32,0","w":73,"k":{"T":-3,"J":21,"C":3,"G":3,"O":3,"Q":3,"V":-3,"W":-3,"X":-1,"Y":-3,"A":17,"f":-9,"g":7,"c":5,"d":5,"e":5,"o":5,"q":5,"t":-8,"v":-2,"w":-2,"y":-2,",":45,".":45}},"`":{"d":"1,-253r51,0r31,55r-38,0","w":108}}});
/*!
 * The following copyright notice may not be removed under any circumstances.
 * 
 * Copyright:
 * Copyright © 2000 Adobe Systems Incorporated. All Rights Reserved. U.S. Patent
 * Des. pending.
 * 
 * Trademark:
 * Myriad is a registered trademark of Adobe Systems Incorporated.
 * 
 * Full name:
 * MyriadPro-It
 * 
 * Designer:
 * Robert Slimbach and Carol Twombly
 * 
 * Vendor URL:
 * http://www.adobe.com/type
 * 
 * License information:
 * http://www.adobe.com/type/legal.html
 */
Cufon.registerFont({"w":177,"face":{"font-family":"Myriad","font-weight":400,"font-style":"italic","font-stretch":"normal","units-per-em":"360","panose-1":"2 11 5 3 3 4 3 9 2 4","ascent":"270","descent":"-90","x-height":"4","bbox":"-40 -270 322 90","underline-thickness":"18","underline-position":"-18","slope":"-11","stemh":"23","stemv":"32","unicode-range":"U+0020-U+007E"},"glyphs":{" ":{"w":65},"\u00a0":{"w":65},"!":{"d":"51,-70r-24,0r29,-173r34,0xm28,4v-12,0,-20,-9,-20,-21v0,-13,10,-24,23,-24v12,0,20,9,20,21v0,13,-10,24,-23,24","w":84},"\"":{"d":"44,-249r31,0r-22,87r-20,0xm98,-249r31,0r-23,87r-20,0","w":109,"k":{"A":14,"Y":-9,"J":20,"f":-15,"t":-9,"b":-4,"h":-4,"k":-4,"l":-4,",":37,".":37}},"#":{"d":"69,-91r33,0r16,-53r-32,0xm41,0r-21,0r22,-71r-30,0r4,-20r33,0r16,-53r-31,0r3,-21r34,0r22,-69r21,0r-22,69r33,0r22,-69r20,0r-21,69r29,0r-3,21r-33,0r-16,53r31,0r-4,20r-34,0r-21,71r-22,0r22,-71r-32,0"},"$":{"d":"76,31r-22,0r7,-36v-17,-1,-37,-8,-47,-16r9,-24v25,23,97,23,95,-24v0,-16,-6,-30,-30,-40v-69,-28,-55,-113,17,-121r7,-35r22,0r-7,35v18,1,32,8,39,13r-10,22v-19,-18,-83,-15,-83,24v0,16,8,27,35,39v68,30,44,123,-25,127"},"%":{"d":"25,-146v0,-44,26,-93,68,-92v30,0,42,24,42,49v0,51,-27,94,-66,94v-28,0,-44,-20,-44,-51xm89,-219v-24,0,-40,41,-40,73v0,17,5,32,23,32v24,0,39,-43,39,-74v0,-14,-4,-31,-22,-31xm67,4r-22,0r177,-242r21,0xm222,-141v30,0,43,23,43,48v0,51,-27,96,-66,96v-27,0,-44,-22,-44,-53v0,-45,26,-91,67,-91xm219,-122v-24,0,-39,41,-39,73v0,17,4,32,22,32v24,0,39,-43,39,-74v0,-14,-4,-31,-22,-31","w":278},"&":{"d":"192,0r-35,0v-6,-7,-11,-13,-17,-22v-39,44,-134,29,-134,-35v0,-39,32,-63,60,-79v-31,-46,-4,-111,51,-111v32,0,49,22,49,48v1,30,-22,51,-62,72v13,23,31,49,44,67v15,-18,26,-41,36,-72r28,0v-13,39,-29,69,-51,92v9,13,19,26,31,40xm36,-61v0,47,69,54,91,20v-12,-17,-32,-47,-50,-77v-16,10,-41,27,-41,57xm114,-225v-33,-1,-43,53,-22,80v29,-14,47,-30,47,-53v0,-14,-7,-27,-25,-27","w":212},"(":{"d":"100,-249r26,0v-57,59,-105,186,-56,292r-22,0v-55,-93,-4,-244,52,-292","w":102,"k":{"T":-18,"A":3,"C":3,"G":3,"O":3,"Q":3,"V":-16,"W":-16,"Y":-12,"j":-15,"c":4,"d":4,"e":4,"o":4,"q":4}},")":{"d":"9,43r-26,0v56,-59,105,-186,56,-292r23,0v53,94,3,244,-53,292","w":102},"*":{"d":"122,-247r20,13r-39,45r55,-7r-5,24v-17,-1,-37,-6,-52,-5r29,43r-23,13v-7,-16,-10,-35,-18,-50r-28,50r-19,-13v12,-16,29,-27,39,-45r-54,7r5,-24v16,1,36,7,50,6r-28,-44r23,-12v7,16,10,35,18,49","w":149},"+":{"d":"99,-192r22,0r0,85r79,0r0,21r-79,0r0,86r-22,0r0,-86r-79,0r0,-21r79,0r0,-85","w":214},",":{"d":"8,42r-23,3v11,-22,27,-61,35,-87r35,-3v-13,31,-34,70,-47,87","w":75,"k":{"T":22,"A":-6,"V":19,"W":19,"X":-7,"Y":27,"Z":-8,"\"":48,"'":48}},"-":{"d":"17,-109r86,0r-4,23r-86,0","w":110},"\u00ad":{"d":"17,-109r86,0r-4,23r-86,0","w":110,"k":{"T":19,"C":-7,"G":-7,"O":-7,"Q":-7,"V":5,"W":5,"X":2,"Y":17,"J":12,"g":-8,"c":-9,"d":-9,"e":-9,"o":-9,"q":-9,"a":-8}},".":{"d":"50,-20v0,13,-9,24,-23,24v-12,0,-19,-10,-19,-22v0,-13,9,-24,22,-24v12,0,20,10,20,22","w":75,"k":{"T":22,"A":-6,"V":19,"W":19,"X":-7,"Y":27,"Z":-8,"\"":48,"'":48}},"\/":{"d":"5,14r-24,0r144,-261r25,0","w":117},"0":{"d":"176,-165v0,77,-36,170,-102,169v-43,0,-59,-35,-59,-80v0,-78,41,-162,103,-162v45,0,58,37,58,73xm78,-20v44,0,68,-96,68,-143v0,-18,-3,-51,-32,-51v-41,0,-69,82,-69,139v0,25,5,55,33,55"},"1":{"d":"65,0r38,-204r-40,20r-3,-23v26,-10,40,-31,79,-27r-45,234r-29,0"},"2":{"d":"141,0r-141,0r4,-20v52,-43,143,-114,134,-157v0,-17,-9,-35,-36,-35v-21,0,-38,9,-49,17r-7,-22v16,-12,40,-21,62,-21v44,0,61,29,61,57v0,55,-67,112,-121,155r98,0"},"3":{"d":"6,-11r10,-24v9,5,24,13,45,13v40,0,58,-27,58,-51v-1,-33,-28,-43,-62,-41r5,-24v32,2,67,-10,70,-45v4,-38,-60,-32,-78,-16r-6,-23v35,-28,115,-17,115,34v0,32,-26,52,-51,62v26,6,39,28,39,53v0,65,-98,97,-145,62"},"4":{"d":"121,0r-28,0r12,-65r-101,0r4,-20r124,-149r33,0r-27,145r31,0r-4,24r-32,0xm41,-90v20,3,46,0,68,1r23,-115v-26,43,-60,76,-91,114"},"5":{"d":"72,-149v43,-5,80,24,80,62v0,77,-89,111,-147,78r10,-24v37,25,110,3,106,-47v6,-33,-37,-51,-83,-44r33,-110r104,0r-5,26r-80,0"},"6":{"d":"169,-238r-4,26v-59,0,-98,38,-114,87v32,-47,114,-34,114,34v0,46,-36,95,-86,95v-45,0,-66,-33,-66,-77v0,-95,64,-161,156,-165xm134,-89v-1,-65,-80,-46,-90,2v-7,32,5,67,37,67v31,0,53,-36,53,-69"},"7":{"d":"48,-234r140,0r-4,21r-135,213r-34,0r135,-208r-107,0"},"8":{"d":"9,-54v0,-37,27,-60,55,-72v-56,-37,-14,-112,49,-112v34,0,59,21,59,53v1,29,-20,48,-46,62v70,35,23,127,-47,127v-44,0,-70,-25,-70,-58xm81,-19v27,0,49,-18,49,-46v0,-23,-13,-38,-41,-48v-47,2,-76,94,-8,94xm109,-215v-49,1,-59,70,-8,81v23,-8,42,-25,42,-47v0,-16,-8,-34,-34,-34"},"9":{"d":"20,4r4,-26v61,1,98,-38,114,-86v-34,46,-111,23,-111,-36v0,-48,38,-94,87,-94v110,0,49,178,3,208v-30,20,-56,34,-97,34xm93,-107v30,0,54,-23,54,-61v0,-27,-10,-46,-36,-46v-29,0,-53,33,-53,67v0,23,12,40,35,40"},":":{"d":"51,-123v-12,0,-19,-9,-19,-21v0,-13,9,-24,22,-24v12,0,20,9,20,21v0,13,-10,24,-23,24xm27,4v-12,0,-19,-9,-19,-21v0,-13,9,-24,22,-24v12,0,20,9,20,21v0,13,-10,24,-23,24","w":75},";":{"d":"7,42r-22,3v11,-22,27,-61,35,-87r35,-3v-13,31,-35,70,-48,87xm53,-123v-12,0,-20,-9,-20,-21v0,-13,10,-24,23,-24v12,0,20,9,20,21v0,13,-10,24,-23,24","w":75},"<":{"d":"28,-86r0,-19r161,-87r0,25r-135,72r135,71r0,24","w":214},"=":{"d":"200,-122r-180,0r0,-21r180,0r0,21xm200,-51r-180,0r0,-21r180,0r0,21","w":214},">":{"d":"195,-106r0,20r-162,86r0,-24r137,-72r-137,-71r0,-25","w":214},"?":{"d":"144,-202v3,52,-71,79,-69,133r-29,0v-7,-46,62,-85,67,-128v4,-29,-46,-30,-63,-15r-6,-22v32,-25,107,-11,100,32xm49,4v-12,0,-19,-9,-19,-21v0,-13,9,-24,22,-24v12,0,20,9,20,21v0,13,-10,24,-23,24","w":138},"@":{"d":"114,-43v36,0,47,-52,52,-89v-40,-13,-76,21,-76,62v0,16,8,27,24,27xm180,8r5,15v-78,41,-172,-4,-172,-98v0,-74,51,-138,131,-138v63,0,104,44,104,104v0,54,-30,86,-64,86v-15,0,-25,-13,-27,-32v-21,42,-88,46,-90,-14v-2,-58,63,-103,123,-78r-11,66v-5,27,-2,40,10,40v18,1,39,-25,39,-66v0,-53,-31,-90,-87,-90v-59,0,-108,47,-108,120v0,82,79,120,147,85","w":259},"A":{"d":"144,-77r-84,0r-38,77r-31,0r125,-243r35,0r34,243r-31,0xm72,-100r70,0v-6,-37,-5,-82,-15,-115v-16,40,-36,78,-55,115","w":204,"k":{"T":22,"A":4,"C":8,"G":8,"O":8,"Q":8,"U":10,"V":15,"W":15,"X":2,"Y":22,"f":1,"g":4,"j":-4,"i":-3,"m":-3,"n":-3,"p":-3,"r":-3,"c":4,"d":4,"e":4,"o":4,"q":4,"s":-2,"t":1,"u":1,"v":8,"w":8,"y":8,"x":-5,"z":-7,"\u00ad":2,"\"":13,"'":13}},"B":{"d":"170,-75v1,73,-88,85,-158,73r45,-237v51,-11,125,-8,125,49v0,31,-25,54,-52,61v22,6,40,25,40,54xm82,-219r-15,79v45,3,84,-9,84,-47v0,-32,-39,-38,-69,-32xm63,-117r-18,93v46,7,93,-4,93,-52v0,-37,-36,-44,-75,-41","w":186,"k":{"T":4,"A":-2,"U":3,"X":1,"Y":6,"v":-3,"w":-3,"y":-3,"\u00ad":-3,",":5,".":5}},"C":{"d":"204,-211v-75,-35,-155,27,-155,110v0,43,20,79,74,79v18,0,39,-3,52,-10r4,24v-14,6,-36,12,-63,12v-61,0,-98,-39,-98,-101v0,-98,100,-179,195,-138","w":199,"k":{"C":9,"G":9,"O":9,"Q":9,"V":-3,"W":-3,"M":-1,"g":1,"c":3,"d":3,"e":3,"o":3,"q":3,"u":3,"v":5,"w":5,"y":5,"z":-2,"a":3,")":-7,"]":-7,"}":-7}},"D":{"d":"229,-146v0,108,-93,168,-217,145r45,-238v86,-14,172,-1,172,93xm46,-25v93,16,151,-39,151,-120v0,-55,-49,-86,-114,-72","w":232,"k":{"T":10,"A":3,"X":4,"Y":12,"f":-8,"g":-5,"i":-2,"m":-2,"n":-2,"p":-2,"r":-2,"c":-4,"d":-4,"e":-4,"o":-4,"q":-4,"s":-3,"t":-8,"u":-2,"v":-6,"w":-6,"y":-6,"a":-4,"b":-3,"h":-3,"k":-3,"l":-3,":":-2,";":-2,"\u00ad":-5,",":9,".":9}},"E":{"d":"156,-139r-5,25r-88,0r-17,88r99,0r-5,26r-129,0r46,-243r124,0r-5,26r-94,0r-14,78r88,0","w":169,"k":{"V":-3,"W":-3,"f":-1,"g":2,"c":2,"d":2,"e":2,"o":2,"q":2,"t":1,"u":2,"v":3,"w":3,"y":3,"a":2,",":3,".":3}},"F":{"d":"11,0r46,-243r123,0r-5,26r-93,0r-15,82r85,0r-5,25r-85,0r-21,110r-30,0","w":167,"k":{"A":22,"C":1,"G":1,"O":1,"Q":1,"X":1,"M":3,"J":31,"g":13,"i":8,"m":8,"n":8,"p":8,"r":8,"c":10,"d":10,"e":10,"o":10,"q":10,"s":10,"u":10,"v":7,"w":7,"y":7,"x":12,"a":15,"b":6,"h":6,"k":6,"l":6,":":4,";":4,"\u00ad":2,"\"":-2,"'":-2,",":31,".":31}},"G":{"d":"212,-209v-79,-36,-162,26,-162,108v0,61,56,93,114,71r14,-72r-49,0r4,-25r79,0r-22,117v-14,6,-41,13,-69,13v-62,0,-103,-45,-103,-101v0,-78,62,-147,147,-147v30,0,49,7,57,11","w":224,"k":{"T":1,"A":-2,"V":2,"W":2,"Y":3,"a":-3}},"H":{"d":"57,-243r30,0r-19,103r111,0r20,-103r30,0r-46,243r-30,0r21,-114r-111,0r-22,114r-30,0","w":225,"k":{"f":-3,"t":-2,"v":-2,"w":-2,"y":-2,"z":-3}},"I":{"d":"57,-243r30,0r-46,243r-30,0","w":83,"k":{"f":-3,"t":-2,"v":-2,"w":-2,"y":-2,"z":-3}},"J":{"d":"76,-79r31,-164r29,0r-31,167v-10,72,-57,92,-116,73r6,-25v42,12,70,5,81,-51","w":131,"k":{"A":2,"v":-5,"w":-5,"y":-5,")":-12,"]":-12,"}":-12}},"K":{"d":"11,0r46,-243r30,0r-23,118v12,-7,18,-18,26,-27r85,-91r38,0r-102,105r62,138r-33,0r-53,-119r-29,27r-17,92r-30,0","w":185,"k":{"A":-2,"C":7,"G":7,"O":7,"Q":7,"U":3,"V":-5,"W":-5,"J":-8,"Z":-8,"g":2,"i":-3,"m":-3,"n":-3,"p":-3,"r":-3,"c":3,"d":3,"e":3,"o":3,"q":3,"u":4,"v":7,"w":7,"y":7,"b":-3,"h":-3,"k":-3,"l":-3,"\u00ad":9,")":-8,"]":-8,"}":-8,"\"":-3,"'":-3,",":-8,".":-8}},"L":{"d":"11,0r46,-243r30,0r-41,217r98,0r-5,26r-128,0","w":159,"k":{"T":31,"A":-4,"C":16,"G":16,"O":16,"Q":16,"U":18,"V":23,"W":23,"Y":32,"Z":-7,"g":4,"c":9,"d":9,"e":9,"o":9,"q":9,"u":5,"v":14,"w":14,"y":14,"z":-6,"\u00ad":21,"\"":49,"'":49}},"M":{"d":"243,0r-28,0r29,-213v-33,72,-73,143,-110,212r-23,0r-18,-131v-5,-27,-5,-58,-9,-81r-51,213r-28,0r63,-243r38,0r26,201v29,-69,69,-136,103,-201r39,0","w":280,"k":{"j":-4,"i":-2,"m":-2,"n":-2,"p":-2,"r":-2,"v":-3,"w":-3,"y":-3}},"N":{"d":"39,0r-28,0r46,-243r33,0r55,138v11,28,17,46,22,67v5,-62,25,-142,35,-205r28,0r-46,243r-29,0v-25,-66,-62,-137,-78,-207","w":227,"k":{"f":-3,"t":-2,"v":-2,"w":-2,"y":-2,"z":-3}},"O":{"d":"237,-147v1,74,-48,151,-128,151v-63,0,-92,-48,-92,-99v-1,-74,49,-153,128,-152v65,0,92,48,92,100xm141,-221v-61,0,-91,69,-92,124v0,40,17,77,65,76v60,0,91,-69,91,-125v0,-35,-11,-75,-64,-75","w":240,"k":{"T":10,"A":3,"X":4,"Y":12,"f":-8,"g":-5,"i":-2,"m":-2,"n":-2,"p":-2,"r":-2,"c":-4,"d":-4,"e":-4,"o":-4,"q":-4,"s":-3,"t":-8,"u":-2,"v":-6,"w":-6,"y":-6,"a":-4,"b":-3,"h":-3,"k":-3,"l":-3,":":-2,";":-2,"\u00ad":-5,",":9,".":9}},"P":{"d":"186,-182v-3,64,-60,94,-127,84r-18,98r-30,0r46,-239v54,-12,132,-7,129,57xm82,-218r-18,95v49,10,92,-15,92,-57v0,-39,-41,-44,-74,-38","w":182,"k":{"T":3,"A":23,"X":12,"J":27,"Z":13,"g":8,"i":4,"m":4,"n":4,"p":4,"r":4,"c":7,"d":7,"e":7,"o":7,"q":7,"s":4,"t":-3,"u":5,"v":-6,"w":-6,"y":-6,"a":8,"b":2,"h":2,"k":2,"l":2,":":4,";":4,"\u00ad":4,")":3,"]":3,"}":3,",":39,".":39}},"Q":{"d":"145,-247v144,5,100,220,3,243v18,8,44,9,64,13r-11,25v-42,-10,-74,-26,-101,-30v-46,-6,-83,-39,-83,-99v-1,-73,50,-155,128,-152xm141,-221v-62,0,-92,72,-92,125v0,39,16,76,64,75v61,0,92,-72,92,-126v0,-32,-11,-74,-64,-74","w":240,"k":{"T":10,"A":3,"X":4,"Y":12,"f":-8,"g":-5,"i":-2,"m":-2,"n":-2,"p":-2,"r":-2,"c":-4,"d":-4,"e":-4,"o":-4,"q":-4,"s":-3,"t":-8,"u":-2,"v":-6,"w":-6,"y":-6,"a":-4,"b":-3,"h":-3,"k":-3,"l":-3,":":-2,";":-2,"\u00ad":-5,",":9,".":9}},"R":{"d":"57,-239v55,-11,130,-7,129,52v0,36,-27,62,-58,71v34,3,27,96,34,116r-31,0v-1,-5,-3,-31,-5,-59v-2,-45,-24,-50,-65,-47r-20,106r-30,0xm82,-218r-16,89v50,5,88,-16,88,-54v0,-36,-41,-43,-72,-35","w":188,"k":{"T":3,"A":-2,"C":-2,"G":-2,"O":-2,"Q":-2,"U":4,"V":-2,"W":-2,"Y":5,"g":3,"i":-3,"m":-3,"n":-3,"p":-3,"r":-3,"t":-6,"v":-5,"w":-5,"y":-5,"a":1,"b":-3,"h":-3,"k":-3,"l":-3,"\u00ad":2}},"S":{"d":"119,-68v0,-43,-95,-61,-84,-107v-6,-62,87,-87,132,-59r-11,25v-23,-21,-90,-11,-90,28v0,20,11,33,38,45v75,34,53,144,-41,140v-24,0,-49,-8,-59,-17r11,-25v31,25,104,22,104,-30","w":167,"k":{"c":-4,"d":-4,"e":-4,"o":-4,"q":-4,"v":4,"w":4,"y":4,"a":-3}},"T":{"d":"53,0r41,-217r-71,0r5,-26r173,0r-6,26r-71,0r-41,217r-30,0","w":170,"k":{"i":18,"T":-15,"A":20,"C":6,"G":6,"O":6,"Q":6,"V":-16,"W":-16,"X":-11,"Y":-11,"J":17,"S":-3,"g":25,"m":18,"n":18,"p":18,"r":18,"c":21,"d":21,"e":21,"o":21,"q":21,"s":22,"t":3,"u":21,"v":12,"w":12,"y":12,"x":18,"z":20,"a":27,":":10,";":10,"\u00ad":23,")":-20,"]":-20,"}":-20,"\"":-6,"'":-6,",":24,".":24}},"U":{"d":"57,-243r30,0v-9,59,-30,111,-30,175v0,31,18,46,45,46v33,0,57,-22,67,-77r28,-144r30,0r-28,145v-14,72,-50,102,-101,102v-52,0,-80,-44,-68,-105","w":223,"k":{"A":6,"S":3,"f":-5,"v":-1,"w":-1,"y":-1,"x":1,"b":-2,"h":-2,"k":-2,"l":-2}},"V":{"d":"93,0r-33,0r-30,-243r31,0r23,211v28,-66,71,-145,104,-211r33,0","w":194,"k":{"T":-12,"A":16,"M":2,"J":12,"S":-3,"g":13,"i":3,"m":3,"n":3,"p":3,"r":3,"c":11,"d":11,"e":11,"o":11,"q":11,"s":9,"t":-3,"u":5,"x":5,"z":5,"a":13,"b":-2,"h":-2,"k":-2,"l":-2,":":6,";":6,"\u00ad":8,")":-13,"]":-13,"}":-13,"\"":-4,"'":-4,",":19,".":19}},"W":{"d":"79,0r-32,0r-12,-243r30,0r6,209v24,-63,64,-145,92,-209r32,0r6,208v25,-72,60,-140,90,-208r31,0r-113,243r-32,0r-6,-138v-2,-27,1,-45,0,-70v-24,75,-61,139,-92,208","w":298,"k":{"T":-12,"A":16,"M":2,"J":12,"S":-3,"g":13,"i":3,"m":3,"n":3,"p":3,"r":3,"c":11,"d":11,"e":11,"o":11,"q":11,"s":9,"t":-3,"u":5,"x":5,"z":5,"a":13,"b":-2,"h":-2,"k":-2,"l":-2,":":6,";":6,"\u00ad":8,")":-13,"]":-13,"}":-13,"\"":-4,"'":-4,",":19,".":19}},"X":{"d":"168,0r-32,0r-39,-103r-72,103r-36,0r95,-123r-45,-120r31,0r36,99r71,-99r36,0r-94,119","w":187,"k":{"T":-9,"A":3,"C":8,"G":8,"O":8,"Q":8,"V":-9,"W":-9,"X":-6,"Y":-9,"g":5,"c":5,"d":5,"e":5,"o":5,"q":5,"u":4,"v":5,"w":5,"y":5,"a":5,"\u00ad":9,")":-9,"]":-9,"}":-9,",":-2,".":-2}},"Y":{"d":"87,0r-29,0r19,-101r-47,-142r32,0r34,120v20,-36,55,-84,79,-120r35,0r-103,142","w":186,"k":{"i":13,"T":-8,"A":27,"C":9,"G":9,"O":9,"Q":9,"U":2,"V":-4,"W":-4,"X":5,"M":7,"J":21,"S":3,"B":3,"D":3,"E":3,"F":3,"H":3,"I":3,"K":3,"L":3,"N":3,"P":3,"R":3,"g":29,"j":3,"m":13,"n":13,"p":13,"r":13,"c":25,"d":25,"e":25,"o":25,"q":25,"s":24,"t":7,"u":19,"v":9,"w":9,"y":9,"x":15,"z":19,"a":31,"b":3,"h":3,"k":3,"l":3,":":9,";":9,"\u00ad":23,")":-10,"]":-10,"}":-10,",":35,".":35}},"Z":{"d":"-7,0r3,-18r165,-199r-116,0r5,-26r156,0r-4,19r-163,198r127,0r-4,26r-169,0","w":188,"k":{"A":-2,"C":8,"G":8,"O":8,"Q":8,"V":-6,"W":-6,"g":4,"c":3,"d":3,"e":3,"o":3,"q":3,"u":2,"a":4,"\u00ad":3}},"[":{"d":"70,40r-63,0r55,-287r63,0r-4,19r-39,0r-47,249r38,0","w":102,"k":{"T":-18,"A":3,"C":3,"G":3,"O":3,"Q":3,"V":-16,"W":-16,"Y":-12,"j":-15,"c":4,"d":4,"e":4,"o":4,"q":4}},"\\":{"d":"112,14r-24,0r-66,-261r23,0","w":118},"]":{"d":"39,-247r63,0r-54,287r-63,0r3,-19r39,0r47,-249r-38,0","w":102},"^":{"d":"192,-68r-24,0r-60,-140r-59,140r-24,0r73,-166r22,0","w":214},"_":{"d":"-18,27r180,0r-3,18r-180,0","w":180},"a":{"d":"153,0r-27,0v-1,-9,4,-30,3,-45v-19,36,-44,49,-68,49v-31,0,-50,-25,-50,-58v0,-76,76,-147,168,-118v-9,50,-28,120,-26,172xm72,-21v41,0,69,-77,73,-131v-59,-13,-102,37,-103,93v0,19,7,38,30,38","w":187},"b":{"d":"57,-256r30,0r-22,113v15,-23,38,-35,61,-35v38,0,53,31,53,62v0,54,-39,120,-109,120v-42,0,-58,-30,-50,-72xm114,-153v-37,0,-67,54,-67,108v0,17,10,26,28,26v45,0,73,-54,73,-93v0,-22,-10,-41,-34,-41","w":189,"k":{"T":19,"j":2,"v":3,"w":3,"y":3,"x":4,"z":3,"\u00ad":-5,"\"":8,"'":8,",":6,".":6}},"c":{"d":"127,-31r3,24v-9,5,-27,11,-50,11v-45,0,-67,-31,-67,-68v0,-71,69,-137,143,-106r-9,23v-54,-24,-107,27,-103,79v-6,47,54,56,83,37","w":152,"k":{"T":8,"f":-3,"c":3,"d":3,"e":3,"o":3,"q":3,"t":-2,"v":-4,"w":-4,"y":-4,"a":5,",":4,".":4}},"d":{"d":"166,-256r29,0r-38,201v-3,18,-6,38,-7,55r-28,0v1,-11,6,-26,4,-35v-28,56,-114,52,-114,-24v0,-71,62,-139,138,-113xm134,-86r11,-61v-52,-26,-105,28,-103,84v0,21,7,42,33,42v23,0,51,-26,59,-65","w":189,"k":{",":5,".":5}},"e":{"d":"131,-32r5,22v-13,7,-35,14,-58,14v-46,0,-66,-31,-66,-70v0,-53,39,-112,95,-112v33,0,51,20,51,45v0,46,-52,57,-116,56v-4,29,13,56,43,56v21,0,35,-5,46,-11xm46,-100v47,1,84,-4,83,-33v0,-14,-10,-22,-26,-22v-28,0,-50,28,-57,55","w":163,"k":{"T":13,"\u00ad":-4,",":4,".":4}},"f":{"d":"44,0r-30,0r29,-151r-23,0r4,-23r24,0v2,-53,40,-101,95,-81r-7,24v-36,-13,-56,17,-59,57r39,0r-5,23r-38,0","w":101,"k":{"t":-2,"a":3,":":-12,";":-12,")":-31,"]":-31,"}":-31,"\"":-23,"'":-23,",":11,".":11}},"g":{"d":"4,63r8,-23v46,21,99,16,109,-51r5,-26v-26,57,-114,44,-114,-23v0,-80,85,-146,167,-106v-18,73,-17,180,-62,222v-29,27,-83,23,-113,7xm77,-24v47,-1,63,-73,69,-124v-54,-24,-103,29,-103,82v0,19,7,42,34,42","w":188,"k":{"T":15,"g":1,",":5,".":5}},"h":{"d":"40,0r-30,0r49,-256r30,0r-21,112v15,-21,36,-34,62,-34v30,0,47,36,40,76r-19,102r-30,0r22,-125v0,-16,-8,-28,-27,-28v-23,0,-53,27,-60,66","w":192,"k":{"T":21,"u":2,"v":2,"w":2,"y":2,"\"":13,"'":13}},"i":{"d":"40,0r-30,0r34,-174r29,0xm66,-204v-10,0,-17,-7,-17,-18v0,-12,9,-21,20,-21v10,0,17,8,17,19v0,12,-8,20,-20,20","w":82},"j":{"d":"45,-174r30,0v-19,74,-20,179,-56,232v-12,18,-36,20,-59,15r3,-23v29,4,40,-1,48,-44xm66,-204v-10,0,-17,-7,-17,-18v0,-12,9,-21,20,-21v10,0,17,8,17,19v0,12,-8,20,-20,20","w":81,"k":{"j":-8,",":4,".":4}},"k":{"d":"40,0r-30,0r49,-256r30,0r-30,161v24,-28,51,-52,77,-79r37,0r-76,72r52,102r-33,0r-42,-86r-22,20","w":164,"k":{"T":10,"g":5,"i":-3,"m":-3,"n":-3,"p":-3,"r":-3,"c":5,"d":5,"e":5,"o":5,"q":5,"v":-3,"w":-3,"y":-3,"a":5,"b":-3,"h":-3,"k":-3,"l":-3,":":-4,";":-4,",":-4,".":-4}},"l":{"d":"40,0r-30,0r49,-256r30,0","w":82,"k":{",":5,".":5}},"m":{"d":"39,0r-29,0r31,-174r27,0v-1,10,-6,24,-4,33v21,-44,98,-54,102,2v15,-25,38,-39,64,-39v30,0,46,35,39,75r-19,103r-29,0r21,-123v0,-18,-7,-30,-26,-30v-22,0,-48,25,-55,64r-17,89r-28,0r21,-123v0,-15,-4,-30,-26,-30v-22,0,-49,29,-56,66","w":290,"k":{"T":21,"u":2,"v":2,"w":2,"y":2,"\"":13,"'":13}},"n":{"d":"40,0r-30,0r32,-174r27,0v-1,11,-6,25,-4,34v16,-24,39,-38,65,-38v31,0,48,36,40,76r-19,102r-30,0r22,-123v0,-17,-7,-30,-28,-30v-21,0,-51,25,-59,68","w":192,"k":{"T":21,"u":2,"v":2,"w":2,"y":2,"\"":13,"'":13}},"o":{"d":"81,4v-44,0,-68,-33,-68,-72v0,-58,39,-110,96,-110v47,0,68,35,68,72v0,54,-38,110,-96,110xm44,-69v0,28,15,49,41,49v35,0,62,-45,62,-86v0,-20,-10,-48,-41,-48v-37,0,-62,45,-62,85","w":187,"k":{"T":19,"j":2,"v":3,"w":3,"y":3,"x":4,"z":3,"\u00ad":-5,"\"":8,"'":8,",":6,".":6}},"p":{"d":"24,71r-29,0r35,-183v4,-21,7,-45,9,-63r28,0v-1,11,-6,25,-4,34v15,-23,38,-37,62,-37v37,0,54,31,54,63v1,75,-66,142,-140,111xm53,-78r-9,49v51,34,105,-25,104,-84v0,-18,-8,-40,-34,-40v-23,0,-52,26,-61,75","w":189,"k":{"T":19,"j":2,"v":3,"w":3,"y":3,"x":4,"z":3,"\u00ad":-5,"\"":8,"'":8,",":6,".":6}},"q":{"d":"133,71r-30,0r21,-103v-29,54,-112,45,-112,-27v0,-58,42,-119,110,-119v23,0,43,5,56,11xm73,-21v49,0,66,-74,72,-127v-52,-23,-104,25,-103,85v0,27,13,42,31,42","w":189,"k":{"T":17,"g":1,"a":2,",":4,".":4}},"r":{"d":"40,0r-30,0r30,-174r27,0v0,11,-5,27,-4,38v14,-26,32,-46,62,-41r-6,29v-59,-9,-68,89,-79,148","w":114,"k":{"T":8,"f":-8,"g":3,"c":2,"d":2,"e":2,"o":2,"q":2,"t":-9,"v":-7,"w":-7,"y":-7,"x":-4,"z":-3,"a":5,":":-4,";":-4,"\u00ad":3,",":13,".":13}},"s":{"d":"57,-129v2,30,62,40,56,75v5,54,-73,72,-110,46r9,-22v19,16,70,14,70,-18v0,-31,-63,-42,-55,-76v-5,-44,61,-67,99,-46r-8,23v-16,-13,-63,-10,-61,18","w":134,"k":{"T":15,"\u00ad":2,",":4,".":4}},"t":{"d":"56,-206r31,-10r-8,42r42,0r-5,23r-41,0r-20,112v-2,15,16,20,31,16r-2,23v-25,11,-63,-3,-60,-30v5,-41,15,-82,21,-121r-24,0r4,-23r25,0","w":112,"k":{"g":2,"c":1,"d":1,"e":1,"o":1,"q":1,"v":-4,"w":-4,"y":-4}},"u":{"d":"150,-174r30,0r-31,174r-27,0v1,-10,6,-24,4,-33v-16,23,-39,37,-62,37v-33,0,-51,-36,-42,-80r19,-98r29,0r-21,123v0,18,7,30,28,30v22,0,50,-26,57,-64","w":189,"k":{"T":17,"g":1,"a":2,",":4,".":4}},"v":{"d":"19,-174r30,0v9,46,10,100,22,142v17,-43,49,-99,71,-142r33,0r-97,174r-29,0","w":163,"k":{"T":12,"g":6,"j":2,"c":3,"d":3,"e":3,"o":3,"q":3,"v":-5,"w":-5,"y":-5,"a":6,":":-5,";":-5,"\u00ad":3,",":14,".":14}},"w":{"d":"22,-174r29,0r7,98v2,22,-2,34,1,46v18,-46,49,-99,71,-144r26,0r15,144v16,-50,42,-98,63,-144r31,0r-86,174r-28,0r-15,-141v-20,51,-46,94,-70,141r-28,0","w":254,"k":{"T":12,"g":6,"j":2,"c":3,"d":3,"e":3,"o":3,"q":3,"v":-5,"w":-5,"y":-5,"a":6,":":-5,";":-5,"\u00ad":3,",":14,".":14}},"x":{"d":"23,-174r32,0v11,21,18,46,30,66v15,-24,34,-45,51,-66r34,0r-73,84r41,90r-33,0v-11,-23,-18,-49,-30,-71v-14,24,-36,49,-54,71r-34,0r76,-90","w":158,"k":{"T":9,"g":3,"c":6,"d":6,"e":6,"o":6,"q":6,"t":-4,"v":-5,"w":-5,"y":-5,"a":4}},"y":{"d":"17,-174r31,0r26,139r64,-139r31,0v-39,73,-72,168,-125,224v-19,20,-41,28,-51,30r-7,-26v26,-10,59,-31,66,-65","w":158,"k":{"T":12,"g":6,"j":2,"c":3,"d":3,"e":3,"o":3,"q":3,"v":-5,"w":-5,"y":-5,"a":6,":":-5,";":-5,"\u00ad":3,",":14,".":14}},"z":{"d":"-8,0r4,-18r84,-95v15,-17,26,-24,37,-37r-90,0r5,-24r125,0r-4,20r-83,92v-16,19,-27,24,-36,38r97,0r-5,24r-134,0","w":149,"k":{"T":10,"f":-8,"c":2,"d":2,"e":2,"o":2,"q":2,"t":-4,"v":-9,"w":-9,"y":-9}},"{":{"d":"65,40v-73,5,-39,-78,-29,-116v0,-7,-3,-19,-24,-19r3,-18v48,-2,31,-50,39,-87v8,-35,30,-49,66,-47v-3,6,1,19,-10,19v-60,-2,-12,120,-70,124v43,15,1,73,1,102v0,15,10,25,28,23","w":102,"k":{"T":-18,"A":3,"C":3,"G":3,"O":3,"Q":3,"V":-16,"W":-16,"Y":-12,"j":-15,"c":4,"d":4,"e":4,"o":4,"q":4}},"|":{"d":"34,-270r23,0r0,360r-23,0r0,-360","w":78},"}":{"d":"42,-247v73,-6,40,78,29,115v0,7,3,19,24,19r-3,19v-48,2,-31,50,-39,87v-8,35,-30,49,-66,47v3,-6,-1,-19,10,-19v59,0,14,-119,70,-125v-43,-15,0,-71,-1,-101v0,-15,-10,-25,-28,-23","w":102},"~":{"d":"198,-128v-2,95,-86,33,-133,22v-12,0,-21,11,-21,29r-21,0v-1,-35,18,-52,42,-52v23,0,70,32,93,30v13,0,19,-10,19,-29r21,0","w":214},"'":{"d":"46,-249r31,0r-22,87r-20,0","w":59,"k":{"A":14,"Y":-9,"J":20,"f":-15,"t":-9,"b":-4,"h":-4,"k":-4,"l":-4,",":37,".":37}},"`":{"d":"52,-247r34,0r23,52r-21,0","w":137}}});
/*!
 * The following copyright notice may not be removed under any circumstances.
 * 
 * Copyright:
 * Copyright © 2000 Adobe Systems Incorporated. All Rights Reserved. U.S. Patent
 * Des. pending.
 * 
 * Trademark:
 * Myriad is a registered trademark of Adobe Systems Incorporated.
 * 
 * Full name:
 * MyriadPro-BoldIt
 * 
 * Designer:
 * Robert Slimbach and Carol Twombly
 * 
 * Vendor URL:
 * http://www.adobe.com/type
 * 
 * License information:
 * http://www.adobe.com/type/legal.html
 */
Cufon.registerFont({"w":194,"face":{"font-family":"Myriad","font-weight":700,"font-style":"italic","font-stretch":"normal","units-per-em":"360","panose-1":"2 11 7 3 3 4 3 9 2 4","ascent":"270","descent":"-90","x-height":"4","bbox":"-34 -270 335 90","underline-thickness":"18","underline-position":"-18","slope":"-11","stemh":"40","stemv":"55","unicode-range":"U+0020-U+007E"},"glyphs":{" ":{"w":66},"\u00a0":{"w":66},"!":{"d":"67,-80r-41,0r24,-163r55,0xm34,4v-17,0,-29,-13,-29,-30v0,-19,14,-36,35,-36v17,0,29,13,29,31v0,21,-14,35,-35,35","w":96},"\"":{"d":"41,-249r49,0r-27,100r-33,0xm111,-249r48,0r-27,100r-33,0","w":139,"k":{"A":13,"J":23,"X":-2,"Y":-5,"f":-16,"b":-7,"h":-7,"k":-7,"l":-7,"t":-13,",":48,".":48}},"#":{"d":"80,-97r31,0r13,-41r-31,0xm49,0r-32,0r20,-64r-29,0r5,-33r35,0r14,-41r-31,0r5,-33r35,0r20,-63r32,0r-20,63r31,0r20,-63r32,0r-20,63r29,0r-5,33r-34,0r-13,41r30,0r-6,33r-35,0r-20,64r-32,0r20,-64r-31,0"},"$":{"d":"117,-68v-5,-35,-83,-45,-83,-94v0,-36,29,-63,73,-68r6,-32r34,0r-6,31v20,1,38,8,47,14r-17,38v-12,-12,-84,-23,-81,10v0,11,10,18,36,31v28,14,47,34,47,62v0,44,-36,68,-77,73r-6,34r-34,0r6,-34v-22,-1,-45,-11,-56,-19r16,-39v18,19,92,31,95,-7"},"%":{"d":"99,-238v32,0,52,23,52,54v0,51,-33,90,-75,90v-31,0,-54,-20,-54,-55v0,-47,31,-89,77,-89xm94,-208v-21,0,-32,38,-32,60v0,14,6,25,18,25v22,0,31,-41,31,-62v0,-12,-4,-23,-17,-23xm89,4r-31,0r174,-242r31,0xm172,-52v0,-46,30,-90,77,-89v32,0,51,23,51,54v0,51,-33,90,-75,90v-31,0,-53,-20,-53,-55xm243,-111v-21,0,-32,38,-32,60v0,14,6,24,18,24v22,0,32,-40,32,-61v0,-12,-5,-23,-18,-23","w":312},"&":{"d":"220,0r-62,0v-5,-5,-9,-11,-13,-17v-37,37,-140,25,-140,-43v0,-38,30,-59,59,-76v-33,-48,1,-111,63,-111v36,0,61,22,61,54v0,29,-23,48,-60,68v10,15,23,34,33,47v15,-18,26,-40,33,-62r48,0v-13,37,-31,69,-58,95v9,14,22,29,36,45xm58,-69v0,32,47,44,67,23v-12,-16,-29,-39,-43,-61v-11,8,-24,20,-24,38xm122,-213v-27,0,-32,42,-14,60v19,-8,34,-21,34,-39v0,-11,-6,-21,-20,-21","w":239},"(":{"d":"94,-248r38,0v-54,65,-90,182,-54,290r-36,0v-45,-97,-6,-236,52,-290","w":113,"k":{"T":-8,"A":4,"C":5,"G":5,"O":5,"Q":5,"V":-8,"W":-8,"X":-3,"Y":-6,"j":-10,"c":2,"d":2,"e":2,"o":2,"q":2}},")":{"d":"26,42r-39,0v54,-65,90,-182,54,-290r37,0v44,98,6,235,-52,290","w":113},"*":{"d":"125,-247r30,19r-44,46r60,-12r-8,37v-18,-2,-38,-9,-55,-9r35,45r-35,18r-14,-56r-27,56r-30,-19r44,-45r-58,10r7,-37v17,3,38,11,53,11r-33,-46r34,-18v6,18,8,40,15,56","w":162},"+":{"d":"90,-192r35,0r0,79r74,0r0,33r-74,0r0,80r-35,0r0,-80r-75,0r0,-33r75,0r0,-79","w":214},",":{"d":"17,40r-38,3v16,-32,32,-69,41,-102r56,-4v-17,37,-38,75,-59,103","w":93,"k":{"T":23,"A":-4,"J":-3,"V":20,"W":20,"X":-5,"Y":28,"Z":-5,"\"":53,"'":53}},"-":{"d":"16,-113r93,0r-7,37r-93,0","w":115},"\u00ad":{"d":"16,-113r93,0r-7,37r-93,0","w":115,"k":{"T":22,"J":4,"C":-6,"G":-6,"O":-6,"Q":-6,"V":10,"W":10,"X":4,"Y":19,"S":1,"g":-8,"c":-7,"d":-7,"e":-7,"o":-7,"q":-7,"v":1,"w":1,"y":1,"a":-8}},".":{"d":"71,-32v0,21,-14,36,-36,36v-17,0,-29,-13,-29,-30v0,-20,14,-37,35,-37v18,0,30,13,30,31","w":93,"k":{"T":23,"A":-4,"J":-3,"V":20,"W":20,"X":-5,"Y":28,"Z":-5,"\"":53,"'":53}},"\/":{"d":"22,14r-36,0r125,-261r37,0","w":117},"0":{"d":"82,4v-49,0,-68,-37,-68,-84v0,-74,38,-158,110,-158v50,0,67,38,67,80v0,73,-36,162,-109,162xm88,-37v36,0,52,-89,52,-120v0,-16,-2,-40,-22,-40v-35,0,-53,85,-53,119v0,18,3,41,23,41"},"1":{"d":"66,0r34,-185r-46,20r-1,-41r64,-28r43,0r-44,234r-50,0"},"2":{"d":"159,0r-160,0r6,-33v41,-32,127,-94,127,-133v0,-38,-63,-31,-81,-15r-11,-37v45,-35,146,-24,146,44v0,58,-61,96,-103,130r84,0"},"3":{"d":"3,-12r16,-41v19,17,103,20,97,-20v1,-24,-24,-33,-57,-31r8,-40v28,1,59,-8,60,-31v1,-30,-63,-19,-77,-8r-7,-39v43,-26,140,-24,139,39v0,29,-23,50,-52,58v24,5,40,25,40,52v0,73,-116,95,-167,61"},"4":{"d":"141,0r-48,0r10,-57r-99,0r6,-34r112,-143r63,0r-26,138r28,0r-8,39r-27,0xm62,-97v13,3,34,0,49,1r22,-97v-14,12,-20,31,-32,46"},"5":{"d":"89,-153v43,-7,85,22,85,65v0,81,-107,112,-169,78r13,-41v27,18,103,16,102,-27v9,-29,-46,-41,-87,-35r33,-121r126,0r-9,44r-83,0"},"6":{"d":"185,-237r-8,42v-52,-4,-89,24,-102,56v39,-37,108,-14,108,48v0,50,-38,95,-93,95v-117,-2,-80,-167,-21,-207v33,-22,70,-36,116,-34xm130,-86v-1,-50,-62,-35,-67,1v-4,26,6,49,28,49v25,0,39,-28,39,-50"},"7":{"d":"44,-234r158,0r-6,35r-129,199r-57,0r127,-190r-102,0"},"8":{"d":"33,-167v0,-80,154,-101,156,-14v0,25,-17,44,-42,56v21,12,32,32,32,52v0,94,-173,103,-173,17v0,-34,26,-54,51,-67v-16,-12,-24,-27,-24,-44xm95,-103v-35,3,-52,68,-4,69v17,0,34,-13,34,-34v0,-19,-13,-29,-30,-35xm114,-200v-17,0,-31,14,-31,30v0,15,13,24,28,29v29,-4,42,-57,3,-59"},"9":{"d":"17,3r6,-42v50,5,95,-25,106,-59v-38,36,-107,12,-107,-46v0,-51,42,-94,95,-94v52,0,76,36,76,82v0,100,-69,166,-176,159xm102,-119v43,6,56,-76,11,-79v-38,-4,-56,78,-11,79"},":":{"d":"93,-148v0,21,-14,36,-36,36v-17,0,-29,-13,-29,-30v0,-19,14,-36,35,-36v17,0,30,12,30,30xm71,-31v0,21,-14,35,-36,35v-17,0,-29,-13,-29,-30v0,-19,14,-36,35,-36v17,0,30,13,30,31","w":93},";":{"d":"17,40r-38,3v16,-32,32,-69,41,-102r56,-4v-16,37,-38,75,-59,103xm59,-112v-17,0,-29,-13,-29,-30v0,-19,14,-36,35,-36v17,0,30,12,30,30v0,21,-15,36,-36,36","w":93},"<":{"d":"19,-80r0,-31r171,-80r0,38r-129,58r129,57r0,38","w":214},"=":{"d":"199,-117r-184,0r0,-33r184,0r0,33xm199,-42r-184,0r0,-34r184,0r0,34","w":214},">":{"d":"199,-112r0,33r-172,79r0,-38r132,-58r-132,-57r0,-38","w":214},"?":{"d":"162,-198v0,49,-61,70,-65,119r-50,0v-5,-43,55,-77,62,-109v5,-24,-48,-18,-60,-7r-7,-36v31,-24,120,-24,120,33xm95,-31v0,21,-14,35,-36,35v-17,0,-28,-13,-28,-30v0,-19,14,-36,35,-36v17,0,29,13,29,31","w":157},"@":{"d":"125,-53v24,0,33,-43,36,-71v-31,-9,-54,17,-54,49v0,14,6,22,18,22xm186,4r6,20v-82,36,-179,-4,-178,-100v0,-73,54,-137,135,-137v63,0,108,44,108,104v0,53,-29,86,-68,86v-17,0,-29,-9,-31,-28v-22,41,-88,38,-88,-20v0,-60,69,-103,128,-74r-11,67v-3,21,-1,31,9,31v15,1,35,-20,35,-61v0,-47,-31,-83,-86,-83v-56,0,-104,43,-104,112v0,81,77,113,145,83","w":269},"A":{"d":"144,-63r-70,0r-29,63r-55,0r118,-243r67,0r28,243r-54,0xm89,-103r52,0v-4,-32,-1,-71,-9,-99","w":222,"k":{"T":23,"A":5,"J":-2,"C":10,"G":10,"O":10,"Q":10,"U":12,"V":18,"W":18,"X":4,"Y":24,"f":1,"g":4,"b":-2,"h":-2,"k":-2,"l":-2,"j":-4,"i":-3,"m":-3,"n":-3,"p":-3,"r":-3,"c":4,"d":4,"e":4,"o":4,"q":4,"t":2,"u":2,"v":9,"w":9,"y":9,"x":-1,"z":-5,"\"":13,"'":13}},"B":{"d":"193,-76v2,79,-111,86,-186,73r45,-236v59,-10,152,-12,152,52v0,32,-24,48,-49,58v23,7,38,26,38,53xm96,-203r-10,57v34,3,65,-7,65,-33v0,-25,-32,-27,-55,-24xm78,-108r-13,68v35,4,73,-3,73,-37v0,-30,-29,-32,-60,-31","w":209,"k":{"T":9,"A":2,"U":3,"V":5,"W":5,"X":4,"Y":8,"\u00ad":-4,",":5,".":5}},"C":{"d":"207,-194v-63,-26,-140,16,-133,89v-6,58,61,76,110,56r5,42v-13,6,-35,11,-64,11v-64,0,-107,-39,-107,-103v0,-107,104,-172,203,-137","w":209,"k":{"A":-3,"J":-2,"C":9,"G":9,"O":9,"Q":9,"V":-2,"W":-2,"X":-2,"Y":-1,"M":-3,"g":4,"c":2,"d":2,"e":2,"o":2,"q":2,"u":2,"v":6,"w":6,"y":6,"z":-4,"a":4,")":-3,"]":-3,"}":-3}},"D":{"d":"240,-142v-4,93,-62,146,-166,144v-29,0,-55,-2,-67,-5r45,-236v92,-16,192,0,188,97xm67,-41v72,11,117,-36,117,-101v0,-47,-37,-68,-86,-59","w":245,"k":{"T":13,"A":5,"V":3,"W":3,"X":4,"Y":16,"f":-5,"g":-3,"j":2,"c":-3,"d":-3,"e":-3,"o":-3,"q":-3,"t":-4,"v":-2,"w":-2,"y":-2,"x":4,"a":-3,"s":-1,":":1,";":1,"\u00ad":-5,",":6,".":6}},"E":{"d":"173,-147r-8,44r-87,0r-11,59r97,0r-8,44r-149,0r46,-243r144,0r-9,45r-92,0r-10,51r87,0","w":186,"k":{"V":-2,"W":-2,"Y":-1,"f":-1,"g":2,"j":-1,"c":2,"d":2,"e":2,"o":2,"q":2,"u":1,"v":4,"w":4,"y":4,"a":2,",":3,".":3}},"F":{"d":"7,0r46,-243r142,0r-9,45r-90,0r-11,57r85,0r-9,43r-84,0r-18,98r-52,0","w":183,"k":{"A":22,"J":28,"C":4,"G":4,"O":4,"Q":4,"X":4,"M":3,"g":12,"b":4,"h":4,"k":4,"l":4,"i":5,"m":5,"n":5,"p":5,"r":5,"c":9,"d":9,"e":9,"o":9,"q":9,"u":7,"v":5,"w":5,"y":5,"x":11,"a":13,"s":6,":":4,";":4,",":21,".":21}},"G":{"d":"222,-190v-65,-31,-148,9,-148,87v0,51,45,72,89,57r10,-51r-38,0r8,-41r88,0r-24,127v-18,6,-47,14,-78,14v-65,1,-109,-38,-112,-102v-5,-109,118,-173,221,-135","w":242,"k":{"T":4,"J":-2,"V":5,"W":5,"Y":5,"v":4,"w":4,"y":4,"a":-1}},"H":{"d":"53,-243r52,0r-18,95r88,0r18,-95r52,0r-46,243r-52,0r19,-102r-88,0r-19,102r-52,0","w":239,"k":{"f":-1,"t":-1,"z":-1}},"I":{"d":"52,-243r52,0r-46,243r-52,0","w":98,"k":{"f":-1,"t":-1,"z":-1}},"J":{"d":"70,-89r29,-154r52,0r-31,161v-10,77,-64,97,-133,80r10,-44v37,9,64,5,73,-43","w":143,"k":{"A":4,"v":-4,"w":-4,"y":-4,")":-5,"]":-5,"}":-5}},"K":{"d":"7,0r46,-243r51,0r-19,109v28,-39,59,-72,89,-109r64,0r-98,105r56,138r-56,0r-41,-105r-26,24r-15,81r-51,0","w":212,"k":{"A":5,"J":-4,"C":16,"G":16,"O":16,"Q":16,"U":6,"V":2,"W":2,"Y":-2,"S":3,"Z":-4,"g":9,"c":10,"d":10,"e":10,"o":10,"q":10,"u":7,"v":12,"w":12,"y":12,"a":8,"\u00ad":11,")":-5,"]":-5,"}":-5,"\"":-2,"'":-2,",":-3,".":-3}},"L":{"d":"7,0r46,-243r52,0r-38,198r94,0r-9,45r-145,0","w":175,"k":{"T":35,"A":-5,"J":-3,"C":15,"G":15,"O":15,"Q":15,"U":14,"V":23,"W":23,"X":1,"Y":35,"Z":-3,"j":-2,"c":5,"d":5,"e":5,"o":5,"q":5,"u":3,"v":16,"w":16,"y":16,"x":-3,"z":-3,"\u00ad":8,"\"":48,"'":48}},"M":{"d":"260,0r-50,0r29,-195v-28,69,-59,128,-91,191r-40,0r-15,-191r-44,195r-48,0r61,-243r69,0r12,170r2,0v22,-63,50,-113,77,-170r71,0","w":295,"k":{"C":3,"G":3,"O":3,"Q":3,"j":-3}},"N":{"d":"55,0r-48,0r46,-243r61,0r32,93v11,30,14,58,23,83v2,-52,18,-124,28,-176r48,0r-46,243r-54,0r-33,-97v-12,-32,-16,-56,-25,-84","w":239,"k":{"f":-1,"t":-1,"z":-1}},"O":{"d":"248,-145v1,80,-50,150,-132,149v-63,0,-99,-44,-99,-101v0,-79,52,-150,133,-150v64,0,98,44,98,102xm144,-203v-49,0,-71,60,-72,104v0,34,16,60,51,60v49,0,70,-61,70,-105v0,-30,-11,-59,-49,-59","w":253,"k":{"T":13,"A":5,"V":3,"W":3,"X":4,"Y":16,"f":-5,"g":-3,"j":2,"c":-3,"d":-3,"e":-3,"o":-3,"q":-3,"t":-4,"v":-2,"w":-2,"y":-2,"x":4,"a":-3,"s":-1,":":1,";":1,"\u00ad":-5,",":6,".":6}},"P":{"d":"206,-177v-2,69,-60,97,-132,90r-16,87r-51,0r45,-238v62,-14,156,-9,154,61xm96,-202r-14,72v35,9,72,-11,72,-42v0,-31,-32,-33,-58,-30","w":201,"k":{"T":5,"A":21,"J":27,"X":12,"Z":10,"B":-2,"D":-2,"E":-2,"F":-2,"H":-2,"I":-2,"K":-2,"L":-2,"N":-2,"P":-2,"R":-2,"g":7,"c":4,"d":4,"e":4,"o":4,"q":4,"t":-7,"u":1,"v":-5,"w":-5,"y":-5,"a":5,":":4,";":4,"\u00ad":3,")":5,"]":5,"}":5,",":30,".":30}},"Q":{"d":"150,-247v138,2,115,204,22,236v13,7,36,9,55,14r-18,41v-41,-11,-76,-30,-107,-41v-47,-3,-85,-40,-85,-101v0,-77,54,-150,133,-149xm145,-203v-51,0,-72,61,-73,105v0,34,16,59,51,59v50,0,69,-61,70,-106v0,-27,-10,-58,-48,-58","w":253,"k":{"T":13,"A":5,"V":3,"W":3,"X":4,"Y":16,"f":-5,"g":-3,"j":2,"c":-3,"d":-3,"e":-3,"o":-3,"q":-3,"t":-4,"v":-2,"w":-2,"y":-2,"x":4,"a":-3,"s":-1,":":1,";":1,"\u00ad":-5,",":6,".":6}},"R":{"d":"53,-238v58,-12,155,-14,155,55v0,37,-26,58,-55,70v31,7,23,91,32,113r-53,0v-2,-6,-5,-27,-7,-57v-3,-37,-17,-40,-49,-39r-18,96r-51,0xm97,-202r-13,67v38,3,70,-9,70,-40v0,-27,-33,-33,-57,-27","w":209,"k":{"T":5,"A":-4,"U":3,"V":3,"W":3,"Y":8,"g":6,"b":-2,"h":-2,"k":-2,"l":-2,"i":-2,"m":-2,"n":-2,"p":-2,"r":-2,"c":4,"d":4,"e":4,"o":4,"q":4,"t":-3,"u":2,"v":-2,"w":-2,"y":-2,"a":6}},"S":{"d":"113,-69v0,-37,-91,-47,-83,-98v-8,-70,100,-95,153,-67r-17,43v-15,-13,-81,-17,-81,15v0,14,14,23,35,34v30,16,48,35,48,64v0,82,-117,99,-168,64r18,-42v22,15,95,29,95,-13","w":183,"k":{"A":2,"J":-2,"C":3,"G":3,"O":3,"Q":3,"X":-1,"c":-3,"d":-3,"e":-3,"o":-3,"q":-3,"v":8,"w":8,"y":8,"x":3,"a":-4}},"T":{"d":"51,0r37,-197r-64,0r9,-46r180,0r-8,46r-65,0r-37,197r-52,0","w":189,"k":{"i":19,"T":-9,"A":22,"J":17,"C":6,"G":6,"O":6,"Q":6,"V":-13,"W":-13,"X":-10,"Y":-12,"S":-2,"g":28,"m":19,"n":19,"p":19,"r":19,"c":26,"d":26,"e":26,"o":26,"q":26,"u":21,"v":15,"w":15,"y":15,"x":15,"z":18,"a":29,"s":25,":":8,";":8,"\u00ad":24,")":-9,"]":-9,"}":-9,"\"":-4,"'":-4,",":25,".":25}},"U":{"d":"52,-243r52,0v-9,57,-29,106,-29,168v0,20,12,35,35,35v27,0,44,-18,53,-63r27,-140r52,0v-23,100,-20,247,-139,247v-63,0,-90,-46,-77,-111","w":235,"k":{"A":6,"S":1,"f":-5,"t":-3,"x":2}},"V":{"d":"119,0r-60,0r-30,-243r53,0r18,190v25,-64,58,-128,86,-190r58,0","w":219,"k":{"T":-8,"A":19,"J":13,"C":5,"G":5,"O":5,"Q":5,"M":3,"g":18,"i":8,"m":8,"n":8,"p":8,"r":8,"c":14,"d":14,"e":14,"o":14,"q":14,"u":9,"x":9,"z":9,"a":18,"s":12,":":8,";":8,"\u00ad":13,")":-7,"]":-7,"}":-7,"\"":-3,"'":-3,",":23,".":23}},"W":{"d":"100,0r-58,0r-9,-243r53,0r-1,187r28,-78r44,-109r57,0r-3,186v20,-63,46,-126,69,-186r55,0r-107,243r-57,0r0,-180v-18,60,-46,124,-71,180","w":311,"k":{"T":-8,"A":19,"J":13,"C":5,"G":5,"O":5,"Q":5,"M":3,"g":18,"i":8,"m":8,"n":8,"p":8,"r":8,"c":14,"d":14,"e":14,"o":14,"q":14,"u":9,"x":9,"z":9,"a":18,"s":12,":":8,";":8,"\u00ad":13,")":-7,"]":-7,"}":-7,"\"":-3,"'":-3,",":23,".":23}},"X":{"d":"186,0r-55,0r-30,-90r-53,90r-63,0r91,-124r-43,-119r55,0r27,87v17,-33,33,-57,51,-87r62,0r-88,120","w":204,"k":{"T":-5,"A":6,"J":-2,"C":12,"G":12,"O":12,"Q":12,"V":-7,"W":-7,"X":-6,"Y":-8,"Z":-2,"g":9,"c":8,"d":8,"e":8,"o":8,"q":8,"u":6,"v":12,"w":12,"y":12,"a":9,"s":2,"\u00ad":8,")":-6,"]":-6,"}":-6,"\"":-3,"'":-3,",":-1,".":-1}},"Y":{"d":"106,0r-52,0r19,-99r-47,-144r55,0r26,106r61,-106r62,0r-105,143","w":205,"k":{"i":16,"A":29,"J":24,"C":16,"G":16,"O":16,"Q":16,"U":5,"V":1,"W":1,"X":6,"M":7,"S":7,"B":6,"D":6,"E":6,"F":6,"H":6,"I":6,"K":6,"L":6,"N":6,"P":6,"R":6,"g":35,"b":5,"h":5,"k":5,"l":5,"j":9,"m":16,"n":16,"p":16,"r":16,"c":32,"d":32,"e":32,"o":32,"q":32,"t":12,"u":26,"v":17,"w":17,"y":17,"x":20,"z":24,"a":39,"s":30,":":13,";":13,"\u00ad":26,")":-8,"]":-8,"}":-8,"\"":-2,"'":-2,",":36,".":36}},"Z":{"d":"-9,0r5,-30r141,-168r-98,0r9,-45r168,0r-6,32r-139,166r109,0r-9,45r-180,0","w":199,"k":{"A":-4,"J":-1,"C":9,"G":9,"O":9,"Q":9,"V":-3,"W":-3,"X":-3,"Y":-2,"g":7,"i":-1,"m":-1,"n":-1,"p":-1,"r":-1,"c":4,"d":4,"e":4,"o":4,"q":4,"v":2,"w":2,"y":2,"a":8,"\u00ad":1,")":-2,"]":-2,"}":-2}},"[":{"d":"72,40r-72,0r55,-287r72,0r-6,30r-33,0r-44,227r34,0","w":113,"k":{"T":-8,"A":4,"C":5,"G":5,"O":5,"Q":5,"V":-8,"W":-8,"X":-3,"Y":-6,"j":-10,"c":2,"d":2,"e":2,"o":2,"q":2}},"\\":{"d":"113,14r-36,0r-58,-261r35,0","w":121},"]":{"d":"45,-247r73,0r-55,287r-72,0r5,-30r34,0r43,-227r-33,0","w":113},"^":{"d":"196,-64r-39,0r-53,-128r-53,128r-38,0r75,-170r33,0","w":214},"_":{"d":"-19,27r180,0r-4,18r-180,0","w":180},"a":{"d":"167,0r-47,0v-1,-9,3,-25,1,-35v-29,60,-112,49,-112,-22v0,-59,40,-123,126,-123v21,0,43,4,58,9v-9,54,-26,111,-26,171xm84,-38v25,7,48,-62,51,-101v-43,-12,-71,35,-72,72v0,17,7,29,21,29","w":199},"b":{"d":"53,-256r52,0r-20,101v13,-15,32,-25,54,-25v37,0,53,31,53,62v0,57,-37,122,-116,122v-57,0,-68,-34,-59,-81xm115,-138v-28,-1,-49,42,-48,83v0,13,7,20,19,20v30,0,52,-42,52,-73v0,-17,-7,-30,-23,-30","w":201,"k":{"T":22,"g":-2,"j":5,"c":-2,"d":-2,"e":-2,"o":-2,"q":-2,"v":3,"w":3,"y":3,"x":5,"z":3,"\u00ad":-5,"\"":8,"'":8,",":5,".":5}},"c":{"d":"134,-45r1,39v-50,24,-125,4,-125,-62v0,-73,72,-131,151,-106r-13,40v-43,-17,-83,19,-83,60v0,40,44,41,69,29","w":156,"k":{"T":8,"f":-3,"c":4,"d":4,"e":4,"o":4,"q":4,"t":-5,"v":-4,"w":-4,"y":-4,"x":-3,"z":-1,"a":4,"s":-3,",":3,".":3}},"d":{"d":"159,-256r52,0r-36,188v-4,23,-7,47,-8,68r-47,0r2,-28v-34,52,-113,41,-113,-34v0,-68,57,-134,135,-114xm87,-38v30,0,45,-61,50,-96v-38,-22,-74,22,-74,63v0,21,9,33,24,33","w":201,"k":{"v":-1,"w":-1,"y":-1,",":4,".":4}},"e":{"d":"60,-68v-1,40,61,35,88,20r4,38v-62,30,-142,13,-142,-61v0,-54,39,-109,103,-109v36,0,61,20,61,53v0,45,-43,61,-114,59xm125,-127v0,-9,-7,-15,-19,-15v-24,0,-37,20,-41,36v40,0,60,-5,60,-21","w":180,"k":{"T":19,"j":2,"c":-1,"d":-1,"e":-1,"o":-1,"q":-1,"v":2,"w":2,"y":2,"\u00ad":-2,",":4,".":4}},"f":{"d":"62,0r-52,0r26,-136r-22,0r7,-40r23,0v0,-53,51,-100,109,-79r-9,41v-28,-11,-47,10,-49,38r35,0r-8,40r-34,0","w":118,"k":{"t":-4,"v":-2,"w":-2,"y":-2,"a":3,":":-10,";":-10,")":-20,"]":-20,"}":-20,"\"":-19,"'":-19,",":10,".":10}},"g":{"d":"4,64r12,-40v44,24,103,6,101,-52v-30,49,-107,26,-107,-36v0,-58,41,-116,118,-116v25,0,46,4,65,12v-19,76,-13,177,-63,223v-30,27,-93,24,-126,9xm89,-41v31,2,43,-60,48,-96v-41,-15,-72,26,-72,65v0,18,8,31,24,31","w":200,"k":{"T":17,"g":4,"a":2,",":5,".":5}},"h":{"d":"57,0r-52,0r48,-256r52,0r-19,103v26,-36,103,-40,100,21v-2,47,-15,89,-22,132r-52,0v7,-39,18,-75,21,-118v0,-12,-5,-20,-18,-20v-42,2,-49,92,-58,138","w":202,"k":{"T":25,"u":3,"v":4,"w":4,"y":4,"x":3,"\"":12,"'":12}},"i":{"d":"56,0r-52,0r34,-176r52,0xm101,-227v0,18,-13,29,-31,29v-14,0,-25,-10,-25,-25v-2,-36,57,-41,56,-4","w":95,"k":{")":-1,"]":-1,"}":-1}},"j":{"d":"44,-176r51,0r-32,170v-6,59,-37,91,-97,78r6,-39v24,3,32,1,39,-37xm74,-198v-14,0,-25,-10,-25,-25v-2,-36,57,-41,56,-4v0,18,-14,29,-31,29","w":99,"k":{"j":-4,"a":1,")":-2,"]":-2,"}":-2,",":4,".":4}},"k":{"d":"56,0r-51,0r48,-256r52,0r-29,153r61,-73r64,0r-75,73r49,103r-58,0r-31,-75r-19,18","w":190,"k":{"T":13,"g":9,"b":-1,"h":-1,"k":-1,"l":-1,"i":-1,"m":-1,"n":-1,"p":-1,"r":-1,"c":9,"d":9,"e":9,"o":9,"q":9,"u":3,"v":1,"w":1,"y":1,"a":10,":":-1,";":-1}},"l":{"d":"57,0r-52,0r49,-256r51,0","w":95,"k":{"v":-1,"w":-1,"y":-1,",":4,".":4}},"m":{"d":"55,0r-50,0r31,-176r44,0v0,9,-4,22,-2,29v20,-42,97,-43,102,0v25,-44,105,-49,103,15v-2,46,-15,89,-22,132r-50,0r20,-117v0,-12,-5,-21,-17,-21v-39,1,-48,92,-56,138r-50,0r20,-117v0,-12,-3,-21,-16,-21v-41,2,-48,92,-57,138","w":299,"k":{"T":25,"u":3,"v":4,"w":4,"y":4,"x":3,"\"":12,"'":12}},"n":{"d":"57,0r-52,0r31,-176r46,0v0,9,-4,22,-2,29v27,-44,107,-49,106,15v-1,49,-15,88,-22,132r-52,0v6,-39,18,-74,20,-117v0,-13,-4,-21,-17,-21v-38,-1,-51,92,-58,138","w":202,"k":{"T":25,"u":3,"v":4,"w":4,"y":4,"x":3,"\"":12,"'":12}},"o":{"d":"190,-107v0,64,-44,111,-105,111v-45,0,-74,-29,-74,-73v0,-61,42,-111,105,-111v47,0,74,33,74,73xm93,-36v28,0,44,-41,44,-71v0,-17,-7,-33,-28,-33v-30,0,-45,43,-45,70v0,21,11,34,29,34","w":201,"k":{"T":22,"g":-2,"j":5,"c":-2,"d":-2,"e":-2,"o":-2,"q":-2,"v":3,"w":3,"y":3,"x":5,"z":3,"\u00ad":-5,"\"":8,"'":8,",":5,".":5}},"p":{"d":"42,71r-52,0r45,-248r46,0r-3,27v14,-19,36,-30,57,-30v38,0,57,31,57,67v0,72,-61,138,-136,110xm115,-138v-31,0,-47,56,-51,94v37,29,75,-20,74,-65v0,-14,-6,-29,-23,-29","w":202,"k":{"T":22,"g":-2,"j":5,"c":-2,"d":-2,"e":-2,"o":-2,"q":-2,"v":3,"w":3,"y":3,"x":5,"z":3,"\u00ad":-5,"\"":8,"'":8,",":5,".":5}},"q":{"d":"149,71r-51,0r20,-97v-32,51,-109,34,-109,-37v0,-56,39,-117,120,-117v26,0,48,5,65,10xm85,-38v34,0,47,-61,52,-99v-43,-16,-74,28,-74,68v0,21,9,31,22,31","w":201,"k":{"T":16,"g":4,"j":-2,"x":3,"a":4,",":4,".":4}},"r":{"d":"57,0r-52,0r19,-105v5,-27,7,-56,9,-71r45,0v0,11,-4,26,-2,36v16,-27,33,-43,66,-40r-10,51v-66,-5,-62,74,-75,129","w":133,"k":{"T":9,"f":-9,"t":-9,"v":-8,"w":-8,"y":-8,"x":-4,"z":-3,"a":3,",":15,".":15}},"s":{"d":"72,-126v8,23,66,31,61,68v7,59,-92,77,-134,48r12,-36v13,8,66,23,68,-4v-4,-25,-65,-34,-59,-69v-7,-53,80,-75,123,-52r-13,37v-11,-7,-59,-16,-58,8","w":149,"k":{"T":15,",":4,".":4}},"t":{"d":"51,-209r53,-15r-9,48r38,0r-8,40r-38,0r-14,81v-3,15,15,17,29,14r-6,41v-32,12,-81,-2,-77,-35v4,-33,13,-69,18,-101r-23,0r8,-40r22,0","w":125,"k":{"g":3,"c":2,"d":2,"e":2,"o":2,"q":2,"v":-3,"w":-3,"y":-3,",":3,".":3}},"u":{"d":"144,-176r52,0r-32,176r-46,0r3,-29v-30,43,-106,51,-106,-16v0,-46,16,-89,22,-131r52,0r-21,118v0,11,5,20,18,20v43,-1,49,-92,58,-138","w":201,"k":{"T":16,"g":4,"j":-2,"x":3,"a":4,",":4,".":4}},"v":{"d":"17,-176r53,0r14,125v13,-36,38,-88,55,-125r58,0r-98,176r-53,0","w":184,"k":{"T":12,"g":8,"j":4,"c":4,"d":4,"e":4,"o":4,"q":4,"t":-1,"v":-6,"w":-6,"y":-6,"a":8,"\u00ad":3,",":16,".":16}},"w":{"d":"18,-176r53,0r-1,131v16,-47,37,-88,56,-131r42,0r7,131v14,-46,31,-89,49,-131r52,0r-86,176r-48,0r-8,-117v-16,49,-32,75,-50,117r-49,0","w":263,"k":{"T":12,"g":8,"j":4,"c":4,"d":4,"e":4,"o":4,"q":4,"t":-1,"v":-6,"w":-6,"y":-6,"a":8,"\u00ad":3,",":16,".":16}},"x":{"d":"17,-176r57,0v8,15,16,46,23,56r38,-56r60,0r-74,85r40,91r-57,0v-8,-19,-13,-42,-23,-60v-10,17,-27,42,-39,60r-60,0r77,-91","w":179,"k":{"T":11,"f":-2,"g":6,"c":6,"d":6,"e":6,"o":6,"q":6,"t":-7,"v":-8,"w":-8,"y":-8,"a":6,"\u00ad":2}},"y":{"d":"16,-176r54,0r17,119r48,-119r55,0v-52,90,-86,229,-187,257r-12,-44v23,-9,57,-24,59,-53","w":178,"k":{"T":12,"g":8,"j":4,"c":4,"d":4,"e":4,"o":4,"q":4,"t":-1,"v":-6,"w":-6,"y":-6,"a":8,"\u00ad":3,",":16,".":16}},"z":{"d":"-9,0r5,-31r58,-62r43,-41r-75,0r8,-42r137,0r-6,33r-56,59r-43,42r83,0r-8,42r-146,0","w":162,"k":{"T":11,"f":-5,"t":-2,"v":-4,"w":-4,"y":-4}},"{":{"d":"18,2v-1,-23,15,-53,16,-74v0,-10,-7,-18,-23,-18r5,-27v48,-3,31,-46,39,-81v9,-38,33,-51,75,-49r-6,30v-60,-5,-15,112,-75,114v44,9,10,67,8,97v0,12,9,17,24,16r-6,30v-33,1,-57,-6,-57,-38","w":113,"k":{"T":-8,"A":4,"C":5,"G":5,"O":5,"Q":5,"V":-8,"W":-8,"X":-3,"Y":-6,"j":-10,"c":2,"d":2,"e":2,"o":2,"q":2}},"|":{"d":"31,-270r36,0r0,360r-36,0r0,-360","w":86},"}":{"d":"100,-209v1,23,-15,53,-16,74v0,10,7,18,23,18r-5,28v-48,2,-31,46,-39,81v-9,38,-33,50,-75,48r6,-30v59,5,15,-112,75,-114v-46,-8,-10,-66,-8,-96v1,-14,-9,-18,-24,-17r5,-30v33,-2,58,6,58,38","w":113},"~":{"d":"152,-67v-27,0,-57,-31,-84,-31v-11,0,-16,12,-17,29r-34,0v0,-48,21,-67,50,-67v25,0,62,30,84,31v9,0,14,-8,15,-29r34,0v2,51,-21,67,-48,67","w":214},"'":{"d":"42,-249r48,0r-26,100r-33,0","w":71,"k":{"A":13,"J":23,"X":-2,"Y":-5,"f":-16,"b":-7,"h":-7,"k":-7,"l":-7,"t":-13,",":48,".":48}},"`":{"d":"43,-252r50,0r27,55r-37,0","w":142}}});

/**
 * jQuery.ScrollTo
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 *
 * @projectDescription Easy element scrolling using jQuery.
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 * Works with jQuery +1.2.6. Tested on FF 2/3, IE 6/7/8, Opera 9.5/6, Safari 3, Chrome 1 on WinXP.
 *
 * @author Ariel Flesler
 * @version 1.4.2
 *
 * @id jQuery.scrollTo
 * @id jQuery.fn.scrollTo
 * @param {String, Number, DOMElement, jQuery, Object} target Where to scroll the matched elements.
 *	  The different options for target are:
 *		- A number position (will be applied to all axes).
 *		- A string position ('44', '100px', '+=90', etc ) will be applied to all axes
 *		- A jQuery/DOM element ( logically, child of the element to scroll )
 *		- A string selector, that will be relative to the element to scroll ( 'li:eq(2)', etc )
 *		- A hash { top:x, left:y }, x and y can be any kind of number/string like above.
*		- A percentage of the container's dimension/s, for example: 50% to go to the middle.
 *		- The string 'max' for go-to-end. 
 * @param {Number} duration The OVERALL length of the animation, this argument can be the settings object instead.
 * @param {Object,Function} settings Optional set of settings or the onAfter callback.
 *	 @option {String} axis Which axis must be scrolled, use 'x', 'y', 'xy' or 'yx'.
 *	 @option {Number} duration The OVERALL length of the animation.
 *	 @option {String} easing The easing method for the animation.
 *	 @option {Boolean} margin If true, the margin of the target element will be deducted from the final position.
 *	 @option {Object, Number} offset Add/deduct from the end position. One number for both axes or { top:x, left:y }.
 *	 @option {Object, Number} over Add/deduct the height/width multiplied by 'over', can be { top:x, left:y } when using both axes.
 *	 @option {Boolean} queue If true, and both axis are given, the 2nd axis will only be animated after the first one ends.
 *	 @option {Function} onAfter Function to be called after the scrolling ends. 
 *	 @option {Function} onAfterFirst If queuing is activated, this function will be called after the first scrolling ends.
 * @return {jQuery} Returns the same jQuery object, for chaining.
 *
 * @desc Scroll to a fixed position
 * @example $('div').scrollTo( 340 );
 *
 * @desc Scroll relatively to the actual position
 * @example $('div').scrollTo( '+=340px', { axis:'y' } );
 *
 * @dec Scroll using a selector (relative to the scrolled element)
 * @example $('div').scrollTo( 'p.paragraph:eq(2)', 500, { easing:'swing', queue:true, axis:'xy' } );
 *
 * @ Scroll to a DOM element (same for jQuery object)
 * @example var second_child = document.getElementById('container').firstChild.nextSibling;
 *			$('#container').scrollTo( second_child, { duration:500, axis:'x', onAfter:function(){
 *				alert('scrolled!!');																   
 *			}});
 *
 * @desc Scroll on both axes, to different values
 * @example $('div').scrollTo( { top: 300, left:'+=200' }, { axis:'xy', offset:-20 } );
 */
;(function( $ ){
	
	var $scrollTo = $.scrollTo = function( target, duration, settings ){
		$(window).scrollTo( target, duration, settings );
	};

	$scrollTo.defaults = {
		axis:'xy',
		duration: parseFloat($.fn.jquery) >= 1.3 ? 0 : 1
	};

	// Returns the element that needs to be animated to scroll the window.
	// Kept for backwards compatibility (specially for localScroll & serialScroll)
	$scrollTo.window = function( scope ){
		return $(window)._scrollable();
	};

	// Hack, hack, hack :)
	// Returns the real elements to scroll (supports window/iframes, documents and regular nodes)
	$.fn._scrollable = function(){
		return this.map(function(){
			var elem = this,
				isWin = !elem.nodeName || $.inArray( elem.nodeName.toLowerCase(), ['iframe','#document','html','body'] ) != -1;

				if( !isWin )
					return elem;

			var doc = (elem.contentWindow || elem).document || elem.ownerDocument || elem;
			
			return $.browser.safari || doc.compatMode == 'BackCompat' ?
				doc.body : 
				doc.documentElement;
		});
	};

	$.fn.scrollTo = function( target, duration, settings ){
		if( typeof duration == 'object' ){
			settings = duration;
			duration = 0;
		}
		if( typeof settings == 'function' )
			settings = { onAfter:settings };
			
		if( target == 'max' )
			target = 9e9;
			
		settings = $.extend( {}, $scrollTo.defaults, settings );
		// Speed is still recognized for backwards compatibility
		duration = duration || settings.speed || settings.duration;
		// Make sure the settings are given right
		settings.queue = settings.queue && settings.axis.length > 1;
		
		if( settings.queue )
			// Let's keep the overall duration
			duration /= 2;
		settings.offset = both( settings.offset );
		settings.over = both( settings.over );

		return this._scrollable().each(function(){
			var elem = this,
				$elem = $(elem),
				targ = target, toff, attr = {},
				win = $elem.is('html,body');

			switch( typeof targ ){
				// A number will pass the regex
				case 'number':
				case 'string':
					if( /^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ) ){
						targ = both( targ );
						// We are done
						break;
					}
					// Relative selector, no break!
					targ = $(targ,this);
				case 'object':
					// DOMElement / jQuery
					if( targ.is || targ.style )
						// Get the real position of the target 
						toff = (targ = $(targ)).offset();
			}
			$.each( settings.axis.split(''), function( i, axis ){
				var Pos	= axis == 'x' ? 'Left' : 'Top',
					pos = Pos.toLowerCase(),
					key = 'scroll' + Pos,
					old = elem[key],
					max = $scrollTo.max(elem, axis);

				if( toff ){// jQuery / DOMElement
					attr[key] = toff[pos] + ( win ? 0 : old - $elem.offset()[pos] );

					// If it's a dom element, reduce the margin
					if( settings.margin ){
						attr[key] -= parseInt(targ.css('margin'+Pos)) || 0;
						attr[key] -= parseInt(targ.css('border'+Pos+'Width')) || 0;
					}
					
					attr[key] += settings.offset[pos] || 0;
					
					if( settings.over[pos] )
						// Scroll to a fraction of its width/height
						attr[key] += targ[axis=='x'?'width':'height']() * settings.over[pos];
				}else{ 
					var val = targ[pos];
					// Handle percentage values
					attr[key] = val.slice && val.slice(-1) == '%' ? 
						parseFloat(val) / 100 * max
						: val;
				}

				// Number or 'number'
				if( /^\d+$/.test(attr[key]) )
					// Check the limits
					attr[key] = attr[key] <= 0 ? 0 : Math.min( attr[key], max );

				// Queueing axes
				if( !i && settings.queue ){
					// Don't waste time animating, if there's no need.
					if( old != attr[key] )
						// Intermediate animation
						animate( settings.onAfterFirst );
					// Don't animate this axis again in the next iteration.
					delete attr[key];
				}
			});

			animate( settings.onAfter );			

			function animate( callback ){
				$elem.animate( attr, duration, settings.easing, callback && function(){
					callback.call(this, target, settings);
				});
			};

		}).end();
	};
	
	// Max scrolling position, works on quirks mode
	// It only fails (not too badly) on IE, quirks mode.
	$scrollTo.max = function( elem, axis ){
		var Dim = axis == 'x' ? 'Width' : 'Height',
			scroll = 'scroll'+Dim;
		
		if( !$(elem).is('html,body') )
			return elem[scroll] - $(elem)[Dim.toLowerCase()]();
		
		var size = 'client' + Dim,
			html = elem.ownerDocument.documentElement,
			body = elem.ownerDocument.body;

		return Math.max( html[scroll], body[scroll] ) 
			 - Math.min( html[size]  , body[size]   );
			
	};

	function both( val ){
		return typeof val == 'object' ? val : { top:val, left:val };
	};

})( jQuery );
