import styled from "styled-components"

export const ListContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow-y: auto;
    max-height: calc(100vh - 28rem);
  }
`

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.5rem;
`

export const TaskInput = styled.input`
  height: 2.5rem;
  border-radius: 4px;
  border: 2px solid ${(props) => props.theme["gray-700"]};
  background: ${(props) => props.theme["gray-800"]};
  color: ${(props) => props.theme["gray-200"]};
  padding: 0.5rem;

  &::placeholder {
    color: ${(props) => props.theme["gray-600"]};
  }
`
