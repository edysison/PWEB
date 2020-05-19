class Retangulo {
    constructor(x, y){
        this.x = x
        this.y = y
    }
    calculaArea(){
        return x * y
    }
}
let x = parseFloat(window.prompt("Digite X"));
let y = parseFloat(window.prompt("Digite Y"));
alert(new Retangulo(x,y).calculaArea())

class Conta {
    constructor(nome, banco, numero){
        this.NomeCorrentista = nome
        this.Banco = banco
        this.NumeroConta = numero
        this.Saldo = 0
    }
    getNomeCorrentista(){
        return this.NomeCorrentista
    }
    getBanco(){
        return this.Banco
    }
    getNumeroConta(){
        return this.NumeroConta
    }
    getSaldo(){
        return this.Saldo
    }

    setNomeCorrentista(nome){
        return this.NomeCorrentista = nome
    }
    setBanco(banco){
        return this.Banco = banco
    }
    setNumeroConta(numero){
        return this.NumeroConta = numero
    }
    depositoSaldo(deposito){
        return this.Saldo += deposito
    }
    saqueSaldo(saque){
        return this.Saldo > saque ? this.Saldo -= saque : false
    }
}

class Poupanca extends Conta {
    constructor(nome, banco, numero, juros, dataVencimento){
        super(nome, banco, numero)
        this.Juros = juros
        this.DataVencimento = dataVencimento
    }
    getJuros(){
        return this.Juros
    }
    getDataVencimento(){
        return this.DataVencimento
    }

    setJuros(juros){
        return this.Juros = juros
    }
    setDataVencimento(dataVencimento){
        return this.DataVencimento = dataVencimento
    }
}
alert("Para melhor visualizar o objeto Poupança abra o console do desenvolvedor")
console.log(new Poupanca("Nome", "banco123", "numero123", 5, "10/10/2021"))

class Corrente extends Conta {
    constructor(nome, banco, numero, saldoEspecial){
        super(nome, banco, numero)
        this.SaldoEspecial = saldoEspecial
    }
    getSaldoEspecial(){
        return this.SaldoEspecial
    }

    setSaldoEspecial(saldoEspecial){
        return this.SaldoEspecial = saldoEspecial
    }
    saqueSaldo(saque){
        return this.Saldo + this.SaldoEspecial > saque ? this.Saldo -= saque : false
    }
}
alert("Para melhor visualizar o objeto Corrente abra o console do desenvolvedor")
console.log(new Corrente("Nome", "banco123", "numero123", 500))