## 프로젝트 소개
- 군 장병들이 자기계발을 하는 과정에서 관련 정보를 수집하고 공부를 준비하는 등의 과정을 최소한으로 줄여서 장병들이 공부에만 집중할 수 있도록 돕는 서비스입니다.


## 기능 설명
- 장병들이 로그인을 하는 과정에서 입력한 자격증 or 시험 등의 개인 목표를 바탕으로 해당 목표를 이루기 위한 다양한 정보를 수집하여 제공한다.
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

## Team Info
- Heo Chan (bun73@naver.com), Github Id: chnh506
- Lee JeongIn (leeji7682@gmail.com), Github Id: leeji7682
- Kang YoungJune (cerealmaster@naver.com), Github Id: cerealmaster0621
- Oh HyeongGeun (kandy1002@naver.com), Github Id: Geun-Oh

## Copyleft / End User License
 * [MIT](https://github.com/osam2020-WEB/Sample-ProjectName-TeamName/blob/master/license.md)

This project is licensed under the terms of the MIT license.

## Git Branch Strategy

- git flow의 원칙들을 차용하되, 기본적인 배포를 위한 release(main) 브랜치 외에 FE, BE 별 기능 개발 용 브랜치를 두었습니다.(feature/Frontend, feature/Backend). 각자 fork 한 로컬 레포지토리에서 개발을 마치면 각각 분야 별 upstream feature 브랜치로 PR을 보내고 적절한 리뷰를 마친 뒤 merge 하는 방식을 도입했습니다.
