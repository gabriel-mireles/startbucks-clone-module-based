import { Fade } from "@mui/material";
import { Heading } from "app/shared/components/heading/Heading";
import { useCountdown } from "app/shared/hooks/useCountdown";
import "./InComingPage.scss";

const today = new Date();
const targetDate = new Date();
targetDate.setDate(today.getDate() + 4);

export const InCommingPage = () => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  return (
    <div>
      <Fade in timeout={500}>
        <div className="inComingPage">
          <Fade in timeout={800}>
            <div className="inComingPage__container">
              <Heading heading="oops!" />
              <p className="inComingPage__title">
                This page is under construction
              </p>

              <div className="inComingPage__countdown">
                <Fade in timeout={1200}>
                  <div className="inComingPage__days">
                    <span className="inComingPage__number">{days}</span>
                    <span className="inComingPage__textNumber">Days</span>
                  </div>
                </Fade>
                <Fade in timeout={1600}>
                  <div className="inComingPage__hours">
                    <span className="inComingPage__number">{hours}</span>
                    <span className="inComingPage__textNumber">Hours</span>
                  </div>
                </Fade>
                <Fade in timeout={2000}>
                  <div className="inComingPage__minutes">
                    <span className="inComingPage__number">{minutes}</span>
                    <span className="inComingPage__textNumber">Minutes</span>
                  </div>
                </Fade>
                <Fade in timeout={2400}>
                  <div className="inComingPage__seconds">
                    <span className="inComingPage__number">{seconds}</span>
                    <span className="inComingPage__textNumber">Seconds</span>
                  </div>
                </Fade>
              </div>
              <Fade  in timeout={3200}>
              <p className="badJoke">For some reason people love counters, so why not?</p>
              </Fade>
            </div>
          </Fade>
        </div>
      </Fade>
    </div>
  );
};
