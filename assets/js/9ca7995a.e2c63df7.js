"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[1996],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=s,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,o(o({ref:t},l),{},{components:n})):r.createElement(h,o({ref:t},l))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:s,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2680:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(7462),s=(n(7294),n(3905));const a={sidebar_position:2},o="Integration tests",c={unversionedId:"testing/integration-testing",id:"testing/integration-testing",title:"Integration tests",description:"Use Case #1 &harr; test_attendance_recording:",source:"@site/docs/testing/integration-testing.md",sourceDirName:"testing",slug:"/testing/integration-testing",permalink:"/project-discord-classroom/docs/testing/integration-testing",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-discord-classroom/edit/main/documentation/docs/testing/integration-testing.md",tags:[],version:"current",lastUpdatedBy:"KiranNixon",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Unit tests",permalink:"/project-discord-classroom/docs/testing/unit-testing"},next:{title:"Acceptance test",permalink:"/project-discord-classroom/docs/testing/acceptence-testing"}},i={},p=[],l={toc:p};function d(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"integration-tests"},"Integration tests"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"}," Use Case #1 ","\u2194"," test_attendance_recording: ")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Test: Tests whether the bot can successfully record attendance for a teacher in a Discord channel, \nthen send the attendance metrics to a database, along with posting a summary of the attendance to the teacher\n\nReturns: Returns True if all the steps were met whereby teacher recieves a summary of the attendance, otherwise False, if encountered any error\n\nUses:\nDiscord bot component, database component, and discord component\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"}," Use Case #2 ","\u2194"," test_check_grades: ")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Test: Tests whether the bot can successfully pull the user's grade from the database and send it as a private message to the user upon request\n\nReturns: Returns True if a user is able to recieve their correct grade, otherwise False\n\nUses:\nDiscord bot component, API component, database component, and discord component\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"}," Use Case #3 ","\u2194"," test_practice_quiz: ")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Test: Tests whether the bot can successfully list the available practice quizzes, send quiz questions to the user, check the answers, and return the user's results\n\nReturns: Returns True if user is able to retrieve, post, and recieve a grade for the practice quiz, otherwise False, if encountered any error\n\nUses:\nDiscord bot component, API component, database component, and discord component\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"}," Use Case #4 ","\u2194"," test_ask_questions: ")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Test: Tests whether the bot can create a private chat between a student and a teacher, and allow the student to ask a question and the teacher to respond\n\nReturns: Returns True if the private chat is successfully created, the student is able to ask a question, and the teacher is able to respond, otherwise False\n\nUses:\nDiscord bot component, and discord component\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"}," Use Case #5 ","\u2194"," test_create_poll: ")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Test: Tests whether the teacher is able to create a poll for their class\n\nReturns: Returns True if the poll creation is successfull, otherwise False\n\nUses:\nDiscord bot component, database component, and discord component\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"}," Use Case #6 ","\u2194"," test_taking_attendance: ")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Test: Tests whether the teacher can successfully initiate attendance tracking whereby students input will be saved to the database afterward the discord bot will send teacher the summary of the absentees. \n\nReturns: Returns True if the students attendence capture was successfull, otherwise False\n\nUses:\nDiscord bot component, API component, database component, and discord component\n")))}d.isMDXComponent=!0}}]);