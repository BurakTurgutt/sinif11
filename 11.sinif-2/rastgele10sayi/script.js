const tek = document.getElementById("aa");
const cift = document.getElementById("bb");
const tekTane=document.getElementById("tekAdet");
const ciftTane=document.getElementById("ciftAdet");
let tekAdet = 0;
let ciftAdet = 0;

for (let i = 0; i < 100; i++) {
    let sayi = Math.floor(Math.random() * 100);
    const h = document.createElement("h2");
    h.className = "yazi";
    h.innerHTML = sayi.toFixed(0);
    if (sayi % 2 !== 0) {
        tek.appendChild(h);
        tekAdet=tekAdet+1;
    }
    else if (sayi % 2 == 0) {
        ciftAdet=ciftAdet+1;
        cift.appendChild(h)
    }
}

tekTane.innerHTML="Tek Sayi Adeti:  "+tekAdet;
ciftTane.innerHTML="Çift Sayi Adeti:  "+ciftAdet;
cift.style.display="none"