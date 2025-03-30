import styled from "styled-components"

export const CheckboxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.25rem;
  width: 1.25rem;
  border-radius: 4px;
  background: ${(props) => props.theme["gray-800"]};
  border: 2px solid ${(props) => props.theme["gray-700"]};
  padding: 0.25rem;

  transition: all 0.2s;
`

export const CheckboxChecked = styled(CheckboxContainer)`
  color: ${(props) => props.theme["gray-900"]};
  background: ${(props) => props.theme["primary-500"]};
  border: none;
`
