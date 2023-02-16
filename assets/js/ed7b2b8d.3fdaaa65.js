"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[3961],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(h,s(s({ref:t},l),{},{components:n})):r.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var d=2;d<i;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5531:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1},s=void 0,o={unversionedId:"system-architecture/design",id:"system-architecture/design",title:"design",description:"Purpose",source:"@site/docs/system-architecture/design.md",sourceDirName:"system-architecture",slug:"/system-architecture/design",permalink:"/project-discord-classroom/docs/system-architecture/design",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-discord-classroom/edit/main/documentation/docs/system-architecture/design.md",tags:[],version:"current",lastUpdatedBy:"timlopes17",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"System Architecture",permalink:"/project-discord-classroom/docs/category/system-architecture"},next:{title:"API Specification",permalink:"/project-discord-classroom/docs/category/api-specification"}},c={},d=[{value:"Database Design",id:"database-design",level:2}],l={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Purpose")),(0,a.kt)("p",null,"The Design Document - Part I Architecture describes the software architecture and how the requirements are mapped into the design. This document will be a combination of diagrams and text that describes what the diagrams are showing."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Requirements")),(0,a.kt)("p",null,"In addition to the general requirements the Design Document - Part I Architecture will contain:"),(0,a.kt)("p",null,"A description the different components and their interfaces. For example: client, server, database."),(0,a.kt)("p",null,"For each component provide class diagrams showing the classes to be developed (or used) and their relationship."),(0,a.kt)("p",null,"Sequence diagrams showing the data flow for ",(0,a.kt)("em",{parentName:"p"},"all")," use cases.\xa0One sequence diagram corresponds to one use case and different use cases should have different corresponding sequence diagrams."),(0,a.kt)("p",null,"Describe algorithms employed in your project, e.g. neural network paradigm, training and training data set, etc."),(0,a.kt)("p",null,"If there is a database:"),(0,a.kt)("p",null,"Entity-relation diagram."),(0,a.kt)("p",null,"Table design."),(0,a.kt)("p",null,"A check list for architecture design is attached here ",(0,a.kt)("a",{parentName:"p",href:"https://templeu.instructure.com/courses/106563/files/16928870/download?wrap=1",title:"architecture_design_checklist.pdf"},"architecture","_","design","_","checklist.pdf"),"\xa0 and should be used as a guidance."),(0,a.kt)("h2",{id:"database-design"},"Database Design"),(0,a.kt)("mermaid",{value:"---\ntitle: Database Design\n---\nerDiagram\n    CLASSROOM {\n        int id\n        string name\n        int totalAttendance\n        int totalGrade\n    }\n    EDUCATOR {\n        int id\n        string name\n        int classroom_id\n    }\n    STUDENT {\n        int id\n        string name\n        int classroom_id\n        float grade\n        int attendance\n    }\n    ASSIGNMENT {\n        int id\n        int classroom_id\n        string name\n        int maxScore\n        dateFormat startDate\n        dateFormat dueDate\n    }\n    QUIZ {\n        int id\n        int classroom_id\n        string name\n        int maxScore\n        dateFormat startDate\n        dateFormat dueDate\n        int timeLimit\n    }\n    QUESTION {\n        int id\n        int quiz_id\n        string prompt\n        string answer\n        string wrong1\n        string wrong2\n        string wrong3\n    }\n    DISCUSSION {\n       int id\n       int name\n       int maxScore\n       dateFormat startDate\n       dateFormat dueDate \n    }\n    GRADED-ASSIGNMENT {\n        int id\n        int assignment_id\n        int student_id\n        int maxScore\n        int score\n    }\n    GRADED-QUIZ {\n        int id\n        int quiz_id\n        int student_id\n        int maxScore\n        int score\n    }\n    GRADED-DISCUSSION {\n        int id\n        int discussion_id\n        int student_id\n        int maxScore\n        int score\n    }\n    CLASSROOM }|--|{ EDUCATOR : contains\n    CLASSROOM }|--|{ STUDENT : contains\n    CLASSROOM ||--o{ ASSIGNMENT : has\n    CLASSROOM ||--o{ QUIZ : has\n    CLASSROOM ||--o{ DISCUSSION : has\n    QUIZ ||--|{ QUESTION : contains\n    STUDENT }|--o{ GRADED-ASSIGNMENT : has\n    STUDENT }|--o{ GRADED-QUIZ : has\n    STUDENT }|--o{ GRADED-DISCUSSION : has   "}),(0,a.kt)("p",null,"Each time the bot is added to a Discord server a new row is added to the CLASSROOM table. This table holds discord server name and the total attendance and grade used to calculate student's grades and attendance scores. Each CLASSROOM contains one or more EDUCATORS and one or more STUDENTS. The STUDENT table holds the student's username, the classroom they belong to, their grade, and their attendance score. Their total grade will equal their grade divided by the CLASSROOM totalGrade. Next we have the ASSIGNMENT, QUIZ, and DISCUSSION tables. The ASSIGNMENT table keeps track of the assignments the EDUCATOR creates which includes the name of the assignment, when to make it available, and when its due. The QUIZ table keeps track of EDUCATOR created quizzes which holds the max score of the quiz, the start/due date, and an optional time limit for the quiz. Each QUIZ is made up of QUESTIONS which contain a prompt, a correct answer, and optional wrong answers depending on the type of question. (If no wrong answers then its a open-ended question or fill-in-the-blank, if one wrong answer could be a True/False, and if all wrong answers are given then its multiple choice). The DISCUSSION table is used to keep track of the Discussions within the Discord server. These will only include max scores and start/due dates. Finally we have the GRADED tables which are used to hold the scores students got on ASSSIGNMENTS, QUIZZES, and DISCUSSIONS."))}u.isMDXComponent=!0}}]);