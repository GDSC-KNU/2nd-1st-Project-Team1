import { useState } from "react";

const Curriculum = () => {
  const [query, setQuery] = useState("");

  const updateQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <aside>
      <input type="text" value={query} onChange={updateQuery} />
    </aside>
  );
};

export default Curriculum;
