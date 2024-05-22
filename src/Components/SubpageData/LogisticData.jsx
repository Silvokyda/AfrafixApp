//////flight schedulling services
import Videoloop from '../../assets/Videoloop.mp4';
import MapChart from '../../assets/MapChart.png';
import HandshakeIcon from '@mui/icons-material/Handshake';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ScheduleIcon from '@mui/icons-material/Schedule';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import bus from '../../assets/bus.png';
import minvan from '../../assets/minvan.png';
import van from '../../assets/van.png';
import sedan from '../../assets/sedan.png';
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import sgr from '../../assets/sgr.jpg'

export const FlightHero=[
  {
    imgSrc: "https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Flight Scheduling"
  }
];


export const FlightCards=[
  {
    Icon: <Person4OutlinedIcon />,
    text: "We start by collecting your personal travel details. This includes your name, contact information, and any special travel requirements you may have."
  },
  {
    Icon: <FlightTakeoffOutlinedIcon />,
    text: "Next, we gather your travel destination and preferred departure time. This helps us tailor our search to meet your specific needs and preferences."
  },
  {
    Icon: <SearchOutlinedIcon />,
    text: "We search for the most efficient and cost-effective flights that match your criteria. Our goal is to find the best airlines and deals for your journey."
  },
  {
    Icon: <CheckOutlinedIcon />,
    text: "Once we find the perfect flight, we book it for you online. You will receive a prompt message to confirm your payment, ensuring a smooth and hassle-free experience."
  }
];

export const SkyVideo=[
  {
    videoSrc: Videoloop,
    mapImg: MapChart
  }
]

//////Hotel Booking services


export const Hotel=[
  {
    imgSrc: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Hotel Booking"
  }
];


export const HotelCards=[
  {
    Icon: <Person4OutlinedIcon />,
    text: "We begin by collecting your personal details, including your name, contact information, and any specific preferences or requirements for your stay."
  },
  {
    Icon: <HotelOutlinedIcon />,
    text: "Next, we gather information about your accommodation preferences. This includes your travel destination, check-in and check-out dates, preferred hotel amenities, and budget."
  },
  {
    Icon: <SearchOutlinedIcon />,
    text: "We search for the best hotels that match your criteria. Our goal is to find the most suitable and cost-effective options to ensure a comfortable stay."
  },
  {
    Icon: <CheckOutlinedIcon />,
    text: "After finding the ideal hotel, we book the room for you. You will receive a prompt message to confirm your payment, guaranteeing a seamless booking experience."
  }
]

//////Airport and SGR Transfer services

export const AirportHero=[
  {
    imgSrc: "https://www.gobritanya.com/assets/img/gobritanya-airport-transfer-service-london-dublin-00.jpeg",
    title: "Airport Transfer"
  }
];


export const Sgr=[
  {
    imgSrc: sgr,
    title: "SGR Transfer"
  }
];


export const Benefits=[
  {
    Icon: <HandshakeIcon />,
    title: "Meet & greet",
    text: "Your driver will be waiting to meet you no matter what happens"
  },
  {
    Icon: <AttachMoneyIcon />,
    title: "Value",
    text: "Enjoy a high-quality transfer experience at surprisingly low prices"
  },
  {
    Icon: <ScheduleIcon />,
    title: "Speedy",
    text: "No queues, no delays - we’ll get you to your destination quickly"
  },
  {
    Icon: <HomeOutlinedIcon />,
    title: "Door-to-Door",
    text: "For complete peace of mind we’ll take you directly to your hotel door"
  }
]

export const VehiclesType=[
  {
    imgSrc: sedan,
    carTyppe: "Sedan/Saloon",
    List: [
      "1-3 passengers",
      "Private hire with driver",
      "Door to Door Service",
      "Driver meets you personally",
      "Vehicle exclusively for you"
    ]
  },
  {
    imgSrc: minvan,
    carTyppe: "Mini-Van",
    List: [
      "4-6 passengers",
      "Private hire with driver",
      "Door to Door Service",
      "Driver meets you personally",
      "Vehicle exclusively for you"
    ]
  },
  {
    imgSrc: van,
    carTyppe: "Van",
    List: [
      "7-9 passengers",
      "Shuttle Bus Service",
      "Shared ride",
      "Predefined meeting point",
      "Shuttle Service or similar"
    ]
  },
  {
    imgSrc: bus,
    carTyppe: "Shuttel-Bus",
    List: [
      "10-25 passengers",
      "Shuttle Bus Service",
      "Shared ride",
      "Predefined meeting point",
      "Shuttle Service or similar"
    ]
  }
]

//////car rental  services


export const CarHero=[
  {
    imgSrc: "https://bammtours.co.ke/wp-content/uploads/2021/03/Limousine-for-hire-Nairobi-Kenya-1024x766.jpg",
    title: "Chauffeured Car Hire"
  }
]