import { createContext, ReactNode, useReducer } from "react"
import { Session, sessionsReducer, Task } from "../reducers/session/reducer"
import {
  addTaskAction,
  clickTaskAction,
  finishSessionAction,
  pauseSessionAction,
  restartSessionAction,
  resumeSessionAction,
  startSessionAction,
} from "../reducers/session/actions"

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
  addTask: (newTask: Task, currentSessionId: string) => void
  clickTask: (taskId: string, currentSessionId: string) => void
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

  //TODO: create an initial session so it can add tasks before starting the session

  function startSession() {
    const newSession: Session = {
      id: String(new Date().getTime()),
      tasks: [],
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

  function addTask(newTask: Task, currentSessionId: string) {
    dispatch(addTaskAction(newTask, currentSessionId))
  }

  function clickTask(taskId: string, currentSessionId: string) {
    dispatch(clickTaskAction(taskId, currentSessionId))
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
        addTask,
        clickTask,
      }}
    >
      {children}
    </SessionContext.Provider>
  )
}
