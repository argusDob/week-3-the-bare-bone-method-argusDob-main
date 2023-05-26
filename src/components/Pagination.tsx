import { useEffect, useState } from "react";
import PrimaryButton from "./PrimaryButton";
import styled from "styled-components";

interface PaginationProps {
  total_pages: number;
  current_page: number;
  onClick: (counter: number) => void;
}

export default function Pagination({
  onClick,
  total_pages,
  current_page,
}: PaginationProps) {
  const [currentPage, setCurrentPage] = useState<number>(current_page);
  const [isNextBtnDisabled, setNextButtonState] = useState<boolean>(false);
  const [isPreviousBtnDisabled, setPreviousButtonState] =
    useState<boolean>(false);

  useEffect(() => {
    previousButtonState();
    setCurrentPage(current_page);
  },[]);

  function goNext() {
    let myCounter = currentPage + 1;
    handleButtons(myCounter);
  }

  function goPrevious() {
    if (currentPage !== 0) {
      let myCounter = currentPage - 1;
      handleButtons(myCounter);
    }
  }

  function goFirst() {
    const firstPage = 1;
    onClick(firstPage);
    handleButtons(firstPage);
  }

  function goLast() {
    const lastPage = total_pages;
    onClick(lastPage);
    handleButtons(lastPage);
  }

  function nextButtonState(myCounter: number) {
    setNextButtonState(myCounter === total_pages);
  }

  function previousButtonState() {
    setPreviousButtonState(currentPage === 1);
  }

  function handleButtons(pageNumber: number) {
    setCurrentPage(pageNumber);
    onClick(pageNumber);
    previousButtonState();
    nextButtonState(pageNumber);
  }

  return (
    <div>
      <PaginationContainer>
        <PrimaryButton
          onClick={goFirst}
          disabled={isPreviousBtnDisabled}
          text="First"
        />
        <PrimaryButton
          disabled={isPreviousBtnDisabled}
          onClick={goPrevious}
          text="Previous"
        />
        <h1>{currentPage}</h1>
        <PrimaryButton
          disabled={isNextBtnDisabled}
          onClick={goNext}
          text="Next"
        />
        <PrimaryButton
          disabled={isNextBtnDisabled}
          onClick={goLast}
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
