// Copyright (c) 2023 Hewett All rights reserved
//
// Created by: Santiago Hewett
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict";

function enterClicked () {
  
  //message for the user
  let message = "";
  
  // get user input for remainder
  
  let userNumber = parseInt(document.getElementById("user-number").value);
  
  
  let min = parseInt(document.getElementById("min").value);
  

  let max = parseInt(document.getElementById("max").value);
  

  let display = document.getElementById('display-options').value;
  
  //initialize couter and remainder

  let remainder = 0;


  let counter1 =  min;


  //statement for when min is larger than max

  if (min > max){
    message = "Please enter a valid min."
  }

  //statement for when a string is entered

  else if (isNaN(min) || isNaN(max) || isNaN(userNumber)){
    message = "Please Enter a Min, Max and/or Number."
  }

    //loops for min to max and max to min
  else {
    //min to max loop
    if (display == "Min to Max"){
      while (counter1 <= max){

        remainder = userNumber % counter1

        message = message + userNumber + " % " + counter1 + " = " + remainder + "<br>"

        counter1++     
}
}
      else {
        for (let counter = max ;counter >= min; counter = counter - 1) {

          remainder = userNumber % counter

          message = message + userNumber + " % " + counter + " = " + remainder + "<br>"


}
}
}

  // Display Results back to User
  document.getElementById("result").innerHTML = message
}