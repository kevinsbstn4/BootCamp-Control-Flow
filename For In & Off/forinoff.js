// for-in
const person = {
    name: 'Kevin',
    umur:15
};

for (let key in person)
    console.log(key, person[key]);

//for-off
const colors = ['red', 'green', 'blue'];

for (let color of colors)
    console.log(color);