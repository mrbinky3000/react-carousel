import Slider from './Slider';
import WithStore from '../Store/WithStore';

export default WithStore(Slider, state => ({
  currentSlide: state.currentSlide,
  disableAnimation: state.disableAnimation,
  hasMasterSpinner: state.hasMasterSpinner,
  interval: state.interval,
  isPlaying: state.isPlaying,
  lockOnWindowScroll: state.lockOnWindowScroll,
  masterSpinnerFinished: state.masterSpinnerFinished,
  naturalSlideHeight: state.naturalSlideHeight,
  naturalSlideWidth: state.naturalSlideWidth,
  orientation: state.orientation,
  playDirection: state.playDirection,
  slideSize: state.slideSize,
  slideTraySize: state.slideTraySize,
  step: state.step,
  totalSlides: state.totalSlides,
  touchEnabled: state.touchEnabled,
  dragEnabled: state.dragEnabled,
  visibleSlides: state.visibleSlides,
}));
