import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Nebbi", "Kampala", "Gulu", "Hoima"];

  const handleSelectItem = (item: String) => {
    console.log(item);
  };

  let [isVisible, setIsVisible] = useState(false);

  return (
    <>
      {isVisible && (
        <Alert
          message="Holy guacamole!"
          onDismiss={() => {
            setIsVisible(!isVisible);
          }}
        />
      )}

      <Button
        onClick={() => {
          console.log("clicked!");
          setIsVisible(!isVisible);
        }}
      >
        Primary Button
      </Button>

      <div>
        <ListGroup
          items={items}
          title="Cities"
          onSelectItem={handleSelectItem}
        />
      </div>
    </>
  );
}

export default App;
