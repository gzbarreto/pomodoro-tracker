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
  isSessionFinished: boolean
  currentSession: Session | null
  startSession: () => void
  pauseSession: () => void
  finishSession: () => void
  setIsSessionFinished: (value: boolean) => void
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
  const [isSessionFinished, setIsSessionFinished] = useState(false)

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
    setIsSessionFinished(false)
  }

  function pauseSession(){
    setIsSessionActive(false)
    //TODO: fix logic to show play button instead of begin cylcle when paused
  }

  function finishSession() {
    setSessions((state) =>
      state.map((session) => {
        if (session.id === currentSessionId) {
          return { ...session, finishedDate: new Date() }
        }
        return session
      }),
    )
    setIsSessionActive(false)
    setIsSessionFinished(true)
  }

  return (
    <SessionContext.Provider
      value={{
        sessions,
        currentSessionId,
        currentSession,
        isSessionActive,
        isSessionFinished,
        setIsSessionFinished,
        pauseSession,
        startSession,
        finishSession,
      }}
    >
      {children}
    </SessionContext.Provider>
  )
}
