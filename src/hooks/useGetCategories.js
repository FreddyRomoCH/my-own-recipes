import { useState, useEffect } from "react";

import { categories } from "../services/api/categories.js";

export function useGetCategories() {
    const [listAllCategories, setListAllCategories] = useState([]);
  
    useEffect(() => {
      const allCategories = categories.map((category) => {
        return category;
      });
  
      setListAllCategories(allCategories);
    }, []);
  
    return { listAllCategories };
  } 