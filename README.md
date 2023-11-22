# [Festival in Busan!🎉](https://festival-pink.vercel.app/)

부산축제 즐기러 가볼까요?

## Preveiw

![image](https://github.com/suyeonpar/Festival/assets/142365626/8eed8d5c-7343-434c-b905-bc4c5f37844a)




### React API연동 연습의 최적화
 
프론트엔드 개발자가 실무에서 가장 많이 쓴다는 API 연동하기.
절대 빠트려서도, 연습을 안해서도 안된다!


* #### 사용한 기술


#### Environmnet

![image](https://github.com/suyeonpar/clone-belif/assets/142365626/40429fb4-d844-4ea9-b9cd-f2f9f89fbd79)



#### Development

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">



### API 연동하여 데이터 사용하기 ✍


![image](https://github.com/suyeonpar/Festival/assets/142365626/2c3181d6-a61f-4ee7-b5af-a476e460a9bb)


**Axios는 많은 개발자가 사용하는 JavaScript 라이브러리로, HTTP 요청을 간편하게 처리할 수 있게 해준다. **

프론트엔드와 백엔드의 협업 중 당연 제일 많이 쓰이고 실무에서도 정말정말 많이 쓰일 기술... 많은 연습이 필요하다고 생각이 된다.

일단 원리에 대해 공부해보자!

위 코드는 **React의 useEffect 훅을 사용하여 API 호출을 수행하고, 그 결과를 상태(state)에 저장하는 역할** 을 한다. 이제 동작과 관련된 설명을 해보자.

* useEffect(callback, []): useEffect는 컴포넌트가 렌더링된 후 특정 작업을 수행할 수 있는 React 훅. 두 번째 인자로 빈 배열([])을 전달하면, 컴포넌트가 처음 마운트될 때만 useEffect의 콜백 함수가 실행된다.

* axios.get(url): axios는 HTTP 클라이언트 라이브러리로, 해당 URL로 GET 요청을 보내는 역할을 한다.

(여기서 GET 요청이란 HTTP 프로토콜에서 사용되는 요청 메서드 중 하나이다. 클라이언트가 서버에게 리소스를 요청할 때 사용되는 메서드이며, GET 요청은 서버로부터 데이터를 가져오는 목적으로 사용되는것~ 이 코드에서는 주어진 URL로 GET 요청을 보내서 데이터를 가져온다.)

* https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=${process.env.REACT_APP_APIKEY}&pageNo=1&numOfRows=100&resultType=json: API 요청을 보낼 URL. process.env.REACT_APP_APIKEY는 React 애플리케이션의 환경 변수에서 API 키를 가져와서 URL에 포함시킨다. pageNo=1과 numOfRows=100은 페이지 번호와 한 번에 가져올 데이터의 개수를 나타내는것. resultType=json은 응답 결과를 JSON 형식으로 요청한다는 의미이다.

* .then(function(res) { setAllData(res.data.getFestivalKr.item); }): API 요청이 성공적으로 완료되면, 응답 데이터에서 필요한 정보(getFestivalKr.item)를 추출하여 setAllData 함수를 호출하여 상태(state)를 업데이트한다. 이를 통해 컴포넌트가 다시 렌더링되고, 데이터가 화면에 표시될 수 있게 된다!.

즉, 위의 코드는 컴포넌트가 처음 마운트될 때 한 번만 실행되며, 주어진 API를 통해 축제 데이터를 가져와서 상태에 저장하는 역할을 한다는 것!! 이를 통해 컴포넌트는 API로부터 받은 데이터를 활용하여 필요한 UI를 구성할 수 있게 된다.





### 페이지네이션 구현

컨텐츠가 많다면 당연히 페이지네이션도 있어야겠죠...?

구현하기 힘들었던 페이지네이션도 완성은 했으나 아직 연습이 많이 필요한 것 같다.
코드를 하나씩 분석해보며 다시 복습해보자!

![image](https://github.com/suyeonpar/Festival/assets/142365626/75aa6d64-f5d1-485b-92cc-c3834d865734)

먼저 state값을 만들어 줍니다.

const list = 10; ****페이지당 목록 개수를 10으로 설정****

const [page, setPage] = useState(1); ****상태 변수 page와 해당 상태를 업데이트하는 setPage 함수를 선언하고, 초기값을 1로 설정****

const [totalCnt, setTotalCnt] = useState(0); ****상태 변수 totalCnt와 해당 상태를 업데이트하는 setTotalCnt 함수를 선언하고, 초기값을 0으로 설정****

const pagination = 5; ****페이지네이션에서 한 번에 보여줄 페이지 번호 개수를 5로 지정****

const totalPage = Math.floor(totalCnt / list); ****전체 페이지 수를 계산하여 totalPage 변수에 할당.****



### **이제 위의 변수를 사용해 함수를 만들어주자!!
대망의 함수 만들기.... 어렵다 어려워... 하지만 구현은 해내야지

![image](https://github.com/suyeonpar/Festival/assets/142365626/feae0254-dae4-466f-b008-f991f125080a)

let startPage, endPage;  ****페이지네이션에서 시작 페이지와 끝 페이지를 나타내는 변수를 선언해준다****

const currentBlock = Math.ceil(page / pagination);  ****현재 페이지가 속한 페이지 블록을 계산하여 currentBlock 변수에 할당****

startPage = (currentBlock - 1) * pagination + 1;  ****시작 페이지를 계산하여 startPage 변수에 할당****

endPage = startPage + pagination - 1;  ****끝 페이지를 계산하여 endPage 변수에 할당.****

if (endPage > totalPage) {
  endPage = totalPage;
}  ****endPage가 전체 페이지 수를 초과하지 않도록 조정****

const PrevBlock = () => {
  if (startPage > 1) {
    setPage(startPage - pagination);
  }
} ****이전 페이지 블록으로 이동하는 함수****

const NextBlock = () => { 
  if (endPage < totalPage) {
    setPage(startPage + pagination);
  }
} ****다음 페이지 블록으로 이동하는 함수****

const PageList = []; ****페이지 번호를 담을 배열****


for (let i = startPage; i <= endPage; i++) {
  PageList.push(
    <li className={page === i ? 'on' : ''} key={i} onClick={() => { setPage(i) }}>
      {i}
    </li>
  );
} ****시작 페이지부터 끝 페이지까지 반복하여 페이지 번호를 생성****

이렇게하면 페이지네이션 함수 만들기 끝!


![image](https://github.com/suyeonpar/Festival/assets/142365626/bc9f9870-c650-4c6e-a6db-6c245dd9fe9a)

이전,다음 사이에 pageList를 출력해주면

![image](https://github.com/suyeonpar/Festival/assets/142365626/6e46ed79-9c24-4bdc-a1a9-b6018914c56d)

이렇게 예쁘게 페이지네이션이 뜨는 걸 볼 수 있다!!🧐

많은 구글검색과 선생님의 도움이 없었다면 더 힘들었을 페이지네이션...

앞으로도 많은 연습이 필요할 것 같다!
