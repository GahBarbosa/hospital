import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";
const K_WIDTH = 40;

const Style = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_WIDTH,
  height: K_WIDTH,
  left: -K_WIDTH / 2,
  top: -K_WIDTH / 2,

  border: '5px solid #f44336',
  borderRadius: K_WIDTH,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4,
  cursor: 'pointer'
};

class Mapa extends Component {
  
  static defaultProps = {
    center: {
      lat: -23.618237,
      lng: -46.635197
    },
    zoom: 15,
  
  };
 
  
  constructor(props) {
    super(props);
    this.state = {
      lat:1,
      lng:1,
      nome:'',
      endereco:'',
      setIconPills:"1",
      setPills:"6",
      shouldRender:false,
      }
  }
  componentDidMount(){
    this.setState({
      lat:this.props.location.state.lat,  
      lng:this.props.location.state.lng,
      latUsuario:this.props.location.state.lat,  
      lngUsuario:this.props.location.state.lng,
      lat1:this.props.location.state.lat1,  
      lng1:this.props.location.state.lng1,
      lat2:this.props.location.state.lat2,  
      lng2:this.props.location.state.lng2,
      lat3:this.props.location.state.lat3,  
      lng3:this.props.location.state.lng3,
      lat4:this.props.location.state.lat4,  
      lng4:this.props.location.state.lng4,
      lat5:this.props.location.state.lat5,  
      lng5:this.props.location.state.lng5,
      lat6:this.props.location.state.lat6,  
      lng6:this.props.location.state.lng6,
      lat7:this.props.location.state.lat7,  
      lng7:this.props.location.state.lng7,
      lat8:this.props.location.state.lat8,  
      lng8:this.props.location.state.lng8,
      lat9:this.props.location.state.lat9,  
      lng9:this.props.location.state.lng9,
      lat10:this.props.location.state.lat10,  
      lng10:this.props.location.state.lng10,
    })
  }

  handleReRender = () => {
    this.setState({
      shouldRender:false
    })
  }
 
  buscar = () => {
    console.log(this.state.lat,this.state.lng)
    console.log(Style)
  }

  handleHover = (event) => {
    let element = document.getElementById(event.target.id)
    let id = event.target.id;
    let nome = element.getAttribute("nome")
    let endereco = element.getAttribute("endereco")
    if(id <= 5){
      this.setState({
        nome: nome,
        endereco: endereco,
        setIconPills: id,
        shouldRender:true
      })
    } else {
      this.setState({
        nome2:nome,
        endereco2: endereco,
        setPills: id,
        shouldRender:true
      })
    }
  };

  handleClick = (event) => {
    this.setState({
      places : [
        {latitude: this.state.lat , longitude: this.state.lng},
        {latitude: event.target.lat , longitude: event.target.lng},
      ]
    }) 

    console.log(this.state.places)
  };


  render() {
    const style = Style;
    const apiIsLoaded = (map,maps) => {
      const directionsService = new maps.DirectionsService();
      const directionsDisplay = new maps.DirectionsRenderer();
      directionsService.route({
        origin: 'Av 565 145, San Juan de Aragón II Secc, 07969 Ciudad de México, CDMX, Mexico',
        destination: 'Piña MZ3 LT8, Ampliacion Lopez Portillo, 13400 Ciudad de México, CDMX, Mexico',
        travelMode: 'DRIVING'
      }, (response, status) => {
        if (status === 'OK') {
          directionsDisplay.setDirections(response);
          console.log(response.routes[0].overview_path, 'Ruta')
          const routePolyline = new google.maps.Polyline({
            path: response.routes[0].overview_path
          });
          routePolyline.setMap(map);
        } else {
          window.alert('Directions request failed due to ' + status);
          }
        });
  };
    return (
      <Container>
      <Row>
      <Col className="ml-auto mr-auto" md="10" xl="6">
        <Tabs handler={this.handleReRender} {...this.state} />
        </Col>
        <Col>
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyBm5xD22Qaw9aSERJeKRQymyv9LB6dwhRk" }}
          defaultCenter= {{
            lat: this.state.lat,
            lng: this.state.lng
          }}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals 
          onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps)}
        >
          <div
            id="usuario"
            lat={this.state.latUsuario}
            lng={this.state.lngUsuario}
            style={style}
          > 
          Você</div>
          <div
            onMouseEnter={this.handleHover}
            onMouseDown={this.handleClick}
            id="1"
            lat={this.state.lat1}
            lng={this.state.lng1}
            style={style}
            nome="hospital 1 nome"
            endereco='rua xxxxxxx 0'
          ><i class="fas fa-hospital-alt"></i></div>
          <div
            onMouseEnter={this.handleHover}
            onMouseDown={this.handleClick}
            id="2"
            lat={this.state.lat2}
            lng={this.state.lng2}
            style={style}
            nome = ' hospital 2'
            endereco = 'rua  xxxx 3'
          ><i class="fas fa-hospital-alt"></i></div>
          <div
            onMouseEnter={this.handleHover}
            onMouseDown={this.handleClick}
            id="3"
            lat={this.state.lat3}
            lng={this.state.lng3}
            style={style}
            nome = ' hospital 3 '
            endereco = 'rua xxxxx 3'
            ><i class="fas fa-hospital-alt"></i></div>
             <div
            onMouseEnter={this.handleHover}
            onMouseDown={this.handleClick}
            id="4"
            lat={this.state.lat4}
            lng={this.state.lng4}
            style={style}
            nome = ' hospital 4 '
            endereco = 'rua xxxxx 4'
            ><i class="fas fa-hospital-alt"></i></div>
           <div
            onMouseEnter={this.handleHover}
            onMouseDown={this.handleClick}
            id="5"
            lat={this.state.lat5}
            lng={this.state.lng5}
            style={style}
            nome = ' hospital 5 '
            endereco = 'rua xxxxx 5'
            ><i class="fas fa-hospital-alt"></i></div>
          <div
            onMouseEnter={this.handleHover}
            onMouseDown={this.handleClick}
            id="6"
            lat={this.state.lat6}
            lng={this.state.lng6}
            style={style}
            nome = ' hospital 6 '
            endereco = 'rua xxxxx 6'
            ><i class="fas fa-hospital-alt"></i></div>
           <div
            onMouseEnter={this.handleHover}
            onMouseDown={this.handleClick}
            id="7"
            lat={this.state.lat7}
            lng={this.state.lng7}
            style={style}
            nome = ' hospital 7 '
            endereco = 'rua xxxxx 7'
            ><i class="fas fa-hospital-alt"></i></div>
              {/* <div onMouseEnter={this.someHandler}
            id="hospital8"
            lat={this.state.lat8}
            lng={this.state.lng8}
            style={style}
          ><i class="fas fa-hospital-alt"></i></div> */}
           {/* <div onMouseEnter={this.someHandler}
            id="hospital9"
            lat={this.state.lat9}
            lng={this.state.lng9}
            style={style}
          ><i class="fas fa-hospital-alt"></i></div> */}
            {/* <div onMouseEnter={this.someHandler}
            id="hospital10"
            lat={this.state.lat10}
            lng={this.state.lng10}
            style={style}
          ><i class="fas fa-hospital-alt"></i></div> */}
        </GoogleMapReact>
      </div>
      </Col>
      </Row>
      </Container>
    );
  }
}

