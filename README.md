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



* #### API 연동하여 데이터 사용하기 ✍


![image](https://github.com/suyeonpar/Festival/assets/142365626/2c3181d6-a61f-4ee7-b5af-a476e460a9bb)


**Axios는 많은 개발자가 사용하는 JavaScript 라이브러리로, HTTP 요청을 간편하게 처리할 수 있게 해준다. **

프론트엔드와 백엔드의 협업 중 당연 제일 많이 쓰이고 실무에서도 정말정말 많이 쓰일 기술... 많은 연습이 필요하다고 생각이 된다.

일단 원리에 대해 공부해보자!

위 코드는 ** React의 useEffect 훅을 사용하여 API 호출을 수행하고, 그 결과를 상태(state)에 저장하는 역할 ** 을 한다. 이제 동작과 관련된 설명을 해보자.

* useEffect(callback, []): useEffect는 컴포넌트가 렌더링된 후 특정 작업을 수행할 수 있는 React 훅. 두 번째 인자로 빈 배열([])을 전달하면, 컴포넌트가 처음 마운트될 때만 useEffect의 콜백 함수가 실행된다.


axios.get(url): axios는 HTTP 클라이언트 라이브러리로, 해당 URL로 GET 요청을 보내는 역할을 합니다. 이 코드에서는 주어진 URL로 GET 요청을 보내서 데이터를 가져옵니다.
https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=${process.env.REACT_APP_APIKEY}&pageNo=1&numOfRows=100&resultType=json: API 요청을 보낼 URL입니다. process.env.REACT_APP_APIKEY는 React 애플리케이션의 환경 변수에서 API 키를 가져와서 URL에 포함시킵니다. pageNo=1과 numOfRows=100은 페이지 번호와 한 번에 가져올 데이터의 개수를 나타냅니다. resultType=json은 응답 결과를 JSON 형식으로 요청한다는 의미입니다.
.then(function(res) { setAllData(res.data.getFestivalKr.item); }): API 요청이 성공적으로 완료되면, 응답 데이터에서 필요한 정보(getFestivalKr.item)를 추출하여 setAllData 함수를 호출하여 상태(state)를 업데이트합니다. 이를 통해 컴포넌트가 다시 렌더링되고, 데이터가 화면에 표시될 수 있게 됩니다.
즉, 위의 코드는 컴포넌트가 처음 마운트될 때 한 번만 실행되며, 주어진 API를 통해 축제 데이터를 가져와서 상태에 저장하는 역할을 합니다. 이를 통해 컴포넌트는 API로부터 받은 데이터를 활용하여 필요한 UI를 구성할 수 있게 됩니다.







## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).




### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)


