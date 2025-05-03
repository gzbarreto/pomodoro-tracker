import styled from "styled-components"

interface ListItemProps {
  isDone: boolean
}

export const ListItemContainer = styled.li<ListItemProps>`
  list-style: none;

  display: flex;
  justify-content: space-between;

  p {
    text-decoration: ${(props) => (props.isDone ? "line-through" : "none")};
    color: ${(props) =>
      props.isDone
        ? props.theme["gray-500"]
        : props.theme["gray-200"]}; // Example: gray for done tasks
  }
`

export const LeadingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`
