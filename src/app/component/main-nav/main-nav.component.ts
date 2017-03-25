import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export class NavItem {
    name: string;
    url: string;
}

const navItems: NavItem[] = [
    {
        name: 'Pages',
        url: '/pages'
    },
    {
        name: 'Cards',
        url: '/cards'
    },
    {
        name: 'Navigation',
        url: '/navigation'
    },
    {
        name: 'Footer',
        url: '/footer'
    },
    {
        name: 'Tags',
        url: '/tags'
    },
    {
        name: 'Ads',
        url: '/adverts'
    },
    {
        name: 'Sponsors',
        url: '/sponsors'
    }
];

@Component({
    selector: 'main-nav',
    templateUrl: './app/component/main-nav/main-nav.component.html',
})

export class MainNavComponent implements OnInit {
    abstract: any;
    constructor(private router: Router) {
    }

    navItems = navItems;
    selectedItem:NavItem;
    currentPath:string;
    ngOnInit():void {
        this.router.events.subscribe((url) => {
            //this.currentPath = url.urlAfterRedirects ? url.urlAfterRedirects : url.url;
        });
    }
    onSelect(navItem:NavItem):void {
        this.selectedItem = navItem;
    }
}