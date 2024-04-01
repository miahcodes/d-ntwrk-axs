import { HttpRequestMethod } from "../generated/api"

export function fetch(input) {
  const SERVER_URL = "https://3d86-175-156-231-79.ngrok-free.app/other-endpoint";

  return {
    request: {
      method: HttpRequestMethod.Post,
      url: SERVER_URL,
      headers: [
        { name: "accept", value: "application/json" },
        { name: "content-type", value: "application/json" }
      ],
      body: JSON.stringify(input),
      policy: {
        readTimeoutMs: 2000
      }
    }
  };
}
