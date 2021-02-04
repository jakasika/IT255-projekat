import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  public subjects: Array<any>;

  constructor(categoryService: CategoryService) {
    this.categories$ = categoryService.getCategories();
   }

  ngOnInit(): void {
  }

}
