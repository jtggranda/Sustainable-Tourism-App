import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';



const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'discover',
        children: [
          {
            path: '',
            loadChildren: '../discover/discover.module#DiscoverPageModule',
          },
          {
            path: 'categorypage',
            children: [
              {
                path: '',
                loadChildren: '../categorypage/categorypage.module#CategorypagePageModule'
              }
            ]
          }
        ]
      },
      {
        path: 'offers',
        loadChildren: '../offers/offers.module#OffersPageModule'
      },
      {
        path: 'bookings',
        loadChildren: '../bookings/bookings.module#BookingsPageModule'
      },
      {
        path: '',
        redirectTo: '/app/tabs/discover',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/app/tabs/discover',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

