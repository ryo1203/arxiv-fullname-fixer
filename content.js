/**
 * ArXiv Fullname Search Fixer
 * * This script modifies author links on arXiv to use the full name visible on the page
 * for the search query, rather than the default "Surname, Initial" format.
 * * arXivの著者リンクを、デフォルトの「姓, イニシャル」形式ではなく、
 * ページ上に表示されている「フルネーム」で検索するように修正します。
 */

// Events to monitor / 監視するイベント
// - mouseover: For link preview updates / リンクプレビューの更新用
// - focus: For keyboard navigation / キーボード操作用
// - mousedown: For immediate clicks (prevents issues with "Open in new tab") / クリック時（「新しいタブで開く」等の対策）
// - touchstart: For touch devices / タッチデバイス用
const events = ['mouseover', 'focus', 'mousedown', 'touchstart'];

events.forEach(eventType => {
    document.addEventListener(eventType, function(e) {
        // Check if the target is an author search link and hasn't been fixed yet
        // ターゲットが著者検索リンクであり、かつまだ修正されていないか確認
        const link = e.target.closest('a[href*="searchtype=author"]:not([data-fixed])');

        if (link) {
            // Get the full name text displayed on the page
            // ページに表示されているフルネームを取得
            const fullName = link.textContent.trim();
            
            // Do nothing if the name is empty
            // 名前が空の場合は何もしない
            if (!fullName) return;

            try {
                // Parse the current URL
                // 現在のURLを解析
                const url = new URL(link.href, document.baseURI);
                
                // Set the search query to the full name (enclosed in quotes for exact match)
                // 検索クエリをフルネームに設定（完全一致のためダブルクォートで囲む）
                url.searchParams.set('query', `"${fullName}"`);
                
                // Update the link href
                // リンクのhref属性を更新
                link.href = url.toString();

                // Mark as fixed to avoid redundant processing
                // 重複処理を防ぐために「修正済み」フラグを立てる
                link.dataset.fixed = "true";
                
            } catch (err) {
                // Log error but allow the default link behavior
                // エラー時はログを出力し、デフォルトのリンク動作を許可
                console.debug("ArXiv Fixer skipped a link due to error:", err);
            }
        }
    }, { passive: true, capture: true }); // Use passive/capture for better performance / パフォーマンス優先の設定
});