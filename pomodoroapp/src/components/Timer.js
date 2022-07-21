import React, { useEffect, useState } from "react";
import "./styles/timer.css";

function Timer() {
    const [stateBreak, setBreak] = useState(5);
    const [stateSession, setSession] = useState(25);
    const [stateMinutes, setMinutes] = useState(25);
    const [stateSeconds, setSeconds] = useState(5);
    const [stateTimer, setTimer] = useState(null);
    const [stateBehaviour, setBehaviour] = useState("Session");

    React.useEffect(() => {
        if (stateTimer) {
            let interval = setInterval(() => {
                handleNumber();
            }, 1000); //periodLength
            return () => {
                clearInterval(interval);
            };
        }
    });

    function sessionDecrement() {
        if (!stateTimer) {
            if (stateSession !== 1) {
                setSession(stateSession - 1);
                setMinutes(stateSession - 1);
            }
        }
    }

    function breakDecrement() {
        if (!stateTimer) {
            if (stateBreak !== 1) {
                setBreak(stateBreak - 1);
            }
        }
    }

    function breakIncrement() {
        if (!stateTimer) {
            if (stateBreak <= 59) {
                setBreak(stateBreak + 1);
            }
        }
    }

    function handleNumber() {
        if (stateSeconds === 0) {
            if (stateMinutes === 0) {
                // audioBeep.play();
                switchesTimerMode();
            } else {
                setSeconds(59);
                setMinutes(stateMinutes - 1);
            }
        } else setSeconds(stateSeconds - 1);
    }

    function switchesTimerMode() {
        if (stateBehaviour === "Session") {
            setBehaviour("Break");
            setMinutes(stateBreak);
            setSeconds(0);
        } else {
            setBehaviour("Session");
            setMinutes(stateSession);
            setSeconds(0);
        }
    }

    function startStop() {
        stateTimer ? stopTimer() : startTimer();
    }

    function timeLeft() {
        let minutes = stateMinutes < 10 ? "0" + stateMinutes : stateMinutes;
        let seconds = stateSeconds < 10 ? "0" + stateSeconds : stateSeconds;
        return minutes + ":" + seconds;
    }

    function stopTimer() {
        setTimer(null);
        //setPeriodLength(null)
    }

    function startTimer() {
        setTimer("Start");
        //setPeriodLength(1000)
    }

    function reset() {
        console.log("entre a reset");
        setBreak(5);
        setSession(25);
        setMinutes(25);
        setSeconds(0);
        setBehaviour("Session");
        stopTimer();
        //setPeriodLength(null)
        /* audioBeep.pause()
      audioBeep.currentTime = 0 */
    }

    function sessionIncrement() {
        if (!stateTimer) {
            if (stateSession <= 59) {
                setSession(stateSession + 1);
                setMinutes(stateSession + 1);
            }
        }
    }

    return (
        <div className="wrapper">
            <div className="boxTimer">
                <div className="timer">
                    {stateMinutes < 10 ? "0" : ""}
                    {stateMinutes}:{stateSeconds < 10 ? "0" : ""}
                    {stateSeconds}
                </div>
            </div>
            <div className="boxControls">
                <button onClick={startStop}>
                    {stateTimer ? (
                        <i class="bi bi-pause-fill"></i>
                    ) : (
                        <i class="bi bi-play-fill"></i>
                    )}
                </button>
                
                <button>
                    <i className="bi bi-stop-fill" onClick={reset}></i>
                </button>
            </div>
            <div className="timeControl">
                <div className="session1">
                    <button onClick={sessionDecrement}>
                        <i className="bi bi-dash"></i>
                    </button>
                    <i class="bi bi-clock"></i> Sesión
                    <button onClick={sessionIncrement}>
                        <i className="bi bi-plus"></i>
                    </button>
                </div>

                <div className="session2">
                    <button onClick={breakDecrement}>
                        <i className="bi bi-dash"></i>
                    </button>
                    <i class="bi bi-clock"></i> Descanso
                    <button onClick={breakIncrement}>
                        <i className="bi bi-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Timer;
