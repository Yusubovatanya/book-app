import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { TableBookComponent } from './components/table-book/table-book.component';
import { ChartBookComponent } from './components/chart-book/chart-book.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent, 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
