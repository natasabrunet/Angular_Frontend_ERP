import { EventEmitter, Injectable } from '@angular/core';

import { ProductEmitterService } from './product-emitter.service';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  sesionCartName: string = 'erpCart';
  public cartUpdated: EventEmitter<any> = new EventEmitter<any>();
  constructor(public ProductEmitterService: ProductEmitterService) {}

  // If the sessionStorage item doesn't existe, it will create it
  getSessionCart(cart: any[]) {
    if (sessionStorage.getItem(this.sesionCartName) == null) {
      this.saveSessionStorage(cart);
    }
    return sessionStorage.getItem(this.sesionCartName);
  }

  saveSessionStorage(cart: any[]) {
    sessionStorage.setItem(this.sesionCartName, JSON.stringify(cart));
  }
  // Add API calls to new api/cartItems
}
