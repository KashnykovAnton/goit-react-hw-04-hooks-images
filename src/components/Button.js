export default function Button({ onClick }) {
  return (
    <div className="Button-div">
      <button className="Button" type="button" onClick={onClick}>
        LoadMore
      </button>
    </div>
  );
}
