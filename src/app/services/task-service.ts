import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../Task';
import { API_URL } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = API_URL;

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }
}
