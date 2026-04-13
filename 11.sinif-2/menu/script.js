const hesapYaz = document.createElement("h2");
hesapYaz.className = "listYemek";
listKapsa.appendChild(hesapYaz); listFiyat.className = "listFiyat";

function olustur() {
    const listDiv = document.getElementById("liste");
    const listKapsa = document.createElement("div");
    const listYemek = document.createElement("h2");
    const listFiyat = document.createElement("h2");

    listKapsa.className = "listKapsa";
    listYemek.className = "listYemek";
    listFiyat.className = "listFiyat";

    listKapsa.appendChild(listYemek);
    listKapsa.appendChild(listFiyat);
    listDiv.appendChild(listKapsa);

    return {
        listYemek, listFiyat, hesapYaz
    }
}
let hesap = 0;
function ekle(yemekisim, yemekfiyat) {
    const elemanlar = olustur()
    elemanlar.listYemek.innerHTML = yemekisim;
    elemanlar.listFiyat.innerHTML = yemekfiyat + " ₺";
    hesap = hesap + yemekfiyat;
    elemanlar.hesapYaz.innerHTML = hesap;

    const hesapYaz = document.createElement("h2");
    hesapYaz.className = "listYemek";
    listKapsa.appendChild(hesapYaz); listFiyat.className = "listFiyat";
}