import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { present } from '@ionic/core/dist/types/utils/overlays';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  handlerMessage = '';
  roleMessage = '';

  public perguntas = [
    'Seu animal é grande ?', //0
    'Ele tem chifre ?', //1
    'A cor dele é cinza ?', //2
    'Ele tem tromba ?', //3
    'Ele é preto e branco ?', //4
    'Parece com um cavalo ?', //5
    'Anda de duas pernas ?', //6
    'Seu animal é doméstico ?', //7
    'Ele voa ?', //8
    'Ele late ?', //9
    'Ele voa ?', //10
  ];
  animais = [
    'Seu animal é a GIRAFA', //0
    'Seu animal é a ZEBRA', //1
    'Seu animal é o ELEFANTE ', //2
    'Seu animal é o RINOCERONTE', //3
    'Seu animal é o PANDA', //4
    'Seu animal é o CANGURU', //5
    'Seu animal é o LEÃO', //6
    'Seu animal é o PAPAGAIO', //7
    'Seu animal é o CACHORRO', //8
    'Seu animal é o GATO', //9
    'Seu animal é o MORCEGO', //10
    'Seu animal é o COALA', //11
  ];
  p: any = 0;
  a: any;


  sim() {
    if (this.p === 0) {
      this.p = 1;
    } else if (this.p === 1) {
      this.p = 2;
    } else if (this.p === 2) {
      this.p = 3;
    } else if (this.p === 3) {
      this.p = '';
      this.a = 2;
    } else if (this.p === 4) {
      this.p = 5;
    } else if (this.p === 5) {
      this.p = '';
      this.a = 1;
    } else if (this.p === 6) {
      this.p = '';
      this.a = 5;
    } else if (this.p === 7) {
      this.p = 8;
    } else if (this.p === 8) {
      this.p = '';
      this.a = 7;
    } else if (this.p === 9) {
      this.p = '';
      this.a = 8;
    } else if (this.p === 10) {
      this.p = '';
      this.a = 10;
    }
  }

  nao() {
    if (this.p === 0) {
      this.p = 7;
    } else if (this.p === 10) {
      this.p = '';
      this.a = 11;
    } else if (this.p === 3) {
      this.a = 3;
      this.p = '';
    } else if (this.p === 2) {
      this.a = 0;
      this.p = '';
    } else if (this.p === 1) {
      this.p = 4;
    } else if (this.p === 5) {
      this.p = '';
      this.a = 4;
    } else if (this.p === 4) {
      this.p = 6;
    } else if (this.p === 6) {
      this.p = '';
      this.a = 6;
    } else if (this.p === 8) {
      this.p = 9;
    } else if (this.p === 9) {
      this.p = '';
      this.a = 9;
    } else if (this.p === 7) {
      this.p = 10;
    }
  }

}
