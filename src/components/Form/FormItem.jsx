import "./FormItem.css";

function FormItem({ hasError, children }) {
    return (
        <div className="form__item" data-error={hasError ? true : null}>
            {children}
        </div>
    );
}

export default FormItem;
