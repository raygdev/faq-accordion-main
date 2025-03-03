const panelButtons = document.querySelectorAll('[class*=panel-control-')

panelButtons.forEach((button, i) => {
    button.addEventListener('click', function (e) {
        const expanded = button.getAttribute('aria-expanded') === 'true'
        button.setAttribute('aria-expanded', !expanded)
    })

    button.addEventListener('keydown', function(e) {
        if(e.key === 'ArrowUp' && (i - 1) >= 0) {
            console.log(panelButtons[i -1])
            panelButtons[i - 1].focus()
        }

        if(e.key === 'ArrowDown' && i < panelButtons.length - 1) {
            panelButtons[i + 1].focus()
        }
    })
})

