(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4369:function(e,s,a){Promise.resolve().then(a.bind(a,952))},952:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return N}});var l=a(7437),t=e=>{let{children:s,additionalClass:a=[],title:t}=e,i=["min-h-fit","mt-0","bg-neutral","my-6","rounded-lg","p-10",...a].join(" ");return(0,l.jsxs)("section",{className:i,children:[t?(0,l.jsx)("h2",{className:"text-center text-3xl mb-7",children:t}):null,s]})},i=a(2265),r=e=>{let{children:s}=e;return(0,l.jsx)("div",{className:"badge badge-warning gap-2",children:s})},n=a(3896),c=e=>{let{listSocial:s}=e;return(0,l.jsx)("nav",{className:"my-10",children:(0,l.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-none md:grid-flow-col gap-14 md:gap-4 justify-items-center",children:s.map((e,s)=>(0,l.jsx)("a",{className:"transition duration-300 ease-in-out transform will-change-transform w-full hover:scale-125 text-center",target:e.target?e.target:"_blank",rel:"noopener noreferrer","aria-label":e.ariaLabel,href:e.href,children:(0,l.jsx)(n.G,{icon:e.icon,className:"text-primary w-12 h-12 mx-auto"})},s))})})},d=function(e){let{email:s}=e,[a,t]=(0,i.useState)({nom:"",email:"",message:""}),[r,c]=(0,i.useState)(!1),[d,o]=(0,i.useState)(null),m=e=>{t({...a,[e.target.name]:e.target.value})},x=e=>{c(!0),e.preventDefault(),fetch("https://script.google.com/macros/s/AKfycbzshls6yne_miTLKJOpWVc8ttl-9Q80z6N9TyKzRAAb5CSUkJBgjNfvtq_bf72I794l/exec",{method:"POST",body:new URLSearchParams(a)}).then(e=>o(!0)).catch(e=>o(!1))};return(()=>{switch(d){case!0:return(0,l.jsxs)("div",{className:"py-5 text-xl md:text-2xl mx-12 h-full bg-success text-center rounded-box text-success-content",children:[(0,l.jsxs)("div",{className:"text-2xl md:text-3xl my-1",children:[(0,l.jsx)(n.G,{icon:"fa-solid fa-check",className:"text-successs text-5xl md:text-6xl"})," ","Message envoy\xe9"]}),(0,l.jsx)("br",{}),"je vous recontacte au plus vite."]});case!1:return(0,l.jsxs)("div",{className:"py-5 text-xl md:text-2xl mx-12 h-full bg-error text-center rounded-box text-error-content",children:[(0,l.jsxs)("div",{className:"text-2xl md:text-3xl my-1",children:[(0,l.jsx)(n.G,{icon:"fa-solid fa-circle-exclamation",className:"text-5xl md:text-6xl"})," ","\xc9rreur d'envoi"]}),(0,l.jsx)("br",{}),"Contactez moi par mail:"," ",(0,l.jsx)("a",{href:"mailto:".concat(s,"?body=").concat(a.message),className:"link",children:s})]});default:return(0,l.jsxs)("form",{onSubmit:x,className:"contact-form min-h-full",children:[(0,l.jsx)("div",{className:"my-5",children:(0,l.jsxs)("label",{className:"input input-bordered flex items-center gap-2 w-full",children:["Nom",(0,l.jsx)("input",{className:"",type:"text",name:"nom",id:"nom",value:a.nom,onChange:m,required:!0})]})}),(0,l.jsx)("div",{className:"my-5",children:(0,l.jsxs)("label",{className:"input input-bordered flex items-center gap-2 w-full",children:[(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",className:"h-4 w-4 opacity-70",children:[(0,l.jsx)("path",{d:"M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"}),(0,l.jsx)("path",{d:"M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"})]}),"Email",(0,l.jsx)("input",{className:"",type:"email",name:"email",id:"email",value:a.email,onChange:m,required:!0})]})}),(0,l.jsx)("div",{className:"my-5",children:(0,l.jsx)("textarea",{className:"textarea textarea-secondary min-w-full",placeholder:"Message",name:"message",id:"message",value:a.message,onChange:m,required:!0})}),(0,l.jsx)("button",{id:"buttonSend",type:"submit",className:"btn btn-primary rounded-lg w-full",children:r?(0,l.jsx)("span",{className:"loading loading-dots loading-md"}):"Envoyer"})]})}})()},o=a(6648),m=()=>{let e="w-auto h-32";return(0,l.jsxs)("ul",{className:"flex justify-around mt-6 border sm:border-none px-5 rounded-lg",children:[(0,l.jsx)("li",{children:(0,l.jsx)(o.default,{src:"/img/php-svgrepo-com.svg",alt:"Logo Php",className:e,width:50,height:50})}),(0,l.jsx)("li",{children:(0,l.jsx)(o.default,{src:"/img/Unofficial_JavaScript_logo_2.svg",alt:"Logo JavaScript",className:e,width:50,height:50})})]})},x=()=>{let e="w-auto h-20 mx-auto";return(0,l.jsxs)("ul",{className:"grid grid-cols-2 gap-12 my-10 md:grid-cols-5 text-center",children:[(0,l.jsxs)("li",{children:[(0,l.jsx)(o.default,{src:"/img/symfony_black_03.svg",alt:"Logo Symfony",className:e,width:50,height:50}),"Symfony"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)(o.default,{src:"/img/React-icon.svg",alt:"Logo React",className:e,width:50,height:50}),"React"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)(o.default,{src:"/img/Logo_Circle webby blue.svg",alt:"Logo Api Plateforme",className:e,width:50,height:50}),"Api Platform"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)(o.default,{src:"/img/Bootstrap_logo.svg",alt:"Logo Bootstrap",className:e,width:50,height:50}),"BootStrap"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)(o.default,{src:"/img/Tailwind_CSS_Logo.svg",alt:"Logo Tailwind",className:e,width:50,height:50}),"Tailwind"]})]})},h=e=>{let{src:s,alt:a,title:t,link:i,content:r,badgeList:n,empty:c}=e;return(0,l.jsx)("div",{className:"card bg-primary rounded-t-lg h-full w-full rounded overflow-hidden shadow-lg".concat(c?null:" hover:scale-105 hover:shadow-2xl ","transition-transform duration-300"),children:c?(0,l.jsx)("div",{className:"bg-base-200 absolute h-full w-full"}):(0,l.jsxs)("a",{href:i,target:"_blank",children:[(0,l.jsx)("figure",{children:(0,l.jsx)(o.default,{src:s,alt:a,width:500,height:500,className:"w-full"})}),(0,l.jsxs)("div",{className:"card-body",children:[(0,l.jsx)("h2",{className:"card-title",children:t}),(0,l.jsx)("p",{children:r}),(0,l.jsx)("div",{className:"card-actions justify-end",children:n.map((e,s)=>(0,l.jsx)("div",{className:"badge badge-outline",children:e.name},s))})]})]})})},g=e=>{let{listSocial:s,listCard:a,section1:i}=e,g="transition duration-1000 ease-in-out transform";return(0,l.jsxs)("main",{children:[(0,l.jsxs)(t,{children:[(0,l.jsxs)("div",{className:"lg:grid grid-cols-2 lg:grid-cols-3 gap-16 lg:px-10",children:[(0,l.jsx)("div",{className:"md:px-24 lg:px-0",children:(0,l.jsxs)("div",{className:"mask mask-squircle w-auto min-h-9 group",children:[(0,l.jsx)(o.default,{src:"/img/original.jpg",alt:i.altFirstImageAvatar,className:"object-contain w-full h-full group-hover:opacity-0 ".concat(g),width:500,height:500,priority:!0}),(0,l.jsx)(o.default,{src:"/img/reverse.jpg",alt:i.altSecondImageAvatar,className:"absolute inset-0 opacity-0 group-hover:opacity-100 ".concat(g),width:500,height:500})]})}),(0,l.jsxs)("div",{className:"col-span-2 flex flex-col justify-center my-5 lg:px-20s",children:[(0,l.jsxs)("div",{className:"md:flex items-center",children:[(0,l.jsx)("h1",{className:"text-4xl me-4",children:i.title}),i.badge?(0,l.jsx)(r,{children:i.badge}):null]}),(0,l.jsx)("div",{dangerouslySetInnerHTML:{__html:i.textIntro}}),(0,l.jsx)("a",{href:"/file/cv_wakelam_jordan_dev.pdf",download:"cv_wakelam_jordan_dev",className:"btn btn-secondary w-32 rounded-lg text-xl",children:"Mon cv"})]})]}),(0,l.jsx)("div",{children:(0,l.jsx)(c,{listSocial:s})})]}),(0,l.jsx)(t,{title:"Mes Compétences",children:(0,l.jsxs)("div",{className:"",children:[(0,l.jsx)(m,{}),(0,l.jsx)("div",{className:"divider"}),(0,l.jsx)(x,{})]})}),(0,l.jsxs)(t,{title:"Mes Projets",children:[(0,l.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 justify-items-center gap-12",children:a.map((e,s)=>(0,l.jsx)(h,{src:e.src,alt:e.alt,title:e.title,link:e.link,content:e.content,badgeList:e.badgeList,empty:e.empty},s))}),(0,l.jsx)("div",{className:"text-center mt-9",children:(0,l.jsx)("a",{href:"https://github.com/wakelamjordan?tab=repositories",className:"btn btn-primary rounded-lg",target:"_blank",children:"Autres projets"})})]}),(0,l.jsx)(t,{title:"Me contacter",additionalClass:["p-0","md:p-10"],children:(0,l.jsxs)("div",{className:"md:grid grid-cols-2 py-12 gap-12",id:"MeContacter",children:[(0,l.jsx)(d,{email:i.email}),(0,l.jsx)("div",{className:"ms-12",children:(0,l.jsxs)("ul",{className:"list-disc",children:[(0,l.jsx)("li",{className:"my-5",children:(0,l.jsxs)("a",{href:"tel:+".concat(i.phoneNumber.replace(/\s/g,"")),className:"flex gap-3","aria-label":"Num\xe9ros de t\xe9l\xe9phone mobile",children:[(0,l.jsx)(n.G,{icon:"fa-solid fa-phone",className:"w-5"})," ",i.phoneNumber]})}),(0,l.jsx)("li",{className:"my-5",children:(0,l.jsxs)("span",{className:"flex gap-3","aria-label":"Ville de domicile",children:[(0,l.jsx)(n.G,{icon:"fa-solid fa-house",className:"w-5"}),i.location]})}),(0,l.jsx)("li",{className:"my-5",children:(0,l.jsxs)("a",{href:"mailto:".concat(i.email),className:"flex gap-3 link link-hover","aria-label":"Adresse mail",children:[(0,l.jsx)(n.G,{icon:"fa-solid fa-at",className:"w-5"}),i.email]})})]})})]})})]})},u=e=>{let{listSocial:s}=e;return(0,l.jsxs)("footer",{className:"footer bg-neutral text-neutral-content items-center p-4 rounded-t-lg",children:[(0,l.jsxs)("aside",{className:"grid-flow-col items-center",children:[(0,l.jsx)(o.default,{src:"/favicon/favicon-32x32.png",className:"bg-white rounded-full",alt:"logo jordan Wakelam",width:20,height:20}),(0,l.jsxs)("p",{children:["Copyright \xa9 ",new Date().getFullYear()," - All right reserved"]})]}),(0,l.jsx)("nav",{className:"mx-auto grid-cols-2 md:mx-0 md:grid-flow-col gap-4 md:place-self-center md:justify-self-end",children:s.map((e,s)=>(0,l.jsx)("a",{className:"mx-5",target:e.target?e.target:"_blank",rel:"noopener noreferrer","aria-label":e.ariaLabel,href:e.href,children:(0,l.jsx)(n.G,{icon:e.icon,className:"text-primary w-12 h-12 mx-auto"})},s))})]})},j=a(288),f=a(568),p=a(5079);function N(){let[e,s]=(0,i.useState)(null);return((0,i.useEffect)(()=>{fetch("/data/content.json").then(e=>e.json()).then(e=>s(e)).catch(e=>console.log("\xe9rreur de r\xe9cup\xe9ration du content: ".concat(e)))},[]),e)?(0,l.jsx)("div",{className:"sm:container mx-auto",children:(0,l.jsxs)("div",{className:"lg:mx-6",children:[(0,l.jsx)(g,{listSocial:e.listSocial,listCard:e.listCard,section1:e.section1}),(0,l.jsx)(u,{listSocial:e.listSocial})]})}):(0,l.jsx)("div",{className:"h-screen flex justify-center transition duration-300",children:(0,l.jsx)("span",{className:"loading loading-ring loading-lg"})})}j.vI.add(f.zhw,f.D9H,f._ei,p.j1w,p.wp6,p.FU$,p.LEp,p.xHz,p.IBq)}},function(e){e.O(0,[676,958,40,971,23,744],function(){return e(e.s=4369)}),_N_E=e.O()}]);