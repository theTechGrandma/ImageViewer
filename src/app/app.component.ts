import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dynics Image Viewer';

  public NavbarBrand : string = 'Dynics Image Viewer';
  public NavbarItems : Array<any> = [
      {label : 'Image List',    href : ''       },
      {label : 'Image Carousel',  href : '/sqlimages/:id' },
   ];

   constructor(public router: Router, public route: ActivatedRoute) {
   }

   OnNavbarSearchSubmit(passedSearchText:string) {
      this.router.navigate(['sqlimages/'+passedSearchText]);
   }
}
