import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ModelDrivenFormComponent } from './model-driven-form/model-driven-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { NestedModelDrivenFormComponent } from './nested-model-driven-form/nested-model-driven-form.component';
import { AddressComponent } from './nested-model-driven-form/address/address.component';

const appRoutes: Routes = [
  { path: 'model-driven', component: ModelDrivenFormComponent },
  { path: 'nested-model-driven', component: NestedModelDrivenFormComponent },
  { path: 'template-driven', component: TemplateDrivenFormComponent }/*,
  { path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }*/
];

@NgModule({
  declarations: [
    AppComponent,
    ModelDrivenFormComponent,
    TemplateDrivenFormComponent,
    NestedModelDrivenFormComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
