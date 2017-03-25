import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { MainNavComponent } from './component/main-nav/main-nav.component';
import { MainViewComponent } from './component/main-view/main-view.component';
import { CardListComponent } from './component/card/card-list.component';
import { CardComponent } from './component/card/card.component';
import { TagComponent } from './component/tag/tag.component';

import { CardService } from './service/card.service';

import { AppRoutingModule } from './app.route';

import { MaterialModule } from '@angular/material';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        MaterialModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        MainNavComponent,
        MainViewComponent,
        CardListComponent,
        CardComponent,
        TagComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        CardService
    ]
})

export class AppModule { }
