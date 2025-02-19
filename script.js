function crearPost() {
    let contenido = document.getElementById("post-content").value;
    if (contenido.trim() === "") return;

    let post = document.createElement("div");
    post.classList.add("post");
    post.innerHTML = `<p>${contenido}</p>`;

    document.getElementById("feed").prepend(post);
    document.getElementById("post-content").value = "";
}