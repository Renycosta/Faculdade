import { describe, expect, test } from "@jest/globals";
import { Funcionario } from "./Funcionario";
import { Fornecedor } from "./Fornecedor";

describe("O funcionário que for desligado do sistema deve ficar inativo.", () => {
    test("Funcionário deve ficar inativo.", () => {
        const Funcionario1: Funcionario = new Funcionario();

        Funcionario1.Inativo();

        expect(Funcionario1.status).toBe("Inativo")
    }) 
})

describe("O fornecedor pode ser inativo por qualquer funcionario da empresa.", () => {
    test("Fornecedor deve ficar inativo.", () => {
        const Fornecedor1: Fornecedor = new Fornecedor();
        const Funcionario1: Funcionario = new Funcionario();
        Funcionario1.fornecedorResponsavel = Fornecedor1

        Funcionario1.InativarFornecedor

        expect(Fornecedor1.status).toBe("Inativo")
    })
})