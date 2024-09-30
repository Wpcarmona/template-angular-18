import { Component } from '@angular/core';
import { SidebarComponent } from "../../../shared/ui/sidebar/sidebar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {

}
