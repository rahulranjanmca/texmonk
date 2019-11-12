(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{201:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"rightToc",(function(){return o})),r.d(t,"default",(function(){return u}));r(0);var a=r(289);function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}const i={id:"threading",title:"Java Threading Interview Questions",sidebar_label:"Threading"},o=[{value:"Is ++ (increment) or -- (decrement) operator thread-safe in Java?",id:"is--increment-or----decrement-operator-thread-safe-in-java",children:[]},{value:"What is Semaphore?",id:"what-is-semaphore",children:[]},{value:"What is CountDownLatch?",id:"what-is-countdownlatch",children:[]},{value:"What is CyclicBarrier?",id:"what-is-cyclicbarrier",children:[]},{value:"What is Mutex? What all ways you can use Mutex.",id:"what-is-mutex-what-all-ways-you-can-use-mutex",children:[]}],c={rightToc:o},s="wrapper";function u({components:e,...t}){return Object(a.b)(s,n({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"is--increment-or----decrement-operator-thread-safe-in-java"},"Is ++ (increment) or -- (decrement) operator thread-safe in Java?"),Object(a.b)("p",null,"No. Neither increment operator (++) nor the decrement operaor (--) is thread safe."),Object(a.b)("p",null,"For example, the statement i++ is not atomic. It involves multiple instructions that includes reading the value of i variable, increment its value by 1 and store the new i value to the variable."),Object(a.b)("h3",{id:"what-is-semaphore"},"What is Semaphore?"),Object(a.b)("p",null,"A semaphore controls access to a shared resource through the use of a counter. If the counter is greater than zero, then access is allowed. If it is zero, then access is denied. What the counter is counting are permits that allow access to the shared resource. Thus, to access the resource, a thread must be granted a permit from the semaphore."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"what-is-countdownlatch"},"What is CountDownLatch?"),Object(a.b)("h3",{id:"what-is-cyclicbarrier"},"What is CyclicBarrier?"),Object(a.b)("h3",{id:"what-is-mutex-what-all-ways-you-can-use-mutex"},"What is Mutex? What all ways you can use Mutex."),Object(a.b)("p",null,"Some way for mutex."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Synchronized method"),Object(a.b)("li",{parentName:"ul"},"Synchronized block"),Object(a.b)("li",{parentName:"ul"},"Reentrant Lock"),Object(a.b)("li",{parentName:"ul"},"Semaphore")))}u.isMDXComponent=!0},289:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return h}));var a=r(0),n=r.n(a),i=n.a.createContext({}),o=function(e){var t=n.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):Object.assign({},t,e)),r},c=function(e){var t=o(e.components);return n.a.createElement(i.Provider,{value:t},e.children)};var s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},l=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(r[a]=e[a]);return r}(e,["components","mdxType","originalType","parentName"]),l=o(r),h=a,p=l[c+"."+h]||l[h]||u[h]||i;return r?n.a.createElement(p,Object.assign({},{ref:t},s,{components:r})):n.a.createElement(p,Object.assign({},{ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=l;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[s]="string"==typeof e?e:a,o[1]=c;for(var h=2;h<i;h++)o[h]=r[h];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}l.displayName="MDXCreateElement"}}]);