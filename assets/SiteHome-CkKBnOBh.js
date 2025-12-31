import{d as I,r as d,l as T,m as L,p as z,c as a,a as t,e as p,t as C,q as b,f as A,s as j,v as N,x as h,y as E,z as M,o as r}from"./index-BX6f1_Al.js";import{L as g}from"./Lumina-BV216Izh.js";import{p as P}from"./streaming-Bk97eUNn.js";import"./SlideNavigator-BDXGwwBW.js";import"./useAuth-faJPvffk.js";import"./-plugin-vue-export-helper-DlAUqK2U.js";const D={key:0,class:"w-full h-screen bg-black overflow-hidden relative z-[9999]"},V={key:0,class:"absolute inset-0 flex items-center justify-center bg-black z-50"},_={key:1,class:"absolute inset-0 flex items-center justify-center bg-black z-50"},B={class:"text-center max-w-md px-6"},H={class:"text-white/50 mb-6"},F={key:1,class:"min-h-screen pt-24 px-8 flex flex-col items-center justify-center text-center relative overflow-hidden"},O={class:"flex flex-col md:flex-row gap-6 mb-24 relative z-10"},q={id:"home-demo",class:"w-full max-w-[1400px] mx-auto relative z-10 mb-32 text-left px-8"},R={class:"bg-[#050505] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[700px] relative group ring-1 ring-white/5"},U={class:"flex-1 flex flex-col md:flex-row overflow-hidden relative"},G={class:"w-full md:w-3/4 h-full relative bg-black border-r border-white/10 order-2 md:order-1"},J={key:0,class:"absolute inset-0 flex items-center justify-center text-white/10 pointer-events-none"},W={class:"w-full md:w-1/4 h-48 md:h-full flex flex-col bg-[#080808] order-1 md:order-2"},Q={class:"px-4 py-3 text-[10px] font-bold text-blue-400/50 flex justify-between items-center border-b border-white/5 bg-blue-500/5 shrink-0"},Z={key:0,class:"w-2 h-2 rounded-full bg-blue-500 animate-pulse"},v=`{
  "meta": { "title": "Home Demo" },
  "slides": [
    {
      "type": "half",
      "sizing": "container",
      "meta": {
        "orbColor": "#8b5cf6"
      },
      "imageSide": "left",
      "image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000",
      "tag": "Left Aligned",
      "title": "Image on Left",
      "paragraphs": [
        "The classic split screen. Image on the left, content on the right.",
        "Perfect for introducing a product or feature where the visual context leads the narrative."
      ],
      "cta": "Explore Left"
    },
    {
      "type": "statement",
      "sizing": "container",
      "meta": {
        "orbColor": "#ec4899"
      },
      "tag": "Minimal",
      "title": "Impactful Headlines",
      "subtitle": "The standard statement slide allows for massive typography to drive a point home."
    },
    {
      "type": "features",
      "sizing": "container",
      "title": "Grid System",
      "description": "The features layout automatically arranges cards into a responsive grid.",
      "features": [
        { "title": "Card One", "desc": "Standard card with an icon.", "icon": "fa-bolt" },
        { "title": "Card Two", "desc": "Cards scale on hover.", "icon": "fa-star" },
        { "title": "Card Three", "desc": "Fully responsive on mobile.", "icon": "fa-mobile" }
      ]
    },
    {
      "type": "timeline",
      "sizing": "container",
      "title": "Project History",
      "subtitle": "A visual journey through our milestones.",
      "timeline": [
        { "date": "Q1 2023", "title": "Inception", "description": "The initial concept was drafted." },
        { "date": "Q3 2023", "title": "Prototype", "description": "First functional MVP released." },
        { "date": "Q1 2024", "title": "Beta Launch", "description": "Public beta opened to users." }
      ]
    }
  ]
}`,le=I({__name:"SiteHome",emits:["navigate"],setup($){const n=d(""),m=d(!1);let l=null,c=null;const u=d(!1),x=d(!1),f=d(null),w={apiKey:"AIzaSyBdXdSj1HVd84vZrwxUVON5FAIWsRuWZNo",authDomain:"lumina-slides.firebaseapp.com",projectId:"lumina-slides",storageBucket:"lumina-slides.firebasestorage.app",messagingSenderId:"308455940060",appId:"1:308455940060:web:6f346ae1c4a19dcf773919"};function y(){const i=document.getElementById("home-demo");i&&i.scrollIntoView({behavior:"smooth"})}async function k(){if(n.value="",m.value=!0,!l){const o=document.getElementById("home-demo-container");o&&(o.innerHTML=""),await h(),l=new g("#home-demo-container",{ui:{visible:!0,showControls:!0},keyboard:!1,animation:{enabled:!0,durationIn:.5}})}let i=0;const e=setInterval(()=>{n.value+=v[i],i++,i>=v.length&&clearInterval(e)},15)}T(n,i=>{if(!l)return;const e=P(i);if(e)if(e.slides&&Array.isArray(e.slides)){e.slides.forEach(s=>s.sizing="container"),l.load(e);const o=e.slides.filter(s=>s.title||s.type);if(o.length>0){const s=o.length-1;s>l.currentSlideIndex&&l.goTo(s)}}else l.load({meta:{title:"Demo"},slides:[{...e,sizing:"container"}]})});const S=async i=>{u.value=!0;try{E(w);const e=await M(i);e?(x.value=!0,await h(),setTimeout(()=>{c=new g("#deck-viewer",{loop:!0,navigation:!0,keyboard:!0,ui:{visible:!0,showControls:!0,showProgressBar:!0,showSlideCount:!0}}),c.load(e),document.body.classList.add("viewing-deck")},100)):f.value="The presentation could not be found. It may have been deleted."}catch(e){console.error(e),f.value="Failed to load presentation. Please try again later."}finally{u.value=!1}};return L(()=>{const e=new URLSearchParams(window.location.search).get("id");e&&S(e)}),z(()=>{l&&l.destroy(),c&&c.destroy(),document.body.classList.remove("viewing-deck")}),(i,e)=>u.value||x.value?(r(),a("div",D,[e[6]||(e[6]=t("div",{id:"deck-viewer",class:"w-full h-full"},null,-1)),u.value?(r(),a("div",V,[...e[2]||(e[2]=[t("div",{class:"text-center"},[t("i",{class:"fa-solid fa-circle-notch fa-spin text-4xl text-blue-500 mb-4"}),t("p",{class:"text-white/50 animate-pulse"},"Loading presentation...")],-1)])])):p("",!0),f.value?(r(),a("div",_,[t("div",B,[e[3]||(e[3]=t("i",{class:"fa-solid fa-triangle-exclamation text-4xl text-red-500 mb-4"},null,-1)),e[4]||(e[4]=t("h3",{class:"text-xl font-bold text-white mb-2"},"Presentation Not Found",-1)),t("p",H,C(f.value),1),e[5]||(e[5]=t("a",{href:"./",class:"px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"}," Go Home ",-1))])])):p("",!0)])):(r(),a("div",F,[e[12]||(e[12]=b('<div class="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div><div class="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none"></div><h1 class="text-6xl md:text-8xl font-heading font-black mb-6 tracking-tight relative z-10"> The Interface Layer<br><span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">for the Agentic Era.</span></h1><p class="text-xl md:text-2xl text-white/60 max-w-2xl mb-12 leading-relaxed relative z-10"> Turn text into high-performance UI. A deterministic, declarative engine specifically designed for LLM output. </p>',4)),t("div",O,[t("button",{onClick:e[0]||(e[0]=o=>i.$emit("navigate","docs")),class:"px-8 py-4 rounded-full bg-white text-black text-lg font-bold hover:scale-105 transition duration-300 shadow-xl shadow-white/10"}," Read the Protocol "),t("button",{onClick:y,class:"px-8 py-4 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 text-white text-lg font-bold backdrop-blur-md transition duration-300"}," Try the Demo ")]),t("div",q,[t("div",R,[t("div",{class:"h-12 bg-[#0A0A0A] border-b border-white/5 flex items-center px-4 justify-between shrink-0"},[e[8]||(e[8]=b('<div class="flex gap-2"><div class="w-3 h-3 rounded-full bg-red-500/20"></div><div class="w-3 h-3 rounded-full bg-yellow-500/20"></div><div class="w-3 h-3 rounded-full bg-green-500/20"></div></div><div class="text-xs font-mono text-white/20 uppercase tracking-widest hidden md:block">Agent Preview Environment</div>',2)),t("button",{onClick:k,class:"px-4 py-1.5 rounded-full bg-blue-500 hover:bg-blue-400 text-white font-bold text-[10px] uppercase tracking-wide shadow-lg shadow-blue-500/20 transition-all flex items-center gap-2"},[...e[7]||(e[7]=[t("i",{class:"fa-solid fa-play"},null,-1),A(" Simulate Stream ",-1)])])]),t("div",U,[t("div",G,[e[10]||(e[10]=t("div",{id:"home-demo-container",class:"w-full h-full"},null,-1)),m.value?p("",!0):(r(),a("div",J,[...e[9]||(e[9]=[t("div",{class:"text-center"},[t("i",{class:"fa-solid fa-layer-group text-6xl mb-6 opacity-50"}),t("p",{class:"text-lg font-light"},"Waiting for Agent...")],-1)])]))]),t("div",W,[t("div",Q,[e[11]||(e[11]=t("span",null,"INCOMING JSON STREAM",-1)),m.value?(r(),a("div",Z)):p("",!0)]),j(t("textarea",{"onUpdate:modelValue":e[1]||(e[1]=o=>n.value=o),class:"flex-1 bg-transparent p-4 font-mono text-xs text-green-400 resize-none focus:outline-none leading-relaxed",placeholder:"// Waiting for LLM output...",spellcheck:"false"},null,512),[[N,n.value]])])])])]),e[13]||(e[13]=b('<div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full text-left pb-24 relative z-10"><div class="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition duration-500 group"><div class="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition"><i class="fa-solid fa-bolt text-xl"></i></div><h3 class="text-xl font-bold mb-3 text-white">Zero Hallucinations</h3><p class="text-white/50 leading-relaxed">Stop hoping the LLM generates valid HTML/CSS. Give it a strict schema and get pixel-perfect results every time.</p></div><div class="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition duration-500 group"><div class="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition"><i class="fa-solid fa-brain text-xl"></i></div><h3 class="text-xl font-bold mb-3">Semantic Layouts</h3><p class="text-white/50 leading-relaxed">Agents don&#39;t need to be designers. They just choose &quot;Timeline&quot; or &quot;Features&quot;, and the engine handles the aesthetics.</p></div><div class="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-green-500/30 transition duration-500 group"><div class="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-6 text-green-400 group-hover:scale-110 transition"><i class="fa-solid fa-tower-broadcast text-xl"></i></div><h3 class="text-xl font-bold mb-3">Realtime Streaming</h3><p class="text-white/50 leading-relaxed">Our partial JSON parser renders UI frames <i>while</i> the LLM is still typing. No loading spinners.</p></div></div>',1))]))}});export{le as default};
