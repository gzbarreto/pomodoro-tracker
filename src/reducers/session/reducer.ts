import { Actions } from "./actions"

export interface Task {
  id: string
  task: string
  isDone: boolean
}

export interface Session {
  id: string
  tasks: Task[]
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

    case Actions.ADD_TASK:
      return {
        ...state,
        sessions: state.sessions.map((session) => {
          if (session.id === state.currentSessionId) {
            return {
              ...session,
              tasks: [...session.tasks, action.payload.newTask],
            }
          }
          return session
        }),
      }

    case Actions.CLICK_TASK:
      return {
        ...state,
        sessions: state.sessions.map((session) => {
          if (session.id === action.payload.currentSessionId) {
            return {
              ...session,
              tasks: session.tasks.map((task) => {
                if (task.id === action.payload.taskId) {
                  return { ...task, isDone: !task.isDone }
                }
                return task
              }),
            }
          }
          return session
        }),
      }

    default:
      return state
  }
}
