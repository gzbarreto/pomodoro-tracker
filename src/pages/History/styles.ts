import styled from "styled-components";

export const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th {
    background-color: ${(props) => props.theme["gray-700"]};
    padding: 1rem;
    text-align: left;
    color: ${(props) => props.theme["gray-100"]};
    font-size: 0.875rem;
    line-height: 1.6;

    &:first-child {
      border-top-left-radius: 8px;
      padding-left: 1.5rem;
    }

    &:last-child {
      border-top-right-radius: 8px;
      padding-right: 1.5rem;
    }
  }

  td {
    background-color: ${(props) => props.theme["gray-800"]};
    border-top: 4px solid ${(props) => props.theme["gray-900"]};
    padding: 1rem;
    font-size: 0.875rem;
    line-height: 1.6;

    &:first-child {
      padding-left: 1.5rem;
      width: 50%;
    }

    &:last-child {
      padding-right: 1.5rem;
    }
  }
`
// status styles
const STATUS_COLORS = {
  red: 'danger-500',
  yellow: 'accent-500',
  green: 'primary-500',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${(props) =>
      props.theme[STATUS_COLORS[props.statusColor]]};
  }
`