import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './components/header/header';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormsModule} from '@angular/forms';
<<<<<<< HEAD
import { RouterModule } from '@angular/router'; 
import { Footer } from './components/footer/footer';
=======
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';

>>>>>>> c7470ae (changes)

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [ 
    Header,  
    FontAwesomeModule, 
    CommonModule, 
    FormsModule,
    RouterModule,
    Footer
],
 templateUrl: './app.html',
 styleUrls: ['./app.css']
=======
  imports: [ Header, RouterOutlet, FontAwesomeModule , HttpClientModule, CommonModule, FormsModule, RouterModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
>>>>>>> c7470ae (changes)
})
export class App {
 
}