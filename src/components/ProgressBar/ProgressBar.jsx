import React from 'react';
import classes from './ProgressBar.module.css';

const ProgressBar = ({ items, height, width }) => {
  let total = 0;
  for (let item of items) {
    total += item.value;
  }

  let percentedItems = items.map((item) => {
    return { ...item, percent: item.value / total };
  });
  let barsCount = percentedItems.map((item) => (width * item.percent) / 17);

  let result = [];

  for (let i = 0; i < barsCount.length; i++) {
    let count = barsCount[i];

    for (let j = 0; j < count; j++) {
      result.push(
        <div
          className={classes.bar}
          style={{ backgroundColor: items[i].color }}
        ></div>
      );
    }
  }

  return (
    <div className={classes.progressBar} style={{ width: `${width}px` }}>
      <div
        className={classes.progressBar__line}
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        {result}
      </div>
      <div className={classes.progressBar__info}>
        {percentedItems.map((item) => (
          <span>
            <div
              class={classes.circle}
              style={{ backgroundColor: item.color }}
            ></div>
            {item.name} ({(item.percent * 100).toFixed(1)}%)
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
