const alunos = [
    { nome: "Karol", nota1: 1.5, nota2: 2.0 },
    { nome: "Matheus", nota1: 9.0, nota2: 9.5 },
    { nome: "Tubino", nota1: 6.5, nota2: 7.0 },
    { nome: "Ana", nota1: 8.0, nota2: 9.5 }
]

for (const aluno of alunos) {
    const media = (aluno.nota1 + aluno.nota2) / 2;
    console.log(`${aluno.nome}: Média = ${media.toFixed(2)}`)
}