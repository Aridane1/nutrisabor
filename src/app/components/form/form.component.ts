import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/classes/user';
import { LoginService } from 'src/app/shared/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @Input() formChoose!: String;
  @Input() userName!: String | null;

  public user: User;

  constructor(private loginService: LoginService, private router: Router) {
    this.user = new User();
  }
  ngOnInit(): void {}

  public submit(): void {
    this.loginService.login(this.user).subscribe(
      (data: number) => {
        localStorage.setItem('userName', this.user.name);
        localStorage.setItem('personalToken', `${data}`);
        this.router.navigate(['/home']);
      },
      (error: Error) => {
        console.error('Error al realizar el acceso- login');
      }
    );
  }
  public submitMessage(): void {
    Swal.fire({
      title: 'Estas seguro?',
      text: 'Estas seguro de querer enviar este comentario?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si enviar!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Comentario Enviado!',
          'Tu comentario se a enviado correctamente.',
          'success'
        );
      }
    });
  }
}
