import { projects } from "../json/products";

const projectData = {
  uri: "/projects",
  handleResponse: () => {
    const data = projects;
    return {
      data,
    };
  },
};

export default projectData;
