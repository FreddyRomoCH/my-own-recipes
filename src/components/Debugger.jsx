import { useSearch } from "../hooks/useSearch";

export function Debugger() {
  const { search } = useSearch();
  return (
    <div className="absolute bg-black/20 rounded-md p-4 top-3 left-3">
      {JSON.stringify(search, null, 2)}
    </div>
  );
}
