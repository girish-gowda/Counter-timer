const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')


const birthday = '21 May 2021'

function count() {
    const BirthDATE = new Date(birthday)
    const currentdate = new Date()

    const totalseconds = new Date(BirthDATE -  currentdate) / 1000


    const days = Math.floor(totalseconds / 3600 / 24)
    const hours = Math.floor(totalseconds / 3600) % 24
    const mins = Math.floor(totalseconds / 60) % 60
    const seconds = Math.floor(totalseconds) % 60


    daysEl.innerHTML = formatTime(days)
    hoursEl.innerHTML = formatTime(hours)
    minsEl.innerHTML =  formatTime(mins)
    secondsEl.innerHTML = formatTime(seconds)
}

function formatTime(time) {
    return time < 10? `0${time}` : time
}

count()

setInterval(count, 1000)