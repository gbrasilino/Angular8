import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Filme} from '../filme';
import {FilmeService} from '../filme.service';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-lista-filme',
  templateUrl: './lista-filme.component.html',
  styleUrls: ['./lista-filme.component.css']
})
export class ListaFilmeComponent implements OnInit {

  filmes: Observable<Filme[]>;
  constructor(private filmeService: FilmeService, private rota: Router) { }

  ngOnInit() {
  this.reloadData();
  }

  reloadData() {
    this.filmes = this.filmeService.getFilmesList();
  }

  deletarFilme(id: number) {
    this.filmeService.deleteFilme(id).subscribe(data => {console.log(data); this.reloadData();} ,
       error => console.log(error));
  }

}



