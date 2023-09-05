import React, { useState } from 'react'
import Example3_ from './../component/Example3'
import { styled } from 'styled-components'

const Item = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 100px auto;
    max-width: 1200px;
    padding: 10px;
    list-style: none;
    column-gap: 10px;
    row-gap: 20px;
`

const ListItem = styled.div`
    border: 1px solid #ddd;
    padding: 15px;
    border-radius: 10px;
`


function Example3() {

    let [data, setData] = useState(Example3_)
    console.log(Example3_)
    
    let [animal, setAnimal] = useState("전체");

    const Filter = data.filter(e =>{
        if(animal === "전체"){
            return e.animal
        }else{
            return e.animal === animal
        }
    })

    const Animal = [...new Set(data.map(e => e.animal))];
    console.log(Animal)



  return (
    <>
    <Item>
        <ListItem onClick={()=>{setAnimal("전체")}}>전체</ListItem>
        {
        Animal.map((e,i)=>{
            return(
                <ListItem key={i} onClick={()=>setData(e)}>{e}</ListItem>
        )
    })
    }
    {/* {
        Filter.map((el, i)=>{
            return(
                <p key={i}>{el.animal}</p>
            )
        })
    } */}
    </Item>
    </>
  )
}

export default Example3