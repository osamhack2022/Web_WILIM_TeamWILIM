## 영준님의 PR
**BACKEND 실행법**
```
$ cd WEB\(BE\)/
$ npm install
$ npm start
```

#**백엔드 라우팅 리스트**
##/userSchemaAPI 라우팅 리스트
**/register/local** - 로컬로그인
**/register/kakao** - kakao 로그인 후 db에 없는 유저일 경우 회원가입을 시도한다.
**/login/kakao** - kakao 로그인
**/login/kakao/callback** - kakao 로그인 시 콜백라우터로 사용
**/register/naver** - naver 로그인 후 db에 없는 유저일때 회원가입
**/login/naver** - naver 로그인
**/login/naver/callback** - naver 로그인 시 콜백라우터로 사용
**/loginerror** - 로그인 에러 발생시
**/id/:id** - 
        **GET** - id 을 파라매터로 받아 db에서 찾아 해당 유저 정보 return
        **PUT** - 해당 유저 수정
        **DELETE** - 해당 유저 삭제
**/session** - 로그인 유저 있을시 유저정보 반환
**/resetPassword** - 임시 패스워드 생성 라우터
##/userPersonalPlanAPI 라우팅 리스트
##/userGoalElementAPI 라우팅 리스트
##/communityAPI라우팅 리스트

## 찬님의 PR
안녕하세요 WILIM에서 백엔드 개발을 담당하고 있는 허찬이라고 합니다!
Terminal에서 PR 테스트.
