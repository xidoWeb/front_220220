// StudyType.js
import StudyItem from './StudyItem';
import './StudyType.css';

function StudyType(props){
  return (
    <div className='StudyType'>
      <h3>{props.title}</h3>
      <ul>
        <StudyItem />
        <StudyItem />
        <StudyItem />
        <StudyItem />
      </ul>
    </div>        
  )
}

export default StudyType;