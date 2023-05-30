import { Component } from '@angular/core';
import { ISeries } from '../model/ISeries';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastButton, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public router: Router,
    public alertController: AlertController,
    public toastController: ToastController) {}

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
    },
    {
      nome:'Flash',
      lancamento: '7/11/2014',
      temporadas: 9,
      avaliacao: 8.7,
      cartaz:'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/lFxIoMKqkgTuxpghTPHBjoVstMV.jpg',
      generos:['Aventura', 'Ficção'],
      favorito: false,
      assistir: 'Netflix'
    },
    {
      nome:'Amor e Morte',
      lancamento: '27/03/2017',
      temporadas: 9,
      avaliacao: 8.7,
      cartaz:'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/bn4s6mCHtfQNxRapZ0C0wEi36SQ.jpg',
      generos:['Murder'],
      favorito: false,
      assistir: 'HBO MAX'
    }
  ];

  exibirSerie(serie: ISeries){
    const navigationExtras: NavigationExtras = {state:{paramSerie:serie}};
    this.router.navigate(['serie-detalhe'], navigationExtras)
  }

  async exibirAlertaFavorito(serie: ISeries) {
    const alert = await this.alertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o serie?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            serie.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            serie.favorito=true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }



 async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Ator adicionado aos favoritos...',
      duration: 2000,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }

}
