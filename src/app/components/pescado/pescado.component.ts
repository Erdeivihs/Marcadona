import { Component, OnInit } from '@angular/core';
import { Pescado } from 'src/app/interfaces/pescado';
import { PescadoService } from 'src/app/services/pescado.service';

@Component({
  selector: 'app-pescado',
  templateUrl: './pescado.component.html',
  styleUrls: ['./pescado.component.css']
})
export class PescadoComponent implements OnInit {

  pescados: Pescado[] = [];

  constructor(public pescadoService: PescadoService) { }

  ngOnInit(): void {
    this.getPescados();
  }

  public getPescados(){
    this.pescadoService.getPescados().subscribe(s => this.pescados = s);
    console.log(this.pescados);
   
  }

}
