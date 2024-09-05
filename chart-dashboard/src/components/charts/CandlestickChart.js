import { createChart } from 'lightweight-charts';
import { useEffect, useRef } from 'react';

export default function CandlestickChart({ data }) {
    const chartContainerRef = useRef();

    useEffect(() => {
        // Create chart with dynamic width and height
        const chart = createChart(chartContainerRef.current, {
            width: chartContainerRef.current.clientWidth,
            height: chartContainerRef.current.clientHeight,
            layout: {
                backgroundColor: '#ffffff',
                textColor: '#000000',
            },
        });

        const candlestickSeries = chart.addCandlestickSeries();
        const chartData = Array.isArray(data) ? data : data.data;

        // Transform data
        const transformedData = chartData.map(item => ({
            time: item.x,    // Map 'x' to 'time'
            open: item.open,
            high: item.high,
            low: item.low,
            close: item.close
        }));

        candlestickSeries.setData(transformedData);

        // Resize the chart when the window is resized
        const handleResize = () => {
            chart.resize(chartContainerRef.current.clientWidth, chartContainerRef.current.clientHeight);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            chart.remove();
        };
    }, [data]);

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '10px' }}>
                Candlestick Chart Title
            </h3>
            <div ref={chartContainerRef} style={{ width: '100%', height: '300px' }} />
        </div>
    );
}
