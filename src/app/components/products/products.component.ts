import { productList } from './../../modles/productList';
import { Iproduct } from './../../modles/iproduct';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products:Iproduct[] = productList;

}
