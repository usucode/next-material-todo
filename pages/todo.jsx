import { useState } from "react"
import { withRouter } from "next/router"
import Layout from "../components/MyLayout.js"
import styled from "styled-components"
import {
  TextField,
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"

const SList = styled(List)`
  width: 300px;
`

const STextField = styled(TextField)`
  width: 300px;
`

function Post(props) {
  const [todo, setTodo] = useState({ id: 0, name: "", done: false })
  const [todos, setTodos] = useState([])
  const handleSubmit = e => {
    e.preventDefault()
    setTodos(todos.concat(todo))
    setTodo({ ...todo, id: todo.id + 1, name: "" })
  }
  const handleCheck = id => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.done = !todo.done
      }
      return todo
    })
    setTodos(newTodos)
  }
  const handleDelete = id => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }
  return (
    <Layout>
      <h1>Todo List Page</h1>
      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <STextField
          label="Name"
          value={todo.name}
          onChange={e => {
            setTodo({ ...todo, name: e.target.value })
          }}
          margin="normal"
        />
      </form>
      <SList>
        {todos.map((todo, i) => (
          <ListItem key={i} button onClick={() => handleCheck(todo.id)}>
            <ListItemIcon>
              <Checkbox checked={todo.done} disableRipple />
            </ListItemIcon>
            <ListItemText primary={todo.name} />
            <ListItemSecondaryAction>
              <IconButton onClick={() => handleDelete(todo.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </SList>
    </Layout>
  )
}

export default withRouter(Post)
