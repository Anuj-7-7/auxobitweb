'use client';
import React, { useCallback, useEffect, useState } from 'react';

export const usePrevNextButtons = (emblaApi) => {
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(true);

  const onSelect = useCallback((api) => {
    setPrevDisabled(!api.canScrollPrev());
    setNextDisabled(!api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled: prevDisabled,
    nextBtnDisabled: nextDisabled,
    onPrevButtonClick: () => emblaApi.scrollPrev(),
    onNextButtonClick: () => emblaApi.scrollNext(),
  };
};

export const PrevButton = ({ disabled, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    className="
      embla__button embla__button--prev
      absolute left-4 top-1/2 -translate-y-1/2
      z-40 bg-black bg-opacity-50 hover:bg-opacity-75
      transition-opacity duration-200
    "
  >
    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24">
      <path fill="currentColor" d="M15 19l-7-7 7-7" />
    </svg>
  </button>
);

export const NextButton = ({ disabled, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    className="
      embla__button embla__button--next
      absolute top-1/2 -translate-y-1/2 z-40
      bg-black bg-opacity-50 hover:bg-opacity-75
      transition-opacity duration-200
      right-[1.3rem]  /* ← shift it 85rem to the left of its container’s right edge */
    "
  >
    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24">
      <path fill="currentColor" d="M9 5l7 7-7 7" />
    </svg>
  </button>
);
