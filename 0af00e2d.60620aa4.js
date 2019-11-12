(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{227:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return l}));a(0);var n=a(289);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const r={id:"microservice",title:"Java Microservice Interview Questions",sidebar_label:"Microservice"},o=[{value:"What is Microservice Architecture?",id:"what-is-microservice-architecture",children:[]},{value:"What is Service Discovery?",id:"what-is-service-discovery",children:[]},{value:"What are the advantages and disadvantages of microservices?",id:"what-are-the-advantages-and-disadvantages-of-microservices",children:[]},{value:"What do you mean by Domain Driver Design?",id:"what-do-you-mean-by-domain-driver-design",children:[]},{value:"What is Bounded Context?",id:"what-is-bounded-context",children:[]},{value:"What is Compensating transaction or Saga Pattern?",id:"what-is-compensating-transaction-or-saga-pattern",children:[]},{value:"What is Circuit breaker pattern?",id:"what-is-circuit-breaker-pattern",children:[]},{value:"What are the deployment strategy you can think in Microservice Deployment?",id:"what-are-the-deployment-strategy-you-can-think-in-microservice-deployment",children:[]},{value:"What are the testing technique available to you?",id:"what-are-the-testing-technique-available-to-you",children:[]},{value:"What do you mean by Decompose by Subdomain?",id:"what-do-you-mean-by-decompose-by-subdomain",children:[]},{value:"What do you mean by Decompose by Business Capability?",id:"what-do-you-mean-by-decompose-by-business-capability",children:[]}],s={rightToc:o},c="wrapper";function l({components:e,...t}){return Object(n.b)(c,i({},s,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h3",{id:"what-is-microservice-architecture"},"What is Microservice Architecture?"),Object(n.b)("p",null,"Microservices is an architectural style which structures and application as a collection of loosely coupled, independently maintainable, testable and deployable services which are organized around business capabilities. "),Object(n.b)("p",null,"If you have a business focus and you want to solve a use case or a problem efficiently without the boundaries of technology, want to scale an independent service infinitely, highly available stateless services which are easy to maintainable and managed as well as independently testable then we would go ahead and implement Microservice architecture."),Object(n.b)("h3",{id:"what-is-service-discovery"},"What is Service Discovery?"),Object(n.b)("p",null,"In a cloud environment where docker images are dynamically deployed on any machine or IP + Port combination, it becomes difficult for dependent services to update at runtime. Service discovery is created due to that purpose only."),Object(n.b)("p",null,"Service discovery is one of the services running under microservices architecture, which registers entries of all of the services running under the service mesh. All of the actions are available through the REST API. So whenever the services are up and running, the individual services registers themselves to service discovery service and service discovery services maintains heartbeat to make sure that those services are alive. That also serves the purpose of monitoring services as well. Service discovery also helps in distributing requests across services deployed in a fair manner."),Object(n.b)("hr",null),Object(n.b)("h3",{id:"what-are-the-advantages-and-disadvantages-of-microservices"},"What are the advantages and disadvantages of microservices?"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Microservices Advantages",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Smaller code base is easy to maintain."),Object(n.b)("li",{parentName:"ul"},"Easy to scale as individual component."),Object(n.b)("li",{parentName:"ul"},"Technology diversity i.e. we can mix libraries, databases, frameworks etc."),Object(n.b)("li",{parentName:"ul"},"Fault isolation i.e. a process failure should not bring whole system down."),Object(n.b)("li",{parentName:"ul"},"Better support for smaller and parallel team."),Object(n.b)("li",{parentName:"ul"},"Independent deployment"),Object(n.b)("li",{parentName:"ul"},"Deployment time reduce"))),Object(n.b)("li",{parentName:"ul"},"Microservices Disadvantages",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Difficult to achieve strong consistency across services"),Object(n.b)("li",{parentName:"ul"},"ACID transactions do not span multiple processes."),Object(n.b)("li",{parentName:"ul"},"Distributed System so hard to debug and trace the issues"),Object(n.b)("li",{parentName:"ul"},"Greater need for end to end testing"),Object(n.b)("li",{parentName:"ul"},"Required cultural changes in across teams like Dev and Ops working together even in same team.")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"what-do-you-mean-by-domain-driver-design"},"What do you mean by Domain Driver Design?"),Object(n.b)("h3",{id:"what-is-bounded-context"},"What is Bounded Context?"),Object(n.b)("p",null,"Bounded Context is a central pattern in Domain-Driven Design. In Bounded Context, everything related to the domain is visible within context internally but opaque to other bounded contexts. DDD deals with large models by dividing them into different Bounded Contexts and being explicit about their interrelationships."),Object(n.b)("p",null,"Monolithic Conceptual Model Problem "),Object(n.b)("p",null,"A single conceptual model for the entire organization is very tricky to deal with. The only benefit of such a unified model is that integration is easy across the whole enterprise, but the drawbacks are many, for example:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"At first, it's very hard to build a single model that works for the entire organization."),Object(n.b)("li",{parentName:"ul"},"It's hard for others (teams) to understand it."),Object(n.b)("li",{parentName:"ul"},"It's very difficult to change such a shared model to accommodate the new business requirements. The impact of such a change will be widespread across team boundaries."),Object(n.b)("li",{parentName:"ul"},"Any large enterprise needs a model that is either very large or abstract."),Object(n.b)("li",{parentName:"ul"},"Meaning of a single word may be different in different departments of an organization, so it may be really difficult to come up with a single unified model. Such a model, even if created, will lead to a lot of confusion across the teams.")),Object(n.b)("h3",{id:"what-is-compensating-transaction-or-saga-pattern"},"What is Compensating transaction or Saga Pattern?"),Object(n.b)("h3",{id:"what-is-circuit-breaker-pattern"},"What is Circuit breaker pattern?"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"what-are-the-deployment-strategy-you-can-think-in-microservice-deployment"},"What are the deployment strategy you can think in Microservice Deployment?"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Multiple Service Instance Per Host."),Object(n.b)("li",{parentName:"ul"},"Single Service Instance Per Host",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Single Instance Per VM"),Object(n.b)("li",{parentName:"ul"},"Single Instance Per Container"))),Object(n.b)("li",{parentName:"ul"},"Serverless Deployment")),Object(n.b)("h3",{id:"what-are-the-testing-technique-available-to-you"},"What are the testing technique available to you?"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Service Component Test"),Object(n.b)("li",{parentName:"ul"},"Consumer-driven contract test"),Object(n.b)("li",{parentName:"ul"},"Consumer-side contract test")),Object(n.b)("h3",{id:"what-do-you-mean-by-decompose-by-subdomain"},"What do you mean by Decompose by Subdomain?"),Object(n.b)("p",null,"Define services corresponding to Domain-Driven Design (DDD) subdomains. DDD refers to the application\u2019s problem space - the business - as the domain. A domain is consists of multiple subdomains. Each subdomain corresponds to a different part of the business."),Object(n.b)("p",null,"Subdomains can be classified as follows:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Core -")," key differentiators for the business and the most valuable part of the application"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Supporting -")," related to what the business does but not a differentiator. These can be implemented in-house or outsourced."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Generic -")," not specific to the business and are ideally implemented using off the shelf software\n")),Object(n.b)("h3",{id:"what-do-you-mean-by-decompose-by-business-capability"},"What do you mean by Decompose by Business Capability?"))}l.isMDXComponent=!0},289:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n),r=i.a.createContext({}),o=function(e){var t=i.a.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},s=function(e){var t=o(e.components);return i.a.createElement(r.Provider,{value:t},e.children)};var c="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),d=o(a),u=n,b=d[s+"."+u]||d[u]||l[u]||r;return a?i.a.createElement(b,Object.assign({},{ref:t},c,{components:a})):i.a.createElement(b,Object.assign({},{ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,o[1]=s;for(var u=2;u<r;u++)o[u]=a[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);