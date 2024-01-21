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
    <div className="py-12 min-h-[90vh] bg-[#080312] px-24">
      <h1 className="text-white text-3xl flex mx-auto pb-4 justify-center">
        Make Smarter Decisions based on Risks you can take
      </h1>
      <div className="">
        <div className="bg-white p-4 w-[40%] flex flex-col items-center mx-auto rounded-md">
          <p className="">Tolerance: {rangeValue}</p>
          <input
            type="range"
            className=" mx-auto"
            onChange={handleSliderChange}
            max={10}
            min={0}
            value={rangeValue}
          />
        </div>

        <div className="content py-12" data-aos="fade-right">
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
