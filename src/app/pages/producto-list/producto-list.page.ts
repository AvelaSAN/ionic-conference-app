import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, ModalController, Config, IonList } from '@ionic/angular';

// import { PedidoPage } from '../pages/pedido/pedido.page';
import { IonRouterOutlet } from '@ionic/angular';


@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.page.html',
  styleUrls: ['./producto-list.page.scss'],
})
export class ProductoListPage implements OnInit {
    // Gets a reference to the list element
    @ViewChild('PedidoList', { static: true }) PedidoList: IonList;

  ios: boolean;
  dayIndex = 0;
  queryText = '';
  segment = 'favorites';
  excludeTracks: any = [];
  shownSessions: any = [];
  groups: any = [];
  confDate: string;
  showSearchbar: boolean;

  mealsGrid = [
    {id: 4, name: '2X1 Alitas', price: 30, isOffer: true, src: '/assets/img/productos/promo.jpg'}, 
    {id: 1, name: 'Torta de Jamón', price: 30, isOffer: false, src: '/assets/img/productos/torta.jpg'}, 
    {id: 2, name: 'Pizza', price: 100, isOffer: false, src: '/assets/img/productos/pizza.jpg'},
    {id: 3, name: 'Hamburguesa', price: 50, isOffer: false, src: '/assets/img/productos/hamburguesa.jpg'},
  ];

  constructor(
    public alertController: AlertController,
    private modalController: ModalController,
    private routerOutlet: IonRouterOutlet,
    public config: Config
    ) { }

  ngOnInit() {
    this.updatePedido();

    this.ios = this.config.get('mode') === 'ios';
  }
  
  updatePedido() {
    // Close any open sliding items when the Pedido updates
    // if (this.PedidoList) {
    //   this.PedidoList.closeSlidingItems();
    // }

    // this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe((data: any) => {
    //   this.shownSessions = data.shownSessions;
    //   this.groups = data.groups;
    // });
  }

  deleteMeal(id){
    console.log("deleteMeal:" + id);
        // firebase.database().ref('restaurants/1/meals/' + id).remove();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['Cancel', 'Open Modal', 'Delete']
    });

    await alert.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  // async presentAlertPrompt() {
  //   const alert = await this.alertController.create({
  //     cssClass: 'my-custom-class',
  //     header: 'Caracteristicas!',
  //     inputs: [
  //       {
  //         name: 'name1',
  //         type: 'text',
  //         placeholder: 'Placeholder 1'
  //       },
  //       {
  //         name: 'name2',
  //         type: 'text',
  //         id: 'name2-id',
  //         value: 'hello',
  //         placeholder: 'Placeholder 2'
  //       },
  //       // multiline input.
  //       {
  //         name: 'paragraph',
  //         id: 'paragraph',
  //         type: 'textarea',
  //         placeholder: 'Placeholder 3'
  //       },
  //       {
  //         name: 'name3',
  //         value: 'http://ionicframework.com',
  //         type: 'url',
  //         placeholder: 'Favorite site ever'
  //       },
  //       // input date with min & max
  //       {
  //         name: 'name4',
  //         type: 'date',
  //         min: '2017-03-01',
  //         max: '2018-01-12'
  //       },
  //       // input date without min nor max
  //       {
  //         name: 'name5',
  //         type: 'date'
  //       },
  //       {
  //         name: 'name6',
  //         type: 'number',
  //         min: -5,
  //         max: 10
  //       },
  //       {
  //         name: 'name7',
  //         type: 'number'
  //       },
  //       {
  //         name: 'name8',
  //         type: 'password',
  //         placeholder: 'Advanced Attributes',
  //         cssClass: 'secondary',
  //         attributes: {
  //           maxlength: 4,
  //           inputmode: 'decimal'
  //         }
  //       }
  //     ],
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         cssClass: 'secondary',
  //         handler: (value: any) => {
  //           console.log('Confirm Cancel');
  //           console.log({value});
  //         }
  //       }, {
  //         text: 'Ok',
  //         handler: (value: any) => {
  //           console.log('Confirm Ok');
  //           console.log(value);
  //         }
  //       }
  //     ]
  //   });

  //   await alert.present();
  // }

  async presentAlertRadio() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Radio',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Radio 1',
          value: 'value1',
          handler: () => {
            console.log('Radio 1 selected');
          },
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Radio 2',
          value: 'value2',
          handler: () => {
            console.log('Radio 2 selected');
          }
        },
        {
          name: 'radio3',
          type: 'radio',
          label: 'Radio 3',
          value: 'value3',
          handler: () => {
            console.log('Radio 3 selected');
          }
        },
        {
          name: 'radio4',
          type: 'radio',
          label: 'Radio 4',
          value: 'value4',
          handler: () => {
            console.log('Radio 4 selected');
          }
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'Radio 5',
          value: 'value5',
          handler: () => {
            console.log('Radio 5 selected');
          }
        },
        {
          name: 'radio6',
          type: 'radio',
          label: 'Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 ',
          value: 'value6',
          handler: () => {
            console.log('Radio 6 selected');
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertCheckbox() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Checkbox',
      inputs: [
        {
          name: 'checkbox1',
          type: 'checkbox',
          label: 'Checkbox 1',
          value: 'value1',
          handler: () => {
            console.log('Checkbox 1 selected');
          },
          checked: true
        },

        {
          name: 'checkbox2',
          type: 'checkbox',
          label: 'Checkbox 2',
          value: 'value2',
          handler: () => {
            console.log('Checkbox 2 selected');
          }
        },

        {
          name: 'checkbox3',
          type: 'checkbox',
          label: 'Checkbox 3',
          value: 'value3',
          handler: () => {
            console.log('Checkbox 3 selected');
          }
        },

        {
          name: 'checkbox4',
          type: 'checkbox',
          label: 'Checkbox 4',
          value: 'value4',
          handler: () => {
            console.log('Checkbox 4 selected');
          }
        },

        {
          name: 'checkbox5',
          type: 'checkbox',
          label: 'Checkbox 5',
          value: 'value5',
          handler: () => {
            console.log('Checkbox 5 selected');
          }
        },

        {
          name: 'checkbox6',
          type: 'checkbox',
          label: 'Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6',
          value: 'value6',
          handler: () => {
            console.log('Checkbox 6 selected');
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }



  async abrirPedido() {
    // const modal = await this.modalController.create({
    //   component: PedidoPage,
    //   cssClass: 'my-custom-class',
    //   swipeToClose: true,
    //   backdropDismiss: true,
    //   showBackdrop: true,
    //   presentingElement:  this.routerOutlet.nativeEl
    // });
    // return await modal.present();
  }
}
