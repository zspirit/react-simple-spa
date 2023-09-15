import React, { useState, useEffect } from "react";
import { FaEye, FaConnectdevelop, FaHourglassHalf, FaCheck , FaTruck, FaMapMarkerAlt} from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Carousel from "./Carousel";
import axios from "axios";
import Accordion from 'react-bootstrap/Accordion';

function HomePage() {

  const url = "https://storage.googleapis.com/ya-misc/interviews/front/examples/1.json"
  const [imageUrl, setImageUrl] = useState([]);
  const [description, setDescription] = useState();
  const [dimensions, setDimensions] = useState();
  const [title, setTitle] = useState();
  const [artistShort, setArtistShort] = useState();
  const [price, setPrince] = useState();
  const [otherArtworkImages, setOtherArtworkImages] = useState()
  const [materials, setMaterials] = useState()
  const [styles, setStyles] = useState();
  const [subjects, setSubjects] = useState();
  const [mediums, setMediums] = useState();

  const getData = () => {
    axios.get(`${url}`)
      .then((response) => {
        setImageUrl(response.data.imageUrl)
        setDescription(response.data.description)
        setDimensions(response.data.dimensions)
        setTitle(response.data.title)
        setArtistShort(response.data.artistShort)
        setPrince(response.data.price)
        setOtherArtworkImages(response.data.otherArtworkImages)
        setMaterials(response.data.materials)
        setStyles(response.data.styles)
        setSubjects(response.data.subjects)
        setMediums(response.data.mediums)
      })
      .catch(error => console.error(`Error : ${error}`))
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class='block'>
            <img src={imageUrl} alt="img art work" class='imgArt'/>
            <div class='links'>
              <div class='link'><FaEye /> View in a room</div>
              <div class='link'><FaConnectdevelop/> AR view</div>
            </div>
          </div>

          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>DESCRIPTION</Accordion.Header>
              <Accordion.Body>
                {description}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>SUBJECT, MEDIUM, STYLE, MATERIALS</Accordion.Header>
              <Accordion.Body>
                {subjects}, {mediums}, {styles}, {materials} 
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div class="col-md-4">
          <h1>{title}</h1>
          <b class='subtitle'>{artistShort?.fullname}</b> - <b class='contry'>{artistShort?.country}</b>
          <p>Pointing 2021, <br/> {dimensions?.width} W x {dimensions?.height} H x {dimensions?.depth}D in</p>
          <h3>{price} €</h3>
          <Button className='btnDark' variant="dark">Acquire</Button>
          <Button className='btnLight' variant="light">Make an offer</Button>

          <p><FaHourglassHalf/> PRES-RESERVE FOR 24 HOURS</p>

          <p><FaCheck/> <b>134€ estimated delivery fee</b> for France</p>

          <p><b>In order to obtain an occurate delivery fee, please enter your country of residence and zip code</b></p>

          <input type="text" name="country" class="inpt"/>
          <input type="text" name="zipcode" class="inpt"/>

          <p><FaTruck/> Delivery fee in 129€</p>
          <p><FaMapMarkerAlt/> Fee pickup in <b>Bruxelles, Belgium</b></p>
          <p><FaCheck/> Try 14 days at home for free</p>

        </div>
        <div class="col-md-12">
          <Carousel otherArtworkImages={otherArtworkImages}/>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
