import React from "react";
import NavPills from "components/NavPills/NavPills.jsx";
import SectionLocationChile from "./SectionLocationChile";
import SectionLocationItaly from "./SectionLocationItaly";

// nodejs library to set properties for components
import PropTypes from "prop-types";

NavPills.defaultProps = {
  active: 0,
  color: "primary"
};

NavPills.propTypes = {
  // index of the default active pill
  active: PropTypes.number,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      tabButton: PropTypes.string,
      tabIcon: PropTypes.func,
      tabContent: PropTypes.node
    })
  ).isRequired,
  color: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose"
  ]),
  direction: PropTypes.string,
  horizontal: PropTypes.shape({
    tabsGrid: PropTypes.object,
    contentGrid: PropTypes.object
  }),
  alignCenter: PropTypes.bool
};

class LocationNavPills extends React.Component {
  render() {
    return (
      <NavPills
        alignCenter
        color="warning"
        tabs={[
          {
            tabButton: "Chile",
            tabContent: <SectionLocationChile />
          },
          {
            tabButton: "Italy",
            tabContent: <SectionLocationItaly />
          },
          {
            tabButton: "The World Baby!",
            tabContent: (
              <span>
                <p>
                  OK...slight exaggeration....as much of the world as we can fit
                  into this fleeting yet wonderful lifetime!{" "}
                </p>
              </span>
            )
          }
        ]}
      />
    );
  }
}

export default LocationNavPills;
