var acc = document.getElementsByClassName('accordion');
var i;

document.addEventListener('DOMContentLoaded', function () {
  const firstPanel = acc[0].nextElementSibling;
  firstPanel.style.maxHeight = firstPanel.scrollHeight + 'px';
  firstPanel.classList.add('open');
});

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active');
    const panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.classList.remove('open');
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
      panel.classList.add('open');
    }
  });
}
