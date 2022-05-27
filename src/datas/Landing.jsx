import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { Instagram, GitHub } from '@mui/icons-material'
import {NoteAdd} from '@mui/icons-material'
import Test from '../icons/Test'
import Micro from '../icons/Micro'
import Store from '../icons/Store.jsx'
import Doctors from '../assets/doctor.png'
import Doctor from '../icons/doctor.jsx'
import Smile from '../icons/Smile.jsx'

export const navs = [
    {link: "Primary Care", path: "primarycare"}, 
    {link: "Ecosystem", path: "ecosystem"}, 
    {link: "Health Services", path: "heathcare"}, 
    {link: "Get app", path: "getapp"}
];
export const bots = [
    {h1: "Learn More", bols: ["Plans and pricing", "Tips and Tricks", "Plugins and apps", "Legal /Privacy"]},
    {h1: "Company", bols: ["About us", "Press", "Owner"]},
    {h1: "Support", bols: ["0785964206", "Contact us", "FAQ"]}
];
export const contacts = [
    {icon: <FaFacebookF className="text-xl"/>, title: "Facebook", link: "https://www.facebook.com/nikalisa.45"},
    {icon: <Instagram />, title: "Instagram", link: "https://www.instagram.com/ni_kalisa"},
    {icon: <FaLinkedinIn className="text-xl"/>, title: "Linkedin In", link: "https://www.linkedin.com/in/kalisa-ineza-giovanni-63a406231"},
    {icon: <GitHub />, title: "Git Hub", link: "https://github.com/the-coder-kalisa"}
];
export const lefts = [
    {icon: <Doctor color="#E3A7C6" width="20"/>, h1: "Treatment", p: "We can treat most illness and provide referrals to a specialst for very complex conditions."},
    {icon: <NoteAdd style={{color: "#06BA63"}} sx={{width: '2rem', height: '2rem'}}/>, h1: "Prescriptons", p: "Levitra helps you get and refill prescriptions. But All doctors treat, but a good doctor lets nature heal."},
    {icon: <Test />, h1: "Diagnose", p: "Levitra mails the results to your house. Levitra uses these data to diagose you  precisely."},
    {icon: <Micro />, h1: "Referrals", p: "Levitra provides referrals to specialists, labs,imaging and other advancedtests."}
]
export const works = [
    {
      icon: <Store />,
      h1: "Stock Management",
      document: "We take care of your medecines and their exchange"
    },
    {
      icon: <Doctor width="80"/>,
      h1: "Patient-Doctor Chat",
      document: "Patients can talk their doctors via messages or call"
    },
    {
      icon: <img src={Doctors} alt="doctors" className="w-[80px]"/>,
      h1: "Patients' Health",
      document: "We Provide The Best Medical Care For Your Family!"
    }
]
export   const follows = [
    {
      icon: <Doctor/>,
      h1: '1000+',
      message: 'Good doctors'
    },
    {
      icon: <Smile />,
      h1: "12K",
      message: 'Happy patients'
    }
];
export   const testmony = [
    {
      message: "Great service-Helped with an immediate diagnosis which could well have saved my life.",
      sender: "KALISA INEZA Giovanni",
      place: "Norvege, Kigali"
    },
    {
      message: "You feel like being treated by your family Doctor who knows you for so many years",
      sender: "BUGINGO Eloi",
      place: "Nyamirambo, Kigali"
    },
    {
      message: "I have never experienced such through, responsive proactive health care.",
      sender: "Rutangerwa Bruce",
      place: "Remera, Kigali"
    }
];