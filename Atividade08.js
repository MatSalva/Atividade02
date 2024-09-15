const filmes = [
    { titulo: "Túmulo dos Vagalumes", diretor: "Isao Takahata", anoLancamento: 1989 },
    { titulo: "A viagem de Chihiro", diretor: "Hayo Miyazaki", anoLancamento: 2003 },
    { titulo: "Princesa Mononoke", diretor: "Hayo Miyazaki", anoLancamento: 1999 },
    { titulo: "Osmose Jones", diretor: "Bobby Farrelly, Peter Farrelly, Piete Kroon e Tom Sitio", anoLancamento: 2001 },
    { titulo: "Deu a Louca na Chapeuzinho", diretor: "Cory Edwards, Todd Edwards e Tony Leech", anoLancamento: 2006 }
  ]
  
  const titulosFilmes = []
  
  filmes.forEach(filme => {
    titulosFilmes.push(filme.titulo)
  })
  
  console.log(titulosFilmes)