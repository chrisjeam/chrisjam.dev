import { type APISpaceXResponse } from "../types/api";

export default async function getLaunches() {
  const response = await fetch("https://api.spacexdata.com/v5/launches/query", {
    method: "POST",
    headers: {
      "Content-Type": "application-json",
    },
    body: JSON.stringify({
      query: {},
      options: {
        sort: {
          date_unix: "asc",
        },
        limit: 12,
      },
    }),
  });
  const { docs } = (await response.json()) as APISpaceXResponse;
  return docs;
}
