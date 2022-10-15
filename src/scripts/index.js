import Modal from "./models/modal.js";
import Tag from "../scripts/models/tag.js";

class RpsGame {
  static options = ["rock", "paper", "scissor"];

  static score = 0;

  static initialOptions() {
    const boxOptions = document.getElementById("options");

    const optionPaper = new Tag("div", "option__paper opacityRotate")
      .addAttribute("data-option", "paper")
      .get();
    const optionScissor = new Tag("div", "option__scissor opacityRotate")
      .addAttribute("data-option", "scissor")
      .get();
    const optionRock = new Tag("div", "option__rock opacityRotate")
      .addAttribute("data-option", "rock")
      .get();
    const triangle = new Tag("div", "option__triangle opacity").get();
    const triangleOne = new Tag("div", "triangle__one").get();
    const triangleTwo = new Tag("div", "triangle__twoo").get();

    boxOptions.innerHTML = "";
    boxOptions.append(optionPaper, optionScissor, optionRock, triangle);
    triangle.appendChild(triangleOne);
    triangleOne.appendChild(triangleTwo);

    this.playerActions();
  }

  static playerActions() {
    const allButtons = document.querySelectorAll("[data-option]");

    allButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const optionClicked = btn.getAttribute("data-option");

        const optionCpu = Math.floor(Math.random() * 3);

        this.actionScreen(optionClicked, this.options[optionCpu]);
      });
    });
  }

  static actionScreen(optionPlayer, optionCpu) {
    const boxOptions = document.getElementById("options");
    boxOptions.innerHTML = "";

    const optionPlayerDom = new Tag("div").get();
    const optionCpuDom = new Tag("div").get();

    const divBox = new Tag("div", "result__game opacity").get();
    const h1 = new Tag("h1").get();
    const button = new Tag("button", null, "Play Again")
      .addAttribute("data-button", "playAgain")
      .get();

    divBox.append(h1, button);

    switch (optionPlayer) {
      case "paper":
        optionPlayerDom.className = "option__paper--action paperRotate";
        boxOptions.appendChild(optionPlayerDom);

        setTimeout(() => {
          optionPlayerDom.classList.remove("paperRotate");
          optionPlayerDom.classList.add("bounce");
        }, 300);

        break;
      case "scissor":
        optionPlayerDom.className = "option__scissor--action scissorSlide";
        boxOptions.appendChild(optionPlayerDom);

        setTimeout(() => {
          optionPlayerDom.classList.remove("scissorSlide");
          optionPlayerDom.classList.add("bounce");
        }, 300);

        break;
      case "rock":
        optionPlayerDom.className = "option__rock--action rockTranslate";
        boxOptions.appendChild(optionPlayerDom);

        setTimeout(() => {
          optionPlayerDom.classList.remove("rockTranslate");
          optionPlayerDom.classList.add("bounce");
        }, 300);

        break;
    }

    setTimeout(() => {
      switch (optionCpu) {
        case "paper":
          optionCpuDom.className = "option__paper--actionCpu opacityRotate";
          optionPlayerDom.classList.remove("bounce");
          boxOptions.appendChild(optionCpuDom);
          setTimeout(() => {
            optionCpuDom.classList.remove("opacityRotate");
            this.checkTheWinner(optionPlayer, optionCpu, h1);
            boxOptions.appendChild(divBox);
            this.playAgain();
          }, 700);
          break;
        case "scissor":
          optionCpuDom.className = "option__scissor--actionCpu opacityRotate";
          optionPlayerDom.classList.remove("bounce");
          boxOptions.appendChild(optionCpuDom);
          setTimeout(() => {
            optionCpuDom.classList.remove("opacityRotate");
            this.checkTheWinner(optionPlayer, optionCpu, h1);
            boxOptions.appendChild(divBox);
            this.playAgain();
          }, 700);
          break;
        case "rock":
          optionCpuDom.className = "option__rock--actionCpu opacityRotate";
          optionPlayerDom.classList.remove("bounce");
          boxOptions.appendChild(optionCpuDom);
          setTimeout(() => {
            optionCpuDom.classList.remove("opacityRotate");
            this.checkTheWinner(optionPlayer, optionCpu, h1);
            boxOptions.appendChild(divBox);
            this.playAgain();
          }, 700);
          break;
      }
    }, 2500);
  }

  static gameRules() {
    const btnRules = document.querySelector("[data-button=rules]");
    const body = document.querySelector("body");

    btnRules.addEventListener("click", () => {
      const modal = Modal.modalGameRules();
      body.appendChild(modal);

      const btnCloseModal = document.querySelector("[data-close=modalRules]");
      btnCloseModal.addEventListener("click", () => {
        modal.children[0].classList.remove("modal__in");
        modal.children[0].classList.add("modal__out");
        setTimeout(() => {
          body.removeChild(body.lastChild);
        }, 900);
      });
    });
  }

  static showCountScore() {
    const scorePanel = document.querySelector("[data-score=result]");

    scorePanel.innerHTML = this.score;
  }

  static checkTheWinner(playerOption, cpuOption, h1) {
    const playerWinRock = playerOption == "rock" && cpuOption == "scissor";
    const playerWinScissor = playerOption == "scissor" && cpuOption == "paper";
    const playerWinPaper = playerOption == "paper" && cpuOption == "rock";

    if (playerOption == cpuOption) {
      h1.innerText = "Draw";
      return;
    }
    if (playerWinRock) {
      h1.innerText = "You Win";
      this.score += 1;
      this.showCountScore();
    } else if (playerWinScissor) {
      h1.innerText = "You Win";
      this.score += 1;
      this.showCountScore();
    } else if (playerWinPaper) {
      h1.innerText = "You Win";
      this.score += 1;
      this.showCountScore();
    } else {
      h1.innerText = "You Lose";
    }
  }

  static playAgain() {
    const btnPlayAgain = document.querySelector("[data-button=playAgain]");

    btnPlayAgain.addEventListener("click", () => {
      this.initialOptions();
    });
  }
}

RpsGame.playerActions();

RpsGame.gameRules();
