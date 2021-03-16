import React from 'react'
import styled from 'styled-components'


const Bar = styled.nav`
font-size: 1.5em; 
background: palevioletred;
padding: 1rem;
 ul{
     background:red;
 }
`;

const Icon = styled.div`
  width:200px;
`


// function Control(props){
//     return <div className="control">{props.title}</div>

// }

const AppBar =  (props)=>{
     return(
         <Bar>
         <ul>
             <li>a</li>
             <li>b</li>
             <li>c</li>
             <li>d</li>
         </ul>
         </Bar>
         
         
     )

}

export default AppBar