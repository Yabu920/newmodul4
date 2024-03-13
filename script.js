var names = ["Yaakov", "John", "Jen", "Jason" , "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

names.forEach(names => {
  if(names.charAt(0) === 'j'){
    console.log("GoodBye " + names);
  }
  else{
    console.log("Hi " + names);
  }
})