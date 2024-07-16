import { useEffect, useState } from "react";

import { countries } from "../services/api/countries.js";

export function useGetCountries() {
    const [listAllCountries, setListAllCountries] = useState([]);
  
    useEffect(() => {
      const allCountries = countries.map((country) => {
        return country;
      });
  
      setListAllCountries(allCountries);
    }, []);
  
    return { listAllCountries };
  } 