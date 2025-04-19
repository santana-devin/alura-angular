import { Component } from '@angular/core';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent {

  alternarFavorito() {
    this.livro.favorito = !this.livro.favorito
  }

  livro = {
    titulo: "As ondas",
    autoria: "Virginia Woolf",
    favorito: false,
    imagem: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSttFETw4OfwsDU_AXnKS_3dqp5WyuaENC84sXrkfN2RIYWkwOhZIEZ0CZIHO-X6NthVw7bK8dIcwCLrRbppgBQRoCggEnyj0UJGjYHm-Jn&usqp=CAc"
  }

}
