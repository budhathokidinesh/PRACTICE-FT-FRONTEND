import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Transaction from "../../Pages/Transaction";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);
console.log(Transaction.title);
const LineChart = () => {
  // const expense = Transaction()
  // const data = {
  //     labels: {}
  // }
  return (
    <div>
      <Line data={data} options={options}></Line>
    </div>
  );
};

export default LineChart;
