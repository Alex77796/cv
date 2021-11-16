// for(let i = 0; i < 10 || i <= 10; i+= 3){
//  if(i % 3 == 0 && i != 0) continue
//  if(i >= 8) break
//   document.write("<br/>" + i + "<br/>")
// }
// x=0
// while(x < 10){
//   document.write(x + "<br/>")
//   x+=2;
  
// }
// var y = 10

// do{
//   document.write("gpgogogogo")
// } while(y > 1)
// var person

// if(confirm("Are you sure?")){
//   person = prompt("Hi, what is your name?")
//   if(person === Number){
//     alert("Name not corected")
//   }else{
//   alert("Hello " + person)}
// } else{
//   alert("Person not sure!")
// }

// var arr = new Array("str", 1.23, 7, false, 8)
// // document.write("<br/>" + arr[0] + "<br/>" + arr[2])
// // document.write("<br/>" + arr.length)
// // for(let i = 0; i < arr.length; i++){
// //   document.write(arr[i] + "<br/>")
// // }

// arr = new Array()
// for(i = 0; i < 10; i++){
//   arr[i] = i * 3
//   document.write(arr[i])
// }
// let sum = 0
// for(i = 0; i < arr.length; i++){
// sum += arr[i]
// document.write("<br/>"+sum)
// }
// let arr = [1,7,9,6]
// let summ = 0

// for(i = 0; i < arr.length; i++){
// summ += arr[i]
// document.write("<br/>" + "Summa = " + summ / arr.length)
// }

// let arr_1 = new Array()
// let arr_2 = new Array()
// let arr_3 = new Array()

// for(let i = 0; i < 5; i++) arr_1[i] = i
// for(let i = 0; i < 10; i++)arr_2[i] = i
// for(let i = 0; i < 15; i++)arr_3[i] = i

// let arr = new Array(arr_1, arr_2, arr_3)

// for(let x = 0; x < arr.length; x++){
//   for(let j = 0; j < arr[x].length; j++)
//   document.write(arr[x][j] + " ")
//   document.write("<br/>")
// }

// let summ;
// function print (text) {
//   document.write(text)
// }
// function count (x, y) {
// summ = x + y
// }
// print("Hello")
// count(5, 7)
// print(summ)
 
// var global = 12
// var i = 10

// function test (){
//   global++
//   var i = 5
// }

// test()
// document.write("global - " + global + " variable i - " + i)

// function buttonClick (button){
//   alert("You click button name button " + button.name + " button value " + button.value)
// }

// function pageLoad(){
//   alert("PaGe LoAd")
// }

// let counter = 0

// function OnMouseCounter (element) {
//   counter ++
//   element.innerHTML = "На цей елемент нажали " + counter + " раз"
// }

// FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM 

// function valid (form) {
//   let fail = false
//   let name = form.name.value
//   let email = form.email.value
//   let password = form.password.value
//   let rePassord = form.RePassword.value
//   let state = form.state.value
//   if(name == "" || name == " ")
// fail = "Not name"
// else if(email == "")
//   fail = "Not email"
// else if(password == "")
// fail = "Not Password"
// else if(rePassord == "")
// fail = "Not RePassword"
// else if(password !== rePassord)
// fail = "Password no Repassord"
// else if(state == "")
// fail = "Not pol"
// if(fail){
//   alert(fail)
//   }else window.location = "http://google.com"
// }

// var id = setInterval(gaga, 1000)
// var counter = 0

// function gaga (){
// counter++
// alert("Second " + counter)
// if(counter == 3) clearInterval(id)
// }

// let counter = 0

// function timer () {
// counter++
// document.getElementById("sec").innerHTML = counter
// setTimeout(timer, 1000)

// }

// let text = "\nChislo PI - " + Math.PI
// text += "\n Cislo E - " + Math.E
// text += "\n Sinus -7 - " + Math.sin(3)
// text += "\n Cluch Chislo - " + Math.ceil(Math.random() * 10)
// alert(text)

// let date = new Date()
// text = "Year - " + date.getFullYear()
// text += "\nMonth - " + date.getMonth()
// text += "\nDay - " + date.getDay()
// text += "\nHours - " + date.getHours()
// text += "\nMinutes - " + date.getMinutes()
// text += "\nSecond - " + date.getSeconds()

// alert(text)

// let arr = new Array(4,1, 2, 5, 6, 77, 999)
// text = arr.length
// text += arr.join(",")
// text += arr.sort().join(", ")
// alert(text)

// let string = "Litle string ";

// text = "\n" + string.length
// text += "\n" + string.toLocaleUpperCase()
// text += "\n" + string.toLowerCase()
// text += "\n" + string.substring(1,4)
// text += "\n" + string.charAt(2)
// text += "\n" + string.indexOf("str")

// alert(text)

// function changeColor (newColor) {
//   let element = document.getElementById("fname")
//   element.style.color = newColor


// let out = document.getElementById("out")
// let tmp = ""

// // for(i = 4; i < 401; i++){
// // tmp = tmp +  i + " "
// // }
// // out.innerHTML = tmp

