import React, { Component } from "react";
import PropTypes from "prop-types";

const CANCEL_DISTANCE_ON_SCROLL = 20;

const defaultStyles = {
  root: {
    position: "fixed",
    zIndex: 500,
    top: 0,
    left: 0,
    overflow: "hidden",
  },
  sidebar: {
    zIndex: 500,
    position: "fixed",
    top: 0,
    bottom: 0,
    transition: "transform .3s ease-in-out",
    WebkitTransition: "-webkit-transform .3s ease-in-out",
    willChange: "transform",
    overflowY: "auto",
    backgroundColor: "white",
    border: "3px solid black",
  },
  content: {
    position: "fixed",
    top: 0,
    left: 0,
    overflowY: "auto",
    WebkitOverflowScrolling: "touch",
    transition: "left .3s ease-in-out, right .3s ease-in-out",
  },
  overlay: {
    zIndex: 499,
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0,
    visibility: "hidden",
    transition: "opacity .3s ease-in-out, visibility .3s ease-in-out",
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  dragHandle: {
    zIndex: 1,
    position: "fixed",
    top: 0,
    bottom: 0,
  },
};

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarWidth: props.defaultSidebarWidth,
      touchIdentifier: null,
      touchStartX: null,
      touchCurrentX: null,
      dragSupported: false,
    };
  }

  componentDidMount() {
    const isIos = /iPad|iPhone|iPod/.test(navigator ? navigator.userAgent : "");
    this.setState({
      dragSupported:
        typeof window === "object" && "ontouchstart" in window && !isIos,
    });
    this.saveSidebarWidth();
  }

  componentDidUpdate() {
    if (!this.isTouching()) {
      this.saveSidebarWidth();
    }
  }

  onTouchStart = (ev) => {
    if (!this.isTouching()) {
      const touch = ev.targetTouches[0];
      this.setState({
        touchIdentifier: touch.identifier,
        touchStartX: touch.clientX,
        touchCurrentX: touch.clientX,
      });
    }
  };

  onTouchMove = (ev) => {
    if (this.isTouching()) {
      for (let ind = 0; ind < ev.targetTouches.length; ind++) {
        if (ev.targetTouches[ind].identifier === this.state.touchIdentifier) {
          this.setState({
            touchCurrentX: ev.targetTouches[ind].clientX,
          });
          break;
        }
      }
    }
  };

  onTouchEnd = () => {
    if (this.isTouching()) {
      const touchWidth = this.touchSidebarWidth();

      if (
        (this.props.open &&
          touchWidth <
            this.state.sidebarWidth - this.props.dragToggleDistance) ||
        (!this.props.open && touchWidth > this.props.dragToggleDistance)
      ) {
        this.props.onSetOpen(!this.props.open);
      }

      this.setState({
        touchIdentifier: null,
        touchStartX: null,
        touchCurrentX: null,
      });
    }
  };

  onScroll = () => {
    if (this.isTouching() && this.inCancelDistanceOnScroll()) {
      this.setState({
        touchIdentifier: null,
        touchStartX: null,
        touchCurrentX: null,
      });
    }
  };

  inCancelDistanceOnScroll() {
    let cancelDistanceOnScroll;

    if (this.props.pullRight) {
      cancelDistanceOnScroll =
        Math.abs(this.state.touchCurrentX - this.state.touchStartX) <
        CANCEL_DISTANCE_ON_SCROLL;
    } else {
      cancelDistanceOnScroll =
        Math.abs(this.state.touchStartX - this.state.touchCurrentX) <
        CANCEL_DISTANCE_ON_SCROLL;
    }
    return cancelDistanceOnScroll;
  }

  isTouching() {
    return this.state.touchIdentifier !== null;
  }

  overlayClicked = () => {
    if (this.props.open) {
      this.props.onSetOpen(false);
    }
  };

  saveSidebarWidth() {
    const width = this.sidebar.offsetWidth;

    if (width !== this.state.sidebarWidth) {
      this.setState({ sidebarWidth: width });
    }
  }

  saveSidebarRef = (node) => {
    this.sidebar = node;
  };

  touchSidebarWidth() {
    if (this.props.pullRight) {
      if (
        this.props.open &&
        window.innerWidth - this.state.touchStartX < this.state.sidebarWidth
      ) {
        if (this.state.touchCurrentX > this.state.touchStartX) {
          return (
            this.state.sidebarWidth +
            this.state.touchStartX -
            this.state.touchCurrentX
          );
        }
        return this.state.sidebarWidth;
      }
      return Math.min(
        window.innerWidth - this.state.touchCurrentX,
        this.state.sidebarWidth
      );
    }

    if (this.props.open && this.state.touchStartX < this.state.sidebarWidth) {
      if (this.state.touchCurrentX > this.state.touchStartX) {
        return this.state.sidebarWidth;
      }
      return (
        this.state.sidebarWidth -
        this.state.touchStartX +
        this.state.touchCurrentX
      );
    }
    return Math.min(this.state.touchCurrentX, this.state.sidebarWidth);
  }

  render() {
    const sidebarStyle = {
      ...defaultStyles.sidebar,
      ...this.props.styles.sidebar,
    };
    const contentStyle = {
      ...defaultStyles.content,
      ...this.props.styles.content,
    };
    const overlayStyle = {
      ...defaultStyles.overlay,
      ...this.props.styles.overlay,
    };
    const useTouch = this.state.dragSupported && this.props.touch;
    const isTouching = this.isTouching();
    const rootProps = {
      className: this.props.rootClassName,
      style: { ...defaultStyles.root, ...this.props.styles.root },
      role: "navigation",
      id: this.props.rootId,
    };
    let dragHandle;

    const hasBoxShadow =
      this.props.shadow && (isTouching || this.props.open || this.props.docked);
    if (this.props.pullRight) {
      sidebarStyle.right = 0;
      sidebarStyle.transform = "translateX(100%)";
      sidebarStyle.WebkitTransform = "translateX(100%)";
      if (hasBoxShadow) {
        sidebarStyle.boxShadow = "-2px 2px 4px rgba(0, 0, 0, 0.15)";
      }
    } else {
      sidebarStyle.left = 0;
      sidebarStyle.transform = "translateX(-100%)";
      sidebarStyle.WebkitTransform = "translateX(-100%)";
      if (hasBoxShadow) {
        sidebarStyle.boxShadow = "2px 2px 4px rgba(0, 0, 0, 0.15)";
      }
    }

    if (isTouching) {
      const percentage = this.touchSidebarWidth() / this.state.sidebarWidth;

      if (this.props.pullRight) {
        sidebarStyle.transform = `translateX(${(1 - percentage) * 100}%)`;
        sidebarStyle.WebkitTransform = `translateX(${(1 - percentage) * 100}%)`;
      } else {
        sidebarStyle.transform = `translateX(-${(1 - percentage) * 100}%)`;
        sidebarStyle.WebkitTransform = `translateX(-${
          (1 - percentage) * 100
        }%)`;
      }

      overlayStyle.opacity = percentage;
      overlayStyle.visibility = "visible";
    } else if (this.props.docked) {
      if (this.state.sidebarWidth !== 0) {
        sidebarStyle.transform = "translateX(0%)";
        sidebarStyle.WebkitTransform = "translateX(0%)";
      }

      this.props.pullRight
        ? (contentStyle.right = `${this.state.sidebarWidth}px`)
        : (contentStyle.left = `${this.state.sidebarWidth}px`);
    } else if (this.props.open) {
      sidebarStyle.transform = "translateX(0%)";
      sidebarStyle.WebkitTransform = "translateX(0%)";
      overlayStyle.opacity = 1;
      overlayStyle.visibility = "visible";
    }

    if (isTouching || !this.props.transitions) {
      sidebarStyle.transition = "none";
      sidebarStyle.WebkitTransition = "none";
      contentStyle.transition = "none";
      overlayStyle.transition = "none";
    }

    if (useTouch) {
      if (this.props.open) {
        rootProps.onTouchStart = this.onTouchStart;
        rootProps.onTouchMove = this.onTouchMove;
        rootProps.onTouchEnd = this.onTouchEnd;
        rootProps.onTouchCancel = this.onTouchEnd;
        rootProps.onScroll = this.onScroll;
      } else {
        const dragHandleStyle = {
          ...defaultStyles.dragHandle,
          ...this.props.styles.dragHandle,
        };
        dragHandleStyle.width = this.props.touchHandleWidth;

        this.props.pullRight
          ? (dragHandleStyle.right = 0)
          : (dragHandleStyle.left = 0);

        dragHandle = (
          <div
            style={dragHandleStyle}
            onTouchStart={this.onTouchStart}
            onTouchMove={this.onTouchMove}
            onTouchEnd={this.onTouchEnd}
            onTouchCancel={this.onTouchEnd}
          />
        );
      }
    }

    return (
      <div {...rootProps}>
        <div
          className={this.props.sidebarClassName}
          style={sidebarStyle}
          ref={this.saveSidebarRef}
          id={this.props.sidebarId}
        >
          {this.props.children}
        </div>
        <div
          className={this.props.overlayClassName}
          style={overlayStyle}
          onClick={this.overlayClicked}
          id={this.props.overlayId}
        />
        <div
          className={this.props.contentClassName}
          style={contentStyle}
          id={this.props.contentId}
        >
          {dragHandle}
          {this.props.sidebar}
        </div>
      </div>
    );
  }
}

Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
  styles: PropTypes.shape({
    root: PropTypes.object,
    sidebar: PropTypes.object,
    content: PropTypes.object,
    overlay: PropTypes.object,
    dragHandle: PropTypes.object,
  }),
  rootClassName: PropTypes.string,
  sidebarClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  overlayClassName: PropTypes.string,
  sidebar: PropTypes.node.isRequired,
  docked: PropTypes.bool,
  open: PropTypes.bool,
  transitions: PropTypes.bool,
  touch: PropTypes.bool,
  touchHandleWidth: PropTypes.number,
  pullRight: PropTypes.bool,
  shadow: PropTypes.bool,
  dragToggleDistance: PropTypes.number,
  onSetOpen: PropTypes.func,
  defaultSidebarWidth: PropTypes.number,
  rootId: PropTypes.string,
  sidebarId: PropTypes.string,
  contentId: PropTypes.string,
  overlayId: PropTypes.string,
};

Sidebar.defaultProps = {
  docked: false,
  open: false,
  transitions: true,
  touch: false,
  touchHandleWidth: 20,
  pullRight: false,
  shadow: false,
  dragToggleDistance: 30,
  onSetOpen: () => {},
  styles: {},
  defaultSidebarWidth: 0,
};

export default Sidebar;
