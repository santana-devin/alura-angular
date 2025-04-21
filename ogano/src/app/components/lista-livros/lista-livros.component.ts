import { Component, OnInit } from '@angular/core';
import { livros } from '../../mock-livros';
import { GeneroLiterario, Livro } from '../livro/livro';
import { GeneroLiterarioComponent } from '../genero-literario/genero-literario.component';

@Component({
  selector: 'app-lista-livros',
  imports: [GeneroLiterarioComponent],
  templateUrl: './lista-livros.component.html',
  styleUrl: './lista-livros.component.css'
})
export class ListaLivrosComponent implements OnInit{
  generos: GeneroLiterario[] = [];
  livrosPorGenero: Map<string, Livro[]> = new Map();

    ngOnInit() {
      this.livrosPorGenero = new Map();

      livros.forEach((livros) =>{
        const generoId = livros.genero.id
        if(!this.livrosPorGenero.has(generoId)){
          this.livrosPorGenero.set(generoId, [])
        }

        this.livrosPorGenero.get(generoId)?.push(livros)
      })
      this.generos = [
        {
            id: 'romance',
            value: "Romance",
            livros: this.livrosPorGenero.get("romance") ?? []
        },
        {
            id: 'misterio',
            value: 'Mistério',
            livros: this.livrosPorGenero.get("misterio") ?? []
        },
        {
            id: 'fantasia',
            value: 'Fantasia',
            livros: this.livrosPorGenero.get("fantasia") ?? []
        },
        {
            id: 'ficcao-cientifica',
            value: 'Ficção Científica',
            livros: this.livrosPorGenero.get("ficcao-cientifica") ?? []
        },
        {
            id: 'tecnicos',
            value: 'Técnicos',
            livros: this.livrosPorGenero.get("tecnicos") ?? []
        },
    ]
    console.log(this.livrosPorGenero)
    }
}
