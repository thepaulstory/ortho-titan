import { SidebarService } from './../../services/sidebar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ot-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(public side: SidebarService) { }

  ngOnInit() {
  }

  mnuToggle() {
    this.side.minimized = !this.side.minimized;
  }

}
