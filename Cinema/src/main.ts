import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { ListaFilmes } from './models/catalogo.class.js';
import { Filme } from './models/filme.class.js';
import { preCarga } from './samples/carga.js';

const rl = readline.createInterface({ input, output });
const catalogo = new ListaFilmes();

async function main() {

    console.log('Bem-vindo ao Catálogo de Filmes!');
    while (true) {
        console.log('\n1. Adicionar | 2. Listar | 3. Detalhes | 4. Editar | 5. Remover | 6. Sair');
        const escolha = await rl.question('Escolha: ');

        switch (escolha) {
            case '1': // Adicionar filme
                try {
                    const titulo: string = (await rl.question('Nome do filme: ')).trim();
                    const anoLancamento: number = Number(await rl.question('Ano de lançamento: '));
                    const diretor: string = await rl.question('Nome do diretor: ');
                    const genero = await rl.question('Gênero: ');
                    const duracao = Number(await (rl.question('Duração em minutos: ')));
                    const classificacaoIndicativa = Number(await rl.question('Classificação indicativa (somente números): '))
                    const sinopse = await (rl.question('Sinopse: '));
                    const avaliacao = Number(await (rl.question('Avaliação (0 - 10): ')));
                    const filme = new Filme({
                        titulo,
                        anoLancamento,
                        diretor,
                        genero,
                        duracao,
                        classificacaoIndicativa,
                        sinopse,
                        avaliacao
                    });
                    catalogo.adicionarFilme(filme);
                } catch (e: any) {
                    console.error("Erro na entrada de dados:", e.message);
                    break;
                }

            case '2': // Listar filmes
                const itens = catalogo.obterFilmes();
                if (itens.length === 0) {
                    console.log('Nenhum filme cadastrado.');
                } else {
                    console.log('Filmes cadastrados:');
                    itens.forEach((item) => {
                        console.log(`${item.codigo}. ${item.titulo} - ${item.genero} - Avaliação: ${item.avaliacao}`);
                    });
                }
                break;


            case '3': // Detalhes do filme
                const codigo = await rl.question('Código do filme para detalhes: ');
                const filmeDetalhes = catalogo.obterFilmePorCodigo(Number(codigo));
                if (filmeDetalhes) {
                    console.log(`Título: ${filmeDetalhes.titulo}`);
                    console.log(`Ano de Lançamento: ${filmeDetalhes.anoLancamento}`);
                    console.log(`Diretor: ${filmeDetalhes.diretor}`);
                    console.log(`Gênero: ${filmeDetalhes.genero}`);
                    console.log(`Duração: ${filmeDetalhes.duracao} minutos`);
                    console.log(`Classificação Indicativa: ${filmeDetalhes.classificacaoIndicativa}+`);
                    console.log(`Sinopse: ${filmeDetalhes.sinopse}`);
                    console.log(`Avaliação: ${filmeDetalhes.avaliacao}/10`);
                } else {
                    console.log(`Filme "${codigo}" não encontrado.`);
                }
                break;

            case '4': // Editar filme
                const codEditar = Number(await rl.question('Código do filme para editar: '));
                const filmeEditar = catalogo.obterFilmePorCodigo(codEditar);
                if (filmeEditar) {
                    const novoTitulo = await rl.question(`Novo título (deixe em branco para manter "${filmeEditar.titulo}"): `);
                    const novaSinopse = await rl.question(`Nova sinopse (deixe em branco para manter a atual): `);
                    const novaAvaliacaoStr = await rl.question(`Nova avaliação (0-10, deixe em branco para manter ${filmeEditar.avaliacao}): `);

                    const filmeAtualizado: Partial<Filme> = {};
                    if (novoTitulo.trim() !== '') filmeAtualizado.titulo = novoTitulo;
                    if (novaSinopse.trim() !== '') filmeAtualizado.sinopse = novaSinopse;
                    if (novaAvaliacaoStr.trim() !== '') {
                        const novaAvaliacao = Number(novaAvaliacaoStr);
                        if (!isNaN(novaAvaliacao) && novaAvaliacao >= 0 && novaAvaliacao <= 10) {
                            filmeAtualizado.avaliacao = novaAvaliacao;
                        } else {
                            console.log('Avaliação inválida. Deve ser um número entre 0 e 10.');
                        }
                    }

                    try {
                        catalogo.atualizarFilme(codEditar, filmeAtualizado);
                        console.log(`Filme "${novoTitulo}" (Código: ${codEditar}) atualizado com sucesso.`);
                    } catch (e: any) {
                        console.error("Erro:", e.message);
                    }
                } else {
                    console.log(`Filme "${codEditar}" não encontrado.`);
                }
                break;

            case '5': // Remover filme
                const codRemover = Number(await rl.question('Código do filme a remover: '));
                let ftitle: string | undefined = catalogo.obterFilmePorCodigo(codRemover)?.titulo;
                if (catalogo.removerFilmePorCodigo(codRemover)) {
                    console.log(`Filme "${ftitle}" (Código: ${codRemover}) removido com sucesso.`);
                } else {
                    console.log(`Filme "${codRemover}" não encontrado.`);
                }
                break;

            case '6':
                console.log('Saindo...');
                rl.close();
                return;

            default:
                console.log('Opção inválida. Tente novamente.');
        }
    }
}

preCarga(catalogo); // Carrega filmes iniciais para teste e demonstração.
main();