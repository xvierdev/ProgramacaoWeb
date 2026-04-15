export interface IFilme {
    codigo?: Number | undefined,
    titulo: string,
    anoLancamento: number,
    diretor: string,
    genero: string,
    duracao: number,
    classificacaoIndicativa: number,
    sinopse?: string | undefined,
    avaliacao?: number | undefined,
}