import { useEffect, useState } from "react";
import PrimaryButton from "./PrimaryButton";
import styled from "styled-components";

interface PaginationProps {
  total_pages: number;
  current_page: number;
  setCurrentPage: (counter: number) => void;
}

export default function Pagination({
  setCurrentPage,
  total_pages,
  current_page,
}: PaginationProps) {

  
  return (
    <div>
      <PaginationContainer>
        <PrimaryButton
          text="First"
          onClick={() => setCurrentPage(1)}
          disabled={current_page === 1}
        />
        <PrimaryButton
          text="Previous"
          onClick={() => setCurrentPage(current_page - 1)}
          disabled={current_page === 1}
        />
        <h1>{current_page}</h1>
        <PrimaryButton
          onClick={() => setCurrentPage(current_page + 1)}
          disabled={current_page === total_pages}
          text="Next"
        />
        <PrimaryButton
          disabled={current_page === total_pages}
          onClick={() => setCurrentPage(total_pages)}
          text="Last"
        />
      </PaginationContainer>
    </div>
  );
}
const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
