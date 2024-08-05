import { Component, OnInit } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FormsModule } from '@angular/forms';
  import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonGrid, IonCol, IonRow, IonButton } from '@ionic/angular/standalone';

  @Component({
            selector: 'app-product',
            templateUrl: './product.page.html',
            styleUrls: ['./product.page.scss'],
            standalone: true,
            imports: [IonButton, IonRow, IonCol, IonGrid, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, IonGrid, IonCol, IonRow]
          })
  export class ProductPage implements OnInit {

    constructor() { }

    ngOnInit() {
    }

  }
