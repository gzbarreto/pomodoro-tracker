import styled from "styled-components"

export const HomeContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  height: calc(100vh - 15rem);
`
export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  max-height: calc(100vh - 15rem);


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
  margin-bottom: 1rem;
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
