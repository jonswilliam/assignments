import React from "react"

export default function BadgeList({ badges }) {
    
    return (
        <div>
            {badges.map(formData => (
                <div className="badge--container">
                    <div className="badge--header">
                        Badge:
                    </div>
                    <div>
                        Name: {formData.firstName} {formData.lastName}
                    </div>
                    <div>
                        Phone Number: {formData.phone.replace(
                        /(\d{3})(\d{3})(\d{4})/,
                        "$1-$2-$3"
                        )}
                    </div>
                    <div>
                        Place of Birth: {formData.birthPlace}
                    </div>
                    <div>
                        Favorite Food: {formData.favFood}
                    </div>
                    <div>
                        Email: {formData.email}
                    </div>
                    <div className="comments">
                        {formData.comments}
                    </div>
                </div>
            ))}
        </div>
    )
}