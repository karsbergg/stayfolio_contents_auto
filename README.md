# Stayfolio 콘텐츠 생성기 — Vercel 배포 버전

링크 하나로 팀원 누구나 브라우저에서 바로 사용할 수 있어요.

---

## 배포 방법 (5분)

### 1단계 — GitHub에 올리기

1. https://github.com 접속 → 로그인 → 우측 상단 **+** → **New repository**
2. Repository name: `stayfolio` → **Create repository**
3. 이 폴더 안 파일들을 전부 업로드 (Upload files 버튼)

### 2단계 — Vercel 연결

1. https://vercel.com 접속 → **Sign up with GitHub**
2. **Add New Project** → 방금 만든 `stayfolio` 저장소 선택
3. 설정 건드리지 말고 **Deploy** 클릭
4. 배포 완료 후 URL 생성됨 (예: `https://stayfolio-abc123.vercel.app`)

### 3단계 — 팀원과 공유

URL을 Slack이나 카톡으로 보내면 끝!  
각자 브라우저에서 API 키만 입력하면 바로 사용 가능해요.

---

## 구조

```
stayfolio-vercel/
├── index.html          # 앱 UI
├── vercel.json         # Vercel 설정
└── api/
    ├── generate.js         # Claude API 프록시
    ├── generate-openai.js  # OpenAI API 프록시
    ├── send-sheet.js       # Google Sheets 연동
    ├── save-key.js         # (호환용, 실제 저장은 localStorage)
    └── load-config.js      # (호환용)
```

---

## 참고

- API 키는 각자 브라우저 localStorage에만 저장돼요 (서버에 저장 안 됨)
- Vercel 무료 플랜으로 충분해요
