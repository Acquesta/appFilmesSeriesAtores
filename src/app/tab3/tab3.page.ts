import { Component } from '@angular/core';
import { IAtores } from '../model/IAtores';
import { NavigationExtras, Router} from '@angular/router'
import { AlertController, ToastButton, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public router: Router,
    public alertController: AlertController,
    public toastController: ToastController) {}

  listaAtores: IAtores[] = [
    {
      nome: 'Robert Downey Jr.',
      nascimento: "4 de abril de 1965",
      idade: 58,
      foto: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/im9SAqJPZKEbVZGmjXuLI4O7RvM.jpg",
      filmes: ['Vingadores', 'Homem de Ferro'],
      favorito: false
    },
    {
      nome: 'Gary Oldman',
      nascimento: "21 de março de 1958",
      idade: 65,
      foto: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/2v9FVVBUrrkW2m3QOcYkuhq9A6o.jpg",
      filmes: ['Batman', 'O Destino de Uma Nação'],
      favorito: false
    },
    {
      nome: 'Nicolas Cage',
      nascimento: "21 de março de 1958",
      idade: 65,
      foto: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/ar33qcWbEgREn07ZpXv5Pbj8hbM.jpg",
      filmes: ['Os Croods', 'Motoqueiro Fantasma', 'Presságio'],
      favorito: false
    }
  ];

  exibirAtor(ator: IAtores){
    const navigationExtras: NavigationExtras = {state:{paramAtor:ator}};
    this.router.navigate(['ator-detalhe'], navigationExtras)
  }

  
  async exibirAlertaFavorito(ator: IAtores) {
    const alert = await this.alertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o ator?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            ator.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            ator.favorito=true;
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
