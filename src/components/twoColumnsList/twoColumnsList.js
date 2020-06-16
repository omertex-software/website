import React from "react"
import style from "./twoColumnsList.module.sass"

const TwoColumnsList = ({ data, minBottom }) => {
  const renderItem = item => {
    if (typeof item === "string") {
      return (
        <div
          className={minBottom ? style.two_column_min : style.two_column}
          key={item}
        >
          <h3 className={style.title}>{item}</h3>
        </div>
      )
    }
    return (
      <div
        className={minBottom ? style.two_column_min : style.two_column}
        key={item.title}
      >
        <h3 className={style.title}>{item.title}</h3>
        {item.description && (
          <p className={style.description}>{item.description}</p>
        )}
      </div>
    )
  }

  return (
    <div className={style.flow_column}>
      <div className={minBottom ? style.two_columns_min : style.two_columns}>
        {data.map(item => renderItem(item))}
      </div>
    </div>
  )
}
export default TwoColumnsList
