interface ServiceCardProps {
  title: string
  description: string
  gradient: string
}

export function ServiceCard({ title, description, gradient }: ServiceCardProps) {
  return (
    <div className="group p-6 rounded-lg bg-gray-900/30 backdrop-blur-sm border border-gray-700/30 hover:border-purple-500/40 transition-all duration-300">
      <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent group-hover:from-purple-200 group-hover:to-blue-200 transition-all duration-300">
        {title}
      </h3>
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{description}</p>
    </div>
  )
}
