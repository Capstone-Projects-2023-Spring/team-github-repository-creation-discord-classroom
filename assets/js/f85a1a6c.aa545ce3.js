"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[270],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>f});var n=r(7294);function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e){if(null==t)return{};var r,n,s=function(t,e){if(null==t)return{};var r,n,s={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(s[r]=t[r]);return s}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(s[r]=t[r])}return s}var c=n.createContext({}),l=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},d="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,s=t.mdxType,o=t.originalType,c=t.parentName,u=a(t,["components","mdxType","originalType","parentName"]),d=l(r),m=s,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:e},u),{},{components:r})):n.createElement(f,i({ref:e},u))}));function f(t,e){var r=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var o=r.length,i=new Array(o);i[0]=m;var a={};for(var c in e)hasOwnProperty.call(e,c)&&(a[c]=e[c]);a.originalType=t,a[d]="string"==typeof t?t:s,i[1]=a;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},770:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=r(7462),s=(r(7294),r(3905));const o={sidebar_position:1},i="Unit tests",a={unversionedId:"testing/unit-testing",id:"testing/unit-testing",title:"Unit tests",description:"Unit tests will be written with pytest for Discord Classroom to test correct functionality of bot and the database.",source:"@site/docs/testing/unit-testing.md",sourceDirName:"testing",slug:"/testing/unit-testing",permalink:"/project-discord-classroom/docs/testing/unit-testing",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-discord-classroom/edit/main/documentation/docs/testing/unit-testing.md",tags:[],version:"current",lastUpdatedBy:"timlopes17",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Test Procedures",permalink:"/project-discord-classroom/docs/category/test-procedures"},next:{title:"Integration tests",permalink:"/project-discord-classroom/docs/testing/integration-testing"}},c={},l=[],u={toc:l};function d(t){let{components:e,...r}=t;return(0,s.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"unit-tests"},"Unit tests"),(0,s.kt)("p",null,"Unit tests will be written with pytest for Discord Classroom to test correct functionality of bot and the database."),(0,s.kt)("h1",{id:"test_add_member_to_table"},"test_add_member_to_table()"),(0,s.kt)("p",null,"Test: Tests whether a member was added to the database table related to their role.",(0,s.kt)("br",null),"\nReturn: True if the student's attendance is 0, otherwise false"),(0,s.kt)("h1",{id:"test_increment_attendance"},"test_increment_attendance()"),(0,s.kt)("p",null,"Test: Tests whether a student's attendance field was incremented by one.",(0,s.kt)("br",null),"\nReturn: True if the current attendance + 1 is equal to expected amount, otherwise false."),(0,s.kt)("h1",{id:"test_ordinal"},"test_ordinal()"),(0,s.kt)("p",null,"Test: Tests whether a number is converted to its ordinal string.",(0,s.kt)("br",null),"\nReturn: True if the string of the ordinal matches the expected string, otherwise false."),(0,s.kt)("h1",{id:"test_get_ordinal_number"},"test_get_ordinal_number()"),(0,s.kt)("p",null,"Test: Tests Whether the get_ordinalnumber function returns the correct string.",(0,s.kt)("br",null),"\nReturn: True if the string response matches the expected string, otherwise false."))}d.isMDXComponent=!0}}]);