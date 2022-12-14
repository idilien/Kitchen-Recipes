import { Container } from "react-bootstrap"
import FormComponent from "./components/FormComponent"
import ListDrinks from "./components/ListDrinks"
import ModalDrink from "./components/ModalDrink"
import { CategoriesProvider } from "./context/CategoriesProvider"
import { DrinksProvider } from "./context/DrinksProvider"


function App() {
  
  
  return (
    <CategoriesProvider>
        <DrinksProvider>
              <header>
                <h1 className="">Kitchen Recipes</h1>
              </header>
              <Container className="mt-5">
                    <FormComponent/>
                    <ListDrinks/>
                    <ModalDrink/>
              </Container>
        </DrinksProvider>
   </CategoriesProvider>

  )
}

export default App
