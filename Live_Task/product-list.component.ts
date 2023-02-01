import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any;
  currentPage = 1;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.http.get(`http://localhost:3000/api/products?page=${this.currentPage}`)
      .subscribe(products => {
        this.products = products;
      });
  }

  addToCart(product) {
    console.log(product.name + ' added to cart');
  }

  nextPage() {
    this.currentPage++;
    this.getProducts();
  }

  previousPage() {
    this.currentPage--;
    this.getProducts();
  }

}