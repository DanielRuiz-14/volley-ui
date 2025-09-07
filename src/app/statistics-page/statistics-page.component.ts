import { CommonModule } from '@angular/common'; // Para directivas como *ngFor
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'; // Form Field de Angular Material
import { MatInputModule } from '@angular/material/input'; // Input de Angular Material
import { GeneralStats } from '../models/generalStats.model';
import { Player } from '../models/player.model';
import { BasicStatsService } from '../services/basic-stats/basic-stats.service';
import { PlayersService } from '../services/player/players.service';


@Component({
  selector: 'app-statistics-page',
  imports: [
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    CommonModule
  ],
  templateUrl: './statistics-page.component.html',
  styleUrl: './statistics-page.component.css'
})
export class StatisticsPageComponent {

  players: Player[] = [];
  selectedPlayer?: Player;
  playerBasicStats: GeneralStats | null = null;

  constructor(private playerService: PlayersService, private basicStatsService: BasicStatsService) { }

  ngOnInit(): void {
    this.loadNameFilter();
  }

  loadNameFilter(): void {
    this.playerService.getAllNames().subscribe(
      {
        next: (res) => this.players = res,
        error: (err) => console.error('Error when loading players names', err),
      }
    );
  }

  onSelectChange(): void {
    if (this.selectedPlayer) {
      console.log(this.selectedPlayer.firstName);
      this.basicStatsService.getBasicStatsBy(this.selectedPlayer.id).subscribe(
        {
          next: (data) => this.playerBasicStats = data,
          error: (err) => console.error('Error when getting stats from player', err),
        }
      );
    }
  }
}


