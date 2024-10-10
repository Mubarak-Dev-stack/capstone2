import "./FormError.css";

function FormError({id, children}) {
    return (
        <div id={id} className="form-error">{children}</div>
    )
}

export default FormError;
