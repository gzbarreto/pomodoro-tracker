import styled from "styled-components"

export const SessionDetailsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border: 2px solid ${(props) => props.theme["gray-800"]};
  border-radius: 12px;

  padding: 1.5rem;
`

// Header styling
export const SessionHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid ${(props) => props.theme["gray-800"]};
  padding-bottom: 1rem;
`

export const SessionTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  h3 {
    font-size: 1.5rem;
  }

  p {
    color: ${(props) => props.theme["gray-400"]};
  }
`

// Session info styling
export const SessionInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const ModeInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme["gray-500"]};
    }
  }

  h4 {
    font-size: 1.125rem;
    font-weight: 600;
  }
`

// Session countdown styling
export const SessionCountdownContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  justify-items: center;

  padding: 1.5rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme["gray-400"]};
  }

  span {
    font-family: "Roboto Mono", monospace;
    font-size: 2.5rem;
  }
`
