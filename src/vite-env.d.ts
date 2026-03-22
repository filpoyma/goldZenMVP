/// <reference types="vite/client" />

declare module '*.svg' {
  import type { ComponentProps, FunctionComponent } from 'react'

  type TSvgComponentProps = ComponentProps<'svg'> & {
    title?: string
    titleId?: string
    desc?: string
    descId?: string
  }

  const ReactComponent: FunctionComponent<TSvgComponentProps>
  export default ReactComponent
}

declare module '*.svg?react' {
  import type { ComponentProps, FunctionComponent } from 'react'

  type TSvgComponentProps = ComponentProps<'svg'> & {
    title?: string
    titleId?: string
    desc?: string
    descId?: string
  }

  const ReactComponent: FunctionComponent<TSvgComponentProps>
  export default ReactComponent
}
