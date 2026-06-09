# Project RE:DEFINE Landing Page

Project RE:DEFINE 2026 랜딩페이지 운영·수정 가이드입니다.  
이 문서는 로컬 실행, 파일 구조, 콘텐츠 수정 위치, 디자인 수정 주의사항, 배포 전 QA를 정리하기 위한 README입니다.

---

## 1. 프로젝트 개요

**Project RE:DEFINE**은 준비중·고립 청년을 대상으로 하는 16주 여정형 프로그램 소개 랜딩페이지입니다.

랜딩페이지의 핵심 목적은 다음과 같습니다.

- 프로그램의 핵심 메시지 전달
- 신청 전 참여 희망자의 불안 완화
- 경험 트랙, Redefine Lab, 상시 프로그램 안내
- FAQ를 통한 신청 전 궁금증 해소
- 추후 Typeform 신청 링크 및 AI Guide 기능 연결
- OG 이미지, 파비콘, 모바일 공유 미리보기 대응

현재 페이지는 정적인 HTML/CSS/JS 기반으로 구성되어 있으며, Vercel을 통해 배포하는 구조입니다.

---

## 2. 기술 구성

현재 구성은 간단한 정적 웹페이지 구조입니다.

- `index.html` : 페이지 구조, 콘텐츠, 모달 데이터, FAQ, 기본 JS
- `assets/css/style.css` : 전체 스타일, 반응형, 카드/섹션 디자인
- `assets/images/` : 파비콘, OG 이미지, 앱 아이콘 등 이미지 에셋
- `site.webmanifest` : 웹앱/파비콘 관련 설정
- `README.md` : 프로젝트 운영 가이드

외부 CDN:

- Tailwind CDN
- Lucide Icon CDN
- Pretendard 웹폰트 CDN
- Google Fonts: Nanum Myeongjo

---

## 3. 폴더 구조

```txt
RE-DEFINE-LANDING/
├─ index.html
├─ README.md
├─ site.webmanifest
├─ package-lock.json
└─ assets/
   ├─ css/
   │  └─ style.css
   └─ images/
      ├─ favicon.ico
      ├─ favicon.png
      ├─ favicon-16x16.png
      ├─ favicon-32x32.png
      ├─ favicon-48x48.png
      ├─ apple-touch-icon.png
      ├─ android-chrome-192x192.png
      ├─ android-chrome-512x512.png
      ├─ og-redefine-v2.png
      └─ og-redefine.png
```

---

## 4. 로컬 실행 방법

VS Code에서 Live Server 확장을 사용하는 방식이 가장 간단합니다.

1. VS Code에서 프로젝트 폴더 열기
2. `index.html` 열기
3. 우클릭 후 **Open with Live Server**
4. 브라우저에서 `127.0.0.1:5500/index.html` 확인

수정사항이 바로 반영되지 않으면 강력 새로고침을 합니다.

```txt
Windows: Ctrl + F5
Mac: Cmd + Shift + R
```

---

## 5. 주요 섹션 구성

`index.html` 기준 주요 섹션은 다음 흐름으로 구성되어 있습니다.

```txt
1. Hero
2. Why it matters
3. About
4. What you get
5. 16-week Journey
6. Tracks & Labs
7. Always-on Programs
8. AI Guide
9. Care System
10. Expected Changes
11. Previous Signals
12. Redefine Day
13. How to Join
14. FAQ
15. Final CTA
16. Footer
17. Modal / Script
```

---

## 6. 콘텐츠 수정 가이드

### 6-1. 히어로 문구 수정

히어로 영역은 `section.hero` 안에 있습니다.

주요 수정 위치:

- 메인 제목: `.hero h1`
- 설명 문장: `.hero-lead`
- CTA 버튼: `.hero-actions`
- 핵심 정보 칩: `.hero-chips`
- 우측 포스터 카드: `.poster-card-clean`

주의사항:

- 메인 제목은 모바일에서 줄바꿈이 크게 보이므로 너무 길게 쓰지 않습니다.
- CTA 버튼은 실제 신청 링크가 확정되기 전까지 “신청 확정”처럼 보이지 않게 조심합니다.

### 6-2. 트랙·Lab 수정

경험 트랙과 Lab 영역은 `#tracks` 섹션에 있습니다.

