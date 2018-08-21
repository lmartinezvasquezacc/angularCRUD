import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'ChickenTrace';
  msg: String = '';

  farms = [
  {'id': '6', 'renspa': '01.023.3.0123', 'name': 'farm 6'},
  {'id': '7', 'renspa': '01.023.3.0124', 'name': 'farm 7'},
  {'id': '8', 'renspa': '01.023.3.0125', 'name': 'farm 8'}
  ];
  
  model: any = {};
  model2: any = {};
  hideUpdate: boolean = true;

  addFarm(): void {
    this.farms.push(this.model);
    this.msg = 'Farm added';
  }

  deleteFarm(i): void {
    var answer = confirm('Are you sure?')
    if(answer){
      this.farms.splice(i, 1);
      this.msg = 'Farm deleted';
    }
    
  }
  
  myValue;
  
  editFarm(i): void {
    this.hideUpdate = false;
    this.model2.id = this.farms[i].id;
    this.model2.renspa = this.farms[i].renspa;
    this.model2.name = this.farms[i].name;
    this.myValue = i;
  }
  
  updateFarm(): void {
    let i = this.myValue;
    for (let j = 0; j < this.farms.length; j++){
      if(i == j){
        this.farms[i] = this.model2;
        this.model2 = {};
        this.msg = 'Farm updated';
        this.hideUpdate = true;
      }
    }
  }
  
  closeAlert(): void {
    this.msg = '';
  }
  


}
