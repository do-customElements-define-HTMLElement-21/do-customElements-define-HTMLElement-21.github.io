console.log(document.currentScript.src);

let d = document.currentScript.src.split`-`;
d = d.concat(atob(d[5]).split`,`);

console.log("%c Dictionary: \n","background:red",d.map((word,idx)=>console.log(idx,word)));

window[d[1]][d[2]]( d[6], class extends window[d[3]] {
    connectedCallback() {
      this[d[7]] = d[6];
    }
  }
);