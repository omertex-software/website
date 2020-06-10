import React, { useEffect, useState } from "react"
import style from "./twoColumns.module.sass"
import Img from "gatsby-image"
import buttons from "../../assets/styles/buttons.module.sass"
import classNames from "../../helpers/classNames"

const TwoColumns = ({ data, hideAfter, hideInMobile }) => {
  const [hiddenColumnsAfter, setHiddenColumnsAfter] = useState(true)
  const [hiddenColumnsMobile, setHiddenColumnsMobile] = useState(true)

  useEffect(() => {
    window.innerWidth > 760
      ? setHiddenColumnsMobile(true)
      : setHiddenColumnsMobile(false)
  }, [])

  const changeHiddenColumnsAfter = () => {
    setHiddenColumnsAfter(!hiddenColumnsAfter)
  }

  const changeHiddenColumnsMobile = () => {
    setHiddenColumnsMobile(!hiddenColumnsMobile)
  }

  const renderColumns = info => {
    return info.map(item => (
      <div
        className={style.image_column}
        key={item.title || item.description.slice(0, 10)}
      >
        <Img
          fluid={item.image}
          className={style.image_column_icon}
          alt="icon"
        />
        {item.title ? (
          <h3 className={style.image_column_title}>{item.title}</h3>
        ) : (
          <div className={style.image_column_indent} />
        )}
        <p className={style.image_column_p}>{item.description}</p>
      </div>
    ))
  }

  if (hideAfter) {
    const firstBox = data.slice(0, hideAfter)
    const secondBox = data.slice(hideAfter)
    return (
      <>
        <div className={style.image_columns_box}>{renderColumns(firstBox)}</div>
        <div
          className={classNames(
            style.image_columns_box_hidden,
            hiddenColumnsAfter ? style.hiddenColumns : ""
          )}
        >
          {renderColumns(secondBox)}
        </div>
        <div className={style.showMoreBox}>
          <button
            className={buttons.btn_white}
            onClick={changeHiddenColumnsAfter}
          >
            {hiddenColumnsAfter ? "View more" : "Hide text"}
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
          style={
            hiddenColumnsMobile ? { display: "none" } : { display: "flex" }
          }
        >
          <button
            className={buttons.btn_white}
            onClick={changeHiddenColumnsMobile}
          >
            read more
          </button>
        </div>
        <div
          className={style.image_columns_box}
          style={
            hiddenColumnsMobile ? { display: "flex" } : { display: "none" }
          }
        >
          {renderColumns(data)}
        </div>
      </>
    )
  }

  return <div className={style.image_columns_box}>{renderColumns(data)}</div>
}
export default TwoColumns
