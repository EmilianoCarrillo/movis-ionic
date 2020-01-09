import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cardsData = [
    {
      title: 'La comunidad del anillo',
      subtitle: 'Peter Jackson',
      content: 'Contenido cool de la tarjeta'
    },
    {
      title: 'A new Hope',
      subtitle: 'JJ Abrahams',
      content: 'Contenido cool de la tarjeta'
    },
    {
      title: 'El retorno del Rey',
      subtitle: 'Acción',
      content: 'Contenido cool de la tarjeta'
    },
  ];

  constructor(public alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Esta es una alerta.',
      buttons: ['OK']
    });

    await alert.present();
  }

  onButtonClicked(){
    alert("Alerta");
  }

}
