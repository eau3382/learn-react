import React from 'react';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;




// 9월 9일 //

// 3. default parmeter

// const greeting = (input = '고객') => {
//   return `${input}님, 반갑습니다!`;
// };

// greeting();

// // 배열 구조분해 할당 4. obdent destructuring

// const colorList = ['red', 'blue'];
// const [firstcolor, secondcolor] = colorList;
// console.log("🚀 ~ secondcolor:", secondcolor)
// console.log("🚀 ~ firstcolor:", firstcolor)


// const studentList = ['김태욱', '정세헌'];
// const [firstStudent, secondStudent] = studentList;
// console.log("🚀 ~ secondStudent:", secondStudent)
// console.log("🚀 ~ firstStudent:", firstStudent)

// const addStudent = () => {
//   const addStudentList = [...studentList, '강지영'];
//   console.log("🚀 ~ addStudent ~ studentList:", studentList)
//   console.log("🚀 ~ addStudent ~ addStudentList:", addStudentList)

// };

// addStudent();

// // 객체 구조분해 할당  4. obdent destructuring

// const person = {
//   name: "elle",
//   age: 25,
//   email: "elle@example.com",
// };

// const messageItem = {
//   message: 1, 
//   message:'안녕하세요', 
// };
// const { name: personName, age, email} = person;

// const copyPerson = {
//   ...person,
//   ...messageItem,
//   name: '김다솜',
//   nickname: '후츠릿',

//   };
  
//   console.log(copyPerson);


// // 구조 분해 할당
// const { name, age, email } = person;
// console.log("🚀 ~ email:", email)
// console.log("🚀 ~ age:", age)
// console.log("🚀 ~ name:", name)


// // spread syntax

// const person2 = {
//   name: 'johe',
//   age: 25
// };

// const newPerson = {
//   ...person2, 
//   email: 'ddd@daum.net'
// };

// console.log(newPerson);


// // 