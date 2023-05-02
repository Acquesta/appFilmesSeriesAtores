import { Component } from '@angular/core';
import { ISeries } from '../model/ISeries';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  listaSeries: ISeries[] = [
    {
      nome:'The Last of Us',
      lancamento: '15/02/2023',
      temporadas: 1,
      avaliacao: 8.7,
      cartaz:'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg',
      generos:['Survival', 'horror'],
      favorito: false,
      assistir: 'HBO max'
    }
  ]

}
