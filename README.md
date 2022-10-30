## BACKEND 실행법

```
$ git clone https://github.com/osamhack2022/Web_WILIM_TeamWILIM
$ cd WEB\(BE\)/
$ npm install
$ npm start
```
## FRONTEND 실행법

  
```
$ git clone https://github.com/osamhack2022/Web_WILIM_TeamWILIM
$ cd WEB\(FE\)/
$ cd ts-wilim
$ npm install
$ npm start
```
or...

  

[배포된 페이지](https://front.wilimbackend.tk) 로 가기

## Table of Contents
- [프로젝트 소개](#프로젝트-소개)
- [기능](#기능)
- [기술 스택 (Technique Used)](#기술-스택-(technique-used))
- [WILIM 프론트엔드](#wilim-프론트엔드)
- [WILIM 백엔드](#wilim-백엔드)
- [Git Branch Strategy](#git-branch-strategy)
- [Links](#links)
- [TEAM INFO](#team-info)
- [Copyleft / End User License](#copyleft---end-user-license)
  

## 💡 WILIM (What I Learned In Military)

![](https://ndevthumb-phinf.pstatic.net/20221014_254/1665758181351XQFWU_PNG/5Jr6kLwmqvGI20221014233621.png)

## 프로젝트 소개

> 군복무를 하면서 자격증 준비, 수능 준비 등 자기개발을 위해 힘쓰는 장병들이 많습니다. 그러나, 군대라는 제한된 환경에서 공부를 하기에는 여러 애로사항이 존재합니다. 장병들이 일과 후 시간을 다른 곳에 뺏기지 않고 온전히 공부에만 활용하도록 돕기 위해, 저희는 WILIM 서비스를 개발해 보았습니다.

- **시험 일정**부터 **문제집**, **기출문제** 등의 자격증 정보를 찾아줍니다.

- 촘촘한 자신만의 **플랜**을 세워 보다 건설적으로 공부할 수 있게 도와줍니다.

- **커뮤니티**를 통해 서로의 공부를 돕고, 동기부여 할 수 있는 공간을 만들어줍니다.

- 장병들은 WILIM을 통해 전보다 나은 환경에서 공부에 전념할 수 있게 됩니다.

## 기능
- 장병들이 로그인을 하는 과정에서 입력한 자격증 or 시험 등의 개인 목표를 바탕으로 해당 목표를 이루기 위한 다양한 정보를 수집하여 제공합니다.

- 가장 빠른 시험 일정 및 디데이 알림, 체계적인 공부를 위한 내장 플래너, 목표를 성취하였을 때 주어지는 부가적인 보상 알림, 다양한 군 자기계발 지원사업 등의 소개를 통해 장병이 공부에 전념할 수 있도록 돕습니다.

## 기술 스택 (Technique Used)

### Back-end
 - <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/></a> 16.17.0 LTS version
 - <img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=Express&logoColor=white"></a> 를 이용한 서버 구축
 - <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white"></a> 를 이용한 데이터베이스 구축
 
### Front-end
 - <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"></a> 를 이용한 반응형 웹 구축
 - <img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"></a> 를 이용한 Global state management
 - <img src="https://img.shields.io/badge/Styled&nbsp;Components-DB7093?style=flat-square&logo=Styled-components&logoColor=white"></a> 를 이용한 CSS-In-JS Styling

### DevOps
 - <img src="https://img.shields.io/badge/AWS&nbsp;Elastic&nbsp;Beanstalk-FF9900?style=flat-square&logo=Amazon AWS&logoColor=white"></a> 를 이용한 Deploy
 - <img src="https://img.shields.io/badge/Github&nbsp;Actions-2088FF?style=flat-square&logo=Github-actions&logoColor=white"></a> 를 이용한 CI/CD 파이프라인 구축
 
### Communications
 - <img src="https://img.shields.io/badge/Notion-000000?style=flat-square&logo=Notion&logoColor=white"></a> 를 이용한 문서 작성 및 협업
 - <img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white"></a> 를 이용한 디자인 프로토타이핑


### 👨‍💻WILIM 백엔드만의 특징

- [express](https://expressjs.com/): "^4.18.1"

- [mongoose](https://mongoosejs.com/): "^6.6.1" - 추후 서비스 확장을 고려해 NO-SQL 데이터베이스를 사용했습니다✅

- [axios](https://axios-http.com/kr/): "^0.27.2" - 비동기 API호출을 위한 모듈입니다.✅

- [Passport.js](https://www.passportjs.org/): "^0.6.0" - 로컬/카카오/네이버 전략으로 유저가 총 3가지 방법으로 로그인 할 수 있고, 세션을 사용한 로그인/로그아웃 방식을 구현했습니다.✅

- [EJS](https://ejs.co/): "^3.1.8" - 백엔드만의 HTML 페이지를 만들어 테스팅하기 용이합니다.✅

- [mailgun.js](https://www.npmjs.com/package/mailgun.js?utm_source=recordnotfound.com) : "^8.0.2" - 비밀번호찾기 기능에 사용되는 SMTP 방식의 이메일 송신 모듈입니다.✅

 ### 🤖 WILIM 프론트엔드만의 특징
- [typescript](https://www.typescriptlang.org/): "^4.8.4" - Typescript를 이용한 정적 타입 기반의 견고한 아키텍쳐를 구성했습니다✅

- [react](https://ko.reactjs.org/): "^18.2.0" - React 라이브러리를 이용한 반응형 SPA 개발했습니다,✅

- [axios](https://axios-http.com/kr/): "^0.27.2" - 비동기 API호출을 위한 모듈입니다.✅

- [redux-toolkit](https://redux-toolkit.js.org/): "^1.8.5" - Redux를 이용한 전역 상태관리를 쉽게 하도록 도와주는 툴. 비동기 함수들도 관리하기 용이하도록 했습니다.✅

- [styled-components](https://styled-components.com/): "^5.3.5" - CSS In JS 문법을 이용하여 컴포넌트 별 스타일 관리를 용이하게 하는 라이브러리입니다.✅
  
...이외에도 다양한 툴 및 모듈을 사용했습니다.

## WILIM 프론트엔드
### WILIM 프론트엔드 코드 아키텍쳐  

Atomic design을 참고하여 설계하되, 대규모 서비스를 개발하는 것이 아니므로 구조는

1. Button, Text, label, Input 과 같은 **Atom**

2. SRP(Single Responsibility Principle, 단일 책임 원칙)을 준수하여 동일한 역할을 맡는 Atom들을 합쳐 만든 **Molecule**

3. Molecule을 합쳐서 만든 하나의 서비스적인 역할을 맡는 영역인(GNB, Nav, Card 등) **Organism**

4. Organism을 합쳐서 만든 실제 보여질 전체 Page의 뼈대가 되는 **Template**

5. Template에 데이터를 합쳐서 제작하는 **Page** -> Template에 데이터를 심어줌으로써 제작합니다.

  

Design Pattern 은 Redux(Redux-toolkit)을 이용한 Flux 패턴을 적용하였습니다.


#### Action / Action creator

Action은 Redux 에서 관리되는 전역 상태를 변경할 수 있는 명령 단위입니다. 모든 전역 상태는 Action을 통해서만 변경 가능합니다.

  
#### Dispatcher

Dispatcher는 Action의 동작에 의한 전역 상태 변경이 감지되면 해당 변경 사항을 각 Store에 전달하는 역할을 합니다.

  
#### Store(Model)

Store는 전역 상태와, 상태를 변경 가능한 메서드를 담은 하나의 단위이다. 들어오는 Action에 따라 상태를 변경하는 Trigger를 발동 시킵니다.

  
#### View

UI와 직접적으로 연결되는 부분. 위의 Atomic Pattern에서 Template과 View를 연결시켜 데이터를 전달하고 Page를 생성 합니다.

  
### Reference

[아토믹 디자인을 활용한 디자인 시스템 도입기 - kakao 기술블로그](https://fe-developers.kakaoent.com/2022/220505-how-page-part-use-atomic-design-system/)

[Flux | 사용자 인터페이스를 만들기 위한 어플리케이션 아키텍쳐](https://haruair.github.io/flux/docs/overview.html)


## WILIM 백엔드 
### 폴더 구조
📦src  
 ┣ 📂controller  
 ┃ ┣ 📜communityAPI.js  
 ┃ ┣ 📜userGoalElementAPI.js  
 ┃ ┣ 📜userPersonalPlanAPI.js  
 ┃ ┗ 📜userSchemaAPI.js  
 ┣ 📂models  
 ┃ ┣ 📜comment.js  
 ┃ ┣ 📜goalElement.js  
 ┃ ┣ 📜personalPlan.js  
 ┃ ┣ 📜post.js  
 ┃ ┗ 📜user.js  
 ┣ 📂routes  
 ┃ ┣ 📜communityAPI.js  
 ┃ ┣ 📜image.js  
 ┃ ┣ 📜userGoalElementAPI.js  
 ┃ ┣ 📜userPersonalPlanAPI.js  
 ┃ ┗ 📜userSchemaAPI.js  
 ┣ 📂seeds  
 ┃ ┣ 📜allCtfInfo.json  
 ┃ ┣ 📜description.json  
 ┃ ┗ 📜qnetInfo.json  
 ┣ 📂utils  
 ┃ ┗ 📜error.js  
 ┣ 📂views  
 ┃ ┣ 📂communityAPI  
 ┃ ┃ ┣ 📜post.ejs  
 ┃ ┃ ┣ 📜postEdit.ejs  
 ┃ ┃ ┗ 📜postRoot.ejs  
 ┃ ┣ 📂userGoalElementAPI  
 ┃ ┃ ┗ 📜goalElement.ejs  
 ┃ ┣ 📂userPersonalPlanAPI  
 ┃ ┃ ┣ 📜planElement.ejs  
 ┃ ┃ ┗ 📜planList.ejs  
 ┃ ┣ 📂userSchemaAPI  
 ┃ ┃ ┣ 📜kakaoRegister.ejs  
 ┃ ┃ ┣ 📜login.ejs  
 ┃ ┃ ┣ 📜naverRegister.ejs  
 ┃ ┃ ┣ 📜register.ejs  
 ┃ ┃ ┗ 📜resetPassword.ejs  
 ┃ ┣ 📜main.ejs  
 ┃ ┗ 📜multer.ejs  
 ┣ 📜app.js  
 ┣ 📜db.js  
 ┣ 📜env.js  
 ┣ 📜middleware.js  
 ┣ 📜multer.js  
 ┗ 📜seeds.js

### 📙API 명세
> WILIM의 백엔드 API 는 크게 총 4가지로,
> 로그인/회원가입 및 유저에 관한 전반적인 정보를 다루는 /userSchemaAPI,
> 유저의 플랜 수립과 관련된 정보를 다루는 /userPersonalPlanAPI,
> 유저의 목표 및 자격증정보를 다루는 /userGoalElementAPI,
> 커뮤니티 CRUD와 관련된 /communityAPI 로 나누어져 있습니다.

- <ins>/**userSchemaAPI** 세부 라우팅 리스트</ins>
	- **/** -  DB 에 있는 모든 유저를 Return.
	- **/register/local**  - local 회원가입
	-   **/login/local**  - local 로그인
	-   **/register/kakao**  - kakao 로그인 후 db에 없는 유저일때 회원가입
	-   **/login/kakao**  - kakao 로그인 라우터
	-   **/login/kakao/callback**  - kakao 로그인 콜백 라우터
	-   **/register/naver**  - naver 로그인 후 db에 없는 유저일때 회원가입
	-   **/login/naver**  - naver 로그인 라우터
	-   **/login/naver/callback**  - naver 로그인 콜백 라우터
	-   **/loginerror**  - 로그인 에러 발생시 넘어가는 페이지
	-   **/id/:id**
		-     GET - id 을 파라매터로 받아 db에서 찾아 해당 유저 정보 return
		-     PUT - 해당 유저 수정
		-     DELETE - 해당 유저 삭제
    
	-   **/session**  - 로그인된 세션이 있을시 그 유저정보를 보여주는 페이지
	-   **/resetPassword**  - 임시 패스워드 생성 라우터
- <ins>**/userPersonalPlanAPI** 세부 라우팅 리스트</ins>

	-  	 **/:username/plans**  -
    
			-     GET - 유저의 전체 Plan List 가져오기
    
		    -	  POST - 새로운 Plan Element 추가
    
	-   **/:username/plans/:id**  -
    
	    -     GET - :id에 해당하는 Plan Element 가져오기
    
	    -     PUT - :id에 해당하는 Plan Element의 내용 수정
    
		 -     DELETE - 해당 Plan Element 삭제
- <ins>**/userGoalElementAPI** 세부 라우팅 리스트</ins>

	-   **/ctfInfo**  -
    
		   -     GET - 모든 자격증 정보 가져오기
    
		    -     POST - 새로운 자격증 정보 생성하기
    
	-   **/ctfInfo/:id**  -
    
	    -     GET - :id에 해당하는 GoalElemnt 가져오기
    
	    -     PUT - :id에 해당하는 GoalElement의 내용 수정
    
		-     DELETE - 해당 GoalElement 삭제
    
	-   **/goal/:username**  -
    
	    -     GET - 유저의 목표 가져오기
    
	    -     POST - 기존 GOAL 있으면 삭제하고 새로운 GOAL 생성
    
	    -     DELETE - 해당 GOAL 삭제
- <ins>**/communityAPI** 세부 라우팅 리스트</ins>

	-   **/post/:id**  -
    
	    -     GET - 해당 id의 포스트 가져오기
    
	    -     PUT - 해당 id의 포스트 내용 업데이트(단, 작성자가 로그인한 경우만 허용)
    
	    -     DELETE - 해당 id의 포스트 삭제(단, 작성자가 로그인한 경우만 허용)
    
	-   **/user/:username/posts**  -
    
		-     GET - 해당하는 user의 포스트 가져오기
    
	    -     POST - 새로운 포스트 생성
    
	-   **/comments/:id**  -
    
	    -     GET - 해당 id의 댓글 가져오기
		-     PUT - 해당 id의 댓글 수정하기(단, 작성자가 로그인한 경우만 허용)
		-     DELETE - 해당 id의 댓글 삭제(단, 작성자가 로그인한 경우만 허용)
    
	-   **/post/:id/comments**  -
    
	    -     POST - 해당 id의 포스트에 댓글 추가
    
	    -     (GET 방식은 따로 만들지 않고,포스트를 불러올 때 populate 기능으로 댓글도 같이 불러오는 것으로 대체합니다.)

### 🎒데이터베이스
![WILIM ERD](https://github.com/Cerealmaster0621/Web_WILIM_TeamWILIM/blob/feature/Backend/WEB(BE)/src/WILIMERD.drawio.png?raw=true)

## Git Branch Strategy

> upstream repo fork -> 각자 브랜치에서 기능 개발 (Frontend, Backend) -> 개발 후 upstream으로 pull request -> merge -> Deploy 
- git flow의 원칙들을 차용하되, 기본적인 배포를 위한 release(main) 브랜치 외에 FE, BE 별 기능 개발 용 브랜치를 두었습니다.(feature/Frontend, feature/Backend). 각자 fork 한 로컬 레포지토리에서 개발을 마치면 각각 분야 별 upstream feature 브랜치로 PR을 보내고 적절한 리뷰를 마친 뒤 merge 하는 방식을 도입했습니다.

## Links

### [Notion Calender](https://patch-strand-bb8.notion.site/170a8b39be1847b7b839ac809c416358)
### [Github Project](https://github.com/orgs/osamhack2022/projects/5) 


## 🦸‍♂️TEAM INFO


|Name|Contact|Github_ID|Role|
|:---:|:---:|:---:|:---:|
|오형근|kandy1002@naver.com|Geun-Oh|FE,PM|
|이정인|leeji7682@gmail.com|leeji7682|FE|
|허찬|bun73@naver.com|chnh506|BE|
|강영준|cerealmaster@naver.com|Cerealmaster0621|BE|


## Copyleft / End User License
 * [MIT](https://github.com/osam2020-WEB/Sample-ProjectName-TeamName/blob/master/license.md)

This project is licensed under the terms of the MIT license.
