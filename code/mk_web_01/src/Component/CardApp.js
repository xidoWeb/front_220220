import './CardApp.scss';


function CardApp(props) {
  // console.log( props )
  return (
    <div className={props.isDark ? 'card dark' : 'card'}>
      Card 감싸는 영역 생성
      {props.children}
    </div>
  )
}

export default CardApp