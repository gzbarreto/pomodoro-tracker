import styled from "styled-components"

const ModeBadgeBase = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  border: 1px solid;
`

export const ModeBadgeFocus = styled(ModeBadgeBase)`
  color: ${(props) => props.theme["primary-500"]};
  background: ${(props) => props.theme["primary-transparent"]};
  border-color: ${(props) => props.theme["primary-500"]};
`

export const ModeBadgeLongBreak = styled(ModeBadgeBase)`
  color: ${(props) => props.theme["secondary-500"]};
  background: ${(props) => props.theme["secondary-transparent"]};
  border-color: ${(props) => props.theme["secondary-500"]};
`
export const ModeBadgeShortBreak = styled(ModeBadgeBase)`
  color: ${(props) => props.theme["accent-500"]};
  background: ${(props) => props.theme["accent-transparent"]};
  border-color: ${(props) => props.theme["accent-500"]};
`