import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { ListaFilmes } from './models/catalogo.class.js';
import { Filme } from './models/filme.class.js';

const rl = readline.createInterface({ input, output });
const catalogo = new ListaFilmes();

async function main() {
    while (true) {
        console.log('\n1. Adicionar | 2. Listar | 3. Remover | 4. Sair');
        const escolha = await rl.question('Escolha: ');

        switch (escolha) {
            case '1':
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

                try {
                    catalogo.adicionarFilme(filme);
                    break;
                } catch (e: any) {
                    console.error("Erro:", e.message);
                }
                break;

            case '2':
                const itens = catalogo.obterFilmes();
                if (itens.length === 0) {
                    console.log('Nenhum filme cadastrado.');
                } else {
                    console.log('Filmes cadastrados:');
                    itens.forEach((item, index) => {
                        console.log(`${index + 1}. ${item.titulo} - Avaliação: ${item.avaliacao}`);
                    });
                }
                break;

            case '3':
                const nomeRemover = await rl.question('Nome do filme a remover: ');
                catalogo.removerFilmePorTitulo(nomeRemover);
                console.log('Filme removido, se existia.');
                break;

            case '4':
                console.log('Saindo...');
                rl.close();
                return;

            default:
                console.log('Opção inválida. Tente novamente.');
        }
    }
}


main();