import React from 'react'
var data = require("./Api.json")

const App4 = () => {
  return (
    <div>


    {data.map((item)=>{
        return(

            <div class="card" key={item.title} >

            
            <div class="card-body">
             {item.title}
            </div>
        </div>

        )
    })}

    
    </div>
  )
}

export default App4