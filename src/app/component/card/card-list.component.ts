import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../../model/card.model';
import { CardService } from '../../service/card.service';

@Component({
    selector: 'card-list',
    templateUrl: './app/component/card/card-list.component.html'
})

export class CardListComponent implements OnInit {
    abstract: any;
    cards: Card[];
    constructor(private cardsService: CardService) {
    }

    ngOnInit(): void {
        this.getCards();
    }

    getCards(): void {
        this.cardsService.getAll().then(cards => this.cards = cards);
    }

    onSelect(card: Card): void {
        this.cardsService.selectedCard = card;
    }
}
