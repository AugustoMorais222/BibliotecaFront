import { Component } from '@angular/core';
import { CardModule }        from 'primeng/card';
import { InputTextModule }   from 'primeng/inputtext';
import { PasswordModule }    from 'primeng/password';
import { InputMaskModule }   from 'primeng/inputmask';
import { CalendarModule }    from 'primeng/calendar';
import { ButtonModule }      from 'primeng/button';
import { FormsModule }       from '@angular/forms';
import { Usuario } from '../../models/Usuario';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../../service/UsuarioService.service';

@Component({
  selector: 'app-cadastro-cliente',
  imports: [CardModule,
    InputTextModule,
    PasswordModule,
    InputMaskModule,
    CalendarModule,
    ButtonModule,
    FormsModule
  ],
  templateUrl: './cadastro-cliente.component.html',
  styleUrl: './cadastro-cliente.component.css'
})
export class CadastroClienteComponent {
  constructor(private usuarioService: UsuarioService){}
    usuario: Usuario = {
      nome: '',
      email: '',
      senha: '',
      cpf: '',
      dataNascimento: new Date(),
      dataCadastro: new Date()
    };
  
  salvarUsuario(form: NgForm) {
    if (form.valid) {
      this.usuarioService.save(this.usuario)
      .subscribe({
        next: (usuarioSalvo) => {
          console.log('Usuário salvo com sucesso:', usuarioSalvo);
          form.resetForm();
        },
        error: (erro) => {
          console.error('Erro ao salvar usuário:', erro);
        }
      });
    }
  }
}
