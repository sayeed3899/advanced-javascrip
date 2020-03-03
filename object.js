const students = [
    {id :21, name: "omar sany"},
    {id :31, name: "manaa"},
    {id :41, name: "mayouri"},
    {id :71, name: "deepjol"},
    {id :61, name: "mayouri"},
    
];

const names = students.map( s=> s.name);
const ids = students.map (s => s.id);
const bigger =students.find( s=> s.id>50);
console.log(bigger);
