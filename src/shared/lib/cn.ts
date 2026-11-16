import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * @alias 클래스명 병합
 * @description 조건부 클래스를 합치고 Tailwind 클래스 충돌을 마지막 값 기준으로 정리한다.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
