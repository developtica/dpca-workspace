(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[858],{4873:function(e,a,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/new/[[...workspace]]",function(){return l(5790)}])},5790:function(e,a,l){"use strict";l.r(a),l.d(a,{__N_SSG:function(){return m},default:function(){return p}});var s=l(5893),t=l(9008),r=l.n(t),i=l(7294),n=l(3162),o=l(8813),c=l(3157),d=l(1163),u=JSON.parse('{"wZ":[{"description":"Free online diagraming for all","docker_registry":"https://index.docker.io/v1/","image_src":"draw.png","name":"jgraph/drawio:latest","run_config":{"hostname":"kasm"},"exec_config":{"go":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --go --url \\"$KASM_URL\\"\'"},"assign":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --assign --url \\"$KASM_URL\\"\'"}},"categories":["Productivity"],"friendly_name":"Draw.io","architecture":["amd64","arm64"],"compatibility":["1.15.x","1.14.x"],"uncompressed_size_mb":2170,"sha":"88a97d3bef99b2de326db30832f17bf2a8e74b58"},{"description":"Free online diagraming for all","docker_registry":"https://index.docker.io/v1/","image_src":"uptime.jpg","name":"jgraph/drawio:latest","run_config":{"hostname":"kasm"},"exec_config":{"go":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --go --url \\"$KASM_URL\\"\'"},"assign":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --assign --url \\"$KASM_URL\\"\'"}},"categories":["Productivity"],"friendly_name":"Draw.io","architecture":["amd64"],"compatibility":["1.15.x","1.14.x"],"uncompressed_size_mb":2170,"sha":"b4740c524c641f3bc528797ebcd1f9cc295ad24a"},{"description":"Open source monitoring tool","docker_registry":"https://index.docker.io/v1/","image_src":"uptime.jpg","name":"louislam/uptime-kuma:1","run_config":{"hostname":"kasm","ports":{"3001/tcp":{}},"privileged":false,"gpu_enabled":false,"environment":{"NODE_ENV":"production"}},"exec_config":{"go":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --go --url \\"$KASM_URL\\"\'"},"assign":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --assign --url \\"$KASM_URL\\"\'"}},"categories":["Monitoring"],"friendly_name":"Uptime Kuma","architecture":["amd64"],"compatibility":["1.15.x","1.14.x"],"uncompressed_size_mb":512,"sha":"3efe894dc6997878e0a7d26f5e950e55012b576e"}]}'),m=!0;function p(e){let{workspace:a}=e,t=(0,i.useRef)(null),m=(0,i.useRef)(null),p=(0,i.useRef)(null),[h,b]=(0,i.useState)(null),[g,x]=(0,i.useState)(null),[v,_]=(0,i.useState)(null),[j,w]=(0,i.useState)("png"),[y,N]=(0,i.useState)(null),k={friendly_name:null,image_src:null,description:null,name:null,cores:2,memory:2768,gpu_count:0,cpu_allocation_method:"Inherit",docker_registry:"https://index.docker.io/v1/",categories:[],require_gpu:!1,enabled:!0,image_type:"Container"},[S,C]=(0,i.useState)(k);(0,d.useRouter)(),(0,i.useEffect)(()=>{if(null===a)p.current.value="",t.current.value="",m.current.value="",b(null),x(null),_(null),C(k);else if(a&&a[0]){let e=u.wZ.find(e=>e.name===atob(a[0]));if(delete e.sha,p.current.value=e.description,t.current.value=e.name,m.current.value=e.friendly_name,e.categories){let l=[];e.categories.map(e=>l.push({label:e,value:e})),b(l)}if(e.architecture){let s=[];e.architecture.map(e=>s.push({label:e,value:e})),x(s)}N("../../icons/"+e.image_src),C({...S,...e})}},[a]);let R={control:(e,a)=>({...e,background:"#f1f5f9",borderRadius:"0.5rem",borderColor:"#94a3b8"}),multiValue(e,a){let{data:l}=a;return{...e,backgroundColor:"#dde6f1"}}};(0,i.useEffect)(()=>{if(S&&S.friendly_name){let e={...S};e.image_src=M(e.friendly_name)+"."+j,C(e)}},[j]);let L=e=>{let a={...S};a.categories=e.map(e=>e.value),C(a);let l=[];a.categories.map(e=>l.push({label:e,value:e})),b(l)},A=e=>{let a={...S};a.architecture=e.map(e=>e.value),C(a);let l=[];a.architecture.map(e=>l.push({label:e,value:e})),x(l)};function M(e){var a=e.toString().toLowerCase();return(a=(a=(a=a.split(/\&+/).join("-and-")).split(/[^a-z0-9]/).join("-")).split(/-+/).join("-")).trim("-")}let O=()=>{var e=l(5733);let a=new e,s=a.folder(S.friendly_name);if(s.file("workspace.json",JSON.stringify(S,null,2)),v)s.file(S.image_src,v.file);else if(y){let t=fetch(y).then(e=>e.blob());s.file(S.image_src,t)}a.generateAsync({type:"blob"}).then(function(e){(0,n.saveAs)(e,M(S.friendly_name)+".zip")})},D=e=>{let a={...S};a[e.target.name]=e.target.value,"icon"===e.target.name&&(delete a.icon,_({value:e.target.value,file:e.target.files[0]}),w(e.target.value.substr(e.target.value.lastIndexOf(".")+1)),N(null)),a.friendly_name&&(a.image_src=M(a.friendly_name)+"."+j),C(a)};return(0,s.jsxs)("div",{className:"",children:[(0,s.jsxs)(r(),{children:[(0,s.jsx)("title",{children:"Kasm Workspaces"}),(0,s.jsx)("meta",{name:"description",content:"List of workspaces for Kasm Webspaces"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsxs)("div",{className:"flex flex-col lg:flex-row w-full my-20 max-w-6xl text-sm rounded-xl overflow-hidden mx-auto",children:[(0,s.jsxs)("div",{className:"w-full lg:w-1/2 p-16 bg-slate-300",children:[(0,s.jsx)("h1",{className:"text-2xl font-medium mb-2",children:"Add Workspace"}),(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("p",{className:"mb-8 opacity-70",children:'This page is designed to allow admins to generate the JSON they need to upload to the "workspaces" directory. It also allows end users to see what settings are needed if they want to manually copy them into a new workspace.'}),(0,s.jsx)("label",{className:"mb-2 font-medium",children:"Icon"}),(0,s.jsx)("input",{type:"file",name:"icon",onChange:D,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,s.jsx)("p",{className:"mb-6 opacity-70",children:"Select the image to use, image will be renamed when it's downloaded."}),(0,s.jsx)("label",{className:"mb-2 font-medium",children:"Friendly Name"}),(0,s.jsx)("input",{ref:m,name:"friendly_name",onChange:D,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,s.jsx)("p",{className:"mb-6 opacity-70",children:"This is the name that will show for users"}),(0,s.jsx)("label",{className:"mb-2 font-medium",children:"Categories"}),(0,s.jsx)(o.Z,{instanceId:"1",name:"categories",isMulti:!0,options:[{value:"Browser",label:"Browser"},{value:"Communication",label:"Communication"},{value:"Desktop",label:"Desktop"},{value:"Development",label:"Development"},{value:"Games",label:"Games"},{value:"Multimedia",label:"Multimedia"},{value:"Office",label:"Office"},{value:"Privacy",label:"Privacy"},{value:"Productivity",label:"Productivity"},{value:"Remote Access",label:"Remote Access"}],onChange:L,styles:R,value:h}),(0,s.jsx)("p",{className:"mb-6 mt-2 opacity-70",children:"You can select from the available option or create new ones."}),(0,s.jsx)("label",{className:"mb-2 font-medium",children:"Description"}),(0,s.jsx)("input",{ref:p,name:"description",onChange:D,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,s.jsx)("p",{className:"mb-6 opacity-70",children:"A short description about the workspace"}),(0,s.jsx)("label",{className:"mb-2 font-medium",children:"Docker Image"}),(0,s.jsx)("input",{ref:t,name:"name",onChange:D,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,s.jsxs)("p",{className:"mb-6 opacity-70",children:["The docker image to use, i.e. ",(0,s.jsx)("code",{className:"text-xs p-1 px-2 rounded bg-white/40",children:"kasmweb/filezilla:develop"})]}),(0,s.jsx)("label",{className:"mb-2 font-medium",children:"Architecture"}),(0,s.jsx)(c.ZP,{instanceId:"2",name:"architecture",isMulti:!0,options:[{value:"amd64",label:"amd64"},{value:"arm64",label:"arm64"}],onChange:A,styles:R,value:g}),(0,s.jsx)("p",{className:"mb-6 mt-2 opacity-70",children:"You can select from the available option or create new ones."})]})]}),(0,s.jsxs)("div",{className:"w-full lg:w-1/2 p-16 bg-slate-100",children:[(0,s.jsx)(f,{workspace:S,icon:v,inlineImage:y}),(0,s.jsx)("pre",{className:"my-8 overflow-y-auto text-xs",children:JSON.stringify({...S},null,2)}),(0,s.jsx)("button",{onClick:O,className:"p-4 relative z-10 px-5 bg-cyan-700 border-t border-white/20 border-solid hover:bg-slate-900 transition m-2 rounded items-center text-white/70 flex cursor-pointer",children:"Download"})]})]})]})}function f(e){let{workspace:a,icon:l,inlineImage:t}=e,[r,n]=(0,i.useState)(!1),o=null;if(l){let c=new Blob([l.file]);o=URL.createObjectURL(c),a.image_src=o}return(0,s.jsx)("div",{className:"rounded-xl group w-full shadow max-w-xs relative overflow-hidden h-[100px] border border-solid flex flex-col justify-between bg-slate-300 border-slate-400/50",children:(0,s.jsxs)("div",{className:"absolute top-0 left-0 right-0 h-[200px] transition-all"+(r?" -translate-y-1/2":""),children:[(0,s.jsxs)("div",{onClick:()=>n(!0),className:"h-[100px] p-4 relative overflow-hidden cursor-pointer",children:[(0,s.jsx)("img",{className:"h-[90px] group-hover:scale-150 transition-all absolute left-2 top-1",src:a.image_src,onError(e){null!==t&&(e.target.src=t)},alt:a.friendly_name}),(0,s.jsxs)("div",{className:"flex-col pl-28",children:[(0,s.jsx)("div",{className:"font-bold",children:a.friendly_name||"Friendly Name"}),(0,s.jsxs)("div",{className:"text-xs mb-2 flex gap-2",children:["Developtica"," ",(0,s.jsx)("span",{children:void 0})]}),(0,s.jsx)("div",{className:" h-8"})]}),(0,s.jsxs)("div",{className:"absolute bottom-0 left-0 right-0 bg-slate-400/20 h-8 text-[10px] flex items-center justify-center",children:[a.architecture&&a.architecture.map((e,a)=>(0,s.jsx)("span",{className:"p-2 py-0 m-[1px] inline-block rounded bg-slate-400/70",children:e},"arch"+a)),a.categories.map((e,a)=>(0,s.jsx)("span",{className:"p-2 py-0 m-[1px] inline-block rounded bg-slate-300/90",children:e},"cat"+a))]}),!1]}),(0,s.jsxs)("div",{className:"h-[100px] text-xs relative p-2 pl-4 flex",children:[(0,s.jsx)("button",{className:"absolute right-2 top-2 bg-slate-100 rounded-full flex justify-center items-center h-6 w-6",onClick:()=>n(!1),children:(0,s.jsx)("svg",{style:{height:"14px"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:(0,s.jsx)("path",{d:"M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"})})}),(0,s.jsxs)("div",{className:"flex flex-col flex-grow",children:[(0,s.jsx)("div",{className:"font-bold",children:a.friendly_name})," ",a.description]}),(0,s.jsxs)("div",{className:"flex flex-col justify-end gap-1",children:[(0,s.jsx)("div",{className:"text-xs text-color w-full p-4 py-1 rounded-lg bg-black/5 flex justify-center items-center",children:"Edit"}),(0,s.jsx)("button",{className:"text-xs w-full p-4 py-1 rounded-lg flex justify-center items-center bg-blue-500 font-bold text-white",children:"Install"})]})]})]})})}}},function(e){e.O(0,[484,774,888,179],function(){return e(e.s=4873)}),_N_E=e.O()}]);