import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, of, Subject } from "rxjs";
import { Verdura } from "../interfaces/verdura";


@Injectable({
    providedIn: 'root'
})

export class VerduraService {
    url = "https://daw2021-2022-default-rtdb.firebaseio.com/Marcadona/Verdura.json";
    
    verduraSubject = new Subject<Verdura[]>();

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

    public getVerduras(): Observable<Verdura[]> {
    
          return this.http.get<{ [key: string]: Verdura }>(this.url, this.httpOptions)
            .pipe(
              map(sObjecte => Object.entries(sObjecte)),
              map(sArray => sArray.map(s => {
                s[1].Nom = s[1].Nom ? s[1].Nom : 'Nom';
                s[1].Precio = s[1].Precio ? s[1].Precio : '0';
                s[1].Img = s[1].Img ? s[1].Img : '';
                return s[1] })));
        }

}

