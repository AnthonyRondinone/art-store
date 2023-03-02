class User < ApplicationRecord
    validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP } 
    validates :role, presence: true

    def is_valid_email? email
        !!(email =~URI::MailTo::EMAIL_REGEXP)
    end

end
