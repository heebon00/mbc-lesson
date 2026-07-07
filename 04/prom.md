## 요청 
 너는 웹 표준과 시맨틱 마크업을 준수하는 시니어 프론트엔드 개발자야. 내가 요구하는 Figma 디자인 명세를 바탕으로, 별도의 프레임워크나 빌드 도구 없이 오직 순수 바닐라(Vanilla) HTML, CSS, JavaScript만을 사용하는 전통적인 레거시 웹 방식의 MPA(Multi-Page Application)를 구현해줘.SPA 프레임워크나 라이브러리는 절대 사용하지 마.
 시안주소:https://www.figma.com/design/jrNRG8pQROdTwMdd4h3tFA/%EC%A0%9C%EB%AA%A9-%EC%97%86%EC%9D%8C?node-id=1-104&t=JVABt2AOG8AS5w8e-4


[1. 프로젝트 규칙 및 아키텍처]
- 방식: MPA (Multi-Page Application) 방식으로, 각 페이지는 독립된 HTML 파일로 존재해야 해.
- 파일 구조:
  - index.html (메인 페이지)
  - [페이지2].html (예: about.html 또는 마일스톤 페이지 등 Figma에 존재하는 다른 페이지가 있다면 추가)
  - CSS: 모든 페이지가 공통으로 사용할 하나의 `style.css` 파일로 레이아웃과 스타일을 관리해줘.
  - JS: 모든 페이지가 공통으로 참조할 하나의 `script.js` 파일을 생성해줘.

[2. Figma 디자인 명세 (node-id=1-104 기반)]
내가 링크한 디자인 프레임의 시각적 요소는 다음과 같아. 이 구조를 레이아웃으로 반영해줘.
- 레이아웃 전체 분위기: [예: 다크 모드 기반의 대시보드 형태 / 화이트 톤의 깔끔한 랜딩 페이지]
- 공통 헤더(Header): [예: 좌측 상단 텍스트 로고, 우측에 메뉴 링크 <a href="index.html">Home</a>, <a href="about.html">About</a> 배치]
- 메인 콘텐츠 섹션 구조: [예: 상단에는 커다란 타이틀과 서브타이틀이 있고, 그 아래에는 3열 그리드로 된 카드 섹션이 있음]
- 공통 푸터(Footer): [예: 하단 중앙에 카피라이트와 연락처 정보 배치]

[3. 스타일 가이드 (CSS)]
- 주요 색상(Primary): [Figma에서 추출한 주요 Hex 색상 코드, 예: #2F80ED]
- 배경색(Background): [예: #ffffff]
- 글자색(Text): [예: #333333]
- 폰트: 웹페이지가 깔끔해 보이도록 Google Fonts의 'Pretendard' 또는 'Noto Sans KR'을 연동해줘.
- 반응형: 모바일 기기(최대 너비 768px)에서도 레이아웃이 깨지지 않도록 미디어 쿼리(@media)를 필수로 작성해줘. 가로 배열된 요소들은 모바일에서 세로로 떨어져야 해.

[4. 기능 및 인터랙션 (Vanilla JS)]
- 페이지가 바뀔 때마다 화면이 새로고침되는 MPA 방식이므로, `script.js` 내에서 각 페이지의 DOM 요소가 존재하는지 체크(`if (document.querySelector('...'))`)한 뒤 이벤트를 바인딩하도록 안전하게 코드를 짜줘.
- 구현할 인터랙션: [예: 모바일 전용 햄버거 메뉴 토글 기능 / 카드 요소에 마우스를 올렸을 때의 Hover 애니메이션 효과]

먼저 프로젝트의 기본 폴더 구조와 index.html, style.css의 뼈대부터 작성해줘.