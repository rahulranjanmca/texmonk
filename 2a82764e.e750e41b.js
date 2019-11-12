(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{205:function(e,o,n){"use strict";n.r(o),n.d(o,"frontMatter",(function(){return r})),n.d(o,"rightToc",(function(){return a})),n.d(o,"default",(function(){return d}));n(0);var t=n(289);function i(){return(i=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}const r={id:"advanced",title:"Docker Advance Interview Questions",sidebar_label:"Docker Advance"},a=[{value:"Will you lose your data, when a docker container exists?",id:"will-you-lose-your-data-when-a-docker-container-exists",children:[]},{value:"Where all do you think Docker is being used?",id:"where-all-do-you-think-docker-is-being-used",children:[]},{value:"How is Docker different from other containerization methods?",id:"how-is-docker-different-from-other-containerization-methods",children:[]},{value:"Can I use JSON instead of YAML for my compose file in Docker?",id:"can-i-use-json-instead-of-yaml-for-my-compose-file-in-docker",children:[]},{value:"How have you used Docker in your previous position?",id:"how-have-you-used-docker-in-your-previous-position",children:[]},{value:"How far do Docker containers scale? Are there any requirements for the same?",id:"how-far-do-docker-containers-scale-are-there-any-requirements-for-the-same",children:[]},{value:"What platforms does docker run on?",id:"what-platforms-does-docker-run-on",children:[]},{value:"Is there a way to identify the status of a Docker container?",id:"is-there-a-way-to-identify-the-status-of-a-docker-container",children:[]},{value:"Can you remove a paused container from Docker?",id:"can-you-remove-a-paused-container-from-docker",children:[]},{value:"Can a container restart by itself?",id:"can-a-container-restart-by-itself",children:[]},{value:"Is it better to directly remove the container using the rm command or stop the container followed by remove container?",id:"is-it-better-to-directly-remove-the-container-using-the-rm-command-or-stop-the-container-followed-by-remove-container",children:[]},{value:"Will cloud overtake the use of Containerization?",id:"will-cloud-overtake-the-use-of-containerization",children:[]},{value:"How many containers can run per host?",id:"how-many-containers-can-run-per-host",children:[]},{value:"Is it a good practice to run stateful applications on Docker?",id:"is-it-a-good-practice-to-run-stateful-applications-on-docker",children:[]},{value:"Suppose you have an application that has many dependant services. Will docker compose wait for the current container to be ready to move to the running of the next service?",id:"suppose-you-have-an-application-that-has-many-dependant-services-will-docker-compose-wait-for-the-current-container-to-be-ready-to-move-to-the-running-of-the-next-service",children:[]},{value:"How will you monitor Docker in production?",id:"how-will-you-monitor-docker-in-production",children:[]},{value:"Is it a good practice to run Docker compose in production?",id:"is-it-a-good-practice-to-run-docker-compose-in-production",children:[]},{value:"What changes are expected in your docker compose file while moving it to production?",id:"what-changes-are-expected-in-your-docker-compose-file-while-moving-it-to-production",children:[]},{value:"Have you used Kubernetes? If you have, which one would you prefer amongst Docker and Kubernetes?",id:"have-you-used-kubernetes-if-you-have-which-one-would-you-prefer-amongst-docker-and-kubernetes",children:[]},{value:"Are you aware of load balancing across containers and hosts? How does it work?",id:"are-you-aware-of-load-balancing-across-containers-and-hosts-how-does-it-work",children:[]}],c={rightToc:a},s="wrapper";function d({components:e,...o}){return Object(t.b)(s,i({},c,o,{components:e,mdxType:"MDXLayout"}),Object(t.b)("h3",{id:"will-you-lose-your-data-when-a-docker-container-exists"},"Will you lose your data, when a docker container exists?"),Object(t.b)("p",null,"No, you won\u2019t lose any data when Docker container exits. Any data that your application writes to the container gets preserved on the disk until you explicitly delete the container. The file system for the container persists even after the container halts."),Object(t.b)("hr",null),Object(t.b)("h3",{id:"where-all-do-you-think-docker-is-being-used"},"Where all do you think Docker is being used?"),Object(t.b)("p",null,"When asked such a question, respond by talking about applications of Docker. Docker is being used in the following areas:"),Object(t.b)("p",null,"Simplifying configuration: Docker lets you put your environment and configuration into code and deploy it.\nCode Pipeline Management: There are different systems used for development and production. As the code travels from development to testing to production, it goes through a difference in the environment. Docker helps in maintaining the code pipeline consistency.\nDeveloper Productivity: Using Docker for development gives us two things \u2013 We\u2019re closer to production and development environment is built faster.\nApplication Isolation: As containers are applications wrapped together with all dependencies, your apps are isolated. They can work by themselves on any hardware that supports Docker.\nDebugging Capabilities: Docker supports various debugging tools that are not specific to containers but work well with containers.\nMulti-tenancy: Docker lets you have multi-tenant applications avoiding redundancy in your codes and deployments.\nRapid Deployment: Docker eliminates the need to boost an entire OS from scratch, reducing the deployment time."),Object(t.b)("hr",null),Object(t.b)("h3",{id:"how-is-docker-different-from-other-containerization-methods"},"How is Docker different from other containerization methods?"),Object(t.b)("p",null,"Docker containers are very easy to deploy in any cloud platform. It can get more applications running on the same hardware when compared to other technologies, it makes it easy for developers to quickly create, ready-to-run containerized applications and it makes managing and deploying applications much easier. You can even share containers with your applications."),Object(t.b)("p",null,"If you have some more points to add you can do that but make sure the above explanation is there in your answer."),Object(t.b)("hr",null),Object(t.b)("h3",{id:"can-i-use-json-instead-of-yaml-for-my-compose-file-in-docker"},"Can I use JSON instead of YAML for my compose file in Docker?"),Object(t.b)("p",null,"You can use JSON instead of YAML for your compose file, to use JSON file with compose, specify the JSON filename to use, for eg:"),Object(t.b)("p",null,"$ docker-compose -f docker-compose.json up"),Object(t.b)("hr",null),Object(t.b)("h3",{id:"how-have-you-used-docker-in-your-previous-position"},"How have you used Docker in your previous position?"),Object(t.b)("p",null,"Explain how you have used Docker to help rapid deployment. Explain how you have scripted Docker and used it with other tools like Puppet, Chef or Jenkins. If you have no past practical experience in Docker and instead have experience with other tools in a similar space, be honest and explain the same. In this case, it makes sense if you can compare other tools to Docker in terms of functionality."),Object(t.b)("hr",null),Object(t.b)("h3",{id:"how-far-do-docker-containers-scale-are-there-any-requirements-for-the-same"},"How far do Docker containers scale? Are there any requirements for the same?"),Object(t.b)("p",null,"Large web deployments like Google and Twitter and platform providers such as Heroku and dotCloud, all run on container technology. Containers can be scaled to hundreds of thousands or even millions of them running in parallel. Talking about requirements, containers require the memory and the OS at all the times and a way to use this memory efficiently when scaled."),Object(t.b)("hr",null),Object(t.b)("h3",{id:"what-platforms-does-docker-run-on"},"What platforms does docker run on?"),Object(t.b)("p",null,"This is a very straightforward question but can get tricky. Do some company research before going for the interview and find out how the company is using Docker. Make sure you mention the platform company is using in this answer."),Object(t.b)("p",null,"Docker runs on various Linux administration:"),Object(t.b)("p",null,"Ubuntu 12.04, 13.04 et al\nFedora 19/20+\nRHEL 6.5+\nCentOS 6+\nGentoo\nArchLinux\nopenSUSE 12.3+\nCRUX 3.0+\nIt can also be used in production with Cloud platforms with the following services:"),Object(t.b)("p",null,"Amazon EC2\nAmazon ECS\nGoogle Compute Engine\nMicrosoft Azure\nRackspace"),Object(t.b)("h3",{id:"is-there-a-way-to-identify-the-status-of-a-docker-container"},"Is there a way to identify the status of a Docker container?"),Object(t.b)("p",null,"There are six possible states a container can be at any given point \u2013 Created, Running, Paused, Restarting, Exited, Dead."),Object(t.b)("p",null,"Use the following command to check for docker state at any given point:"),Object(t.b)("p",null,"$ docker ps"),Object(t.b)("p",null,"The above command lists down only running containers by default. To look for all containers, use the following command:"),Object(t.b)("p",null,"$ docker ps -a"),Object(t.b)("h3",{id:"can-you-remove-a-paused-container-from-docker"},"Can you remove a paused container from Docker?"),Object(t.b)("p",null,"The answer is no. You cannot remove a paused container. The container has to be in the stopped state before it can be removed."),Object(t.b)("h3",{id:"can-a-container-restart-by-itself"},"Can a container restart by itself?"),Object(t.b)("p",null,"No, it\u2019s not possible for a container to restart by itself. By default the flag -restart is set to false."),Object(t.b)("h3",{id:"is-it-better-to-directly-remove-the-container-using-the-rm-command-or-stop-the-container-followed-by-remove-container"},"Is it better to directly remove the container using the rm command or stop the container followed by remove container?"),Object(t.b)("p",null,"Its always better to stop the container and then remove it using the remove command."),Object(t.b)("p",null,"$ docker stop <coontainer_id>\n$ docker rm -f <container_id>"),Object(t.b)("p",null,"Stopping the container and then removing it will allow sending SIG_HUP signal to recipients. This will ensure that all the containers have enough time to clean up their tasks. This method is considered a good practice, avoiding unwanted errors."),Object(t.b)("h3",{id:"will-cloud-overtake-the-use-of-containerization"},"Will cloud overtake the use of Containerization?"),Object(t.b)("p",null,"Docker containers are gaining popularity but at the same time, Cloud services are giving a good fight. In my personal opinion, Docker will never be replaced by Cloud. Using cloud services with containerization will definitely hype the game. Organizations need to take their requirements and dependencies into consideration into the picture and decide what\u2019s best for them. Most of the companies have integrated Docker with the cloud. This way they can make the best out of both the technologies."),Object(t.b)("h3",{id:"how-many-containers-can-run-per-host"},"How many containers can run per host?"),Object(t.b)("p",null,"There can be as many containers as you wish per host. Docker does not put any restrictions on it. But you need to consider every container needs storage space, CPU and memory which the hardware needs to support. You also need to consider the application size. Containers are considered to be lightweight but very dependant on the host OS."),Object(t.b)("h3",{id:"is-it-a-good-practice-to-run-stateful-applications-on-docker"},"Is it a good practice to run stateful applications on Docker?"),Object(t.b)("p",null,"The concept behind stateful applications is that they store their data onto the local file system. You need to decide to move the application to another machine, retrieving data becomes painful. I honestly would not prefer running stateful applications on Docker."),Object(t.b)("h3",{id:"suppose-you-have-an-application-that-has-many-dependant-services-will-docker-compose-wait-for-the-current-container-to-be-ready-to-move-to-the-running-of-the-next-service"},"Suppose you have an application that has many dependant services. Will docker compose wait for the current container to be ready to move to the running of the next service?"),Object(t.b)("p",null,"The answer is yes. Docker compose always runs in the dependency order. These dependencies are specifications like depends_on, links, volumes_from, etc."),Object(t.b)("h3",{id:"how-will-you-monitor-docker-in-production"},"How will you monitor Docker in production?"),Object(t.b)("p",null,"Docker provides functionalities like docker stats and docker events to monitor docker in production. Docker stats provides CPU and memory usage of the container. Docker events provide information about the activities taking place in the docker daemon."),Object(t.b)("h3",{id:"is-it-a-good-practice-to-run-docker-compose-in-production"},"Is it a good practice to run Docker compose in production?"),Object(t.b)("p",null,"Yes, using docker compose in production is the best practical application of docker compose. When you define applications with compose, you can use this compose definition in various production stages like CI, staging, testing, etc."),Object(t.b)("h3",{id:"what-changes-are-expected-in-your-docker-compose-file-while-moving-it-to-production"},"What changes are expected in your docker compose file while moving it to production?"),Object(t.b)("p",null,"These are the following changes you need make to your compose file before migrating your application to the production environment:"),Object(t.b)("p",null,"Remove volume bindings, so the code stays inside the container and cannot be changed from outside the container.\nBinding to different ports on the host.\nSpecify a restart policy\nAdd extra services like log aggregator"),Object(t.b)("h3",{id:"have-you-used-kubernetes-if-you-have-which-one-would-you-prefer-amongst-docker-and-kubernetes"},"Have you used Kubernetes? If you have, which one would you prefer amongst Docker and Kubernetes?"),Object(t.b)("p",null,"Be very honest in such questions. If you have used Kubernetes, talk about your experience with Kubernetes and Docker Swarm. Point out the key areas where you thought docker swarm was more efficient and vice versa. Have a look at this blog for understanding differences between Docker and Kubernetes."),Object(t.b)("p",null,"You Docker interview questions are not just limited to the workarounds of docker but also other similar tools. Hence be prepared with tools/technologies that give Docker competition. One such example is Kubernetes."),Object(t.b)("h3",{id:"are-you-aware-of-load-balancing-across-containers-and-hosts-how-does-it-work"},"Are you aware of load balancing across containers and hosts? How does it work?"),Object(t.b)("p",null,"While using docker service with multiple containers across different hosts, you come across the need to load balance the incoming traffic. Load balancing and HAProxy is basically used to balance the incoming traffic across different available(healthy) containers. If one container crashes, another container should automatically start running and the traffic should be re-routed to this new running container. Load balancing and HAProxy works around this concept."))}d.isMDXComponent=!0},289:function(e,o,n){"use strict";n.d(o,"a",(function(){return c})),n.d(o,"b",(function(){return u}));var t=n(0),i=n.n(t),r=i.a.createContext({}),a=function(e){var o=i.a.useContext(r),n=o;return e&&(n="function"==typeof e?e(o):Object.assign({},o,e)),n},c=function(e){var o=a(e.components);return i.a.createElement(r.Provider,{value:o},e.children)};var s="mdxType",d={inlineCode:"code",wrapper:function(e){var o=e.children;return i.a.createElement(i.a.Fragment,{},o)}},l=Object(t.forwardRef)((function(e,o){var n=e.components,t=e.mdxType,r=e.originalType,c=e.parentName,s=function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&-1===o.indexOf(t)&&(n[t]=e[t]);return n}(e,["components","mdxType","originalType","parentName"]),l=a(n),u=t,h=l[c+"."+u]||l[u]||d[u]||r;return n?i.a.createElement(h,Object.assign({},{ref:o},s,{components:n})):i.a.createElement(h,Object.assign({},{ref:o},s))}));function u(e,o){var n=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var r=n.length,a=new Array(r);a[0]=l;var c={};for(var d in o)hasOwnProperty.call(o,d)&&(c[d]=o[d]);c.originalType=e,c[s]="string"==typeof e?e:t,a[1]=c;for(var u=2;u<r;u++)a[u]=n[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"}}]);