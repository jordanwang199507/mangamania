import * as React from "react";
const SvgComponent = ({ children, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    viewBox="0 0 577 190"
    fill="none"
    {...props}
  >
    <g>{children}</g>
    <g filter="url(#a)">
      <mask id="b" fill="#fff">
        <path
          fillRule="evenodd"
          d="M577 8a8 8 0 0 0-8-8H8a8 8 0 0 0-8 8v174a8 8 0 0 0 8 8h282.518c5.679 0 9.6-5.833 8.87-11.464A46.967 46.967 0 0 1 299 172.5c0-25.681 20.819-46.5 46.5-46.5s46.5 20.819 46.5 46.5c0 2.045-.132 4.06-.388 6.036-.73 5.631 3.191 11.464 8.87 11.464H569a8 8 0 0 0 8-8V8Z"
          clipRule="evenodd"
        />
      </mask>
      <path
        fill="#3D3C4F"
        fillOpacity={0.6}
        fillRule="evenodd"
        d="M577 8a8 8 0 0 0-8-8H8a8 8 0 0 0-8 8v174a8 8 0 0 0 8 8h282.518c5.679 0 9.6-5.833 8.87-11.464A46.967 46.967 0 0 1 299 172.5c0-25.681 20.819-46.5 46.5-46.5s46.5 20.819 46.5 46.5c0 2.045-.132 4.06-.388 6.036-.73 5.631 3.191 11.464 8.87 11.464H569a8 8 0 0 0 8-8V8Z"
        clipRule="evenodd"
      />
      <path
        fill="#CBCBEF"
        d="m299.388 178.536-1.983.257 1.983-.257ZM8 2h561v-4H8v4ZM2 182V8h-4v174h4Zm288.518 6H8v4h282.518v-4Zm10.854-9.721A44.783 44.783 0 0 1 301 172.5h-4c0 2.132.138 4.232.405 6.293l3.967-.514ZM301 172.5c0-24.577 19.923-44.5 44.5-44.5v-4c-26.786 0-48.5 21.714-48.5 48.5h4Zm44.5-44.5c24.577 0 44.5 19.923 44.5 44.5h4c0-26.786-21.714-48.5-48.5-48.5v4Zm44.5 44.5c0 1.959-.126 3.888-.372 5.779l3.967.514A48.96 48.96 0 0 0 394 172.5h-4ZM569 188H400.482v4H569v-4Zm6-180v174h4V8h-4Zm-6 184c5.523 0 10-4.477 10-10h-4a6 6 0 0 1-6 6v4Zm-278.482 0c7.212 0 11.693-7.242 10.854-13.721l-3.967.514c.62 4.784-2.742 9.207-6.887 9.207v4Zm99.11-13.721c-.839 6.479 3.642 13.721 10.854 13.721v-4c-4.145 0-7.507-4.423-6.887-9.207l-3.967-.514ZM-2 182c0 5.523 4.477 10 10 10v-4a6 6 0 0 1-6-6h-4ZM569 2a6 6 0 0 1 6 6h4c0-5.523-4.477-10-10-10v4ZM8-2C2.477-2-2 2.477-2 8h4a6 6 0 0 1 6-6v-4Z"
        mask="url(#b)"
      />
    </g>
    <defs>
      <filter
        id="a"
        width={599.8}
        height={212.8}
        x={-11.4}
        y={-11.4}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={5.7} />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_19_86"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_backgroundBlur_19_86"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgComponent;
