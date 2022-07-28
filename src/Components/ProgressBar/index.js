import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const steps = [
  {
    status: "1",
  },
  {
    status: "2",
  },
  {
    status: "3",
  },
  {
    status: "4",
  },
];
const ProgressBarUi = (props) => {
  const transfer = {
    status: "Compile", // change transfer status to progress bar
  };

  const getStepPosition = (transferStatus) => {
    return steps.findIndex(({ status }) => status === transferStatus);
  };
  return (
    <>
      <div style={{ margin: 45 }}>
        <ProgressBar
          width={310}
          height={3}
          percent={
            100 *
              ((getStepPosition(transfer.status) + 1) / (steps.length - 0)) -
            -props.phase
          }
          filledBackground="linear-gradient(to right, #6A5EE5, #6A5EE5)"
        >
          {steps.map((step, index, arr) => {
            return (
              <Step
                // position={100 * (index / arr.length)}
                transition="scale"
                children={({ accomplished }) => (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      width: 40,
                      height: 40,
                      border: "1px solid gray",
                      color: accomplished ? "white" : "gray",
                      backgroundColor: accomplished ? "#6A5EE5" : "white",
                    }}
                  >
                    {step.status}
                  </div>
                )}
              />
            );
          })}
        </ProgressBar>
      </div>
    </>
  );
};
export default ProgressBarUi;
