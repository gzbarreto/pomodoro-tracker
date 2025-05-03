import { Session, Task } from "./reducer"

export enum Actions {
  START_SESSION = "START_SESSION",
  PAUSE_SESSION = "PAUSE_SESSION",
  RESUME_SESSION = "RESUME_SESSION",
  FINISH_SESSION = "FINISH_SESSION",
  RESTART_SESSION = "RESTART_SESSION",
  ADD_TASK = "ADD_TASK",
  CLICK_TASK = "CLICK_TASK",
  DELETE_TASK = "DELETE_TASK",
}

export function startSessionAction(newSession: Session) {
  return {
    type: Actions.START_SESSION,
    payload: newSession,
  }
}

export function pauseSessionAction() {
  return {
    type: Actions.PAUSE_SESSION,
  }
}

export function resumeSessionAction() {
  return {
    type: Actions.RESUME_SESSION,
  }
}

export function finishSessionAction(currentSessionId: string) {
  return {
    type: Actions.FINISH_SESSION,
    payload: currentSessionId,
  }
}

export function restartSessionAction() {
  return {
    type: Actions.RESTART_SESSION,
  }
}

export function addTaskAction(newTask: Task, currentSessionId: string) {
  return {
    type: Actions.ADD_TASK,
    payload: {
      newTask,
      currentSessionId: currentSessionId,
    },
  }
}

export function clickTaskAction(taskId: string, currentSessionId: string) {
  return {
    type: Actions.CLICK_TASK,
    payload: {
      taskId,
      currentSessionId: currentSessionId,
    },
  }
}

export function deleteTaskAction(taskId: string, currentSessionId: string) {
  return {
    type: Actions.DELETE_TASK,
    payload: {
      taskId,
      currentSessionId: currentSessionId,
    },
  }
}