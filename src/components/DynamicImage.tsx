import Image from 'next/image';

import { cn } from '@/lib/utils';
import { useMousePosition } from '@/hooks/useMousePosition';

type Props = {
  src: string;
  alt: string;
};

const DynamicImage = ({ src, alt }: Props) => {
  const [mousePosition, ref] = useMousePosition<HTMLDivElement>();

  return (
    <div className="overflow-hidden rounded-lg shadow-sm border" ref={ref}>
      <Image
        src={src}
        height={1024}
        width={720}
        alt={alt}
        className={cn(
          'scale-[3.05]',
          mousePosition.isUp && 'origin-top',
          mousePosition.isTopRight && 'origin-top-right',
          mousePosition.isRight && 'origin-right',
          mousePosition.isBottomRight && 'origin-bottom-right',
          mousePosition.isBottom && 'origin-bottom',
          mousePosition.isBottomLeft && 'origin-bottom-left',
          mousePosition.isLeft && 'origin-left',
          mousePosition.isTopLeft && 'origin-top-left',
          mousePosition.isFront && 'origin-center'
        )}
      />
    </div>
  );
};

export default DynamicImage;
