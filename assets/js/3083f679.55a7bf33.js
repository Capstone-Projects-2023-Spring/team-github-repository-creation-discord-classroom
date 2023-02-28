"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[6766],{3905:(e,t,l)=>{l.d(t,{Zo:()=>u,kt:()=>k});var s=l(7294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,s)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function p(e,t){if(null==e)return{};var l,s,n=function(e,t){if(null==e)return{};var l,s,n={},a=Object.keys(e);for(s=0;s<a.length;s++)l=a[s],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)l=a[s],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var o=s.createContext({}),i=function(e){var t=s.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):r(r({},t),e)),l},u=function(e){var t=i(e.components);return s.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var l=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=i(l),m=n,k=c["".concat(o,".").concat(m)]||c[m]||d[m]||a;return l?s.createElement(k,r(r({ref:t},u),{},{components:l})):s.createElement(k,r({ref:t},u))}));function k(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=l.length,r=new Array(a);r[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:n,r[1]=p;for(var i=2;i<a;i++)r[i]=l[i];return s.createElement.apply(null,r)}return s.createElement.apply(null,l)}m.displayName="MDXCreateElement"},6758:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>i});var s=l(7462),n=(l(7294),l(3905));const a={title:"API - Classroom Bot",description:"API Specification from fastapi",sidebar_position:1},r="ClassroomBotAPI (0.0.1) : http://35.237.162.33:2556/redoc",p={unversionedId:"api-specification/classroom-api",id:"api-specification/classroom-api",title:"API - Classroom Bot",description:"API Specification from fastapi",source:"@site/docs/api-specification/classroom-api.md",sourceDirName:"api-specification",slug:"/api-specification/classroom-api",permalink:"/project-discord-classroom/docs/api-specification/classroom-api",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-discord-classroom/edit/main/documentation/docs/api-specification/classroom-api.md",tags:[],version:"current",lastUpdatedBy:"Ben Baldino",sidebarPosition:1,frontMatter:{title:"API - Classroom Bot",description:"API Specification from fastapi",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"API Specification",permalink:"/project-discord-classroom/docs/category/api-specification"},next:{title:"API 1 - Swagger Petstore",permalink:"/project-discord-classroom/docs/api-specification/openapi-spec"}},o={},i=[{value:"Get Classrooms",id:"get-classrooms",level:2},{value:"Responses",id:"responses",level:3},{value:"Response samples",id:"response-samples",level:3},{value:"Get Classroom Id",id:"get-classroom-id",level:2},{value:"query Parameters",id:"query-parameters",level:5},{value:"Responses",id:"responses-1",level:3},{value:"Response samples",id:"response-samples-1",level:3},{value:"Get Educators",id:"get-educators",level:2},{value:"query Parameters",id:"query-parameters-1",level:5},{value:"Responses",id:"responses-2",level:3},{value:"Response samples",id:"response-samples-2",level:3},{value:"Get Students",id:"get-students",level:2},{value:"query Parameters",id:"query-parameters-2",level:5},{value:"Responses",id:"responses-3",level:3},{value:"Response samples",id:"response-samples-3",level:3},{value:"Get Sections",id:"get-sections",level:2},{value:"query Parameters",id:"query-parameters-3",level:5},{value:"Responses",id:"responses-4",level:3},{value:"Response samples",id:"response-samples-4",level:3},{value:"Get Grades",id:"get-grades",level:2},{value:"query Parameters",id:"query-parameters-4",level:5},{value:"Responses",id:"responses-5",level:3},{value:"Response samples",id:"response-samples-5",level:3}],u={toc:i};function c(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,s.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"classroombotapi-001--http35237162332556redoc"},"ClassroomBotAPI (0.0.1) : ",(0,n.kt)("a",{parentName:"h1",href:"http://35.237.162.33:2556/redoc"},"http://35.237.162.33:2556/redoc")),(0,n.kt)("p",null,"Download OpenAPI specification:",(0,n.kt)("a",{parentName:"p",href:"http://127.0.0.1:8000/openapi.json"},"Download")),(0,n.kt)("h2",{id:"get-classrooms"},(0,n.kt)("a",{parentName:"h2",href:"#operation/get_classrooms_classrooms_get"}),"Get Classrooms"),(0,n.kt)("h3",{id:"responses"},"Responses"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"200")),(0,n.kt)("p",null,"Successful Response"),(0,n.kt)("p",null,"get/classrooms"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://127.0.0.1:8000/classrooms"},"http://127.0.0.1:8000/classrooms")),(0,n.kt)("h3",{id:"response-samples"},"Response samples"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"200")),(0,n.kt)("p",null,"Content type"),(0,n.kt)("p",null,"application/json"),(0,n.kt)("p",null,"Copy"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'{  *   "id": 0,      *   "serverId": "string",      *   "serverName": "string"       }')),(0,n.kt)("h2",{id:"get-classroom-id"},(0,n.kt)("a",{parentName:"h2",href:"#operation/get_classroom_id_classroomId_get"}),"Get Classroom Id"),(0,n.kt)("h5",{id:"query-parameters"},"query Parameters"),(0,n.kt)("p",null,"serverId"),(0,n.kt)("p",null,"integer (Serverid)"),(0,n.kt)("p",null,"Default: 0"),(0,n.kt)("h3",{id:"responses-1"},"Responses"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"200")),(0,n.kt)("p",null,"Successful Response"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"404")),(0,n.kt)("p",null,"Not Found"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"422")),(0,n.kt)("p",null,"Validation Error"),(0,n.kt)("p",null,"get/classroomId"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://127.0.0.1:8000/classroomId"},"http://127.0.0.1:8000/classroomId")),(0,n.kt)("h3",{id:"response-samples-1"},"Response samples"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"200"),(0,n.kt)("li",{parentName:"ul"},"404"),(0,n.kt)("li",{parentName:"ul"},"422")),(0,n.kt)("p",null,"Content type"),(0,n.kt)("p",null,"application/json"),(0,n.kt)("p",null,"Copy"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'{  *   "id": 0       }')),(0,n.kt)("h2",{id:"get-educators"},(0,n.kt)("a",{parentName:"h2",href:"#operation/get_educators_educators__get"}),"Get Educators"),(0,n.kt)("h5",{id:"query-parameters-1"},"query Parameters"),(0,n.kt)("p",null,"classroomId"),(0,n.kt)("p",null,"integer (Classroomid)"),(0,n.kt)("p",null,"Default: 0"),(0,n.kt)("h3",{id:"responses-2"},"Responses"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"200")),(0,n.kt)("p",null,"Successful Response"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"404")),(0,n.kt)("p",null,"Not Found"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"422")),(0,n.kt)("p",null,"Validation Error"),(0,n.kt)("p",null,"get/educators/"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://127.0.0.1:8000/educators/"},"http://127.0.0.1:8000/educators/")),(0,n.kt)("h3",{id:"response-samples-2"},"Response samples"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"200"),(0,n.kt)("li",{parentName:"ul"},"404"),(0,n.kt)("li",{parentName:"ul"},"422")),(0,n.kt)("p",null,"Content type"),(0,n.kt)("p",null,"application/json"),(0,n.kt)("p",null,"Copy"),(0,n.kt)("p",null,"Expand all Collapse all"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'[  *   {          *   "id": 0,              *   "name": "string",              *   "sectionId": 0                   }       ]')),(0,n.kt)("h2",{id:"get-students"},(0,n.kt)("a",{parentName:"h2",href:"#operation/get_students_students__get"}),"Get Students"),(0,n.kt)("h5",{id:"query-parameters-2"},"query Parameters"),(0,n.kt)("p",null,"classroomId"),(0,n.kt)("p",null,"integer (Classroomid)"),(0,n.kt)("p",null,"Default: 0"),(0,n.kt)("h3",{id:"responses-3"},"Responses"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"200")),(0,n.kt)("p",null,"Successful Response"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"404")),(0,n.kt)("p",null,"Not Found"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"422")),(0,n.kt)("p",null,"Validation Error"),(0,n.kt)("p",null,"get/students/"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://127.0.0.1:8000/students/"},"http://127.0.0.1:8000/students/")),(0,n.kt)("h3",{id:"response-samples-3"},"Response samples"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"200"),(0,n.kt)("li",{parentName:"ul"},"404"),(0,n.kt)("li",{parentName:"ul"},"422")),(0,n.kt)("p",null,"Content type"),(0,n.kt)("p",null,"application/json"),(0,n.kt)("p",null,"Copy"),(0,n.kt)("p",null,"Expand all Collapse all"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'[  *   {          *   "id": 0,              *   "sectionId": 0,              *   "name": "string",              *   "attendance": 0                   }       ]')),(0,n.kt)("h2",{id:"get-sections"},(0,n.kt)("a",{parentName:"h2",href:"#operation/get_sections_sections__get"}),"Get Sections"),(0,n.kt)("h5",{id:"query-parameters-3"},"query Parameters"),(0,n.kt)("p",null,"classroomId"),(0,n.kt)("p",null,"integer (Classroomid)"),(0,n.kt)("p",null,"Default: 0"),(0,n.kt)("h3",{id:"responses-4"},"Responses"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"200")),(0,n.kt)("p",null,"Successful Response"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"404")),(0,n.kt)("p",null,"Not Found"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"422")),(0,n.kt)("p",null,"Validation Error"),(0,n.kt)("p",null,"get/sections/"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://127.0.0.1:8000/sections/"},"http://127.0.0.1:8000/sections/")),(0,n.kt)("h3",{id:"response-samples-4"},"Response samples"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"200"),(0,n.kt)("li",{parentName:"ul"},"404"),(0,n.kt)("li",{parentName:"ul"},"422")),(0,n.kt)("p",null,"Content type"),(0,n.kt)("p",null,"application/json"),(0,n.kt)("p",null,"Copy"),(0,n.kt)("p",null,"Expand all Collapse all"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'[  *   {          *   "id": 0,              *   "name": "string",              *   "classroomId": 0,              *   "totalAttendance": 0,              *   "totalGrade": 0                   }       ]')),(0,n.kt)("h2",{id:"get-grades"},(0,n.kt)("a",{parentName:"h2",href:"#operation/get_grades_grades__get"}),"Get Grades"),(0,n.kt)("h5",{id:"query-parameters-4"},"query Parameters"),(0,n.kt)("p",null,"studentId"),(0,n.kt)("p",null,"integer (Studentid)"),(0,n.kt)("p",null,"Default: 0"),(0,n.kt)("h3",{id:"responses-5"},"Responses"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"200")),(0,n.kt)("p",null,"Successful Response"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"404")),(0,n.kt)("p",null,"Not Found"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"422")),(0,n.kt)("p",null,"Validation Error"),(0,n.kt)("p",null,"get/grades/"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://127.0.0.1:8000/grades/"},"http://127.0.0.1:8000/grades/")),(0,n.kt)("h3",{id:"response-samples-5"},"Response samples"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"200"),(0,n.kt)("li",{parentName:"ul"},"404"),(0,n.kt)("li",{parentName:"ul"},"422")),(0,n.kt)("p",null,"Content type"),(0,n.kt)("p",null,"application/json"),(0,n.kt)("p",null,"Copy"),(0,n.kt)("p",null,"Expand all Collapse all"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'[  *   {          *   "type": "string",              *   "name": "string",              *   "score": 0,              *   "maxScore": 0                   }       ]')))}c.isMDXComponent=!0}}]);