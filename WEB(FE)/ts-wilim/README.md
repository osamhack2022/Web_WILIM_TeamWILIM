## WILIM Front-End Code Architecture

### Atomic design을 참고하여 설계한다. 세부 구조는 다음과 같다.

1. Button, Text, label, Input 과 같은 **Atom**
2. SRP(Single Responsibility Principle, 단일 책임 원칙)을 준수하여 동일한 역할을 맡는 Atom들을 합쳐 만든 **Molecule**
3. Molecule을 합쳐서 만든 하나의 서비스적인 역할을 맡는 영역인(GNB,  Nav, Card 등) **Organism**
4. Organism을 합쳐서 만든 실제 보여질 전체 Page의 뼈대가 되는 **Template**
5. Template에 데이터를 합쳐서 제작하는 **Page** -> Template에 데이터를 심어줌으로써 제작함.

### Design Pattern 은 Redux(Redux-toolkit)을 이용한 Flux 패턴을 적용한다.

#### Action / Action creator

Action은 Redux 에서 관리되는 전역 상태를 변경할 수 있는 명령 단위입니다. 모든 전역 상태는 Action을 통해서만 변경 가능합니다.

#### Dispatcher

Dispatcher는 Action의 동작에 의한 전역 상태 변경이 감지되면 해당 변경 사항을 각 Store에 전달하는 역할을 한다.

#### Store(Model)

Store는 전역 상태와, 상태를 변경 가능한 메서드를 담은 하나의 단위이다. 들어오는 Action에 따라 상태를 변경하는 Trigger를 발동시킨다.

#### View

UI와 직접적으로 연결되는 부분. 위의 Atomic Pattern에서 Template과 View를 연결시켜 데이터를 전달하고 Page를 생성함.

### Reference

[아토믹 디자인을 활용한 디자인 시스템 도입기 - kakao 기술블로그](https://fe-developers.kakaoent.com/2022/220505-how-page-part-use-atomic-design-system/)<br />
[Flux | 사용자 인터페이스를 만들기 위한 어플리케이션 아키텍쳐](https://haruair.github.io/flux/docs/overview.html)