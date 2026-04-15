import type { ListaFilmes } from "../models/catalogo.class.js";
import { Filme } from "../models/filme.class.js";

/**
 * Realiza a carga inicial de filmes clássicos e franquias no catálogo.
 */
export function preCarga(catalogo: ListaFilmes): void {
    // --- Matrix (Trilogia Original) ---
    const matrix1 = new Filme({
        titulo: "Matrix",
        anoLancamento: 1999,
        diretor: "Lana Wachowski, Lilly Wachowski",
        genero: "Ficção Científica, Ação",
        duracao: 136,
        classificacaoIndicativa: 14,
        sinopse: "Um programador descobre que a realidade é uma simulação criada por máquinas.",
        avaliacao: 8.7
    });

    const matrix2 = new Filme({
        titulo: "Matrix Reloaded",
        anoLancamento: 2003,
        diretor: "Lana Wachowski, Lilly Wachowski",
        genero: "Ficção Científica, Ação",
        duracao: 138,
        classificacaoIndicativa: 14,
        sinopse: "Neo e os rebeldes lutam contra o exército de máquinas que ataca Zion.",
        avaliacao: 7.2
    });

    const matrix3 = new Filme({
        titulo: "Matrix Revolutions",
        anoLancamento: 2003,
        diretor: "Lana Wachowski, Lilly Wachowski",
        genero: "Ficção Científica, Ação",
        duracao: 129,
        classificacaoIndicativa: 14,
        sinopse: "A conclusão da guerra épica entre humanos e máquinas.",
        avaliacao: 6.7
    });

    // --- Ficção e Espiritualidade ---
    const interstellar = new Filme({
        titulo: "Interestelar",
        anoLancamento: 2014,
        diretor: "Christopher Nolan",
        genero: "Ficção Científica, Drama",
        duracao: 169,
        classificacaoIndicativa: 10,
        sinopse: "Uma equipe de exploradores viaja através de um buraco de minhoca no espaço para garantir a sobrevivência da humanidade.",
        avaliacao: 8.7
    });

    const pequenoBuda = new Filme({
        titulo: "Pequeno Buda",
        anoLancamento: 1993,
        diretor: "Bernardo Bertolucci",
        genero: "Drama",
        duracao: 140,
        classificacaoIndicativa: 0, // Livre
        sinopse: "Monges tibetanos acreditam que um menino americano é a reencarnação de um de seus líderes espirituais.",
        avaliacao: 7.0
    });

    const constantine = new Filme({
        titulo: "Constantine",
        anoLancamento: 2005,
        diretor: "Francis Lawrence",
        genero: "Fantasia, Terror",
        duracao: 121,
        classificacaoIndicativa: 14,
        sinopse: "O ocultista John Constantine ajuda uma policial a investigar a morte de sua irmã.",
        avaliacao: 7.0
    });

    // --- Senhor dos Anéis (Trilogia) ---
    const lotr1 = new Filme({
        titulo: "O Senhor dos Anéis: A Sociedade do Anel",
        anoLancamento: 2001,
        diretor: "Peter Jackson",
        genero: "Fantasia, Aventura",
        duracao: 178,
        classificacaoIndicativa: 12,
        sinopse: "Um jovem hobbit recebe a missão de destruir um anel amaldiçoado.",
        avaliacao: 8.9
    });

    const lotr2 = new Filme({
        titulo: "O Senhor dos Anéis: As Duas Torres",
        anoLancamento: 2002,
        diretor: "Peter Jackson",
        genero: "Fantasia, Aventura",
        duracao: 179,
        classificacaoIndicativa: 12,
        sinopse: "A Sociedade do Anel é dividida enquanto tentam impedir o avanço de Saruman.",
        avaliacao: 8.8
    });

    const lotr3 = new Filme({
        titulo: "O Senhor dos Anéis: O Retorno do Rei",
        anoLancamento: 2003,
        diretor: "Peter Jackson",
        genero: "Fantasia, Aventura",
        duracao: 201,
        classificacaoIndicativa: 12,
        sinopse: "O confronto final entre as forças do bem e do mal pelo controle da Terra Média.",
        avaliacao: 9.0
    });

    // --- Minha Mãe é uma Peça ---
    const minhaMae1 = new Filme({
        titulo: "Minha Mãe é uma Peça",
        anoLancamento: 2013,
        diretor: "André Pellenz",
        genero: "Comédia",
        duracao: 84,
        classificacaoIndicativa: 12,
        sinopse: "Dona Hermínia é uma mulher de meia-idade que decide sair de casa após ouvir críticas dos filhos.",
        avaliacao: 7.4
    });

    const minhaMae2 = new Filme({
        titulo: "Minha Mãe é uma Peça 2",
        anoLancamento: 2016,
        diretor: "César Rodrigues",
        genero: "Comédia",
        duracao: 92,
        classificacaoIndicativa: 12,
        sinopse: "Hermínia agora é rica e famosa, mas precisa lidar com a partida dos filhos de casa.",
        avaliacao: 7.1
    });

    const minhaMae3 = new Filme({
        titulo: "Minha Mãe é uma Peça 3",
        anoLancamento: 2019,
        diretor: "Susana Garcia",
        genero: "Comédia",
        duracao: 111,
        classificacaoIndicativa: 12,
        sinopse: "Dona Hermínia precisa se redescobrir enquanto os filhos formam suas próprias famílias.",
        avaliacao: 7.2
    });

    // --- Adicionando todos ao catálogo ---
    const listaParaAdicionar = [
        matrix1, matrix2, matrix3,
        interstellar, pequenoBuda, constantine,
        lotr1, lotr2, lotr3,
        minhaMae1, minhaMae2, minhaMae3
    ];

    listaParaAdicionar.forEach(filme => catalogo.adicionarFilme(filme));
}