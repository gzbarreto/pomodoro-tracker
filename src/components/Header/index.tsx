import { HeaderButtons, HeaderContainer, PageTitle } from "./styles"

export function Header() {
  return (
    <HeaderContainer>
      <PageTitle>
        <h1>Pomodoro</h1>
        <h4>Gerencie seu tempo de maneira mágica!</h4>
      </PageTitle>

      <HeaderButtons>
        <button>historico</button>
        <button>tema</button>
      </HeaderButtons>
    </HeaderContainer>
  )
}
