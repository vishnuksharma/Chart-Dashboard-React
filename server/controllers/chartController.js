const db = require('../database/db.json');

exports.getChartType = (req, res) => {
    console.log('chart Type');

    return res.json(db.chartType);

}

exports.getChartData = (req, res) => {
    console.log('chart data', req.params.dataset);
    const dataSet = req.params.dataset
    let returnData = '';
    switch (dataSet) {
        case '1':
            returnData = db.chartDataSetOne;
            break;
        case '2':
            returnData = db.chartDataSetTwo;
            break;
        case '3':
            returnData = db.chartDataSetThree;
            break;
        case '4':
            returnData = db.chartDataSetFour;
            break;
        default:
            returnData = [];
    }

    return res.status(200).json(returnData);
}