import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { NavLink } from 'react-router-dom';

const Content = styled.div`
  background-color:  ${(props) => props.theme.colors.BgColor};
  width: 100%;
  padding: 12px 2% 50px 2%;
  overflow: hidden;
`
const ContentWrap = styled.div`
max-width: 1200px;
margin: 0 auto;
padding: 0 2%;
display: flex;
flex-wrap: wrap;
gap: 20px 1.2%;
`
const ContentItem = styled.div`
  background-color: ${(props) => props.theme.colors.ContentBg};
  flex-basis: 32.5%;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  white-space: break-spaces; //줄이 길어지면 자동으로 줄바꿈
  img{width: 100%; display: block; margin-bottom: 24px;}
  h3{margin-bottom: 24px; text-align: center; padding-top: 24px; color: ${(props) => props.theme.colors.Color};}
  li{line-height: 1.5; margin-bottom: 7px; color: ${(props) => props.theme.colors.Color};}
  @media screen and (max-width: 1200px){
    flex-basis: 49%;
  }
  @media screen and (max-width: 640px){
    flex-basis: 100%;
  }
`
const Category = styled.div`
  margin-top: 50px;
  margin-bottom: 1.2%;
  width: 100%;
  ul{
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li{
    border: 1px solid #ddd;
    padding: 5px 20px;
    border-radius: 5px;
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.ContentBg};
    color: ${(props) => props.theme.colors.Color};
    &.on{
      background-color: violet;
      font-weight: bold;
      color: #fff;
    }
  }
}
`
const Item = styled.div`
  width: 120px;
  height: 20px;
  text-align: center;
  border-radius: 20px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  &.on{
    background-color: #fff;
    }
`
const Pagination = styled.div`
  background-color: #fff;
  padding: 20px;
  border: 5px;
  border: 1px solid #ddd;
  ul{
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    column-gap: 20px;
    justify-content: center;
    align-items: center;
    li{
    border: 1px solid #ddd;
    border-radius: 5px;
    cursor: pointer;
    padding: 5px 20px;
    background-color: #fff;
    &.on{
      background-color: violet;
      font-weight: bold;
      color: #fff;
    }
  }
}
`

function Main() {

  const [data, setData] = useState();
  const [allDate, setAllData] = useState();
  const list = 10;
  const [page, setPage] = useState(1);
  const [totalCnt, setTotalCnt] = useState(0);
  const [gugun, setGugun] = useState("전체");
  const pagination = 5;
  const totalPage = Math.floor(totalCnt / list);

  let startPage, endPage; //변수는 지정해주지만 값은 주지 않겠다

  const currentBlock = Math.ceil(page / pagination); //ceil 소수점 올려준다
  // 현재 페이지가 1 / 5 > 0.2 1 2 3 4 5
  startPage = (currentBlock - 1) * pagination + 1;
  endPage = startPage + pagination - 1;

  if(endPage > totalPage){
    endPage = totalPage;
  }

  const PrevBlock = () =>{
    if(startPage > 1){
      setPage(startPage - pagination);
    }
  }
  const NextBlock = () =>{
    if(endPage < totalPage){
      setPage(startPage + pagination);
    }
  }

  const PageList = [];
  for(let i = startPage; i <= endPage; i++){
    PageList.push(
      <li className={page === i ? 'on' : ''} key={i} onClick={()=>{setPage(i)}}>
        {i}
      </li>
    )
  }

  useEffect(()=>{
     axios.get(`https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=${process.env.REACT_APP_APIKEY}&pageNo=1&numOfRows=100&resultType=json`).then(function(res){
      setAllData(res.data.getFestivalKr.item);
    })
    //console.log(data)
  },[])

  useEffect(()=>{
     axios.get(`https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=${process.env.REACT_APP_APIKEY}&pageNo=${page}&numOfRows=10&resultType=json`).then(function(res){
      setData(res.data.getFestivalKr.item)
      setTotalCnt(res.data.getFestivalKr.totalCount);
      //setTotalCnt(500); //테스트용으로 만든거
    })
    //console.log(data)
  },[page])

  //중복을 걸러내주는 함수
  const FilterData = data && data.filter(e =>{
    return gugun === "전체" || gugun === e.GUGUN_NM
  }) //gugun이 전체와 같다면 

  //걸러준걸 보여주는 함수
  const FilterGugun = [...new Set(allDate && allDate.map(e => e.GUGUN_NM))];
  //console.log(FilterGugun)
  const [isActive, setIsActive] = useState(-1);
  //const [index, setIndex] = useState(-1);

  return (
   <>
    <Content>
      <Category>
      {/* <Item className={index === -1 ? 'on' : ''}>{`인덱스 번호 : -1`}</Item>
      { 
      Array(5).fill().map((e,i)=>{
          return(
            <Item className={index === i ? 'on' : ''} >{`인덱스 번호 : ${i}`}</Item>
          )
        })} */}
        <ul>
          <li className={isActive === -1 ? 'on' : ''} onClick={()=>{
            setIsActive(-1);
            setGugun("전체");
            }
          }>전체</li>
          {
            data && FilterGugun.map((e,i)=>{
              return(
                <li className={isActive === i ? 'on' : ''} onClick={()=>{
                  setIsActive(i);
                  setGugun(e);
                }} key={i}>{e}</li>
              )
            })
          }
        </ul>
      </Category>
        <ContentWrap>
            {
              data && FilterData.map((e,i)=>{
                return(
                  <ContentItem key={i}>
                    <NavLink to={`detail/${e.UC_SEQ}`} 
                    state={
                      e //클릭해야 정보가 뜬다
                    } // > 정보 가져가는 함수 
                    >
                        <h3>{e.PLACE}</h3>
                        <img src={e.MAIN_IMG_THUMB} alt={e.MAIN_TITLE} />
                        <ul>
                          <li>구군 : {e.GUGUN_NM}</li>
                          <li>운영 및 시간 : {e.USAGE_DAY_WEEK_AND_TIME}</li>
                          {
                            e.MIDDLE_SIZE_RM1 !== "" && //참일경우 밑에가 기능
                          <li>편의 시설 : {e.MIDDLE_SIZE_RM1}</li>
                          }
                          {
                            e.USAGE_AMOUNT !== "무료" &&
                          <li>이용요금 : {e.USAGE_AMOUNT}</li>
                          }
                          <li>교통편 : {e.TRFC_INFO}</li>
                          <li>주요장소 : {e.MAIN_PLACE}</li>
                        </ul>
                      </NavLink>
                  </ContentItem>
                )
              })
            }
        </ContentWrap>
    </Content>
    <Pagination>
      <ul>
        <li onClick={PrevBlock}>이전</li>
        {PageList}
        <li onClick={NextBlock}>다음</li>
      </ul>
    </Pagination>
   </>
  )
}

export default Main