import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend } from 'chart.js';
import 'chart.js/auto';

// Registering required components
ChartJS.register(Title, Tooltip, Legend);

export default function PieChart({ data }) {
    const chartData = {
        labels: data.labels,
        datasets: [
            {
                label: 'Pie Chart',
                data: data.data,
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Pie Chart Title',
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
                            label += `: ${context.parsed} (${Math.round(context.raw)}%)`;
                        }
                        return label;
                    },
                },
            },
        },
    };

    return <Pie data={chartData} options={options} />;
}
