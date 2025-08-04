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

//jus d orange
 titre: string = 'jus d\'orange';
  description: string = 'Un jus d\'orange frais et vitaminé';
  image: string = 'assets/jusdorange.jpg';
  alt: string = 'jus d\'orange';


  //jus de bissap
  titreBissap: string = 'jus de bissap';
  descriptionBissap: string = 'Un jus de bissap rafraîchissant';
  imageBissap: string = 'assets/jusbisp.jpg';
  altBissap: string = 'jus de bissap';
  //jus de gingembre
  titreGingembre: string = 'jus de gingembre';
  descriptionGingembre: string = 'Un jus de gingembre épicé et énergisant';
  imageGingembre: string = 'assets/jusgin.jpg';
  altGingembre: string = 'jus de gingembre';
  //jus mangue
  titreMangue: string = 'jus de mangue';
  descriptionMangue: string = 'Un jus de mangue sucré et tropical';
  imageMangue: string = 'assets/imagmg.jpg';
  altMangue: string = 'jus de mangue';
  name:string="moussa";
}

