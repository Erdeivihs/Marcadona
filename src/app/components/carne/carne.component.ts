import { Component, OnInit } from '@angular/core';
import { Carne } from 'src/app/interfaces/carne';
import { CarneService } from 'src/app/services/carne.service';

@Component({
  selector: 'app-carne',
  templateUrl: './carne.component.html',
  styleUrls: ['./carne.component.css']
})
export class CarneComponent implements OnInit {

  carnes: Carne[] = [];

  constructor(private carneService: CarneService) { }

  ngOnInit(): void {
    this.getCarnes();
  }

  public getCarnes(){
    this.carneService.getCarnes().subscribe(s => this.carnes = s);
    console.log(this.carnes);
   
  }

}
