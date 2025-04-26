import { createContext, ReactNode, useState } from "react"

// interface Task {
//   id: string
//   task: string
//   state: boolean
// }

interface Session {
  id: string
  // task: Task[]
  startDate?: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface SessionContextType {
  sessions: Session[]
  currentSessionId: string
  isSessionActive: boolean
  currentSession: Session | null
  startSession: () => void
  pauseSession: () => void
}

interface CyclesContextProviderProps {
  children: ReactNode
}

export const SessionContext = createContext({} as SessionContextType)

export function SessionContextProvider({
  children,
}: CyclesContextProviderProps) {

  const [sessions, setSessions] = useState<Session[]>([])
  const [currentSessionId, setcurrentSessionId] = useState("")
  const [isSessionActive, setIsSessionActive] = useState(false)

  const currentSession =
    sessions.find((session) => session.id === currentSessionId) || null

  function startSession() {
    const newSession: Session = {
      id: String(new Date().getTime()),
      // task: [],
      startDate: new Date(),
    }
    setSessions((state) => [...state, newSession])
    setcurrentSessionId(newSession.id)
    setIsSessionActive(true)
  }

  function pauseSession(){
    setIsSessionActive(false)
  }

  return (
    <SessionContext.Provider
      value={{
        sessions,
        currentSessionId,
        currentSession,
        isSessionActive,
        pauseSession,
        startSession,
      }}
    >
      {children}
    </SessionContext.Provider>
  )
}
