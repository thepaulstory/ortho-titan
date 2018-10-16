import { SidebarService } from './../../services/sidebar.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'ot-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})

export class SidebarComponent implements OnInit {


  constructor(public side: SidebarService) { }

  ngOnInit() {
  }

  menuToggle() {
    this.side.minimized = !this.side.minimized;
  }

}
