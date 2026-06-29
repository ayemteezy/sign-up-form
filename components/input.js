export class TInput extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const label = this.getAttribute("label") || "input-field";
    const name = this.getAttribute("name") || "input-field";
    const type = this.getAttribute("type") || "text";

    const minlength = this.getAttribute("minlength");
    const maxlength = this.getAttribute("maxlength");
    const pattern = this.getAttribute("pattern");
    const isRequired = this.hasAttribute("required");

    console.log("pattern:", pattern);

    this.innerHTML = /*html*/ `
    <div class="flex-col">
      <label for="${name}">${label}</label>
      <input id="${name}" name="${name}" type="${type}" ${pattern ? `pattern="${pattern}" ` : "" } ${maxlength ? `maxlength="${maxlength}" ` : "" } ${minlength ? `minlength="${minlength}" ` : "" } ${isRequired ? "required" : "" } />
</div>
`;
  }
}
customElements.define("t-input", TInput);