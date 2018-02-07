
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from 'clarity-angular';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ROUTES } from './routes';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { ViewLayoutComponent } from './components/view-layout/view-layout.component';
import { EditLayoutComponent } from './components/edit-layout/edit-layout.component';
import { ViewComponent } from './components/view/view.component';
import { ItemComponent } from './components/view/item/item.component';
import { ParentItemComponent } from './components/view/parent-item/parent-item.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SubnavComponent } from './components/subnav/subnav.component';
import { FooterComponent } from './components/footer/footer.component';

import { ItemService } from './shared/services/item.service';
import { EditComponent } from './components/edit/edit.component';
import { EditButtonsComponent } from './components/edit/edit-buttons/edit-buttons.component';
import { ModalEditsComponent } from './components/edit/modal-edits/modal-edits.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ViewLayoutComponent,
    ViewComponent,
    EditLayoutComponent,
    ItemComponent,
    HeaderComponent,
    SidenavComponent,
    SubnavComponent,
    FooterComponent,
    ParentItemComponent,
    EditComponent,
    EditButtonsComponent,
    ModalEditsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    ClarityModule.forRoot(),
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
