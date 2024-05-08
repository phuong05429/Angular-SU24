import { Component } from '@angular/core';
import { Inventor } from './scientist/inventor';
import { AfterViewInit } from '@angular/core';
import { IProduct } from './products/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit   {
  student = {
    name: 'NGUYEN CHI PHUONG',
    birthday: '06/04/2004',
    sex: 'Nam',
    mediumScore: '8.0',
    image: 'pamela.jpg',
  };

  inventors: Inventor[] = [
    { id: 1, first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { id: 2, first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  ];

  ngAfterViewInit() {
    this.render(this.show);
  }

  show(innerHTML: string) {
    let item = document.querySelector('#list');

    if (item) {
      item.innerHTML = innerHTML;
    }
  }

  render(callback: (data: string) => any) {
    let innerHTML = this.inventors
      .map((item) => {
        return `
      <tr>
      <td>${item.id}</td>
      <td>${item.first}</td>
      <td>${item.last}</td>
      <td>${item.year}</td>
      <td>${item.passed}</td>

      </tr>
      `;
      })
      .join('');
    callback(innerHTML);
  }

  products: IProduct[]=[
    {
    "productId": 1,
    "productName": "Leaf Rake",
    "productCode": "GDN-0011",
    "releaseDate": "March 19, 2016",
    "description": "Leaf rake with 48-inch wooden handle.",
    "price": 19.95,
    "starRating": 3.2,
    "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
    "productId": 2,
    "productName": "Garden Cart",
    "productCode": "GDN-0023",
    "releaseDate": "March 18, 2016",
    "description": "15 gallon capacity rolling garden cart",
    "price": 32.99,
    "starRating": 4.2,
    "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    },
    {
    "productId": 5,
    "productName": "Hammer",
    "productCode": "TBX-0048",
    "releaseDate": "May 21, 2016",
    "description": "Curved claw steel hammer",
    "price": 8.9,
    "starRating": 4.8,
    "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    },
    {
    "productId": 8,
    "productName": "Saw",
    "productCode": "TBX-0022",
    "releaseDate": "May 15, 2016",
    "description": "15-inch steel blade hand saw",
    "price": 11.55,
    "starRating": 3.7,
    "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
    },
    {
    "productId": 10,
    "productName": "Video Game Controller",
    "productCode": "GMG-0042",
    "releaseDate": "October 15, 2015",
    "description": "Standard two-button video game controller",
    "price": 35.95,
    "starRating": 4.6,
    "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
    }
   ];
 
  
}
