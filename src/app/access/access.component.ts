import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HeaderComponent } from "../header/header.component";


@Component({
  selector: 'app-access',
  imports: [HeaderComponent, RouterLink],
  standalone: true,
  templateUrl: './access.component.html',
  styleUrl: './access.component.css'
})
export class AccessComponent {
constructor (private router: Router){
}

  navigateToMainPage(){
    this.router.navigate(['/home']);
  }
}
