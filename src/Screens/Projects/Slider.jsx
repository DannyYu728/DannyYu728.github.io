import React, { Component } from "react";
import Slide from "../../Components/Slide";
import Info from "../../Components/Info/Info";
import SliderControl from "../../Components/SliderControl";
import "./Styles.scss";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      heading: "Example Slider",
    };
  }

  handlePreviousClick = () => {
    const previous = this.state.current - 1;

    this.setState({
      current: previous < 0 ? this.props.slides.length - 1 : previous,
    });
  };

  handleNextClick = () => {
    const next = this.state.current + 1;

    this.setState({
      current: next === this.props.slides.length ? 0 : next,
    });
  };

  handleSlideClick = (index) => {
    if (this.state.current !== index) {
      this.setState({
        current: index,
      });
    }
  };

  renderSlide = (slides, current) => {
    return slides.map((slide) => {
      return (
        <Slide
          key={slide.index}
          slide={slide}
          current={current}
          handleSlideClick={this.handleSlideClick}
          navigate={this.props.navigate}
        />
      );
    });
  };

  render() {
    const { current, heading } = this.state;
    const { slides } = this.props;
    const headingId = `slider-heading__${heading
      .replace(/\s+/g, "-")
      .toLowerCase()}`;
    const wrapperTransform = {
      transform: `translateX(-${current * (100 / slides.length)}%)`,
    };
    return (
      <div className="projects">
        <Info />
        <div className="slider" aria-labelledby={headingId}>
          <ul className="slider__wrapper" style={wrapperTransform}>
            <h3 id={headingId} className="visuallyhidden">
              {heading}
            </h3>
            {this.renderSlide(slides, current)}
          </ul>
          <div className="slider__controls">
            <SliderControl
              type="previous"
              title="Go to previous slide"
              handleClick={this.handlePreviousClick}
            />
            <SliderControl
              type="next"
              title="Go to next slide"
              handleClick={this.handleNextClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
