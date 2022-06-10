import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, of, Subject } from "rxjs";
import { Pescado } from "../interfaces/pescado";


@Injectable({
    providedIn: 'root'
})

export class PescadoService {
    url = "https://daw2021-2022-default-rtdb.firebaseio.com/Marcadona/Pescado.json";
    
    verduraSubject = new Subject<Pescado[]>();

    private httpOptions = {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
    };

    constructor(private http: HttpClient) { }

    // public getVerduras(): Observable<Verdura[]> {
    //     // let verduras: Verdura[] =
    //     this.http.get<any>(this.url, this.httpOptions).subscribe(results => {
    //         results = JSON.parse(JSON.stringify(results));
    //         console.log(results);
    //         this.verduraSubject.next(results);
            
    //     });

    //     return this.verduraSubject;
        
    // }

    public getPescados(): Observable<Pescado[]> {
    
          return this.http.get<{ [key: string]: Pescado }>(this.url, this.httpOptions)
            .pipe(
              map(sObjecte => Object.entries(sObjecte)),
              map(sArray => sArray.map(s => {
                s[1].Nom = s[1].Nom ? s[1].Nom : 'Nom';
                s[1].Precio = s[1].Precio ? s[1].Precio : '0';
                s[1].Img = s[1].Img ? s[1].Img : '';
                return s[1] })));
        }

}

