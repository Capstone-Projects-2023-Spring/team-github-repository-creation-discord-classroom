"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[686],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(r),m=a,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5061:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1},i=void 0,p={unversionedId:"intro",id:"intro",title:"intro",description:"Getting Started",source:"@site/tutorial/intro.md",sourceDirName:".",slug:"/intro",permalink:"/project-discord-classroom/tutorial/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar"},l={},s=[{value:"Getting Started",id:"getting-started",level:2},{value:"What you&#39;ll need",id:"what-youll-need",level:3},{value:"Setting up the enviornment",id:"setting-up-the-enviornment",level:2},{value:"Start up the bot",id:"start-up-the-bot",level:2}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"Get started by cloning the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/Capstone-Projects-2023-Spring/project-discord-classroom"},"repository")),"."),(0,a.kt)("h3",{id:"what-youll-need"},"What you'll need"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.python.org/downloads/"},"Python")," version 3.8 or above")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://discord.com/developers/applications"},"Discord Bot Token")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"For a guide to create a discord application ",(0,a.kt)("a",{parentName:"li",href:"https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot"},"click here")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://supabase.com/"},"Supabase Token")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"For a guide to create a supabase project ",(0,a.kt)("a",{parentName:"li",href:"https://egghead.io/lessons/supabase-create-a-new-supabase-project"},"click here")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://openai.com/"},"OpenAI API Token")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"For a guide to generate an OpenAI Token ",(0,a.kt)("a",{parentName:"li",href:"https://www.howtogeek.com/885918/how-to-get-an-openai-api-key/"},"click here"))))),(0,a.kt)("h2",{id:"setting-up-the-enviornment"},"Setting up the enviornment"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Navigate to the Python folder")),(0,a.kt)("p",null,"Install requirements with\n",(0,a.kt)("inlineCode",{parentName:"p"},"pip install -r requirements.txt")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Create a file instead of the Python folder called config.json")),(0,a.kt)("p",null,"The config.json should contain five values: DiscordToken, Prefix, SupaUrl, SupaKey, GPTKey"),(0,a.kt)("p",null,'For example: {"DiscordToken": "xxx", "Prefix": "x", "SupaUrl": "xxx", "SupaKey": "xxx", "GPTKey": "xxx"}'),(0,a.kt)("p",null,"DiscordToken is the Discord Bot Token, Prefix is any character use for bot commands, SupaUrl is the Supabase project URL, SupaKey is the Supabase project key, and GPTKey is the OpenAI API token."),(0,a.kt)("h2",{id:"start-up-the-bot"},"Start up the bot"),(0,a.kt)("p",null,"In the Python directory run:\n",(0,a.kt)("inlineCode",{parentName:"p"},"python3 main.py")),(0,a.kt)("p",null,"Congradulations! Your Classroom Bot is now running!"))}c.isMDXComponent=!0}}]);