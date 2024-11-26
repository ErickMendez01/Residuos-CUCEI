import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";

interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

const BaseModal = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  className,
}: BaseModalProps) => {
  return (
    <Modal
      backdrop="opaque"
      scrollBehavior="inside"
      isOpen={isOpen}
      onOpenChange={(open) => !open && onClose()}
      radius="lg"
      className={`bg-white  text-black ${className || ""}`}
      classNames={{
        body: "space-y-5",
        backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
        header: "border-b-[1px] border-white",
        footer: "border-t-[1px] border-white",
        closeButton: "hover:bg-white/5 active:bg-white/10",
      }}
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col text-center">
              {title}
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
            <ModalFooter>{footer}</ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default BaseModal;
