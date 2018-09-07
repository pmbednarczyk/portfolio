import React from 'react';
import autobind from 'autobind-decorator';
import Transition from 'react-transition-group/Transition';

class Slides extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentImage: 0,
		};
	}

	@autobind
	nextSlide() {
		const { children: slides } = this.props;
		const { currentImage } = this.state;

		this.setState({
			currentImage: (currentImage + slides.length + 1) % slides.length,
		});
	}

	@autobind
	prevSlide() {
		const { children: slides } = this.props;
		const { currentImage } = this.state;

		this.setState({
			currentImage: (currentImage + slides.length - 1) % slides.length,
		});
	}

	render() {
		const { children: slides } = this.props;

		return (
      <div className="slidesContainer">
        <span className="arrow prevSlide" onClick={this.prevSlide}>PREV</span>
        <span className="arrow nextSlide" onClick={this.nextSlide}>NEXT</span>
				{slides.map((slide, i) => {
					return <Transition in={this.state.currentImage === i} timeout={0} key={i}>
						{state => (
              <div className={`sliderTransition sliderTransition-${state}`} >
								{slide}
              </div>
						)}
          </Transition>

				})}
      </div>
		);
	}
}

export default Slides;
