interface pageProps {
  totalPages: number;
  currentPageNumber: number;
  setCurrentPageNumber: React.Dispatch<React.SetStateAction<number>>;
}
const btnClass = "btn rounded-circle btn-sm btn-outline-primary p-1 p-sm-2";
const btnClassI =
  "btn rounded-circle btn-sm btn-outline-primary px-2 py-1 px-sm-3 py-sm-2";

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
    <>
      <div className="col-12 col-md-10 d-flex flex-wrap justify-content-between mt-2 mt-sm-0">
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
    </>
  );
};

export default Pagination;
