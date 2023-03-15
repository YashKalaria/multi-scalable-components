import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

export default function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, at
        praesentium nam fuga deleniti voluptate autem sapiente repellat placeat
        harum ratione veniam excepturi totam voluptatibus natus dolores velit
        assumenda delectus? Nemo incidunt, deleniti vitae, accusantium iure qui
        earum amet porro dolor consectetur fugit et pariatur quidem voluptates
        ut. Perferendis, tenetur?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, at
        praesentium nam fuga deleniti voluptate autem sapiente repellat placeat
        harum ratione veniam excepturi totam voluptatibus natus dolores velit
        assumenda delectus? Nemo incidunt, deleniti vitae, accusantium iure qui
        earum amet porro dolor consectetur fugit et pariatur quidem voluptates
        ut. Perferendis, tenetur?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, at
        praesentium nam fuga deleniti voluptate autem sapiente repellat placeat
        harum ratione veniam excepturi totam voluptatibus natus dolores velit
        assumenda delectus? Nemo incidunt, deleniti vitae, accusantium iure qui
        earum amet porro dolor consectetur fugit et pariatur quidem voluptates
        ut. Perferendis, tenetur?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, at
        praesentium nam fuga deleniti voluptate autem sapiente repellat placeat
        harum ratione veniam excepturi totam voluptatibus natus dolores velit
        assumenda delectus? Nemo incidunt, deleniti vitae, accusantium iure qui
        earum amet porro dolor consectetur fugit et pariatur quidem voluptates
        ut. Perferendis, tenetur?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, at
        praesentium nam fuga deleniti voluptate autem sapiente repellat placeat
        harum ratione veniam excepturi totam voluptatibus natus dolores velit
        assumenda delectus? Nemo incidunt, deleniti vitae, accusantium iure qui
        earum amet porro dolor consectetur fugit et pariatur quidem voluptates
        ut. Perferendis, tenetur?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, at
        praesentium nam fuga deleniti voluptate autem sapiente repellat placeat
        harum ratione veniam excepturi totam voluptatibus natus dolores velit
        assumenda delectus? Nemo incidunt, deleniti vitae, accusantium iure qui
        earum amet porro dolor consectetur fugit et pariatur quidem voluptates
        ut. Perferendis, tenetur?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, at
        praesentium nam fuga deleniti voluptate autem sapiente repellat placeat
        harum ratione veniam excepturi totam voluptatibus natus dolores velit
        assumenda delectus? Nemo incidunt, deleniti vitae, accusantium iure qui
        earum amet porro dolor consectetur fugit et pariatur quidem voluptates
        ut. Perferendis, tenetur?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, at
        praesentium nam fuga deleniti voluptate autem sapiente repellat placeat
        harum ratione veniam excepturi totam voluptatibus natus dolores velit
        assumenda delectus? Nemo incidunt, deleniti vitae, accusantium iure qui
        earum amet porro dolor consectetur fugit et pariatur quidem voluptates
        ut. Perferendis, tenetur?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, at
        praesentium nam fuga deleniti voluptate autem sapiente repellat placeat
        harum ratione veniam excepturi totam voluptatibus natus dolores velit
        assumenda delectus? Nemo incidunt, deleniti vitae, accusantium iure qui
        earum amet porro dolor consectetur fugit et pariatur quidem voluptates
        ut. Perferendis, tenetur?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, at
        praesentium nam fuga deleniti voluptate autem sapiente repellat placeat
        harum ratione veniam excepturi totam voluptatibus natus dolores velit
        assumenda delectus? Nemo incidunt, deleniti vitae, accusantium iure qui
        earum amet porro dolor consectetur fugit et pariatur quidem voluptates
        ut. Perferendis, tenetur?
      </p>
    </div>
  );
}
