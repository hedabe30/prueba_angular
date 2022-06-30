import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Person 1';
  age = 27;
  img = 'https://www.w3schools.com/howto/img_avatar.png';
  btnDisabled = true;

  person = {
    name: 'Person 2',
    age: 35,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png',
  }

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age += 1;
  }
}
