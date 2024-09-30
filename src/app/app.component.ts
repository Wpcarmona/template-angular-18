import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/ui/header/header.component";
import { FooterComponent } from "./shared/ui/footer/footer.component";
import { SidebarComponent } from "./shared/ui/sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'template-angular-18';
  isSideBarOpen:boolean = false;


  openMenu(){
    console.log('hola')
    this.isSideBarOpen = true;
  }

  closeMenu(){
    this.isSideBarOpen = false;
  }
}
