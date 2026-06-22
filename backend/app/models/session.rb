class Session < ApplicationRecord
    validates :nim, presence: true
    validates :sessiontoken, presence: true
    validates :expiresat, presence: true
    def self.tokenvalidate(x)
        puts "this is x",x
        session=Session.find_by(sessiontoken: x)
        if session&&session.expiresat>Time.current
            puts "session valid", session.nim
            return {nim:session.nim}
        else 
            return false
        end
    end

    def self.authenticatelogin(x)
        user=User.find_by(nim: x[:nim])
        if user&.authenticate(x[:password])
            token=SecureRandom.hex(64)
            session=Session.new(
                nim: user.nim,
                sessiontoken: token,
                expiresat: 30.days.from_now
            )
            if session.save
                puts "new session created"
                return {nim: user.nim,token: token, name:user.name,semester:user.semester}
            end
        else 
            return nil
        end
    end

    def self.expiredcheck(x)
        x>Time.current
    end
end