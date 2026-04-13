function ekle() {
    const buton = document.createElement("button");
    buton.className="btn";
    buton.innerHTML="BEYPAZARI";

    const kapsa=document.getElementById("genel");

    kapsa.appendChild(buton);
}