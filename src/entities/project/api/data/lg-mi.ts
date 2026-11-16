import type { Project } from '../../model/types'

/**
 * @alias LG MI 프로젝트 데이터
 * @description 모델 매칭부터 조회·역납품까지 데이터 흐름 전체를 만든 프로젝트.
 */
export const lgMi: Project = {
  slug: 'lg-mi',
  order: 1,
  title: 'LG MI (Market Intelligence)',
  shortTitle: 'LG MI',
  headline: '모델 매칭부터 조회·역납품까지, 데이터 흐름 전체를 만든 기록',
  summary:
    'LG전자 MI 대시보드와 데이터 적재 파이프라인을 개발했습니다. ClickHouse 물리화 뷰와 Redis 캐시로 조건별 조회를 구현하고, 모델 매칭 알고리즘과 배치 운영 도구까지 직접 만들었습니다.',
  company: '커넥트웨이브',
  period: '2026.02 - 진행 중',
  contributions: [
    { title: '분석 대시보드', description: '연동 필터와 URL 상태 복원, ECharts 차트' },
    { title: '데이터 마트', description: 'ClickHouse 물리화 뷰와 Redis 결과 캐시' },
    { title: '배치 운영', description: '재시도·재적재·관리자 수동 실행 화면' },
  ],
  responsibilities: [
    'React·ECharts 대시보드의 판매·가격 차트와 필터 구현',
    '전시·판매·검색·리뷰 데이터 마트에 ClickHouse 물리화 뷰(MV)·Redis 캐시를 적용해 조건별 조회 구현',
    '플레이오토 판매데이터에서 LG전자가 요청한 제품 모델을 매칭하는 알고리즘 개발',
    '다나와 S3 → ClickHouse → LG전자 S3 배치 파이프라인 구축',
    '배치 실패 알림·재시도 및 데이터 변경 시 재적재·관리자 수동 실행 기능 구현',
    '다나와·LG전자와 직접 소통하며 변경 요청을 조율하고 수정 사항에 신속히 대응',
  ],
  outcome: '대용량 데이터 마트에서도 조건별 지표를 기존 v1 서비스보다 빠르게 조회할 수 있는 대시보드를 제공했습니다.',
  metrics: [
    { value: '4종', label: '데이터 마트', caption: '전시·판매·검색·리뷰', featured: true },
    { value: '5단계', label: '모델 매칭 절차', caption: '근거가 부족하면 매칭하지 않음' },
  ],
  stack: ['React', 'TypeScript', 'ECharts', 'Java', 'Spring Boot', 'ClickHouse', 'Redis', 'AWS S3'],
  cover: {
    src: '/images/projects/lg-mi/dashboard-rank-change.webp',
    alt: 'LG MI 대시보드의 순위권 변동 화면. 7일 전과 비교해 순위권에 진입한 상품과 이탈한 상품을 제조사별 도넛 차트로 보여준다.',
    width: 2000,
    height: 1093,
  },
  highlights: [
    {
      id: 'dashboard-filters',
      category: '대시보드 · 필터',
      title: '조건이 많아도 일관되게 조회되는 대시보드',
      lead: '카테고리·마켓·제조사 조건을 연동하고, 차트와 표의 표시 기준을 맞췄다.',
      media: [
        {
          type: 'image',
          src: '/images/projects/lg-mi/dashboard-model-compare.webp',
          alt: '대상 모델과 비교 모델을 고르는 화면. 동일 카테고리와 주스펙을 가진 후보 모델이 제조사별로 나열된다.',
          width: 2000,
          height: 1093,
          caption: '대상·비교 모델 선택. 동일 카테고리·주스펙 후보를 제조사별로 보여주고, 클릭하면 비교 모델에 담긴다.',
        },
        {
          type: 'image',
          src: '/images/projects/lg-mi/dashboard-rank-change.webp',
          alt: '순위권 변동 화면. 7일 전과 비교해 1~40위 순위권에서 진입·이탈한 상품 수를 제조사별 도넛 차트로 보여준다.',
          width: 2000,
          height: 1093,
          caption: '순위권 변동. 7일 전과 비교해 순위권에 진입·이탈한 상품을 제조사별 도넛 차트로 보여준다.',
        },
      ],
      pointsStyle: 'list',
      points: [
        { title: '연동 필터', description: '상위 카테고리를 바꾸면 하위 선택지를 다시 계산하고, 유효하지 않은 선택을 정리' },
        { title: '상태 복원', description: '필터·탭을 URL에 기록해 새로고침하거나 화면으로 돌아와도 조회 조건을 복원' },
        { title: '차트 표현', description: 'ECharts로 추이·비중을 표현하고 제조사 정렬과 0값 표시 기준을 표와 통일' },
        { title: '엑셀 출력', description: '화면에서 고른 지표와 정렬 기준을 내보내기에도 반영' },
      ],
      flow: [
        { label: '조건 선택' },
        { label: '유효성 정리' },
        { label: 'API 조회' },
        { label: '차트·표·엑셀 출력' },
      ],
    },
    {
      id: 'query-optimization',
      category: '조회 최적화',
      title: '집계는 ClickHouse, 반복 조회는 Redis',
      lead: '전시·판매·검색·리뷰 데이터는 집계 테이블로 읽고, 자주 쓰는 결과에 만료 시간을 적용했다.',
      pointsStyle: 'list',
      points: [
        { title: '집계 계층 · ClickHouse 물리화 뷰', description: 'Fact 적재 시 State 집계를 쌓고, 조회에서 Merge해 조건별 지표를 계산' },
        { title: '조회 계층 · Redis 결과 캐시', description: '판매 집계는 1시간, 공통 필터는 6시간 등 조회 성격에 따라 TTL을 설정' },
        { title: '재적재 정합성', description: '일자 재적재 때 Fact와 연결된 MV의 해당 일자를 함께 지운 뒤 다시 적재' },
      ],
      flow: [
        { label: 'Fact 적재' },
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
      pointsStyle: 'steps',
      points: [
        { title: '마스터 역색인', description: '모델 코드의 정규화 토큰과 본체 코드를 인덱스로 구성' },
        { title: '본체 코드 우선', description: 'modelName·SKU·선택 모델 필드에서 고유한 본체 코드를 먼저 확인' },
        { title: '필드별 후보 탐색', description: '모델명 → SKU → 상품명 → 선택 모델 순서로 개별 후보를 검증' },
        { title: '가중 점수 보정', description: '단일 필드가 실패하면 네 필드의 토큰 근거를 가중 합산' },
        { title: '모호한 결과 제외', description: '동점 또는 점수·격차 기준 미달이면 임의 모델을 고르지 않음' },
      ],
      tradeoff: {
        gain: '임의 모델을 고르지 않아 오매칭을 피한다.',
        cost: '근거가 부족하거나 후보가 겹치는 상품은 매칭하지 않고 남긴다.',
      },
      note: {
        label: '구현 중 보완',
        text: '세트상품의 다중 SKU를 분리하고, 상품명의 수량형 토큰은 낮게 평가했다.',
      },
    },
    {
      id: 's3-pipeline',
      category: '데이터 파이프라인',
      title: '다나와 원본에서 LG 납품 파일까지',
      lead: '원본을 보존하며 ClickHouse에 적재하고, 선행 작업이 끝난 데이터만 LG S3로 전송한다.',
      pointsStyle: 'steps',
      points: [
        { title: '수집', description: '날짜별 Parquet 파트를 읽고 내부 S3에도 보관해 과거분 재적재에 대비' },
        { title: '집계', description: '전시·판매·검색·리뷰 Fact를 적재하고 분석용 물리화 뷰를 갱신' },
        { title: '검증', description: '선행 적재 완료를 확인하고 Parquet footer의 실제 행 수를 .chk에 기록' },
      ],
      flow: [
        { label: '다나와 S3 원본', caption: '파트 파일 · 원본 백업' },
        { label: 'ClickHouse 적재', caption: 'Fact + 집계 뷰' },
        { label: 'LG전자 S3', caption: 'Parquet + .chk' },
      ],
      outcome: '미완료 데이터의 역납품은 SKIPPED 이력과 알림으로 보류한다.',
    },
    {
      id: 'batch-operations',
      category: '배치 운영',
      title: '실패를 다시 처리할 수 있게 만든 운영 화면',
      lead: '정기 실행·자동 복구·관리자 재적재를 같은 이력에서 추적하고 필요한 일자만 다시 처리한다.',
      media: [
        {
          type: 'image',
          src: '/images/projects/lg-mi/batch-overview.webp',
          alt: '배치 관리 화면. 마트 데이터, 판매 데이터, 역납품 ETL 배치의 오늘 실행 결과가 카드로 모여 있다.',
          width: 2000,
          height: 1093,
          caption: '배치 관리. ETL 배치별 오늘 실행 결과와 세부 작업 상태를 한 화면에서 확인한다.',
        },
        {
          type: 'image',
          src: '/images/projects/lg-mi/batch-manual-run.webp',
          alt: '배치 수동 실행 화면. 배치별로 대상 일자나 기간을 고르고 실행 버튼을 누를 수 있다.',
          width: 2000,
          height: 1093,
          caption: '배치 수동 실행. 실패한 배치를 대상 일자나 기간만 골라 다시 실행하고, 아래 실행 이력에서 결과를 확인한다.',
        },
        {
          type: 'image',
          src: '/images/projects/lg-mi/db-reload.webp',
          alt: 'DB 재적재 관리 화면. 데이터 유형과 기간을 골라 재적재하거나 마스터 데이터를 동기화한다.',
          width: 2000,
          height: 1093,
          caption: 'DB 재적재 관리. 데이터 유형과 기간 또는 지정 일자로 재적재하고, 실행 이력에서 재시도·작업 중단·락 강제 해제를 제어한다.',
        },
      ],
      pointsStyle: 'list',
      points: [
        { title: '자동 복구', description: '배치 실패 후 즉시 재시도와 점검 창을 두고, 타입별 실행 결과를 기록' },
        { title: '선택 재적재', description: '문제가 난 날짜만 골라 실행하고, 사유 입력과 진행 상태를 남김' },
        { title: '관리자 제어', description: '수동 실행·재시도·취소·락 해제와 S3 구조 확인을 화면에서 제공' },
        { title: '일정 충돌 방지', description: '이틀 전 원본 데이터 적재, LG전자 원본 데이터 전송, 하루 전 전시 데이터 적재 순서로 선행 관계를 반영' },
      ],
      flow: [
        { label: '스케줄러 호출' },
        { label: '백엔드 비동기 처리' },
        { label: '실행 이력·알림' },
        { label: '필요한 범위만 복구' },
      ],
    },
  ],
}
