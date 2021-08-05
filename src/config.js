export default {
  sides: [
    {
      name: 'A',
      rectangles: [
        {
          w: ({y}) => y / 2,
          h: ({z,e}) => z - 4 * e
        },
        {
          w: ({y,e}) => y + 8 * e,
          h: ({z}) => z
        },
        {
          w: ({y}) => y / 2,
          h: ({z,e}) => z - 4 * e
        }
      ],
      style: {
        alignItems: 'flex-end'
      }
    }
  ]
}