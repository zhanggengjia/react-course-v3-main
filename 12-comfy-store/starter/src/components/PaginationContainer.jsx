import { useQuery } from "@tanstack/react-query";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom"
import { allProductsQuery } from "../pages/Products";

const PaginationContainer = () => {
  const { params } = useLoaderData();
  const { data: resp } = useQuery(allProductsQuery(params));
  const products = resp?.data?.data ?? [];
  const meta = resp?.data?.meta;
  // const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;

  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });

  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', pageNumber);
    // console.log(searchParams.toString());
    navigate(`${pathname}?${searchParams.toString()}`);
  }

  if (pageCount < 2) return null;

  return (
    <div className="mt-16 flex justify-end">
      <div className='join'>
        <button className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            let prevPage = page - 1;
            if (prevPage < 1) prevPage = 1;
            handlePageChange(prevPage);
          }}
        >
          Prev
        </button>
        {pages.map((pageNumber) => {
          return (
            <button key={pageNumber} onClick={() => handlePageChange(pageNumber)} className={`btn btn-xs sm:btn-md border-none join-item ${pageNumber === page ? 'bg-base-300 ' : ''}`}>{pageNumber}</button>
          )
        })}
        <button className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            let nextPage = page + 1;
            if (nextPage > pageCount) nextPage = pageCount;
            handlePageChange(nextPage)
          }}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default PaginationContainer