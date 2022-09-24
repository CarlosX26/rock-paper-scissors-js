export default class Modal {
    static modalGameRules(){
        const containerModal = document.createElement("section")
        const modal          = document.createElement("div")
        const h1             = document.createElement("h1")
        const imgCloseBtn    = document.createElement("img")
        const divBox         = document.createElement("div")

        const optionPaper    = document.createElement("div")
        const optionScissor  = document.createElement("div")
        const optionRock     = document.createElement("div")

        const pBeats         = document.createElement("p")
        const pBeats1        = document.createElement("p")
        const pBeats2        = document.createElement("p")

        const imgArrow       = document.createElement("img")
        const imgArrow1      = document.createElement("img")
        const imgArrow2      = document.createElement("img")

        h1.innerText         = "Rules"
        imgCloseBtn.src      = "src/assets/img/icon-close.svg"

        pBeats.innerText     = "Beats"
        pBeats1.innerText    = "Beats"
        pBeats2.innerText    = "Beats"

        imgArrow.src         = "src/assets/img/arrow-vector-removebg.png"
        imgArrow1.src        = "src/assets/img/arrow-vector-removebg.png"
        imgArrow2.src        = "src/assets/img/arrow-vector-removebg.png"

        imgCloseBtn.className = "rules__closeBtn"
        imgArrow.className    = "rules__arrow__one"
        imgArrow1.className   = "rules__arrow__two"
        imgArrow2.className   = "rules__arrow__three"

        containerModal.className = "container__modal"
        modal.className          = "modal__rules modal__in"
        pBeats.className         = "rules__text__one"
        pBeats1.className        = "rules__text__two"
        pBeats2.className        = "rules__text__three"
        optionPaper.className    = "modal__rules__options modal__rules__options--paper"
        optionScissor.className  = "modal__rules__options modal__rules__options--rock"
        optionRock.className     = "modal__rules__options modal__rules__options--scissor"
        divBox.className         = "modal__rules__box"

        imgCloseBtn.setAttribute("data-close","modalRules")

        divBox.append( optionPaper, optionScissor, optionRock, pBeats, pBeats1, pBeats2, imgArrow, imgArrow1, imgArrow2)
        modal.append(h1, imgCloseBtn, divBox)
        containerModal.appendChild(modal)
        return containerModal
    }


}