import React, { useState } from 'react'
import Example_ from './../component/Example'
import { styled } from 'styled-components'

const Content = styled.div`
display: flex; justify-content: space-between;`

function Example() {
    //console.log(Example_)
  let [data, setData] = useState(Example_);
  let [job, setJob] = useState("전체");

  const dataFilter =  data.filter(e =>{
    if(job === "전체"){
        return e.job
    }else{
        return e.job === job
    }
  })
  
  const FilterJob = [...new Set(data.map(e => e.job))];
  console.log(FilterJob)

  return (
    <Content>
        <ul>
            <li onClick={()=>{setJob("전체")}}>전체</li>
            {
            FilterJob.map((e,i)=>{
                return(
                    <li key={i} onClick={()=>setJob(e)}>{e}</li>
                )
            })
            }
        </ul>
        {/* {data.map((e,i,a)=>{
        return (
        <>
            <div key={i}>
                <p>{e.name}</p>
                <p>{i}</p>
                <p>{a[i].name}</p>
            </div>
        </> 
        )
    })
} */}
{
    dataFilter.map((el,i)=>{
        return(
            <p key={i}>{el.name}</p>
        )
    })
}
</Content>
)
}

export default Example