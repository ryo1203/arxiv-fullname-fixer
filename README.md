# ArXiv Fullname Search Fixer

**[English]** A simple Chrome extension that fixes author links on [arXiv.org](https://arxiv.org).  
By default, clicking an author's name on arXiv searches for `Surname, Initial` (e.g., `Doe, J`). This extension automatically rewrites the link to search for the **Full Name** displayed on the page (e.g., `"John Doe"`), ensuring more accurate search results.

**[日本語]** [arXiv.org](https://arxiv.org) の著者リンクの挙動を修正するシンプルなChrome拡張機能です。  
arXivのデフォルト仕様では、著者名をクリックすると「姓, イニシャル」（例: `Doe, J`）で検索されますが、この拡張機能を入れると、画面に表示されている**フルネーム**（例: `"John Doe"`）で検索するように自動的にリンクを書き換えます。これにより、同姓同名の別人が検索結果に混ざるのを防ぎます。

---

## Features / 特徴

- **Smart Rewriting**: Converts `query=Doe, J` to `query="John Doe"`.
- **Lightweight**: Zero impact on page load time. It processes links only when you interact with them (hover/click).
- **Universal**: Works on paper detail pages, submission lists, and search results.
- **スマートな書き換え**: 検索クエリを「姓, イニシャル」から「"フルネーム"」へ自動変換します。
- **超軽量**: ページ読み込み時には動作せず、マウスオーバーやクリックした瞬間にだけ動作するため、ブラウザが重くなりません。
- **どこでも動作**: 論文詳細ページ、新着リスト、検索結果画面など、arXiv内のあらゆる場所で機能します。

## Installation / インストール方法

Since this is not yet in the Chrome Web Store, you need to load it manually:
Chromeウェブストアには未公開のため、以下の手順で手動インストールしてください：

1. **Download**: Clone this repository or download the ZIP file and extract it.
   （このリポジトリをCloneするか、ZIPでダウンロードして解凍します）
2. **Open Extensions**: Open Chrome and navigate to `chrome://extensions`.
   （Chromeのアドレスバーに `chrome://extensions` と入力して開きます）
3. **Developer Mode**: Toggle **"Developer mode"** on in the top right corner.
   （右上の「デベロッパーモード」をONにします）
4. **Load**: Click **"Load unpacked"** and select the folder containing these files.
   （「パッケージ化されていない拡張機能を読み込む」をクリックし、ダウンロードしたフォルダを選択します）

## License / ライセンス

MIT License

---

## Acknowledgment / 謝辞

Code and documentation generated with the assistance of Gemini.  
コードとドキュメントはGeminiの支援により作成されました。