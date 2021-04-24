import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  pageTitle = 'Product List';
  showImage = false;
  imageWidth = 100;


  products = [
    {
      productId: 1,
      productName: 'Hammer',
      code: 'h001',
      available: 'March 24, 2021',
      price: 8.123456,
      rating: 5,
      imageUrl: 'https://via.placeholder.com/350x150',
    },
    {
      productId: 2,
      productName: 'Axe',
      code: 'A001',
      available: 'March 30, 2021',
      price: 1200.20,
      rating: 4,
      imageUrl: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggleImage() {
    this.showImage = !this.showImage;
  }
}
