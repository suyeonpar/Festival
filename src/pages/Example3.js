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
    display: block;
    width: 1000px;
    text-align: center;
    margin: 0 auto;
`
const FilterItem = styled.div`
    padding: 50px;
    border: 1px solid #000;
    width: 60px;
    align-items: center;
    margin-top: 10px;
    background-color: #000;
    text-align: center;
    color: #fff;
`


function Example3() {

    let [data, setData] = useState(Example3_);
    //console.log(Example3_)
    
    let [animal, setAnimal] = useState("모두");

    // 추가
    const [gender, setGender] = useState("모두");
    // 추가
    //const FilterAnimal = data.filter(e =>{
        //let isAnimal = animal === "모두" \\ e.animal === animal;
        //let is Gender = gender === "모두" \\ e.gender === gender;
        //return isAnimal && isGender

        //return (animal === "모두" ? e.animal === animal) **주석
        //밑에 const Filter랑 같음
    const Filter = data.filter(e => {
        if(animal === "모두"){
            return e.animal
        }else{
            return e.animal === animal
        }
    })
    // const filterCate = [...new Set(data.map(e => e.animal))]; 밑과 동일
    const Animal = [...new Set(data.map(e => e.animal))];
    console.log(Animal)
    // const filterGender = [...new Set(data.map(e => e.gender))]; 
    //gender도 출력

  return (
    <>
    {/* <div>
    <ul>
    <li>모두</li>
    {
        filterCate.map((e,i)=>{
            return (
                <li key={i} onClick={()=>{setAnimal(e)}}>{e}</li>
            )
        })
    }
    </ul>
    <ul>
        <li>모두</li>
            {
        filterGender.map((e,i)=>{
            return (
                <li key={i} onClick={()=>{setGender(e)}}>{e}</li>
            )
        })
    }
    </ul>
    </div>
    <div>
        <ul>
            {
                FilterAnimal.map((e,i)=>{
                    return{
                        <li key={i}>{e.animal} - {e.gender} - {e.height}</li>
                    }
                })
            }
        </ul>
    </div> */}
    <Item>
        <ListItem onClick={()=>{setAnimal("모두")}}>모두</ListItem>
        {
        Animal.map((e,i)=>{
            return(
                <ListItem key={i} onClick={()=>setAnimal(e)}>{e}</ListItem>
        )
    })
    }
    {
        Filter.map((el, i)=>{
            return(
                <FilterItem key={i}>{el.animal}</FilterItem>
            )
        })
    }
    </Item>
    </>
  )
}

export default Example3