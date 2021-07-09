import{o as e,c as l,r as t,a,h as s,b as r,d as o,e as u,f as n,w as d,g as i,u as c,t as p,F as h,i as m,m as g,j as b}from"./vendor.d1e13211.js";const v=a(" × "),y={props:{index:Number,length:Number},setup(a){const{index:s,length:r}=a,o=["px-3","py-2","ml-4","mt-4","rounded-md","text-md"];return s>Math.floor(Math.random()*r)?o.push("bg-yellow-200","hover:bg-yellow-300"):o.push("bg-gray-200","hover:bg-gray-300"),(a,s)=>(e(),l("button",{onClick:s[1]||(s[1]=e=>a.$emit("pop")),class:o},[t(a.$slots,"default"),v]))}},f={props:{type:{type:String,default:"primary"},disabled:{type:Boolean,default:!1}},setup(a){const{type:s,disabled:r}=a,o=ref(["border","rounded-md","py-1","px-3","min-w-4/5","font-heading"]);return r?o.push(["bg-gray-400","border-gray-400"]):o.push(...(e=>{const l={default:{bg:{colour:e,weight:400},border:{colour:e,weight:400}},hover:{bg:{colour:e,weight:500},border:{colour:e,weight:600}},active:{bg:{colour:e,weight:800},border:{colour:e,weight:800}}},t=[];return Object.entries(l).forEach((([e,l])=>{let a="";"default"!==e&&(a=e+":"),Object.entries(l).forEach((([e,{colour:l,weight:s}])=>{t.push(`${a}${e}-${l}-${s}`)}))})),t})({success:"green",primary:"blue",default:"blue",secondary:"indigo",caution:"yellow",danger:"red"}[s])),(a,s)=>(e(),l("button",{class:o.value},[t(a.$slots,"default")],2))}},w={props:{modelValue:String},setup(t){const{modelValue:a}=t;return(t,s)=>(e(),l("input",{class:"border rounded-md border-gray-400 py-1 px-2 my-2 w-1/2 md:w-1/3",type:"text",value:a,onChange:s[1]||(s[1]=e=>t.$emit("update:modelValue",e.target.value))},null,32))}},x={setup:(e,{slots:l,attrs:t})=>()=>s("h"+t.level,{class:["mt-4","mb-2"]},l.default())},$={},k={class:"grid cols-75-25 mb-2 pb-4 border-b"},_={key:0};$.render=function(a,s){return e(),l("section",k,[r("div",null,[t(a.$slots,"default")]),a.$slots.sidebar?(e(),l("div",_,[t(a.$slots,"sidebar")])):o("",!0)])};const V={class:"container mx-auto px-24 py-4"},C=a("Words"),j=r("p",null,"Hello, and welcome to my Ted-oh wrong thing.",-1),I=r("p",null," This is words. Words is the most useless thing I've ever built. ",-1),T=r("p",null," Why did I make it? I wanted to learn Tailwind and mess around with Vue 3 so I made something stupid but fun. ",-1),W=a("What do you do?"),A=r("p",null," Not much really. Type words in, hit enter or add, they go in the list. ",-1),N=r("p",null,"You can type sentences and they get split into words.",-1),O=r("p",null," If there are duplicates, you can see the count and remove all but the first instance of the word. ",-1),S=a("Add a word"),E=a("Add"),K=r("br",null,null,-1),M={key:0},P={class:"flex items-baseline"},q=a("Duplicates "),B={class:"text-sm"},D={class:"list-disc list-inside pl-1"},F={class:"flex items-center mt-4"},H=a("These are words"),U=a(" Clear duplicates "),Y=r("div",{class:"text-gray-500 text-sm"},"Click/tap a word to remove it",-1),z={class:"flex flex-wrap -ml-4"};b({setup(t){const s=f,b=u(""),v=u(["credibility","requirement","slave","application","matter","hostage","approach","viable","laboratory","harsh","portion","snatch","pledge","crowd","ghostwriter","performer","disaster","will","rob","integrated","danger","assertive","court"]),k=n((()=>Object.entries(v.value.reduce(((e,l)=>(e[l]?e[l]++:e[l]=1,e)),{})))),_=()=>{b.value.trim()&&(v.value.push(...b.value.split(/\s/)),b.value="")},G=n((()=>k.value.filter((([e,l])=>l>1))));return(t,u)=>(e(),l("main",V,[r(x,{level:"1"},{default:d((()=>[C])),_:1}),r($,null,{default:d((()=>[j,I,T,r(x,{class:"h3",level:"2"},{default:d((()=>[W])),_:1}),A,N,O])),_:1}),r(x,{class:"h3",level:"2"},{default:d((()=>[S])),_:1}),r(w,{class:"rounded-r-none",modelValue:b.value,"onUpdate:modelValue":u[1]||(u[1]=e=>b.value=e),onKeyup:i(_,["enter"])},null,8,["modelValue","onKeyup"]),r(c(s),{class:"border-l-0 rounded-l-none",onClick:_},{default:d((()=>[E])),_:1}),K,c(G).length?(e(),l("section",M,[r("div",P,[r(x,{level:"2",class:"h3 mr-2"},{default:d((()=>[q])),_:1}),r("small",B,"(from "+p(v.value.length)+" words)",1)]),r("ul",D,[(e(!0),l(h,null,m(c(G),(([t,a])=>(e(),l("li",{key:`duplicate-${t}`},p(t)+" ("+p(a)+") ",1)))),128))])])):o("",!0),r("div",F,[r(x,{class:"h3 mr-4 leading-none",level:"2"},{default:d((()=>[H])),_:1}),c(G).length?(e(),l(c(s),{key:0,class:"text-xs",type:"caution",onClick:u[2]||(u[2]=e=>{return v.value=(l=v.value,k.value={},Array.from(new Set(l)));var l})},{default:d((()=>[U])),_:1})):o("",!0)]),Y,r($,null,{default:d((()=>[r("div",z,[(e(!0),l(h,null,m(v.value,((t,s)=>(e(),l(y,g({key:`${t}-${s}`},{index:s,length:v.value.length},{onPop:e=>v.value.splice(s,1)}),{default:d((()=>[a(p(t),1)])),_:2},1040,["onPop"])))),128))])])),_:1})]))}}).mount("#app");