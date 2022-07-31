import React from 'react'
import './Company.scss';

function Company() {
  return (
    <article id="company"> 
      <h3 className='blind'>company info</h3> 
      <div className="company_area our_company">
        <div className="image">
          <span className="blind">이미지설명</span>
        </div>
        <div className="detail_contens">
          <h4>our company</h4>
          <dl>
            <dt>Creator of quality designs<br />
            and thinker of fresh ideas</dt>
            <dd className='narr'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis recusandae, illo perferendis possimus exercitationem eius ut! Enim delectus possimus illum magni dolore cumque qui optio incidunt quam. Quaerat, accusamus? Voluptatum!</dd>
          </dl>
          <div className="more_lik">
            <a href="#">read more</a>
          </div>
        </div>
      </div>


      <div className="company_area the_difference">
        <div className="image">
          <span className="blind">이미지설명</span>
        </div>
        <div className="detail_contens">
          <h4>the difference</h4>
          <dl className='detail_list'>
            <dt>Experience true business performance increases</dt>
            <dd className='data_count'>
              <dl className='count_items'>
                <dt>business increase</dt>
                <dd><span className='count'>87</span><span className='unit'>+</span></dd>
                <dd>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, veniam.</dd>
              </dl>

              <dl className='count_items'>
                <dt>new accounts</dt>
                <dd><span className='count'>267</span></dd>
                <dd>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, veniam.</dd>
              </dl>              
            </dd>
          </dl>
        </div>

      </div>
    </article>
  )
}

export default Company