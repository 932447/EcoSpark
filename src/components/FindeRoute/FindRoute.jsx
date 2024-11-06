import React, { useState } from "react";
import FindRoute_img1 from "../../images/FindRoute_img1.png";
import FindRoute_img3 from "../../images/FindRoute_img3.png";
import FindRoute_img4 from "../../images/FindRoute_img4.png";
import FindRoute_img5 from "../../images/FindRoute_img5.jpg";

const FindRoute = () => {
  const [totalKm, setTotalKm] = useState("");
  const [evRange, setEvRange] = useState("");
  const [batteryPercentage, setBatteryPercentage] = useState("");
  const [stopsRequired, setStopsRequired] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform calculation
    let remainingDistance = totalKm;
    let stops = 0;
    let remainingBattery = batteryPercentage / 100;

    while (remainingDistance > 0) {
      stops++;
      remainingDistance -= evRange * remainingBattery;
      if (remainingDistance > 0) {
        // Charge battery to 100%
        remainingBattery = 1;
      }
    }

    setStopsRequired(stops - 1); // Subtract 1 for the initial charge
  };

  const [selectedCity, setSelectedCity] = useState("Mumbai"); // Default city is Mumbai

  // Dummy data for nearby EV stations
  const nearbyStations = [
    {
      id: 1,
      city: "Mumbai",
      name: "Tata Power Charging Station",
      location:
        "Final Plot, 309, Service Rd, next to Modi Hyundai Showroom, Dandekar Colony, Panch Pakhdi, Thane West, Thane, Maharashtra 400602",
      link: "https://www.google.com/maps/d/viewer?mid=1oELdsXkoT9ykhekvVecikw-rgBtWWkU&femb=1&ll=19.197064000000022%2C72.9622884&z=11",
    },
    {
      id: 2,
      city: "Mumbai",
      name: "Tata Power Charging Station",
      location:
        "Anik Depot, Municipal Kamgar Vasahat, Trombay Indusrial Area, Chembur, Mumbai, Maharashtra 400022",
      link: "https://example.com/station2",
    },
    {
      id: 3,
      city: "Mumbai",
      name: "Chhatrapati Shivaji Maharaj International Airport",
      location: "Mumbai, Maharashtra 400099",
      link: "https://www.google.com/maps/d/viewer?mid=1oELdsXkoT9ykhekvVecikw-rgBtWWkU&femb=1&ll=19.090217900000006%2C72.8628087&z=11",
    },
    {
      id: 4,
      city: "Mumbai",
      name: "EV Charging Pump",
      location:
        "Bombay House, 24, Homi Modi St, Kala Ghoda, Fort, Mumbai, Maharashtra 400001",
      link: "https://www.google.com/maps/d/viewer?mid=1oELdsXkoT9ykhekvVecikw-rgBtWWkU&femb=1&ll=18.92481585017841%2C72.83836771340152&z=14",
    },
    {
      id: 5,
      city: "Mumbai",
      name: "Jio-bp pulse Charging Station",
      location:
        "Ground Floor, Krishanaraj Society, Walkeshwar, Malabar Hill, Mumbai, Maharashtra 400006",
      link: "https://www.google.com/maps/d/viewer?mid=1oELdsXkoT9ykhekvVecikw-rgBtWWkU&femb=1&ll=18.951751000000005%2C72.80226100000002&z=14",
    },
    {
      id: 6,
      city: "Mumbai",
      name: "Powerbank Charging Station",
      location:
        "8VHV+J9F, NH 48, Naigaon East, Sasunavghar, Maljipada, Maharashtra 401208",
      link: "https://www.google.com/maps/d/viewer?mid=1oELdsXkoT9ykhekvVecikw-rgBtWWkU&femb=1&ll=19.328828800000025%2C72.89361710000001&z=14",
    },
    {
      id: 7,
      city: "Mumbai",
      name: "Station 7",
      location: "Location 7",
      link: "https://example.com/station7",
    },
    {
      id: 8,
      city: "Mumbai",
      name: "Station 8",
      location: "Location 8",
      link: "https://example.com/station8",
    },
    {
      id: 9,
      city: "Mumbai",
      name: "Station 9",
      location: "Location 9",
      link: "https://example.com/station9",
    },
    {
      id: 10,
      city: "Mumbai",
      name: "Station 10",
      location: "Location 10",
      link: "https://example.com/station10",
    },
    {
      id: 11,
      city: "Pune",
      name: "Station 1",
      location: "Location 11",
      link: "https://example.com/station11",
    },
    {
      id: 12,
      city: "Pune",
      name: "Station 2",
      location: "Location 12",
      link: "https://example.com/station12",
    },
    {
      id: 13,
      city: "Pune",
      name: "Station 3",
      location: "Location 13",
      link: "https://example.com/station13",
    },
    {
      id: 14,
      city: "Pune",
      name: "Station 4",
      location: "Location 14",
      link: "https://example.com/station14",
    },
    {
      id: 15,
      city: "Pune",
      name: "Station 5",
      location: "Location 15",
      link: "https://example.com/station15",
    },
    // Add more stations for other cities as needed
  ];

  // Filter stations based on selected city
  const filteredStations = nearbyStations.filter(
    (station) => station.city === selectedCity
  );

  return (
    <div className="w-full mx-auto py-10">
      <div className="flex items-center">
        <div className="flex flex-col items-center justify-center">
          <div className="text-xl font-bold mb-4">Source</div>
          <div className="">
            <img src={FindRoute_img3} alt="Source" className="h-40" />
          </div>
        </div>
        <div className="bg-black">
          <img src={FindRoute_img5} alt="" className="h-16 w-96" />
        </div>
        <div className="w-1/3">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="totalKm"
              >
                Total Kilometers
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="totalKm"
                type="number"
                placeholder="Total Kilometers"
                required
                value={totalKm}
                onChange={(e) => setTotalKm(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="evRange"
              >
                EV Range (km)
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="evRange"
                type="number"
                placeholder="EV Range"
                required
                value={evRange}
                onChange={(e) => setEvRange(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="batteryPercentage"
              >
                Battery Percentage
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="batteryPercentage"
                type="number"
                placeholder="Battery Percentage"
                min="1"
                max="100"
                required
                value={batteryPercentage}
                onChange={(e) => setBatteryPercentage(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                How many stops are required to charge the vehicle?
              </button>
            </div>
          </form>
        </div>
        <div>
          <img src={FindRoute_img5} alt="" className="h-16 w-96" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-xl font-bold mb-4">Destination</div>
          <img src={FindRoute_img4} alt="" />
        </div>
      </div>
      {stopsRequired !== null && (
        <div className="flex flex-col items-center justify-center p-4 mt-4">
          <div className="flex">
            {[...Array(Number(stopsRequired))].map((_, index) => (
              <img key={index} src={FindRoute_img1} alt="" className="h-20" />
            ))}
          </div>
          <p
            style={{
              color: "green",
              fontSize: "1.2rem",
              fontWeight: "bold",
              marginLeft: "10px",
            }}
          >
            Number of stops required for charging: <span>{stopsRequired}</span>
          </p>
        </div>
      )}
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center justify-center">
          Nearby EV Charging Stations
        </h2>
        {/* Dropdown for selecting city */}
        <div className="mb-4 flex items-center justify-center gap-4">
          <label className="block mb-2">Select City : </label>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="border rounded-md px-4 py-2"
          >
            {/* Options for different cities */}
            <option value="Mumbai">Mumbai</option>
            <option value="Pune">Pune</option>
            <option value="Delhi">Delhi</option>
            <option value="Chennai">Chennai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
          </select>
        </div>
        {/* Divs for displaying nearby stations */}
        <div className="container mx-auto py-8">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Nearby EV Charging Stations
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {filteredStations.map((station) => (
              <div
                key={station.id}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between"
                style={{ minWidth: "250px", maxWidth: "300px" }}
              >
                <div>
                  <h3 className="text-xl font-semibold mb-2">{station.name}</h3>
                  <p className="text-gray-700 mb-4">{station.location}</p>
                </div>
                <a
                  href={station.link}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Details
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindRoute;
