# hcheck
Automatic self-diagnosis for your convenience.

## README

[[English](./README.md)]
[[한국어](./README-ko.md)]

## How to run

1. `yarn`
2. Edit `credentials.json` to match your credentials.

```json
ex) 
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

Only `school.code` is optional.

3. `yarn start` --> Automatic self-diagnosis is performed every day from the time you run!
