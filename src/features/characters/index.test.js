import axios from "axios";

axios.defaults.baseURL = "https://swapi.dev/api/";

test("On mount, get characters should retrieve values", async () => {
  const response = await axios.get("people/?page=1");
  expect(response.data.results.length).toBeGreaterThan(0);
});
