import { Component, OnInit } from '@angular/core';
import { Verdura } from 'src/app/interfaces/verdura';
import { VerduraService } from 'src/app/services/verdura.service';

@Component({
  selector: 'app-verdura',
  templateUrl: './verdura.component.html',
  styleUrls: ['./verdura.component.css']
})
export class VerduraComponent implements OnInit {

  verduras: Verdura[] = [];

  constructor(private verduraService: VerduraService) { 
  }

  ngOnInit(): void {
    this.getVerdura();
  }

  public getVerdura(){
    this.verduraService.getVerduras().subscribe(s => this.verduras = s);
    console.log(this.verduras);
   
  }

}
