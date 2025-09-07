import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-results-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './results-page.component.html',
  styleUrl: './results-page.component.css'
})
export class ResultsPageComponent {
  categories = [
    { value: 'senior', label: 'Senior' },
    { value: 'junior', label: 'Junior' },
    { value: 'cadete', label: 'Cadete' }
  ];

  selectedCategory: string = '';

  results: any[] = [];

  loadResults(): void {
    if (this.selectedCategory) {
      console.log('Cargar resultados de categoría:', this.selectedCategory);
      // TODO: llamada a tu backend con HttpClient
    } else {
      console.log('Cargar todos los resultados');
    }
  }
}
