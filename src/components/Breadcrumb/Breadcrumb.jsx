import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Breadcrumb.css'

function Breadcrumb({ items }) {
  // items = [{ label: 'Home', path: '/' }, { label: 'Services', path: '/#services' }, { label: 'AI Consulting', path: null }]

  useEffect(() => {
    // Inject BreadcrumbList JSON-LD schema
    const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.label,
        ...(item.path && { "item": `https://aireadypdx.com${item.path === '/' ? '' : item.path}` })
      }))
    }

    // Create or update script element
    let scriptEl = document.getElementById('breadcrumb-schema')
    if (!scriptEl) {
      scriptEl = document.createElement('script')
      scriptEl.id = 'breadcrumb-schema'
      scriptEl.type = 'application/ld+json'
      document.head.appendChild(scriptEl)
    }
    scriptEl.textContent = JSON.stringify(schema)

    return () => {
      // Cleanup on unmount
      const el = document.getElementById('breadcrumb-schema')
      if (el) el.remove()
    }
  }, [items])

  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      <div className="container">
        <ol className="breadcrumb-list">
          {items.map((item, index) => (
            <li key={index} className="breadcrumb-item">
              {item.path ? (
                <Link to={item.path}>{item.label}</Link>
              ) : (
                <span aria-current="page">{item.label}</span>
              )}
              {index < items.length - 1 && (
                <span className="breadcrumb-separator" aria-hidden="true">&gt;</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string
    })
  ).isRequired
}

export default Breadcrumb
