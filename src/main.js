const panelButtons = document.querySelectorAll('[class*=panel-control-')

panelButtons.forEach((button, i) => {
    button.addEventListener('click', function (e) {
        // find the button parent element
        const panelHeading = button.parentElement
        // find the expanded state of the current button
        const expanded = button.getAttribute('aria-expanded') === 'true'
        // set the aria-expanded attribute to the opposite of the currently expanded state
        button.setAttribute('aria-expanded', !expanded)
        // target the panel that the button controls and add the currently expanded state to toggle hiding it
        panelHeading.nextElementSibling.setAttribute('aria-hidden', expanded)
    })

    button.addEventListener('keydown', function(e) {
        if(e.key === 'ArrowUp' && (i - 1) >= 0) {
            panelButtons[i - 1].focus()
        }

        if(e.key === 'ArrowDown' && i < panelButtons.length - 1) {
            panelButtons[i + 1].focus()
        }
    })
})

