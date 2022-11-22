import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { GroceriesServiceProvider } from '../../providers/groceries-service/groceries-service';

/*
  Generated class for the InputDialogServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InputDialogServiceProvider {

  constructor(public alertCtrl: AlertController, public dataService: GroceriesServiceProvider) {
    console.log('Hello InputDialogServiceProvider Provider');
  }
  
  showPrompot(item?, index?) {
    // let itemId = ''
    // if(item){
    //   itemId = item._id;
    // }
  
    const prompt = this.alertCtrl.create({
      title:item ? 'Edit Item':"Add Item",
      message: item ? "Please Edit item...": "Please enter item name...",
      inputs: [
        {
          name: 'name',
          placeholder: 'Item Name',
          value:item ? item.name : null
        },
        {
          type:'number',
          name: 'quantity',
          placeholder: 'Item quantity',
          value:item ? item.quantity: null
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked', data); 
            if (index !== undefined){
              item.name = data.name;
              item.quantity =data.quantity;
              this.dataService.editItem(item, index);
          }
            else{
             this.dataService.addItem(data);
          }
        }
      }
      ]
    });
    prompt.present();
  }

}
