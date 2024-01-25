import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() public Parentmsg:any;

  @Output() 
    public Sendmsg = new EventEmitter;

    public SendmsgtoParent(){
      return this.Sendmsg.emit("Hello parent");
    }
}
