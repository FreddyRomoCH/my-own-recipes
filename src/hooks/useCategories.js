import { useState, useEffect } from "react";

import { categories } from "../services/api/categories.js";

export function useGetCategories() {
    const [listCategorties, setlistCategorties] = useState([]);
  
    useEffect(() => {
      const allCategories = categories.map((category) => {
        return category;
      });
  
      setlistCategorties(allCategories);
    }, []);
  
    return { listCategorties };
  } 