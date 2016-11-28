import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';
import { AboutComponent } from './about';
import { ArticleItemComponent } from './article-item';
import { ArticleListComponent } from './article-list';
import { ContactUsComponent } from './contact-us';
import { IonicModule } from 'ionic-angular';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule
  ],
  declarations: [
    AboutComponent,
    ArticleItemComponent,
    ArticleListComponent,
    ContactUsComponent
  ],
  providers: [],
  exports: [
    CommonModule,
    AboutComponent,
    ArticleItemComponent,
    ArticleListComponent,
    ContactUsComponent
  ]
})
export class ComponentsModule {

}
