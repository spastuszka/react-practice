export function LinkComponent({
  text = 'http://zrozumreact.pl',
  shouldOpenNewTab,
}) {
  const target = shouldOpenNewTab ? '_blank' : '_self'
  const rel = shouldOpenNewTab ? 'noopener noreferrer' : undefined
  return (
    <a href={text} target={target} rel={rel}>
      {text}
    </a>
  )
}
