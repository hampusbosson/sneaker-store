import icons from "../../assets/icons/icons";

function CartDialog({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black opacity-50 z-10"></div>
      <dialog
        open
        className="fixed top-0 right-0 h-screen w-[25rem] z-10 bg-white shadow-lg m-0"
        style={{ inset: "0 0 0 auto" }}
      >
        <div className="p-4 flex justify-between">
          <h2>Your Cart</h2>
          {/* Cart items go here */}
          <button onClick={onClose}>{icons.closeIcon}</button>
        </div>
      </dialog>
    </>
  );
}

export default CartDialog;
