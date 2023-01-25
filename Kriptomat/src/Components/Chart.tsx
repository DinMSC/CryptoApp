import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { useSelector } from 'react-redux';

function Chart() {
    const coin = useSelector((store: any) => store.coins.currentItem);
    return (
        <LineChart
            data={{
                labels: ['24h Low', 'Current', '24h High'],
                datasets: [
                    {
                        data: [coin.low_24h, coin.current_price, coin.high_24h],
                    },
                ],
            }}
            width={Dimensions.get('window').width} // from react-native
            height={250}
            yAxisLabel='€'
            yAxisInterval={1}
            chartConfig={{
                backgroundColor: 'white',
                backgroundGradientFrom: 'white',
                backgroundGradientTo: 'white',
                color: (opacity = 1) => `rgba(0,0,0,${opacity})`,
                labelColor: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                    borderRadius: 16,
                },
                propsForDots: {
                    r: '0',
                },
            }}
            bezier
            style={{
                marginVertical: 8,
                borderRadius: 16,
            }}
        />
    );
}

export default Chart;
