import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes: any[] = [];
  termino: string;

  constructor(private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _heroesService: HeroesService) {

  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      // console.log(params['termino']);
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      console.log(this.heroes);

    });
  }

  verHeroe(idx: number) {
    this._router.navigate(['/heroe', idx]);
  }
}
