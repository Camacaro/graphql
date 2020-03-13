'use strict'


const connectdb = require('./db');
const { ObjectID } = require('mongodb');
const errorHandler = require('./errorHandler');


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
    
    getCourses: async () => {
        // return courses;
        let db; 
        let courses = [];

        try {
            db = await connectdb();
            courses = await db.collection('courses').find().toArray();
        } catch (error) {
            errorHandler(error);
        }

        return courses;
    },

    getCourse: async (root, args) => {
        let db; 
        let course;

        try {
            db = await connectdb();
            course = await db.collection('courses').findOne({ _id: ObjectID( args.id ) });
        } catch (error) {
            errorHandler(error);
        }

        return course;


        // const course = courses.filter( course => courses._id === args.id );
        // return course.pop();
    },

    // getStudents
    getPeople: async () => {
        // return courses;
        let db; 
        let students = [];

        try {
            db = await connectdb();
            students = await db.collection('students').find().toArray();
        } catch (error) {
            errorHandler(error);
        }

        return students;
    },

    // getStudent
    getPerson: async (root, args) => {
        let db; 
        let student;

        try {
            db = await connectdb();
            student = await db.collection('students').findOne({ _id: ObjectID( args.id ) });
        } catch (error) {
            errorHandler(error);
        }

        return student;
    }
}