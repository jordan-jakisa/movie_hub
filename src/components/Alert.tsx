interface Props {
  message: string;
  onDismiss: () => void;
}

const Alert = ({ message, onDismiss }: Props) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      <strong>{message}</strong> You should check in on some of those fields
      below.
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={() => {
          onDismiss();
        }}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default Alert;
