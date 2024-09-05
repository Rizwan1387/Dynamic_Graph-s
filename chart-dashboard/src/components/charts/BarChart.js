import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import 'chart.js/auto';

// Registering required components
ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
);

export default function BarChart({ data }) {
    const chartData = {
        labels: data.labels,
        datasets: [
            {
                label: 'Bar Chart',
                data: data.data,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Bar Chart Title', // Change this to your desired title
                position: 'top', // Title position
                font: {
                    size: 16,
                },
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        let label = context.label || '';
                        if (context.parsed) {
                            label += `: ${context.parsed.y}`;
                        }
                        return label;
                    },
                },
            },
        },
        responsive: true,
        maintainAspectRatio: false,
    };

    return <Bar data={chartData} options={options} />;
}
