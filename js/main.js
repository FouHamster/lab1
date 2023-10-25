// function fool(n){
//     while (n == false){
//         if (n == false) {
//             alert('Введите число!')
//             let n = parseInt(prompt('Введите радиус основания'))
//         }
//     }
// }

// задание 1
let r = parseInt(prompt('Введите радиус основания'))
if (isNaN(r)) {
    alert('Нужно писать число!')
} 

let h = parseInt(prompt('Введите высоту конуса'))
if (isNaN(h)) {
    alert('Нужно писать число!')
}

let l = parseInt(prompt('Введите образующую конуса'))
if (isNaN(l)) {
    alert('Нужно писать число!')
}

let v = 3 / (Math.PI * (r ** 2) * h)
let s = Math.PI * r * l

// if ((v || s) == NaN){
//         alert('Введите числа!!!')
// }

console.log('Объём конуса: ', v)
console.log('Площадь боковой поверхности: ', s)

document.getElementById('ob').innerHTML = `Объём конуса: ${v}`
document.getElementById('ploshad').innerHTML = `Площадь боковой поверхности: ${s}`

// задание 2
alert('ax + b = 0')

let a = parseInt(prompt('Введите значение а:'))
if (isNaN(a)) {
    alert('Нужно писать число!')
}

let b = parseInt(prompt('Введите значение b:'))
if (isNaN(b)) {
    alert('Нужно писать число!')
}

let x = b / a

console.log(x)
document.getElementById('yraw').innerHTML = `Значение x = ${x}`

// Задание 3
let p = 0
n = 1
for (let i = 1; n <= 10; i+=2) {
        let p = ((Math.PI * (i ** 2)).toFixed(2))
        // document.getElementById('pl').innerHTML = `Круг ${n} = ${p}`
        console.log(`Круг ${n} = ${p}`)  
        n += 1       
} 





