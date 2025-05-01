import { createContext, ReactNode, useState } from "react"
import { defaultTheme } from "../styles/themes/default"

export interface Mode {
  type: "focus" | "shortBreak" | "longBreak"
  duration?: number
  color?: string
}

interface ModeListContextType {
  currentMode: Mode
  nextMode: Mode
  isLastMode: boolean
  updateCurrentMode: () => void
}

interface ModeListContextProviderProps {
  children: ReactNode
}

export const ModeListContext = createContext({} as ModeListContextType)

export function ModeListContextProvider({
  children,
}: ModeListContextProviderProps) {
  //inicializa a lista de modos
  const modeList: Mode[] = [
    {
      type: "focus",
      duration: 5,
      color: defaultTheme["primary-500"].replace("#", ""),
    },
    {
      type: "shortBreak",
      duration: 3,
      color: defaultTheme["accent-500"].replace("#", ""),
    },
    {
      type: "focus",
      duration: 5,
      color: defaultTheme["primary-500"].replace("#", ""),
    },
    {
      type: "longBreak",
      duration: 5,
      color: defaultTheme["secondary-500"].replace("#", ""),
    },
  ]

  //inicializa com o ultimo estado da lista (pois o ciclo finalizou)
  const [currentModeIndex, setCurrentModeIndex] = useState(0)


  const currentMode = modeList[currentModeIndex]
  const nextMode =
    currentModeIndex < modeList.length - 1
      ? modeList[currentModeIndex + 1]
      : modeList[0]

  function updateCurrentMode() {
    // Update the current mode index, iterating or resetting to the start
    setCurrentModeIndex((prevIndex) =>
      prevIndex < modeList.length - 1 ? prevIndex + 1 : 0
    )
  }

  const isLastMode = currentModeIndex === modeList.length - 1

  return (
    <ModeListContext.Provider
      value={{
        currentMode,
        nextMode,
        isLastMode,
        updateCurrentMode,
      }}
    >
      {children}
    </ModeListContext.Provider>
  )
}
