import BackgroundModal from "./BackgroundModal";
import { AddSemesterModalBox } from "./Modal.css";

const DeleteClassModal = () => {
  return (
    <BackgroundModal width="440" p="1rem">
      <div className={AddSemesterModalBox}>
        <h1>정말 삭제 하시겠습니까?</h1>
        <button>확인</button>
        <button>취소</button>
      </div>
    </BackgroundModal>
  );
};

export default DeleteClassModal;
