import { Component, OnInit } from '@angular/core';
import { Card } from '../../model/card.model';
import { CardService } from '../../service/card.service';
import { Router } from '@angular/router';

@Component({
    selector: 'card-list',
    templateUrl: './app/component/card/card-list.component.html',
    providers: [
        CardService
    ]
})

export class CardListComponent implements OnInit {
    abstract: any;
    cards: Card[];
    constructor(private cardsService: CardService, private router: Router) {
    }

    ngOnInit(): void {
        this.getCards();
    }

    getCards(): void {
        this.cardsService.getAll().then(cards => this.cards = cards);
    }
}