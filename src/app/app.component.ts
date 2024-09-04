import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from './layout/layout.module';
import { ProductsModule } from './products/products.module';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductsModule, LayoutModule, LayoutComponent, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  title = 'hstore';
}
