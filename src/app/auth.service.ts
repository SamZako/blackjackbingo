// src/app/auth.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated: boolean = false;

  authenticate(password: string): boolean {
    // Simple password check
    if (password === 'password') {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }

    return this.isAuthenticated;
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }
}
