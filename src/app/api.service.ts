import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://api.spotify.com/v1';
  private accessToken = 'BQBc3zZwZFda_tKGtOGNwbjn8Er3P-PkuenRJwtofoB0zzoQipWJzzsRokn1crTOa0Hs-6_dwTcNORMhCoJ2NkgaU4SBuFvUuBTvemtaDfMOAK4P-VQ'; // Replace with your actual access token

  constructor(private http: HttpClient) {}

  getRelatedArtists(artistId: string): Observable<any> {
    const url = `${this.apiUrl}/artists/${artistId}/related-artists`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.accessToken}`);
    return this.http.get(url, { headers });
  }

  getArtistId(artistName: string): Observable<any> {
    const url = `${this.apiUrl}/search?q=${artistName}&type=artist&limit=1`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.accessToken}`);
    return this.http.get(url, { headers });
  }
}
