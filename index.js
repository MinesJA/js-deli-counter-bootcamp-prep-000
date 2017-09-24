var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var placeLine = katzDeliLine.indexOf(name)+1;
  return `Welcome, ${name}. You are number ${placeLine} in line.`
}



function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }

  else {
    return `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift();
    return katzDeliLine;
  }
}

function currentLine(katzDeliLine){
  var line = {};

  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  }
  else {

  for (let i = 0; i <= katzDeliLine.length; ++i){

    var placeLine = i + 1;

    // line.push(" " + i+1 + ". "+ katzDeliLine[i]);
    line["placeLine"] = "katzDeliLine[i]";
  }
}
    return "The line is currently: " + line;

  }
