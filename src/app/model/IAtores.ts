export interface IAtores{
    nome: string;
    nascimento: string;
    idade: number;
    foto: string;
    filmes: string[];
    pagina?: string; //** a ? indica que o campo nao é obrigatorio*/
    favorito: boolean;
  }