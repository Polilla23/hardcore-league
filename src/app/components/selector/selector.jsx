import React from "react";

const Selector = ({ selectedLeague, onLeagueChange }) => {
  return (
    <div className="w-3/5">
      <label>Selecciona una liga:</label>
      <select
        onChange={(e) => onLeagueChange(e.target.value)}
        value={selectedLeague}
      >
        <option value="liga1">Liga 1</option>
        <option value="liga2">Liga 2</option>
        <option value="liga3">Liga 3</option>
      </select>
    </div>
  );
};

export default Selector;
