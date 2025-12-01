export default function SpinnerLoading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="w-16 h-16 border-4 border-t-darkBlue border-b-darkBlue border-l-gray-300 border-r-gray-300 
      rounded-full animate-spin"
      ></div>
    </div>
  );
}
