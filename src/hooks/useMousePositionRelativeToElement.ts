'use client';

import { useLayoutEffect, useRef, useState } from 'react';

type TMousePosition = {
  isTop: boolean;
  isTopRight: boolean;
  isRight: boolean;
  isBottomRight: boolean;
  isBottom: boolean;
  isBottomLeft: boolean;
  isLeft: boolean;
  isTopLeft: boolean;
  isFront: boolean;
};

export const useMousePositionRelativeToElement = <T extends HTMLElement>() => {
  const [state, setState] = useState<TMousePosition>({
    isTop: true,
    isTopRight: false,
    isRight: false,
    isBottomRight: false,
    isBottom: true,
    isBottomLeft: false,
    isLeft: false,
    isTopLeft: false,
    isFront: false
  });

  const ref = useRef<T>(null);

  useLayoutEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const newState = state;

      if (ref.current?.nodeType === Node.ELEMENT_NODE) {
        const mouseXCoord = event.pageX;
        const mouseYCoord = event.pageY;

        const { x, y } = ref.current.getBoundingClientRect();

        const { clientHeight: elementHeight, clientWidth: elementWidth } =
          ref.current;

        const elementXCoord = x + window.scrollX;
        const elementYCoord = y + window.scrollY;

        const elementXCoordRelativeToMouse = mouseXCoord - elementXCoord;
        const elementYCoordRelativeToMouse = mouseYCoord - elementYCoord;

        newState.isTop =
          elementXCoordRelativeToMouse >= 0 &&
          elementXCoordRelativeToMouse <= elementWidth &&
          elementYCoordRelativeToMouse < 0;

        newState.isTopRight =
          elementXCoordRelativeToMouse > elementWidth &&
          elementYCoordRelativeToMouse < 0;

        newState.isRight =
          elementXCoordRelativeToMouse > elementWidth &&
          elementYCoordRelativeToMouse >= 0 &&
          elementYCoordRelativeToMouse <= elementHeight;

        newState.isBottomRight =
          elementXCoordRelativeToMouse > elementWidth &&
          elementYCoordRelativeToMouse > elementHeight;

        newState.isBottom =
          elementXCoordRelativeToMouse >= 0 &&
          elementXCoordRelativeToMouse <= elementWidth &&
          elementYCoordRelativeToMouse > elementHeight;

        newState.isBottomLeft =
          elementXCoordRelativeToMouse < 0 &&
          elementYCoordRelativeToMouse > elementHeight;

        newState.isLeft =
          elementXCoordRelativeToMouse < 0 &&
          elementYCoordRelativeToMouse <= elementHeight &&
          elementYCoordRelativeToMouse >= 0;

        newState.isTopLeft =
          elementXCoordRelativeToMouse < 0 && elementYCoordRelativeToMouse < 0;

        newState.isFront =
          elementXCoordRelativeToMouse >= 0 &&
          elementXCoordRelativeToMouse <= elementWidth &&
          elementYCoordRelativeToMouse >= 0 &&
          elementYCoordRelativeToMouse <= elementHeight;
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
