/*
   Keyword     Scope       Re_assign      Re_decleare    TDZ

   var         Function     ✅             ✅             ❌ 
   let         Block        ✅             ❌             ✅
   const       Block        ❌             ❌             ✅
*/

let fruits = "apple";
console.log(fruits);
//Block ke liye alag se memory allocate hoti hai
{
   // console.log(fruits); //TDZ error
   let fruits;
   console.log(fruits);
   fruits = "orange";
   console.log(fruits);
}
console.log(fruits);