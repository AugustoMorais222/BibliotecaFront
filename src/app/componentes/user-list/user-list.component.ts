import { Component, OnInit} from '@angular/core';
import { UsuarioService } from '../../service/UsuarioService.service';
import { Usuario } from '../../models/Usuario';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';


@Component({
  selector: 'app-user-list',
  imports: [TableModule, 
    FormsModule, 
    CommonModule,
    ButtonModule,
    RippleModule
  ],  
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})

export class UserListComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.carregarUsuarios();
  }

  carregarUsuarios() {
    this.usuarioService.findAll().subscribe((dados) => {
      this.usuarios = dados;
    });
  }

  onRowEditInit(usuario: Usuario) {
    console.log('Editando:', usuario);
  }

  onRowEditSave(usuario: Usuario) {
    if (usuario._id) {
      this.usuarioService.update(usuario._id, usuario).subscribe(() => {
        console.log('Atualizado com sucesso');
      });
    }
  }

  onRowEditCancel(usuario: Usuario, index: number) {
    console.log('Edição cancelada');
    this.carregarUsuarios();
  }

  deletarUsuario(id: string) {
    console.log("ID: "+id);
    this.usuarioService.delete(id).subscribe(() => {
      this.usuarios = this.usuarios.filter((u) => u._id !== id);
    });
  }
}
