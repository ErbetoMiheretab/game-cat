import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "ec0f16f330c743eda254d11bd22b3122" },
});
