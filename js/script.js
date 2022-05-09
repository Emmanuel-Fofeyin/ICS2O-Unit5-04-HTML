// Copyright (c) 2022 Brayden Blank All rights reserved
//
// Created by: Brayden Blank
// Created on: Apr 2022
// This file contains the JS functions for index.html

"use strict";

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-5-04-HTML/sw.js", {
    scope: "/ICS2O-Unit-5-04-HTML/",
  });
}

/**
 * This function compares slider with random number.
 */
function guessClicked() {
  var date = document.getElementById("date").value;
  var userAge = parseInt(document.getElementById("user-age").value);

  if ((date == "tuesday" || date == "thursday") || (userAge > 12 && userAge < 21)) {
    document.getElementById("guess-result").innerHTML = 
      "You are eligible for a discount!";
  }
  else {
    document.getElementById("guess-result").innerHTML = 
      "You are not eligible for a discount.";
  }
}
