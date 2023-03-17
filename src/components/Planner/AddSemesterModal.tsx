import BackgroundModal from "../Modal/BackgroundModal";

const AddSemesterModal = ({ openModal, setOpenModal }: any) => {
  return (
    <BackgroundModal
      width="400"
      p="1rem"
      openModal={openModal}
      setOpenModal={setOpenModal}
    >
      <>
        <h1>학기</h1>
        <select>
          <option key="banana" value="banana">
            바나나
          </option>
          <option key="apple" value="apple">
            사과
          </option>
          <option key="orange" value="orange">
            오렌지
          </option>
        </select>
        <h1>학기</h1>
        <select>
          <option key="banana" value="banana">
            바나나
          </option>
          <option key="apple" value="apple">
            사과
          </option>
          <option key="orange" value="orange">
            오렌지
          </option>
        </select>
        <button>Submit</button>
      </>
    </BackgroundModal>
  );
};

export default AddSemesterModal;