function Tabs(props){
  
  let iconPills = props.setIconPills;
  let pills = props.setPills;
  return (
  <>
  <Container>
  <Row>
  <p className="category">Hospitais com mais necessidades do seu tipo de sangue tamo precisando</p>
  <Card>
    <CardHeader>
      <Nav className="justify-content-center" role="tablist" tabs>

        <NavItem>
          <NavLink
            className={iconPills === "1" ? "active" : ""}
            >
            hospital 1
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className={iconPills === "2" ? "active" : ""}
            >
           hospital 2
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className={iconPills === "3" ? "active" : ""}
            >
           hospital 3 
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className={iconPills === "4" ? "active" : ""}
            >
             hospital 4
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className={iconPills === "5" ? "active" : ""}
            >
               hospital 5
          </NavLink>
        </NavItem>
        
      </Nav>
    </CardHeader>

    <CardBody>
      <TabContent
        className="text-center"
        activeTab={"iconPills" + iconPills}
      >

      <TabPane tabId="iconPills1">
        <p>
         rua do hospital numero 1
         telefone 5498465468
         quantidade de sangue 
        </p>
      </TabPane>

      <TabPane tabId="iconPills2">
        <p>
        rua do hospital numero 2
         telefone 5498465468
         quantidade de sangue
        </p>
      </TabPane>

      <TabPane tabId="iconPills3">
        <p>
        rua do hospital numero 3
         telefone 5498465468
         quantidade de sangue
        </p>
      </TabPane>

      <TabPane tabId="iconPills4">
        <p>
        rua do hospital numero 4
         telefone 5498465468
         quantidade de sangue
        </p>
      </TabPane>

      <TabPane tabId="iconPills5">
        <p>
        rua do hospital numero 5
         telefone 5498465468
         quantidade de sangue
        </p>
      </TabPane>

      </TabContent>
    </CardBody>
  </Card>
  </Row>

    <Row>
    <p className="category">Mas se for muito longe doa nesses aqui mesmo</p>
              <Card>
                <CardHeader>
                  <Nav
                    className="nav-tabs-neutral justify-content-center"
                    data-background-color="blue"
                    role="tablist"
                    tabs
                  >

                    <NavItem>
                      <NavLink
                        className={pills === "6" ? "active" : ""}
                      >
                        Hospital 1
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink
                        className={pills === "7" ? "active" : ""}
                      >
                         Hospital 2
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink
                        className={pills === "8" ? "active" : ""}
                      >
                         Hospital 3
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink
                        className={pills === "9" ? "active" : ""}
                      >
                        Hospital 4
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink
                        className={pills === "10" ? "active" : ""}
                      >
                        Hospital 5
                      </NavLink>
                    </NavItem>

                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"pills" + pills}
                  >
                    <TabPane tabId="pills6">
                      <p>
                      rua do hospital numero 5
                      telefone 5498465468
                      quantidade de sangue
                      </p>
                    </TabPane>
                    <TabPane tabId="pills7">
                      <p>
                      rua do hospital numero 5
                      telefone 5498465468
                      quantidade de sangue
                      </p>
                    </TabPane>
                    <TabPane tabId="pills8">
                      <p>
                      rua do hospital numero 5
                      telefone 5498465468
                      quantidade de sangue
                      </p>
                    </TabPane>
                    <TabPane tabId="pills9">
                      <p>
                      rua do hospital numero 5
                      telefone 5498465468
                      quantidade de sangue
                      </p>
                    </TabPane>
                    <TabPane tabId="pills10">
                      <p>
                      rua do hospital numero 5
                      telefone 5498465468
                      quantidade de sangue
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
    </Row>
  </Container>
  </>
  );
}
 
export default Mapa;