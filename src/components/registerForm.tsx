import { div } from "framer-motion/client";
import BaseModal from "./ui/modal";

interface RegisterFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegisterForm = ({ isOpen, onClose }: RegisterFormProps) => {
  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title=""
      footer={
        <div className="justify-end space-x-2">
          <button
            className="bg-black text-white px-4 py-2 rounded-lg"
            onClick={onClose}
          >
            Registrarse
          </button>
        </div>
      }
    >
    </BaseModal>
  );
};

export default RegisterForm;
