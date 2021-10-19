import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faTrashAlt, faEdit } from '@fortawesome/free-regular-svg-icons';
import { OffersService } from 'src/app/Services/offers.service';



const PAGE_SIZE = 2;


@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {


  //Icons
  faTrashAlt = faTrashAlt;
  faEdit = faEdit;

  data: string;

  offers: any[] = [];

  description: string;

  page:number = 0;
  limit:number = 2;

  paginatedOffers: any[];
  pagesArray: number[];

  constructor(private offersService: OffersService, private router: Router) { }


  //Methods to show pages of the table
  isFirstPage(){
    return this.page === 0;
  }

  previousPage(){
    this.page -= PAGE_SIZE;
    this.limit -= PAGE_SIZE;
  }

  goToPage(index:number){
    this.page = index * PAGE_SIZE;
    this.limit = this.page + PAGE_SIZE;
    this.paginatedOffers = this.offers.slice(this.page, this.limit);
  }

  currentPage():number {
    const result = this.page/PAGE_SIZE;
    return result;
  }

  isLastPage():boolean {
    return this.limit >= this.offers.length;
  }

  nextPage():void{
    this.page += PAGE_SIZE;
    this.limit += PAGE_SIZE;
    this.paginatedOffers = this.offers.slice(this.page, this.limit);
  }

  getTotalPages(){
    return Math.ceil(this.offers.length/PAGE_SIZE)
  }


  setPagesArray():void{
    this.pagesArray = [...new Array<number>(this.getTotalPages()).keys()]

  }

  ngOnInit(): void {
    this.offersService.getAllOffers().subscribe((data: any) => {
      this.offers = data.object;
      this.paginatedOffers = this.offers.slice(this.page, this.limit);
      this.setPagesArray();
    })
  }

  Search(){
    if(this.description !=""){
      this.offers = this.offers.filter(res =>{
        return res.description.toLocaleLowerCase().match(this.description.toLocaleLowerCase());
      });
    }else if(this.description == ""){
      this.ngOnInit();
    }

  }

}
