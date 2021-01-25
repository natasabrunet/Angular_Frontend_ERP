import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.scss']
})
export class HeaderSearchComponent implements OnInit {
  faSearch = faSearch;
  
  navSearch;
  
  constructor() { 
  }

  ngOnInit(): void {
  }

  search() {
    console.log(this.navSearch);
  }


}
