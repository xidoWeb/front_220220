// Navigation.js


function Navigation(){

  // const NavList = [ 'about', 'product', 'notice', 'gallery', 'event' ];
  const NavObj = [
    {key:'nav_1', content:'about' , href:'#' },
    {key:'nav_2', content:'product' , href:'#' },
    {key:'nav_3', content:'notice' , href:'#' },
    {key:'nav_4', content:'gallery' , href:'#' },
    {key:'nav_5', content:'event' , href:'#' }
  ];
  
  const fnList = NavObj.map((data) => <li key={data.key}><a href={data.href}>{data.content}</a></li>);

  // for,forEach 로 사용하던 반복구분으로 쓰기보다. 
  // 요소의 개념으로 처리할 경우에는 map, filter의 개념을 쓰는것이 더 효율적이다. 
  // 컴포넌트 개념으로 적용되는 파일중 js문서에서는 함수와, 이벤트핸들러, 다양한 기능들이 혼합되어있기에
  // 각각 기능에 맞게 파일을 분리(컴포넌트화) 하는게 좋다.

  return (
    <nav className="navigation">
      <h2>navigation</h2>
      <ul>
        {/* <li><a href="#">{NavList[0]}</a></li> */}
        { fnList }
      </ul>
    </nav>
  )
}
export default Navigation;