import axios from "axios";

const baseURL =
  "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

const getInstance = axios.create({
  baseURL,
});

export { baseURL, getInstance };
