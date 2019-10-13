import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';


@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {
  usuarios: Usuario[];

  constructor(private usuarioService: UsuarioService) {
    this.usuarios = [];
   }

  ngOnInit() {
    this.usuarioService.listar().subscribe(
      res => {
        this.usuarios = res[ '' ];
      }
    );
  }
  listar() {
    this.usuarioService.listar().subscribe(res => {
      this.usuarios = res[ '' ];
      console.log(res);
    });
  }

}
