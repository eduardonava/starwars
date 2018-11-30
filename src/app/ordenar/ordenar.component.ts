import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: []
})
export class OrdenarComponent implements OnInit {

  public tipo:string = '';
  public resultado:any = [];

  constructor(private http: HttpClient, private activateRoute: ActivatedRoute) {

    this.tipo = this.activateRoute.snapshot.params['id'];


    this.http.get('https://swapi.co/api/people/').subscribe((res:any) => {
      console.log(res);
        this.resultado = res.results.find(data => {
          // if(data.name.toLowerCase() == this.nombre.toLowerCase()){
          //     return data;
          // }
        }
      );

    });
  }

  ngOnInit() {
  }

}