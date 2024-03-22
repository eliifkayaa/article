import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { ViewArticleComponent } from './components/view-article/view-article.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo:'home'},
  {path: 'home', component: HomeComponent},
  {path: 'create', component: CreateArticleComponent},
  {path: 'view/:articleindex', component: ViewArticleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
