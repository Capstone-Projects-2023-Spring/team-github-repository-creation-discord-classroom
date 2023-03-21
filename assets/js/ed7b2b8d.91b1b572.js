"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[3961],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>p});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var d=n.createContext({}),c=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,d=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(a),h=s,p=m["".concat(d,".").concat(h)]||m[h]||u[h]||r;return a?n.createElement(p,o(o({ref:t},l),{},{components:a})):n.createElement(p,o({ref:t},l))}));function p(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,o=new Array(r);o[0]=h;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[m]="string"==typeof e?e:s,o[1]=i;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5531:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=a(7462),s=(a(7294),a(3905));const r={sidebar_position:1},o="Architecture",i={unversionedId:"system-architecture/design",id:"system-architecture/design",title:"Architecture",description:"Class Diagram",source:"@site/docs/system-architecture/design.md",sourceDirName:"system-architecture",slug:"/system-architecture/design",permalink:"/project-discord-classroom/docs/system-architecture/design",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-discord-classroom/edit/main/documentation/docs/system-architecture/design.md",tags:[],version:"current",lastUpdatedBy:"KiranNixon",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"System Architecture",permalink:"/project-discord-classroom/docs/category/system-architecture"},next:{title:"API Specification",permalink:"/project-discord-classroom/docs/category/api-specification"}},d={},c=[{value:"Class Diagram",id:"class-diagram",level:2},{value:"Database Design",id:"database-design",level:2},{value:"Sequence Diagrams",id:"sequence-diagrams",level:2},{value:"Use Case #1: Teacher !attendance command",id:"use-case-1-teacher-attendance-command",level:3},{value:"Use Case #2: Student !grades command",id:"use-case-2-student-grades-command",level:3},{value:"Use Case #3: Student takes practice quiz",id:"use-case-3-student-takes-practice-quiz",level:3},{value:"Use Case #4: Student wants to ask the teacher a question",id:"use-case-4-student-wants-to-ask-the-teacher-a-question",level:3},{value:"Use Case #5: Educator creates poll with !poll",id:"use-case-5-educator-creates-poll-with-poll",level:3},{value:"Use Case #6: Educator takes attendance with !attendance command",id:"use-case-6-educator-takes-attendance-with-attendance-command",level:3}],l={toc:c};function m(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"architecture"},"Architecture"),(0,s.kt)("h2",{id:"class-diagram"},"Class Diagram"),(0,s.kt)("mermaid",{value:"---\ntitle: Class Diagram\n---\nclassDiagram\n    bot <-- main\n    FastAPI <-- bot\n    supabase <-- bot\n    discord <-- bot\n    class main{\n        +run_bot()\n    }\n    class bot{\n        -configData: dictionary\n        -DISCORD_TOKEN: string\n        -PREFIX: char\n        -SB_URL: string\n        -SB_KEY: string\n        -supabase: Client\n        -bot: Bot\n        -app: App\n        +run_discord_bot()\n        -on_ready()\n        -on_guild_join(guide: string)\n        -syllabus(ctx: context)\n        -poll(ctx: context, arg1: string, arg2: string)\n    }\n    class FastAPI{\n        +FastAPI(): App\n    }\n    class supabase{\n        +create_client(): Client\n    }\n    class discord{\n        +commands.Bot(): Bot\n    }"}),(0,s.kt)("p",null,'The class diagram is made up of two python files, main.py and bot.py. Main\'s only purpose is to run bot.py. bot.py uses three seperate, non-native libraries: supabase, discord, and fastapi. The supabase library is used to connect with the database that is on supabase. It is connected through a URL and KEY pair and creates a Client object when connected. The discord library is used to connect with the Discord Bot through a Discord Token. Also, when creating the bot it needs to know the PREFIX for the commands which is "!" in our case. Finally, FastAPI is used to simplify our API calls to supabase. First we create an App object then give that object methods that are used for the API. '),(0,s.kt)("h2",{id:"database-design"},"Database Design"),(0,s.kt)("mermaid",{value:"---\ntitle: Database Design\n---\nerDiagram\n    CLASSROOM {\n        int id PK\n        string serverId\n        string name\n        int attendance\n    }\n    CLASSROOM_USER {\n        int id PK\n        int classroomId FK\n        int userId FK\n        string role\n    }\n    USER {\n        int id PK\n        string name\n        string discordId\n        int attendance\n    }\n    CLASSROOM_TASK {\n        int id PK\n        int classroomId FK\n        string taskType\n        int taskTypeId FK\n    }\n    ASSIGNMENT {\n        int id PK\n        string name\n        string channelId\n        int points\n        dateFormat startDate\n        dateFormat dueDate\n    }\n    QUIZ {\n        int id PK\n        string name\n        string channelId\n        int points\n        dateFormat startDate\n        dateFormat dueDate\n        int timeLimit\n        string questionsUrl\n    }\n    DISCUSSION {\n       int id PK\n       int name\n       string channelId\n       int points\n       dateFormat startDate\n       dateFormat dueDate \n    }\n    GRADE {\n        int id PK\n        int taskId FK\n        int studentId FK\n        int graderId FK\n        int score\n\n    }\n    CLASSROOM ||--|{ CLASSROOM_USER : has\n    CLASSROOM ||--|{ CLASSROOM_TASK : contains\n    CLASSROOM_TASK || -- || GRADE : contains\n    CLASSROOM_USER }|--|| USER : has\n    CLASSROOM_TASK }|--|| ASSIGNMENT : is\n    CLASSROOM_TASK }|--|| QUIZ : is\n    CLASSROOM_TASK }|--|| DISCUSSION : is\n    USER ||--o{ GRADE : has"}),(0,s.kt)("p",null,"Each time the bot is added to a Discord server a new row is added to the CLASSROOM table. This table holds discord server name and the total attendance and grade used to calculate student's grades and attendance scores. Each CLASSROOM contains one or more EDUCATORS and one or more STUDENTS. The STUDENT table holds the student's username, the classroom they belong to, their grade, and their attendance score. Their total grade will equal their grade divided by the CLASSROOM totalGrade. Next we have the ASSIGNMENT, QUIZ, and DISCUSSION tables. The ASSIGNMENT table keeps track of the assignments the EDUCATOR creates which includes the name of the assignment, when to make it available, and when its due. The QUIZ table keeps track of EDUCATOR created quizzes which holds the max score of the quiz, the start/due date, and an optional time limit for the quiz. Each QUIZ is made up of QUESTIONS which contain a prompt, a correct answer, and optional wrong answers depending on the type of question. (If no wrong answers then its a open-ended question or fill-in-the-blank, if one wrong answer could be a True/False, and if all wrong answers are given then its multiple choice). The DISCUSSION table is used to keep track of the Discussions within the Discord server. These will only include max scores and start/due dates. Finally the GRADES table holds all of the grades for the students."),(0,s.kt)("h2",{id:"sequence-diagrams"},"Sequence Diagrams"),(0,s.kt)("details",null,(0,s.kt)("summary",null,(0,s.kt)("h3",{id:"use-case-1-teacher-attendance-command"},"Use Case #1: Teacher !attendance command"),(0,s.kt)("mermaid",{value:'sequenceDiagram\n    actor Teacher\n    actor Student1\n    actor Student2\n    participant Discord\n    participant ClassroomBot\n    participant Supabase DB\n    Teacher->>Discord: User sends "!attendance" command\n    activate Teacher\n    activate Discord\n    activate Student1\n    activate Student2\n    activate ClassroomBot\n\n    Discord->>ClassroomBot: ClassroomBot reads command from Discord\n    ClassroomBot->>Discord: message to react to for attendance\n    Student1->>Discord: reacts to message\n    Student2->>Discord: reacts to message\n    Teacher->>Discord: command to close attendance\n    Discord->>ClassroomBot: Attendance metrics\n    ClassroomBot ->> Supabase DB: Record attendance for current message/session\n    ClassroomBot ->> Discord: Session attendance summary\n    Discord->> Teacher: Summary of the sessions attendance, + list of missing names\n    deactivate Discord\n    deactivate Teacher\n    deactivate ClassroomBot'})),(0,s.kt)("div",null,(0,s.kt)("div",null,"As a teacher user I want to record attendance of a lecture."),(0,s.kt)("br",null),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Teacher types ",(0,s.kt)("inlineCode",{parentName:"li"},"!attendance")," command"),(0,s.kt)("li",{parentName:"ol"},"The Bot reads the command and sends a attendance message to the discord"),(0,s.kt)("li",{parentName:"ol"},"The students are able to react to the message"),(0,s.kt)("li",{parentName:"ol"},"The teacher sends a command to close the attendance "),(0,s.kt)("li",{parentName:"ol"},"The bot checks the attendance metrics (by checking the reactions)"),(0,s.kt)("li",{parentName:"ol"},"The bot sends the metrics to the Supabase Database"),(0,s.kt)("li",{parentName:"ol"},"The bot sends the attendance summary to the teacher, with a list of missing students")))),(0,s.kt)("details",null,(0,s.kt)("summary",null,(0,s.kt)("h3",{id:"use-case-2-student-grades-command"},"Use Case #2: Student !grades command"),(0,s.kt)("mermaid",{value:'sequenceDiagram\n    actor Student\n    participant Discord\n    participant ClassroomBot\n    participant FastAPI\n    participant Supabase DB\n    Student->>Discord: User sends "!grades" command\n    activate Student\n    activate Discord\n    Discord->>ClassroomBot: ClassroomBot reads command from Discord\n    activate ClassroomBot\n    ClassroomBot->>FastAPI: GET grades from GRADES table where student_id == Student\n    activate FastAPI\n    FastAPI->>Supabase DB: API request to database\n    activate Supabase DB\n    Supabase DB--\x3e>FastAPI: Returns list of GRADED assignments, quizzes, disucssions\n    deactivate Supabase DB\n    FastAPI --\x3e> ClassroomBot: Sends list from Supabase to bot\n    deactivate FastAPI\n    ClassroomBot --\x3e> Discord: DMs student their grades for each task\n    deactivate ClassroomBot\n    Discord--\x3e> Student: Student reads DM from ClassroomBot\n    deactivate Discord\n    deactivate Student'})),(0,s.kt)("div",null,(0,s.kt)("div",null,"As a student user I want to check my grades for the class."),(0,s.kt)("br",null),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},'The student types "!grades" command within the classroom discord server.'),(0,s.kt)("li",{parentName:"ol"},"The ClassroomBot reads the command from the server"),(0,s.kt)("li",{parentName:"ol"},"Using FastAPI an API GET request is made for the grades"),(0,s.kt)("li",{parentName:"ol"},"The request is forwarded to the Supabase Database"),(0,s.kt)("li",{parentName:"ol"},"Supabase returns the grades for that student as a list"),(0,s.kt)("li",{parentName:"ol"},"FastAPI sends the list to the application"),(0,s.kt)("li",{parentName:"ol"},"The application parses through the grades and neatly organizes them and direct messages the student their grades"),(0,s.kt)("li",{parentName:"ol"},"The student reads their DMs to check their grades.")))),(0,s.kt)("details",null,(0,s.kt)("summary",null,(0,s.kt)("h3",{id:"use-case-3-student-takes-practice-quiz"},"Use Case #3: Student takes practice quiz"),(0,s.kt)("mermaid",{value:"\nsequenceDiagram\nactor u as Student\nparticipant d as Discord\nparticipant c as ClassroomBot\nparticipant f as FastAPI\nparticipant s as Supabase DB\n\nu->>d: Student types !pquiz in Quiz text channel\nd->>c: Reads command from Discord\nc->>f: GET list of current practice quizes from DataBase\nf->>s: API request from DataBase\ns--\x3e>f: Return list of Practice Quizes\nf--\x3e>c: Sends list from DataBase to ClassRoom Bot\nc--\x3e>d: The Bot lists the available Practice Quizes\nd--\x3e>u: Student reads the list of Quizes they can take\nu->>d: Student types !pquiz 2 in Quiz text channel\nd->>c: Reads command from Discord\nc->>f: GET Practice Quiz 2 from the DataBase\nf->>s: API request from DataBase\ns--\x3e>f: Return Practice Quiz 2\nf--\x3e>c: Sends Practice Quiz 2 from the DatBase to ClassRoom Bot\nc--\x3e>d: The Bot Dms the student the questions for the practice quiz\nd--\x3e>u: Student reads the questions as they are messaged them\nu->>d: Student answers the questions to the Bot via DM\nd->>c: Reads answers and copies them\nc->>f: PUSH answers to DataBase\nf->>s: Record students answers\ns--\x3e>f: Return Student answers and Practice Quiz answers \nf--\x3e>c: Compare the answers and Return Correct and incorect answers \nc--\x3e>d: The Bot DMs the results to the student\nd--\x3e>u: Student knows where they stand on the topic by the results"})),(0,s.kt)("div",null,(0,s.kt)("div",null,"This Diagram shows the process of a student wanting to take a Practice Quiz."),(0,s.kt)("br",null),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Student types !pquiz"),(0,s.kt)("li",{parentName:"ol"},"The Bot reads the command and sends a request for the list of quizzes available to the API."),(0,s.kt)("li",{parentName:"ol"},"The API gets the data from the database and returns it to the Bot."),(0,s.kt)("li",{parentName:"ol"},"The Bot lists the available quizzes."),(0,s.kt)("li",{parentName:"ol"},"The Student reads the available quizzes and types !pquiz 2 to take the quiz they want."),(0,s.kt)("li",{parentName:"ol"},"The bot reads the command and send the request for the specific quiz to the API."),(0,s.kt)("li",{parentName:"ol"},"The API gets the questions from the database and returns them to the Bot."),(0,s.kt)("li",{parentName:"ol"},"The Bot DMs the student the questions."),(0,s.kt)("li",{parentName:"ol"},"The Student answers the questions."),(0,s.kt)("li",{parentName:"ol"},"The Bot reads the answers and pushes them to the API."),(0,s.kt)("li",{parentName:"ol"},"The API pushes the answers to the Database to be saved and then returns the answers key for the quiz and the student answers."),(0,s.kt)("li",{parentName:"ol"},"The API compares the two and returns the incorrect and correct answers to the Bot."),(0,s.kt)("li",{parentName:"ol"},"The Bot messages the Student their results."),(0,s.kt)("li",{parentName:"ol"},"The student knows where they stand on the topic due to their results.")))),(0,s.kt)("details",null,(0,s.kt)("summary",null,(0,s.kt)("h3",{id:"use-case-4-student-wants-to-ask-the-teacher-a-question"},"Use Case #4: Student wants to ask the teacher a question"),(0,s.kt)("mermaid",{value:'\nsequenceDiagram\n    actor Student\n    actor Teacher\n    participant Discord\n    participant ClassroomBot\n    Student->>Discord: User sends "!ticketcreate" command\n    activate Student\n    activate Discord\n    Discord->>ClassroomBot: ClassroomBot reads command from Discord\n    activate ClassroomBot\n    ClassroomBot->>Discord: creates a new private chat\n    deactivate ClassroomBot\n    activate Teacher\n    Discord->>Teacher: Teacher is added to private chat\n    Discord->>Student: Student is added to private chat\n    Student->>Discord: Student asks question in chat\n    Discord->>Teacher: Teacher receives question\n    Teacher->>Discord: Teacher responds to question\n    Discord->>Student: Student receives teacher\'s response\n    deactivate Discord\n    deactivate Teacher\n    deactivate Student\n    '})),(0,s.kt)("div",null,(0,s.kt)("div",null,"This diagram shows a student asking a question to the teacher by creating a ticket for a private chat"),(0,s.kt)("br",null),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},'Student types "!ticketCreate" command'),(0,s.kt)("li",{parentName:"ol"},"ClassroomBot reads the command from discord"),(0,s.kt)("li",{parentName:"ol"},"The bot creates a new private chat"),(0,s.kt)("li",{parentName:"ol"},"The teacher and student are added to the private chat"),(0,s.kt)("li",{parentName:"ol"},"Student can message the question to the teacher"),(0,s.kt)("li",{parentName:"ol"},"Teacher responds to the students question"),(0,s.kt)("li",{parentName:"ol"},"Student receives the teacher's response")))),(0,s.kt)("details",null,(0,s.kt)("summary",null,(0,s.kt)("h3",{id:"use-case-5-educator-creates-poll-with-poll"},"Use Case #5: Educator creates poll with !poll"),(0,s.kt)("mermaid",{value:'\nsequenceDiagram\n    actor Teacher\n    participant Discord\n    participant ClassroomBot\n    Teacher->>Discord: User sends "!pollcreate" command\n    activate Discord\n    Discord->>ClassroomBot: ClassroomBot reads command from Discord\n    activate ClassroomBot\n    ClassroomBot->>Discord: ClassroomBot prompts user for poll options\n    Discord->>Teacher: Teacher receives poll prompt\n    Teacher->>Discord: Teacher replies with poll question and options\n    Discord->>ClassroomBot: ClassroomBot reads response from Discord\n    ClassroomBot->>Discord: ClassroomBot publishes poll to Discord and sends confirmation to teacher\n    Discord->>Teacher: Teacher receives confirmation that poll was created\n    deactivate ClassroomBot\n    deactivate Discord\n    '})),(0,s.kt)("div",null,(0,s.kt)("div",null,"This diagram shows an educator creating a poll for the students to respond to"),(0,s.kt)("br",null),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"The teacher enters the ",(0,s.kt)("inlineCode",{parentName:"li"},"!poll")," command"),(0,s.kt)("li",{parentName:"ol"},"The ClassroomBot reads the command from Discord"),(0,s.kt)("li",{parentName:"ol"},"The bot prompts the user for the poll question and options"),(0,s.kt)("li",{parentName:"ol"},"The teacher enters the specified information on Discord"),(0,s.kt)("li",{parentName:"ol"},"The ClassroomBot reads the data from Discord"),(0,s.kt)("li",{parentName:"ol"},"The ClassroomBot formats the poll message and publishes it to Discord"),(0,s.kt)("li",{parentName:"ol"},"The teacher receives confirmation that their poll was created")))),(0,s.kt)("details",null,(0,s.kt)("summary",null,(0,s.kt)("h3",{id:"use-case-6-educator-takes-attendance-with-attendance-command"},"Use Case #6: Educator takes attendance with !attendance command"),(0,s.kt)("mermaid",{value:"\nsequenceDiagram\n    actor User\n    participant Discord\n    participant ClassroomBot\n    participant Student1\n    participant Student2\n    participant FastAPI\n    participant Database\n\n    User->>Discord: !attendance\n    activate Discord\n\n    Discord->>ClassroomBot: attendance()\n    deactivate Discord\n    activate ClassroomBot\n\n    ClassroomBot->>ClassroomBot: timerOn()\n    \n    loop\n        ClassroomBot->> Student1: asks for an input (!present)\n        activate Student1\n        ClassroomBot->>Student1: remainingTime(5 minute)\n        Student1--\x3e>Discord: !present\n        deactivate Student1\n        Discord->>ClassroomBot: !present\n        ClassroomBot->> Student2: asks for an input (!present)\n        ClassroomBot->>Student2: remainingTime(5 minute)\n    end\n\n    Student2--\x3e>Discord: null \n    Discord->>ClassroomBot: null\n    ClassroomBot->>ClassroomBot: timerOff()\n    ClassroomBot->>FastAPI: markAttendance()\n    deactivate ClassroomBot\n    activate FastAPI\n    FastAPI->>Database:save(student1_attended)\n    activate Database\n    FastAPI->>Database:save(student2_absent)\n    deactivate FastAPI\n    deactivate Database    \n    ClassroomBot->>FastAPI: retrieveAttendance()\n\n    activate FastAPI\n    FastAPI->>Database: retrieve_student_absent_list()\n    \n    activate Database\n\n    Database--\x3e>FastAPI: students_absent_list\n    deactivate FastAPI\n    deactivate Database\n    activate FastAPI\n    FastAPI--\x3e>ClassroomBot: Students_absent_list\n    deactivate FastAPI\n\n    activate ClassroomBot\n    ClassroomBot--\x3e>Discord: Students_absent_list\n    deactivate ClassroomBot"})),(0,s.kt)("div",null,(0,s.kt)("div",null,"This diagram shows the process of recording students attendance. "),(0,s.kt)("br",null),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"User sends a command to the Discord server to initiate attendance tracking by typing ",(0,s.kt)("inlineCode",{parentName:"li"},"!attendance"),"."),(0,s.kt)("li",{parentName:"ol"},"The Discord server then passes the attendance request to the ClassroomBot."),(0,s.kt)("li",{parentName:"ol"},"The ClassroomBot starts a timer and begins a loop asking students in the classroom if they are present or not."),(0,s.kt)("li",{parentName:"ol"},"Student1  responds with a ",(0,s.kt)("inlineCode",{parentName:"li"},'"!present"')," whereas Student2 does not."),(0,s.kt)("li",{parentName:"ol"},"Once loop is complete, the ClassroomBot deactivates and sends a request to FastAPI to mark the attendance."),(0,s.kt)("li",{parentName:"ol"},"The FastAPI stores the attendance data in a Database."),(0,s.kt)("li",{parentName:"ol"},"The FastAPI service then retrieves the list of students who were marked absent in the database and sends it back to the ClassroomBot."),(0,s.kt)("li",{parentName:"ol"},"The ClassroomBot activates again and receives the list of absent students from the FastAPI service."),(0,s.kt)("li",{parentName:"ol"},"The ClassroomBot sends the list of absent students to the Discord server for notification to the User.")))))}m.isMDXComponent=!0}}]);