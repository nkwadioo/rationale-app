import { bootstrapApplication } from '@angular/platform-browser';
import AOS from 'aos';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .then(() => {
    AOS.init({
      once: true,
      duration: 900,
      offset: 80,
      easing: 'ease-out-cubic',
    });
  })
  .catch((err) => console.error(err));
