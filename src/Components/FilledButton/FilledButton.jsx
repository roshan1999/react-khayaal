import './FilledButton.css'

export default function FilledButton(props) {
    return (
        <>
            <button id="btn-filled">
                {props.children}
            </button>
        </>
    );
}