import { LitElement, html, css } from 'lit';

export class SimpleInput extends LitElement {
  static get properties() {
    return {
      value: {
        reflect: true,
      },
      placeholder: {
        type: String,
      },
    };
  }

  static styles = css`
    input {
      font-size: 14px;
      border-radius: 8px;
      border: 1px solid lightgray;
      padding: 8px;
    }
  `;

  onChange(e) {
    this.dispatchEvent(
      new CustomEvent('input-change', {
        detail: {
          value: e.target.value,
        },
      })
    );
  }

  render() {
    return html`<input
      @input=${this.onChange}
      .value=${this.value}
      placeholder=${this.placeholder}
    />`;
  }
}

customElements.define('simple-input', SimpleInput);
