import BackgroundModal from "./BackgroundModal";
import { AddSemesterModalBox } from "./Modal.css";

const AddSemesterModal = () => {
  return (
    <BackgroundModal width="440" p="1rem">
      <div className={AddSemesterModalBox}>
        <h1>학기</h1>
        <select>
          <option key="1st" value="1">
            1학년
          </option>
          <option key="2nd" value="2">
            2학년
          </option>
          <option key="3rd" value="3">
            3학년
          </option>
          <option key="4th" value="4">
            4학년
          </option>
        </select>
        <h1>학기</h1>
        <select>
          <option key="1st" value="1">
            1학기
          </option>
          <option key="2nd" value="2">
            2학기
          </option>
          <option key="summer" value="3">
            여름학기
          </option>
          <option key="winter" value="4">
            겨율학기
          </option>
        </select>
        <button>Submit</button>
      </div>
    </BackgroundModal>
  );
};

export default AddSemesterModal;
