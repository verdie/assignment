import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:3004/",
});

export function fetchCars() {
  return client.get(`/cars`).then((res) => res.data);
}

export function fetchBrands() {
  // should be client.get(`/brands`) with real server
  return fetchCars().then((data) => {
    return [...new Set(data.map((item) => item.brand))];
  });
}
export function fetchModels(brand) {
  // should be client.get(`/brands/:id/models`) with real server
  return fetchCars().then((data) => {
    return [
      ...new Set(
        data.filter((item) => item.brand === brand).map((item) => item.model)
      ),
    ];
  });
}
