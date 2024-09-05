import { CandlestickChart, LineChart, BarChart, PieChart } from '../components/charts';
import styles from '../styles/Dashboard.module.css';

export default function Dashboard({ candlestickData, lineChartData, barChartData, pieChartData }) {
    return (
        <div className={styles.dashboard}>
            <div className={styles.chartContainer}>
                <CandlestickChart data={candlestickData} />
            </div>
            <div className={styles.chartContainer}>
                <LineChart data={lineChartData} />
            </div>
            <div className={styles.chartContainer}>
                <BarChart data={barChartData} />
            </div>
            <div className={styles.chartContainer}>
                <PieChart data={pieChartData} />
            </div>
        </div>
    );
}

export async function getServerSideProps() {
    const candlestickResponse = await fetch('http://localhost:8000/api/candlestick-data/');
    const lineChartResponse = await fetch('http://localhost:8000/api/line-chart-data/');
    const barChartResponse = await fetch('http://localhost:8000/api/bar-chart-data/');
    const pieChartResponse = await fetch('http://localhost:8000/api/pie-chart-data/');

    return {
        props: {
            candlestickData: await candlestickResponse.json(),
            lineChartData: await lineChartResponse.json(),
            barChartData: await barChartResponse.json(),
            pieChartData: await pieChartResponse.json(),
        },
    };
}
