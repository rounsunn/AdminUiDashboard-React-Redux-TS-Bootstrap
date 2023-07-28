interface searchProps {
  handleSearch: (e: React.FormEvent<HTMLInputElement>) => void;
}

const SearchBar = (props: searchProps) => {
  return (
    <div className="row">
      <div className="col p-0">
        <input
          type="text"
          className="input-group px-2 py-1"
          placeholder="search"
          onChange={props.handleSearch}
        />
      </div>
    </div>
  );
};

export default SearchBar;
