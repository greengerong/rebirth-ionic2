import { NgModule, SkipSelf, Optional } from '@angular/core';
import { RebirthHttpModule } from 'rebirth-http';
import { RebirthStorageModule } from 'rebirth-storage';
import { ArticleService } from './article-service';
import { HttpModule } from '@angular/http';


@NgModule({
  imports: [
    HttpModule,
    RebirthHttpModule,
    RebirthStorageModule,
  ],
  providers: [
    ArticleService
  ],
  exports: [
    RebirthHttpModule,
    RebirthStorageModule,
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
