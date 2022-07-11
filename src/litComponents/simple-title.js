import { LitElement, html } from 'lit';

export class SimpleTitle extends LitElement {
    static properties = {
        color: {
            type: String
        }
    }

    constructor() {
        super();
        this.color = '#212121';
    }
    
    render() {
        return html`<h1 style=${`color: ${this.color}`}><slot></slot></h1>`
    }
}

customElements.define('simple-title', SimpleTitle)