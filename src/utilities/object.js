const student = {
    name: 'Shakib',
    roll: 75,
    fav: [1, 2, 3, 4, 5],
    color: 'Black'
};

for (const id in student) {
    console.log(student[id]);
}