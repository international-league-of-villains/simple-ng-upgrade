declare var angular:any;

import { downgradeComponent } from '@angular/upgrade/static';
import { AppComponent } from '../app.component';

//import * as SimpleEs5 from 'simple-ng1.5-es5/app/app';


export const NgOneModule = angular.module('ngOneModule', ['oldNG1']);

NgOneModule.component('ngOneComponent', {
  template: `<div>NgOneAppModule!</div>
              <md-toolbar layout="row" class="md-toolbar-tools">
                <h1>International League of Villains</h1>
              </md-toolbar>
              <old-select-wrapper></old-select-wrapper>
          <ng-two-app></ng-two-app>`
})

NgOneModule
.directive('ngTwoApp',
  downgradeComponent({
    component: AppComponent,
    outputs: ['callback']
  }) as angular.IDirectiveFactory
);