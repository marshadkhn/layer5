"use strict";(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[1885],{85224:function(e,n,a){a.d(n,{Z:function(){return h}});var t=a(67294),i=a(71082),r=a(85313);const m=(0,r.default)("div").withConfig({displayName:"style__Container",componentId:"sc-am53qh-0"})(["\n    max-width: 1170px;\n    margin: 0 auto;\n    padding: 0 2rem;\n"]),l=(0,r.default)("div").withConfig({displayName:"style__Wrapper",componentId:"sc-am53qh-1"})(["\n    padding: 2rem 0;\n    display: flex;\n    gap: 1.5rem;    \n    @media only screen and (max-width: 675px){\n        flex-direction: column;\n    }\n"]),d=(0,r.default)("div").withConfig({displayName:"style__CardWrapper",componentId:"sc-am53qh-2"})(["\n    width: 350px;\n    flex: 1;\n    background: ",";\n    border-radius: 0.25rem;\n    box-shadow: 0px 0px "," ",";\n    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n    &:hover {\n        box-shadow: 0px 0px 5px ",";\n    }\n    @media only screen and (max-width: 675px){\n        width: 100%;\n    }\n"],(e=>e.theme.grey212121ToLinear2),(e=>e.theme.projectShadowsize),(e=>e.theme.green00D3A9ToGreyE6E6E6),(e=>e.theme.whiteToGreen3C494F)),o=(0,r.default)("div").withConfig({displayName:"style__CardImageContainer",componentId:"sc-am53qh-3"})([""]),s=(0,r.default)("img").withConfig({displayName:"style__Image",componentId:"sc-am53qh-4"})([""]),c=(0,r.default)("h4").withConfig({displayName:"style__CardTitle",componentId:"sc-am53qh-5"})(["\n    text-align: center;\n    padding: 2rem 1rem;\n"]);var g=a(89192);const p=e=>{let{title:n,imgSrc:a,redirectLink:r}=e;return t.createElement(t.Fragment,null,t.createElement(i.Link,{to:r},t.createElement(d,null,t.createElement(o,null,t.createElement(s,{src:a,alt:"gcp architecture diagram"})),t.createElement(c,null,n))))};var h=e=>{let{heading:n}=e;const{isDark:a}=(0,g.I)(),r=(0,i.useStaticQuery)("586619921");return t.createElement(t.Fragment,null,t.createElement(m,null,t.createElement("h2",null,"Other Supported Platforms"),t.createElement(l,null,r.allMdx.nodes.filter((e=>e.frontmatter.title.split(" ")[0].toLowerCase()!==n)).map((e=>t.createElement(p,{key:e.id,title:e.frontmatter.title,imgSrc:a?e.frontmatter.darkimgsrc.publicURL:e.frontmatter.lightimgsrc.publicURL,redirectLink:e.frontmatter.redirectLink}))))))}},27453:function(e,n,a){a.r(n),a.d(n,{Head:function(){return N},default:function(){return E}});var t=a(67294),i=a(17875),r=a(81912),m=a(10710),l=a(85313),d=a(37242),o=a(89192),s=a(54648),c=a(85224),g=a.p+"static/config-54e685b599e3b729b52eaaa7412108a2.gif",p=a.p+"static/deploy-17b55c02f0a5e155cc9ccfee6a24507d.gif",h=a.p+"static/drag-drop-1f5b2d8702294a0b928446eda2688b83.gif",u=a.p+"static/icon-library-0383d3ed43881451b7f826dc4f98a2fd.gif",f=a(71082);const x=l.default.div.withConfig({displayName:"diagram__DiagramWrapper",componentId:"sc-1mbwnfq-0"})(["\n  min-height: fit-content;\n  border-width: 2px 2px 2px 2px;\n  background-color: ",";\n  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n  padding-bottom: 100px;\n  @media (max-width: 850px) {\n    margin: 3rem 0;\n  }\n  @media (max-width: 767px) {\n    padding-top: 0;\n    padding-bottom: 0;\n  }\n  .image-wrapper{\n    border-radius: 0.25rem;\n    overflow: hidden;\n  }\n  .diagram-container .catalog:nth-child(odd) {\n    .diagram-image {\n      .image-wrapper {\n        justify-content: center;\n        @media (max-width: 767px) {\n          justify-content: center;\n        }\n      }\n    }\n  }\n\n  .diagram-container .catalog:nth-child(even) {\n    .diagram-image {\n      @media (max-width: 767px) {\n        order: 0;\n      }\n    }\n    .diagram-detail {\n      @media (max-width: 767px) {\n        order: 1;\n      }\n    }\n  }\n\n  .catalog {\n    display: flex;\n    padding: 5rem 0;\n    @media (max-width: 768px) {\n      padding: 2rem 0;\n    }\n    @media (max-width: 468px) {\n      flex-direction: column;\n    }\n    .diagram-detail {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      .link {\n        margin: 1rem 0;\n        cursor: pointer;\n      }\n      .heading {\n        color: ",";\n        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n        margin-bottom: 2rem;\n        @media (max-width: 767px) {\n          text-align: center;\n          padding-left: 100px;\n          padding-right: 100px;\n          margin-bottom: 1rem;\n        }\n        @media (max-width: 467px) {\n          padding-left: 25px;\n          padding-right: 25px;\n          text-align: left;\n        }\n      }\n      .sub-heading {\n        @media (max-width: 767px) {\n          text-align: center;\n        }\n        @media (max-width: 467px) {\n          padding-left: 25px;\n          text-align: left;\n        }\n      }\n      .caption {\n        font-weight: 400;\n        font-size: 1.1rem;\n        line-height: 1.5rem;\n        color: ",";\n        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n        opacity: 0.8;\n        @media (max-width: 767px) {\n          font-size: 1rem;\n          line-height: 1.5rem;\n          text-align: center;\n          padding-left: 100px;\n          padding-right: 100px;\n        }\n        @media (max-width: 467px) {\n          padding-left: 25px;\n          padding-right: 25px;\n          text-align: left;\n        }\n      }\n    }\n    .diagram-image {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      .image-wrapper {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        @media (max-width: 767px) {\n          justify-content: center;\n        }\n        .kubernetes-image {\n          @media (max-width: 767px) {\n            max-width: 90%;\n            margin-bottom: 2rem;\n          }\n        } \n      }\n    }\n  }\n"],(e=>e.theme.body),(e=>e.theme.tertiaryColor),(e=>e.theme.tertiaryColor));var w=()=>{const{isDark:e}=(0,o.I)();return t.createElement(x,null,t.createElement(d.W2,{className:"diagram-container"},t.createElement(d.X2,{className:"catalog"},t.createElement(d.JX,{md:8,className:"diagram-image"},t.createElement("div",{className:"image-wrapper"},t.createElement("img",{src:g,alt:"Kubernetes Diagrams for anything",className:"kubernetes-image"}))),t.createElement(d.JX,{md:4,className:"diagram-detail"},t.createElement("h2",{className:"heading"},"Diagram + Config = Awesome!"),t.createElement("p",{className:"caption"},"Stop wrestling with code templates! Our visual configuration interface gives you the precision of code with the ease of a diagram."))),t.createElement(d.X2,{className:"catalog"},t.createElement(d.JX,{md:4,className:"diagram-detail"},t.createElement("h2",{className:"heading"},"Deploy  with No Code Kubernetes"),t.createElement("p",{className:"caption"},"Our visual Kubernetes interface enables anyone to deploy production-grade software with no code. Whether you're new to Kubernetes and are looking for the best way to learn or a seasoned pro, MeshMap has all the features you need to be successful in deploying and configuring your software using the industry-leading container orchestrator, all with no code.            ")),t.createElement(d.JX,{md:8,className:"diagram-image"},t.createElement("div",{className:"image-wrapper"},t.createElement("img",{src:p,alt:"Kubernetes Diagrams for anything",className:"kubernetes-image"})))),t.createElement(d.X2,{className:"catalog"},t.createElement(d.JX,{md:8,className:"diagram-image"},t.createElement("div",{className:"image-wrapper"},t.createElement("img",{src:h,alt:"Kubernetes Diagrams for anything",className:"kubernetes-image"}))),t.createElement(d.JX,{md:4,className:"diagram-detail"},t.createElement("h2",{className:"heading"},"Visual drag & drop"),t.createElement("p",{className:"caption"},"Instantly search for and find any integration that CNCF supports and drop on the canvas to create your cloud native infrastructure. MeshMap allow you to drag, drop and connect all your cloud components together simply and easily - no-code required!"),t.createElement(f.Link,{className:"link",href:"/cloud-native-management/meshmap/design"},"Learn more →"))),t.createElement(d.X2,{className:"catalog"},t.createElement(d.JX,{md:4,className:"diagram-detail"},t.createElement("h2",{className:"heading"},"Extensive Kubernetes Icon Library"),t.createElement("p",{className:"caption"},"Utilize a vast and continually expanding collection of Kubernetes icons designed for both diagramming and orchestration scenarios. Craft globally comprehensible diagrams that are not only authentic but also aligned with the latest industry standards.")),t.createElement(d.JX,{md:8,className:"diagram-image"},t.createElement("div",{className:"image-wrapper"},t.createElement("img",{src:u,alt:"Kubernetes Diagrams for anything",className:"kubernetes-image"})))),t.createElement(d.X2,{className:"catalog"},t.createElement(d.JX,{md:8,className:"diagram-image"},t.createElement("div",{className:"image-wrapper"},t.createElement("img",{src:s.Z,alt:"Designing Kubernetes Diagrams with MeshMap",className:"kubernetes-image"}))),t.createElement(d.JX,{md:4,className:"diagram-detail"},t.createElement("h2",{className:"heading"},"Kickstart with Ready-to-Use Templates"),t.createElement("p",{className:"caption"},"Jumpstart your projects with our quick-start templates designed for both Kubernetes diagramming and orchestration management. Access a range of professionally crafted templates that are fully customizable, ensuring you can tailor them to your specific needs."),t.createElement(f.Link,{className:"link",href:"/cloud-native-management/catalog"},"Learn more →"))),t.createElement(c.Z,{heading:"kubernetes"})))},b=a(35102);var y=()=>{const{isDark:e}=(0,o.I)();let n={heading:"Kubernetes Orchestration and Diagramming software",sub_heading:"Orchestrate and design Kubernetes architecture diagrams easily with predefined templates and symbols designed for professionals.",image:b.Z};return t.createElement(t.Fragment,null,t.createElement(r.Z,{data:n}),t.createElement(w,null),t.createElement(m.Z,null))};var E=()=>t.createElement(t.Fragment,null,t.createElement(y,null));const N=()=>t.createElement(i.Z,{title:"Kubernetes Architecture Diagram",description:"Create your own Kubernetes diagrams with Meshmap.",image:"/images/meshery-logo-dark-text.webp"})},81912:function(e,n,a){a.d(n,{Z:function(){return l}});var t=a(67294);var i=a(85313).default.div.withConfig({displayName:"featureHerostyle__FeatureHeroWrapper",componentId:"sc-123iu5-0"})(["\n  .heading-container {\n    z-index: 3;\n    width: 100%;\n    position: relative;\n    padding: 100px 0 70px;\n\n    .section-title {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n    }\n\n    .whiteboard-image{\n      perspective: 1000px;\n      padding: 0 1rem;\n      &>img {\n        width: 100%;\n        margin: 2rem auto;\n      }\n    }\n\n    #whiteboard-svg {\n      transition: transform 0.3s ease-out;\n      transform-origin: bottom center;\n      transform: rotateX(12deg);\n    }\n\n    .whiteboard-heading {\n      color: "," !important;\n      text-align: center;\n      font-size: 4rem;\n      font-weight: 600;\n      max-width: 965px;\n      margin: 0 auto;\n      padding: 0 1rem;\n    }\n\n    .heading-image {\n      margin: 0 auto;\n    }\n\n  }\n\n  .heading-container::before {\n    content: '';\n    width: 15rem;\n    height: 15rem;\n    border-radius: 50%;\n    background: #00B39F;\n    filter: blur(150px);\n    position: absolute;\n    left: 50%;\n    top: 40%;\n    transform: translate(-50%, -50%);\n    z-index: -3;\n  }\n\n  .whiteboard-text {\n    color: ",";\n    text-align: center;\n    font-size: 1.75rem;\n    line-height: 2.4rem;\n    max-width: 965px;\n    margin: 1rem auto;\n    padding: 0 1rem\n  }\n\n  @media (max-width: 768px) {\n    .whiteboard-heading{\n      font-size: 2.75rem !important;\n    }\n    .whiteboard-text {\n      font-size: 1.25rem;\n      line-height: 1.5rem;\n    }\n  }\n\n  @media (max-width: 500px) {\n    .section-title {\n      margin-bottom: 1rem;\n      text-align: center !important;\n    }\n\n    .whiteboard-heading{\n      font-size: 2.5rem !important;\n    }\n\n    .whiteboard-text {\n      font-size: 1rem;\n      line-height: 1.2rem;\n    }\n  }\n  \n"],(e=>e.theme.whiteToBlack),(e=>e.theme.greyA0AAAAToGrey666666)),r=a(37242),m=a(63689);var l=e=>((0,t.useEffect)((()=>{const e=document.getElementById("whiteboard-svg"),n=()=>{const n=window.scrollY/16,a=Math.min(n,12);e.style.transform="rotateX("+(12-a)+"deg)"};return window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}}),[]),t.createElement(i,null,t.createElement(r.W2,{className:"heading-container"},t.createElement("div",{className:"section-title"},t.createElement("h1",{className:"whiteboard-heading"},e.data.heading),t.createElement("p",{className:"whiteboard-text"},e.data.sub_heading),t.createElement(m.default,{primary:!0,title:"Try Now!",url:"https://play.meshery.io",external:!0})),t.createElement("div",{className:"whiteboard-image"},t.createElement("img",{id:"whiteboard-svg",src:e.data.image,alt:""})))))}}]);
//# sourceMappingURL=component---src-pages-cloud-native-management-generate-kubernetes-architecture-diagram-js-585477cad4a080a6afff.js.map