import Image from 'next/image'

interface TeamMemberProps {
  member: {
    name: string
    nickname?: string
    role: string
    image: string
    bio: string[]
    education: string[]
    expertise?: string[]
  }
}

export default function TeamMember({ member }: TeamMemberProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
        <div className="lg:col-span-1">
          <div className="relative h-64 w-full rounded-lg overflow-hidden mb-6">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-1">
              {member.name}
              {member.nickname && (
                <span className="text-lg font-normal text-gray-600 ml-2">
                  ({member.nickname})
                </span>
              )}
            </h2>
            <p className="text-lg text-primary-600 font-medium mb-4">
              {member.role}
            </p>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="space-y-4">
            {member.bio.map((paragraph, index) => (
              <p key={index} className="text-gray-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {member.expertise && (
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Key Areas of Expertise
              </h3>
              <ul className="space-y-3">
                {member.expertise.map((item, index) => (
                  <li key={index} className="text-gray-600 leading-relaxed flex items-start">
                    <span className="text-primary-500 mr-2 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Education
            </h3>
            <ul className="space-y-2">
              {member.education.map((edu, index) => (
                <li key={index} className="text-gray-600 leading-relaxed flex items-start">
                  <span className="text-primary-500 mr-2 mt-1">•</span>
                  <span>{edu}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

