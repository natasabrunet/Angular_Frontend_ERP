import { Component, OnInit } from '@angular/core';
import { SingleProductWithoutSessionService } from 'src/app/Services/single-product-without-session.service';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-single-product-without-session',
  templateUrl: './single-product-without-session.component.html',
  styleUrls: ['./single-product-without-session.component.scss']
})
export class SingleProductWithoutSessionComponent implements OnInit {

  constructor(private noSessionProdSvc:SingleProductWithoutSessionService, 
    private actRoute:ActivatedRoute, 
    public appComponent:AppComponent) { 
    this.langs = appComponent.langs
  }
  ngOnInit(): void { 
    this.getImgBaseProduct()   
    this.noSessionProdSvc.getProductsInfo().subscribe(data=> {
      this.productsData= data
      this.getCurrentProduct()
    })
  }

  //------------------ once url images in API are updated these next lines will change

  imagesProduct1:string[]=['product2','product2','product2','product2']
  mainImage:String='product1';
  imageBaseProduct:string[]=[]
  getImgBaseProduct():void{
    for(let i=1; i<5;i++){
      this.imageBaseProduct.push('product'+i)
    }
  }
  displayImg(image:string){
    this.mainImage=image
  }
  mainImg():void{
    this.mainImage='product1'
  }

  // ---------------- once url images in API are updated these previous lines will change

  productsData:any;
  currentProduct:any;
  relatedProducts:string[]=[]
  langs:string[]=[]
  quantity:number=0;
  
  getCurrentProduct():void{
    const id = Number(this.actRoute.snapshot.paramMap.get('id'));
    this.currentProduct = this.productsData.products.filter(p=>p.id ==id)
    this.currentProduct= this.currentProduct[0]
    this.relatedProducts = this.productsData.products.filter(p=>p.id!==id)
  }
 
  selectProd(){
    document.getElementById('wholesalePrice').classList.remove('is-invalid')
    document.getElementById('price').classList.remove('is-invalid')
  }
  addToCart(price:boolean, wholesale_price:boolean, units:any, writtenUnits:any){
    // function to either know which price the user has selected nor if hasn't selected anything
    if(price){
      console.log(this.currentProduct.price)
    }
    else if(wholesale_price){
      console.log(this.currentProduct.wholesale_price)
    }
    else{
      document.getElementById('wholesalePrice').classList.add('is-invalid')
      document.getElementById('price').classList.add('is-invalid')
    }
    if(units=='6+' && writtenUnits==''){
      document.getElementById('inputUnits').classList.add('is-invalid')
    }
  }
  HowManyUnits(units:any):void{
    // function to know if user wants more than 6 units
    if(units == '6+'){
      console.log(this.quantity)
      document.getElementById('selectUnits').classList.add('d-none')
      var write = document.getElementById('writeUnits')
      write.classList.remove('d-none')
      write.focus()
    }
  }
  unitsByUser(userunits:any){
    if(userunits!==''){
      document.getElementById('inputUnits').classList.remove('is-invalid')
    }
  }
}