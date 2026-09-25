interface HeaderProps {
  name: string
}

function Header({ name }: HeaderProps) {
  return (
    <header>
      <a href="#top">{name}</a>
      <nav>
        <a href="#projects">Projects</a> 
        <a href="#experience">Experience</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

export default Header
