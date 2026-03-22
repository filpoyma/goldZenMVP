/// <reference types="vite/client" />

import type { ComponentProps, FunctionComponent } from 'react'

type TSvgComponentProps = ComponentProps<'svg'> & {
  title?: string
  titleId?: string
  desc?: string
  descId?: string
}

declare module '*.svg' {
  const ReactComponent: FunctionComponent<TSvgComponentProps>
  export default ReactComponent
}

declare module '*.svg?react' {
  const ReactComponent: FunctionComponent<TSvgComponentProps>
  export default ReactComponent
}

export {}
