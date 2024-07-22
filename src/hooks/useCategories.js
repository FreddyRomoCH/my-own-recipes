import { useState, useEffect } from "react";

import { categories } from "../services/api/categories.js";

export function useCategories() {
    const [listCategories, setListCategories] = useState([]);
  
    useEffect(() => {
      const allCategories = categories.map((category) => {
        return category;
      });
  
      setListCategories(allCategories);
    }, []);
  
    return { listCategories };
  } 