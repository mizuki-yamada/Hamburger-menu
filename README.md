# Hamburger-menu
- ドットインストール「JavaScriptでハンバーガーメニューを作ろう」模写

## 2回目
- 学びを書いていく
- viewport
    - htmlの`<meta name="viewport" content="width=device-width, initial-scale=1.0">`の部分
    - レスポンシブにしたい時使う
- line-height
- 背景として一面で覆う時
    - position:fixed
    - top, bottom, left, rightを全て0にする
- ハンバーガーメニューをクリックしても何も表示されないので、一旦コードを写経した
    - これ、最重要課題な気がする
- リストをふわっと表示させる
    - `nth-child(数字)`を使う
- htmlのタグ分け？が難しい
    - 解答を見れば、「ここからここまでをdivダグで囲めばいいのか」となるが、自力でたどり着けるかは微妙
        - このせいで、「ハンバーガーメニューをクリックしても何も表示されない」が起こった気がする
    - divなのか、spanなのか、ulの外をnavで囲むのはなぜなのかが説明できない
        - [div](https://developer.mozilla.org/ja/docs/Web/HTML/Element/div)
            - フローコンテンツの汎用コンテナー
            - 他に適切な意味的要素（`<article>` や `<nav>` など）がない場合に限り使用する
            - ブロック要素
        - [span](https://developer.mozilla.org/ja/docs/Web/HTML/Element/span)
            - インライン要素（divとの違い）
            - 他に適切な意味的要素（`<article>` や `<nav> `など）がない場合に限り使用するという点で、divと同義
            - 許可されている親要素がdivと異なる
                - 記述コンテンツとフローコンテンツ両方OK（divはフローコンテンツのみ）
        - [nav](https://developer.mozilla.org/ja/docs/Web/HTML/Element/nav)
            - 現在の文書内の他の部分や他の文書へのナビゲーションリンクを提供するためのセクションを表す。一般的な例としてメニュー、目次、索引
            - 使用例：リンクの番号なしリスト`(<ul>) `を包含するために `<nav> `ブロックを使用

## 3回目
