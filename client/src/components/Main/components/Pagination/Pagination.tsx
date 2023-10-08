import { useEffect, useState } from 'react';
import cn from 'classnames';
import { SliderButton } from '../SliderButton';
import PaginationStyles from './Pagination.module.css'

type PaginationProps = {
  total: number;
  perPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export const Pagination = ({
  total,
  perPage,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  let totalPages = Math.ceil(total / +perPage);

  const maxPageToShow = 4;

  const [pageNumers, setPageNumbers] = useState<number[]>([]);

  const startPage = Math.max(1, currentPage - Math.floor(maxPageToShow / 2));
  const endPage = Math.min(totalPages, startPage + maxPageToShow - 1);

  useEffect(() => {
    const newPageNumbers = [];

    for (let i = startPage; i <= endPage; i += 1) {
      newPageNumbers.push(i);
    }

    setPageNumbers(newPageNumbers as number[]);
  }, [currentPage, startPage, endPage]);

  const handlePagination = (pageNumber: number) => {
    if (
      pageNumber < pageNumers[0]
        || pageNumber > pageNumers[pageNumers.length - 1]
    ) {
      return;
    }

    onPageChange(pageNumber);
  };

  return (
    <nav className={PaginationStyles.pagination} aria-label="Pagination">
      <SliderButton
        className={cn({ disabled: currentPage <= 1 })}
        onClick={() => handlePagination(currentPage - 1)}
      >
        <div 
          className={cn('page-link__logo', { disabled: currentPage <= 1 })}
        ></div>
      </SliderButton>
      {pageNumers.map((pageNum) => (
        <SliderButton
          key={pageNum}
          className={cn({ active: pageNum === currentPage })}
          onClick={() => handlePagination(pageNum)}
        >
          {pageNum}
        </SliderButton>
      ))}
      <SliderButton
        className={cn({ disabled: currentPage >= totalPages })}
        onClick={() => handlePagination(currentPage + 1)}
      >
        <div
          className={cn('page-link__logo', {
            disabled: currentPage >= totalPages,
          })}
        >

        </div>
      </SliderButton>
    </nav>
  );
};