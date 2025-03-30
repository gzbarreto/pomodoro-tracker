import styled from "styled-components"

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