// for(let i = 1; i <= 9; i = i+ 1){
//  tmp = tmp + 7 + " * " + i + " = " + 7 * i
//  document.write(tmp)
// }

// for(let i = 100; i <= 200; i++){
//   tpm = tmp + "&#"+ i;
//   document.write(i)
// }

// let mult = 1

// for(i = 1; i <= 3; i++){
//   mult = mult * i
// }
// document.write(mult)

// let size = ["15px", "12pt", "34em", "-3px", "2%"]

// function toNum (arr){
//   let out = []
//   for(i=0; i < arr.length; i++){
//     arr[i] = parseFloat(arr[i])
//     if(arr[i] >= 0){
//       out.push(arr[i])
//     }
//     out.sort(function(a,b){
//       return a-b
//     })
//   }
//   return out
// }

// console.log(toNum(size))

// function toNum2 (arr){
//   let newArr = arr.map(function(sz){
//     return parseFloat(sz)
//   })
//   newArr = newArr.filter(function(sz){
//     if(sz > 0) return sz
//   })
//   newArr.sort(function(a,b){
//     return a - b
//   })
//   return newArr
// }

// console.log(toNum2(size))

// let arr = [3, -12]
// let result = []

// for(i = arr[1]; i <= arr[0]; i++){
//   result.push(i)
// }
// console.log(result)

// const people = [
// {name: "Alex", age: 25, budget: 40000},
// {name: "Anna", age: 47, budget: 9000},
// {name: "Lera", age: 20, budget: 6000},
// {name: "Bogdan", age: 51, budget: 33330},
// {name: "Tanya", age: 26, budget: 1000}]

// people.forEach(person => console.log(person))


//  const abults = people.filter(p => p.age >= 30)
// console.log(abults)


// const amount = people.reduce(total, person => total +  person.budget, 0)
// console.log(amount)

// const igor = people.find(person=> person.name === "Alex")
// const igorIndex = people.findIndex(person=> person.name === "Tanya")

// console.log(igorIndex)

// const money = people.filter(person => person.budget > 10000)

// console.log(money)

//  const newPeople = people.filter(p => p.budget > 10000)
//  .map(p => {
//    return {
//      info: `${p.name} ${p.age}`,
//      budget: p.budget
//    }
//  }).reduce((total, p)=> total + p.budget, 0)

//  console.log(newPeople)

// const obj = {
//   name: "Alex",
//   age: 25
// }
// // console.log(Object.entries(obj))

// const entries = [
//   ["name", "alex"],
//   ["age", 25]
// ] 
// //  console.log(Object.fromEntries(entries))

// const map = new Map(entries)
// console.log(map.get("name"))

// map.set("job", "fullstack")
// .set(obj, "Value of object")
// .set(NaN, "Nan??????")
// console.log(map.get(obj))
// console.log(map.get(NaN))
// // map.delete("job")
// console.log(map.has("job"))
// console.log(map.size)

// const array = Array.from(map)
// const arr = [...map]

// console.log(arr)

// const users = [
//   {name: "Alex"},
//   {name: "Lera"},
//   {name: "Leo"}
// ]

// const visits = new Map()

// visits
// .set(users[0], new Date())
// .set(users[1], new Date(new Date().getTime() + 1000 * 60))
// .set(users[2], new Date(new Date().getTime() + 5000 * 60))

// console.log(visits)

// const set = new Set([1,2,3,3,3,4,5,5,6,])
// set.add(10).add(20).add(10).add(30).add(20)

// console.log(set.has(9))
// console.log(set.size)
// console.log(set.delete(1))
// console.log(set.size)
// console.log(set)

// const unsorted = [1,4,6,8,4,3,7]

// const ascending = [...unsorted].sort((a,b) => a - b ).map(d => d * 10)
// const descending = [...ascending].sort((a,b) => b - a ).map(d => d * 10)


// console.log(unsorted)
// console.log(ascending)
// console.log(descending)

// const first = [1,2,3,4]
// const second = [3,4,5,6]

// function intersection (a,d){

// }

// intersection(first, second)

// function palindrom(str) {
//   str = str.toLowerCase()
//   return str == str.split("").reverse().join("")
// }
// console.log(palindrom("abba"))

// var myImage = document.querySelector('img');

// myImage.onclick = function() {
//     let mySrc = myImage.getAttribute('src');
//     if(mySrc === 'https://study.ua/wp-content/uploads/2020/04/img-academy-1.jpg') {
//       myImage.setAttribute ('src','https://lh3.googleusercontent.com/proxy/eWIOxSXvyxQTOrQqlmumnFXhWNsI9-PiuL0kVUTQPLggoVv6RgDuxJPCws9g6O6efR7jXR2ThivumtnaNGWs1UZOSBEBy0lcWvIIKPpLskrO');
//     } else {
//       myImage.setAttribute ('src','https://study.ua/wp-content/uploads/2020/04/img-academy-1.jpg');
//     }
// }

