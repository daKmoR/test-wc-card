import { LitElement, html, css } from 'lit-element';

export default class TestWcCard extends LitElement {
  static get properties() {
    return {
      side: { type: String },
      header: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        background: linear-gradient(141deg, #aaa 25%, #eee 40%, #ddd 55%);
        display: block;
        width: 250px;
        box-shadow: #ccc 3px 3px 2px 1px;
        padding: 10px;
        position: relative;
      }

      .header {
        font-weight: bold;
        font-size: 16px;
        text-align: center;
      }

      .content {
        padding: 20px 0;
      }

      button {
        position: absolute;
        right: 0;
        bottom: 0;
        border-radius: 15px;
        width: 30px;
        height: 30px;
        background: #fff;
        border: 1px solid #ccc;
        color: #000;
        font-size: 21px;
        line-height: 27px;
        font-weight: bold;
        cursor: pointer;
        margin: 5px;
      }

      .note {
        color: #666;
        font-size: 16px;
        font-weight: bold;
      }
    `;
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
      <div class="note">${this.side}</div>
    `;
  }
}
