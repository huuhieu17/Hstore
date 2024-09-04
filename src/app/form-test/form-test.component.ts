import { Component, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-test',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-test.component.html',
  styleUrl: './form-test.component.less'
})
export class FormTestComponent {
  name: string = "";
  age: number = 0;
  email: string = "";
  isAdmin: boolean = false;

  constructor (){
    effect(() => {
      console.log("update")
    }, )
  }
  onSubmitForm(){
    const { name, age, email, isAdmin } = this;
    const obj = {
      name,
      age,
      email,
      isAdmin,
    };
    console.log(obj)
  }
}
