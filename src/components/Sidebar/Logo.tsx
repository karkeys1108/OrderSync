const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="h-12 w-12 flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2l4.9 9.8L22 12l-5.1 2.2L12 22l-4.9-7.8L2 12l5.1-2.2L12 2z"></path>
        </svg>
      </div>
      {/* Logo Text */}
      <h1 className="text-2xl font-bold tracking-tight">
        <span className="text-indigo-500">Order</span>
        <span className="text-purple-500">Sync</span>
      </h1>
    </div>
  );
};

export default Logo;