현재 구성:

경험 트랙

- 연극치유
- 무용극
- TRPG

Redefine Lab

- Writer's Room
- Band Session
- 직장인 Lab
- 추가 Lab

주의사항:

- Writer's Room, Band Session은 유지합니다.
- 직장인 Lab과 추가 Lab은 강사 및 세부 내용 확정 후 순차 공개 톤을 유지합니다.
- Atelier, Art Journal은 현재 랜딩페이지 및 모집 홍보 구조에서 제외되어 있습니다.
- 카드 제목을 수정하면 모달 데이터도 함께 확인해야 합니다.
- 카드 클릭 시 `openModal('키값')`으로 연결되어 있으므로, 키값을 바꿀 경우 하단 `trackDetails` 데이터도 같이 수정해야 합니다.

### 6-3. 상시 프로그램 수정

상시 프로그램은 `#clubs` 섹션입니다.

현재 구성:

- 명상: 약 10주 과정
- 자조모임
- 원데이 클래스: 약 5회
- 클럽: 라이프 리듬 클럽, 소셜 클럽, 직장인 야간 클럽

주의사항:

- 카드 클릭 시 모달이 열립니다.
- `program-action`, `row-action` 스타일은 카드 내부 “자세히 보기” pill과 연결됩니다.
- 모바일에서 카드가 길어질 수 있으므로 문장은 짧게 유지합니다.
- 라이프 리듬 클럽은 아침 인증, 생활 습관 인증, 포인트 적립 연계 톤을 유지합니다.
- 소셜 클럽은 밀리의 서재, 왓챠 구독권 등을 활용한 독서/영화 감상 및 감상 나눔 톤을 유지합니다.
- 직장인 야간 클럽은 모각작 형태의 야간 모임으로 검토 중이라는 예정 톤을 유지합니다.

### 6-4. AI Guide 수정

AI Guide는 `#ai-guide` 섹션입니다.

현재 상태:

- 입력창과 버튼 UI는 있음
- 추천 결과 박스 구조 있음
- 실제 Gemini API 연동은 별도 작업 필요

주의사항:

- API Key를 프론트엔드에 직접 노출하지 않습니다.
- Gemini API 연동 시에는 서버리스 함수 또는 백엔드 프록시를 사용하는 방식이 안전합니다.
- AI Guide는 진단이나 상담이 아니라 “참고용 안내” 톤을 유지합니다.

### 6-5. FAQ 수정

FAQ는 `#faq` 섹션입니다.

현재 방향:

- 확정 참여자용 상세 FAQ는 디스코드 봇에서 처리
- 랜딩페이지 FAQ는 신청 전 일반 참여 희망자용 불안 해소 중심

FAQ 카테고리 예시:

- 신청
- 프로그램
- 운영
- 안전·기타

주의사항:

- 질문/답변 추가 시 카테고리 탭 전환이 깨지지 않는지 확인합니다.
- 답변은 2~4문장 이내로 유지합니다.
- “탈락”, “평가”보다 “참여 방식 확인”, “필요 시 인터뷰”, “최종 참여자 안내” 표현을 우선합니다.

---

## 7. 디자인 수정 가이드

### 7-1. 색상 변수

색상은 `style.css` 상단 `:root`에서 관리합니다.

```css
:root {
  --bg: #F7F1E8;
  --paper: #FFFDF8;
  --beige: #EDE1D0;
  --ink: #1F1C18;
  --muted: #6F665D;
  --line: #24211D;
  --soft-line: #D8CAB9;
  --green: #183B2D;
  --green-soft: #E3EADF;
  --orange: #D95F24;
  --orange-soft: #F3C4A8;
}
```

주의사항:

- 전체 톤은 베이지, 딥그린, 오렌지 중심입니다.
- 색을 추가하기보다 기존 변수를 활용합니다.
- 카드 테두리는 강한 선보다 그림자와 여백 중심으로 구분합니다.

### 7-2. 카드 스타일

대표 카드 스타일:

- `.soft-card`
- `.brutal-card`
- `.journey-card`
- `.row-card`
- `.grid-card`
- `.club-card`
- `.evidence-stat`
- `.voice-card`

최근 방향:

