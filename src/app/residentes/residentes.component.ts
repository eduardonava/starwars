import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-residentes',
  templateUrl: './residentes.component.html',
  styles: []
})
export class ResidentesComponent implements OnInit {

  public nombre:string = '';
  public resultados:any = [];
  public datos = "";

  constructor(private http: HttpClient) {
    
  }


  ngOnInit() {

    this.http.get('https://swapi.co/api/planets/').subscribe((res:any) => {
      
      for (let i = 0; i < res.results.length; i++) {
          for (let y = 0; y < res.results[i].residents.length; y++) {
            

            if (res.results[i].residents[y]) {
                this.http.get(res.results[i].residents[y]).subscribe((res2:any) => {

                  if (res2) {
                    this.resultados.push(
                      {
                        'name' : res.results[i].name,
                        'persona': res2.name
                      }
                    );
                  }
                  
                });

            }
          }
      }

    });
  }

}