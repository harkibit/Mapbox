import * as React from 'react';
import { Rate } from 'antd';

function CityInfo(props) {
  const {info} = props;
  const displayName = `${info.name}`;
  const popupStyle = {
    padding : "-10"
  }
  const infoStyle = {
    paddingLeft : "5px"
  }
  return (
    <div style = {popupStyle}>
      <img width = {260} height = {100} src={info.image} />
      <div style = {infoStyle}>
        {displayName} <br/>
        {info.rating} <Rate allowHalf disabled defaultValue={info.rating} />
      </div>
    </div>
  );
}

export default React.memo(CityInfo);



// function CityInfo(props) {
//   const {info} = props;
//   const displayName = `${info.city}, ${info.country}`;
//   const onHover = () => `Read More About ${info.city}`
//   return (
//     <div>
//       <div>
//         {info.city+ ", "+ info.admin_name} |{' '}
//         <a
//           target="_new"
//           href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${displayName}`}
//           onHover = {onHover}
//         >
//           Wikipedia
//         </a>
//       </div>
//       <img width={240} src={info.image} />
//     </div>
//   );
// }

// export default React.memo(CityInfo);