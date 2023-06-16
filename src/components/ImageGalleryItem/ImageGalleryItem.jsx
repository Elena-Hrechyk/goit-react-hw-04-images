import { useState } from 'react';
import { ItemCard, Image } from './ImageGalleryItem.styled';
import { ModalWin } from 'components/Modal/Modal';

export const ImageGalleryItem = ({ id, webformatURL, tags, largeImageURL }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(isModalOpen => !isModalOpen);
  };

  return (
    <ItemCard key={id}>
      <Image
        src={webformatURL}
        alt={tags}
        onClick={toggleModal}
        loading="lazy"
      />
      {isModalOpen && (
        <ModalWin
          largeImgURL={largeImageURL}
          tags={tags}
          isOpen={isModalOpen}
          onClose={toggleModal}
        />
      )}
    </ItemCard>
  );
};

// export class ImageGalleryItem extends Component {
//   state = { isModalOpen: false };

//   toggleModal = () => {
//     this.setState(({ isModalOpen }) => ({
//       isModalOpen: !isModalOpen,
//     }));
//   };

//   render() {
//     const { id, webformatURL, tags, largeImageURL } = this.props;
//     const { isModalOpen } = this.state;

//     return (
//       <ItemCard key={id}>
//         <Image
//           src={webformatURL}
//           alt={tags}
//           onClick={this.toggleModal}

//           loading="lazy"
//         />
//         {isModalOpen && (
//           <ModalWin
//             largeImgURL={largeImageURL}
//             tags={tags}
//             isOpen={isModalOpen}
//             onClose={this.toggleModal}
//           />
//         )}
//       </ItemCard>
//     );
//   }
// }
