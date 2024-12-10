import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-access',
  imports: [],
  templateUrl: './access.component.html',
  styleUrl: './access.component.css'
})
export class AccessComponent {
constructor (private router: Router){
}

  navigateToMainPage(){
    this.router.navigate(['/main-page']);
  }
}
