const boxList = [
  {
    xMin: 650,
    xMax: 900,
    yMin: 70,
    yMax: 280,
    fill: {
      rgba: {r: 0, g: 255, b: 0, a: 0.15}, hex: '#00ff00',
    },
    border: {
      rgba: {r: 0, g: 0, b: 255, a: 0}, hex: '#0000ff',
    },
    circles: {
      fill: {
        rgba: {r: 0, g: 255, b: 0, a: 0}, hex: '#00ff00',
      },
      border: {
        rgba: {r: 0, g: 0, b: 255, a: 0}, hex: '#0000ff',
      }
    },
    selected: false,
    specialCondition: false,
    label: {isVisible: true, name: 'test', colour: {rgba: {r: 0, g: 255, b: 0, a: 0}, hex: '#00ff00'}},
    softDelete: false
  },
  {
    xMin: 400,
    xMax: 600,
    yMin: 400,
    yMax: 580,
    fill: {
      rgba: {r: 35, g: 73, b: 35, a: 0.15}, hex: '#234923',
    },
    border: {
      rgba: {r: 35, g: 73, b: 35, a: 0.15}, hex: '#234923',
    },
    circles: {
      fill: {
        rgba: {r: 35, g: 73, b: 35, a: 0.15}, hex: '#234923',
      },
      border: {
        rgba: {r: 35, g: 73, b: 35, a: 0.15}, hex: '#234923',
      }
    },
    selected: false,
    specialCondition: false,
    label: {isVisible: true, name: 'yes', colour: {rgba: {r: 35, g: 73, b: 35, a: 0.15}, hex: '#234923',}},
    softDelete: false
  },
  {
    xMin: 940,
    xMax: 1080,
    yMin: 400,
    yMax: 540,
    fill: {
      rgba: {r: 0, g: 255, b: 0, a: 0.15}, hex: '#00ff00',
    },
    border: {
      rgba: {r: 0, g: 255, b: 0, a: 0.15}, hex: '#00ff00',
    },
    circles: {
      fill: {
        rgba: {r: 0, g: 255, b: 0, a: 0}, hex: '#00ff00',
      },
      border: {
        rgba: {r: 0, g: 255, b: 0, a: 0.15}, hex: '#00ff00',
      }
    },
    selected: false,
    specialCondition: false,
    label: {isVisible: true, name: 'test 3', colour: {rgba: {r: 0, g: 255, b: 0, a: 0}, hex: '#00ff00'}},
    softDelete: false
  },
];
// Test data.
const mousePosition = {
  raw:{
    x: 700,
    y: 150
  }
};
