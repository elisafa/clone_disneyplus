document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]')
    const questions = document.querySelectorAll('[data-faq-question]')
    
    const heroSection = document.querySelector('.hero')
    const alturaHero = heroSection.clientHeight
    window.addEventListener('scroll', function(){
       const posicaoAtual = window.scrollY
       if(posicaoAtual < alturaHero){
            ocultaElementosDoHeader()
       }else{
            exibeElementosDoHeader()
       }
    })

// Sessão de atrações - programação das abas
    buttons.forEach(item =>{
        item.addEventListener('click', (event) =>{
            const abaAlvo = event.target.dataset.tabButton
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            escondeTodasAbas()
            aba.classList.add('shows__list--is-active')

            removeBotaoAtivo()
            event.target.classList.add('shows__tabs__button--is-active')
            
        })
    })

    // Sessão perguntas e respostas
    questions.forEach(item => {
        item.addEventListener('click', abreOuFechaResposta)
    })

function abreOuFechaResposta(el){
    const classe = 'faq__questions__item--is-open'
    const elPai = el.target.parentNode
    elPai.classList.toggle(classe)
}
})

function ocultaElementosDoHeader(){
    const header = document.querySelector('header')
    header.classList.add('header--is-hidden')
}

function exibeElementosDoHeader(){
    const header = document.querySelector('header')
    header.classList.remove('header--is-hidden')
}

function removeBotaoAtivo(){
    const buttons = document.querySelectorAll('[data-tab-button]')
    buttons.forEach(item => {
        item.classList.remove('shows__tabs__button--is-active')
    })
}

function escondeTodasAbas(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]')
    tabsContainer.forEach(item => {
        item.classList.remove('shows__list--is-active')
    })
}