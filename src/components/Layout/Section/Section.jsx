import './Section.css'

function Section({children, bg}) {

    const bgClass = (bg === 'dark') ? 'section--dark' : ''

    return <section className={`section ${bgClass}`}>
        <div className="section__inner container">
            {children}
        </div>
    </section>
}

export default Section
