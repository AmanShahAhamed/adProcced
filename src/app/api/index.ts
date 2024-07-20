import instance from "../helper/api";

export const EndPoints = {
  local: "http://localhost:3000/api/",
};

const api = instance.create(EndPoints.local, {
  headers: {
    accept: "application/json",
    "content-type": "application/json",
  },
});
export default api;
