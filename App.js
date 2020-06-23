                                    // Chapter #21
// // task 1
// var name1=prompt("Enter your first name");
// var name2=prompt("Enter your second name");
// alert("Welcome"+" "+name1+" "+name2);

// // task 2
// var mobile=prompt("Enter your favourite mobile model");
// var n = mobile.length;
// document.write("My favourite phone is :"+" "+mobile+"</br> and length of string is :"+" "+n);

// // task 3
// var str = "Pakistani";
// var n = str.indexOf("n");
// document.write("Index of 'n':"+" "+n);

// task 4
// var str = "Pakistani";
// var n = str.lastindexOf("n");
// document.write("Index of 'n':"+" "+n);

// // task 5
// var str = "Pakistani";
// var res = str.charAt(3);
// document.write("Character at index 3:" +" "+res);

// task 6

// var str1 = "Asif ";
// var str2 = "Ali!";
// var res = str1.concat(str2);
// document.write("Welcome"+" "+res);

// // task 7
// var city="Hyderabad";
// var res = city.replace("Hyder", "Islam");
// alert(res);

// // task 8
// var phrase = 'Ali and Sami are best friends. They play cricket and football together.';
// var tokens = phrase.split('and');
// var stripped = tokens.join('&');
// alert(stripped);

// // task 9
// var a = "472";
// var b = parseInt(a);
// document.write("value is " +" "+ b+" "+"and it's type is integer");

// // task 10
// var input=prompt("Give an input");
// var ChangeCase=input.toUpperCase();
// document.write(ChangeCase);

// // task 11
// var input=prompt("Give an input");
// var first=input.slice(0,1);
// var other=input.slice(1);
// var Upper=first.toUpperCase();
// var lower=other.toLowerCase();
// alert(Upper+lower);

// // task 12
// var myFractional = parseFloat("1.9999");
// var numberAsString = myFractional.toString();
// alert(numberAsString)
// // task 13
// var ch = prompt("Enter Character");
// var index = ch;
// var i = ch.charCodeAt(index);
// document.write("ASCII code of"+" "+ch+" "+"is"+" "+i);

// task 14
// var search = prompt("Enter your city");
// search = search.toLowerCase();
// var arr = ["cake","apple pie","cookies","chips","patties"];
// for (var i = 0; i <= 4; i++) {
// if (search === arr[i]) {
// alert(search+" "+"is found in our bakery");
// break;
// }

// else{
//     alert("We are sorry"+" "+search+" "+"is not available in our bakery");
//     break;
// }
// }

// // task 17
// var name="Pakistan";
// var lastChar = name.charAt(name.length - 1);
// alert(lastChar);


                                                        //    Chapter # 26-30
// // task 1
// var num=+prompt("Enter a positive number","Positive number");
// var number=Math.round(num);
// var floor=Math.floor(num);
// var ceil=Math.ceil(num);
// alert("number"+" "+num+"Round off Value is"+" "+number+"\n"+"Floor value"+" "+floor+"\n"+"Ceil value"+" "+ceil);

// task 2
// var num=+prompt("Enter a negative number","Negative number");
// var number=Math.round(num);
// var floor=Math.floor(num);
// var ceil=Math.ceil(num);
// alert("number"+" "+num+"\n"+"Round off Value is"+" "+number+"\n"+"Floor value"+" "+floor+"\n"+"Ceil value"+" "+ceil);

// // task 3
// var dice=Math.random() *6+1;
// var floor=Math.floor(dice) ;
// alert("Random Dice Value"+" " +floor)


// task 4
// var headuser=prompt("Enter head user name","Head user");
// var tailuser=prompt("Enter tail user name","tail user");
// var toss=Math.random() *2;
// var floor=Math.floor(toss) ;
// if (floor===0) {
//     alert(headuser+" "+"win the toss");
// } else {
//     alert(tailuser+" "+"win the toss");
// }

// task 5
// var dice=Math.random() *100;
// var floor=Math.floor(dice) ;
// alert("Random Number between 1 and 100:"+" " +floor)

// // task 6
// var weight=+prompt("Enter your weight","weight")
// var weight1=Math.random() *100;
// var floor=Math.floor(weight1) ;
// alert("The weight of user is :"+" " +floor+" "+"Kilograms");

// task 
// var input=+prompt("Enter a number","Number from 1-10");
// var num=Math.random()*10;
// if(input===num){
//     alert("Congratulation");
// }
// else{
//     alert("Try again");
// }


                                                                //   Chapter # 31-34
// //  task 1
// var date=new Date();
// document.write(date);

// // task 2
// var date=new Date();
// var b=date.toString();
// var c=b.slice(3,8)
// alert("Current Month is"+" "+c);

// task 3
// var date=new Date();
// var b=date.toString();
// var c=b.slice(0,3)
// alert("Current Day is"+" "+c);

// task 4

// var date=new Date();
// var b=date.toString();
// var day=b.slice(0,3);
// if (day='sunday') {
//     alert("It's a fun day");
// }

// task 5
// var date=new Date();
// var b=date.toString();
// var c=b.slice(8,11)
// alert("Current Month is"+" "+c);
// if (c<=15) {
//     alert("First fifteen days of month");
// }

// task 6
// var date=new Date();
// document.write("Current date is"+" "+date+"</br>");
// var miliseconds=date.getTime();
// document.write("Total Miliseconds Elapsed Since 1 Jan 1970 are"+" "+miliseconds+"</br>");
// var seconds=miliseconds/3600;
// document.write("Total seconds Elapsed Since 1 Jan 1970 are"+" "+seconds);

