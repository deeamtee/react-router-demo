import { Link } from 'react-router-dom';
import './Photo.css';
import { useParams } from 'react-router-dom';

function Photo({ photos }) {
  const getPhotoById = (photos, id) => photos.find(photo => photo.id === id);

  console.log(useParams())

  
  const { id } = useParams();
  const photo = getPhotoById(photos, id);

  return (
    <div className="Photo">
        <Link to='/'>Go back</Link>
      {
        photo ?
          <>
            <img className="Photo-image" src={photo.src} alt={photo.alt} />
            <p className="Photo-title">{photo.title}</p>
            <p className="Photo-subtitle">{photo.subtitle}</p>
          </>
          : <p className="Photo-note">No photo with such id</p>
      }
    </div>
  );
}

export default Photo;
