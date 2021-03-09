import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faTrashAlt, faEdit } from '@fortawesome/free-regular-svg-icons';
import { NgbPaginationEllipsis } from '@ng-bootstrap/ng-bootstrap';
import { ClientsService } from 'src/app/Services/clients.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  //Icons
  faTrashAlt = faTrashAlt;
  faEdit = faEdit;
  clients: any[];
  currentPage: number;
  totalPages: number;
  pagesArray: Array<number>;

  constructor(private clientsService: ClientsService,
              private router: Router) {
                this.currentPage = 1;
              }

  ngOnInit(): void {
    this.goToPage(this.currentPage);
  }

  //Función para que se abra la página de single client
  goSingleClient(id: number) {
    this.router.navigate(['/single-client', id]);
  }

  isLastPage() {
    return this.currentPage === this.totalPages;
  }

  isFirstPage() {
    return this.currentPage === 1;
  }


  gotoNextPage(): boolean {
    let _pageNumber = this.currentPage + 1;
    if (_pageNumber > this.totalPages) {
      _pageNumber = this.totalPages;
    }
    this.goToPage(_pageNumber);

    return false;
  }
  gotoPrevPage(): boolean {
    let _pageNumber = this.currentPage - 1;
    if (_pageNumber < 1) {
      _pageNumber = 1;
    }
    this.goToPage(_pageNumber);

    return false;
  }

  goToPage(pageNumber: number): boolean {
    this.clientsService.getClients(this.clientsService.defaultClientsPerPage, pageNumber - 1) // -1 proque el paginador empieza en la página 0
    .subscribe((data: any) => {
      this.currentPage = pageNumber;
      this.clients = data;
      this.totalPages = 2; //this.getTotalPages(data.totalClients, this.clientsService.clientsPerPage);
      this.pagesArray = this.arrayOfPages();
      console.log("data!!!");
      console.log(data);
    });
    
    return false;
  }

  getTotalPages(totalClients: number, clientsPerPage: number) :number {
    let _totalPages = 0;
    if (clientsPerPage > 0) {
      _totalPages = Math.ceil(totalClients / clientsPerPage);
    }
    return _totalPages;
  }

  //function to return array of pages
  arrayOfPages(): Array<number> {
    let arrPages: Array<number>;
    if (this.totalPages > 0) {
      arrPages = Array(this.totalPages);
      for (let i=0; i<this.totalPages; i++) {
        arrPages[i] = i+1;
      }
    }
    return arrPages;
  }
  
  numSequence(n: number): Array<number> { 
    return Array(n); 
} 

  //Función eliminar un cliente
  delete(i: number) {
    // const id = this.clients[i].id;

    // this.clientsService.deleteClient(id)
    //   .subscribe();
    // this.clients.splice(i, 1);
  }
}
