import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'

const Content = styled.div`
  background-color:  ${(props) => props.theme.colors};
  width: 100%;
  padding: 12px 2% 50px 2%;
`
const ContentWrap = styled.div`
max-width: 1200px;
margin: 0 auto;
display: flex;
flex-wrap: wrap;
gap: 20px 1.2%;
`


function Main() {

  const [data, setData] = useState();
  const list = 12;
  const [page, setPage] = useState(1);
  const [totalCnt, setTotalCnt] = useState(0);
  const pagenation = 5;
  const totalPage = Math.floor(totalCnt / list);
  useEffect(()=>{
    // axios.get(`https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=7OtTSen4FO9USsWqYk9OrzuyLiGrx2cbjQd7zTXa0p6gnK10ExkzRTxQMHIBnAcHq6cLNzXS5VtDsvNW81qMPQ%3D%3D&pageNo=1&numOfRows=10&resultType=json`).then(function(res){
    //   console.log(res)
    // })
  },[])

  return (
   <>
    <Content>
        <ContentWrap>

        </ContentWrap>
    </Content>
   </>
  )
}

export default Main