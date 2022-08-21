import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import '../pages/main';

const modalContainer = css`
  position: absolute;
  right: 20px;
  bottom: 15vh;
  height: 80vh;
  width: 20vw;
  border: 3px solid black;
`;

type Props = {
  swichOfModal: () => void;
};

const Modal: React.FC<Props> = ({ swichOfModal }: Props) => {
  return (
    <div css={modalContainer}>
      <button
        onClick={() => {
          swichOfModal();
        }}
      >
        閉じる
      </button>
      <textarea></textarea>
      <input type="submit"></input>
    </div>
  );
};

export default Modal;
