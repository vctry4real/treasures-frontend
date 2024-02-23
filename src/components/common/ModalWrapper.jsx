import React from 'react';
import { Button, Modal } from 'flowbite-react';
import CardWrapper from '../CardWrapper';

const ModalWrapper = ({ openModal, setOpenModal, children }) => {
  if (!openModal) {
    return;
  }
  return (
    <section className="fixed top-0 right-0 left-0 z-50 h-modal h-screen w-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full items-center justify-center flex bg-opacity-50 dark:bg-opacity-80 bg-white ">
      <CardWrapper className={'p-4 flex flex-col'}>
        <div
          onClick={() => setOpenModal(false)}
          className="flex justify-end cursor-pointer hover:scale-95"
        >
          X
        </div>
        {children}
      </CardWrapper>
    </section>
    // <Modal
    //   show={openModal}
    //   onClose={() => setOpenModal(false)}
    //   className="bg-white w-fit "
    // >
    //   <Modal.Header className="bg-white w-fit"></Modal.Header>
    //   <Modal.Body className="bg-white w-fit ">{children}</Modal.Body>
    //   {/* <Modal.Footer>
    //     <Button onClick={() => setOpenModal(false)}>I accept</Button>
    //     <Button color="gray" onClick={() => setOpenModal(false)}>
    //       Decline
    //     </Button>
    //   </Modal.Footer> */}
    // </Modal>
  );
};

export default ModalWrapper;
