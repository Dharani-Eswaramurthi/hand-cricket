import React from "react";
import "./HandCricket.css";
import ReactAudioPlayer from "react-audio-player";

export default class HandCricket extends React.Component {
  constructor(props) {
    super(props);
    this.state = { player: [], comp: [], fb: [], finish: [] };
  }

  componentDidMount() {
    this.setForGame();
  }

  setForGame() {
    const player = [];
    const comp = [];
    const fb = [];
    const finish = [];
    comp.push(0);
    player.push(0);
    fb.push(0);
    finish.push(0);
    this.setState({ player, comp, fb, finish });
  }

  batfirst(c) {
    const { player, comp, fb, finish } = this.state;
    var co = randomin(1, 6);
    const a = document.getElementById("a");
    const b = document.getElementById("b");
    a.innerHTML = c;
    b.innerHTML = co;
    if (co === c) {
      finish[0] = 1;
      const st = document.getElementById("status");
      st.innerHTML = "Status : Bowling";
      const z = document.getElementById("defend");
      z.style.display = "inline-block";
      const y = document.getElementById("gamePlay");
      const x = document.getElementById("OUT");
      const h = document.getElementById("head");
      h.style.display = "inline-block";
      y.style.display = "none";
      x.style.display = "inline-block";
    } else {
      player[0] += c;
    }
    this.setState({ player, comp, fb, finish });
  }

  batsecond(c) {
    const st = document.getElementById("status");
    st.innerHTML = "Status : Batting";
    const { player, comp, fb, finish } = this.state;
    var co = randomin(1, 6);
    const a = document.getElementById("a");
    const b = document.getElementById("b");
    a.innerHTML = c;
    b.innerHTML = co;
    if (co === c) {
      if (player[0] === comp[0]) {
        const y = document.getElementById("gamePlay");
        const x = document.getElementById("tie");
        const h = document.getElementById("head");
        h.style.display = "inline-block";
        y.style.display = "none";
        x.style.display = "inline-block";
      } else {
        const y = document.getElementById("gamePlay");
        const x = document.getElementById("chaseloss");
        const h = document.getElementById("head");
        h.style.display = "inline-block";
        y.style.display = "none";
        x.style.display = "inline-block";
      }
    } else {
      player[0] += c;
      if (player[0] > comp[0]) {
        const y = document.getElementById("gamePlay");
        const x = document.getElementById("chasewin");
        const h = document.getElementById("head");
        h.style.display = "inline-block";
        y.style.display = "none";
        x.style.display = "inline-block";
      }
    }
    this.setState({ player, comp, fb, finish });
  }

  bowlfirst(c) {
    const { player, comp, fb, finish } = this.state;
    var co = randomin(1, 6);
    const a = document.getElementById("a");
    const b = document.getElementById("b");
    a.innerHTML = c;
    b.innerHTML = co;
    if (co === c) {
      finish[0] = 1;
      const st = document.getElementById("status");
      st.innerHTML = "Status : Batting";
      const z = document.getElementById("chase");
      z.style.display = "inline-block";
      const y = document.getElementById("gamePlay");
      const x = document.getElementById("OUT");
      const h = document.getElementById("head");
      h.style.display = "inline-block";
      y.style.display = "none";
      x.style.display = "inline-block";
    } else {
      comp[0] = comp[0] + co;
    }
    this.setState({ player, comp, fb, finish });
  }

  bowlsecond(c) {
    const st = document.getElementById("status");
    st.innerHTML = "Status : Bowling";
    const { player, comp, fb, finish } = this.state;
    var co = randomin(1, 6);
    const a = document.getElementById("a");
    const b = document.getElementById("b");
    a.innerHTML = c;
    b.innerHTML = co;
    if (co === c) {
      if (player[0] === comp[0]) {
        const y = document.getElementById("gamePlay");
        const x = document.getElementById("tie");
        const h = document.getElementById("head");
        h.style.display = "inline-block";
        y.style.display = "none";
        x.style.display = "inline-block";
      } else {
        const y = document.getElementById("gamePlay");
        const x = document.getElementById("defendwin");
        const h = document.getElementById("head");
        h.style.display = "inline-block";
        y.style.display = "none";
        x.style.display = "inline-block";
      }
    } else {
      comp[0] += co;
      if (comp[0] > player[0]) {
        const y = document.getElementById("gamePlay");
        const x = document.getElementById("defendloss");
        const h = document.getElementById("head");
        h.style.display = "inline-block";
        y.style.display = "none";
        x.style.display = "inline-block";
      }
    }
    this.setState({ player, comp, fb, finish });
  }

