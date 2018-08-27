import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jvcdp';

  showsidebar = false;

  onSidebarToggle(showsidebar: boolean){
    this.showsidebar=showsidebar;
  }
}
