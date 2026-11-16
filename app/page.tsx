import { HomePage } from '@/pages/home'

/** 재직 기간처럼 날짜에 따라 달라지는 문구를 하루에 한 번 서버에서 다시 만든다(정적 호스팅이면 브라우저가 보정한다). */
export const revalidate = 86400

export default HomePage
