function topla() {
    let sayi1 = Number(document.getElementById("sayi1").value);
    let sayi2 = Number(document.getElementById("sayi2").value);

    let sonuc = sayi1 + sayi2;

    document.getElementById("sonuc").innerText = "sonuc: " + sonuc;
}