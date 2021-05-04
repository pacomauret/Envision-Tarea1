import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class PeliculasService {

  public link="https://prod-61.westus.logic.azure.com/workflows/984d35048e064b61a0bf18ded384b6cf/triggers/manual/paths/invoke?api-version=2016-06-01&sp=/triggers/manual/run&sv=1.0&sig=6ZWKl4A16kST4vmDiWuEc94XI5CckbUH5gWqG-0gkAw"
  public confirmacion="https://prod-62.westus.logic.azure.com/workflows/779069c026094a32bb8a18428b086b2c/triggers/manual/paths/invoke?api-version=2016-06-01&sp=/triggers/manual/run&sv=1.0&sig=o_zIF50Dd_EpozYSPSZ6cWB5BRQc3iERfgS0m-4gXUo"
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

  /** GET heroes from the server */
  getPeliculas() {
    return this.http.get(this.link) 
      
  }
  postConfirmacion(body){
    return this.http.post(this.confirmacion,body)
  }




}