  toss(x) {
    var t = randomin(0, 1);
    const c = document.getElementById("toss");
    c.style.display = "none";
    if (t === x) {
      const s = document.getElementById("startgame");
      s.style.display = "inline-block";
    } else {
      var b = randomin(0, 1);
      if (b === 0) {
        const s = document.getElementById("startgamebat");
        s.style.display = "inline-block";
      } else {
        const s = document.getElementById("startgamebowl");
        s.style.display = "inline-block";
      }
    }
  }

  chose(c) {
    const { player, comp, fb, finish } = this.state;
    if (fb[0] === 1) {
      console.log("batfirst");
      if (finish[0] === 0) {
        this.batfirst(c);
      } else {
        this.bowlsecond(c);
      }
    } else {
      console.log("bowlfirst");
      if (finish[0] === 0) {
        this.bowlfirst(c);
      } else {
        this.batsecond(c);
      }
    }
  }

  bob(x) {
    const { player, comp, fb, finish } = this.state;
    const c = document.getElementById("startgame");
    c.style.display = "none";
    const d = document.getElementById("startgamebat");
    d.style.display = "none";
    const e = document.getElementById("startgamebowl");
    e.style.display = "none";
    const h = document.getElementById("head");
    h.style.display = "none";
    const g = document.getElementById("gamePlay");
    g.style.display = "inline-block";
    if (x === 0) {
      const st = document.getElementById("status");
      st.innerHTML = "Status : Batting";
      fb[0] = 1;
      finish[0] = 0;
      this.setState({ player, comp, fb, finish });
    } else {
      const st = document.getElementById("status");
      st.innerHTML = "Status : Bowling";
      fb[0] = 0;
      finish[0] = 0;
      this.setState({ player, comp, fb, finish });
    }
    this.setState({ player, comp, fb, finish });
  }

  continuegame() {
    const x = document.getElementById("gamePlay");
    const y = document.getElementById("OUT");
    const h = document.getElementById("head");
    h.style.display = "none";
    y.style.display = "none";
    x.style.display = "inline-block";
  }

