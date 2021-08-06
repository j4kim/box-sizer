export default {
  sides: [
    {
      name: 'A',
      rectangles: [
        {
          w: ({y}) => y,
          h: ({z}) => z
        },
        {
          w: ({x,e}) => +x + 8 * e,
          h: ({z}) => z
        },
        {
          w: ({y}) => y,
          h: ({z}) => z
        }
      ]
    },
    {
      name: 'B',
      rectangles: [
        {
          w: ({z,e}) => +z + +e,
          h: ({y,e}) => +y + 2*e
        },
        {
          w: ({x,e}) => +x + 6*e,
          h: ({y,e}) => +y + 3*e
        },
        {
          w: ({z,e}) => +z + +e,
          h: ({y,e}) => +y + 2*e
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
          w: ({y,e}) => (+y + 2*e) / 2,
          h: ({z}) => z
        },
        {
          w: ({x,e}) => +x + 2*e,
          h: ({z,e}) => +z + 2*e
        },
        {
          w: ({y,e}) => (+y + 2*e) / 2,
          h: ({z}) => z
        }
      ]
    },
    {
      name: 'D',
      rectangles: [
        {
          w: ({z,e}) => +z + +e,
          h: ({y,e}) => +y + 2*e
        },
        {
          w: ({x,e}) => +x + 4*e,
          h: ({y,e}) => +y + 2*e
        },
        {
          w: ({z,e}) => +z + +e,
          h: ({y,e}) => +y + 2*e
        },
      ]
    },
    {
      name: 'E',
      rectangles: [
        {
          w: ({y,e}) => (+y + 2*e) / 2,
          h: ({z}) => z
        },
        {
          w: ({x,e}) => +x + 2*e,
          h: ({z,e}) => +z + +e
        },
        {
          w: ({y,e}) => (+y + 2*e) / 2,
          h: ({z}) => z
        },
      ]
    }
  ]
}