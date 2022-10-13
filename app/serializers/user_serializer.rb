class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :nickname, :bio, :pp
end
