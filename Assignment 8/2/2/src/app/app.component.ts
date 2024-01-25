import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public MsgtoChild:string='';

  SendmsgtoChild(){
    this.MsgtoChild= "Hello child";
    
  }


  public message:any;
}
