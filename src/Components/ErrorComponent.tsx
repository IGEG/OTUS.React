import type { ErrorProps } from "../Types/models";

const ErrorComponent = ({message}: ErrorProps) => {

    return (
        <div style={{ color: "black", background:"red" }}>
            <h2>Ошибка!</h2>
            <h3>
                {message}
            </h3>
        </div>
    )
}

export default ErrorComponent;