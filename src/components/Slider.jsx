import React from "react";
//import "./Slider.css";

function Slider() {
  const [allData, setAllData] = React.useState([]);
  const [rangeValue, setRangeValue] = React.useState(5);
  const [currentData, setCurrentData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchData = async () => {
    try {
      await fetch("https://node.primeswop.com/api/getsliderdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((responseJson) => {
          setAllData(responseJson.data);
          setCurrentData(responseJson.data[rangeValue].data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSliderChange = (event) => {
    const value = event.target.value;
    const currentData = allData[value].data;
    setCurrentData(currentData);
    setRangeValue(value);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="rangeBox">
          <p className="tolerance">Tolerance: {rangeValue}</p>
          <input
            type="range"
            className="range"
            onChange={handleSliderChange}
            max={10}
            min={0}
            value={rangeValue}
          />
        </div>

        <div className="content">
          {!isLoading ? (
            currentData.map(
              (item, key) =>
                item.percentage > 0 && (
                  <div className="data" key={key}>
                    <p className="title">{item.name}</p>
                    <div
                      className={`chart chart-${key}`}
                      style={{ width: item.percentage * 1.5 + "%" }}
                    >
                      <p className="percent">{item.percentage}%</p>
                    </div>
                  </div>
                )
            )
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Slider;
