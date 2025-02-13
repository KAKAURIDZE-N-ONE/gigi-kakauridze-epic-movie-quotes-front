import React from "react";

const PlusButton: React.FC = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 0.999023C14.2652 0.999023 14.5196 1.10438 14.7071 1.29192C14.8946 1.47945 15 1.73381 15 1.99902V13.999C15 14.2642 14.8946 14.5186 14.7071 14.7061C14.5196 14.8937 14.2652 14.999 14 14.999H2C1.73478 14.999 1.48043 14.8937 1.29289 14.7061C1.10536 14.5186 1 14.2642 1 13.999V1.99902C1 1.73381 1.10536 1.47945 1.29289 1.29192C1.48043 1.10438 1.73478 0.999023 2 0.999023H14ZM2 -0.000976562C1.46957 -0.000976562 0.960859 0.209737 0.585786 0.58481C0.210714 0.959883 0 1.46859 0 1.99902V13.999C0 14.5295 0.210714 15.0382 0.585786 15.4132C0.960859 15.7883 1.46957 15.999 2 15.999H14C14.5304 15.999 15.0391 15.7883 15.4142 15.4132C15.7893 15.0382 16 14.5295 16 13.999V1.99902C16 1.46859 15.7893 0.959883 15.4142 0.58481C15.0391 0.209737 14.5304 -0.000976562 14 -0.000976562H2Z"
        fill="white"
      />
      <path
        d="M8 3.99902C8.13261 3.99902 8.25979 4.0517 8.35355 4.14547C8.44732 4.23924 8.5 4.36642 8.5 4.49902V7.49902H11.5C11.6326 7.49902 11.7598 7.5517 11.8536 7.64547C11.9473 7.73924 12 7.86642 12 7.99902C12 8.13163 11.9473 8.25881 11.8536 8.35258C11.7598 8.44635 11.6326 8.49902 11.5 8.49902H8.5V11.499C8.5 11.6316 8.44732 11.7588 8.35355 11.8526C8.25979 11.9463 8.13261 11.999 8 11.999C7.86739 11.999 7.74021 11.9463 7.64645 11.8526C7.55268 11.7588 7.5 11.6316 7.5 11.499V8.49902H4.5C4.36739 8.49902 4.24021 8.44635 4.14645 8.35258C4.05268 8.25881 4 8.13163 4 7.99902C4 7.86642 4.05268 7.73924 4.14645 7.64547C4.24021 7.5517 4.36739 7.49902 4.5 7.49902H7.5V4.49902C7.5 4.36642 7.55268 4.23924 7.64645 4.14547C7.74021 4.0517 7.86739 3.99902 8 3.99902Z"
        fill="white"
      />
    </svg>
  );
};

export default PlusButton;
