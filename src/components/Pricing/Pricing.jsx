import { AppWrap, MotionWrap } from "../../wrapper";
import PriceCard from "./PriceCard";
import { plans } from "./plans";

const Pricing = () => {
  return (
    <div className="flex items-center justify-center gap-16">
      {plans.map((plan) => (
        <PriceCard plan={plan} />
      ))}
    </div>
  );
};

export default AppWrap(MotionWrap(Pricing, "app__footer"), "pricing");
