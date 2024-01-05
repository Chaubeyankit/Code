class Person {
   constructor(name, course) {
      this.name = name,
         this.course = course
   }
   showDetails() {
      return this.name
   }
}
let person1 = new Person("Adam", "MBBS");
console.log(person1.showDetails())