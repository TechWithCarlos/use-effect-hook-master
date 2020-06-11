import React, { useState, useEffect } from 'react';

let born = false;
export const Babsi = () => {
  // Initial States
  const [age, setAge] = useState(0)
  const [dead, setDead] = useState(false);
  let maxAge = (age > 3);

  // Birth, this is only once
  useEffect(() => {
    console.warn('Born !!!!!!!');
  }, []);

  // Growth, this runs every time util death
  useEffect(() => {
    if (born) {
      console.log("another year!");
    } else {
      born = true;
    }
    if (maxAge) {
      setDead(true);
    }
  }, [age, maxAge]);

  // Death, only runs on death
  useEffect(() => {
    if (dead) {
      document.title = 'Babsi R.I.P †';
    }
  }, [dead]);

  // Handle age growth
  const growthHandle = () => {
    setAge(age + 1);
  }

  return (
    <>
      <h3>useEffect Hook</h3>
      <p>Age: {age}</p>
      <button
        onClick={growthHandle}
        disabled={maxAge}
      >
        Growth
      </button>
    </>
  );
};
