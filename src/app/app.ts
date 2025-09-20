import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Tasks } from './components/tasks/tasks';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-root',
  imports: [ Header, Tasks, FontAwesomeModule ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
