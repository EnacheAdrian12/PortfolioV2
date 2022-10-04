import React, { useState } from "react";
import bird from "../projectsImages/bird.png";
import mario1 from "../projectsImages/mario1.png";
import mario2 from "../projectsImages/mario2.png";
import coin from "../projectsImages/coin.png";
import sun from "../projectsImages/sun.png";
import qr from "../projectsImages/qr.png";

const Hack = () => {
  const [clicked, setClicked] = useState(false);
  const [buttonHidden, setButtonHidden] = useState(
    "uppercase text-black text-[15px] font-bold p-5 px-10 md:text-[25px] md:p-7 md:px-12 tracking-wide"
  );
  const [messageAfterClicked, setmessageAfterClicked] = useState("");
  const [Page2, setPage2] = useState(false);
  const [Page3, setPage3] = useState(false);
  const [Page4, setPage4] = useState(false);
  const [BackgroundPage3, SetBackgoundPage3] = useState("");
  const [secondBirdHidden, setseccondBirdHidden] = useState(
    "absolute h-20 md:h-28 animation-fly2"
  );
  const [lastMessage, setLastMessage] = useState("");
  const buttonClicked = () => {
    setButtonHidden("hidden");
    setTimeout(function () {
      setmessageAfterClicked("YOU GOT HACKED");
    }, 1000);
    setTimeout(function () {
      setmessageAfterClicked("SENDING ALL YOUR DATA...");
    }, 3000);
    setTimeout(function () {
      setClicked(true);
    }, 6000);
    setTimeout(function () {
      setPage2(true);
    }, 10000);
    setTimeout(function () {
      setseccondBirdHidden("hidden");
    }, 14000);
    setTimeout(function () {
      setPage3(true);
      SetBackgoundPage3("h-screen bg-black flex justify-center items-center");
    }, 16000);
    setTimeout(function () {
      setLastMessage("Deleting your last files...");
    }, 18000);
    setTimeout(function () {
      setLastMessage(
        <div role="status">
          <svg
            class="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      );
    }, 20000);
    setTimeout(function () {
      setLastMessage("Finished");
    }, 23000);
   
    setTimeout(function () {
      setPage4(true);
    }, 25000);
  };

  return (
    <>
      {!clicked ? (
        <div className="h-screen bg-black flex items-center justify-center flex-col">
          <div className="bg-red-600  rounded-full hover:bg-green-600">
            <button className={buttonHidden} onClick={() => buttonClicked()}>
              Click me
            </button>
          </div>
          <div className="mt-4">
            <h1 className="text-white text-[20px] md:text-[40px] font-bold tracking-widest">
              {messageAfterClicked}
            </h1>
          </div>
        </div>
      ) : !Page2 ? (
        <>
          <div className="h-screen w-screen bg-[url('./projectsImages/fundalMario.png')] bg-cover relative">
            <img
              src={bird}
              alt="da"
              className="absolute h-20 md:h-28 animation-fly "
            />
            <img
              src={mario1}
              alt="da"
              className="absolute right-0 md:right-[30%] bottom-0 md:h-56  h-36"
            />
            <img
              src={mario2}
              alt="da"
              className="absolute left-[20%] bottom-56 md:h-60 h-36"
            />
            <img
              src={coin}
              alt="da"
              className="absolute right-0 md:right-[30%] md:bottom-56 md:h-44 animate-bounce h-24 bottom-36 right-2"
            />
          </div>
        </>
      ) : !Page3 ? (
        <>
          <div className="h-screen relative">
            <div className="bg-[saddlebrown] w-screen absolute bottom-0 h-32"></div>

            <img
              src={sun}
              alt="sun"
              className="md:h-96 absolute md:left-[30%] md:right-[30%]"
            />
            <img src={bird} alt="da" className={secondBirdHidden} />
          </div>
        </>
      ) : !Page4 ? (
        <div className={BackgroundPage3}>
          <h1 className="text-white text-[20px]  md:text-[40px] font-bold tracking-widest">
            {lastMessage}
          </h1>
        </div>
      ) : (
        <div className="h-screen w-screen bg-[#1e90ff]">
          <div className="ml-[15%]">
            <h1 className="md:text-[200px] text-white text-[100px]">:(</h1>
            <p className="text-white md:text-[30px] mt-10 mb-5 text-[15px]">
              Your PC ran into a problem and needs to restart. We're <br />
              just collectiong some error info, and then we'll restart for{" "}
              <br />
              your.
            </p>
            <p className="text-white md:text-[30px] mt-10 mb-5 text-[15px]">
              1% complete
            </p>
            <div className="flex flex-row">
              <img
                src={qr}
                alt="qr"
                className="md:h-24 md:w-24  h-16 bg-white"
              />
              <div className="ml-7">
                <p className="text-white md:text-[18px] text-[10px] ">
                  For more information about the issue and possible fiexes,
                  visit https://www.windows.com/stopcode
                </p>

                <p className="mt-[10px] md:mt-[20px] text-white mb-[10px] md:text-[14px] text-[8px]">
                  If you call a support person, give them this info:
                </p>

                <p className="text-white  md:text-[14px] text-[8px]">
                  Stop code: CRITICAL_PROCESS_DIED
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hack;
