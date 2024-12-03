const LoadMoreButton = ({ loadMore, totalProducts, showAll }) => (
  <div className="w-[840px] h-[123px] flex flex-col items-center justify-center mb-[15px]">
    <span className="text-[12px] font-barlow">
      Showing {showAll ? totalProducts : Math.min(2, totalProducts)} of{" "}
      {totalProducts} products
    </span>
    <button
      className="bg-[#aa8453] text-[18px] w-[250px] px-[20px] h-[50px] text-white py-2 rounded"
      onClick={loadMore}
    >
      {showAll ? "Show Less" : "Load More Items"}
    </button>
  </div>
);
export default LoadMoreButton;