// // task 7
// var date=new Date();
// var b=date.toString();
// var time=b.slice(16,24);
// if (time<'12') {
//     document.write("It's AM");
// }else{
//     document.write("It's PM");
// }

// task 8
// var today = new Date();
// var b=today.toString();
// var c=b.slice(3,15);
// var doomsday = new Date("April 24, 2020");
// var d=doomsday.toString();
// var e=d.slice(3,15);
// var total=(today-doomsday)/(1000 * 60 * 60 * 24);
// total = Math.floor(total);
// alert(total+" "+"Days has been passed since last Ramzan");

// // task 9
// var today = new Date("Jan 1 , 2015");
// var date= new Date("Dec 05, 2015");
// var total=(date-today)/(1000*60 );
// alert(total+" "+"Seconds has been passed since the begining of 2015");

// // task 10
// var today = new Date("Dec 05,2015");
// var date= new Date("Dec 05, 1915 ");
// document.write("Current date is"+" "+today+"</br>");
// document.write("100 Years ago it was"+" "+date);

// // task 11
// var dob=new Date(prompt("Enter your date of birth","Marh 01 ,1995"));
// var dobmili=dob.getTime();
// var today = new Date();
// var todaymili = today.getTime();
// var Diff = todaymili - dobmili;
// var dDiff = Diff / (1000 * 60 * 60 *30* 24*12);
// var accuAge = Math.floor(Diff / (1000 * 60 * 60 *30* 24*12));
// document.write("Your age is"+" "+accuAge+"</br>");
// document.write("Your date of birth is"+" "+dob);

// // task 12
// var name="Asif Ali";
// var month="February";
// var units=410;
// var charge=16;
// var late=350;
// var net=units*charge;
// var late_pay=units*charge+late;
// document.write("Custumer Name:"+name+"</br>");
// document.write("Bill Month:"+month+"</br>");
// document.write("Total Units Consumed:"+units+"</br>");
// document.write("Charge per unit:"+charge+"</br>");
// document.write("Amount payable within due date:"+net+"</br>");
// document.write("Late payment surcharge:"+late+"</br>");
// document.write("Amount Payable after due date:"+late_pay+"</br>");



                                                                            //   Chapter # 35-38

//  task 1
// function date(){
// var d = new Date();
// document.write(d);
// }
// date();

// task 2
// function greet(){
// var c=("Welcome"+" "+"Asif"+" "+"Ali")
// alert(c)
// }
// greet()

// task 3
// function Add() {
//     var a=+prompt("Enter first number") ;
//     var b=+prompt("Enter second number") ;
//     var c=a+b;
//     return c;
// }
// var z=Add()
// document.write(z)

// // task 4
// function calc(num1,oprtr,num2){
//     if (oprtr==="+"){
//         return num1+num2;
//     }
//     else if (oprtr==="-"){
//         return num1-num2;
//     }
//     else if (oprtr==="*"){
//         return num1*num2;
//     }
//     else if (oprtr==="/"){
//         return num1/num2;
//     }
//     else{
//         return "Incorrect Operator"
//     }
// }
// var result=calc(12,"+",45);
// var result1=calc(100,"-",80);
// var result2=calc(40,"*",60);
// var result3=calc(40,"/",2);
// var result4=calc(40,"$",60);
// document.write("Sum="+result+"</br>")
// document.write("Subtraction="+result1+"</br>")
// document.write("Multiplication="+result2+"</br>")
// document.write("Division="+result3+"</br>")
// document.write("Incorrect="+result4+"</br>")

// // task 5
// function argument(){
//     var arg=prompt("enter your argument");
// var num=arg*arg;
// alert(num);
// }
// argument();

// // task 6
// function factorial() {
// var input = prompt("Enter the number to get factorial of: ","Number");
// var fact = input;
// for(var i=1;i < input;i++){
//    fact = i * fact;
// }
// document.write("The Factorial of"+" "+input+" "+"is :"+" "+fact);
// }
// factorial()

// Task 7
// var num=+prompt("enter a number");
// let count=1;
// for(var i=count;i<=num;i++){
//     document.write(i+" ")
// }

// task 8 
// function triangle(){
// function pythagorean(sideA, sideB){
//     return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));

// }

// document.write(pythagorean(4, 3));
// }
// triangle();

// task 9
// var length = prompt("Enter a whole number for the length of your rectangle.");
// var width = prompt("Enter a whole number for the width of your rectangle.");
// function area(length, width) {
//     return length * width;
// }
// function perimeter(length, width) {
//     return 2*( length + width);
// }

// document.writeln('The area of your rectangle is ' + area(length, width));         

// task 10
// function check_Palindrome(str_entry){

// var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
// var ccount = 0;

//         if(cstr==="") {
//             console.log("Nothing found!");
//             return false;
//         }

//         if ((cstr.length) % 2 === 0) {
//             ccount = (cstr.length) / 2;
//         } else {

//             if (cstr.length === 1) {
//                 console.log("Entry is a palindrome.");
//                 return true;
//             } else {

//                 ccount = (cstr.length - 1) / 2;
//             }
//         }

//         for (var x = 0; x < ccount; x++) {

//             if (cstr[x] != cstr.slice(-1-x)[0]) {
//                 console.log("Entry is not a palindrome.");
//                 return false;
//             }
//         }
//         console.log("The entry is a palindrome.");
//         return true;
//     }
//     check_Palindrome('madam');
//     check_Palindrome('nurses run');
//     check_Palindrome('fox');

// task 11






