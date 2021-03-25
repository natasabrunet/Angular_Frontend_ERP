import { Component, OnInit } from '@angular/core';
import { faTrashAlt, faEdit } from '@fortawesome/free-regular-svg-icons';
import { Router } from '@angular/router';
import { ClientsService } from '../../../Services/clients.service';


@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {
    //Icons
    faTrashAlt = faTrashAlt;
    faEdit = faEdit;
    employees: any[];
    currentPage: number;
    totalPages: number;
    pageToGo: number;
    pagesArray: Array<number>;

    // TODO: 23/03/2021
    // Employees data is not implemented in Backend API, so "ClientsService" is used.
    // Must change "ClientsService" with "EmployeesService" when Backend API implement Employees data
  constructor(private clientsService: ClientsService,
              private router: Router) {
      this.currentPage = 1;
    }

  ngOnInit(): void {
    this.goToPage(this.currentPage);
  }

  //Función para que se abra la página de single Employee
  goEditEmployee(id: string) {
    this.router.navigate(['/employee', id]);
  }

  isLastPage() {
    return this.currentPage == this.totalPages;
  }

  isFirstPage() {
    return this.currentPage == 1;
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
    if (pageNumber > this.totalPages) {
      pageNumber = this.totalPages;
    }
    this.pagesArray = new Array();
    this.clientsService.getClients(this.clientsService.clientsPerPage, pageNumber - 1) // -1 proque el paginador empieza en la página 0
    .subscribe((data: any) => {
      this.currentPage = pageNumber;
      this.employees = data.ClientsOfThePage;
      this.totalPages = this.getTotalPages(data.totalClients, this.clientsService.clientsPerPage);
      this.setupArrayOfPages();
      this.pageToGo = null;
    }, (err) => {
      console.log(err);
    });
    return false;
  }

  getTotalPages(totalRecords: number, recordsPerPage: number) :number {
    let _totalPages = 0;
    if (recordsPerPage > 0) {
      _totalPages = Math.ceil(totalRecords / recordsPerPage);
    }
    return _totalPages;
  }

  //function to return array of pages
  setupArrayOfPages() {
    this.pagesArray = new Array();
    if (this.totalPages > 0) {
      this.pagesArray = Array(this.totalPages - 1);
      for (let i=0; i<this.totalPages; i++) {
        this.pagesArray[i] = i+1;
      }
    }
  }
  
  numSequence(n: number): Array<number> { 
    return Array(n); 
  } 
  delete(i: number) {
    // const id = this.clients[i].id;

    // this.clientsService.deleteClient(id)
    //   .subscribe();
    // this.clients.splice(i, 1);
  }
}
