function ortalama()
{
    let not1=Number(document.getElementById("not1").value);
    let not2=Number(document.getElementById("not2").value);

    let ort=(not1+not2)/2;

    document.getElementById("ortalam").innerText="ortalam :"+ort;
}