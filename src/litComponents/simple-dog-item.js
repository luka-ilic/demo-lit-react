const { LitElement, html } = require('lit');

export class SimpleDogItem extends LitElement {
  static get properties() {
    return {
      details: { type: Object },
    };
  }

  constructor() {
    super();
    this.details = {
      dogName: '',
      breed: '',
    };
  }

  render() {
    return html`<div>
      <strong>Name:</strong> ${this.details.dogName},
      <strong>Breed:</strong> ${this.details.breed}
    </div>`;
  }
}

customElements.define('simple-dog-item', SimpleDogItem);
