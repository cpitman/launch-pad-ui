import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EditAppInstanceComponent } from './edit-app-instance/edit-app-instance.component';
import { AppCatalogComponent } from './app-catalog/app-catalog.component';
import { AppListComponent } from './app-list/app-list.component';
import { AppDetailsComponent } from './app-details/app-details.component';
import { MenuComponent } from './menu/menu.component';
import { CreateAppInstanceComponent } from './create-app-instance/create-app-instance.component';
import { AppInstanceEditorComponent } from './app-instance-editor/app-instance-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    EditAppInstanceComponent,
    AppCatalogComponent,
    AppListComponent,
    AppDetailsComponent,
    MenuComponent,
    CreateAppInstanceComponent,
    AppInstanceEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/catalog', pathMatch: 'full'},
      { path: 'catalog', component: AppCatalogComponent},
      { path: 'app/:name', component: AppDetailsComponent},
      { path: 'app/:name/create', component: CreateAppInstanceComponent},
      { path: 'app/:name/:id', component: EditAppInstanceComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
