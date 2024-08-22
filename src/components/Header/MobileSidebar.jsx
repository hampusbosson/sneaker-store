import icons from "../../assets/icons/icons";

function MobileSidebar({ isOpen, onClose }) {
  const handleOverlayClick = () => {
    onClose();
  };

  const handleDialogClick = (e) => {
    e.stopPropagation(); // Prevent click inside the dialog from closing it
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black opacity-50 z-10"
        onClick={handleOverlayClick}
      ></div>
      <dialog
        open
        className="fixed top-0 left-0 h-screen w-[29rem] z-10 bg-white shadow-lg m-0 flex flex-col p-4"
        style={{ inset: "0 auto 0 0" }}
        onClick={handleDialogClick}
      >
        <div className="flex w-full justify-end">
          <button onClick={onClose}>{icons.closeIcon}</button>
        </div>
      </dialog>
    </>
  );
}

export default MobileSidebar;
