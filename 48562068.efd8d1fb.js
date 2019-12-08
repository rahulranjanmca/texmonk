(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{140:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return s}));t(0);var r=t(329);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}const a={id:"start",title:"Spring Boot Interview Questions",sidebar_label:"Spring Boot"},i=[{value:"What do you mean by Dependency Injection?",id:"what-do-you-mean-by-dependency-injection",children:[]},{value:"What parent dependency you need to start a spring boot project",id:"what-parent-dependency-you-need-to-start-a-spring-boot-project",children:[]},{value:"How to enable profile for starting a spring boot project",id:"how-to-enable-profile-for-starting-a-spring-boot-project",children:[]}],p={rightToc:i},c="wrapper";function s({components:e,...n}){return Object(r.b)(c,o({},p,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"what-do-you-mean-by-dependency-injection"},"What do you mean by Dependency Injection?"),Object(r.b)("h3",{id:"what-parent-dependency-you-need-to-start-a-spring-boot-project"},"What parent dependency you need to start a spring boot project"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-xml"}),"<parent>\n       <groupId>org.springframework.boot</groupId>\n       <artifactId>spring-boot-starter-parent</artifactId>\n       <version>{spring-boot-version}</version>\n       <relativePath /> \x3c!-- lookup parent from repository --\x3e\n</parent>\n")),Object(r.b)("h3",{id:"how-to-enable-profile-for-starting-a-spring-boot-project"},"How to enable profile for starting a spring boot project"))}s.isMDXComponent=!0},329:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return u}));var r=t(0),o=t.n(r),a=o.a.createContext({}),i=function(e){var n=o.a.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},p=function(e){var n=i(e.components);return o.a.createElement(a.Provider,{value:n},e.children)};var c="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),d=i(t),u=r,l=d[p+"."+u]||d[u]||s[u]||a;return t?o.a.createElement(l,Object.assign({},{ref:n},c,{components:t})):o.a.createElement(l,Object.assign({},{ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var u=2;u<a;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);