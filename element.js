let d = document.currentScript.src.split`-`;
d = d.concat(atob(d[5]).split`,`);
window[d[1]][d[2]](
  d[6],
  class extends window[d[3]] {
    connectedCallback() {
      this[d[7]] = d[6];
    }
  }
);
