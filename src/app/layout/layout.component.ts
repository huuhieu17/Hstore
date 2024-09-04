import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.less'
})
export class LayoutComponent {
  // Icon
  iconUser = faUser;
  iconCart = faCartShopping;
  iconSearch = faMagnifyingGlass;


  constructor(
    private router: Router,
  ){}

  navigateUrl(url: string){
    this.router.navigate([url])
  }
}
