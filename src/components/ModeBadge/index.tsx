import { Brain, Coffee } from "@phosphor-icons/react"
import { ModeBadgeFocus, ModeBadgeLongBreak, ModeBadgeShortBreak } from "./styles"
import { Mode } from "../../contexts/ModeListContext"

export function ModeBadge({ type }: Mode) {
  switch (type) {
    case "focus":
      return (
        <ModeBadgeFocus>
          <Brain size={16} />
          <p>Foco</p>
        </ModeBadgeFocus>
      )
    case "shortBreak":
      return (
        <ModeBadgeShortBreak>
          <Coffee size={16} />
          <p>Pausa Curta</p>
        </ModeBadgeShortBreak>
      )
    case "longBreak":
      return (
        <ModeBadgeLongBreak>
          <Coffee size={16} />
          <p>Pausa longa</p>
        </ModeBadgeLongBreak>
      )
  }
}
