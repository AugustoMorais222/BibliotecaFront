import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseUrl = "http://localhost:3000/usuario"

  constructor(private http: HttpClient) { }

  save(usuario: Usuario): Observable<Usuario> {
    return  this.http.post<Usuario>(this.baseUrl, usuario);
  }

  update(id: string, usuario: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>(`${this.baseUrl}/${id}`,usuario)
  }

  delete(id: string): Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/${id}`)
  }

  findById(id: string): Observable<Usuario>{
    return this.http.get<Usuario>(`${this.baseUrl}/${id}`)
  }

  findAll(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.baseUrl);
  }


}
