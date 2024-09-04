import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.less'
})
export class DirectiveComponent {
  isActive: boolean = false;

  toggle(){
    this.isActive = !this.isActive;
  }
}
