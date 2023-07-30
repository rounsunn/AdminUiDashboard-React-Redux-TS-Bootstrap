interface pageProps {
  totalPages: number;
  currentPageNumber: number;
  setCurrentPageNumber: React.Dispatch<React.SetStateAction<number>>;
}
const btnClass = "btn rounded-circle btn-sm btn-outline-primary p-1 p-sm-2";

const Pagination = (props: pageProps) => {
  const { totalPages, currentPageNumber, setCurrentPageNumber } = props;

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
    <>
      <div className="col-12 col-sm-9 d-flex justify-content-between mt-2 mt-sm-0">
        <button
          className={btnClass}
          disabled={currentPageNumber <= 1}
          onClick={() => setCurrentPageNumber(1)}
        >
          {"<<"}
        </button>
        <button
          className={btnClass}
          disabled={currentPageNumber <= 1}
          onClick={() => setCurrentPageNumber(currentPageNumber - 1)}
        >
          {"<"}
        </button>
        {createButton()}
        <button
          className={btnClass}
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
