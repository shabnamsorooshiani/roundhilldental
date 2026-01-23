"use client";
import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

export default function Map({ data }) {
  const mapRef = React.useRef(null);

  useEffect(() => {
    const initializeMap = async () => {
      const loader = new Loader({
        apiKey: "AIzaSyCeB-wkRnh2d5sbAT5IkyFIsznHM_renqc",
        version: "quartely",
      });
      const { Map } = await loader.importLibrary("maps");
      const { Marker } = await loader.importLibrary("marker");
      const locationInMap = {
        lat: 37.749848013396374,
        lng: -121.43477134110451,
      };
      const options = {
        center: locationInMap,
        zoom: 16,
      };

      const map = new Map(mapRef.current, options);
      const marker = new Marker({ map: map, position: locationInMap });
    };
    initializeMap();
  }, []);
  return (
    <div className="h-[500px] lg:h-[700px] relative">
      <div className="relative">
        <div className="h-[500px] lg:h-[700px]" ref={mapRef}></div>
        <div className="map-box py-[9px] pl-[11px] pr-8">
          <div className="text-[14px] font-medium">Round Hill Dental</div>
          <div className="text-[12px] text-[#5b5b5b] mt-[6px]">
            1902 N Tracy Blvd, Tracy, CA 95376
          </div>
          <div className="center pt-1">
            <span className="font-semibold pr-1 text-[#5b5b5b]">4.9</span>
            <div className="flex gap-[2px]">
              {[1, 2, 3, 4, 5].map((el) => (
                <img
                  key={el}
                  src="/image/pseudo.png"
                  alt="star"
                  width={12}
                  height={12}
                />
              ))}
            </div>
            <a
              href="https://www.google.com/search?hl=en-UA&gl=ua&q=Round+Hill+Dental%3B+Formerly+Round+Hill+Dental+in+Tracy,+1902+N+Tracy+Blvd,+Tracy,+CA+95376,+United+States&ludocid=4961638810027109841&lsig=AB86z5V5N4n3TfnpBPigGVqNu2wu&hl=en&gl=UA#lrd=0x80903da3e8e6ce11:0x44db4835b7752dd1,1"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="View larger map"
              className="text-[#1a73e8] hover:underline text-[12px] pl-4 pt-1"
            >
              49 reviews
            </a>
          </div>
          <a
            href="https://maps.app.goo.gl/V7SQhesK1eFJPEKbA"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View larger map"
            className="text-[#1a73e8] hover:underline text-[12px]"
          >
            View large map
          </a>
        </div>
      </div>
    </div>
  );
}
