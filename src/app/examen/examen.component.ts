import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styles: []
})
export class ExamenComponent implements OnInit {

  public nombre:string = '';
  public resultado:any = [];
  public todos:any = [];

  constructor(private http: HttpClient, private activateRoute: ActivatedRoute) {

    this.nombre = this.activateRoute.snapshot.params['id'];


    this.http.get('https://swapi.co/api/people/').subscribe((res:any) => {
      console.log(res);
      this.todos= res;
        this.resultado = res.results.find(data => {
          
          if(data.name.toLowerCase() == this.nombre.toLowerCase()){
              return data;
          }
        }
      );

    });
  }

  ngOnInit() {
  }

}
