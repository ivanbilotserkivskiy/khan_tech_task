import { useEffect, useState } from 'react';
import cn from 'classnames';
import { SliderButton } from '../SliderButton';
import PaginationStyles from './Pagination.module.css'
import { useSharedState } from '../../../../store/store';


export const Pagination = () => {

  const [state, setState] = useSharedState();

  let totalPages = Math.ceil(state.total / +state.perPage);

  const maxPageToShow = 4;

  const [pageNumers, setPageNumbers] = useState<number[]>([]);

  const startPage = Math.max(1, state.page - Math.floor(maxPageToShow / 2));
  const endPage = Math.min(totalPages, startPage + maxPageToShow - 1);

  useEffect(() => {
    const newPageNumbers = [];

    for (let i = startPage; i <= endPage; i += 1) {
      newPageNumbers.push(i);
    }

    setPageNumbers(newPageNumbers as number[]);
  }, [state.page, startPage, endPage]);

  const handlePagination = (pageNumber: number) => {
    if (
      pageNumber < pageNumers[0]
        || pageNumber > pageNumers[pageNumers.length - 1]
    ) {
      return;
    }

    setState(prev => ({ ...prev, page: pageNumber}));
  };

  return (
    <nav className={PaginationStyles.pagination} aria-label="Pagination">
      <SliderButton
        className={cn({ disabled: state.page <= 1 })}
        onClick={() => handlePagination(state.page - 1)}
      >
        <div 
          className={cn('page-link__logo', { disabled: state.page <= 1 })}
        ></div>
      </SliderButton>
      {pageNumers.map((pageNum) => (
        <SliderButton
          key={pageNum}
          className={cn({ active: pageNum === state.page })}
          onClick={() => handlePagination(pageNum)}
        >
          {pageNum}
        </SliderButton>
      ))}
      <SliderButton
        className={cn({ disabled: state.page >= totalPages })}
        onClick={() => handlePagination(state.page + 1)}
      >
        <div
          className={cn('page-link__logo', {
            disabled: state.page >= totalPages,
          })}
        >
        </div>
      </SliderButton>
    </nav>
  );
};