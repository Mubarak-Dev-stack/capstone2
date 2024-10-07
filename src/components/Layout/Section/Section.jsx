import './Section.css'

function Section({children, wide = false}) {

    const wideClass = (wide) ? 'section--wide' : ''

    return <section className={`section ${wideClass}`}>
        <div className="section__inner">
            {children}
        </div>
    </section>
}

export default Section
