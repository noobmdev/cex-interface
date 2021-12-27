import React, { useEffect } from 'react';
import { init, dispose } from 'klinecharts';
import generatedKLineDataList from './generatedLineDataList';

const KLineChart = ({ w, h }) => {
  function updateData(kLineChart) {
    setTimeout(() => {
      if (kLineChart) {
        const dataList = kLineChart.getDataList();
        const lastData = dataList[dataList.length - 1];
        const newData = generatedKLineDataList(
          lastData.timestamp,
          lastData.close,
          1
        )[0];
        newData.timestamp += 1000 * 60;
        kLineChart.updateData(newData);
      }
      updateData(kLineChart);
    }, 1000);
  }

  useEffect(() => {
    const kLineChart = init('chart-container');
    kLineChart.applyNewData(generatedKLineDataList());
    updateData(kLineChart);
    return () => {
      dispose('chart-container');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div id="chart-container" style={{ width: w, height: h }}></div>;
};

export default KLineChart;
