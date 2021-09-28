import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      violet: string
      violetLight: string
      green: string
      red: string
      white: string
      title: string
      text: string
      background: string
      inputBorder: string
      inputBackground: string
      buttonBorder: string
    }
  }
}
