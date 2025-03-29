import { NavLink } from "react-router-dom"
import { HeaderButtons, HeaderContainer, PageTitle } from "./styles"
import { SunDim, ClockCounterClockwise } from "@phosphor-icons/react"
import { IconButton } from "../IconButton"
export function Header() {
  return (
    <HeaderContainer>
      <PageTitle>
        <h1>Pomodoro</h1>
        <h4>Gerencie seu tempo de maneira mágica!</h4>
      </PageTitle>

      <HeaderButtons>
        <NavLink to="/history" title="Histórico">
          <IconButton
            icon={<ClockCounterClockwise size={24} />}
            label={"Histórico"}
          />
        </NavLink>
        <IconButton icon={<SunDim size={24} />}/>
      </HeaderButtons>
    </HeaderContainer>
  )
}
