html {
  background-color: #2b2037;
  font-family: 'Bungee', cursive;
  font-size: 16px;
  text-align: center;
}

header {
  padding-top: 1rem;
  padding-bottom: .5rem;
  border-bottom: solid 2px #ffffff;
}

.canvas {
  width: 920px;
  position: relative;
  left: 11%;
  padding-top: 1.375rem;
}

@media only screen and (max-width: 930px) {
  .canvas {
    left: 5%;
  }
}

@media only screen and (max-width: 665px) {
  .canvas {
    left: -5%;
  }
}

@media only screen and (max-width: 570px) {
  .canvas {
    left: -15%;
  }
}

@media only screen and (max-width: 530px) {
  .canvas {
    left: -160px;
  }
}

form {
  height: 180px;
  padding: 1rem;
  text-align: left;
  font-family: 'Montserrat', sans-serif;
  line-height: 0.91;
  letter-spacing: 0.4px;
  color: #2b2037;
}

form input,
form select {
  margin-bottom: 1rem;
}

form select {
  cursor: pointer;
  font-size: 1.5rem;
}

.disabled {
  opacity: 0.7;
}

label {
  display: inline-block;
  width: 65px;
}

input,
select {
  background-color: #f3f0f0;
  border: solid 2.2px #2b2037;
  padding: 5px 10px;
  text-align: center;
}

form .button {
  text-align: center;
}

a {
  cursor: pointer;
  border: none;
  padding: 14px;
  text-align: center;
  background-color: #00e3e9;
  font-size: .65rem;
  line-height: 1.13;
  letter-spacing: 0.4px;
  color: #2b2037;
}

.panel {
  border: solid 1.5px #2b2037;
  border-radius: 8.1px;
  background-color: #fff;
}

.inactive.panel {
  background-color: #a8b5d9;
}

.tabs {
  display: flex;
  border-top: solid 1.5px #2b2037;
  border-bottom: solid 1.5px #2b2037;
  border-radius: 5.6px 5.6px 1px 1px;
  overflow: hidden;
}

.tabs li {
  cursor: pointer;
  padding: .75rem .38rem;
  font-size: .625rem;
  border-right: solid 1.5px #2b2037;
}

.tabs li:hover,
.tabs li.active {
  background-color: #00e3e9;
}

.inactive .tabs li,
.inactive a {
  cursor: default;
}

.inactive a {
  background-color: #7c86a4;
}

.inactive .tabs li:hover {
  background-color: #a8b5d9;
}

#id-field {
  width: 25px;
}

#name-field {
  width: 60px;
}

.tech {
  font-family: 'Share Tech Mono', monospace;
  letter-spacing: 1.3px;
  color: #00e3e9;
}

#expression-information {
  position: absolute;
  width: 196px;
  left: 166px;
  top: 15px;
}

#expression-text {
  position: absolute;
  top: 60px;
  left: 408px;
  text-align: left;
  font-size: .9rem;
  line-height: 1.3;
}

.expression-form {
  display: none;
}

.expression-form .button {
  margin-top: .6rem;
}

#expressions-text {
  position: absolute;
  top: 405px;
  left: 171px;
  text-align: left;
}

#expressions-information {
  position: absolute;
  z-index: 1;
  top: 542px;
  width: 372px;
  margin-left: 168px;
  margin-bottom: 5rem;
}

#expressions-information .tabs {
  flex-wrap: wrap;
  border-bottom: none;
}

#expressions-information .tabs li {
  box-sizing: border-box;
  width: 62px;
  height: 76px;
  border-bottom: solid 1.5px #2b2037;
  font-size: 2rem;
  line-height: 1.13;
  letter-spacing: 1px;
}

#expressions-information .tabs li .id {
  font-size: 1.25rem;
}

#expressions-information .button {
  padding: 1.5rem 0;
}

#expression-route {
  position: absolute;
  top: 45px;
  margin-left: -97px;
}

#server-machine {
  position: absolute;
  top: 276px;
  margin-left: -125px;
}

#lightbulb {
  position: absolute;
  top: 243px;
  margin-left: -44px;
}

#beaker {
  position: absolute;
  top: 338px;
  margin-left: -133px;
}

#buttons {
  position: absolute;
  top: 387px;
  width: 37px;
  margin-left: -83px;
}

#sliders {
  position: absolute;
  top: 387px;
  width: 39px;
  margin-left: -41px;
}

#status-code {
  position: absolute;
  top: 297px;
  left: 355px;
  width: 160px;
}

#code-number {
  font-size: 2rem;
}

#code-description {
  font-size: 1rem;
}

.good-status {
  color: #A2F344;
}

.bad-status {
  color: #D33B43;
}

#expressions-route {
  position: absolute;
  top: 380px;
  left: 165px;
}

#machine-type-buttons {
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 287px;
  margin-left: 192px;
  font-size: .75rem;
}

#machine-type-buttons div {
  cursor: pointer;
  padding: .5rem 1rem;
  transition: .5s;
}

#machine-type-buttons div:hover {
  opacity: .7;
}

#machine-type-buttons #expression-machine-type {
  margin-bottom: 1rem;
  background-color: #EA37DA;
}

#machine-type-buttons #animals-machine-type {
  background-color: #FF9B34;
}