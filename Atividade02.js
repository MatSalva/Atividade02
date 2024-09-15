let livro = {
    Titulo : "A Sociedade do Anel",
    Autor : "John Ronald Reuel Tolkien",
    AnodePublicacao : 1954,
    Genero : "Fantasia, Literatura Fantástica",
}

let Editora = false
for (let prop in livro){
    if(prop === "Editora"){
        Editora = true
        break
    }
}

if (!Editora){
    livro.Editora = "HarperCollins"
}

console.log(livro)