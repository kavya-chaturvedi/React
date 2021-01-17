import React from "react";

var date = new Date();
var currentDate = Date();
var currentHour = date.getHours();

console.log(currentHour);

var greetings;
if (currentHour > 0 && currentHour < 12) {
  greetings = "Good Morning !";
} else if (currentHour >= 12 && currentHour < 16) {
  greetings = "Good Afternoon !";
} else {
  greetings = "Good Night !";
}

var styling;
if (currentHour > 0 && currentHour < 12) {
  styling = {
    color: "yellowgreen",
    borderColor: "yellowgreen"
  };
} else if (currentHour >= 12 && currentHour < 16) {
  styling = {
    color: "goldenrod",
    borderColor: "goldenrod"
  };
} else {
  styling = {
    color: "darkblue",
    borderColor: "darkblue"
  };
}
function Heading() {
  return (
    <div>
      <h1 className="heading" style={styling}>
        {greetings}
      </h1>
      <h2 style={styling}>{currentDate}</h2>
    </div>
  );
}

export default Heading;
