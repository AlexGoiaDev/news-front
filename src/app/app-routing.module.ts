import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/list/list.module').then(m => m.ListModule)
  },
  {
    path: 'add',
    loadChildren: () => import('../app/add/add.module').then(m => m.AddModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
