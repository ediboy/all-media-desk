import { useState } from "react";

function App() {
  // todo: add check if parentheses are equal
  // let input = "(5 + 8 * (30 + 2)) * 3/8 + 3 + (3+2)";
  const [data, setData] = useState("");
  const [output, setOutput] = useState("output here");

  // compute the values
  // make sure you process the * and / first
  const compute = (input) => {
    input = input.replace("(", "").replace(")", "");
    input = input.split(/(\+|\-|\*|\/)/);
    var newInput = input;

    var hasMultiplyAndDidision = newInput.some((element) =>
      ["*", "/"].includes(element)
    );

    for (var i = 0; i < newInput.length; i++) {
      if (newInput[i] == "*" && hasMultiplyAndDidision) {
        newInput[i - 1] = Number(newInput[i - 1]) * Number(newInput[i + 1]);
        newInput.splice(i, 2);
      }

      if (newInput[i] == "+" && !hasMultiplyAndDidision) {
        newInput[i - 1] = Number(newInput[i - 1]) + Number(newInput[i + 1]);
        newInput.splice(i, 2);
      }

      if (newInput[i] == "-" && !hasMultiplyAndDidision) {
        newInput[i - 1] = Number(newInput[i - 1]) - Number(newInput[i + 1]);
        newInput.splice(i, 2);
      }

      if (newInput[i] == "/" && hasMultiplyAndDidision) {
        newInput[i - 1] = Number(newInput[i - 1]) / Number(newInput[i + 1]);
        newInput.splice(i, 2);
      }
    }

    if (newInput.length > 1) {
      return compute(newInput.join(""));
    }

    return newInput.toString();
  };

  // loop into the string and check for parentheses and process it first
  const calculate = (input) => {
    var parenValue = "";
    var parenExist = false;
    var newInput = input;

    for (var i = 0; i < input.length; i++) {
      if (input[i] == "(") {
        parenExist = true;
        parenValue = "";
      }

      if (parenExist) {
        parenValue += input[i];
      }

      if (input[i] == ")" && parenExist) {
        var total = compute(parenValue);
        newInput = newInput.replace(parenValue, total);
        parenValue = "";
        parenExist = false;
      }
    }

    if (newInput.includes("(")) {
      return calculate(newInput);
    }

    return compute(newInput);
  };

  const handleClick = () => {
    setOutput(calculate(data));
  };

  return (
    <div className="App bg-gray-900 min-h-screen min-w-screen">
      <div className="flex justify-center flex-col max-w-md mx-auto">
        <p className="text-white p-2 mt-20 text-center">{output}</p>

        <input
          className="p-2 bg-gray-200 w-full"
          autoFocus={true}
          onChange={(e) => {
            setData(e.target.value);
          }}
        ></input>

        <button
          onClick={handleClick}
          className="bg-red-500 p-2 text-white mt-6"
        >
          Calculate
        </button>
      </div>
    </div>
  );
}

export default App;
