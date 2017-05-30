var computer = {
  model: "MacBook Pro 15-inch Mid-2009",
  operating_system: "OS X El Capitan",
  processor: "2.8 GHz Intel Core 2 Duo",
  memory: "8 GB 1067 MHz DDR3",
  display: "1440x900",
  state: OFF,
  turnON: function () {
    computer.state = ON;
    console.log(computer.state);
  }
}
