import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

//https://api.spacex.land/graphql/
//https://tanstack.com/query/v4/docs/reference/useQuery?from=reactQueryV3&original=https://react-query-v3.tanstack.com/reference/useQuery
const endpoint = "https://api.spacex.land/graphql/";
const LAUNCHES_QUERY = `
  {
    launchesPast(limit: 100) {
      id
      mission_name
      is_tentative
      launch_date_utc
      details     
    }
  }
`;

export default function Launhes() {
  const { data, isLoading, error } = useQuery("launches", () => {
    return axios({
      url: endpoint,
      method: "POST",
      data: { query: LAUNCHES_QUERY }
    }).then((response) => response.data.data);
  });

  if (isLoading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  return (
    <>
      <div>
        <h3>SpaceX Launches</h3>
        <ul>
          {data.launchesPast.map((launch) => (
            <li key={launch.id}>
              {" "}
              {launch.id} | {launch.mission_name} | {launch.launch_date_utc} |{" "}
              {launch.details}{" "}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
