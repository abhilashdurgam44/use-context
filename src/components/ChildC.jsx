import React from 'react'
import { Context } from '../App'

const ChildC = () => {

    
  return (

       <Context.Consumer>
          { (name)=>{

            return (
                
                <h1>name is:{name}</h1>

            )
           }
        }
       </Context.Consumer>

  )
}

export default ChildC