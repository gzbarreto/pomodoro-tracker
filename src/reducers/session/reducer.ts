import { Actions } from "./actions"

export interface Session {
  id: string
  // task: Task[]
  startDate?: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface SessionState {
  sessions: Session[]
  currentSessionId: string
  isSessionActive: boolean
  isSessionFinished: boolean
  isSessionPaused: boolean
}

export function sessionsReducer(state: SessionState, action: any) {
  switch (action.type) {
    case Actions.START_SESSION:
      return {
        ...state,
        sessions: [...state.sessions, action.payload],
        currentSessionId: action.payload.id,
        isSessionActive: true,
        isSessionFinished: false,
      }

    case Actions.PAUSE_SESSION:
      if (!state.isSessionActive) {
        return state // Prevent pausing if the session is not active
      }
      return {
        ...state,
        isSessionPaused: true,
      }

    case Actions.RESUME_SESSION:
      return {
        ...state,
        isSessionPaused: false,
      }

    case Actions.FINISH_SESSION:
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

    case Actions.RESTART_SESSION:
      return {
        ...state,
        isSessionFinished: false,
      }

    default:
      return state
  }
}