- 강한 닫힌 테두리 줄이기
- 배경, 그림자, 여백으로 구조 구분
- 중요한 CTA나 포스터 요소만 강한 브랜드 톤 유지

주의사항:

- 전역 `.soft-card`를 수정하면 거의 모든 카드에 영향이 있습니다.
- 특정 섹션만 수정하고 싶을 때는 `.journey-card.brutal-card`, `#clubs .program-card`처럼 범위를 좁혀 override합니다.

### 7-3. 모바일 스타일

모바일 스타일은 주로 `@media (max-width: 640px)` 이하에서 관리합니다.

중요 체크포인트:

- `.container` 좌우 여백
- 상단 고정바 `.nav`
- 모바일 메뉴 `.mobile-menu`
- 카드 모달 `.modal`
- FAQ 탭
- 하단 CTA
- 카드 내부 pill 정렬

### 7-4. 모달 스타일

- 모달 내부는 강한 닫힌 테두리보다 배경, 여백, 약한 그림자를 중심으로 유지합니다.
- `dashed border`는 되도록 사용하지 않습니다.
- X 버튼은 부드러운 인상을 유지하되 클릭 가능한 요소임이 보여야 합니다.

---

## 8. OG 이미지 / 파비콘

현재 OG 이미지는 아래 경로를 사용합니다.

```html
<meta property="og:image" content="https://re-define-landing.vercel.app/assets/images/og-redefine-v2.png" />
<meta name="twitter:image" content="https://re-define-landing.vercel.app/assets/images/og-redefine-v2.png" />
```

현재 사용 중인 OG 이미지 파일:

```txt
assets/images/og-redefine-v2.png
```

기존 이미지:

```txt
assets/images/og-redefine.png
```

### OG 이미지 교체 이력

- 기존 OG 이미지에는 `6월 시작` 문구가 포함되어 있었음
- 운영 문구가 `6월 중 모집`으로 변경되면서 `og-redefine-v2.png`로 교체
- Slack 공유 미리보기에서는 새 이미지 반영 확인
- 카카오톡은 기존 캐시가 남아 있을 수 있음

### 카카오톡 캐시 확인용 링크

카카오톡에서 기존 이미지가 계속 보이면 아래처럼 쿼리스트링을 붙여 확인합니다.

```txt
https://re-define-landing.vercel.app/?v=2
```

### 주의사항

- OG 이미지를 다시 교체할 때는 기존 파일을 덮어쓰기보다 새 파일명 사용을 권장합니다.
- 예: `og-redefine-v3.png`
- 파일명을 바꾼 경우 `index.html`의 `og:image`, `twitter:image` 경로도 함께 수정해야 합니다.
- 배포 후 Slack, Discord, KakaoTalk에서 공유 미리보기를 확인합니다.
- 카카오톡은 캐시가 오래 남을 수 있으므로 즉시 반영되지 않을 수 있습니다.

파비콘 관련 파일은 `assets/images/`에 있습니다.

```txt
favicon.ico
favicon.png
favicon-16x16.png
favicon-32x32.png
favicon-48x48.png
apple-touch-icon.png
android-chrome-192x192.png
android-chrome-512x512.png
```

---

## 9. 배포 전 QA 체크리스트

### 기본 기능

```txt
[ ] 상단 네비게이션 앵커 이동
[ ] 모바일 더보기 메뉴 열기/닫기
[ ] 트랙·Lab 카드 모달 열기/닫기
[ ] 상시 프로그램 카드 모달 열기/닫기
[ ] 모달 X 버튼 모바일 sticky 동작
[ ] AI Guide 입력창/버튼 깨짐 없음
[ ] FAQ 카테고리 전환
[ ] FAQ 질문 열기/닫기
[ ] FAQ 더보기 버튼
[ ] 하단 CTA 버튼 링크 상태
```

### 모바일 QA

```txt
[ ] 390px 화면 확인
[ ] 430px 화면 확인
[ ] 실제 iPhone Safari 확인
[ ] 상단 고정바가 콘텐츠를 가리지 않는지 확인
[ ] 첫 화면에서 제목과 CTA가 답답하지 않은지 확인
[ ] 카드 간 간격이 너무 좁지 않은지 확인
[ ] 모달 내부 스크롤이 자연스러운지 확인
[ ] 하단 CTA까지 스크롤했을 때 피로하지 않은지 확인
```

