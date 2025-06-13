import { Component } from '@angular/core';
import {Product} from "../../models/product";
import {Image} from "../../models/image";
import {ProductService} from "../../services/product.service";
import {ImageService} from "../../services/image.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  prodotti: Product[] = [];
  image: Image[] = [];
  prodottoSingolo: Product | null = null;
  imageSingola: Image | null = null;
  prodottoSelezionato: Product | null = null;

  constructor(private prodottiService: ProductService,private imageService: ImageService) {}


  ngOnInit() {
    this.loadProdotti();
    this.loadImmagini();
  }

  loadImmagini(){
    this.imageService.getAll().subscribe(data => {
      this.image = data;
    });
  }

  loadImmaginiById(id:number){
    this.imageService.getById(id).subscribe(data => {
      this.imageSingola = data;
    });
  }

  loadProdottiById(id: number){
    this.prodottiService.getById(id).subscribe(data => {
      this.prodottoSingolo = data;
    });
  }

  loadProdotti() {
    this.prodottiService.getAll().subscribe(data => {
      this.prodotti = data;
    });
  }

  aggiungiAlCarrello() {
    if (this.prodottoSelezionato) {
        this.prodottiService.create(this.prodottoSelezionato).subscribe();
      }
    }
}
