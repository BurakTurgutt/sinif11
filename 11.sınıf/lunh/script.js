function sa() {
    var sayi = document.getElementById("sayi").value;
    var sayi1 = sayi;
    var sayac = 0;
    var dizi = [];
    var toplam = 0;
    if (sayi1.length == 16) {
        for (let i = 0; i < sayi1.length; i++) {
            dizi.push([sayi1[i]]);
        }
        for (let i = 0; i < 15; i += 2) {
            var geSayi = 0;
            var geSayi = dizi[i] * 2;
            if ((geSayi.toString()).length == 2) {
                var geDizi = [];
                for (let i = 0; i < 2; i++) {
                    geDizi.push([geSayi.toString()[i]]);
                }
                geSayi = parseInt(geDizi[0]) + parseInt(geDizi[1]);
            }

            dizi[i] = geSayi;
        }
        for (let i = 0; i < dizi.length; i++) {
            toplam += parseInt(dizi[i]);

        }
        if (toplam % 10 == 0) {
            alert("doğru");
        }

        else {
            alert("yanlis");
        }
    }
    else {
        alert("16 basamaklı ayı giriniz");
    }
}