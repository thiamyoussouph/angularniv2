import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-article',
  imports: [],
  templateUrl: './article.html',
  styleUrl: './article.css'
})
 export class Article {
 @Input() titre: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
  @Input() alt: string = '';
  @Input() name: string = '';
  @Output() info=new EventEmitter<string>();
compteur:number=0;
compter(){

  this.compteur++;
  this.info.emit(this.titre);
  

}
decompter(){
 if(this.compteur>0){
  this.compteur--;
 }

}

}
