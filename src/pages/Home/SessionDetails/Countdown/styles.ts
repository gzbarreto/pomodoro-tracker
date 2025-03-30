import styled from "styled-components";

export const CountdownContainer = styled.div`
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