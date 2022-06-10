import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, of, Subject } from "rxjs";
import { Fruta } from "../interfaces/fruta";


@Injectable({
    providedIn: 'root'
})

export class FrutaService {
    url = "https://daw2021-2022-default-rtdb.firebaseio.com/Marcadona/Fruta.json";
    
    frutaSubject = new Subject<Fruta[]>();

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

    public getFrutas(): Observable<Fruta[]> {
    
          return this.http.get<{ [key: string]: Fruta }>(this.url, this.httpOptions)
            .pipe(
              map(sObjecte => Object.entries(sObjecte)),
              map(sArray => sArray.map(s => {
                s[1].Nom = s[1].Nom ? s[1].Nom : 'Nom';
                s[1].Precio = s[1].Precio ? s[1].Precio : '0';
                s[1].Img = s[1].Img ? s[1].Img : '';
                return s[1] })));
        }

}

