import { useEffect, useState } from "react";

const Input = ({ emails, setEmails, setIsSuccess }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const email = e.target.value;
    setInput(email);
  };

  const handleSave = () => {
    setIsSuccess(true);
    setEmails([...emails, input]);
  };

  useEffect(() => {
    // TODO เมื่อ Unmount Component นี้ให้ input เป็น ""
    return () => {
      setInput("");
    };
  }, []);

  return (
    <div className="m-4 flex flex-row">
      <input
        className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
        type="email"
        placeholder="input email"
        onChange={handleChange}
        value={input}
      />
      <button
        className="px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r"
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
};

export default Input;
