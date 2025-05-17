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
  FaBriefcase 
} from "react-icons/fa";
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
};

