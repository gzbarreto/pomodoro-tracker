import { BrowserRouter } from "react-router-dom"
import { Router } from './Router.tsx'

import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default.ts"
//import { lightTheme } from "./styles/themes/light.ts"
import { GlobalStyle } from "./styles/global.ts"
import { SessionContextProvider } from "./contexts/SessionContext.tsx"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <SessionContextProvider>
          <Router />
        </SessionContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
