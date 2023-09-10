"use client";

import { Capsule } from "./Capsule";
import { CapsuleMint } from "./CapsuleMint";
import { ConnectButton } from "../components/ConnectButton";
import { times } from "lodash";
import React, { useState } from "react";

import Logo from "./Logo";

export default function Gachapon() {
  const [showCapsule, setShowCapsule] = useState(false);

  const balance = 5;
  return (
    <>
      <div className="bg-gradient-to-b from-gray-200 to-gray-400 ">
        <div className="absolute top-4 right-4">
          <ConnectButton />
        </div>
        <Logo />
        <div className="py-24 sm:py-10 h-full flex flex-col items-center justify-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center h-full">
              <CapsuleMint setShowCapsule={setShowCapsule} />
              <div className="mx-auto mt-20 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                {times(balance, (index) => {
                  if (index === 0 && showCapsule) {
                    {
                      console.log("ALIVE");
                    }
                    return (
                      <Capsule
                        key={index}
                        empty={false}
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                      />
                    );
                  }
                  return (
                    <Capsule
                      key={index}
                      className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
