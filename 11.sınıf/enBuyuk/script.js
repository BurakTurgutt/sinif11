function bul() {
    let sayi1 = Number(document.getElementById("sayi1").value);
    let sayi2 = Number(document.getElementById("sayi2").value);
    let sayi3 = Number(document.getElementById("sayi3").value);

    let buyuk=0;

    if (sayi1 > sayi2 && sayi3) {
        buyuk = sayi1;
    }
    else if (sayi2 > sayi3 && sayi1) {
        buyuk = sayi2;
    }

    else if (sayi3 > sayi2 && sayi1) {
        buyuk = sayi3;
    }

    const yaz=document.getElementById("yaz");
    yaz.innerText=buyuk;
}