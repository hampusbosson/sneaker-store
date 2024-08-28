import icons from "../../assets/icons/icons";
import HeaderContentList from "./HeaderContentList/HeaderContentList";

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
        className="fixed inset-0 bg-black opacity-50 z-10 lg:hidden"
        onClick={handleOverlayClick}
      ></div>
      <dialog
        open
        className="fixed top-0 left-0 h-screen w-[29rem] z-10 bg-white shadow-lg m-0 flex flex-col p-4 lg:hidden"
        style={{ inset: "0 auto 0 0" }}
        onClick={handleDialogClick}
      >
        <div className="flex flex-col w-full justify-between h-full">
          <div>
            <button className="p-4 w-full flex justify-end" onClick={onClose}>
              {icons.closeIcon}
            </button>
            <div>
              <HeaderContentList view={"mobile"} />
            </div>
          </div>
          <div className="flex flex-col gap-4 p-7 bg-gray-100 -m-4">
            <button className="font-bold flex items-center gap-2">
              {icons.userIconMobile}
              Log in
            </button>
            <div className="flex gap-4">
              {icons.facebookIconMobile}
              {icons.instagramIconMobile}
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default MobileSidebar;
