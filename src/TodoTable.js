export const TodoTable = ({ todos , deleteTodo}) => {
  return (
    <table>
      <tr><td style={{ width: '110px' }}>Date</td><td>Description</td></tr>
      <tbody>
        {
          todos.map((todo, index) => <tr key={index}><td>{todo.date}</td><td>{todo.description}</td> <button onClick={() => deleteTodo(index)}>Delete</button> </tr>)
        }
      </tbody>
    </table>
  )
}