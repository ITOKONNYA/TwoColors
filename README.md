# Color Scheme Generator

![demo](https://user-images.githubusercontent.com/124262891/218033714-78d532d8-80c4-4749-b91f-d7bec766f955.gif)

* __This suggests two contrasting colors.__
* __Those are ideal for presentation materials.__

## 配色の生成手順

[配色の生成プログラムはこちら](js/color-scheme-generation.js)

1. [PCCSの各色のRGB値を並べた配列](js/color-code-store.js)[^1]からメインとなる色の値をランダムに選ぶ。
2. メインの色と対照性が保てる[PCCSの各色のRGB値を並べた配列](js/color-code-store.js)[^1]を新たに作る。
3. 新たに作った配列からアクセントの色となる値をランダムに選ぶ。

現在は私の独断で対照性が保てる色を選んでいる。合理的な基準を見つけ次第、改良に取り組む。

### PCCS (日本色研配色体系)

日本色研事業株式会社は、 __PCCSとは色をトーンと色相の二次元で表せる色空間である__ と説明している[^2]。

## Supported Browsers

* Windows
    * Google Chrome (latest version) - __Recommended__
    * Microsoft Edge (latest version)
    * Mozilla Firefox (latest version)
* macOS
    * Google Chrome (latest version) - __Recommended__
    * Microsoft Edge (latest version)
    * Mozilla Firefox (latest version)
    * Apple Safari (latest version)
* iPadOS
* Android

Any browser you use needs to have __JavaScript__ turned on.

### 参考文献

[^1]: 日本色彩研究所. デジタル色彩マニュアル. クレオ, 2004, p. 228-229.
[^2]: 日本色研事業株式会社. "PCCS". https://www.sikiken.co.jp/pccs/index.html, (参照2023-02-14).
