function ortalama()
{
    let not1=Number(document.getElementById("not1").value)*0.40;
    let not2=Number(document.getElementById("not2").value)*0.40;
    let yazili1=Number(document.getElementById("yazili1").value)*0.10;
    let yazili2=Number(document.getElementById("yazili2").value)*0.10;
    let ortalama=not1+not2+yazili1+yazili2;
    document.getElementById("oratlama").innerText=ortalama;
}