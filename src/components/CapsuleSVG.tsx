export const CapsuleSVG = ({
  className = "",
  empty = true,
}: {
  className?: string;
  empty?: boolean;
}) => (
  <svg
    width="240"
    height="241"
    viewBox="0 0 240 241"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* <rect width="240" height="241" fill="#1E1E1E" /> */}
    <g clip-path="url(#clip0_0_1)">
      {/* <rect
        width="1512"
        height="982"
        transform="translate(-15 -725)"
        fill="url(#paint0_linear_0_1)"
      /> */}
      <mask id="path-1-inside-1_0_1" fill="white">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M950.008 -243H934.796C930.093 -346.518 844.679 -429 740 -429C635.321 -429 549.907 -346.518 545.204 -243H-16V257H1497V-243H1065.99C1066 -243.333 1066 -243.666 1066 -244C1066 -276.033 1040.03 -302 1008 -302C975.967 -302 950 -276.033 950 -244C950 -243.666 950.003 -243.333 950.008 -243Z"
        />
      </mask>
      <g filter="url(#filter0_i_0_1)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M950.008 -243H934.796C930.093 -346.518 844.679 -429 740 -429C635.321 -429 549.907 -346.518 545.204 -243H-16V257H1497V-243H1065.99C1066 -243.333 1066 -243.666 1066 -244C1066 -276.033 1040.03 -302 1008 -302C975.967 -302 950 -276.033 950 -244C950 -243.666 950.003 -243.333 950.008 -243Z"
          fill="url(#paint1_linear_0_1)"
        />
      </g>
      <path
        d="M934.796 -243L933.797 -242.955L933.84 -242H934.796V-243ZM950.008 -243V-242H951.025L951.008 -243.017L950.008 -243ZM545.204 -243V-242H546.16L546.203 -242.955L545.204 -243ZM-16 -243V-244H-17V-243H-16ZM-16 257H-17V258H-16V257ZM1497 257V258H1498V257H1497ZM1497 -243H1498V-244H1497V-243ZM1065.99 -243L1064.99 -243.017L1064.97 -242H1065.99V-243ZM934.796 -242H950.008V-244H934.796V-242ZM740 -428C844.142 -428 929.119 -345.941 933.797 -242.955L935.795 -243.045C931.068 -347.095 845.216 -430 740 -430V-428ZM546.203 -242.955C550.881 -345.941 635.858 -428 740 -428V-430C634.784 -430 548.932 -347.095 544.205 -243.045L546.203 -242.955ZM-16 -242H545.204V-244H-16V-242ZM-15 257V-243H-17V257H-15ZM1497 256H-16V258H1497V256ZM1496 -243V257H1498V-243H1496ZM1065.99 -242H1497V-244H1065.99V-242ZM1065 -244C1065 -243.672 1065 -243.344 1064.99 -243.017L1066.99 -242.983C1067 -243.321 1067 -243.66 1067 -244H1065ZM1008 -301C1039.48 -301 1065 -275.48 1065 -244H1067C1067 -276.585 1040.58 -303 1008 -303V-301ZM951 -244C951 -275.48 976.52 -301 1008 -301V-303C975.415 -303 949 -276.585 949 -244H951ZM951.008 -243.017C951.003 -243.344 951 -243.672 951 -244H949C949 -243.66 949.003 -243.321 949.009 -242.983L951.008 -243.017Z"
        fill="#DDDDDD"
        mask="url(#path-1-inside-1_0_1)"
      />
      <path
        d="M120 241C186.274 241 240 187.274 240 121C229.645 139 190.798 175 118.246 175C45.6952 175 9.1858 139 0 121C0 187.274 53.7258 241 120 241Z"
        fill="#093E96"
        fill={empty ? "#E8E8E8" : "#093E96"}
      />
      <path
        d="M120 0C53.7258 0 0 53.7258 0 120C9.1858 138 45.6952 174 118.246 174C190.798 174 229.645 138 240 120C240 53.7258 186.274 0 120 0Z"
        fill="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_i_0_1"
        x="-16"
        y="-429"
        width="1513"
        height="686"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_0_1" />
      </filter>
      <linearGradient
        id="paint0_linear_0_1"
        x1="756"
        y1="0"
        x2="756"
        y2="665"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#DCDADA" />
        <stop offset="1" stop-color="#F8FAFD" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_0_1"
        x1="740"
        y1="-429"
        x2="740"
        y2="257"
        gradientUnits="userSpaceOnUse"
      >
        {/* <stop stop-color="#EDEDED" />
        <stop offset="0.69508" stop-color="#CCCCCC" />
        <stop offset="1" stop-color="#C3C3C3" /> */}
      </linearGradient>
      <clipPath id="clip0_0_1">
        <rect
          width="1512"
          height="982"
          fill="white"
          transform="translate(-15 -725)"
        />
      </clipPath>
    </defs>
  </svg>
);
