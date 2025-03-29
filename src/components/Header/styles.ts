import styled from "styled-components"

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const PageTitle = styled.div`
  h1 {
    font-size: 2.5rem;
    margin-bottom: 0.25rem;
  }
  h4 {
    font-size: 1.25rem;
    color: ${(props) => props.theme["gray-400"]};
    font-weight: 400;
  }
`

export const HeaderButtons = styled.div`
  display: flex;
  gap: 0.5rem;

  a {
    text-decoration: none;
  }
`
