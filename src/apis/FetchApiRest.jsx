import React, { useEffect, useState } from "react";

export default function FetchApiRest() {
  //const url = 'https://employeecourse.herokuapp.com/webapi/allEmployees';
  const url = "https://jsonplaceholder.typicode.com/todos";

  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <h1> My data todos from fetch</h1>
      {data &&
        data.map((item) => {
          return (
            <spam key={item.id}>
              id: {item.id}
              <spam>userId: {item.userId} </spam>
              <spam>title: {item.title} </spam>
              <spam>completed: {item.completed} </spam>
              <br />
            </spam>
          );
        })}
    </>
  );
}
