import Tag from "./tag.js";

export default class Modal {
  static modalGameRules() {
    const containerModal = new Tag("section", "container__modal").get();

    const modal = new Tag("div", "modal__rules modal__in").get();

    const h1 = new Tag("h1", null, "Rules")
      .addAttribute("src", "src/assets/img/icon-close.svg")
      .get();
    const imgCloseBtn = new Tag("img", "rules__closeBtn")
      .addAttribute("data-close", "modalRules")
      .addAttribute("src", "src/assets/img/icon-close.svg")
      .get();
    const divBox = new Tag("div", "modal__rules__box").get();

    const optionPaper = new Tag(
      "div",
      "modal__rules__options modal__rules__options--paper"
    ).get();
    const optionScissor = new Tag(
      "div",
      "modal__rules__options modal__rules__options--rock"
    ).get();
    const optionRock = new Tag(
      "div",
      "modal__rules__options modal__rules__options--scissor"
    ).get();

    const pBeats = new Tag("p", "rules__text__one", "Beats").get();
    const pBeats1 = new Tag("p", "rules__text__two", "Beats").get();
    const pBeats2 = new Tag("p", "rules__text__three", "Beats").get();

    const imgArrow = new Tag("img", "rules__arrow__one")
      .addAttribute("src", "src/assets/img/arrow-vector-removebg.png")
      .get();
    const imgArrow1 = new Tag("img", "rules__arrow__two")
      .addAttribute("src", "src/assets/img/arrow-vector-removebg.png")
      .get();
    const imgArrow2 = new Tag("img", "rules__arrow__three")
      .addAttribute("src", "src/assets/img/arrow-vector-removebg.png")
      .get();

    divBox.append(
      optionPaper,
      optionScissor,
      optionRock,
      pBeats,
      pBeats1,
      pBeats2,
      imgArrow,
      imgArrow1,
      imgArrow2
    );
    modal.append(h1, imgCloseBtn, divBox);
    containerModal.append(modal);
    return containerModal;
  }
}
