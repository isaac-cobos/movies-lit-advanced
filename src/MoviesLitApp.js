import { html, css, LitElement } from "lit-element";

export class MoviesLitApp extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--movies-lit-app-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
    };
  }

  constructor() {
    super();
    this.title = "Hey there";
  }

  render() {
    return html` <h2>${this.title}</h2> `;
  }
}
