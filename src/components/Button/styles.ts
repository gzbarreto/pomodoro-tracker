import styled from "styled-components"

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 4px;
  border: none;
  color: ${(props) => props.theme["gray-900"]};
  background: ${(props) => props.theme["primary-500"]};

  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${(props) => props.theme["primary-300"]};
  }
`
