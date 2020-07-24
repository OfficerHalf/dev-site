import React from 'react';

export const Adjust = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => (
  <svg ref={ref} {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
    <path d="M10 2v16a8 8 0 1 0 0-16zm0 18a10 10 0 1 1 0-20 10 10 0 0 1 0 20z" />
  </svg>
));
