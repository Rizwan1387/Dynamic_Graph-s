import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale } from 'chart.js';
import 'chart.js/auto';

// Registering required components
ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    CategoryScale,
    LinearScale
);

export default function LineChart({ data }) {
    const chartData = {
        labels: data.labels,
        datasets: [
            {
                label: 'Line Chart',
                data: data.data,
                fill: false,
                borderColor: 'rgba(75, 192, 192, 1)',
                tension: 0.1, // Smoothing of the line
            },
        ],
    };

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Line Chart', // Change this to your desired title
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

    return <Line data={chartData} options={options} />;
}
