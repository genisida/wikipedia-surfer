const choose = a => a[Math.floor(Math.random()*a.length)];
const element = choose([...document.querySelectorAll("#bodyContent a:not(.mw-file-description)")].filter(x=>new URLPattern("https://ja.wikipedia.org/wiki/:title").test(x.href)));

element.classList.add("rainbow");
const a = new CSSStyleSheet();
a.replaceSync(`.rainbow {
    border: 2px solid #36CF;
    animation: gaming .5s linear infinite;
  }
  @keyframes gaming {
    0% {border-color:#36CF;}
    50% {border-color:#36C0;}
    100% {border-color:#36CF;}
  }`);
document.adoptedStyleSheets = [a];

element.scrollIntoView({behavior: "smooth",block: "center",inline:"center",});
element.focus({preventScroll:true});
await new Promise(r=>setTimeout(r,1000));
element.click();
