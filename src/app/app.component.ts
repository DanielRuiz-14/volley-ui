import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { AccessComponent } from "./access/access.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, AccessComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'volley-ui';
}
