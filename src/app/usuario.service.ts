import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuariosURL = 'https://reqres.in/api/users?page=2';

  constructor( private http: HttpClient ) { }

  listar(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.usuariosURL);
  }

}
