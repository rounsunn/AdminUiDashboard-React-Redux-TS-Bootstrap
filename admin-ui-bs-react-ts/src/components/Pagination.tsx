interface pageProps {
  totalPages: number;
  currentPageNumber: number;
  setCurrentPageNumber: React.Dispatch<React.SetStateAction<number>>;
}

const btnClass = "btn rounded-circle btn-sm btn-outline-primary p-1 p-sm-2";
const btnClassI = btnClass + " px-2 px-sm-3";

const Pagination = (props: pageProps) => {
  const { totalPages, currentPageNumber, setCurrentPageNumber } = props;

  const createButton = () => {
    const buttonArray = [];
    for (let i = 0; i < totalPages; i++)
      buttonArray.push(
        <button
          key={i}
          className={btnClassI}
          onClick={() => setCurrentPageNumber(i + 1)}
        >
          {i + 1}
        </button>
      );
    return buttonArray;
  };

  return (
    <div className="row my-2 align-items-center justify-content-end">
      <div className="col-12 col-md-10 d-flex flex-wrap justify-content-between">
        <button
          className={btnClass}
          disabled={currentPageNumber <= 1}
          onClick={() => setCurrentPageNumber(1)}
        >
          {"<<"}
        </button>
        <button
          className={btnClassI}
          disabled={currentPageNumber <= 1}
          onClick={() => setCurrentPageNumber(currentPageNumber - 1)}
        >
          {"<"}
        </button>
        {createButton()}
        <button
          className={btnClassI}
          disabled={currentPageNumber >= totalPages}
          onClick={() => setCurrentPageNumber(currentPageNumber + 1)}
        >
          {">"}
        </button>
        <button
          className={btnClass}
          disabled={currentPageNumber >= totalPages}
          onClick={() => setCurrentPageNumber(totalPages)}
        >
          {">>"}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
