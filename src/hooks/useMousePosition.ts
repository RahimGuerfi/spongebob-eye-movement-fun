'use client';

import { useLayoutEffect, useRef, useState } from 'react';

type TMousePosition = {
  isUp: boolean;
  isTopRight: boolean;
  isRight: boolean;
  isBottomRight: boolean;
  isBottom: boolean;
  isBottomLeft: boolean;
  isLeft: boolean;
  isTopLeft: boolean;
  isFront: boolean;
};

export const useMousePosition = <T extends HTMLElement>() => {
  const [state, setState] = useState<TMousePosition>({
    isUp: false,
    isTopRight: false,
    isRight: false,
    isBottomRight: false,
    isBottom: false,
    isBottomLeft: false,
    isLeft: false,
    isTopLeft: false,
    isFront: true
  });

  const ref = useRef<T>(null);

  useLayoutEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const newState = state;

      if (ref.current?.nodeType === Node.ELEMENT_NODE) {
        const { left, top } = ref.current.getBoundingClientRect();

        const { clientHeight, clientWidth } = ref.current;

        const elementPositionX = left + window.scrollX;
        const elementPositionY = top + window.scrollY;

        const elementX = event.pageX - elementPositionX;
        const elementY = event.pageY - elementPositionY;

        newState.isUp =
          elementX >= 0 && elementX <= clientWidth && elementY < 0;

        newState.isTopRight = elementX > clientWidth && elementY < 0;

        newState.isRight =
          elementX > clientWidth && elementY >= 0 && elementY <= clientHeight;

        newState.isBottomRight =
          elementX > clientWidth && elementY > clientHeight;

        newState.isBottom =
          elementX >= 0 && elementX <= clientWidth && elementY > clientHeight;

        newState.isBottomLeft = elementX < 0 && elementY > clientHeight;

        newState.isLeft =
          elementY <= clientHeight && elementX < 0 && elementY >= 0;

        newState.isTopLeft = elementX < 0 && elementY < 0;

        newState.isFront =
          elementX >= 0 &&
          elementX <= clientWidth &&
          elementY >= 0 &&
          elementY <= clientHeight;
      }

      setState((s) => {
        return {
          ...s,
          ...newState
        };
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [state]);

  return [state, ref] as const;
};
