import { createContext, ReactNode, useState } from "react"
import { defaultTheme } from "../styles/themes/default"

// interface Task {
//   id: string
//   task: string
//   state: boolean
// }

export interface Mode {
  type: "focus" | "shortBreak" | "longBreak"
  duration?: number
  color?: string
}

interface Session {
  id: string
  // task: Task[]
  modeList: Mode[]
  startDate?: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface SessionContextType {
  sessions: Session[]
  currentSessionId: string
  sessionCurrentMode: number //index of mode array
  isSessionActive: boolean
  currentSession: Session
  startSession: () => void
  completeCycle: () => void
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

  const defaultSession = {
    id: "",
    // task: [],
    modeList: [
      {
        type: "longBreak",
        duration: 0,
        color: defaultTheme["primary-500"].replace("#", ""),
      },
      {
        type: "focus",
        duration: 10,
        color: defaultTheme["primary-500"].replace("#", ""),
      },
    ],
  }

  const [sessions, setSessions] = useState<Session[]>([])
  const [currentSessionId, setcurrentSessionId] = useState("")
  const [sessionCurrentMode, setSessionCurrentMode] = useState(0)
  const [isSessionActive, setIsSessionActive] = useState(false)

  const currentSession =
    sessions.find((session) => session.id === currentSessionId) ||
    defaultSession

  function startSession() {
    const newSession: Session = {
      id: String(new Date().getTime()),
      // task: [],
      modeList: sessionsMode,
      startDate: new Date(),
    }
    setSessions((state) => [...state, newSession])
    setcurrentSessionId(newSession.id)
    setSessionCurrentMode(0)
    setIsSessionActive(true)
  }

  function completeCycle() {
    //testa se o próximo modo é o último

    if (sessionCurrentMode === currentSession.modeList.length) {
      // Update the finishedDate of the current session
      setSessions((state) =>
        state.map((session) =>
          session.id === currentSessionId
            ? { ...session, finishedDate: new Date() }
            : session
        )
      )
      setIsSessionActive(false)
      setcurrentSessionId("") // Reset current session ID
      setSessionCurrentMode(0) // Reset current mode index
    } else {
      //se não for o último, incrementa o modo atual e o próximo
      setSessionCurrentMode((state) => state + 1)
      console.log(sessionCurrentMode)
    }
  }

  return (
    <SessionContext.Provider
      value={{
        sessions,
        currentSessionId,
        sessionCurrentMode,
        startSession,
        isSessionActive,
        currentSession,
        completeCycle,
      }}
    >
      {children}
    </SessionContext.Provider>
  )
}
