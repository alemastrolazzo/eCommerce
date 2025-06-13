import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private apiUrl = 'http://localhost:8080/api/image';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Image[]> {
    return this.http.get<Image[]>(`${this.apiUrl}/getAll`);
  }

  getById(id: number): Observable<Image> {
    return this.http.get<Image>(`${this.apiUrl}/${id}`);
  }

  create(image: Image): Observable<Image> {
    return this.http.post<Image>(`${this.apiUrl}/save`, Image);
  }

  update(id: number, image: Image): Observable<Image> {
    return this.http.put<Image>(`${this.apiUrl}/${id}`, Image);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
