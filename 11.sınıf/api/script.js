fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
  .then(res => res.json())
  .then(posts => {

    const isim = document.getElementById("isim");
    const soyisim = document.getElementById("soyisim");

    const al = posts[2];

    isim.innerHTML = al.name;
    soyisim.innerHTML = al.email;
  });
