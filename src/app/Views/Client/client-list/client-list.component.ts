import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faTrashAlt, faEdit } from '@fortawesome/free-regular-svg-icons';
import { NgbPaginationEllipsis } from '@ng-bootstrap/ng-bootstrap';
import { ClientsService } from 'src/app/Services/clients.service';
import Swal from 'sweetalert2';
import { Clients } from '../../../Models/clients';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  //Icons
  faTrashAlt = faTrashAlt;
  faEdit = faEdit;
  clients: Clients[];
  currentPage: number;
  totalPages: number;
  pageToGo: number;
  pagesArray: Array<number>;
  success: string;
  action: string;
  errorAPI: boolean;
  errorMessage: string;

  constructor(private clientsService: ClientsService,
    private router: Router) {
    this.currentPage = 1;
  }

  ngOnInit(): void {
    this.goToPage(this.currentPage);
  }


  //Función para que se abra la página de single client
  goEditClient(id: number) {
    this.router.navigate(['/client-detail', id]);
  }
  goNewClient(id: number) {
    this.router.navigate(['/new-client', id]);
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
  //view pagination
  goToPage(pageNumber: number) {
    if (pageNumber > this.totalPages) {
      pageNumber = this.totalPages;
    }

    this.clientsService.getClients(this.clientsService.clientsPerPage, pageNumber - 1) // -1 proque el paginador empieza en la página 0
      .subscribe((data: any) => {
        this.currentPage = pageNumber;
        this.clients = data.clients_of_the_page;
        this.totalPages = this.getTotalPages(data.total_clients, this.clientsService.clientsPerPage);
        this.setupArrayOfPages();
        this.pageToGo = null;
      });
    return false;
  }

  getTotalPages(totalClients: number, clientsPerPage: number): number {
    let _totalPages = 0;
    if (clientsPerPage > 0) {
      _totalPages = Math.ceil(totalClients / clientsPerPage);
    }
    return _totalPages;
  }

  //function to return array of pages
  setupArrayOfPages(): number[] {
    this.pagesArray = new Array();
    if (this.totalPages > 0) {
      this.pagesArray = Array(this.totalPages - 1);
      for (let i = 0; i < this.totalPages; i++) {
        this.pagesArray[i] = i + 1;
      }
      return this.pagesArray;
    }

  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }

  //Función eliminar un cliente
  delete(i) {
    const id = this.clients[i].id;

    this.clientsService.deleteClient(id)
      .subscribe((response: any) => {
        this.errorAPI = false;
        this.success = response.success;
        console.log(response);
        Swal.fire({
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
      },
        (error) => {
          this.errorAPI = true;
          // console.log(error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="#">Why do I have this issue?</a>'
          })
        });
    this.clients.splice(i, 1);
  }
}
