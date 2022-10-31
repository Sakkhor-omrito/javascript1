// var i;
// for(i=0;i<=100;i=i+30){
//     console.log('sakkhor');
// }


// var Mycountry=['Dhaka','Rangpur','Khulna','Barisal'];

// for(let MyCity of Mycountry){
//     console.log(MyCity);
// }

var billGates={shirt:true,shirtColor:"offWhite",smile:true,swaterColor:"gray"}

// for(let props in billGates){
//     console.log(props+":"+billGates[props]);
// }

// console.log(billGates['smile']);

// var billGatesPro={
//     shirt:{
//         color:"red",
//         quality:"good",
//         price:"200usd"
//     },
//     swater:{
//         color:'gray',
//         quality:'good',
//         price:'230usd',
//         warm:'best'
//     },
//     face:{
//         smiling:true,
//     }
// }

// console.log(billGatesPro['swater']);

// if(billGates['shirtColor']=="red"){
//     console.log("shirt color is red");
// }
// else if(billGates['shirtColor']=="offWhite"){
//     console.log("shirt color is blue");
// }
// else{
//     console.log("shirt color not found");
// }

// function myName(x,y){
//     var z=x+y;
//     console.log(z);    //parameterize function
// }
// myName(10,20);



// function something(...z){
//     console.log(z[2]);
// }                                       //rest parameter function
// something(1,2,3,4,5,6,7,8,"a","B","c")

// function funOne(){
//     return 20;
    
// }
// function funTwo(){
//     return 40;             //function ja return korbe oitai tar somotullo
    
// }
// console.log(funOne()+funTwo());


// var friendName =["sakkhor","robin","riaz","alamin","oishi"];
// var playerAge =[25,35,40,45,60];
// // console.log(playerAge[4]);

// playerAge[0]=40;  //change korte = dite hbe;
// console.log(playerAge);


// var numbers=['10','20','40','50'];

// // numbers.shift();   //shift korle prothome ta remove hoye jai   r unshift(30) korle prothome add hoiye jay 
// numbers.unshift(30);
// console.log(numbers);



// var num=0;
// while(num<7){
//     console.log(num)
//     console.log("we love javascript");         //buji nai abr bujte hobe 
//     num++
// }       

// var number=1;
// while (number<100){
//     if(number%2!=0)
//     console.log(number)
//     number++  //number =number+1
// }





// for(var num=0; num<10; num++){
//     console.log(num);
//     console.log('we love javascript');
// }

// for(var i=20;i<100; i+=5){
//     console.log(i);
// }


// var items =['bottle','pen','mouse','sunglass','watch'];
// for(var i=0; i<items.length; i++){
//     console.log(items[i]);
// }

// var numbers =[20,25,30,35,40,50,70,90,120,290,300];
// for(var i=0; i<numbers.length;i++){
//     if(numbers[i]>100){
//         continue;
//     }
//     console.log(numbers[i]);
// }

// var numbers =[20,25,30,35,40,50,70,90,120,290,300,22];
// for(var i=0; i<numbers.length;i++){   
//     if(numbers[i]>100){
//         break;        //break er khetre pore choto num thkleu ber hoiye chole jabe
//     }
//     console.log(numbers[i]);
// }




// function add(){
//     console.log(2+3);
//     console.log("proggraming language");
// }

// add();
// console.log("i love javascript");
// add();
// add();
// add();
// console.log("i love javascript");
// add();



// function sumOfTwoNumbers(x,y){
//     return x+y;         //return koraite chaile amra return likte hobe nahole undifined dekhabe //r ekbar return hoiya gele er pore kichu likle exicuted hobe na ;  r sudu return likle undifined dekhba krn amra toh kuno kichu dei eh nai ;
// }

// var result=sumOfTwoNumbers(20,30);
// console.log(result);




// var calcAge1 =function(birthYear){
//     return 2037 -birthYear;
// }
// var age1 =calcAge1(1998);{
//     console.log(age1);
// }



// var calcAge2= function(birthYear){
//     return 2037 -birthYear;
// }

// var age2 =calcAge2(1999);
// console.log(age2);




// var sakib={
//     name:'sakkhor majumder',
//     age:21,
//     country:'bangladesh',
//     isAllRounder:true,
//     isCaptain:true,
// }
// // console.log(sakib.isCaptain); //dot notation
// // console.log(sakib["age"]);  //bracket notation

// // var properties ="age";
// // console.log(sakib[properties]);  //variable er moddhe thakle amra bracket notation usage korbo 


// sakib.isActive=true //set properties   notun kichu add korte chaile eivabe korte hobe
// // console.log(sakib);

// // console.log(Object.keys(sakib)); //amra jdi object gulor key dekhte chai tahole eivabe hobe

// console.log(Object.values(sakib));//amra jdi object er value gulo dekhte chai tahole Object.values hbe



var shoppingCart ={
    books:3,
    sunglass:2,
    keyboard:5,
    mouse:1,
    pen:25,
    shoes:2,

}
for(propertyName in shoppingCart){
    // console.log(propertyName);       //amra jdi property name gulo chai tahole eivabe

    var value=shoppingCart[propertyName];//value jdi ber korte chai tahole eivabe
    console.log(propertyName,value);
}










