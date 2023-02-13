# Color Scheme Generator

![demo](https://user-images.githubusercontent.com/124262891/218033714-78d532d8-80c4-4749-b91f-d7bec766f955.gif)

* __This suggests two contrasting colors.__
* __Those are ideal for presentation materials.__

## 配色の生成手順

1. PCCSの各色のRGB値[^1]を並べた配列からメインとなる色の値をランダムに選ぶ。
2. メインの色と対照性が保てるPCCSの各色のRGB値[^1]を並べた配列を新たに作る。
3. 新たに作った配列からアクセントの色となる値をランダムに選ぶ。

現在は、私の独断で対照性が保てる色を選んでいる。合理的な判断基準を模索している。

#### PCCS (日本色研配色体系)

日本色研事業株式会社は、PCCSはトーンと色相という二つの属性によって、色を二次元で表すことができる色空間と説明している[^2]。

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

[^1]: 日本色彩研究所. デジタル色彩マニュアル. クレオ, 2004, pp.228-229
[^2]: 日本色研事業株式会社. "PCCS". https://www.sikiken.co.jp/pccs/index.html, 2023-02-14.
