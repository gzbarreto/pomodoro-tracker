import { createContext, ReactNode, useState } from "react"
import { defaultTheme } from "../styles/themes/default"

// interface Task {
//   id: string
//   task: string
//   state: boolean
// }

interface Mode {
  type: "focus" | "shortBreak" | "longBreak"
  duration: number
  color: string
}

interface Session {
  id: string
  // task: Task[]
  modeList: Mode[]
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface SessionContextType {
  sessions: Session[]
  activeSessionId: string | null
  sessionCurrentMode: number //index of mode array
  isSessionActive: boolean
  startSession: () => void
  // pauseSession: () => void
}

interface CyclesContextProviderProps {
  children: ReactNode
}

export const SessionContext = createContext({} as SessionContextType)

export function SessionContextProvider({
  children,
}: CyclesContextProviderProps) {
  //inicializa a lista de modos padrao
  const sessionsMode: Mode[] = [
    {
      type: "focus",
      duration: 25,
      color: defaultTheme["primary-500"].replace("#", ""),
    },
    {
      type: "shortBreak",
      duration: 5,
      color: defaultTheme["secondary-500"].replace("#", ""),
    },
    {
      type: "longBreak",
      duration: 15,
      color: defaultTheme["accent-500"].replace("#", ""),
    },
  ]

  const [sessions, setSessions] = useState<Session[]>([])
  const [activeSessionId, setActiveSessionId] = useState("")
  const [sessionCurrentMode, setSessionCurrentMode] = useState(0)
  const [isSessionActive, setIsSessionActive] = useState(false)

  function startSession() {
    const newSession: Session = {
      id: String(new Date().getTime()),
      // task: [],
      modeList: sessionsMode,
      startDate: new Date(),
    }
    setSessions((state) => [...state, newSession])
    setActiveSessionId(newSession.id)
    setSessionCurrentMode(0)
    setIsSessionActive(true)
  }

  return (
    <SessionContext.Provider
      value={{
        sessions,
        activeSessionId,
        sessionCurrentMode,
        startSession,
        isSessionActive,
      }}
    >
      {children}
    </SessionContext.Provider>
  )
}
