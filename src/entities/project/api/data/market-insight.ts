import type { Project } from '../../model/types'

/**
 * @alias Market Insight 프로젝트 데이터
 * @description 국내 대기업 L사의 시장 모니터링 대시보드를 만들고, 데이터 적재와 L사 저장소 전송, 재적재 운영까지 맡은 프로젝트.
 */
export const marketInsight: Project = {
  slug: 'market-insight',
  order: 1,
  title: 'Market Insight',
  shortTitle: 'Market Insight',
  headline: '국내 대기업 L사의 시장 모니터링 대시보드를 만들고, 데이터 적재·전달 운영까지 맡은 기록',
  summary:
    '국내 대기업 L사가 자사와 경쟁사 상품의 판매·리뷰·검색 순위를 비교하는 BI 대시보드입니다. 화면 개발부터 데이터 적재 유지보수, L사 저장소 전송, 재적재 운영까지 맡았습니다.',
  background: {
    about:
      'MI(Market Insight)는 국내 대기업 L사가 시장 전반을 계속 모니터링하기 위한 BI 도구입니다. 자사 상품 모델과 경쟁사 모델의 판매, 리뷰, 검색 순위를 비교해 운영에 활용합니다. 기존 서비스보다 빠른 조회를 목표로, ClickHouse 기반의 v2를 새로 만들었습니다. 판매 데이터는 이커머스 솔루션 쪽이, 수치 정제는 같은 그룹사의 다른 회사가 맡습니다.',
    flow: [
      { label: '모델 매칭', caption: '판매 데이터에서 L사가 요청한 모델 분류' },
      { label: '수치 보정', caption: '여러 출처의 데이터를 합쳐 판매 수치를 정제' },
      { label: '적재와 집계', caption: '솔루션 쪽에서 ClickHouse에 적재하고 물리화 뷰로 집계' },
      { label: 'L사에 제공', caption: '대시보드 조회, 정제 데이터 파일 전송' },
    ],
    role: '대시보드 화면은 처음부터 전담해 만들었습니다. 데이터 적재 구조는 다른 개발자와 함께 만든 것을 이어받아 유지보수하고 있고, L사 저장소 전송 배치와 재적재 운영 화면은 직접 만들었습니다.',
  },
  company: '커넥트웨이브',
  period: '2026.02 - 진행 중',
  contributions: [
    { title: '분석 대시보드', description: '13개 화면의 필터, 차트, 공용 표' },
    { title: '적재·조회 유지보수', description: '이어받은 ClickHouse 구조의 운영과 성능 개선' },
    { title: '전송·재적재 운영', description: 'L사 저장소 전송과 재적재 요청 처리 화면' },
  ],
  responsibilities: [
    'React·ECharts 대시보드 화면 설계와 구현. AG Grid 기반 공용 표, 연동 필터, 차트',
    '이어받은 ClickHouse 적재 구조의 유지보수와 신규 기능 추가, 물리화 뷰(MV)와 테이블 구조 개선으로 조회 성능 개선',
    '판매 데이터에서 L사가 요청한 제품 모델을 찾는 매칭 알고리즘 2.0 개발',
    '외부 데이터 수신 → ClickHouse 적재 배치 운영과 ClickHouse → L사 저장소 전송 배치 구축',
    '데이터 제공처의 재적재 요청을 직접 처리하는 배치 관리·DB 재적재 관리 화면 개발. 실패 알림, 재시도, 락 관리 포함',
    '데이터 제공처·L사와 직접 소통하며 변경 요청을 조율하고 수정 사항에 신속히 대응',
  ],
  outcome:
    '기존 서비스보다 빠른 조회를 목표로 시작한 v2에서, 대용량 데이터도 조건별로 빠르게 조회하는 대시보드를 제공했습니다. 운영 중에는 정상 배치가 멈춘 것으로 오판되던 원인을 쿼리 로그 측정으로 찾아 판정 기준을 조정했습니다.',
  metrics: [
    { value: '13개', label: '대시보드 화면', caption: '판매·가격·리뷰·검색 노출 분석과 원본 데이터 다운로드', featured: true },
    { value: '4종', label: '데이터 마트', caption: '전시·판매·검색·리뷰' },
  ],
  stack: ['React', 'TypeScript', 'ECharts', 'Java', 'Spring Boot', 'ClickHouse', 'Redis', 'AWS S3'],
  cover: {
    src: '/images/projects/market-insight/dashboard-rank-change.webp',
    alt: 'Market Insight의 순위권 변동 분석 화면. 7일 전과 비교해 1~40위 순위권에 진입한 상품과 이탈한 상품을 도넛 차트 두 개로 보여준다.',
    width: 2000,
    height: 1093,
    position: 'center',
  },
  detailCover: {
    src: '/images/projects/market-insight/login-screen.webp',
    alt: 'Market Insight 서비스의 로그인 화면. 서비스 이름과 커넥트웨이브 로고 아래에 이메일과 비밀번호 입력란, 로그인 버튼이 있다.',
    width: 2000,
    height: 1093,
  },
  highlights: [
    {
      id: 'dashboard-filters',
      category: '대시보드 · 필터',
      title: '화면이 달라도 같게 동작하는 공용 표와 필터',
      lead: '카테고리·마켓·제조사 조건을 연동하고, 차트와 표의 표시 기준을 맞췄다.',
      media: [
        {
          type: 'image',
          src: '/images/projects/market-insight/filter-category-cascade.webp',
          alt: '최저가 비교 화면. 카테고리1을 주방가전으로 고른 뒤 카테고리2 목록이 열려 있고, 대상 모델과 비교 모델 선택은 카테고리를 먼저 고르라는 안내와 함께 비활성 상태다.',
          width: 2000,
          height: 1093,
          caption: '연동 필터. 카테고리1을 고르면 카테고리2 선택지가 하위 항목으로 좁혀지고, 카테고리를 고르기 전에는 모델 선택이 막힌다. 데이터가 많아 필터를 고른 뒤 [분석]을 눌러야 조회한다.',
        },
        {
          type: 'image',
          src: '/images/projects/market-insight/filter-model-select.webp',
          alt: '최저가 비교 화면. 카테고리를 고른 뒤 제조사를 선택하고, 모델 목록이 검색창과 체크박스 다중 선택으로 열려 있다.',
          width: 2000,
          height: 1093,
          caption: '모델 선택. 제조사를 고르면 해당 제조사의 모델이 검색과 다중 선택으로 열리고, 비교 모델은 제조사를 고르거나 추천을 쓸 수 있다.',
        },
      ],
      problem:
        '분석 화면이 13개이고 화면마다 표와 필터가 있다. 화면마다 따로 만들면 정렬, 고정 열, 로딩 표시가 서로 어긋나고 고칠 곳도 늘어난다. 그래서 표와 필터 동작을 공용으로 만들었다.',
      pointsStyle: 'list',
      points: [
        { title: '공용 표', description: 'AG Grid 기반 표 하나를 대부분의 분석 화면이 함께 씀. 좌측 열 고정과 접기, 그룹 행 접기, 로딩 스켈레톤을 지원하고, 접힌 행의 값이 합계처럼 보이지 않게 비움' },
        { title: '연동 필터', description: '카테고리1을 바꾸면 카테고리2 선택지를 다시 계산하고, 카테고리를 고르기 전에는 모델 선택을 막으며, 유효하지 않은 선택을 정리' },
        { title: '분석 버튼 조회', description: '데이터가 많아 필터를 바꿀 때마다 조회하지 않고, [분석]을 눌렀을 때만 적용해 불필요한 요청을 줄임' },
        { title: '모델 선택', description: '대상·비교 모델을 제조사별로 검색하고 여러 개를 고를 수 있으며, 비교 모델은 추천 모델을 쓸 수 있음' },
        { title: '상태 복원', description: '필터·탭을 URL에 기록해 새로고침하거나 화면으로 돌아와도 조회 조건을 복원' },
        { title: '차트 표현', description: 'ECharts로 추이·비중을 표현하고 제조사 정렬과 0값 표시 기준을 표와 통일' },
      ],
      flow: [
        { label: '조건 선택' },
        { label: '하위 선택지 갱신' },
        { label: '[분석]으로 조회' },
        { label: '차트·표·엑셀 출력' },
      ],
    },
    {
      id: 'query-optimization',
      category: '조회 최적화',
      title: '조건별로 집계하고 캐시해 빠르게 보여주기',
      lead: '기간·카테고리·제조사처럼 조건을 바꿔 가며 보는 화면이라 같은 조회가 반복된다. 데이터는 ClickHouse에서 미리 집계하고, 조회 조건별 결과는 Redis에 캐시해 같은 조건은 바로 보여준다.',
      media: [
        {
          type: 'image',
          src: '/images/projects/market-insight/dashboard-rank-change.webp',
          alt: '순위권 변동 화면. 7일 전과 비교해 1~40위 순위권에서 진입·이탈한 상품 수를 제조사별 도넛 차트로 보여준다.',
          width: 2000,
          height: 1093,
          caption: '조건별 조회 화면의 예. 순위권 변동처럼 기간·카테고리·제조사 조건을 바꿔 보는 화면은 조회 조건별 결과를 캐시해, 같은 조건을 다시 볼 때 바로 표시된다.',
        },
      ],
      pointsStyle: 'list',
      points: [
        { title: '집계 계층 · 물리화 뷰(MV)', description: '데이터를 적재할 때 집계 상태를 함께 쌓아 두고, 조회할 때 합쳐서 조건별 지표를 계산' },
        { title: '조회 계층 · 조건별 Redis 캐시', description: '조회 조건을 캐시 키에 넣어 같은 조건은 캐시에서, 다른 조건은 새로 계산. 만료 시간은 성격에 따라 필터 옵션 6시간, 판매 집계 1시간, 대시보드 지표 30분. 빈 결과는 캐시하지 않고, 집계 로직을 바꾸면 키 버전을 올려 옛 캐시를 쓰지 않음' },
        { title: '개선 사례 · 모델 목록', description: '제조사로 거르는데도 1.2초 이상 걸리던 모델 드롭다운을, 제조사를 정렬 기준 맨 앞에 둔 전용 MV로 옮겨 전체 스캔을 피함. 밀리초 단위 응답을 목표로 했고, 기존 경로를 대체 경로로 남겨 무중단으로 적용' },
        { title: '재적재 정합성', description: '일자 재적재 때 원본 테이블과 연결된 MV의 해당 일자를 함께 지운 뒤 다시 적재' },
      ],
      flow: [
        { label: '원본 적재' },
        { label: 'MV 집계' },
        { label: '조건별 API 조회' },
        { label: 'Redis 결과 캐시' },
      ],
    },
    {
      id: 'model-matching',
      category: '모델 매칭',
      title: '상품명 잡음 속에서 모델 코드를 찾는 절차',
      lead: '판매 데이터의 여러 필드를 단계적으로 대조하고, 근거가 부족하거나 후보가 겹치면 매칭하지 않는다.',
      problem:
        '판매 데이터에는 모델명, SKU, 상품명, 선택 모델 필드가 있지만 L사 모델 코드가 표기법과 위치가 제각각 섞여 들어온다. 한 필드만 비교해서는 모델을 안정적으로 찾을 수 없다. 기존 매칭 방식을 이어받아 2.0으로 다시 만들었다.',
      pointsStyle: 'steps',
      points: [
        { title: '모델 코드 색인', description: 'L사 모델 목록의 코드를 토큰으로 쪼개 미리 색인(역색인)하고, 괄호 앞 본체 코드도 따로 색인' },
        { title: '본체 코드 우선', description: '모델명·SKU·선택 모델 필드에서 다른 모델과 겹치지 않는 본체 코드를 먼저 확인' },
        { title: '필드별 후보 탐색', description: '모델명 → SKU → 상품명 → 선택 모델 순서로 후보를 하나씩 검증' },
        { title: '가중 점수 보정', description: '한 필드로 정해지지 않으면 네 필드의 토큰 근거를 가중 합산해 점수화' },
        { title: '모호한 결과 제외', description: '최소 점수에 못 미치거나 1·2위 점수 차가 작으면 임의 모델을 고르지 않음' },
      ],
      tradeoff: {
        gain: '임의 모델을 고르지 않아 오매칭을 피한다.',
        cost: '근거가 부족하거나 후보가 겹치는 상품은 매칭하지 않고 남긴다. 실패 건은 사유와 함께 에러 로그(ZIP)로 내려받아 확인한다.',
      },
      note: {
        label: '구현 중 보완',
        text: '세트상품의 다중 SKU를 분리하고, 상품명의 수량형 토큰은 낮게 평가했다.',
      },
    },
    {
      id: 's3-pipeline',
      category: '데이터 파이프라인',
      title: '수신한 원본에서 L사 저장소 전달까지',
      lead: '외부에서 받은 데이터를 보존하며 ClickHouse에 적재하고, 적재가 끝난 데이터만 L사 저장소에 파일로 올린다.',
      pointsStyle: 'steps',
      points: [
        { title: '수집', description: '날짜별 파일을 읽고 내부 저장소에도 보관해, 과거 일자를 다시 적재할 수 있게 함' },
        { title: '집계', description: '전시·판매·검색·리뷰 데이터를 적재하고 분석용 물리화 뷰를 갱신' },
        { title: '전송', description: 'L사가 정한 형식으로 ClickHouse에서 파일을 만들어 L사 저장소에 업로드' },
        { title: '완료 표시', description: '파일 업로드가 끝난 뒤에만 행 수를 적은 확인 파일을 올려, L사의 후속 처리가 덜 올라온 파일을 읽지 않게 함' },
        { title: '스케줄 일원화', description: '백엔드 서버가 여러 대로 늘어도 같은 배치가 중복 실행되지 않도록, 서버 내부 스케줄 대신 별도 스케줄러가 호출' },
      ],
      flow: [
        { label: '수신 원본', caption: '날짜별 파일 · 내부 백업' },
        { label: 'ClickHouse 적재', caption: '원본 테이블 + 집계 뷰' },
        { label: 'L사 저장소', caption: '데이터 파일 + 확인 파일' },
      ],
      note: {
        label: '미완료 데이터 처리',
        text: '그날 데이터 적재가 끝나지 않았으면 L사로 보내지 않고, 건너뜀(SKIPPED) 이력과 알림을 남겨 보류한다.',
      },
    },
    {
      id: 'batch-operations',
      category: '배치 운영',
      title: '재적재를 운영 화면으로 풀고, 배치 멈춤 오판의 원인을 추적',
      lead: '정기 실행, 자동 복구, 관리자 재적재를 같은 이력에서 추적하고 필요한 일자만 다시 처리한다. 운영 중 정상 배치가 멈춘 것으로 오판되는 문제는 측정으로 원인을 찾았다.',
      problem:
        '데이터 제공처가 머신러닝으로 판매 수치를 계속 보정하기 때문에, 이미 적재한 일자의 원본이 바뀌어 다시 적재해 달라는 요청이 반복해서 온다. 요청마다 개발자가 직접 명령을 실행하는 방식은 시간이 걸리고 실수하기 쉬워서, 화면에서 바로 처리하도록 만들었다.',
      media: [
        {
          type: 'image',
          src: '/images/projects/market-insight/batch-overview.webp',
          alt: '배치 관리 화면. 마트 데이터, 판매 데이터, L사 전송 배치의 오늘 실행 결과가 카드로 모여 있다.',
          width: 2000,
          height: 1093,
          caption: '배치 관리. ETL 배치별 오늘 실행 결과와 세부 작업 상태를 한 화면에서 확인한다.',
        },
        {
          type: 'image',
          src: '/images/projects/market-insight/batch-manual-run.webp',
          alt: '배치 수동 실행 화면. 배치별로 대상 일자나 기간을 고르고 실행 버튼을 누를 수 있다.',
          width: 2000,
          height: 1093,
          caption: '배치 수동 실행. 실패한 배치를 대상 일자나 기간만 골라 다시 실행하고, 아래 실행 이력에서 결과를 확인한다.',
        },
        {
          type: 'image',
          src: '/images/projects/market-insight/db-reload.webp',
          alt: 'DB 재적재 관리 화면. 데이터 유형과 기간을 골라 재적재하거나 마스터 데이터를 동기화한다.',
          width: 2000,
          height: 1093,
          caption: 'DB 재적재 관리. 데이터 유형과 기간 또는 지정 일자로 재적재하고, 실행 이력에서 재시도·작업 중단·락 강제 해제를 제어한다.',
        },
      ],
      pointsStyle: 'list',
      points: [
        { title: '자동 복구', description: '배치가 실패하면 즉시 재시도하고, 멈춘 배치는 주기적으로 점검해 복구하며, 타입별 실행 결과를 기록' },
        { title: '선택 재적재', description: '문제가 난 날짜만 골라 실행하고, 사유 입력과 진행 상태를 남김' },
        { title: '기존 데이터 보호', description: '수신 파일을 내려받아 내부 저장소에 올린 것을 확인한 뒤에만 기존 데이터를 지움. 다운로드가 실패해도 날짜가 빈 채로 남지 않음' },
        { title: '두 단계 중단과 락', description: '진행 중인 일자 묶음까지 마치고 멈추는 안전 종료와 즉시 멈추는 강제 중단을 구분. 같은 종류의 재적재가 동시에 돌지 않게 락을 두고, 비정상 종료로 락이 남으면 화면에서 강제 해제' },
      ],
      flow: [
        { label: '스케줄러 호출' },
        { label: '백엔드 비동기 처리' },
        { label: '실행 이력·알림' },
        { label: '필요한 범위만 복구' },
      ],
      comparison: {
        label: '배치 멈춤 판정 기준',
        before: '8분',
        after: '20분',
        caption: '정상 실행 1회 약 9분 중 95%가 외부 파일 다운로드였다',
      },
      outcome: '정상 배치가 멈춘 것으로 오판되어 강제 종료되던 문제를, 쿼리 로그로 구간별 시간을 측정해 원인(외부 파일 다운로드)을 찾고 판정 기준을 조정해 해결했다.',
    },
  ],
}
