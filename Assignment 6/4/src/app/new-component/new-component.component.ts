import { Component } from '@angular/core';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.css'
})
export class NewComponentComponent {

  name: string = 'marvellous';
  lowercaseName: string = this.name.toLowerCase();
  uppercaseName: string = this.name.toUpperCase();
  nameOfString: string = this.name;
  concatenatedString: string = this.name + ' Infosystems';

  constructor() { }

  ngOnInit(): void {
  }
}
