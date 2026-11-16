'use client'

import { Component, type ErrorInfo, type ReactNode } from 'react'
import { ErrorFallback } from './ErrorFallback'

/**
 * @alias 에러 바운더리 속성
 * @description 하위 렌더링 오류를 격리하는 컴포넌트의 속성.
 */
export interface ErrorBoundaryProps {
  children: ReactNode
  /** 오류 시 안내 문구에 쓰일 영역 이름 */
  label?: string
  /** 섹션 단위 오류일 때 앵커 유지를 위한 섹션 id */
  sectionId?: string
}

interface ErrorBoundaryState {
  error: Error | null
}

/**
 * @alias 에러 바운더리
 * @description 자식 트리에서 던져진 오류를 잡아 해당 영역만 대체 화면으로 바꾸고, 나머지 페이지는 그대로 유지한다.
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { error: null }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    // 모니터링 도구(Sentry 등)를 붙일 경우 이 지점에서 전송한다.
    console.error(`[ErrorBoundary:${this.props.label ?? 'unknown'}]`, error, info.componentStack)
  }

  private reset = (): void => {
    this.setState({ error: null })
  }

  render(): ReactNode {
    if (this.state.error) {
      return <ErrorFallback label={this.props.label} sectionId={this.props.sectionId} onRetry={this.reset} />
    }
    return this.props.children
  }
}
