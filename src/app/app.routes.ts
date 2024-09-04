import { Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export const routes: Routes = [
  {
    path: "payment",
    loadChildren: () => import("./payment/payment.module").then(m => m.PaymentModule)
  },
  {
    path: "form-test",
    loadChildren: () => import("./form-test/form-test.module").then(m => m.FormTestModule)
  },
  {
    path: "directive",
    loadChildren: () => import("./directive/directive.module").then(m => m.DirectiveModule)
  },
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent}
];
