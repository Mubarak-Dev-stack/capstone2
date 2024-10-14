import "./FormError.css";

function FormError({id, children}) {
    return (
        <div id={id} className="form-error" data-testid="error-message">{children}</div>
    )
}

export default FormError;
