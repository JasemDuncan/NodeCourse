//TYPESCRIPT genera su tipado automatica despues de declarar la variable

let username = "crios";
let age: number;
let isStudent: boolean;
let hobbies: string[];
let hobbies2: Array<string>;

let listNames: string[] = ["Jaem", "Jaem2", "Jaem3"];
listNames.push("Jaem4");

let listStudents: Array<{name: string, age: number, adresses: Array<string>}>=[];
listStudents.push({name: "Carlos", age: 20, adresses:["ave el sol","ave la cultura"]});

let dataUserToExport: Array<Array<{name: string, age: number}>> = [
    [
        {name:"Jasem", age:20},
        {name:"Jasem", age:20},
        {name:"Jasem", age:20}
    ],
    [
        {name:"Jasem", age:20},
        {name:"Jasem", age:20},
        {name:"Jasem", age:20}
    ]
]