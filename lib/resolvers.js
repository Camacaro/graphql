'use strict'

const connectdb = require('./db');

// const courses = [
// 	{
// 		_id: '1',
// 		title: 'M titulo',
// 		teacher: 'Mi profesor',
// 		description: 'una descripcion',
// 		topic: 'programacion'
// 	},
// 	{
// 		_id: '2',
// 		title: 'M titulo 2',
// 		teacher: 'Mi profesor',
// 		description: 'una descripcion',
// 		topic: 'programacion'
// 	},
// 	{
// 		_id: '3',
// 		title: 'M titulo 3',
// 		teacher: 'Mi profesor',
// 		description: 'una descripcion',
// 		topic: 'programacion'
// 	},
// ]

// module.exports = {
    
//     getCourses: () => {
// 		return courses;
// 	}
// }

module.exports = {
	Query: {
		getCourses: async () => {
			// return courses;
			let db; 
			let courses = [];

			try {
				db = await connectdb();
				courses = await db.collection('courses').find().toArray();
			} catch (error) {
				console.erroe(error);
			}

			return courses;
		},
		getCourse: (root, args) => {
			const course = courses.filter( course => courses._id === args.id );
			return course.pop();
		}
	}
}