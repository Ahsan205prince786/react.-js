// import './App.css';

// function App() {
//   const text = 'Welcome to HTML'
//   const meme = 'Moye Moye'
//   const num = 5
//   const isExist = true //render nahi hosakta
//   const car = {
//     name: 'Civic',
//     model: 1986,
//     color: 'Gray'
//   }
//   const memes = ['Moye Moye', 'Aayeen',
//     'Program War Gya', 'Kehna kia chahtay ho?',
//     'Jaldi bol! Subha kahi jana hai!', 'Kesa diya?']

//   const cars = ['Audi', 'Mehran', 'Civic', 'Corolla']


//   let carArray = [
//     {
//       name: 'Civic',
//       model: 1986,
//       color: 'Gray',
//       featured: ['1 liter 25km/h','good pickup']
//     },
//     {
//       name: 'Corolla',
//       model: 2000,
//       color: 'black',
//       featured: ['1 liter 30km/h', 'power steering']
//     },
//     {
//       name: 'Civic',
//       model: 2012,
//       color: 'red',
//       featured: ['1 liter 30km/h', 'power steering']
//     }
//   ]
//    const name = "Hello World";
//     const obj = { name: "Hello World Object" };
//     const data = ['We', 'are', 'United'];
//     const list = [{ name: "Hello World 1" }, { name: "Hello World 2" }, { name: "Hello World 3" }];
//     const complex = [
//       { company:  'XYZ', jobs: ['Javascript', 'React'] },
//       { company: 'ABC', jobs: ['AngularJs', 'Ionic'] }
//   ]

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src='https://img1.picmix.com/output/pic/normal/3/0/4/2/4212403_d01c0.gif' className="App-logo" alt="logo" />
//         <p>
//           {text}
//           {num}
//           {isExist}
//           <br />
//           {car.name}
//           {car.model}
//           {car.color}
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           {meme}
//         </a>

//         <div>
//           <h3>Memes</h3>

//           <ol>
//             {memes.map(function (item) {
//               return <li>{item}</li>
//             })}
//           </ol>

//           <ul>
//             {cars.map(function (item) {
//               return <li>{item}</li>
//             })}
//           </ul>

//         </div>
//       <table border={'1px'}>
//         <tr>
//           <th>Name</th>
//           <th>Model</th>
//           <th>Color</th>
//           <th>featured</th>

//         </tr>
//         {carArray.map(function(item) {
//   return (
//     <tr key={item.name}>
//       <th>{item.name}</th>
//       <th>{item.model}</th>
//       <th>{item.color}</th>
//       <th>
//         <ul>
//           {item.featured.map(function(feature, index) {
//             return <li>{feature}</li>;
//           })}
//         </ul>
//       </th>
//     </tr>
//   );
// })}



//       </table>  

//         <br /><br /><br /><br /><br /><br />
//         <div>
//       <h2>{name}</h2>
//       <p>{obj.name}</p>

//       <ul>
//         {data.map((item) => (
//           <li >{item}</li>
//         ))}
//       </ul>

//       <ul>
//         {list.map((item) => (
//           <li>{item.name}</li>
//         ))}
//       </ul>

//       <table border={'1px'}>
//           <tr>
//             <th>Company</th>
//             <th>Jobs</th>
//           </tr>
//           {complex.map((item) => (
//             <tr>
//               <td>{item.company}</td>
//               <td>{item.jobs.map(function(job){
//                return <li>{job}</li>
//               })}</td>
//             </tr>
//           ))}
//       </table>
//     </div>
//       </header>

        
      
//     </div>
    
    
//   );
// }

// export default App


// import { useState } from 'react'
// import './App.css';
// //State:
// //1. Jab bhi update ho to, react ko bhi update karta hai.
// //Variable esa nai karta

// //2. State are directly immutable. Matlab states ko directly
// //change nai karenge, balkay un ke methods ke zarye karenge. 

// function App() {
//   const [text, setText] = useState('Something')

//   function App() {
//     const {show, sethide} = useState(true)
//   }

//   return (
//     <div className="App">
//       <header className="App-header">

//         <h3>{text}</h3>

//         {show && <img width='200'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRh9wTHhgalV1v2rZZwXK2euJVha-4vorEPTpwXNPZmA&s'></img>}

//         <button onClick ={()=>setShow (!show)}>Hide/Show</button>

//         <br /><br /><br /><br /><br /><br />
//       </header>
//     </div>
//   );
// }

// export default App;


// import { useState } from "react";
// import './App.css';

// function App(){
// const [list, setList] = useState([])
// const [text, setText] = useState
// }

// function addItem(){
//   // purpose:List ma input ki value ko push kar wana ha 
//   // mojod: list (mojood) :text (la mojood)
  
//   const copyList =[...list]
//   copyList .push (text)
//   setList(copyList)
// }

// function deleteItem (index){
//   // purpose; jis index per click ho wo delete ho jai
//   // mojode; list (mojood) index (la mojood)
//   const copyList = [...list]
//   copyList.splise (index,1)
//   setList(copyList)
// }

// function editItem(index){
//   // flow 
//   // 1. jis item pe click hua,uski value input pa lani ha 
//   // 2.Add button ki jaga update button a jae


// }
// function updateItem(){

// }

// function updateText(e){
//   const value = e.target .value
//   setText(value) 
// }

// return(
//   <div className="App">
//     <header className="App-header">
//       <input onClick={addItem} placeholder="entr any item "/>
//       <button onClick={addItem}>ADD</button>
//       <ul>
//         {list.map(function (item, index) {return<li>
//           {item}
//           <button onClick={()=>deleteItem (index)}>delete</button>
//           <button onClick={()=>editItem (index)}>update</button>
//           </li>})}
//         </ul>

//         <br /><br /><br /><br /><br /><br />
//     </header>
//   </div>
// )
//  export default App;