import React, { useState } from 'react'
import Product from './Product'


function App() {
    const[Search,setSearch]=useState("")
    const [data,setData]=useState([])
    const Handler=e=>{
         setSearch(e.target.value)
        
    }
    const YOUR_APP_ID = "c8acab59";
    const YOUR_APP_KEY  = " 053b6d6d874f69b2579fa419f50dd8ec"
    const OnclickHandler=e=>{
        e.preventDefault()

        fetch(`https://api.edamam.com/search?q=${Search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=25&calories=591-722&health=alcohol-free`).then(res=>res.json())
        .then(data=>setData(data.hits))
    }
  return (
    <div>
     <center>
        <h1 style={{backgroundColor:"skyblue"}}>Welcome To Rathod Restarent</h1>
        <form onSubmit={OnclickHandler}>
            <input type='text' placeholder='Search recipy' name='Search' value={Search} onChange={Handler}/><br/><br/>
            <button className='btn btn-primary'>Search</button>
        </form>
    {data.length>=1?<Product data={data}/>:null}
     </center>
    </div>
  )
}

export default App
