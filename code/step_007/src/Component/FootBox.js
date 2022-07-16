import './FootBox.scss';
import FamilyList from './Family/FamilyList';

function FootBox() {
  return (
    <footer id="footBox">
      <h2>FootBox</h2>
      <div className='family'>
        <FamilyList content={'family list name'} />
      </div>
    </footer>
  )
}

export default FootBox