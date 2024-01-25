import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  inputText: any;
  Dtext:any;
  
  @Output()
  public SendMsg = new EventEmitter();
  Send() {

    this.Dtext=this.inputText;
      return this.SendMsg.emit(this.Dtext);
    }
}
