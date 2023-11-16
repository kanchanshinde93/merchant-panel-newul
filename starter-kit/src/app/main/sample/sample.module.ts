import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { SampleComponent } from './sample.component';
import { HomeComponent } from './home.component';
import { OrderComponent } from './order/order.component';
import { OutletsComponent } from './outlets/outlets.component';
import { AccountComponent } from './account/account.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes = [
  {
    path: 'sample',
    component: SampleComponent,
    data: { animation: 'sample' }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { animation: 'home' }
  },
  {
    path: 'order',
    component: OrderComponent,
    data: { animation: 'order' }
  },
  {
    path: 'outlets',
    component: OutletsComponent,
    data: { animation: 'outlets' }
  },
  {
    path: 'account',
    component: AccountComponent,
    data: { animation: 'account' }
  }
];

@NgModule({
  declarations: [SampleComponent, HomeComponent, OrderComponent, OutletsComponent, AccountComponent],
  imports: [RouterModule.forChild(routes), ContentHeaderModule, TranslateModule, CoreCommonModule, NgbModule],
  exports: [SampleComponent, HomeComponent]
})
export class SampleModule {}
