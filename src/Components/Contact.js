import React, { useState } from "react";

const Contact = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [DinamicString, setDinamicString] = useState("");
  const [ClickValidation, setClickValidation] = useState("true");

  const ContactClicked = () => {
    if (
      Email.includes("@") === true ||
      FirstName.length > 0 ||
      LastName.length > 0 ||
      Message.length > 0
    ) {
      const Options = {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          firstname: FirstName,
          lastname: LastName,
          email: Email,
          message: Message,
        }),
      };
      fetch("https://633983ed383946bc7ff45d80.mockapi.io/Messages", Options);
      setLastName("");
      setFirstName("");
      setEmail("");
      setMessage("");
      setClickValidation(false);
      setDinamicString(
        <div role="status">
          <svg
            className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
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
      setTimeout(function () {
        setDinamicString("Your message has been send ✔️");
      }, 3000);
      setTimeout(function () {
        setClickValidation(true);
      }, 8000);
    }
  };
  return (
    <>
      <div className="flex justify-center md:mt-[10rem]">
        <h1 className="md:text-[4rem] text-[2rem] font-logo tracking-tighter mt-[5rem] md:mt-[5rem] z-20">
          Contact
        </h1>
      </div>
      <div className=" flex justify-center bg-gradient-to-r from-[#FFA17F]  to-[#00223E] mt-[2rem]  ">
        <form class="w-full max-w-lg mt-[3rem] mb-[3rem]">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wider text-white md:text-[1rem] text-[0.8rem] font-logo  mb-2"
                for="grid-first-name"
              >
                First Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-first-name"
                type="text"
                value={FirstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wider text-white  md:text-[1rem] text-[0.8rem] font-bold mb-2"
                for="grid-last-name"
              >
                Last Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                value={LastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wider text-white  md:text-[1rem] text-[0.8rem] font-bold mb-2"
                for="grid-password"
              >
                E-mail
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
                value={Email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wider text-white  md:text-[1rem] text-[0.8rem] font-bold mb-2"
                for="grid-password"
              >
                Message
              </label>
              <textarea
                class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                id="message"
                value={Message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>
            </div>
          </div>
          <div class="md:flex md:items-center">
            <div class="md:w-1/3">
              {ClickValidation ? (
                <button
                  class="shadow bg-black hover:bg-gray-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button"
                  onClick={() => {
                    ContactClicked();
                  }}
                >
                  Send
                </button>
              ) : (
                <h1 className="md:w-[35rem] font-logo">{DinamicString}</h1>
              )}
            </div>
            <div class="md:w-2/3"></div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
