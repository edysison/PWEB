class Aluno1 {
    constructor(nome){
        this.Nome = nome
    }
    getNome(){
        return this.Nome
    }
}
alert(new Aluno1("Nome1").getNome())

let Aluno2 = {}
Aluno2.Nome = "Nome2"
alert(Aluno2.Nome)

function Aluno3(){};
Aluno3.prototype.Nome = "Nome3";
alert(new Aluno3().Nome)