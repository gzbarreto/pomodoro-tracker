import { createContext, ReactNode, useReducer } from "react"
import { Session, sessionsReducer } from "../reducers/session/reducer"
import {
  finishSessionAction,
  pauseSessionAction,
  restartSessionAction,
  resumeSessionAction,
  startSessionAction,
} from "../reducers/session/actions"

// interface Task {
//   id: string
//   task: string
//   state: boolean
// }

interface SessionContextType {
  sessions: Session[]
  currentSessionId: string
  isSessionActive: boolean
  isSessionFinished: boolean
  isSessionPaused: boolean
  currentSession: Session | null
  startSession: () => void
  pauseSession: () => void
  resumeSession: () => void
  finishSession: () => void
  restartSession: () => void
}

interface CyclesContextProviderProps {
  children: ReactNode
}

export const SessionContext = createContext({} as SessionContextType)

export function SessionContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [sessionsState, dispatch] = useReducer(sessionsReducer, {
    sessions: [],
    currentSessionId: "",
    isSessionActive: false,
    isSessionFinished: false,
    isSessionPaused: false,
  })

  const {
    sessions,
    currentSessionId,
    isSessionActive,
    isSessionFinished,
    isSessionPaused,
  } = sessionsState

  const currentSession =
    sessions.find((session) => session.id === currentSessionId) || null

  function startSession() {
    const newSession: Session = {
      id: String(new Date().getTime()),
      // task: [],
      startDate: new Date(),
    }
    dispatch(startSessionAction(newSession))
  }

  function pauseSession() {
    dispatch(pauseSessionAction())
  }

  function resumeSession() {
    dispatch(resumeSessionAction())
  }

  function finishSession() {
    dispatch(finishSessionAction(currentSessionId))
  }

  function restartSession() {
    dispatch(restartSessionAction())
  }

  return (
    <SessionContext.Provider
      value={{
        sessions,
        currentSessionId,
        currentSession,
        isSessionActive,
        isSessionFinished,
        isSessionPaused,
        pauseSession,
        resumeSession,
        startSession,
        finishSession,
        restartSession,
      }}
    >
      {children}
    </SessionContext.Provider>
  )
}
