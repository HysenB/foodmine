import { Food } from './../../../shared/models/Food';
import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { ActivatedRoute } from '@angular/router';

/**
 * ActivatedRoute is used to listen to the route....
 */

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods: Food[] = [];

  constructor(
    private foodService: FoodService,
    activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm){
        this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      }else {
        this.foods = foodService.getAll();
      }
    })
  }

  ngOnInit(): void {
  }

}
