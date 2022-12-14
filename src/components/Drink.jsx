import { Col, Card, Button } from "react-bootstrap"
import useDrinks from "../hooks/useDrinks"



const Drink = ({drink}) => {

    const {handleModal, handleDrinkById} = useDrinks()

  return (
    <Col  md={6} lg={3}>
        <Card className="mb-4 ">
            <Card.Img
                variant="top"
                src={drink.strMealThumb}
                alt="img strDrinks"
            />
            <Card.Body>
                <Card.Title className="text-black">
                    {drink.strMeal}
                </Card.Title>
                <Button className="mt-1 py-1 w-100 text-uppercase "
                        variant="outline-success"
                        onClick={() => {
                            handleModal()
                            handleDrinkById(drink.idMeal)
                        }}
                >
                        read more
                </Button>
            </Card.Body>
        </Card>
    
    </Col>
  )
}

export default Drink