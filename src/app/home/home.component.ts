// src/app/home/home.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  password: string = ''; // Declare the password variable here
  isLoggedIn: boolean = false;

  constructor(private router: Router, private authService: AuthService) {
    // Check if the user is already logged in
    this.isLoggedIn = this.authService.getIsAuthenticated();
  }

  checkPassword(): void {
    this.isLoggedIn = this.authService.authenticate(this.password);

    if (this.isLoggedIn) {
      // Update the URL to '/home' after successful login
      this.router.navigate(['/home']);
    } else {
      alert('Incorrect password. Please try again.');
    }
  }
}
