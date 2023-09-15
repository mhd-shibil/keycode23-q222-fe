const PriceCard = ({ plan }) => {
  return (
    <div className="min-w-[280px] h-full rounded-md font-semibold bg-white relative justify-between flex flex-col">
      <div className="w-full bg-gray-800 text-white flex flex-col items-center justify-center py-4 rounded-md gap-2">
        <div>{plan.name}</div>
        <div className="text-5xl">${plan.price}</div>
        <div>per month</div>
      </div>
      <div className="flex items-center flex-col py-8 gap-2">
        {plan.features.map((feature) => (
          <div>{feature}</div>
        ))}
      </div>
      <div className="p-4 w-full">
        <button className=" bg-gray-200 w-full px-4 py-2 rounded">
          Get Plan
        </button>
      </div>
    </div>
  );
};

export default PriceCard;
