const closed1 = document.querySelector('.questions_item')
const opened1 = document.querySelector('.questions_item--opened')

const closed2 = document.querySelector('.questions_item2')
const opened2 = document.querySelector('.questions_item--opened2')

const closed3 = document.querySelector('.questions_item3')
const opened3 = document.querySelector('.questions_item--opened3')

const closed4 = document.querySelector('.questions_item4')
const opened4 = document.querySelector('.questions_item--opened4')

const closed5 = document.querySelector('.questions_item5')
const opened5 = document.querySelector('.questions_item--opened5')

closed1.addEventListener('click', () => {
    closed1.classList.add('closed')
    opened1.classList.add('opened')
    opened1.classList.remove('closed')
})

opened1.addEventListener('click', () => {
    closed1.classList.remove('closed')
    opened1.classList.remove('opened')
    opened1.classList.add('closed')
})

closed2.addEventListener('click', () => {
    closed2.classList.add('closed')
    opened2.classList.add('opened')
    opened2.classList.remove('closed')
})

opened2.addEventListener('click', () => {
    closed2.classList.remove('closed')
    opened2.classList.remove('opened')
    opened2.classList.add('closed')
})

closed3.addEventListener('click', () => {
    closed3.classList.add('closed')
    opened3.classList.add('opened')
    opened3.classList.remove('closed')
})

opened3.addEventListener('click', () => {
    closed3.classList.remove('closed')
    opened3.classList.remove('opened')
    opened3.classList.add('closed')
})

closed4.addEventListener('click', () => {
    closed4.classList.add('closed')
    opened4.classList.add('opened')
    opened4.classList.remove('closed')
})

opened4.addEventListener('click', () => {
    closed4.classList.remove('closed')
    opened4.classList.remove('opened')
    opened4.classList.add('closed')
})

closed5.addEventListener('click', () => {
    closed5.classList.add('closed')
    opened5.classList.add('opened')
    opened5.classList.remove('closed')
})

opened5.addEventListener('click', () => {
    closed5.classList.remove('closed')
    opened5.classList.remove('opened')
    opened5.classList.add('closed')
})