import { LitElement, html, css } from 'lit';

export class SimpleBtn extends LitElement {
    static styles = css`
        button {
            border-radius: 8px;
            border: 1px solid lightgray;
            padding: 8px;
            color: #212121;
            font-size: 14px;
        }
    `

    render() {
        return html`<button><slot></slot></button>`
    }
}

customElements.define('simple-btn', SimpleBtn)