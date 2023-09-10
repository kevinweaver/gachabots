import { useState } from "react";
import { CapsuleSVG } from "./CapsuleSVG";
import "../styles/bot.css";

export function Capsule({
  className = "",
  empty = true,
}: {
  className?: string;
  empty?: boolean;
}) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [showBot, setShowBot] = useState(false);

  const handleCapsuleClick = () => {
    if (!empty) {
      setModalVisible(true);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleRedeem = () => {
    setModalVisible(false); // Close the modal when "Redeem" is clicked
    setShowBot(true); // Set showBot to true to show the bot image fullscreen
  };

  return (
    <>
      <div className={className} onClick={handleCapsuleClick}>
        <CapsuleSVG empty={empty} />
      </div>

      {/* Bot Fullscreen Image */}
      {showBot && (
        <>
          <div className="fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center fade-in">
            <img
              src="/images/BG2.gif"
              alt="Background"
              className="absolute object-cover w-full h-full z-0"
              onClick={() => setShowBot(false)}
            />
          </div>
          <div className="fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center">
            <img
              src="/images/bot.png"
              alt="Full Screen Bot"
              className={`w-1/2 h-1/2 object-contain z-10 fall ${
                showBot ? "bot-show" : "bot-hidden"
              }`}
            />
          </div>
        </>
      )}

      {/* Modal rendering */}
      {isModalVisible && !showBot && (
        <div className="fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg">
            <button
              className="bg-blue-500 text-white p-2 rounded"
              onClick={handleRedeem}
            >
              Redeem
            </button>
            <button className="mt-4 mx-4" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
