# 이미지·영상 처리 규격

## 저장 위치와 이름

- 위치: `public/images/projects/<슬러그>/`
- 파일명: 영문 소문자 kebab-case, 화면 내용을 설명하는 이름. 예: `storybook-table.webp`, `dashboard-rank-change.webp`
- 데이터 파일의 경로는 `/images/projects/<슬러그>/<파일명>` 형식(`public` 제외, 앞에 `/`).
- 원본 PNG/JPG/GIF는 `public/`에 넣지 않는다. 원본 파일은 수정·삭제하지 않는다.

## 스크린샷 → WebP

기존 규격: 가로 2000px(세로는 비율대로), WebP, 한 장당 대체로 100KB 안팎.

```bash
SRC="<원본 경로>"
OUT="public/images/projects/<슬러그>/<이름>.webp"
mkdir -p "$(dirname "$OUT")"

# 가로 2000px보다 크면 2000px로 줄이고, 작으면 원본 크기를 유지한다.
W=$(sips -g pixelWidth "$SRC" | awk '/pixelWidth/{print $2}')
if [ "$W" -gt 2000 ]; then
  cwebp -q 82 -resize 2000 0 "$SRC" -o "$OUT"
else
  cwebp -q 82 "$SRC" -o "$OUT"
fi

# 실제 크기 측정 (데이터 파일의 width, height에 그대로 쓴다)
sips -g pixelWidth -g pixelHeight "$OUT"
du -k "$OUT"
```

- `cwebp`가 입력 형식을 읽지 못하면(HEIC, 일부 PNG 등) 먼저 `sips -s format png "$SRC" --out /tmp/<이름>.png`로 변환한 뒤 사용한다.
- 300KB를 넘으면 `-q 75`로 낮춰 다시 만든다. 글자가 뭉개져 보이지 않는지 확인한다.
- 모바일 화면처럼 세로가 긴 이미지는 가로 1125px 정도면 충분하다(`-resize 1125 0`). 세로형(`height > width`)은 상세 헤더에서 폭이 320px로 제한되어 표시된다.

## 움직이는 화면(GIF, 화면 녹화) → MP4 + 포스터

기존 규격: H.264, 소리 없음, 가로 약 1468px, 몇 초 길이의 반복 영상. 파일 크기는 수백 KB 이하를 목표로 한다.

```bash
SRC="<원본 경로>"
OUT="public/images/projects/<슬러그>/<이름>.mp4"
POSTER="public/images/projects/<슬러그>/<이름>-poster.webp"

# 가로를 짝수로 맞추고(1468 이하), 소리 제거, 웹 스트리밍용 faststart 적용
ffmpeg -y -i "$SRC" -an -c:v libx264 -crf 28 -preset slow -pix_fmt yuv420p \
  -vf "scale='min(1468,iw)':-2" -movflags +faststart "$OUT"

# 첫 프레임을 포스터 이미지로 추출
ffmpeg -y -i "$OUT" -frames:v 1 /tmp/poster.png
cwebp -q 82 /tmp/poster.png -o "$POSTER"

# 측정
ffprobe -v error -select_streams v:0 -show_entries stream=width,height -show_entries format=duration,size -of default=nw=1 "$OUT"
```

- 영상 길이가 10초를 넘으면 사용자에게 줄이기를 제안한다.
- `width`, `height`는 **MP4의 실제 크기**를, `poster`는 `-poster.webp` 경로를 쓴다.
- 포스터는 로딩 전과 "동작 줄이기" 설정에서 보이는 정지 이미지다.

## 데이터 파일에 쓰는 형태

커버 이미지:

```ts
cover: {
  src: '/images/projects/<슬러그>/<이름>.webp',
  alt: '<화면에 무엇이 보이는지 구체적으로. 예: PlayAuto Design System의 Storybook 소개 화면. 왼쪽에 메뉴, 오른쪽에 설치 방법이 보인다.>',
  width: 2000,
  height: 1093,
},
```

하이라이트 이미지(`media`):

```ts
media: [
  {
    type: 'image',
    src: '/images/projects/<슬러그>/<이름>.webp',
    alt: '<스크린리더용 화면 설명>',
    width: 2000,
    height: 1093,
    caption: '<화면 이름. 무엇을 보여주는지 한 문장>',
  },
],
```

하이라이트 영상:

```ts
media: [
  {
    type: 'video',
    src: '/images/projects/<슬러그>/<이름>.mp4',
    poster: '/images/projects/<슬러그>/<이름>-poster.webp',
    alt: '<동작을 설명하는 문장>',
    width: 1468,
    height: 866,
    caption: '<무엇을 하면 무엇이 보이는지 한 문장>',
  },
],
```

## alt와 caption 작성

- `alt`: 화면을 못 보는 사람에게 읽어 주는 설명. "스크린샷"이라고만 쓰지 말고 화면 이름, 주요 요소, 위치를 구체적으로 쓴다. 장식용 이미지가 아니므로 비워 두지 않는다.
- `caption`: 화면 아래에 보이는 설명. "화면 이름. 보여주는 내용 한 문장." 형태.
- 화면을 직접 열어 보고 작성한다(이미지 파일을 읽어 확인). 보이지 않는 내용을 추측해서 쓰지 않는다.

## 점검

- 이미지 안에 이메일, 전화번호, 토큰, 고객 이름, 사내 URL이 보이는지 확인하고, 보이면 사용자에게 알려 가린 이미지를 다시 받는다.
- 데이터 파일에 적은 모든 `src`, `poster` 경로가 `public/` 아래 실제 파일로 존재하는지 `ls`로 확인한다.
