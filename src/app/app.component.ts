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
    //this.peliculas = await this._peliculas.getHeroes().toPromise(); //se trae siempre
    //this.peliculas= await this._peliculas.getHeroes().toPromise()
    //this.get_peliculas()
    //console.log("ttteee",this.peliculas.response)
  }

  async get_peliculas() {
    await this._peliculas.getPeliculas().subscribe((data: any) => {
      console.log(data);
      
      this.peliculas = data.response;
      var metascores = this.peliculas
      metascores=this.ordenar.transform(metascores, 'desc', 'metascore')
      console.log("ordenar por metascore", metascores)
      var body={
        "RUT": "19668857-9",
        "Peliculas" : metascores
      }
      console.log("ordenar por metascore", body)
      this._peliculas.postConfirmacion(body).subscribe()
    });

  }
  // get_peliculas2(){

  // }

}

