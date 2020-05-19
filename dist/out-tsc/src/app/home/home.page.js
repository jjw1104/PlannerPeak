import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
let MenuExample = class MenuExample {
    constructor(menu) {
        this.menu = menu;
    }
    openFirst() {
        this.menu.enable(true, 'first');
        this.menu.open('first');
    }
    openEnd() {
        this.menu.open('end');
    }
    openCustom() {
        this.menu.enable(true, 'custom');
        this.menu.open('custom');
    }
};
MenuExample = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: 'home.page.html',
        styleUrls: ['home.page.scss'],
    }),
    __metadata("design:paramtypes", [MenuController])
], MenuExample);
export { MenuExample };
export class HomePage {
    constructor() { }
    onChange($event) {
        console.log($event);
    }
}
//# sourceMappingURL=home.page.js.map