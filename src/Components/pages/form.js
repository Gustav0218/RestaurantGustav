import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { db } from "./../../config/firebase";
import { addDoc, collection } from "firebase/firestore";

const Formulario = () => {
  const [inputs, setInputs] = useState([]);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  
  const handleSubmit = async (event) => {
  event.preventDefault();
  debugger;
  try {
    const coment = collection (db, "Clients")
    const resp = await addDoc (coment,inputs );
    alert ('¡Felicidades, se registro tu reservaciòn!')
    return resp;
  } catch (e) {
    console.log ('Algo saliò mal!', e)
  }  
};

  return (
    <Form onSubmit={handleSubmit }  >
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nombre completo</Form.Label>
        <Form.Control
          onChange={handleChange}
          name="nameForm"
          type="text"
          placeholder="Bruce Ejemplo Wayne"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>Dia para reservar</Form.Label>
        <Form.Control
          onChange={handleChange}
          name="dateForm"
          type="date"
          placeholder="Fecha"
          rows={3}
        />
        <Form.Group className="mb-3" controlId="FormBasicMail">
          <Form.Label>Correo</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="emailForm"
            type="mail"
            placeholder="ejemplo@gmail.com"
          />
        </Form.Group>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicComents">
        <Form.Label>Comentarios y especificaciones (Opcional)</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          onChange={handleChange}
          name="emailComents"
          placeholder="Alergias, vegetarian@, numero de invitados"
          rows={3}
        />
      </Form.Group>
      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
  );
};
export default Formulario;
