import { nanoid } from 'nanoid';

export const servicesList = {
  services: [
    {
      id: nanoid(),
      title: "Data collection and analysis",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum enim scelerisque cras et bibendum. Sed nisl non donec massa lectus quam risus malesuada sed. Viverra justo, cursus malesuada nec nulla velit. Purus dui tortor massa adipiscing ultrices aliquam nulla velit mi.",
      icon:  (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="49" height="48" viewBox="0 0 49 48">
          <path fill="#000" d="M24.5 27a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm21-1.5v-3h-9.3l4-3.9-2.2-2.1-7.5 7.5 7.5 7.5 2.1-2.1-3.9-3.9h9.3ZM23 35.7V45h3v-9.3l3.9 4 2.1-2.2-7.5-7.5-7.5 7.5 2.1 2.1 3.9-3.9ZM11 16.5l-2.1 2.1 3.9 3.9H3.5v3h9.3l-4 3.9 2.2 2.1 7.5-7.5-7.5-7.5Zm15-4.2V3h-3v9.3l-3.9-4-2.1 2.2 7.5 7.5 7.5-7.5-2.1-2.1-3.9 3.9Z"/>
        </svg>
      ),
    },
    {
      id: nanoid(),
      title: "Cadastral survey and mapping",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum enim scelerisque cras et bibendum. Sed nisl non donec massa lectus quam risus malesuada sed. Viverra justo, cursus malesuada nec nulla velit. Purus dui tortor massa adipiscing ultrices aliquam nulla velit mi.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="49" height="48" viewBox="0 0 49 48">
          <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M19.5 20h10m-5 6v18-18Zm0 0 12 18-12-18Zm0 0-12 18 12-18Zm0-12v6-6Z"/>
          <path stroke="#000" strokeLinejoin="round" strokeWidth="4" d="M10.5 6h26v8h-26V6Z"/>
          <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M40.5 8v4"/>
        </svg>
      )
    },
    {
      id: nanoid(),
      title: "Civil/Structural engineering",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum enim scelerisque cras et bibendum. Sed nisl non donec massa lectus quam risus malesuada sed. Viverra justo, cursus malesuada nec nulla velit. Purus dui tortor massa adipiscing ultrices aliquam nulla velit mi.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="49" height="48" viewBox="0 0 49 48">
          <path fill="#000" d="m28 30.3 4.3-4.2 12 12-4.2 4.2-12-12ZM35.6 20a7 7 0 0 0 6.2-10.2l-5.4 5.4-3-3 5.4-5.4A7 7 0 0 0 28.5 13c0 .8.2 1.6.4 2.3L25.2 19l-3.5-3.5L23 14l-2.8-2.8L24.5 7A6 6 0 0 0 16 7l-7 7 2.8 2.9H6l-1.4 1.4 7 7 1.5-1.3v-5.7l2.8 2.8 1.4-1.4 3.6 3.6L6.2 38l4.2 4.2 22.8-22.7c.7.2 1.5.4 2.3.4Z"/>
        </svg>
      )
    },
  ]
};

export const reasonList = {
  choose_us: [
    {
      id: nanoid(),
      title: "Client satisfaction",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="48" height="48" viewBox="0 0 48 48">
          <path fill="#903B13" d="M42 16H29.4l1.9-9.1v-.7a3 3 0 0 0-.8-2.1L28.3 2 15.2 15.2A4 4 0 0 0 14 18v20a4 4 0 0 0 4 4h18c1.7 0 3-1 3.7-2.4l6-14.1.3-1.5v-4a4 4 0 0 0-4-4Zm0 8-6 14H18V18l8.7-8.7L24.5 20H42v4ZM2 18h8v24H2V18Z"/>
        </svg>
      ),
    },
    {
      id: nanoid(),
      title: "Cost effective",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="48" height="48" viewBox="0 0 48 48">
          <path fill="#903B13" fillRule="evenodd" d="M24 6a25.8 25.8 0 0 0-12.6 3.6l2.8 4 1.3.6c5 2.6 11.9 2.6 17 0l1.5-.8 2.6-3.8-1.7-1A25.3 25.3 0 0 0 24 6Zm-6.4 4.6-2.9-.7A21.3 21.3 0 0 1 31 9a53 53 0 0 0-7.2 1.5c-1.9.6-4 .5-6.2.1Zm16 5-.3.2c-5.6 2.8-13 2.8-18.6 0l-.3-.1C6 24.9-.4 42 24 42c24.5 0 18-17.4 9.6-26.3ZM23 24a2 2 0 0 0 0 4v-4Zm2-2v-1h-2v1a4 4 0 1 0 0 8v4a2 2 0 0 1-1.9-1.3 1 1 0 1 0-1.9.6A4 4 0 0 0 23 36v1h2v-1a4 4 0 1 0 0-8v-4a2 2 0 0 1 1.9 1.3 1 1 0 1 0 1.9-.6A4 4 0 0 0 25 22Zm0 8v4a2 2 0 1 0 0-4Z" clipRule="evenodd"/>
        </svg>
      ),
    },
    {
      id: nanoid(),
      title: "Precision",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="48" height="48" viewBox="0 0 48 48">
          <path fill="#903B13" d="M35 24a11 11 0 1 1-22 0 11 11 0 0 1 22 0ZM26.8 5.8a18.5 18.5 0 0 1 15.3 15.3H48C46.7 10.1 38 1.3 26.9 0v5.8Zm-21 15.3A18.5 18.5 0 0 1 21.1 5.8V0C10.1 1.3 1.3 10 0 21.1h5.8ZM42.2 27a18.5 18.5 0 0 1-15.3 15.3V48c11-1.3 19.8-10 21.1-21.1h-5.8Zm-21 15.3A18.5 18.5 0 0 1 5.7 26.9H0c1.3 11 10 19.8 21.1 21.1v-5.8Z"/>
        </svg>
      ),
    }
  ]
};

export const contactList = [
  {
    id: nanoid(),
    name: "Location",
    text: "Plot X 90, Nsukka Street, Garki II, Abuja, FCT.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24">
        <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
        <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a8 8 0 0 0-8 8c0 1.9.4 3.1 1.5 4.5L12 22l6.5-7.5A6.4 6.4 0 0 0 20 10a8 8 0 0 0-8-8v0Z"/>
      </svg>
    ),
  },
  {
    id: nanoid(),
    name: "Phone",
    text: "+234-8036183138",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="32" height="32" viewBox="0 0 32 32">
        <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12c0-7 7-7 13-7s13 0 13 7c0 8-7-1-7-1H10s-7 9-7 1Zm8 2s-5 5-5 14h20c0-9-5-14-5-14H11Z"/>
        <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 25a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/>
      </svg>
    ),
  },
  {
    id: nanoid(),
    name: "Email",
    text: "primebasegeoserv@gmail.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="32" height="32" viewBox="0 0 32 32">
        <path fill="#fff" d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm-2.2 2L16 14.8 6.2 8h19.6ZM4 24V9l11.4 7.8a1 1 0 0 0 1.2 0L28 9v15H4Z"/>
      </svg>
    ),
  }
]