import './Info.scss';
import { useLocation } from 'react-router-dom';

function Info() {
  const location = useLocation();
  return (
    <div className='info'>
      {/* {location.state.name} */}

    </div>
  );
}

export default Info;