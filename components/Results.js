import React from "react";
import Card from "./Card";

const Results = ({ results }) => {
  return (
    <div>
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Results;
