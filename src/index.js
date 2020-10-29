'use strict'

let updateTimer = (deadline) => {
    let time = deadline - new Date()
    return {
        days: Math.floor(time / (1000 * 60 * 60 * 24)),
        hours: Math.floor((time / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((time / 1000 / 60) % 60),
        seconds: Math.floor((time / 1000) % 60),
        total: time,
    }
}

let animarClock = (span) => {
    span.className = 'turn'
    setTimeout(() => {
        span.className = ''
    }, 700)
}

let startTimer = (id, deadline) => {
    let timerInterval = setInterval(() => {
        let clock = document.getElementById(id)
        let timer = updateTimer(deadline)

        if (timer.days < 10) {
            timer.days = '0' + timer.days
        }

        if (timer.hours < 10) {
            timer.hours = '0' + timer.hours
        }

        if (timer.minutes < 10) {
            timer.minutes = '0' + timer.minutes
        }

        if (timer.seconds < 10) {
            timer.seconds = '0' + timer.seconds
        }

        clock.innerHTML =
            '<span class="front">' +
            timer.days +
            '</span>' +
            '<span class="front">' +
            timer.hours +
            '</span>' +
            '<span class="front">' +
            timer.minutes +
            '</span>' +
            '<span class="front">' +
            timer.seconds +
            '</span>'

        // animaciones
        let spans = clock.getElementsByTagName('span')
        animarClock(spans[3])
        if (timer.seconds == 59) {
            animarClock(spans[2])
        }
        if (timer.minutes == 59 && timer.seconds == 59) {
            animarClock(spans[1])
        }
        if (timer.hours == 23 && timer.minutes == 59 && timer.seconds == 59) {
            animarClock(spans[0])
        }

        // Comprobar si la fecha ya llegó
        if (timer.total < 1) {
            clearInterval(timerInterval)
            clock.innerHTML = '<span>0</span><span>0</span><span>0</span><span>0</span>'
        }
    }, 1000)
}

function component() {
    const element = document.createElement('div')
    element.innerHTML += 'Hello World'
    return element
}

window.onload = () => {
    // let deadline = new Date('Nov 21, 2020 00:00:00 GMT-0300 (America/Buenos_Aires)')
    // startTimer('clock', deadline)
    document.body.appendChild(component())
}
