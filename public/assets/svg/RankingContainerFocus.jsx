import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    viewBox="0 0 56 56"
    fill="none"
    {...props}
  >
    <mask id="a" fill="#fff">
      <path
        fillRule="evenodd"
        d="M.766 3.414C-.494 2.154.398 0 2.18 0H35.35c6.628 0 12 5.373 12 12v18.172a2 2 0 0 0 .586 1.414l5 5c1.26 1.26.368 3.414-1.414 3.414H19.35c-6.627 0-12-5.373-12-12V10.828a2 2 0 0 0-.585-1.414l-6-6Z"
        clipRule="evenodd"
      />
    </mask>
    <path
      fill="#EDDB11"
      d="M6.766 9.414 5.35 10.828l1.415-1.414ZM7.35-2H2.18v4H7.35v-4Zm0 0v4-4Zm28 0h-28v4h28v-4Zm14 14c0-7.732-6.268-14-14-14v4c5.523 0 10 4.477 10 10h4Zm0 18.172V12h-4v18.172h4Zm5 5-5-5L46.523 33l5 5 2.828-2.828Zm-7 6.828h4.172v-4H47.35v4Zm-1 0h1v-4h-1v4Zm-27 0h27v-4h-27v4Zm-14-14c0 7.732 6.268 14 14 14v-4c-5.523 0-10-4.477-10-10h-4Zm0-17.172V28h4V10.828h-4Zm-6-6 6 6L8.18 8l-6-6L-.65 4.828Zm46 25.343A4 4 0 0 0 46.523 33l2.828-2.828h-4Zm-36-19.343A4 4 0 0 0 8.18 8L5.35 10.828h4ZM51.523 38v4c3.564 0 5.348-4.309 2.828-6.828L51.523 38ZM2.18-2C-1.384-2-3.168 2.309-.65 4.828L2.18 2v-4Z"
      mask="url(#a)"
    />
  </svg>
);
export default SvgComponent;
