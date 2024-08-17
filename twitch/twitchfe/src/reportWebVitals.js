const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
//export是导出，import是导入，有import就必须有对应的export，本文件的export对应index.js的import
//default表示默认的export，后面的变量名需要一一对应，如果删除default，则index.js6行的import就必须名字相同，
//并且index.js里的reportwebvitals需要加大括号