import Modal from "react-bootstrap/Modal";
import { useUser } from "../context/UserContext";

export const CustomModel = ({ children }) => {
  const { toggleModel, show } = useUser();
  //   const [show, setShow] = useState(false);

  //   const toggleModel = (value) => setShow(value);

  return (
    <Modal
      show={show}
      onHide={() => toggleModel(false)}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};
