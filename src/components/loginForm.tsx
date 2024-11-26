import BaseModal from "./ui/modal";


interface LoginFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginForm = ({ isOpen, onClose }: LoginFormProps) => {
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
            Iniciar Sesion
          </button>
        </div>
      }
    >
     
    </BaseModal>
  );
};

export default LoginForm;

