# hcheck
Automatic self-diagnosis for your convenience.

## How to run

1. `yarn`
2. Edit `credentials.json` to match your credentials.

```json
ex) 
{
  "school": {
    "region": "서울",    // Required
    "level": "중학교",    // Required
    "name": "어쩌다중",    // Required
    "code": "B100000887" // Optional
  },
  "studentName": "홍길동", // Required
  "birthday": "050730", // Required
  "password": "0730" // Required
}

```

3. `yarn start` --> Automatic self-diagnosis is performed every day from the time you run!
