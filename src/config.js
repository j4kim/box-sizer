export default {
  sides: [
    {
      name: 'A',
      rectangles: [
        {
          w: ({y}) => +y / 3,
          h: ({z}) => z,
          style: { borderRight: 'none' }
        },
        {
          w: ({x,e}) => +x + 8 * e,
          h: ({z}) => z,
          style: {
            borderLeftStyle: 'dashed',
            borderRightStyle: 'dashed',
            borderBottom: 'none'
          }
        },
        {
          w: ({y}) => +y / 3,
          h: ({z}) => z,
          style: { borderLeft: 'none' }
        }
      ]
    },
    {
      name: 'B',
      rectangles: [
        {
          w: ({z,e}) => +z + +e,
          h: ({y,e}) => +y + 2*e,
          style: { borderRight: 'none' }
        },
        {
          w: ({x,e}) => +x + 6*e,
          h: ({y,e}) => +y + 3*e,
          style: { borderStyle: 'dashed' }
        },
        {
          w: ({z,e}) => +z + +e,
          h: ({y,e}) => +y + 2*e,
          style: { borderLeft: 'none' }
        }
      ],
      style: {
        alignItems: 'flex-end'
      }
    },
    {
      name: 'C',
      rectangles: [
        {
          w: ({y}) => +y / 3,
          h: ({z}) => z,
          style: { borderRight: 'none' }
        },
        {
          w: ({x,e}) => +x + 2*e,
          h: ({z,e}) => +z + 2*e,
          style: {
            borderStyle: 'dashed',
            borderTop: 'none',
            borderBottom: 'none',
          }
        },
        {
          w: ({y}) => +y / 3,
          h: ({z}) => z,
          style: { borderLeft: 'none' }
        }
      ]
    },
    {
      name: 'D',
      rectangles: [
        {
          w: ({z,e}) => +z + +e,
          h: ({y,e}) => +y + 2*e,
          style: { borderRight: 'none' }
        },
        {
          w: ({x,e}) => +x + 4*e,
          h: ({y,e}) => +y + 2*e,
          style: { borderStyle: 'dashed' }
        },
        {
          w: ({z,e}) => +z + +e,
          h: ({y,e}) => +y + 2*e,
          style: { borderLeft: 'none' }
        },
      ]
    },
    {
      name: 'E',
      rectangles: [
        {
          w: ({y,e}) => (+y + 2*e) / 2,
          h: ({z}) => z,
          style: { borderRight: 'none' }
        },
        {
          w: ({x,e}) => +x + 2*e,
          h: ({z,e}) => +z + +e,
          style: {
            borderLeftStyle: 'dashed',
            borderRightStyle: 'dashed',
            borderTop: 'none'
          }
        },
        {
          w: ({y,e}) => (+y + 2*e) / 2,
          h: ({z}) => z,
          style: { borderLeft: 'none' }
        },
      ]
    }
  ]
}