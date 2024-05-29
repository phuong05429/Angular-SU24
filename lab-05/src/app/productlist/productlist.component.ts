import { Component, OnInit } from '@angular/core';
import { IProduct } from '../entities/product';
import { NgModel } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
})
export class ProductlistComponent implements OnInit {
  products: IProduct[] = [
    {
      productId: 1,
      productName: 'Leaf Rake',
      productCode: 'GDN-0011',
      releaseDate: 'March 19, 2016',
      description: 'Leaf rake with 48-inch wooden handle.',
      price: 19.95,
      starRating: 3.2,
      imageUrl:
        'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png',
    },
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2016',
      description: '15 gallon capacity rolling garden cart',
      price: 32.99,
      starRating: 4.2,
      imageUrl:
        'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png',
    },
    {
      productId: 5,
      productName: 'Hammer',
      productCode: 'TBX-0048',
      releaseDate: 'May 21, 2016',
      description: 'Curved claw steel hammer',
      price: 8.9,
      starRating: 4.8,
      imageUrl:
        'http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png',
    },
    {
      productId: 8,
      productName: 'Saw',
      productCode: 'TBX-0022',
      releaseDate: 'May 15, 2016',
      description: '15-inch steel blade hand saw',
      price: 11.55,
      starRating: 4,
      imageUrl:
        'http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png',
    },
    {
      productId: 10,
      productName: 'Video Game Controller',
      productCode: 'GMG-0042',
      releaseDate: 'October 15, 2015',
      description: 'Standard two-button video game controller',
      price: 35.95,
      starRating: 5,
      imageUrl:
        'http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png',
    },
    {
      productId: 11,
      productName: 'Car',
      productCode: 'Mini-Couple',
      releaseDate: 'October 19, 2019',
      description: 'Standard two-button video game controller',
      price: 50000.00,
      starRating: 5,
      imageUrl:
        'https://icons.iconarchive.com/icons/cemagraphics/classic-cars/512/bmw-mini-icon.png',
    },
  ];

  listProduct: IProduct[] = [];
  constructor() {}

  ngOnInit(): void {
    this.listProduct = this.products;
  }
  filterValue: string = '';
  // filter(event: any) {
  //   this.filterValue = event.target.value;
  // }
  filter(){
    //chọn sản phẩm có tên chưa tên giá trị nhập vào
    this.products=this.listProduct.filter(p=>p.productName.includes(this.filterValue))
    }
}
