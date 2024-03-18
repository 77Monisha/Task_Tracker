import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const TaskForm = ({ data, handleDelete, onClick }) => {
  return (
    <>
      <Card className="card flex flex-row mt-10 w-full mb-20">
        <Card.Body className="space-y-4">
          <Card.Title className="font-extrabold text-2xl">
            <div className="flex flex-row flex-wrap justify-between pr-2 gap-60 md:text-lg gap-20">
              <span>{data.taskName}</span>{" "}
              <span className="font-semibold">{data.day}</span>
            </div>
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
          <Button
            variant="primary"
            className="btn"
            onClick={() => onClick(data)}
          >
            Edit
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default TaskForm;
