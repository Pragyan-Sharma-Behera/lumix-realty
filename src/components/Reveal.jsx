import { useReveal } from '../hooks/useReveal';

export default function Reveal({ as: Tag = 'div', delay = 0, children, ...rest }) {
  const { ref, props } = useReveal({ delay });
  return (
    <Tag ref={ref} {...props} {...rest} style={{ ...props.style, ...rest.style }}>
      {children}
    </Tag>
  );
}
