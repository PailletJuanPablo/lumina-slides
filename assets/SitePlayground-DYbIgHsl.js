import{d as z,r as i,m as J,p as M,c as g,a as t,f as y,s as j,e as x,v as I,t as f,n as B,x as R,o as h}from"./index-C1zI_xxG.js";import{L as D}from"./Lumina-D4gg8X6s.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./SlideNavigator-3kV9GjWQ.js";import"./useAuth-DRptvQds.js";const U={class:"min-h-screen pt-24 px-4 lg:px-8 max-w-full"},A={class:"flex flex-col lg:flex-row gap-6 h-[calc(100vh-8rem)]"},V={class:"w-full lg:w-1/3 flex flex-col"},$={class:"flex items-center justify-between mb-4"},F={class:"flex gap-2"},W={class:"flex-1 relative rounded-xl overflow-hidden border border-white/10 bg-black/50"},Y={key:0,class:"absolute bottom-0 left-0 right-0 px-4 py-2 bg-red-500/20 border-t border-red-500/30 text-red-400 text-xs font-mono"},G={class:"w-full lg:w-2/3 flex flex-col"},q={class:"flex items-center justify-between mb-4"},K={class:"flex items-center gap-4"},Q={key:0,class:"text-sm text-white/40"},X={class:"flex gap-1"},Z={class:"flex-1 rounded-xl overflow-hidden border border-white/10 bg-black relative"},ee={key:0,class:"absolute inset-0 flex items-center justify-center text-white/30"},te=z({__name:"SitePlayground",setup(se){const n=i(""),d=i(null),c=i(!1),k=i(null),u=i(null),v=i(0),p=i(!1);let s=null,r=null;const S={flex:`{
  "meta": { "title": "Playground" },
  "slides": [
    {
      "type": "flex",
      "direction": "horizontal",
      "notes": "**Demo slide** - Show how the flex layout works. Point out the image on the left. Explain content stacking. Mention the button actions.",
      "elements": [
        {
          "type": "image",
          "src": "./brains.png",
          "size": "half",
          "fill": true
        },
        {
          "type": "content",
          "size": "half",
          "valign": "center",
          "padding": "xl",
          "gap": "lg",
          "elements": [
            { "type": "title", "text": "Hello World", "size": "2xl" },
            { "type": "text", "text": "Edit this JSON to see changes in real-time.", "muted": true },
            { "type": "bullets", "items": ["Flow-based layout", "No coordinates", "LLM friendly"] },
            { "type": "button", "label": "Get Started", "variant": "primary" }
          ]
        }
      ]
    },
    {
      "type": "statement",
      "tag": "Next Steps",
      "title": "Try the Speaker Notes!",
      "subtitle": "Click the Notes button above to open the presenter view.",
      "notes": "This is the second slide. Encourage them to try the bidirectional sync. Show the timer functionality. Press T to toggle timer."
    }
  ]
}`,statement:`{
  "meta": { "title": "Playground" },
  "slides": [
    {
      "type": "statement",
      "tag": "Welcome",
      "title": "Hello World",
      "subtitle": "Edit this JSON to see changes instantly.",
      "notes": "Remember to greet the audience! Introduce yourself. Set expectations for the presentation."
    }
  ]
}`,custom:`{
  "meta": { "title": "Custom Slide" },
  "slides": [
    {
      "type": "custom",
      "html": "<div class='custom-container'><h1 class='custom-title'>Custom HTML Slide</h1><p class='custom-text'>This slide uses raw HTML content!</p><div class='custom-grid'><div class='custom-card'>Card 1</div><div class='custom-card'>Card 2</div><div class='custom-card'>Card 3</div></div></div>",
      "css": ".custom-container { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; padding: 2rem; background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); } .custom-title { font-size: 4rem; font-weight: bold; background: linear-gradient(90deg, #00d4ff, #7c3aed); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 1rem; } .custom-text { font-size: 1.5rem; color: rgba(255,255,255,0.7); margin-bottom: 3rem; } .custom-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; } .custom-card { padding: 2rem; background: rgba(255,255,255,0.05); border-radius: 1rem; border: 1px solid rgba(255,255,255,0.1); color: white; font-weight: 600; }",
      "notes": "This is a custom HTML slide with inline CSS. You have full control over the layout!"
    }
  ]
}`},m=o=>{n.value=S[o],b()},C=()=>{try{const o=JSON.parse(n.value);n.value=JSON.stringify(o,null,2)}catch{}},N=()=>{var o;if(n.value.trim())try{let e=JSON.parse(n.value);e.type&&!e.slides&&(e={meta:{title:"Exported Deck"},slides:[{...e,sizing:"container"}]}),e.slides&&e.slides.forEach(P=>P.sizing="container");const l=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${((o=e.meta)==null?void 0:o.title)||"Lumina Presentation"}</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lumina-slides@8.2.5/dist/style.css">
    <style>
        body { margin: 0; padding: 0; overflow: hidden; background: #000; font-family: sans-serif; }
        #app { width: 100vw; height: 100vh; }
    </style>
</head>
<body>
    <div id="app"></div>
    
    <!-- Lumina Engine (Universal Build) -->
    <script src="https://cdn.jsdelivr.net/npm/lumina-slides@8.2.5/dist/lumina-slides.umd.cjs"><\/script>
    
    <script>
        // Initialize when ready
        document.addEventListener('DOMContentLoaded', () => {
            const { Lumina } = LuminaSlides;
            
            // The JSON from your playground
            const deckData = ${JSON.stringify(e,null,4)};

            // Start the engine
            const engine = new Lumina('#app', {
                loop: true,
                navigation: true,
                ui: {
                    visible: true,
                    showSlideCount: true,
                    showControls: true,
                    showProgressBar: true
                },
                keys: {
                    next: ['ArrowRight', ' ', 'Enter'],
                    prev: ['ArrowLeft', 'Backspace']
                },
                animation: { enabled: true, durationIn: 0.5 }
            });
            
            engine.load(deckData);
        });
    <\/script>
</body>
</html>`,O=new Blob([l],{type:"text/html"}),w=URL.createObjectURL(O),a=document.createElement("a");a.href=w,a.download="lumina-deck.html",document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(w)}catch(e){alert("Invalid JSON: "+e.message)}},L=()=>{r&&clearTimeout(r),r=setTimeout(b,300)},b=async()=>{var o;if(d.value=null,!n.value.trim()){c.value=!1;return}try{let e=JSON.parse(n.value);e.type&&!e.slides&&(e={meta:{title:"Playground"},slides:[{...e,sizing:"container"}]}),e.slides&&e.slides.forEach(l=>l.sizing="container"),c.value=!0,s||(await R(),s=new D("#playground-container",{loop:!0,navigation:!0,ui:{visible:!0,showSlideCount:!0,showControls:!0,showProgressBar:!0},keys:{next:["ArrowRight"," ","Enter"],prev:["ArrowLeft","Backspace"]},animation:{enabled:!0,durationIn:.5}}),s.on("slideChange",l=>{u.value=l.index})),s.load(e),v.value=((o=e.slides)==null?void 0:o.length)||0,u.value=0}catch(e){d.value=e.message||"Invalid JSON",c.value=!1}},T=()=>{s&&s.prev()},_=()=>{s&&s.next()},E=()=>{if(!s)return;const o=s.openSpeakerNotes();if(o){p.value=!0;const e=setInterval(()=>{o.closed&&(p.value=!1,clearInterval(e))},500)}else alert("Popup blocked! Please allow popups for speaker notes.")};return J(()=>{m("flex")}),M(()=>{s&&(s.destroy(),s=null),r&&clearTimeout(r)}),(o,e)=>(h(),g("div",U,[t("div",A,[t("div",V,[t("div",$,[e[5]||(e[5]=t("h2",{class:"text-xl font-bold text-white"},"JSON Editor",-1)),t("div",F,[t("button",{onClick:e[0]||(e[0]=l=>m("flex")),class:"px-3 py-1.5 text-xs font-bold uppercase bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition"}," Flex "),t("button",{onClick:e[1]||(e[1]=l=>m("statement")),class:"px-3 py-1.5 text-xs font-bold uppercase bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition"}," Statement "),t("button",{onClick:e[2]||(e[2]=l=>m("custom")),class:"px-3 py-1.5 text-xs font-bold uppercase bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition"}," Custom "),t("button",{onClick:C,class:"px-3 py-1.5 text-xs font-bold uppercase bg-white/10 text-white/60 rounded-lg hover:bg-white/20 transition"}," Format "),t("button",{onClick:N,class:"px-3 py-1.5 text-xs font-bold uppercase bg-pink-500/20 text-pink-400 rounded-lg hover:bg-pink-500/30 transition flex items-center gap-1.5",title:"Export as standalone HTML"},[...e[4]||(e[4]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-3.5 h-3.5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[t("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),t("polyline",{points:"7 10 12 15 17 10"}),t("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),y(" Export ",-1)])])])]),t("div",W,[j(t("textarea",{ref_key:"editorRef",ref:k,"onUpdate:modelValue":e[3]||(e[3]=l=>n.value=l),onInput:L,spellcheck:"false",class:"w-full h-full p-6 bg-transparent text-white font-mono text-sm leading-relaxed resize-none focus:outline-none",placeholder:'{"type": "flex", "elements": [...]}'},null,544),[[I,n.value]]),d.value?(h(),g("div",Y,f(d.value),1)):x("",!0)])]),t("div",G,[t("div",q,[e[7]||(e[7]=t("h2",{class:"text-xl font-bold text-white"},"Live Preview",-1)),t("div",K,[u.value!==null?(h(),g("span",Q," Slide "+f(u.value+1)+" / "+f(v.value),1)):x("",!0),t("div",X,[t("button",{onClick:T,class:"w-8 h-8 rounded-lg bg-white/10 text-white/60 hover:bg-white/20 transition flex items-center justify-center",title:"Previous slide (←)"}," ← "),t("button",{onClick:_,class:"w-8 h-8 rounded-lg bg-white/10 text-white/60 hover:bg-white/20 transition flex items-center justify-center",title:"Next slide (→)"}," → "),t("button",{onClick:E,class:B(["ml-2 px-3 py-1.5 text-xs font-bold uppercase rounded-lg transition flex items-center gap-1.5",p.value?"bg-green-500/20 text-green-400":"bg-amber-500/20 text-amber-400 hover:bg-amber-500/30"]),title:"Open Speaker Notes (S)"},[e[6]||(e[6]=t("svg",{class:"w-4 h-4",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[t("path",{d:"M12 2L2 7l10 5 10-5-10-5z"}),t("path",{d:"M2 17l10 5 10-5"}),t("path",{d:"M2 12l10 5 10-5"})],-1)),y(" "+f(p.value?"Notes Open":"Notes"),1)],2)])])]),t("div",Z,[e[9]||(e[9]=t("div",{id:"playground-container",class:"w-full h-full"},null,-1)),c.value?x("",!0):(h(),g("div",ee,[...e[8]||(e[8]=[t("div",{class:"text-center"},[t("p",{class:"text-4xl mb-4"},"🎨"),t("p",{class:"text-lg font-medium"},"Enter valid JSON to see preview"),t("p",{class:"text-sm mt-2"},"Try clicking a template button above")],-1)])]))])])])]))}}),ae=H(te,[["__scopeId","data-v-a77ef9f7"]]);export{ae as default};
