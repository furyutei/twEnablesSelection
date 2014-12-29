twEnablesSelection
==================
Twitterのテキストを範囲選択（コピー）可能なようにするユーザースクリプト
- License: The MIT license  
- Copyright (c) 2014 風柳(furyu)  
- 対象ブラウザ： Firefox（[Greasemonkey](https://addons.mozilla.org/ja/firefox/addon/greasemonkey/)が必要）、Google Chrome（[Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=ja)が必要）


■ twEnablesSelectionとは？
---
[公式ウェブ版Twitter](https://twitter.com/) で、2014年12月24日頃に発生したと思われる下記の不具合(?)を暫定的に改善します。  

- タイムライン上でツイート中のテキストが範囲選択（コピー）できない（クリック扱いとなり、選択解除されてツイート詳細が開閉）→[発生例](https://www.youtube.com/watch?v=hgRO1VUgdLg)  
- 画像やリプライを含む等して縦に長い個別ツイート画面で不正なスクロールが発生(下にスクロールしようとしても上に戻ってしまう) →[発生例](https://www.youtube.com/watch?v=6W5OlSoZl5I)  

公式で対応されたら無意味となってしまう、はかないスクリプトです。  


■ インストール方法
---
[Greasemonkey](https://addons.mozilla.org/ja/firefox/addon/greasemonkey/)を入れたFirefox、もしくは[Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=ja)を入れたGoogle Chromeにて、  

> [twEnablesSelection.user.js](https://github.com/furyutei/twEnablesSelection/raw/master/twEnablesSelection.user.js)  

をクリックし、指示に従ってインストール。  


■ 関連記事
---
- [Twitterからのクリスマスプレゼントが酷かった件 - 風柳メモ](http://d.hatena.ne.jp/furyu-tei/20141226/1419588150)  
- [Google ChromeへのTampermonkeyのインストールと基本的な使い方 - 風柳メモ](http://d.hatena.ne.jp/furyu-tei/20141227/1419609930)  
