import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimelineComponent } from './timeline/timeline.component';
import { NavSelectionComponent } from './nav-selection/nav-selection.component';

const routes: Routes = [
    {
        path: 'index',
        component: NavSelectionComponent
    },
    {
        path: 'timeline',
        component: TimelineComponent
    },
    {
        path: '',
        redirectTo: '/index',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
