import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';

function Carousel(props) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  console.log(props.otherArtworkImages);
  if (!props.otherArtworkImages) return null;
  const otherArtworkImages = props?.otherArtworkImages
  const getOtherArtworkImages = () => {
    console.log(otherArtworkImages)
    let content = [];
    for (let item of otherArtworkImages) {
      content.push(<div style={{ width: 300, height: 300, background: '#F6F8FA' }}>
          <img src={`${item}`} style={{padding:10}}/>
      </div>);
  }
    return content;
  };

  return (
    <div className='carouselBox'>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 4,
            itemsToScroll: 2,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        
        {getOtherArtworkImages(props.otherArtworkImages)}
        
      </ReactSimplyCarousel>
    </div>
  );
}

export default Carousel;