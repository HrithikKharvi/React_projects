import './CoverComponent.css';

function CoverComponent(props) {
  const classes = 'card ' + props.className;
  
  return <div className={classes}>{props.children}</div>;
}

export default CoverComponent;