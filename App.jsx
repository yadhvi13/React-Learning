// function App(){

//   return 
  
// }

// export default App


//   const a = 10

//   return (
//     <div>
//       {/* to print the value of a uses curly braces */}
//       <h1>hello {a} </h1>
//       <h1>Hello2</h1>
//     </div>
//   )
// }

// import React from 'react'

// const App = () => {
// const user = "yogeeta"

// const abc=() =>{
//   console.log("hello")
// }
// abc();

// return (
// <div>
//   <h1>Username is {user}</h1>
//   <button onClick={abc}> Change user </button>
// </div>
// )
// }
// export default App



// WRONG Method

// import React from 'react'

// const App = () => {
//   let user = "yogeeta"

//   const changeUser = ()=>{
//     user = "Ansh"
//   }

//   return (
//     <div>
//       <h1>username is {user}</h1>
//       <button onClick={changeUser}>Change userName</button>
//     </div>
//   )
// }

// export default App

//USING HOOKS - special type of functions

// import React, { useState } from 'react'
// const App = () => {
//   // const a = 10 aise variable nhi bnane hai react me

//   //import ho jayega useState
// const [a,setA] = useState(10)
// const changeA =()=>{
//      setA(20)
//     //  to change the state of the A
// }

// const [num,setNum]= useState(0)

//  return (
//     <div>
//       <h1>Value of A is {a} </h1>
//       <button onClick={changeA}>Change A</button>

//       <h3>Number is {num}</h3>
//       <button onClick={function(){
//         setNum(num+10)
//       }}>Increment</button>
//       <button onClick={()=>setNum(num-10)}> Decrement</button>
//     </div>
//   )
// }

// export default App



// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <h2 className='text-5xl bg-pink-700 text-white'>
//         Hello beitttaaa
//       </h2>
//       <h2>heyyyy</h2>
//     </div>
//   )
// }

// export default App


//form handling 
// import React from 'react'

// const App = () => {
// const submitHandler = (e)=>{
//     // console.log("helo",e);
//     e.preventDefault()  
// }
//   return (
//     <div>
//      <form onSubmit={(e)=>{
//       submitHandler(e)
//       // event perform
//      }}>
//       <input className="px-4 py-3 text-xl m-5 rounded" type="text"  placeholder="enter your name"/>
//       <button className='px-4 py-3 ml-5 text-xl text-white font-semibold bg-emerald-600 rounded'>Submit</button>
//       </form> 
//     </div>
//   )
// }
// export default App


//Two Way Binding
import React, { useState } from 'react'

const App = () => {
const [username, setUsername] = useState("")

const submitHandler = (event)=>{
  // console.log("submitted");
  event.preventDefault()
  console.log("submitted");
  console.log(username);
  
  setUsername("")
  //iske baad input value khali ho jayegi
  //page reloading bhi nhi hori
}
  return (
    <div>
      <form onSubmit = {(event)=>{
          submitHandler(event)
      }}>
        <input 
        value={username}
        onChange={(event)=>{
         setUsername(event.target.value)
        //  console.log(event.target.value);
        //jo value likh rha hu wo ,il rha hai console pe
          
        }}
        className="px-4 py-3 text-xl m-5 rounded"
        type="text" 
        placeholder="enter your name"/>

        <button className='px-4 py-3 ml-5 text-xl text-white font-semibold bg-emerald-600 rounded'>Submit</button>
      </form> 
    </div>
  )
}

export default App

