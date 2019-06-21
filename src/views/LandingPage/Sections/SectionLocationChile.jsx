/* eslint-disable */
import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";

import projectsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/projectsStyle.jsx";

function SectionLocationChile({ ...props }) {
  const { classes, ...rest } = props;
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.projects}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain className={classes.card2}>
                <a
                  href="https://www.creative-tim.com/product/material-kit-react"
                  target="_blank"
                >
                  <CardHeader image plain>
                    <img
                      src={
                        "https://s3.amazonaws.com/creativetim_bucket/products/83/original/opt_mk_react_thumbnail.jpg?1525851474"
                      }
                      alt="..."
                    />
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage:
                          "url('https://s3.amazonaws.com/creativetim_bucket/products/83/original/opt_mk_react_thumbnail.jpg?1525851474')",
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </a>
                <CardBody plain>
                  <a
                    href="https://www.creative-tim.com/product/material-kit-react"
                    target="_blank"
                  >
                    <h4 className={classes.cardTitle}>Santiago</h4>
                  </a>
                  <h6 className={classes.description}>The Capital</h6>
                  <p
                    className={`${classes.description} ${classes.marginTop20}`}
                  >
                    We met the dreaded 'Pio Nio'; got some great views of the
                    stellar office buildings and got happy on quite a bit of
                    Tequila and Pisco Sours. Oh! and that cable car ride...
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain className={classes.card2}>
                <a
                  href="https://www.creative-tim.com/product/light-bootstrap-dashboard-pro-react"
                  target="_blank"
                >
                  <CardHeader image plain>
                    <img
                      src="https://s3.amazonaws.com/creativetim_bucket/products/66/thumb/opt_lbdp_react_thumbnail.jpg?1509466309"
                      alt="..."
                    />
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage:
                          "url('https://s3.amazonaws.com/creativetim_bucket/products/66/thumb/opt_lbdp_react_thumbnail.jpg?1509466309')",
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </a>
                <CardBody plain>
                  <a
                    href="https://www.creative-tim.com/product/light-bootstrap-dashboard-pro-react"
                    target="_blank"
                  >
                    <h4 className={classes.cardTitle}>Valparaiso</h4>
                  </a>
                  <h6 className={classes.description}>That Rooftop</h6>
                  <p
                    className={`${classes.description} ${classes.marginTop20}`}
                  >
                    Do I really need to say anything more the rooftop on that
                    shipping container building? We also got to celebrate your
                    birthday here....
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain className={classes.card2}>
                <a
                  href="https://www.creative-tim.com/product/now-ui-dashboard-pro-react"
                  target="_blank"
                >
                  <CardHeader image plain>
                    <img
                      src="https://s3.amazonaws.com/creativetim_bucket/products/73/original/opt_nudp_react_thumbnail.jpg?1518533306"
                      alt="..."
                    />
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage:
                          "url('https://s3.amazonaws.com/creativetim_bucket/products/73/original/opt_nudp_react_thumbnail.jpg?1518533306')",
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </a>
                <CardBody plain>
                  <a
                    href="https://www.creative-tim.com/product/now-ui-dashboard-pro-react"
                    target="_blank"
                  >
                    <h4 className={classes.cardTitle}>Colchagua Valley</h4>
                  </a>
                  <h6 className={classes.description}>Carmenere</h6>
                  <p
                    className={`${classes.description} ${classes.marginTop20}`}
                  >
                    This was all about the wine. We met Carmenere, Petit Verdot
                    and Purple Angel - and life was never the same again.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain className={classes.card2}>
                <a
                  href="https://www.creative-tim.com/product/now-ui-dashboard-pro-react"
                  target="_blank"
                >
                  <CardHeader image plain>
                    <img
                      src="https://s3.amazonaws.com/creativetim_bucket/products/73/original/opt_nudp_react_thumbnail.jpg?1518533306"
                      alt="..."
                    />
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage:
                          "url('https://s3.amazonaws.com/creativetim_bucket/products/73/original/opt_nudp_react_thumbnail.jpg?1518533306')",
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </a>
                <CardBody plain>
                  <a
                    href="https://www.creative-tim.com/product/now-ui-dashboard-pro-react"
                    target="_blank"
                  >
                    <h4 className={classes.cardTitle}>Patagonia</h4>
                  </a>
                  <h6 className={classes.description}>Glaciers for Days</h6>
                  <p
                    className={`${classes.description} ${classes.marginTop20}`}
                  >
                    This was where we ran out of superlatives for the landscape.
                    Magnificent, Fantastic, Awesome, Utterly Beautiful,
                    Breathtaking...and still doesnt capture the beauty. Planet
                    Earth is just superb
                  </p>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

export default withStyles(projectsStyle)(SectionLocationChile);
