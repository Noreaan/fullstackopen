const Notification = ({ message, success }) => {
    return message ? (
        <div className={success ? 'success' : 'error'}>
            {message}
        </div>
    ) : null;
}

export default Notification