import './CardUser.scss';

function CardUser(props) {
  console.log( props.bgImg )
  return (
    <div className="card_user">
      <div className="user_image" style={{backgroundImage:`url(${props.bgImg})`}}>
        {/* <img src={props.bgImg} alt={props.useFamily}/> */}
      </div>
      <p className="user_name"><span>{props.userName}</span> <span>{props.useFamily}</span></p>
      <p className="use_position">{props.userPosition}</p>
    </div>
  )
}

export default CardUser