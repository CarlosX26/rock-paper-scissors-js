import Modal from "./models/modal.js";

class RpsGame {
  static options = ["rock", "paper", "scissor"];

  static score = 0;

  static initialOptions() {
    const boxOptions = document.getElementById("options");

    const optionPaper = document.createElement("div");
    const optionScissor = document.createElement("div");
    const optionRock = document.createElement("div");
    const triangle = document.createElement("div");
    const triangleOne = document.createElement("div");
    const triangleTwo = document.createElement("div");

    optionPaper.className = "option__paper opacityRotate";
    optionPaper.setAttribute("data-option", "paper");

    optionScissor.className = "option__scissor opacityRotate";
    optionScissor.setAttribute("data-option", "scissor");

    optionRock.className = "option__rock opacityRotate";
    optionRock.setAttribute("data-option", "rock");

    triangle.className = "option__triangle opacity";
    triangleOne.className = "triangle__one";
    triangleTwo.className = "triangle__twoo";

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

    const optionPlayerDom = document.createElement("div");
    const optionCpuDom = document.createElement("div");

    const divBox = document.createElement("div");
    const h1 = document.createElement("h1");
    const button = document.createElement("button");
    button.setAttribute("data-button", "playAgain");
    button.innerText = "Play Again";
    divBox.className = "result__game opacity";
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
        modal.classList.remove("modal__in");
        modal.classList.add("modal__out");
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
    console.log({
      player: playerOption,
      cpu: cpuOption,
    });

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
