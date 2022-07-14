const { LitElement, html } = require("lit");

export class SimpleDogItem extends LitElement {
  static properties = {
    details: { type: Object },
  };

  constructor() {
    super();
    this.details = {
      dogName: "Nameless",
      breed: "Unknown",
    };
  }

  render() {
    return html`<div>
      <strong>Name:</strong> ${this.details.dogName},
      <strong>Breed:</strong> ${this.details.breed}
    </div>`;
  }
}

customElements.define("simple-dog-item", SimpleDogItem);
