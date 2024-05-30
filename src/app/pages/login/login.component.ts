import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from "../../components/btn/btn.component";

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    imports: [BtnComponent,CommonModule]
})
export class LoginComponent {

  

}
