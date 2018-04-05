import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ApiService} from "./services/api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('defaultOption') defaultOption: ElementRef;

  movies : any[];
  defaultValue: boolean = true;
  selectedMovie: any = 'Movie:';

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.getPopularMovies();
  }

  getPopularMovies() {
    this.apiService.getMovies().subscribe(response => {
      this.movies = response.results;
    })
  }

  selectMovie() {
    //do what you want with selected movie
    this.defaultValue = false;
  }

  toDefault() {
    this.defaultOption.nativeElement.selected = true;
    this.defaultValue = true;
  }
}
