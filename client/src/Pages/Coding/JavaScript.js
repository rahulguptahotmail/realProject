import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const JavaScript = () => {

  const navigate = useNavigate()
  const authentication = ()=>{
    const token = localStorage.getItem('token');
    if(!token)
    {
      navigate('/login')
    }
  }
  useEffect(()=>{
        authentication();
  },[])
  return (
    <div className="container bg-body-secondary p-5 rounded">
      <div>
     <h1> JavaScript Can Change HTML Content</h1><p>
One of many JavaScript HTML methods is getElementById().</p><p>

The example below "finds" an HTML element (with id="demo"), and changes the element content (innerHTML) to "Hello JavaScript":</p>
      </div>
      <div  className=" bg-body-tertiary px-5 py-3 rounded my-5">
      <h1>Example</h1>
      <p>
      document.getElementById("demo").innerHTML = "Hello JavaScript";</p>
      </div>

      <div className=" bg-body-tertiary px-5 py-3 rounded my-5">
      <h4>JavaScript syntax is the set of rules, how JavaScript programs are constructed:</h4>

<p> How to create variables:</p><p>
var x;</p><p>
let y;</p><p>

 How to use variables:</p><p>
x = 5;</p><p>
y = 6;</p><p>
let z = x + y;</p>
      </div>
      <h1 className=' bg-info rounded py-3 px-3'>Coming Soon...</h1>

    </div>
  )
}

export default JavaScript