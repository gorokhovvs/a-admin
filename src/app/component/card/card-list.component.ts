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
    isLoading: boolean;
    constructor(private cardsService: CardService) {
    }

    ngOnInit(): void {
        this.getCards();
    }

    getCards(): void {
        this.isLoading = true;
        this.cardsService.getAll().then((cards) => {
            this.cards = cards;
            this.isLoading = false;
        });
    }

    onSelect(card: Card): void {
        this.cardsService.selectedCard = card;
    }
}
