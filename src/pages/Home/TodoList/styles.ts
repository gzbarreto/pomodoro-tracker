import styled from "styled-components";

export const List = styled.ul`
display: flex;
flex-direction: column;
gap: 0.5rem;

li {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
  color: ${(props) => props.theme["gray-200"]};
}
`