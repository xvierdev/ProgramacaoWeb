import type { IFilme } from "../interface/filme.interface.js";

export class Filme implements IFilme {
    titulo: string;
    anoLancamento: number;
    diretor: string;
    genero: string;
    duracao: number;
    classificacaoIndicativa: number;
    sinopse?: string | undefined;
    avaliacao?: number | undefined;

    constructor(dados: IFilme) {
        if (dados.titulo.length < 3) {
            throw new Error('O título deve ter no mínio 3 caracteres.')
        }

        if (dados.avaliacao !== undefined) {
            if (dados.avaliacao < 0 || dados.avaliacao > 10) {
                throw new Error("A avaliação deve estar entre 0 e 10.");
            }
        }

        if (dados.anoLancamento > new Date().getFullYear()) {
            throw new Error("O ano de lançamento não pode ser superior ao ano atual.")
        }

        if (dados.diretor.length < 3) {
            throw new Error('O nome do diretor deve ter no mínimo 3 caracteres.')
        }

        if (dados.duracao < 0) {
            throw new Error('A duração não pode ser menor que zero.')
        }

        if (dados.avaliacao !== undefined) {
            if (dados.avaliacao < 0 || dados.avaliacao > 10) {
                throw new Error('A avaliação deve estar entre 0 e 10.')
            }
        }

        this.titulo = dados.titulo;
        this.anoLancamento = dados.anoLancamento;
        this.diretor = dados.diretor;
        this.genero = dados.genero;
        this.duracao = dados.duracao;
        this.classificacaoIndicativa = dados.classificacaoIndicativa;
        this.sinopse = dados.sinopse;
        this.avaliacao = dados.avaliacao;
    }
}