class User < ApplicationRecord
    has_secure_password
    validates :nim, presence: true, uniqueness: true,numericality: true
    validates :name, presence: true

    def self.adduser(x)
        flag=User.new(nim:x[:nim],name:x[:name],password:x[:password])
        if flag.save
            return flag
        end
        return nil
    end
end