### 공유 미리보기

```txt
[ ] 카카오톡 링크 미리보기
[ ] 디스코드 링크 미리보기
[ ] 슬랙 링크 미리보기
[ ] 제목 확인
[ ] 설명문 확인
[ ] OG 이미지 확인
```

---

## 10. Git 작업 흐름

기본 확인:

```bash
git status
git diff --check
git diff -- index.html assets/css/style.css
```

커밋 예시:

```bash
git add index.html assets/css/style.css
git commit -m "Update application guide section"
git push -u origin HEAD
```

CSS만 수정한 경우:

```bash
git add assets/css/style.css
git commit -m "Refine card styling"
git push -u origin HEAD
```

최근 작업 방식 권장:

```txt
1. main 브랜치 최신 상태 확인
2. 작은 수정 단위로 작업
3. Live Server에서 확인
4. git diff 확인
5. 커밋
6. push 후 Vercel 배포 확인
```

---

## 11. Codex CLI 작업 시 프롬프트 기본형

Codex CLI에 작업을 맡길 때는 아래 문장을 앞에 붙이는 것을 권장합니다.

```txt
현재 main 브랜치의 최신 코드를 기준으로, 필요한 파일만 최소 범위로 수정해주세요.
```

예시:

```txt
현재 main 브랜치의 최신 코드를 기준으로, 필요한 파일만 최소 범위로 수정해주세요.

목표:
신청 안내 섹션의 문구를 더 명확하게 정리하고 싶습니다.

수정 범위:
- index.html
- 필요한 경우 assets/css/style.css

수정 방향:
1. 기존 레이아웃과 기능은 유지해주세요.
2. FAQ, 모달, AI Guide, 모바일 메뉴 기능은 건드리지 마세요.
3. 문구만 간결하게 정리해주세요.

수정 후 다음 명령으로 확인해주세요:
- git diff --check
- git diff -- index.html assets/css/style.css
- git status --short
```

---

## 12. 현재 남은 미확정 항목

아래 항목은 내부 확정 후 반영합니다.

```txt
[ ] Typeform 신청 링크
[ ] 신청 안내 폼 및 신청 링크
[ ] 모집 기간 및 선정 안내 일정
[ ] 오리엔테이션 일자
[ ] 연극치유의 리디파인 본 모집 구조 포함 여부
[ ] 긍정심리학 기반 온보딩 프로그램 세부 내용
[ ] 직장인 관련 Lab 세부 내용
[ ] 추가 Lab 강사 섭외 여부
[ ] 사용자가 직접 기획 중인 클럽 내용
[ ] Redefine Lab 최종 구성
[ ] Lab별 강사/운영 방식
[ ] AI Guide Gemini API 연동 방식
[ ] 디스코드 봇 FAQ 지식창고 구성
```

---

## 13. 수정 시 주의사항

- `index.html` 안의 모달 데이터와 카드 `openModal()` 키값을 함께 확인합니다.
- `style.css` 전역 카드 스타일을 수정하면 여러 섹션이 동시에 바뀔 수 있습니다.
- 모바일은 반드시 실제 브라우저에서 확인합니다.
- 신청 관련 문구는 확정되지 않은 날짜를 넣지 않습니다.
- 참여자에게 불안을 주는 표현보다 “함께 확인”, “필요 시 안내”, “무리 없는 참여 방식”을 사용합니다.
- 실제 신청 링크가 없을 때는 버튼이 즉시 신청 가능한 것처럼 보이지 않도록 합니다.

---

## 14. 운영 메모

현재 랜딩페이지의 역할은 “모든 정보를 다 담는 문서”가 아니라, 신청 전 참여 희망자가 프로그램의 방향을 이해하고 부담을 낮춘 상태로 사전 질문 폼까지 이동하도록 돕는 것입니다.

확정 참여자에게 필요한 세부 안내, 일정 변경, 운영 규칙, 활동별 FAQ는 추후 디스코드와 디스코드 봇을 통해 안내하는 방향이 적합합니다.

---

## 15. 보안 및 운영 권한 관리

