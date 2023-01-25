import { StyleSheet } from 'react-native';
import { PixelRatio } from 'react-native';
const widthDP = 120;
const width = PixelRatio.getPixelSizeForLayoutSize(widthDP);

const Styles = StyleSheet.create({
    listView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        paddingBottom: 14,
        paddingRight: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: 'lightgrey',
        borderBottomStyle: 'solid',
    },
    listView2: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginLeft: 10,
        marginTop: 10,
    },
    imageList: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    coinName: {
        fontSize: 17,
        marginLeft: 10,
        fontWeight: '600',
    },
    symbol: {
        fontSize: 14,
        marginLeft: 10,
        color: 'grey',
        textTransform: 'uppercase',
    },
    priceChange1: {
        color: 'green',
        fontWeight: '600',
        textAlign: 'center',
    },
    priceChange2: {
        color: 'red',
        fontWeight: '600',
        textAlign: 'center',
    },
    innerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 10,
        marginTop: 10,
    },
    imageArrows: {
        width: 23,
        height: 23,
    },
    buttonView1: {
        display: 'flex',
        flexDirection: 'row',
    },
    buttonText: {
        fontSize: 17,
        fontWeight: '600',
        color: 'grey',
    },
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    coinPrice: {
        fontSize: 17,
    },
    container: {
        backgroundColor: 'white',
    },
    footer: {
        display: 'flex',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: '15%',
        width: '100%',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 5,
    },
    kriptoButton: {
        backgroundColor: '#1e88e5',
        borderRadius: 8,
        width: width,
    },
    headerIcon: {
        width: 35,
        height: 35,
        borderRadius: 25,
    },
    headerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 17,
        fontWeight: '500',
    },
    innerTextHeader: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    headerViewContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 10,
    },
    priceText: {
        fontSize: 40,
        fontWeight: '500',
    },
    positiveChange: {
        backgroundColor: '#90EE90',
        width: '25%',
        borderRadius: 3,
        padding: 2,
    },
    negativeChange: {
        backgroundColor: '#FDA4A4',
        width: '25%',
        borderRadius: 3,
        padding: 2,
    },
    smallHeaderView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: '2%',
        marginRight: '2%',
        paddingBottom: '2%',
    },
    lowText: {
        fontWeight: '300',
        marginRight: '2%',
    },
    highText: {
        fontWeight: '700',
    },
    priceChange11: {
        color: 'green',
        fontWeight: '600',
        textAlign: 'center',
        fontSize: 17,
    },
    priceChange22: {
        color: 'red',
        fontWeight: '600',
        textAlign: 'center',
        fontSize: 17,
    },
    buyButtonView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 25,
    },
    overviewView: {
        display: 'flex',
        flexDirection: 'row',
    },
    overviewText: {
        marginLeft: '3%',
        fontSize: 28,
        fontWeight: '600',
    },
    tableContainer: {
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: 'lightgrey',
        flexDirection: 'row',
    },
    tableContainer1: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: 'lightgrey',
        flexDirection: 'row',
    },
    tableRow: {
        flexDirection: 'column',
        flex: 1,
        padding: 10,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
    },
    tableCell: {
        fontWeight: '500',
    },
    tableCell1: {
        fontWeight: '300',
        color: 'grey',
    },
});

export default Styles;
