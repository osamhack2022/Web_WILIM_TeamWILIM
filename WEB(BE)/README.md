## BACKEND 실행법

```
$ cd WEB\(BE\)/

$ npm install

$ npm start
```
or...

[배포된 페이지](https://front.wilimbackend.tk) 로 가기

## 💡 WILIM (What I Learned In Military)
![](https://ndevthumb-phinf.pstatic.net/20221014_254/1665758181351XQFWU_PNG/5Jr6kLwmqvGI20221014233621.png)

군복무를 하면서 자격증 준비, 수능 준비 등 자기개발을 위해 힘쓰는 장병들이 많습니다. 그러나, 군대라는 제한된 환경에서 공부를 하기에는 여러 애로사항이 존재합니다. 장병들이 일과 후 시간을 다른 곳에 뺏기지 않고 온전히 공부에만 활용하도록 돕기 위해, 저희는 WILIM 서비스를 개발해 보았습니다. 

 - **시험 일정**부터 **문제집**, **기출문제** 등의 자격증 정보를 찾아줍니다.
 -  촘촘한  자신만의 **플랜**을 세워 보다 건설적으로 공부할 수 있게 도와줍니다.
 - **커뮤니티**를 통해 서로의 공부를 돕고, 동기부여 할 수 있는 공간을 만들어줍니다.
 - 장병들은 WILIM을 통해 전보다 나은 환경에서 공부에 전념할 수 있게 됩니다.

## 🤖 WILIM 백엔드만의 특징


 - [express](https://expressjs.com/): "^4.18.1"
 - [mongoose](https://mongoosejs.com/): "^6.6.1" - MongoDB 와의 연결을 매끄럽게 해줍니다,✅
 - [axios](https://axios-http.com/kr/): "^0.27.2" - 비동기 API호출을 위한 모듈입니다.✅
 - [Passport.js](https://www.passportjs.org/): "^0.6.0" - 로컬/카카오/네이버 전략으로 유저가 총 3가지 방법으로 로그인 할 수 있고, 세션을 사용한 로그인/로그아웃 방식을 구현했습니다.✅
 - [EJS](https://ejs.co/): "^3.1.8" - 백엔드만의 HTML 페이지를 만들어 테스팅하기 용이합니다.✅
 - [mailgun.js](https://www.npmjs.com/package/mailgun.js?utm_source=recordnotfound.com) : "^8.0.2" - 비밀번호찾기 기능에 사용되는 SMTP 방식의 이메일 송신 모듈입니다.✅


...이외에도 다양한 툴 및 모듈을 사용했습니다

## 📜TEAM INFO
 

 - 허찬 ([bun73@naver.com](mailto:bun73@naver.com)), Github Id: chnh506
 - 강영준 (cerealmaster@naver.com), Github Id: Cerealmaster0621
