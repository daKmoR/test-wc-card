import { LitElement, html } from 'lit-element';
import { testWcCardStyle } from './testWcCardStyle.js';

export class TestWcCard extends LitElement {
  static get properties() {
    return {
      side: { type: String, reflect: true },
      header: { type: String },
    };
  }

  /**
   * A card setter can have side A or B
   *
   * @param {("A"|"B")} value
   */
  set side(value) {
    this.__side = value;
    this.dispatchEvent(new Event('side-changed'));
    this.requestUpdate();
  }

  /**
   * @returns {("A"|"B")}
   */
  get side() {
    return this.__side;
  }

  static get styles() {
    return testWcCardStyle;
  }

  constructor() {
    super();
    this.header = 'Your Message';
    this.side = 'A';
  }

  render() {
    return html`
      <div class="header">
        ${this.header}
      </div>
      <div class="content">
        <slot></slot>
      </div>
      <button>></button>
      <div class="footer">
        <div class="note">${this.side}</div>
        <slot name="footer"></slot>
      </div>
    `;
  }
}
