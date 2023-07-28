const Pagination = () => {
  const delBtnClass = "btn rounded-pill btn-sm btn-danger p-1 p-md-2";
  const btnClass =
    "btn rounded-circle btn-sm btn-outline-primary btn-round p-1 p-md-2";
  return (
    <>
      <div className="col-4">
        <button className={delBtnClass}>Delete Selected</button>
      </div>
      <div className="col-8 d-flex flex-wrap justify-content-between">
        <button className={btnClass}>{"<<"}</button>
        <button className={btnClass}>{"<"}</button>
        <button className={btnClass}>B1</button>
        <button className={btnClass}>B2</button>
        <button className={btnClass}>B3</button>
        <button className={btnClass}>B4</button>
        <button className={btnClass}>B5</button>
        <button className={btnClass}>{">"}</button>
        <button className={btnClass}>{">>"}</button>
      </div>
    </>
  );
};

export default Pagination;
