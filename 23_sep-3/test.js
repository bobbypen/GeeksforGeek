                // Defining object
                
let faculty = {
    first_name: 'Gaurav',
    last_name: 'Raj',
 
   
     abc: function () {
        return (`Faculty's name is ${faculty.first_name} ${this.last_name}`)
    },

contact_number: {
personal_no: '12345',
office_no: '98765'
}
}

console.log(faculty.abc());
console.log(faculty.contact_number.office_no);

