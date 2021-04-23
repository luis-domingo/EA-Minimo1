import { Component, OnInit, ElementRef, ViewChild  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from './../../shared/interfaces/user.interface';
import { UserService } from './../../shared/services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    // Inputs, IMPORTANT!!! type of input must be declared @ the html <input type="----"> 
    @ViewChild('usernameinput', {static: true}) usernameInput: ElementRef | undefined;
    @ViewChild('apellidosinput', {static: true}) apellidosInput: ElementRef | undefined;
    @ViewChild('nacimientoinput', {static: true}) nacimientoInput: ElementRef | undefined;
    @ViewChild('profesioninput', {static: true}) profesionInput: ElementRef | undefined;
    @ViewChild('vacunainput', {static: true}) vacunaInput: ElementRef | undefined;

    
    registerForm=new FormGroup({
      usernameinput: new FormControl('', [Validators.required]),
      apellidosinput: new FormControl('', [Validators.required]),
      nacimientoinput: new FormControl('', [Validators.required]),
      profesioninput: new FormControl('', [Validators.required]),
      vacunainput: new FormControl('', [Validators.required])
    })

  constructor(private UserService: UserService, private FormBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.FormBuilder.group({
      usernameinput: new FormControl('', Validators.required),
      apellidosinput: new FormControl('', Validators.required),
      nacimientoinput: new FormControl('', Validators.required),
      profesioninput: new FormControl('', Validators.required),
      vacunainput: new FormControl('', Validators.required)
    })
  }

  registerOnClick() : void {
    if (this.registerForm.valid){
      // GRAB THE FIELDS
      const uname = this.usernameInput?.nativeElement.value;
      const apellidos = this.apellidosInput?.nativeElement.value;
      const nacimiento = this.nacimientoInput?.nativeElement.value;      
      const profesion = this.profesionInput?.nativeElement.value;   
      const vacuna = this.vacunaInput?.nativeElement.value;   
    
      // all successful, send the user to the API
      // GENERATE USER
      const user = {
        "nombre": uname,
        "apellidos": apellidos,
        "fechanacimiento": nacimiento,
        "profesion": profesion,
        "vacuna": vacuna
      } as User;

      this.UserService.registerUser(user).subscribe(
        (response) =>{
          alert(`User registered: ${response.nombre}`);
        },
        (error) =>{
          alert(`User was not registered`);
        }
      );
    }
    else { 
      console.log("mal"); 
    }
  }

}
