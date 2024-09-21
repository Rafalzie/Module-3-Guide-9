
const people = [ //This defines a constant variable people that holds an array of objects
    { name: "Jordan Tatershall", dob: "8/3/1989", kids: 3, country: "United States", knowsHowToProgram: true },
    { name: "Morse Comberbach", dob: "2/2/1971", kids: 4, country: "Russia", knowsHowToProgram: true },
    { name: "Janette Scafe", dob: "9/11/1980", kids: 5, country: "Nigeria", knowsHowToProgram: true },
    { name: "Nertie Miquelet", dob: "12/22/1994", kids: 5, country: "Greece", knowsHowToProgram: true },
    { name: "Urban Whitecross", dob: "5/1/1987", kids: 3, country: "Hungary", knowsHowToProgram: false }
  ];
  
 
  const firstPersonDob = new Date(people[0].dob); // Jordan Tatershall's DOB, creates a Date object for the first person's date of birth.
  const lastPersonDob = new Date(people[4].dob);  // Urban Whitecross's DOB, his creates a Date object for the last person's date of birth.
  
  // Check if the first person is older than the last person
  if (firstPersonDob < lastPersonDob) { //This checks if the first person's DOB is earlier than the last person's DOB,
    console.log("Jordan Tatershall is older than Urban Whitecross."); //if "true this pops out"
  } else {
    console.log("Jordan Tatershall is not older than Urban Whitecross."); //if false this pops out
  }
  
  
  // Check if the 2nd person and the 3rd person have the same number of kids
  if (people[1].kids === people[2].kids) {  //checks if the number of kids
    console.log("The 2nd person has the same number of kids as the 3rd."); //if "true this pops out"
  } else {
    console.log("The 2nd person does not have the same number of kids as the 3rd."); //if false this pops out
  }

  
  // Check if both the 1st and 4th person know how to program
  if (people[0].knowsHowToProgram && people[3].knowsHowToProgram) {  //checks if both the 1st and 4th persons know how to program
    console.log("Yay!"); //if true this comes out
  } else {
    console.log("LMGTFY"); //if false, this comes out
    


  }
  


const individuals = [  // This creates a new constant variable individuals
    { name: "Jordan Tatershall", dob: "8/3/1989", kids: 3, country: "Iceland", knowsHowToProgram: true },
    { name: "Morse Comberbach", dob: "2/2/1971", kids: 4, country: "Korea", knowsHowToProgram: true },
    { name: "Janette Scafe", dob: "9/11/1980", kids: 5, country: "Spain", knowsHowToProgram: true },
    { name: "Nertie Miquelet", dob: "12/22/1994", kids: 5, country: "Greece", knowsHowToProgram: true },
    { name: "Urban Whitecross", dob: "5/1/1987", kids: 3, country: "Hungary", knowsHowToProgram: false }
  ];
  
 // Create a statement that checks the 2nd person in the array for their nationality. If the person’s country is Iceland, output “Hæ”, if he/she is from Spain output “Hola”, if he/she is from Korea output “여보세요”). If the country is none of the above, output “Hello”.
  const secondPersonCountry = individuals[1].country;  //This retrieves the country of the 2nd person from the individuals array.
  
  // Checks the country and output 
  if (secondPersonCountry === "Iceland") {  //If it is Iceland, it logs "Hæ".
    console.log("Hæ");
  } else if (secondPersonCountry === "Spain") {  //If it is Spain, it logs "Hola".
    console.log("Hola");
  } else if (secondPersonCountry === "Korea") {  //If it is Korea, it logs "여보세요"
    console.log("여보세요");
  } else {
    console.log("Hello");  //If none of those match, it logs "Hello".
  }
  

  
  
  // Check if the 2nd person's name is longer than 5 characters
  const result = individuals[1].name.length > 5 ? "The name is longer than 5 characters." : "The name is not longer than 5 characters.";
// person's name is greater than 5 characters.
  
  //  result
  console.log(result);
  