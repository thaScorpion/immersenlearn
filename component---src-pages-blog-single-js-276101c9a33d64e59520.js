/*! For license information please see component---src-pages-blog-single-js-276101c9a33d64e59520.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[543],{5900:function(e,t){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var l=typeof a;if("string"===l||"number"===l)e.push(a);else if(Array.isArray(a)){if(a.length){var s=r.apply(null,a);s&&e.push(s)}}else if("object"===l)if(a.toString===Object.prototype.toString)for(var c in a)n.call(a,c)&&a[c]&&e.push(c);else e.push(a.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},7408:function(e,t,a){"use strict";var n=a(7462),r=a(3366),l=a(5900),s=a.n(l),c=a(7294),i=a(9541),o=["bsPrefix","className","as"],m=["xl","lg","md","sm","xs"],u=c.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,u=e.as,f=void 0===u?"div":u,d=(0,r.Z)(e,o),v=(0,i.vE)(a,"col"),E=[],p=[];return m.forEach((function(e){var t,a,n,r=d[e];if(delete d[e],"object"==typeof r&&null!=r){var l=r.span;t=void 0===l||l,a=r.offset,n=r.order}else t=r;var s="xs"!==e?"-"+e:"";t&&E.push(!0===t?""+v+s:""+v+s+"-"+t),null!=n&&p.push("order"+s+"-"+n),null!=a&&p.push("offset"+s+"-"+a)})),E.length||E.push(v),c.createElement(f,(0,n.Z)({},d,{ref:t,className:s().apply(void 0,[l].concat(E,p))}))}));u.displayName="Col",t.Z=u},6187:function(e,t,a){"use strict";var n=a(7462),r=a(3366),l=a(5900),s=a.n(l),c=a(7294),i=a(9541),o=["bsPrefix","fluid","as","className"],m=c.forwardRef((function(e,t){var a=e.bsPrefix,l=e.fluid,m=e.as,u=void 0===m?"div":m,f=e.className,d=(0,r.Z)(e,o),v=(0,i.vE)(a,"container"),E="string"==typeof l?"-"+l:"-fluid";return c.createElement(u,(0,n.Z)({ref:t},d,{className:s()(f,l?""+v+E:v)}))}));m.displayName="Container",m.defaultProps={fluid:!1},t.Z=m},994:function(e,t,a){"use strict";var n=a(7462),r=a(3366),l=a(5900),s=a.n(l),c=a(7294),i=a(9541),o=["bsPrefix","className","noGutters","as"],m=["xl","lg","md","sm","xs"],u=c.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,u=e.noGutters,f=e.as,d=void 0===f?"div":f,v=(0,r.Z)(e,o),E=(0,i.vE)(a,"row"),p=E+"-cols",g=[];return m.forEach((function(e){var t,a=v[e];delete v[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&g.push(""+p+n+"-"+t)})),c.createElement(d,(0,n.Z)({ref:t},v,{className:s().apply(void 0,[l,E,u&&"no-gutters"].concat(g))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},t.Z=u},9541:function(e,t,a){"use strict";a.d(t,{vE:function(){return l}});var n=a(7294),r=n.createContext({});r.Consumer,r.Provider;function l(e,t){var a=(0,n.useContext)(r);return e||a[t]||t}},5610:function(e,t,a){"use strict";var n=a(7294),r=a(9546);t.Z=function(){var e=r.yA.light;return n.createElement("footer",{className:"footer_1"},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-lg-5 col-sm-6 col-md-5"},n.createElement("aside",{className:"widget aboutwidget"},n.createElement("a",{href:"/"},n.createElement("img",{src:e,alt:"immerse n learn"})),n.createElement("p",{className:"footer_desc"},"The idea of this project is to drastically advance student development and engagement by employing VR-based collaboration tools and virtual embodiment theory in a blended- or remote learning environment. This project will serve education’s leadership and faculty in showing value and breaking the barrier of technology and software intimidation."))),n.createElement("div",{className:"col-lg-4 col-sm-4 col-md-4"},n.createElement("aside",{className:"widget contact_widgets"},n.createElement("h3",{className:"widget_title"},"contact"),n.createElement("p",null,"Email: immersenlearn@immersenlearn.com"))),n.createElement("div",{className:"col-lg-3 col-sm-2 col-md-3"},n.createElement("aside",{className:"widget social_widget"},n.createElement("h3",{className:"widget_title"},"social"),n.createElement("ul",null,n.createElement("li",null,n.createElement("a",{target:"_blank",href:"https://twitter.com/ImmerseNLearn"},n.createElement("i",{className:"fa fa-twitter"}),"Twitter")),n.createElement("li",null,n.createElement("a",{target:"_blank",href:"https://www.instagram.com/immerse_n_learn/?hl=fr"},n.createElement("i",{className:"fa fa-instagram"}),"Instagram")),n.createElement("li",null,n.createElement("a",{target:"_blank",href:"https://www.youtube.com/channel/UCeML2eh3wL2JYDHXL0Rxw8g"},n.createElement("i",{className:"fa fa-youtube-play"}),"Youtube")))))),n.createElement("div",{className:"row"},n.createElement("div",{className:"col-lg-12 col-sm-12 text-center"},n.createElement("div",{className:"copyright"},"© copyright ",(new Date).getFullYear()," by"," ",n.createElement("a",{href:"/"},"ImmerseNLearn.com"))))))}},5097:function(e,t,a){"use strict";var n=a(7294),r=a(9546),l=a(6187),s=a(994),c=a(7408),i=a(7859),o=a(3530),m=a(5444);t.Z=function(){var e="undefined"!=typeof window,t=(0,n.useState)(!1),a=t[0],u=t[1],f=(0,n.useContext)(i.c),d=(f.searchStatus,f.updateSearchStatus,(0,n.useContext)(o.p)),v=d.menuStatus,E=d.updateMenuStatus,p=function(){e&&(window.scrollY>70?u(!0):window.scrollY<70&&u(!1))};return(0,n.useEffect)((function(){return e&&window.addEventListener("scroll",p),function(){e&&window.removeEventListener("scroll",p)}}),[a]),n.createElement("header",{className:"header_01 "+(!0===a?"fixedHeader animated flipInX":null),id:"header"},n.createElement(l.Z,{fluid:!0},n.createElement(s.Z,{className:"justify-content-between"},n.createElement(c.Z,{className:"col-6",lg:2,md:3,sm:3},n.createElement("div",{className:"logo"},n.createElement(m.Link,{to:"/"},n.createElement("img",{src:r.yA.light,alt:"Immerse N Learn"})))),n.createElement(c.Z,{lg:8,sm:8,md:7,className:"d-none d-lg-block "},n.createElement("nav",{className:"mainmenu text-center"},n.createElement("ul",null,r.H9.map((function(e,t){return n.createElement("li",{key:t,className:void 0!==e.subItems?"menu-item-has-children":""},n.createElement(m.Link,{to:e.url},e.name),void 0!==e.subItems?n.createElement("ul",{className:"sub-menu"},e.subItems.map((function(e,t){return n.createElement("li",{key:t},n.createElement(m.Link,{to:e.url},e.name))}))):null)}))))),n.createElement(c.Z,{lg:2,md:2,sm:4,className:"col-6"},n.createElement("div",{className:"navigator text-right"},n.createElement("a",{href:"#",className:"menu mobilemenu d-none d-md-none d-lg-none"},n.createElement("i",{className:"mei-menu"})),n.createElement("a",{id:"open-overlay-nav",className:"menu hamburger",onClick:function(e){e.preventDefault(),E(!v)},href:"#"},n.createElement("i",{className:"mei-menu"})))))))}},5035:function(e,t,a){"use strict";var n=a(7294);t.Z=function(e){var t=e.title;e.name;return n.createElement("section",{className:"pageBanner"},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-lg-12"},n.createElement("div",{className:"banner_content text-center"},n.createElement("h2",null,t))))))}},5618:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return o}});var n=a(7294),r=a(5610),l=a(2728),s=(a(5035),a(9546),a(3530)),c=a(7859),i=a(5097),o=function(){return n.createElement(s.Z,null,n.createElement(c.Z,null,n.createElement(l.Z,{PageTitle:"Blog"},n.createElement(i.Z,null),n.createElement(r.Z,null))))}},7462:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,{Z:function(){return n}})},3366:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,{Z:function(){return n}})}}]);
//# sourceMappingURL=component---src-pages-blog-single-js-276101c9a33d64e59520.js.map