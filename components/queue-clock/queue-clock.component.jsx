import React, { useState, useEffect } from "react";
import * as S from "./queue-clock.styles";
import dayjs from "dayjs";
import Clock from "react-clock";

const QueueClock = ({ hideBorder }) => {
  dayjs.locale("es");
  const timeInterval = 1000;
  const [leftTime, setLeftTime] = useState(155000);
  const [clockValue, setClockValue] = useState(new Date());

  const formattedDate = dayjs(clockValue).format("MMMM DD, hh:mm A");

  // console.log("leftTime :>> ", leftTime);
  useEffect(() => {
    const interval = setInterval(() => {
      setClockValue(new Date());

      setLeftTime((time) => (time > 0 ? time - timeInterval : 0));
    }, timeInterval);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <S.ClockWrapper style={{ border: hideBorder ? "none" : "" }}>
      {leftTime > 0 && (
        <S.Time style={{ textTransform: "none" }}>
          Tiempo de expera aprox. {dayjs(leftTime).format("mm")} min
        </S.Time>
      )}
      <div style={{ position: "relative" }}>
        <Clock
          value={clockValue}
          size={"300px"}
          className="clock"
          renderNumbers
          hourHandLength={50}
          hourHandWidth={6}
          secondHandLength={95}
          secondHandWidth={3}
          minuteHandLength={85}
          minuteHandWidth={4}
        />
        <div className="circle" />
      </div>

      <S.Time>{formattedDate}</S.Time>
    </S.ClockWrapper>
  );
};

export default QueueClock;
