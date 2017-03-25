import { Component, OnInit } from '@angular/core';
import { Card } from '../../model/card.model';
import { CardService } from '../../service/card.service';

@Component({
    selector: 'card',
    templateUrl: './app/component/card/card.component.html',
    providers: [
        CardService
    ]
})

export class CardComponent implements OnInit {
    abstract: any;
    card: Card;

    constructor(private cardsService: CardService) {
    }

    ngOnInit():void {
        this.getCard();
    }

    getCard(): void {
        this.cardsService.getOne().then(cards => this.cards = cards);
    }

}