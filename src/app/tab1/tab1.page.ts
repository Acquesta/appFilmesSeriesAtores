import { Component } from '@angular/core';
import { IFilme } from '../model/IFilme';
import { NavigationExtras, Router} from '@angular/router'
import { AlertController, ToastButton, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public router: Router,
                  public alertController: AlertController,
                  public toastController: ToastController) {}

  listaFilmes: IFilme[] = [
    {
      nome: 'Mortal Kombat (2021)',
      lancamento: '15/04/2021',
      duracao: '1h50m',
      classificacao: 9,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w8BVC3qrCWCiTHRz4Rft12dtQF0.jpg',
      generos: ['Ação', 'Fantasia', 'Aventura'],
      pagina: '/mortal-kombat',
      favorito: false
    },
    {
      nome: 'Vingadores: Ultimato (2019)',
      lancamento: '25/04/2019 (BR)',
      duracao: '3h01m',
      classificacao: 6,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg',
      generos: ['Aventura', 'Ficção científica', 'Ação'],
      pagina: '/avengers',
      favorito: false
    },
    {
      nome:'AVATAR 2',
      lancamento:'15/12/2022',
      duracao:'3h12m',
      classificacao:4,
      cartaz:'',
      generos:['Ação', 'Ficção Cientifica'],
      favorito:false
    },
    {
      nome:'Mistério em paris',
      lancamento:'31/03/2023',
      duracao:'1h29m',
      classificacao:8,
      cartaz:'data:image/jpeg;base64,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',
      generos:['Ação', 'Comédia'],
      favorito:false
    },
    {
      nome:'Gente Grande',
      lancamento:'24/09/2010',
      duracao:'1h42m',
      classificacao:9,
      cartaz:'data:image/jpeg;base64,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',
      generos:['Buddy', 'Comédia'],
      favorito:false
    }
  ];
  exibirFilme(filme: IFilme){
    const navigationExtras: NavigationExtras = {state:{paramFilme:filme}};
    this.router.navigate(['filme-detalhe'], navigationExtras)
  }

  async exibirAlertaFavorito(filme: IFilme) {
    const alert = await this.alertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            filme.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            filme.favorito=true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }



 async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos...',
      duration: 2000,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }

}