이 랜딩페이지는 정적 HTML/CSS/JS로 배포되므로, 일반 방문자가 브라우저에서 보는 화면이나 입력값을 바꾸더라도 실제 배포된 사이트를 수정할 수는 없습니다. 실제 사이트 변경은 GitHub 저장소에 코드를 반영하거나 Vercel 배포 설정을 관리할 권한이 있는 운영자에게 달려 있습니다.

### GitHub 권한 관리

- 저장소 접근 권한은 실제 수정 업무가 필요한 운영자에게만 부여합니다.
- 운영자 변경이나 역할 종료 시 접근 권한을 바로 회수합니다.
- 배포에 반영되는 변경은 커밋과 diff를 확인한 뒤 진행합니다.

### Vercel 프로젝트 권한 관리

- Vercel 프로젝트 및 배포 설정 권한은 필요한 인원에게만 부여합니다.
- 배포 도메인, 환경변수, 연동 설정을 변경할 수 있는 계정은 별도로 점검합니다.
- 담당자가 변경되면 프로젝트 접근 권한과 연결된 계정을 함께 확인합니다.

### 비밀정보와 외부 연동

- API Key, 토큰, 비밀번호, 계정 정보는 `index.html`, JavaScript, CSS 등 프론트엔드 코드에 넣지 않습니다.
- AI Guide에 Gemini 또는 OpenAI API를 연결할 때는 브라우저가 API Key를 직접 사용하지 않도록 서버리스 함수와 환경변수를 사용합니다.
- Typeform 신청 폼을 연결하기 전에는 수집하는 개인정보, 응답 데이터 열람 권한, 중복 제출 처리 방식을 확인합니다.
- 모집 마감 후에는 Typeform 신청 링크를 계속 노출할지, 안내 문구나 링크를 어떻게 변경할지 점검합니다.

---

## 16. 최종 QA 기록

### 16-1. 현재까지 완료된 항목

```txt
[x] 로컬 Live Server 실행 확인
[x] GitHub 저장소 Mac 환경으로 clone/pull 확인
[x] 히어로 문구 확인
[x] 16주 문구 유지 확인
[x] 히어로 칩 “6월 중 모집” 반영
[x] 신청 안내 섹션 모집 흐름 보강
[x] OG 이미지 v2 제작
[x] index.html의 og:image / twitter:image v2 경로 반영
[x] Slack 공유 미리보기에서 새 OG 이미지 확인
[x] 섹션 간 연결감 보정 시도 후 원복
[x] 경험 트랙 “낭독극” → “연극치유” 명칭 및 모달 내용 정리
[x] 모달 내부 강한 테두리 스타일 완화
```

### 16-2. 추가 확인 필요 항목

```txt
[ ] 모바일 실기기 최종 확인
[ ] iPhone Safari 확인
[ ] iPhone Chrome 확인
[ ] 전체 카드 모달 클릭 확인
[ ] FAQ 카테고리 전환 확인
[ ] FAQ 더보기 확인
[ ] AI Guide UI 동작 확인
[ ] 카카오톡 공유 미리보기 재확인
[ ] Discord 공유 미리보기 확인
```

### 16-3. 기능 QA 체크 순서

최종 배포 전에는 아래 순서로 확인합니다.

```txt
1. 상단 네비게이션 앵커 이동
2. 모바일 더보기 메뉴 열기/닫기
3. 경험 트랙 카드 모달
   - 연극치유
   - 무용극
   - TRPG
4. Redefine Lab 카드 모달
   - Writer's Room
   - Band Session
   - 직장인 Lab
   - 추가 Lab
5. 상시 프로그램 카드 모달
   - 명상
   - 자조모임
   - 원데이 클래스
   - 클럽
6. 모달 닫기
   - X 버튼
   - 배경 클릭
   - ESC 키
7. AI Guide 입력 및 결과 표시
8. FAQ 카테고리 탭 전환
9. FAQ 질문 열기/닫기
10. FAQ 더보기
11. 하단 CTA 버튼 상태
12. 공유 미리보기 확인
```

---

## 16. 운영 확정 후 수정 필요 항목

아래 항목은 아직 내부 확정이 필요한 상태이므로, 확정 후 별도 커밋으로 수정합니다.

