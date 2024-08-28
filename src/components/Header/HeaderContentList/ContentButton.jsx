function ContentButton({ name, onClick }) {
  return (
    <div>
      <button className="text-black text-lg hover:font-bold" onClick={onClick}>
        {name}
      </button>
    </div>
  );
}

export default ContentButton;
