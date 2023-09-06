import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import { styled } from 'styled-components'
import 'react-datepicker/dist/react-datepicker.css'
import {ko} from 'date-fns/esm/locale'
import {addDays, subDays} from 'date-fns'

const StyleDate = styled(DatePicker)`
    margin: 100px auto;
    width: 300px;
    border: 1px solid #ddd;
    border-radius: 20px;
    padding: 20px;
    text-align: center;
`
const {kakao} = window;

function Datepicker() {
    useEffect(()=>{
        var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        var options = { //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
        level: 3 //지도의 레벨(확대, 축소 정도)
    };
    var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    },[])

    const [dateRange, setDateRange] = useState([null,null]);

    const [startDate, endDate] = dateRange;
    //console.log(startDate)

  return (
    <>
    <StyleDate locale={ko} //한글버전 import {ko} from 'date-fns/esm/locale' 해주기
    selectsRange={true} //날짜 선택
    startDate={startDate} //
    endDate={endDate} //
    selected={startDate} //시작 날짜
    onChange={(date)=> setDateRange(date)}
    dateFormat="yyy년 MM월 dd일" // MM은 대문자
    minDate={subDays(new Date(), 3)} //3일전 부터는 선택이 안된다 위에 import 뭐했는지 확인
    maxDate={addDays(new Date(), 300)} //3일후로 선택이 안된다 
    monthsShown={5} // 5달을 보여준다
    />
    <div id="map" style={{width: "500px", height: "500px", margin: "0 auto"}}></div>
    </>
  )
}

export default Datepicker