---
title: 'Quiz App'
digest: '영화를 검색하고 저장할 수 있는 서비스'
---

## Features

- 영화 검색창과 검색결과
- 검색결과 목록을 최하단으로 내렸을 때 API를 이용하여 다음 페이지를 불러와 렌더링
- 즐겨찾기 추가/제거/별점 부여 (로컬 스토리지 연동)
- 드래그 앤 드롭(react-beautiful-dnd)
- 무한 스크롤 UI(intersection-observer)

## Learnings & Retrospect

- 라이브러리 이슈
    - react-beautiful-dnd 라이브러리 이용하여 구현하는데, 원하는 대로 동작하지 않아 꽤 오랜 시간 애를 먹었다.
    - 해답은 해당 라이브러리 저장소 이슈 탭에서 확인할 수 있었다. 기술적인 성장은 아니었지만 일단 라이브러리 이슈부터 확인해야 한다는 큰 교훈을 얻을 수 있었다.
- 로컬 스토리지 연동
    - recoil의 atom effect로 충분한데 우연히 관련 라이브러리를 찾아 이용해보았다. 사실 `localStorage`와 연동하는 게 크게 어렵지도, 복잡하지도 않아서 직접 구현해도 상관은 없지만 파일 구조 측면에서 이득을 볼 수 있었다. 원래 `hooks` 폴더 안에서 `localStorageEffect`와 같은 이름의 훅을 선언하여 즐겨찾기 `atom`을 연결 시켜놓을 생각이었는데, 라이브러리 덕분에 함수 하나를 `import` 하는 것으로 끝낼 수 있었다. 시간도 절약할 수 있었고.
- 이벤트 버블링 제거
    - 부가적으로 저장한 영화에 대하여 별점을 부여할 수 있는 기능을 추가하던 도중 별점 버튼 클릭 이벤트가 드래그 앤 드롭 기능과 겹치는 문제가 발생했다.
    - `stopPropagation()`을 사용하여 부모에 의한 이벤트 버블링을 멈추게 하여 간단하게 막을 수 있었다.
- 이미지 최적화
    - 용량이 너무 큰 이미지를 관리하게 되거든 적당히 최적화해주는 작업이 필요하다. 웹 도구를 이용하여 배경 이미지 용량을 줄여주었다.