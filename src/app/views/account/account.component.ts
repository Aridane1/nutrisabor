import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  darkMode: any;
  public miToken: number;
  public userName: string | null;
  constructor(private router: Router) {
    this.miToken = 0;
    this.userName = '';
    if (localStorage.getItem('darkMode')) {
      this.darkMode = localStorage.getItem('darkMode');
    } else {
      localStorage.setItem('darkMode', '0');
      this.darkMode = '0';
    }
  }
  ngOnInit(): void {
    localStorage.setItem('darkMode', this.darkMode);
    if (localStorage.getItem('personalToken')) {
      this.miToken = +localStorage.getItem('personalToken')!;
    }
    if (localStorage.getItem('userName')) {
      this.userName = localStorage.getItem('userName');
    }
  }

  public logOut(): void {
    localStorage.setItem('darkMode', '0');
    const elemento = document.documentElement;

    // Cambia el valor de la variable CSS
    elemento.style.setProperty('--background', '#F0EEEE');
    elemento.style.setProperty(
      '--background-card',
      'rgba(143, 242, 146, 0.45)'
    );
    elemento.style.setProperty('--background-form', '#D4F4CC');
    elemento.style.setProperty('--box-shadow-form', 'rgba(56, 140, 5, 0.19)');
    elemento.style.setProperty('--color', 'black');

    document.body.style.backgroundColor = '--background';

    if (localStorage.getItem('personalToken')) {
      localStorage.removeItem('personalToken');
    }
    if (localStorage.getItem('userName')) {
      localStorage.removeItem('userName');
    }
    elemento.style.setProperty('--background', '#F0EEEE');
    this.router.navigateByUrl('/inicio');
  }

  changeBackgroundDark() {
    if (localStorage.getItem('darkMode') == '0') {
      localStorage.setItem('darkMode', '1');
      this.darkMode = localStorage.getItem('darkMode');
      console.log(this.darkMode);
    }

    const elemento = document.documentElement;

    // Cambia el valor de la variable CSS
    elemento.style.setProperty('--background', '#202020');
    elemento.style.setProperty('--background-card', '#DCFFDD');
    elemento.style.setProperty('--color', 'white');
    elemento.style.setProperty('--background-form', '#88C679');
    elemento.style.setProperty(
      '--box-shadow-form',
      'rgba(231, 231, 231, 0.19)'
    );
    document.body.style.backgroundColor = '--background';
  }
  changeBackgroundLight() {
    if (localStorage.getItem('darkMode') == '1') {
      localStorage.setItem('darkMode', '0');
      this.darkMode = localStorage.getItem('darkMode');
      console.log(this.darkMode);
    }

    const elemento = document.documentElement;

    // Cambia el valor de la variable CSS
    elemento.style.setProperty('--background', '#F0EEEE');
    elemento.style.setProperty(
      '--background-card',
      'rgba(143, 242, 146, 0.45)'
    );
    elemento.style.setProperty('--background-form', '#D4F4CC');
    elemento.style.setProperty('--box-shadow-form', 'rgba(56, 140, 5, 0.19)');
    elemento.style.setProperty('--color', 'black');

    document.body.style.backgroundColor = '--background';
  }
}
