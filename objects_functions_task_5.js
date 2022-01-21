// Your name is saved in the payment terminal, write a function to define the name in the terminal 
// (if you entered your name, then hello + name, if not, then there is no such name)
function checkName(name) {
  if (name === "Sherzod") {
    return "Hello " + name
  } else {
    return "There is no such name"
  }
}

checkName("Sherzod")