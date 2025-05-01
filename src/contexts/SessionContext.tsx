import { createContext, ReactNode, useReducer } from "react"

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

interface SessionState {
  sessions: Session[]
  currentSessionId: string
  isSessionActive: boolean
  isSessionFinished: boolean
  isSessionPaused: boolean
}

export const SessionContext = createContext({} as SessionContextType)

export function SessionContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [sessionsState, dispatch] = useReducer(
    (state: SessionState, action: any) => {
      switch (action.type) {
        case "START_SESSION":
          return {
            ...state,
            sessions: [...state.sessions, action.payload],
            currentSessionId: action.payload.id,
            isSessionActive: true,
            isSessionFinished: false,
          }

        case "PAUSE_SESSION":
          return {
            ...state,
            isSessionPaused: true,
          }

        case "RESUME_SESSION":
          return {
            ...state,
            isSessionPaused: false,
          }

        case "FINISH_SESSION":
          return {
            ...state,
            sessions: state.sessions.map((session) => {
              if (session.id === action.payload) {
                return { ...session, finishedDate: new Date() }
              }
              return session
            }),
            isSessionActive: false,
            isSessionFinished: true,
          }

        case "RESTART_SESSION":
          return {
            ...state,
            isSessionFinished: false,
          }

        default:
          return state
      }
    },
    {
      sessions: [],
      currentSessionId: "",
      isSessionActive: false,
      isSessionFinished: false,
      isSessionPaused: false,
    }
  )

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
    dispatch({
      type: "START_SESSION",
      payload: newSession,
    })
  }

  function pauseSession() {
    dispatch({
      type: "PAUSE_SESSION",
    })
  }

  function resumeSession() {
    dispatch({
      type: "RESUME_SESSION",
    })
  }

  function finishSession() {
    dispatch({
      type: "FINISH_SESSION",
      payload: currentSessionId,
    })
  }

   function restartSession() {
     dispatch({
       type: "RESTART_SESSION",
     })
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
