function Filters({ setFilters }) {
  return (
    <div className="filters">
      <select
        onChange={(e) => setFilters((f) => ({ ...f, city: e.target.value }))}
      >
        <option value="">City</option>
        <option value="NY">NY</option>
        <option value="LA">LA</option>
      </select>

      <select
        onChange={(e) => setFilters((f) => ({ ...f, season: e.target.value }))}
      >
        <option value="">Season</option>
        <option value="Winter">Winter</option>
        <option value="Summer">Summer</option>
      </select>

      <select
        onChange={(e) =>
          setFilters((f) => ({ ...f, pollution: e.target.value }))
        }
      >
        <option value="">Pollution</option>
        <option value="High">High</option>
        <option value="Low">Low</option>
      </select>
    </div>
  );
}

export default Filters;
