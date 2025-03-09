// TODO координаты мыши
// const block = document.querySelector('.block')
// block.addEventListener('mousemove',(e) => {
//     // console.log("X:"  + e.clientX + "Y: " + e.clientY)
//     console.log(e)
// })


// TODO счетчик
// const counter = document.querySelector(".counter");
// const increment = document.querySelector(".increment");
// const decrement = document.querySelector(".decrement");
//
// let count = 0;
//
// increment.addEventListener('click', (e) => {
//     count = count + 1
//     counter.innerText = count
//     counter.style.color = 'green'
// })
//
// decrement.addEventListener('click', () => {
//     if (count > 0) {
//         count = count - 1
//         counter.innerText = count
//         counter.style.color = 'red'
//     }
// })
// TODO изменение цвета старницы
const colors = ['red','blue','aqua','yellow','black','green','pink']
const colorRef = document.querySelector('input')
colorRef.addEventListener('input', () =>{
    const color = colorRef.value.trim().toLowerCase()
    if (colors.indexOf(color) !== -1) {
        document.body.style.backgroundColor = color
    }else{
        document.body.style.backgroundColor = 'white'
    }
})



