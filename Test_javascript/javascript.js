const characters = [
    {name: ”ironman, age: 30},
    {name: ”spiderman, age: 20},
    {name: ”Thor”, age: 1000},
  ];
  
  for (let i=0; i<characters.length; i++) {
    console.log("--------------------");
    
    const character = characters[i];
    
    console.log(`The name is ${character.name}.`);
    
    console.log(`The age is ${character.age}.`);
    
  }
  