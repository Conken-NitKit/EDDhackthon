import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import '../pages/main';

const modalContainer = css`
  position: absolute;
  right: 20px;
  bottom: 15vh;
  height: 80vh;
  width: 20vw;
  border: 2px solid black;
`;


const textBox = css`
  max-width: 100%;
  min-width: 100%;
  max-height: 90%;
  min-height: 100px;
`

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
      <textarea css={textBox}></textarea>
      <input type="submit"></input>
    </div>
  );
};

export default Modal;
