import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { css } from '@emotion/react';
import Modal from '../components/modal';

const stickyNoteContainer = css`
  display: flex;
  flex-wrap: wrap;
  height: 85vh;
  width: 100vw;
  overflow: scroll;
`;

const stickyNote = css`
  height: 200px;
  width: 200px;
  margin: 6px;
  background-color: #bae4ed;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
`;

const modalOpenButton = css`
  position: absolute;
  right: 30px;
  bottom: 30px;
  height: 60px;
  width: 60px;
  border: none;
  cursor: pointer;
  outline: none;
  appearance: none;
  background-color: #bae4ed;
  border-radius: 50%;
`;

const Main: NextPage = () => {
  const [isOpenmodal, setIsOpenModal] = useState<boolean>(false);
  const [infoList, setinfoList] = useState<string[]>([]);
  const swichOfModal = () => {
    isOpenmodal ? setIsOpenModal(false) : setIsOpenModal(true);
  };
  const addInfoList = (info: string) => {
    setinfoList([...infoList, info]);
    swichOfModal();
  };
  return (
    <div>
      <div css={stickyNoteContainer}>
        {infoList.map((info) => (
          <div css={stickyNote}>
            <p>{info}</p>
          </div>
        ))}
      </div>
      <button css={modalOpenButton} onClick={() => swichOfModal()} />
      {isOpenmodal === true && <Modal swichOfModal={swichOfModal} addInfoList={addInfoList} />}
    </div>
  );
};

export default Main;
