import styled from "styled-components"

export const IconButtonContainer = styled.div`
  display: flex;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.5rem;
    border-radius: 4px;
    border: none;
    color: ${(props) => props.theme["gray-300"]};
    background: ${(props) => props.theme["gray-800"]};

    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: ${(props) => props.theme["gray-700"]};
    }
  }
`
