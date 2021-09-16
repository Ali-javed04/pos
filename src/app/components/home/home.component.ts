import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  dropdown: number
  a:number

  isSelected: boolean = false
  totalSelectedItems: number = 1

  selectedProduct = []
  totalDiscount: number
  saleDiscount: number
  totalTax: number
  shippingCost: number

  products = []
  selectedbutton = 0
  categoryButtons = [
    {
      name: 'All',
      link: 'all'
    },
    {
      name: 'Electronics',
      link: 'electronics'
    },
    {
      name: 'Crockeries',
      link: 'crockeries'
    },
    {
      name: 'Chocolate',
      link: 'chocolate'
    },
    {
      name: 'Travel',
      link: 'travel'
    },
    {
      name: 'Home Decor',
      link: 'homeDecor'
    },
    {
      name: 'Accessories',
      link: 'accessories'
    },
    {
      name: 'Pet Food',
      link: 'petFood'
    },
    {
      name: 'Chips',
      link: 'chips'
    },
    {
      name: 'Bevarage',
      link: 'bevarage'
    },
    {
      name: 'Fruit',
      link: 'fruit'
    },
    {
      name: 'Frozen Food',
      link: 'frozenFood'
    },

  ]
  quantity = 1
  grandtotal: number = 0;
  total: any;
  display: boolean = false
  term:string
  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    this.getallProduct()
  }

  AddtoCart(product) {

    this.selectedProduct.push({
      ...product,
      ...{
        discount: 0,
        quantity: 1,
        totalPrice: product.price,
        selected: true
      }
    })
    const length = this.selectedProduct.length
    product.index = length
    product.selected = true
    console.log('selected', this.selectedProduct)
    this.calTotalvalue()
  }

  updateTotal(item: any) {
    if (item.discount != 0) {
      let a = item.quantity * item.price
      let dis = parseInt(item.discount)
      let b = dis / 100
      let c = a * b
      let d = a - c
      item.totalPrice = d
    } else {
      item.totalPrice = item.quantity * item.price
    }

    this.calTotalvalue()

  }
  calTotalvalue() {
    let num = (n) => isNaN(n) ? 0 : n
    this.total = this.selectedProduct
      .map(item => item.totalPrice)
      .reduce((a, b) => num(a) + num(b), 0)
  }
  totalFare(key: string) {
    if (key == 'saleDiscount' && this.saleDiscount !=0) {
      let a = this.saleDiscount / 100
      let b = this.total * a
      let c = this.total - b
      this.total = c

    }
    if(key == 'totalDiscount' && this.totalDiscount !=0) {
      let a = this.totalDiscount / 100
      let b = this.total * a
      let c = this.total - b
      this.total = c

    }
    if(key == 'totalTax' && this.totalTax !=0) {
      let a = this.totalTax
      let b  =this.total + a
      this.total  =b
    }
    if(key == 'shippingCost' && this.shippingCost !=0) {
      let a = this.shippingCost
      let b  =this.total + a
      this.total  =b
    }


  }
  public set calcGrandTotal(val: number) {
    this.total = val
  }


  public get calcGrandTotal(): number {

    return this.total
  }

  removeItemFromCart(item) {
    this.selectedProduct.forEach((element, index) => {
      if (element.id == item.id) this.selectedProduct.splice(index, 1);
    });
    this.products
      .filter(p => p.id == item.id)
      .forEach(p => p.selected = false);
      this.calTotalvalue()
  }
  getallProduct() {
    this.products = this.productService.getAllproduct()
  }
  ChooseProduct(product): boolean {

    let abc: any = this.selectedProduct.filter(x => x.id == product.id)
    console.log(abc)

    return abc.isSelected

  }

  specificCategoryProduct(category, i) {
    if (category.link == 'all') {
      this.getallProduct()
    } else {

      this.selectedbutton = i
      this.products = this.productService.specificCategory(category.link)
    }

  }
  saveData() {
    this.display = true
  }

  SaveSale() {
    this.productService.savesale(this.selectedProduct,this.total)
    this.router.navigate(['/result'])
  }

}
