import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Creating the first Route
import { HeroesComponent }      from './components/heroes/heroes.component';
import { DashboardComponent }      from './components/dashboard/dashboard.component';
import { HeroDetailComponent }      from './components/hero-detail/hero-detail.component';
import { HeroRemoveComponent }  from './components/hero-remove/hero-remove.component';
import { DataBindingComponent }  from './components/data-binding/data-binding.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { FormsInputComponent } from './components/forms-input/forms-input.component';
import { FormValidattionComponent } from './components/form-validattion/form-validattion.component'


const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'delete/:id', component: HeroRemoveComponent },
  { path: 'binding', component: DataBindingComponent },
  { path: 'input', component: UserInputComponent },
  { path: 'forms', component: FormsInputComponent },
  { path: 'validate', component: FormValidattionComponent },
  
  //Defualt Route
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { }
