import {
  FaUser,
  FaUsers,
  FaComment,
  FaTrashAlt,
  FaEnvelope,     // Para correo electrónico
  FaVenusMars,    // Para género
  FaBirthdayCake, // Para fecha de nacimiento
  FaGlobe,        // Para país
  FaCity,         // Para ciudad
  FaUniversity,   // Para universidad
  FaBriefcase,
  FaTag,
  FaRegDotCircle, 
  FaMapMarkerAlt, 
  FaFileAlt ,
} from "react-icons/fa";
import { MdDevices, MdCategory, MdCheckCircle, MdNotes } from "react-icons/md";
import { BiBarcode } from "react-icons/bi";
import type { IconType } from "react-icons"; 

export type Icon = IconType; 

export const Icons = {
  user: FaUser,
  users: FaUsers,
  trash: FaTrashAlt,
  comment: FaComment,
  envelope: FaEnvelope,
  venusMars:FaVenusMars,
  birthdayCake: FaBirthdayCake,
  globe: FaGlobe,
  city: FaCity,
  university: FaUniversity,
  Fabriefcase: FaBriefcase,
  faTag: FaTag,
  faRegDotCircle: FaRegDotCircle,
  faMapMarkerAlt:  FaMapMarkerAlt,
  faFileAlt:  FaFileAlt,
  mdDevices:  MdDevices,
  mdCategory: MdCategory,
  mdCheckCircle:  MdCheckCircle,
  mdNotes:  MdNotes,
  biBarcode:  BiBarcode,
};


