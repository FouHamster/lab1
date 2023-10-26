function fool(message){
    while(true){
        let data = parseInt(prompt(message))

        if (isNaN(data)) {
            alert('Введите число!!!')
            continue;
        }
    
        return data;
    }
}
// задание 1
let r = fool("Введите радиус конуса")
let h = fool('Введите высоту конуса')
let l = fool('Введите образующую конуса')

let v = 3 / (Math.PI * (r ** 2) * h)
let s = Math.PI * r * l

console.log('Объём конуса: ', v)
console.log('Площадь боковой поверхности: ', s)

document.getElementById('ob').innerHTML = `Объём конуса: ${v}`
document.getElementById('ploshad').innerHTML = `Площадь боковой поверхности: ${s}`

// задание 2
alert('ax + b = 0')

let a = fool('Введите значение а:')
let b = fool('Введите значение b:')

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





