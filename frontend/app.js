const { name } = require("ejs")

const app={
    name : "dhananjay",
    email:"dhananjaymonga@gmail.com",
    detail:function(){
      console.log(this.name ) 
    }
}
const app1={
    name : "harsh",
    email:"imverma9921@gmail.com",
    detail:function(){
      console.log(this.name ) 
    }
}

app.detail()
let arr=[1,3,5,7,9,20]
arr.ha=()=>{
    console.log("start ")
}
console.log(arr.push(9
))
console.log(arr)
const personMaker=(name,age)=>{
  const person={
    name:name,
    age:age,
    
    talk(){
       return this.name
    }
  }
  return person
}
const p1=personMaker("dhananjay",20)
console.log(p1
)
console.log(p1.talk())

function You(name,age){
this.name=name
this.age=age
console.log(this)
}
You.prototype.talk=function(){
  console.log(` my  nameis ${this.name}`)
}
let ji1 = new You("dhananjay",21)
let y2 = new You("Harsh",22)
// class typ


class Person{
  constructor(name,age){
    this.name=name;
    this.age=age;


  }
  talk(){
    console.log(`hii,my name i ${this.name}`)

  }

}
let h1=new Person("adam",21)
let h2=new Person("har",21)
h1.talk()
h2.talk()