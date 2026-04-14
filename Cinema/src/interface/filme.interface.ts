export interface IFilme {
    titulo: string,
    anoLancamento: number,
    diretor: string,
    genero: string,
    duracao: number,
    classificacaoIndicativa: number,
    sinopse?: string | undefined,
    avaliacao?: number | undefined,
}