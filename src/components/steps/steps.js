import React, { useEffect, useState } from "react"
import style from "./steps.module.sass"
import buttons from "../../assets/styles/buttons.module.sass"
import classNames from "../../helpers/classNames"

const Steps = ({ data, hideAfter, hideInMobile }) => {
  const [hiddenStepsAfter, setHiddenStepsAfter] = useState(true)
  const [hiddenStepsMobile, setHiddenStepsMobile] = useState(true)

  useEffect(() => {
    window.innerWidth > 760
      ? setHiddenStepsMobile(true)
      : setHiddenStepsMobile(false)
  }, [])

  const changeHiddenStepsAfter = () => {
    setHiddenStepsAfter(!hiddenStepsAfter)
  }

  const changeHiddenStepsMobile = () => {
    setHiddenStepsMobile(!hiddenStepsMobile)
  }

  const renderDescription = description => {
    if (typeof description === "string") {
      return <div className={style.step_description}>{description}</div>
    }
    if (Array.isArray(description)) {
      return (
        <div className={style.step_description}>
          {description.map(item => (
            <p
              className={item.check ? style.step_check : null}
              key={item.text.slice(0, 10)}
            >
              {item.text}
            </p>
          ))}
        </div>
      )
    }
  }

  const renderSteps = info => {
    return info.map(item => (
      <div className={style.step} key={item.title}>
        <div className={style.step_title}>{item.title}</div>
        {renderDescription(item.description)}
      </div>
    ))
  }

  if (hideAfter) {
    const firstBox = data.slice(0, hideAfter)
    const secondBox = data.slice(hideAfter)
    return (
      <>
        <div className={style.steps_box}>{renderSteps(firstBox)}</div>
        <div
          className={classNames(
            style.steps_box_hidden,
            hiddenStepsAfter ? style.hiddenSteps : ""
          )}
        >
          {renderSteps(secondBox)}
        </div>
        <div className={style.showMoreBox}>
          <button
            className={buttons.btn_white}
            onClick={changeHiddenStepsAfter}
          >
            {hiddenStepsAfter ? "View more" : "Hide text"}
          </button>
        </div>
      </>
    )
  }

  if (hideInMobile) {
    return (
      <>
        <div
          className={style.justify_center}
          style={hiddenStepsMobile ? { display: "none" } : { display: "flex" }}
        >
          <button
            className={buttons.btn_white}
            onClick={changeHiddenStepsMobile}
          >
            read more
          </button>
        </div>
        <div
          className={style.steps_box}
          style={hiddenStepsMobile ? { display: "flex" } : { display: "none" }}
        >
          {renderSteps(data)}
        </div>
      </>
    )
  }

  return <div className={style.steps_box}>{renderSteps(data)}</div>
}
export default Steps
