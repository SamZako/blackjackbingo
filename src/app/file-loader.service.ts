// src/app/file-loader.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileLoaderService {
  constructor(private http: HttpClient) {}

  loadFile(filename: string): Observable<string> {
    return this.http.get(`assets/lists/${filename}`, { responseType: 'text' });
  }
}
