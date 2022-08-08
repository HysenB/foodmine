import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

/**
 *
 * If we use [private, public] (in constructor) it will be accessible throughout the class.
 * If we dont put it, it will be accessible only inside (the constructor).
 *
 */

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTerm = '';

  constructor(
    activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm) this.searchTerm = params.searchTerm;
    });
  }

  ngOnInit(): void {
  }

  search(term:string): void {
    if(term) this.router.navigateByUrl('/search/' + term);
  }

}
