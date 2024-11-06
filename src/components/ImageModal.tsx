import Modal from 'react-modal';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  altText: string;
}

Modal.setAppElement('#root');

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 9999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    position: 'relative' as const,
    top: 'auto',
    left: 'auto',
    right: 'auto',
    bottom: 'auto',
    border: 'none',
    background: 'transparent',
    overflow: 'visible',
    padding: '20px',
    maxWidth: '90vw',
    maxHeight: '90vh'
  }
};

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, imageUrl, altText }) => {
  console.log('Modal opened with image:', imageUrl);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
    >
      <div className="relative bg-transparent min-w-[300px] md:min-w-[500px] min-h-[300px] md:min-h-[500px]">
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-white rounded-full p-2 hover:bg-gray-100 z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex items-center justify-center w-full h-full">
          <img
            src={imageUrl}
            alt={altText}
            className="w-full h-full min-w-[300px] md:min-w-[500px] min-h-[300px] md:min-h-[500px] max-w-[90vw] max-h-[85vh] object-contain"
          />
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;