import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { apolloProviders } from './apollo.config';

bootstrapApplication(AppComponent, {
  providers: [...apolloProviders],
});