  render() {
    let path = require("/src/assets/sound.mp3");
    let audio = new Audio(path);
    const { player, comp, fb, finish } = this.state;
    return (
      <div id="surface">
        <div id="head">
          <img src={require("/src/assets/hand.png")} width="300" height="200" />
          <h1>Hand Cricket Game</h1>
        </div>
        <div id="toss">
          <h2>Let's Play</h2>
          <br></br>
          <button className="Coins" onClick={() => this.toss(0)}>
            HEAD
          </button>
          <button className="Coins" onClick={() => this.toss(1)}>
            TAIL
          </button>
        </div>
        <div id="startgame">
          <img
            src={require("/src/assets/csk-logo.png")}
            width="100"
            height="100"
          />
          <h2 style={{ color: "yellow" }}>CSK WON THE TOSS</h2>
          <br></br>
          <button
            className="Coin"
            onClick={() => this.bob(0)}
            onClickCapture={() => audio.play()}
          >
            Bat
          </button>
          <button
            className="Coin"
            onClick={() => this.bob(1)}
            onClickCapture={() => audio.play()}
          >
            Bowl
          </button>
        </div>
        <div id="startgamebat">
          <img
            src={require("/src/assets/mi-logo.png")}
            width="125"
            height="125"
          />
          <br></br>
          <h2 style={{ color: "rgb(98, 83, 235)" }}>
            OPPONENT MI HAS WON THE TOSS AND ELECTED TO BAT
          </h2>
          <br></br>
          <button
            className="Coin"
            onClick={() => this.bob(1)}
            onClickCapture={() => audio.play()}
          >
            GO
          </button>
        </div>
        <div id="startgamebowl">
          <img
            src={require("/src/assets/mi-logo.png")}
            width="125"
            height="125"
          />
          <br></br>
          <h2 style={{ color: "rgb(98, 83, 235)" }}>
            OPPONENT MI HAS WON THE TOSS AND ELECTED TO BOWL
          </h2>
          <br></br>
          <button
            className="Coin"
            onClick={() => this.bob(0)}
            onClickCapture={() => audio.play()}
          >
            GO
          </button>
        </div>
        <div id="gamePlay">
          <ReactAudioPlayer
            src={require("/src/assets/sound.mp3")}
            id="gamePlay"
            controls
          />
          <img
            src={require("/src/assets/ipl.png")}
            width="400"
            height="200"
            align="left"
          />
          <br></br>
          <div
            align="right"
            style={{ color: "yellow", fontFamily: "Calibri", fontSize: 30 }}
          >
            <img
              src={require("/src/assets/csk-logo.png")}
              width="50"
              height="40"
            />{" "}
            Chennai Super Kings&emsp;- &emsp;{player[0]}
          </div>
          <div
            align="right"
            style={{
              color: "rgb(98, 83, 235)",
              fontFamily: "Calibri",
              fontSize: 30
            }}
          >
            <img
              src={require("/src/assets/mi-logo.png")}
              width="55"
              height="45"
            />{" "}
            Mumbai Indians&emsp;- &emsp;{comp[0]}
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div
            align="justify"
            style={{ color: "grey", fontFamily: "Calibri", fontSize: 30 }}
            id="status"
          >
            Status :{" "}
          </div>
          <br></br>
          <div id="defend">
            <img
              src={require("/src/assets/mi-logo.png")}
              width="125"
              height="125"
            />
            <br></br>
            <p
              style={{
                color: "rgb(98, 83, 235)",
                fontFamily: "Calibri",
                fontSize: 30
              }}
            >
              OPPONENT MI NEEDS {player[0] - comp[0] + 1} RUNS TO WIN<br></br>
            </p>
          </div>
          <div id="chase">
            <img
              src={require("/src/assets/csk-logo.png")}
              width="100"
              height="100"
            />
            <br></br>
            <p style={{ color: "yellow", fontFamily: "Calibri", fontSize: 30 }}>
              CSK NEED {comp[0] - player[0] + 1} RUNS TO WIN<br></br>
            </p>
          </div>
          <br></br>
          <button className="k" onClick={() => this.chose(1)}>
            1
          </button>
          <button className="k" onClick={() => this.chose(2)}>
            2
          </button>
          <button className="k" onClick={() => this.chose(3)}>
            3
          </button>
          <button className="k" onClick={() => this.chose(4)}>
            4
          </button>
          <button className="k" onClick={() => this.chose(5)}>
            5
          </button>
          <button className="k" onClick={() => this.chose(6)}>
            6
          </button>
          <br></br>
          <br></br>
          <div
            className="choice"
            style={{ color: "yellow", fontFamily: "Calibri" }}
          >
            CSK HAVE CHOSE<br></br>
            <br></br>
            <div id="a">0</div>
          </div>
          <div
            className="choice1"
            style={{ color: "rgb(98, 83, 235)", fontFamily: "Calibri" }}
          >
            OPPONENT MI HAS CHOSE<br></br>
            <br></br>
            <div id="b">0</div>
          </div>
        </div>
        <div id="defendwin">
          <img
            src={require("/src/assets/csk-logo.png")}
            width="100"
            height="100"
          />
          <br></br>
          <br></br>
          <p style={{ color: "yellow" }}>
            CSK WON THE GAME BY {player[0] - comp[0]} RUNS
          </p>
          <br></br>
          <br></br>
          <button className="NG" onClick={() => NG()}>
            GO
          </button>
        </div>
        <div id="chasewin">
          <img
            src={require("/src/assets/csk-logo.png")}
            width="100"
            height="100"
          />
          <br></br>
          <br></br>
          <p style={{ color: "yellow" }}>CSK WON THE GAME</p>
          <br></br>
          <br></br>
          <button className="NG" onClick={() => NG()}>
            GO
          </button>
        </div>
        <div id="defendloss">
          <img
            src={require("/src/assets/mi-logo.png")}
            width="125"
            height="125"
          />
          <br></br>
          <br></br>
          <p style={{ color: "rgb(98, 83, 235)" }}>
            OPPONENT MI HAS WON THE GAME
          </p>
          <br></br>
          <br></br>
          <button className="NG" onClick={() => NG()}>
            GO
          </button>
        </div>
        <div id="chaseloss">
          <img
            src={require("/src/assets/mi-logo.png")}
            width="125"
            height="125"
          />
          <br></br>
          <br></br>
          <p style={{ color: "rgb(98, 83, 235)" }}>
            OPPONENT MI HAS WON THE GAME BY {comp[0] - player[0]} RUNS
            <br></br>
          </p>
          <br></br>
          <button className="NG" onClick={() => NG()}>
            GO
          </button>
        </div>
        <div id="tie">
          <br></br>
          <br></br>
          THE GAME HAS ENDED UP IN A TIE
          <br></br>
          <br></br>
          <button className="NG" onClick={() => NG()}>
            GO
          </button>
        </div>
        <div style={{ color: "yellow" }} id="OUT">
          <img
            src={require("/src/assets/csk-logo.png")}
            width="100"
            height="100"
          />
          <br></br>
          <br></br>
          OUT
          <br></br>
          <br></br>
          <button
            id="continue"
            onClick={() => this.continuegame()}
            onClickCapture={() => audio.play()}
          >
            GO
          </button>
        </div>
      </div>
    );
  }
}

function randomin(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function NG() {
  window.location.reload();
}
