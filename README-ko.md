# hcheck
자동 자가진단 스크립트

## README
[[English](./README.md)]
[[한국어](./README-ko.md)]

## 사용법
### 1. 이 저장소를 clone합니다.
```
git clone https://github.com/comjun04/covid19-hcheck-auto.git
cd covid19-hcheck-auto
```

### 2. 필요한 모듈들을 설치합니다.
```
yarn
```

### 3. [credentials.example.json](./src/credentials.example.json) 파일을 `credentials.json`으로 복사합니다.

### 4. `credentials.json`을 열고 정보를 입력합니다.
```json
{
  "school": {
    "region": "서울",
    "level": "중학교",
    "name": "어쩌다중",
    "code": "B100000887"
  },
  "studentName": "홍길동",
  "birthday": "050730",
  "password": "0730"
}
```
| 항목 | 설명 | 타입 | 필수 입력 여부 |
| ---- | ---- | ---- | ---- |
| `school.region` | 학교가 있는 지역 이름 (서울, 부산, 대구, 인천, 광주, 대전, 울산, 세종, 경기, 강원, 충북, 충남, 전북, 전남, 경북, 경남, 제주 중 하나)| `string` | **필수** |
| `school.level` | 학교급 (유치원, 초등학교, 중학교, 고등학교, 특수학교 중 하나) | `string` | **필수** |
| `school.name` | 학교 이름 | `string` | **필수** |
| `school.code` | 학교 코드 | `string` | 선택
| `studentName` | 학생 이름 | `string` | **필수** |
| `birthday` | 생년월일 (yyMMDD 형식) | `string` | **필수** |
| `password` | 비밀번호 | `string` | **필수** |

검색되어 나오는 학교가 1개인 경우, 학교 코드를 입력하지 않아도 됩니다. 2개 이상이 검색될 경우 학교 코드를 입력하라는 안내 메세지가 표시됩니다.

### 5. 스크립트를 실행합니다.
```
yarn start
```
