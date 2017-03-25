import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from '../../model/card.model';
import { CardService } from '../../service/card.service';

@Component({
    selector: 'card',
    templateUrl: './app/component/card/card.component.html'
})

export class CardComponent implements OnInit {
    abstract: any;
    card: Card;

    constructor(private cardsService: CardService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.setCard();
    }

    setCard(): void {
        console.log(this.route);
        this.card = this.cardsService.selectedCard;
        if (!this.card) {
            let id = this.route.url.value[1].path;
            this.cardsService.getOne(id).then(cardData => this.card = cardData);
        }
    }

}