(arg=>{
    const choose = a => a[Math.floor(Math.random()*a.length)];
    
    //リンクを選ぶ
    const element = choose([...document.querySelectorAll("#bodyContent a:not(.mw-file-description)")].filter(x=>new URLPattern("https://ja.wikipedia.org/wiki/:title").test(x.href)));
    
    //リンクを光らせる
    element.classList.add("link");
    const a = new CSSStyleSheet();
    a.replaceSync(`.link {
        border: 2px solid #36CF;
        animation: waving .5s linear infinite;
      }
      @keyframes waving {
        0% {border-color:#36CF;}
        50% {border-color:#36C0;}
        100% {border-color:#36CF;}
      }`);
    document.adoptedStyleSheets = [a];
    
    //スクロールする
    element.scrollIntoView({behavior: "smooth",block: "center",inline:"center",});
    element.focus({preventScroll:true});
    
    //リンクに遷移する
    if(arg.delay!=Infinity){
        setTimeout(()=>element.click(),1000*arg.delay);
    }
})({delay:1})
