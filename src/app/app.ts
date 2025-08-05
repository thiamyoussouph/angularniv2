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
  tabarticle = [
    { titre: 'jus d or', description: 'Un jus d or frais et vitaminé', image: 'assets/jusdorange.jpg', alt: 'jus d or',prix:1500 ,dispo:true }
    ,
    { titre: 'jus de mangue', description: 'Un jus de mangue sucré et rafraîchissant', image: 'assets/imagmg.jpg', alt: 'jus de mangue',prix:2000 ,dispo:false},
     { titre: 'jus de bisap', description: 'Un jus de bisap délicieux et naturel', image: 'assets/jusbisp.jpg', alt: 'jus de bisap' ,prix:2500 ,dispo:true},
    { titre: 'jus d gingembre', description: 'Un jus d gingembre épicé et énergisant', image: 'assets/jusgin.jpg', alt: 'jus d gingembre' ,prix:3000 ,dispo:true}
    ,   { titre: 'jus de mangue', description: 'Un jus de mangue sucré et rafraîchissant', image: 'assets/imagmg.jpg', alt: 'jus de mangue' ,prix:2000 ,dispo:false},
     { titre: 'jus de bisap', description: 'Un jus de bisap délicieux et naturel', image: 'assets/jusbisp.jpg', alt: 'jus de bisap' ,prix:2500 ,dispo:true},
    { titre: 'jus d gingembre', description: 'Un jus d gingembre épicé et énergisant', image: 'assets/jusgin.jpg', alt: 'jus d gingembre' ,prix:3000 ,dispo:true}
  ]

  name: string = "moussa";
  message: string = '';
  getmessage(event: string) {
    this.message = "merci d avoir liker " + event;
    console.log(event);
  }

}