```txt
[ ] Typeform 신청 링크 연결
[ ] 실제 신청 오픈 공지 문구 확정
[ ] 신청 안내 폼 및 신청 링크 확정
[ ] 모집 기간 및 선정 안내 일정 확정
[ ] 오리엔테이션 일자 확정
[ ] 디스코드 초대 방식 확정
[ ] Redefine Lab 최종 구성 확정
[ ] Lab별 강사/운영 방식 확정
[ ] 연극치유의 리디파인 본 모집 구조 포함 여부 확정
[ ] 긍정심리학 기반 온보딩 프로그램 세부 내용 확정
[ ] 직장인 관련 Lab 세부 내용 확정
[ ] 추가 Lab 강사 섭외 여부 확정
[ ] 사용자가 직접 기획 중인 클럽 내용 확정
[ ] FAQ 내 일정 관련 문구 최종 보정
[ ] AI Guide Gemini API 연동 여부 결정
[ ] 디스코드 봇 FAQ 지식창고 구성
```

### 현재 운영 정보 기준

현재 랜딩페이지에 반영된 운영 정보는 아래 기준입니다.

```txt
- 전체 프로그램은 오리엔테이션 포함 16주
- 모집은 6월 중 시작 예정
- 신청 기간과 신청 링크는 확정 후 안내 예정
- 신청 후 온라인 온보딩과 오리엔테이션 진행 예정
- 1~3주차는 전체 참여자가 함께하는 필수 공통 온보딩 기간
- 4~13주차는 경험 트랙, Redefine Lab, 상시 프로그램 선택 기간
- 14~16주차는 리디파인 데이 준비 기간
```

주의사항:

- 위 일정은 내부 확정 전까지 “예정” 톤을 유지합니다.
- 확정 전에는 “확정”, “오픈”, “시작”처럼 단정적인 표현을 피합니다.
- “6월 시작”보다는 “6월 중 모집” 또는 “모집 예정” 표현을 사용합니다.
- 전체 여정은 오리엔테이션을 포함해 16주로 안내합니다.
- 연극치유 카드, 모달, FAQ 주의 문구, AI Guide 연극치유 추천 문구는 내부 논의가 끝날 때까지 유지합니다.

---

## 17. 마감 단계 작업 원칙

현재 랜딩페이지는 신규 디자인 작업보다 운영 정보 확정과 QA가 우선입니다.

### 지금 하지 않는 것이 좋은 작업

```txt
- 전체 레이아웃 재구성
- 섹션 순서 대폭 변경
- 전역 카드 스타일 재수정
- 섹션 간 배경 효과 추가
- 과한 애니메이션 추가
- 신청 흐름 문구의 대대적인 재작성
```

### 지금 해야 하는 작업

```txt
- 기능 QA
- 모바일 실기기 확인
- 공유 미리보기 확인
- 운영 미확정 항목 정리
- Typeform 링크 확정 후 연결
- Lab 구성 확정 후 문구 교체
```

### 되돌린 작업 기록

섹션 간 연결감을 부드럽게 만들기 위해 `style.css`에서 gradient / shadow 기반 보정을 시도했으나, 기존 디자인보다 흐릿하고 투명한 느낌이 강해져 원복했습니다.

```bash
git restore assets/css/style.css
```

현재 판단:

```txt
- 기존 섹션 구분 방식이 더 안정적
- 마감 단계에서는 애매한 시각 보정보다 원래 디자인 유지가 적합
- 이후 수정은 기능/운영 정보 중심으로 진행
```

---

## 18. 최종 마감 기준

아래 항목을 모두 확인하면 랜딩페이지 1차 제작은 마감으로 봅니다.

```txt
[ ] Typeform 링크 연결 전 상태에서 버튼 문구가 오해를 만들지 않음
[ ] 16주 문구가 전체 페이지에서 일관됨
[ ] 17주 문구가 남아 있지 않음
[ ] “6월 시작” 문구가 HTML/OG 이미지에 남아 있지 않음
[ ] OG 이미지가 `og-redefine-v2.png`로 공유됨
[ ] 모바일에서 상단바가 콘텐츠를 가리지 않음
[ ] 모달이 모바일에서 정상적으로 열리고 닫힘
[ ] FAQ 탭과 질문 더보기가 정상 동작함
[ ] 신청 안내 섹션이 예정 톤으로 안내됨
[ ] 미확정 운영 정보가 README에 기록되어 있음
```
