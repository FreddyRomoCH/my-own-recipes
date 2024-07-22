import { useRef, useEffect, useContext } from "react";
import { SearchContext } from "../context/searchContext";

export function useValidateSearch() {
  // const [search, setSearch] = useState("");
  // const [error, setError] = useState(null);
  // const [isSubmitted, setIsSubmitted] = useState(false)
  const { search, setSearch } = useContext(SearchContext);
  const isFirstSearch = useRef(true);

  useEffect(() => {
    if (isFirstSearch.current) {
      isFirstSearch.current = search.search=== "";
      return;
    }

    if (search.search === "") {
      setSearch(prevState => ({
        ...prevState,
        error: "We need a search term"
      }))
      return;
    }

    if (search.search.match(/^\d+$/)) {
      setSearch(prevState => ({
        ...prevState,
        error: "No numbers allowed"
      }))
      return;
    }

    if (search.search.length > 20) {
      setSearch(prevState => ({
        ...prevState,
        error: "Search is too long"
      }))
      return;
    }

    if (search.search.length < 3) {
      setSearch(prevState => ({
        ...prevState,
        error: "Search is too short"
      }))
      return;
    }

    setSearch(prevState => {
      return {
        ...prevState,
        error: null
      }
    })

  }, [search.search, setSearch]);

  return { search, setSearch };
}
