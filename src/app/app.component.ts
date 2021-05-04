import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { PeliculasService } from './app.service';
import { ordenar } from './ordenar.pipe'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public peliculas: any;
  public ordenar = new ordenar();
  title = 'peliculas';

  constructor(private http: HttpClient, private _peliculas: PeliculasService) { }
  async ngOnInit() {

  }

  async get_peliculas() {
    await this._peliculas.getPeliculas().subscribe((data: any) => {
      
      this.peliculas = data.response;
      var metascores = this.peliculas
      metascores=this.ordenar.transform(metascores, 'desc', 'metascore')
      var body={
        "RUT": "19668857-9",
        "Peliculas" : metascores
      }
      this._peliculas.postConfirmacion(body).subscribe()
    });

  }

}

