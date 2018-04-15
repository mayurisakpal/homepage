import React, { Component } from "react";
import { Animated } from "react-animated-css";
import ModalVideo from "react-modal-video";

import {
  Layout,
  Header,
  Navigation,
  Drawer,
  Content,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button
} from "react-mdl";



class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <div>
        

        <div className="tbanner" >
          <Layout
            style={{
              background: "url(././assets/bannerhead.jpg) center / cover"
            }}
          >
            <div className="topbanner">
              <div style={{ width: "92%", margin: "auto" }}>
                <Grid className="demo-grid-ruler">
                  <Cell col={12}>
                    <Animated animationIn="fadeInDown" isVisible={true}>
                      {" "}
                      <h1 className="">Focus on Smart Care</h1>
                    </Animated>
                    <Animated animationIn="fadeInUp" isVisible={true}>
                      {" "}
                      <p className="">Specialized in smart care service</p>
                    </Animated>
                    <ModalVideo
                      channel="youtube"
                      isOpen={this.state.isOpen}
                      videoId="ScMzIvxBSi4"
                      onClose={() => this.setState({ isOpen: false })}
                    />
                    <Animated animationIn="fadeInDown" isVisible={true}>
                      <button
                        type="button"
                        onClick={this.openModal}
                        className="btn btn-outline banner-btn"
                      >
                        <i class="material-icons">play_circle_outline</i>
                        <span> &nbsp;Watch the Video</span>
                      </button>
                    </Animated>
                  </Cell>
                </Grid>
              </div>
            </div>
          </Layout>
        </div>
        <div className="service-container">
          <Grid className="demo-grid-1">
            <Cell col={4}>
              <div className="margin5-15">
                <Card shadow={0} className="service-card ">
                  <img
                    className="service-img"
                    src="././assets/phone-call.svg"
                    alt="Services"
                  />

                  <CardTitle
                    expand
                    style={{
                      alignItems: "flex-center",
                      color: "#333",
                      paddingBottom: "0"
                    }}
                  >
                    <h5 style={{ margin: "0" }}>
                      Call Service
                    </h5>
                  </CardTitle>
                  <CardActions
                    style={{
                      justifyContent: "center",
                      display: "flex",
                      boxSizing: "border-box",
                      color: "#4a4a4a"
                    }}
                  >
                    <p style={{ marginTop: "0" }}>
                      Take the initiative to call
                    </p>
                  </CardActions>
                </Card>
              </div>
            </Cell>

            <Cell col={4} >
              <div className="margin5-15">
                <Card shadow={0} className="service-card">
                  <img
                    className="service-img"
                    src="././assets/alert.svg"
                    alt="Services"
                  />

                  <CardTitle
                    expand
                    style={{
                      alignItems: "flex-center",
                      color: "#333",
                      paddingBottom: "0"
                    }}
                  >
                    <h5 style={{ margin: "0" }}>
                      Active Warning
                    </h5>
                  </CardTitle>
                  <CardActions
                    style={{
                      justifyContent: "center",
                      display: "flex",
                      boxSizing: "border-box",
                      color: "#4a4a4a"
                    }}
                  >
                    <p style={{ marginTop: "0" }}>
                      Timely detection of accidents
                    </p>
                  </CardActions>
                </Card>
              </div>
            </Cell>
            <Cell col={4}>
              <div className="margin5-15">
                <Card shadow={0} className="service-card">
                  <img
                    className="service-img"
                    src="././assets/health-care.svg"
                    alt="Services"
                  />

                  <CardTitle
                    expand
                    style={{
                      alignItems: "flex-center",
                      color: "#333",
                      paddingBottom: "0"
                    }}
                  >
                    <h5 style={{ margin: "0" }}>
                      Care Plan
                    </h5>
                  </CardTitle>
                  <CardActions
                    style={{
                      justifyContent: "center",
                      display: "flex",
                      boxSizing: "border-box",
                      color: "#4a4a4a"
                    }}
                  >
                    <p style={{ marginTop: "0" }}>
                      The care content is pushed
                    </p>
                  </CardActions>
                </Card>
              </div>
            </Cell>
          
            <Cell col={6} tablet={4}>
              <div className="margin5-15">
                <Card shadow={0} className="service-card">
                  <img
                    className="service-img"
                    src="././assets/check.svg"
                    alt="Services"
                  />

                  <CardTitle
                    expand
                    style={{
                      alignItems: "flex-center",
                      color: "#333",
                      paddingBottom: "0"
                    }}
                  >
                    <h5 style={{ margin: "0" }}>
                      Health Records
                    </h5>
                  </CardTitle>
                  <CardActions
                    style={{
                      justifyContent: "center",
                      display: "flex",
                      boxSizing: "border-box",
                      color: "#4a4a4a"
                    }}
                  >
                    <p style={{ marginTop: "0" }}>
                     Intelligent collection of elderly body data
                    </p>
                  </CardActions>
                </Card>
              </div>
            </Cell>

            <Cell col={6} tablet={4}>
              <div className="margin5-15">
                <Card shadow={0} className="service-card">
                  <img
                    className="service-img"
                    src="././assets/children-care.svg"
                    alt="Services"
                  />

                  <CardTitle
                    expand
                    style={{
                      alignItems: "flex-center",
                      color: "#333",
                      paddingBottom: "0"
                    }}
                  >
                    <h5 style={{ margin: "0" }}>
                      Children Interactions
                    </h5>
                  </CardTitle>
                  <CardActions
                    style={{
                      justifyContent: "center",
                      display: "flex",
                      boxSizing: "border-box",
                      color: "#4a4a4a"
                    }}
                  >
                    <p style={{ marginTop: "0" }}>
                      Health data is received in real time
                    </p>
                  </CardActions>
                </Card>
              </div>
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}
export default Homepage;
