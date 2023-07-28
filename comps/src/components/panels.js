import classnames from 'classnames';

function panels({children, className, ...rest}) {
    const classes = classnames(
        'boarder rounded p-3 shadow bg-white w-full',
        className
        );
  return (
    <div {...rest} className={classes}>{children}</div>
  )
}

export default panels