import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';
import { AboutComponent } from './about';
import { ArticleItemComponent } from './article-item';
import { ArticleListComponent } from './article-list';
import { IonicModule } from 'ionic-angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HttpModule,
    JsonpModule,
  ],
  declarations: [
    AboutComponent,
    ArticleItemComponent,
    ArticleListComponent,
  ],
  providers: [],
  exports: [
    CommonModule,
    AboutComponent,
    ArticleItemComponent,
    ArticleListComponent,
  ]
})
export class ComponentsModule {

}
