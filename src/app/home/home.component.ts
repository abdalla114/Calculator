import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isDark:boolean = true
  Darktoggle(){
    this.isDark = !this.isDark
  }
  result:any = ''
getitem(item:string){
this.result+=item
if(item == 'AC' || item =='+/-'){
  this.result= ''
}
}
equal():void{
  this.result = eval(this.result).toFixed(2)
}
}
