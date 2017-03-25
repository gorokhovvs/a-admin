import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './component/card/card.component';
import { CardListComponent } from './component/card/card-list.component';
import { TagComponent } from './component/tag/tag.component';

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/cards',
        pathMatch: 'full'
    },
    {
        path: 'cards',
        component: CardListComponent
    },
    {
        path: 'cards/:id',
        component: CardComponent
    },
    {
        path: 'tags',
        component: TagComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
