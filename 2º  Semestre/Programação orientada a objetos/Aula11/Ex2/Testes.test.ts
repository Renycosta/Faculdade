import { describe, expect, test } from "@jest/globals";
import { Peixe } from "./Peixe";
import { Cachorro } from "./Cachorro";
import { Gato } from "./Gato";
import { Gamba } from "./Gamba";

/*Peixe*/
describe("O método movimentar deve informar a ação do peixe.", () => {
    test("Deve informar a ação do peixe.", () => {
        const peixe: Peixe = new Peixe();

        expect(() => peixe.movimentar()).toThrow("O peixe está nadando");
    })
})

describe("O método comer deve aumentar o peso do peixe em 5%.",() => {
    test("Deve aumentar o peso do peixe.", () => {
        const peixe: Peixe = new Peixe();
        peixe.peso = 10;

        peixe.comer();

        expect(peixe.peso).toBe(10.05)
    })
})

describe("O método envelhecer deve aumentar a idade do peixe",() => {
    test("Deve aumentar a idade do peixe.", () => {
        const peixe: Peixe = new Peixe();
        peixe.idade = 1;

        peixe.envelhecer();

        expect(peixe.idade).toBe(2)
    })
})

/*Cachorro*/
describe("O método movimentar deve informar a ação do cachorro.", () => {
    test("Deve informar a ação do cahorro.", () => {
        const cachorro: Cachorro = new Cachorro();

        expect(() => cachorro.movimentar()).toThrow("O cachorro está caminhando");
    })
})

describe("O método latir deve informar que o cahorro deu um latido.", () => {
    test("Deve informar o latido do cachorro.", () => {
        const cachorro: Cachorro = new Cachorro();

        expect(() => cachorro.latir()).toThrow("O cachorro está latindo");
    })
})

describe("O método comer deve aumentar o peso do cachorro em 10%.",() => {
    test("Deve aumentar o peso do cachorro.", () => {
        const cachorro: Cachorro = new Cachorro();
        cachorro.peso = 10;

        cachorro.comer();

        expect(cachorro.peso).toBe(10.10)
    })
})

describe("O método envelhecer deve aumentar a idade do cachorro",() => {
    test("Deve aumentar a idade do cachorro.", () => {
        const cachorro: Cachorro = new Cachorro();
        cachorro.idade = 1;

        cachorro.envelhecer();

        expect(cachorro.idade).toBe(2)
    })
})

/*Gato*/
describe("O método movimentar deve informar a ação do gato.", () => {
    test("Deve informar a ação do gato.", () => {
        const gato: Gato = new Gato();

        expect(() => gato.movimentar()).toThrow("O gato está caminhando");
    })
})

describe("O método miar deve informar que o gato deu um miado.", () => {
    test("Deve informar o miado do gato.", () => {
        const gato: Gato = new Gato();

        expect(() => gato.miar()).toThrow("O gato está miando");
    })
})

describe("O método comer deve aumentar o peso do gato em 5%.",() => {
    test("Deve aumentar o peso do gato.", () => {
        const gato: Gato = new Gato();
        gato.peso = 10;

        gato.comer();

        expect(gato.peso).toBe(10.05)
    })
})

describe("O método envelhecer deve aumentar a idade do gato",() => {
    test("Deve aumentar a idade do gato.", () => {
        const gato: Gato = new Gato();
        gato.idade = 1;

        gato.envelhecer();

        expect(gato.idade).toBe(2)
    })
})

/*Gambá*/
describe("O método movimentar deve informar a ação do gambá.", () => {
    test("Deve informar a ação do gambá.", () => {
        const gamba: Gamba = new Gamba();

        expect(() => gamba.movimentar()).toThrow("O gambá está caminhando");
    })
})

describe("O método aromatizar deve informar que o gambá deu um aromatizou o ambiente.", () => {
    test("Deve informar a aromatização do gato.", () => {
        const gamba: Gamba = new Gamba();

        expect(() => gamba.aromatizar()).toThrow("O gambá aromatizou o ambiente");
    })
})

describe("O método comer deve aumentar o peso do gambá em 5%.",() => {
    test("Deve aumentar o peso do gambá.", () => {
        const gamba: Gamba = new Gamba();
        gamba.peso = 10;

        gamba.comer();

        expect(gamba.peso).toBe(10.05)
    })
})

describe("O método envelhecer deve aumentar a idade do gambá",() => {
    test("Deve aumentar a idade do gambá.", () => {
        const gamba: Gamba = new Gamba();
        gamba.idade = 1;

        gamba.envelhecer();

        expect(gamba.idade).toBe(2)
    })
})