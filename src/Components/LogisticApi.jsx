import TransfersForm from "../Components/Forms/TransfersForm";
import FlightForm from "../Components/Forms/FlightForm"



const LogisticData = [
  {
    title: "Flight Scheduling",
    descrip: "Experience stress-free travel with our tailored flight scheduling service. From booking to itinerary planning, we ensure seamless coordination for your convenience. Let our dedicated team take care of the details while you enjoy a hassle-free journey.",
    imgSource: "https://images.pexels.com/photos/19864335/pexels-photo-19864335/free-photo-of-plane-flying-in-the-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    Btns: <FlightForm />
  },
  {
    title: "Hotel Bookings",
    descrip: "Benefit from seamless travel arrangements with our hotel booking service. We take care of everything from selecting the ideal accommodation to ensuring competitive rates. Relax and enjoy your journey knowing that our experts have your lodging needs covered every step of the way.",
    imgSource: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    Btns: <FlightForm />
  },
  {
    title: "Airport Transfers",
    descrip: "Indulge in stress-free airport transfers with our dependable service. With prompt pick-ups and comfortable rides, we guarantee smooth transportation to your destination. Sit back, relax, and entrust us with your travel needs for a seamless journey from start to finish.",
    imgSource: "https://www.gobritanya.com/assets/img/gobritanya-airport-transfer-service-london-dublin-00.jpeg",
    Btns: <TransfersForm />
  },
  {
    title: "Railway Transfers",
    descrip: "For your railway transfers, rely on our trusted service. Enjoy punctual pick-ups and comfortable rides, ensuring a seamless journey to your destination. Sit back, unwind, and allow us to manage your travel requirements, guaranteeing a stress-free experience from beginning to end.",
    imgSource: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrRxYpH17kHwi-nBELfjow2EBYyqkwtYufZ54RbEU1rw&s",
    Btns: <TransfersForm />
  },
  {
    title: "Chauffeured car hire",
    descrip: "Elevate your travel experience with our chauffeured car hire service. Enjoy luxury, comfort, and convenience as our professional drivers ensure a smooth journey to your destination. Sit back, relax, and indulge in a stress-free ride, knowing that every detail is taken care of for your comfort and satisfaction.",
    imgSource: "https://bammtours.co.ke/wp-content/uploads/2021/03/Limousine-for-hire-Nairobi-Kenya-1024x766.jpg",
    Btns: <TransfersForm />
  }
]

export default LogisticData;