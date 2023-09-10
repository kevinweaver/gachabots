import { Capsule } from "./Capsule";
import { CapsuleBalance } from "./CapsuleBalance";
import { CapsuleMint } from "./CapsuleMint";
import { ConnectButton } from "../components/ConnectButton";
import { Connected } from "../components/Connected";

export default function Gachapon() {
  return (
    <>
      <ConnectButton />

      <Connected>
        <div className="bg-gradient-to-b from-gray-200 to-gray-300 py-24 sm:py-32 h-full flex flex-col items-center justify-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center h-full">
              <CapsuleMint />
              {/* <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">

        </h2> */}
              {/* <CapsuleBalance /> */}
              <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                <Capsule className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
                <Capsule className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
                <Capsule className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
                <Capsule className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
                <Capsule className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
              </div>
            </div>
          </div>
        </div>
      </Connected>
    </>
  );
}
