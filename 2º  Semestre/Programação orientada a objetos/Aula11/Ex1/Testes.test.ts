import { describe, expect, test } from "@jest/globals";
import { Conta } from "./Conta";
import { ContaEspecial } from "./ContaEspecial";
import { ContaPoupanca } from "./ContaPoupanca";

/*Conta normal*/
describe("Método sacar deve retirar uma parte do saldo.", () => {
    test("Deve diminuir o número do saldo.", () => {
        const conta1: Conta = new Conta();
        conta1.saldo = 100;

        conta1.sacar(20);

        expect(conta1.saldo).toBe(80)
    })
})

describe("Método sacar não deve retirar uma quantia maior do que o saldo.", () => {
    test("Deve lançar um erro.", () => {
        const conta1: Conta = new Conta();
        conta1.saldo = 10;

        expect(() => conta1.sacar(20)).toThrow("Não é possível realizar essa transação")
    })
})

/*Conta especial*/
describe("Método sacar deve retirar uma quantia maior que o saldo, mas ser aceita por cauda do limite.", () => {
    test("Deve permitir o saque.", () => {
        const conta1: ContaEspecial = new ContaEspecial();
        conta1.saldo = 100
        conta1.limite = 500

        conta1.sacar(200)

        expect(conta1.saldo).toBe(-100)
    })
})

describe("Método sacar deve retirar uma quantia maior que o saldo e que o limite.", () => {
    test("Deve lançar um erro", () => {
        const conta1: ContaEspecial = new ContaEspecial();
        conta1.saldo = 100
        conta1.limite = 500

        expect(() => conta1.sacar(1000)).toThrow("Não é possível realizar essa transação")
    })
})

/*Conta especial*/
describe("Método taxa de rendimento deve adicionar o rendimento ao saldo.", () => {
    test("Deve aumentar o saldo", () => {
        const conta1: ContaPoupanca = new ContaPoupanca();
        conta1.saldo = 1000
        conta1.diaRendimento = true

        conta1.taxaRendimento(5)

        expect(conta1.saldo).toBe(1050)
    })
})

describe("Método taxa de rendimento não deve adicionar o rendimento ao saldo, pois não é dia do rendimento.", () => {
    test("Deve lançar um erro", () => {
        const conta1: ContaPoupanca = new ContaPoupanca();
        conta1.saldo = 1000
        conta1.diaRendimento = false

        expect(() => conta1.taxaRendimento(5)).toThrow("Ainda  não está no dia do rendimento")
    })
})