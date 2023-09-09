import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React from "react";

const DestinationMap = () => {
  return (
    <>
      <div className="lg:mx-20 md:mx-10 mx-5">
        <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold">
          Destination Map Location
        </h1>
        <div className="my-10" style={{ height: "400px" }}>
          <LoadScript googleMapsApiKey="AIzaSyAPkTZqSTX4xwSo2BOO6GsSa53TAACPuvI">
            <GoogleMap
              mapContainerStyle={{
                height: "100%",
                width: "100%",
                borderRadius: "20px",
              }}
              center={{ lat: -33.93326675556497, lng: 18.502238291493683 }}
              zoom={11}
            >
              <Marker
                position={{
                  lat: -33.93326675556497,
                  lng: 18.502238291493683,
                }}
              />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </>
  );
};

export default DestinationMap;
