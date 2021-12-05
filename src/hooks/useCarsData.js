import { useEffect, useState } from "react";
import { fetchBrands, fetchModels } from "../api/cars";
export function useGetBrands() {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetchBrands().then((data) => setBrands(data));
  }, []);

  return [brands];
}

export function useGetModels(brand) {
  const [models, setModels] = useState([]);
  useEffect(() => {
    fetchModels(brand).then((data) => setModels(data));
  }, [brand]);

  return [models];
}
