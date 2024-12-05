import { Newsletter } from './Newsletter'

interface PageLayoutProps {
  children: React.ReactNode
  dict: any
  withNewsletter?: boolean
}

export function PageLayout({ children, dict, withNewsletter = true }: PageLayoutProps) {
  return (
    <div className="bg-brand-white">
      {children}
      {withNewsletter && (
        <div className="bg-brand-blue">
          <Newsletter dict={dict.newsletter} />
        </div>
      )}
    </div>
  )
} 