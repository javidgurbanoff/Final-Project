const ProductCard = ({ item }) => (
  <div className="bg-white p-4 cursor-pointer transition">
    <img
      src={item.src}
      alt={item.title}
      className="w-full h-40 object-cover mb-2 rounded"
    />
    <p className="font-bold text-[#222222] mb-1">{item.title}</p>
    <span className="text-[#6b7280]">${item.price}</span>
  </div>
);

export default ProductCard;
