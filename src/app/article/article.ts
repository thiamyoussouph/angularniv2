import { Component, Input } from '@angular/core';

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
compteur:number=0;
compter(){
  this.compteur++;

}
decompter(){
 if(this.compteur>0){
  this.compteur--;
 }

}

}
