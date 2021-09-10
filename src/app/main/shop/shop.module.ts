import { AuthGuard } from './../../auth/helpers/auth.guards';
import { DashboardService } from './../dashboard/dashboard.service';
import { EcommerceComponent } from './../dashboard/ecommerce/ecommerce.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import {
  SwiperConfigInterface,
  SwiperModule,
  SWIPER_CONFIG,
} from "ngx-swiper-wrapper";

import { TranslateModule } from "@ngx-translate/core";

import { CoreCommonModule } from "@core/common.module";

import { ContentHeaderModule } from "app/layout/components/content-header/content-header.module";

import { ShopComponent } from "./shop.component";
import { HomeComponent } from "./home.component";

// swiper configuration
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: "horizontal",
  slidesPerView: "auto",
};

const routes = [
  {
    path: "home",
    component: HomeComponent,
    data: { animation: "home" }
  },
  {
    path: "shop",
    component: ShopComponent,
    data: { animation: "sample" },
  },
  {
    path: 'apps',
    loadChildren: () => import('../../main/apps/apps.module').then(m => m.AppsModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'pages',
    loadChildren: () => import('../../main/pages/pages.module').then(m => m.PagesModule)
  }
  
];

@NgModule({
  declarations: [ShopComponent, HomeComponent],
  imports: [
    RouterModule.forChild(routes),
    NgbModule,
    SwiperModule,
    ContentHeaderModule,
    TranslateModule,
    CoreCommonModule,
  ],
  providers: [
    DashboardService,
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
  ],
  exports: [ShopComponent, HomeComponent],
})
export class SampleModule {}
