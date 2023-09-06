import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import { styled } from 'styled-components'
import 'react-datepicker/dist/react-datepicker.css'
import {ko} from 'date-fns/esm/locale'
import {addDays, subDays} from 'date-fns'

const StyleDate = styled(DatePicker)`
    margin: 100px auto;
    width: 300px;
    border: 1px solid #ddd;
    background-color: rgb(113, 236, 236);
    padding: 20px;
`

function Datepicker() {
    
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
    </>
  )
}

export default Datepicker