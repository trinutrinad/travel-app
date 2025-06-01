import React, { useEffect, useState } from "react";

const GOOGLE_API_KEY = "YOUR_GOOGLE_PLACES_API_KEY_HERE"; // Replace with your key

interface Place {
  place_id: string;
  name: string;
  vicinity: string; // address snippet
  rating?: number;
}

const LocalServices = () => {
  const [destination, setDestination] = useState("");
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [hotels, setHotels] = useState<Place[]>([]);
  const [restaurants, setRestaurants] = useState<Place[]>([]);
  const [transports, setTransports] = useState<Place[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Geocode destination to lat,lng
  const geocodeDestination = async () => {
    if (!destination.trim()) {
      setError("Please enter a destination location");
      return;
    }
    setError("");
    setLoading(true);

    try {
      const res = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          destination
        )}&key=${GOOGLE_API_KEY}`
      );
      const data = await res.json();
      if (data.status === "OK" && data.results.length > 0) {
        const loc = data.results[0].geometry.location;
        setLocation(loc);
      } else {
        setError("Failed to find location for this destination");
      }
    } catch (e) {
      setError("Error geocoding destination");
    }
    setLoading(false);
  };

  // Search nearby places using Places API
  const fetchNearbyPlaces = async (type: string, setter: React.Dispatch<React.SetStateAction<Place[]>>) => {
    if (!location) return;
    setLoading(true);

    try {
      const radius = 5000; // 5 km radius
      const res = await fetch(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.lat},${location.lng}&radius=${radius}&type=${type}&key=${GOOGLE_API_KEY}`
      );
      const data = await res.json();
      if (data.status === "OK") {
        setter(data.results);
      } else {
        setter([]);
      }
    } catch {
      setter([]);
    }
    setLoading(false);
  };

  // When location is set, fetch nearby places for hotels, restaurants, and transport
  useEffect(() => {
    if (location) {
      fetchNearbyPlaces("lodging", setHotels);
      fetchNearbyPlaces("restaurant", setRestaurants);
      fetchNearbyPlaces("taxi_stand", setTransports);
    }
  }, [location]);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Local Services Near Destination</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          onClick={geocodeDestination}
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Searching..." : "Search Services"}
        </button>
      </div>

      {error && <p className="text-red-600 font-semibold">{error}</p>}

      {location && (
        <>
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Hotels Near {destination}</h2>
            {hotels.length > 0 ? (
              <ul className="list-disc list-inside">
                {hotels.slice(0, 5).map((hotel) => (
                  <li key={hotel.place_id}>
                    <strong>{hotel.name}</strong> - {hotel.vicinity}{" "}
                    {hotel.rating && <span>⭐ {hotel.rating}</span>}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No hotels found nearby.</p>
            )}
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Restaurants Near {destination}</h2>
            {restaurants.length > 0 ? (
              <ul className="list-disc list-inside">
                {restaurants.slice(0, 5).map((rest) => (
                  <li key={rest.place_id}>
                    <strong>{rest.name}</strong> - {rest.vicinity}{" "}
                    {rest.rating && <span>⭐ {rest.rating}</span>}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No restaurants found nearby.</p>
            )}
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Local Travel Services Near {destination}</h2>
            {transports.length > 0 ? (
              <ul className="list-disc list-inside">
                {transports.slice(0, 5).map((trans) => (
                  <li key={trans.place_id}>
                    <strong>{trans.name}</strong> - {trans.vicinity}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No local travel services found nearby.</p>
            )}
          </section>
        </>
      )}
    </div>
  );
};

export default LocalServices;
