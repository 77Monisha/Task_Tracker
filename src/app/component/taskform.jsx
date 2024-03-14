import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const TaskForm = ({ data, handleDelete }) => {
  return (
    <>
      <Card style={{ width: "18rem" }} className="card flex flex-row m-6">
        <Card.Body className="space-y-2">
          <Card.Title className=" card_title font-extrabold text-2xl">
            {data.taskName}
          </Card.Title>
          <Card.Text>{data.description}</Card.Text>
          <Button variant="primary" className="btn ">
            Track
          </Button>
          <Button
            variant="primary"
            className="btn"
            onClick={() => handleDelete(data)}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default TaskForm;
