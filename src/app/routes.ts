import { Routes } from '@angular/router';

import { LandingComponent } from './components/landing/landing.component';
import { AppComponent } from './app.component';
import { EditLayoutComponent } from './components/edit-layout/edit-layout.component';
import { ViewLayoutComponent } from './components/view-layout/view-layout.component';




export const ROUTES: Routes = [{ path: '', redirectTo: 'landing', pathMatch: 'full' },
                               { path: '', component: LandingComponent },
                               { path: 'item', component: AppComponent },
                               { path: 'item/:id', component: ViewLayoutComponent,
                                 children: [
                                   { path: 'child/:id', component: ViewLayoutComponent }
                                 ]
                              },
                               { path: 'edit', component: EditLayoutComponent },
                               { path: 'edit/:id', component: EditLayoutComponent,
                                 children: [
                                   {path: 'child/:id', component: EditLayoutComponent }
                                 ]
                               },
];
