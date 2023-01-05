import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const Tarjeta1 = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="data:image/jpeg;base64,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"
      />
      <Card.Body>
        <Card.Title>¿Buscas banquetes?</Card.Title>
        <Card.Text>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo
        </Card.Text>
        <Button variant="primary">Leer màs</Button>
      </Card.Body>
    </Card>
  );
};
export default Tarjeta1;