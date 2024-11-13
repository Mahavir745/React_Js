import Header from './component/Header'
import "./App.css"
import FoodAdd from './component/FoodAdd'
import Container from './component/Container'
import ErrorMessage from './component/ErrorMessage'
import TodoitemsContextProvider from './store/todo_items_store'

const App = () => {

  return (

    <TodoitemsContextProvider>
    <center >
    <Header></Header>
    <FoodAdd></FoodAdd>
    <ErrorMessage ></ErrorMessage>
    <Container></Container>
    </center>
    </TodoitemsContextProvider>
  )
}

export default App