import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ConsultsM from "../styles/consultsM.module.css";


ChartJS.register(ArcElement, Tooltip, Legend);

const ProgressChart = () => {
  const data = {
    datasets: [
      {
        data: [84, 16], 
        backgroundColor: ["#F0C419", "#D6D5D1", "#8A5EAC"],
        borderColor: ["#F0C419", "#D6D5D1", "#8A5EAC"],
        borderWidth: 1,
        cutout: "75%",
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        enabled: false,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ position: "relative", width: "40vw", height: "200px" }}>
      <Doughnut data={data} options={options} />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "20px",
        }}
        className={ConsultsM.chart}
      >
       <p>84%</p>
      </div>
    </div>
  );
};

export default ProgressChart;
