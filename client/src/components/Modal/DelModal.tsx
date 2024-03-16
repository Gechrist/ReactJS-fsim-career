import { useRef, useEffect } from 'react';
import './DelModal.css';
const DelModal = ({
  name,
  onClick,
  displayModal,
}: {
  id: string;
  name: string;
  onClick: () => void;
  displayModal: (arg: boolean) => void;
}) => {
  const delModalRef = useRef(null);

  useEffect(() => {
    (delModalRef.current! as any).removeAttribute('open');
    (delModalRef.current! as any).showModal();
    const escListener = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        displayModal(false);
      }
    };
    addEventListener('keydown', escListener);
    return () => {
      removeEventListener('keydown', escListener);
    };
  }, []);

  const delCareerFunction = (e: React.FormEvent<EventTarget>) => {
    displayModal(false);
    onClick();
    e.preventDefault();
  };

  return (
    <dialog ref={delModalRef}>
      <form>
        <h4>Are you sure you want to delete {name}? </h4>
        <div id="delete-buttons">
          <button
            onClick={(e: React.FormEvent<EventTarget>) => {
              displayModal(false);
              (delModalRef.current as any).close();
              e.preventDefault();
            }}
            className="red-reset-button"
            value="cancel"
            formMethod="dialog"
            id="cancel-del"
          >
            Cancel
          </button>
          <button
            className="green-save-button"
            onClick={delCareerFunction}
            id="confirm-del"
            value="default"
          >
            Confirm
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default DelModal;
