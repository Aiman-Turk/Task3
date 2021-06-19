//  ASSIGNMENT NO # 3(CH#17-20)

// 1. Declare and initialize an empty multidimensional array. (Array of arrays)

// var array=[
//     ["Aiman",1,"True"],
//     ["Yousra",2,"False"],
//     ["Sumayya",3,"True"],
//     ["Huda",4,"False"],
//     ["Musfirah",5,"False"]
// ];
// document.write("Multidimensional Array :"+"<br>"+array);

// 2. Declare and initialize a multidimensional array representing the following matrix:  
//  var matrix=[
//      [0,1,2,3],
//      [1,0,1,2],
//      [2,1,0,1]
//  ];
//  for(var a=0; a<3; a++){
//      document.write(matrix[a] +"<br>"+"<br>");
//  }


// 3. Write a program to print numeric counting from 1 to 10.  

// var x;
// for(x=0; x<=10; x++){
//     document.write(x+"<br>");
// }



// 4.  Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.  
// var table=prompt("Enter a number to show its multiplication table: ");
// var number=prompt("Enter Length multiplication table: ");
// for(var i = 1; i<=number; i++){
//     document.write(table +"x"+ i +  " = " + (table*i)+" <br>");

// }


// 5. Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”] 

// var fruits=["Apple","banana","mango","orange","stawberry"];
// for(var a=0; a<fruits.length; a++){
//     document.write(fruits[a]+"<br>");

// }
// for(var b=0; b<fruits.length; b++){
//     document.write("Element at index "+" "+[b]+" "+"is "+" "+fruits[b]+"<br>");
// }








// 6. Generate the following series in your browser. See example output. a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k 

// var series=[
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
// [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ],
// [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
// [ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ],
// ["2K","4K","6K","8K","10K","12K","14K","16K","18K","20K"]
// ];
// var Series_1=["Counting","Reverse Counting","Even","Odd","Series"];
// for(var a=0; a<5; a++){
//     document.write(series_1[a]+"<br>"+"<br>"+series[a]+"<br>"+"<br>");
// }






// 7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Example: 

// var items=["cake", "apple pie", "cookie", "chips","patties"];
// var b=prompt("Welcome to IDEAL Bakery , What do you want to order Sir/Mam ?","order");
// var matchfound="no";
// for (var a=0; a<5; a++){
//     if(b===items[a]){
//         matchfound="yes";
//         document.write(b+" "+"is avalaible at index"+" " +a+" "+ "in our bakery");
//     }
// }
// if(matchfound="no"){
//     document.write("we are sorry"+" "+b+" "+"is not avalaible in our bakery");
// }








// 8. Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12]. 
//  var a=[24, 53, 78, 91, 12];
// document.write("Array items : "+a+ "<br>");
// document.write("The smallest number is :"+Math.max(...a));






// 9. Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12] 
//  var a=[24, 53, 78, 91, 12];
// document.write("Array items : "+a+ "<br>");
// document.write("The smallest number is :"+Math.min(...a));





// 10. Write a program to print multiples of 5 ranging 1 to 100. 
// var x;
// for (x=5; x<=100; x=x+5){
//     document.write(x+" ,");
// }



                                       // ASSIGNMENT #O4 (CH 21-25)
                                        //    STRING METHODS  





// 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName.Greet the user using his full name. 


// var first_name=prompt("Enter first name ","first name");
// var last_name=prompt("Enter last name ","last name");
// var fullName= first_name+" "+last_name;
 
//  document.write("Welcome"+" "+fullName);                           
                                



// 2. Write a program to take a user input about his favorite mobile phone model.Find and display the length of user input in your browser

// var mobile_phone_model=prompt("Enter your favorite mobile phone model");
// var length_of_user_input=mobile_phone_model.length;
// document.write("My Favorite phone is :"+" "+mobile_phone_model+"<br>"+"Length of string :"+" "+length_of_user_input);



// // 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser 

