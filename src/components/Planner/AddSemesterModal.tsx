import BackgroundModal from "../Modal/BackgroundModal";
import { AddSemesterModalBox } from "./Modal.css";

const AddSemesterModal = ({ openModal, setOpenModal }: any) => {
  return (
    <BackgroundModal
      width="440"
      p="1rem"
      openModal={openModal}
      setOpenModal={setOpenModal}
    >
      <div className={AddSemesterModalBox}>
        <h1>학기</h1>
        <select>
          <option key="1st" value="1">
            1학년
          </option>
          <option key="2nd" value="apple">
            2학년
          </option>
          <option key="3rd" value="orange">
            3학년
          </option>
          <option key="3rd" value="orange">
            4학년
          </option>
        </select>
        <h1>학기</h1>
        <select>
          <option key="banana" value="banana">
            1학기
          </option>
          <option key="apple" value="apple">
            2학기
          </option>
          <option key="orange" value="orange">
            여름학기
          </option>
          <option key="orange" value="orange">
            겨율학기
          </option>
        </select>
        <button>Submit</button>
      </div>
    </BackgroundModal>
  );
};

export default AddSemesterModal;
