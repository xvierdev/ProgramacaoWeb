import { Filme } from "./filme.class.js";

export class ListaFilmes {
    private code: number = 1; // Contador para gerar códigos únicos
    private lista: Filme[] = []; // Armazenamento dos filmes

    /**
     * 
     * @param filme Instancia do filme com as características predefinidas.
     */
    adicionarFilme(filme: Filme): void {
        filme.codigo = this.code++;
        this.lista.push(filme);
    }

    /**
     * 
     * @returns Array com os filmes cadastrados no sistema.
     */
    obterFilmes(): Filme[] {
        return this.lista;
    }

    /**
     * 
     * @param titulo Título do filme a ser buscado.
     * @returns Instancia do filme caso seja encontrado, undefined caso contrário.
     */
    obterFilmePorTitulo(titulo: string): Filme | undefined {
        return this.lista.find(filme => filme.titulo === titulo);
    }

    /**
     * 
     * @param codigo O código do filme para obter seus detalhes
     * @returns O objeto filme do código escolhido.
     */
    obterFilmePorCodigo(codigo: Number): Filme | undefined {
        return this.lista.find(filme => filme.codigo === codigo);
    }

    /**
     * 
     * @param titulo Título do filme a ser removido.
     */
    removerFilmePorTitulo(titulo: string): boolean {
        const indice = this.lista.findIndex(filme => filme.titulo === titulo);
        if (indice !== -1) {
            this.lista.splice(indice, 1);
            return true;
        }
        return false;
    }

    /**
     * 
     * @param codigo O código do filme a ser removido
     * @returns true caso o filme exista e seja removido, false caso contrário.
     */
    removerFilmePorCodigo(codigo: Number): boolean {
        const indice = this.lista.findIndex(filme => filme.codigo === codigo);
        if (indice !== -1) {
            this.lista.splice(indice, 1);
            return true;
        }
        return false;
    }

    /**
     * 
     * @param titulo O título do filme a ser atualizado
     * @param filmeAtualizado Um objeto do tipo Filme com as propriedades atualizadas
     * @throws Error se o filme com o título especificado não for encontrado
     */
    atualizarFilme(codigo: Number, filmeAtualizado: Partial<Filme>): void {
        const filme = this.obterFilmePorCodigo(codigo);
        if (filme) {
            Object.assign(filme, filmeAtualizado);
        }
        else{
            throw new Error(`Filme com código "${codigo}" não encontrado.`);
        }
    }
}