import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import { RebirthHttpProvider } from 'rebirth-http';
import { environment } from '../environments/environment';

@Component({
  template: `<ion-nav swipeBackEnabled="true" [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform, rebirthHttpProvider: RebirthHttpProvider) {
    rebirthHttpProvider
      .baseUrl(environment.api.host)
      .json()
      .addInterceptor({
        request: request => {
          console.log('全局拦截器(request)', request);
        },
        response: (stream) => stream.map(response => {
          console.log('全局拦截器(response)', response);
          return response;
        })
      });
    // .addInterceptor({
    //   request: () => {
    //     loadService.show();
    //   },
    //   response: (stream) => (<any>stream).do(() => null, () => loadService.hide(), () => loadService.hide())
    // });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
