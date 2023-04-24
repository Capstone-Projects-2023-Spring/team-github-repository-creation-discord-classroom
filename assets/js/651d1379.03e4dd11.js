"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[7607],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4757:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const s={sidebar_position:5},o="Use-case descriptions",i={unversionedId:"requirements/use-case-descriptions",id:"requirements/use-case-descriptions",title:"Use-case descriptions",description:"Use Case 1",source:"@site/docs/requirements/use-case-descriptions.md",sourceDirName:"requirements",slug:"/requirements/use-case-descriptions",permalink:"/project-discord-classroom/docs/requirements/use-case-descriptions",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-discord-classroom/edit/main/documentation/docs/requirements/use-case-descriptions.md",tags:[],version:"current",lastUpdatedBy:"Ben Baldino",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Features and Requirements",permalink:"/project-discord-classroom/docs/requirements/features-and-requirements"},next:{title:"Software Development Plan",permalink:"/project-discord-classroom/docs/category/software-development-plan"}},l={},c=[],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-case-descriptions"},"Use-case descriptions"),(0,r.kt)("p",null,"Use Case 1",(0,r.kt)("br",null),"\nAs a user, I want to be able to create a poll so I can get feedback from my students. This will help me understand the students better, allow me address the issues accordingly. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The user types the command ",(0,r.kt)("inlineCode",{parentName:"li"},"/poll")," in a text channel."),(0,r.kt)("li",{parentName:"ol"},"The user can add arguments ",(0,r.kt)("inlineCode",{parentName:"li"},"[topic]")," and then add the options ",(0,r.kt)("inlineCode",{parentName:"li"},"[option1]``[option2]"),"...",(0,r.kt)("inlineCode",{parentName:"li"},"[option8]")),(0,r.kt)("li",{parentName:"ol"},"Students can now see that that there is a new poll and are prompted to select their answers. "),(0,r.kt)("li",{parentName:"ol"},"The poll updates as people select the options",(0,r.kt)("br",null))),(0,r.kt)("p",null,"Use Case 2",(0,r.kt)("br",null),"\nAs a user I want to check my grades or attendance in the class. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the bot commands channel type the command ",(0,r.kt)("inlineCode",{parentName:"li"},"/grades or /attendance")),(0,r.kt)("li",{parentName:"ol"},"The bot sends a SQL request to the class database and pulls the user\u2019s grade/attendance data"),(0,r.kt)("li",{parentName:"ol"},"The bot sends current grade/attendance values in to the user as a private message",(0,r.kt)("br",null))),(0,r.kt)("p",null,"Use Case 3",(0,r.kt)("br",null),"\nAs a user, I want to create a new assignment, so everyone can access it."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the private channel type the command ",(0,r.kt)("inlineCode",{parentName:"li"},"/create")),(0,r.kt)("li",{parentName:"ol"},"The bot responds with a prompt to enter the title, points, details, start date, and due date"),(0,r.kt)("li",{parentName:"ol"},"A new channel is created for the assigment."),(0,r.kt)("li",{parentName:"ol"},"The bot notifies everyone that a new assignment has been created",(0,r.kt)("br",null))),(0,r.kt)("p",null,"Use Case 4",(0,r.kt)("br",null),"\nAs a user, I want to practice for my upcoming test, so that I can make sure that I am understanding the current concepts of class."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The user types ",(0,r.kt)("inlineCode",{parentName:"li"},"/tutor flashcards")," in the quiz section"),(0,r.kt)("li",{parentName:"ol"},"The bot processes the request with AI language model "),(0,r.kt)("li",{parentName:"ol"},"Next the bot sends the generated questions to the user via DM"),(0,r.kt)("li",{parentName:"ol"},"The user is presented with a list of questions, with the answers hidden. They are able to reveal the answers by clicking on it."),(0,r.kt)("li",{parentName:"ol"},"Additionally, they can request more practice with a keyword ",(0,r.kt)("inlineCode",{parentName:"li"},"More")),(0,r.kt)("li",{parentName:"ol"},"User has the understanding of where they stand on the current topic",(0,r.kt)("br",null))),(0,r.kt)("p",null,"Use Case 5",(0,r.kt)("br",null),"\nAs a user, I want to track the attendance of students in my class."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The user types the ",(0,r.kt)("inlineCode",{parentName:"li"},"/attendance")," command in the bot commands channel."),(0,r.kt)("li",{parentName:"ol"},"The bot send a message to all students and awaits their reaction for a specified period of time."),(0,r.kt)("li",{parentName:"ol"},"The bot writes the attendance data to the SQL database: marking a student as present if it revived a response, or absent if it did not."),(0,r.kt)("li",{parentName:"ol"},"The bot notifies the user of any absences after the attendance taking period closes.",(0,r.kt)("br",null))),(0,r.kt)("p",null,"Use Case 6",(0,r.kt)("br",null),"\nAs a user, I want open a private ticket/question that can be answered by the TA/Teacher."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The user types the ",(0,r.kt)("inlineCode",{parentName:"li"},"/private")," command in the questions channel."),(0,r.kt)("li",{parentName:"ol"},"The bot opens a private chat with the Student, TAs, and the Teacher and provides them with the questions."),(0,r.kt)("li",{parentName:"ol"},"The student can now ask any additional questions privately in the newly opened chat"),(0,r.kt)("li",{parentName:"ol"},"When the teacher/TA replies they can answer publicly and announce to the rest of the class, or privately in the chat created.",(0,r.kt)("br",null))))}d.isMDXComponent=!0}}]);