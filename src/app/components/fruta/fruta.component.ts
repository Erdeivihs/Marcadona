import { Component, OnInit } from '@angular/core';
import { Fruta } from 'src/app/interfaces/fruta';
import { FrutaService } from 'src/app/services/fruta.service';

@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.css']
})
export class FrutaComponent implements OnInit {

  frutas: Fruta[] = [];

  constructor(private frutaService: FrutaService ) { }

  ngOnInit(): void {
    this.getFrutas();
  }

  public getFrutas(){
    this.frutaService.getFrutas().subscribe(s => this.frutas = s);
    console.log(this.frutas);
   
  }

}
