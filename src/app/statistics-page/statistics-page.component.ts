import { CommonModule } from '@angular/common'; // Para directivas como *ngFor
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'; // Form Field de Angular Material
import { MatInputModule } from '@angular/material/input'; // Input de Angular Material
import { PlayersService } from '../services/player/players.service';
import { NavbarComponent } from "../widgets/navbar/navbar.component";

@Component({
  selector: 'app-statistics-page',
  imports: [NavbarComponent,
    FormsModule,
    MatInputModule, 
    MatFormFieldModule,
    CommonModule
   ],
  templateUrl: './statistics-page.component.html',
  styleUrl: './statistics-page.component.css'
})
export class StatisticsPageComponent {

  playersNames: string[] = [];
  selectedName: string | null = null;

  constructor(private playerService: PlayersService){}

  ngOnInit(): void {
    this.loadNameFilter();
  }
  
  loadNameFilter(): void {
    this.playerService.getAllNames().subscribe(
      {
        next: (res) => this.playersNames = res,
        error: (err) => console.error('Error when loading players names', err),
      }
    ); 
  }
  }


