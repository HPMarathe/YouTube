import React, { useState, useEffect } from "react";

const TimeConverter = ({ utcTimestamp }) => {
  const [timeAgo, setTimeAgo] = useState(null);

  useEffect(() => {
    calculateYearsAgo();
  }, [utcTimestamp]);

  const calculateYearsAgo = () => {
    try {
      // Convert UTC timestamp to Date object
      const utcDate = new Date(utcTimestamp);

      const today = new Date();

      // Calculate the difference in years from today
      const timeDifference = today - utcDate;

      // Calculate years, months, weeks, and days
      const yearsAgo = Math.floor(
        timeDifference / (365.25 * 24 * 60 * 60 * 1000)
      );
      const monthsAgo = Math.floor(
        timeDifference / (30.44 * 24 * 60 * 60 * 1000)
      );
      const weeksAgo = Math.floor(timeDifference / (7 * 24 * 60 * 60 * 1000));
      const daysAgo = Math.floor(timeDifference / (24 * 60 * 60 * 1000));

      // Determine the appropriate time unit
      if (yearsAgo >= 1) {
        setTimeAgo(`${yearsAgo} ${yearsAgo === 1 ? "year" : "years"} ago`);
      } else if (monthsAgo >= 1) {
        setTimeAgo(`${monthsAgo} ${monthsAgo === 1 ? "month" : "months"} ago`);
      } else if (weeksAgo >= 1) {
        setTimeAgo(`${weeksAgo} ${weeksAgo === 1 ? "week" : "weeks"} ago`);
      } else if (daysAgo >= 1) {
        setTimeAgo(`${daysAgo} ${daysAgo === 1 ? "day" : "days"} ago`);
      } else {
        setTimeAgo("Today");
      }
    } catch (error) {
      console.error("Error calculating time ago:", error);
    }
  };

  return (
    <div>
      <p> {timeAgo} </p>
    </div>
  );
};

export default TimeConverter;
