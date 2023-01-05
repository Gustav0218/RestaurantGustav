import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const Tarjeta2 = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2019/06/25/15614775255199.jpg"
      />
      <Card.Body>
        <Card.Title>Eventos especiales</Card.Title>
        <Card.Text>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        </Card.Text>
        <Button variant="primary" className="Btn">Leer mas</Button>
      </Card.Body>
    </Card>
  );
};
export default Tarjeta2;
