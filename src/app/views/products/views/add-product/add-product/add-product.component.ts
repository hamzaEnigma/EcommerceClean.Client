import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProductService } from '../../../../../services/product.service';
import { tap } from 'rxjs';
import { Category } from '../../../../../interfaces/product/category.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {

  productForm: FormGroup;
  categories: Category[] = [];
  private productService = inject(ProductService);

  constructor(private formbuilder: FormBuilder) {
    this.productForm = this.formbuilder.group({
      productId: [null],
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: [''],
      categoryId: [],
      purchasePrice: [0, [Validators.required,Validators.min(1)]],
      sellPrice: [0, [Validators.required,Validators.min(1)]],
      unitsInStock: [1],
    });
  }

  ngOnInit() {
    this.productService
      .getAllCategories()
      .pipe(tap((x) => (this.categories = x)))
      .subscribe();
  }

  onSubmit() {
    console.log('this is my form', this.productForm);
    if (this.productForm.valid) {
      this.productService
        .CreateProduct(this.productForm.value)
        .subscribe((data) => {});
    }
  }

  get name() {
    return this.productForm.get('name');
  }

  get category() {
    return this.productForm.get('categoryId');
  }

  get sellPrice() {
    return this.productForm.get('sellPrice');
  }

  get purchasePrice() {
    return this.productForm.get('purchasePrice');
  }

}
