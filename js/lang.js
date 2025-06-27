function switchLang(lang) {
  document.querySelectorAll('[data-lang-id]').forEach(el => {
    const text = el.getAttribute(`data-lang-${lang}`);
    if (text) el.innerText = text;
  });
}
