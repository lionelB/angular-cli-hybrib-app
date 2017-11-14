export const phoneAnim = () => ({
  addClass: animateIn,
  removeClass: animateOut
});

type JQueryAnim = JQuery & {
  animate: (prop: any, done: Function) => void,
  stop: () => void
};

function animateIn(element: JQueryAnim, className: string, done: Function, options: angular.animate.IAnimationOptions) {
  if (className !== 'selected') {
    return;
  }

  element.css({
    display: 'block',
    position: 'absolute',
    top: 500,
    left: 0
  }).animate({
    top: 0
  }, done);

  return function animateInEnd(wasCanceled: boolean) {
    if (wasCanceled) {
      element.stop();
    }
  };
}

function animateOut(element: JQueryAnim, className: string, done: Function, options: angular.animate.IAnimationOptions) {
  if (className !== 'selected') {
    return;
  }

  element.css({
    position: 'absolute',
    top: 0,
    left: 0
  }).animate({
    top: -500
  }, done);

  return function animateOutEnd(wasCanceled: boolean) {
    if (wasCanceled) {
      element.stop();
    }
  };
}
