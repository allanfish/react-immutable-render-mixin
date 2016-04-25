import shallowEqualImmutable from './shallowEqualImmutable';

export default function shouldComponentUpdate(nextProps, nextState, nextContext) {
  return !shallowEqualImmutable(this.props, nextProps) || !shallowEqualImmutable(this.state, nextState) || !shallowEqualImmutable(this.context, nextContext);
}
