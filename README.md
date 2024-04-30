# F-IT 〜first-it〜

# テキストからシーケンス図など<br>各種 UML を作成する Web アプリ

このプロジェクトは、複数の AI を活用した Web アプリケーションです。<br>
動作の概要については「動作の流れ.txt」を、<br>
動作時の画面収録動画は[こちら](https://youtu.be/07NAbAeBqbc?si=Qslk7mJXpJko63_6)をご覧ください。<br>
<br>
○ 使用ツール(「⭐︎」がこのコードで使用)<br>
<br>
・フロントエンド<br>
⭐︎React (typescript)<br>
・バックエンド<br>
Django (Python Djoser のメール認証機能)<br>
⭐︎Node.js (JavaScript)<br>
<br>
・AI 技術<br>
⭐︎ChatGPT API<br>
⭐︎Mermaid<br>
<br>
・Docker<br>
Docker Compose<br>
(フロントエンド(nginx)・バックエンド のコンテナ 2 つ)<br>
・サーバー<br>
AWS<br>
(インターネット → ELB → EC2 → nginx → Docker Compose<br>
ACM の証明書で HTTPS 化)<br>
⭐︎Heroku<br>
・ドメイン<br>
⭐︎ お名前.com<br>
<br>
・DB<br>
SQLite<br>
⭐︎MySQL<br>
⭐︎PostgreSQL<br>
Heroku アドオン (⭐︎Heroku Postgres ⭐︎ClearDB)<br>
<br>
・CSS<br>
⭐︎Tailwind CSS<br>
⭐︎Bootstrap<br>
⭐︎Material UI<br>
<br>
This software is released under the MIT License, see LICENSE.txt.<br>
<br>
![サンプル画像①](https://github.com/klose-kfp/React-Node.js_Heroku/blob/main/webpack-react/src/images/README1.png)
<br>
<br>
![サンプル画像②](https://github.com/klose-kfp/React-Node.js_Heroku/blob/main/webpack-react/src/images/README2.png)
