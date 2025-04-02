import { NavLink, useLocation } from "react-router-dom"
import { HeaderButtons, HeaderContainer, PageTitle } from "./styles"
import {
  SunDim,
  ClockCounterClockwise,
  Gear,
  Timer,
} from "@phosphor-icons/react"
import { IconButton } from "../IconButton"

// Determine the title based on the current route
const getPageTitle = (path: string) => {
  switch (path) {
    case "/history":
      return {
        title: "Histórico",
        subtitle: "Consulte os dados das sessões anteriores",
      }
    case "/settings":
      return {
        title: "Configurações",
        subtitle: "Personalize seu pomodoro",
      }
    default:
      return {
        title: "Pomodoro",
        subtitle: "Gerencie seu tempo de forma prática!",
      }
  }
}

export function Header() {
  const location = useLocation() // Get the current location
  const { title, subtitle } = getPageTitle(location.pathname) // Pass pathname to getPageTitle

  return (
    <HeaderContainer>
      <PageTitle>
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
      </PageTitle>

      <HeaderButtons>
        {location.pathname === "/" && (
          <NavLink to="/history" title="Histórico">
            <IconButton
              icon={<ClockCounterClockwise size={24} />}
              label={"Histórico"}
            />
          </NavLink>
        )}
        {location.pathname === "/history" && (
          <NavLink to="/" title="Home">
            <IconButton icon={<Timer size={24} />} label={"Home"} />
          </NavLink>
        )}
        {location.pathname === "/settings" && (
          <>
            <NavLink to="/" title="Home">
              <IconButton icon={<Timer size={24} />} label={"Home"} />
            </NavLink>
            <NavLink to="/history" title="Histórico">
              <IconButton
                icon={<ClockCounterClockwise size={24} />}
                label={"Histórico"}
              />
            </NavLink>
          </>
        )}
        {location.pathname !== "/settings" && (
          <NavLink to="/settings" title="Configurações">
            <IconButton icon={<Gear size={24} />} />
          </NavLink>
        )}
        <IconButton icon={<SunDim size={24} />} />
      </HeaderButtons>
    </HeaderContainer>
  )
}
