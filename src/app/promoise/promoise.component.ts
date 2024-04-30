import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-promoise',
  templateUrl: './promoise.component.html',
  styleUrl: './promoise.component.scss'
})
export class PromoiseComponent implements OnInit {
  constructor(){}

  DellAvailable(){
    return true;
  }

  HpAvailable(){
    return false;
  }

  Dell = {
    brand:'Dell',
    hardDisk:'2TB',
    color:'Black'
  }
  Hp = {
    brand:'HP',
    hardDisk:'500 SSD',
    color:'Silver'
  }

  notAvailable = {
    brand:'Not Available',
    status:'Failed...'
  }

  purchaded:any;
  ngOnInit(): void {
   let buyLaptop = new Promise((resolve,reject)=>{
    if(this.DellAvailable()){
      return setTimeout(()=>{
        resolve(this.Dell);
      },5000);
    } else if(this.HpAvailable()){
      return setTimeout(()=>{
        resolve(this.Hp);
      },5000);
    } else{
      return setTimeout(()=>{
        reject("Laptop is not available in store.");
      }, 5000);
    }
   });

   buyLaptop.then(res=>{
    this.purchaded = res;
    console.log("Then code : " + res);
   }).catch(res=>{
    this.purchaded = res;
    console.log("Catch code : " + res);
   })
  }

}
