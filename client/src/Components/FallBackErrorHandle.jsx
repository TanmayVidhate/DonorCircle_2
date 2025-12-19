function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div
      role="alert"
      className="w-screen min-h-screen bg-[#ffd6a5] flex flex-col items-center justify-center gap-4"
    >
      <h1 className="text-2xl font-bold text-red-700">
        Something went wrong
      </h1>

      <pre className="text-red-600 bg-white p-3 rounded max-w-xl overflow-auto">
        {error.message}
      </pre>

      <div className="flex gap-3">
        <button
          onClick={resetErrorBoundary}
          className="px-4 py-2 bg-red-600 text-white rounded"
        >
          Try Again
        </button>

        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-gray-800 text-white rounded"
        >
          Reload Page
        </button>
      </div>
    </div>
  );
}

export default ErrorFallback;
