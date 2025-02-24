import React from "react";

const LanguageArrow: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7.24702 12.14L2.45102 6.658C1.88502 6.012 2.34502 5 3.20402 5L12.796 5C12.9883 4.99984 13.1765 5.05509 13.3381 5.15914C13.4998 5.26319 13.628 5.41164 13.7075 5.58669C13.7869 5.76175 13.8142 5.956 13.7861 6.14618C13.758 6.33636 13.6757 6.51441 13.549 6.659L8.75302 12.139C8.65916 12.2464 8.5434 12.3325 8.41353 12.3915C8.28365 12.4505 8.14266 12.481 8.00002 12.481C7.85738 12.481 7.71638 12.4505 7.58651 12.3915C7.45663 12.3325 7.34088 12.2464 7.24702 12.139V12.14Z"
        fill="white"
      />
    </svg>
  );
};

export default LanguageArrow;
