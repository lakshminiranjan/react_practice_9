import { memo, SVGProps } from 'react';

const Email_iconIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M16 16.5L4 16.5C3.172 16.5 2.5 15.828 2.5 15L2.5 5C2.5 4.172 3.172 3.5 4 3.5L16 3.5C16.828 3.5 17.5 4.172 17.5 5L17.5 15C17.5 15.828 16.828 16.5 16 16.5Z'
      stroke='#171A1F'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M4.5 6.5L10 11L15.5 6.5' stroke='#171A1F' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(Email_iconIcon);
export { Memo as Email_iconIcon };