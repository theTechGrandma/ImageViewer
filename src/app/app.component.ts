import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { MessageService } from './shared/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dynics Image Viewer';
  private activatedRoute: ActivatedRoute;

  public NavbarBrand : string = 'Dynics Image Viewer';
  public NavbarItems : Array<any> = [
      {label : 'Image List',    href : ''       },
      {label : 'Image Carousel',  href : '/sqlimages/:id' },
   ];

   constructor(public router: Router, public route: ActivatedRoute, private messageService: MessageService) {
   }

   OnNavbarSearchSubmit(passedSearchText:string) {
     //this.sendMessage();
     this.router.navigate(['sqlimages/'+passedSearchText]);
   }

   sendMessage(): void {
     
      // send message to subscribers via observable subject
      
      this.messageService.sendMessage('Message from Home Component to App Component!');
      console.log("message sent");
   }
}