// var a ="Pakistani";
// document.write("String :"+" "+a +"<br>");
// var index=a.indexOf("n");
// document.write("index of 'n' :"+" "+index);

// 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser


// var a ="Hello World!";
// document.write("String :"+" "+a +"<br>");
// var index=a.lastIndexOf("l");
// document.write("Last index of 'l' :"+" "+index);






// 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.



// var a="Pakistani";
// document.write("String :"+" "+a +"<br>");
// var index=a.charAt("3");
// document.write(" Character at index 3 :"+" "+index);








// 6. Repeat Q1 using string concat() method. 
// 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name. 
 

// var first_name=prompt("Enter first name ","first name");
// var last_name=prompt("Enter last name ","last name");
// var fullName= first_name.concat(" "+last_name);
 
// document.write("Welcome"+" "+fullName); 














// 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser




// var city="Hyderabad";
// document.write("City :"+city +"<br>");
// var b=city.replace("Hyder","Islam");
// document.write("After replacement :"+" "+b);







// 8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. var message = “Ali and Sami are best friends. They play cricket and football together.”; 
 

// var messege="“Ali and Sami are best friends. They play cricket and football together.";

// document.write("Messege:"+messege +"<br>");
// var b=messege.replace(/and/g,"&");
// document.write("After replacement :"+" "+b);




// 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser. 

// var string ="472";
// document.write("Value :"+" "+string +"<br>");
// document.write("Type :"+typeof(string)+"<br>");
// var type=Number(string);
// document.write("Value :"+" "+type +"<br>");
// document.write("Type :"+typeof(type)+"<br>");



// 10. Write a program that takes user input. Convert and show the input in capital letters. 

// var a=prompt("writr something in small letters");
//  document.write("User input :"+" "+a+"<br>");
// var b=a.toUpperCase();
// document.write("Upper Case :"+" "+b);






// 11. Write a program that takes user input. Convert and show the input in title case. 


// var a=prompt("Write something ");
// document.write("User input :"+" "+a+"<br>");
// var b= a.charAt(0);
// b=b.toUpperCase();
// var c=a.slice(1);
// c=c.toLocaleLowerCase();
// var d=b+c;
// document.write("Little case :"+" "+ d);



// 12. Write a program that converts the variable num to string. var num = 35.36 ; Remove the dot to display “3536” display in your browser. 

// var num = 35.36 ;
// document.write("Number :"+" "+num+"<br>");
// var string=num.toString();
// var replace=string.replace(".","");
// document.write("Result :"+" "+replace+"<br>");


// 13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ . 
 
//     Note: ASCII code of ! is 33 ASCII code of , is 44 ASCII code of . is 46 ASCII code of @ is 64 
 
    









// 14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example

// var items=["cake", "apple pie", "cookie", "chips","patties"];
// var b=prompt("Welcome to IDEAL Bakery , What do you want to order Sir/Mam ?","order");
// b=b.toLowerCase();
// var matchfound="no";
// for (var a=0; a<5; a++){
//     if(b===items[a]){
//         matchfound="yes";
//         document.write(b+" "+"is avalaible at index"+" " +a+" "+ "in our bakery");
//     }
// }
// if(matchfound="no"){
//     document.write("we are sorry"+" "+b+" "+"is not avalaible in our bakery");
// }




// 15. Write a program to take password as an input from user. The password must qualify these requirements: a. It should contain alphabets and numbers b. It should not start with a number c. It must at least 6 characters long If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document. 
 
 















// 16. Write a program to convert the following string to an array using string split method. var university = “University of Karachi”; Display the elements of array in your browser. 


// var university = "University of Karachi";
// var words =university.split(" ").sort();
// document.write(words);



// 17. Write a program to display the last character of a user input. 
 
// var str="Pakistan";
// document.write("User input :"+str+"<br>");
// var last=str.charAt(str.length-1);
// document.write("Last character of input :"+last);


// 18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string. 


















