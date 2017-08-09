import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MessageService } from '../shared/message.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{private HideExpandedNavBar: boolean = true;
 private HideSearchInput: boolean = true;
 private innerSearchInputText: string = '';
 private NavbarSearch: any = {};

  @Input() NavbarBrand : string;
  @Input() NavbarItems : Array<any>;

  @Output() NavbarSearchSubmit = new EventEmitter<any>();

 constructor(private messageService: MessageService) {}

 sendMessage(): void {
      // send message to subscribers via observable subject
      this.messageService.sendMessage('Message from Home Component to App Component!');
      console.log("sent message");
}
 
clearMessage(): void {
    // clear message
    this.messageService.clearMessage();
}

 toggleMenu() {
  this.HideExpandedNavBar = !this.HideExpandedNavBar;
 }

 closeOnMouseOut(idx:number) {
    if (idx == this.NavbarItems.length-1) {
        this.HideExpandedNavBar = true;
    }
 }

 onSearchSubmit(formvalue:any) {
   //this.sendMessage();
   this.NavbarSearchSubmit.emit(formvalue.SearchText);
   formvalue.SearchText = "";
 }

  handleMenuClick(event:any) {
    this.HideExpandedNavBar = true;
  }

}
