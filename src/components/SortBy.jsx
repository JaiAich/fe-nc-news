const SortBy = ({ sortByValue, setSortByValue, sortOrder, setSortOrder }) => {
  return (
    <div className="sort-by-container">
      <div className="sort-by">
        <label htmlFor="sort_by">Sort By: </label>
        <select
          name="sort_by"
          id="sort_by"
          value={sortByValue}
          onChange={(e) => {
            setSortByValue(e.target.value);
          }}
        >
          <option value="created_at">Date</option>
          <option value="votes">Upvotes</option>
        </select>
      </div>
      <div className="order-by">
        <label htmlFor="order">Order: </label>
        <select
          name="asc"
          id="asc"
          value={sortOrder}
          onChange={(e) => {
            setSortOrder(e.target.value);
          }}
        >
          <option value="asc">Asc.</option>
          <option value="desc">Desc.</option>
        </select>
      </div>
    </div>
  );
};

export default SortBy;
