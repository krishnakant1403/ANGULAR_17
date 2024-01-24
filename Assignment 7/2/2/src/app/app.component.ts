import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '2';
  str: any;

  fun() : string{
    this.str='Marvellous infosystem'
    return this.str;
  }
}
