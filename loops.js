var students = [ 'Justin', 'Matt', 'Dave', 'Sarah' ];

for (let i = 0; i < students.length; i++) {
	greetStudent( students[i] );
}

for (let student of students) {
	greetStudent( student );
}

while (students.length > 0) {
	let student = students.pop();
	greetStudent(student);
}

function greetStudent(student) {
	console.log(`Hello, ${student}`)
}