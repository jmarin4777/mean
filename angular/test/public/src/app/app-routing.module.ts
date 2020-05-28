import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { DetailsComponent } from './details/details.component';
import { NewComponent } from './new/new.component';
import { UpdateComponent } from './update/update.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'products/new', component: NewComponent },
  { path: 'products/:id', component: DetailsComponent },
  { path: 'products/:id/edit', component: UpdateComponent },
  { path: '', pathMatch: 'full', redirectTo: '/products' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
