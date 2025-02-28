import { useEffect, useState } from "react";
// import { MdAttachMoney } from "react-icons/md";
import moneyGrow from "../assets/moneyGrow.jpg";

const financialTips = [
  {
    tip: "Live below your means to save more and avoid unnecessary debt.",
    author: "Warren Buffett",
  },
  {
    tip: "Pay yourself first by saving a fixed percentage of your income before anything else.",
    author: "David Bach",
  },
  {
    tip: "Invest early to take advantage of compound interest over time.",
    author: "Albert Einstein",
  },
  {
    tip: "Build an emergency fund with at least 3-6 months' worth of expenses.",
    author: "Suze Orman",
  },
  {
    tip: "Diversify your investments to minimize risks and optimize returns.",
    author: "Benjamin Graham",
  },
  {
    tip: "Avoid lifestyle inflation; don't increase spending as your income grows.",
    author: "Thomas J. Stanley",
  },
  {
    tip: "Understand the difference between assets and liabilities; invest in assets.",
    author: "Robert Kiyosaki",
  },
  {
    tip: "Track your spending to identify areas where you can cut costs.",
    author: "Dave Ramsey",
  },
  {
    tip: "Focus on long-term financial goals instead of short-term gratification.",
    author: "Peter Lynch",
  },
  {
    tip: "Learn to say no to expenses or investments that don't align with your goals.",
    author: "Tony Robbins",
  },
];

export const FinancialTips = () => {
  const [showQuate, setShowQuate] = useState(financialTips[0]);

  useEffect(() => {
    setInterval(() => {
      setShowQuate(
        financialTips[Math.floor(Math.random() * financialTips.length)]
      );
    }, 3000);
  }, []);

  const { tip, author } = showQuate;
  return (
    <div
      className="d-flex flex-column justify-content-center tips"
      style={{
        height: "100%",
      }}
    >
      <div className="mb-5  d-flex flex-column align-items-center">
        {/* <MdAttachMoney
          className="text-success"
          style={{
            fontSize: "10rem",
          }}
        /> */}
        <div>
          <img
            className="rounded"
            src={moneyGrow}
            alt=""
            style={{
              width: "450px",
              height: "350px",
            }}
          />
        </div>
        <div className="mt-2">Watch your money grow!</div>
      </div>

      <p>{tip}</p>
      <p>- {author}</p>
    </div>
  );
};
