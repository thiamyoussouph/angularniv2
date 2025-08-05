import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Article } from "./article/article";
import { Navbar } from "./navbar/navbar";
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, Article, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('senjus');
tabarticle=[
 {  titre: 'jus d or', description: 'Un jus d or frais et vitaminé', image: 'assets/jusdorange.jpg', alt: 'jus d or' }
, 
 {  titre: 'jus de mangue', description: 'Un jus de mangue sucré et rafraîchissant', image: 'assets/imagmg.jpg', alt: 'jus de mangue' },
 {  titre: 'jus de bisap', description: 'Un jus de bisap délicieux et naturel', image: 'assets/jusbisp.jpg', alt: 'jus de bisap' },
 {  titre: 'jus d gingembre', description: 'Un jus d gingembre épicé et énergisant', image: 'assets/jusgin.jpg', alt: 'jus d gingembre' }
]

  name:string="moussa";
message: string = '';
getmessage(event: string) {
   this.message="merci d avoir liker "+event;
  console.log(event);
}

}

