"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{4811:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var r;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,r=!1,a=!1,n=0;n<e.length;n++){var i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,a=r,r=!0,n++):r&&a&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),a=r,r=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,a=r,r=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),r=e,t.pascalCase?r.charAt(0).toUpperCase()+r.slice(1):r)};e.exports=t,e.exports.default=t},7059:function(e,t,r){r.d(t,{L:function(){return f},M:function(){return C},P:function(){return b},S:function(){return j},_:function(){return s},a:function(){return o},b:function(){return u},g:function(){return d},h:function(){return l}});var a=r(7294),n=(r(4811),r(5697)),i=r.n(n);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t.indexOf(r=i[a])>=0||(n[r]=e[r]);return n}var l=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function c(){return"undefined"!=typeof GATSBY___IMAGE&&GATSBY___IMAGE}function u(e,t,r,a,n){return void 0===n&&(n={}),c()||(n=o({height:"100%",left:0,position:"absolute",top:0,transform:"translateZ(0)",transition:"opacity 250ms linear",width:"100%",willChange:"opacity"},n)),o({},r,{loading:a,shouldLoad:e,"data-main-image":"",style:o({},n,{opacity:t?1:0})})}function d(e,t,r,a,n,i,s,l){var u={};i&&(u.backgroundColor=i,"fixed"===r?(u.width=a,u.height=n,u.backgroundColor=i,u.position="relative"):("constrained"===r||"fullWidth"===r)&&(u.position="absolute",u.top=0,u.left=0,u.bottom=0,u.right=0)),s&&(u.objectFit=s),l&&(u.objectPosition=l);var d=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},u)});return c()||(d.style={height:"100%",left:0,position:"absolute",top:0,width:"100%"}),d}var m,p=["children"],g=function(e){var t=e.layout,r=e.width,n=e.height;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/r*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:r,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+r+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){var t=e.children,r=s(e,p);return a.createElement(a.Fragment,null,a.createElement(g,o({},r)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],v=function(e){var t=e.src,r=e.srcSet,n=e.loading,i=e.alt,l=void 0===i?"":i,c=e.shouldLoad,u=s(e,h);return a.createElement("img",o({},u,{decoding:"async",loading:n,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?r:void 0,"data-srcset":c?void 0:r,alt:l}))},w=function(e){var t=e.fallback,r=e.sources,n=void 0===r?[]:r,i=e.shouldLoad,l=void 0===i||i,c=s(e,y),u=c.sizes||(null==t?void 0:t.sizes),d=a.createElement(v,o({},c,t,{sizes:u,shouldLoad:l}));return n.length?a.createElement("picture",null,n.map((function(e){var t=e.media,r=e.srcSet,n=e.type;return a.createElement("source",{key:t+"-"+n+"-"+r,type:n,media:t,srcSet:l?r:void 0,"data-srcset":l?void 0:r,sizes:u})})),d):d};v.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},w.displayName="Picture",w.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};var E=["fallback"],b=function(e){var t=e.fallback,r=s(e,E);return t?a.createElement(w,o({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",o({},r))};b.displayName="Placeholder",b.propTypes={fallback:n.string,sources:null==(m=w.propTypes)?void 0:m.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};var C=function(e){return a.createElement(a.Fragment,null,a.createElement(w,o({},e)),a.createElement("noscript",null,a.createElement(w,o({},e,{shouldLoad:!0}))))};C.displayName="MainImage",C.propTypes=w.propTypes;var x,L,S=function(e,t,r){for(var a=arguments.length,n=new Array(a>3?a-3:0),o=3;o<a;o++)n[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,r].concat(n)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},T={image:i().object.isRequired,alt:S},_=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],k=["style","className"],I=new Set,A=function(e){var t=e.as,n=void 0===t?"div":t,i=e.image,u=e.style,d=e.backgroundColor,m=e.className,p=e.class,g=e.onStartLoad,f=e.onLoad,h=e.onError,y=s(e,_),v=i.width,w=i.height,E=i.layout,b=function(e,t,r){var a={},n="gatsby-image-wrapper";return c()||(a.position="relative",a.overflow="hidden"),"fixed"===r?(a.width=e,a.height=t):"constrained"===r&&(c()||(a.display="inline-block",a.verticalAlign="top"),n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:a}}(v,w,E),C=b.style,S=b.className,T=s(b,k),A=(0,a.useRef)(),N=(0,a.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);p&&(m=p);var O=function(e,t,r){var a="";return"fullWidth"===e&&(a='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(a='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+r+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),a}(E,v,w);return(0,a.useEffect)((function(){x||(x=Promise.all([r.e(774),r.e(680)]).then(r.bind(r,8680)).then((function(e){var t=e.renderImageToString,r=e.swapPlaceholderImage;return L=t,{renderImageToString:t,swapPlaceholderImage:r}})));var e,t,a=A.current.querySelector("[data-gatsby-image-ssr]");return a&&l()?(a.complete?(null==g||g({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((function(){a.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==g||g({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((function(){a.removeAttribute("data-gatsby-image-ssr")}),0)})),void I.add(N)):L&&I.has(N)?void 0:(x.then((function(r){var a=r.renderImageToString,n=r.swapPlaceholderImage;A.current&&(A.current.innerHTML=a(o({isLoading:!0,isLoaded:I.has(N),image:i},y)),I.has(N)||(e=requestAnimationFrame((function(){A.current&&(t=n(A.current,N,I,u,g,f,h))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,a.useLayoutEffect)((function(){I.has(N)&&L&&(A.current.innerHTML=L(o({isLoading:I.has(N),isLoaded:I.has(N),image:i},y)),null==g||g({wasCached:!0}),null==f||f({wasCached:!0}))}),[i]),(0,a.createElement)(n,o({},T,{style:o({},C,u,{backgroundColor:d}),className:S+(m?" "+m:""),ref:A,dangerouslySetInnerHTML:{__html:O},suppressHydrationWarning:!0}))},N=(0,a.memo)((function(e){return e.image?(c(),(0,a.createElement)(A,e)):null}));N.propTypes=T,N.displayName="GatsbyImage";var O,q=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],z=function(e,t){for(var r=arguments.length,a=new Array(r>2?r-2:0),n=2;n<r;n++)a[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(a)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},M=new Set(["fixed","fullWidth","constrained"]),W={src:i().string.isRequired,alt:S,width:z,height:z,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!M.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},j=(O=N,function(e){var t=e.src,r=e.__imageData,n=e.__error,i=s(e,q);return n&&console.warn(n),r?a.createElement(O,o({image:r},i)):(console.warn("Image not loaded",t),null)});j.displayName="StaticImage",j.propTypes=W},5592:function(e,t,r){r.d(t,{Z:function(){return i}});var a=r(7294),n=r(1597);var i=function(e){var t=e.children;(0,n.K2)("3649515864");return a.createElement(a.Fragment,null,a.createElement("div",{style:{margin:"0 auto",maxWidth:"var(--size-content)",padding:"var(--size-gutter)"}},a.createElement("main",null,t),a.createElement("footer",{style:{marginTop:"var(--space-5)",fontSize:"var(--font-sm)"}},"© ",(new Date).getFullYear()," · Built with"," ",a.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby"))))}},9357:function(e,t,r){var a=r(7294),n=r(1597);function i(e){var t,r,i=e.description,o=e.title,s=e.children,l=(0,n.K2)("3159585216").site,c=i||l.siteMetadata.description,u=null===(t=l.siteMetadata)||void 0===t?void 0:t.title;return a.createElement(a.Fragment,null,a.createElement("title",null,u?o+" | "+u:o),a.createElement("meta",{name:"description",content:c}),a.createElement("meta",{property:"og:title",content:o}),a.createElement("meta",{property:"og:description",content:c}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:(null===(r=l.siteMetadata)||void 0===r?void 0:r.author)||""}),a.createElement("meta",{name:"twitter:title",content:o}),a.createElement("meta",{name:"twitter:description",content:c}),s)}i.defaultProps={description:""},t.Z=i},8296:function(e,t,r){r.r(t),r.d(t,{Head:function(){return l},default:function(){return c}});var a=r(7294),n=(r(1597),r(7059)),i=r(5592),o=r(9357),s=[{text:"รายชื่อสมาชิกในทีม",url:"members",description:"แสดงรายชื่อสมาชิกทั้งหมดในทีม"},{text:"รายวิชาทั้งหมด",url:"subjects",description:"แสดงรายวิชาทั้งหมดที่มี"},{text:"สมาชิกแต่ละคน เรียนวิชาอะไรบ้าง วันเวลาเท่าไร ?",url:"subjects-of-student",description:"แสดงรายวิชาที่สมาชิกแต่ละคนลงทะเบียน"},{text:"คณะผู้จัดทำ",url:"developers",description:"รายชื่อผู้พัฒนาในทีม"}],l=function(){return a.createElement(o.Z,{title:"Home"})},c=function(){return a.createElement(i.Z,null,a.createElement(o.Z,{title:"Home"}),a.createElement("div",{className:"index-module--textCenter--Ts42-"},a.createElement(n.S,{src:"../images/example.png",loading:"eager",width:64,quality:95,formats:["auto","webp","avif"],alt:"",style:{marginBottom:"var(--space-3)"}}),a.createElement("h1",null,"Welcome to ",a.createElement("b",null,"240-420!")),a.createElement("p",{className:"index-module--intro--C4dpM"})),a.createElement("ul",{className:"index-module--list--+0B75"},s.map((function(e){return a.createElement("li",{key:e.url,className:"index-module--listItem--BubbZ"},a.createElement("a",{className:"index-module--listItemLink--Asns5",href:e.url+"?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter"},e.text," ↗"),a.createElement("p",{className:"index-module--listItemDescription--84dWA"},e.description))}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-0c1fc6c2acf2506ebc4c.js.map