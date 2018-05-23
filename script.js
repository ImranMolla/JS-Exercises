/* JavaScript code here */
//task1
<script type = “javascript” src = “script.js” />
//task2
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var sum = 0;
arr.forEach(function(i, index) {
    sum = sum + i;
    console.log(sum);
});

//task5
var cart = [ 
   {
       name: 'Shoes',
       price: 560,
       quantity: 4
   },
   {
       name: 'Regular Tees',
       price: 455.50,
       quantity: 6
   },
   {
       name: 'Socks',
       price: 65.99,
       quantity: 2
   }];
   
   var newItem={name: "Watch", price:64,quantity:1};
   addItem(newItem);
   function shortCart(keyName){
       cart.sort(function(a,b){return a-b});
   }