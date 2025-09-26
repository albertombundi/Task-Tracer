import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes, withDebugTracing } from '@angular/router';
import { Tasks } from './app/components/tasks/tasks';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';



const appRoutes: Routes = [
  { path: '', component: Tasks },
];

bootstrapApplication(App, {
  providers: [
    provideRouter(appRoutes, withDebugTracing()),
    provideHttpClient()
  ]
});

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
