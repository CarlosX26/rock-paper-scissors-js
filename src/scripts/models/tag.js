export default class Tag {
  constructor(tag, className, innerText) {
    this.tag = document.createElement(`${tag}`);
    className ? (this.tag.className = className) : null;
    innerText ? (this.tag.innerText = innerText) : null;
    this.attributes = [];
  }

  get() {
    return this.tag;
  }

  addClass(className) {
    this.tag.classList.add(className);
  }

  removeClass(className) {
    this.tag.classList.remove(className);
  }

  addAttribute(attribute, attributeValue) {
    this.attributes.push({ attribute, attributeValue });

    this.attributes.forEach((att) =>
      this.tag.setAttribute(att.attribute, att.attributeValue)
    );
    return this;
  }

  appendParent(ref) {
    document.querySelector(`${ref}`).append(this.tag);
  }
}

// const tag = new Tag("div").addAttribute("id", "hello");
// tag.innerText = "batata";
// console.log(tag);
