import {action, makeObservable, observable} from "mobx";

export class Store {
    burgerMenu: boolean = false
    manifesto: boolean = false
    disclaimer: boolean = false

    constructor() {
        makeObservable(this, {
            burgerMenu: observable,
            manifesto: observable,
            disclaimer: observable,

            setBurgerMenu: action.bound,
            setManifesto: action.bound,
            setDisclaimer: action.bound,
        })
    }

    setBurgerMenu(burgerMenu: boolean) {
        this.burgerMenu = burgerMenu
    }

    setManifesto(manifesto: boolean) {
        this.manifesto = manifesto
    }

    setDisclaimer(disclaimer: boolean) {
        this.disclaimer = disclaimer
    }

}


export const store = new Store()
