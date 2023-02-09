"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[8794],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),m=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=m(e.components);return n.createElement(c.Provider,{value:r},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=m(t),u=o,f=l["".concat(c,".").concat(u)]||l[u]||d[u]||s;return t?n.createElement(f,a(a({ref:r},p),{},{components:t})):n.createElement(f,a({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=u;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[l]="string"==typeof e?e:o,a[1]=i;for(var m=2;m<s;m++)a[m]=t[m];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9380:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var n=t(7462),o=(t(7294),t(3905));const s={sidebar_position:2},a="System Block Diagram",i={unversionedId:"requirements/system-block-diagram",id:"requirements/system-block-diagram",title:"System Block Diagram",description:"",source:"@site/docs/requirements/system-block-diagram.md",sourceDirName:"requirements",slug:"/requirements/system-block-diagram",permalink:"/project-discord-classroom/docs/requirements/system-block-diagram",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-discord-classroom/edit/main/documentation/docs/requirements/system-block-diagram.md",tags:[],version:"current",lastUpdatedBy:"KiranNixon",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"System Overview",permalink:"/project-discord-classroom/docs/requirements/system-overview"},next:{title:"General Requirements",permalink:"/project-discord-classroom/docs/requirements/general-requirements"}},c={},m=[],p={toc:m};function l(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"system-block-diagram"},"System Block Diagram"),(0,o.kt)("mermaid",{value:"---\ntitle: System Block Diagram\n---\nflowchart TB\n    A[User: Educator]\n    B[User: Student]\n    C[User: Assistant]\n    D[<img src='https://www.svgrepo.com/show/353655/discord-icon.svg'>Discord]\n    E[<img src='https://cdn.discordapp.com/attachments/494945996892012544/1071574051623030834/Discord_Classroom.jpg'>Classroom Bot]\n    F[<img src='https://s3-eu-west-1.amazonaws.com/tpd/logos/5dc1fb0c303176000104b2d4/0x0.png'>SparkedHost]\n    G[<img src='https://static-00.iconduck.com/assets.00/office-database-icon-491x512-nll0enk8.png'>SH Database]\n    H[<img src='https://pbs.twimg.com/profile_images/1414990564408262661/r6YemvF9_400x400.jpg'>GitHub]\n    A<---\x3eD\n    B<---\x3e|User enters commands through Discord UI and receive response|D\n    C<---\x3eD\n    D<--\x3e|Classroom Bot receive commands through Discord and responds|E\n    E<--\x3e|Discord.py library used to host bot on SparkedHost|F\n    F<--\x3e|Server POST/GET data from its DB|G\n    H-- SparkedHost pulls code from GitHub --\x3eF"}))}l.isMDXComponent=!0}}]);