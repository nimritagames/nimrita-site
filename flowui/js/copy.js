// Copy-to-clipboard for code blocks
(function() {
  var blocks = document.querySelectorAll('.code-block');

  blocks.forEach(function(block) {
    var header = block.querySelector('.code-block__header');
    if (!header) return;

    // Skip if copy button already exists
    if (header.querySelector('.code-block__copy')) return;

    var btn = document.createElement('button');
    btn.className = 'code-block__copy';
    btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> <span>Copy</span>';

    btn.addEventListener('click', function() {
      var pre = block.querySelector('pre');
      if (!pre) return;

      var text = pre.textContent;
      navigator.clipboard.writeText(text).then(function() {
        btn.classList.add('code-block__copy--copied');
        btn.querySelector('span').textContent = 'Copied!';
        setTimeout(function() {
          btn.classList.remove('code-block__copy--copied');
          btn.querySelector('span').textContent = 'Copy';
        }, 2000);
      });
    });

    header.appendChild(btn);
  });
})();
