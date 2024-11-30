export function Message({ message }) {
    return (
        <>
            {message && (
                <div className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-white text-green-500 py-2 px-6 rounded-md shadow-lg">
                    <p className="text-center">{message}</p>
                </div>
            )}
        </>
    );
}