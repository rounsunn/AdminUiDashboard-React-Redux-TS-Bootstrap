interface loadingPageProps {
  flag: boolean;
  errorMessage: string;
}
const LoadingPage = (props: loadingPageProps) => {
  const { flag, errorMessage } = props;
  return (
    (flag && (
      <div className="d-flex m-5 justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )) || (
      <div className="alert alert-info" role="alert">
        {errorMessage}
      </div>
    )
  );
};

export default LoadingPage;
