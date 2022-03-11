const task1 = () => {
    let colDiv = document.querySelectorAll('.col')
    colDiv.forEach((color => {
        color.addEventListener('click', (event) => {
            colDiv.forEach((e => {
                e.classList.remove('lightgreen')
            }))
            event.target.classList.add('lightgreen')
        })
    }))
}
task1()

const getRed = () => {
    let redBtn = document.querySelector('.redBtn')
    redBtn.addEventListener('click',(event) => {
        event.preventDefault()
        return  document.querySelector('.box').classList.toggle('red')
    })
}
getRed()
const getBlue = () => {
    let blueBtn = document.querySelector('.blueBtn')
    blueBtn.addEventListener('click',(ev) => {
        ev.preventDefault()
        return  document.querySelector('.box').classList.toggle('blue')
    })
}
getBlue()
const getOval = () => {
    let ovalBtn = document.querySelector('.ovalBtn')
    ovalBtn.addEventListener('click',(e) => {
        e.preventDefault()
        return document.querySelector('.box').classList.toggle('oval')
    })
}
getOval()

const alertFun = () => {
    let name = document.querySelector('.input')
    if (!name.value) {
        alert('Hi ! Enter your name')
    } else {
        alert(`Hi ${name.value}`)
    }
}
document.querySelector('.btnGo').addEventListener('click', alertFun)

const btnClear = document.querySelector('.btnClear')

btnClear.addEventListener('click' , () => {
    document.querySelector('.input').value = ""
})
