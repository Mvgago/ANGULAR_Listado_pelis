import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { Films } from './models/films';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent {
  title = 'app-angular';
  filmsArray: Films[] = [
    {id: 1, name: "¿Qué he hecho yo para merecer esto?", director: "Pedro Almodovar"},
    {id: 2, name: "Lolita", director: "Adrian Lyne"},
    {id: 3, name: "Mamma Roma", director: "Pier Paolo Pasolini"},
    {id: 4, name: "Festen", director: "Thomas Vinterberg"},
    {id: 5, name: "Happy together", director: "Wong Kar-wai"},



  ];

  selectedFilm: Films = new Films();

  openForEdit(Films: Films) {
    this.selectedFilm = Films;
  }

  addOrEdit(){
    if(this.selectedFilm.id === 0){
      this.selectedFilm.id = this.filmsArray.length + 1;
      this.filmsArray.push(this.selectedFilm);
    }
    this.selectedFilm = new Films();
  }

  delete(){
    if(confirm('¿Estás seguro de querer eliminarlo?')) {
      this.filmsArray = this.filmsArray.filter(x => x != this.selectedFilm)
      this.selectedFilm = new Films();
    }
  }
}
