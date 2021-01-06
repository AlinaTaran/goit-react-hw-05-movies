import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/ClipLoader';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: green;
`;

export default function Loader() {
  return (
    <div className="sweet-loading">
      <ClipLoader css={override} size={60} />
    </div>
  );
}
