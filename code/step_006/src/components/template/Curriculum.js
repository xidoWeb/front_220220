// Curriculum.js
import StudyType from '../StudyTypePiece/StudyType';
import './Curriculum.css';

function Curriculum(){
  return (
    <article className='Curriculum'>
      <h2><abbr title='Merchandiser'>MD</abbr>추천 강의</h2>
      <div className='curriculum_area'>
        <StudyType title='[디자인] 지금보다 딱! 2배 연봉~' />
        <StudyType title='[개발] 최신기술, 누구보다 빠르게.' />
        <StudyType title='[재무] 돈..돈 돈! 경제적 자유를 얻고 싶다면?' />
        <StudyType title='[업무효율] 능력있는 실무자의 핵심 스킬' />
      </div>
    </article>
  )
}

export default Curriculum;