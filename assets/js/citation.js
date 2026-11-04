(() => {
  for (const button of document.querySelectorAll('[data-copy-target]')) {
    button.addEventListener('click', async () => {
      const code = document.getElementById(button.dataset.copyTarget);
      const status = button.closest('.citation-block').querySelector('[role="status"]');
      if (!code) return;
      try {
        await navigator.clipboard.writeText(code.textContent);
        status.textContent = 'BibTeX copied.';
        button.textContent = 'Copied!';
      } catch {
        // Local file previews may not allow clipboard access. Select the text
        // so it can still be copied using the keyboard.
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(code);
        selection.removeAllRanges();
        selection.addRange(range);
        status.textContent = 'BibTeX selected. Press Ctrl+C or Command+C to copy.';
      }
    });
  }
})();
