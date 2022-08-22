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
  addInfoList: (info: string) => void;
};

const Modal: React.FC<Props> = ({ swichOfModal, addInfoList }: Props) => {
  const [info, setInfo] = useState('');
  return (
    <div css={modalContainer}>
      <button
        onClick={() => {
          swichOfModal();
        }}
      >
        閉じる
      </button>
      <textarea value={info} onChange={(e) => setInfo(e.target.value)} />
      <input type="submit" onClick={() => addInfoList(info)}></input>
    </div>
  );
};

export default Modal;
