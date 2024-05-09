import { Routes } from '@angular/router';
import { IntegrationsComponent } from './integrations/integrations.component';

export const routes: Routes = [
  { path: '', redirectTo: '/integrations', pathMatch: 'full' },
    {
        path: 'integrations',
        component: IntegrationsComponent,
        title: 'Home page'
    },
];
