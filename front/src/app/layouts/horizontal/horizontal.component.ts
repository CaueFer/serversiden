import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-horizontal',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './horizontal.component.html',
  styleUrl: './horizontal.component.scss',
})
export class HorizontalComponent {
  sidebarOpen: boolean = false;
  dropdownOpen: boolean = false;
  notificationOpen: boolean = false;

  constructor() {}

  ngOnInit() {

  }
}
