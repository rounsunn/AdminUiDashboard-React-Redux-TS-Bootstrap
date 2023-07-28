interface pageProps {
  totalUsers: number;
  currentPageNumber: number;
  setCurrentPageNumber: React.Dispatch<React.SetStateAction<number>>;
}
const delBtnClass = "btn rounded-pill btn-sm btn-danger p-2";
const btnClass = "btn rounded-circle btn-sm btn-outline-primary p-1 p-md-2";

const Pagination = (props: pageProps) => {
  const { totalUsers, currentPageNumber, setCurrentPageNumber } = props;
  const totalPages = totalUsers / 10;
  console.log(totalPages, totalUsers);

  const createButton = () => {
    const buttonArray = [];
    for (let i = 0; i < totalPages; i++)
      buttonArray.push(
        <button
          key={i}
          className={btnClass}
          onClick={() => setCurrentPageNumber(i + 1)}
        >
          {i + 1}
        </button>
      );
    return buttonArray;
  };

  return (
    <div className="row py-2">
      <div className="col-4">
        <button className={delBtnClass}>Delete Selected</button>
      </div>
      <div className="col-8 d-flex flex-wrap justify-content-between">
        <button
          className={btnClass}
          disabled={currentPageNumber === 1}
          onClick={() => setCurrentPageNumber(1)}
        >
          {"<<"}
        </button>
        <button
          className={btnClass}
          disabled={currentPageNumber === 1}
          onClick={() => setCurrentPageNumber(currentPageNumber - 1)}
        >
          {"<"}
        </button>
        {createButton()}
        <button
          className={btnClass}
          disabled={currentPageNumber >= Math.ceil(totalPages)}
          onClick={() => setCurrentPageNumber(currentPageNumber + 1)}
        >
          {">"}
        </button>
        <button
          className={btnClass}
          disabled={currentPageNumber >= Math.ceil(totalPages)}
          onClick={() => setCurrentPageNumber(Math.ceil(totalPages))}
        >
          {">>"}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
