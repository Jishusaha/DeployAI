export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center py-16">

      <div className="w-16 h-16 rounded-full border-4 border-cyan-500 border-t-transparent animate-spin"></div>

      <p className="mt-6 text-gray-400 text-lg">
        AI is analyzing your repository...
      </p>

    </div>
  );
}