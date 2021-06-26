import { Component, OnInit } from '@angular/core';
import {CatalogueService} from "../catalogue.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";


@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  public categories: any;
  public products: any;

  constructor(public catService:CatalogueService,
              private route: ActivatedRoute,
              private router:Router
  ) {
// //pour récuperer le chemin qui est dans les url après 4200 ex : /sales/2/1
//     this.router.events.subscribe((val)=>{
//       if(val instanceof NavigationEnd){
//         let url = val.url;
//         console.log(url);
//         //si je m'arrete la j'obtient ex : /sales/2/1
//
//         // Pour récuperer l'id envoyé dans le url
//         // console.log(this.route.snapshot.params.p1);
//         let p1=this.route.snapshot.params.p1;
//         //si je veux un affichage de tout les articles
//         if(p1==1) {
//           this.getCategories();
//           this.getProducts("/products");
//         }
//         //si je veux un affichage par catégorie
//         else if(p1==2)
//         {
//           let idcat=this.route.snapshot.params.p2;
//           this.getProducts("/categories/"+idcat+"/products");
//           this.getCategories();
//         }
//       }
//     });

  }

  ngOnInit(): void {
    //pour récuperer le chemin qui est dans les url après 4200 ex : /sales/2/1
    this.router.events.subscribe((val)=>{
      if(val instanceof NavigationEnd){
        let url = val.url;
        console.log(url);
      }
    });
    // Pour récuperer l'id envoyé dans le url
    // console.log(this.route.snapshot.params.p1);
    let p1=this.route.snapshot.params.p1;
    //si je veux un affichage de tout les articles
    if(p1==1) {
      this.getCategories();
      this.getProducts("/products");
    }
    //si je veux un affichage par catégorie
    else if(p1==2)
    {
      let idcat=this.route.snapshot.params.p2;
      this.getProducts("/categories/"+idcat+"/products");
      this.getCategories();
    }

  }

  private getCategories() {
    this.catService.getResource("/categories")
      .subscribe(data=>{
        this.categories=data;
      },err => {
        console.log(err);
      })
  }

  private getProducts(url: string) {
    this.catService.getResource(url)
      .subscribe(data=>{
        this.products=data;
      },err => {
        console.log(err);
      })
  }

  getProductsByCat(c: any) {
    this.router.navigateByUrl('/sales/2/'+c.id);
  }
}
