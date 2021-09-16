import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  datas:any
  price:number
  list = []
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.datas  = this.productService.saveCurrentSale
    console.log('datas',this.datas)
    this.price = this.datas.price
    this.list = this.datas.product
  }
  Print() {
    window.print();
  }
}
