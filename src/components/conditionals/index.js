export const If = props => {
  return props.condition ? props.children : null;
}

export const Unless = props => !props.condition ? props.children : null;