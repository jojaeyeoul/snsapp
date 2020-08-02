![CI](https://github.com/jaeyeoljo/app/workflows/CI/badge.svg)

# Instagram SNS App Clone Coding Course

React Native 기반 App 개발

1. Instagram SNS App을 Copy하여 컴포넌트 구현
2. 최신버전의 RN과 최소한의 라이브러리를 사용하여 구현

# React Native

사용된 추가 라이브러리

1. TypeScript
2. styled-components
3. babel-plugin-root-import
4. async-storage
5. react-native-make
6. react-navigation@^3.0.0
7. ***

# 어떤 사람들에게 필요한 프로젝트인가요?

최신 버전의 React Native를 통해 iOS와 Android용 앱을 만들고자 하는 사람

## 부여된 조건

1. React Native 버전은 0.63 최신버전 사용과 내장 라이브러리인 Context API로 전역 상태를 관리한다.
2. Class가 아닌 Functional Component로 설계하고 React Hook인 useState 함수를 사용한다.
3. 정적타입 검사는 TypeScript를 사용한다.
4. Web개발과 호환성을 유지하기 위해 styled-components를 사용한다.
5. Backend는 의존성을 최대한 낮추는 방식으로 설계되어야하며 Login 로직이 독립적으로 처리되는 Frontend 샘플을 만든다.

상기 내용을 모두 충족하면서, 결과적으로 디플로이 환경은 Native 환경이 되고, React Native 애플리케이션 파일을 실행하는데 초첨을 두었습니다.

# 사용해보기

## 1) 관련 패키지 설치

```bash
npm install 또는 yarn install
```

## 2) 노드 패키지 설치

```bash
cd snsapp
npm install ***
```

## 3) 라이브러리 설치

```bash
npm install ***
```

> 사용해보기 쪽은 추후 업데이트 예정입니다. 본 소스코드는 모두 정상동작하나 여러가지 모듈과 설치가 필요합니다.
> yarn 또는 npm을 통해 설치하면 되겠죠? 상세사항은 곧 올리겠습니다.

## 4) 개발서버

```bash
npm install ***
```

> 추후 업데이트 예정

# 번들링 (Webpack)

- 현재 웹팩 config을 보면 아시겠지만 React-router로 DOM을 새로 그리는 방법을 채택했습니다.
  > static/resource 에서 외부 부트스트랩이나 딱히 번들링할 필요없는 소스들을 모아둘 수 있습니다.
  > 작업을 하시다보면 번들링 되는 속도나 번들링시 발생하는 예기치않은 오류를 무시하고 그냥 소스만 연결해야 할 상황(부트스트랩에 이미지가 빠져있다던가)이 분명히 있을거에요.
  > 컴포넌트 설계는 Facebook의 권고사항에 따라 일반적인 방식으로 진행하였습니다.

# 디버깅 로그

1. 디버깅 로그 부분은 추후 업데이트합니다(2020/09)
   > 해결법) 환경에 따라 실행이 되지 않을 수 있습니다.

# 디플로이

- 혹시 디플로이 환경이 AWS lambda이거나 엔드포인트가 존재하나요?
- webpack의 output > publicPath를 설정해주세요.
  > ex) 디플로이 path static_url을 /dev로 설정해주어야 합니다.

# 라이센스

- 배포 및 수정 가능합니다.
- 기본적으로 MIT 라이센스를 따릅니다.
  > 기타문의가 있을 경우 devscripter@gmail.com(조재열)로 메일 주세요.
