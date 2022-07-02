// StudyItem.js
import './StudyItem.css';

function StudyItem(props){
  const title = props.cardTitle;
  const option = props.option;

  return (
    <li className='StudyItem'>
      <a href="#">
        <div className="skill_tip">
          {/* .software_icon에 .none 추가시 내용 삭제 */}
          <div className="software_icon none"></div>
          
          {/* .label에 .none 추가시 내용 삭제 */}
          <div className="label">글로벌 Best</div>

          {/* .price에 .sale_on 추가시 내부 
              .sale내용 처리 및 .origin 할인표시 */}
          <div className="price sale_on">
            <span className="origin">99,000</span>
            <span className="sale">19,000</span>
            <span className="unit">원</span>            
          </div>
        </div>
        <dl>
          <dt>{title}</dt>
          <dd>
            <span className="option">{option}</span>
            <span className="company">강의 제공자와 관련된 회사의 요약 내용을 작성</span>
          </dd>
        </dl>
      </a>
    </li>
  );
}

export default StudyItem;