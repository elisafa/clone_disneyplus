document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]')



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
})

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