export class InputContainer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /*html*/ `
    <div class="flex field">${this.innerHTML}</div>
    `;
  }
}
customElements.define("input-container", InputContainer);