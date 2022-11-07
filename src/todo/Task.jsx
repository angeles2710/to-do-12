import React, { useState } from "react";

const init = {
  topic: "Java",
  framework: "Spring Boot",
  year: "2022",
  hours: "100"
};

export default function Task() {
  const [task, setTask] = useState(init);

  const updateTopic = () => {
    setTask((previousState) => {
      return { ...previousState, topic: "JS" };
    });
  };
  const updateFramework = () => {
    setTask((previousState) => {
      return { ...previousState, framework: "React" };
    });
  };
  const updateHours = () => {
    setTask((previousState) => {
      return { ...previousState, hours: "200" };
    });
  };
  const updateYear = () => {
    setTask((previousState) => {
      return { ...previousState, year: "2019" };
    });
  };

  function updateAll() {
    updateTopic();
    updateFramework();
    updateHours();
    updateYear();
  }

  return (
    <>
      <h1>My {task.topic} Cifo course</h1>
      <p>
        It is a {task.framework} {task.hours} hours, version from {task.year}.
      </p>
      <button type="button" onClick={updateAll}>
        change to JS
      </button>
    </>
  );
}
