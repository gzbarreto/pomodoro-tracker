import { HistoryContainer, Status } from "./styles"

export function History() {
  return (
    <HistoryContainer>
      <table>
        <thead>
          <tr>
            <th>Início</th>
            <th>Tarefas finalizadas</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ter, 26-03-24, 20:09</td>
            <td>2/6</td>
            <td>
              <Status statusColor="green">Concluído</Status>
            </td>
          </tr>

          <tr>
            <td>Qua, 27-03-24, 20:09</td>
            <td>0/6</td>
            <td>
              <Status statusColor="red">Interrompido</Status>
            </td>
          </tr>

          <tr>
            <td>Qui, 28-03-24, 20:09</td>
            <td>6/6</td>
            <td>
              <Status statusColor="yellow">Em andamento</Status>
            </td>
          </tr>
          
        </tbody>
      </table>
    </HistoryContainer>
  )
}
