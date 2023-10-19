import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  isOpen = false;
  public userName: string | null;
  constructor() {
    this.userName = '';
  }
  ngOnInit(): void {
    if (localStorage.getItem('userName')) {
      this.userName = localStorage.getItem('userName');
    }
  }
}
