import { Route } from '@angular/router';
import { EditorComponent } from 'app/base/main/editor/editor.component';
import { HomeComponent } from 'app/base/main/home/home.component';
import { ErrorComponent } from 'app/base/main/error/error.component';

function createRoutes(routes: Route[]): Route[] {
  return [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      component: HomeComponent
    },
    ...routes,
    {
      path: '**',
      component: ErrorComponent
    }
  ];
}


const ROUTES_0: Route[] = [
  {
    path: 'profile/export',
    loadChildren: 'app/base/main/profile-export/profile-export.module#ProfileExportModule',
    pathMatch: 'full'
  },
  {
    path: 'profile/create',
    loadChildren: 'app/base/main/profile-create/profile-create.module#ProfileCreateModule',
    pathMatch: 'full'
  },
  {
    path: 'editor',
    component: EditorComponent,
    pathMatch: 'full'
  }
];

export const ROUTES_1: Route[] = [
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'profile/export',
    loadChildren: 'app/custom/main/profile-export/profile-export.module#ProfileExportModule',
    pathMatch: 'full'
  },
  {
    path: 'profile/create',
    loadChildren: 'app/custom/main/profile-create/profile-create.module#ProfileCreateModule',
    pathMatch: 'full'
  },
  {
    path: 'editor',
    component: EditorComponent,
    pathMatch: 'full'
  },
];





export const routes0 = createRoutes(ROUTES_0);
export const routes1 = createRoutes(ROUTES_1);
export const allRoutes = createRoutes([ ...ROUTES_0, ...ROUTES_1 ]);
