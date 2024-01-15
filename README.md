# wikipedia-surfer
wikipediaサーフィンをするための簡易ブックマークバー・スクリプト。
## セッティング
ブックマークバーを右クリック→ページを追加→url欄に以下をコピペして保存
```
javascript:(a=>{const e=[...document.querySelectorAll("#bodyContent a:not(.mw-file-description)")].filter((e=>new URLPattern("https://ja.wikipedia.org/wiki/:title").test(e.href))),n=e[Math.floor(Math.random()*e.length)];n.classList.add("link");const t=new CSSStyleSheet;t.replaceSync(".link{border:2px solid #36CF;animation:waving .5s linear infinite;}@keyframes waving{0%{border-color:#36CF;}50%{border-color:#36C0;}100%{border-color:#36CF;}}"),document.adoptedStyleSheets=[t],n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),n.focus({preventScroll:!0}),a.click&&setTimeout((()=>n.click()),1e3*a.delay)})({click:true,delay:1})
```
## 使い方
[wikipediaの適当な記事](https://ja.wikipedia.org/wiki/%E7%89%B9%E5%88%A5:%E3%81%8A%E3%81%BE%E3%81%8B%E3%81%9B%E8%A1%A8%E7%A4%BA)を開いた後にブックマークをクリックすると、自動で記事内のリンクをクリックしてくれる。<br>
たまに特別ページや編集者ページに行く事もある。<br>
今のところchromeOSで動作確認済。
## 改善案
拡張機能とか全然わからないからブックマークで実装しています。<br>
拡張機能として実装してくれる方などいましたら大歓迎です。
