import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  product = [
    {
      id:1,
      name:'Foot Bag',
      image:'/assets/bag.jpg',
      availableQuantity:22,
      bookedQuantity:40,
      totalQuantity:62,
      price:250,
      discount:5,
      category:'Electronics'

    },
    {
      id:13,
      name:'Ice Careem',
      image:'/assets/icecreem.png',
      availableQuantity:22,
      bookedQuantity:40,
      totalQuantity:62,
      price:250,
      discount:5,
      category:'food'

    },
    {
      id:14,
      name:'Computer',
      image:'/assets/computer.jpg',
      availableQuantity:22,
      bookedQuantity:40,
      totalQuantity:62,
      price:250,
      discount:5,
      category:'electronics'

    },
    {
      id:15,
      name:'Cup',
      image:'/assets/cup.jpg',
      availableQuantity:22,
      bookedQuantity:40,
      totalQuantity:62,
      price:250,
      discount:5,
      category:'crockeries'

    },

    {
      id:16,
      name:'Cholocate',
      image:'/assets/chocolate.jpg',
      availableQuantity:22,
      bookedQuantity:40,
      totalQuantity:62,
      price:250,
      discount:5,
      category:'chocolate'

    },
    {
      id:17,
      name:'travel',
      image:'/assets/travel.jpg',
      availableQuantity:22,
      bookedQuantity:40,
      totalQuantity:62,
      price:250,
      discount:5,
      category:'travel'

    },
    {
      id:18,
      name:'home',
      image:'/assets/home.jpg',
      availableQuantity:22,
      bookedQuantity:40,
      totalQuantity:62,
      price:250,
      discount:5,
      category:'homeDecor'

    },
    {
      id:19,
      name:'Cholocate',
      image:'/assets/accessories.jpg',
      availableQuantity:22,
      bookedQuantity:40,
      totalQuantity:62,
      price:250,
      discount:5,
      category:'accessoreis'

    },
    {
      id:20,
      name:'Pet Food',
      image:'/assets/pet food.jpg',
      availableQuantity:22,
      bookedQuantity:40,
      totalQuantity:62,
      price:250,
      discount:5,
      category:'petFood'

    },
    {
      id:21,
      name:'chips',
      image:'/assets/chips.jpg',
      availableQuantity:22,
      bookedQuantity:40,
      totalQuantity:62,
      price:250,
      discount:5,
      category:'chips'

    },
    {
      id:22,
      name:'Beverage',
      image:'/assets/beverage.jpg',
      availableQuantity:22,
      bookedQuantity:40,
      totalQuantity:62,
      price:250,
      discount:5,
      category:'beverage'

    },
    {
      id:3,
      name:'Fruit',
      image:'/assets/fruit.jpg',
      availableQuantity:22,
      bookedQuantity:40,
      totalQuantity:62,
      price:250,
      discount:5,
      category:'fruit'

    },
    {
      id:4,
      name:'Frozen Food',
      image:'/assets/frozen.jpg',
      availableQuantity:22,
      bookedQuantity:40,
      totalQuantity:62,
      price:250,
      discount:5,
      category:'frozenfood'

    },

    {
      id:5,
      name:'Foot Bag',
      image:'/assets/bag.jpg',
      availableQuantity:22,
      bookedQuantity:40,
      totalQuantity:62,
      price:250,
      discount:5,
      category:'Electronics'

    },
    {
      id:6,
      name:'Foot Bag',
      image:'/assets/bag.jpg',
      availableQuantity:22,
      bookedQuantity:40,
      totalQuantity:62,
      price:250,
      discount:5,
      category:'Electronics'

    },
    {
      id:7,
      name:'Foot Bag',
      image:'/assets/bag.jpg',
      availableQuantity:22,
      bookedQuantity:40,
      totalQuantity:62,
      price:250,
      discount:5,
      category:'Electronics'

    },
    {
      id:8,
      name:'Foot Bag',
      image:'/assets/bag.jpg',
      availableQuantity:22,
      bookedQuantity:40,
      totalQuantity:62,
      price:250,
      discount:5,
      category:'Electronics'

    },
    {
      id:9,
      name:'Foot Bag',
      image:'/assets/bag.jpg',
      availableQuantity:22,
      bookedQuantity:40,
      totalQuantity:62,
      price:250,
      discount:5,
      category:'Electronics'

    },
    {
      id:10,
      name:'Foot Bag',
      image:'/assets/bag.jpg',
      availableQuantity:22,
      bookedQuantity:40,
      totalQuantity:62,
      price:250,
      discount:5,
      category:'electronics'

    },

    {
      id:11,
      name:'Foot Bag',
      image:'/assets/bag.jpg',
      availableQuantity:22,
      bookedQuantity:40,
      totalQuantity:62,
      price:250,
      discount:5,
      category:'fruit'

    },
    {
      id:12,
      name:'Foot Bag',
      image:'/assets/bag.jpg',
      availableQuantity:22,
      bookedQuantity:40,
      totalQuantity:62,
      price:250,
      discount:5,
      category:'fruit'

    },

  ]
    saveCurrentSale = {

    }
  constructor() { }

  getAllproduct() {
    return this.product
  }
  specificCategory(scategory) {
   return  this.product.filter(x=>x.category ==scategory)
  }
  savesale(product,price) {
    const abc = {
      product:product,
      price:price
    }
    this.saveCurrentSale = abc

  }
}
