import { Filme } from "./filme.class.js";

export class ListaFilmes {
    private lista: Filme[] = [];

    adicionarFilme(filme: Filme): void {
        this.lista.push(filme);
    }

    obterFilmes(): Filme[] {
        return this.lista;
    }

    obterFilmePorTitulo(titulo: string): Filme | undefined {
        return this.lista.find(filme => filme.titulo === titulo);
    }

    removerFilmePorTitulo(titulo: string): void {
        this.lista = this.lista.filter(filme => filme.titulo !== titulo);
    }

    atualizarFilme(titulo: string, filmeAtualizado: Partial<Filme>): void {
        const filme = this.obterFilmePorTitulo(titulo);
        if (filme) {
            Object.assign(filme, filmeAtualizado);
        }
    }
}