// const palindrom = str => {
//   str = str.toLowerCase()
//  return str == str.split("").reverse().join("")
// }
// console.log(palindrom("hgh"))

// document.onclick = (e) => {
//   if(e.target.tagName == "IMG"){
//     e.target.classList.add("bordered")
//   }
// }

// const palindrom = str => {
//   str = str.toLowerCase()
//   return str == str.split("").reverse().join("")
// }
// console.log(palindrom("abad"))

// let number = (num) => {
//   let chet = 0, neChet = 0
//   for(i = 0; i < num.length; i++){
//     if(num[i]%2 === 0){
//       chet++
//     }else{
//       neChet++
//     }
//   }
//   return console.log([chet,neChet])
// }

// number("987654567890987654356789")



// const duplicate = arr => [...arr, ...arr]

// console.log(duplicate([1,2,3,4,5]))

// let arr = [1,2,3,4,5]

// let result = arr.filter(el => el%2)
// console.log(result)

// const sum = (...arr) => {
  // if(b){
  //   return a + b
  // }
  // return function(c){
  //   return a + c
  // }
// if(arr.length === 2){
//   return arr[0] + arr[1]
// }
// return (b)=>{
//  return arr[0] + b
// }
// }

// console.log(sum(2,7))
// console.log(sum(2)(3))

// const person = {
//   firstName: "Alex",
//   logName(num, str){
//     console.log("Name: " + this.firstName + " " + num + " " + str)
//   }
// }

// const person2 = {
//   firstName: "Lera"
// }

// person.logName(67, "hku")
// person.logName.bind(person2, 78, "Hello")()

// function hello(){
//   console.log("Hello", this)
// }

// const person = {
//   name: "Alex",
//   age: 25,
//   seyHello: hello,
//   logInfo: function(job, phone){
//     console.group(`${this.name} info:`)
//     console.log(`Name is ${this.name}`)
//     console.log(`Age is ${this.age}`)
//     console.log(`Job is ${job}`)
//     console.log(`Phone: ${phone}`)
//     console.groupEnd()
//   }
// }
// const person2 = {
//   name: "Lera",
//   age: 20
// }
// person.seyHello()
// person.logInfo()

// const fnPersonInfoLog =  person.logInfo.bind(person2, "Developer", 0988907016)()
// person.logInfo.call(person2, "Developer", 0988907016)
  // person.logInfo.apply(person2, ["Developer", 0988907016])

  // const array = [1,2,3,4,5]

  // const sum = (arr,n) => arr.map((i)=>i*n)

  // console.log(sum(array, 10))

// Array.prototype.sum = function(n){
//   return this.map((i)=> i * n)
// }

// console.log([6,4,6,8].sum(3))

// console.log(array.sum(2))

// const person = new Object({
//   name: "Alex",
//   age: 25,
//   greet: function(){
//     console.log("Greet")
//   }
// })

// Object.prototype.sayHello = function(){
//   console.log("HeLLo")
// }

// const lera = Object.create(person)
// lera.name = "LERA"

// const str = new String("Hello orld")

// const urlGenerator = (domain) => {
//   return (url) => {
//     return `http:${url}.${domain}`
//   }
// }

// const dom = urlGenerator("com")
// console.log(dom("google"))

// console.log(dom("nettflix"))

// function bind (context, fn) {
//   return function(...arg){
//     fn.apply(context, arg)
//   }
// }

// function logPerson () {
//   console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
// }

// const person1 = {name: "Alex", age: 25, job: "Frontend"}
// const person2 = {name: "Lera", age: 20, job: "kook"}

// bind(person1, logPerson)()


// const city = {
//   Ternopil: 1,
//   Lviv: 2,
// Frank: 3,
// Rivne: 4
// }
// const cityW = {
//   Berlin: 5,
//   Ternopil: 6,
//   Vroclav: 7,
//   Sofia: 8
// }

// const str = {...cityW,...city}
// console.log(str)

// const arr = [1,2,3,4,5,7]

// function sum (a,b,...rest){
// return a + b + rest.reduce((a,i)=> a + i, 0)
// }
// console.log(sum(...arr))

// function calcValues(a, b){
//   return[
//     a + b,
//     a - b,
//     a / b,
//     a * b
//   ]
// }

// const [sum,sub = "Net",dil, ...mult] = calcValues(42,10)

// console.log(sum,sub,dil,mult)

const person = {
  name: "Alex",
  age: 25,
  job: "Front-end",
  addres: {
    city: "Ternopil",
    country: "Ukraine"
  }
}

// // const {name, age, addres: {city: sity, country: country = "Russia"}} = person
// const {name, ...info} = person

// console.log(name, info)

// function logPerson({name,age,job}){
//   console.log(name, age, job)
// }

// logPerson(person)

// const myNumber = 42
// localStorage.setItem("number", myNumber.toString())
// console.log(localStorage.getItem("number"))

const object = {
  name: "Igor",
  age: 505
}
localStorage.setItem("person", object.toString())
const rav = localStorage.getItem("person")
person.name = "Vuyko"
console.log(person)










